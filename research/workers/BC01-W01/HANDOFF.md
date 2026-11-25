# BC01-W01 — independent endpoint witness replay

- ID: BC01-W01
- Status: READY_FOR_REVIEW
- Baseline: `7029f3b629cd12e0ad96f1c76366a415736638ff` (Campaign LXIV BC03).
- Scope: independently check the completed BC01 rational Schur witness on `(1,111/10)` with exact arithmetic, including the eight upper shift weights, shifted-cell refinement, and the reported `2762/1000` bound. Do not modify lead campaign files or touch BC02/BC03 comparisons.
- Relevance: BC01 endpoint positivity is a necessary local operator-norm input to the new `h=12/5` comparison; an independent replay tests whether the witness covers all boundary cells and whether the reported constant follows from the stored positive weight.
- Acceptance met: `experiments/worker-BC01-W01/verify_witness.py` independently encloses all eight coefficients by exact atanh/log and integer-square-root bounds, reconstructs the shifted partition, and verifies `sum_j c_j*(W(mx)+W(x/m)) <= 2762*W(x)` on every refined open cell. All 33,139 cells pass; largest exact ratio is `345142926369/125000000000 < 2762/1000`. See `research/workers/BC01-W01/AUDIT.md`.
- Reproduction: `python3 experiments/worker-BC01-W01/verify_witness.py` from repository root; Python standard library only.
- Pinned source/raw commits: `c6e1c0d8eea15272d7bed8f234200791949f89bd` and `eb0a0e4da51d390cb7fa7d5544eade824813467e`; current blobs: `089b18b75c3d84aa71e34f1b0623629ced836d96` and `79b66f4e0d6f0b6b163bd30652660ada12f19089`.
- Limits: no discrepancy in the local Schur witness. This is not an audit of inherited operator normalization, downstream tails, the spectral matrices, RH, or a new candidate frontier. No attempt to improve the witness.
