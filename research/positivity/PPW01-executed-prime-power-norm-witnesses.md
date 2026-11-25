# PPW01 — Executed rational norm witnesses for prime powers 8 and 9

2026-11-25. AI-assisted candidate computation; no independent mathematical/formal verification or priority claim. Uses PMW01–02 and P7W01. No RH proof or positivity certificate follows from a norm upper bound alone.

Source experiments/ppw01-prime-power-witness.js commit e9e3f6327565511ec2b04ac863ee02961213cd3f; raw experiments/results/ppw01-window-9.json commit 349fc63ca52741acb432490f6d738ead2e1bda45; raw experiments/results/ppw01-window-11.json commit 7ad3834dc7eca010832d403d4fb5335a236fd363. All exact remote readbacks. The first attempt to commit the second raw output encountered a GitHub 409 branch conflict; checked the current canonical checkpoint and absence of the target file, reran the deterministic N=11 witness and committed its exact output without overwriting another file. Reproduce: node experiments/ppw01-prime-power-witness.js. Actual V8 execution; no separate Node or Rust replay.

For N=9 the active shifts are 2,3,4,5,7,8; for N=11 add 9, because Lambda(10)=0 and the endpoint shift 11 has zero overlap almost everywhere. The new actual prime-power weights are log2/sqrt8 and log3/3 (NOT log8/sqrt8 or log9/3). The rational upper numerators 246 and 367 on denominator 1000 are verified by outward elementary logarithm and integer square-root arithmetic, along with the earlier weights 491,635,347,720,736. Extend the PMW01 rational endpoint refinement and integer positive weighted Schur test without assuming finite graph components.

Start with constant positive integer weight 10^9, perform 16 bounded rescaled (I+P_beta) search iterations and verify every actual cell inequality, selecting the earliest best bound. Reverify the selected witness. The complete integer weights, reduced rational endpoints, actual weight intervals and search history are preserved separately for each window.

| N | Active shifts | Best upper norm | Positive weight cells | Verification cells |
| --- | --- | --- | --- | --- |
| 9 | 2,3,4,5,7,8 | 2.303 | 3321 | 4086 |
| 11 | 2,3,4,5,7,8,9 | 2.714 | 10611 | 13333 |

Both best bounds occur at step 16. The constant-weight starting bounds are 3.175 and 3.542, respectively. The exact weighted Schur proof yields upper bounds valid by compression on every shorter physical window, not exact norm values or claims of optimality. The N=11 bound cannot be extrapolated past log11 without accounting for the new active prime. No larger full positivity test yet; PPW02 will integrate the actual prime powers and execute bounded tests. PPW01 complete as candidate.
