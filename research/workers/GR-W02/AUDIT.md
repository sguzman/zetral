# GR-W02: integer ceiling division audit

## Result

`formal/Zetral/CeilRounding.lean` proves two Mathlib-backed facts in Lean 4.19.0 / Mathlib `c44e0c8ee63ca166450922a373c7409c5d26b00b`:

1. `Nat.ceilDiv_eq_add_pred_div`: `n ⌈/⌉ d = (n + d - 1) / d` for natural numbers (including the library's zero-denominator convention).
2. For `d > 0`, `n ≤ d * (n ⌈/⌉ d)`.

Axiom reports for both theorems are `[propext, Classical.choice, Quot.sound]`; neither uses `sorryAx` or a project-specific axiom. Target build: `lake build Zetral.CeilRounding`, successful.

## Source correspondence (manual code trace)

`experiments/qc04-constant-oscillatory-replay.js` defines signed BigInt `ceil(a,b)` through `floor(-a,b)` and uses it in row accumulation as `ceil(v*ds[j], ds[i])`. In the intended positive-radius domain, `v*ds[j] >= 0` and `ds[i] > 0`, the helper simplifies to `(v*ds[j] + ds[i] - 1) / ds[i]`, precisely the Nat formula above under the natural-number interpretation. The Lean result certifies the abstract arithmetic, not JavaScript execution, BigInt conversion, operand-domain checks in every caller, or the generated matrix data.

## Scope limits

This does not establish that any input radius is valid, that the source radii are symmetric, or that the numerical campaign's interval calculations are outward rounded. It only establishes exact ceiling-division facts for natural numbers and a positive denominator. GR-W01's real weighted row estimate remains a separate abstract lemma.
