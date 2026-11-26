#!/usr/bin/env python3
"""Conditional M-scaling threshold for the stored T832 eighth loss.

This is explicitly a frozen-tail sensitivity model, not a regenerated
certificate. It preserves the T832 witness and the two stored C8 values,
uses the frozen M0 numerator as an upper bound (CL(M)/M decreases for fixed
tails), changes the guard and (M-1)^15 factor, and drops the increasing
g(M+1) denominator. It is therefore an upper model only while the tails and
other fixed data remain frozen.
"""
from decimal import Decimal, getcontext

getcontext().prec = 60
M0, Q = 12288, 10**30
C8 = [
    989812167087312628279439759306635761758631867250175026260324714333611077,
    5665972738989032142949394072212294408990055518054310434943770457920204654,
]
BASE_EIGHTH = [
    45636977251108733182163491,
    97881867262656903460521870,
]
UPPER_ENERGY = 115349470474011610351304240


def den(m):
    return Decimal(1) - Decimal(m * m) / Decimal((m + 1) ** 2)


d0 = den(M0)


def coordinate_ratio(m, i):
    # Freeze the C8 numerator in C8=N/den. Keep the +1 in eighthC.
    c0 = Decimal(C8[i])
    cm = c0 * d0 / den(m)
    return ((cm + Q) / (c0 + Q)) ** 2 * (Decimal(M0 - 1) / Decimal(m - 1)) ** 15


def modeled_loss(m):
    return sum(Decimal(BASE_EIGHTH[i]) * coordinate_ratio(m, i) for i in range(2))


if __name__ == "__main__":
    for m in range(M0 + 1, 20000):
        if modeled_loss(m) < UPPER_ENERGY:
            print(f"first modeled M: {m}")
            print(f"loss ratio: {modeled_loss(m) / sum(BASE_EIGHTH):.50f}")
            print(f"previous loss ratio: {modeled_loss(m-1) / sum(BASE_EIGHTH):.50f}")
            break
    else:
        raise RuntimeError("threshold not found")
