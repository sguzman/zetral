#!/usr/bin/env python3
"""Independent integer reconstruction/replay of the LXIX even transformed matrix.

Rebuilds congruences and allocation rounding from raw stored intervals, but
uses the saved recomputed transformed eighth-tail coefficient in coordinate 1.
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CERT = ROOT / "experiments/results/tc02-49-20-even-m12288-t832-transformed-certificate.json"
RAW_PREFIX = ROOT / "experiments/results/tc02-49-20-even-m12288-t832-raw-part"


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


def ceil_div(a, b):
    assert b > 0
    return -((-a) // b)


def congruence(interval_matrix, transform):
    n = len(transform)
    result = [[None] * n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            lo = hi = 0
            for u, x in transform[i]:
                for v, y in transform[j]:
                    a, b = map(int, interval_matrix[u][v])
                    z = x * y
                    lo += z * (a if z >= 0 else b)
                    hi += z * (b if z >= 0 else a)
            result[i][j] = [lo, hi]
    return result


def main():
    cert = json.loads(CERT.read_text())
    raw_text = "".join((Path(str(RAW_PREFIX) + f"{i}.txt")).read_text() for i in range(1, 7))
    raw = json.loads(raw_text)
    row = raw["rows"][0]
    factors = json.loads((ROOT / "experiments/results/tc02-49-20-even-m12288-t832-constant-factors.json").read_text())
    assert len(raw_text) == 3_204_173
    assert (row["h"], row["odd"], row["M"], row["T"], len(row["ks"])) == ("49/20", False, 12288, 832, 44)
    assert cert["transform"]["coefficients"] == ["-390867", "100000"]
    assert int(cert["transform"]["determinant"]) == 100000
    assert cert["n"] == len(row["ks"]) == 44
    assert cert["positiveMinors"] == 44
    assert len(cert["weights"]) == 51 and sum(map(int, cert["weights"])) == int(cert["denominator"]) == 10**12
    assert all(int(x) > 0 for x in cert["energyUpper"])

    q = int(raw["scale"])
    d0 = int(row["tailShareDenominator"])
    old = list(map(int, row["tailShares"]))
    ratios = [int(pair[1]) for pair in factors["ratios"]]
    transform = [[(i, 1)] if i != 1 else [(0, -390867), (1, 100000)] for i in range(44)]
    keys = ["upper", "finite", "leading", "second", "third", "fourth", "fifth", "sixth", "seventh"]
    components = {key: congruence(row["componentIntervals"][key], transform) for key in keys}
    energies = [components["upper"][i][i][1] for i in range(44)]
    assert list(map(str, energies)) == cert["energyUpper"]

    # Recreate the coordinatewise eighth allowance and every outward rounded
    # subtraction/radius adjustment used to make the saved integer lower matrix.
    tail_eighth = [int(d["eighthUpper"]) for d in row["diagnostics"]]
    tail_eighth[1] = int(cert["changedTail"]["eighthUpper"])
    weights = list(map(int, cert["weights"]))
    total = int(cert["denominator"])
    remainder_weight = sum(weights[7:])
    diagonal = [ceil_div(ceil_div(e * remainder_weight, weights[7 + i]) * ratios[7], q)
                for i, e in enumerate(tail_eighth)]

    lower_intervals = [[None] * 44 for _ in range(44)]
    radii = [[0] * 44 for _ in range(44)]
    for i in range(44):
        for j in range(44):
            a, b = components["upper"][i][j]
            c, d = components["finite"][i][j]
            lo, hi = a - d, b - c
            for k, key in enumerate(keys[2:]):
                x, y = components[key][i][j]
                loss_lo = ceil_div(ceil_div(y * ratios[k], q) * old[k] * total, weights[k] * d0)
                loss_hi = ((x * ratios[k]) // q * old[k] * total) // (weights[k] * d0)
                lo -= loss_lo
                hi -= loss_hi
            if i == j:
                tail_loss = ceil_div(diagonal[i] * old[7] * total, remainder_weight * d0)
                lo -= tail_loss
                hi -= tail_loss
            lower_intervals[i][j] = [lo, hi]

    centers = [[0] * 44 for _ in range(44)]
    interval_radii = [[0] * 44 for _ in range(44)]
    for i in range(44):
        for j in range(i + 1):
            lo = max(lower_intervals[i][j][0], lower_intervals[j][i][0])
            hi = min(lower_intervals[i][j][1], lower_intervals[j][i][1])
            assert lo <= hi
            s = lo + hi
            mid = (abs(s) // 2) * (1 if s >= 0 else -1)  # JavaScript BigInt division truncates toward zero
            rad = max(mid - lo, hi - mid)
            centers[i][j] = centers[j][i] = mid
            interval_radii[i][j] = interval_radii[j][i] = rad
    # The source uses floor sqrt of 10^80 / sqrt(upper-energy endpoint).
    from math import isqrt
    scale = [10**80 // isqrt(e) for e in energies]
    adjusted = [row[:] for row in centers]
    row_radii = [sum(ceil_div(interval_radii[i][j] * scale[j], scale[i]) for j in range(44))
                 for i in range(44)]
    for i in range(44):
        adjusted[i][i] -= row_radii[i]
    matrix = adjusted
    assert [[str(x) for x in line] for line in matrix] == cert["lowerInteger"]

    assert len(matrix) == 44 and all(len(line) == 44 for line in matrix)
    assert all(matrix[i][j] == matrix[j][i] for i in range(44) for j in range(44))
    pivots, fail = bareiss(matrix)
    assert fail is None and pivots == cert["principalMinors"]

    grid = int(cert["marginDenominator"])
    energies = list(map(int, cert["energyUpper"]))
    margin = int(cert["marginNumerator"])
    def grid_replay(m):
        adjusted = [[grid * matrix[i][j] - (m * energies[i] if i == j else 0)
                     for j in range(44)] for i in range(44)]
        return bareiss(adjusted)
    pass_pivots, pass_fail = grid_replay(margin)
    next_pivots, next_fail = grid_replay(margin + 1)
    assert pass_fail is None and len(pass_pivots) == 44
    assert next_fail is not None
    assert cert["nextGridFails"] is True
    print("independent exact pivots: 44/44 positive; saved pivot strings match")
    print(f"fixed-energy grid: {margin}/{grid} passes; {margin+1}/{grid} fails at pivot {next_fail[0]+1}")
    print(f"first pivot: {pivots[0]}; final pivot digits: {len(pivots[-1])}")


if __name__ == "__main__":
    main()
