# BPF01 — Endpoint factorization and uniform leading spectral prefactors

2026-11-25. AI-assisted candidate deduction, conditional on a nonempty finite set of distinct off-critical-line conjugate ordinate pairs. No actual off-line zeros observed, no RH proof, no independent human/formal/numerical verification or priority claim. Imports the paired Weil form, its compact smooth form core and the classical local zero count as used in GSG03/NIR03. No fresh external source inspection is claimed. The derivation below uses elementary finite-rank factorization and minmax.

## 1. Leading boundary operator

Use the convention F[f](z)=int f(x) exp(izx) dx, inner products linear in the first argument, e_z(x)=exp(-i conj(z)x), and (v tensor w) f=<f,w>v. On H_a=L2(-a,a), the off-line part of the paired form is the bounded finite-rank self-adjoint operator
    O_a=sum_j m_j [e_(z_j) tensor e_(conj z_j)+e_(conj z_j) tensor e_(z_j)],
where z_j=u_j+i d_j, d_j>0, and each distinct conjugate pair occurs once with multiplicity m_j. The rest of the form q_real is nonnegative on compact smooth tests. Since q_real=q_a-<O_a ., .>, it extends as a closed nonnegative form on the same form domain, by bounded perturbation and the core. A_a is not asserted to equal O_a.

Let B=max d_j>0 and J={j:d_j=B}, r=|J|. The u_j in J are distinct. Let b=max d_j over d_j<B if nonempty, otherwise b=0. Use the fixed Hilbert space H_*=L2(0,infinity) direct sum L2(0,infinity). Define isometry U_a:H_a->H_* by
    (U_a f)_L(s)=f(-a+s) 1_(0,a)(s),
    (U_a f)_R(s)=f(a-s) 1_(0,a)(s).
On the top group define ell_j(s)=exp(-(B+i u_j)s) and r_j(s)=exp(-(B-i u_j)s), s>0. Then exactly on the left half
    e^(-Ba) e_(z_j)(-a+s)=exp(i u_j a) ell_j(s),
and on the right half
    e^(-Ba) e_(conj z_j)(a-s)=exp(-i u_j a) r_j(s).
The L2 norm of each undesired opposite-half component after scaling is at most exp(-Ba)/sqrt(2B), and each omitted half-line tail has the same bound. Thus
    U_a e^(-Ba)e_(z_j)=exp(i u_j a)(ell_j,0)+O_H*(exp(-Ba)),
    U_a e^(-Ba)e_(conj z_j)=exp(-i u_j a)(0,r_j)+O_H*(exp(-Ba)).
The constants are fixed by the finite pair set. Rank-one product estimates and ||e_(u+id)||^2=sinh(2da)/d yield, as operators on H_* (zero on the range complement),
    || e^(-2Ba) U_a O_a U_a* - D_a ||
       <= C[exp(-Ba)+exp(-2(B-b)a)] =: delta_a,
    D_a = [ 0  T_a ; T_a*  0 ],
    T_a=sum_(j in J) m_j exp(2i u_j a) ell_j tensor r_j.        (1)
The second error term may be omitted if there are no subordinate pairs. The sign of the phase is tied to the stated Fourier and left/right convention; reversing either convention conjugates the phase. This is operator-norm convergence to an a-dependent model, not convergence to one constant operator.

## 2. Finite singular-value matrix and uniform nondegeneracy

Let E_L,E_R:C^r->L2(0,infinity) synthesize ell_j,r_j. Their Hermitian positive Gram matrices are
    (G_L)_ij=1/[2B+i(u_j-u_i)],   G_R=conj(G_L).
They are strictly positive: a linear combination of distinct exponentials vanishing in L2 vanishes analytically on the half-line, and the first r derivatives at zero give an invertible Vandermonde system. With M_a=diag(m_j exp(2i u_j a)),
    T_a=E_L M_a E_R*.
The maps E_L G_L^(-1/2), E_R G_R^(-1/2) are isometries. The nonzero singular values of T_a are therefore precisely those of the r-by-r matrix
    F_a=G_L^(1/2) M_a G_R^(1/2).
Write sigma_1(a)>=...>=sigma_r(a)>0. Independently of all phases,
    sigma_r(a)>=min_j m_j sqrt(lambda_min(G_L)lambda_min(G_R))=:c_*>0,
    sigma_1(a)<=max_j m_j sqrt(||G_L||||G_R||).
The nonzero spectrum of D_a is the symmetric set ±sigma_j(a), with multiplicities, by singular-vector factorization. Uniform positivity of c_* is crucial; one cannot assume uniform nondegeneracy just from an a-dependent rank.

## 3. Control of the real-zero form on actual endpoint trials

For a>=1, take the physical trial space X_a=U_a* [span{ell_j} direct sum span{r_j}], using the truncations to (0,a) implicit in U_a*. Its dimension is 2r, since the restrictions of the exponentials remain linearly independent. The fixed full half-line Gram matrices and their exponentially small truncation tails imply uniform equivalence between coefficient norm and physical L2 norm for all large a. These piecewise exponential trials have jumps at the physical endpoints and possibly at the midpoint; they are not compact smooth tests.

Their zero extensions have L1 norm and total variation bounded uniformly in a for unit vectors in X_a: integrate the absolute exponential and its derivative, and add the finitely many endpoint/midpoint jumps. Hence |F[f](t)|<=C min(1,1/|t|) for real t, by integration by parts in the bounded-variation sense. To justify form-domain membership and the zero-sum bound without presuming regularity, first trim each interval near its endpoints and mollify within (-a,a). For fixed a these compact smooth approximants converge in L2, with uniform L1 and variation bounds (trimming costs at most the jump sizes, mollification does not increase variation). The Fourier transforms converge pointwise since the supports are uniformly bounded for that a and L2 convergence implies L1 convergence. The local zero count O(log(2+|k|)) makes sum_real m_z (1+|z|)^(-2) finite. Dominated convergence in the weighted sample norm follows for the real ordinates; each of the finitely many nonreal samples converges too. In particular the differences of approximants are Cauchy in the q_a form norm after a fixed semiboundedness shift, by the paired formula and L2 convergence. Closure proves membership of f in the form domain and the exact real sample formula for these trials. Uniformly for all large a,
    0<=q_real(f,f)<=C ||f||^2 for f in X_a.                    (2)
This does not claim a global boundedness of the real-zero form.

## 4. Actual leading eigenvalues, not just finite-rank eigenvalues

Define Q_a=U_a U_a*, the orthogonal projection cutting each half-line at s=a, and Y=ran D_a=ran E_L direct sum ran E_R (independent of phase). On Y, ||(I-Q_a)|_Y||=O(exp(-Ba)) by fixed Gram invertibility and exponential tails. Let Y_j(a) be the span of j orthonormal negative eigenvectors of D_a corresponding to -sigma_1,...,-sigma_j. The map y->U_a* y is injective on Y for large a and has Gram distortion O(exp(-2Ba)). The scaled off-line Rayleigh quotient on U_a*Y_j differs from the D_a Rayleigh quotient on Y_j by O(delta_a+exp(-Ba)) uniformly in j<=r and phases, from (1), uniform norm of D_a and the projection error. By (2), the scaled real contribution is at most C exp(-2Ba). Minmax on this j-dimensional physical trial gives
    exp(-2Ba) lambda_j(A_a) <= -sigma_j(a)+C[delta_a+exp(-Ba)+exp(-2Ba)].
For the reverse inequality q_real>=0 globally implies A_a>=O_a in form order. Finite-rank minmax on H_a and the norm estimate (1) imply the jth lowest eigenvalue of exp(-2Ba) O_a differs from -sigma_j(a) by at most delta_a, for j<=r and sufficiently large a, since the r leading negative eigenvalues are separated from zero by c_* and adding a zero range-complement does not change them. Thus
    exp(-2Ba) lambda_j(A_a) = -sigma_j(a)
       + O(exp(-Ba)+exp(-2(B-b)a)),   1<=j<=r.                 (3)
If no lower pair exists, omit the second term. All constants may depend on the finite pair set, not a or phases. Furthermore D_a has only r negative eigenvalues, so by the same form lower comparison
    exp(-2Ba) lambda_(r+1)(A_a) >= -delta_a.
No claim about a matching smaller-scale asymptotic for lower groups yet. Formula (3) gives the leading coefficients, not merely logarithmic exponents, and does not require a positive spectral gap in the real-zero form. It is conditional and does not infer the existence of off-line zeros.

## 5. Boundary concentration of the leading negative eigenspace

Let V_a be the span of the first r orthonormal eigenvectors f_j of A_a (for large a, the preceding separation makes this spectral space unambiguous). Let Pi_a^- be the rank-r negative spectral projection of D_a on H_*, and P_a the projection onto U_a V_a. The sum of scaled eigenvalues in (3) is -sum sigma_j+O(delta_a). Since q_real>=0, (1) yields
    tr(D_a P_a)<=-sum_j sigma_j+O(delta_a).
On the other hand D_a>=-sum_j sigma_j (y_j tensor y_j) in operator order, where y_j are the negative unit eigenvectors. Therefore
    tr(D_a P_a)+sum_j sigma_j
       >= sum_j sigma_j (1-||P_a y_j||^2)
       >= c_* tr(Pi_a^- (I-P_a)).
Both projections have rank r, so
    ||P_a-Pi_a^-||_HS^2=2 tr(Pi_a^- (I-P_a))=O(delta_a).
This proves concentration of the entire leading negative spectral subspace on the coupled endpoint profiles, uniformly even at singular-value crossings. Individual eigenvector convergence is not asserted in degenerate groups. No bulk localization claim beyond this conditional leading subspace.

BPF01 complete as internal candidate: exact phase-dependent leading matrix, uniform leading ordinary spectral asymptotic and boundary-subspace concentration. BPF02 next: analyze the phase dependence and parity of this matrix, especially nonconstant prefactors for a single maximal-deviation quartet. Subordinate groups or infinitely many off-line pairs are not covered. No priority claim or RH proof.
