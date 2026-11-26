# Handoff: SC02-W01

- ID: SC02-W01
- Status: READY_FOR_REVIEW
- Starting commit: `78f5a25`
- Scope: independent exact reconstruction of SC02 even M12288 stored interval-to-matrix arithmetic, determinant lists, and allocation-zero fixed-energy margin.
- Evidence: `AUDIT.md`; checker: `experiments/worker-SC02-W01/rebuild_sc02_matrices.py`.
- Reproduce: `python3 experiments/worker-SC02-W01/rebuild_sc02_matrices.py`.
- Checked: 1,849 baseline entries, 43 baseline radii, 14,792 selected entries, 344 leading determinants, and margin 37523/1000000 with the next grid point failing.
- Not checked: generation of component intervals, analytic factor bounds, optimizer search, or original-form normalization.
- Finding: no discrepancy in the checked stored interval-to-matrix arithmetic.
- Next: lead review; SC03 odd comparison remains separate.
