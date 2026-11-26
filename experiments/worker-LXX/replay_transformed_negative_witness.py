#!/usr/bin/env python3
"""Derive and verify a short exact negative direction for LXX's transformed matrix."""
import glob
import json
from decimal import Decimal, getcontext
from fractions import Fraction
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PREFIX = ROOT / "experiments/results/lxx-123-50-even-t832-"


def solve_minimizer(matrix, dimension):
    # Solve H y = -b over Q for the Schur-complement minimizer of
    # [[H,b],[b^t,c]]. Exact rational Gaussian elimination, no pivots guessed.
    a = [[Fraction(matrix[i][j]) for j in range(dimension)] +
         [Fraction(-matrix[i][dimension])] for i in range(dimension)]
    for col in range(dimension):
        pivot = next((r for r in range(col, dimension) if a[r][col]), None)
        if pivot is None:
            raise ArithmeticError("leading block is singular")
        a[col], a[pivot] = a[pivot], a[col]
        p = a[col][col]
        a[col] = [x/p for x in a[col]]
        for r in range(dimension):
            if r == col:
                continue
            multiplier = a[r][col]
            a[r] = [x-multiplier*y for x, y in zip(a[r], a[col])]
    return [a[i][-1] for i in range(dimension)]


def nearest_integer(x):
    return (2*x.numerator + x.denominator) // (2*x.denominator)


def quadratic_interval(matrix, vector):
    lo = hi = 0
    for i, xi in enumerate(vector):
        for j, xj in enumerate(vector):
            a, b = map(int, matrix[i][j])
            product = xi*xj
            lo += product*(a if product >= 0 else b)
            hi += product*(b if product >= 0 else a)
    return [str(lo), str(hi)]


def main():
    parts = sorted(glob.glob(str(PREFIX) + "transformed-part*.txt"))
    transformed = json.loads("".join(Path(p).read_text() for p in parts))
    replay = json.loads(Path(str(PREFIX) + "transformed-replay.json").read_text())
    n, block = replay["n"], 7
    lower = [[int(x) for x in row] for row in replay["lowerInteger"]]
    pivots = list(map(int, replay["principalMinors"]))
    failed = int(replay["failedMinor"])
    assert replay["positiveMinors"] == block and len(pivots) == block
    assert all(x > 0 for x in pivots) and failed < 0

    y = solve_minimizer(lower, block)
    vector = [nearest_integer(z) for z in y] + [1] + [0]*(n-block-1)
    q = sum(vector[i]*lower[i][j]*vector[j] for i in range(n) for j in range(n))
    energy = quadratic_interval(transformed["componentIntervals"]["upper"], vector)
    assert q < 0 and int(energy[0]) > 0
    getcontext().prec = 18
    ratio = Decimal(q) / ((Decimal(int(energy[0])) + Decimal(int(energy[1]))) / 2)
    result = {
        "h": "123/50", "basisSupport": block+1,
        "vector": list(map(str, vector[:block+1])),
        "remainingCoordinatesZero": n-block-1,
        "leadingPositiveMinors": block,
        "eighthLeadingMinor": str(failed),
        "quadraticLowerMatrix": str(q),
        "quadraticUpperEnergyInterval": energy,
        "qLowerOverMidEnergyApprox": str(ratio),
        "scope": "Exact witness for failure of this stored transformed even comparison/allocation; not the original form or all allocations."
    }
    out = ROOT / "research/workers/LXX-TRANSFORMED-AUDIT/negative-direction.json"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(result, separators=(",", ":")))
    print("first seven transformed pivots positive; eighth is negative")
    print("exact Schur direction rounded to integers and checked against the full lower matrix")
    print("vector:", result["vector"])
    print("q_lower:", q)
    print("q_energy_interval:", energy)
    print("q_lower / energy midpoint:", ratio)


if __name__ == "__main__":
    main()
