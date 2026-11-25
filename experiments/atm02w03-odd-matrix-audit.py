#!/usr/bin/env python3
"""Exact replay of the archived ATM02 h=9/4 odd stored matrix and basis."""
import json
from pathlib import Path


def determinant(matrix):
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


raw = Path(__file__).with_name("results") / "atm02-9-4-odd.json"
doc = json.loads(raw.read_text())
assert int(doc["scale"]) == 10**54 and len(doc["rows"]) == 1
row = doc["rows"][0]
assert row["h"] == "9/4" and row["odd"] is True and row["certified"] is True
L = row["lowerInteger"]
assert len(L) == 30 and all(len(r) == 30 for r in L)
dets = leading_determinants(L)
saved = list(map(int, row["principalMinors"]))
assert len(saved) == 30 and dets == saved and all(x > 0 for x in dets)
B = row["basis"]
assert len(B) == 30 and all(len(r) == 30 for r in B)
detB = determinant(B)
assert detB != 0
shares = list(map(int, row["tailShares"]))
denominator = int(row["tailShareDenominator"])
assert all(x > 0 for x in shares) and sum(shares) == denominator
print("PASS: all 30 odd-matrix leading principal determinants match saved exact integers and are positive")
print("PASS: exact 30x30 trial basis determinant is nonzero ({} decimal digits)".format(len(str(abs(detB)))))
print("PASS: all tail shares are positive and sum to {}/{}".format(sum(shares), denominator))
print("SCOPE: verifies archived integer artifacts only; outward interval generation unchecked")
