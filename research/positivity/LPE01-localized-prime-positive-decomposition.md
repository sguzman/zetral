# LPE01 — Positive localized prime corrections and exact column compression

2026-11-25. AI-assisted candidate deduction, without RH. Uses PBCI01–04 and PTI01. No independent review, new numerical result or originality claim. The projection and positive-block inequalities used here are classical.

## 1. First-prime strip exchange

Let s=log 2, b=log 2/sqrt 2 and s<h<2s, with h<=log 3 so no other prime power acts nontrivially. Put l=h-s and identify the physical Hilbert space with L²(0,l)⊕L²(0,l)⊕L²(l,s), by f -> (f(x),f(x+s),f restricted to the middle strip). Then
    P=b [0 I; I 0] on the paired strips,  P=0 on the middle.
Writing Π_+,Π_- for the orthogonal projections onto equal and opposite strip values, and Π_0 for the middle projection,
    P=b Π_+ - b Π_-,  Z=b I-P=b Π_0+2b Π_- >=0.        (1)
The negative prime contribution is thus not a uniform loss b: the loss is localized to Π_+, while the other components give an exact positive correction relative to the global norm comparison. This decomposition uses disjoint strips; it is not valid when h>=2s.

Reflection x -> h-x interchanges the two strips with the reversal x -> l-x in their coordinate. On the antisymmetric strip subspace, the isometry w -> (w,-w)/sqrt2 has physical parity eta iff w(l-x)=-eta w(x). On the middle strip, physical parity is its ordinary midpoint parity. Therefore the normalized Neumann cosine modes on the middle interval of length 2s-h with parity eta, and normalized paired-strip cosine modes of length l with parity -eta, give an explicit orthonormal basis of ran Z in that sector. Each middle column has positive weight b; each antisymmetric strip-pair column has weight 2b. Every finite subset gives a lower form bound on Z, since (1) is its orthogonal spectral expansion. These piecewise smooth columns have exact overlaps with the physical Neumann basis via product-to-sum integrals and Fourier tails controlled by their variation, as in PBCI02. This would require additional local grids, especially when l is small.

## 2. Exact column compression without a local grid

An alternative that reuses the prime matrix already computed in PBCI02 is as follows. For any bounded positive Z, finite-dimensional isometry W and orthogonal projection E, put
    G_W=W* Z W,       V=E Z W.
Then
    E Z E >= V G_W^+ V*.                              (2)
Indeed Z^(1/2)W G_W^+ W*Z^(1/2) is the orthogonal projection onto ran(Z^(1/2)W), by finite-dimensional singular value decomposition. Compress its inequality <=I by E Z^(1/2). If G_W is invertible use the ordinary inverse. This is the usual positive column/Nystrom lower approximation, with no approximation assumption. If G_W is singular, restrict to its nonzero eigenspace; ker G_W is also in ker ZW.

In the first-prime regime the matrix G_W is positive definite for any finite set of physical Neumann modes of either parity, because Z>=b Π_0, the middle strip has positive length, and a nonzero finite cosine polynomial cannot vanish on a nonempty open interval (analyticity). The same applies to a finite union of low and selected high modes. Its entries are exactly
    G_W(i,j)=b delta_(ij)-P_(ij),
    V(n,j)=b delta_(n,j)-P_(nj), n in the high complement.
This keeps all prime interactions in the low and cross matrices, and makes the retained positive complementary correction evaluable using only the existing exact prime overlap formulas. Choosing W from the low block Q gives E Z W=-E P W, precisely its prime cross columns. Choosing some high modes in W additionally captures the high-to-high structure. The choice need not be optimal.

## 3. Combined variational inverse

Let B_J be the lower model of MBL01, with threshold z, Q the low projection and E=I-Q. In the first-prime regime write
    C=E(B_J-z)E >= G+U D_c U*+ V G_W^-1 V*,
where G is the positive diagonal high comparison of PBCI02 (subtract b and the odd pole loss), U D_c U* retains selected boundary and even pole corrections, and the last term is (2). The low block A and cross R=E B_J Q are unchanged. For arbitrary finite coefficient maps Y_b,Y_p, the exact high inverse penalty satisfies
    R*C^-1 R <=
       (R-UY_b-VY_p)*G^-1(R-UY_b-VY_p)
       +Y_b*D_c^-1Y_b+Y_p*G_W Y_p.                    (3)
This is PBCI01's variational inequality with the block diagonal positive coefficient matrix diag(D_c,G_W^-1). In particular neither numerical inversion of G_W nor an exact optimizer is necessary to verify (3): compute its entries and the quadratic cost with outward intervals. For a rational trial, strict lower Schur positivity is certified exactly as before. Keeping V cannot worsen the exact optimized comparison, since Y_p=0 is always allowed. Numerical tail estimates can nonetheless make a particular finite test worse.

If W=Q, the prime cross contribution is exactly V; in the residual R-VY_p it is V(I-Y_p). Thus choosing Y_p=I cancels the entire prime cross at the cost G_W, while intermediate choices may trade high residual against that penalty. In the more general W case it can cancel parts of the prime cross while retaining positive high corrections. No guarantee of strict positivity follows until the full lower Schur comparison is tested.

## 4. Structural extension to one prime tower

For a general fixed physical length h and prime p, let s_p=log p, r=p^-1/2. The full compressed p-tower is P_p=log p (K_p-I), with K_p on each chain along x modulo s_p the finite matrix (r^|i-j|) from PTI01. For base point y in (0,min(s_p,h)), the chain contains indices j>=0 with y+j s_p<h. Its length m(y) is finite and piecewise constant in y, bounded by ceil(h/s_p) a.e. The fiber P_p is a nonnegative-entry symmetric matrix with diagonal zero. Its operator norm equals its largest eigenvalue by the elementary absolute-value Rayleigh comparison. Choose c_p>=sup_y lambda_max(P_p(y)), for instance the maximal finite row sum or the spectral norm of the longest occurring chain; then Z_p=c_p I-P_p>=0. Each finite chain has a positive spectral expansion of Z_p; tensoring its eigenvectors with any orthonormal basis on the corresponding base interval gives localized positive columns. More directly, (2) applies to Z_p using any finite physical modes and exact prime-power overlaps, without diagonalizing the chain fibers.

Summing these comparisons over the finitely many primes whose shifts act gives a high diagonal loss sum c_p and retained positive corrections from each Z_p. Noncommutation of distinct towers (PTI03) does not invalidate the separate positive lower comparisons. It does not imply that the sum of the individual norm bounds is sharp or that the large-window problem is computationally feasible. This extension is a structural identity, not a new certificate at larger windows.

LPE01 complete as candidate. LPE02 next derive cancellation-aware weighted prime tails for exact column compression, and LPE03 attempt a bounded arithmetic certificate. No RH proof or negative restored eigenvalue.
