# TC02-W01 — independent floating residual diagnostic

This is a supplemental audit of the heuristic decomposition reported in
Campaign LXIX. It does not alter the exact stored-matrix failure result in
`AUDIT.md` and does not duplicate the lead-owned T1024 comparison.

## Reproduction

From the repository root, run:

```sh
python3 experiments/worker-TC02-W01/audit_tc02_float_diagnostic.py
```

The script reads the six concatenated raw parts, constant-factor intervals,
joint allocation and exact replay. It builds binary64 midpoint matrices from
the saved interval endpoints, normalizes each by the square roots of the saved
upper-energy diagonal midpoints, applies the saved factor-ratio upper endpoints
and the exact allocation ratios, and diagonalizes the resulting symmetric
approximation. The eighth component uses the replay's saved exact
`directionDiagonal` values.

Observed output:

| Component | Directional value |
|---|---:|
| Finite | 1.009463385748192 |
| Seven rank terms, combined | 0.0121903414415 |
| Eighth | 0.0000548553298065 |
| Recomputed score | 1.021708582519517 |
| Stored score | 1.021708582519469 |

The first seven rank contributions are printed individually by the script;
their binary64 sum is 0.0121903414415185.
The score difference is approximately (4.9\times10^{-14}). The result
reproduces the saved diagnosis that the finite term dominates this particular
approximate residual direction and that the eighth term is small.

## Limits

This calculation uses binary64 midpoint approximations and a floating-point
eigensolver. The direction is not an exact eigenvector; the decomposition is
not an interval enclosure or a positive-operator certificate. It says nothing
about the actual infinite-dimensional form beyond the stored heuristic
diagnostic. No independent T1024 run, original-form evaluation, formal proof,
RH claim, or novelty claim is made. AI-assisted work; no human review is
claimed.
