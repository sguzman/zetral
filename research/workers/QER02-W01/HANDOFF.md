# QER02-W01 worker handoff

- ID: QER02-W01
- Status: IN_PROGRESS
- Starting commit: `8fb1647cd10dc948db15b65f13250d8f8d0ac4b2` (`origin/main`)
- Scope: independently check the exact spectral sampling weights and the gauge/cardinal interpolation identities in `research/positivity/QER02-quotient-sampling.md`, including inner-product conjugations, the normalization `kappa_t`, graph-core extension of the differentiation identity, and local uniform convergence. QER01 compact-resolvent audit is separately submitted; do not audit QER03/04 or lead-owned Campaign XXXVI tasks.
- Scientific relevance: validates the quotient's exact sample metric and entire interpolation formula, which are prerequisites for its kernel/spectral consequences.
- Acceptance: derive each identity from QER01's imported self-adjoint compact-resolvent setup and U04 bottom-space Fourier characterization; identify any missing domain or convergence step. Record imported/unchecked claims. No RH or novelty claim.
- Bounded stopping condition: settle the weights and cardinal interpolation theorem as stated, with exact sign/conjugation checks and convergence mode.
- Evidence: `research/workers/QER02-W01/AUDIT.md`.

## Completion update — 2026-11-26

- Status: READY_FOR_REVIEW
- Result: no error found in the scoped exact weights and cardinal interpolation claims under QER01/U04 imports. Integration by parts confirms the sign; the form representer gives `kappa_t` rather than its reciprocal as the sample-basis norm, so the sampling norm has denominator `kappa_t`. The graph-core scalar `c_f` converges by evaluating the identity at one fixed nonzero point, and Cauchy–Schwarz with locally bounded evaluation norms gives locally uniform convergence.
- Evidence: `research/workers/QER02-W01/AUDIT.md`.
- Imported/unchecked claims: see AUDIT.md; in particular QER01's compact-resolvent theorem and U04's bottom-space characterization are not re-proved here.
- No numerical/formal run, RH-dependent conclusion, zeta-node identification, or novelty claim.
- Next: scoped lead review.
