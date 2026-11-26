#!/usr/bin/env python3
"""Exact rational lower bound for the second eigenvalue of the log form.

Only Fraction arithmetic is used. The analytic proof is recorded in
COERCIVITY.md; this script certifies the scalar constants at R=19/10.
"""
from fractions import Fraction as F
from math import factorial


def atan_bounds(x: F, terms: int = 40) -> tuple[F, F]:
    partial = sum(((-1) ** k * x ** (2 * k + 1) / (2 * k + 1)
                   for k in range(terms)), F(0))
    nxt = x ** (2 * terms + 1) / (2 * terms + 1)
    return (partial, partial + nxt) if terms % 2 == 0 else (partial - nxt, partial)


def pi_bounds() -> tuple[F, F]:
    a_lo, a_hi = atan_bounds(F(1, 5))
    b_lo, b_hi = atan_bounds(F(1, 239))
    return 16 * a_lo - 4 * b_hi, 16 * a_hi - 4 * b_lo


def log_unit_bounds(x: F, terms: int = 120) -> tuple[F, F]:
    """Bounds log(x), 1<=x<=2, from log x=2 atanh((x-1)/(x+1))."""
    assert 1 <= x <= 2
    z = (x - 1) / (x + 1)
    partial = 2 * sum((z ** (2 * k + 1) / (2 * k + 1)
                       for k in range(terms)), F(0))
    tail = 2 * z ** (2 * terms + 1) / ((2 * terms + 1) * (1 - z * z))
    return partial, partial + tail


def si_bounds(x: F, terms: int = 50) -> tuple[F, F]:
    """Alternating Taylor enclosure; successive absolute terms decrease."""
    partial = sum(((-1) ** k * x ** (2 * k + 1) /
                   ((2 * k + 1) * factorial(2 * k + 1))
                   for k in range(terms)), F(0))
    nxt = x ** (2 * terms + 1) / ((2 * terms + 1) * factorial(2 * terms + 1))
    # For every k>=0, a_(k+1)/a_k < x^2/((2k+3)(2k+2));
    # at x=19/5 the largest such bound is 361/450<1.
    assert x * x / 18 < 1
    return (partial, partial + nxt) if terms % 2 == 0 else (partial - nxt, partial)


def cos_bounds(x: F, last: int = 60) -> tuple[F, F]:
    """One-sided alternating Taylor remainder after term `last`."""
    partial = sum(((-1) ** k * x ** (2 * k) / factorial(2 * k)
                   for k in range(last + 1)), F(0))
    nxt = x ** (2 * last + 2) / factorial(2 * last + 2)
    # The cosine terms decrease from here onward; their first omitted sign is negative.
    assert x * x < (2 * last + 1) * (2 * last + 2)
    return partial - nxt, partial


def main() -> None:
    pi_lo, pi_hi = pi_bounds()
    R = F(19, 10)
    z = 2 * R
    si_lo, si_hi = si_bounds(z)
    cos_lo, _ = cos_bounds(z)

    # K_R is the positive Fourier-band concentration operator on (-1,1).
    # Its trace is 2R/pi. The normalized constant test vector gives
    # kappa_1 >= [2 Si(2R)-(1-cos(2R))/R]/pi.
    constant_test_lower = (2 * si_lo - (1 - cos_lo) / R) / pi_hi
    trace_upper = 2 * R / pi_lo
    kappa2_upper = trace_upper - constant_test_lower
    assert 0 < kappa2_upper < 1

    # Euler's constant lower bound: gamma > H_n-log(n)-1/(2n).
    n = 50_000
    harmonic = sum((F(1, k) for k in range(1, n + 1)), F(0))
    # 50000 = 2^15 * 3125/2048; both log arguments are in [1,2].
    log2_hi = log_unit_bounds(F(2))[1]
    ratio = F(3125, 2048)
    log_ratio_hi = log_unit_bounds(ratio)[1]
    log_n_upper = 15 * log2_hi + log_ratio_hi
    gamma_lower = harmonic - log_n_upper - F(1, 2 * n)
    log_R_lower = log_unit_bounds(R)[0]

    # For ||f||=1 supported in (-1,1), the unitary Fourier density obeys
    # |fhat(xi)|^2 <= ||f||_1^2/(2pi) <= 1/pi.
    # Thus the negative-frequency contribution on |xi|<1 is >= -2/pi.
    mu2_lower = gamma_lower - 2 / pi_lo + (1 - kappa2_upper) * log_R_lower
    assert mu2_lower > F(3463, 10_000)
    # Combine with the independently certified mu_1<0.233216 endpoint.
    assert mu2_lower - F(233216, 1_000_000) > F(113, 1_000)

    # Parity improves the full second-eigenvalue estimate. Reflection J gives
    # tr(K_R|even/odd)=(2R +/- Si(2R))/(2*pi). The even second concentration
    # eigenvalue is bounded by trace_even - the constant-vector Rayleigh value.
    trace_even_upper = (2 * R + si_hi) / (2 * pi_lo)
    kappa_even2_upper = trace_even_upper - constant_test_lower
    assert 0 < kappa_even2_upper < 1
    mu_even2_lower = gamma_lower - 2 / pi_lo + (1 - kappa_even2_upper) * log_R_lower

    # Oddness cancels fhat(0): |fhat(xi)|^2 <= xi^2/(3*pi). Thus the negative
    # logarithmic contribution on |xi|<1 is at least -2/(27*pi).
    trace_odd_upper = (2 * R - si_lo) / (2 * pi_lo)
    mu_odd1_lower = gamma_lower - F(2, 27) / pi_lo + (1 - trace_odd_upper) * log_R_lower
    assert mu_even2_lower > F(5512, 10_000)
    assert mu_odd1_lower > F(9905, 10_000)
    mu2_parity_lower = min(mu_even2_lower, mu_odd1_lower)
    assert mu2_parity_lower - F(233216, 1_000_000) > F(317, 1_000)

    print("Exact second-eigenvalue lower certificate for Suzuki's log form:")
    print(f"  kappa_1 lower: {float(constant_test_lower):.15f}")
    print(f"  trace upper: {float(trace_upper):.15f}")
    print(f"  kappa_2 upper: {float(kappa2_upper):.15f}")
    print(f"  mu_2 lower: {float(mu2_lower):.15f} > 0.3463")
    print("  gap from the certified mu_1 cap exceeds 0.113")
    print(f"  even-sector second eigenvalue lower: {float(mu_even2_lower):.15f} > 0.5512")
    print(f"  odd-sector first eigenvalue lower: {float(mu_odd1_lower):.15f} > 0.9905")
    print(f"  full mu_2 lower: {float(mu2_parity_lower):.15f}; gap exceeds 0.317")


if __name__ == "__main__":
    main()
