# DSC01 — Rational congruence and directional Schur error accounting

2026-11-25. AI-assisted candidate deduction, no RH assumption, independent review or priority claim. Uses ECR01–04. Classical congruence, interval Gram and residual inequalities.

Fix the exact low Schur matrix S=A-R*C^-1 R, with positive complementary operator C>=G>0. For finite trial X define
    U=A-R*X-X*R+X*CX, F=R-CX,
so U-F*G^-1 F<=S<=U. For any invertible real rational matrix V on the low coordinate space, set A'=V*AV, R'=RV, X'=XV and F'=FV. Then exactly
    U'=A'-R'^*X'-X'^*R'+X'^*CX'=V*UV,
    U'-F'^*G^-1F'<=V*SV<=U'.
Strict positivity of the left comparison implies S>0 by Sylvester inertia, without an orthogonality or normalization assumption on V. Conversely, for a nonzero rational vector v, a strictly negative certified v*Uv would imply v*Sv<0 and hence a genuine negative direction of B via the exact Schur complement. An upper bound that merely contains zero or is positive does not prove positivity. All finite interval comparisons must be certified, not inferred from floating eigenvalues.

## 1. Form transformed columns before enclosing matrix products

Let L be the low Neumann index set and T the finite high trial set. Define the rational coefficient rows c_j of the actual test functions
    u_i=sum_(k in L) V_(ki) e_k - sum_(j in T) X'_(ji) e_j.
Thus c_j=V_j on L and c_j=-X'_j on T. At real threshold z, the exact form Gram is
    U'_(il)=<u_i,(B-z)u_l>.
For each high row n, the residual F'_(ni)=<e_n,(B-z)u_i>. In particular the high diagonal and threshold terms vanish outside L union T; use the exact signed c_j (not columnwise absolute values before transformation) in ECR03's leading S0, second V2 and third-order remainder. This is algebraically the same congruence as above but can sharply improve the enclosure because signed cancellations are computed before the tail estimate. If original X,V are exact rationals then X' is exact rational; alternatively choose any rational X' independently, preserving the identity and avoiding rounding a product of two interval matrices. Only V must be invertible.

For the finite Gram U', exploit diagonal D, bounded positive boundary K, exact prime shifts and rank-two pole terms separately. In a single parity the pole contribution is a signed rank-one outer product of the actual test hyperbolic overlaps. In K's rate sum, each summand is a positive rank-one Gram whose coefficients are the signed sums of mode overlaps; a direct interval evaluation of these sums may outperform separately enclosing all matrix entries and then multiplying. Retain all infinite rate tails using a proved scalar or matrix enclosure, not an assumed small operator-norm remainder.

## 2. Directional tail and entry error

Compute the finite residual Gram G_M'=sum_(n high,n<=M) F'_n* F'_n/g_n. With S0',V2' obtained from c, ECR03 gives
    tail <= t1 S0'^*S0'+t2 V2'^*V2'+t3 I,
where t1,t2 are the explicit positive factors and t3 is proportional to sum_i C3_i². This must be reevaluated using transformed coefficients; congruence of an old scalar t3 I can be much less accurate. Optionally choose arbitrary positive weights d_i: weighted Cauchy gives |sum_i E_ni v_i|² <= (sum_i C3_i²/d_i)(sum_i d_i |v_i|²)/n^6, hence replace t3 I by
    [2 sum_i C3_i²/d_i /(5(M-1)^5 g_(M+1))] diag(d_i)
for the same 2,4,4 splitting. Exact positive rational d_i are admissible. This can allocate the remainder according to direction-specific magnitudes. It does not remove the rank-one contributions.

An interval symmetric matrix enclosure H_ij in [l_ij,u_ij] admits a sharper diagonal error than a uniform row maximum: choose exact rational symmetric midpoint matrix m and radii r_ij>=|H_ij-m_ij|. Then
    -diag(sum_j r_ij) <= H-m <= diag(sum_j r_ij)
by 2|v_i v_j|<=|v_i|²+|v_j|². Subtract the actual per-row radius sum, not necessarily its maximum over all rows. More generally with exact positive weights w_i, use 2|v_i v_j|<= (w_j/w_i)|v_i|²+(w_i/w_j)|v_j|² to obtain row sums sum_j r_ij w_j/w_i. This is a valid Loewner enclosure even when the midpoint is indefinite. Any strictly positive interval LDL pivots of the rational lower comparison suffice. Exact rational invertibility of V can be checked by elimination; numerical eigenvectors merely suggest a basis.

## 3. Diagnostics before claiming improvement

For a chosen exact rational low direction v, compute (i) its actual upper Schur Rayleigh bound U_v, (ii) the finite weighted residual penalty, (iii) leading, second and remainder tail contributions separately, (iv) interval widths. In a transformed basis, recompute each such scalar directly. The actual directional Schur quotient lies between the lower endpoint of U_v minus the outward total penalty and the upper endpoint of U_v; divide by the exact squared low norm only if reporting normalized values. A negative lower endpoint is inconclusive. An actual upper endpoint <0 would be a qualitatively different result and must trigger independent verification rather than routine continuation.

DSC02 should use the existing exact ECR trial matrices and rational near-null directions (e.g. approximate LDL elimination columns or eigenvectors with rationalized coordinates), preserve raw directional intervals and identify which error dominates at h>1. No numerical execution or new positivity claim in DSC01.
