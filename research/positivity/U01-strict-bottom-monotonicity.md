# U01 — Strict spectral-bottom monotonicity by translation

2026-11-25. Unconditional candidate deduction; no RH assumed. Directly retrieved Suzuki arXiv:2606.09096v4 (https://arxiv.org/html/2606.09096v4), Theorem 1.1, Corollary 1.2, (1.7), Theorems 1.3 and 1.4, and introductory Weil autocorrelation form. The source gives a semibounded self-adjoint A_a with discrete spectrum accumulating only at +infinity, finite multiplicity, compact-test form core, continuity of bottom lambda_a and small-window positivity. The Weil criterion equates global compact-test nonnegativity to RH. These are imported results. The following translation argument is an internal deduction; no priority claim.

## Strict monotonicity

Let 0<b<a. Write q_b,q_a for the closed forms. For |t|<a-b, define J_t f as the zero extension of f shifted by t into (-a,a). This is an L2 isometry. For compact smooth f,g in (-b,b), the autocorrelation f*tilde(g) is invariant under simultaneous translation, so q_a(J_t f,J_t g)=q_b(f,g). Choose a common constant c with c+lambda_a,c+lambda_b>0. The shifted form norms q+c||.||^2 agree on the core, so completion extends J_t isometrically to the form domain. In particular equality holds for a normalized bottom eigenvector f of A_b, not just for a test function.

Variationally lambda_a<=lambda_b. Suppose equality. Every J_t f has unit norm and attains the bottom of q_a, so by the spectral theorem belongs to E=ker(A_a-lambda_a I), a finite-dimensional space. But any finite set of distinct translates of a nonzero compactly supported L2 function is linearly independent: if sum c_j J_(t_j) f=0, Fourier transform on the real line gives F[f](z) sum c_j exp(izt_j)=0. F[f] is entire and not identically zero; the exponential polynomial vanishes on a real interval and hence identically. Differentiating at zero through order k-1 gives an invertible Vandermonde matrix for the k distinct shifts, so all c_j vanish. Choose dim(E)+1 distinct shifts in (-(a-b),a-b). Contradiction.

Therefore lambda_a<lambda_b for every a>b>0. No differentiability, positivity-improving semigroup, simplicity of the bottom, or RH is needed. The argument does not prove strict decrease of every indexed higher eigenvalue.

## Consequence for the positivity transition

By imported continuity and small-a positivity, if RH fails then a compact negative test occurs in some finite window, and the bottom vanishes at exactly one a_*>0. For a<a_* it is strictly positive, for a>a_* strictly negative. If RH holds, global nonnegativity and strict decrease imply lambda_a>0 for every finite a (a zero would force a later negative value). Thus RH iff no finite critical window. The nondegeneracy criterion itself is Yoshida's known result, not a novelty claim. The additional strict comparison rules out a zero plateau and holds whether or not RH is true.

## Quantitative finite-translate inequality

Fix a>b, let m=dim E_a (the bottom eigenspace of A_a), and let g_a>0 be the spectral gap from lambda_a to the next *distinct* eigenvalue. Pick k=m+1 distinct shifts t_j in the available margin and put v_j=J_(t_j)f with f a normalized bottom eigenvector at b. Define V:C^k->L2(-a,a) by Vc=sum c_j v_j and G=V*V. The translate independence above implies G>0. Let P project onto E_a. By rank(PV)<=m<k there is a unit c in ker(PV). Then

    tr(V*(I-P)V)=sum_j ||(I-P)v_j||^2
        >= ||(I-P)Vc||^2 = ||Vc||^2 >= lambda_min(G).

By the spectral gap, q_a(v_j)-lambda_a >= g_a||(I-P)v_j||^2. Sum these inequalities, using q_a(v_j)=lambda_b, to obtain

    lambda_b-lambda_a >= g_a lambda_min(G)/(m+1) > 0.

The trace bound follows because V*(I-P)V is positive and its trace dominates any unit-vector quadratic value. This is an exact inequality for the actual form but is not an effective arithmetic lower bound: g_a, m and the minimizing f are unknown, and closely spaced translates may give a very small Gram eigenvalue. It controls decrease, not positivity. U02 will examine usable bounds and their direction.

## Prior art and integrity

Suzuki explicitly attributes the nondegeneracy characterization to Yoshida; the targeted web search also returned Bombieri's 2000 Weil functional paper (https://www.bdim.eu/item?fmt=pdf&id=RLIN_2000_9_11_3_183_0), whose abstract describes minimizers and negative-eigenvalue counting. Its full PDF has not been examined; a search result also identified a recent spectral-edge paper, not yet verified. Repository code search for 'strictly decreasing lowest eigenvalue' returned no matches, not an exhaustive prior-art check. No novelty claim, new computation, formal verification, or independent human review. No claim that this solves RH. The original N04 turn did not directly retrieve its claimed sources; a subsequent correction also overstated retrieval. This U01 turn actually retrieved the Suzuki v4 passages listed above and v1 introduction; these support only the claims specified here. No retroactive verification of the earlier N04 assertions.
