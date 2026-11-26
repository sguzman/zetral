#!/usr/bin/env python3
"""Independent exact reconstruction of the stored LXX even baseline failure."""
import glob
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]


def ceil_div(a, b):
    assert b > 0
    return -((-a) // b)


def trunc_half(a):
    return (abs(a) // 2) * (1 if a >= 0 else -1)


def bareiss_until_failure(matrix):
    a = [row[:] for row in matrix]
    n, previous, pivots = len(a), 1, []
    for k in range(n):
        pivot = a[k][k]
        pivots.append(str(pivot))
        if pivot <= 0:
            return pivots, k
        for i in range(k + 1, n):
            for j in range(i, n):
                numerator = pivot*a[i][j] - a[i][k]*a[k][j]
                quotient, remainder = divmod(numerator, previous)
                if remainder:
                    raise ArithmeticError((k, i, j, remainder))
                a[i][j] = a[j][i] = quotient
        previous = pivot
    return pivots, None


def main():
    root = ROOT / "experiments/results"
    parts = sorted(glob.glob(str(root / "lxx-123-50-even-t832-raw-part*.txt")))
    raw_text = "".join(Path(path).read_text() for path in parts)
    raw = json.loads(raw_text)
    row = raw["rows"][0]
    n, c = len(row["ks"]), row["componentIntervals"]
    assert len(parts) == 7 and len(raw_text) == 3354746
    assert (row["h"], row["odd"], row["J"], row["M"], row["T"], n) == ("123/50", False, 128, 12288, 832, 45)
    keys = ["leading", "second", "third", "fourth", "fifth", "sixth", "seventh"]

    lohi = [[None]*n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            lo = int(c["upper"][i][j][0]) - int(c["finite"][i][j][1])
            hi = int(c["upper"][i][j][1]) - int(c["finite"][i][j][0])
            for key in keys:
                lo -= int(c[key][i][j][1])
                hi -= int(c[key][i][j][0])
            if i == j:
                lo -= int(c["eighth"][i])
                hi -= int(c["eighth"][i])
            lohi[i][j] = [lo, hi]

    midpoint = [[0]*n for _ in range(n)]
    radius = [[0]*n for _ in range(n)]
    for i in range(n):
        for j in range(i+1):
            lo = max(lohi[i][j][0], lohi[j][i][0])
            hi = min(lohi[i][j][1], lohi[j][i][1])
            assert lo <= hi
            m = trunc_half(lo + hi)
            r = max(m-lo, hi-m)
            midpoint[i][j] = midpoint[j][i] = m
            radius[i][j] = radius[j][i] = r
    scales = list(map(int, row["radiusWeights"]))
    row_radius = [sum(ceil_div(radius[i][j]*scales[j], scales[i]) for j in range(n))
                  for i in range(n)]
    for i in range(n):
        midpoint[i][i] -= row_radius[i]

    assert [[str(x) for x in line] for line in midpoint] == row["lowerInteger"]
    assert list(map(str, row_radius)) == [str(int(d["matrixRadius"])) for d in row["diagnostics"]]
    pivots, failure = bareiss_until_failure(midpoint)
    assert pivots == row["principalMinors"] and failure == 2
    summary = json.loads((root / "lxx-123-50-even-t832-baseline-summary.json").read_text())
    assert summary["principalMinors"] == pivots and summary["positiveMinors"] == 2
    assert summary["firstNonpositive"] == 3
    energy_positive = sum(int(c["upper"][i][i][0]) > 0 for i in range(n))
    assert energy_positive == 45
    print("baseline matrix: all 2025 entries and 45 weighted radii reconstruct exactly")
    print("positive upper-energy diagonals: 45/45")
    print(f"Bareiss leading minors: first two positive; third={pivots[2]} (nonpositive)")


if __name__ == "__main__":
    main()
