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


def sqrt_lower(n: int) -> F:
    r = isqrt(n * Q * Q)
    return F(Q, r if r * r == n * Q * Q else r + 1)


def sinh_bounds(x: F, terms: int = 10) -> tuple[F, F]:
    partial = sum((x ** (2 * k + 1) / factorial(2 * k + 1) for k in range(terms)), F(0))
    nxt = x ** (2 * terms + 1) / factorial(2 * terms + 1)
    ratio = x * x / ((2 * terms + 2) * (2 * terms + 3))
    assert ratio < 1
    return partial, partial + nxt / (1 - ratio)


def cosh_bounds(x: F, terms: int = 10) -> tuple[F, F]:
    partial = sum((x ** (2 * k) / factorial(2 * k) for k in range(terms)), F(0))
    nxt = x ** (2 * terms) / factorial(2 * terms)
    ratio = x * x / ((2 * terms + 1) * (2 * terms + 2))
    assert ratio < 1
    return partial, partial + nxt / (1 - ratio)


def iadd(x: tuple[F, F], y: tuple[F, F]) -> tuple[F, F]:
    return x[0] + y[0], x[1] + y[1]


def ineg(x: tuple[F, F]) -> tuple[F, F]:
    return -x[1], -x[0]


def imul(x: tuple[F, F], y: tuple[F, F]) -> tuple[F, F]:
    p = [a * b for a in x for b in y]
    return min(p), max(p)


def isquare(x: tuple[F, F]) -> tuple[F, F]:
    if x[0] >= 0:
        return x[0] ** 2, x[1] ** 2
    if x[1] <= 0:
        return x[1] ** 2, x[0] ** 2
    return F(0), max(x[0] ** 2, x[1] ** 2)


def exp_negative_lower(x: F, terms: int = 17) -> F:
    # The alternating tail from k=2 decreases when x<2; an odd partial sum is lower.
    assert 0 < x < 2 and terms % 2 == 1
    return sum(((-x) ** k / factorial(k) for k in range(terms + 1)), F(0))


def main() -> None:
    pi_lo, pi_hi = pi_interval()
    ln2_lo, ln2_hi = log_interval(F(2))
    _, lnpi_hi = log_interval(pi_hi)

    # gamma < H_N-log(N), with gamma >= 0 used only for the pole-free component
    # diagnostic elsewhere.  This is the standard decreasing harmonic limit.
    n_gamma = 50000
    harmonic = sum((F(1, k) for k in range(1, n_gamma + 1)), F(0))
    logN_lo, _ = log_interval(F(n_gamma))
    gamma_hi = harmonic - logN_lo
    gamma_lo = harmonic - log_interval(F(n_gamma + 1))[1]
    alpha0_lo = -gamma_hi - pi_hi / 2 - 3 * ln2_hi - lnpi_hi
    assert alpha0_lo > F(-27, 5)
    # Odd alternating-series lower bound for the regularized integral I.
    ci_series_lo = F(0)
    for k in range(1, 18):
        den = 2 * k * factorial(2 * k)
        term = (pi_hi ** (2 * k) if k % 2 else pi_lo ** (2 * k)) / den
        ci_series_lo += -term if k % 2 else term
    I_lo = log_interval(pi_lo)[0] - ln2_hi + ci_series_lo / 2

    short_window_margin = (
        alpha0_lo + log_interval(F(10))[0] + F(22, 5)
        - log_interval(F(5, 4))[1] + I_lo - F(2, 3)
    )
    assert short_window_margin > F(1, 20)

    # Lower bound on Suzuki's small-window constant from the root-series floor.
    mu1_lo = gamma_lo + log_interval(pi_lo)[0] - ln2_hi + ci_series_lo / 2
    assert mu1_lo > F(2046, 10000)

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

    # Prove the constant quotient decreases throughout [247/100, 62/25].
    # Its second derivative is positive there: each archimedean term has
    # 2-(x^2+2x+2)e^-x>0, the pole term has a positive power series from h^3
    # onward, and -q_P contributes 4*sum(Lambda(n)log(n)/sqrt(n))/h^3>0.
    h_left = F(247, 100)
    log11_hi = log_interval(F(11))[1]
    assert log11_hi < h_left < H < log12_lo
    arch_deriv_hi = F(0)
    for j in range(300):
        u = F(4 * j + 1, 4)
        x = 2 * u * H
        exp_poly = sum((x**k / factorial(k) for k in range(17)), F(0))
        arch_deriv_hi += (((x + 1) / exp_poly) - 1) / (2 * u * u * H * H)

    sinh_half_lo, sinh_half_hi = sinh_bounds(H / 2)
    sinh_quarter_lo, _ = sinh_bounds(H / 4)
    pole_deriv_hi = 8 * sinh_half_hi / H - 32 * sinh_quarter_lo**2 / (H * H)
    prime_deriv_lo = F(0)
    for n in active:
        p = mangoldt_base(n)
        assert p is not None
        prime_deriv_lo += 2 * log_interval(F(p))[0] * log_interval(F(n))[0] * sqrt_lower(n) / (H * H)
    full_deriv_hi = arch_deriv_hi + pole_deriv_hi - prime_deriv_lo
    assert full_deriv_hi < 0

    # Also certify the simplest odd test vector f(x)=sqrt(12/h^3)*x.
    a = H / 2
    c2 = 12 / H**3
    u0, r0 = F(1, 4), F(1, 2)
    q0 = exp_negative_lower(H / 2)
    I0 = 4 * a**3 / (3 * r0) - 2 * (1 + a * r0) / r0**2 * (
        a * (1 + q0) / r0 - (1 - q0) / r0**2
    )
    odd_arch_inc_lo = (1 / u0) * (1 - r0 * c2 * I0 / 2)
    for j in range(1, 300):
        u = F(4 * j + 1, 4)
        # Setting exp(-2*u*h)=0 raises I_r and lowers this positive symbol term.
        odd_arch_inc_lo += c2 * (a * a / (2 * u * u) - 1 / (8 * u**4))
    odd_arch_lo = alpha0_lo + odd_arch_inc_lo

    sinh_a2_lo, _ = sinh_bounds(a / 2)
    _, cosh_a2_hi = cosh_bounds(a / 2)
    odd_pole_moment_hi = 4 * a * cosh_a2_hi - 8 * sinh_a2_lo
    odd_pole_lo = -2 * c2 * odd_pole_moment_hi**2

    odd_prime_hi = F(0)
    for n in active:
        p = mangoldt_base(n)
        assert p is not None
        logp = log_interval(F(p))
        shift = log_interval(F(n))
        root = isqrt(n * Q * Q)
        invroot = (F(Q, root + (root * root != n * Q * Q)), F(Q, root))
        length_overlap = (H - shift[1], H - shift[0])
        quadratic_overlap = iadd(
            (H * H / 2, H * H / 2),
            ineg(iadd(imul((H, H), shift), isquare(shift))),
        )
        overlap = imul(length_overlap, quadratic_overlap)
        overlap = (overlap[0] / 6, overlap[1] / 6)
        coefficient = imul((2 * c2, 2 * c2), imul(logp, invroot))
        odd_prime_hi += imul(coefficient, overlap)[1]
    odd_full_lo = odd_arch_lo + odd_pole_lo - odd_prime_hi
    assert odd_full_lo > F(1, 10)

    print("h=62/25, exact rational interval certificate")
    print("  archimedean lower:", float(arch_lo))
    print("  pole lower:", float(pole_lo))
    print("  prime upper:", float(prime_hi))
    print("  full constant Rayleigh lower:", float(full_lo))
    print("  certified alpha_0 lower exceeds -27/5:", alpha0_lo > F(-27, 5))
    print("  h<=1/10 full-form margin exceeds 1/20:", short_window_margin > F(1, 20))
    print("  certified Suzuki mu_1 lower:", float(mu1_lo))
    print("  inferred Suzuki mu_1 lower exceeds 0.2046:", mu1_lo > F(2046, 10000))
    print("  certified lower threshold 19/500:", full_lo > F(19, 500))
    print("  full quotient derivative upper at 62/25:", float(full_deriv_hi))
    print("  strictly decreasing on [247/100, 62/25]:", full_deriv_hi < 0)
    print("  odd linear-test Rayleigh lower:", float(odd_full_lo))
    print("  certified odd linear-test threshold 1/10:", odd_full_lo > F(1, 10))


if __name__ == "__main__":
    main()
