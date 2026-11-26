# U75-ORIG-M24576-W02 worker handoff

- Status: IN_PROGRESS
- Baseline: `7455b1acbcd69e6d6323b6922a7d83c3abdc7556` (main; passing U75-02 even comparison and odd-sector handoff)
- Branch/worktree: `worker/u75-m24576-original-form-w02` / `/dev/shm/zetral-u75-m24576-original-audit`
- Scope: independently replay the passing U75 h=251/100 even M24576 allocation in original trial coordinates, using the M24576 aggregate and trial patch. Reconstruct the original baseline first; omit row congruence and transformed eighth bounds.
- Rationale: U75 campaign still has no original-form independent evaluation. This checks how much the current even pass depends on the row transformation while the lead proceeds with the odd sector.
- Exclusive files: `research/workers/U75-ORIG-M24576-W02/` and `experiments/worker-u75-m24576-original/` only.
- Acceptance: exact reconstruction of stored baseline entries/radii, exact original-coordinate proposal replay with Bareiss pivot signs, reproducible raw result, explicit statement of scope and limits.
- Stopping condition: both reconstructions complete or a precise artifact/definition gap blocks the audit.
- No U75-03 files, shared campaign/state/coordination edits, or RH/operator/frontier/formal/CI/novelty claims.
