# PGF03 — Executed prime-power-four positivity certificates

2026-11-25. AI-assisted candidate computation; no independent mathematical review, formal verification, RH proof or priority claim.

## First execution

Source experiments/pgf03-prime-power-four.js commit 5ed274213769e9762709b5f23450bc8683403384; raw experiments/results/pgf03-prime-power-four.json commit 56bd1c09f7de8868aca5110b6c5db098416920e1. Both exactly read back following actual V8 execution. Reproduce: node experiments/pgf03-prime-power-four.js.

Implement PGF02 with the complete three-shift matrix for n=2,3,4; the weight of 4 is log2/2. The source verifies the rational graph norm witness for 1.221, positive high diagonal comparison, and rational congruence invertibility. Eight low modes per parity, finite high trial through T=96, J=1024 derivative-corrected rate enclosures, M=1024 residual evaluation, scale 10^24. Retain the matrix-valued leading/second residual tails and squared direction-specific third-order remainder. Float64 only chooses rational directions and trials, each frozen at denominator 10^12. All actual form Gram, high residual, tail and row radius arithmetic is outward BigInt; LDL verifies the exact rational lower matrix.

Actual results: h=7/5 passes both parities; h=29/20 and 3/2 pass odd only. At h=7/5 the first even lower pivot is 162457018711/10^24 and first odd is 233603522159644/10^24. At h=29/20 the first approximately smallest even direction has upper form [54078456521,57628791989]/10^24, finite residual upper 9174162066/10^24, leading tail upper 1364540276/10^24, individual third remainder upper 32379811480/10^24, row radius 9181524898/10^24. Its individual lower endpoint is positive but the block third remainder (eight times that individual remainder) prevents the full comparison. At h=3/2 even the individual lower endpoint is inconclusive, dominated by the third remainder. No negative upper direction is certified.

## Extended residual evaluation

Source experiments/pgf03-extended-cutoff.js commit 83740c8448e28232655833dbb3c872290a92731c; raw experiments/results/pgf03-extended-cutoff.json commit 2d66db896a39d896f0ed452a61f5c961a80af6be. Actual V8 execution and exact readbacks. Reproduce: node experiments/pgf03-extended-cutoff.js.

At h=29/20 increase M to 2048, retaining J, T, low modes, arithmetic precision, graph witness, rational basis and trials. Both parities pass. First even lower pivot 29855840161/10^24, first odd 27443096313500/10^24. The even individual third remainder falls from 32379811480 to 863713776 on scale 10^24. Its upper form is identical to the first run; the individual directional lower endpoint is now 43359273755/10^24 and row radius 9232605787/10^24. The exact full lower matrices have positive interval LDL pivots in both sectors, recorded in the raw output.

By DSC01 and ECR01 this is a candidate full fixed-window strict positivity certificate for the actual restored operator at physical h=29/20=1.45, crossing log4 and including prime power 4. It is not a statement that the first LDL pivot equals the smallest eigenvalue. Earlier 1.38 certificate remains valid within its assumptions. The h=1.5 test is inconclusive, not a negative eigenvalue. No separate Node/Rust reproduction or independent review. Existing sources report larger ranges (DSC04); no literature record or novelty claim. PGF03 complete.
