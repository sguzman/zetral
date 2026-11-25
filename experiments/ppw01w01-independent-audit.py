#!/usr/bin/env python3
"""Separate exact-rational audit of PPW01 saved norm witnesses."""
import json
from bisect import bisect_right
from fractions import Fraction as F
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SHIFTS = {9: (2, 3, 4, 5, 7, 8), 11: (2, 3, 4, 5, 7, 8, 9)}
# von Mangoldt numerators for the active shifts, with denominator 1000.
WEIGHTS = {9: (491, 635, 347, 720, 736, 246),
           11: (491, 635, 347, 720, 736, 246, 367)}

def rat(s):
    a, b = s.split('/')
    return F(int(a), int(b))

def log_upper(n, terms=80):
    """Rigorous Fraction upper bound for log(n) via power-of-two scaling."""
    x, k = F(n), 0
    while x > 2:
        x /= 2
        k += 1
    # x is in [1,2], so the atanh parameter r is in [0,1/3].
    r = (x-1)/(x+1)
    r2, p = r*r, r
    partial = F(0)
    for j in range(terms):
        partial += p/F(2*j+1)
        p *= r2
    tail = 2*p/F(2*terms+1)/(1-r2)
    # log(n)=log(x)+k log(2); both upper bounds are positive.
    return 2*(partial+tail) + k*log_unit_upper(terms)

def log_unit_upper(terms=80):
    r=F(1,3); r2=r*r; p=r; partial=F(0)
    for j in range(terms):
        partial += p/F(2*j+1)
        p *= r2
    return 2*(partial + 2*p/F(2*terms+1)/(1-r2))

def check_arithmetic_weights(N):
    # For L/sqrt(m)<=w/1000, square positive sides and compare exactly.
    raw = {2:(2,2), 3:(3,3), 4:(2,2), 5:(5,5), 7:(7,7), 8:(2,8), 9:(3,3)}
    for shift, w in zip(SHIFTS[N], WEIGHTS[N]):
        log_n, root_den = raw[shift]
        U=log_upper(log_n)
        if shift in (4,):
            assert U*1000 <= 2*w, (N, shift)
        elif shift == 9:
            assert U*1000 <= 3*w, (N, shift)
        else:
            assert U*U*10**6 <= root_den*w*w, (N, shift)

def verify(N):
    path=ROOT/'experiments'/'results'/f'ppw01-window-{N}.json'
    data=json.loads(path.read_text())
    best=data['best']; scale=int(data['intervalScale']); denom=int(data['weightDenominator'])
    shifts=SHIFTS[N]; weights=WEIGHTS[N]
    assert tuple(map(int,data['weightNumerators'])) == weights
    base_points=[rat(s) for s in best['points']]
    values=list(map(int,best['values']))
    assert base_points[0]==1 and base_points[-1]==N and len(base_points)==len(values)+1
    assert all(base_points[i]<base_points[i+1] for i in range(len(base_points)-1))
    assert all(v>0 for v in values)

    # Independently reconstruct every breakpoint needed for all x -> m*x and x/m.
    expected=set(base_points)
    for p in base_points:
        for m in shifts:
            for q in (p*m,p/m):
                if 1<q<N: expected.add(q)
    cells=sorted(expected)

    B=int(best['boundNumerator'])
    worst=0; worst_pair=None
    def witness_at(x):
        if x<=1 or x>=N: return 0
        i=bisect_right(base_points,x)-1
        return values[i]
    for left,right in zip(cells,cells[1:]):
        x=(left+right)/2
        w=witness_at(x)
        p=sum(a*(witness_at(m*x)+witness_at(x/m))
              for m,a in zip(shifts,weights))
        assert p <= B*w, (N,left,right,p,B*w)
        ratio=(p+w-1)//w
        if ratio>worst:
            worst=ratio; worst_pair=(left,right)
    assert worst==B, (N,worst,B,worst_pair)
    assert len(cells)-1==int(best['checked'])
    assert int(best['step'])==16
    check_arithmetic_weights(N)
    print(f'PASS N={N}: {len(values)} positive witness cells; {len(cells)-1} exact transformed cells; bound {B}/{denom}; worst ratio {worst}/{denom}; all arithmetic weights below stated rationals')

for N in (9,11): verify(N)
