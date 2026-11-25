# BPF01-W01 — Independent endpoint-factorization audit

Status: IN_PROGRESS

Baseline: `86dafe8` (Campaign XX, QIR03 checkpointed; QIR04 ready).

## Question and scope

Independently audit the completed BPF01 endpoint factorization and finite-rank minmax transfer in `research/positivity/BPF01-endpoint-factorization.md`: signs, exponent scales, endpoint profiles, uniform invertibility, and control of the positive real-zero form on the trial span. This is a foundational completed result and does not overlap QIR03 or QIR04 consolidation.

## Acceptance criteria

- Trace the factorization and leading eigenvalue bounds under the stated finite off-line hypothesis.
- Check the uniform BV trial estimate and the projection-concentration conclusion.
- Report any discrepancy or the precise scope that passed; keep source imports explicit.
- Bounded stopping condition: audit the endpoint block and its transfer to the ordinary form, then reconcile or report any mismatch. No actual off-line zero, RH proof, formal/human verification, or novelty claim.
