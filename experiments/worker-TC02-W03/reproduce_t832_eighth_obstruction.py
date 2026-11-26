"""Independent integer-arithmetic audit of the T832 eighth-only obstruction.

Run from the repository root:
    python3 experiments/worker-TC02-W03/reproduce_t832_eighth_obstruction.py

The proof concerns the stored finite comparison and inherited diagonal tail
bound, not the physical infinite-dimensional remainder.
"""
import json
from pathlib import Path


RESULTS = Path("experiments/results")
PREFIX = "tc02-49-20-even-m12288-t832-"
Q = 10**66
X = (390867, -100000)


def sym_interval(matrix, i, j):
    lo = max(int(matrix[i][j][0]), int(matrix[j][i][0]))
    hi = min(int(matrix[i][j][1]), int(matrix[j][i][1]))
    assert lo <= hi
    return lo, hi


def quadratic_interval(matrix):
    lo_sum = hi_sum = 0
    for i in range(2):
        for j in range(2):
            lo, hi = sym_interval(matrix, i, j)
            coeff = X[i] * X[j]
            if coeff >= 0:
                lo_sum += coeff * lo
                hi_sum += coeff * hi
            else:
                lo_sum += coeff * hi
                hi_sum += coeff * lo
    return lo_sum, hi_sum


def ceildiv(a, b):
    return -((-a) // b)


def quadratic_integer(matrix):
    return sum(X[i] * X[j] * int(matrix[i][j]) for i in range(2) for j in range(2))


def main():
    parts = [
        (RESULTS / f"{PREFIX}raw-part{i}.txt").read_text()
        for i in range(1, 7)
    ]
    raw_text = "".join(parts)
    assert len(raw_text) == 3_204_173
    raw = json.loads(raw_text)
    row = raw["rows"][0]
    comp = row["componentIntervals"]
    factors = json.loads((RESULTS / f"{PREFIX}constant-factors.json").read_text())
    replay = json.loads((RESULTS / f"{PREFIX}replay.json").read_text())
    joint = json.loads((RESULTS / f"{PREFIX}joint.json").read_text())
    assert (row["h"], row["odd"], row["J"], row["KEM"], row["M"], row["T"]) == (
        "49/20", False, 128, 20, 12288, 832
    )
    assert raw["scale"] == str(Q) and factors["h"] == row["h"]
    assert factors["odd"] is False and factors["M"] == row["M"]
    old = list(map(int, row["tailShares"]))
    old_den = int(row["tailShareDenominator"])
    assert sum(old) == old_den and old[7] > 0
    ratio8_upper = int(factors["ratios"][7][1])
    assert 0 < ratio8_upper <= Q

    upper = quadratic_interval(comp["upper"])
    finite = quadratic_interval(comp["finite"])
    rank_keys = ["leading", "second", "third", "fourth", "fifth", "sixth", "seventh"]
    rank_lower = [quadratic_interval(comp[key])[0] for key in rank_keys]
    assert upper[0] > 0 and finite[0] >= 0 and all(v >= 0 for v in rank_lower)

    # Since each normalized joint direction weight p_i <= 1, the saved eighth
    # correction along coordinate i is at least E_i*s8*rho8/(D0*Q).
    # Floor after multiplying by x_i^2 to retain an exact integer lower bound.
    eighth_lower_terms = [
        X[i] ** 2
        * int(row["diagnostics"][i]["eighthUpper"])
        * old[7]
        * ratio8_upper
        // (old_den * Q)
        for i in range(2)
    ]
    eighth_lower = sum(eighth_lower_terms)
    gap = eighth_lower - upper[1]
    assert gap > 0

    # Recheck the algebraic share layout and the directional penalty for each
    # saved candidate; this does not substitute for the universal p_i argument.
    assert len(joint["results"]) == len(replay["results"]) == 8
    checked = []
    for selected, saved in zip(joint["results"], replay["results"]):
        weights = list(map(int, selected["weights"]))
        shares = list(map(int, saved["shares"]))
        den = int(saved["denominator"])
        assert sum(weights) == sum(shares) == den
        assert len(weights) == 51 and len(shares) == 8
        assert weights[:7] == shares[:7] and sum(weights[7:]) == shares[7]
        actual_eighth = 0
        for i in range(2):
            diagonal = int(saved["directionDiagonal"][i])
            actual_eighth += X[i] ** 2 * ceildiv(diagonal * old[7] * den, shares[7] * old_den)
        assert actual_eighth >= eighth_lower
        matrix = saved["lowerInteger"]
        q_lower = quadratic_integer(matrix)
        assert q_lower < 0
        checked.append((actual_eighth, q_lower))

    print("part lengths:", [len(p) for p in parts])
    print("direction:", X)
    print("upper quadratic interval:", upper)
    print("finite quadratic interval:", finite)
    print("seven rank lower endpoints:", rank_lower)
    print("eighth-only lower terms:", eighth_lower_terms)
    print("eighth-only sum:", eighth_lower)
    print("strict gap over upper endpoint:", gap)
    print("saved candidates checked (eighth quadratic, full lower quadratic):")
    for item in checked:
        print(item)


if __name__ == "__main__":
    main()
