#!/usr/bin/env python3
"""Independent Fraction audit of the archived rational endpoint-10 witness."""
import bisect
import json
import math
from fractions import Fraction as F
from pathlib import Path


def parse_rat(s):
    a, sep, b = str(s).partition("/")
    return F(int(a), int(b) if sep else 1)


def log_unit(x, terms=32):
    """Exact arctanh series interval for log(x), 1 <= x < 2."""
    z = (x - 1) / (x + 1)
    total = sum((z ** (2*j + 1) / (2*j + 1) for j in range(terms)), F(0))
    lo = 2 * total
    tail = 2 * z ** (2*terms + 1) / ((2*terms + 1) * (1 - z*z))
    return lo, lo + tail


def log_integer(n):
    k = n.bit_length() - 1
    mantissa = F(n, 1 << k)
    mlo, mhi = log_unit(mantissa)
    l2, u2 = log_unit(F(2))
    return mlo + k*l2, mhi + k*u2


def sqrt_interval(n, scale=10**30):
    floor = math.isqrt(n * scale * scale)
    lo = F(floor, scale)
    hi = lo if floor*floor == n*scale*scale else F(floor + 1, scale)
    return lo, hi


def weight_intervals():
    # The seven local weights correspond to shifts 2,3,4,5,7,8,9.
    nums = [(2, "sqrt"), (3, "sqrt"), (2, "twice"),
            (5, "sqrt"), (7, "sqrt"), (2, "sqrt8"), (3, "three")]
    out = []
    for n, mode in nums:
        ln, un = log_integer(n)
        if mode == "sqrt":
            sl, su = sqrt_interval(n)
            out.append((ln/su, un/sl))
        elif mode == "twice":
            out.append((ln/2, un/2))
        elif mode == "sqrt8":
            sl, su = sqrt_interval(8)
            out.append((ln/su, un/sl))
        else:
            out.append((ln/3, un/3))
    return out


def ceil_fraction(x):
    return (x.numerator + x.denominator - 1) // x.denominator


def main():
    p = Path(__file__).with_name("results") / "atm02-window-10.json"
    doc = json.loads(p.read_text())
    assert doc["window"] == "10/1"
    den = int(doc["weightDenominator"])
    weights = list(map(int, doc["weightNumerators"]))
    assert den == 1000 and weights == [491, 635, 347, 720, 736, 246, 367]
    assert len(doc["actualWeightIntervals"]) == len(weights)
    q = int(doc["intervalScale"])
    exact = weight_intervals()
    for i, ((raw_lo, raw_hi), (lo, hi), share) in enumerate(zip(doc["actualWeightIntervals"], exact, weights)):
        raw_lo, raw_hi = int(raw_lo), int(raw_hi)
        assert F(raw_lo, q) <= lo <= hi <= F(raw_hi, q), (i, "stored interval does not enclose independent log/sqrt bound")
        assert F(raw_hi, q) <= F(share, den), (i, "allocated rational share is insufficient")

    part = doc["best"]
    points = [parse_rat(x) for x in part["points"]]
    values = list(map(int, part["values"]))
    assert points[0] == 1 and points[-1] == 10
    assert len(points) == len(values) + 1 and all(a < b for a,b in zip(points, points[1:]))
    assert all(v > 0 for v in values)
    shifts = [2, 3, 4, 5, 7, 8, 9]
    def value(x):
        if x <= 1 or x >= 10:
            return 0
        return values[bisect.bisect_right(points, x) - 1]

    refined = set(points)
    for x in points:
        for m in shifts:
            for y in (x*m, x/m):
                if 1 < y < 10:
                    refined.add(y)
    refined = sorted(refined)
    assert len(refined) - 1 == int(part["checked"]) == 6129
    worst = F(0)
    worst_cell = None
    max_ceiling = 0
    for left, right in zip(refined, refined[1:]):
        x = (left + right) / 2
        w = value(x)
        assert w > 0
        numerator = sum(c * (value(x*m) + value(x/m)) for c, m in zip(weights, shifts))
        ratio = F(numerator, w)
        if ratio > worst:
            worst, worst_cell = ratio, (left, right)
        max_ceiling = max(max_ceiling, ceil_fraction(ratio))
    bound = max_ceiling
    assert bound == int(part["boundNumerator"]) == 2520
    savedcell = tuple(parse_rat(x) for x in part["worstCell"])
    sx = sum(savedcell) / 2
    sw = value(sx)
    sn = sum(c * (value(sx*m) + value(sx/m)) for c, m in zip(weights, shifts))
    assert ceil_fraction(F(sn, sw)) == bound
    print("PASS: all 7 stored log/square-root weight intervals enclose independent exact-rational bounds")
    print("PASS: each allocated rational share dominates its independently bounded arithmetic weight")
    print("PASS: all 6129 refined cells checked exactly over Fraction arithmetic")
    print("RESULT: maximum exact ratio {}; its ceiling is {} (saved maximizing cell {})".format(worst, bound, part["worstCell"]))
    print("SCOPE: stored scalar witness audited; generator search history and spectral matrix generation unchecked")


if __name__ == "__main__":
    main()
