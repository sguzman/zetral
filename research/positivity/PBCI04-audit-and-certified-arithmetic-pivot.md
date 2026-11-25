# PBCI04 — Audit of the Woodbury benchmark and next certification step

2026-11-25. Scoped AI audit and numerical follow-up. No independent human/formal verification, priority claim, actual off-line zero, or RH proof.

## Audit findings

The PBCI01 variational inequality is valid when the high diagonal comparison G is strictly positive and the selected boundary term is factored as U U*. Completing the square gives
\[
R^*(G+UU^*)^{-1}R\le (R-UY)^*G^{-1}(R-UY)+Y^*Y
\]
for every finite Y. Thus a rational approximate minimizer is safe after its residual and tail are rigorously bounded. The low block and cross block must retain all terms in the finite lower operator; only unused positive high-high terms may be discarded.

The PBCI02 one-cell parity factor d_r=2(1-eta exp(-rh)) agrees with MBL02's exact rank-one rate formula. The first-shift overlap formulas were checked independently against direct quadrature for representative equal-parity pairs, including the constant mode; discrepancies were below 1e-16 in float64. This is a consistency check, not proof of the formulas. Reflection symmetry makes opposite-parity entries vanish.

For log(2)<h<log(3), only the log(2) shift is active and the positive and negative translated strips are disjoint. The norm of their two-way exchange is exactly b=log(2)/sqrt(2), regardless of the positive strip length. In particular, this norm does not tend to zero as h decreases to log(2) from above, although the operator is zero at h=log(2) itself. This discontinuity in operator norm is real and explains why the prime loss in G cannot be made small by taking h just above the first threshold.

The PBCI03 finite Schur and tail formulas keep the prime n^-1 coefficient tail separate from the boundary/pole n^-2 tail. The prime-inclusive even sector at h=0.6940001806 remains negative after this tail, so it is a failed sufficient comparison only. The prime-free h=1/2 candidate has positive even and odd margins after the stated tails, but float64 evaluation is not enough to establish strict signs rigorously. It has not yet improved the accepted or previously reported rigorous range: MBL03's exact-integer certificates stop at h=7/16, and the h=1/2 row there is inconclusive.

## Next direction

Prioritize certifying the prime-free h=1/2 candidate before scanning more prime-inclusive lengths. Replace float constants by rational outward intervals, use a rational approximate Woodbury coefficient matrix Y, enclose the finite residual Gram entries, and certify the resulting finite Schur lower matrix by rational LDL. Keep the analytic n^-2 tail and the odd projected-pole loss; they are already small in the current diagnostic. A certified result would extend this construction's range, but would not be a record claim: DNB04 already records reports of larger positivity ranges in prior work (including arXiv:2608.24827), at abstract/excerpt review level.

For prime-inclusive h>log(2), the exact exchange norm stays b until another shift enters. Any improvement must therefore exploit the exact prime block in the low/high Schur calculation rather than shrink its global norm estimate. The current h just above log(2) test gives a quantitative obstruction for the chosen comparison, not for the actual operator.
