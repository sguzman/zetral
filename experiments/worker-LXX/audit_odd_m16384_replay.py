#!/usr/bin/env python3
"""Independent exact Bareiss audit of the staged odd M=16384 replay."""
import json
from pathlib import Path

INPUT = Path(__file__).resolve().parents[1] / "results/lxx-123-50-odd-t832-m16384-replay.json"


def leading_minors(matrix):
    a = [row[:] for row in matrix]
    n = len(a)
    previous = 1
    values = []
    for k in range(n):
        pivot = a[k][k]
        if pivot <= 0:
            return values, (k, pivot)
        values.append(pivot)
        for i in range(k + 1, n):
            for j in range(i, n):
                numerator = pivot * a[i][j] - a[i][k] * a[j][k]
                assert numerator % previous == 0
                a[i][j] = a[j][i] = numerator // previous
        for i in range(k + 1, n):
            a[i][k] = a[k][i] = 0
        previous = pivot
    return values, None


def main():
    outer = json.loads(INPUT.read_text())
    replay = outer["replay"]
    matrix = [[int(x) for x in row] for row in replay["lowerInteger"]]
    energy = list(map(int, replay["energyUpper"]))
    n = len(matrix)
    assert n == 45 and all(len(row) == n for row in matrix)
    assert all(matrix[i][j] == matrix[j][i] for i in range(n) for j in range(n))

    minors, failed = leading_minors(matrix)
    assert failed is None and len(minors) == 45
    assert list(map(str, minors)) == replay["principalMinors"]
    assert replay["positiveMinors"] == 45 and replay["failedMinor"] is None

    grid = 1_000_000
    at_zero = [[grid * matrix[i][j] for j in range(n)] for i in range(n)]
    at_one = [[grid * matrix[i][j] - (energy[i] if i == j else 0)
               for j in range(n)] for i in range(n)]
    zero_minors, zero_failed = leading_minors(at_zero)
    one_minors, one_failed = leading_minors(at_one)
    assert zero_failed is None and len(zero_minors) == 45
    assert one_failed is not None
    assert replay["marginNumerator"] == "0" and replay["nextGridFails"] is True
    print("exact independent leading-minor replay: 45/45 positive")
    print("at normalized grid 1/1000000, first failure is pivot", one_failed[0] + 1)


if __name__ == "__main__":
    main()
