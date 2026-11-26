# GR-W01 — formal weighted radius bound

- ID: GR-W01
- Status: READY_FOR_REVIEW
- Starting commit: `89352f906744efe6afecda3cf69410030660dc52` (LXVI closed; next checkpoint targets h=2.43).
- Scope: formalize the weighted absolute-product inequality, single-entry signed error bound, and finite symmetric-radius summation that yields the weighted row allowance. Do not replay or modify the lead-owned endpoint witness or campaign comparisons.
- Exclusive write scope: `formal/Zetral/WeightedRadius.lean` and `research/workers/GR-W01/`.
- Acceptance: prove the weighted pair inequality and finite-matrix row-radius bound from positive weights, symmetric nonnegative radii, and entrywise error bounds. Record exact toolchain and axioms.
- Current branch: `worker/gr-w01-weighted-radius-lemma`; worktree `/workspace/zetral-grw01`.
- Completed: proved the weighted absolute-product inequality, its scaling by a nonnegative radius, the signed single-entry lower bound, the symmetric-share row identity, and the finite quadratic-form lower bound for an entry-error matrix.
- Evidence: `formal/Zetral/WeightedRadius.lean`; scope and limits in `research/workers/GR-W01/AUDIT.md`.
- Exact verification: `cd formal && lake build Zetral.WeightedRadius` succeeds under Lean 4.19.0 and manifest-pinned Mathlib c44e0c8ee63ca166450922a373c7409c5d26b00b. All five `#print axioms` outputs are `[propext, Classical.choice, Quot.sound]`; no `sorryAx` or custom axiom.
- Not checked: outward rounding/ceil semantics, source interval validity, or campaign data.
- Blockers: none for this bounded formalization.
- Next: lead review; source rounding and campaign interval hypotheses remain separate.
