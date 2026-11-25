#!/usr/bin/env python3
"""Exact diagnostic for vector-box bounds on FDA02 rank-one moment terms.

Usage: python experiments/fda03w01-correlated-moment-bounds.py

This reads the archived FDA02 even interval JSON.  It does not recompute the
operator or validate the interval generator.  All arithmetic below is exact
Fraction/integer arithmetic; square roots are rounded upward to the JSON
lattice only for the final displayed bound.
"""

import json
from fractions import Fraction
from math import isqrt
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "experiments/results/fda02-23-10-even.json"
MOMENTS = ["S0", "V2", "S2", "V4", "S4", "V6", "S6"]
COMPONENTS = ["leading", "second", "third", "fourth", "fifth", "sixth", "seventh"]


def ceil_sqrt_fraction(x: Fraction) -> int:
    """Least integer n with n**2 >= x, for nonnegative rational x."""
    if x < 0:
        raise ValueError("negative square root")
    n = isqrt(x.numerator // x.denominator)
    if n * n * x.denominator < x.numerator:
        n += 1
    return n


def ceil_fraction(x: Fraction) -> int:
    return -((-x.numerator) // x.denominator)


def main() -> None:
    raw = json.loads(DATA.read_text())
    row = raw["rows"][0]
    Q = int(raw["scale"])
    total_group_bound = 0
    old_weighted_rank_bound = Fraction(0)
    old_rank_radii = [[Fraction(0) for _ in row["ks"]] for _ in row["ks"]]

    print(f"scale={Q}; moments={len(MOMENTS)}; dimension={len(row['ks'])}")
    for moment, component in zip(MOMENTS, COMPONENTS):
        vector_intervals = [list(map(int, t[moment])) for t in row["tails"]]
        centers = [(lo + hi) // 2 for lo, hi in vector_intervals]
        radii = [max(c - lo, hi - c) for (lo, hi), c in zip(vector_intervals, centers)]

        # If R_ii encloses c*v_i^2 and |v_i| >= a_i > 0, then
        # c <= R_ii^upper*Q/a_i^2.  The least of these valid bounds is tighter.
        candidates = []
        matrix = row["componentIntervals"][component]
        for i, ((lo, hi), rij) in enumerate(zip(vector_intervals, matrix)):
            min_abs = lo if lo > 0 else (-hi if hi < 0 else 0)
            if min_abs:
                candidates.append(Fraction(int(rij[i][1]) * Q, min_abs * min_abs))
        if not candidates:
            raise ValueError(f"no nonzero coordinate available for {moment}")
        c_upper = min(candidates)

        A = c_upper * sum((Fraction(c * c, Q * Q) for c in centers), Fraction(0))
        B = c_upper * sum((Fraction(r * r, Q * Q) for r in radii), Fraction(0))
        # For every x, c(v.x)^2 <= c(cbar.x)^2 +
        # [eps*A + (1+1/eps)*B] ||x||^2.  The optimized excess is
        # B + 2 sqrt(A B), rounded upward to a rational Q-lattice point.
        scaled_sqrt = Fraction(A * B * Q * Q)
        sqrt_upper = ceil_sqrt_fraction(scaled_sqrt)
        bound_lattice = ceil_fraction(B * Q) + 2 * sqrt_upper
        total_group_bound += bound_lattice

        for i, matrix_row in enumerate(matrix):
            for j, interval in enumerate(matrix_row):
                lo, hi = map(int, interval)
                mid = (lo + hi) // 2
                rad = max(mid - lo, hi - mid)
                old_rank_radii[i][j] += Fraction(rad, Q)

        print(f"{moment}: exact Q-lattice excess upper={bound_lattice}")

    weights = [Fraction(int(w), Q) for w in row["radiusWeights"]]
    old_weighted_rank_bound = max(
        sum((old_rank_radii[i][j] * weights[j] / weights[i] for j in range(len(weights))), Fraction(0))
        for i in range(len(weights))
    )
    current_radius = Fraction(max(int(d["matrixRadius"]) for d in row["diagnostics"]), Q)
    grouped = Fraction(total_group_bound, Q)
    print(f"grouped scalar excess upper={total_group_bound}/{Q}")
    print(f"existing rank-only weighted entry-radius upper={float(old_weighted_rank_bound):.8E}")
    print(f"reported maximum full weighted row radius={float(current_radius):.8E}")
    print(f"rank-only entrywise/grouped ratio={float(old_weighted_rank_bound / grouped):.6g}")
    print(f"full-radius/grouped ratio={float(current_radius / grouped):.6g}")


if __name__ == "__main__":
    main()
