# Handoff: TC02-W01

- ID: TC02-W01
- Status: READY_FOR_REVIEW
- Starting commit: `fa35aca`
- Scope: independent exact reconstruction of the failed TC02 even M12288/T768/lowCount44 baseline and eight selected lower matrices.
- Evidence: `AUDIT.md`; checker: `experiments/worker-TC02-W01/rebuild_tc02_failure.py`.
- Reproduce: `python3 experiments/worker-TC02-W01/rebuild_tc02_failure.py`.
- Result: 1,936 baseline entries, 44 row radii, and 15,488 selected entries match; each of eight candidates reproduces the positive first and negative second leading determinant in its stored prefix.
- Not checked: raw analytic interval generation, finite-residual heuristic diagnosis, or T1024 refinement.
- Finding: no discrepancy in the saved failed matrix reconstruction.
- Next: lead review; T1024 remains the lead-owned refinement.
