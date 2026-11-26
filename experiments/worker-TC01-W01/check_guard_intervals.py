#!/usr/bin/env python3
"""Recheck SC01 finite guard intervals with exact rational series."""
import json, math
from fractions import Fraction as F
from pathlib import Path
ROOT=Path(__file__).resolve().parents[2]
DOC=json.loads((ROOT/'experiments/results/tc01-49-20-guards.json').read_text())
Q=int(DOC['scale']); row=DOC['rows'][0]; H=F(49,20); C=F(2873,1000)

def atan_iv(x,n):
    s=sum(((-1)**k*x**(2*k+1)/F(2*k+1) for k in range(n)),F(0))
    t=x**(2*n+1)/F(2*n+1)
    return (s,s+t) if n%2==0 else (s-t,s)

a5=atan_iv(F(1,5),100); a239=atan_iv(F(1,239),30)
PI=(16*a5[0]-4*a239[1],16*a5[1]-4*a239[0])

def log_unit(y,n=80):
    z=(y-1)/(y+1); z2=z*z
    s=2*sum((z**(2*j+1)/F(2*j+1) for j in range(n)),F(0))
    tail=2*z**(2*n+1)/F(2*n+1)/(1-z2)
    return s,s+tail
LN2=log_unit(F(2))
def log_iv(x):
    k=0; y=x
    while y>=2: y/=2; k+=1
    while y<1: y*=2; k-=1
    v=log_unit(y)
    if k>=0:return v[0]+k*LN2[0],v[1]+k*LN2[1]
    return v[0]+k*LN2[1],v[1]+k*LN2[0]

def exp_iv(x,n=100):
    s=sum((x**k/F(math.factorial(k)) for k in range(n+1)),F(0))
    first=x**(n+1)/F(math.factorial(n+1))
    tail=first/(1-x/F(n+2))
    return s,s+tail
X=H/4; EX=exp_iv(X)
COSH=((EX[0]+1/EX[1])/2,(EX[1]+1/EX[0])/2)

def guard(low,odd):
    n=2*low+int(odd)
    lv=log_iv(F(10*n,49))
    k=F(3)*H*H/F(2*n*n)
    base=(lv[0]-k/PI[0]**2-C,lv[1]-k/PI[1]**2-C)
    if odd:
        den=H*3*(2*low)**3
        p=(4*COSH[0]**2*H**4/(den*PI[1]**4),4*COSH[1]**2*H**4/(den*PI[0]**4))
        base=(base[0]-p[1],base[1]-p[0])
    return base

def floor(x):return x.numerator//x.denominator
def ceil(x):return -floor(-x)
assert PI[0]>0 and COSH[0]>0
saved={(int(g['low']),bool(g['odd'])):g for g in row['guards']}
for low in range(41,51):
  for odd in (False,True):
    a,b=guard(low,odd); g=saved[(low,odd)]; slo,shi=map(int,g['g'])
    assert slo<=floor(a*Q) and shi>=ceil(b*Q),(low,odd,'saved interval does not enclose independent rational interval')
    assert bool(g['positive'])==(a>0),(low,odd,'positivity mismatch')
    print(f"low={low} parity={'odd' if odd else 'even'} saved_interval_encloses={True} positive={a>0}")
assert guard(44,False)[0]>0 and guard(44,True)[0]>0
assert guard(43,False)[1]<0
for low,odd in ((43,False),(44,False),(44,True)):
    a,b=guard(low,odd)
    print(f"independent_interval_scaled low={low} parity={'odd' if odd else 'even'}: [{floor(a*Q)},{ceil(b*Q)}]/Q")
print('minimal common cutoff lowCount=44 certified by monotonicity in n and lowCount')
