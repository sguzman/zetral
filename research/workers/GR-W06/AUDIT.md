# GR-W06: integer midpoint interval-radius enclosure

## Result

`formal/Zetral/QC04MidpointRadius.lean` models BigInt truncation-toward-zero division by two with `qc04Half(z) = z/2` for `z≥0` and `-((-z)/2)` otherwise. `qc04Half_bounds` proves `2*qc04Half(z)-1 ≤ z ≤ 2*qc04Half(z)+1`; the negative odd case is why the lower side cannot be strengthened to `2*qc04Half(z) ≤ z`.

From these bounds, `qc04Midpoint_mem_interval` proves that for integer endpoints `l≤h`, the midpoint `qc04Half(l+h)` lies in `[l,h]`. `qc04MaxEndpointRadius_covers` then proves every integer `x` in this interval satisfies

`|x - midpoint| ≤ max(midpoint-l, h-midpoint)`.

## QC04 source trace

`experiments/qc04-constant-oscillatory-replay.js` lines 24–25 checks the interval intersection `l≤h`, computes `v=(l+h)/2n`, and sets the radius to `max(v-l,h-v)`, then mirrors both entries. The Lean theorem certifies the stated integer-interval enclosure arithmetic under this trace. It does not establish the upstream intervals, run JavaScript, or validate any campaign matrix/comparison.

## Verification

Lean 4.19.0 and locked Mathlib `c44e0c8ee63ca166450922a373c7409c5d26b00b`; `lake build Zetral.QC04MidpointRadius` succeeded. All three axiom reports contain `[propext, Classical.choice, Quot.sound]`, with no `sorryAx` or custom axioms.
