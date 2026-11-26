# GR-W06 handoff

Status: READY_FOR_REVIEW (stacked dependency).

Branch: `worker/gr-w06-midpoint-radius`.

Parent: `worker/gr-w05-bigint-ceil` (PR #39).

Formal artifact: `formal/Zetral/QC04MidpointRadius.lean`.

The theorem models BigInt truncation toward zero for midpoint division by two, proves the resulting integer midpoint lies between integer interval endpoints, and proves the max-endpoint-distance radius covers every integer in that interval, and proves the scaled real-interval version for any linearly ordered field and positive endpoint scale. The QC04 call site is traced to source lines 24–25. No upstream interval data or campaign matrix is verified.

Verified with Lean 4.19.0 and pinned Mathlib `c44e0c8ee63ca166450922a373c7409c5d26b00b`, using `lake build Zetral.QC04MidpointRadius`. Four axiom reports contain no `sorryAx` or custom axiom.
