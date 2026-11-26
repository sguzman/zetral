#!/usr/bin/env python3
"""Exact N=48 Jacobi-basis trial cap for Suzuki's limiting log form.

The Jacobi mass matrix, transformed log-moment matrix, trial quotient, and
log(2)/pi endpoint enclosure are all checked with Fraction arithmetic.
"""
from fractions import Fraction as F
from math import factorial

N = 48


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

    # Fixed rational coefficients from the exploratory double-precision search.
    coeffs = [F(1, 1), F(59859, 1000000), F(34289, 1000000), F(-7257, 250000), F(1217, 50000), F(-20663, 1000000), F(17847, 1000000), F(-7829, 500000), F(87, 6250), F(-6257, 500000), F(2271, 200000), F(-5193, 500000), F(9563, 1000000), F(-4429, 500000), F(8247, 1000000), F(-241, 31250), F(7241, 1000000), F(-6823, 1000000), F(129, 20000), F(-3057, 500000), F(1453, 250000), F(-2769, 500000), F(661, 125000), F(-253, 50000), F(97, 20000), F(-2329, 500000), F(4481, 1000000), F(-4317, 1000000), F(833, 200000), F(-503, 125000), F(3893, 1000000), F(-3771, 1000000), F(3657, 1000000), F(-3551, 1000000), F(863, 250000), F(-21, 6250), F(1637, 500000), F(-639, 200000), F(3121, 1000000), F(-1527, 500000), F(187, 62500), F(-2937, 1000000), F(2889, 1000000), F(-2851, 1000000), F(113, 40000), F(-1409, 500000), F(713, 250000), F(-759, 250000)]
    numerator = sum((coeffs[i] * jacobi_log_rat[i][j] * coeffs[j]
                     for i in range(N) for j in range(N)), F(0))
    denominator = sum((coeffs[i] * jacobi_mass[i][i] * coeffs[i]
                       for i in range(N)), F(0))
    rational_part = numerator / denominator
    assert rational_part == F(173787580033921159120401367306635504080278304562216967632676359358793406086383149896105100535911976913265300875411423752301,
        69593914696906053431175238408519655238736717991517795153161361596453562965786489599037009552839001671591029996168093468750)

    pi_a_lo, _ = atan_bounds(F(1, 5))
    _, pi_b_hi = atan_bounds(F(1, 239))
    pi_lo = 16 * pi_a_lo - 4 * pi_b_hi
    log2_lo = 2 * sum((F(1, 3) ** (2 * k + 1) / (2 * k + 1)
                       for k in range(100)), F(0))
    assert pi_lo > F(31415926535, 10**10)
    assert log2_lo > F(6931471805, 10**10)
    upper = rational_part - pi_lo / 2 - log2_lo
    assert upper < F(233223, 1_000_000)

    print("N=48 exact Jacobi-basis trial certificate:")
    print("  mass Gram diagonal: verified exactly")
    print(f"  rational Rayleigh part: {rational_part}")
    print(f"  mu_1 upper from the trial: {float(upper):.12f} < 0.233223")


if __name__ == "__main__":
    main()
