# SC01-W01: Independent rational witness checker

## Result

An independent Python checker verifies the saved 23/2 piecewise-constant witness against all eight multiplicative shifts. It closes the saved partition under `x -> m*x` and `x -> x/m`, evaluates each induced cell at an exact rational midpoint, and checks the weighted pointwise inequality on all 49,219 cells. The maximum rounded ratio is exactly 2,851/1,000; the recorded worst cell `147/128 .. 29403/25600` is reproduced.

The checker also confirms that each of the eight saved rational upper caps is at least its corresponding saved `actualWeightIntervals` upper endpoint after scaling. It treats those interval endpoints as inputs and does not independently prove their logarithmic derivation.

## Reproduction

From the repository root:

```sh
python3 experiments/worker-SC01-W01/check_piecewise_witness.py
```

The script uses Python's exact `Fraction` arithmetic and standard-library JSON and binary-search tools. No floating-point arithmetic is used.

## Scope

This is an independent check of the finite rational certificate encoded in `experiments/results/sc01-23-2-witness.json`: partition closure, pointwise shifted-value inequality, reported bound, worst cell, and comparison of saved weight interval caps with saved rational coefficients. It does not regenerate the weight intervals from logarithms and square roots, prove the coefficient bounds from analytic definitions, or check the high-mode cutoff guards or any RC/SC matrix comparison. It is not a complete proof audit of Campaign LXVIII.

AI-assisted; no human review or formal verification has occurred.

## Provenance

Starting commit: `ede875d` (LXVII closure and LXVIII SC01 result/SC02 target).
