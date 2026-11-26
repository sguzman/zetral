#!/usr/bin/env python3
"""Exact-rational lower certificates for the archimedean root series.

Python standard library only. Floating point proposes candidate rational roots;
every accepted candidate and final sum is verified with Fraction arithmetic.
"""
from fractions import Fraction as Q
from math import floor, tan

PI_LOWER = Q(223, 71)  # classical Archimedean lower bound, strictly below pi
GRID = 1_000_000
CASES = [
    ("U72 interval", Q(62, 25), 100, Q(24317843723, 10_000_000_000)),
    ("DNB physical interval", Q(1), 100, Q(723383109, 200_000_000)),
]


def sin_upper(x: Q) -> Q:
    # Taylor degree 9; the degree-10 Lagrange remainder is -sin(xi)*x^10/10! <= 0.
    return x - x**3 / 6 + x**5 / 120 - x**7 / 5040 + x**9 / 362880


def cos_lower(x: Q) -> Q:
    # Taylor degree 11 (odd coefficient zero); degree-12 remainder is
    # cos(xi)*x^12/12! >= 0 for 0 <= xi <= pi/2.
    return Q(1) - x**2 / 2 + x**4 / 24 - x**6 / 720 + x**8 / 40320 - x**10 / 3628800


def valid_lower_root(q: Q, u: Q, h: Q) -> bool:
    x = q * h / 2
    c = cos_lower(x)
    return q > 0 and q * h < PI_LOWER and c > 0 and q * sin_upper(x) <= 2 * u * c


def certify(name: str, h: Q, count: int, target: Q) -> None:
    lower_sum = Q(0)
    for j in range(count):
        u = Q(4 * j + 1, 4)
        # Numerically locate the root only to propose a grid point.
        lo, hi = 0.0, float(PI_LOWER / h)
        for _ in range(80):
            mid = (lo + hi) / 2
            if mid * tan(mid * float(h) / 2) <= 2 * float(u):
                lo = mid
            else:
                hi = mid
        k = floor(lo * GRID)
        q = Q(k, GRID)
        while k > 0 and not valid_lower_root(q, u, h):
            k -= 1
            q = Q(k, GRID)
        assert valid_lower_root(q, u, h)
        # c_j(omega) increases with omega; q <= omega_j by monotonicity of
        # x -> x tan(x h/2) and the exact Taylor-rational inequality above.
        lower_sum += q**2 / (u * (4 * u**2 + q**2))

    assert lower_sum > target
    print(f"{name}: h={h}, terms={count}, grid=1/{GRID}")
    print(f"  certified C(h) > {target.numerator}/{target.denominator} = {float(target)}")


def main() -> None:
    for case in CASES:
        certify(*case)


if __name__ == "__main__":
    main()
