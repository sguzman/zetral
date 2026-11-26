# PSD premise for the seven rank terms

The all-allocation obstruction's zero floor for a negative interval lower
endpoint needs the exact rank terms to be positive semidefinite. This follows
structurally from the committed generator, conditional on its positive guard:

1. `tc01-post-log11-em.js` defines `rank(f,r)` entrywise as
   `f * r[i] * r[j]` and forms the seven components from this helper.
2. Its coefficients `f1` through `f7` are positive multiples of either
   `CL^2` or `1`, divided by positive powers of `m` and the high-weight guard
   `gm=g(M+1)`. The selected shares and `m=M+1` are positive; the exact stored
   `CL` interval has positive endpoints. The Campaign LXX high-guard artifact
   gives a positive even guard at the first included mode, and the inherited
   monotonicity argument covers `M+1`.
3. Therefore each untransformed component is exactly `f*r*r^T` with `f>0`.
   For the four-direction integer matrix `B`, the transformed component is
   `B(f*r*r^T)B^T = f*(B*r)*(B*r)^T`, hence is positive semidefinite.

This verifies the PSD premise at the source-form level, rather than from the
stored entrywise interval boxes. An attempted interval-box test did not prove
PSD: independent endpoint rounding perturbs these rank-one, singular matrices,
and their midpoint matrices have negative small pivots. That is a limitation
of the interval enclosure as a PSD certificate, not a counterexample to the
exact Gram factorization.

The result remains conditional on the exact positivity of the high guard and
does not audit the rest of the all-allocation obstruction's interval
arithmetic. See the companion arithmetic replay in this directory for the
integer square-root and Cauchy-bound calculations.
