#!/usr/bin/env python3
"""Separate exact-rational verifier for the 47/4 piecewise witness proposal."""
import json
from bisect import bisect_right
from fractions import Fraction as F
from pathlib import Path

SHIFTS = (2, 3, 4, 5, 7, 8, 9, 11)
WEIGHTS = (491, 635, 347, 720, 736, 246, 367, 724)
LOW, HIGH = F(1), F(47, 4)


def parse_rational(s):
    a, b = s.split("/")
    return F(int(a), int(b))


def lower_log_atanh(z, terms=32):
    return 2 * sum((z ** (2*j + 1)) / (2*j + 1) for j in range(terms))


def upper_log_atanh(z, terms=32):
    lower = lower_log_atanh(z, terms)
    remainder = 2 * z ** (2*terms + 1) / ((2*terms + 1) * (1-z*z))
    return lower + remainder


def exact_endpoint_check():
    # 47/4 = 8*(47/32); both atanh parameters lie in [0,1),
    # so truncating the positive log series gives a rigorous lower bound.
    ln2_lower = lower_log_atanh(F(1, 3))
    z = F(15, 79)
    log_reduced_lower = lower_log_atanh(z)
    slack = 3 * ln2_lower + log_reduced_lower - F(123, 50)
    assert slack > 0
    return slack


def upper_log_rational(x):
    x, powers = F(x), 0
    while x >= 2:
        x /= 2
        powers += 1
    while x < 1:
        x *= 2
        powers -= 1
    z = (x - 1) / (x + 1)
    ln2lo = lower_log_atanh(F(1, 3))
    ln2hi = upper_log_atanh(F(1, 3))
    basehi = upper_log_atanh(z)
    return basehi + powers * (ln2hi if powers >= 0 else ln2lo)


def check_shift_coefficient_uppers():
    from math import isqrt
    sqrt_scale = 10**30
    log_hi = {n: upper_log_rational(F(n)) for n in (2, 3, 5, 7, 11)}
    sqrt_lo = {n: F(isqrt(n * sqrt_scale**2), sqrt_scale) for n in (2, 3, 5, 7, 8, 11)}
    actual_upper = (
        log_hi[2] / sqrt_lo[2], log_hi[3] / sqrt_lo[3], log_hi[2] / 2,
        log_hi[5] / sqrt_lo[5], log_hi[7] / sqrt_lo[7],
        log_hi[2] / sqrt_lo[8], log_hi[3] / 3, log_hi[11] / sqrt_lo[11],
    )
    assert all(x <= F(w, 1000) for x, w in zip(actual_upper, WEIGHTS))
    return actual_upper


def log_lower_rational(x):
    x, powers = F(x), 0
    while x >= 2:
        x /= 2
        powers += 1
    while x < 1:
        x *= 2
        powers -= 1
    z = (x - 1) / (x + 1)
    ln2_lower = lower_log_atanh(F(1, 3))
    ln2_error = 2 * F(1, 3)**65 / (65 * (1 - F(1, 3)**2))
    ln2_upper = ln2_lower + ln2_error
    return lower_log_atanh(z) + powers * (ln2_lower if powers >= 0 else ln2_upper)


def pi_lower(terms=20):
    def atan_interval(x):
        partial = sum(((-1)**j) * x**(2*j+1) / (2*j+1) for j in range(terms))
        omitted = x**(2*terms+1) / (2*terms+1)
        return partial, partial + omitted  # terms is even; next alternating term is positive
    a_lo, _ = atan_interval(F(1, 5))
    _, b_hi = atan_interval(F(1, 239))
    return 16*a_lo - 4*b_hi


def cosh_upper(x, terms=18):
    from math import factorial
    x = F(x)
    partial = sum(x**(2*j) / factorial(2*j) for j in range(terms + 1))
    first_omitted = x**(2*terms+2) / factorial(2*terms+2)
    ratio = x*x / ((2*terms+4)*(2*terms+3))
    return partial + first_omitted / (1-ratio)


def high_guard_lower(n, low_count, odd):
    h, c = F(123, 50), F(2897, 1000)
    pi_lo = pi_lower()
    log_lo = log_lower_rational(F(n, 1) / (2*h))
    correction_hi = 3*h*h / (2*n*n*pi_lo*pi_lo)
    pole_hi = F(0)
    if odd:
        ch_hi = cosh_upper(h/4)
        pole_hi = 4*ch_hi*ch_hi*h**3 / (3*(2*low_count)**3*pi_lo**4)
    return log_lo - correction_hi - c - pole_hi


def main():
    root = Path(__file__).resolve().parents[2]
    witness = json.loads((root / "experiments/results/lxx-47-4-rational-witness.json").read_text())
    best = witness["best"]
    points = [parse_rational(s) for s in best["points"]]
    values = list(map(int, best["values"]))
    bound = int(best["boundNumerator"])
    assert witness["window"] == "47/4" and (points[0], points[-1]) == (LOW, HIGH)
    assert len(points) == len(values) + 1 and all(v > 0 for v in values)
    assert points == sorted(set(points))

    refined = set(points)
    for x in points:
        for shift in SHIFTS:
            for y in (x * shift, x / shift):
                if LOW < y < HIGH:
                    refined.add(y)
    cells = sorted(refined)
    assert len(cells) - 1 == best["checked"]

    def value(x):
        if x <= LOW or x >= HIGH:
            return 0
        return values[bisect_right(points, x) - 1]

    worst_ceil, worst_cell = 0, None
    for a, b in zip(cells, cells[1:]):
        x = (a + b) / 2
        w = value(x)
        if w <= 0:
            raise ArithmeticError("witness is not positive on a refined cell")
        p = sum(c * (value(x * s) + value(x / s)) for s, c in zip(SHIFTS, WEIGHTS))
        ratio_ceil = (p + w - 1) // w
        if ratio_ceil > worst_ceil:
            worst_ceil, worst_cell = ratio_ceil, (a, b)
        if p > bound * w:
            raise ArithmeticError("pointwise witness inequality failed")
    assert worst_ceil == bound == 2897
    assert best["step"] == 16 and len(values) == 40933
    slack = exact_endpoint_check()
    check_shift_coefficient_uppers()
    slack_floor = (slack.numerator * 10**15) // slack.denominator
    print(f"endpoint: log(47/4)-2.46 > {slack_floor}/10^15")
    print("eight shift coefficient upper bounds independently verified")
    print(f"independent refined cells: {len(cells)-1}; intervals: {len(values)}")
    print(f"pointwise bound: p <= {bound} w on every cell; worst ceil ratio {worst_ceil}")
    print(f"worst cell: {worst_cell[0]} to {worst_cell[1]}")
    even = [k for k in range(40, 61) if high_guard_lower(2*k, k, False) > 0]
    odd = [k for k in range(40, 61) if high_guard_lower(2*k+1, k, True) > 0]
    assert even and odd
    even_lb = high_guard_lower(2*even[0], even[0], False)
    odd_lb = high_guard_lower(2*odd[0]+1, odd[0], True)
    even_floor = (even_lb.numerator * 10**12) // even_lb.denominator
    odd_floor = (odd_lb.numerator * 10**12) // odd_lb.denominator
    print(f"first certified even high guard: lowCount={even[0]}, n={2*even[0]}, lower>{even_floor}/10^12")
    print(f"first certified odd high guard: lowCount={odd[0]}, n={2*odd[0]+1}, lower>{odd_floor}/10^12")


if __name__ == "__main__":
    main()
