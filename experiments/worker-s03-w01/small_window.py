"""Binary64 finite-arithmetic diagnostic; not an interval certificate."""
import math
import numpy as np
from scipy.integrate import quad
from scipy.linalg import solve
from scipy.optimize import brentq

PI = math.pi
GAMMA = 0.5772156649015329


def one_window(a, Ns=(20, 40, 80), epsabs=2e-11):
    L = 2 * a

    def kval(t):
        return math.exp(t / 2) / (2 * math.sinh(t)) if t else math.inf

    def h(j):
        if j == 0:
            return 0.0
        k = PI * j / a
        return quad(lambda t: (2 * math.cosh(t / 2) - kval(t)) * math.sin(k*t),
                    0, L, epsabs=epsabs, limit=500)[0]

    def diag(j):
        k = PI * j / a
        def integrand(t):
            if t == 0:
                return 4 - (0.5 - 1/L)
            s = 2 * (1 - t/L) * math.cos(k*t)
            return 2*math.cosh(t/2)*s - kval(t)*(s - 2*math.exp(-t/2))
        offset = math.log(4*PI) + GAMMA + math.log(math.tanh(L/2))
        return quad(integrand, 0, L, epsabs=epsabs, limit=500)[0] - offset

    def find_first_root(char, upper):
        step = upper / 10000
        left = 0.0
        fl = char(left)
        for j in range(1, 10001):
            right = j * step
            fr = char(right)
            if (fl < 0 < fr) or (fr < 0 < fl):
                return brentq(char, left, right, xtol=2e-12, rtol=2e-14)
            left, fl = right, fr
        raise RuntimeError(f"no sign-changing root below {upper}")

    outputs=[]
    for N in Ns:
        indices = list(range(-N, N+1))
        H = {j: h(j) for j in range(-2*N, 2*N+1)}
        D = {j: diag(j) for j in indices}
        def gram(m,n):
            if m == n:
                return D[m]
            return (-1)**(m-n+1) * (H[m]-H[n]) / (PI*(m-n))
        G = np.array([[gram(m,n) for n in indices] for m in indices])
        # Finite Riesz vectors for exp(+x), split into real/imaginary RHS.
        rhs_re=[]; rhs_im=[]
        for j in indices:
            freq = PI*j/a
            scale = 2*math.sinh(a)*(-1)**j / (math.sqrt(L)*(1+freq*freq))
            rhs_re.append(scale)
            rhs_im.append(scale*freq)
        re = solve(G, np.array(rhs_re), assume_a='sym')
        im = solve(G, np.array(rhs_im), assume_a='sym')
        def characteristic(t):
            rr=0.0; ii=0.0
            for k in indices:
                z=a*t+PI*k
                sinc=1.0 if z == 0 else math.sin(z)/z
                rr += sinc*re[k+N]
                ii += sinc*im[k+N]
            # Same phase-pi scalar used by experiments/src/bin/precision.rs;
            # omitted common nonzero real normalization does not move roots.
            return t*ii-rr
        root=find_first_root(characteristic, upper=20/a)
        scaled=a*root
        outputs.append((N, root, scaled, abs(scaled-PI/2), np.linalg.cond(G)))
    return outputs

if __name__ == '__main__':
    print('a,L,N,t_first_sign_change,a*t,abs(a*t-pi/2),cond_2')
    for a in (0.003, 0.001, 0.0003):
        cutoffs = (20, 40, 80, 160) if a == 0.001 else (20, 40, 80)
        for N,t,scaled,err,cond in one_window(a, cutoffs):
            print(f'{a:.4g},{2*a:.4g},{N},{t:.12g},{scaled:.12g},{err:.6g},{cond:.6g}')
