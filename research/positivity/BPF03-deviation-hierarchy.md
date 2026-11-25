# BPF03 — Multiscale deviation hierarchy and Cauchy elimination

2026-11-25. AI-assisted internal candidate deduction. Conditional on the paired Weil form and initially a finite nonempty set of distinct off-line conjugate pairs, as in BPF01. Section 5 gives a separate explicit infinite-remainder hypothesis. No observed off-line zero, RH proof, independent human/formal verification, numerical execution or priority claim. No fresh literature inspection claimed. The following is a finite-dimensional Schur-complement argument with a transfer to the actual ordinary L2 spectrum, not an approximation inferred from a model plot.

## 1. Exact scaled synthesis, with all deviation groups retained

Let the selected finite pairs have upper ordinate z_j=u_j+i d_j, d_j>0, distinct (d_j,u_j), and multiplicities m_j. List the distinct deviations d^(1)>...>d^(g)>0 and let r_k be the number of pairs in group k (one per conjugate pair). For now the selected set is all off-line pairs. Write alpha_j=d_j+i u_j, ell_j(s)=exp(-alpha_j s), r_j(s)=conj(ell_j(s)) (the function r_j, not the group count). Use F, e_z and the isometry U_a of BPF01.

Define the physical synthesis E_a with columns
    v_(L,j)=exp(-d_j a-i u_j a)e_(z_j),
    v_(R,j)=exp(-d_j a+i u_j a)e_(conj z_j).
Then the off-line operator is exactly O_a=E_a D_a E_a*, where, in group order (left and right columns within each group),
    D_a=diag_k(t_k H_k(a)), t_k=exp(2d^(k)a),
    H_k(a)=[0 M_k(a); M_k(a)* 0],
    M_k(a)=diag_(j in k)(m_j exp(2i u_j a)).
Each H_k has r_k negative and r_k positive eigenvalues and is uniformly bounded and uniformly invertible. This follows directly from the pair rank-one identity, with the inner product linear in the first argument.

The columns of U_a E_a approach (ell_j,0) and (0,r_j) in norm with error O(exp(-d_j a)), respectively. Thus G_a=E_a*E_a tends in norm to a fixed positive Gram G of the half-line profiles, block diagonal by left/right before group reordering:
    (G_L)_ij=1/(conj(alpha_i)+alpha_j), G_R=conj(G_L).
Distinct complex exponents give linear independence via the Vandermonde argument of BPF01. In particular G_a and G_a^-1 are uniformly bounded and uniformly positive for large a. It is crucial to retain the exact G_a and scale each group individually; approximating the entire operator by the maximal-group block at its largest scale could produce errors larger than a weaker group's eigenvalues.

On ran E_a, O_a is isometrically equivalent to the finite Hermitian matrix G_a^(1/2) D_a G_a^(1/2). Its negative count is exactly R=sum_k r_k. Its eigenvalues below any negative threshold lambda are counted by the negative inertia of the congruent pencil D_a-lambda G_a^-1. The physical orthogonal complement contributes zeros only.

## 2. Separate the scales by a Schur complement in the pencil

Fix group k and put lambda=t_k x for x<0. Partition the indices as H (groups faster than k), C (current group), L (slower groups), allowing empty blocks. Divide the pencil by t_k and write K_a=G_a^-1. Its H diagonal block is
    diag_(i<k)((t_i/t_k) H_i(a))-x (K_a)_HH.
For x in a fixed compact negative interval, this block is invertible for large a, its inverse norm is O(max_(i<k)t_k/t_i)=o(1), and its negative inertia is sum_(i<k)r_i. Indeed the unperturbed block has all absolute eigenvalues at least min_j m_j * min_(i<k)t_i/t_k, and the bounded metric perturbation cannot cross zero. All cross-block entries of the divided pencil are bounded. The Schur complement of H therefore differs by o(1) in norm from the (C,L) principal block, uniformly in phases and such x. As the ratios t_i/t_k for i>k tend to zero, that block is
    [ H_k(a)-x K_CC    -x K_CL ;
      -x K_LC          -x K_LL ] + o(1),
with K=G^-1. Since -x K_LL is uniformly positive on the chosen compact negative interval, eliminate L by a second Schur complement. Its negative inertia is zero. The surviving matrix is
    H_k(a)-x K_eff + o(1),
    K_eff=K_CC-K_CL K_LL^-1 K_LC.
For no L, use K_eff=K_CC. The usual block Gaussian congruence preserves inertia at both eliminations; it is not an assumption of positive definiteness of the fast block.

The effective metric satisfies K_eff=S_k^-1, with
    S_k=G_CC-G_CH G_HH^-1 G_HC.
To verify, the block of G^-1 indexed by C union L is the inverse of the Schur complement of G_HH; taking the Schur complement of the L block of that inverse gives the inverse of its original C principal block. This proves the identity including the empty-H and empty-L conventions. S_k is exactly the Gram matrix of the current group's endpoint vectors after orthogonal projection away from the span of all faster endpoint vectors. It is fixed and strictly positive. The current group's effective spectrum is that of
    F_k(a)=S_k^(1/2) H_k(a) S_k^(1/2).
Write its negative eigenvalues as -s_(k,1)(a)<=...<=-s_(k,r_k)(a)<0. The s values are uniformly bounded above and uniformly bounded away from zero, by positivity of S_k and uniform inverse bound for H_k. The count of negatives is r_k by congruence.

For rigor at crossings, choose a compact interval [-M,-c] containing all these negative eigenvalues in its interior, with M large and c>0 small. Away from an epsilon neighborhood of the effective eigenvalues, inertia of the surviving Schur complement equals the inertia of F_k(a)-x I for large a: congruence by S_k^(1/2) turns its o(1) perturbation into a uniform o(1) perturbation of that Hermitian matrix. Equivalently one may compare the perturbed inertia at x to the unperturbed counts at x±epsilon using Weyl bounds, without any simple-eigenvalue assumption. At the two endpoints the full pencil counts respectively R_<k=sum_(i<k)r_i and R_<k+r_k. Thus exactly r_k negative eigenvalues lie at this scale, and the ordered depths obey
    -lambda_(R_<k+j)(O_a)/t_k = s_(k,j)(a)+o(1), 1<=j<=r_k.    (1)
The error tends uniformly to zero in the phases (each fixed selected finite set); no claim of uniformity as the number of selected pairs grows. This argument applies independently to every group and does not subtract a leading approximate eigenvalue to expose the next scale.

## 3. Transfer to the actual ordinary spectrum

Let X_a=ran E_a, now using the actual scaled exponential evaluation columns, not just the limiting half-line truncations. A unit vector in X_a has uniformly bounded coefficient norm because G_a is uniformly positive. Each scaled column, extended by zero, has uniformly bounded L1 norm and total variation: integrate exp(-d_j(a+x)) or exp(-d_j(a-x)), with derivative factor |alpha_j|, and add endpoint jumps. Hence the same bounds hold on X_a. By the BPF01 trimming/mollification argument, these vectors lie in the closed form domain, and
    0<=q_real(f,f)<=C||f||^2 on X_a,
since |F[f](t)|<=C||f||/(1+|t|) and the local zero count O(log(2+|t|)) gives a finite weighted sum. The real-zero form is nonnegative globally; it need not be bounded on the entire physical space.

For each 1<=j<=R, form order gives lambda_j(A_a)>=lambda_j(O_a); the j-dimensional trial spanned by the first j negative eigenvectors of O_a lies in X_a and gives lambda_j(A_a)<=lambda_j(O_a)+C. This is an additive O(1) comparison at ALL negative scales, not just the leading scale. By (1) every selected negative eigenvalue diverges in magnitude, so
    -exp(-2d^(k)a) lambda_(R_<k+j)(A_a)=s_(k,j)(a)+o(1).       (2)
With finitely many off-line pairs there are exactly R negative eigenvalues for all sufficiently large a, because q_real>=0 and O_a has only R negative directions. This also follows from GSG04. Equation (2) resolves the leading prefactor at each distinct deviation under the finite-pair hypothesis.

## 4. Closed Cauchy formula for the effective Gram; invariant products

Because the limiting left/right columns are orthogonal across the two half-lines, S_k separates into left and right conditional Gram blocks S_(L,k), S_(R,k)=conj(S_(L,k)), after reordering. Let H denote the set of individual faster pair indices and C the current set. For i,j in C define
    beta_j=prod_(h in H) (alpha_j-alpha_h)/(alpha_j+conj(alpha_h)).
Then
    (S_(L,k))_ij = conj(beta_i) beta_j/(conj(alpha_i)+alpha_j).   (3)
Proof: eliminating one faster index h from a Cauchy Gram entry gives
    1/(conj(alpha_i)+alpha_j)
       -(2 Re alpha_h)/[(conj(alpha_i)+alpha_h)(conj(alpha_h)+alpha_j)]
    = [(conj(alpha_i)-conj(alpha_h))(alpha_j-alpha_h)]
       /[(conj(alpha_i)+alpha_j)(conj(alpha_i)+alpha_h)(alpha_j+conj(alpha_h))].
This is the claimed one-factor update. After previous eliminations the matrix is a diagonal congruence of a smaller Cauchy Gram, and the previous nonzero factors cancel in the next pivot; induction proves (3). The factors never vanish for distinct exponents and each has modulus strictly below one since both real parts are positive. Thus faster groups attenuate the current boundary directions, rather than merely leaving the original unprojected Cauchy Gram.

The s_(k,j) are the singular values of
    S_(L,k)^(1/2) M_k(a) S_(R,k)^(1/2).
Their product is phase-independent:
    prod_j s_(k,j)=det S_(L,k) * prod_(j in C)m_j.
Combining all groups and using the block determinant identity for successive Gram Schur complements yields
    lim_(a->infinity) prod_(j=1)^R [-lambda_j(A_a)] / exp(2a sum_(pairs j)d_j)
       = det G_L * prod_(pairs j)m_j >0.                      (4)
No ordering ambiguity enters the product. Thus a constant global product survives even when individual normalized depths oscillate.

If the selected set respects zeta reflection u->-u, the faster and current profile spans are invariant under conjugation and the left/right reflection interchange. BPF02's parity reduction applies after projection, with effective Hermitian coupling on one half-line. More precisely for a current quartet ±u at deviation d, beta_-u=conj(beta_u), so the projected Gram is a diagonal congruence of the original two-vector Gram. Replacing projected vectors by the isometric images of beta_j ell_j (same Gram) makes the coupling coefficient m exp(2iua) beta_u conj(beta_-u)=m exp(2iua) beta_u^2. The BPF02 formulas therefore hold with effective multiplicity amplitude m|beta_u|^2 and phase shift 2 arg(beta_u) in the oscillatory trace, including the same even/odd assignment; the determinant product is scaled by |beta_u|^4. This is attenuation and phase rotation, not a change in the exponent 2d. No inference of actual off-line zero locations.

## 5. A separated finite top set with an infinite remainder

A genuine extension is possible under additional hypotheses, not merely by taking a limit in the finite matrices. Select ALL pairs with d>b for fixed b>=0, assume this set is nonempty and finite, and let d_min>b be its smallest deviation. Assume for the remaining pairs
    sup_(n in Z) sum_(remaining upper z=u+i d, u in [n,n+1)) m_z d^2 < infinity.     (5)
When the remainder is empty this reduces to the finite case. For b=0 there cannot be remaining nonreal pairs. If b>0, the unweighted derivative/holomorphic disk estimate in GSG03, restricted to these remaining pairs and using b in place of the strip maximum, gives their form lower bound -C(a+1)^3 exp(2ba)||f||^2. The real contribution is nonnegative. Consequently q_a-q_selected >= -C(a+1)^3 exp(2ba) on tests, and hence on the closed form domain since the selected operator is bounded at fixed a. This is where (5) is used; classical O(log|u|) local zero count alone does not imply (5).

For an upper estimate on the finite selected trial span X_a, the scaled columns have uniformly bounded L1 and total variation as above. Multiplying by exp(-v x) with |v|<=b gives L1 and variation <=C exp(ba)||f||, because the derivative of the multiplier is at most b exp(ba) and endpoint jumps are included. Thus
    |F[f](u+i v)|<=C exp(ba)||f||/(1+|u|).
The ordinary local zero count, including all remaining and real ordinates, implies that the absolute remaining paired sample sum is <=C exp(2ba)||f||^2 on X_a. To extend the formula and membership to X_a, use the same smooth approximation as BPF01 at fixed a, now dominated by the uniform-in-ordinate sample bound for all |v|<=1/2 with fixed-a constants; the full absolute paired series for differences tends to zero by dominated convergence, giving form-norm Cauchy after a semiboundedness shift. Therefore the minmax comparison is
    lambda_j(O_selected)-C(a+1)^3 exp(2ba)
       <= lambda_j(A_a)
       <= lambda_j(O_selected)+C exp(2ba), 1<=j<=R_selected.
Dividing by any selected t_k, both errors vanish since d^(k)>=d_min>b. Equations (2)-(3) hold for this separated finite top set even with infinitely many smaller off-line pairs satisfying (5). The product formula (4) then applies only to the first R_selected scaled depths and the selected Gram; it says nothing about the unselected modes. Also lambda_(R_selected+1)(A_a)>=-C(a+1)^3 exp(2ba) by minmax. No assertion that such a separated top set or uniform weighted density condition is known for zeta. In the absence of a gap, or with infinitely many pairs approaching the supremum, the finite-dimensional Gram need not remain uniformly invertible and the argument cannot be extrapolated. The unconditional ordinary upper-growth obstruction remains.

## 6. Disposition

BPF03 completes the planned subordinate-group analysis: all finite-pair ordinary negative eigenvalue scales have phase-dependent effective Cauchy-Gram prefactors; faster groups contribute explicit attenuation/phase factors; an invariant normalized product survives across the entire hierarchy; and the separated finite-top-set result extends conditionally to an infinite lower remainder with uniform weighted local density. No numerical experiment or novelty claim, no independent verification, no RH proof. BPF04 should audit the hierarchy and decide whether an additional genuinely productive in-scope direction exists, rather than repeat the exponents already proved. README unchanged.
