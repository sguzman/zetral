# QIR01-W01 — Independent finite-window audit

Status: READY_FOR_LEAD_REVIEW

Baseline: `9ff2459` (Campaign XX, QIR01 complete; QIR02 ready).

## Question and scope

Independently audit `research/positivity/QIR01-finite-window-extraction.md`: finite-window Fourier leakage, normalization and observation errors, scale/dephasing bounds, and the sufficient bounded-grid localization margin. Do not duplicate lead-owned QIR02 sample-based recovery.

## Outcome

No discrepancy found in the checked inequalities. The sufficient margin conditions and their conditional dependencies are detailed in `AUDIT.md`.

## Acceptance criteria

- Re-derive the central inequalities and check constants, signs, and required hypotheses.
- Report any discrepancy or the exact scope that passed; preserve reproducible arithmetic if used.
- Distinguish asymptotic assumptions from finite-observation guarantees; make no actual-data, formal, human-review, or novelty claim.
- Bounded stopping condition: audit the finite-window coefficient estimate and its localization implication, then reconcile or report any mismatch. This condition is met.
