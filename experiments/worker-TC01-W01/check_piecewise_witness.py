#!/usr/bin/env python3
"""Exact checker for the saved SC01 rational piecewise witness."""
import bisect
import json
from fractions import Fraction
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PATH = ROOT / "experiments/results/tc01-58-5-witness.json"

def q(text):
    a, sep, b = text.partition("/")
    return Fraction(int(a), int(b) if sep else 1)

def encode(x):
    return f"{x.numerator}/{x.denominator}"

def main():
    doc = json.loads(PATH.read_text())
    best = doc["best"]
    assert doc["window"] == "58/5"
    assert best["step"] == 16
    assert best["boundNumerator"] == "2873" and best["checked"] == 52551
    h = Fraction(58, 5)
    lo = Fraction(1)
    shifts = (2, 3, 4, 5, 7, 8, 9, 11)
    weights = tuple(map(int, doc["weightNumerators"]))
    assert len(weights) == len(shifts) == 8
    scale = int(doc["intervalScale"])
    # Check the saved rational upper bounds against the assigned rational weights.
    for upper_pair, weight in zip(doc["actualWeightIntervals"], weights):
        assert int(upper_pair[0]) <= int(upper_pair[1])
        assert 1000 * int(upper_pair[1]) <= weight * scale

    points = [q(x) for x in best["points"]]
    values = list(map(int, best["values"]))
    assert points[0] == lo and points[-1] == h
    assert len(points) == len(values) + 1
    assert all(a < b for a, b in zip(points, points[1:]))
    assert all(v > 0 for v in values)

    # Close the partition under x -> m*x and x -> x/m for every integer shift.
    refined = set(points)
    for x in points:
        for m in shifts:
            for y in (x * m, x / m):
                if lo < y < h:
                    refined.add(y)
    refined = sorted(refined)
    assert len(refined) - 1 == int(best["checked"])

    def value(x):
        if x <= lo or x >= h:
            return 0
        i = bisect.bisect_right(points, x) - 1
        return values[i]

    bound = int(best["boundNumerator"])
    largest_ceiling = 0
    worst_index = None
    for i, (a, b) in enumerate(zip(refined, refined[1:])):
        x = (a + b) / 2
        w = value(x)
        assert w > 0
        p = sum(weight * (value(x * m) + value(x / m))
                for m, weight in zip(shifts, weights))
        assert p <= bound * w, f"failed cell {i}: {encode(a)}..{encode(b)}"
        ceiling = (p + w - 1) // w
        if ceiling > largest_ceiling:
            largest_ceiling = ceiling
            worst_index = i
    assert largest_ceiling == bound
    assert worst_index is not None
    worst = [encode(refined[worst_index]), encode(refined[worst_index + 1])]
    assert worst == best["worstCell"]
    print(f"window={doc['window']} shifts={len(shifts)}")
    print(f"verified_cells={len(refined)-1} bound={bound}/1000")
    print(f"weight_upper_bounds={len(weights)}/8 pass the saved rational caps")
    print(f"worst_cell={worst[0]}..{worst[1]}")

if __name__ == "__main__":
    main()
