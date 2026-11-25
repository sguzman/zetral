#!/usr/bin/env python3
"""Independent exact-integer audit of the archived ATM02 even result."""
import json
from pathlib import Path


def bareiss_determinant(a):
    """Return exact determinant by fraction-free Gaussian elimination."""
    a = [list(map(int, row)) for row in a]
    n = len(a)
    if any(len(row) != n for row in a):
        raise ValueError("matrix must be square")
    sign = 1
    prev = 1
    for k in range(n - 1):
        if a[k][k] == 0:
            swap = next((i for i in range(k + 1, n) if a[i][k]), None)
            if swap is None:
                return 0
            a[k], a[swap] = a[swap], a[k]
            sign = -sign
        pivot = a[k][k]
        for i in range(k + 1, n):
            for j in range(k + 1, n):
                num = a[i][j] * pivot - a[i][k] * a[k][j]
                assert num % prev == 0
                a[i][j] = num // prev
        for i in range(k + 1, n):
            a[i][k] = 0
        prev = pivot
    return sign * a[-1][-1]


def leading_determinants(a):
    """Fraction-free elimination; pivots give each leading determinant."""
    a = [list(map(int, row)) for row in a]
    n = len(a)
    prev = 1
    out = []
    for k in range(n):
        pivot = a[k][k]
        out.append(pivot)
        for i in range(k + 1, n):
            for j in range(k + 1, n):
                num = a[i][j] * pivot - a[i][k] * a[k][j]
                assert num % prev == 0
                a[i][j] = num // prev
        for i in range(k + 1, n):
            a[i][k] = 0
        prev = pivot
    return out


p = Path(__file__).with_name("results") / "atm02-9-4-even.json"
doc = json.loads(p.read_text())
assert int(doc["scale"]) == 10**54
assert len(doc["rows"]) == 1
row = doc["rows"][0]
assert row["h"] == "9/4" and row["odd"] is False and row["certified"] is True
L = row["lowerInteger"]
assert len(L) == 30 and all(len(r) == 30 for r in L)
computed = leading_determinants(L)
stored = list(map(int, row["principalMinors"]))
assert len(stored) == 30
assert computed == stored, next((i for i, (x, y) in enumerate(zip(computed, stored), 1) if x != y), None)
assert all(x > 0 for x in computed)
B = row["basis"]
assert len(B) == 30 and all(len(r) == 30 for r in B)
detB = bareiss_determinant(B)
assert detB != 0
shares = list(map(int, row["tailShares"]))
den = int(row["tailShareDenominator"])
assert all(x > 0 for x in shares) and sum(shares) == den
print("PASS: all 30 leading principal determinants match saved exact integers and are positive")
print("PASS: 30x30 basis determinant is nonzero (digit count {})".format(len(str(abs(detB)))))
print("PASS: tail shares are positive and sum to {}/{}".format(sum(shares), den))
print("SCOPE: replayed stored integer matrix and basis only; no interval generation or spectral conclusion audited")
