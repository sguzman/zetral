# GR-W02 handoff

Status: READY_FOR_REVIEW.

Branch: `worker/gr-w02-ceil-rounding`.

Formal artifact: `formal/Zetral/CeilRounding.lean`.

This package proves the Nat ceiling-division formula and its denominator-scaled majorant, then gives a manual correspondence to the positive-input branch of the QC04 JavaScript helper. The formal theorem concerns `Nat`; the source-language and campaign-data checks are explicitly outside the theorem.

Verified with Lean 4.19.0, locked Mathlib `c44e0c8ee63ca166450922a373c7409c5d26b00b`, using `lake build Zetral.CeilRounding`. Axiom audit: `[propext, Classical.choice, Quot.sound]` for both declarations; no `sorryAx` or project-specific axioms.
