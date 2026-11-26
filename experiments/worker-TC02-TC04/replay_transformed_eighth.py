#!/usr/bin/env python3
"""Cross-language replay of the transformed T832 C8 tail coefficient.

The committed JS extractor supplies per-frequency generator intervals. This
Python code independently reconstructs the transformed exact coefficient row
from raw basis/trial entries and performs all C8 outward interval arithmetic.
"""
import json
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PREFIX = ROOT / "experiments/results/tc02-49-20-even-m12288-t832-"
Q = 10**66


def floor(a, b):
    return a // b


def ceil(a, b):
    return -((-a) // b)


def add(a, b):
    return [a[0] + b[0], a[1] + b[1]]


def neg(a):
    return [-a[1], -a[0]]


def sub(a, b):
    return add(a, neg(b))


def mul(a, b):
    products = [x * y for x in a for y in b]
    return [floor(min(products), Q), ceil(max(products), Q)]


def div(a, b):
    if b[0] <= 0 <= b[1]:
        raise ZeroDivisionError(b)
    pairs = [(floor(x * Q, y), ceil(x * Q, y)) for x in a for y in b]
    return [min(x[0] for x in pairs), max(x[1] for x in pairs)]


def square(a):
    if a[0] >= 0:
        return mul(a, a)
    if a[1] <= 0:
        return mul(neg(a), neg(a))
    return [0, ceil(max(a[0] * a[0], a[1] * a[1]), Q)]


def absup(a):
    return max(a[1], -a[0])


def main():
    raw_text = "".join((Path(str(PREFIX) + f"raw-part{i}.txt")).read_text() for i in range(1, 7))
    raw = json.loads(raw_text)["rows"][0]
    factors = json.loads(Path(str(PREFIX) + "constant-factors.json").read_text())
    cert = json.loads(subprocess.check_output(
        ["node", "experiments/worker-TC02-TC04/extract_tail_inputs.js"], cwd=ROOT
    ))
    debug = cert["debug"]
    assert len(debug["source"]) == len(debug["dj"]) == len(debug["poles"]) == len(raw["ks"] + raw["ts"]) == 417

    # basis and trial are exact Q-scaled integers. The transformed coefficient
    # row is -390867 times row 0 plus 100000 times row 1.
    source_row = []
    for j in range(417):
        if j < 44:
            c0, c1 = int(raw["basis"][0][j]), int(raw["basis"][1][j])
        else:
            c0 = -int(raw["trial"][0][j - 44])
            c1 = -int(raw["trial"][1][j - 44])
        source_row.append(-390867 * c0 + 100000 * c1)
    assert list(map(str, source_row)) == debug["source"]

    r8, rd, pc = [0, 0], [0, 0], [0, 0]
    for j, k in enumerate(raw["ks"] + raw["ts"]):
        coeff = [source_row[j], source_row[j]]
        a = mul(list(map(int, debug["norms"][j])), coeff)
        r8 = add(r8, mul([0, absup(a)], [k**8 * Q, k**8 * Q]))
        ad = mul(a, list(map(int, debug["dj"][j])))
        rd = add(rd, mul([0, absup(ad)], [k**6 * Q, k**6 * Q]))
        pc = add(pc, mul(coeff, list(map(int, debug["poles"][j]))))

    ph = mul(list(map(int, debug["polecoef"])), pc)
    cl_over_m = div(list(map(int, factors["CL"])), list(map(int, debug["m"])))
    numerator = add(mul(cl_over_m, r8), rd)
    den = list(map(int, debug["den"]))
    delta = list(map(int, debug["delta"]))
    c8 = add(div(numerator, den), mul(mul(square(delta), delta), [0, absup(ph)]))
    assert str(c8[1]) == cert["changedTail"]["C8"]
    c = [c8[1] + 1, c8[1] + 1]
    factor = [625 * Q, 625 * Q]
    mm15 = [(12287**15) * Q, (12287**15) * Q]
    eighth = div(mul(factor, square(c)), mul(mul([15 * Q, 15 * Q], mm15), list(map(int, debug["gm"]))))
    assert str(eighth[1]) == cert["changedTail"]["eighthUpper"]

    print("transformed coefficient row: independently reconstructed and matched")
    print("C8 upper endpoint: independently replayed and matched")
    print("eighthUpper endpoint: independently replayed and matched")
    print(f"C8 upper integer: {c8[1]}")
    print(f"eighthUpper integer: {eighth[1]}")


if __name__ == "__main__":
    main()
