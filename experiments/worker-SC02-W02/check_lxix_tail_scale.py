#!/usr/bin/env python3
"""Exact rational scale check for the parity tail at planned LXIX TC02 params."""
from fractions import Fraction as F
from parity_aware_eighth_tail import PI_LO, PI_HI, log_iv

h = F(49, 20)
prime_bound = F(2873, 1000)
M = 12288
q = M + 2  # first even index strictly above an even cutoff

def g_lower(n):
    return log_iv(F(n)/(2*h))[0] - F(3)*h*h/(2*n*n*PI_LO*PI_LO) - prime_bound

def g_upper(n):
    return log_iv(F(n)/(2*h))[1] - F(3)*h*h/(2*n*n*PI_HI*PI_HI) - prime_bound

gq = g_lower(q)
gm_upper = g_upper(M+1)
assert gq > 0 and gm_upper > 0
new_tail = (F(1, q**16) + F(1, 30*q**15)) / gq
# The old generator's interval lower endpoint for g(M+1) cannot exceed
# this independent upper bound for exact g(M+1).
rho_upper = new_tail * 15 * (M-1)**15 * gm_upper
assert rho_upper < F(4994, 10000)
print(f"parameters: h=49/20 C=2873/1000 M={M} q={q}")
print(f"g(q) lower bound positive: {gq > 0}")
print(f"new/old eighth-tail scalar ratio < 4994/10000; display={float(rho_upper):.12f}")
print("This checks the scalar tail factor only; no TC02 matrix is evaluated.")
