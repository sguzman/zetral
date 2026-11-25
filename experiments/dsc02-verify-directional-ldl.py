#!/usr/bin/env python3
"""Independent exact-rational interval replay of the DSC02 congruence LDL."""
import json
import sys
from fractions import Fraction


def add(a, b):
    return a[0] + b[0], a[1] + b[1]


def sub(a, b):
    return a[0] - b[1], a[1] - b[0]


def mul(a, b):
    products = [x * y for x in a for y in b]
    return min(products), max(products)


def div(a, b):
    if b[0] <= 0 <= b[1]:
        raise ArithmeticError("interval divisor contains zero")
    quotients = [x / y for x in a for y in b]
    return min(quotients), max(quotients)


def scale(a, c):
    return (a[0] * c, a[1] * c) if c >= 0 else (a[1] * c, a[0] * c)


def replay(path):
    output = json.load(open(path, encoding="utf-8"))
    row = output["rows"][0]
    q = int(output["scale"])
    direction = list(map(int, row["directional"]["firstColumn"]))
    n = len(direction)
    # V has the rational near-null vector as its first column and e_1,... as
    # the remaining columns. Its determinant is the first coordinate.
    basis = [
        [direction[i]] + [int(i == j + 1) for j in range(n - 1)]
        for i in range(n)
    ]
    matrix = [
        [(Fraction(int(lo), q), Fraction(int(hi), q)) for lo, hi in line]
        for line in row["exactMatrices"]["mat"]
    ]
    transformed = []
    for a in range(n):
        line = []
        for b in range(n):
            entry = (Fraction(0), Fraction(0))
            for i in range(n):
                for j in range(n):
                    entry = add(entry, scale(matrix[i][j], basis[i][a] * basis[j][b]))
            line.append(entry)
        transformed.append(line)

    # Intersect the two enclosures of each symmetric entry.
    for i in range(n):
        for j in range(i):
            lower = max(transformed[i][j][0], transformed[j][i][0])
            upper = min(transformed[i][j][1], transformed[j][i][1])
            if lower > upper:
                raise ArithmeticError(f"incompatible symmetric enclosures at {i},{j}")
            transformed[i][j] = transformed[j][i] = (lower, upper)

    pivots = []
    for k in range(n):
        pivot = transformed[k][k]
        if pivot[0] <= 0:
            raise ArithmeticError(f"nonpositive pivot {k}: {pivot}")
        pivots.append(pivot)
        for i in range(k + 1, n):
            for j in range(i, n):
                transformed[i][j] = sub(
                    transformed[i][j],
                    div(mul(transformed[i][k], transformed[j][k]), pivot),
                )
                transformed[j][i] = transformed[i][j]
    if direction[0] == 0:
        raise ArithmeticError("congruence basis is singular")
    return direction[0], pivots


if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else (
        "experiments/results/dsc02-directional-interval-certificate.json"
    )
    determinant, pivots = replay(target)
    print(f"exact rational congruence determinant: {determinant}")
    print("strictly positive LDL pivot intervals:")
    for index, (lower, upper) in enumerate(pivots, 1):
        print(f"  {index}: [{float(lower):.17g}, {float(upper):.17g}]")
