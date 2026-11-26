# Handoff: SC01-W02

- ID: SC01-W02
- Status: READY_FOR_REVIEW
- Starting commit: `ede875d`
- Scope: exact-rational audit of the saved SC01 parity/cutoff guard intervals.
- Evidence: `AUDIT.md`; checker: `experiments/worker-SC01-W02/check_guard_intervals.py`.
- Reproduce: `python3 experiments/worker-SC01-W02/check_guard_intervals.py`.
- Result: all 20 saved intervals (low 41–50, both parities) enclose independently computed rational intervals with matching signs; both parities pass at 43 and the even guard fails at 42.
- Deduction: monotonicity in mode and low count makes 43 the least common passing cutoff for the saved guard criterion.
- Not checked: derivation of the saved witness bound or prime norm estimate, SC02 comparison, or original-form operator claim.
- Findings: no discrepancy in the saved guard arithmetic.
- Next: lead review.
