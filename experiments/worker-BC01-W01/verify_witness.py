#!/usr/bin/env python3
"""Independent exact-rational replay of the pinned BC01 Schur witness."""
import json
from bisect import bisect_right
from fractions import Fraction as F
from math import isqrt
from pathlib import Path

RAW = Path(__file__).resolve().parents[1] / "results/bc01-endpoint-111-10-witness.json"
Q = 10**30
N = 40

def log_atanh_bounds(x):
    """Exact bounds for log(x), x positive rational, via dyadic reduction."""
    x = F(x)
    k = x.numerator.bit_length() - x.denominator.bit_length()
    while x < F(2**k):
        k -= 1
    while x >= F(2**(k + 1)):
        k += 1
    y = x / F(2**k)
    assert 1 <= y < 2
    r = (y - 1) / (y + 1)
    r2 = r * r
    term = r
    s = F(0)
    for j in range(N):
        s += term / (2*j + 1)
        term *= r2
    lo = 2*s
    rem = 2*term / ((2*N + 1) * (1-r2))
    # log(x) = log(y) + k log(2); use interval arithmetic for signed k.
    r2half = F(1,3)
    t = r2half
    s2 = F(0)
    for j in range(N):
        s2 += t / (2*j+1)
        t *= r2half*r2half
    l2 = 2*s2
    rem2 = 2*t / ((2*N+1)*(1-r2half*r2half))
    if k >= 0:
        return lo + k*l2, lo + rem + k*(l2+rem2)
    return lo + k*(l2+rem2), lo + rem + k*l2

def sqrt_bounds(n):
    a = isqrt(n * Q * Q)
    return F(a,Q), F(a+1,Q)

def coefficient_bounds(shift):
    if shift == 2:
        p, rootn = 2, 2
    elif shift == 3:
        p, rootn = 3, 3
    elif shift == 4:
        p, rootn = 2, None
    elif shift == 5:
        p, rootn = 5, 5
    elif shift == 7:
        p, rootn = 7, 7
    elif shift == 8:
        p, rootn = 2, 8
    elif shift == 9:
        p, rootn = 3, None
    elif shift == 11:
        p, rootn = 11, 11
    loglo, loghi = log_atanh_bounds(p)
    if rootn is None:
        divisor = F(2) if shift == 4 else F(3)
        return loglo/divisor, loghi/divisor
    slo, shi = sqrt_bounds(rootn)
    return loglo/shi, loghi/slo

def rat(s):
    a,b = s.split("/")
    return F(int(a),int(b))

def main():
    raw = json.loads(RAW.read_text())
    shifts = [2,3,4,5,7,8,9,11]
    weights = [int(z) for z in raw["weightNumerators"]]
    assert raw["window"] == "111/10" and raw["weightDenominator"] == "1000"
    # Independently certify each stored 10^-30 interval and its rational upper weight.
    for j,m in enumerate(shifts):
        lo,hi = coefficient_bounds(m)
        a,b = map(int,raw["actualWeightIntervals"][j])
        assert F(a,Q) <= lo <= hi <= F(b,Q), (m,"stored interval does not enclose independent bound")
        assert F(b,Q) <= F(weights[j],1000), (m,"stored upper weight is too small")
    best = raw["best"]
    points = [rat(s) for s in best["points"]]
    values = [int(s) for s in best["values"]]
    assert len(points) == len(values)+1
    lo,hi = points[0],points[-1]
    assert lo == 1 and hi == F(111,10) and all(v > 0 for v in values)
    def value(x):
        if x <= lo or x >= hi:
            return 0
        i = bisect_right(points,x)-1
        return values[i]
    refined = set(points)
    for x in points:
        for m in shifts:
            for y in (x*m,x/m):
                if lo < y < hi:
                    refined.add(y)
    refined = sorted(refined)
    maxceil, ceil_worst, maxratio, ratio_worst = 0, None, F(0), None
    for a,b in zip(refined,refined[1:]):
        x = (a+b)/2
        w = value(x)
        assert w > 0, ("weight vanishes",a,b)
        lhs = sum(c*(value(x*m)+value(x/m)) for c,m in zip(weights,shifts))
        ratio = F(lhs,w)
        ceilratio = (lhs+w-1)//w
        if ceilratio > maxceil:
            maxceil, ceil_worst = ceilratio, (a,b)
        if ratio > maxratio:
            maxratio, ratio_worst = ratio, (a,b)
        assert lhs <= 2762*w, ("Schur bound fails",a,b,lhs,w)
    assert len(refined)-1 == int(raw["best"]["checked"]) == 33139
    assert maxceil == int(raw["best"]["boundNumerator"]) == 2762
    print(f"independent log/sqrt enclosure checks: {len(shifts)}/{len(shifts)}")
    print(f"base cells: {len(values)}; refined open cells: {len(refined)-1}")
    print(f"maximum ceil(weighted shift ratio): {maxceil}/1000")
    print(f"largest exact coefficient ratio: {maxratio/1000} at {ratio_worst}")
    print(f"a cell attaining the maximal rounded numerator: {ceil_worst}")
    print("all eight-shift Schur inequalities pass exactly")

if __name__ == "__main__":
    main()
