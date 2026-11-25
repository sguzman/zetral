import mpmath as m,sys,csv
m.mp.dps=80;P=m.pi;N=18;order=160
rule=[]
for j in range(1,order//2+1):
 z=m.cos(P*(4*j-1)/(4*order+2))
 for _ in range(30):
  a,b=m.mpf(1),z
  for k in range(2,order+1):a,b=b,((2*k-1)*z*b-(k-1)*a)/k
  dp=order*(z*b-a)/(z*z-1);dz=b/dp;z-=dz
  if abs(dz)<8*m.eps:break
 w=1/((1-z*z)*dp*dp);rule.extend([((1-z)/2,w),((1+z)/2,w)])
wr=csv.writer(sys.stdout);wr.writerow(['X','N','root6','gamma6','error6','cond','direct_difference','scan_refinement_difference']);sys.stdout.flush()
gamma=m.im(m.zetazero(6))
for X in [3,5,7,11]:
 L=m.log(X);ids=list(range(-18,19));h=[m.mpf(0)]*19;d=h.copy();pp=[(p**k,p) for p in [2,3,5,7] for k in range(1,5) if p**k<X];off=m.log(4*P)+m.euler+m.log(m.tanh(L/2))
 for u,w in rule:
  t=L*u;K=m.exp(t/2)/(2*m.sinh(t));A=2*m.cosh(t/2);c=m.exp(-t/2)
  for k in range(19):
   a=2*P*k*u;s=m.sin(a);co=m.cos(a);S=2*(1-u)*co
   h[k]+=w*L*(A-K)*s;d[k]+=w*L*(A*S-K*(S-2*c))
 for q,p in pp:
  u=m.log(q)/L;v=m.log(p)/m.sqrt(q)
  for k in range(19):h[k]-=v*m.sin(2*P*k*u);d[k]-=v*2*(1-u)*m.cos(2*P*k*u)
 d=[v-off for v in d]
 def H(k):return h[abs(k)]*(1 if k>=0 else -1)
 G=m.matrix([[d[abs(i)] if i==j else (-1)**((i-j+1)%2)*(H(i)-H(j))/(P*(i-j)) for j in ids] for i in ids])
 def direct(i,j):
  delta=int(i==j)
  def S(u):return 2*(1-u)*m.sinc(P*(i-j)*(1-u))*m.cos(P*(i+j)*u)
  v=m.fsum(w*L*(2*m.cosh(L*u/2)*S(u)-m.exp(L*u/2)/(2*m.sinh(L*u))*(S(u)-2*m.exp(-L*u/2)*delta)) for u,w in rule)
  return v-m.fsum(m.log(p)/m.sqrt(q)*S(m.log(q)/L) for q,p in pp)-delta*off
 err=max(abs(direct(i,j)-G[i+18,j+18]) for i,j in [(0,0),(18,18),(-18,18),(-17,18),(0,1),(-3,-3),(3,-2)])
 for n in [14,16,18]:
  ids=list(range(-n,n+1));g=G[18-n:19+n,18-n:19+n];m.cholesky(g);ev=m.eigsy(g,eigvals_only=True);cond=ev[len(ev)-1]/ev[0]
  c=m.lu_solve(g,m.matrix([2*m.sqrt(L)*(-1)**(k%2)*m.sin(1j*L/2)/(1j*L+2*P*k) for k in ids]));cr=[c[k+n].real*(-1)**(k%2) for k in ids];ci=[c[k+n].imag*(-1)**(k%2) for k in ids];ks=[P*k for k in ids]
  def W(t):
   v=t*L/2
   if t==0:return -c[n].real
   return m.sin(v)*m.fsum((t*b-a)/(v+k) for a,b,k in zip(cr,ci,ks))
  def scan(s):
   out=[];a=m.mpf(0);av=W(a)
   for j in range(1,40*s+1):
    b=m.mpf(j)/s;bv=W(b)
    if av*bv<0:
     lo,hi,lv=a,b,av
     for _ in range(120):
      mid=(lo+hi)/2;mv=W(mid)
      if lv*mv>0:lo,lv=mid,mv
      else:hi=mid
     rt=(lo+hi)/2;v=rt*L/(2*P);near=m.nint(v)
     if abs(v-near)>m.mpf('1e-30') or abs(near)<=n:out.append(rt)
     if len(out)==6:return out
    a,av=b,bv
   raise RuntimeError('six roots not found')
  roots=scan(100);fine=scan(200);r=roots[-1];diff=max(abs(a-b) for a,b in zip(roots,fine));wr.writerow([X,n,*[m.nstr(v,35) for v in [r,gamma,r-gamma,cond,err,diff]]]);sys.stdout.flush()
