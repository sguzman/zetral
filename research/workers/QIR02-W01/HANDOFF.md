# QIR02-W01 — Independent sampled-pencil audit

Status: READY_FOR_LEAD_REVIEW

Baseline: `8ffea9b` (Campaign XX, QIR02 complete; QIR03 ready).

## Question and scope

Independently audit `research/positivity/QIR02-sampled-pencil-recovery.md`: the exact 2P-sample Hankel rank statement, perturbation/disk matching for pencil roots, node-to-frequency bounds, and Vandermonde coefficient enclosure. Check constants and alias/separation assumptions. Do not duplicate QIR03's recursive Cauchy-factor uncertainty analysis.

## Outcome

No discrepancy found in the finite-matrix bounds under the stated hypotheses. The exact checks and limitations are documented in `AUDIT.md`.

## Acceptance criteria

- Re-derive the finite-dimensional identities and perturbation inequalities under the stated hypotheses.
- Report discrepancies or the precise scope that passed; preserve exact computations if used.
- Keep assumptions and synthetic-only limitations explicit; no actual spectral data, formal/human verification, or novelty claim.
- Bounded stopping condition: audit the noiseless recovery and noisy node/coefficient bounds, then reconcile or report any mismatch. This condition is met.
