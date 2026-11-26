# U72-03 odd sparse-row follow-up

- **ID:** U72-03-ODD-SPARSE-ROW-W01
- **Status:** READY_FOR_REVIEW
- **Starting commit:** `5e076c1` (current main); claim commit `132c1f8`
- **Scope:** One deterministic sparse congruence transform on the U72 odd T=832 raw component matrix. Rank target rows 13–46 by exact rational midpoint correlations, apply one earlier-row elimination to the top 12, and exact-replay fixed-energy leading minors for the inherited seed, standard proposal, and one continuous optimized rational allocation.
- **Acceptance:** Reproducible row selection, exact determinant and exact minor replays, bounded conclusions. No overlap with lead-owned independent reconstruction/audit U72-04; no exhaustive transform or allocation claim.

## Result

The candidate does not pass and does not improve the tested U71 seed. Selected target rows are `[14,16,17,22,23,24,27,29,31,33,35,37]`. The exact lower triangular integer row transform has determinant `10^96`. The inherited seed replays to 7/47 positive leading minors, followed by a negative eighth pivot, and has no fixed-energy margin. The standard full-energy proposal replays to 0/47. A high-precision-whitened SLSQP search over 54 allocation shares was run from proposal, equal, and seed starts. Its best floating objective was `-9.193894785026006e-10` from the seed start (4 iterations); after rationalization to denominator `10^12`, the exact replay again gives 7/47 positive minors and no margin.

This is only a bounded experiment on one selected transform. It does not establish failure of other row selections, transforms, or positive allocations, and is not a proof that the underlying operator is nonpositive.

## Evidence and inputs

- Exact row-selection rule and scores: `select_rows.py`, `experiments/results/u72-62-25-odd-sparse-row-w01/row-selection.json`.
- Exact regenerated transform and component intervals: `transform.json`; exact replay objects: `seed-replay.json`, `float-replay.json`, and `slsqp-replay.json`.
- Numerical optimizer: `optimize_slsqp.py`; complete rational allocation: `slsqp-allocation.json`; logs: `slsqp-output.txt`, `slsqp-replay-output.txt`, `transform-replay-output.txt`.
- Pinned odd raw matrix `raw-t832.json` is from `worker/u72-03-odd-reconstruction` blob `036bfe26a716cf3ac759b5cae9faed422e6db56d`; the standard proposal `base-allocation.json` blob `6bc57a3923e412eedccd8a6e803c77763fa21ef0`; and inherited seed `seed-allocation.json` blob `6720e0effbd52c6cd6825c890e41f76e594977b7`.
- The transform generator and exact replay source snapshots are `source-u72-transform.js`, `source-u72-staged.js`, and `source-u72-exact-replay.js`. The transform is adapted from the prior even sparse-row worker's exact transform helper, with parity-specific generator setup and the odd support convention; it recomputes transformed component intervals and eighth bounds.

## Reproduction

From repository root with Python 3, NumPy, SciPy, mpmath, and Node available:

```sh
python3 experiments/worker-u72-03-odd-sparse-row-w01/select_rows.py
node experiments/worker-u72-03-odd-sparse-row-w01/replay_sparse_rows.js
python3 experiments/worker-u72-03-odd-sparse-row-w01/optimize_slsqp.py \
  experiments/results/u72-62-25-odd-sparse-row-w01/raw-t832.json \
  experiments/results/u72-62-25-odd-sparse-row-w01/transform.json \
  experiments/results/u72-62-25-odd-sparse-row-w01/base-allocation.json \
  experiments/results/u72-62-25-odd-sparse-row-w01/seed-allocation.json \
  experiments/results/u72-62-25-odd-sparse-row-w01/slsqp-allocation.json
node experiments/worker-u72-03-odd-sparse-row-w01/replay_slsqp.js
```

The replay runner reads `experiments/tc01-post-log11-em.js`, extends it using the pinned staged helper, and uses the shared full-energy proposal source snapshot under this worker directory.

## Checked and unchecked

Checked: deterministic row selection from exact rational midpoint correlations; exact row-transform determinant; transformed interval and tail regeneration by the copied worker helper; exact leading-minor replay for the inherited seed, standard proposal and SLSQP rationalized allocation; SLSQP termination and parameters are logged. The optimizer's 100-digit Cholesky construction and eigenvalue calculations are numerical diagnostics, not interval certificates or proofs of global optimality.

Unchecked: full positive definiteness of any comparison beyond the recorded exact leading-minor criterion; exhaustive row subsets, transforms, or allocations; a global obstruction; and independent reconstruction of the pinned raw intervals (reserved for U72-04).

## Recommendation

Do not adopt this correlation-ranked sparse transform as an improvement. A distinct row-selection or cancellation-preserving bound would be needed to justify another in-campaign follow-up. No change to the candidate frontier is proposed.
