# STS01-W01 — Independent Sobolev trace audit

Status: IN_PROGRESS

Baseline: `91d47c1` (Campaign XXII; STS01 checkpointed, STS02 not yet begun on main).

## Question and scope

Independently audit `research/positivity/STS01-sobolev-parity-trace.md`: the Dirichlet Green Riesz representers, summable trace-class expansion of the full paired-zero operator in H_0^1(-a,a), and each ordinate's contribution to the reflection trace. Keep generalized Sobolev spectrum distinct from ordinary L2. Do not enter STS02's Laplace inversion.

## Acceptance criteria

- Re-derive evaluation norm and rank-one trace norm estimates, including multiplicities and local-count summability.
- Check the per-ordinate Green/reflection integral and convergence justification.
- Report discrepancy or checked scope, with conditional source assumptions explicit.
- Bounded stopping condition: audit the operator-series and reflection-trace formulas, then reconcile or report mismatch. No actual off-line zero, RH proof, formal/human review, or novelty claim.
