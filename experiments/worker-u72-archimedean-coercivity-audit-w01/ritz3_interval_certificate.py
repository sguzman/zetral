#!/usr/bin/env python3
"""Exact isolation of the smallest 3x3 Mellin generalized Ritz value.

Only fractions are used. The generalized eigenvalues of (A,M) are isolated by
Sylvester's criterion at a lower endpoint and the determinant sign at an upper
endpoint. Machin's formula and the positive atanh series supply the scalar pi
and log(2) lower bounds for the resulting Ritz cap.
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


def determinant3(a: list[list[F]]) -> F:
    return (a[0][0] * (a[1][1] * a[2][2] - a[1][2] * a[2][1])
            - a[0][1] * (a[1][0] * a[2][2] - a[1][2] * a[2][0])
            + a[0][2] * (a[1][0] * a[2][1] - a[1][1] * a[2][0]))


def atan_bounds(x: F, terms: int = 24) -> tuple[F, F]:
    partial = sum(((-1) ** k * x ** (2 * k + 1) / (2 * k + 1)
                   for k in range(terms)), F(0))
    next_term = x ** (2 * terms + 1) / (2 * terms + 1)
    return (partial, partial + next_term) if terms % 2 == 0 else (partial - next_term, partial)


def main() -> None:
    n = 3
    M = [[gram(i, j) for j in range(n)] for i in range(n)]
    A = [[M[i][j] * rational_moment(i, j) for j in range(n)]
         for i in range(n)]

    # M is a positive Gram matrix of three linearly independent functions.
    assert M[0][0] > 0
    assert M[0][0] * M[1][1] - M[0][1] ** 2 > 0
    assert determinant3(M) > 0

    lower = F(2498100869, 10**9)
    upper = F(249810087, 10**8)
    B_lo = [[A[i][j] - lower * M[i][j] for j in range(n)] for i in range(n)]
    B_hi = [[A[i][j] - upper * M[i][j] for j in range(n)] for i in range(n)]
    leading1 = B_lo[0][0]
    leading2 = B_lo[0][0] * B_lo[1][1] - B_lo[0][1] ** 2
    det_lo, det_hi = determinant3(B_lo), determinant3(B_hi)
    assert leading1 > 0 and leading2 > 0 and det_lo > 0
    assert det_hi < 0
    # Sylvester gives A-lower*M positive definite, so all generalized
    # eigenvalues exceed lower. The negative determinant at upper forces at
    # least one eigenvalue below upper. Hence the smallest lies in (lower,upper).

    pi_a_lo, _ = atan_bounds(F(1, 5))
    _, pi_b_hi = atan_bounds(F(1, 239))
    pi_lo = 16 * pi_a_lo - 4 * pi_b_hi
    log2_lo = 2 * sum((F(1, 3) ** (2 * k + 1) / (2 * k + 1)
                       for k in range(100)), F(0))
    assert pi_lo > F(31415926535, 10**10)
    assert log2_lo > F(6931471805, 10**10)
    ritz_cap = upper - pi_lo / 2 - log2_lo
    assert ritz_cap < F(234158, 10**6)

    print("Exact generalized Ritz interval:")
    print(f"  lambda_min(A,M) in ({float(lower):.12f}, {float(upper):.12f})")
    print(f"  det(A-lower*M) > 0: {det_lo > 0}")
    print(f"  det(A-upper*M) < 0: {det_hi < 0}")
    print(f"  mu_1 <= rho_3 < {float(ritz_cap):.12f} < 0.234158")


if __name__ == "__main__":
    main()
