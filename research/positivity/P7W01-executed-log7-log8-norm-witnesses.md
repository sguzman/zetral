# P7W01 — Executed rational norm witnesses on [1,7] and [1,8]

2026-11-25. AI-assisted candidate computation, not independent mathematical/formal verification. Uses PMW01–02. No RH proof, actual negative restored eigenvalue or priority claim.

Source experiments/p7w01-prime-seven-witness.js commit 79435174216bbf6ab1343576859f1e35a7266c64; raw experiments/results/p7w01-prime-seven-witness.json commit dd3c4be6afe4d89de01e1c278828f46baf0d4db0. Actual V8 execution, exact remote readbacks, including the complete 216379-character raw JSON. Reproduce: node experiments/p7w01-prime-seven-witness.js. No separate Node/Rust process replay.

Extend the exact rational partition weighted Schur search of PMW02. At N=7 the only active prime-power shifts are 2,3,4,5 (Lambda(6)=0, and 7 acts on a measure-zero endpoint). At N=8 add shift 7, with upper weight 736/1000 for log7/sqrt7, verified by outward elementary logarithm arithmetic and integer square-root enclosure; 8 itself acts on a measure-zero endpoint. Retain upper weight numerators 491,635,347,720 for 2,3,4,5. All ratios, transformed endpoints and piecewise weights are exact rationals or integers. Start with constant positive integer weight 10^9 and perform 24 bounded iterations of the PMW02 rescaled (I+P_beta) heuristic, verifying each witness on its complete refinement and selecting the earliest best bound. Reverify the chosen witness independently within the program. No convergence or optimality assumption.

Actual output:
| Window endpoint N | Active shifts | Best upper norm | Weight cells | Verified cells | Best step |
| --- | --- | --- | --- | --- | --- |
| 7 | 2,3,4,5 | 1.792 | 1045 | 1153 | 24 |
| 8 | 2,3,4,5,7 | 2.071 | 3893 | 4649 | 24 |

For N=7 the initial constant-weight upper bound is 2.193 and the checked bound decreases to 1.792. For N=8 the initial bound is 2.929 and decreases to 2.071. The complete integer weights, rational endpoints, actual upper-weight intervals and histories are preserved in JSON. By the weighted Schur proof of PMW01 these are upper bounds for the combined physical prime operator, and also for its compressions to shorter windows. They are not exact norm determinations. These witnesses do not themselves establish positivity; the complete actual prime shift entries must still be included in the complementary residual calculation. The code for N=8 cannot be extrapolated beyond log8 without adding the prime-power-8 shift. P7W01 complete as candidate.
