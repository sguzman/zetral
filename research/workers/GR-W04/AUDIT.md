# GR-W04: symmetrize nonsymmetric radii for quadratic forms

## Result

`formal/Zetral/WeightedSymmetrization.lean` defines

- `averagedRadius r i j = (r(i,j)+r(j,i))/2`,
- `symmetricPart E i j = (E(i,j)+E(j,i))/2`.

It proves that the averaged radius is symmetric and nonnegative when the input radii are nonnegative; the symmetric part error is bounded by that averaged radius if each original entry error is bounded by its corresponding radius; and the symmetric-part error has exactly the same quadratic form as the original error matrix. Consequently, `nonsymmetric_radius_row_bound` proves the weighted row lower bound without requiring symmetry of the input error or radius arrays. The resulting allowance uses the averaged radii and can therefore be larger than one formed from an already symmetric source array.

## Verification

Lean 4.19.0, pinned Mathlib `c44e0c8ee63ca166450922a373c7409c5d26b00b`; `lake build Zetral.WeightedSymmetrization` succeeds. All five declaration axiom reports are free of `sorryAx` and project-specific axioms. Their exact outputs are the standard Mathlib axioms (the averaged symmetry theorem needs only `propext`; the rest report `propext`, `Classical.choice`, and `Quot.sound`).

## Scope

This is an abstract estimate for finite real/ordered-field quadratic forms. It does not establish any campaign matrix radii, interval enclosures, or numerical data. It may be less sharp than exploiting symmetry already present in a source radius matrix.
