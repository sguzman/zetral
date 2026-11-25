# BPF03-W01 — Independent deviation-hierarchy audit

Status: IN_PROGRESS

Baseline: `e796458` (Campaign XIX, BPF03 complete; BPF04 ready).

## Question and scope

Independently audit `research/positivity/BPF03-deviation-hierarchy.md`, focusing on the scaled endpoint synthesis, the two-stage Schur reduction across deviation groups, the conversion from finite pencil eigenvalues to ordinary-form eigenvalue prefactors, and the stated infinite-remainder hypotheses. Keep finite-dimensional algebra distinct from the imported BPF01 operator transfer. Do not duplicate BPF04 consolidation.

## Acceptance criteria

- Trace the block-matrix and asymptotic steps; check signs, scales, and error orders.
- Report any discrepancy or the precise scope that passed.
- Keep assumptions and unverified imports explicit; no formal, human-review, or novelty claim.
- Bounded stopping condition: check the finite hierarchy reduction and its stated transfer hypotheses, then reconcile or report any mismatch.
