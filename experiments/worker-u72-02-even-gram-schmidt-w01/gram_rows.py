#!/usr/bin/env python3
"""Exact rational Gram–Schmidt of the upper-energy midpoint Gram matrix."""
import json, math
from fractions import Fraction
p='experiments/results/u72-62-25-even-gram-schmidt-w01/'
raw=json.load(open(p+'raw-t832.json')); r=raw['rows'][0]; n=len(r['ks'])
assert n==47 and not r['odd'] and r['T']==832
A=r['componentIntervals']['upper']
G=[[Fraction(int(A[i][j][0])+int(A[i][j][1]),2) for j in range(n)] for i in range(n)]
def inner(x,y): return sum((x[k]*sum((G[k][j]*y[j] for j in range(n)),Fraction(0)) for k in range(n)),Fraction(0))
V=[]; norms=[]; rows=[]
for i in range(n):
    v=[Fraction(int(k==i)) for k in range(n)]
    for j in range(i):
        alpha=sum((v[k]*sum((G[k][l]*V[j][l] for l in range(n)),Fraction(0)) for k in range(n)),Fraction(0))/norms[j]
        v=[v[k]-alpha*V[j][k] for k in range(n)]
    norm=inner(v,v)
    if norm<=0: raise SystemExit(f'nonpositive midpoint Gram pivot at {i}: {norm}')
    den=1
    for x in v: den=math.lcm(den,x.denominator)
    row=[int(x*den) for x in v]
    assert row[i]==den and all(row[k]==0 for k in range(i+1,n))
    V.append(v); norms.append(norm); rows.append([[k,str(x)] for k,x in enumerate(row) if x])
    if i%8==0: print(json.dumps({'row':i,'diagonalBits':den.bit_length(),'maxRowCoefficientBits':max(abs(x).bit_length() for x in row)}))
# Verify exact rational orthogonality before integer row scaling.
for i in range(n):
 for j in range(i):
    val=inner(V[i],V[j])
    if val: raise AssertionError(f'nonzero midpoint inner product {i},{j}')
out={'method':'exact rational Gram–Schmidt on exact midpoint of componentIntervals.upper; each vector scaled by lcm denominator','n':n,'midpointOrthogonalityVerified':True,'rows':rows,'diagonalBits':[next(abs(int(x)).bit_length() for k,x in row if k==i) for i,row in enumerate(rows)],'maxCoefficientBits':max(abs(int(x)).bit_length() for row in rows for _,x in row)}
json.dump(out,open(p+'row-transform.json','w'))
print(json.dumps({k:v for k,v in out.items() if k!='rows'}))
