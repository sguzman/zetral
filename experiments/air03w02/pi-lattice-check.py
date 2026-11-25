#!/usr/bin/env python3
"""Exact Machin-bound comparison at the historical 10^-30 output lattice."""
from fractions import Fraction as F

Q = 10**30

def atan_partial(x):
    x = F(x)
    x2 = x*x
    term = x
    partial = F(0)
    for j in range(24):
        partial += term if j % 2 == 0 else -term
        term *= x2
    return partial, term, x2

s5, p5, x5sq = atan_partial(F(1, 5))
s239, p239, _ = atan_partial(F(1, 239))
# Alternation gives p/49 - p*x^2/51 <= atan(x)-S24 <= p/49.
true_pi_lower = 16*(s5 + p5/F(49) - p5*x5sq/F(51)) - 4*(s239 + p239/F(49))
old_pi_upper = 16*(s5 + p5/F(81)) - 4*s239
corrected_pi_upper = 16*(s5 + p5/F(49)) - 4*s239
assert true_pi_lower > old_pi_upper
assert (old_pi_upper * Q).__ceil__() == (corrected_pi_upper * Q).__ceil__()
print("PASS: exact lower bound for pi exceeds defective rational upper bound")
print("PASS: old and corrected upper bounds have identical ceil at Q=10^30")
print("true-pi miss lower bound (decimal display):", float(true_pi_lower - old_pi_upper))
print("miss in lattice units (decimal display):", float((true_pi_lower - old_pi_upper)*Q))
print("corrected-upper minus old-upper (decimal display):", float(corrected_pi_upper - old_pi_upper))
print("ceil endpoint:", (old_pi_upper*Q).__ceil__())
