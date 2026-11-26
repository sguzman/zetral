# U74-ORIG-SEARCH-W02 worker handoff

- Status: READY_FOR_REVIEW
- Baseline: current main `435d154` (LXXV U75-02 even residual checkpoint)
- Branch/worktree: `worker/u74-original-allocation-search-w02` / `/dev/shm/zetral-u74-original-search`
- Question: Can a positive share allocation make the archived LXXIV h=5/2 even 50-direction comparison pass in its original coordinates, without a row transform?
- Scope: construct a continuous trace-minimizing allocation for the seven rank shares and 50 eighth-diagonal shares, round it to positive rational shares summing to the stored denominator, and replay the untransformed comparison exactly. Any pass requires all exact leading minors and an adjacent energy-grid check; a failure is only a failed heuristic allocation.
- Exclusive files: `research/workers/U74-ORIG-SEARCH-W02/`, `experiments/worker-u74-original-search/`.
- Stopping condition: exact original-coordinate pass or documented failure of the trace-minimizing candidate.
- No U75 active files or shared campaign/state/coordination edits; no claim about analytic positivity, RH, or an operator.
- Completed: trace-minimizing allocation plus 18-point diagonal-share mass scan. The exact trace candidate has 5/50 positive leading pivots, pivot 6 negative; no scan point passes. This is failure of a heuristic family, not an all-allocation obstruction.
- Evidence: `research/workers/U74-ORIG-SEARCH-W02/RESULT.md`, `experiments/worker-u74-original-search/trace-allocation.js`, and `experiments/worker-u74-original-search/even-result.json`.
