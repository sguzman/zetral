# Handoff: SC02-W02

- ID: SC02-W02
- Status: READY_FOR_REVIEW
- Starting commit: `3d2f4d5`
- Scope: derive and exactly test a parity-aware improvement to the SC02 even eighth-tail sum bound.
- Evidence: `AUDIT.md`; checker/reconstructor: `experiments/worker-SC02-W02/parity_aware_eighth_tail.py`.
- Reproduce both cutoff cases with the two commands in `AUDIT.md`.
- Result: the new tail scalar is less than 0.499256 of the old at M10240 and less than 0.499381 at M12288. The eight unchanged M10240 allocations still fail at the tenth pivot; all eight M12288 allocations remain positive. Allocation zero's exact fixed-energy margin improves from the recorded 37523/1000000 to 41278/1000000 under the new bound.
- Checked: the integer tail inequality, monotonicity of the even-sector `g`, exact rational tail ratios, saved interval-to-matrix reconstruction, leading determinants, and fixed-energy grid.
- Not checked: the `C8` proof, other factor derivations, raw component interval generation, new allocation search, odd parity, or original-form normalization.
- Findings: no issue with the bound application; M10240 still needs more than this single unchanged-allocation refinement.
- Transfer check: for planned LXIX TC02 even parameters (`h=49/20`, `C=2873/1000`, `M=12288`), an exact rational check certifies `g(12290)>0` and new/old tail scalar ratio `<0.4994`; this is not a TC02 matrix result.
- Next: lead review; the LXIX TC02 matrix comparison remains separate.
