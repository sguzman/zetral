# STS02-W01 — Independent Laplace-inversion audit

Status: IN_PROGRESS

Baseline: `ecaf0bc` (Campaign XXII, STS02 complete; STS03 ready).

## Question and scope

Independently audit `research/positivity/STS02-laplace-zero-recovery.md`: the exponential expansion of the parity trace, Laplace convergence/analytic correction, pole locations and residues, and inverse recovery of ordinates/multiplicities. Keep this generalized Sobolev trace separate from ordinary L2 spectral claims. Do not overlap STS03's arithmetic-side representation.

## Acceptance criteria

- Re-derive the transform kernel, analytic correction, residue constants, and convergence domain.
- Report any discrepancy or the exact checked scope; use reproducible symbolic/numerical checks only if needed.
- Keep source identities and assumptions explicit; no RH proof, actual computed zero, formal/human review, or novelty claim.
- Bounded stopping condition: audit the transform inversion and residues, then reconcile or report any mismatch.
