"""Independently rebuild the stored T832 baseline lower matrix.

Run from the repository root:
    python3 experiments/worker-TC02-W02/rebuild_t832_baseline.py

This checks stored interval-to-matrix arithmetic, not the analytic source bounds.
"""
import hashlib
import json
from pathlib import Path


P = Path("experiments/results")
PARTS = [P / f"tc02-49-20-even-m12288-t832-raw-part{i}.txt" for i in range(1, 7)]
Q = 10**66


def ceildiv(a, b):
    return -((-a) // b)


def trunc2(a):
    return a // 2 if a >= 0 else -((-a) // 2)


def bareiss_prefix(matrix):
    b = [row[:] for row in matrix]
    previous = 1
    prefix = []
    for k in range(len(b)):
        pivot = b[k][k]
        prefix.append(str(pivot))
        if pivot <= 0:
            return prefix
        for i in range(k + 1, len(b)):
            for j in range(i, len(b)):
                numerator = pivot * b[i][j] - b[i][k] * b[k][j]
                assert numerator % previous == 0
                b[i][j] = b[j][i] = numerator // previous
            b[i][k] = b[k][i] = 0
        previous = pivot
    return prefix


def main():
    part_bytes = [p.read_bytes() for p in PARTS]
    raw_text = b"".join(part_bytes).decode("utf-8")
    raw = json.loads(raw_text)
    row = raw["rows"][0]
    n = len(row["ks"])
    components = row["componentIntervals"]
    old = list(map(int, row["tailShares"]))
    old_denominator = int(row["tailShareDenominator"])
    base_weights = list(map(int, row["radiusWeights"]))
    assert raw["scale"] == str(10**66)
    assert (row["h"], row["odd"], row["J"], row["KEM"], row["M"], row["T"], n) == (
        "49/20", False, 128, 20, 12288, 832, 44
    )
    rank_keys = ["leading", "second", "third", "fourth", "fifth", "sixth", "seventh"]

    def build_matrix(shares, denominator, weights, direction_diagonal=None, refined=False):
      assert sum(shares) == denominator and len(shares) == 8
      assert len(weights) == (n + 7 if refined else n)
      factor_doc = json.loads((P / "tc02-49-20-even-m12288-t832-constant-factors.json").read_text())
      ratios = [int(pair[1]) for pair in factor_doc["ratios"]]
      joint_doc = json.loads((P / "tc02-49-20-even-m12288-t832-joint.json").read_text())
      replay_doc = json.loads((P / "tc02-49-20-even-m12288-t832-replay.json").read_text())
      def floor_div(a, b):
          return a // b
      def ceil_div(a, b):
          return -((-a) // b)
      def interval(i, j):
        u0, u1 = map(int, components["upper"][i][j])
        f0, f1 = map(int, components["finite"][i][j])
        lo, hi = u0 - f1, u1 - f0
        for k, key in enumerate(rank_keys):
            a, b = map(int, components[key][i][j])
            if refined:
                a = floor_div(a * ratios[k], Q)
                b = ceil_div(b * ratios[k], Q)
            p, q = old[k] * denominator, shares[k] * old_denominator
            lo -= ceil_div(b * p, q)
            hi -= floor_div(a * p, q)
        if i == j:
            if refined:
                assert direction_diagonal is not None
                allowance = int(direction_diagonal[i])
            else:
                allowance = int(components["eighth"][i])
            exact = ceil_div(allowance * old[7] * denominator, shares[7] * old_denominator)
            lo -= exact
            hi -= exact
        return lo, hi
      lower = [[0] * n for _ in range(n)]
      radii = [[0] * n for _ in range(n)]
      for i in range(n):
        for j in range(i + 1):
            a, b = interval(i, j), interval(j, i)
            lo, hi = max(a[0], b[0]), min(a[1], b[1])
            assert lo <= hi
            midpoint = trunc2(lo + hi)
            lower[i][j] = lower[j][i] = midpoint
            radii[i][j] = radii[j][i] = max(midpoint - lo, hi - midpoint)
      weighted_radii = [
          sum(ceildiv(radii[i][j] * base_weights[j], base_weights[i]) for j in range(n))
          for i in range(n)
      ]
      reconstructed = [
          [lower[i][j] - (weighted_radii[i] if i == j else 0) for j in range(n)]
          for i in range(n)
      ]
      return reconstructed, weighted_radii

    baseline, weighted_radii = build_matrix(old, old_denominator, base_weights)
    assert all(str(baseline[i][j]) == row["lowerInteger"][i][j] for i in range(n) for j in range(n))
    assert all(str(weighted_radii[i]) == row["diagnostics"][i]["matrixRadius"] for i in range(n))
    prefix = bareiss_prefix(baseline)
    assert prefix == row["principalMinors"]
    assert len(prefix) == 2 and int(prefix[0]) > 0 and int(prefix[1]) < 0

    factor_doc = json.loads((P / "tc02-49-20-even-m12288-t832-constant-factors.json").read_text())
    joint_doc = json.loads((P / "tc02-49-20-even-m12288-t832-joint.json").read_text())
    replay_doc = json.loads((P / "tc02-49-20-even-m12288-t832-replay.json").read_text())
    assert len(joint_doc["results"]) == len(replay_doc["results"]) == 8
    selected = []
    for index, (joint, saved) in enumerate(zip(joint_doc["results"], replay_doc["results"])):
        result = joint["result"]
        assert result["shares"] == saved["shares"] and joint["weights"] == saved["weights"]
        shares, denominator = list(map(int, saved["shares"])), int(saved["denominator"])
        weights, direction = list(map(int, saved["weights"])), saved["directionDiagonal"]
        diagonal_weights = weights[7:]
        W = sum(diagonal_weights)
        ratios = [int(pair[1]) for pair in factor_doc["ratios"]]
        expected_direction = [
            ceildiv(ceildiv(int(row["diagnostics"][i]["eighthUpper"]) * W, diagonal_weights[i]) * ratios[7], Q)
            for i in range(n)
        ]
        assert list(map(int, direction)) == expected_direction
        matrix, _ = build_matrix(shares, denominator, weights, direction, refined=True)
        assert all(str(matrix[i][j]) == saved["lowerInteger"][i][j] for i in range(n) for j in range(n))
        minors = bareiss_prefix(matrix)
        assert minors == saved["principalMinors"]
        assert len(minors) == 2 and int(minors[0]) > 0 and int(minors[1]) < 0
        selected.append((index, shares, minors, matrix))

    # A crude exact interval determinant bound for the first 2x2 upper-energy block.
    upper = components["upper"]
    u00lo, u00hi = map(int, upper[0][0])
    u11lo, u11hi = map(int, upper[1][1])
    u01_10_lo, u01_10_hi = map(int, upper[0][1])
    u01_01_lo, u01_01_hi = map(int, upper[1][0])
    u01lo, u01hi = max(u01_10_lo, u01_01_lo), min(u01_10_hi, u01_01_hi)
    assert u01lo <= u01hi
    det_upper_lower = u00lo * u11lo - max(abs(u01lo), abs(u01hi)) ** 2
    assert det_upper_lower > 0
    mid00 = (u00lo + u00hi) // 2
    mid11 = (u11lo + u11hi) // 2
    mid01 = (u01lo + u01hi) // 2
    correlation_mid = float(mid01) / (float(mid00) * float(mid11)) ** 0.5

    # An exact integer vector approximating the weak direction of this upper
    # energy block, with interval-certified positive denominator.
    v0, v1 = mid01, -mid00
    energy_q_lo = u00lo * v0**2 + u11lo * v1**2 + 2 * u01hi * v0 * v1
    energy_q_hi = u00hi * v0**2 + u11hi * v1**2 + 2 * u01lo * v0 * v1
    assert 0 < energy_q_lo <= energy_q_hi

    def quadratic2(matrix):
        return matrix[0][0] * v0**2 + 2 * matrix[0][1] * v0 * v1 + matrix[1][1] * v1**2

    baseline_directional = quadratic2(baseline)
    assert baseline_directional < 0
    for _, _, _, matrix in selected:
        assert quadratic2(matrix) < 0

    print("part bytes:", [len(x) for x in part_bytes])
    print("part git-blob sha1:", [hashlib.sha1(b"blob " + str(len(x)).encode() + b"\0" + x).hexdigest() for x in part_bytes])
    print("combined JSON characters:", len(raw_text))
    print("baseline entries reconstructed:", n * n)
    print("weighted row radii matched:", len(weighted_radii))
    print("leading determinant prefix:", prefix)
    print("selected matrices reconstructed with first-positive/second-negative minors:", len(selected))
    for index, shares, minors, _ in selected:
        print("selected", index, "shares", ",".join(map(str, shares)), "prefix", minors)
    print("first 2x2 upper-energy determinant lower bound (integer scale Q^2):", det_upper_lower)
    print("first 2x2 upper-energy midpoint correlation (float diagnostic):", correlation_mid)
    print("weak-direction vector:", v0, v1)
    print("weak-direction upper-energy quadratic interval:", energy_q_lo, energy_q_hi)
    print("baseline lower-matrix quadratic:", baseline_directional)
    print("selected lower-matrix quadratics:", [quadratic2(matrix) for _, _, _, matrix in selected])


if __name__ == "__main__":
    main()
