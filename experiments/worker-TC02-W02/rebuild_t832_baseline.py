"""Independently rebuild the stored T832 baseline lower matrix.

Run from the repository root:
    python3 experiments/worker-TC02-W02/rebuild_t832_baseline.py

This checks stored interval-to-matrix arithmetic, not the analytic source bounds.
"""
import hashlib
import json
from pathlib import Path


P = Path("experiments/results")
PARTS = [P / f"tc02-49-20-even-m12288-t832-raw-part{i}.txt" for i in range(1, 7)]


def ceildiv(a, b):
    return -((-a) // b)


def trunc2(a):
    return a // 2 if a >= 0 else -((-a) // 2)


def bareiss_prefix(matrix):
    b = [row[:] for row in matrix]
    previous = 1
    prefix = []
    for k in range(len(b)):
        pivot = b[k][k]
        prefix.append(str(pivot))
        if pivot <= 0:
            return prefix
        for i in range(k + 1, len(b)):
            for j in range(i, len(b)):
                numerator = pivot * b[i][j] - b[i][k] * b[k][j]
                assert numerator % previous == 0
                b[i][j] = b[j][i] = numerator // previous
            b[i][k] = b[k][i] = 0
        previous = pivot
    return prefix


def main():
    part_bytes = [p.read_bytes() for p in PARTS]
    raw_text = b"".join(part_bytes).decode("utf-8")
    raw = json.loads(raw_text)
    row = raw["rows"][0]
    n = len(row["ks"])
    components = row["componentIntervals"]
    old = list(map(int, row["tailShares"]))
    denominator = int(row["tailShareDenominator"])
    weights = list(map(int, row["radiusWeights"]))
    assert raw["scale"] == str(10**66)
    assert (row["h"], row["odd"], row["J"], row["KEM"], row["M"], row["T"], n) == (
        "49/20", False, 128, 20, 12288, 832, 44
    )
    assert sum(old) == denominator and len(weights) == n

    rank_keys = ["leading", "second", "third", "fourth", "fifth", "sixth", "seventh"]

    def interval(i, j):
        u0, u1 = map(int, components["upper"][i][j])
        f0, f1 = map(int, components["finite"][i][j])
        lo, hi = u0 - f1, u1 - f0
        for k, key in enumerate(rank_keys):
            a, b = map(int, components[key][i][j])
            # Baseline allocation: selected shares equal the stored shares.
            p, q = old[k] * denominator, old[k] * denominator
            lo -= ceildiv(b * p, q)
            hi -= (a * p) // q
        if i == j:
            allowance = int(components["eighth"][i])
            exact = ceildiv(allowance * old[7] * denominator, old[7] * denominator)
            lo -= exact
            hi -= exact
        return lo, hi

    lower = [[0] * n for _ in range(n)]
    radii = [[0] * n for _ in range(n)]
    for i in range(n):
        for j in range(i + 1):
            a, b = interval(i, j), interval(j, i)
            lo, hi = max(a[0], b[0]), min(a[1], b[1])
            assert lo <= hi
            midpoint = trunc2(lo + hi)
            lower[i][j] = lower[j][i] = midpoint
            radii[i][j] = radii[j][i] = max(midpoint - lo, hi - midpoint)

    weighted_radii = [
        sum(ceildiv(radii[i][j] * weights[j], weights[i]) for j in range(n))
        for i in range(n)
    ]
    reconstructed = [
        [lower[i][j] - (weighted_radii[i] if i == j else 0) for j in range(n)]
        for i in range(n)
    ]
    assert all(
        str(reconstructed[i][j]) == row["lowerInteger"][i][j]
        for i in range(n)
        for j in range(n)
    )
    assert all(str(weighted_radii[i]) == row["diagnostics"][i]["matrixRadius"] for i in range(n))
    prefix = bareiss_prefix(reconstructed)
    assert prefix == row["principalMinors"]
    assert len(prefix) == 2 and int(prefix[0]) > 0 and int(prefix[1]) < 0

    print("part bytes:", [len(x) for x in part_bytes])
    print("part git-blob sha1:", [hashlib.sha1(b"blob " + str(len(x)).encode() + b"\0" + x).hexdigest() for x in part_bytes])
    print("combined JSON characters:", len(raw_text))
    print("baseline entries reconstructed:", n * n)
    print("weighted row radii matched:", len(weighted_radii))
    print("leading determinant prefix:", prefix)


if __name__ == "__main__":
    main()
