#!/usr/bin/env python3
"""Exact audit of the archived ATM02 h=23/10 even comparison matrix."""
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


raw = Path(__file__).with_name("results") / "atm02-23-10-even.json"
doc = json.loads(raw.read_text())
assert int(doc["scale"]) == 10**54 and len(doc["rows"]) == 1
row = doc["rows"][0]
assert row["h"] == "23/10" and row["odd"] is False and row["certified"] is False
L = row["lowerInteger"]
n = len(L)
assert n == 32 and all(len(r) == n for r in L)
assert all(int(L[i][j]) == int(L[j][i]) for i in range(n) for j in range(n))
dets = leading_determinants(L)
saved = list(map(int, row["principalMinors"]))
assert saved == dets[:len(saved)] and len(saved) == 1
assert dets[0] == -32960096072943
assert all(d < 0 for d in dets)
B = row["basis"]
assert len(B) == n and all(len(r) == n for r in B)
detB = determinant(B)
assert detB != 0
shares = list(map(int, row["tailShares"]))
denominator = int(row["tailShareDenominator"])
assert all(x > 0 for x in shares) and sum(shares) == denominator
print("PASS: saved first principal minor matches exact replay")
print("RESULT: first diagonal/minor is negative: {}/10^54".format(dets[0]))
print("RESULT: all 32 independently recomputed leading determinants are negative")
print("PASS: 32x32 basis is nonsingular ({} determinant digits)".format(len(str(abs(detB)))))
print("PASS: positive tail shares sum exactly to {}/{}".format(sum(shares), denominator))
print("INTERPRETATION: the archived lower comparison fails positivity; this does not establish negativity of the underlying form")
