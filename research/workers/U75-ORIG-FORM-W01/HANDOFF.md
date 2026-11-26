# U75-ORIG-FORM-W01 worker handoff

- Status: READY_FOR_REVIEW
- Baseline: `df58895ba57f206bf1766d244e6084501516b606` (main; U75-02 exact M24576 even comparison)
- Branch/worktree: `worker/u75-m20480-original-form-w01` / `/dev/shm/zetral-u75-original-form-audit`
- Scope: independently replay the earlier fresh h=251/100 even M20480 comparison in original trial coordinates, using only its own M20480 trial parts, residual aggregate, component intervals and stored proposed allocation. Do not reuse M24576 residuals or transform-specific eighth bounds.
- Rationale: this checks whether the failed M20480 transformed candidate's behavior is an artifact of the row congruence and gives an independent original-form diagnostic for the active h=2.51 method.
- Exclusive files: `research/workers/U75-ORIG-FORM-W01/` and `experiments/worker-u75-original-form/` only.
- Acceptance: reproduce the original baseline matrix/radii exactly from stored components; independently form the proposal in the untransformed coordinates; exact leading-minor and any grid result; record what it does and does not imply.
- Stopping condition: both exact reconstruction and original-coordinate replay completed or a precise data/definition gap blocks them.
- No shared campaign/state/coordination edits; no RH, operator, frontier, novelty, CI, formal verification, or analytic-majorant claim.
- Completed: original-coordinate exact replay of the stored proposal has 35/52 positive pivots (pivot 36 negative); original baseline reproduces all 2704 matrix entries and 52 radii; archived transformed replay has 51/52 and fails at pivot 52.
- Evidence: `research/workers/U75-ORIG-FORM-W01/RESULT.md`, `experiments/worker-u75-original-form/original-form.js`, and `experiments/worker-u75-original-form/result.json`.
