# FES04 — Local concentration certificates and Campaign XVI closure

2026-11-25. Internal candidate deduction without RH. Uses the exact real cutoff symbol S_A of FES03, FES02's packet selection and elementary Fourier concentration. No independent human/formal/numerical verification or priority claim. Current web search returned the abstract/snippet of "Compactness of Fourier Concentration Operators" (https://link.springer.com/article/10.1007/s00041-025-10195-2), referring to classical Slepian–Landau–Pollak concentration, and Birman–Schwinger literature snippets (https://link.springer.com/article/10.1007/s00023-022-01228-3). No PDF proof analyzed or advanced theorem imported. The elementary estimates below are derived directly; the classical concentration framework is not new.

## 1. Local mass controls the compressed negative symbol

Fix half-window A>=1, I=(-A,A). Write F[f](t)=int_I f(x)exp(itx)dx for f in L2(I), extended by zero. For any nonnegative integrable bounded weight W(t) of compact support, define K_W on L2(I) by
    <K_W f,f>=(2pi)^(-1) integral W(t)|F[f](t)|^2 dt.
It is a positive trace-class operator. Indeed with e_t(x)=exp(-itx) on I, it is the trace-norm integral (2pi)^(-1) integral W(t) (e_t tensor e_t) dt; rank-one projections here are unnormalized, and ||e_t||^2=2A. Hence
    tr K_W = (A/pi) integral W(t)dt.                      (1)
The integral is legitimate in trace norm by continuity of t->e_t and integrability of W. For arbitrary cell length ell>0, let
    M_ell(W)=sup_(j in Z) integral_[j ell,(j+1)ell] W(t)dt.
For F in H1 on a cell J of length ell, pick a point with |F|^2 at most its cell average, and use the fundamental theorem of calculus and Cauchy–Schwarz to obtain
    sup_J |F|^2 <= (2/ell) integral_J |F|^2 + 2ell integral_J |F'|^2.
Summing weighted cell contributions, using Plancherel and ||x f||<=A||f||, yields
    ||K_W|| <= (2/ell+2ell A^2) M_ell(W).
In particular for ell=1/A,
    ||K_W|| <= 4 A M_(1/A)(W).                            (2)
Unlike a bound in terms of global exceptional-set measure, (2) is sensitive to concentration at the natural Fourier resolution of the physical window. All estimates hold for general nonnegative W as above, not just the arithmetic symbol.

## 2. Necessary local resonance mass for a negative packet

Let S_A be the exact smooth cutoff symbol of FES03, real, continuous, bounded below by -C exp A and tending to +infinity as |t|->infinity. The exact arithmetic form is q_A(f)=(2pi)^(-1) integral S_A |F[f]|^2 on the closed form domain. For D>0 define W_D=(-S_A-D/4)_+, which has compact support and is <=C exp A. If a unit v has q_A(v)<=-D, then
    (2pi)^(-1) integral W_D |F[v]|^2 >= 3D/4,
because -S_A<=D/4+W_D. In particular (2) gives M_(1/A)(W_D)>=3D/(16A).

Now take a packet from FES02, with carrier omega and uniform relative pth moment M (for fixed p>=1,h>0). Outside |t-omega|<=L its W_D-weighted Fourier mass is <=C exp A M(1+hL)^(-p). Choose L with that bound <=D/4. Along a deeply negative escaping sequence one can take L=exp(kappa A) with p*kappa>1 for all large A. Apply (2) to W=W_D*1_{|t-omega|<=L}, since at least D/2 weighted Fourier mass remains inside. There exists a cell J of length 1/A intersecting this carrier neighborhood with
    integral_J W_D(t) 1_{|t-omega|<=L} dt >= D/(8A).       (3)
The supremum is attained because the restricted weight has bounded support and finitely many relevant cells. Consequently the cell's intersection with the set S_A<-D/4 has measure at least D/(8 C A exp A), using W_D<=C exp A. For doubly exponential carriers, FES03's pole-symbol decay and alpha asymptotic imply throughout this intersection
    P_A(t)>log|t|+D/4-C'.
Thus escape requires local weighted resonance mass, not just a single high value. However the global relative-measure bound (FES03) says nothing sufficiently strong about this worst cell. In particular neither the old dyadic measure estimate nor the current cell estimate excludes escape; no new unrestricted exponent.

## 3. Sufficient sign and index certificate

For an arbitrary target lower bound -s (real s) and positive margin mu>0, let
    W=(mu-s-S_A)_+.
It is nonnegative bounded with compact support, since S_A tends to infinity. The pointwise identity S_A+s=max(S_A+s,mu)-W gives
    q_A(f)+s||f||^2 >= mu||f||^2-<K_W f,f>.              (4)
Consequently either (A/pi) integral W<=mu or 4A M_(1/A)(W)<=mu is a sufficient certificate of A_A>=-s I. Strict inequality gives a strictly positive gap above -s. These are sufficient, not necessary; replacing the positive multiplier max(S_A+s,mu) by the constant mu discards potentially important positive energy. For an indexed bound, if n_<(A_A,-s) counts eigenvalues strictly below -s with multiplicity, the minmax principle gives
    n_<(A_A,-s) <= #{eigenvalues of K_W strictly greater than mu}
                  <= tr K_W/mu.
Indeed any strictly negative subspace of q_A+s has <K_W f,f> > mu||f||^2, so cannot have dimension larger than that of the compact positive operator's spectral subspace above mu. If trace/mu is an integer, strictness in the intermediate count may sharpen the bound. No claim that these inequalities are numerically favorable for the actual zeta arithmetic symbol at large A.

## 4. Finite-rank approximation with explicit operator-norm error

Partition the compact support of W into finitely many measurable cells of diameter <=Delta, choose a point t_j in each cell, and let w_j=integral_cell W(t)dt. Define
    K_delta=(2pi)^(-1) sum_j w_j (e_(t_j) tensor e_(t_j)).
The nonzero eigenvalues, counting multiplicity, are the nonzero eigenvalues of the finite Hermitian Gram matrix with entries
    G_ij = sqrt(w_i w_j)/(2pi) integral_I exp(i(t_i-t_j)x)dx
         = sqrt(w_i w_j)/(2pi) * 2 sin(A(t_i-t_j))/(t_i-t_j),
with diagonal value (A/pi)w_i. This follows by factoring K_delta as the synthesis map times its adjoint. The formula extends at coincident nodes by continuity.

Since ||e_t-e_u||_2 <= |t-u| sqrt(2 A^3/3),
    ||e_t tensor e_t - e_u tensor e_u|| <= (4 A^2/sqrt(3))|t-u|.
Integration gives
    ||K_W-K_delta|| <= E_delta = (2 A^2/(pi sqrt(3))) Delta integral W.     (5)
The same estimate holds in trace norm using rank-one trace-norm factorization. A certified upper bound on lambda_max(G)+E_delta <= mu proves A_A>=-s I. A certified upper bound on its kth eigenvalue plus E_delta <= mu proves lambda_k(A_A)>=-s, padding the finite positive spectrum by zeros. Conversely lambda_k(G)-E_delta>mu certifies only the comparison operator's count, NOT actual negative eigenvalues of A_A, since (4) is one-sided. Exact W integrals and a certified enclosing support interval are required; no numerical computation or machine-checked certificate was executed. This explicit norm approximation addresses the truncation problem absent from a bare exceptional-set estimate.

## 5. Campaign XVI closure and next direction

FES01 bab504e73685715677e2e120e51bf0ce16a079ea: exact compact-support frequency frame preserving L2 and paired forms. FES02 598eb0f5b22809a0d0e59f379d56e23ec97c0013: bounded-relative-moment negative packets at doubly exponential carriers if the bottom exponent is anomalous. FES03 3aee1abf4a44120debd54a4f5722ba515931c5c4: exact cutoff symbol and exceptional resonance relative measure. FES04: local mass necessity, trace and local sufficient certificates, explicit finite-rank quadrature error. Campaign closes with uniform exclusion unresolved. No RH proof or priority claim.

Campaign XVII — Compact positivity certificates. Replace the constant mu comparison in (4) with the full positive form P=max(S_A+s,mu), derive the exact Birman–Schwinger count and a compact preconditioned concentration kernel, then construct certified finite-dimensional approximations with errors including the inverse positive operator. This is distinct from the global frequency-escape route and directly addresses the sign problem on the physical window. Do not claim a certificate until all inputs and error bounds have been verified. Preserve README as stable overview.
