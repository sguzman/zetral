#!/usr/bin/env python3
"""Exact PPW03 sparse-polynomial and Euler--Maclaurin tail audit."""
from fractions import Fraction as F
from math import comb, factorial

# Sparse polynomial dictionaries keyed by (power of r, power of x).
def add(a,b):
    c=dict(a)
    for k,v in b.items():
        c[k]=c.get(k,0)+v
        if not c[k]: del c[k]
    return c

def scale(a,n): return {k:n*v for k,v in a.items() if n*v}
def shift(a,r=0,x=0): return {(i+r,j+x):v for (i,j),v in a.items()}
def dt(a): return {(i-1,j):i*v for (i,j),v in a.items() if i}
def denmul(a): return add(shift(a,r=2),shift(a,x=1))
def dn(a,k):
    """Differentiate P/(r^2+x)^k once, retaining a common denominator."""
    return add(denmul(dt(a)),scale(shift(a,r=1),-2*k))
def deriv(a,k,n):
    for _ in range(n): a=dn(a,k); k+=1
    return a,k

def poly_mul(a,b):
    out={}
    for (i,j),u in a.items():
        for (k,l),v in b.items(): out[(i+k,j+l)]=out.get((i+k,j+l),0)+u*v
    return {k:v for k,v in out.items() if v}
def poly_y_product(*factors):
    # Each factor is a sparse univariate dict degree -> coefficient.
    p={0:1}
    for f in factors:
        q={}
        for i,a in p.items():
            for j,b in f.items(): q[i+j]=q.get(i+j,0)+a*b
        p=q
    return {k:v for k,v in p.items() if v}

def expected_univariate_y_into_r(poly, scale_factor=1):
    return {(2*k,10-k):scale_factor*v for k,v in poly.items()}
def denpower(n):
    return {(2*(n-j),j):comb(n,j) for j in range(n+1)}

# Seventh-derivative corrections used by the code.
f7,k=deriv({(0,0):1},1,7)
g7,kg=deriv({(2,0):1},2,7)
# f_a = 1/r - r/(r^2+x); differentiate each rational summand.
def deriv_mixed(P,a,k,n):
    """Differentiate P/[r^a (r^2+x)^k], returning numerator,a,k."""
    for _ in range(n):
        # Common denominator r^(a+1)(r^2+x)^(k+1).
        term1=denmul(shift(dt(P),r=1))
        term2=scale(denmul(P),-a)
        term3=scale(shift(P,r=2),-2*k)
        P=add(add(term1,term2),term3); a+=1; k+=1
    return P,a,k
alpha_u,au,ku=deriv_mixed({(0,0):1},1,0,7)
alpha_v,av,kv=deriv_mixed({(1,0):-1},0,1,7)
alpha7=add(denmul(alpha_u),shift(alpha_v,r=1)) # common r^8 d^8
expected_f7={(7,0):-40320,(5,1):7*40320,(3,2):-7*40320,(1,3):40320}
expected_g7={(9,0):-40320,(7,1):21*40320,(5,2):-63*40320,(3,3):39*40320,(1,4):-4*40320}
# 5040*(r^8 -28r^6x+70r^4x^2-28r^2x^3+x^4) -5040/r^8.
fa7_first={(8,0):5040,(6,1):-28*5040,(4,2):70*5040,(2,3):-28*5040,(0,4):5040}
expected_alpha7=add(shift(fa7_first,r=8),scale(denpower(8),-5040)) # common numerator over r^8 d^8
assert f7==expected_f7 and k==8
assert g7==expected_g7 and kg==9
assert alpha7==expected_alpha7 and (au,ku,av,kv)==(8,7,7,8)

# Tenth derivatives for f=1/d and g=r^2/d^2.
f10,kf=deriv({(0,0):1},1,10)
g10,kg10=deriv({(2,0):1},2,10)
expected_f10={(10,0):11*factorial(10),(8,1):-165*factorial(10),(6,2):462*factorial(10),(4,3):-330*factorial(10),(2,4):55*factorial(10),(0,5):-factorial(10)}
expected_g10={(12,0):11*factorial(10),(10,1):-440*factorial(10),(8,2):2871*factorial(10),(6,3):-5016*factorial(10),(4,4):2585*factorial(10),(2,5):-336*factorial(10),(0,6):5*factorial(10)}
assert f10==expected_f10 and kf==11
assert g10==expected_g10 and kg10==12

# Tenth derivative of f_a=1/r-r/d. Common denominator r^11 d^11.
alpha_u10,au10,ku10=deriv_mixed({(0,0):1},1,0,10)
alpha_v10,av10,kv10=deriv_mixed({(1,0):-1},0,1,10)
alpha10=add(denmul(alpha_u10),shift(alpha_v10,r=1))
alpha_poly_y={0:66,1:-275,2:627,3:165,4:473,5:462,6:330,7:165,8:55,9:11,10:1}
alpha_expected={(20-2*j,1+j):factorial(10)*c for j,c in alpha_poly_y.items()}
assert alpha10==alpha_expected and (au10,ku10,av10,kv10)==(11,10,10,11)

# Convert homogeneous numerators into scaled y polynomials and verify simple
# nonnegative coefficient/discriminant certificates for |P(y)| <= 11(1+y)^d.
Pf={0:11,1:-165,2:462,3:-330,4:55,5:-1}
Pg={0:11,1:-440,2:2871,3:-5016,4:2585,5:-336,6:5}
Pa=alpha_poly_y

def difference_bound(d, constant, P, sign):
    # constant*(1+y)^d + sign*P. sign=+1 or -1.
    return [constant*comb(d,k)+sign*P.get(k,0) for k in range(d+1)]

f_plus=difference_bound(11,11,Pf,+1)
f_minus=difference_bound(11,11,Pf,-1)
assert f_minus[0]==0 and all(c>=0 for c in f_minus)
assert f_plus[0:3]==[22,-44,1067]
assert (-44)**2-4*22*1067<0 and all(c>=0 for c in f_plus[2:])

g_plus=difference_bound(12,11,Pg,+1)
g_minus=difference_bound(12,11,Pg,-1)
assert g_minus[:4]==[0,572,-2145,7436]
assert (-2145)**2-4*572*7436<0 and all(c>=0 for c in g_minus[3:])
# For y<=1/3, absorb -2596 y^3 into y^2. For y>=1/3,
# pair -2596 y^3 with +8030 y^4; both leave positive remainders.
assert g_plus[:5]==[22,-308,3597,-2596,8030]
assert 308**2-4*22*F(8195,3)<0
assert F(8030,3)-2596>0 and all(c>=0 for c in g_plus[4:])

a_plus=difference_bound(11,66,Pa,+1)
a_minus=difference_bound(11,66,Pa,-1)
assert all(c>=0 for c in a_plus+a_minus)

# EM coefficients: mesh 2, B8 correction, and conservative B10 remainder.
corr=F(2**7-1,30*factorial(8))
assert corr==F(127,1209600)
rem=F(2*(1+2**9)*5,66*factorial(10))
assert rem==F(855,11*factorial(10))
fd_bound=rem*factorial(10)
assert fd_bound==F(855,11)
alpha_direct=rem*F(factorial(11),2)
assert alpha_direct==F(855,2)
alpha_source=2*alpha_direct
assert alpha_source==855

print("PASS: exact recurrence matches all f7, fd7, fa7 correction numerators")
print("PASS: exact recurrence matches f10, fd10, fa10 remainder numerators")
print("PASS: nonnegative polynomial certificates prove |f10|, |fd10| <= 11! r^-12")
print("PASS: nonnegative polynomial certificates prove |fa10| <= (12!/2) x r^-13")
print(f"PASS: B8 correction = -{corr} = -127/1209600")
print(f"PASS: B10 EM coefficient = {rem}; F/D R^-11 coefficient = {fd_bound} = 855/11")
print(f"PASS: alpha direct tail = {alpha_direct} x R^-12; source's factor 2 gives {alpha_source} x R^-12")
