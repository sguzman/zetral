#!/usr/bin/env python3
"""Independent exact reconstruction of the stored LXX even baseline failure."""
import glob
import json
import math
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]


def ceil_div(a, b):
    assert b > 0
    return -((-a) // b)


def trunc_half(a):
    return (abs(a) // 2) * (1 if a >= 0 else -1)


def bareiss_until_failure(matrix):
    a = [row[:] for row in matrix]
    n, previous, pivots = len(a), 1, []
    for k in range(n):
        pivot = a[k][k]
        pivots.append(str(pivot))
        if pivot <= 0:
            return pivots, k
        for i in range(k + 1, n):
            for j in range(i, n):
                numerator = pivot*a[i][j] - a[i][k]*a[k][j]
                quotient, remainder = divmod(numerator, previous)
                if remainder:
                    raise ArithmeticError((k, i, j, remainder))
                a[i][j] = a[j][i] = quotient
        previous = pivot
    return pivots, None


def main():
    root = ROOT / "experiments/results"
    parts = sorted(glob.glob(str(root / "lxx-123-50-even-t832-raw-part*.txt")))
    raw_text = "".join(Path(path).read_text() for path in parts)
    raw = json.loads(raw_text)
    row = raw["rows"][0]
    n, c = len(row["ks"]), row["componentIntervals"]
    assert len(parts) == 7 and len(raw_text) == 3354746
    assert (row["h"], row["odd"], row["J"], row["M"], row["T"], n) == ("123/50", False, 128, 12288, 832, 45)
    keys = ["leading", "second", "third", "fourth", "fifth", "sixth", "seventh"]

    lohi = [[None]*n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            lo = int(c["upper"][i][j][0]) - int(c["finite"][i][j][1])
            hi = int(c["upper"][i][j][1]) - int(c["finite"][i][j][0])
            for key in keys:
                lo -= int(c[key][i][j][1])
                hi -= int(c[key][i][j][0])
            if i == j:
                lo -= int(c["eighth"][i])
                hi -= int(c["eighth"][i])
            lohi[i][j] = [lo, hi]

    midpoint = [[0]*n for _ in range(n)]
    radius = [[0]*n for _ in range(n)]
    for i in range(n):
        for j in range(i+1):
            lo = max(lohi[i][j][0], lohi[j][i][0])
            hi = min(lohi[i][j][1], lohi[j][i][1])
            assert lo <= hi
            m = trunc_half(lo + hi)
            r = max(m-lo, hi-m)
            midpoint[i][j] = midpoint[j][i] = m
            radius[i][j] = radius[j][i] = r
    scales = list(map(int, row["radiusWeights"]))
    row_radius = [sum(ceil_div(radius[i][j]*scales[j], scales[i]) for j in range(n))
                  for i in range(n)]
    for i in range(n):
        midpoint[i][i] -= row_radius[i]

    assert [[str(x) for x in line] for line in midpoint] == row["lowerInteger"]
    assert list(map(str, row_radius)) == [str(int(d["matrixRadius"])) for d in row["diagnostics"]]
    pivots, failure = bareiss_until_failure(midpoint)
    assert pivots == row["principalMinors"] and failure == 2
    summary = json.loads((root / "lxx-123-50-even-t832-baseline-summary.json").read_text())
    assert summary["principalMinors"] == pivots and summary["positiveMinors"] == 2
    assert summary["firstNonpositive"] == 3
    energy_positive = sum(int(c["upper"][i][i][0]) > 0 for i in range(n))
    assert energy_positive == 45

    # Exact Schur-complement witness from the first failed 3x3 leading block.
    aa, ab, bb = midpoint[0][0], midpoint[0][1], midpoint[1][1]
    ac, bc = midpoint[0][2], midpoint[1][2]
    det2 = aa*bb - ab*ab
    assert det2 == int(row["principalMinors"][1]) > 0
    vector = [-(bb*ac - ab*bc), ab*ac - aa*bc, det2]
    common = math.gcd(math.gcd(abs(vector[0]), abs(vector[1])), abs(vector[2]))
    vector = [z//common for z in vector]
    q_lower = sum(vector[i]*midpoint[i][j]*vector[j] for i in range(3) for j in range(3))
    det3 = int(row["principalMinors"][2])
    assert det3 < 0 and q_lower == det2*det3//(common*common) < 0

    def component_q(name):
        matrix = c[name]
        lower = upper = 0
        for i in range(3):
            for j in range(3):
                xprod = vector[i]*vector[j]
                lo, hi = map(int, matrix[i][j])
                lower += xprod*(lo if xprod >= 0 else hi)
                upper += xprod*(hi if xprod >= 0 else lo)
        return [str(lower), str(upper)]

    eighth_loss = sum(vector[i]**2*int(c["eighth"][i]) for i in range(3))
    weak = {
        "h": row["h"], "support": [0, 1, 2], "vector": list(map(str, vector)),
        "gcdBeforeReduction": str(common), "firstTwoMinor": str(det2),
        "thirdMinor": str(det3), "quadraticLowerMatrix": str(q_lower),
        "schurIdentityVerified": True,
        "componentQuadratics": {name: component_q(name) for name in ["upper", "finite", *keys]},
        "eighthDiagonalLoss": str(eighth_loss),
        "scope": "Exact baseline lower-matrix witness on the first three stored coordinates; not an allocation-independent obstruction."
    }
    witness_path = ROOT / "research/workers/LXX-EVEN-BASELINE/weak-direction.json"
    witness_path.parent.mkdir(parents=True, exist_ok=True)
    witness_path.write_text(json.dumps(weak, separators=(",", ":")))
    print("baseline matrix: all 2025 entries and 45 weighted radii reconstruct exactly")
    print("positive upper-energy diagonals: 45/45")
    print(f"Bareiss leading minors: first two positive; third={pivots[2]} (nonpositive)")
    print(f"exact three-coordinate baseline witness q={q_lower}; q_E interval={component_q('upper')}")


if __name__ == "__main__":
    main()
