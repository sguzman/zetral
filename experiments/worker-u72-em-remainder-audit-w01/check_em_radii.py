#!/usr/bin/env python3
"""Exact rational comparison of U72 probe EM remainder radii."""
from fractions import Fraction
import json, math

ORDER = 20
SHIFT = 512
HN = 8192
B = [Fraction(0) for _ in range(2 * ORDER + 1)]
B[0] = Fraction(1)
for n in range(1, len(B)):
    B[n] = -sum(Fraction(math.comb(n + 1, k)) * B[k] for k in range(n)) / (n + 1)
B40 = abs(B[2 * ORDER])
R = Fraction(4 * SHIFT + 1, 4)

# Fourier gives |Bbar_40(t)| <= 2*40!/(2*pi)^40*zeta(40) = |B_40|.
# The script uses 2|B_40| in all three radii.
psi_em = B40 / (2 * ORDER * R ** (2 * ORDER))
psi_script = 2 * B40 / R ** (2 * ORDER)
tri_em = B40 / R ** (2 * ORDER + 1)
tri_script = 2 * B40 / R ** (2 * ORDER + 1)
gamma_em = B40 / (2 * ORDER * HN ** (2 * ORDER))
gamma_script = 2 * B40 / HN ** (2 * ORDER)

out = {
    "bernoulli_order": 2 * ORDER,
    "B40_abs": str(B40),
    "min_shifted_real_part": str(R),
    "harmonic_cutoff": HN,
    "psi_script_over_EM_majorant": str(psi_script / psi_em),
    "trigamma_script_over_EM_majorant": str(tri_script / tri_em),
    "gamma_script_over_EM_majorant": str(gamma_script / gamma_em),
    "psi_script_radius": str(psi_script),
    "trigamma_script_radius": str(tri_script),
    "gamma_script_radius": str(gamma_script),
}
print(json.dumps(out, indent=2))
