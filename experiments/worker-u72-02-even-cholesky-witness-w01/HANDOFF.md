# U72-02 even Cholesky basis failure direction

- **ID:** U72-02-EVEN-CHOLESKY-WITNESS-W01
- **Status:** IN_PROGRESS
- **Starting commit:** `5e076c1` (current main)
- **Scope:** Diagnose the standard proposal's 9/47 exact leading-minor failure on the single `10^12` midpoint-Cholesky basis from `worker/u72-02-even-gram-schmidt-w01`. Extract one rationalized negative direction from the first failed leading block and compute its exact quadratic form against the stored integer comparison matrix; include bounded floating component diagnostics if useful.
- **Acceptance:** Reproducible direction and exact sign for the stored comparison; avoid claims beyond this fixed basis/allocation or independent reconstruction.
- **Completed:** Work claimed; no diagnostic run yet.
- **Evidence paths:** `experiments/worker-u72-02-even-cholesky-witness-w01/`; `experiments/results/u72-62-25-even-cholesky-witness-w01/`.
- **Checked vs unchecked:** None yet. The basis-specific exact matrix is inherited evidence; original interval reconstruction, other allocations and bases, and operator-wide claims are outside scope.
- **Blockers:** None.
- **Next:** Pin the sparse/Cholesky branch result artifacts, derive a direction, exact-check its quadratic form, and record limitations.
