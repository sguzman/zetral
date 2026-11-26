#!/usr/bin/env python3
"""Exact rational inertia audit of the stored four-direction LXX replay."""
import json
from fractions import Fraction
from pathlib import Path

INPUT = Path(__file__).resolve().parents[1] / "results/lxx-123-50-even-t832-four-replay.json"


def inertia(matrix):
    a = [[Fraction(x) for x in row] for row in matrix]
    n = len(a)
    signs = []
    for k in range(n):
        pivot = next((i for i in range(k, n) if a[i][i]), None)
        if pivot is None:
            pair = next(((i, j) for i in range(k, n)
                         for j in range(i + 1, n) if a[i][j]), None)
            if pair is None:
                signs.extend([0] * (n - k))
                break
            i, j = pair
            # With zero diagonal entries, e_i <- e_i + e_j creates pivot
            # 2*a[i,j] via an invertible congruence.
            for r in range(n):
                a[r][i] += a[r][j]
            for c in range(n):
                a[i][c] += a[j][c]
            pivot = i
        if pivot != k:
            a[k], a[pivot] = a[pivot], a[k]
            for r in range(n):
                a[r][k], a[r][pivot] = a[r][pivot], a[r][k]
        q = a[k][k]
        signs.append((q > 0) - (q < 0))
        for i in range(k + 1, n):
            aik = a[i][k]
            for j in range(i, n):
                a[i][j] = a[j][i] = a[i][j] - aik * a[j][k] / q
        for i in range(k + 1, n):
            a[i][k] = a[k][i] = 0
    return signs


def main():
    outer = json.loads(INPUT.read_text())
    replay = outer["replay"]
    lower = [[int(x) for x in row] for row in replay["lowerInteger"]]
    signs = inertia(lower)
    counts = (signs.count(1), signs.count(-1), signs.count(0))
    assert len(lower) == len(signs) == 45
    assert counts == (44, 1, 0)
    assert signs[:8] == [1] * 7 + [-1]
    assert replay["positiveMinors"] == 7 and int(replay["failedMinor"]) < 0
    print("exact rational inertia (+,-,0):", counts)
    print("Schur pivot signs:", "".join("+" if s > 0 else "-" if s < 0 else "0" for s in signs))


if __name__ == "__main__":
    main()
