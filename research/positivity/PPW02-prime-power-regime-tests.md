# PPW02 — Actual prime-power regime tests (checkpoint)

2026-11-25. Candidate computational certificates conditional on the analytic restored-form identification. Uses completed AIR01–04, PPW01, P7W03 and ECR01. No independent human/formal verification, separate Node/Rust runtime, priority claim or RH proof.

Source experiments/ppw02-prime-power-regimes.js commit 6357dd69980430ff9da0d448259f9b9d15a3b308, exact remote readback. Integrates actual prime power 8 at log8 with weight log2/sqrt8, 9 at log9 with weight log3/3, strict regime guards log7<h<log11, exact recomputed rational norm witness for appropriate [1,N] (2.071 at N=8, 2.303 at N=9, 2.714 at N=11). Shift 10 contributes nothing. Uses corrected 48/97 Machin arithmetic, AIR03's eighth-order remainder coefficients 43/5 and 387/5, six signed residual terms and full exact lower matrix. All actual active shifts, no omission at threshold. The norm witness is a sufficient upper bound, not its exact norm.

Actual V8 results at h=2 (still below log8, actual prime shifts 2,3,4,5,7), T=384, M=4608, S=193, 18 low modes each parity, scale 10^42:
- J=2048 even: experiments/results/ppw02-2-1-even.json a0c3bf36610dbf31a46cd8263c6a75220b7d0ca7. Inconclusive first lower minor -539617615906; first directional lower 5069280908387 positive, but matrix-wide row radius 5786820815148. Relative diagnostic 0.65964 (approximate, not certified). This supports precision refinement, not a conclusion about actual spectrum.
- J=3072 even: experiments/results/ppw02-2-1-J3072-even.json b172361c1501bea15b1607b4dea8bc6092b7d40c. All 18 minors positive, first 4931612314173, first row radius 316125974805; relative diagnostic 0.65963.
- J=3072 odd: experiments/results/ppw02-2-1-J3072-odd.json ec56c967f2eec3a645d3744eb83b3e75a53f89d7. All 18 minors positive, first 13192247427684152, first row radius 375257327318; relative diagnostic 0.57743.

All raw data verified by exact remote readback. Numerators use scale 10^42; first minors are not ordinary eigenvalue margins. Candidate full fixed-window strict positivity advances from 1.95 to 2.0. No actual 8 or 9 overlap at h=2. Reproduce: node experiments/ppw02-prime-power-regimes.js --even 2 1 3072 4608 384 18, and replace --even with --odd. A bounded crossing test h=21/10 is justified by the full positive result and implemented norm witness, but no guarantee of success. PPW02 active.
