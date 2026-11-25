# RDC01W01 handoff

- ID: RDC01W01
- Status: READY_FOR_REVIEW
- Starting commit: 46d050ed66bcb05a48e286d68634b9dafbcc6496
- Scope: Independently audit the RDC01 restricted-correction identities, especially the noncommuting case and singular correction Hessian range condition. Do not edit campaign state or lead RDC artifacts.
- Question: Do the matrix identities hold without assuming C and G commute, and does ker(H) orthogonality to range(B) remain valid for a singular H?
- Acceptance criteria: Derive the matrix expansions directly; check exact rational finite-dimensional cases with C>=G, including a noncommuting positive-definite H and a noncommuting singular H; reproduce the note's synthetic one-direction example.
- Bounded stopping condition: Limit the package to the exact algebraic correction lemma and its stated operator-order hypotheses; preserve any counterexample or precise scoped confirmation.
- Completed work: Independently derived the noncommuting matrix expansions and singular-H range condition; exact Fraction examples reproduce the Schur identity, full correction expansion and published one-direction correction.
- Evidence: `research/workers/RDC01W01/ALGEBRA-AUDIT.md`; exact checker `experiments/rdc01w01-exact-matrix-audit.py`.
- Commands: 
- Checked vs unchecked: RDC01 algebra, factor order, noncommuting examples, and singular correction range compatibility checked exactly. RDC02 surrogate and original spectral normalization are unchecked.
- Blockers: None known.
- Next recommendation: Lead may use this scoped audit to support the RDC01 matrix-algebra portion; physical numerical results remain subject to RDC02–04 review.
