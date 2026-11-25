# STS03-W01 — Independent arithmetic-trace audit

Status: IN_PROGRESS

Baseline: `dc92b04` (Campaign XXII, STS03 complete; STS04 ready).

## Question and scope

Independently audit `research/positivity/STS03-arithmetic-parity-trace.md`: the arithmetic-side expansion of the Sobolev reflection trace, prime/pole/archimedean contributions, and the stated truncation/error bounds. Check the connection to STS01–02's exact kernel while keeping the trace in the Sobolev metric. Do not duplicate STS04 consolidation.

## Acceptance criteria

- Re-derive the core arithmetic identities and check constants/signs in the finite cutoff estimates.
- Report discrepancies or the precise checked scope; preserve exact arithmetic checks if used.
- Verify any source-dependent explicit-formula inputs with actual source evidence; distinguish imported theorem from internal calculation.
- Bounded stopping condition: audit the arithmetic representation and its truncation guarantee, then reconcile or report mismatch. No actual off-line zero, RH proof, formal/human review, or novelty claim.
