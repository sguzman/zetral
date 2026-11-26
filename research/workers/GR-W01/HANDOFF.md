# GR-W01 — formal weighted radius bound

- ID: GR-W01
- Status: READY_FOR_REVIEW
- Starting commit: `89352f906744efe6afecda3cf69410030660dc52` (LXVI closed; next checkpoint targets h=2.43).
- Scope: formalize the weighted absolute-product inequality used by the candidate lower-matrix row-radius subtraction, and its immediate consequence for a single signed matrix-entry error. Do not replay or modify the lead-owned endpoint witness or campaign comparisons.
- Exclusive write scope: `formal/Zetral/WeightedRadius.lean` and `research/workers/GR-W01/`.
- Acceptance: prove for positive weights that `2*|a*b| ≤ (w_j/w_i)*a^2 + (w_i/w_j)*b^2`; use this to bound a signed entry error by its radius contribution. Record exact toolchain and axioms.
- Current branch: `worker/gr-w01-weighted-radius-lemma`; worktree `/workspace/zetral-grw01`.
- Completed: proved the weighted absolute-product inequality, its scaling by a nonnegative radius, and the signed single-entry lower bound for errors satisfying `|error| ≤ radius`.
- Evidence: `formal/Zetral/WeightedRadius.lean`; scope and limits in `research/workers/GR-W01/AUDIT.md`.
- Exact verification: `cd formal && lake build Zetral.WeightedRadius` succeeds under Lean 4.19.0 and manifest-pinned Mathlib c44e0c8ee63ca166450922a373c7409c5d26b00b. Each `#print axioms` output is `[propext, Classical.choice, Quot.sound]`; no `sorryAx` or custom axiom.
- Not checked: summation and reindexing over a symmetric matrix to recover the exact row-error matrix, outward rounding/ceil semantics, or campaign data.
- Blockers: none for this bounded scalar proof.
- Next: lead review; a separate finite-sum formalization can connect the scalar bound to the full weighted row subtraction.
