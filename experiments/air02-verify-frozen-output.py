#!/usr/bin/env python3
"""Independent exact-integer checks for frozen AIR02 replay outputs."""
import json
import sys
from fractions import Fraction


def determinant_bareiss(matrix):
    a = [list(map(int, row)) for row in matrix]
    n, sign, previous = len(a), 1, 1
    for k in range(n - 1):
        if a[k][k] == 0:
            pivot = next((i for i in range(k + 1, n) if a[i][k]), None)
            if pivot is None:
                return 0
            a[k], a[pivot] = a[pivot], a[k]
            sign = -sign
        p = a[k][k]
        for i in range(k + 1, n):
            for j in range(k + 1, n):
                z = p * a[i][j] - a[i][k] * a[k][j]
                if z % previous:
                    raise ArithmeticError("nonexact Bareiss division")
                a[i][j] = z // previous
        for i in range(k + 1, n):
            a[i][k] = 0
        previous = p
    return sign * a[-1][-1]


def exact_ldl(matrix):
    a = [[Fraction(int(x)) for x in row] for row in matrix]
    pivots = []
    for k in range(len(a)):
        p = a[k][k]
        pivots.append(p)
        if p == 0:
            break
        for i in range(k + 1, len(a)):
            for j in range(i, len(a)):
                a[i][j] = a[j][i] = a[i][j] - a[i][k] * a[j][k] / p
    return pivots


def verify(path):
    data = json.load(open(path, encoding="utf-8"))
    q = int(data["scale"])
    for row in data["rows"]:
        n = len(row["lowerInteger"])
        matrix = [[int(x) for x in line] for line in row["lowerInteger"]]
        if any(matrix[i][j] != matrix[j][i] for i in range(n) for j in range(n)):
            raise ArithmeticError("lower matrix is not symmetric")
        basis_det = determinant_bareiss(row["basis"])
        if basis_det == 0:
            raise ArithmeticError("saved basis is singular")
        if int(row["highWeight"][0]) <= 0:
            raise ArithmeticError("high comparison weight is not positive")
        pivots = exact_ldl(matrix)
        positive = len(pivots) == n and all(p > 0 for p in pivots)
        if positive != bool(row["certified"]):
            raise ArithmeticError("saved certification flag disagrees with exact LDL")
        tag = "odd" if row["odd"] else "even"
        print(f"{path}: h={row['h']} {tag}, exact positive={positive}, basis nonsingular")
        if positive:
            print("  first and last LDL pivots / Q:", float(pivots[0] / q), float(pivots[-1] / q))


if __name__ == "__main__":
    if len(sys.argv) < 2:
        raise SystemExit("usage: python3 experiments/air02-verify-frozen-output.py result.json [...]")
    for name in sys.argv[1:]:
        verify(name)
