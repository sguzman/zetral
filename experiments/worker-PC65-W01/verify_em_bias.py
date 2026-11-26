#!/usr/bin/env python3
"""Exact symbolic audit of the order-40 archimedean diagonal tail."""
from fractions import Fraction as F
import sympy as s

r,x=s.symbols("r x", positive=True)
u=r**2
d=u+x
g=x/(r*(r**2+x))

# Differentiation of g=x/[r(r^2+x)] from the exact source formulas.
fa3=6*(u**2-6*u*x+x**2)/d**4-6/u**2
fa5=120*(u**3-15*u**2*x+15*u*x**2-x**3)/d**6-120/u**3
fa7=5040*(u**4-28*u**3*x+70*u**2*x**2-28*u*x**3+x**4)/d**8-5040/u**4
fa9=362880*(u**5-45*u**4*x+210*u**3*x**2-210*u**2*x**3+45*u*x**4-x**5)/d**10-362880/u**5
assert s.cancel(s.diff(g,r,3)-fa3)==0
assert s.cancel(s.diff(g,r,5)-fa5)==0
assert s.cancel(s.diff(g,r,7)-fa7)==0
assert s.cancel(s.diff(g,r,9)-fa9)==0

# Source order-40 coefficients versus the exact midpoint Euler--Maclaurin ones.
source_coeff={1:s.Rational(1,6),3:-s.Rational(7,360),
               5:s.Rational(31,15120),7:s.Rational(127,604800),
               9:s.Rational(511,23950080)}
midpoint_coeff={1:s.Rational(1,6),3:-s.Rational(7,360),
                 5:s.Rational(31,15120),7:-s.Rational(127,604800),
                 9:s.Rational(511,23950080)}
assert source_coeff[1]==midpoint_coeff[1]
assert source_coeff[3]==midpoint_coeff[3]
assert source_coeff[5]==midpoint_coeff[5]
assert source_coeff[9]==midpoint_coeff[9]
assert source_coeff[7]-midpoint_coeff[7]==s.Rational(127,302400)
for m,k in enumerate((1,3,5,7,9), start=1):
    bernoulli_mid=s.bernoulli(2*m,s.Rational(1,2))
    assert -s.Rational(2**(2*m),s.factorial(2*m))*bernoulli_mid==midpoint_coeff[k]

t=s.symbols("t", nonnegative=True)
P=u**4-28*u**3*x+70*u**2*x**2-28*u*x**3+x**4
Q=36-42*t+84*t**2+69*t**3+56*t**4+28*t**5+8*t**6+t**7
# Factor the sign polynomial after x=u*t (u=r^2).
delta=s.factor(s.Rational(127,302400)*s.diff(g,r,7))
delta_t=s.factor(delta.subs(x,u*t))
expected_delta=-s.Rational(127,60)*(u*t)*u**3*Q.subs(t,t)/(u*(1+t))**8
# The substitution simplifies to an expression in t and u only.
assert s.factor(delta_t-expected_delta)==0
assert s.factor((1+t)**8-(1-28*t+70*t**2-28*t**3+t**4))==t*Q
assert (-42)**2-4*84*36 < 0

# Verify the twelfth derivative majorant used by the source remainder.
g12=s.diff(g,r,12)
ratio=s.factor((g12*r**15/(s.factorial(12)*x)).subs({x:t*r**2}))
p=s.Poly(s.factor(ratio*(1+t)**13),t)
expected_p=[91,-637,2002,-572,1573,1703,1716,1287,715,286,78,13,1]
assert [p.nth(k) for k in range(13)]==expected_p
abs_p=sum(abs(a)*t**k for k,a in enumerate(expected_p))
majorant=s.Poly(s.expand(91*(1+t)**13-abs_p),t)
assert all(c>=0 for c in majorant.all_coeffs())
# C12 * 13! = the coefficient after integrating |g^(12)| <= 14! x/(2r^15).
C12=2*(1+2**11)*abs(s.bernoulli(12))/s.factorial(12)
assert s.simplify(C12*s.factorial(13)-s.Rational(36812334,2730))==0

# The planned PC02 cutoff reaches x/R^2 > 15 at n=768; pi > 157/50
# already suffices. This shows why a proof restricted to x < 15 R^2 is not enough.
pi_lower=16*sum(((-1)**j*F(1,5)**(2*j+1))/ (2*j+1) for j in range(80)) - 4*(sum(((-1)**j*F(1,239)**(2*j+1))/ (2*j+1) for j in range(80)) + F(1,239)**161/161)
assert pi_lower>F(157,50)
R=F(511,2); h=F(241,100); n=768
ratio_lower=(pi_lower*n/(h*R))**2
assert ratio_lower>15

print("exact fa3/fa5/fa7/fa9 derivative checks: 4/4")
print("source derivatives fa3/fa5/fa7/fa9 are exact; fa7 coefficient sign is the sole mismatch")
print("center bias = -127*x*R^6*Q(x/R^2)/(60*(R^2+x)^8) <= 0")
print("twelfth-derivative polynomial and remainder constant checks: pass")
print("PC65 planned J=128,T=768 reaches x/R^2 > 15; global sign proof still applies")
