#!/usr/bin/env python3
"""Independent Python reconstruction of the stored odd TC03 lower matrix."""
import json
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
BASE = ROOT / "experiments/results/tc03-49-20-odd-t832-"


def ceil_div(a, b):
    assert b > 0
    return -((-a) // b)


def trunc_half(a):
    return (abs(a) // 2) * (1 if a >= 0 else -1)


def bareiss(matrix):
    a = [row[:] for row in matrix]
    n, prev, pivots = len(a), 1, []
    for k in range(n):
        pivot = a[k][k]
        if pivot <= 0:
            return pivots, (k, pivot)
        pivots.append(str(pivot))
        for i in range(k + 1, n):
            for j in range(i, n):
                numerator = pivot * a[i][j] - a[i][k] * a[k][j]
                q, rem = divmod(numerator, prev)
                if rem:
                    raise ArithmeticError((k, i, j, rem))
                a[i][j] = a[j][i] = q
        prev = pivot
    return pivots, None


def main():
    chunks = [json.loads(Path(str(BASE) + f"finite-{89 + 1024 * i}-{min(1111 + 1024 * i, 12287)}.json").read_text())
              for i in range(12)]
    aggregate = json.loads(Path(str(BASE) + "finite-total.json").read_text())
    assert (aggregate["start"], aggregate["end"], aggregate["count"]) == (89, 12287, 6100)
    assert len(chunks) == 12 and chunks[0]["start"] == 89
    summed = [[[0, 0] for _ in range(44)] for _ in range(44)]
    next_start = 89
    count = 0
    for chunk in chunks:
        assert chunk["start"] == next_start
        assert chunk["count"] == (chunk["end"] - chunk["start"]) // 2 + 1
        assert chunk["scale"] == aggregate["scale"]
        for i in range(44):
            for j in range(44):
                for k in range(2):
                    summed[i][j][k] += int(chunk["finite"][i][j][k])
        next_start = chunk["end"] + 2
        count += chunk["count"]
    assert next_start == 12289 and count == 6100
    assert summed == [[[int(x) for x in z] for z in line] for line in aggregate["finite"]]

    raw = json.loads(subprocess.check_output(["node", "experiments/tc03-assemble-odd.js"], cwd=ROOT))
    row = raw["rows"][0]
    proposal = json.loads(Path(str(BASE) + "generalized-allocation.json").read_text())
    factors = proposal["factors"]
    cert = json.loads(Path(str(BASE) + "exact-certificate.json").read_text())
    assert (row["h"], row["odd"], row["M"], row["T"], len(row["ks"])) == ("49/20", True, 12288, 832, 44)
    q = int(raw["scale"])
    old = list(map(int, row["tailShares"]))
    d0 = int(row["tailShareDenominator"])
    ratios = [int(z[1]) for z in factors["ratios"]]
    weights = list(map(int, proposal["weights"]))
    den = int(proposal["denominator"])
    total_tail = sum(weights[7:])
    n = 44
    comp = row["componentIntervals"]
    keys = ["leading", "second", "third", "fourth", "fifth", "sixth", "seventh"]
    energy = [int(comp["upper"][i][i][1]) for i in range(n)]
    diag = [ceil_div(ceil_div(int(row["diagnostics"][i]["eighthUpper"]) * total_tail,
                              weights[7 + i]) * ratios[7], q) for i in range(n)]

    def build(refined):
        shares = weights[:7] + [total_tail] if refined else old
        denominator = den if refined else d0
        lohi = [[None] * n for _ in range(n)]
        for i in range(n):
            for j in range(n):
                lo = int(comp["upper"][i][j][0]) - int(comp["finite"][i][j][1])
                hi = int(comp["upper"][i][j][1]) - int(comp["finite"][i][j][0])
                for k, key in enumerate(keys):
                    a, b = map(int, comp[key][i][j])
                    if refined:
                        a = (a * ratios[k]) // q
                        b = ceil_div(b * ratios[k], q)
                    lo -= ceil_div(b * old[k] * denominator, shares[k] * d0)
                    hi -= (a * old[k] * denominator) // (shares[k] * d0)
                if i == j:
                    e = diag[i] if refined else int(comp["eighth"][i])
                    loss = ceil_div(e * old[7] * denominator, shares[7] * d0)
                    lo -= loss
                    hi -= loss
                lohi[i][j] = [lo, hi]
        centers = [[0] * n for _ in range(n)]
        rad = [[0] * n for _ in range(n)]
        for i in range(n):
            for j in range(i + 1):
                lo = max(lohi[i][j][0], lohi[j][i][0])
                hi = min(lohi[i][j][1], lohi[j][i][1])
                assert lo <= hi
                mid = trunc_half(lo + hi)
                radius = max(mid - lo, hi - mid)
                centers[i][j] = centers[j][i] = mid
                rad[i][j] = rad[j][i] = radius
        ds = list(map(int, row["radiusWeights"]))
        row_rad = [sum(ceil_div(rad[i][j] * ds[j], ds[i]) for j in range(n)) for i in range(n)]
        for i in range(n):
            centers[i][i] -= row_rad[i]
        return centers, row_rad

    baseline, baseline_radii = build(False)
    assert [[str(x) for x in line] for line in baseline] == row["lowerInteger"]
    assert list(map(str, baseline_radii)) == [str(int(d["matrixRadius"])) for d in row["diagnostics"]]
    matrix, radii = build(True)
    assert [[str(x) for x in line] for line in matrix] == cert["lowerInteger"]
    assert list(map(str, radii)) == cert["radii"]
    pivots, fail = bareiss(matrix)
    assert fail is None and pivots == cert["principalMinors"]

    grid, margin = int(cert["marginDenominator"]), int(cert["marginNumerator"])
    def grid_replay(m):
        adjusted = [[grid * matrix[i][j] - (m * energy[i] if i == j else 0) for j in range(n)]
                    for i in range(n)]
        return bareiss(adjusted)
    pass_pivots, pass_fail = grid_replay(margin)
    next_pivots, next_fail = grid_replay(margin + 1)
    assert pass_fail is None and len(pass_pivots) == n and next_fail is not None
    assert raw["rows"][0]["componentIntervals"]["finite"] == aggregate["finite"]
    print("odd finite chunks: 12 disjoint intervals, 6100 modes; aggregate matches exactly")
    print("odd matrix reconstructed: all 1936 entries and 44 radii match")
    print("exact Bareiss replay: 44/44 positive minors; all saved pivots match")
    print(f"fixed-energy margin {margin}/{grid} passes; next grid fails at pivot {next_fail[0]+1}")


if __name__ == "__main__":
    main()
