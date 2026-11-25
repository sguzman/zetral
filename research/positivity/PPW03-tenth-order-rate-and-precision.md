# PPW03 — Tenth-order rate and precision refinement

2026-11-25. Candidate analytic refinement justified by the h=21/10 even comparison straddling zero in PPW02. No actual negative spectrum, independent review or novelty claim for Euler–Maclaurin.

Use AIR03's A_1-A_2 trapezoid difference, now DLMF 2.10.1 with m=5. The same Fourier bound |B_10(u)|<=|B_10|=5/66 yields the new exact correction B_8(2^7-1)/8! f^(7)(R)=-127 f^(7)(R)/1209600, and remaining error <=2(1+2^9)(5/66)/10! times integral |f^(10)|. The derivative product bounds are 11!/r^12 for f and f_d, x*12!/(2r^13) for f_a. Integrating gives nonexponential F and D error (855/11)/R^11, alpha error 855 x/R^12 including factor two. No extra exponential term is dropped.

Let u=R² and d=u+x. Repeated exact numerator differentiation (P/(r²+x)^k)' = [(r²+x)P'-2krP]/(r²+x)^(k+1) yields
    f^(7)=-40320 R (u³-7u²x+7ux²-x³)/d^8
    f_d^(7)=-40320 R (u⁴-21u³x+63u²x²-39ux³+4x⁴)/d^9
    f_a^(7)=5040 (u⁴-28u³x+70u²x²-28ux³+x⁴)/d^8 -5040/R^8.
The last uses f_a=1/r-r/(r²+x). These numerator coefficients were obtained by an actual exact BigInt polynomial recurrence in V8, not a numerical derivative. Evaluate the alpha correction with coefficient -127/604800. Rate corrections preserve all earlier terms.

Increase lattice to 10^54 and couple truncation lengths to denominators: log 60 terms (next 121), Machin atan 64 terms (next 129), reduced atan 96 terms (next 193), degree-40 exp(-x) (next 41), trig 48 recurrence steps (next sine 98*99 or cosine 97*98). Same domains and signed or absolute remainder proofs AIR01. For gamma use DLMF 5.11.2/ii (same actually inspected source as AIR03) through N^-16 at N=4096, with signed first omitted bound +43867/(14364 N^18). The extra terms beyond -1/(240N^8) are +1/(132N^10)-691/(32760N^12)+1/(12N^14)-3617/(8160N^16). These are classical positive-real digamma bounds. All basic interval operations remain directed. Do not reuse Q=10^42 for rational trial coefficients or floating midpoint diagnostics.

The first test will keep the old T,M,J and low support for isolation of the combined precision/rate refinement. If arithmetic width drops but the residual sixth allowance becomes dominant, either increase M or derive a higher signed residual moment with explicit tail. No certificate at h=21/10 yet. PPW03 active.

## Actual executed tenth-order crossing

Source experiments/ppw03-tenth-order-regimes.js commit bec049f62b2993fa5faa4982eb6f649f8e7896ec, exact remote readback. Keep h=21/10, J=4096, T=448, M=5120, S=225, 24 low modes per parity, actual shifts 2,3,4,5,7,8 and rational norm upper 2.303. Change only interval lattice, coupled primitive expansions, gamma, and tenth-order rate formula, and reselect rational trial/basis. The joint test does not isolate individual causes.

Actual V8 runs (full raw data, all exact readbacks):
- even experiments/results/ppw03-21-10-precise-even.json 2a948850f0aeca84922711421c6c9b4fd8fe1870, 24/24 positive exact principal minors; first numerator 233923517686256754978 on lattice 10^54; first upper energy interval [694238905623595443820,694238995546083911269]/10^54, sixth block allowance 348759819119335433873/10^54, first row radius 2008528027064119/10^54. Approximate relative residual diagnostic 0.9743194 (not a certified generalized eigenvalue).
- odd experiments/results/ppw03-21-10-precise-odd.json aed834c5ff0dc4834a7769f59af98c71734a3996, 24/24 positive exact principal minors, first numerator 1678643770149824998084127, relative diagnostic 0.7277763.

Candidate full fixed-window strict positivity now h=2.1, crossing log8 and retaining actual prime power 8. These pivots are not ordinary eigenvalue gaps. No test at log9 or above yet. Reproduce: node experiments/ppw03-tenth-order-regimes.js --even 21 10 4096 5120 448 24 and replace --even with --odd.

The updated primitive reference harness experiments/ppw03-primitive-reference.js b0b7de4c9023627bbeefdfb80b0db4e3f0e393bd was actually executed; raw ec09f580d65085598f1df947d02a78a2dd89c86e. All 34 exact rational reference checks pass on the 10^54 lattice, old 24/81 Machin upper still falsified. Initial harness extraction lacked params and failed before checks; supplied explicit cutoffs in harness and reran successfully. Both source/raw exact readbacks. Reproduce: node experiments/ppw03-primitive-reference.js experiments/ppw03-tenth-order-regimes.js. No independent mathematical/formal review or separate Node/Rust runtime. These finite tests do not independently validate every rate formula or the original Weil normalization.

Next bounded attempt in the log8<h<log9 regime near 2.15 or 2.18 to diagnose margin; then actual prime power 9 at h>log9 only if justified. The near-one even relative diagnostic and sixth block allowance suggest an eighth-order signed residual refinement or better trial selection, not mere precision escalation. PPW03 remains active for this evidence-driven follow-up. No RH proof, actual negative spectrum, priority or literature-record claim. README unchanged.
