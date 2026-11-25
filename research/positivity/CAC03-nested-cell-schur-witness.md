# CAC03 — Executed nested-cell diagnostic of the crude Schur certificate

2026-11-25. AI-assisted candidate computation, not independently reviewed. Actual V8 execution and replay, source experiments/cac03-cell-schur-witness.js commit a5d850693d9146f7232336af28cee9ceb0109ded; full raw integer output with rational witness vectors in experiments/results/cac03-cell-schur-witness.json commit c311d457132f12415a28db37415c33e2f436c91b. Both exact readbacks. Reproduce with node experiments/cac03-cell-schur-witness.js. Shell check this turn found Node.js v22 path, no rustc/cargo on PATH; separate Node process replay not performed. No zero ordinates used.

## 1. Exact consistent nested-cell matrices

Set a=1/2, I=(-1/2,1/2), B=A, m equal coarse cells and 2m equal fine cells. Let V_m,V_(2m) be their normalized indicator syntheses. For a uniform partition of k cells, h=1/k, the exact restored first moment H_k is symmetric Toeplitz, with entries indexed by cell separation r=0,...,k-1. The singularity split of BFA03 on this length-one window gives
    B=C I+M-P+convolution w,   w(s)=2 cosh(s/2)-j(|s|), |s|<=1,
    C=-gamma-log 2-log pi.
Here M is the finite-range singular difference operator, and P is the actual prime shift with coefficient b=log 2/sqrt 2. The normalized cell entries of C I+M are
    d_0=C+1+log k,
    d_r=-0.5[(r+1)log(r+1)-2r log r+(r-1)log(r-1)], r>=1,
with 0 log 0=0. The diagonal follows by integrating the cell's two logarithmic endpoint singularities. The off-diagonal follows by integrating -1/(2|x-y|) over the two distinct cells (the adjacent-cell corner singularity is integrable). The prime term contributes exactly
    -b[(1-|r-k log 2|)_++(1-|r+k log 2|)_+].
For the smooth kernel w on positive s, let W(s)=int_0^s (s-u)w(u)du. Its normalized cell entries are 2 W(h)/h on the diagonal and
    [W((r+1)h)-2W(rh)+W((r-1)h)]/h
off diagonal. Integrate the degree-30 Taylor polynomial of w exactly with rational interval arithmetic. The uniform discarded j tail is <=5*2^-30 by BFA03, and the discarded cosh tail is <10^-30 (factorial series from degree 32). The resulting normalized entry error is at most h times this uniform kernel error. The inherited gamma enclosure, logarithm and Machin pi series and all arithmetic use scale 10^18 outward-rounded integer intervals. No Fourier cutoff or numerical singular quadrature enters these first moments.

The fine cell space decomposes orthogonally into the coarse space and the within-cell contrast space. Their synthesis matrices in fine coordinates are U and Z, respectively, with columns (e_(2i)+e_(2i+1))/sqrt 2 and (e_(2i)-e_(2i+1))/sqrt 2. Thus the exact coarse H=U*H_(2m)U and the contrast coupling G=Z*H_(2m)U use only half-sums and half-differences of four fine entries; no square root arithmetic is needed. The contrast functions belong to E=V_m^perp, so for the full R=(I-Q_m)BV_m, one has R*R>=G*G. The contrast calculation gives a LOWER bound on residual energy, not an upper bound.

## 2. Executed falsification of a sufficient test

Let d be the exact rational lower endpoint of CAC01's certified complement bound at the chosen m. CAC02's cheap sufficient Schur lower matrix is L=H-d^-1 R*R. Therefore L<=H-d^-1 G*G. A negative Rayleigh quotient of the latter rigorously proves that THIS sufficient test cannot succeed for that d and partition. It does not prove that the true Schur matrix H-R*D^-1 R is negative, because L is merely its lower bound.

The program uses ordinary floating-point Jacobi rotations only to select a candidate vector for H-d^-1 G*G, rounds its components to rational multiples of 10^-9, then evaluates the Rayleigh quotient and norm with outward-rounded integer interval arithmetic. The choice of vector does not affect the validity of the exact inequality. Full rational weights and interval endpoints are preserved in the raw JSON. Display below deliberately rounds the upper endpoint outward:

m | certified d lower | upper bound on quotient of L
---|---:|---:
24 | 0.004558698520004858 | -114.1669
32 | 0.292280061884044341 | -0.17756
64 | 0.985465130109381816 | -0.009479
128 | 1.678621782585675153 | -0.001232

All four certified witness upper endpoints are negative. Even the 128-cell Ritz quotient of the selected vector is positive, in [0.001364397531352864,0.001372004393839975], but its fine contrast residual squared per unit norm is at least 0.004372265829693454, large enough to invalidate the cheap lower certificate. No full second-moment matrix or complement inverse is claimed. The use of nested cells is consistent for each m and does not combine a two-cell residual with a larger-partition coercivity estimate. The diagnostic is useful because it rules out this sufficient test without having to enclose all of R*R from above.

Fresh literature search: https://zenodo.org/records/21906620 reports validated multiscale Feshbach–Schur certificates at c=14,17,19 for related semilocal operators; arXiv:2608.24827 reports positivity for support length 1.6 in its stated normalization; arXiv:2607.02828 describes an archimedean truncation error band. Search excerpts only, not independent validation of those results; no claim of general Schur novelty, improved positivity range, or RH proof. CAC03 complete as a negative diagnostic of the selected sufficient method.
