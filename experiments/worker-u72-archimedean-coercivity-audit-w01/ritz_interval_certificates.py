#!/usr/bin/env python3
"""Exact isolation of 3-, 6-, and 12-profile Mellin generalized Ritz values.

Only fractions are used. The generalized eigenvalues of (A,M) are isolated by
exact LDL^T inertia at rational endpoints. Machin's formula and the positive
atanh series supply lower bounds for pi and log(2).
"""
from fractions import Fraction as F


def harmonic(n: int) -> F:
    return sum((F(1, k) for k in range(1, n + 1)), F(0))


def gram(i: int, j: int) -> F:
    # M_ij/pi for g_i=(1-x^2)^(i+1/4).
    value = F(1, 2)
    for k in range(i + j):
        value *= F(2 * k + 3, 2 * k + 4)
    return value


def rational_moment(i: int, j: int) -> F:
    m = i + j
    odd_sum = sum((F(2, 2 * k + 1) for k in range(m + 1)), F(0))
    qi = sum((F(4, 4 * k + 1) for k in range(i + 1)), F(0))
    qj = sum((F(4, 4 * k + 1) for k in range(j + 1)), F(0))
    return -odd_sum + (qi + qj + harmonic(m + 1)) / 2


def ldl_pivots(matrix: list[list[F]]) -> list[F]:
    """Diagonal pivots in exact LDL^T, requiring nonzero leading minors."""
    n = len(matrix)
    lower = [[F(0) for _ in range(n)] for _ in range(n)]
    pivots: list[F] = []
    for i in range(n):
        pivot = matrix[i][i] - sum((lower[i][k] ** 2 * pivots[k]
                                    for k in range(i)), F(0))
        assert pivot != 0
        pivots.append(pivot)
        for j in range(i + 1, n):
            lower[j][i] = (matrix[j][i] - sum((lower[j][k] * lower[i][k]
                                               * pivots[k] for k in range(i)), F(0))) / pivot
    return pivots


def atan_bounds(x: F, terms: int = 24) -> tuple[F, F]:
    partial = sum(((-1) ** k * x ** (2 * k + 1) / (2 * k + 1)
                   for k in range(terms)), F(0))
    next_term = x ** (2 * terms + 1) / (2 * terms + 1)
    return (partial, partial + next_term) if terms % 2 == 0 else (partial - next_term, partial)


def main() -> None:
    cases = [
        (3, F(2498100869, 10**9), F(249810087, 10**8)),
        (6, F(2497505224, 10**9), F(2497505225, 10**9)),
        (12, F(2497265582, 10**9), F(2497265583, 10**9)),
    ]
    bounds: dict[int, tuple[F, F]] = {}
    for n, lower, upper in cases:
        M = [[gram(i, j) for j in range(n)] for i in range(n)]
        A = [[M[i][j] * rational_moment(i, j) for j in range(n)]
             for i in range(n)]
        # M is a Gram matrix of linearly independent functions and is positive.
        assert all(p > 0 for p in ldl_pivots(M))
        B_lo = [[A[i][j] - lower * M[i][j] for j in range(n)] for i in range(n)]
        B_hi = [[A[i][j] - upper * M[i][j] for j in range(n)] for i in range(n)]
        pivots_lo, pivots_hi = ldl_pivots(B_lo), ldl_pivots(B_hi)
        assert all(p > 0 for p in pivots_lo)  # no Ritz eigenvalue <= lower
        assert sum(p < 0 for p in pivots_hi) == 1  # exactly one eigenvalue < upper
        bounds[n] = (lower, upper)
        print(f"N={n}: lambda_min(A,M) in ({float(lower):.12f}, {float(upper):.12f})")
        print(f"  LDL signs at lower: {[1 if p > 0 else -1 for p in pivots_lo]}")
        print(f"  LDL signs at upper: {[1 if p > 0 else -1 for p in pivots_hi]}")

    pi_a_lo, _ = atan_bounds(F(1, 5))
    _, pi_b_hi = atan_bounds(F(1, 239))
    pi_lo = 16 * pi_a_lo - 4 * pi_b_hi
    log2_lo = 2 * sum((F(1, 3) ** (2 * k + 1) / (2 * k + 1)
                       for k in range(100)), F(0))
    assert pi_lo > F(31415926535, 10**10)
    assert log2_lo > F(6931471805, 10**10)
    for n, (_, upper) in bounds.items():
        cap = upper - pi_lo / 2 - log2_lo
        print(f"  rho_{n} < {float(cap):.12f}")
    assert bounds[3][1] - pi_lo / 2 - log2_lo < F(234158, 10**6)
    assert bounds[6][1] - pi_lo / 2 - log2_lo < F(233562, 10**6)
    assert bounds[12][1] - pi_lo / 2 - log2_lo < F(233323, 10**6)


if __name__ == "__main__":
    main()
