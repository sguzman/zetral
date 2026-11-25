# MBL01 — Monotone boundary lower operators and a complete fixed-window strict certificate

2026-11-25. AI-assisted candidate deduction without RH. Uses DNB01–04 and CAC02. Classical monotone form convergence, min-max and Schur complements are not originality claims. No numerical spectrum or independent review.

Fix the physical window and a finite equal-cell partition, of length h per cell. Let D=alpha(sqrt(L_N)) on its cell Neumann basis, with eigenvalues alpha(n pi/h) for n=0,1,... in each cell. By DNB02 the actual restored operator B has common form domain with D and equals D+K_bdy-P+H, with K_bdy bounded and positive. Write K_J=sum_(j<J) U_(r_j) C_(r_j) U_(r_j)*, and
    B_J=D+K_J-P+H.
The pole-free version omits H. The finite-rank K_J increases in form order and converges strongly to K_bdy. All B_J and B are self-adjoint semibounded with compact resolvent, by bounded perturbation of D. Fix a finite constant M>=||K_bdy||+||P||+||H||, obtainable from DNB02's fixed-partition Carleman estimate and the actual prime/pole norm bounds. Thus ||B_J-D||<=M and ||B-D||<=M, independently of J. B_J<=B_(J+1)<=B. The boundary tail is not small in operator norm, so an estimate based on an assumed norm limit would be invalid.

## 1. Finite spectral truncation with a uniform enclosure

Let Q_N project onto the first N+1 Neumann modes in every cell (indices n=0,...,N), and write H_(J,N)=Q_N B_J Q_N on its finite-dimensional range. Similarly H_(infty,N) is the true compressed B. On Q_N^perp the form of any B_J or B is at least d_N=alpha((N+1)pi/h)-M. Its cross coupling to Q_N has operator norm <=M since D is diagonal. Choose a fixed index k<=dim Q_N, and a common upper bound U_k on the k-th Ritz eigenvalue, e.g. the k-th increasing eigenvalue of D plus M. For sufficiently large N, d_N>U_k. Set
    e_N=M²/(d_N-U_k).
By CAC02 the exact Schur complement at any threshold z<=U_k is bounded below by H_(J,N)-z I-e_N I, with the same statement for B. Choose z=lambda_k(H_(J,N))-e_N. The lower matrix then has at most k-1 strictly negative eigenvalues, so B_J has at most k-1 below z. The ordinary Ritz inequality gives the other direction:
    lambda_k(H_(J,N))-e_N <= lambda_k(B_J) <= lambda_k(H_(J,N)).
These include repeated eigenvalues; no strict gap is required. The same enclosure holds for B. Here e_N tends to zero as N->infinity, but only at the conservative scale O(1/log N). This is not an efficient large-window bound.

## 2. An explicit rate-tail estimate on a finite mode space

For r>0 write q=exp(-r h). On the equal-cell partition each row of C_r from DNB02 has absolute sum <=2/(1-q): the diagonal two entries sum to 1/(1-q), and the one-direction off-diagonal geometric sum is at most 1/(1-q). Hence ||C_r||<=2/(1-q). For either endpoint exponential on one cell, each normalized Neumann overlap has absolute value <=sqrt(2/h)/r for n>=1 and <=1/(sqrt(h)r) for n=0 (bound the integral of the absolute exponential by 1/r). Therefore
    ||Q_N U_r||² <= 2(1+2N)/(h r²).
This uses the sum of the two column norms on each cell and disjoint cell supports. It follows that the finite matrix error is positive and
    ||H_(infty,N)-H_(J,N)||
      <= b_(J,N)
      = 4(1+2N)/(h(1-exp(-r_J h))) [1/r_J²+1/(2r_J)].
We used r_j=2j+1/2 and the monotone integral tail bound of DNB03. At fixed N the right side tends to zero as J->infinity. This estimates the rate tail only AFTER projecting onto the finite Neumann space, and does not contradict the nonzero full operator-norm tail.

Combining the two estimates and Weyl's finite matrix inequality gives
    0<=lambda_k(B)-lambda_k(B_J)<= e_N+b_(J,N)
for any N with d_N>U_k and Q_N dimension >=k. First choose N large, then J large. Thus every fixed indexed eigenvalue of B_J increases to the corresponding eigenvalue of B, including multiplicities. This is an elementary quantitative proof in this model; it does not assume operator-norm convergence of the boundary correction. The bound is conservative because M and e_N can be large.

## 3. Completeness for strict positivity at a fixed window

If lambda_1(B)>0, monotone convergence implies lambda_1(B_J)>0 for some finite J. Fix that J and choose N with e_N<lambda_1(B_J). The Ritz matrix then has lambda_min(H_(J,N))>=lambda_1(B_J)>e_N. Equivalently the strict lower spectral test succeeds at finite parameters. Each finite matrix is evaluable from explicit exponential integrals, actual prime-shift overlap integrals, pole integrals and finite digamma values (next MBL02). With rigorous entry enclosures and arbitrarily small finite arithmetic error, its strict margin can eventually be certified. This proves an existence statement for finite certification of any strictly positive fixed-window operator under the stated exact model, not a claim of efficient parameters or actual strict positivity.

If lambda_1(B)<0, its negative direction can be certified by sufficiently accurate finite-mode Rayleigh quotients of the true B: the common D form domain has finite Neumann spans as a form core, and b_(J,N) gives a finite projected upper error for the true form. Equivalently the interval of width e_N+b_(J,N) around finite lower-model Ritz values eventually resolves any strict sign. At exact zero neither strict sign is guaranteed to be decidable by shrinking enclosures. No finite certificate of all windows, or decision procedure for RH, follows. In particular the existence statement may require impractically huge N, J, and arithmetic precision. No actual numerical run in MBL01; MBL02 will develop the finite arithmetic matrices and sharper practical estimates.
