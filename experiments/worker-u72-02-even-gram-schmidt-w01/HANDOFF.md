# U72-02 even midpoint-Cholesky basis

- **ID:** U72-02-EVEN-GRAM-SCHMIDT-W01
- **Status:** READY_FOR_REVIEW
- **Starting commit:** `5e076c1` (current main); claim commit `01d3d74`
- **Scope:** One full lower-triangular basis proposed from the U72 even T=832 upper-energy midpoint Gram matrix. Initial exact rational Gram–Schmidt grew to approximately 8,000-bit row coefficients by row 40 and exceeded the practical runtime before a completed transform was recorded. I pivoted to a 100-digit mpmath Cholesky inverse, row-normalized and rounded at denominator `10^12`; the resulting integer congruence and downstream interval data are replayed exactly.

## Result

The integer transform is lower triangular, has diagonal `10^12` on all 47 rows, determinant `10^564`, and largest integer coefficient of 121 bits. It changes all 47 rows because of diagonal rescaling. Exact component and eighth-tail refresh completed.

- Inherited seed: **7/47** positive leading minors, no fixed-energy margin.
- Standard full-energy proposal: **9/47**, no margin; this improves the prior sparse-basis proposal count but still fails.
- SLSQP allocation: **6/47**, no margin. SLSQP (SciPy 1.17.0) reported termination from proposal/equal/seed starts in 3/1/1 iterations; best floating objective `-5.521261602333288e-19` from the equal start. Its rationalized weights use denominator `10^12`.

No positive fixed-energy comparison was established. The 100-digit Cholesky and SLSQP are numerical basis/allocation design diagnostics; exact positivity claims above are only the recorded integer leading-minor replays. This says nothing about other bases or global allocations.

## Evidence and inputs

- Integer transform proposal and precision/rounding: `propose_transform.py`; full rows in `experiments/results/u72-62-25-even-gram-schmidt-w01/row-transform.json`.
- Exact transformed component intervals and refreshed tails: `transform.json`; exact seed/proposal/SLSQP replays: `seed-replay.json`, `float-replay.json`, `slsqp-replay.json`.
- Optimizer source and logs: `optimize_slsqp.py`, `slsqp-output.txt`, `slsqp-replay-output.txt`, `transform-replay-output.txt`.
- Raw matrix `raw-t832.json`, proposal `base-allocation.json`, and seed `seed-allocation.json` are pinned from `worker/u72-02-even-sparse-row-w01` commit `1bcd1d0`; raw source blob `b6000240e5f35913c5371fa2675faa6ab168bbe0`.
- The exact Fraction Gram–Schmidt attempt is preserved as `gram_rows.py` with partial row coefficient bit logs in `gram-schmidt-output.txt`; it did not complete and is not used in the result or reproduction below. A corrected exact orthogonality check was still too costly for this batch; no completed exact-rational basis is claimed.

## Reproduction

From repository root with Python 3, mpmath, NumPy, SciPy, and Node available:

```sh
python3 experiments/worker-u72-02-even-gram-schmidt-w01/propose_transform.py
node experiments/worker-u72-02-even-gram-schmidt-w01/replay_transform.js
python3 experiments/worker-u72-02-even-gram-schmidt-w01/optimize_slsqp.py \
  experiments/results/u72-62-25-even-gram-schmidt-w01/raw-t832.json \
  experiments/results/u72-62-25-even-gram-schmidt-w01/transform.json \
  experiments/results/u72-62-25-even-gram-schmidt-w01/base-allocation.json \
  experiments/results/u72-62-25-even-gram-schmidt-w01/seed-allocation.json \
  experiments/results/u72-62-25-even-gram-schmidt-w01/slsqp-allocation.json
node experiments/worker-u72-02-even-gram-schmidt-w01/replay_slsqp.js
```

The transform helper was adapted to mark every diagonally rescaled row as changed so all eighth bounds are recomputed. It uses the staged generator snapshot and exact BigInt interval transformation/replay snapshots in this worker directory.

## Checked and unchecked

Checked: positive 100-digit numerical Cholesky diagonal; exact integer transform determinant and diagonal; exact transformed interval/tail regeneration; exact leading-minor replay for inherited seed, standard proposal, and SLSQP rationalized allocation; solver parameters and displayed objectives are logged.

Unchecked: exact rational Cholesky/Gram–Schmidt completion; formal positive definiteness of the interval matrix; global SLSQP optimality; other integerization denominators or bases; exhaustive allocations; independent reconstruction of raw inputs; any global obstruction or operator positivity claim.

## Recommendation

This dense midpoint-Cholesky basis is not a passing candidate. Its standard proposal improves the fixed-basis leading-minor count from the sparse basis but remains short of all 47 minors; SLSQP worsens the exact count. Do not advance the frontier on this evidence. Any further basis search should first control integerization and interval-width growth.
