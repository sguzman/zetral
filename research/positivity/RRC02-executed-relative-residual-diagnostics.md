# RRC02 — Executed larger high-trial and relative residual diagnostics

2026-11-25. AI-assisted candidate computation; no independent verification, formal proof, RH proof, or priority claim. Source experiments/rrc02-larger-high-trial.js commit 3a4f71d651f938ece521e3470d90bafd85b5ebb1; raw experiments/results/rrc02-larger-high-trial.json commit 136d5557938709ed9d4c59d096fa5fc3bb71ddfe. Actual V8 execution, both exact remote readbacks. Reproduce: node experiments/rrc02-larger-high-trial.js.

Preserve the PMW03 exact prime norm witness <=1.547 on [1,6] and all four actual shifts. Ten low modes per parity, high trial support T=192 (previously 96), residual cutoff M=2048 (previously 1536), J=1024 sixth-order scalar rate enclosures, scale 10^30. All required diagonal entries are computed through T by choosing S=97. Replace Float64 selection of high trial columns by fixed-point midpoint LDL and triangular solution. This is an untrusted trial selection, NOT a verified inverse; all subsequent actual form Gram and residual arithmetic is independently outward enclosed. Retain integer Jacobi rational basis selection and strict diagonal dominance of its Gram, exact rational low-minus-high trial coefficients, three rank-one tail terms, squared direction-specific fourth remainder, and exact integer Bareiss positive-definiteness check.

The raw output additionally preserves all interval matrices separately: upper form U, finite residual Gram, leading, second and third rank-one bounds, fourth diagonal allowance, and the final exact integer lower matrix. For diagnostics only, divide residual midpoint entries by the square roots of the two upper diagonal midpoint energies. Float64 power iteration estimates the largest eigenvalue of this diagonally energy-scaled residual majorant. This is NOT a certified generalized eigenvalue (the upper form need not be diagonal), and does not enter the sign proof. The actual positivity test remains exact integer principal minors.

Actual results (all 10 lower pivots pass in each row):
| h | parity | first lower pivot / 10^30 | approximate relative residual diagnostic |
| --- | --- | --- | --- |
| 33/20 | even | 720254961976 | 0.4097114 |
| 33/20 | odd | 896812053141982 | 0.3403932 |
| 17/10 | even | 24030465648 | 0.5203078 |
| 17/10 | odd | 43999766269749 | 0.4035302 |

At h=33/20 the smallest even selected direction upper interval is [869066169548,872581022013]/10^30, finite residual upper 109085153870/10^30, leading tail upper 24827600265/10^30, fourth block allowance 4130413871/10^30, and row radius 12343623537/10^30. At h=17/10 the corresponding upper interval is [44536740148,47990445537]/10^30, finite residual upper 6318060864/10^30, leading tail 1293084881/10^30, fourth block allowance 2124011453/10^30 and row radius 12486507291/10^30. Every high coercive weight check and rational basis invertibility check passes. All pivots are lower comparison pivots, not ordinary eigenvalue margins.

The exact lower comparisons establish candidate full fixed-window strict positivity at h=1.65 and h=1.70, subject to the preceding mathematical derivations. This crosses log5 and includes prime 5, advancing the internal range from 1.6. The comparison gains combine larger high support, larger residual cutoff and more precise trial selection; no isolation of their individual effects is claimed. At h=1.7 the interval radius again approaches the near-null energy, so a larger-rate-cutoff test near log6 is justified. No negative actual spectrum, literature record, separate Node/Rust reproduction or independent review. RRC02 complete.
