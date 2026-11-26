# GR-W05 handoff

Status: READY_FOR_REVIEW (stacked dependency).

Branch: `worker/gr-w05-bigint-ceil`.

Parent: `worker/gr-w02-ceil-rounding` (PR #36).

Formal artifact: `formal/Zetral/QC04CeilSemantics.lean`.

The theorem proves that the signed Int helper formula used by QC04's BigInt `ceil` equals Mathlib's Nat ceiling division for every nonnegative numerator and positive denominator. The caller conditions giving those signs are traced manually to QC04 lines 9, 25 and 27; the theorem does not execute or verify JavaScript or campaign data.

Verified with Lean 4.19.0 and pinned Mathlib `c44e0c8ee63ca166450922a373c7409c5d26b00b`, using `lake build Zetral.QC04CeilSemantics`. Axiom report `[propext, Classical.choice, Quot.sound]`, with no `sorryAx` or custom axiom.
