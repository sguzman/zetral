# ECR01 — Exact complementary inverse by certified finite residuals

2026-11-25. AI-assisted candidate deduction without RH, using CAC02, CPC02, DNB02 and FBC02. Completion of squares and graph-core approximation are classical. No novelty claim or independent review.

Fix a physical window and parity, B the actual restored or pole-free operator. DNB02 gives B=D+K-P+H, D diagonal on Neumann modes and the other operators bounded. Let Q project onto finitely many initial modes in the parity, E=I-Q. At a threshold z, put
    A=Q(B-z)Q, R=E B Q, C=E(B-z)E.
Here C is the self-adjoint operator on E H from the compressed form; since E commutes with D, C=D_E+E(K-P+H-z)E on Dom D_E. The low columns are in Dom B. Assume a known positive diagonal lower form G<=C with g_n>=g_*>0, for example PBCI02's high weights with the exact one-prime norm and projected odd pole loss. C is then coercive.

## 1. Residual identity and upper/lower Schur bounds

For any finite high-mode trial synthesis X:QH->Dom C, let F=R-CX. Completing squares gives the exact matrix identity
    R*C^-1R=R*X+X*R-X*CX+F*C^-1F.
It follows that the exact Schur matrix S=A-R*C^-1R satisfies
    A-R*X-X*R+X*CX-F*G^-1F <= S
      <= A-R*X-X*R+X*CX.                           (1)
The right and left bounds can be used for separate inertia conclusions. For positivity one only needs the lower matrix to be positive definite. Unlike PBCI01 or FBC01, no positive boundary/prime high correction is discarded when forming X*CX or F. All exact high-to-high entries are retained; only the unknown inverse on the remaining residual is bounded by G^-1. No approximate numerical solve need be trusted.

For a finite trial support I_X contained in the high modes <=T, the finite entries of R, C and X*CX use exact FBC02 matrix intervals. For each high row n<=M, M>=T, compute F_n=R_n-sum_(j in I_X) B_nj X_j (plus z X_n on a trial row). The finite Gram F*G^-1F is the sum of F_n*F_n/g_n, plus the omitted tail. If epsilon_tail>=||G^-1/2 (I-F_M)F||², subtract epsilon_tail I from the finite lower matrix; no approximate residual is silently omitted.

## 2. Signed exact residual tail

For n>M, the diagonal and threshold contributions vanish since n is outside both Q and I_X. For each low column k, let c_j=delta_(j,k)-X_(j,k) on the union of the low and trial high supports, taking X=0 on low modes. The entire residual row is
    F_(n,k)=sum_j c_j (K_nj-P_nj+H_nj).
Use FBC02 section 4 with the boundary weights c_j and the prime weights a_j=-c_j. The two leading weighted sums are now the SAME signed scalar sum_j nu_j c_j up to sign. Thus one linear constraint on each trial column cancels both n^-1 asymptotic coefficients at once, even though the phases differ. This observation does not assume cancellation of distinct phase functions. The signed second coefficient sums of boundary and prime terms are still distinct. Combine the pole exactly through the hyperbolic overlaps; it has n^-2 decay. The explicit bound of FBC02/LPE02 gives a finite weighted tail for each column, and their sum bounds the residual tail Gram. Trial selection may enforce or penalize the common leading scalar sum, but any residual nonzero after rational rounding must be included.

For multiple prime-power shifts, the high off-diagonal Wronskian formula for equal parity continues to hold whenever 0<s<h; the overlap strip need not be disjoint from its translate for the ENTRY identity. The norm b bound is special to disjoint strips. Replace it by a valid norm bound for the full prime sum (e.g. the tower fiber bound of LPE01 or triangle inequality), and sum the signed prime remainder constants over shifts. The common leading weighted coefficient again factors out of each prime phase. No large-window efficiency guarantee follows.

## 3. Convergence of the certified residual comparison

Finite Neumann spans in E H form an operator graph core for D_E (coordinate truncation converges in its graph norm) and hence for C, since the perturbation is bounded. For each of the finitely many columns of X_*=C^-1R, truncate its Neumann coordinates at T. These finite trials converge to X_* in the C graph norm, so F=R-CX_T->0 in operator norm on the finite source space. Moreover ||F*G^-1F||<=g_*^-1||F||²->0. The two matrices of (1) converge in norm to S. For each fixed trial, the explicit coefficient tail tends to zero as M->infinity. The entry enclosures from FBC02 converge for fixed finite indices as the rate cutoff and arithmetic precision increase; rational trial approximations can be made arbitrarily accurate for fixed finite support. Therefore if C is coercive and S strictly positive, this residual certification scheme can eventually certify it with finite parameters and sufficient arithmetic precision. This is not a claim of practical runtime, of strict positivity itself, or of a uniform result as the window increases.

Inertia transfer follows from CAC02: the positive C block and bounded Schur shear identify the negative and zero counts with those of S. If the exact finite upper matrix in (1) has a negative direction, the actual S has a negative direction; this would be a true negative certificate provided every entry and error is rigorously bounded. Failed lower matrices alone have no such implication. ECR02 will attempt a bounded numerical positive test, with all low/high arithmetic preserved. No numerical experiment in ECR01.
