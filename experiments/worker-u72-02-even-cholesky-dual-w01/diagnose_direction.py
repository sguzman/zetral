#!/usr/bin/env python3
"""Find and exact-check a high-precision rationalized negative direction."""
import json, mpmath as mp
p='experiments/results/u72-62-25-even-cholesky-witness-w01/'
r=json.load(open(p+'float-replay.json'))
L=[[int(x) for x in row] for row in r['lowerInteger']]
E=[int(x) for x in r['energyUpper']]
R=[int(x) for x in r['radii']]
assert r['positiveMinors']==9 and len(L)==47
m=10; mp.mp.dps=100
H=mp.matrix(m)
for i in range(m):
 for j in range(m): H[i,j]=mp.mpf(L[i][j])/mp.sqrt(mp.mpf(E[i])*E[j])
vals,vecs=mp.eigsy((H+H.T)/2)
y=[vecs[i,0]/mp.sqrt(E[i]) for i in range(m)]
ymax=max(abs(t) for t in y); y=[t/ymax for t in y]
def qmat(A,x): return sum(x[i]*A[i][j]*x[j] for i in range(len(x)) for j in range(len(x)))
Lm=[row[:m] for row in L[:m]]; A0=[row[:] for row in Lm]
for i in range(m): A0[i][i]+=R[i]
chosen=None
for digits in (20,30,40,50,60,70):
 D=10**digits
 x=[]
 for t in y:
  v=abs(t)*D; q=mp.floor(v); z=int(q+(1 if v-q>=mp.mpf('0.5') else 0)); x.append(-z if t<0 else z)
 qL=qmat(Lm,x); qA=qmat(A0,x); qR=sum(R[i]*x[i]*x[i] for i in range(m)); qE=sum(E[i]*x[i]*x[i] for i in range(m))
 if qA-qR==qL and qL<0: chosen=(digits,D,x,qL,qA,qR,qE); break
if chosen is None: raise SystemExit('no exact negative rounded direction found through denominator 10^70')
digits,D,x,qL,qA,qR,qE=chosen
out={'blockDimension':m,'fullPositiveLeadingMinors':r['positiveMinors'],'firstFailedPivotNumber':m,'normalizedMidpointApproxEigenvalue':str(vals[0]),'eigensolveDigits':mp.mp.dps,'vectorRationalizedDenominator':str(D),'vector':[str(v) for v in x],'exactQuadraticLowerMatrix':str(qL),'exactQuadraticMidpointMatrix':str(qA),'exactQuadraticRadiusPenalty':str(qR),'exactQuadraticEnergyUpper':str(qE),'radiusExceedsMidpoint':qR>qA,'midpointOverEnergy':str(mp.mpf(qA)/qE),'radiusOverEnergy':str(mp.mpf(qR)/qE),'lowerOverEnergy':str(mp.mpf(qL)/qE),'quadraticIdentityChecked':qA-qR==qL,'interpretation':'The integer vector has an exactly negative quadratic form against the stored integer lower comparison matrix on the first failed 10x10 block. Midpoint-minus-radius decomposition is exact for this stored comparison; inputs are not independently reconstructed.'}
json.dump(out,open(p+'negative-direction.json','w'),indent=2)
print(json.dumps({k:v for k,v in out.items() if k!='vector'}))
