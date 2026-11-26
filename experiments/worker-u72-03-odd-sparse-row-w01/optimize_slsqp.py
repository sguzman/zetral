#!/usr/bin/env python3
"""SLSQP optimization of the fixed-transform continuous allocation objective."""
import json, math, sys
import numpy as np
import mpmath as mp
from scipy.optimize import minimize

raw_path, transform_path, proposal_path, seed_path = sys.argv[1:5]
raw = json.load(open(raw_path)); z = json.load(open(transform_path))
proposal = json.load(open(proposal_path)); seed = json.load(open(seed_path))
r = raw['rows'][0]; c = z['componentIntervals']; Q = int(raw['scale'])
assert r['h']=='62/25' and r['odd'] and r['J']==128 and r['M']==16384 and r['T']==832
n = len(r['ks']); assert n == 47

mp.mp.dps = 100
Qmp = mp.mpf(Q)
def mid_mp(pair): return (mp.mpf(int(pair[0]))+int(pair[1]))/2
E_mp = [mid_mp(c['upper'][i][i]) for i in range(n)]
U_mp = mp.matrix(n)
for i in range(n):
    for j in range(n): U_mp[i,j] = mid_mp(c['upper'][i][j])/mp.sqrt(E_mp[i]*E_mp[j])
L_mp = mp.cholesky(U_mp)
W_mp = L_mp**-1
W = np.array([[float(W_mp[i,j]) for j in range(n)] for i in range(n)])
def normalized(key):
    return np.array([[float(mid_mp(c[key][i][j])/mp.sqrt(E_mp[i]*E_mp[j])) for j in range(n)] for i in range(n)])
def whiten(A): return W @ A @ W.T
F = whiten(normalized('finite'))
keys = ['leading','second','third','fourth','fifth','sixth','seventh']
old = np.array([int(x)/int(r['tailShareDenominator']) for x in r['tailShares']])
f = proposal['factors']; rat = np.array([int(x[1])/int(f['scale']) for x in f['ratios']])
R = [whiten(normalized(k))*old[i]*rat[i] for i,k in enumerate(keys)]
q = np.array([float(mp.mpf(int(z['eighth'][i]))/E_mp[i])*old[7]*rat[7] for i in range(n)])
print(json.dumps({'highPrecisionCholeskyDigits':mp.mp.dps,'minCholeskyDiagonal':str(min(L_mp[i,i] for i in range(n))), 'maxAbsWhiteningEntry':float(np.max(np.abs(W)))}))
def matrix(p):
    A = F.copy()
    for k in range(7): A += R[k]/p[k]
    for i in range(n): A += q[i]*np.outer(W[:,i],W[:,i])/p[7+i]
    return (A+A.T)/2

def value_grad(p):
    vals, vecs = np.linalg.eigh(matrix(p))
    lam = vals[0]; v = vecs[:,0]
    g = np.empty(54)
    for k in range(7): g[k] = np.dot(v, R[k]@v)/(p[k]**2)
    for i in range(n):
        t = np.dot(v,W[:,i]); g[7+i] = q[i]*t*t/(p[7+i]**2)
    return -lam, g

def start_from(obj):
    w=np.array([int(x) for x in obj['weights']],dtype=float); return w/w.sum()
starts={'proposal':start_from(proposal), 'equal':np.ones(54)/54, 'seed':start_from(seed)}
results=[]
for name,p0 in starts.items():
    res=minimize(value_grad,p0,method='SLSQP',jac=True,bounds=[(1e-8,0.98)]*54,
                 constraints=[{'type':'eq','fun':lambda p:p.sum()-1,'jac':lambda p:np.ones_like(p)}],
                 options={'maxiter':800,'ftol':1e-12,'disp':False})
    score=-res.fun
    results.append((score,name,res))
    print(json.dumps({'start':name,'success':bool(res.success),'message':res.message,'iterations':res.nit,'objective_lambda_min':score,'min_share':float(res.x.min()),'sum_share':float(res.x.sum())}))
best=max(results,key=lambda x:x[0]); score,name,res=best
D=10**12
weights=np.floor(res.x*D).astype(object); weights=[int(x) for x in weights]
idx=max(range(54),key=lambda i:weights[i]); weights[idx]+=D-sum(weights)
out={'method':'scipy.optimize.minimize SLSQP, analytic simple-eigenvalue gradient','scipy':__import__('scipy').__version__,'fixedTransform':'u72-62-25-odd sparse correlation-selected transform (12 modified rows)','objective':'maximize smallest eigenvalue of F + sum_k R_k/p_k + sum_i q_i W[:,i]W[:,i]^T/p_(7+i)','start':name,'success':bool(res.success),'message':str(res.message),'iterations':int(res.nit),'objectiveLambdaMin':float(score),'denominator':str(D),'weights':[str(x) for x in weights],'factors':f,'continuousShares':[float(x) for x in res.x]}
out_path = sys.argv[5] if len(sys.argv) > 5 else 'research/workers/U72-02-EVEN-ALLOCATION-OPT-W01/slsqp-allocation-candidate.json'
json.dump(out,open(out_path,'w'),indent=2)
print(json.dumps({k:v for k,v in out.items() if k not in ['continuousShares','weights']}))
