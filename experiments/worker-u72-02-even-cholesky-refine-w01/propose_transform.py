#!/usr/bin/env python3
"""Propose an integer lower-triangular transform from high-precision midpoint Cholesky."""
import json, mpmath as mp
p='experiments/results/u72-62-25-even-cholesky-refine-w01/'
raw=json.load(open(p+'raw-t832.json')); r=raw['rows'][0]; c=r['componentIntervals']['upper']; n=len(r['ks'])
assert n==47 and r['odd'] is False and r['h']=='62/25' and r['T']==832
mp.mp.dps=100
def mid(v): return (mp.mpf(int(v[0]))+int(v[1]))/2
G=mp.matrix(n)
for i in range(n):
 for j in range(n): G[i,j]=mid(c[i][j])
L=mp.cholesky(G); B=L**-1
D=10**18
def nearest(x):
 y=abs(x)*D; q=mp.floor(y); rem=y-q; v=int(q+(1 if rem>=mp.mpf('0.5') else 0)); return -v if x<0 else v
rows=[]; maxcoef=0
for i in range(n):
 row=[]
 for j in range(i):
  v=nearest(B[i,j]/B[i,i]); row.append([j,str(v)]); maxcoef=max(maxcoef,abs(v))
 row.append([i,str(D)]); rows.append(row)
out={'method':'100-digit mpmath Cholesky inverse of exact interval-midpoint upper-energy Gram; normalize each lower-triangular row to unit diagonal, nearest-integer scale by D','digits':mp.mp.dps,'scale':str(D),'minCholeskyDiagonal':str(min(L[i,i] for i in range(n))),'maxAbsIntegerCoefficient':str(maxcoef),'rows':rows}
json.dump(out,open(p+'row-transform.json','w'),indent=2)
print(json.dumps({k:v for k,v in out.items() if k!='rows'}))
