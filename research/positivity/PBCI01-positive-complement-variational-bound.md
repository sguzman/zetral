# PBCI01 — Positive complementary rank corrections without infinite inverses

2026-11-25. AI-assisted candidate deduction, no RH assumption. Uses MBL01–04 and CAC02. The variational identity below is classical Woodbury/completion of squares, not a novelty claim. No numerical certificate or independent review.

Fix a finite lower operator B_J=D+K_J-P+H as in MBL01. Work in one parity sector or in the full space. Let Q project onto a finite Neumann block, E=I-Q, and threshold z. Write A=Q(B_J-z)Q, R=E B_J Q, and the complementary closed form C=E(B_J-z)E. Assume a diagonal positive comparison G on the high modes, with entries g_n>0 bounded uniformly away from zero. For example subtract ||P|| and the full negative pole norm from D-z, then replace alpha by its lower weights of MBL02; the even pole has no negative part. Select any positive finite-rank portion of E K_J E (and optionally the even pole) represented by U U*, where U maps from a finite-dimensional Euclidean space into E H. The unused positive terms may be dropped, so C>=G+UU*. The off-diagonal R and low block A still include ALL terms of B_J, not just the selected high corrections.

By the positive inverse comparison the exact Schur complement satisfies
    S=A-R*C^-1 R >= A-R*(G+UU*)^-1 R.
For arbitrary coefficient map Y from the low space to the column space of U,
    R*(G+UU*)^-1 R <= (R-UY)*G^-1(R-UY)+Y*Y.       (1)
To prove this, complete the square for each low coefficient vector v. The minimum over y of ||G^-1/2(Rv-Uy)||²+||y||² is attained at y=(I+U*G^-1U)^-1 U*G^-1 Rv, and equals <Rv,(G+UU*)^-1 Rv> by the Woodbury identity, which follows by multiplication (or the coercive form equation). Thus (1) holds as a matrix inequality for every Y, without any approximate inverse being asserted exact. In particular a finite approximate minimizer is safe even with rounding error if its entries are treated as exact rational numbers and all subsequent bounds are outward enclosed.

Let F_M select the first M high modes and set R_M=F_M R, U_M=F_M U. One can choose Y=(I+U_M*G_M^-1 U_M)^-1 U_M*G_M^-1 R_M or any numerical approximation thereof; the finite matrix is positive definite. For the omitted modes,
    ||G^-1/2 (I-F_M)(R-UY)|| <= tau_R+tau_U ||Y||,
where tau_R and tau_U bound the corresponding weighted tails separately. Consequently the fully computable lower Schur comparison is
    S >= A-Y*Y-(R_M-U_M Y)*G_M^-1(R_M-U_M Y)
             -(tau_R+tau_U||Y||)^2 I.                (2)
All low and finite high entries come from MBL02. The tail inequality can be sharpened columnwise using a Gram upper matrix rather than its operator norm. No norm limit of K_J in J is needed; first retain a fixed finite J. Strict positivity of (2) implies strict positivity of the entire actual B at this threshold by the coercive complement and bounded Schur shear. A failed test is inconclusive. The number of negative eigenvalues of the lower Schur comparison is only an upper bound on the actual negative count, not evidence of negative spectrum.

## Explicit weighted tail strategy

For a fixed one-cell interval h and finite J, the retained boundary overlap at high Neumann index n obeys |a_n(r)| <= sqrt(2/h) r(1+q)/omega_n², q=exp(-rh), omega_n=n pi/h. The parity column is sqrt(2/(1-eta q)) a_n, eta=(-1)^n. Thus for each fixed rate column the high coefficient is O(n^-2), and its weighted squared tail after M is at most its explicit squared coefficient constant divided by 3 M³ g_(M+1), when the lower weights increase. Pole vectors have the same decay by the derivative formula of MBL02. The rank-one boundary cross columns are sums of those same high columns times their low overlaps. They may be combined before estimating the tail, including the subtraction UY. This is sharper than bounding R and U separately when the coefficients cancel.

For a prime shift applied to a fixed low Neumann mode, the physical overlap is a piecewise smooth function on one or more clipped intervals. Its high cosine coefficient is bounded by sqrt(2/h) times its total variation including interior jumps, divided by omega_n, by integration by parts with sin at the physical endpoints zero. Thus the weighted squared tail is at most the squared explicit constant divided by M g_(M+1). The same bound applies to a finite sum of shifts by triangle inequality. For a finite low block, summing the squared column tail bounds controls the operator norm squared via the Hilbert–Schmidt norm. This yields a convergent tail for each fixed J, low block and Y. It does not claim a uniform J limit or practical complexity near large windows.

In the limit M->infinity with fixed J, Q and selected U, the finite variational minimizers converge to the exact minimizer (the finite weighted Gram entries converge in norm and the inverse has eigenvalues <=1). The tail of the resulting residual tends to zero. This ensures that the certified approximation can approach the selected comparison, but that comparison may remain too conservative because G discarded negative/positive structure. PBCI02 will specialize the bounds to parity and the actual first prime shift, and test whether the improvement suffices. No numerical run or RH proof.
