# GR-W04 handoff

Status: READY_FOR_REVIEW (stacked dependency).

Branch: `worker/gr-w04-symmetrized-radii`.

Parent: `worker/gr-w03-weighted-positivity` (PR #37), which itself depends on GR-W01 / PR #35.

Formal artifact: `formal/Zetral/WeightedSymmetrization.lean`.

For arbitrary nonnegative entrywise radii, the theorem averages each radius with its transpose and does the same for the signed error matrix. The symmetric-part error has the same quadratic form as the original and is controlled by the averaged radii, enabling GR-W01's weighted bound without symmetry assumptions on the input arrays. For natural input radii, a pairwise maximum gives an exactly symmetric integer envelope; `nat_max_radius_dominance_gap` then provides an end-to-end ceiling-rounded quadratic lower bound from its row sums.

Verified with Lean 4.19.0 and pinned Mathlib `c44e0c8ee63ca166450922a373c7409c5d26b00b`, using `lake build Zetral.WeightedSymmetrization`. Six axiom reports contain no `sorryAx` or custom axiom. This does not validate campaign or source-language data.
