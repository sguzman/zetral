"""High-precision finite Gram assembly; roots are still unvalidated diagnostics."""
import math
import mpmath as mp
import numpy as np
from scipy.optimize import brentq

mp.mp.dps = 35
PI = mp.pi
GAMMA = mp.euler

def one_window(a_value, cutoffs=(4, 8, 12)):
    a = mp.mpf(a_value)
    L = 2*a
    def sinhc(t):
        return mp.sinh(t)/t if t else mp.mpf(1)
    def lk(u):
        t=L*u
        return mp.exp(t/2)/(2*u*sinhc(t)) if u else mp.inf
    def h(j):
        if j == 0:
            return mp.mpf(0)
        def f(u):
            if not u:
                return -PI*j
            q=2*PI*j*u; t=L*u
            return (2*L*mp.cosh(t/2)-lk(u))*mp.sin(q)
        return mp.quad(f,[0,mp.mpf('.25'),mp.mpf('.5'),mp.mpf('.75'),1])
    def d(j):
        def f(u):
            if not u:
                return 1+mp.mpf(7)*L/2
            q=2*PI*j*u; t=L*u; co=mp.cos(q)
            s=2*(1-u)*co
            diff=2*((co-1)-u*co-mp.expm1(-t/2))
            return 2*L*mp.cosh(t/2)*s-lk(u)*diff
        integral=mp.quad(f,[0,mp.mpf('.25'),mp.mpf('.5'),mp.mpf('.75'),1])
        return integral-(mp.log(4*PI)+GAMMA+mp.log(mp.tanh(a)))
    c=-mp.log(4*PI)-GAMMA-mp.log(mp.tanh(a))
    outs=[]
    Nmax=max(cutoffs)
    H={0:mp.mpf(0)}
    for j in range(1,Nmax+1): H[j]=h(j); H[-j]=-H[j]
    D={j:d(j) for j in range(-Nmax,Nmax+1)}
    for N in cutoffs:
        inds=list(range(-N,N+1))
        G=mp.matrix(len(inds))
        for ri,m in enumerate(inds):
            for ci,n in enumerate(inds):
                G[ri,ci]=D[m] if m==n else (-1)**(m-n+1)*(H[m]-H[n])/(PI*(m-n))
        br=[]; bi=[]
        for j in inds:
            freq=PI*j/a
            scale=2*mp.sinh(a)*(-1)**j/(mp.sqrt(L)*(1+freq**2))
            br.append(scale); bi.append(scale*freq)
        xr=mp.lu_solve(G,mp.matrix(br)); xi=mp.lu_solve(G,mp.matrix(bi))
        re=np.array([float(x) for x in xr]); im=np.array([float(x) for x in xi])
        def characteristic(s):
            r=0.0; q=0.0
            for k in inds:
                z=s+math.pi*k
                sinc=1.0 if z==0 else math.sin(z)/z
                r+=sinc*re[k+N]; q+=sinc*im[k+N]
            return s*q-float(a)*r
        roots=[]; left=0.0; fl=characteristic(left)
        for j in range(1,8001):
            right=6*math.pi*j/8000
            fr=characteristic(right)
            if fl*fr<0:
                roots.append(brentq(characteristic,left,right,xtol=2e-14,rtol=2e-14))
                if len(roots)==2:break
            left,fl=right,fr
        if len(roots)<2: raise RuntimeError(f"N={N}: fewer than two sign changes")
        for n,s in enumerate(roots,1):
            sn=float((n-mp.mpf('.5'))*PI)
            pred=float(mp.si(2*(n-mp.mpf('.5'))*PI)/2)
            outs.append((N,n,s,float(c)*(s-sn),pred,float(c)))
    return outs

if __name__=='__main__':
    print('a,N,n,s_candidate,c_times_displacement,Si_prediction,c')
    for exponent in (5,10,20):
        a=mp.exp(-exponent)
        cutoffs=(4,8,12,24,32,48,64) if exponent==20 else (4,8,12,24,32)
        for row in one_window(a,cutoffs):
            print(f'{float(a):.12g},{row[0]},{row[1]},{row[2]:.14g},{row[3]:.14g},{row[4]:.14g},{row[5]:.14g}')
