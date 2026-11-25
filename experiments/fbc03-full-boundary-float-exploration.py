import math, json, numpy as np
from scipy.linalg import solve,eigvalsh
from scipy.special import digamma
PI=math.pi; S=math.log(2); b=S/math.sqrt(2); J=4096; M=512
r=2*np.arange(J)+.5

def calc(h):
 N=M; n=np.arange(N+1); nu=np.full(N+1,math.sqrt(2.));nu[0]=1.; om=PI*n/h; x=om*om; q=np.exp(-r*h)
 F={}; diag={}
 a=2*J+.5
 for eta in (1,-1):
  wt=1-eta*q
  f=np.array([np.sum(wt/(r*r+xx)) for xx in x]); d=np.array([np.sum(wt*r*r/(r*r+xx)**2) for xx in x])
  for i,xx in enumerate(x):
   if xx==0: f[i]+=1/(2*a); d[i]+=1/(2*a)
   else:
    w=math.sqrt(xx); at=math.atan(w/a); f[i]+=at/(2*w); d[i]+=at/(4*w)+a/(4*(a*a+xx))
  F[eta]=f;diag[eta]=d
 K=np.zeros((N+1,N+1))
 for i in range(N+1):
  eta=1 if i%2==0 else -1;K[i,i]=2*nu[i]**2/h*diag[eta][i]
  for k in range(i):
   if (i-k)%2:continue
   K[i,k]=K[k,i]=2*nu[i]*nu[k]/h*(x[i]*F[eta][i]-x[k]*F[eta][k])/(x[i]-x[k])
 P=np.zeros_like(K);prime=h>S
 if prime:
  for i in range(N+1):
   for k in range(i,N+1):
    if (i-k)%2:continue
    wi,wk=om[i],om[k]
    if i==k==0: I=h-S
    elif i==k: I=(h-S)*math.cos(wi*S)/2-math.sin(wi*S)/(2*wi)
    else:I=(wk*math.sin(wk*S)-wi*math.sin(wi*S))/(wi*wi-wk*wk)
    P[i,k]=P[k,i]=2*b*nu[i]*nu[k]*I/h
 sh, ch=math.sinh(h/4),math.cosh(h/4);c=nu*sh/(x+.25);z=nu*np.where(n%2==0,0,-ch)/(x+.25);H=2/h*np.outer(c,c)-2/h*np.outer(z,z)
 al=np.real(digamma(.25+1j*om[:8]/2))-math.log(PI)
 out=[]
 for odd in (False,True):
  ks=np.array([1,3,5,7] if odd else [0,2,4,6]); eta=-1 if odd else 1
  wb=ks.copy();wp=np.array([1,3,5,7,9,11,13,15] if odd else [0,2,4,6,8,10,12,14]); ih=np.arange(8+int(odd),M+1,2)
  GB=K[np.ix_(wb,wb)]; VB=K[np.ix_(ih,wb)]
  ZW=b*np.eye(len(wp))-P[np.ix_(wp,wp)]; VP=b*(ih[:,None]==wp[None,:]).astype(float)-P[np.ix_(ih,wp)]
  C=np.zeros((len(wb)+len(wp),len(wb)+len(wp)));C[:len(wb),:len(wb)]=GB;C[len(wb):,len(wb):]=ZW
  A=np.diag(al[ks])+K[np.ix_(ks,ks)]-P[np.ix_(ks,ks)]+H[np.ix_(ks,ks)]
  R=K[np.ix_(ih,ks)]-P[np.ix_(ih,ks)]+H[np.ix_(ih,ks)]
  V=np.concatenate([VB,VP],axis=1)
  poleloss=(2*(math.sinh(h/2)-h/2)-2/h*np.sum(z[ks]**2)) if odd else 0
  gg=np.empty(M+1);gg[0]=0;gg[1:]=np.log(np.arange(1,M+1)/(2*h))-3*h*h/(2*PI*PI*np.arange(1,M+1)**2);g=gg[ih]-b-poleloss
  gram=C+V.T@(V/g[:,None]);rhs=V.T@(R/g[:,None]);Y=solve(gram,rhs,assume_a='pos')
  Res=R-V@Y;Sch=A-Y.T@C@Y-Res.T@(Res/g[:,None]); eig=eigvalsh(Sch)[0]
  E=math.exp(-h/2)/(1-math.exp(-2*h));tail=0
  for qcol,k in enumerate(ks):
   yb=Y[:len(wb),qcol]; leading_b=nu[k]-nu[wb]@yb
   C1b=math.sqrt(2)/2*abs(leading_b); C2b=0
   for jidx,j in enumerate(wb):
    bracket=1+E+om[j]**2*F[eta][j]/(1-(j/(M+1))**2)
    B=2*math.sqrt(2)*nu[j]*h/(PI*PI)*bracket
    C2b+=abs((1 if j==k else 0)-yb[jidx])*B
   C2b+=2/h*math.sqrt(2)*h*h/(PI*PI)*(sh if not odd else ch)*abs(c[k] if not odd else z[k])
   yp=Y[len(wb):,qcol].copy(); aa=yp.copy()
   if k in wp:aa[np.where(wp==k)[0][0]]-=1
   Aamp=np.sum(aa*nu[wp]);fac=2*b*math.sqrt(2)/PI;C1p=fac*abs(Aamp)
   rem=sum(abs(aa[j])*nu[wp[j]]*(wp[j]+wp[j]**2/(M+1)) for j in range(len(wp)))
   C2p=fac*rem/(1-(max(wp)/(M+1))**2)
   C1=C1b+C1p;C2=C2b+C2p
   tail+=(C1*C1/(2*(M-1))+C1*C2/(2*(M-1)**2)+C2*C2/(6*(M-1)**3))/g[-1]
  out.append((odd,eig,tail,eig-tail,g[0],np.linalg.eigvalsh(ZW)[0],np.linalg.eigvalsh(GB)[0]))
 return out
for h in [.8,.85,.9]:
 print(json.dumps({'h':h,'sectors':[{'odd':bool(z[0]),'finite_schur_min':float(z[1]),'tail_upper_float':float(z[2]),'after_tail':float(z[3]),'min_high_weight':float(z[4]),'prime_gram_min':float(z[5]),'boundary_gram_min':float(z[6])} for z in calc(h)]},sort_keys=True))
