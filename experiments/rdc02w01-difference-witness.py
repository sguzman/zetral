#!/usr/bin/env python3
"""Exact inertia witnesses for archived RDC02 lower-matrix differences."""
import json
import math
from fractions import Fraction as F
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]

def bareiss_det(A):
    n=len(A); B=[list(map(int,row)) for row in A]
    if n==0: return 1
    sign=1; prev=1
    for k in range(n-1):
        if B[k][k]==0:
            p=next((i for i in range(k+1,n) if B[i][k]),None)
            if p is None: return 0
            B[k],B[p]=B[p],B[k]; sign=-sign
        pivot=B[k][k]
        for i in range(k+1,n):
            for j in range(k+1,n):
                q=pivot*B[i][j]-B[i][k]*B[k][j]
                assert q%prev==0
                B[i][j]=q//prev
        for i in range(k+1,n): B[i][k]=0
        prev=pivot
    return sign*B[-1][-1]

def solve(A,b):
    n=len(A); M=[[F(x) for x in A[i]]+[F(b[i])] for i in range(n)]
    for j in range(n):
        p=next(i for i in range(j,n) if M[i][j])
        M[j],M[p]=M[p],M[j]
        q=M[j][j]; M[j]=[x/q for x in M[j]]
        for i in range(n):
            if i!=j:
                q=M[i][j]; M[i]=[x-q*y for x,y in zip(M[i],M[j])]
    return [row[-1] for row in M]

def load(path):
    d=json.loads(path.read_text()); row=d['rows'][0]
    return int(d['scale']),row

def audit(parity):
    old_path=ROOT/'experiments/results'/f'ppw03-11-5-local-{parity}.json'
    new_path=ROOT/'experiments/results'/f'rdc02-11-5-{parity}.json'
    Q,a=load(old_path); Q2,b=load(new_path)
    assert Q==Q2 and a['odd']==b['odd'] and a['h']==b['h'] and a['certified'] and b['certified']
    assert a['ks']==b['ks'] and a['basis']==b['basis'] and a['trial']==b['correction']['initialTrial']
    A=[[int(x) for x in row] for row in a['lowerInteger']]
    B=[[int(x) for x in row] for row in b['lowerInteger']]
    D=[[B[i][j]-A[i][j] for j in range(len(A))] for i in range(len(A))]
    n=len(D)
    assert all(D[i][i]>0 for i in range(n))
    leading=[]
    for k in range(1,n+1):
        leading.append(bareiss_det([row[:k] for row in D[:k]]))
    r=next((k for k,d in enumerate(leading,1) if d<=0),None)
    assert r is not None and all(d>0 for d in leading[:r-1]) and leading[r-1]<0
    # A is the preceding positive-definite leading block; complete its square.
    m=r-1
    if m:
        P=[row[:m] for row in D[:m]]; q=[D[i][m] for i in range(m)]
        u=solve(P,[-x for x in q])
        v=u+[F(1)]
    else: v=[F(1)]
    value=sum((v[i]*D[i][j]*v[j] for i in range(r) for j in range(r)),F(0))
    assert value<0 and (not m or bareiss_det([row[:m] for row in D[:m]])>0)
    common=math.lcm(*(x.denominator for x in v))
    vi=[int(x*common) for x in v]
    g=math.gcd(*[abs(x) for x in vi if x])
    vi=[x//g for x in vi]
    qnum=sum(vi[i]*D[i][j]*vi[j] for i in range(r) for j in range(r))
    assert qnum<0
    delta_diag=[D[i][i] for i in range(n)]
    print(f"PASS {parity}: {sum(x>0 for x in delta_diag)} positive diagonal deltas; first nonpositive leading minor order {r}; preceding order {r-1} positive")
    print(f"  negative witness support (indices 0..{r-1}): {vi}")
    print(f"  exact quadratic form on integer matrix: {qnum} < 0; physical lattice denominator: {Q}")
    print(f"  first diagonal change: {delta_diag[0]}; minimum diagonal change: {min(delta_diag)}")

for p in ('even','odd'): audit(p)
