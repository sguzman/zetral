#!/usr/bin/env python3
"""Independent exact-rational enclosure of the BC01 h=12/5 high-mode guard."""
import json
from fractions import Fraction as F
from pathlib import Path

RAW = Path(__file__).resolve().parents[1] / "results/bc01-12-5-guard.json"
Q = 10**66
LOG_TERMS = 70
ATAN_TERMS = 80
COSH_TERMS = 30

def add(a,b): return (a[0]+b[0], a[1]+b[1])
def neg(a): return (-a[1],-a[0])
def sub(a,b): return add(a,neg(b))
def mul(a,b):
    p=[x*y for x in a for y in b]
    return (min(p),max(p))
def div(a,b):
    assert b[0]*b[1]>0, b
    return mul(a,(1/b[1],1/b[0]))
def power(a,n):
    out=(F(1),F(1))
    for _ in range(n): out=mul(out,a)
    return out

def atan_unit(x):
    """Alternating-series enclosure of atan(x), for rational 0 < x < 1."""
    x=F(x); assert 0<x<1
    partial=F(0)
    for j in range(ATAN_TERMS):
        partial += (-1 if j%2 else 1)*x**(2*j+1)/ (2*j+1)
    next_term=x**(2*ATAN_TERMS+1)/(2*ATAN_TERMS+1)
    return (min(partial,partial-next_term),max(partial,partial+next_term))

def pi_bounds():
    a=atan_unit(F(1,5)); b=atan_unit(F(1,239))
    return sub(mul((F(16),F(16)),a),mul((F(4),F(4)),b))

def log_atanh_reduced(y):
    """Exact bounds for log(y), 1 <= y < 2, with the geometric tail."""
    y=F(y); assert 1<=y<=2
    r=(y-1)/(y+1); r2=r*r
    term=r; partial=F(0)
    for j in range(LOG_TERMS):
        partial += term/(2*j+1)
        term *= r2
    lower=2*partial
    tail=2*term/((2*LOG_TERMS+1)*(1-r2))
    return (lower,lower+tail)

def log_bounds(x):
    x=F(x); assert x>0
    # Find k by exact comparisons; no floating point reduction.
    k=0; y=x
    while y<1: y*=2; k-=1
    while y>=2: y/=2; k+=1
    ly=log_atanh_reduced(y); l2=log_atanh_reduced(F(2))
    if k>=0: return (ly[0]+k*l2[0],ly[1]+k*l2[1])
    return (ly[0]+k*l2[1],ly[1]+k*l2[0])

def cosh_bounds(x):
    x=F(x); assert x>=0
    total=F(0)
    for j in range(COSH_TERMS):
        total += x**(2*j)/__import__('math').factorial(2*j)
    nxt=x**(2*COSH_TERMS)/__import__('math').factorial(2*COSH_TERMS)
    ratio=x*x/((2*COSH_TERMS+1)*(2*COSH_TERMS+2))
    return (total,total+nxt/(1-ratio))

def assert_raw_encloses(name, raw, interval):
    raw_lo,raw_hi=(F(int(s),Q) for s in raw)
    assert raw_lo <= interval[0] <= interval[1] <= raw_hi, (name,raw,interval)

def main():
    raw=json.loads(RAW.read_text()); scale=int(raw["scale"])
    assert scale==Q
    row=raw["rows"][0]
    h=F(12,5); pi=pi_bounds(); pi2=mul(pi,pi); pi4=mul(pi2,pi2)
    # Independently check the reported lower slacks against log enclosures.
    slack11=(h-log_bounds(11)[1],h-log_bounds(11)[0])
    slack1110=(log_bounds(F(111,10))[0]-h,log_bounds(F(111,10))[1]-h)
    slack13=(log_bounds(13)[0]-h,log_bounds(13)[1]-h)
    for name,interval in (("h-log(11)",slack11),("log(111/10)-h",slack1110),("log(13)-h",slack13)):
        lower=int(row[{"h-log(11)":"guardSlack11","log(111/10)-h":"guardSlack1110","log(13)-h":"guardSlack13"}[name]])
        assert F(lower,Q) <= interval[0] <= interval[1], (name,lower,interval)
    ch=cosh_bounds(F(3,5))
    prime=F(2762,1000)
    guards=row["guards"]
    assert len(guards)==20
    for record in guards:
        low=int(record["low"]); odd=bool(record["odd"]); n=int(record["n"])
        assert 41<=low<=50 and n==2*low+int(odd)
        logn=log_bounds(F(5*n,24))
        correction=div((F(3*h*h),F(3*h*h)),mul((F(2*n*n),F(2*n*n)),pi2))
        g=sub(sub(logn,correction),(prime,prime))
        if odd:
            # Fixed low-index pole subtraction from the odd-sector complement.
            pole=div(mul((F(4),F(4)),mul(power(ch,2),(h**4,h**4))),
                     mul((F(3*h*(2*low)**3),F(3*h*(2*low)**3)),pi4))
            g=sub(g,pole)
        assert_raw_encloses(f"guard low={low}, odd={odd}",record["g"],g)
        assert int(record["g"][0])>0 and record["positive"] is True
    # The sampled first indices are the minima for each parity at lowCount=41.
    starts={False:min(r["n"] for r in guards if not r["odd"] and r["low"]==41),
            True:min(r["n"] for r in guards if r["odd"] and r["low"]==41)}
    assert starts=={False:82,True:83}
    print("independent exact interval checks: 3/3 endpoint slacks; 20/20 guard intervals")
    print("first retained indices: even n=82, odd n=83; both raw lower bounds are positive")
    print("for either parity, g(n)=log(n/(2h))-3h^2/(2*pi^2*n^2)-B-P has")
    print("g'(n)=1/n+3*h^2/(pi^2*n^3)>0; odd P is constant at fixed lowCount")
    print("therefore every subsequent same-parity high index is guarded")

if __name__=="__main__": main()
