#!/usr/bin/env python3
"""Independently recompute stored RC02 leading principal determinants.

Uses only Python integers and fraction-free Bareiss elimination. It consumes
the matrix and determinant arrays in the saved constant-replay artifact; it
does not recreate the matrix from interval/source inputs.
"""

import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
REPLAY = ROOT / "experiments/results/rc02-243-100-even-m10240-constant-replay.json"


def leading_determinants(matrix):
    """Return all leading principal determinants by exact Bareiss elimination."""
    a = [row[:] for row in matrix]
    n = len(a)
    previous = 1
    out = []
    for k in range(n):
        pivot = a[k][k]
        out.append(pivot)
        if k == n - 1:
            break
        if pivot == 0:
            raise ArithmeticError(f"zero leading pivot at index {k}")
        for i in range(k + 1, n):
            for j in range(k + 1, n):
                numerator = a[i][j] * pivot - a[i][k] * a[k][j]
                quotient, remainder = divmod(numerator, previous)
                if remainder:
                    raise ArithmeticError(
                        f"nonexact Bareiss division at pivot {k}, entry ({i},{j})"
                    )
                a[i][j] = quotient
        for i in range(k + 1, n):
            a[i][k] = 0
        previous = pivot
    return out


def main():
    data = json.loads(REPLAY.read_text())
    assert data["h"] == "243/100" and data["odd"] is False
    assert len(data["results"]) == 8
    total = 0
    for index, result in enumerate(data["results"]):
        matrix = [[int(value) for value in row] for row in result["lowerInteger"]]
        reported = [int(value) for value in result["principalMinors"]]
        n = len(matrix)
        assert n == 42 and all(len(row) == n for row in matrix)
        assert all(matrix[i][j] == matrix[j][i] for i in range(n) for j in range(i))
        calculated = leading_determinants(matrix)
        if calculated != reported:
            mismatch = next(i for i, (x, y) in enumerate(zip(calculated, reported)) if x != y)
            raise AssertionError(
                f"allocation {index}: determinant {mismatch + 1} differs "
                f"(calculated {calculated[mismatch]}, saved {reported[mismatch]})"
            )
        positive = sum(value > 0 for value in calculated)
        assert result["positiveMinors"] == positive == n
        assert result["certified"] is True
        total += n
        print(
            f"allocation {index}: symmetric {n}x{n}; "
            f"{positive}/{n} leading minors exactly match and are positive"
        )
    print(f"verified {total} exact leading-minor values across {len(data['results'])} allocations")


if __name__ == "__main__":
    main()
