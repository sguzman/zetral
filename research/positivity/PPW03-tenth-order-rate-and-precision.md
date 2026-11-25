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
