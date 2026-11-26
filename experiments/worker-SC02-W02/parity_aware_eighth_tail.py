#!/usr/bin/env python3
"""Explore an exact parity-aware upper bound for the SC02 eighth remainder."""
import json
import sys
from fractions import Fraction as F
from pathlib import Path

P = Path('experiments/results')
Q = None

def ceil(a, b): return -((-a)//b)
def trunc2(a): return a//2 if a >= 0 else -((-a)//2)
def mx(a,b): return a if a>b else b
def mn(a,b): return a if a<b else b

def atan_bounds(x, terms):
    s = sum(((-1)**k * x**(2*k+1) / F(2*k+1) for k in range(terms)), F(0))
    nxt = x**(2*terms+1) / F(2*terms+1)
    return (s, s+nxt) if terms % 2 == 0 else (s-nxt, s)

A5 = atan_bounds(F(1,5), 100)
A239 = atan_bounds(F(1,239), 30)
PI_LO = 16*A5[0] - 4*A239[1]
PI_HI = 16*A5[1] - 4*A239[0]

def log_unit_iv(y, terms=80):
    z = (y-1)/(y+1); z2=z*z
    s = 2*sum((z**(2*j+1)/F(2*j+1) for j in range(terms)), F(0))
    tail = 2*z**(2*terms+1)/F(2*terms+1)/(1-z2)
    return s,s+tail

def log_iv(x):
    k = 0
    while x >= 2: x /= 2; k += 1
    while x < 1: x *= 2; k -= 1
    assert k >= 0
    y=log_unit_iv(x); ln2=log_unit_iv(F(2))
    return y[0]+k*ln2[0],y[1]+k*ln2[1]

def main(M):
    global Q
    tag = f'm{M}'
    raw = json.loads(''.join((P/f'sc02-61-25-even-{tag}-raw-part{i}.txt').read_text() for i in range(1,6)))
    r = raw['rows'][0]; c = r['componentIntervals']; Q = int(raw['scale']); n = len(r['ks'])
    assert r['h']=='61/25' and r['odd'] is False and r['M']==M and r['J']==128 and r['KEM']==20 and r['T']==768 and n==43
    h = F(61,25); C = F(int(r['primeNormUpper']), Q)
    def glow_lower(mode):
        return log_iv(F(mode,1)/(2*h))[0] - F(3)*h*h/(2*mode*mode*PI_LO*PI_LO) - C
    def glow_upper(mode):
        return log_iv(F(mode,1)/(2*h))[1] - F(3)*h*h/(2*mode*mode*PI_HI*PI_HI) - C
    q = M+2 # first even mode strictly above the even cutoff M
    gnew = glow_lower(q)
    gold_upper = glow_upper(M+1)
    assert gnew > 0 and gold_upper > 0
    new_tail = (F(1,q**16)+F(1,30*q**15)) / gnew
    # The old code uses its interval lower endpoint for g(M+1). Any such lower
    # endpoint is no greater than the exact g; gold_upper therefore bounds it.
    rho = new_tail * 15*(M-1)**15 * gold_upper
    assert 0 < rho < 1
    if M == 10240: assert rho < F(499256,1000000)
    if M == 12288: assert rho < F(499381,1000000)

    old_shares = list(map(int, r['tailShares'])); D0 = int(r['tailShareDenominator'])
    ds = list(map(int, r['radiusWeights']))
    factors = json.loads((P/f'sc02-61-25-even-{tag}-constant-factors.json').read_text())
    ratios = [int(a[1]) for a in factors['ratios']]
    joint = json.loads((P/f'sc02-61-25-even-{tag}-constant-joint.json').read_text())
    replay = json.loads((P/f'sc02-61-25-even-{tag}-constant-replay.json').read_text())
    assert len(joint['results']) == len(replay['results']) == 8
    keys = ['leading','second','third','fourth','fifth','sixth','seventh']

    def build(shares, den, weights, old_direction, refined, tail_scale):
        if refined:
            W = sum(weights[7:])
            old_direction_calc = [ceil(ceil(int(r['diagnostics'][i]['eighthUpper'])*W, weights[7+i])*ratios[7], Q) for i in range(n)]
            assert all(str(x)==old_direction[i] for i,x in enumerate(old_direction_calc))
            diag = [ceil(int(old_direction_calc[i])*tail_scale.numerator, tail_scale.denominator) for i in range(n)]
        else:
            diag = [ceil(int(c['eighth'][i])*tail_scale.numerator, tail_scale.denominator) for i in range(n)]
        def interval(i,j):
            u0,u1=map(int,c['upper'][i][j]); f0,f1=map(int,c['finite'][i][j])
            lo,hi=u0-f1,u1-f0
            for k,key in enumerate(keys):
                a,b=map(int,c[key][i][j])
                if refined: a=(a*ratios[k])//Q; b=ceil(b*ratios[k],Q)
                p=old_shares[k]*den; z=shares[k]*D0
                lo-=ceil(b*p,z); hi-=(a*p)//z
            if i==j:
                allowance=diag[i]
                x=ceil(allowance*old_shares[7]*den,shares[7]*D0)
                lo-=x; hi-=x
            return lo,hi
        L=[[0]*n for _ in range(n)]; rad=[[0]*n for _ in range(n)]
        for i in range(n):
            for j in range(i+1):
                a,b=interval(i,j),interval(j,i); lo=mx(a[0],b[0]); hi=mn(a[1],b[1]); assert lo<=hi
                v=trunc2(lo+hi); L[i][j]=L[j][i]=v
                rad[i][j]=rad[j][i]=mx(v-lo,hi-v)
        radii=[sum(ceil(rad[i][j]*ds[j],ds[i]) for j in range(n)) for i in range(n)]
        return [[L[i][j]-(radii[i] if i==j else 0) for j in range(n)] for i in range(n)]

    def leading(A):
        B=[row[:] for row in A]; prev=1; dets=[]
        for k in range(n):
            p=B[k][k]
            if p<=0:return False,dets
            dets.append(p)
            for i in range(k+1,n):
                for j in range(i,n):
                    z=p*B[i][j]-B[i][k]*B[k][j]; assert z%prev==0
                    B[i][j]=B[j][i]=z//prev
                B[i][k]=0
            prev=p
        return True,dets

    baseline_old=build(old_shares,D0,old_shares,[str(int(c['eighth'][i])) for i in range(n)],False,F(1))
    assert all(str(baseline_old[i][j])==r['lowerInteger'][i][j] for i in range(n) for j in range(n))
    outputs=[]; first_matrix=None
    for i,saved in enumerate(replay['results']):
        shares=list(map(int,saved['shares'])); den=int(saved['denominator']); weights=list(map(int,saved['weights']))
        Aold=build(shares,den,weights,saved['directionDiagonal'],True,F(1))
        assert all(str(Aold[x][y])==saved['lowerInteger'][x][y] for x in range(n) for y in range(n)), f'old matrix {i}'
        A=build(shares,den,weights,saved['directionDiagonal'],True,rho)
        ok,dets=leading(A); outputs.append((i,ok,len(dets)))
        if i==0:first_matrix=A
    print(f'M={M} parity_tail_ratio_upper={float(rho):.12f}')
    print(f'unchanged_saved_allocations_PD={sum(ok for _,ok,_ in outputs)}/8 pivots={outputs}')
    if M == 10240: assert all(not ok and pivots == 9 for _,ok,pivots in outputs)
    if M == 12288: assert all(ok and pivots == 43 for _,ok,pivots in outputs)
    assert first_matrix is not None

    if not leading(first_matrix)[0]:
        print('candidate0 remains indefinite; fixed-energy margin unavailable')
        return
    E=[int(c['upper'][i][i][1]) for i in range(n)]
    def pass_margin(margin):
        d=1000000; B=[[d*first_matrix[i][j]-(margin*E[i] if i==j else 0) for j in range(n)] for i in range(n)]; prev=1
        for k in range(n):
            p=B[k][k]
            if p<=0:return False
            for i in range(k+1,n):
                for j in range(i,n):
                    z=p*B[i][j]-B[i][k]*B[k][j]; assert z%prev==0
                    B[i][j]=B[j][i]=z//prev
            prev=p
        return True
    lo,hi=0,1000000
    assert pass_margin(lo)
    while hi-lo>1:
        mid=(lo+hi)//2
        if pass_margin(mid):lo=mid
        else:hi=mid
    assert not pass_margin(lo+1)
    if M == 12288: assert lo == 41278
    print(f'new_fixed_energy_margin_candidate0={lo}/1000000 next_fails=True')

if __name__=='__main__':
    main(int(sys.argv[1]) if len(sys.argv)>1 else 10240)
