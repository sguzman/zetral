# U75 original allocation obstruction W01

- Status: IN_PROGRESS
- Starting worker baseline: `f7e5e5e9b0ad9797282735a763246bcf8b7cbd93` (original-coordinate replay and 501-allocation search).
- Scope: attempt an exact fixed-direction, allocation-independent obstruction for the U75 h=251/100 even M24576 original-coordinate finite comparison.
- Motivation: 501 explicit positive allocations reached at most 50/52 positive leading minors. Determine whether a Cauchy lower bound on all share losses can certify failure for every positive share allocation in this finite comparison.
- Exclusive files: `research/workers/U75-ORIG-OBSTR-M24576-W01/` and `experiments/worker-u75-m24576-original-obstruction/`.
- Method: derive a rational vector from a failed leading pivot; use interval lower bounds for each rank component and diagonal eighth term, optimize Σ a_j/p_j over all positive shares p_j with sum one by Cauchy, and compare with an upper bound on the fixed energy form. All final inequalities must be exact integer/rational checks.
- Stopping condition: one reproducible obstruction certificate or a precise, bounded finding that the tested directions do not obstruct; no claim over untested directions.
- Limits: finite matrix certificate only. No claim about the underlying Weil form, RH, or an operator construction.
