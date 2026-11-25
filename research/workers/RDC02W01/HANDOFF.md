# RDC02W01 handoff

- ID: RDC02W01
- Status: READY_FOR_REVIEW
- Starting commit: 025cfb1eebb87c5ea3c5886caa9fe68daa40d37a
- Scope: Independently analyze the exact difference between archived old/new conservative lower matrices for RDC02, without rerunning interval generation or the spectral certificate.
- Question: Do all diagonal comparisons improve while the matrix difference is indefinite, and can an exact rational negative direction be extracted for both parities?
- Acceptance criteria: Recompute integer matrix differences from saved raw data, verify the first negative principal minor and positive diagonal increments, and construct a rational vector with negative quadratic form when possible.
- Bounded stopping condition: Analyze only the four saved N=28 comparison matrices at h=11/5; preserve exact witnesses and limitations.
- Completed work: Exact recomputation confirms all 28 diagonal deltas are positive, but the even/odd difference matrices have negative leading determinants at orders 2/4; extracted exact rational negative directions.
- Evidence: `research/workers/RDC02W01/DIFFERENCE-AUDIT.md`; exact checker `experiments/rdc02w01-difference-witness.py`.
- Commands: 
- Checked vs unchecked: Saved old/new lower integer matrices, all diagonal differences, and exact negative quadratic witnesses checked. Full interval regeneration and original-form comparison are not repeated.
- Blockers: None known.
- Next recommendation: Use the explicit indefinite-difference witnesses when selecting RDC03 correction directions; they confirm the first correction is not a uniform Loewner improvement.
