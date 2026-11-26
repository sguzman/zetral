#!/usr/bin/env python3
"""Exact-rational lower certificate for the archimedean root series.

Python standard library only. Floating point is used solely to propose a
candidate rational root; every accepted candidate and the final sum are then
checked with Fraction arithmetic.
"""
from fractions import Fraction as Q
from math import floor, pi, tan

H = Q(62, 25)
PI_LOWER = Q(223, 71)  # classical Archimedean lower bound, strictly below pi
GRID = 1_000_000
COUNT = 100
TARGET = Q(24317843723, 10_000_000_000)  # 2.4317843723


def sin_upper(x: Q) -> Q:
    # Taylor degree 9; the degree-10 Lagrange remainder is -sin(xi)*x^10/10! <= 0.
    return x - x**3 / 6 + x**5 / 120 - x**7 / 5040 + x**9 / 362880


def cos_lower(x: Q) -> Q:
    # Taylor degree 11 (odd coefficient zero); degree-12 remainder is
    # cos(xi)*x^12/12! >= 0 for 0 <= xi <= pi/2.
    return Q(1) - x**2 / 2 + x**4 / 24 - x**6 / 720 + x**8 / 40320 - x**10 / 3628800


def valid_lower_root(q: Q, u: Q) -> bool:
    x = q * H / 2
    c = cos_lower(x)
    return q > 0 and q * H < PI_LOWER and c > 0 and q * sin_upper(x) <= 2 * u * c


def main() -> None:
    lower_sum = Q(0)
    for j in range(COUNT):
        u = Q(4 * j + 1, 4)
        # Numerically locate the root only to propose a grid point.
        lo, hi = 0.0, float(PI_LOWER / H)
        for _ in range(80):
            mid = (lo + hi) / 2
            if mid * tan(mid * float(H) / 2) <= 2 * float(u):
                lo = mid
            else:
                hi = mid
        k = floor(lo * GRID)
        q = Q(k, GRID)
        while k > 0 and not valid_lower_root(q, u):
            k -= 1
            q = Q(k, GRID)
        assert valid_lower_root(q, u)
        # c_j(omega) is increasing in omega; q <= omega_j by monotonicity of
        # x -> x tan(x H/2) and the exact Taylor-rational inequality above.
        lower_sum += q**2 / (u * (4 * u**2 + q**2))

    assert lower_sum > TARGET
    print(f"terms={COUNT}; grid=1/{GRID}")
    print(f"certified_root_series_lower_bound > {TARGET.numerator}/{TARGET.denominator}")
    print(f"decimal threshold={float(TARGET):.10f}")
    print(f"exact sum numerator digits={len(str(lower_sum.numerator))}")
    print(f"exact sum denominator digits={len(str(lower_sum.denominator))}")


if __name__ == "__main__":
    main()
