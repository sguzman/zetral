#!/usr/bin/env python3
"""Exact-rational regression checks for the P7W03 fixed-point primitives."""
from fractions import Fraction as F

Q = 10**42


def floor_q(n, d):
    if d < 0:
        n, d = -n, -d
    return n // d


def ceil_q(n, d):
    return -floor_q(-n, d)


def mul_q(a, b):
    lo, hi = min(x * y for x in a for y in b), max(x * y for x in a for y in b)
    return floor_q(lo, Q), ceil_q(hi, Q)


def div_q(a, b):
    if b[0] <= 0 <= b[1]:
        raise ZeroDivisionError
    qs = [F(x * Q, y) for x in a for y in b]
    return floor_q(min(qs).numerator, min(qs).denominator), ceil_q(max(qs).numerator, max(qs).denominator)


def mul_source(a, b):
    if a[0] >= 0 and b[0] >= 0:
        return floor_q(a[0] * b[0], Q), ceil_q(a[1] * b[1], Q)
    if a[1] <= 0 and b[0] >= 0:
        return floor_q(a[0] * b[1], Q), ceil_q(a[1] * b[0], Q)
    if b[1] <= 0 and a[0] >= 0:
        return floor_q(a[1] * b[0], Q), ceil_q(a[0] * b[1], Q)
    if a[1] <= 0 and b[1] <= 0:
        return floor_q(a[1] * b[1], Q), ceil_q(a[0] * b[0], Q)
    return mul_q(a, b)


def div_source(a, b):
    if b[0] > 0 and a[0] >= 0:
        return floor_q(a[0] * Q, b[1]), ceil_q(a[1] * Q, b[0])
    if b[0] > 0 and a[1] <= 0:
        return floor_q(a[0] * Q, b[0]), ceil_q(a[1] * Q, b[1])
    return div_q(a, b)


def square_source(a):
    if a[0] >= 0:
        return mul_source(a, a)
    if a[1] <= 0:
        return mul_source((-a[1], -a[0]), (-a[1], -a[0]))
    return 0, ceil_q(max(a[0] * a[0], a[1] * a[1]), Q)


def in_scaled_interval(x, interval):
    return F(interval[0], Q) <= x <= F(interval[1], Q)


def alternating_atan(x, terms):
    partial = sum(((-1) ** j) * x ** (2 * j + 1) / (2 * j + 1) for j in range(terms))
    next_power = x ** (2 * terms + 1)
    return partial, next_power


def main():
    # Exact directed-rounding checks, including negative numerators/divisors.
    for n, d, expected_floor, expected_ceil in [
        (7, 3, 2, 3), (-7, 3, -3, -2), (7, -3, -3, -2), (-7, -3, 2, 3),
    ]:
        assert floor_q(n, d) == expected_floor
        assert ceil_q(n, d) == expected_ceil

    # Exercise all four sign quadrants and zero-crossing intervals. Every exact
    # endpoint product/quotient must be contained in the fixed-point result.
    intervals = [
        (4 * Q, 7 * Q), (-7 * Q, -4 * Q), (-3 * Q, 5 * Q), (0, 2 * Q),
    ]
    for a in intervals:
        for b in intervals:
            c = mul_q(a, b)
            assert mul_source(a, b) == c
            for x in a:
                for y in b:
                    assert in_scaled_interval(F(x * y, Q * Q), c)
            if b[0] > 0 or b[1] < 0:
                d = div_q(a, b)
                assert div_source(a, b) == d
                for x in a:
                    for y in b:
                        assert in_scaled_interval(F(x, y), d)
        square_interval = square_source(a)
        expected = (0, ceil_q(max(a[0] * a[0], a[1] * a[1]), Q)) if a[0] <= 0 <= a[1] else mul_q(a if a[0] >= 0 else (-a[1], -a[0]), a if a[0] >= 0 else (-a[1], -a[0]))
        assert square_interval == expected
        for x in a:
            assert in_scaled_interval(F(x * x, Q * Q), square_interval)
    try:
        div_q((0, Q), (0, Q))
    except ZeroDivisionError:
        pass
    else:
        raise AssertionError("zero-containing divisor accepted")

    # The historical 24-term atan loop leaves p=x^49. Its next denominator
    # must be 49; denominator 81 does not enclose the alternating remainder.
    x = F(1, 5)
    partial, p = alternating_atan(x, 24)
    old_upper = p / 81
    true_remainder_lower = p / 49 - x**51 / 51
    corrected_upper = p / 49
    assert true_remainder_lower > old_upper
    assert true_remainder_lower <= corrected_upper

    # In the Machin combination, the true pi is strictly above the old
    # interval's upper endpoint, even allowing the smaller atan(1/239) tail.
    y = F(1, 239)
    partial_y, p_y = alternating_atan(y, 24)
    lower_y = p_y / 49 - y**51 / 51
    old_pi_gap = 16 * (true_remainder_lower - old_upper) - 4 * (p_y / 49)
    assert old_pi_gap > 0

    # The corrected 48-term rule has p=x^97 and the next denominator 97.
    partial48, p48 = alternating_atan(x, 48)
    correct48_upper = p48 / 97
    lower48 = p48 / 97 - x**99 / 99
    assert 0 < lower48 < correct48_upper

    # The log-unit tail after 40 terms is the exact positive geometric bound
    # 2 p/[81(1-r^2)], since p=r^81 and all omitted terms are positive.
    r = F(1, 3)
    log_tail = 2 * r**81 / (81 * (1 - r**2))
    omitted = sum(2 * r ** (2 * k + 1) / (2 * k + 1) for k in range(40, 200))
    remainder_after_200 = 2 * r**401 / (401 * (1 - r**2))
    assert omitted + remainder_after_200 <= log_tail

    # Range reduction keeps the Taylor argument within 2pi; for n>=40 the
    # sine/cosine alternating terms decrease and the omitted-term bounds hold.
    pi_bound = F(22, 7)
    assert (2 * pi_bound) ** 2 < 82 * 83
    assert (2 * pi_bound) ** 2 < 81 * 82

    # exp(-x) is evaluated for 0<=x<=1/2; after 30 terms, alternating terms
    # decrease, and the next-term enclosure is valid.
    z = F(1, 2)
    exp_terms = [z**j / __import__("math").factorial(j) for j in range(32)]
    assert all(exp_terms[j + 1] <= exp_terms[j] for j in range(1, 31))

    print("directed floor/ceil and fixed-point product/quotient cases: PASS")
    print("24-term atan denominator 81 counterexample: PASS (old pi upper is too small)")
    print("48-term atan denominator 97 and log/exp tail domains: PASS")
    print("old Machin pi upper misses true pi by at least", float(old_pi_gap))


if __name__ == "__main__":
    main()
