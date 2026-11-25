"""Independent Fraction reproduction of the QIR03 synthetic interval example."""
from fractions import Fraction as F

I = lambda x: (F(x), F(x))
def add(a,b): return (a[0]+b[0], a[1]+b[1])
def sub(a,b): return (a[0]-b[1], a[1]-b[0])
def sq(a):
    lo = F(0) if a[0] <= 0 <= a[1] else min(a[0]**2, a[1]**2)
    return lo, max(a[0]**2, a[1]**2)
def mul(a,b):
    assert a[0] >= 0 and b[0] >= 0
    return a[0]*b[0], a[1]*b[1]
def div(a,b):
    assert b[0] > 0 and a[0] >= 0
    return a[0]/b[1], a[1]/b[0]
def box(x,e): return (x-e, x+e)
def attenuation(d,u,faster):
    out=I(1)
    for dh,uh in faster:
        diff=sq(sub(u,uh))
        num=add(sq(sub(d,dh)),diff)
        den=add(sq(add(d,dh)),diff)
        out=mul(out,div(num,den))
    return out

d0=F(1,4); u0=F(1); fast_exact=[(F(3,8),F(2)),(F(3,8),F(-2))]
B_exact=attenuation(I(d0),I(u0),[(I(d),I(u)) for d,u in fast_exact])[0]
assert B_exact == F(37505,53489)
# m=2, d^2+u^2=17/16, so |b|^2=m^2 B^2/[4(d^2+u^2)]=16 B^2/17.
amp2=B_exact**2/F(17,16)
e=F(1,1000); d=box(d0,e); u=box(u0,e)
faster=[(box(F(3,8),e),box(F(2),e)),(box(F(3,8),e),box(F(-2),e))]
B=attenuation(d,u,faster)

def square_interval(pct,gain):
    amp=(amp2*F(100-pct,100), amp2*F(100+pct,100))
    return div(mul(mul(I(4),add(sq(d),sq(u))),amp),mul(sq(B),gain))

narrow=square_interval(1,(F(99,100),F(101,100)))
wide=square_interval(40,(F(1,2),F(2)))
def square_candidates(interval,limit=20):
    return [m for m in range(1,limit+1) if interval[0] <= m*m <= interval[1]]
assert B == (F(9103364879689,13140221683689), F(9209896401689,12977815097689))
assert narrow == (
 F(9846049184127830184232738012685364776958,2578501486239754542722529934503880060625),
 F(116110903059577027975306366943188228170738,27711145712737253441748271201926973166875))
assert wide == (
 F(15067438902983497706174341504260937007163,12892507431198772713612649672519400303125),
 F(144851225599076292325629725097442740094188,12595975323971478837158305091784987803125))
assert square_candidates(narrow)==[2]
assert square_candidates(wide)==[2,3]
print('B interval:', *(str(x) for x in B))
print('narrow m^2 interval:', *(str(x) for x in narrow), 'candidates:', square_candidates(narrow))
print('wide m^2 interval:', *(str(x) for x in wide), 'candidates:', square_candidates(wide))
print('Independent exact Fraction reproduction: PASS')
