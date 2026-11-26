#!/usr/bin/env python3
"""Exact Fraction certificate for a fixed 128-profile Jacobi trial cap.

The coefficient vector is stored separately as decimal rationals. Floating
point was used only to propose the vector; every quantity needed for the
Rayleigh upper bound is reconstructed exactly below.
"""
from fractions import Fraction as F
from math import factorial
from pathlib import Path
import json

HERE = Path(__file__).resolve().parent
COEFFS = [F(x) for x in json.loads((HERE / "jacobi_trial128_coefficients.json").read_text())]
N = len(COEFFS)
assert N == 128


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


def atan_bounds(x: F, terms: int = 24) -> tuple[F, F]:
    partial = sum(((-1) ** k * x ** (2 * k + 1) / (2 * k + 1)
                   for k in range(terms)), F(0))
    next_term = x ** (2 * terms + 1) / (2 * terms + 1)
    return (partial, partial + next_term) if terms % 2 == 0 else (partial - next_term, partial)


def main() -> None:
    # Convert the orthogonal Jacobi combination to monomials in y=1-x^2.
    monomial = [F(0) for _ in range(N)]
    for j, coefficient in enumerate(COEFFS):
        for i, value in enumerate(jacobi_column(j)):
            monomial[i] += value * coefficient

    # Exact mass and logarithmic moment factors for g_i=(1-x^2)^(i+1/4).
    mass = [F(1, 2)]
    for s in range(2 * N):
        mass.append(mass[-1] * F(2 * s + 3, 2 * s + 4))
    odd_harmonic = [F(0)]
    harmonic = [F(0)]
    for k in range(2 * N + 1):
        odd_harmonic.append(odd_harmonic[-1] + F(2, 2 * k + 1))
        harmonic.append(harmonic[-1] + F(1, k + 1))
    quarter_sum = [F(0)]
    for k in range(N):
        quarter_sum.append(quarter_sum[-1] + F(4, 4 * k + 1))

    def r(i: int, j: int) -> F:
        return -odd_harmonic[i + j + 1] + (quarter_sum[i + 1] + quarter_sum[j + 1] + harmonic[i + j + 1]) / 2

    numerator = sum((monomial[i] * monomial[j] * mass[i + j] * r(i, j)
                     for i in range(N) for j in range(N)), F(0))
    denominator = sum((monomial[i] * monomial[j] * mass[i + j]
                       for i in range(N) for j in range(N)), F(0))
    assert denominator > 0
    expected_denominator = F(0)
    orthogonal_mass = F(1, 2)
    for j, coefficient in enumerate(COEFFS):
        if j:
            orthogonal_mass *= F(2 * j - 1, 2 * j) ** 2
        expected_denominator += coefficient * coefficient * orthogonal_mass
    # Exact cross-check of the monomial conversion against Jacobi orthogonality.
    assert denominator == expected_denominator
    rational_part = numerator / denominator

    # Machin's formula and the positive atanh series provide lower endpoints.
    pi_a_lo, _ = atan_bounds(F(1, 5))
    _, pi_b_hi = atan_bounds(F(1, 239))
    pi_lo = 16 * pi_a_lo - 4 * pi_b_hi
    log2_lo = 2 * sum((F(1, 3) ** (2 * k + 1) / (2 * k + 1)
                       for k in range(100)), F(0))
    assert pi_lo > F(31415926535, 10**10)
    assert log2_lo > F(6931471805, 10**10)
    upper = rational_part - pi_lo / 2 - log2_lo
    assert upper < F(233216, 10**6)

    print("N=128 exact fixed Jacobi trial certificate:")
    print(f"  rational log-moment quotient: {float(rational_part):.15f}")
    print(f"  mu_1 upper: {float(upper):.15f} < 0.233216")
    print("  exact rational checks: positive mass; pi/log(2) lower endpoints; cap")


if __name__ == "__main__":
    main()
