# U72-02 even midpoint-Cholesky precision refinement

- **ID:** U72-02-EVEN-CHOLESKY-REFINE-W01
- **Status:** IN_PROGRESS
- **Starting commit:** `5e076c1` (current main)
- **Scope:** Repeat the single even midpoint-Cholesky integerized transform from worker `u72-02-even-gram-schmidt-w01` with denominator increased from 10^12 to 10^18; exact-replay the inherited seed and standard proposal. This isolates coefficient-rounding sensitivity for one basis only.
- **Acceptance:** Exact transform regeneration and comparison of leading-minor counts; stop if a distinct improvement does not appear. No global basis/allocation claims or U72-04 overlap.
- **Completed:** Work claimed; no refinement run yet.
- **Evidence paths:** `experiments/worker-u72-02-even-cholesky-refine-w01/`; `experiments/results/u72-62-25-even-cholesky-refine-w01/`.
- **Checked vs unchecked:** None yet. Global optimality and all other bases are outside scope.
- **Blockers:** None.
- **Next:** Pin the prior raw/proposal/seed, construct the finer integerized transform, and exact-replay.
