#!/usr/bin/env python3
"""Exact N=96 Jacobi-basis trial cap for Suzuki's limiting log form.

The Jacobi mass matrix, transformed log-moment matrix, trial quotient, and
log(2)/pi endpoint enclosure are all checked with Fraction arithmetic.
"""
from fractions import Fraction as F
from math import factorial

N = 96


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
    coeffs = [F(1, 1), F(1197, 20000), F(34297, 1000000), F(-7259, 250000), F(6087, 250000), F(-20671, 1000000), F(3571, 200000), F(-7833, 500000), F(1741, 125000), F(-12521, 1000000), F(5681, 500000), F(-10391, 1000000), F(299, 31250), F(-4431, 500000), F(8249, 1000000), F(-3857, 500000), F(7241, 1000000), F(-3411, 500000), F(6447, 1000000), F(-611, 100000), F(1161, 200000), F(-5529, 1000000), F(5277, 1000000), F(-2523, 500000), F(967, 200000), F(-29, 6250), F(4459, 1000000), F(-1073, 250000), F(4137, 1000000), F(-499, 125000), F(241, 62500), F(-373, 100000), F(3611, 1000000), F(-7, 2000), F(679, 200000), F(-103, 31250), F(1601, 500000), F(-1557, 500000), F(303, 100000), F(-2951, 1000000), F(23, 8000), F(-701, 250000), F(171, 62500), F(-2671, 1000000), F(2609, 1000000), F(-2549, 1000000), F(2493, 1000000), F(-2439, 1000000), F(2387, 1000000), F(-2337, 1000000), F(229, 100000), F(-561, 250000), F(11, 5000), F(-1079, 500000), F(1059, 500000), F(-2079, 1000000), F(2041, 1000000), F(-401, 200000), F(197, 100000), F(-1937, 1000000), F(119, 62500), F(-1873, 1000000), F(1843, 1000000), F(-907, 500000), F(893, 500000), F(-1759, 1000000), F(1733, 1000000), F(-427, 250000), F(1683, 1000000), F(-83, 50000), F(1637, 1000000), F(-323, 200000), F(1593, 1000000), F(-1573, 1000000), F(1553, 1000000), F(-767, 500000), F(379, 250000), F(-749, 500000), F(1481, 1000000), F(-293, 200000), F(1449, 1000000), F(-717, 500000), F(71, 50000), F(-1407, 1000000), F(279, 200000), F(-1383, 1000000), F(1373, 1000000), F(-1363, 1000000), F(271, 200000), F(-1349, 1000000), F(269, 200000), F(-21, 15625), F(337, 250000), F(-17, 12500), F(1389, 1000000), F(-1483, 1000000)]
    numerator = sum((coeffs[i] * jacobi_log_rat[i][j] * coeffs[j]
                     for i in range(N) for j in range(N)), F(0))
    denominator = sum((coeffs[i] * jacobi_mass[i][i] * coeffs[i]
                       for i in range(N)), F(0))
    rational_part = numerator / denominator
    assert rational_part == F(159536277765199650791337346483255660251417220166973298914197255450897186917547183506800583740146293244363092611345933780927859708120920922778340684445687066087550694098899698857607655371064137784617931944266774417496177414091258153329108627221,
        63887083423107059879715544190036824865861458667002890851351529657206453412547037984670051471639707878698862340942976751921392956427337731828483811952264136537415553776733040479600644083497229928841854896158282643643746263994394810744397316250)

    pi_a_lo, _ = atan_bounds(F(1, 5))
    _, pi_b_hi = atan_bounds(F(1, 239))
    pi_lo = 16 * pi_a_lo - 4 * pi_b_hi
    log2_lo = 2 * sum((F(1, 3) ** (2 * k + 1) / (2 * k + 1)
                       for k in range(100)), F(0))
    assert pi_lo > F(31415926535, 10**10)
    assert log2_lo > F(6931471805, 10**10)
    upper = rational_part - pi_lo / 2 - log2_lo
    assert upper < F(233217, 1_000_000)

    print("N=96 exact Jacobi-basis trial certificate:")
    print("  mass Gram diagonal: verified exactly")
    print(f"  rational Rayleigh part: {rational_part}")
    print(f"  mu_1 upper from the trial: {float(upper):.12f} < 0.233217")


if __name__ == "__main__":
    main()
