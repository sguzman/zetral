import json, math, numpy as np
p='experiments/results/u72-62-25-even-radius-perron-w01/'
r=json.load(open(p+'raw-t832.json'))['rows'][0]; z=json.load(open(p+'transform.json')); prop=json.load(open(p+'proposal.json'))
Q=int(json.load(open(p+'raw-t832.json'))['scale']); old=list(map(int,r['tailShares'])); D0=int(r['tailShareDenominator']); ww=list(map(int,prop['weights'])); D=int(prop['denominator']); W=sum(ww[7:]); rat=[int(x[1]) for x in prop['factors']['ratios']]
keys=['leading','second','third','fourth','fifth','sixth','seventh']; c=z['componentIntervals']; n=47
def ceil(a,b): return -((-a)//b)
def inter(i,j):
 l=int(c['upper'][i][j][0])-int(c['finite'][i][j][1]); h=int(c['upper'][i][j][1])-int(c['finite'][i][j][0])
 for k in range(7):
  a,b=map(int,c[keys[k]][i][j]); a=a*rat[k]//Q; b=ceil(b*rat[k],Q)
  l-=ceil(b*old[k]*D,ww[k]*D0); h-=a*old[k]*D//(ww[k]*D0)
 if i==j:
  # match exact refined diagonal formula in replay
  diag=ceil(ceil(int(z['eighth'][i])*W,ww[7+i])*rat[7],Q)
  l-=ceil(diag*old[7]*D,W*D0); h-=diag*old[7]*D//(W*D0)
 return l,h
R=np.zeros((n,n),dtype=float); E=np.array([int(c['upper'][i][i][1]) for i in range(n)],dtype=float)
for i in range(n):
 for j in range(i+1):
  a=inter(i,j); b=inter(j,i); lo=max(a[0],b[0]); hi=min(a[1],b[1]); m=(lo+hi)//2; rr=max(m-lo,hi-m); R[i,j]=R[j,i]=rr
# energy-normalized symmetric Perron matrix
S=R/np.sqrt(np.outer(E,E)); vals,vecs=np.linalg.eigh(S); u=np.abs(vecs[:,-1]); d=u/np.sqrt(E); d/=max(d)
weights=np.maximum(1,np.rint(d*10**40).astype(object));
json.dump([str(int(x)) for x in weights],open(p+'perron-radius-weights.json','w'))
print('rho',vals[-1], 'base-max-row',max((R@np.array([int(x) for x in z['radiusWeights']],dtype=float))[i]/int(z['radiusWeights'][i])/E[i] for i in range(n)))
print('perron-max-row',max((R@np.array([int(x) for x in weights],dtype=float))[i]/int(weights[i])/E[i] for i in range(n)))
print('weights',len(weights),'min',min(weights),'saved')
from fractions import Fraction
for label, ds0 in [('baseline', list(map(int, z['radiusWeights']))), ('perron', list(map(int, weights)))]:
    ratios = [Fraction(sum(int(R[i, j]) * ds0[j] for j in range(n)), ds0[i] * int(E[i])) for i in range(n)]
    bound = max(ratios)
    print(label, 'exact-max-ratio', f'{bound.numerator}/{bound.denominator}', 'decimal', float(bound))
midpoint_diagonal = [(inter(i, i)[0] + inter(i, i)[1]) // 2 for i in range(n)]
print('unpenalized-first-midpoint-diagonal', midpoint_diagonal[0])
print('unpenalized-nonpositive-diagonal-count', sum(value <= 0 for value in midpoint_diagonal))
