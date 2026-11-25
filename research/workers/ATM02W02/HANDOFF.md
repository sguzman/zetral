# ATM02W02 handoff

- ID: ATM02W02
- Status: READY_FOR_REVIEW
- Starting commit: `4d4a51d` (matched old-allocation even result at h=9/4)
- Scope: exact stored-integer audit comparing the ATM02 h=9/4 even old-allocation raw file with the adaptive-allocation raw file. No generator or shared campaign files edited.
- Question: Is the old comparator's failed certification explained by its saved exact leading minors, and are the two runs matched on the finite setup used for comparison?
- Completed: Recomputed every leading determinant of each stored 30x30 lower integer matrix; compared to saved sequences; verified matched finite setup and rational share normalization.
- Evidence: `research/workers/ATM02W02/ATM02W02-AUDIT.md`; `experiments/atm02w02-old-allocation-audit.py`.
- Exact command: `python experiments/atm02w02-old-allocation-audit.py` (PASS).
- Checked: exact integer determinant arithmetic for the archived matrices; all dimensions, window/grid, basis/trial, prime norm upper bound, and rational share sums.
- Unchecked: interval generator, outward interval validity, full mathematical derivation of either lower matrix, and any operator/spectral conclusion.
- Blockers: None.
- Next recommendation: Lead may integrate this as scoped independent confirmation of the matched old/new matrix outcome; keep the interval certification provenance distinct.
