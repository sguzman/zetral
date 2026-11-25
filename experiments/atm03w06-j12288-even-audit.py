#!/usr/bin/env python3
"""Exact replay of ATM03's doubled-J h=23/10 even comparison."""
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


root = Path(__file__).with_name("results")
scale = 10**54
base = json.loads((root / "atm02-23-10-even.json").read_text())["rows"][0]
new = json.loads((root / "atm03-23-10-even-j12288.json").read_text())["rows"][0]
assert base["h"] == new["h"] == "23/10" and base["odd"] is new["odd"] is False
assert int(base["J"]) == 6144 and int(new["J"]) == 12288
for key in ("M", "S", "primeNormUpper", "witnessWindow", "ks", "ts", "T", "tailShares", "tailShareDenominator"):
    assert base[key] == new[key], f"comparison metadata differs: {key}"
for row in (base, new):
    L = row["lowerInteger"]
    n = len(L)
    assert n == 32 and all(len(r) == n for r in L)
    assert all(int(L[i][j]) == int(L[j][i]) for i in range(n) for j in range(n))
    dets = leading_determinants(L)
    saved = list(map(int, row["principalMinors"]))
    assert saved == dets[:len(saved)]
    assert all(d < 0 for d in dets)
    B = row["basis"]
    assert len(B) == n and all(len(r) == n for r in B)
    assert determinant(B) != 0
    shares = list(map(int, row["tailShares"]))
    assert all(x > 0 for x in shares) and sum(shares) == int(row["tailShareDenominator"])
assert new["certified"] is False and len(new["principalMinors"]) == 1
old_first = int(base["lowerInteger"][0][0])
new_first = int(new["lowerInteger"][0][0])
assert old_first == -32960096072943 and new_first == -11659252372580
print("PASS: exact replay matches each archived saved principal-minor prefix")
print("RESULT: all 32 leading determinants are negative in both stored matrices")
print("RESULT: first lower diagonal changes {} -> {} on the 10^54 lattice".format(old_first, new_first))
print("PASS: comparison metadata except J is matched; both stored bases are nonsingular and shares normalize")
print("INTERPRETATION: doubled-J run remains uncertified at its first diagonal; no actual-form negativity follows")
