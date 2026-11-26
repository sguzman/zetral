# Handoff: TC01-W01

- ID: TC01-W01
- Status: READY_FOR_REVIEW
- Starting commit: `3f86010`
- Scope: independent exact-rational audit of the saved TC01 58/5 witness and cutoff guards.
- Evidence: `AUDIT.md`; checkers: `experiments/worker-TC01-W01/check_piecewise_witness.py` and `check_guard_intervals.py`.
- Reproduce: run both commands in `AUDIT.md` from the repository root.
- Result: 52,551 witness cells verified at bound 2873/1000; all 20 guard intervals enclose independently computed rational intervals with matching signs; low count 44 is the least common passing cutoff for the stated guard function.
- Not checked: analytic derivation of coefficient and prime norm intervals, TC02 matrices, or original-form normalization.
- Findings: no discrepancy in the saved finite witness or guards.
- Next: lead review; TC02 remains the next lead-owned comparison.
