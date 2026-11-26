#!/usr/bin/env python3
"""Exact-rational lower bound for the full-form constant test at h=62/25.

Uses only Fraction arithmetic.  The analytic identity is recorded in
COERCIVITY.md; this script certifies the numerical sign of that test quotient.
"""
from fractions import Fraction as F
from math import factorial, isqrt

H = F(62, 25)
Q = 10**8


def atan_interval(x: F, n: int = 40) -> tuple[F, F]:
    s = sum(((-1) ** k) * x ** (2 * k + 1) / (2 * k + 1) for k in range(n))
    nxt = x ** (2 * n + 1) / (2 * n + 1)
    return (s, s + nxt) if n % 2 == 0 else (s - nxt, s)


def pi_interval() -> tuple[F, F]:
    a_lo, a_hi = atan_interval(F(1, 5))
    b_lo, b_hi = atan_interval(F(1, 239))
    return 16 * a_lo - 4 * b_hi, 16 * a_hi - 4 * b_lo


def log_unit_interval(x: F, n: int = 100) -> tuple[F, F]:
    """Natural log for 1<=x<=2 using the positive atanh series and tail."""
    assert 1 <= x <= 2
    z = (x - 1) / (x + 1)
    partial = 2 * sum(z ** (2 * k + 1) / (2 * k + 1) for k in range(n))
    tail = 2 * z ** (2 * n + 1) / ((2 * n + 1) * (1 - z * z))
    return partial, partial + tail


def log_interval(x: F, n: int = 100) -> tuple[F, F]:
    assert x > 0
    k = 0
    while x < 1:
        x *= 2
        k -= 1
    while x >= 2:
        x /= 2
        k += 1
    lo, hi = log_unit_interval(x, n)
    l2, u2 = log_unit_interval(F(2), n)
    if k >= 0:
        return lo + k * l2, hi + k * u2
    return lo + k * u2, hi + k * l2


def mangoldt_base(n: int) -> int | None:
    for p in range(2, n + 1):
        if n % p:
            continue
        m = n
        while m % p == 0:
            m //= p
        return p if m == 1 else None
    return None


def sqrt_upper(n: int) -> F:
    r = isqrt(n * Q * Q)
    if r * r == n * Q * Q:
        return F(Q, r)
    return F(Q, r)  # Q/r is a strict upper bound for 1/sqrt(n).


def main() -> None:
    pi_lo, pi_hi = pi_interval()
    ln2_lo, ln2_hi = log_interval(F(2))
    _, lnpi_hi = log_interval(pi_hi)

    # gamma < H_N-log(N), with gamma >= 0 used only for the pole-free component
    # diagnostic elsewhere.  This is the standard decreasing harmonic limit.
    n_gamma = 5000
    harmonic = sum((F(1, k) for k in range(1, n_gamma + 1)), F(0))
    logN_lo, _ = log_interval(F(n_gamma))
    gamma_hi = harmonic - logN_lo
    alpha0_lo = -gamma_hi - pi_hi / 2 - 3 * ln2_hi - lnpi_hi

    # Exact positive-series lower bound for q_alpha on the constant function.
    arch_inc_lo = F(0)
    for j in range(300):
        u = F(4 * j + 1, 4)
        x = 2 * u * H
        # S_16(x) < exp(x), so exp(-x) < 1/S_16(x).
        exp_poly = sum((x**k / factorial(k) for k in range(17)), F(0))
        arch_inc_lo += (1 - 1 / exp_poly) / (2 * H * u * u)
    arch_lo = alpha0_lo + arch_inc_lo

    # Pole: 2 |<cosh(x/2), f>|^2 on the even constant f, centered on [-h/2,h/2].
    z = H / 4
    sinh_lo = sum((z ** (2 * k + 1) / factorial(2 * k + 1) for k in range(8)), F(0))
    pole_lo = 32 * sinh_lo * sinh_lo / H

    # The support restriction log(n)<h follows from log(12)>h.  Include every
    # nonzero von Mangoldt term n=2,...,11 and bound its contribution upward.
    log12_lo, _ = log_interval(F(12))
    assert log12_lo > H
    prime_hi = F(0)
    active = []
    for n in range(2, 12):
        p = mangoldt_base(n)
        if p is None:
            continue
        logp_hi = log_interval(F(p))[1]
        logn_lo, logn_hi = log_interval(F(n))
        assert logn_hi < H
        term_hi = 2 * logp_hi * sqrt_upper(n) * (1 - logn_lo / H)
        prime_hi += term_hi
        active.append(n)

    full_lo = arch_lo + pole_lo - prime_hi
    assert active == [2, 3, 4, 5, 7, 8, 9, 11]
    assert full_lo > F(19, 500)
    print("h=62/25, exact rational interval certificate")
    print("  archimedean lower:", float(arch_lo))
    print("  pole lower:", float(pole_lo))
    print("  prime upper:", float(prime_hi))
    print("  full constant Rayleigh lower:", float(full_lo))
    print("  certified lower threshold 19/500:", full_lo > F(19, 500))


if __name__ == "__main__":
    main()
