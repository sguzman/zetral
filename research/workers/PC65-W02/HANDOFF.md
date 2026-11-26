# PC65-W02 — one-sided diagonal interval propagation

- ID: PC65-W02
- Status: READY_FOR_REVIEW
- Baseline: `a9aee29ffa371319cf2e3cdc56fc51b7fbf6adf8` (LXV PC03 even pass / odd work order).
- Scope: determine whether the source's proven diagonal lower endpoint, with an uncertified upper endpoint, can still feed its interval matrix pipeline soundly through fixed basis changes and the weighted-radius lower matrix. Trace only the treatment of the archimedean diagonal; do not reconstruct matrices or verify PC03 positivity numerically.
- Relevance: PC65-W01 established that `widen(center,error)` is guaranteed below the exact diagonal but is not a two-sided enclosure. This follow-up tests the precise order argument needed for downstream use in the current candidate chain.
- Acceptance: prove or refute the clipping/Loewner argument; map its hypotheses to the current source operations, including signed basis coefficients and the final weighted-radius matrix; give a counterexample to any stronger claim that the interval encloses the un-clipped exact diagonal when it need not. State what additional tail/interval assumptions remain outside scope.
- Bounded stop: one source trace and one finite-dimensional order proof. No matrix replay, cutoff search, or full Campaign LXV proof audit.

## Handoff result

Completed at commit `d9580f87629bc98a19b038763b2e2685ab9101d4`. The audit proves the clipped-diagonal Loewner implication for the fixed rational transforms in the source and demonstrates why the intervals do not necessarily enclose the un-clipped matrix. It remains conditional on the independently established diagonal lower endpoint (including the special zero mode) and all other interval, tail, high-complement, and exact-pivot claims. No PC65 matrix or odd comparison was reconstructed.

Reproduce the exact finite-dimensional example with `python3 experiments/worker-PC65-W02/clipped_interval_example.py`.
