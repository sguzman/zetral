#!/usr/bin/env python3
"""Exact rational lower bound for the U72 even residual weight at n>=94."""
from fractions import Fraction as F
import json

h = F(62, 25)
n0 = 94
x = F(1175, 62)  # n0/(2h)
y = (x - 1) / (x + 1)
N = 150
log_lower = 2 * sum((y ** (2*k + 1) / (2*k + 1) for k in range(N + 1)), F(0))
# pi > 3 implies 3 h^2/(2 n0^2 pi^2) < h^2/(6 n0^2).
g_lower = log_lower - F(293, 100) - h*h/F(6*n0*n0)
assert 0 < y < 1 and g_lower > 0
print(json.dumps({
    "n0": n0,
    "h": str(h),
    "log_argument": str(x),
    "atanh_terms": N + 1,
    "log_lower_rational": str(log_lower),
    "g_lower_rational": str(g_lower),
    "g_lower_decimal": format(float(g_lower), ".17g"),
    "pi_lower_used": "pi > 3",
    "monotonicity_derivative": "1/n + 3*h^2/(pi^2*n^3) > 0",
}, indent=2))
