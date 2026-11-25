#!/usr/bin/env python3
"""Independent exact replay of ATM03's weighted first-row radius budget."""
import json
from math import isqrt
from pathlib import Path


def floor_div(a, b):
    assert b > 0
    return a // b


def ceil_div(a, b):
    return -((-a) // b)


def trunc_half(a):
    return (abs(a) // 2) * (1 if a >= 0 else -1)


def pd_pass(a):
    """Return number of positive Bareiss pivots for a symmetric integer matrix."""
    b = [row[:] for row in a]
    n, previous = len(b), 1
    for k in range(n):
        pivot = b[k][k]
        if pivot <= 0:
            return k
        for i in range(k + 1, n):
            for j in range(i, n):
                numerator = pivot*b[i][j] - b[i][k]*b[k][j]
                assert numerator % previous == 0
                value = numerator // previous
                b[i][j] = b[j][i] = value
        previous = pivot
    return n


def main():
    raw_path = Path(__file__).with_name("results") / "atm03-23-10-even.json"
    d = json.loads(raw_path.read_text())
    row = d["rows"][0]
    n, Q, den = len(row["ks"]), int(d["scale"]), 10000
    assert row["h"] == "23/10" and row["odd"] is False and n == 32 and Q == 10**54
    c = row["componentIntervals"]
    old = list(map(int, row["tailShares"]))
    old_den = int(row["tailShareDenominator"])
    shares = [9400, 476, 84, 8, 8, 8, 8, 8]
    assert all(x > 0 for x in shares) and sum(shares) == den
    keys = ["leading", "second", "third", "fourth", "fifth", "sixth", "seventh"]
    energy = [int(c["upper"][i][i][1]) for i in range(n)]
    scale_weights = [10**60 // isqrt(e) for e in energy]

    # Reconstruct the archived baseline lower matrix exactly before reweighting.
    baseline_intervals = [[None]*n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            blo = int(c["upper"][i][j][0]) - int(c["finite"][i][j][1])
            bhi = int(c["upper"][i][j][1]) - int(c["finite"][i][j][0])
            for k, key in enumerate(keys):
                xlo, xhi = map(int, c[key][i][j])
                blo -= xhi
                bhi -= xlo
            if i == j:
                tail = int(c["eighth"][i])
                blo -= tail
                bhi -= tail
            baseline_intervals[i][j] = (blo, bhi)
    baseline_mid = [[0]*n for _ in range(n)]
    baseline_rad = [[0]*n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            blo = max(baseline_intervals[i][j][0], baseline_intervals[j][i][0])
            bhi = min(baseline_intervals[i][j][1], baseline_intervals[j][i][1])
            assert blo <= bhi
            baseline_mid[i][j] = trunc_half(blo+bhi)
            baseline_rad[i][j] = max(baseline_mid[i][j]-blo, bhi-baseline_mid[i][j])
    baseline_lower = [r[:] for r in baseline_mid]
    for i in range(n):
        baseline_lower[i][i] -= sum(baseline_rad[i])
    assert baseline_lower == [list(map(int, r)) for r in row["lowerInteger"]]

    intervals = [[None]*n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            lo = int(c["upper"][i][j][0]) - int(c["finite"][i][j][1])
            hi = int(c["upper"][i][j][1]) - int(c["finite"][i][j][0])
            for k, key in enumerate(keys):
                xlo, xhi = map(int, c[key][i][j])
                numerator = old[k]*den
                denominator = shares[k]*old_den
                lo -= ceil_div(xhi*numerator, denominator)
                hi -= floor_div(xlo*numerator, denominator)
            if i == j:
                tail = ceil_div(int(c["eighth"][i])*old[7]*den, shares[7]*old_den)
                lo -= tail
                hi -= tail
            intervals[i][j] = (lo, hi)

    mids, radii = [[0]*n for _ in range(n)], [[0]*n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            lo = max(intervals[i][j][0], intervals[j][i][0])
            hi = min(intervals[i][j][1], intervals[j][i][1])
            assert lo <= hi
            mid = trunc_half(lo + hi)
            mids[i][j] = mid
            radii[i][j] = max(mid-lo, hi-mid)
    weighted_radii = [
        sum(ceil_div(radii[i][j]*scale_weights[j], scale_weights[i]) for j in range(n))
        for i in range(n)
    ]
    A = [row[:] for row in mids]
    for i in range(n):
        A[i][i] -= weighted_radii[i]
    assert pd_pass(A) == 8

    zero_first = [r[:] for r in A]
    zero_first[0][0] += weighted_radii[0]
    assert pd_pass(zero_first) == n
    lo, hi = 0, weighted_radii[0]
    while hi-lo > 1:
        mid = (lo+hi)//2
        probe = [r[:] for r in zero_first]
        probe[0][0] -= mid
        if pd_pass(probe) == n:
            lo = mid
        else:
            hi = mid
    assert weighted_radii[0] == 28588096588
    assert lo == 2855864459
    assert energy[0] == 238234022506
    assert len(row["principalMinors"]) == 1 and int(row["principalMinors"][0]) < 0
    print("PASS: exact reconstruction from saved components reproduces all archived baseline lower-matrix entries")
    print("PASS: rational rescaling reconstructs the 32x32 midpoint and weighted row radii")
    print("PASS: reweighted matrix has 8 positive pivots; removing only first radius yields 32")
    print("RESULT: first weighted radius {}, max safe first radius {}, first energy upper {}".format(weighted_radii[0], lo, energy[0]))
    print("PASS: exact Bareiss bisection reproduces the archived safe-radius boundary")
    print("SCOPE: stored component intervals and proposed shares only; no interval generator rerun")


if __name__ == "__main__":
    main()
