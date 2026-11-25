#!/usr/bin/env python3
"""Independent exact audit of the ATM01 rational endpoint norm witness."""
import json
from bisect import bisect_right
from fractions import Fraction as F
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
N=F(19,2)
SHIFTS=(2,3,4,5,7,8,9)
WEIGHTS=(491,635,347,720,736,246,367)

def rat(s):
    a,b=s.split('/');return F(int(a),int(b))

def log_unit_upper(terms=80):
    r=F(1,3);r2=r*r;p=r;series=F(0)
    for j in range(terms):
        series+=p/F(2*j+1);p*=r2
    tail=2*p/F(2*terms+1)/(1-r2)
    return 2*(series+tail)

def log_upper(n,terms=80):
    x=F(n);k=0
    while x>2:x/=2;k+=1
    r=(x-1)/(x+1);r2=r*r;p=r;series=F(0)
    for j in range(terms):
        series+=p/F(2*j+1);p*=r2
    tail=2*p/F(2*terms+1)/(1-r2)
    return 2*(series+tail)+k*log_unit_upper(terms)

def check_weights():
    # Test Lambda(m)/sqrt(m) <= weight_m/1000 exactly.
    logs_roots={2:(2,2),3:(3,3),4:(2,2),5:(5,5),7:(7,7),8:(2,8),9:(3,3)}
    for m,w in zip(SHIFTS,WEIGHTS):
        n,r=logs_roots[m];u=log_upper(n)
        if m in (4,): assert 1000*u <= 2*w
        elif m==9: assert 1000*u <= 3*w
        else: assert 10**6*u*u <= r*w*w

def value(points,values,x):
    if x<=1 or x>=N:return 0
    return values[bisect_right(points,x)-1]

data=json.loads((ROOT/'experiments/results/atm01-window-19-2.json').read_text())
best=data['best'];Q=int(data['intervalScale']);den=int(data['weightDenominator'])
assert rat(data['window'])==N and tuple(map(int,data['weightNumerators']))==WEIGHTS
base=[rat(p) for p in best['points']];vals=list(map(int,best['values']))
assert base[0]==1 and base[-1]==N and len(base)==len(vals)+1
assert all(base[i]<base[i+1] for i in range(len(base)-1))
assert all(v>0 for v in vals)
# The endpoint is noninteger. Build all exact interior jump locations x=m^-1 a and x=m a.
refined=set(base)
for p in base:
    for m in SHIFTS:
        for x in (p*m,p/m):
            if 1<x<N: refined.add(x)
cells=sorted(refined)
assert len(cells)-1==int(best['checked'])==9301
B=int(best['boundNumerator']);worst=0;worst_interval=None
for lo,hi in zip(cells,cells[1:]):
    x=(lo+hi)/2
    w=value(base,vals,x)
    assert w>0
    p=sum(a*(value(base,vals,m*x)+value(base,vals,x/m)) for m,a in zip(SHIFTS,WEIGHTS))
    assert p<=B*w,(lo,hi,p,B*w)
    ratio=(p+w-1)//w
    if ratio>worst:worst=ratio;worst_interval=(lo,hi)
assert worst==B and len(base)-1==7455 and int(best['step'])==16
check_weights()
print(f'PASS endpoint {N}: {len(vals)} positive cells, {len(cells)-1} transformed cells, exact worst ratio {worst}/{den}')
print(f'PASS all 7 arithmetic coefficient upper bounds; exact endpoint images stay within the rational window')
print(f'worst cell: [{worst_interval[0]}, {worst_interval[1]}]')
print(f'interval scale Q={Q}; bound={B}/{den}={float(F(B,den))}')
