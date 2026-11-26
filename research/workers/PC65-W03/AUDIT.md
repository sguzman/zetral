# PC65-W03 — Lean check of clipping under congruence

Date: 2026-11-26 UTC. Baseline: `a9aee29ffa371319cf2e3cdc56fc51b7fbf6adf8` (LXV PC03 even pass / odd work order).

## Result

Lean kernel verification establishes the finite-dimensional order step used by PC65-W02. For finite index types `ι` and `κ`, an ordered commutative ring `R`, diagonal entries `d_i`, upper endpoints `u_i`, fixed coefficients `T_ij`, and vector `x_j`, define

\[
y_i=\sum_{j\in\kappa}T_{ij}x_j,
\qquad
Q_D(x)=\sum_{i\in\iota}d_i y_i^2.
\]

The checked theorem proves

\[
Q_D(x)-Q_{\widetilde D}(x)
=\sum_i(d_i-\min(d_i,u_i))y_i^2\ge0,
\qquad \widetilde d_i=\min(d_i,u_i).
\]

The separate scalar theorem proves interval membership: if `lower ≤ exact` and `lower ≤ upper`, then `lower ≤ min exact upper ≤ upper`. Together these establish the clipped diagonal belongs coordinatewise to its interval and the exact diagonal congruence dominates the clipped one in quadratic-form order. The coefficients need not be nonnegative; they are squared only after applying the fixed linear map.

This is an abstract theorem over any `CommRing` with `LinearOrder` and `IsStrictOrderedRing` instances. It does not check that any PC65 interval encloses the stated lower/upper endpoints, that the zero-mode `alpha` interval is valid, or that any other component, tail, high-complement, or pivot calculation is sound. It does not replay PC65 data or establish a full candidate comparison.

## Reproduction

Pinned project configuration is Lean `leanprover/lean4:v4.19.0`, with Mathlib commit `c44e0c8ee63ca166450922a373c7409c5d26b00b` from the repository's unchanged `formal/lake-manifest.json`.

```sh
cd formal
lake build Zetral.PC65Clipping
```

The successful build compiled the targeted dependency slice from source because the Mathlib cache endpoint returned HTTP 403 for downloaded artifacts. The resulting `#print axioms` output was:

```text
clipped_mem_interval: [propext]
congruence_difference_eq: [propext, Quot.sound]
clipped_congruence_psd: [propext, Classical.choice, Quot.sound]
```

No `sorryAx` or custom axiom appears. The `Classical.choice` dependency comes from the finite-index/summation library; all reported axioms are standard Lean/Mathlib foundations. These theorem statements are about finite sums and ordered-ring operations; the checked artifact does not instantiate the theorem at a specific campaign data set.

## Provenance and limits

Source: `formal/Zetral/PC65Clipping.lean`. The abstract diagonal order argument also appears in PC65-W02's human proof, but this file machine-checks the interval-membership and congruence identities independently. It contains no source-generator audit, interval replay, or RH deduction.
