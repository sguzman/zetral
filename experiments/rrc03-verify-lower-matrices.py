#!/usr/bin/env python3
"""Independent exact-rational LDL and basis determinant checks for RRC outputs."""
import json
import sys
from fractions import Fraction


def bareiss_determinant(matrix):
    a = [list(map(int, row)) for row in matrix]
    n = len(a)
    sign, previous = 1, 1
    for k in range(n - 1):
        if a[k][k] == 0:
            pivot = next((i for i in range(k + 1, n) if a[i][k]), None)
            if pivot is None:
                return 0
            a[k], a[pivot] = a[pivot], a[k]
            sign = -sign
        current = a[k][k]
        for i in range(k + 1, n):
            for j in range(k + 1, n):
                numerator = current * a[i][j] - a[i][k] * a[k][j]
                if numerator % previous:
                    raise ArithmeticError("nonexact Bareiss division")
                a[i][j] = numerator // previous
        for i in range(k + 1, n):
            a[i][k] = 0
        previous = current
    return sign * a[-1][-1]


def exact_ldl_pivots(matrix):
    a = [[Fraction(int(x)) for x in row] for row in matrix]
    pivots = []
    for k in range(len(a)):
        pivot = a[k][k]
        pivots.append(pivot)
        if pivot == 0:
            return pivots
        for i in range(k + 1, len(a)):
            for j in range(i, len(a)):
                a[i][j] = a[j][i] = a[i][j] - a[i][k] * a[j][k] / pivot
    return pivots


def check(path):
    data = json.load(open(path, encoding="utf-8"))
    for row in data["rows"]:
        matrix = [[int(x) for x in line] for line in row["lowerInteger"]]
        if any(matrix[i][j] != matrix[j][i] for i in range(len(matrix)) for j in range(len(matrix))):
            raise ArithmeticError("lower matrix is not symmetric")
        determinant = bareiss_determinant(row["basis"])
        if determinant == 0:
            raise ArithmeticError("stored rational basis is singular")
        pivots = exact_ldl_pivots(matrix)
        status = "positive definite" if len(pivots) == len(matrix) and all(p > 0 for p in pivots) else "not certified positive"
        print(f"{path}: h={row['h']} T={row['T']} odd={row['odd']} basis-det!=0; {status}")
        if status == "positive definite":
            print("  exact LDL pivots / Q:", ", ".join(f"{float(p / int(data['scale'])):.6g}" for p in pivots))
        else:
            bad = next((i for i, p in enumerate(pivots) if p <= 0), None)
            if bad is not None:
                print(f"  first nonpositive exact LDL pivot: {bad + 1}, {float(pivots[bad] / int(data['scale'])):.9g} / Q")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        raise SystemExit("usage: python3 experiments/rrc03-verify-lower-matrices.py result.json [...]")
    for filename in sys.argv[1:]:
        check(filename)
