"""Arb certificate of an exact-cutoff enclosure, conditional on RH and the V04 proof.
Uses known indexed zeros deliberately; not a finite-prime-only spectral construction.
No finite Fourier root is certified by this script.
"""
import flint
from flint import acb, acb_series, arb, ctx
import sys

ctx.prec = 256
ctx.cap = 3
print("python:", sys.version)
print("python-flint:", flint.__version__)
print("FLINT:", getattr(flint, "__FLINT_VERSION__", "unreported"))
print("precision bits:", ctx.prec)

# Taylor coefficients of the conventional completed xi in s, not z.
def xi_jet(center):
    s = acb_series([center, 1], prec=3)
    return s*(s-1)*(-s*acb(arb.pi().log())/2).exp()*(s/2).gamma()*s.zeta()/2

# FLINT's indexed critical-strip zero routine uses rigorous zero counting.
# Also verify a nonzero derivative on the whole isolating ball.
rho = acb.zeta_zero(1)
g = rho.imag
assert rho.real == arb(1)/2
assert g > arb("14.134725141734693790457251983562")
assert g < arb("14.134725141734693790457251983563")
jet = xi_jet(rho)
assert jet[0].contains(0)
d = abs(jet[1])
assert d > 0

# A(z)=xi(1/2-iz), so -A''(0)/A(0)=xi''(1/2)/xi(1/2).
center = xi_jet(acb(arb(1)/2))
assert center[0].real > 0
M_complex = 2*center[2]/center[0]
assert M_complex.imag.contains(0)
M = M_complex.real
assert M > 0

# V04 constants for n=1, m=1. All operations are ball arithmetic.
p = arb.pi()
D = 128/(3*d)
H = D*(2*p).exp()*(2+(g+3)/(p-arb(5)/4))
S = M*H**2
B = 2/g
K = 2*B*g**2*S
X = arb(11)
assert X > arb(2).exp()
factor = X**2*X.sqrt()*(-2*p*X).exp()
assert B*S*factor < 1/(2*g)
err = K*factor
assert err > 0
assert err < arb("4e-11")
assert g+err < arb("14.134725141775")
for name,value in [("rho",rho),("gamma",g),("abs_xi_prime",d),("M",M),
                   ("H",H),("K",K),("half_lambda_lhs",B*S*factor),
                   ("half_lambda_rhs",1/(2*g)),("error_bound",err),("gamma_plus_bound",g+err)]:
    print(f"{name} = {value}")
print("CERTIFICATE PASSED: under RH and the V04 proof, 0 <= t_(log(11)/2,1)-gamma_1 < 4e-11")
print("Exact eigenvalue lies in (14.134725141734693790457251983562, 14.134725141775).")
print("No finite Fourier discretization or root-isolation error bound is implied.")
