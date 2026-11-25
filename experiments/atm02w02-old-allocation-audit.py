#!/usr/bin/env python3
"""Exact replay of the ATM02 h=9/4 even old-allocation comparator."""
import json
from pathlib import Path


def determinant(matrix):
    """Fraction-free Bareiss determinant over arbitrary-size integers."""
    a = [list(map(int, row)) for row in matrix]
    n = len(a)
    if any(len(row) != n for row in a):
        raise ValueError("matrix must be square")
    sign, previous = 1, 1
    for k in range(n - 1):
        if a[k][k] == 0:
            pivot_row = next((i for i in range(k + 1, n) if a[i][k]), None)
            if pivot_row is None:
                return 0
            a[k], a[pivot_row] = a[pivot_row], a[k]
            sign = -sign
        pivot = a[k][k]
        for i in range(k + 1, n):
            for j in range(k + 1, n):
                numerator = a[i][j] * pivot - a[i][k] * a[k][j]
                assert numerator % previous == 0
                a[i][j] = numerator // previous
        for i in range(k + 1, n):
            a[i][k] = 0
        previous = pivot
    return sign * a[-1][-1]


def leading_determinants(matrix):
    return [determinant([row[:n] for row in matrix[:n]]) for n in range(1, len(matrix) + 1)]


root = Path(__file__).with_name("results")
old = json.loads((root / "atm02-9-4-even-old.json").read_text())
new = json.loads((root / "atm02-9-4-even.json").read_text())
assert int(old["scale"]) == int(new["scale"]) == 10**54
old, new = old["rows"][0], new["rows"][0]
for key in ("h", "odd", "J", "M", "S", "primeNormUpper", "witnessWindow", "ks", "ts", "T", "basis", "trial"):
    assert old[key] == new[key], f"unmatched run parameter: {key}"
assert old["h"] == "9/4" and old["odd"] is False
assert len(old["lowerInteger"]) == len(new["lowerInteger"]) == 30
old_dets = leading_determinants(old["lowerInteger"])
new_dets = leading_determinants(new["lowerInteger"])
saved_old = list(map(int, old["principalMinors"]))
saved_new = list(map(int, new["principalMinors"]))
assert saved_old == old_dets[:len(saved_old)]
assert len(saved_old) == 7  # archived run includes the first failed leading minor
assert len(saved_new) == 30 and saved_new == new_dets
first_nonpositive = next(i for i, d in enumerate(old_dets, 1) if d <= 0)
assert first_nonpositive == 7 and old_dets[6] < 0
assert all(d > 0 for d in new_dets)
for row in (old, new):
    shares = list(map(int, row["tailShares"]))
    denominator = int(row["tailShareDenominator"])
    assert all(share > 0 for share in shares) and sum(shares) == denominator
assert old["certified"] is False and new["certified"] is True
print("PASS: old-allocation saved leading minors match exact replay through its recorded prefix")
print("RESULT: old allocation has six positive leading minors; the seventh is negative")
print("PASS: adaptive-allocation 30 leading minors match saved exact values and are positive")
print("PASS: finite basis, trial matrix, window, grid, witness norm bound, and dimensions are matched")
print("PASS: both runs use positive rational tail shares summing exactly to one")
print("SCOPE: verifies stored integer comparison only; does not rerun interval generation")
