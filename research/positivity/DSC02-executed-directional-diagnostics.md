# DSC02 — Executed rational directional diagnostics

2026-11-25. AI-assisted candidate computation. Actual V8 execution, not independent verification. Source experiments/dsc02-directional-diagnostics.js commit cd9edbe0cbe07e047faa4f4a478ca9bb83abecd0; raw experiments/results/dsc02-directional-diagnostics.json commit 6c1c6b8a35708aef43306850bd56f28ffd9ea4af. Exact readbacks. Reproduce: node experiments/dsc02-directional-diagnostics.js. No separate Node or Rust run.

Use the ECR03 two-prime parameters (six low modes per parity, T=64, M=768, J=256, scale 10^18). Choose a rational basis by Float64 Jacobi rotation of the upper Schur matrix and freeze on denominator 10^12. Certify invertibility by strict diagonal dominance of V*V in interval arithmetic; choose rational high trial coefficients in the transformed basis. Compute the exact form Gram of the low-minus-high trial functions directly, as well as high residual rows. Recompute signed S0 and V2 tail coefficients in the transformed basis, and bound the third remainder with directional weights d_i=C3_i upper plus one lattice unit. Replace uniform entry-radius correction by per-row sums. All arithmetic for verification remains outward BigInt.

For the first (approximately smallest upper Schur) even direction, raw endpoints in scale 10^18:
| h | upper form | finite residual penalty | leading tail | individual lower endpoint | block row radius |
| --- | --- | --- | --- | --- | --- |
| 21/20 | [223382737083,336294288994] | [10240185772,10282536305] | 952578429 | 212142972053 | 364667849463 |
| 11/10 | [637418714,111466345814] | [3893829393,3916241109] | 625290818 | -3907281394 | 357808384940 |
| 23/20 | [-43912762720,64958213975] | [1003553799,1016531976] | 145090018 | -45075029942 | 360945181001 |
| 6/5 | [-51585390668,55314456841] | [208022982,213868392] | 27770195 | -51827227297 | 355027477945 |
| 5/4 | [-52080297497,52883357708] | [41326691,43897200] | 5046225 | -52129328923 | 337953616258 |
| 13/10 | [-51327299709,51608701707] | [8760707,9938405] | 994881 | -51338300862 | 327265074802 |

These are unnormalized directional intervals with low-vector squared norms tightly enclosing 1 (raw data). The upper form is an upper bound on the exact Schur quotient, not an eigenvalue. No negative certified upper endpoint in the displayed directions. At h=21/20 the individual lower bound is positive but the block radius dominates; at h>=23/20 the upper interval itself includes zero. Thus improving analytic rate-sum/constant arithmetic precision is justified before increasing mode counts. The even block fails every test; odd passes through 6/5, fails at 5/4 and 13/10. The earlier length-one certificate is unchanged. No negative actual spectrum or improved full interval certificate. DSC02 complete.
