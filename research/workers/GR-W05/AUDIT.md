# GR-W05: exact BigInt ceiling helper correspondence

## Result

`formal/Zetral/QC04CeilSemantics.lean` defines signed integer functions matching QC04's helper formulas:

- `qc04Floor(a,b) = if 0 ≤ a then a / b else -((-a+b-1)/b)`
- `qc04Ceil(a,b) = -qc04Floor(-a,b)`.

The theorem `qc04Ceil_nat_eq_ceilDiv` proves for every natural `n` and positive natural `d` that the signed helper on `(n,d)` equals Mathlib `Nat.ceilDiv n d`, embedded in `Int`. Its proof reduces the positive case to `Nat.add_div_right`; zero is handled separately. Lean 4.19.0 with locked Mathlib `c44e0c8ee63ca166450922a373c7409c5d26b00b` successfully builds target `Zetral.QC04CeilSemantics`. Axiom report: `[propext, Classical.choice, Quot.sound]`, no `sorryAx` or project-specific axiom.

## QC04 caller trace

In `experiments/qc04-constant-oscillatory-replay.js` lines 8 and 27, the caller uses exactly these signed helper formulas to compute each `ceil(v * ds[j], ds[i])`. Lines 9 and 25 check all `ds[i] > 0` and construct `v` as the maximum of the two distances from an integer midpoint to the endpoints of a nonempty interval; hence `v ≥ 0`, and `v * ds[j] ≥ 0`. Thus the Nat theorem applies to each row entry after identifying nonnegative BigInts with naturals.

The theorem formally identifies the arithmetic helper formula on that domain. This audit does not execute JavaScript, prove its full BigInt-to-Nat interpretation in a source-language semantics, validate upstream interval endpoints, or verify any campaign matrix or comparison.

The module also proves `qc04Ceil_sum_eq_natCeil_sum`: on any finite index set with a shared positive denominator, summing the signed helper outputs in `Int` equals the `Int` cast of the natural ceiling-quotient sum. This directly covers the helper's row accumulation pattern once its numerators and denominator satisfy the stated domain.
