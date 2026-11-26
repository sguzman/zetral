#!/usr/bin/env python3
"""Bounded SLSQP search for positive-cost Cauchy directions in the first 10 coordinates."""
import json, math
import numpy as np
from scipy.optimize import minimize
p='experiments/results/u72-62-25-even-cholesky-dual-search-w01/'
raw=json.load(open(p+'raw-t832.json')); z=json.load(open(p+'transform.json')); prop=json.load(open(p+'base-allocation.json')); prev=json.load(open(p+'previous-direction.json'))
r=raw['rows'][0]; c=z['componentIntervals']; old=list(map(int,r['tailShares'])); rat=[int(v[1]) for v in prop['factors']['ratios']]; D0=int(r['tailShareDenominator']); Q=int(raw['scale']); m=10
Ediag=[int(c['upper'][i][i][1]) for i in range(m)]
def mid(a): return (int(a[0])+int(a[1]))/2
def normalized(key,side):
 A=np.zeros((m,m))
 for i in range(m):
  for j in range(m):
   v=int(c[key][i][j][1 if side=='upper' else 0])
   A[i,j]=v/math.sqrt(Ediag[i]*Ediag[j])
 return (A+A.T)/2
E=normalized('upper','upper'); F=normalized('finite','lower')
R=[normalized(k,'lower')*(old[t]*rat[t]) for t,k in enumerate(['leading','second','third','fourth','fifth','sixth','seventh'])]
q=np.array([int(z['eighth'][i])*old[7]*rat[7]/Ediag[i] for i in range(m)])
C=D0*Q

def costs(y):
 return [float(y@A@y) for A in R]+[float(np.dot(q,y*y))]
def score(y):
 e=float(y@E@y); f=float(y@F@y); cs=costs(y)
 if e<=1e-12 or f<=1e-12 or min(cs)<=1e-12:return -1e6
 return (f*C+sum(math.sqrt(v) for v in cs)**2)/(e*C)
def obj(y):return -score(y)
cons=[{'type':'eq','fun':lambda y:float(y@y-1)}]
cons.append({'type':'ineq','fun':lambda y:float(y@E@y-1e-12)})
cons.append({'type':'ineq','fun':lambda y:float(y@F@y-1e-12)})
for A in R: cons.append({'type':'ineq','fun':lambda y,A=A:float(y@A@y-1e-12)})
cons.append({'type':'ineq','fun':lambda y:float(np.dot(q,y*y)-1e-12)})
starts=[]
for i in range(m):
 a=np.zeros(m);a[i]=1;starts.append(a)
for i in range(m):
 a=np.zeros(m);a[i]=-1;starts.append(a)
# Previous exact negative direction, mapped to normalized-energy coordinates.
x0=np.array([int(v) for v in prev['vector']]+[0]*(m-len(prev['vector'])),dtype=float)
y0=x0*np.sqrt(np.array(Ediag,dtype=float));
if np.linalg.norm(y0)>0: starts.append(y0/np.linalg.norm(y0))
results=[]
for k,y0 in enumerate(starts):
 res=minimize(obj,y0,method='SLSQP',constraints=cons,bounds=[(-1,1)]*m,options={'maxiter':600,'ftol':1e-11,'disp':False})
 sc=score(res.x)
 if sc>-1e5:results.append((sc,res.x.copy(),k,bool(res.success),str(res.message),int(res.nit)))
log=[{'start':k,'success':ok,'message':msg,'iterations':nit,'ratio':float(sc)} for sc,x,k,ok,msg,nit in results]
if not results: raise SystemExit('no feasible positive-cost direction found from 21 starts')
sc,y,k,ok,msg,nit=max(results,key=lambda t:t[0])
# Convert normalized-energy coordinates y back to an original-coordinate direction x.
x=y/np.sqrt(np.array(Ediag,dtype=float)); x=x/np.max(np.abs(x)); D=10**20; xi=[int(np.rint(t*D)) for t in x]
# Exact recomputation with interval endpoints and floor square roots.
support=[(i,v) for i,v in enumerate(xi) if v]
def quad(A,side):
 out=0
 for i,a in support:
  for j,b in support:
   qij=a*b; lo,hi=map(int,A[i][j]); out+=qij*(hi if side=='upper' and qij>=0 else lo if side=='upper' else lo if qij>=0 else hi)
 return out
Eex=quad(c['upper'],'upper'); Fex=quad(c['finite'],'lower')
rank=[quad(c[key],'lower')*old[t]*rat[t] for t,key in enumerate(['leading','second','third','fourth','fifth','sixth','seventh'])]
eighth=sum(int(z['eighth'][i])*v*v*old[7]*rat[7] for i,v in support); costsx=rank+[eighth]
out={'method':'SciPy SLSQP bounded multi-start over first 10 normalized-energy coordinates; unit vectors ±e_i plus previous negative direction','scipy':__import__('scipy').__version__,'starts':len(starts),'feasiblePositiveCostReturns':len(results),'solverSuccessCount':sum(1 for t in results if t[3]),'bestStart':k,'bestFloatRatio':float(sc),'bestSolverSuccess':ok,'bestIterations':nit,'solverMessage':msg,'exactDirectionDenominator':str(D),'exactDirection':[str(v) for v in xi],'exactEnergyUpper':str(Eex),'exactFiniteLower':str(Fex),'exactRankCosts':[str(v) for v in rank],'exactEighthCost':str(eighth),'allExactCostsPositive':Eex>0 and Fex>0 and all(v>0 for v in costsx),'searchLog':log}
if Eex>0 and Fex>0 and all(v>0 for v in costsx):
 S=sum(math.isqrt(v) for v in costsx);N=Fex*D0*Q+S*S;den=Eex*D0*Q
 out.update({'sqrtCostSumFloor':str(S),'lowerNumerator':str(N),'upperDenominator':str(den),'exactRatioFloorMillion':str(N*1000000//den),'strictAllPositiveAllocationObstruction':N>den})
else:out.update({'strictAllPositiveAllocationObstruction':False,'reason':'Exact positive-cost hypotheses fail after rationalization.'})
json.dump(out,open(p+'direction-search.json','w'),indent=2)
print(json.dumps({k:v for k,v in out.items() if k not in ['exactDirection','exactEnergyUpper','exactFiniteLower','exactRankCosts','exactEighthCost','sqrtCostSumFloor','lowerNumerator','upperDenominator','searchLog']}))
