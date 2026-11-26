# GR-W01 — formal weighted entry-radius bound

Date: 2026-11-26 UTC. Baseline: `89352f906744efe6afecda3cf69410030660dc52` (LXV closed; next checkpoint targets h=2.43).

## Result

Lean kernel verification establishes three scalar lemmas over a field with compatible linear order.

For positive weights \(w_i,w_j\),

\[
2|ab|\le \frac{w_j}{w_i}a^2+\frac{w_i}{w_j}b^2.
\]

The proof is the nonnegativity of \((w_j|a|-w_i|b|)^2\), divided by \(w_iw_j>0\). Multiplication by a radius \(r\ge0\) gives

\[
r|ab|\le \frac r2\left(\frac{w_j}{w_i}a^2+\frac{w_i}{w_j}b^2\right).
\]

Finally, if an entry error \(e\) satisfies \(|e|\le r\), then

\[
-\frac r2\left(\frac{w_j}{w_i}a^2+\frac{w_i}{w_j}b^2\right)\le eab.
\]

This is the pointwise signed-error estimate used when each symmetric off-diagonal interval radius is allocated to its two weighted diagonal row errors.

## Scope limit

The formal file proves the scalar and single-entry statements only. It does not formalize summation over a matrix, use of symmetry to identify the two row contributions, diagonal interval radii, the source's exact outward rounding/ceil operations, or any PC65/LXVI/LXVII data. Those finite-sum and source-validity steps remain to be checked separately. No candidate comparison, original-form evaluation, RH deduction, or operator construction is certified here.

## Reproduction and provenance

Source: `formal/Zetral/WeightedRadius.lean`. Project toolchain is Lean `leanprover/lean4:v4.19.0`; Mathlib is pinned by `formal/lake-manifest.json` (commit `c44e0c8ee63ca166450922a373c7409c5d26b00b`). Run:

```sh
cd formal
lake build Zetral.WeightedRadius
```

The successful target build reports:

```text
weighted_abs_cross: [propext, Classical.choice, Quot.sound]
weighted_radius_cross: [propext, Classical.choice, Quot.sound]
signed_entry_error_lower: [propext, Classical.choice, Quot.sound]
```

No `sorryAx` or custom axiom appears. The `Classical.choice` dependency comes from the Mathlib field/order hierarchy and finite build environment; all displayed axioms are standard Lean/Mathlib foundations. The module is parameterized by field/order typeclasses and does not evaluate any campaign constants.
