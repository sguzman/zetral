# PC65-W03 — formal clipping and congruence lemma

- ID: PC65-W03
- Status: READY_FOR_REVIEW
- Starting commit: `a9aee29ffa371319cf2e3cdc56fc51b7fbf6adf8` (LXV PC03 even pass / odd work order).
- Scope: formalize the finite-dimensional diagonal clipping lemma in Lean, including interval membership and the quadratic-form identity for arbitrary fixed congruence coefficients. This is a follow-up to PC65-W02 and does not audit campaign data or duplicate the lead's odd comparison or PC04 reconstruction.
- Exclusive write scope: `formal/PC65Clipping.lean` and `research/workers/PC65-W03/`.
- Acceptance: a kernel-checked theorem showing the clipped diagonal lies in each interval under the one-sided lower-bound hypothesis, and that its congruence difference from the exact diagonal is positive semidefinite in the quadratic-form sense. Record the exact toolchain, dependencies, axiom report, and any gaps.
- Completed: formalized interval membership of `min exact upper`; expressed the diagonal congruence as a finite quadratic form under an arbitrary fixed transform; proved the exact-minus-clipped form is nonnegative for every vector.
- Evidence: `formal/Zetral/PC65Clipping.lean`; detailed scope and output in `research/workers/PC65-W03/AUDIT.md`.
- Exact verification: from `formal/`, `lake build Zetral.PC65Clipping` succeeded under Lean 4.19.0 and the manifest-pinned Mathlib commit `c44e0c8ee63ca166450922a373c7409c5d26b00b`. `#print axioms` reports `[propext]`, `[propext, Quot.sound]`, and `[propext, Classical.choice, Quot.sound]` for the three theorems; no `sorryAx` or custom axiom.
- Setup note: the Mathlib artifact cache returned HTTP 403, so the targeted 701-module dependency slice was compiled from source. The original pinned manifest was restored unchanged before the successful build.
- Not checked: concrete PC65 interval endpoints (including the zero-mode `alpha` interval), other component/tail/high-complement/pivot enclosures, campaign matrix replay, or the full comparison.
- Blockers: none for this bounded formalization.
- Next: lead review of this finite-dimensional lemma and separate verification of the remaining source/campaign hypotheses.
