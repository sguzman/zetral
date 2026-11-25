"""Direct nested-integral check of the S03 H2 coefficient; no interval claims."""
import mpmath as mp
mp.mp.dps = 35
EULER = mp.euler
K = mp.log(4*mp.pi) + EULER

def b0(y):
    return mp.log(2) - mp.log1p(-y*y)/2

def cin(x):
    if not x:
        return mp.mpf(0)
    return EULER + mp.log(x) - mp.ci(x)

def check(n):
    s = (n-mp.mpf('.5'))*mp.pi
    # Directly apply B g = b0*g + 1/2 integral (g(y)-g(v))/|y-v| dv,
    # splitting at v=y and changing variables t=|y-v|.
    def Bexp(y):
        left = mp.quad(lambda t: (1-mp.exp(-1j*s*t))/t if t else 1j*s,
                       [0,(1+y)/2,1+y]) if y > -1 else mp.mpc(0)
        right = mp.quad(lambda t: (1-mp.exp(1j*s*t))/t if t else -1j*s,
                        [0,(1-y)/2,1-y]) if y < 1 else mp.mpc(0)
        return mp.exp(1j*s*y)*(b0(y)+(left+right)/2)
    # By parity the full 1/2 integral over (-1,1) is Re of this half interval.
    h2 = mp.quad(lambda y: mp.re((b0(y)+1j*s*y*(b0(y)+1))*Bexp(y)),
                 [0,mp.mpf('.5'),mp.mpf('.9'),1])
    d = mp.si(2*s)/2
    e = d*(1+cin(2*s)/2)+h2/mp.sin(s)
    q = e+K*d
    return h2,d,e,q

if __name__ == '__main__':
    print('n,H2_direct,d,e,q')
    for n in range(1,5):
        vals=check(n)
        print(n,*[mp.nstr(x,24) for x in vals])
