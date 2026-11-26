#!/usr/bin/env python3
"""Exact N=32 Jacobi-basis trial cap for Suzuki's limiting log form.

The Jacobi mass matrix, transformed log-moment matrix, trial quotient, and
log(2)/pi endpoint enclosure are all checked with Fraction arithmetic.
"""
from fractions import Fraction as F
from math import factorial

N = 32


def generalized_binomial(a: F, k: int) -> F:
    value = F(1)
    for j in range(k):
        value *= a - j
    return value / factorial(k)


def jacobi_column(n: int) -> list[F]:
    """Coefficients in y of P_n^(-1/2,1/2)(2y-1)."""
    out = [F(0) for _ in range(n + 1)]
    alpha, beta = F(-1, 2), F(1, 2)
    for m in range(n + 1):
        weight = generalized_binomial(F(n) + alpha, m) * generalized_binomial(F(n) + beta, n - m)
        power = n - m
        for q in range(power + 1):
            out[m + q] += weight * (-1) ** (power - q) * F(factorial(power), factorial(q) * factorial(power - q))
    return out


def harmonic(n: int) -> F:
    return sum((F(1, k) for k in range(1, n + 1)), F(0))


def mass_monomial(i: int, j: int) -> F:
    value = F(1, 2)
    for k in range(i + j):
        value *= F(2 * k + 3, 2 * k + 4)
    return value


def rational_log_moment(i: int, j: int) -> F:
    m = i + j
    odd = sum((F(2, 2 * k + 1) for k in range(m + 1)), F(0))
    qi = sum((F(4, 4 * k + 1) for k in range(i + 1)), F(0))
    qj = sum((F(4, 4 * k + 1) for k in range(j + 1)), F(0))
    return -odd + (qi + qj + harmonic(m + 1)) / 2


def matmul(a: list[list[F]], b: list[list[F]]) -> list[list[F]]:
    n, inner, columns = len(a), len(b), len(b[0])
    return [[sum((a[i][k] * b[k][j] for k in range(inner)
                  if a[i][k] and b[k][j]), F(0))
             for j in range(columns)] for i in range(n)]


def atan_bounds(x: F, terms: int = 24) -> tuple[F, F]:
    partial = sum(((-1) ** k * x ** (2 * k + 1) / (2 * k + 1)
                   for k in range(terms)), F(0))
    next_term = x ** (2 * terms + 1) / (2 * terms + 1)
    return (partial, partial + next_term) if terms % 2 == 0 else (partial - next_term, partial)


def main() -> None:
    transform = [[F(0) for _ in range(N)] for _ in range(N)]
    for j in range(N):
        for i, value in enumerate(jacobi_column(j)):
            transform[i][j] = value
    transform_t = [list(row) for row in zip(*transform)]

    mass = [[mass_monomial(i, j) for j in range(N)] for i in range(N)]
    log_rat = [[mass[i][j] * rational_log_moment(i, j) for j in range(N)]
               for i in range(N)]
    jacobi_mass = matmul(matmul(transform_t, mass), transform)
    jacobi_log_rat = matmul(matmul(transform_t, log_rat), transform)

    # Exact Jacobi orthogonality and norm recurrence.
    expected_norm = F(1, 2)
    for j in range(N):
        assert jacobi_mass[j][j] == expected_norm
        assert all(jacobi_mass[i][j] == 0 for i in range(N) if i != j)
        expected_norm *= F(2 * j + 1, 2 * j + 2) ** 2

    # The coefficients are a fixed rational trial in the Jacobi basis.
    coeffs = [F(1), F(59871, 1000000), F(34279, 1000000), F(-14509, 500000),
              F(2433, 100000), F(-20653, 1000000), F(17839, 1000000), F(-15651, 1000000),
              F(3479, 250000), F(-391, 31250), F(2839, 250000), F(-10389, 1000000),
              F(9571, 1000000), F(-8869, 1000000), F(4131, 500000), F(-1933, 250000),
              F(7267, 1000000), F(-1371, 200000), F(6489, 1000000), F(-3081, 500000),
              F(1467, 250000), F(-1121, 200000), F(5367, 1000000), F(-2577, 500000),
              F(2481, 500000), F(-599, 125000), F(2321, 500000), F(-903, 200000),
              F(4413, 1000000), F(-4349, 1000000), F(2177, 500000), F(-921, 200000)]
    numerator = sum((coeffs[i] * jacobi_log_rat[i][j] * coeffs[j]
                     for i in range(N) for j in range(N)), F(0))
    denominator = sum((coeffs[i] * jacobi_mass[i][i] * coeffs[i]
                       for i in range(N)), F(0))
    rational_part = numerator / denominator
    assert rational_part == F(
        196196714032285517948050865060141618826621687958495787410335726794301955729888925587,
        78567436777240445738424356195706009453018824409727396669146518341887094453121911050,
    )

    pi_a_lo, _ = atan_bounds(F(1, 5))
    _, pi_b_hi = atan_bounds(F(1, 239))
    pi_lo = 16 * pi_a_lo - 4 * pi_b_hi
    log2_lo = 2 * sum((F(1, 3) ** (2 * k + 1) / (2 * k + 1)
                       for k in range(100)), F(0))
    assert pi_lo > F(31415926535, 10**10)
    assert log2_lo > F(6931471805, 10**10)
    upper = rational_part - pi_lo / 2 - log2_lo
    assert upper < F(233233, 1_000_000)

    print("N=32 exact Jacobi-basis trial certificate:")
    print("  mass Gram diagonal: verified exactly")
    print(f"  rational Rayleigh part: {rational_part}")
    print(f"  mu_1 upper from the trial: {float(upper):.12f} < 0.233233")


if __name__ == "__main__":
    main()
