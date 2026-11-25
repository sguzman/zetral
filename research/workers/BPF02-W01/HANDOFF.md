# BPF02-W01 — Independent parity and oscillation audit

Status: READY_FOR_LEAD_REVIEW

Baseline: `42bca32` (Campaign XIX, BPF03 READY).

## Question and scope

Independently check the completed BPF02 finite-dimensional endpoint analysis in `research/positivity/BPF02-parity-oscillations.md`: reflection/sector decomposition, single-quartet oscillatory prefactors and liminf/limsup, and the general finite-group trace obstruction to convergence. Keep finite-matrix conclusions distinct from consequences imported from BPF01 about the actual operator. Do not overlap the lead-owned BPF03 subordinate-group analysis.

## Outcome

No discrepancy found in the checked finite-dimensional scope. Detailed calculations and imported operator-level limits are recorded in `AUDIT.md`.

## Acceptance criteria

- Trace the matrix algebra and phase dependence; preserve any explicit example or counterexample check.
- Report any discrepancy or the exact checked scope if none is found.
- Mark imported BPF01 estimates and analytic hypotheses; no claim of RH proof, formal verification, human review, or novelty.
- Bounded stopping condition: audit the parity split, single-quartet formulas, and trace/squared-trace argument for a finite maximal group, then reconcile or report any mismatch. This condition is met.
