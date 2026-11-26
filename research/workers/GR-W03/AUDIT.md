# GR-W03: weighted row dominance positivity

## Result

`formal/Zetral/WeightedPositivity.lean` combines GR-W01's symmetric entry-error estimate with a diagonal lower bound. For finite index type, symmetric nonnegative radius matrix, positive weights, entrywise error bounds, and `rowAllowance(radius, weight, i) ≤ diagonal(i)` for every index, the theorem proves

`0 ≤ ∑ i, diagonal(i) * x(i)^2 + ∑ i,∑ j, error(i,j) * x(i) * x(j)`

for every real vector `x`.

This is an abstract weighted Gershgorin/Loewner positivity criterion. It removes the weighted row-error estimate as a separate downstream obligation once a certificate proves each diagonal dominates its row allowance. It does not establish that any campaign's computed diagonal or radius inputs satisfy those hypotheses.

## Verification

Lean 4.19.0, pinned Mathlib `c44e0c8ee63ca166450922a373c7409c5d26b00b`; target `lake build Zetral.WeightedPositivity` succeeded. Axiom report for `weighted_row_dominance_psd`: `[propext, Classical.choice, Quot.sound]`, no `sorryAx` or project-specific axioms.

## Dependency

This is intentionally stacked on GR-W01 branch `worker/gr-w01-weighted-radius-lemma`, which contains the abstract symmetric weighted row theorem. PR #35 must be integrated before this package can target main directly.
