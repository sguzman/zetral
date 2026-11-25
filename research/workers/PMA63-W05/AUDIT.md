# PMA63-W05 — weighted interval-radius and exact pivot audit

Status: completed scoped analytic audit; ready for lead review.

Baseline: `dc9eda3c9b3cd2af07ac9d3947662e1f6c71a14d` (LXIII main after odd h=239/100 comparison). Scope: the symmetric interval-radius reduction and Bareiss principal-minor loop in `experiments/lpa01-log11-regimes.js`, lines 476–501. No upstream matrix-entry construction is audited.

## Weighted radius gives a Loewner lower bound

Let the symmetric matrix to be certified be (A). Suppose the common intersection of the two interval enclosures for each symmetric entry ((i,j)) is ([L_{ij},U_{ij}]), with (L_{ij}=L_{ji}), (U_{ij}=U_{ji}), and (A_{ij}\in[L_{ij},U_{ij}]). The code selects a midpoint (m_{ij}) of that common interval and an integer radius (r_{ij}\ge\max(m_{ij}-L_{ij},U_{ij}-m_{ij})) in the fixed-point lattice. Thus (r_{ij}=r_{ji}\ge0) and (|A_{ij}-m_{ij}|\le r_{ij}).

For any positive diagonal weights (d_i>0), define (e_i=\lceil\sum_j r_{ij}d_j/d_i\rceil). The quadratic error obeys

\[
|x^T(A-M)x|\le\sum_{i,j}r_{ij}|x_i x_j|
\le\sum_i x_i^2\sum_j r_{ij}\frac{d_j}{d_i}
\le\sum_i e_i x_i^2,
\]

where the middle inequality follows by applying (2|x_ix_j|\le(d_j/d_i)x_i^2+(d_i/d_j)x_j^2) and using symmetry (r_{ij}=r_{ji}). Therefore

\[
A\succeq M-\operatorname{diag}(e_i).
\]

In the source, `radiusWeights` are positive integers (or the guarded all-ones fallback). `errors[i]` sums the upward-rounded integer quotients `radii[i][j] * radiusWeights[j] / radiusWeights[i]`; this is at least the upward-rounded whole row sum (e_i). The matrix `G` subtracts that nonnegative integer from the midpoint diagonal. Consequently `G` is an exact lattice matrix and is a valid Loewner lower bound, conditional on the entry intervals and symmetry assumptions above. The selected weight formula (10^{80}/\lfloor\sqrt{E_i}\rfloor) is not required by the proof: any positive weights work; this choice only affects tightness.

The common interval intersection step is sound only if both orientations enclose the same symmetric entry. Given that premise, intersecting the intervals preserves the true value and can only reduce the chosen radius. The subsequent symmetry check verifies that the code did not get disjoint intervals; it does not independently prove upstream interval correctness.

## Bareiss pivots and Sylvester's criterion

For an exact symmetric integer matrix (G), fraction-free Bareiss elimination without row swaps updates each trailing entry by

\[
B^{(k+1)}_{ij}=\frac{B^{(k)}_{kk}B^{(k)}_{ij}-B^{(k)}_{ik}B^{(k)}_{kj}}{B^{(k-1)}_{k-1,k-1}},
\]

with initial denominator 1. When the divisions are exact and no earlier pivot is zero, the successive diagonal pivots (p_k=B^{(k)}_{kk}) are the leading principal determinants Δ_k of (G). This is the standard Bareiss determinant identity, also derivable by the Schur complement determinant formula at each step. The loop checks exact divisibility, aborts on any (p_k\le0), and records each pivot. Hence a completed loop with all (p_k>0) verifies Δ_k>0 for every k. By Sylvester's criterion, (G\succ0), and therefore (A\succ0) under the interval premises.

This deduction requires the loop to reach `k===n`; its `certified` flag also requires every pivot positive. A failed pivot proves no negative eigenvalue; it only means this lower-bound certificate did not pass. The exported pivot interval `floor(p/prev),ceil(p/prev)` is diagnostic and is not what establishes the positivity criterion.

## Limits

This is a proof audit of the stated reduction, not an independent run of the generator or a check of the Bareiss implementation against a second program. It assumes exact integer arithmetic (the source uses JavaScript `BigInt`), the exact divisions tested in the loop, prior certified entry enclosures, and true matrix symmetry. No campaign comparison, operator construction, negative spectrum or RH claim follows from this scoped lemma alone.
