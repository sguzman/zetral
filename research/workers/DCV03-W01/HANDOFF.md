# DCV03-W01 — Independent audit handoff

Status: IN_PROGRESS

Baseline: `f638a08` (Campaign XIX active; DCV03 is complete on main).

## Question and scope

Independently audit the exact rational coefficient bounds and finite trace/parity tables in `research/positivity/DCV03-larger-window-certificate.md`. Recompute selected and boundary rows using an independently written exact-arithmetic implementation, and check the derivation's monotonicity and endpoint-periodization conditions. This audits the completed DCV03 milestone only and does not overlap lead-owned BPF01–04.

## Acceptance criteria

- Preserve the exact command/source and concise output for the independent arithmetic check.
- Identify any discrepancy, or state precisely that none was found in the checked scope.
- Keep imported analytic identities and unverified assumptions explicit; make no formal, human, or novelty claim.
- Bounded stopping condition: audit the formulas and all nine printed comparison rows; stop after reconciling any mismatch or completing exact cross-checks.
