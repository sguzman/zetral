# U75-ORIG-M24576-W02 worker handoff

- Status: READY_FOR_REVIEW
- Baseline: `7455b1acbcd69e6d6323b6922a7d83c3abdc7556` (main; passing U75-02 even comparison and odd-sector handoff)
- Branch/worktree: `worker/u75-m24576-original-form-w02` / `/dev/shm/zetral-u75-m24576-original-audit`
- Scope: independently replay the U75 h=251/100 even M24576 allocation in original trial coordinates, using the M24576 aggregate and trial patch. Reconstruct the original baseline first; omit row congruence and transformed eighth bounds.
- Rationale: U75 campaign still has no original-form independent evaluation. This checks how much the current even pass depends on the row transformation while the lead proceeds with the odd sector.
- Exclusive files: `research/workers/U75-ORIG-M24576-W02/` and `experiments/worker-u75-m24576-original/` only.
- Outcome: exact original-coordinate replay completed. Reconstructed and matched all 2,704 baseline entries and 52 radius corrections; the stored allocation with unit direction factors has 52/52 positive leading minors, but the energy-grid margin is 0/1,000,000 and the next grid point fails. The transformed stored replay is also 52/52 and has margin 95,427/1,000,000. See `experiments/worker-u75-m24576-original/RESULT.json` and reproducible `original-form.js`. This is a finite-certificate comparison, not analytic positivity or an RH/operator result.
- Reproduction: from this worktree run `node experiments/worker-u75-m24576-original/original-form.js`; the script patches C8, applies the staged source edits to the base source (which is required by the assembler anchors), assembles the aggregate and runs exact replay with unit direction factors.
- No U75-03 files, shared campaign/state/coordination edits, or RH/operator/frontier/formal/CI/novelty claims.
