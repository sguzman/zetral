# PMW03 — Executed prime-five residual tests with exact rational norm witness

2026-11-25. AI-assisted candidate computations, not independent review. No RH proof, negative restored eigenvalue or priority claim.

## Integration and first run

Source experiments/pmw03-prime-five-certificate.js commit c5061a026e3c610677f911cc362a515adf298fd9; raw experiments/results/pmw03-prime-five-certificate.json commit 36b8babf6264881fc7b119caa7bb2ec6e6da1916. Actual V8 execution, exact remote readbacks. Reproduce: node experiments/pmw03-prime-five-certificate.js.

Embed and reexecute the deterministic PMW02 witness generator, verify the returned 1.547 norm bound on [1,6], and check each actual prime weight against its rational upper bound. Require log5<h<log6 using outward logarithms. Include all four clipped shifts 2,3,4,5 in the actual parity matrix, with the prime-power-4 von Mangoldt weight log2/2 and prime-5 weight log5/sqrt5. The common rational-moment formulas of RMT01 apply to all four shifts. Use g_n=w_n-1.547 and subtract the odd projected pole bound where appropriate. Ten low modes per parity (odd up to 19); odd high pole estimate uses sum_(n>20)n^-4<=1/(3*20³). Check positivity of the first high comparison weight.

Use T=96, M=1536, J=1024, 10^30 outward scale, sixth-order rate enclosures, three rank-one tails and squared direction-specific fourth-order remainder. Float64 selects the initial trial and rational basis; every transformed Gram, residual and tail is outward verified as before.

Actual tests: h=33/20,17/10,7/4. Odd passes at 33/20, all other full comparisons fail. At 33/20 even first directional lower endpoint 717535329432/10^30, first lower-matrix pivot positive, second interval LDL pivot spans zero. At 17/10 even first directional lower endpoint 40611469989/10^30, first lower pivot positive and second spans zero. At 7/4 the approximate first even direction is not reliably the smallest upper direction. No negative upper direction or actual negative spectrum.

## Higher precision trial basis and exact integer elimination

Source experiments/pmw03-precise-prime-five.js commit c136c5fa4ba847921148ab63f953297c30b711f2; raw experiments/results/pmw03-precise-prime-five.json commit c328239fe0cd9a62b42adf401580091e1c3a5d38. Actual V8 execution and exact readbacks. Reproduce: node experiments/pmw03-precise-prime-five.js.

Keep physical parameters, mode counts, rate and tail bounds. Use fixed-point integer Jacobi rotations on the symmetric midpoint upper matrix to SELECT rational basis columns at the 10^30 lattice, rather than floating eigenvectors rounded to 10^-12. The rotations are heuristic; rational invertibility is still rigorously checked via strict diagonal dominance of V*V. Choose exact transformed trial coefficients from midpoint products with the previously selected rational high trials. Reevaluate all actual form, residual and tail entries. Preserve the exact integer lower matrix obtained after symmetric entry-radius subtraction.

Verify this exact integer matrix by fraction-free Bareiss elimination: start with previous pivot 1, replace trailing entries by (pivot*a_ij-a_ik*a_kj)/previousPivot, check every integer division is exact, and require all leading principal minors strictly positive. By Sylvester's criterion this is equivalent to positive definiteness. The reported rational LDL pivot intervals are the ratios of consecutive principal minors, rounded outward to the matrix lattice; this avoids interval elimination propagation but cannot repair a genuinely indefinite lower comparison.

Actual results: at h=33/20 odd passes, even fails with a strictly negative fourth lower-matrix pivot, after three positive pivots. At h=17/10 even fails on third and odd on fourth; at h=7/4 even fails at first and odd at second. The even individual lower endpoints at h=33/20 and 17/10 are positive, about 7.0656e-19 and 3.5098e-20, respectively. At h=33/20 the first exact rational lower matrix diagonal is about 6.6622e-19; the second is about 4.6756e-13 and their off-diagonal entry about 2.4262e-16. These are strongly scale-separated directions, and positive individual bounds do not suffice for positive definiteness. At h=7/4 the refined first even upper form interval [233035970,3627004546]/10^30 is positive, but the lower interval is inconclusive. No negative certified upper direction is reported.

The precise run establishes that the failure is not simply interval LDL widening. It does NOT establish that the actual Schur matrix or restored operator is indefinite: these are sufficient lower comparisons with finite residual penalties. The earlier full h=1.6 candidate remains unchanged. The norm witness for prime 5 is useful independently of this failed positivity test. Raw exact lower matrices, principal minors, basis and trials are preserved. No separate Node/Rust run or independent verification. PMW03 complete.
