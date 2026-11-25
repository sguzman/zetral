#!/usr/bin/env python3
"""Exact replay of canonical FDA02 h=23/10 even/odd stored matrices."""
import json
from pathlib import Path


def det_bareiss(matrix):
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
                value = a[i][j]*pivot - a[i][k]*a[k][j]
                assert value % previous == 0
                a[i][j] = value // previous
        for i in range(k + 1, n):
            a[i][k] = 0
        previous = pivot
    return sign*a[-1][-1]


def leading_determinants(matrix):
    a = [list(map(int, row)) for row in matrix]
    n, previous = len(a), 1
    out = []
    for k in range(n):
        pivot = a[k][k]
        out.append(pivot)
        for i in range(k+1, n):
            for j in range(i, n):
                value = pivot*a[i][j] - a[i][k]*a[k][j]
                assert value % previous == 0
                a[i][j] = a[j][i] = value // previous
        previous = pivot
    return out


base = Path(__file__).with_name("results")
for parity, filename in [(False, "fda02-23-10-even.json"), (True, "fda02-23-10-odd.json")]:
    doc = json.loads((base/filename).read_text())
    assert int(doc["scale"]) == 10**66 and len(doc["rows"]) == 1
    row = doc["rows"][0]
    assert row["h"] == "23/10" and row["odd"] is parity and row["certified"] is True
    assert int(row["J"]) == 4096 and len(row["lowerInteger"]) == len(row["basis"]) == 32
    L = row["lowerInteger"]
    assert all(len(r) == 32 for r in L)
    assert all(int(L[i][j]) == int(L[j][i]) for i in range(32) for j in range(32))
    calculated = leading_determinants(L)
    saved = list(map(int, row["principalMinors"]))
    assert len(saved) == 32 and calculated == saved and all(x > 0 for x in calculated)
    B = row["basis"]
    assert all(len(r) == 32 for r in B)
    basis_det = det_bareiss(B)
    assert basis_det != 0
    shares = list(map(int, row["tailShares"]))
    den = int(row["tailShareDenominator"])
    assert all(x > 0 for x in shares) and sum(shares) == den
    print("PASS {}: all 32 leading determinants exactly match and are positive; basis det nonzero ({} digits); shares sum to one".format(
        "odd" if parity else "even", len(str(abs(basis_det)))))
print("SCOPE: archived integer matrices/bases/shares only; outward component generation and original-form normalization unchecked")
