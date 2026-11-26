# GR-W03 handoff

Status: READY_FOR_REVIEW (stacked dependency).

Branch: `worker/gr-w03-weighted-positivity`.

Parent branch: `worker/gr-w01-weighted-radius-lemma` (PR #35).

Formal artifact: `formal/Zetral/WeightedPositivity.lean`.

The new theorem proves positive semidefiniteness of a diagonal form plus a symmetric entrywise perturbation when each diagonal coefficient dominates its weighted row allowance. It composes the full finite-sum theorem from GR-W01. This does not validate numerical inputs or any campaign certificate.

Verified with Lean 4.19.0 and pinned Mathlib `c44e0c8ee63ca166450922a373c7409c5d26b00b`, using `lake build Zetral.WeightedPositivity`. Axiom report: `[propext, Classical.choice, Quot.sound]`, no `sorryAx` or custom axiom.
