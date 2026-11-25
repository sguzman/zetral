# Binary64 stress test, not proof. Executed with NumPy.
import numpy as np
rng=np.random.default_rng(20261125)
for th in [0.01,0.2,0.7]:
    v=np.array([np.cos(th),np.sin(th)])
    print(th,2-v@np.diag([2,-3])@v,5*np.sin(th)**2)
worst=0; cases=0; pos=0; violations=0
for _ in range(500):
    d=int(rng.integers(4,18)); n=int(rng.integers(1,d//2+1)); m=int(rng.integers(n,d))
    vals=np.sort(rng.uniform(-3,3,d))[::-1]; vals[:n]=np.sort(rng.uniform(.1,4,n))[::-1]+3
    Q=np.linalg.qr(rng.normal(size=(d,m)))[0]; P=Q@Q.T
    delta=np.linalg.norm((np.eye(d)-P)[:,:n],2)
    mu=np.linalg.eigvalsh(Q.T@np.diag(vals)@Q)[::-1][n-1]
    gap=vals[n-1]-mu; bound=(vals[n-1]-vals[-1])*delta**2
    if gap>bound+1e-10 or gap<-1e-10:violations+=1
    worst=max(worst,gap/bound);cases+=1
    if vals[n-1]-bound>0:pos+=1
print(cases,violations,worst,pos)
assert violations==0
# Observed: 500 0 0.9842045704043367 225
