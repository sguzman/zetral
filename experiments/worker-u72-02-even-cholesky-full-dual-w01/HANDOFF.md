# U72-02 even full-coordinate Cholesky Cauchy search

- **ID:** U72-02-EVEN-CHOLESKY-FULL-DUAL-W01
- **Status:** READY_FOR_REVIEW
- **Starting commit:** `5e076c1` (current main); claim commit `20b45d5`
- **Scope:** On the fixed `10^12` midpoint-Cholesky basis, exactly screen all 47 coordinate and signed two-coordinate directions, then run a bounded full-47-coordinate SLSQP direction search from selected feasible sparse starts. Exact-test the rationalized best candidate.

## Result

The exact screen checked 2,209 directions; 1,216 had positive energy, finite, rank, and eighth costs. The best exact floor ratio was `201663/1000000` at support `e_0 - e_2`, so no sparse direction certified an all-positive-allocation obstruction.

A full 47-coordinate SciPy 1.17.0 SLSQP search used the 12 highest-ratio exact-feasible sparse directions as starts. All 12 reported successful termination; the best floating ratio was `0.8950748364394585` after 49 iterations. After rationalization at denominator `10^20`, exact recomputation found six positive rank costs and one negative rank cost. Therefore the exact Cauchy positive-cost hypotheses fail and no all-allocation obstruction is certified.

This is a bounded nonconvex multistart search, not global optimization. It covers the sparse family exactly and a finite set of full-coordinate starts numerically; it does not rule out another direction, allocation, or basis.

## Evidence and inputs

- Search, exact sparse scan, and exact post-rationalization: `experiments/worker-u72-02-even-cholesky-full-dual-w01/full_direction_search.py`.
- Full exact result and logs: `experiments/results/u72-62-25-even-cholesky-full-dual-w01/full-direction-search.json`, `full-search-output.txt`.
- Raw matrix, transformed components and previous direction copied from `worker/u72-02-even-cholesky-dual-w01` at `9d5600a`; factor-bearing proposal copied from `worker/u72-02-even-gram-schmidt-w01` at `f2c2863`.

## Reproduction

From repository root with Python 3, NumPy, and SciPy available:

```sh
python3 experiments/worker-u72-02-even-cholesky-full-dual-w01/full_direction_search.py
```

Sparse screening and all post-rationalization costs use exact integer arithmetic. SLSQP objectives and direction discovery are numerical diagnostics only.

## Checked and unchecked

Checked: all 2,209 coordinate and signed two-coordinate cost tests; exact ratios for eligible directions; the stated 12 full-dimensional starts and solver statuses; exact signs for the rationalized candidate costs; absence of an applicable exact certificate from that candidate.

Unchecked: global optimality; full-dimensional exact direction search; other bases; exhaustive allocations; independent reconstruction of raw interval inputs; any global operator claim.

## Recommendation

Do not report an all-allocation obstruction from the tested directions. A useful continuation would require a certified global relaxation or a positive-semidefinite rank majorant that handles the signed component terms. U72-04 remains lead-owned.
