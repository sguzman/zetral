#!/usr/bin/env python3
"""Exact Cauchy allocation bound for one rationalized dense direction."""
import json, math
p='experiments/results/u72-62-25-even-cholesky-dual-w01/'
raw=json.load(open(p+'raw-t832.json')); z=json.load(open(p+'transform.json')); proposal=json.load(open(p+'base-allocation.json')); witness=json.load(open(p+'negative-direction.json'))
r=raw['rows'][0]; c=z['componentIntervals']; Q=int(raw['scale']); D0=int(r['tailShareDenominator']); old=list(map(int,r['tailShares'])); ratios=[int(t[1]) for t in proposal['factors']['ratios']]
x=list(map(int,witness['vector'])); support=[(i,v) for i,v in enumerate(x) if v]
keys=['leading','second','third','fourth','fifth','sixth','seventh']
def quad(A,side):
 out=0
 for i,xi in support:
  for j,xj in support:
   q=xi*xj; lo,hi=map(int,A[i][j]); out+=q*(hi if side=='upper' and q>=0 else lo if side=='upper' else lo if q>=0 else hi)
 return out
E=quad(c['upper'],'upper'); F=quad(c['finite'],'lower')
rank=[quad(c[k],'lower')*old[i]*ratios[i] for i,k in enumerate(keys)]
eighth=sum(int(z['eighth'][i])*v*v*old[7]*ratios[7] for i,v in support)
costs=rank+[eighth]
result={'support':[[i,str(v)] for i,v in support],'denominator':witness['vectorRationalizedDenominator'],'energyUpper':str(E),'finiteLower':str(F),'rankCosts':[str(v) for v in rank],'eighthCost':str(eighth),'allCostsStrictlyPositive':all(v>0 for v in costs)}
if E>0 and F>0 and all(v>0 for v in costs):
 S=sum(math.isqrt(v) for v in costs); N=F*D0*Q+S*S; den=E*D0*Q
 result.update({'sqrtCostSumFloor':str(S),'lowerNumerator':str(N),'upperDenominator':str(den),'ratioFloorMillion':str(N*1000000//den),'strictAllPositiveAllocationObstruction':N>den})
else:
 result.update({'strictAllPositiveAllocationObstruction':False,'reason':'Cauchy test requires strictly positive finite/energy/rank costs; no all-allocation conclusion from this direction.'})
result['scope']='This can prove failure for every positive allocation only for this fixed transformed comparison and tested direction when strictAllPositiveAllocationObstruction is true.'
json.dump(result,open(p+'cauchy-direction.json','w'),indent=2); print(json.dumps(result))
