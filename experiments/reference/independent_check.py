# Independent reference diagnostic only; production implementation is Rust.
# Executed with mpmath 1.3.0. Arguments: decimal digits, Gauss order.
import mpmath as m, sys
m.mp.dps=int(sys.argv[1]); order=int(sys.argv[2]); N=18; P=m.pi
nodes=[]
for j in range(1,order//2+1):
 z=m.cos(P*(j-m.mpf('.25'))/(order+m.mpf('.5')))
 for it in range(30):
  p0,p1=m.mpf(1),z
  for k in range(2,order+1): p0,p1=p1,((2*k-1)*z*p1-(k-1)*p0)/k
  dp=order*(z*p1-p0)/(z*z-1); dz=p1/dp; z-=dz
  if abs(dz)<m.eps*8: break
 else: raise RuntimeError('node')
 w=2/((1-z*z)*dp*dp);nodes.extend([((1-z)/2,w/2),((1+z)/2,w/2)])
for X in [3,5,7,11]:
 L=m.log(X); inds=list(range(-N,N+1)); h=[m.mpf(0)]*(N+1);d=h.copy()
 for u,w in nodes:
  t=L*u; K=m.exp(t/2)/(2*m.sinh(t)); A=2*m.cosh(t/2); c=m.exp(-t/2)
  for k in range(N+1):
   a=2*P*k*u; s=m.sin(a); co=m.cos(a); S=2*(1-u)*co
   h[k]+=w*L*(A-K)*s; d[k]+=w*L*(A*S-K*(S-2*c))
 for q,p in [(2,2),(3,3),(4,2),(5,5),(7,7),(8,2),(9,3)]:
  if q>=X:continue
  u=m.log(q)/L; weight=m.log(p)/m.sqrt(q)
  for k in range(N+1):
   h[k]-=weight*m.sin(2*P*k*u);d[k]-=weight*2*(1-u)*m.cos(2*P*k*u)
 for k in range(N+1):d[k]-=m.log(4*P)+m.euler+m.log(m.tanh(L/2))
 def H(k):return h[abs(k)]*(1 if k>=0 else -1)
 G=m.matrix([[d[abs(i)] if i==j else (-1)**((i-j+1)%2)*(H(i)-H(j))/(P*(i-j)) for j in inds] for i in inds]);m.cholesky(G)
 phi_i=m.matrix([2*m.sqrt(L)*(-1)**(k%2)*m.sin(1j*L/2)/(1j*L+2*P*k) for k in inds]); c=m.lu_solve(G,phi_i)
 def W(t):
  f=m.fsum(c[k+N]*m.sqrt(L)*m.sinc((t*L+2*P*k)/2) for k in inds)
  return t*f.imag-f.real
 roots=[];prev=m.mpf(0);v=W(prev)
 for i in range(1,401):
  t=m.mpf(i)/10;u=W(t)
  if u*v<0:
   a,b=prev,t;av=v
   for _ in range(85):
    mid=(a+b)/2;mv=W(mid)
    if mv*av>0:a,av=mid,mv
    else:b=mid
   root=(a+b)/2
   if abs(root*L/(2*P)-m.nint(root*L/(2*P)))>m.mpf('1e-20') or abs(m.nint(root*L/(2*P)))<=N:roots.append(root)
   if len(roots)==6:break
  prev,v=t,u
 print(X, ' '.join(m.nstr(x,25) for x in roots),flush=True)
