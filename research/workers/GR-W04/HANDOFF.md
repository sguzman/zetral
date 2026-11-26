# GR-W04 handoff

Status: READY_FOR_REVIEW (stacked dependency).

Branch: `worker/gr-w04-symmetrized-radii`.

Parent: `worker/gr-w03-weighted-positivity` (PR #37), which itself depends on GR-W01 / PR #35.

Formal artifact: `formal/Zetral/WeightedSymmetrization.lean`.

For arbitrary nonnegative entrywise radii, the theorem averages each radius with its transpose and does the same for the signed error matrix. The symmetric-part error has the same quadratic form as the original and is controlled by the averaged radii, enabling GR-W01's weighted bound without symmetry assumptions on the input arrays.

Verified with Lean 4.19.0 and pinned Mathlib `c44e0c8ee63ca166450922a373c7409c5d26b00b`, using `lake build Zetral.WeightedSymmetrization`. Five axiom reports contain no `sorryAx` or custom axiom. This does not validate campaign or source-language data.
