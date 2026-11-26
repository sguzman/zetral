# U72-02 even sparse-row follow-up

- **ID:** U72-02-EVEN-SPARSE-ROW-W01
- **Status:** READY_FOR_REVIEW
- **Starting commit:** `3637156` (claim branch)
- **Scope:** One deterministic sparse congruence experiment on the U72 even T=832 raw component matrix. Select 12 target rows beyond the first 12 by exact midpoint correlation ranking, then apply one earlier-row elimination per selected row. This does not certify or search all transforms or allocations and does not overlap lead-owned U72-04.

## Result

This candidate does not pass the fixed-energy check. The exact row transform has determinant `10^96` and changes rows `[18,19,24,25,32,33,35,36,38,41,42,46]`. The inherited U71 seed allocation has 4 positive leading principal minors out of 47, then a negative fifth minor; its exact margin field is null. The high-precision SLSQP allocation also has 4/47 positive leading minors, then a negative fifth minor, with null exact margin. The standard float proposal could not be evaluated because the whitening routine raised `Error: whitening pivot`.

SLSQP maximized the smallest eigenvalue of the floating whitened matrix, using an analytic simple-eigenvalue gradient and proposal/equal/seed starts. The best reported floating objective was `-2.243913878968795e-08` from the equal start (52 iterations; minimum share about `4.3124e-6`). A 100-digit Cholesky of that candidate's normalized interval midpoint matrix had positive diagonal entries (minimum about `2.6451e-5`); this is a numerical diagnostic, not a formal positive-definiteness certificate. Maximum absolute whitening entry was about `6.3321e9`.

## Evidence

- Selection rule and exact rational correlation scores: `experiments/worker-u72-02-even-sparse-row-w01/select_rows.py`, `experiments/results/u72-62-25-even-sparse-row-w01/row-selection.json`.
- Exact transformed matrix and seed replay: `transform.json`, `seed-replay.json`, and `transform-replay-output.txt` in the result directory.
- Optimizer source, complete selected allocation, replay, and logs: `source/optimize_slsqp.py`, `replay_slsqp.js`, `slsqp-allocation.json`, `slsqp-replay.json`, `slsqp-output.txt`, `slsqp-replay-output.txt`.
- Exact source inputs: `raw-t832.json`, `base-allocation.json`, `seed-allocation.json` in the result directory. The raw matrix was pinned from `worker/u72-02-even-reconstruction` at `dae9753888f3a5bf0ec5374526d5637e9a849081`; allocation inputs were copied from the same pinned worker evidence bundle.
- Transformation/replay source snapshots are under `experiments/worker-u72-02-even-sparse-row-w01/source/`.

## Reproduction

From repository root, with Python 3, NumPy, SciPy, mpmath, and Node available:

```sh
python3 experiments/worker-u72-02-even-sparse-row-w01/select_rows.py
node experiments/worker-u72-02-even-sparse-row-w01/replay_sparse_rows.js
python3 experiments/worker-u72-02-even-sparse-row-w01/source/optimize_slsqp.py \
  experiments/results/u72-62-25-even-sparse-row-w01/raw-t832.json \
  experiments/results/u72-62-25-even-sparse-row-w01/transform.json \
  experiments/results/u72-62-25-even-sparse-row-w01/base-allocation.json \
  experiments/results/u72-62-25-even-sparse-row-w01/seed-allocation.json \
  experiments/results/u72-62-25-even-sparse-row-w01/slsqp-allocation.json
node experiments/worker-u72-02-even-sparse-row-w01/replay_slsqp.js
```

## Checked and unchecked

Checked: deterministic row selection from exact rational midpoint correlations; exact integer row-transform determinant; component/tail regeneration and exact leading-minor replay for the inherited seed and SLSQP allocation; the float proposal failure was observed and logged. The optimizer and high-precision Cholesky use floating point, so they are exploratory diagnostics only.

Unchecked: a proof that any interval matrix is positive definite; exhaustive selection of row subsets, transforms, or allocations; any global impossibility claim; and U72-04's lead-owned task.

## Recommendation

Do not adopt this sparse transform. The tested allocation candidates fail the exact leading-minor criterion, while this row-selection strategy provides no margin. Future work should use a substantially different row-selection criterion or develop a higher-precision interval-certified optimization path, while keeping the bounded scope explicit.
