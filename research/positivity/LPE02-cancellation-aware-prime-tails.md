# LPE02 — Cancellation-aware weighted tails for positive prime columns

2026-11-25. AI-assisted candidate deduction without RH. Uses LPE01 and PBCI02–03. No originality claim, independent review, or numerical result in this note.

## Exact high columns and finite penalty

Choose W as a finite collection of physical Neumann modes in the current parity, with indices j in a set J_p. Let K be the largest index among the low block Q and W, and choose M>K. All high rows n in E and n<=M use
    V_nj = b delta_(nj)-P_nj,
    G_W(j,k)=b delta_(jk)-P_jk.
Use the exact overlap formulas PBCI02. The complement lower matrix retains V G_W^-1 V* and the selected boundary/pole columns U D_c U*. The finite objective for arbitrary trial columns is
    Y_b* D_c^-1 Y_b + Y_p* G_W Y_p
    + (R_M-U_M Y_b-V_M Y_p)* G_M^-1(R_M-U_M Y_b-V_M Y_p).
No approximate inversion of G_W is needed for verification. Numerical minimization may use the positive definite finite coefficient Gram of this cost. In particular coordinate descent updates involve the whole G_W row, not just its diagonal; but any trial output is admissible and only affects sharpness. For outward arithmetic enclose the entire quadratic penalty including off-diagonal terms.

## Cancellation of the n^-1 leading prime coefficient

For n>M, the b delta term is zero for all selected j. For a fixed low column k, combine its actual -P contribution with the subtraction of V Y_p. Define a_j=Y_p(j,k) on W and subtract one from a_k (add the index k if it was not in W). The entire residual prime coefficient is then
    sum_(j in W union {k}) a_j P_nj.
The exact Wronskian formula, with nu_0=1, nu_j=sqrt2 otherwise and theta_j=pi j s/h, gives
    P_nj = (2 b sqrt2/pi) nu_j
                  [j sin(theta_j)-n sin(theta_n)]/(n²-j²).
Let A=sum_j a_j nu_j. Since n/(n²-j²)=1/n+j²/[n(n²-j²)], this yields
    sum_j a_j P_nj = -(2 b sqrt2/pi) A sin(theta_n)/n + remainder_n,
    |remainder_n| <= C_p/n²,
    C_p=(2 b sqrt2/pi) [1-(K/(M+1))²]^-1
                  sum_j |a_j| nu_j [j+j²/(M+1)].
Thus the n^-1 coefficient is bounded by C_1=(2 b sqrt2/pi)|A|, rather than by an uncombined triangle estimate over every cross column. If A vanishes, the residual prime tail decays like n^-2, despite the individual shifted modes having jumps. This is a useful cancellation criterion; an arbitrary minimizer need not satisfy it.

For the smooth boundary/pole residual after subtracting U Y_b, use the combined coefficient majorant C_s of PBCI02 (or its scaled equivalent used in PBCI03). Its bound is C_s/n². Set C_2=C_s+C_p. The total high coefficient is bounded by C_1/n+C_2/n². In a single parity the elementary integral bound
    sum_(n>M, given parity) n^-p <= 1/[2(p-1)(M-1)^(p-1)]
holds for M>1 and p>1: integrate the decreasing function on disjoint length-two intervals immediately before each included n. For positive increasing diagonal high comparison weights g_n, the resulting certified squared weighted tail per column is at most
    (1/g_(M+1)) [
        C_1²/(2(M-1))
       +C_1 C_2/(2(M-1)²)
       +C_2²/(6(M-1)³) ].
The sum of these column bounds controls the operator-norm squared of the tail Gram by its trace. This bound also handles a trial Y_p=0; it uses the actual signed combination before taking absolute values. If the leading coefficient cancels, the certified tail is O(M^-3/g_(M+1)) for fixed indices and rate columns. No uniform estimate as W, J or h grow is asserted.

The same algebra applies to each prime-power shift in a finite tower: use its own theta and weight, bound the sum of the leading amplitudes by triangle inequality (different shifts have different phases), and combine the smooth coefficient constants. That extension requires a valid norm loss and positive comparison for each tower as in LPE01, not the disjoint-strip norm for larger windows.

## Verification protocol

For each fixed h, parity, J, Q, W and M, compute all actual finite prime entries including the b delta in V on selected high rows. The low block and cross retain the full lower model. Compute rational trial coefficients by any finite solver, then independently enclose the complete penalty, finite residual Gram, and the cancellation-aware tail above. Subtract the outward tail upper endpoint times identity from the lower Schur matrix. Use the exact midpoint-minus-radius row-sum lower matrix and interval LDL of PBCI03. Strictly positive pivots and high weights certify the full restored operator on the fixed window; failures remain inconclusive. Neither a tiny finite optimization residual nor a positive low Ritz matrix is enough.

LPE02 complete as candidate. LPE03 next execute this test in both parity sectors with W selected from a small union of low and high physical modes, preserving raw trial coefficients and results. No RH proof, actual negative restored eigenvalue or priority claim.
