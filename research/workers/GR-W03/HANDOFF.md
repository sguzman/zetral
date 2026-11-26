# GR-W03 handoff

Status: READY_FOR_REVIEW (stacked dependency).

Branch: `worker/gr-w03-weighted-positivity`.

Parent branch: `worker/gr-w01-weighted-radius-lemma` (PR #35).

Formal artifact: `formal/Zetral/WeightedPositivity.lean`.

The module proves positive semidefiniteness of a diagonal form plus a symmetric entrywise perturbation when each diagonal coefficient dominates its weighted row allowance. It further defines a natural-number rounded row allowance, proves it dominates the exact real weighted row after casting, and gives an end-to-end PSD theorem from these integer row sums. It composes GR-W01 and remains stacked on that branch. This does not validate source execution or campaign numerical inputs.

Verified with Lean 4.19.0 and pinned Mathlib `c44e0c8ee63ca166450922a373c7409c5d26b00b`, using `lake build Zetral.WeightedPositivity`. Axiom reports for all three declarations: `[propext, Classical.choice, Quot.sound]`, no `sorryAx` or custom axiom.
