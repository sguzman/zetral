# U72-02 even summed-correlation row selection

- **ID:** U72-02-EVEN-SUM-CORR-W01
- **Status:** IN_PROGRESS
- **Starting commit:** `5e076c1` (current main)
- **Scope:** Test one alternate sparse congruence basis on the U72 even T=832 raw matrix. Rank non-leading target rows 13–46 by the exact sum of squared midpoint correlations with every earlier row; for each selected target use its strongest earlier parent and exact nearest-integer row shear. Optimize the exact rational allocation for this one fixed candidate, then replay exact leading minors.
- **Acceptance:** One reproducible selection, exact transform and allocation replays, bounded conclusion. No overlap with lead-owned U72-04; no all-transform or global allocation claim.
- **Completed:** Work claimed; no experiment run yet.
- **Evidence paths:** `experiments/worker-u72-02-even-sum-corr-w01/`; `experiments/results/u72-62-25-even-sum-corr-w01/`.
- **Checked vs unchecked:** None yet. Independent raw reconstruction, interval positive definiteness, other bases, and global obstructions are outside scope.
- **Blockers:** None.
- **Next:** Pin raw and allocation inputs, implement the selection rule, regenerate the transformed data, optimize and exact-replay.
