#!/usr/bin/env python3
"""Independently replay the integer arithmetic in the four-obstruction blob."""
import json
from math import isqrt
from pathlib import Path

INPUT = Path(__file__).resolve().parents[1] / "results/lxx-123-50-even-t832-four-obstruction.json"


def main():
    d = json.loads(INPUT.read_text())
    energy = int(d["energyUpper"])
    finite = int(d["finiteLower"])
    costs = list(map(int, d["rankNumerators"])) + list(map(int, d["eighthNumerators"]))
    denominator = int(d["commonDenominator"])
    assert energy > 0 and finite > 0 and len(d["rankNumerators"]) == 7
    assert len(d["eighthNumerators"]) == 45

    # Negative rank lower endpoints are discarded using the source's stated
    # PSD assumption for those rank majorants; negative costs cannot be used
    # inside the Cauchy allocation lower bound.
    floor_roots = sum(isqrt(c) if c > 0 else 0 for c in costs)
    assert floor_roots == int(d["sumFloorRoots"])
    loss_numerator = finite * denominator + floor_roots**2
    energy_numerator = energy * denominator
    assert loss_numerator == int(d["lossLowerNumerator"])
    assert energy_numerator == int(d["energyUpperNumerator"])
    assert loss_numerator > energy_numerator
    ratio_floor = loss_numerator * 1_000_000 // energy_numerator
    finite_ratio_floor = finite * 1_000_000 // energy
    assert ratio_floor == int(d["ratioFloorMillion"])
    assert finite_ratio_floor == int(d["finiteRatioFloorMillion"])
    assert ratio_floor == 1_061_659

    print("exact allocation-independent lower-loss / energy-upper ratio floor:", ratio_floor, "/ 1000000")
    print("exact finite-loss / energy-upper ratio floor:", finite_ratio_floor, "/ 1000000")
    print("Cauchy root terms retained:", sum(c > 0 for c in costs), "of", len(costs))


if __name__ == "__main__":
    main()
