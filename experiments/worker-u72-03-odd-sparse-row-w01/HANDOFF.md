# U72-03 odd sparse-row follow-up

- **ID:** U72-03-ODD-SPARSE-ROW-W01
- **Status:** IN_PROGRESS
- **Starting commit:** `5e076c1` (current main)
- **Scope:** Test one deterministic sparse congruence transform on the U72 odd T=832 raw component matrix. Rank target rows 13–46 by exact rational midpoint correlations, apply one earlier-row elimination to the top 12, and exact-replay fixed-energy leading minors for the inherited seed and one continuous optimized rational allocation.
- **Acceptance:** A reproducible row selection, exact determinant and exact minor replays, clearly bounded conclusions. No overlap with the lead-owned independent reconstruction/audit U72-04; no exhaustive transform or allocation claim.
- **Completed:** Work claimed. No experiment run yet.
- **Evidence paths:** `experiments/worker-u72-03-odd-sparse-row-w01/`; `experiments/results/u72-62-25-odd-sparse-row-w01/`.
- **Checked vs unchecked:** None checked yet. Exact positivity of the whole interval matrix, all transforms/allocations, and any global obstruction are explicitly outside scope.
- **Blockers:** None.
- **Next:** Pin source input hashes, execute the transform and allocation diagnostics, exact-replay, then update this handoff and push.
