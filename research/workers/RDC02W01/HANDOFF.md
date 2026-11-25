# RDC02W01 handoff

- ID: RDC02W01
- Status: IN_PROGRESS
- Starting commit: 025cfb1eebb87c5ea3c5886caa9fe68daa40d37a
- Scope: Independently analyze the exact difference between archived old/new conservative lower matrices for RDC02, without rerunning interval generation or the spectral certificate.
- Question: Do all diagonal comparisons improve while the matrix difference is indefinite, and can an exact rational negative direction be extracted for both parities?
- Acceptance criteria: Recompute integer matrix differences from saved raw data, verify the first negative principal minor and positive diagonal increments, and construct a rational vector with negative quadratic form when possible.
- Bounded stopping condition: Analyze only the four saved N=28 comparison matrices at h=11/5; preserve exact witnesses and limitations.
- Completed work: Assignment claim only.
- Evidence: This handoff.
- Commands: 
- Checked vs unchecked: Baseline main and RDC02 note read; independent matrix analysis pending.
- Blockers: None known.
- Next recommendation: Complete exact difference-matrix analysis and hand off a concrete counterexample to Loewner monotonicity if verified.
