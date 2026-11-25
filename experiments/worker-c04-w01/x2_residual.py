import numpy as np, math
from scipy.integrate import quad
from scipy.linalg import solve, eigvalsh
L=math.log(2); a=L/2; pi=math.pi

def kval(t): return math.exp(t/2)/(2*math.sinh(t)) if t else float('inf')
def H(j):
    if j==0:return 0.
    k=2*pi*j/L
    return quad(lambda t:(2*math.cosh(t/2)-kval(t))*math.sin(k*t),0,L,epsabs=2e-11,limit=300)[0]
def d(j):
    k=2*pi*j/L
    def fn(t):
        if t==0: return 4-(0.5-1/L)
        s=2*(1-t/L)*math.cos(k*t)
        return 2*math.cosh(t/2)*s-kval(t)*(s-2*math.exp(-t/2))
    return quad(fn,0,L,epsabs=2e-11,limit=300)[0]-(math.log(4*pi)+0.5772156649015329+math.log(math.tanh(L/2)))
cacheH={j:H(j) for j in range(-300,301)}; cached={j:d(j) for j in range(-20,21)}
def g(m,n):
    if m==n:return cached[m]
    return (-1)**(m-n+1)*(cacheH[m]-cacheH[n])/(pi*(m-n))
def b(j):
    k=2*pi*j/L; z=1+1j*k
    return (np.exp(z*a)-np.exp(-z*a))/(z*math.sqrt(L))
for N in [2,4,8,12]:
    inds=list(range(-N,N+1)); G=np.array([[g(m,n) for n in inds] for m in inds]); rhs=np.array([b(m) for m in inds]); v=solve(G,rhs,assume_a='sym')
    js=list(range(-300,-N))+list(range(N+1,301)); cs=np.array([b(j)-sum(v[ii]*g(m,j) for ii,m in enumerate(inds)) for j in js]); ss=np.sum(np.abs(cs)**2)
    P=math.log(2)/math.sqrt(2); B=4*math.sinh(L/2)+1.5*math.exp(L/2)+P
    F=math.sqrt(L)/(2*pi)*(2+L)*math.exp(a); C=F+(2*B/pi)*sum(abs(x) for x in v); J=512; tail=2*C*C/(J-N)
    print(f'N={N} cond={np.linalg.cond(G):.5g} sumabs_v={sum(abs(v)):.8g} residual_sq_|j|<=300={ss:.10g} norm={math.sqrt(ss):.8g} C02_tail_J512={tail:.8g} tailnorm={math.sqrt(tail):.8g} hmin={eigvalsh(G)[0]:.8g}')

print('offdiagonal direct-correlation checks:')
for m,n in [(0,1),(1,2),(2,-1)]:
    diff=m-n
    direct=quad(lambda t:(2*math.cosh(t/2)-kval(t))*2*(-1)**(diff+1)*math.sin(pi*diff*t/L)/(pi*diff)*math.cos(pi*(m+n)*t/L),0,L,epsabs=2e-11,limit=300)[0]
    print(f'(m,n)=({m},{n}) direct={direct:.12g} divided_difference={g(m,n):.12g} difference={direct-g(m,n):.3g}')
