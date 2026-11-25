# QIR03-W01 — Independent multiplicity-interval audit

Status: READY_FOR_LEAD_REVIEW

Baseline: `e1e970a` (Campaign XXI active; QIR03 is complete).

## Question and scope

Independently check `research/positivity/QIR03-multiplicity-enclosures.md`, especially the phase-free multiplicity identity, recursive attenuation interval arithmetic, integer-square test, and the executed synthetic example. This completed Campaign XX audit does not overlap lead-owned LBS01–04.

## Outcome

The independent exact-rational reproduction matches the reported synthetic interval endpoints and candidate multiplicities. No discrepancy found in the checked scope; see `AUDIT.md` and `audit.py`.

## Acceptance criteria

- Re-derive the magnitude identity and verify synthetic interval endpoints with an independent exact-rational implementation.
- Report any discrepancy or the exact checked scope and preserve reproducible source/output.
- Keep the selected-spectrum and QIR02 assumptions explicit; no actual zeta observations, formal/human review, or novelty claim.
- Bounded stopping condition: audit identity, interval propagation, and both synthetic widths, then reconcile or report any mismatch. This condition is met.
