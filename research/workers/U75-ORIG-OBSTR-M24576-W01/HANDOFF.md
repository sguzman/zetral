# U75 original allocation obstruction W01

- Status: READY_FOR_REVIEW
- Starting worker baseline: `f7e5e5e9b0ad9797282735a763246bcf8b7cbd93` (original-coordinate replay and 501-allocation search).
- Scope: attempt an exact fixed-direction, allocation-independent obstruction for the U75 h=251/100 even M24576 original-coordinate finite comparison.
- Motivation: 501 explicit positive allocations reached at most 50/52 positive leading minors. Determine whether a Cauchy lower bound on all share losses can certify failure for every positive share allocation in this finite comparison.
- Exclusive files: `research/workers/U75-ORIG-OBSTR-M24576-W01/` and `experiments/worker-u75-m24576-original-obstruction/`.
- Result: fraction-free Bareiss solve of the selected 50/52 allocation produced an exact rational negative-pivot direction. The exact Cauchy all-share lower loss bound was only about 0.043 times the energy upper bound (log10 ratio -1.3687), so it did not obstruct all allocations. A seeded search of 700 nearby directions found no strict obstruction; its best log10 ratio was -3.2197. This is inconclusive outside tested vectors.
- Reproduction: `node experiments/worker-u75-m24576-original-obstruction/fixed-vector.js`; reconstructs the M24576 matrix, derives the direction by fraction-free Bareiss elimination, and evaluates exact BigInt interval/Cauchy inequalities. The 700-vector perturbation search is deterministic with seed 20261126.
- Limits: finite matrix certificate only. No claim about the underlying Weil form, RH, or an operator construction.
