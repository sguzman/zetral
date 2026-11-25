# AIR01 — Elementary arithmetic integrity

2026-11-25. Scoped AI lead audit of the corrected P7W03 source, not a complete proof of the original operator normalization or independent human review.

## Provenance and historical defect

The 24-term alternating Machin arctangent partial sum uses j=0,...,23. At positive a<=1 the omitted term is positive and has magnitude a^49/49. An upper allowance a^49/81 is invalid: the actual remainder is at least a^49/49-a^51/51, which at a=1/5 is strictly larger than a^49/81. This is not merely a hypothetical loss of proof. AIR01's independent exact rational reference falsifies both the old atan(1/5) upper endpoint and its resulting pi upper endpoint at the 10^42 lattice. It does not establish that every earlier, coarser interval actually excludes pi; arithmetic width may cover the defect incidentally. Do not use those runs as certificates without corrected validation.

Actual source inspection of 32 experiment files in main:

- 24 terms and correct denominator 49: mbl03-one-cell-lower-certificate; pbci03-positive-complement, -two-mode-complement, -four-mode-complement, -refined-complement; lpe03-localized-prime-complement, -larger-localized-complement; fbc03-full-boundary-complement, -refined-full-boundary, -tail-aware-full-boundary; ecr02-exact-complement-residual; ecr03-matrix-tail-complement, -two-prime-complement, -optimized-residual-complement; dsc02-directional-diagnostics; dsc03-corrected-rate-directional, -two-prime-threshold, -balanced-remainder; pgf03-prime-power-four, -extended-cutoff; rmt03-rational-moment-tail.
- 24 terms and incorrect denominator 81: rmt03-sixth-order-rate; pmw03-prime-five-certificate, -precise-prime-five; rrc02-larger-high-trial; rrc03-extended-rate-residual, -fine-lattice; p7w02-prime-seven-certificate; p7w03-higher-moment-prime, -higher-moment-extended, -adaptive-high-trial.
- Corrected 48 terms and denominator 97: p7w03-adaptive-corrected.

This is a targeted inventory of the spectral Machin implementations, not exhaustive review of every historical source or all primitive routines. Preserve raw historical data. In particular do not claim earlier independent certificates at 1.6, 1.8, 1.85 from affected arithmetic. The corrected h=1.95 candidate, if the analytic chain holds, implies shorter-window positivity by restriction; that is a different assertion.

## Domain and remainder invariants

Fixed-point add/subtract, sign-dependent multiplication, division by intervals excluding zero, and square have exact integer directed-rounding interpretations. For multiplication of sign-definite intervals the optimized formulas select the same extreme corners as full enumeration. For mixed signs the code enumerates corners. Division has the analogous corner property away from zero.

logPoint normalizes a strictly positive exact lattice point by powers of two. Its normalized interval has lower endpoint >=1 and upper <=2+2/Q; r=(x-1)/(x+1) is nonnegative and <1. The first omitted atanh term after 40 terms is r^81/81, and the geometric majorant 2 r^81/[81(1-r²)] bounds the logarithm's positive remainder. The outer log applies monotonicity to endpoint enclosures. No assumption that r<=1/3 exactly is required.

Machin's formula uses a=1/5 and 1/239; 48 terms have next denominator 97. atanPos reduces positive arguments by inversion for lower endpoint >=1 or the pi/4 addition identity when near one. atanNear checks |transformed argument|<=1/2, and uses a symmetric first-omitted-term bound (valid also for negative arguments). expAny is used only on nonnegative inputs; its scaling puts the entire argument in [0,1/2]. Its 30-term degree-30 exp(-x) polynomial has next negative term with denominator 31!, which gives the signed enclosure; squaring and intersecting [0,1] are valid. At extreme x an interval containing zero is allowed for exp(-x) but division by such an interval is not; the actual sinh/cosh calls are at h/4 and do not encounter this. sqrt uses integer floor square root of n Q² with upper endpoint incremented by one.

For trigonometry the integer k selected using approximate pi is not trusted as a correct nearest integer: any integer k yields the exact periodic identity for y=x-2k pi, which is interval-enclosed. For the degree-81 sine and degree-80 cosine polynomial, Taylor through degree 82 and 81 respectively (the extra coefficient is zero) gives a global absolute remainder bound |y|^83/83! and |y|^82/82! since the derivative is bounded by one; no decreasing alternating term assumption is needed. The code's term recurrence and absup enclose precisely these next nonzero absolute terms. The gamma signed remainder uses the existing positive-real digamma expansion; AIR01 does not independently rederive it.

## Actual independent reference tests

Source experiments/air01-primitive-reference.js commit 9b0bc050b35155e7247a8195f43d5df2ef121a93; raw experiments/results/air01-primitive-reference.json commit 502de7cc81854ef446b3f5e2c9a34b114da945a9; both exact remote readbacks. Executed in V8, not a separate Node process. Reference uses gcd-reduced exact fractions with longer independent Taylor sums, not the audited fixed-point arithmetic. 34 checks pass: Machin pi, small and reduced atan, normalized log, exp(-x), sine/cosine and integer square roots. At Q=10^42, the obsolete pi upper is 3141592653589793238462643383279502877615584/Q, below the exact rational reference lower; corrected interval is [3141592653589793238462643383279502884196684,3141592653589793238462643383279502884197616]/Q. Reproduce: node experiments/air01-primitive-reference.js experiments/p7w03-adaptive-corrected.js.

Finite primitive tests support the domain arguments; they are not exhaustive tests over all possible interval inputs. No independent human or formal proof, no separate runtime reproduction. AIR01 complete as a scoped candidate audit.
