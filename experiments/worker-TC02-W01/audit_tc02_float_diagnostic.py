"""Independently reproduce the saved TC02 even residual decomposition.

Run from the repository root:
    python3 experiments/worker-TC02-W01/audit_tc02_float_diagnostic.py

This is intentionally a floating-point diagnostic, not a positivity certificate.
"""
import json
from pathlib import Path

import numpy as np


RESULTS = Path("experiments/results")
PREFIX = "tc02-49-20-even-m12288-"
Q = 10**66
RANK_KEYS = ["leading", "second", "third", "fourth", "fifth", "sixth", "seventh"]


def mid_scaled(interval):
    """Midpoint of an integer interval, converted from scale Q to float."""
    lo, hi = map(int, interval)
    return (lo + hi) / (2 * Q)


def main():
    raw = json.loads(
        "".join((RESULTS / f"{PREFIX}raw-part{i}.txt").read_text() for i in range(1, 7))
    )
    row = raw["rows"][0]
    components = row["componentIntervals"]
    assert raw["scale"] == str(Q)
    assert (row["h"], row["odd"], row["J"], row["KEM"], row["M"], row["T"]) == (
        "49/20", False, 128, 20, 12288, 768
    )

    factors = json.loads((RESULTS / f"{PREFIX}constant-factors.json").read_text())
    replay = json.loads((RESULTS / f"{PREFIX}replay.json").read_text())["results"][0]
    assert factors["h"] == row["h"] and factors["odd"] == row["odd"]
    assert replay["shares"] == json.loads(
        (RESULTS / f"{PREFIX}joint.json").read_text()
    )["results"][0]["result"]["shares"]

    n = len(row["ks"])
    old_shares = list(map(int, row["tailShares"]))
    old_den = int(row["tailShareDenominator"])
    shares = list(map(int, replay["shares"]))
    den = int(replay["denominator"])
    ratios = [int(pair[1]) / Q for pair in factors["ratios"]]
    assert len(old_shares) == len(shares) == len(ratios) == 8

    # Normalize each component by the midpoint of the saved upper-energy diagonal.
    energy = np.array([mid_scaled(components["upper"][i][i]) for i in range(n)])
    assert np.all(energy > 0)
    root_energy = np.sqrt(np.outer(energy, energy))
    pieces = {}
    pieces["finite"] = np.array(
        [
            [mid_scaled(components["finite"][i][j]) / root_energy[i, j] for j in range(n)]
            for i in range(n)
        ]
    )

    # The saved rank matrices use the old allocation. Restore the factor-ratio
    # upper endpoint, then apply the exact allocation change as a float ratio.
    for k, key in enumerate(RANK_KEYS):
        allocation = old_shares[k] * den / (shares[k] * old_den)
        pieces[key] = np.array(
            [
                [
                    mid_scaled(components[key][i][j])
                    * ratios[k]
                    * allocation
                    / root_energy[i, j]
                    for j in range(n)
                ]
                for i in range(n)
            ]
        )

    # replay.directionDiagonal already includes the eighth-factor conversion
    # and weighted Cauchy allocation chosen by the stored exact replay.
    eighth_scale = old_shares[7] * den / (shares[7] * old_den)
    pieces["eighth"] = np.diag(
        [int(replay["directionDiagonal"][i]) / Q * eighth_scale / energy[i] for i in range(n)]
    )

    total = sum(pieces.values())
    eigenvalues, eigenvectors = np.linalg.eigh((total + total.T) / 2)
    direction = eigenvectors[:, -1]
    contributions = {name: float(direction @ matrix @ direction) for name, matrix in pieces.items()}
    score = float(eigenvalues[-1])
    saved_score = float(replay["score"])

    print("diagnostic method: binary64 midpoint matrices + symmetric eigensolver")
    print("selected allocation:", ",".join(map(str, shares)), "/", den)
    for name, value in contributions.items():
        print(f"{name}: {value:.15g}")
    print(f"rank sum: {sum(contributions[k] for k in RANK_KEYS):.15g}")
    print(f"recomputed score: {score:.15g}")
    print(f"stored score: {saved_score:.15g}")
    print(f"absolute score difference: {abs(score-saved_score):.3g}")


if __name__ == "__main__":
    main()
