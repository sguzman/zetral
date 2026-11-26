#!/usr/bin/env python3
"""Exact sparse Cauchy screen plus bounded full-47D SLSQP direction search."""
import json, math
import numpy as np
from scipy.optimize import minimize
p='experiments/results/u72-62-25-even-cholesky-full-dual-w01/'
raw=json.load(open(p+'raw-t832.json')); z=json.load(open(p+'transform.json')); prop=json.load(open(p+'base-allocation.json'))
r=raw['rows'][0]; c=z['componentIntervals']; n=47; Q=int(raw['scale']); D0=int(r['tailShareDenominator']); old=list(map(int,r['tailShares'])); rat=[int(v[1]) for v in prop['factors']['ratios']]; C=float(D0*Q)
keys=['leading','second','third','fourth','fifth','sixth','seventh']
def quad_exact(A,support,side):
 total=0
 for i,a in support:
  for j,b in support:
   q=a*b; lo,hi=map(int,A[i][j]); total+=q*(hi if side=='upper' and q>=0 else lo if side=='upper' else lo if q>=0 else hi)
 return total

def exact_eval(support):
 E=quad_exact(c['upper'],support,'upper'); F=quad_exact(c['finite'],support,'lower')
 rank=[quad_exact(c[k],support,'lower')*old[t]*rat[t] for t,k in enumerate(keys)]
 eighth=sum(int(z['eighth'][i])*x*x*old[7]*rat[7] for i,x in support); costs=rank+[eighth]
 out={'energy':E,'finite':F,'rank':rank,'eighth':eighth,'all_positive':E>0 and F>0 and all(v>0 for v in costs)}
 if out['all_positive']:
  S=sum(math.isqrt(v) for v in costs);N=F*D0*Q+S*S;den=E*D0*Q
  out.update({'ratio':N*1000000//den,'strict':N>den,'N':N,'den':den})
 return out
# Exhaustively screen the one- and two-coordinate direction family using exact integers.
directions=[]
for i in range(n): directions.append([(i,1)])
for i in range(n):
 for j in range(i+1,n):
  directions.extend([[(i,1),(j,-1)],[(i,1),(j,1)]])
exact_sparse=[]; eligible=0
for d in directions:
 v=exact_eval(d)
 if v['all_positive']:
  eligible+=1; exact_sparse.append((int(v['ratio']),d,v))
exact_sparse.sort(key=lambda t:t[0],reverse=True)
if not exact_sparse: raise SystemExit('no positive-cost sparse direction')
# Normalize each component by sqrt of the upper-energy diagonal for stable continuous search.
Ediag=[int(c['upper'][i][i][1]) for i in range(n)]
def normalized(key,side):
 A=np.empty((n,n),dtype=float)
 for i in range(n):
  for j in range(n):
   v=int(c[key][i][j][1 if side=='upper' else 0]);A[i,j]=v/math.sqrt(Ediag[i]*Ediag[j])
 return (A+A.T)/2
E=normalized('upper','upper');F=normalized('finite','lower')
R=[normalized(k,'lower')*(old[t]*rat[t]) for t,k in enumerate(keys)]
q=np.array([int(z['eighth'][i])*old[7]*rat[7]/Ediag[i] for i in range(n)])
def calc(y):
 ev=float(y@E@y);fv=float(y@F@y);cs=[float(y@A@y) for A in R]+[float(np.dot(q,y*y))]
 if ev<=1e-15 or fv<=1e-15 or min(cs)<=1e-15:return None
 S=sum(math.sqrt(v) for v in cs);N=fv*C+S*S;den=ev*C
 gradN=2*C*(F@y)+2*S*sum((A@y/math.sqrt(v) for A,v in zip(R,cs[:-1])),np.zeros(n))
 gradN+=2*S*(q*y/math.sqrt(cs[-1]))
 gradD=2*C*(E@y)
 return N/den,(gradN*den-N*gradD)/(den*den),cs

def fun(y):
 a=calc(y);return 1e6 if a is None else -a[0]
def jac(y):
 a=calc(y);return np.zeros(n) if a is None else -a[1]
constraints=[{'type':'eq','fun':lambda y:float(y@y-1),'jac':lambda y:2*y}]
for A in [E,F]+R:
 constraints.append({'type':'ineq','fun':lambda y,A=A:float(y@A@y-1e-15),'jac':lambda y,A=A:2*(A@y)})
constraints.append({'type':'ineq','fun':lambda y:float(np.dot(q,y*y)-1e-15),'jac':lambda y:2*q*y})
# Top 12 exact-feasible sparse directions; sign duplicates are permitted and logged.
starts=[]
for _,d,v in exact_sparse[:12]:
 x=np.zeros(n)
 for i,a in d:x[i]=a
 y=x*np.sqrt(np.array(Ediag,dtype=float)); y/=np.linalg.norm(y)
 starts.append(y)
results=[]
for idx,y0 in enumerate(starts):
 res=minimize(fun,y0,method='SLSQP',jac=jac,constraints=constraints,bounds=[(-1,1)]*n,options={'maxiter':350,'ftol':1e-10,'disp':False})
 fval=-res.fun if res.fun<1e5 else -1e6
 if fval>-1e5:results.append({'start':idx,'success':bool(res.success),'message':str(res.message),'iterations':int(res.nit),'ratio':float(fval),'y':[float(v) for v in res.x]})
if not results: raise SystemExit('no feasible full-dimensional candidates returned')
best=max(results,key=lambda x:x['ratio']); y=np.array(best.pop('y'))
# Convert to original coordinates and rationalize; all claims below use exact integer arithmetic.
x=y/np.sqrt(np.array(Ediag,dtype=float));x=x/np.max(np.abs(x));D=10**20
xi=[int(np.rint(v*D)) for v in x];support=[(i,v) for i,v in enumerate(xi) if v]
exact=exact_eval(support)
out={'sparseDirectionsChecked':len(directions),'sparsePositiveCostDirections':eligible,'topSparseDirection':{'support':[[i,str(v)] for i,v in exact_sparse[0][1]],'ratioFloorMillion':str(exact_sparse[0][0])},'optimizer':'SciPy SLSQP with analytic ratio gradient, equality unit-sphere constraint, positivity constraints for all exact-bound costs; full 47 normalized-energy variables','scipy':__import__('scipy').__version__,'starts':len(starts),'returnedFeasibleCandidates':len(results),'solverSuccessCount':sum(1 for x in results if x['success']),'candidateLog':[{k:v for k,v in x.items() if k!='y'} for x in results],'bestCandidate':best,'rationalizedDenominator':str(D),'rationalizedVector':[str(v) for v in xi],'exactCostSigns':{'energyPositive':exact['energy']>0,'finitePositive':exact['finite']>0,'rankPositive':[v>0 for v in exact['rank']],'eighthPositive':exact['eighth']>0},'exactRatioFloorMillion':str(exact['ratio']) if exact['all_positive'] else None,'strictAllPositiveAllocationObstruction':bool(exact.get('strict',False))}
if exact is not None:out['exactCosts']={'energyUpper':str(exact['energy']),'finiteLower':str(exact['finite']),'rank':[str(v) for v in exact['rank']],'eighth':str(exact['eighth']),'allPositive':exact['all_positive'],'cauchyNumerator':str(exact['N']) if exact['all_positive'] else None,'comparisonDenominator':str(exact['den']) if exact['all_positive'] else None}
json.dump(out,open(p+'full-direction-search.json','w'),indent=2)
print(json.dumps({k:v for k,v in out.items() if k not in ['rationalizedVector','exactCosts','candidateLog']}))
