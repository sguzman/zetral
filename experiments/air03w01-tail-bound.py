#!/usr/bin/env python3
"""Exact AIR03 audit of the two midpoint Euler--Maclaurin rate remainders."""
from fractions import Fraction as F
from math import factorial

# Sparse exact-polynomial check for the eighth derivatives. A monomial key is
# (power of t, power of x), and N/(t^2+x)^p differentiates to
# (N_t(t^2+x)-2ptN)/(t^2+x)^(p+1).
def add(a, b):
    out = dict(a)
    for key, value in b.items():
        out[key] = out.get(key, 0) + value
        if out[key] == 0:
            del out[key]
    return out

def scale(a, c):
    return {key: c * value for key, value in a.items() if c * value}

def shift(a, dt=0, dx=0):
    return {(t + dt, x + dx): value for (t, x), value in a.items()}

def derivative_numerator(numerator, denominator_power):
    dt = {(t - 1, x): c * t for (t, x), c in numerator.items() if t}
    return add(add(shift(dt, 2), shift(dt, dx=1)), scale(shift(numerator, 1), -2 * denominator_power))

def eighth_numerator(numerator, denominator_power):
    for _ in range(8):
        numerator = derivative_numerator(numerator, denominator_power)
        denominator_power += 1
    return numerator

base_expected = {(0, 4): 40320, (2, 3): -36*40320, (4, 2): 126*40320,
                 (6, 1): -84*40320, (8, 0): 9*40320}
derivative_expected = {(0, 5): -4*40320, (2, 4): 185*40320,
                       (4, 3): -900*40320, (6, 2): 966*40320,
                       (8, 1): -240*40320, (10, 0): 9*40320}
assert eighth_numerator({(0, 0): 1}, 1) == base_expected
assert eighth_numerator({(2, 0): 1}, 2) == derivative_expected

# For f(t)=1/(t^2+x), y=x/t^2 >= 0:
# f^(8)(t)=8! t^-10 (y-3)(y^3-33y^2+27y-3)/(1+y)^9.
# The absolute numerator is <= (y+3)(y^3+33y^2+27y+3)
# <= 3(1+y)*33(1+y)^3 = 99(1+y)^4.
# Thus integral_R^inf |f^(8)| <= 8!*99/(9 R^9).
base_derivative_factor = F(99, 9)

# For g(t)=t^2/(t^2+x)^2, y=x/t^2 >= 0:
# g^(8)(t)=-8! t^-10 P(y)/(1+y)^10,
# P(y)=4y^5-185y^4+900y^3-966y^2+240y-9.
# Each y^k/(1+y)^10 has maximum k^k(10-k)^(10-k)/10^10,
# with the k=0 maximum interpreted as 1. Sum exact coefficient-weighted maxima.
coefficients = [9, 240, 966, 900, 185, 4]
weighted_sup = F(0)
for k, c in enumerate(coefficients):
    maximum = F(1) if k == 0 else F(k**k * (10-k)**(10-k), 10**10)
    weighted_sup += c * maximum
derivative_factor = weighted_sup / 9

# Midpoint Euler--Maclaurin with mesh 2, through the B6 correction, has
# |remainder| <= 2^7 ||B8||_infinity/8! * integral |f^(8)|.
# The Fourier series bound ||B8||_infinity <= 1/30 gives 128/(30*8!).
# AIR03's exact coefficient 43/201600 is larger: 258/(30*8!).
em_coefficient = F(43, 201600)
standard_coefficient = F(2**7, 30 * factorial(8))
assert em_coefficient == F(258, 30 * factorial(8))
assert em_coefficient > standard_coefficient

# Convert both derivative bounds to the coefficient multiplying R^-9.
base_remainder = em_coefficient * factorial(8) * base_derivative_factor
weighted_derivative_remainder = em_coefficient * factorial(8) * derivative_factor
assert base_remainder == F(473, 5)
assert weighted_derivative_remainder < F(26)
assert base_remainder < 126
assert weighted_derivative_remainder < 126

print("PASS: exact midpoint EM coefficient dominates standard B8 remainder bound")
print(f"PASS: base-kernel remainder coefficient = {base_remainder} = {float(base_remainder)} < 126")
print(f"PASS: derivative-kernel remainder coefficient = {weighted_derivative_remainder} = {float(weighted_derivative_remainder)} < 26 < 126")
print(f"PASS: derivative sup sum = {weighted_sup} = {float(weighted_sup)}")
