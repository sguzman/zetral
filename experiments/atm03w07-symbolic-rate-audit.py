#!/usr/bin/env python3
"""Exact symbolic audit of ATM03 ninth-derivative and remainder algebra."""
from fractions import Fraction as F
from math import factorial

# Sparse polynomials in r,x with exact integer coefficients.
def add(a, b):
    out = dict(a)
    for m, c in b.items():
        out[m] = out.get(m, 0) + c
        if not out[m]:
            del out[m]
    return out

def scale(a, c):
    return {m: v*c for m, v in a.items() if v*c}

def mul(a, b):
    out = {}
    for (r1, x1), c1 in a.items():
        for (r2, x2), c2 in b.items():
            key = (r1+r2, x1+x2)
            out[key] = out.get(key, 0) + c1*c2
    return {m: c for m, c in out.items() if c}

def r_times(a):
    return {(i+1, j): c for (i, j), c in a.items()}

def r2_times(a):
    return {(i+2, j): c for (i, j), c in a.items()}

def x_times(a):
    return {(i, j+1): c for (i, j), c in a.items()}

def d_times(a):
    return add(r2_times(a), x_times(a))

D = {(2, 0): 1, (0, 1): 1}  # r^2+x
P = [{(0, 0): 1}, scale({(1, 0): 1}, -2)]
# 1/((r+t)^2+x) = sum P_n t^n / (r^2+x)^(n+1)
for n in range(2, 10):
    P.append(scale(add(scale(r_times(P[n-1]), 2),
                       mul(D, P[n-2])), -1))

# f=(r^2+x)^-1, coefficient of t^9 times 9! is its ninth derivative.
f_numerator = scale(P[9], factorial(9))
f_poly = {(8,0):5, (6,1):-60, (4,2):126, (2,3):-60, (0,4):5}
f_expected = scale(r_times(f_poly), -725760)
assert f_numerator == f_expected

# f_d=r^2/(r^2+x)^2: Cauchy product of the reciprocal series.
fd_series_num = {}
for i in range(10):
    fd_series_num = add(fd_series_num, mul(P[i], P[9-i]))
fd_series_num = r2_times(fd_series_num)
for i in range(9):
    fd_series_num = add(fd_series_num, scale(r_times(mul(D, mul(P[i], P[8-i]))), 2))
for i in range(8):
    fd_series_num = add(fd_series_num, mul(mul(D, D), mul(P[i], P[7-i])))
fd_numerator = scale(fd_series_num, factorial(9))
fd_poly = {(10,0):5, (8,1):-165, (6,2):858, (4,3):-1122, (2,4):385, (0,5):-25}
fd_expected = scale(r_times(fd_poly), -725760)
assert fd_numerator == fd_expected

# f_a=x/[r(r^2+x)]=1/r-r/(r^2+x), handling 1/r separately.
fa_poly = {(10,0):1, (8,1):-45, (6,2):210, (4,3):-210, (2,4):45, (0,5):-1}
fa_rational_num = scale(add(r_times(P[9]), mul(P[8], D)), -1)
assert fa_rational_num == fa_poly
# Therefore f_a^(9)=9!*fa_poly/(r^2+x)^10 - 9!/r^10.

# Bernoulli coefficients and integrated Euler-Maclaurin remainder constants.
B10 = F(5, 66)
B12_abs = F(691, 2730)
coef10 = B10 * (2**9 - 1) / factorial(10)
assert coef10 == F(511, 47900160)
coef12 = 2 * (1 + 2**11) * B12_abs / factorial(12)
# Integral |f^(12)| <= 12!/R^13; alpha's full expression has an extra factor 2.
f_const = coef12 * factorial(12)
alpha_const = coef12 * factorial(13)
assert f_const == F(2831718, 2730)
assert alpha_const == F(36812334, 2730)
assert alpha_const == 2 * coef12 * F(factorial(13), 2)

print("PASS: symbolic reciprocal-series recurrence reproduces f^(9) polynomial exactly")
print("PASS: Cauchy-product recurrence reproduces f_d^(9) polynomial exactly")
print("PASS: decomposition f_a=1/r-r/(r^2+x) reproduces f_a^(9) polynomial exactly")
print("PASS: B10 correction coefficient is 511/47900160")
print("PASS: integrated twelfth-order constants are 2831718/2730 and 36812334/2730")
print("SCOPE: verifies stated derivative identities and constant algebra; analytic remainder inequalities and generator unchecked")
