# U75 original allocation search W01

- Status: READY_FOR_REVIEW
- Parent audit: `worker/u75-m24576-original-form-w02` at corrected head `7e24bddc63e6e2104eecdb17974556c5bbbfb06a`.
- Scope: exact share-allocation search on the original-coordinate U75 h=251/100 even M24576 finite comparison.
- Motivation: the stored allocation gives 41/52 positive leading minors with exact unit factors Q/Q. Test whether changing positive allocation shares improves this finite comparison.
- Exclusive files: `research/workers/U75-ORIG-ALLOC-M24576-W01/` and `experiments/worker-u75-m24576-original-allocation/`.
- Result: 213 coarse allocation candidates and 168 fine candidates were tested, each by exact BigInt Bareiss leading-minor signs. The maximum was 50/52, attained at several allocations. The selected coarse allocation (total eighth-share mass 0.15, rank exponent 0.25, diagonal exponent 0) reproduces 2,704 baseline entries and 52 radius corrections; exact full replay confirms its 51st pivot is negative. The stored allocation's 41/52 result is also reproduced.
- Reproduction: `node experiments/worker-u75-m24576-original-allocation/search.js` writes the coarse scan; append `--refine` for the 168-point local exponent grid. `result.json` and `refine-result.json` preserve exact allocations and results. Trace costs and floating Cholesky outputs only guide the search; Bareiss counts are authoritative. The selected full replay uses the scoped exact-unit-factor replay from W02.
- Limits: finite grids over the stated positive allocation families, not an allocation-independent obstruction or global optimization. No candidate in these grids passes the full matrix. No analytic positivity, RH, or operator-construction claim.
