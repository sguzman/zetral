#!/usr/bin/env python3
"""Exact diagnostic for vector-box bounds on FDA02 rank-one moment terms.

Usage: python experiments/fda03w01-correlated-moment-bounds.py [--odd]

This reads the archived FDA02 even interval JSON.  It does not recompute the
operator or validate the interval generator.  All arithmetic below is exact
Fraction/integer arithmetic; square roots are rounded upward to the JSON
lattice only for the final displayed bound.
"""

import json
import sys
from fractions import Fraction
from math import isqrt
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
MOMENTS = ["S0", "V2", "S2", "V4", "S4", "V6", "S6"]
COMPONENTS = ["leading", "second", "third", "fourth", "fifth", "sixth", "seventh"]
PARITY = "odd" if "--odd" in sys.argv else "even"
DATA = ROOT / f"experiments/results/fda02-23-10-{PARITY}.json"
OUTPUT = ROOT / f"experiments/results/fda03w01-grouped-{PARITY}-reassembly.json"


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


def round_fraction(x: Fraction) -> int:
    """Nearest integer, with ties rounded away from zero."""
    sign = -1 if x < 0 else 1
    n, d = abs(x.numerator), x.denominator
    q, r = divmod(n, d)
    return sign * (q + (2 * r >= d))


def main() -> None:
    raw = json.loads(DATA.read_text())
    row = raw["rows"][0]
    Q = int(raw["scale"])
    total_group_bound = 0
    old_weighted_rank_bound = Fraction(0)
    old_rank_radii = [[Fraction(0) for _ in row["ks"]] for _ in row["ks"]]
    rank_centers = [[0 for _ in row["ks"]] for _ in row["ks"]]
    family_bounds = []
    coefficient_uppers = []

    print(f"parity={PARITY}; scale={Q}; moments={len(MOMENTS)}; dimension={len(row['ks'])}")
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
        family_bounds.append(bound_lattice)
        coefficient_uppers.append(f"{c_upper.numerator}/{c_upper.denominator}")

        for i in range(len(centers)):
            for j in range(len(centers)):
                rank_centers[i][j] += round_fraction(c_upper * centers[i] * centers[j] / Q)

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

    # Reassemble the lower comparison, replacing all seven interval rank
    # matrices by their grouped Loewner upper bounds.  The center entries are
    # rounded to Q; at most 1/(2Q) error per cell is covered by n/Q on the
    # diagonal.  The remaining intervals are symmetrized and use the saved
    # diagonal weights for the usual exact Young-radius deduction.
    n = len(row["ks"])
    rounding_diag = (len(MOMENTS) * n + 1) // 2
    extra_diag = [total_group_bound + rounding_diag for _ in range(n)]
    raw_bounds = []
    upper = row["componentIntervals"]["upper"]
    finite = row["componentIntervals"]["finite"]
    eighth = list(map(int, row["componentIntervals"]["eighth"]))
    for i in range(n):
        raw_row = []
        for j in range(n):
            u_lo, u_hi = map(int, upper[i][j])
            f_lo, f_hi = map(int, finite[i][j])
            shift = (eighth[i] if i == j else 0) + rank_centers[i][j]
            diag_shift = extra_diag[i] if i == j else 0
            raw_row.append((u_lo - f_hi - shift - diag_shift,
                            u_hi - f_lo - shift - diag_shift))
        raw_bounds.append(raw_row)

    centers2 = [[0] * n for _ in range(n)]
    radii2 = [[0] * n for _ in range(n)]
    for i in range(n):
        for j in range(i + 1):
            lo = max(raw_bounds[i][j][0], raw_bounds[j][i][0])
            hi = min(raw_bounds[i][j][1], raw_bounds[j][i][1])
            if lo > hi:
                raise ValueError(f"empty symmetric interval at ({i},{j})")
            centers2[i][j] = centers2[j][i] = lo + hi  # units 2Q
            radii2[i][j] = radii2[j][i] = hi - lo     # twice the radius, units 2Q

    weights = list(map(int, row["radiusWeights"]))
    lower = [line[:] for line in centers2]
    for i in range(n):
        error_Q = sum(
            ceil_fraction(Fraction(radii2[i][j] * weights[j], 2 * weights[i]))
            for j in range(n)
        )
        lower[i][i] -= 2 * error_Q

    # Fraction-free Bareiss elimination: positive leading minors certify PD.
    bareiss = [line[:] for line in lower]
    prev, signs, first, leading_minors = 1, [], None, []
    for k in range(n):
        pivot = bareiss[k][k]
        if first is None:
            first = pivot
        leading_minors.append(str(pivot))
        signs.append(pivot > 0)
        if pivot <= 0:
            break
        for i in range(k + 1, n):
            for j in range(i, n):
                value = pivot * bareiss[i][j] - bareiss[i][k] * bareiss[k][j]
                if value % prev:
                    raise ArithmeticError("nonexact Bareiss division")
                bareiss[i][j] = bareiss[j][i] = value // prev
        prev = pivot
    print(f"grouped-assembly positive pivots={sum(signs)}/{n}; first pivot on 2Q lattice={first}")
    result = {
        "sourceMain": "98de91ec03b7e2b3fc36bea49ce5e4fc56e09ded",
        "inputBlob": "1f948873e66234188409e0f95fee5447d782a137" if PARITY == "even" else "9233e0650b366dbcec831af18a01ef8813e7305b",
        "parity": PARITY,
        "scale": str(Q),
        "matrixScale": f"2*{Q}",
        "dimension": n,
        "moments": MOMENTS,
        "familyCoefficientUpperRationals": coefficient_uppers,
        "familyExcessQUnits": family_bounds,
        "groupedExcessQUnits": total_group_bound,
        "roundingDiagonalQUnits": rounding_diag,
        "residualWeightedErrorsQUnits": [
            sum(ceil_fraction(Fraction(radii2[i][j] * weights[j], 2 * weights[i])) for j in range(n))
            for i in range(n)
        ],
        "positiveLeadingMinorCount": sum(signs),
        "leadingMinorsOnInteger2QMatrix": leading_minors,
        "lowerMatrixOnInteger2QMatrix": [[str(x) for x in line] for line in lower],
    }
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(result, indent=2) + "\n")
    print(f"exact grouped reassembly saved to {OUTPUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
