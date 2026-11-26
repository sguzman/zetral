"""Exact necessary-condition audit for every T832 tail allocation.

Run from the repository root:
    python3 experiments/worker-TC02-W02/t832_allocation_obstruction.py

Uses integer interval arithmetic and the continuous Cauchy relaxation. It does
not optimize or replay the full 44-dimensional generalized residual.
"""
import json
import math
from pathlib import Path


P = Path("experiments/results")
PREFIX = "tc02-49-20-even-m12288-t832-"
Q = 10**66


def sym_interval(matrix, i, j):
    lo = max(int(matrix[i][j][0]), int(matrix[j][i][0]))
    hi = min(int(matrix[i][j][1]), int(matrix[j][i][1]))
    assert lo <= hi
    return lo, hi


def quadratic_interval(matrix, vector):
    """Exact enclosure for v^T M v using the symmetric interval intersections."""
    lo_sum = hi_sum = 0
    for i in range(len(vector)):
        for j in range(i, len(vector)):
            lo, hi = sym_interval(matrix, i, j)
            coeff = vector[i] * vector[j] * (1 if i == j else 2)
            if coeff >= 0:
                lo_sum += coeff * lo
                hi_sum += coeff * hi
            else:
                lo_sum += coeff * hi
                hi_sum += coeff * lo
    return lo_sum, hi_sum


def main():
    raw = json.loads(
        "".join((P / f"{PREFIX}raw-part{i}.txt").read_text() for i in range(1, 7))
    )
    row = raw["rows"][0]
    comp = row["componentIntervals"]
    assert raw["scale"] == str(Q) and row["T"] == 832 and len(row["ks"]) == 44

    factors = json.loads((P / f"{PREFIX}constant-factors.json").read_text())
    replay = json.loads((P / f"{PREFIX}replay.json").read_text())
    joint = json.loads((P / f"{PREFIX}joint.json").read_text())
    old_shares = list(map(int, row["tailShares"]))
    old_den = int(row["tailShareDenominator"])
    candidate_denominators = {int(x["denominator"]) for x in replay["results"]}
    assert len(candidate_denominators) == 1
    D = candidate_denominators.pop()
    assert D == 10**12 and sum(old_shares) == old_den
    assert len(joint["results"]) == len(replay["results"]) == 8
    assert factors["h"] == row["h"] and factors["odd"] == row["odd"]
    for candidate in joint["results"]:
        weights = list(map(int, candidate["weights"]))
        shares = list(map(int, candidate["result"]["shares"]))
        assert len(weights) == len(row["ks"]) + 7 and sum(weights) == D
        assert len(shares) == 8 and sum(shares) == D
        assert weights[:7] == shares[:7] and sum(weights[7:]) == shares[7]

    # Choose an exact integer vector along the nearly weak first two energy
    # coordinates, from the midpoint of their symmetrized upper-energy intervals.
    upper = comp["upper"]
    u00lo, u00hi = sym_interval(upper, 0, 0)
    u01lo, u01hi = sym_interval(upper, 0, 1)
    v = [(u01lo + u01hi) // 2, -((u00lo + u00hi) // 2)]
    assert v[0] > 0 and v[1] < 0

    Uq = quadratic_interval(comp["upper"], v)
    Fq = quadratic_interval(comp["finite"], v)
    headroom_upper = Uq[1] - Fq[0]
    assert headroom_upper > 0

    # A selected positive rank component contributes at least D*b_k/s_k,
    # where b_k is floored from exact interval lower endpoints and the lower
    # constant-factor ratio. Terms whose factor ratio lower endpoint is zero
    # are omitted, as are all other nonnegative penalties and row radii.
    retained = []
    rank_keys = ["leading", "second", "third", "fourth", "fifth", "sixth", "seventh"]
    ratios = factors["ratios"]
    for k in (1, 3, 5):
        qlo, _ = quadratic_interval(comp[rank_keys[k]], v)
        ratio_lo = int(ratios[k][0])
        assert qlo > 0 and ratio_lo > 0
        b = qlo * ratio_lo * old_shares[k] // (Q * old_den)
        assert b > 0
        retained.append((rank_keys[k], b))

    # For the eighth-order diagonal tail, the joint replay splits share s_8
    # into weights w_i with sum_i w_i=s_8. Ignoring ceilings only lowers its
    # penalty; its directional coefficient is D*b_i/w_i.
    ratio8_lo = int(ratios[7][0])
    assert ratio8_lo > 0
    for i in range(2):
        c8 = int(row["diagnostics"][i]["eighthUpper"])
        b = c8 * ratio8_lo * old_shares[7] * v[i] ** 2 // (Q * old_den)
        assert b > 0
        retained.append((f"eighth-coordinate-{i}", b))

    # The seven rank shares and all eighth-coordinate weights together use
    # exactly D units. Cauchy gives sum(D*b_j/x_j) >= (sum sqrt(b_j))^2.
    # Replace each square root by its exact integer floor to keep an entirely
    # rational certificate.
    root_floor_sum = sum(math.isqrt(b) for _, b in retained)
    unavoidable_penalty_lower = root_floor_sum**2
    gap = unavoidable_penalty_lower - headroom_upper
    assert gap > 0

    print("weak-direction integer vector:", v)
    print("U quadratic interval:", Uq)
    print("finite quadratic interval:", Fq)
    print("maximum U-F headroom:", headroom_upper)
    print("total allocation budget:", D)
    for name, b in retained:
        print(name, "b =", b, "floor sqrt =", math.isqrt(b))
    print("sum of integer square-root lower bounds:", root_floor_sum)
    print("unavoidable current-bound penalty lower bound:", unavoidable_penalty_lower)
    print("strict excess over maximum headroom:", gap)
    print("conclusion: every positive real allocation with total budget D leaves v^T L v < 0")


if __name__ == "__main__":
    main()
