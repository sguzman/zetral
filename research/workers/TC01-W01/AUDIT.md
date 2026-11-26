# TC01-W01: Independent witness and cutoff-guard audit

## Result

The 58/5 piecewise-constant witness passes an independent exact-rational check on all 52,551 cells induced by closing the saved partition under the eight maps `x -> m*x` and `x -> x/m`. The checker reproduces bound `2873/1000` and the stored worst cell `9/7 .. 5524848/4296875`. All eight saved rational coefficient caps dominate the saved interval upper endpoints for their corresponding weights.

For the high-mode cutoff, independent rational enclosures lie inside all 20 saved guard intervals (low counts 41–50, both parities), and every positivity sign agrees. The even guard at low count 43 is strictly negative; both parities at low count 44 are strictly positive.

For each parity, the saved guard function is increasing with the mode: `d/dn [log(n/(2h)) - 3h^2/(2 n^2 pi^2) - C - poleLoss] = 1/n + 3h^2/(pi^2 n^3) > 0`, since the parity-specific `poleLoss` is constant in `n`. Thus 44 is the least common cutoff that passes the saved guard criterion.

## Reproduction

From the repository root:

```sh
python3 experiments/worker-TC01-W01/check_piecewise_witness.py
python3 experiments/worker-TC01-W01/check_guard_intervals.py
```

The witness checker uses exact `Fraction` arithmetic to independently close the partition, evaluate shifts at cell midpoints, verify the inequality, and reproduce the worst cell. The guard checker uses exact rational interval arithmetic: Machin's identity with alternating arctangent bounds for pi, the atanh series with explicit geometric remainder for logarithms, and positive Taylor bounds for the exponential terms in the odd pole loss. No floating-point arithmetic is used in either check.

## Scope and limits

This checks the saved finite rational witness and guard arrays. It does not independently derive the logarithmic coefficient intervals, prove the prime norm estimate, or establish the operator inequality represented by the guard. It does not audit the TC02 matrix comparison or make an original-form spectral claim.

AI-assisted; no human review or formal verification has occurred.

## Provenance

Starting commit: `3f86010` (LXIX activated with the TC01 witness and TC02 target).
