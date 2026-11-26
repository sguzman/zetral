#!/usr/bin/env python3
"""Independent high-precision diagnostic of one staged even quadratic form."""
import json, sys, mpmath as mp
raw=json.load(open(sys.argv[1],encoding='utf-8')); r=raw['rows'][0]
assert raw['scale']==str(10**66)
assert (r['h'],r['odd'],r['J'],r['T'],r['M'],r['KEM'])==('62/25',False,128,832,16384,20)
mp.mp.dps=90; Q=int(raw['scale']); h=mp.mpf(62)/25; z=mp.mpf(1)/4
low,trial=r['ks'],r['ts']; modes=low+trial
w=[mp.pi*n/h for n in modes]; x=[a*a for a in w]; norm=[1 if n==0 else mp.sqrt(2) for n in modes]
N=100

def base_sum(xx):
    a=mp.sqrt(xx)/2
    if not a: return mp.polygamma(1,z)/4
    return mp.re((mp.digamma(z+1j*a)-mp.digamma(z-1j*a))/(8j*a))
F=[]; D=[]; da=[]
for xx,ww in zip(x,w):
    b=base_sum(xx)
    db=b+xx*mp.diff(base_sum,xx)
    ex=mp.fsum(mp.exp(-h*(2*j+mp.mpf('0.5')))/((2*j+mp.mpf('0.5'))**2+xx) for j in range(N))
    dex=mp.fsum(mp.exp(-h*(2*j+mp.mpf('0.5')))*(2*j+mp.mpf('0.5'))**2/((2*j+mp.mpf('0.5'))**2+xx)**2 for j in range(N))
    F.append(b-ex); D.append(db-dex)
    da.append(mp.re(mp.digamma(z+1j*ww/2))-mp.digamma(z))
shifts=[2,3,4,5,7,8,9,11]
weights=[mp.log(2)/mp.sqrt(2),mp.log(3)/mp.sqrt(3),mp.log(2)/2,mp.log(5)/mp.sqrt(5),mp.log(7)/mp.sqrt(7),mp.log(2)/mp.sqrt(8),mp.log(3)/3,mp.log(11)/mp.sqrt(11)]
sh=mp.sinh(h/4); pole=[norm[i]*sh/(x[i]+mp.mpf(1)/4) for i in range(len(modes))]
alpha=-(mp.euler+mp.pi/2+3*mp.log(2)+mp.log(mp.pi))
trig=[]
for p in shifts:
    s=mp.log(p); trig.append((s,[mp.sin(a*s) for a in w],[mp.cos(a*s) for a in w]))
# coeff row for the first stored transformed direction, with its trial correction.
c=[mp.mpf(int(t))/Q for t in r['basis'][0]]+[-mp.mpf(int(t))/Q for t in r['trial'][0]]
assert len(c)==len(modes)
q=mp.mpf(0); nmode=len(modes)
for i in range(nmode):
    # diagonal
    v=2*norm[i]**2*D[i]/h+2*pole[i]**2/h+alpha+da[i]
    for s,ss,cc in trig:
        I=(h-s) if modes[i]==0 else ((h-s)*cc[i]-ss[i]/w[i])/2
        v-=2*weights[trig.index((s,ss,cc))]*norm[i]**2*I/h
    q+=c[i]*c[i]*v
    for j in range(i+1,nmode):
        kval=(x[i]*F[i]-x[j]*F[j])/(x[i]-x[j])
        v=2*norm[i]*norm[j]*kval/h+2*pole[i]*pole[j]/h
        for t,(s,ss,cc) in enumerate(trig):
            I=(w[j]*ss[j]-w[i]*ss[i])/(x[i]-x[j])
            v-=2*weights[t]*norm[i]*norm[j]*I/h
        q+=2*c[i]*c[j]*v
lo,hi=map(int,r['componentIntervals']['upper'][0][0]); lo=mp.mpf(lo)/Q; hi=mp.mpf(hi)/Q
# Explicit geometric bound on omitted exponential-series terms, maximized at omega=0.
rN=2*N+mp.mpf('0.5'); tail=mp.exp(-h*rN)/(rN**2*(1-mp.exp(-2*h)))
print(json.dumps({'precision_decimal_digits':mp.mp.dps,'value':mp.nstr(q,75),'staged_interval':[mp.nstr(lo,75),mp.nstr(hi,75)],'inside':bool(lo<=q<=hi),'exponential_sum_terms':N,'omitted_exponential_tail_bound':mp.nstr(tail,8),'status':'high-precision diagnostic only; special-function rounding not outward certified'},indent=2))
