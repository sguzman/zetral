# Non-certified diagnostic: assumes the first six indexed zeros are distinct and simple.
import mpmath as m
import csv, sys
m.mp.dps = 60

def A(t):
    s = m.mpf('0.5') - 1j*t
    return s*(s-1)*m.pi**(-s/2)*m.gamma(s/2)*m.zeta(s)/2

M = m.re(-m.diff(A,0,2)/A(0))
S = 0
g1 = None
out = csv.writer(sys.stdout)
out.writerow(['n','gamma','abs_Aprime','M','H','S_n','K_n','integer_X_threshold','log10_bound_at_X11_if_applicable'])
for j in range(1,7):
    g = m.im(m.zetazero(j))
    if g1 is None: g1 = g
    d = abs(m.diff(A,g))
    D = 128/(3*d)
    H = D*m.exp(2*m.pi)*(2+(g+3)/(m.pi-m.mpf(5)/4))
    S += M*H**2
    B = 1/g+1/g1
    K = 2*B*g*g*S
    X0 = next(x for x in range(8,1000) if B*S*x**m.mpf('2.5')*m.exp(-2*m.pi*x)<=1/(2*g))
    logbound = m.log10(K)+m.mpf('2.5')*m.log10(11)-2*m.pi*11/m.log(10)
    out.writerow([j,m.nstr(g,15),m.nstr(d,12),m.nstr(M,30),m.nstr(H,12),m.nstr(S,12),m.nstr(K,12),X0,m.nstr(logbound,12) if X0<=11 else 'NA'])
