# U75 original allocation search W01

- Status: READY_FOR_REVIEW
- Parent audit: `worker/u75-m24576-original-form-w02` at corrected head `7e24bddc63e6e2104eecdb17974556c5bbbfb06a`.
- Scope: exact share-allocation search on the original-coordinate U75 h=251/100 even M24576 finite comparison.
- Motivation: the stored allocation gives 41/52 positive leading minors with exact unit factors Q/Q. Test whether a trace-based allocation family improves the finite comparison.
- Exclusive files: `research/workers/U75-ORIG-ALLOC-M24576-W01/` and `experiments/worker-u75-m24576-original-allocation/`.
- Result: a 20-point scan of the trace-derived one-parameter share family found a maximum of 43/52 positive leading minors, at total eighth-share mass 0.2 (the 0.4 point also reached 43/52). Exact replay of the selected rational allocation reproduces 2,704 baseline entries and 52 radius corrections and confirms a negative 44th pivot. The stored allocation's 41/52 result is reproduced by the independent local matrix builder. No candidate in this scan passed the full matrix.
- Reproduction: `node experiments/worker-u75-m24576-original-allocation/search.js`. Every candidate's positive-minor count comes from exact BigInt Bareiss elimination. The trace model and floating Cholesky fields are only search diagnostics; near-singularity makes the floating signs unreliable. Exact selected-candidate replay uses the scoped unit-factor replay from W02.
- Limits: this is a finite 20-point one-parameter scan, not an allocation-independent obstruction, global optimization, analytic positivity conclusion, RH result, or operator construction. No claim about allocations outside the family.
