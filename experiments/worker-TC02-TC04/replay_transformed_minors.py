#!/usr/bin/env python3
"""Independent integer replay of the stored LXIX even transformed certificate.

This checks the final stored integer matrix and fixed-energy grid. It does not
reconstruct the transformed eighth-tail bound from raw coefficients.
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CERT = ROOT / "experiments/results/tc02-49-20-even-m12288-t832-transformed-certificate.json"
RAW_PREFIX = ROOT / "experiments/results/tc02-49-20-even-m12288-t832-raw-part"


def bareiss(matrix):
    a = [row[:] for row in matrix]
    n, prev, pivots = len(a), 1, []
    for k in range(n):
        pivot = a[k][k]
        if pivot <= 0:
            return pivots, (k, pivot)
        pivots.append(str(pivot))
        for i in range(k + 1, n):
            for j in range(i, n):
                numerator = pivot * a[i][j] - a[i][k] * a[k][j]
                q, rem = divmod(numerator, prev)
                if rem:
                    raise ArithmeticError((k, i, j, rem))
                a[i][j] = a[j][i] = q
        prev = pivot
    return pivots, None


def main():
    cert = json.loads(CERT.read_text())
    raw_text = "".join((Path(str(RAW_PREFIX) + f"{i}.txt")).read_text() for i in range(1, 7))
    raw = json.loads(raw_text)
    row = raw["rows"][0]
    assert len(raw_text) == 3_204_173
    assert (row["h"], row["odd"], row["M"], row["T"], len(row["ks"])) == ("49/20", False, 12288, 832, 44)
    assert cert["transform"]["coefficients"] == ["-390867", "100000"]
    assert int(cert["transform"]["determinant"]) == 100000
    assert cert["n"] == len(row["ks"]) == 44
    assert cert["positiveMinors"] == 44
    assert len(cert["weights"]) == 51 and sum(map(int, cert["weights"])) == int(cert["denominator"]) == 10**12
    assert all(int(x) > 0 for x in cert["energyUpper"])

    matrix = [[int(x) for x in line] for line in cert["lowerInteger"]]
    assert len(matrix) == 44 and all(len(line) == 44 for line in matrix)
    assert all(matrix[i][j] == matrix[j][i] for i in range(44) for j in range(44))
    pivots, fail = bareiss(matrix)
    assert fail is None and pivots == cert["principalMinors"]

    grid = int(cert["marginDenominator"])
    energies = list(map(int, cert["energyUpper"]))
    margin = int(cert["marginNumerator"])
    def grid_replay(m):
        adjusted = [[grid * matrix[i][j] - (m * energies[i] if i == j else 0)
                     for j in range(44)] for i in range(44)]
        return bareiss(adjusted)
    pass_pivots, pass_fail = grid_replay(margin)
    next_pivots, next_fail = grid_replay(margin + 1)
    assert pass_fail is None and len(pass_pivots) == 44
    assert next_fail is not None
    assert cert["nextGridFails"] is True
    print("independent exact pivots: 44/44 positive; saved pivot strings match")
    print(f"fixed-energy grid: {margin}/{grid} passes; {margin+1}/{grid} fails at pivot {next_fail[0]+1}")
    print(f"first pivot: {pivots[0]}; final pivot digits: {len(pivots[-1])}")


if __name__ == "__main__":
    main()
