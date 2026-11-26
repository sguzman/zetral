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

## Integer-radius corollary

The module also defines `natRoundedRowAllowance`: for natural radii `r(i,j)` and positive natural weights `d(i)`, its row `i` is `∑ j, ceilDiv(r(i,j) * d(j), d(i))`. `real_row_allowance_le_nat_rounded` proves this rounded integer row dominates the exact real weighted row after embedding the natural data into any linearly ordered field. The end-to-end theorem `nat_rounded_row_dominance_psd` then proves positive semidefiniteness directly from a diagonal lower bound on that integer row sum and real entrywise perturbation bounds by the natural radii.

This formalizes the arithmetic implication from upward-rounded weighted entries to the abstract finite quadratic-form certificate. The association between a particular BigInt/JavaScript implementation and these Nat inputs remains a manual source trace; source input validation, interval generation and campaign numerical claims remain unverified here.

## Quantitative margin

`weighted_row_dominance_gap` strengthens the form estimate: if every diagonal coefficient exceeds its real row allowance by a common `gap`, then `gap * ∑ i, x(i)^2` is bounded by the full quadratic form. `nat_rounded_row_dominance_gap` gives the same conclusion when the diagonal hypotheses are checked against the integer rounded rows.

This is a quadratic-form coercivity bound. To call `gap` a least-eigenvalue lower bound for an actual matrix, that matrix must also be symmetric; symmetry of `error` is not a hypothesis of these form inequalities. For a strictly positive gap, the stated inequality is positive for every nonzero vector.
