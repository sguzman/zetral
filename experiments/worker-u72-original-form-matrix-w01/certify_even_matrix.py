#!/usr/bin/env python3
"""Outward interval evaluation of full U72 even comparison matrix.

Uses mpmath.iv only for elementary interval operations. Digamma and trigamma
are evaluated by independent Euler-Maclaurin recurrences with explicit
absolute remainder bounds derived from the Fourier bound on periodic Bernoulli
polynomials. No staged-generator arithmetic is imported or executed.
"""
import json, sys, math
from fractions import Fraction
import mpmath as mp
from mpmath import libmp

mp.iv.dps = 100
I = mp.iv.mpf
raw=json.load(open(sys.argv[1],encoding='utf-8')); row=raw['rows'][0]
assert raw['scale']==str(10**66)
assert (row['h'],row['odd'],row['J'],row['T'],row['M'],row['KEM'])==('62/25',False,128,832,16384,20)
Q=10**66; h=I(62)/25; pi=mp.iv.pi; z0=(I(1)/4,I(0))

B=[Fraction(0) for _ in range(43)]; B[0]=Fraction(1)
for n in range(1,len(B)):
    B[n]=-sum(Fraction(math.comb(n+1,k))*B[k] for k in range(n))/Fraction(n+1)

def rat(x): return I(x.numerator)/x.denominator if isinstance(x,Fraction) else I(x)
def cadd(a,b): return (a[0]+b[0],a[1]+b[1])
def cneg(a): return (-a[0],-a[1])
def csub(a,b): return cadd(a,cneg(b))
def cmul(a,b): return (a[0]*b[0]-a[1]*b[1],a[0]*b[1]+a[1]*b[0])
def cinv(a):
    d=a[0]*a[0]+a[1]*a[1]
    return (a[0]/d,-a[1]/d)
def cdiv(a,b): return cmul(a,cinv(b))
def cpow(a,n):
    out=(I(1),I(0)); base=a
    while n:
        if n&1: out=cmul(out,base)
        n//=2
        if n: base=cmul(base,base)
    return out
def clog(a):
    assert a[0].a>0
    return (mp.iv.log(mp.iv.sqrt(a[0]*a[0]+a[1]*a[1])), mp.iv.atan2(a[1],a[0]))

SHIFT=512; ORDER=20
zshift_re=Fraction(4*SHIFT+1,4)
BORDER=B[2*ORDER]
# Conservative Euler-Maclaurin bounds: Fourier gives |Bbar_2m|<=2|B_2m|;
# integrate (t+Re Z)^(-2m-1) for digamma and the derivative kernel for trigamma.
psi_err=2*abs(BORDER)/(zshift_re**(2*ORDER))
tri_err=2*abs(BORDER)/(zshift_re**(2*ORDER+1))
errpsi=rat(psi_err); errtri=rat(tri_err)

def psi_tri(z):
    Z=(z[0]+SHIFT,z[1]); invZ=cinv(Z)
    ps=csub(clog(Z),cmul((I(1)/2,I(0)),invZ))
    tr=cadd(invZ,cmul((I(1)/2,I(0)),cpow(invZ,2)))
    for k in range(1,ORDER+1):
        b=rat(B[2*k]); ps=csub(ps,cmul((b/(2*k),I(0)),cpow(invZ,2*k)))
        tr=cadd(tr,cmul((b,I(0)),cpow(invZ,2*k+1)))
    ps=cadd(ps,(mp.iv.mpf([-1,1])*errpsi,mp.iv.mpf([-1,1])*errpsi))
    tr=cadd(tr,(mp.iv.mpf([-1,1])*errtri,mp.iv.mpf([-1,1])*errtri))
    p_tail=(I(0),I(0)); t_tail=(I(0),I(0))
    for j in range(SHIFT):
        u=cinv((z[0]+j,z[1])); p_tail=cadd(p_tail,u); t_tail=cadd(t_tail,cpow(u,2))
    return csub(ps,p_tail), cadd(tr,t_tail)

HN=8192; harmonic=sum((Fraction(1,j) for j in range(1,HN+1)),Fraction(0))
gamma=rat(harmonic)-mp.iv.log(I(HN))-I(1)/(2*HN)
for k in range(1,ORDER+1): gamma += rat(B[2*k]/(2*k*HN**(2*k)))
gamma_err=2*abs(BORDER)/(HN**(2*ORDER))
gamma += mp.iv.mpf([-1,1])*rat(gamma_err)
alpha=-(gamma+pi/2+3*mp.iv.log(I(2))+mp.iv.log(pi))

modes=row['ks']+row['ts']; omegas=[pi*n/h for n in modes]; xs=[w*w for w in omegas]
norms=[I(1) if n==0 else mp.iv.sqrt(I(2)) for n in modes]
F=[]; D=[]; da=[]
psi_real0=psi_tri(z0)[0][0]
NEXP=100
for n,w,x in zip(modes,omegas,xs):
    a=w/2; z=(I(1)/4,a); ps,tr=psi_tri(z)
    if n==0:
        fb=tr[0]/4; db=tr[0]/4
    else:
        fb=ps[1]/(4*a)
        db=tr[0]/8+ps[1]/(8*a)
    ex=I(0); dex=I(0)
    for j in range(NEXP):
        rr=I(2*j)+I(1)/2; q=mp.iv.exp(-h*rr); den=rr*rr+x
        ex += q/den; dex += q*rr*rr/(den*den)
    F.append(fb-ex); D.append(db-dex); da.append(ps[0]-psi_real0)

shifts=[2,3,4,5,7,8,9,11]
weights=[mp.iv.log(I(2))/mp.iv.sqrt(I(2)),mp.iv.log(I(3))/mp.iv.sqrt(I(3)),mp.iv.log(I(2))/2,
         mp.iv.log(I(5))/mp.iv.sqrt(I(5)),mp.iv.log(I(7))/mp.iv.sqrt(I(7)),mp.iv.log(I(2))/mp.iv.sqrt(I(8)),
         mp.iv.log(I(3))/3,mp.iv.log(I(11))/mp.iv.sqrt(I(11))]
trig=[]
for p in shifts:
    s=mp.iv.log(I(p)); trig.append((s,[mp.iv.sin(w*s) for w in omegas],[mp.iv.cos(w*s) for w in omegas]))
sh=(mp.iv.exp(h/4)-mp.iv.exp(-h/4))/2; poles=[norms[i]*sh/(xs[i]+I(1)/4) for i in range(len(modes))]
coeffs=[]
ND=len(row['basis'])
for d in range(ND):
    coeffs.append([rat(Fraction(int(t),Q)) for t in row['basis'][d]]+[-rat(Fraction(int(t),Q)) for t in row['trial'][d]])

L=len(modes)
M=[[I(0) for _ in range(L)] for _ in range(L)]
for i,n in enumerate(modes):
    v=2*norms[i]*norms[i]*D[i]/h+2*poles[i]*poles[i]/h+alpha+da[i]
    for t,(s,sins,coss) in enumerate(trig):
        if n==0: integ=h-s
        else: integ=((h-s)*coss[i]-sins[i]/omegas[i])/2
        v -= 2*weights[t]*norms[i]*norms[i]*integ/h
    M[i][i]=v
    for j in range(i+1,L):
        k=modes[j]
        kval=(xs[i]*F[i]-xs[j]*F[j])/(xs[i]-xs[j])
        v=2*norms[i]*norms[j]*kval/h+2*poles[i]*poles[j]/h
        for t,(s,sins,coss) in enumerate(trig):
            integ=(omegas[j]*sins[j]-omegas[i]*sins[i])/(xs[i]-xs[j])
            v -= 2*weights[t]*norms[i]*norms[j]*integ/h
        M[i][j]=M[j][i]=v
# First contract M with each stored vector, then contract each result with
# every stored vector. This gives all 47x47 interval bilinear values.
MC=[[I(0) for _ in range(ND)] for _ in range(L)]
for i in range(L):
    for d in range(ND):
        value=I(0)
        for j in range(L): value += M[i][j]*coeffs[d][j]
        MC[i][d]=value
Bmat=[[I(0) for _ in range(ND)] for _ in range(ND)]
for a in range(ND):
    for b in range(ND):
        value=I(0)
        for i in range(L): value += coeffs[a][i]*MC[i][b]
        Bmat[a][b]=value

def endpoint(iv, lower):
    tup=iv._mpi_[0 if lower else 1]; num,den=libmp.to_rational(tup); return Fraction(num,den)
results=[]
for a in range(ND):
    for b in range(ND):
        q=Bmat[a][b]
        sl,su=map(int,row['componentIntervals']['upper'][a][b]); lo=Fraction(sl,Q); hi=Fraction(su,Q)
        qlo=endpoint(q,True); qhi=endpoint(q,False)
        results.append({'row':a,'column':b,'interval':str(q),'inside_staged':qlo>=lo and qhi<=hi,
                        'staged_exact':[str(lo),str(hi)],'contained_exact':[str(qlo),str(qhi)]})
out={'method':'mpmath.iv outward arithmetic; independent Euler-Maclaurin digamma/trigamma recurrence',
     'iv_digits':mp.iv.dps,'support_modes':L,'special_function_shift':SHIFT,'Bernoulli_order':ORDER,
     'psi_remainder_radius':str(psi_err),'trigamma_remainder_radius':str(tri_err),
     'gamma_remainder_radius':str(gamma_err),'exponential_terms':NEXP,
     'exponential_tail_bound_max':'2.8199374e-221','entries':results,'entry_count':ND*ND,
     'status':'outward interval result, conditional on stated Euler-Maclaurin remainder bounds'}
print(json.dumps(out,indent=2))
