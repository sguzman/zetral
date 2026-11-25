# VMR02 — Joint expanding-window and vanishing-metric Gram limit

2026-11-25. AI-assisted candidate deduction. Uses VMR01, LBS01 and BPF03. No RH assumed; selected off-line pairs are hypothetical. Source provenance correction applies. No fresh source inspection, numerical experiment, actual off-line zero, independent human/formal verification or priority claim.

## 1. Uniform log-energy control of the exact evaluation columns

For a finite set of distinct upper ordinates z_j=u_j+i d_j with d_j>0, write alpha_j=d_j+i u_j. In ordinary L2(-a,a), the normalized evaluation densities from BPF03 are
    g_(L,j,a)(x)=exp(-alpha_j(x+a)),
    g_(R,j,a)(x)=exp(-conj(alpha_j)(a-x)),
inside the interval and zero outside. These have uniformly bounded L1 norms and total variation on R for a>=1, including their jumps at the two endpoints: each integral is bounded by 1/d_j and each derivative integral by |alpha_j|/d_j, and the jump magnitudes by two. Hence their Fourier transforms obey |F g(t)|<=C_j/(1+|t|) by the elementary BV integration by parts bound. Every finite coefficient combination g=E_a c has
    L(g)<=C||c||^2,                                      (1)
uniformly in a, since integral w(t)/(1+|t|)^2 dt is finite.

These zero-extended densities belong to V_a, not merely to the full-line log-energy space: for fixed a trim each density a distance eta from the endpoints, then mollify with compact smooth mollifiers supported in (-eta/2,eta/2). The approximants converge in L2 and L1 and have uniform L1 and BV bounds. Their transforms converge pointwise with the same O((1+|t|)^-1) envelope; dominated convergence in the log norm proves membership. No boundary trace condition is imposed on this logarithmic-energy domain.

## 2. Joint limit by dual variational comparison

For epsilon>0, let E_(a,epsilon)c be the Riesz vector in the metric L_epsilon representing the ordinary L2 functional f-><f,E_a c>_2, using inner products linear in the first argument. Let G_(a,epsilon)=E_(a,epsilon)*E_(a,epsilon) in that metric, and G_(a,0)=E_a*E_a in ordinary L2. The exact dual norm identity is
    c*G_(a,epsilon)c = sup_(f in V_a) [2 Re<f,E_a c>_2-L_epsilon(f)].
The supremum is obtained at the Riesz vector by completing the square. Since L_epsilon>=||f||^2, this is at most ||E_a c||^2=c*G_(a,0)c. Conversely, choose f=E_a c, allowed by section 1. This gives
    c*G_(a,epsilon)c >= c*G_(a,0)c-epsilon L(E_a c).
Consequently, in positive matrix order,
    0<=G_(a,0)-G_(a,epsilon)<=C epsilon I.               (2)
This is a simultaneous, uniform bound for the finite profile family, not an interchange of two iterated limits. It also gives uniform control for an arbitrarily chosen positive function epsilon(a)->0.

The ordinary finite-window Gram tends in norm to the direct sum of Cauchy Grams G_L,G_R=conj(G_L), where
    (G_L)_ij=1/(conj(alpha_i)+alpha_j).
For same-side columns the omitted half-line exponential tail tends to zero exponentially. For opposite-side columns, put s=x+a and split s at a: on each half one of the two exponential factors has absolute value at most exp(-d_min a), while the integral of the other factor is bounded by 1/d_min. Hence the cross Gram entries are O(exp(-d_min a)); the same-side errors are no larger. With G_0 the limiting two-sided Gram in the deviation-group ordering,
    ||G_(a,epsilon(a))-G_0|| <= C[epsilon(a)+exp(-d_min a)].   (3)
G_0 is strictly positive by finite distinct-exponent independence; the Gram and its inverse are uniformly bounded for all large a and sufficiently small epsilon.

## 3. Selected spectrum at a vanishing regularization

Assume that all conjugate pairs with deviation d>b, 0<=b<1/2, form a fixed finite nonempty set, with d_min>b. All remaining nonreal pairs have deviation <=b, and all real ordinates belong to the remainder. No uniform weighted local density assumption. With the normalized metric Riesz columns above, the selected operator on V_a in the L_epsilon metric is exactly
    O_(a,epsilon)=E_(a,epsilon) D_a E_(a,epsilon)*,
    D_a=diag_k(exp(2d^(k)a) H_k(a)),
    H_k(a)=[0 M_k(a); M_k(a)* 0],
    M_k(a)=diag_(j in k)(m_j exp(2i u_j a)).
Here d^(k) are the distinct selected deviations in decreasing order, and m_j are multiplicities. In this note D_a denotes this finite coefficient matrix, not the scalar norm of B_a used in VMR01.

Since the exact metric Gram converges to the ordinary Cauchy Gram by (3), the BPF03 two-stage pencil elimination applies verbatim: for each selected scale t_k=exp(2d^(k)a), the fast block of D_a/t_k-xG_(a,epsilon)^-1 has inverse norm tending to zero for negative x on compact intervals bounded away from zero, the slow block tends to the strictly positive metric block -xK_LL, and the remaining Schur pencil is H_k(a)-xS_k^-1+o(1), uniformly in phases. S_k is the ordinary limiting Cauchy Gram of current profiles projected off the faster profiles. Thus the jth selected negative magnitude after R_<k faster indices, divided by t_k, is s_(k,j)(a)+o(1), where s_(k,j) are the positive singular values of
    S_(L,k)^(1/2) M_k(a) S_(R,k)^(1/2).
Here S_(R,k)=conj(S_(L,k)), and the BPF03 product formula gives the usual faster-geometry attenuation factors. Each fixed selected group has a uniform positive smallest singular value, since its finite Gram is strictly positive and multiplicities are positive integers.

LBS01's absolute strip estimate gives |q_remainder(f,f)|<=C a exp(2ba)L(f). Since L_epsilon>=epsilon L, the remainder operator in the regularized metric has norm <=C a exp(2ba)/epsilon. Select any epsilon(a)>0 tending to zero with
    a exp(-2(d_min-b)a)/epsilon(a)->0.                    (4)
For example epsilon(a)=exp(-kappa a) with 0<kappa<2(d_min-b). By bounded self-adjoint minmax perturbation, the negative depths of the full regularized operator obey
    exp(-2d^(k)a) N_(R_<k+j)^epsilon(a)(a)
          =s_(k,j)(a)+o(1),  1<=j<=r_k.                 (5)
The next depth is <=C a exp(2ba)/epsilon(a). The reference selected operator has finite negative rank; the generalized full operator has essential spectrum at epsilon^-1>0, so these minmax comparisons concern genuine discrete negative eigenvalues whenever the depths are positive. All parity-resolved conclusions follow by restricting the reflection-invariant exact finite matrices and the same remainder estimate; each quartet contributes one negative depth in each sector.

For every fixed ordinary depth N_j the inequality N_j>=N_j^epsilon is always true. Equation (5) therefore gives a leading lower prefactor bound for the ordinary spectrum without the extra lower-remainder density assumption. It does not give its matching upper bound. In particular the sufficient metric-comparison condition epsilon exp(a)->0 from VMR01 and the sufficient remainder condition (4) cannot both hold when 2(d_min-b)<=1 (as in the zeta strip). This is an obstruction to this particular pair of estimates, not a theorem excluding all possible regularizations or an ordinary asymptotic.

The metric Gram convergence (3) is uniform for a fixed finite selected set even if epsilon tends to zero arbitrarily fast. It is the lower-remainder control, not the selected Gram, that prevents taking the ordinary limit with these estimates. VMR03 next: derive a quantitative necessary escape condition for any excess ordinary depth, and test whether the abstract estimates alone can rule it out. README unchanged.
