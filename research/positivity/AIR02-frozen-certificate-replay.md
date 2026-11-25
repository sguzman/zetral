# AIR02 — Frozen certificate replay at h=39/20

2026-11-25. Actual execution, scoped AI lead audit. Preserve the previously saved rational low basis V and high trial XT, not the heuristic numerical choices. Their values are exact integers on the 10^42 lattice; the exact residual identity accepts any trial, provided the low basis is invertible.

## Independent stored-interval replay

Source experiments/air02-stored-interval-replay.js commit 45f7fa1223d7a846cbea1e73107dc52e9c7e40a8; executed raw results experiments/results/air02-stored-interval-replay.json commit 634a73dd7949c334f9105bd337002fae59439ce1. Recompute integer Gram V V^t and strict diagonal dominance, reconstruct every lower interval by subtracting finite residual and the five rank-one allowances plus sixth diagonal allowance, intersect transposed entry intervals, and deduct row radius sums from exact midpoint diagonals. Independently implement symmetric Bareiss elimination, checking exact divisions and positivity of all principal minors. Both sectors reproduce every lower integer entry and all 18 saved minors exactly. This checks arithmetic after interval generation only.

## Full frozen replay

Source experiments/air02-frozen-full-replay.js commit 5ab1a63df34c0ea612f33dccdb1a3a3094a2c348; copied the corrected P7W03 interval generator and replaced midpoint LDL, Jacobi and trial projection selection with input validation and loading frozen V, XT. Verify mode lists, dimensions, exact basis invertibility, every prime witness and all high weights, generate all intervals and residual tails anew. Compare high weight, prime bound, basis, trial, component intervals, lower integer matrix, principal minors, pivots, tails and certified flag exactly to the archived corrected data.

Executed separately in V8:
- even: experiments/results/air02-frozen-full-even.json commit 2d78b7c5860230152fc69a71ffae6bce120a9bfa; all 18 positive minors, first numerator 324428117300970;
- odd: experiments/results/air02-frozen-full-odd.json commit 397ad0f59cfe4be463bc37c525cd70af07a3df56; all 18 positive minors, first numerator 1018398794729507825.

All five new source/raw files were verified via exact remote content readbacks (two sources and three raw). The full replay reproduces all saved components exactly, using neither heuristic LDL nor Jacobi selection. The code still constructs and verifies the rational prime norm witness; it does not require trusting its choice procedure. Reproduce both:
    node experiments/air02-stored-interval-replay.js experiments/results/p7w03-adaptive-corrected-even.json experiments/results/p7w03-adaptive-corrected-odd.json
    node experiments/air02-frozen-full-replay.js experiments/results/p7w03-adaptive-corrected-even.json experiments/results/p7w03-adaptive-corrected-odd.json

This is an independent integer-only final-matrix implementation and a deterministic full replay sharing the original elementary/matrix interval routines; it is NOT an independently implemented full verifier, separate Node/Rust execution, formal proof or external review. The positivity claim remains conditional on the analytic derivation. AIR02 complete as scoped reproducibility evidence.
