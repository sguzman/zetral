# Quantitative spectral separation in localized Weil spaces
## Campaign III consolidated candidate research note

25 November 2026. AI-assisted internal derivation under human research direction. No independent review, formal verification of these new results, or originality claim. This is an extension note to manuscript v0.2 (Git blob aabf597901969bd2ca9d32dcfff1c894f7bef7cf), not a replacement of its historical text or PDF.

### Setting and theorem

Assume RH and the sampling isometry, local coercivity and inverse-compression results of M. Suzuki, arXiv:2610.32704v1, §§2–4. In H=ell2(Gamma,m), Gamma is the set of distinct real ordinates, m their exact multiplicities, e_gamma=m_gamma^(-1/2) times the coordinate indicator, and C is the compact self-adjoint diagonal operator with entries 1/rho. M_a is the closed sample image of the local Weil form space, P_a its orthogonal projection. Write 0<gamma_1<gamma_2<... for distinct positive ordinates; mu_(a,j)>0 for descending positive compression eigenvalues; t_(a,j)=1/mu_(a,j). The results below concern these exact eigenvalues, not finite Fourier roots.

Define delta_j(a)=||(I-P_a)e_(gamma_j)||, D_n(a)=sum_(j<=n) delta_j(a)^2, T_n(a)=sum_(j<=n)(t_(a,j)-gamma_j), and X=exp(2a).

For every fixed n:

1. t_(a,n)>gamma_n for every finite a>0.
2. As X tends to infinity, t_(a,n)-gamma_n=O_n(X^(7/2-2m_*) log X exp(-2 pi X)), where m_* is the minimum multiplicity among the first n distinct positive ordinates. In particular the bound is O_n(X^(3/2) log X exp(-2 pi X)).
3. For sufficiently large a,
       gamma_1^2 (1/gamma_n-1/gamma_(n+1)) D_n(a)
         <= T_n(a) <= (4 gamma_n^2/gamma_1) D_n(a).
4. For every a>0,
       t_(a,n)-gamma_n >= gamma_n^2 (1/gamma_n-1/gamma_(n+1)) delta_n(a)^2.

All statements are conditional as above; no simple-zero assumption. In item 2, n is fixed and the constants depend on actual zero data. The power involving m_* must not be replaced by the multiplicity of gamma_n alone without a new upper-bound argument.

### Upper estimate (D01)

With A(z)=xi_0(1/2-iz), F[f](z)=integral f(x)exp(izx)dx, the classical theta Fourier kernel Phi of v0.2 obeys |Phi(x)|=O(y^(9/4) exp(-pi y)), y=exp(2|x|). At a target gamma of multiplicity m, apply m successive outward antiderivatives after modulation by exp(i gamma x). Specifically f_0=Phi and f_(r+1)=-i exp(-i gamma x) integral_(-infinity)^x exp(i gamma t)f_r(t)dt, 0<=r<m. The vanishing of F[f_r](gamma) permits either outward tail; integration lowers the power of y by one. Integration by parts gives F[f_r]=A/(z-gamma)^r. Divide f_m by sqrt(m) A^(m)(gamma)/m! to obtain q_gamma with samples e_gamma. As in v0.2, |q_gamma|=O_gamma(y^(9/4-m)exp(-pi y)), |q'_gamma|=O_gamma(y^(13/4-m)exp(-pi y)).

Let chi_a be a smooth cutoff with transition between a-1/X and a-1/(2X) in |x|. The inner edge has y=Y=X exp(-2/X)>=X-2. The omitted tail r=(1-chi_a)q_gamma satisfies, by the outward tail estimate and cutoff product rule,
    ||r||_1=O_gamma(X^(5/4-m)exp(-pi X)),
    ||r'||_1=O_gamma(X^(9/4-m)exp(-pi X)).
Both estimates hold for arbitrary fixed multiplicity, including negative powers of X, since Y/X>=1/2 for large X. In the derivative term the transition length cancels the cutoff derivative bound.

Use |F[r](rho)|<=min(||r||_1,||r'||_1/|rho|). The weighted count of both signs is N_*(T)=sum_(0<|rho|<=T)m_rho=O(T log T) by Riemann–von Mangoldt. Splitting at X, and summing dyadic shells above X, gives sum_(|rho|>X)m_rho/rho^2=O(log X/X). Therefore the squared sampling error is
    O_gamma(X^(7/2-2m) log X exp(-2 pi X)).
Since chi_a q_gamma is a compact smooth test, projection distance is no larger. Sum over the first n and use m_* to bound D_n(a). The upper comparison below establishes item 2. This is a saving log X/X compared to v0.2's general bound; no assertion of optimality.

### Cumulative and individual Ritz comparison (D02–D03)

For a compact self-adjoint C, E the first n positive eigenvectors with eigenvalues lambda_j, Q the projector, lambda_n>lambda_(n+1)>0, and L=inf spectrum(C), let R be any rank-n orthogonal projection. Its leakage d=tr[Q(I-R)Q] equals tr[(I-Q)R(I-Q)]. Because E reduces C, blockwise trace bounds yield
    (lambda_n-lambda_(n+1))d <= tr(CQ)-tr(CR) <= (lambda_1-L)d.
This uses only finite-rank traces, not trace-class C. The rank-n compression spectral projector R_* lies in M_a, so its leakage is at least D_n. For large a, D_n<1 and P_a restricted to E is injective; the rank-n projector onto P_a E has leakage exactly D_n, since its action on E equals P_a. Ky Fan's maximum principle then gives
    (lambda_n-lambda_(n+1))D_n <= sum_(j<=n)(lambda_j-mu_j) <= (lambda_1-L)D_n.
Eventually mu_j>=lambda_j/2 by Suzuki's convergence or R04. Reciprocation gives gamma_j^2(lambda_j-mu_j)<=t_j-gamma_j<=2 gamma_j^2(lambda_j-mu_j). Here lambda_j=1/gamma_j, L=-1/gamma_1. Summing nonnegative errors proves item 3.

For the individual estimate choose a unit vector v in the first n compression eigenvectors' span perpendicular to the first n-1 ambient eigenvectors. This intersection is nontrivial by dimension. Its Rayleigh quotient is at least mu_n and at most lambda_(n+1)+(lambda_n-lambda_(n+1))|<v,e_n>|^2. Since v is in M_a, |<v,e_n>|<=||P_a e_n||. Thus lambda_n-mu_n>=(lambda_n-lambda_(n+1))delta_n^2, and the lower reciprocal inequality holds at every a. This uses a strict ambient gap and distinct coordinate eigenvalues; no zeta simplicity needed. The cumulative and individual statements are compatible: an interior eigenvector already in M can have zero individual error even if another leading vector has nonzero defect. Endpoint constants of the abstract trace estimate are attained by trial lines rotated towards the second or lowest ambient eigenvector (add an unused second positive eigenvalue in the upper-bound example).

### Finite interpolation witness and strictness (D03)

Fix a, gamma, m=m_gamma and any positive lower bound kappa_a on the exact ordinary L2 form operator A_a. Coercivity and Cauchy–Schwarz give for every v in M_a, with local entire Fourier representative F,
    |F(z)|<=sqrt(2a/kappa_a) exp(a|Im z|)||v||_H.
Choose k distinct ordinates rho_j different from gamma within distance R. Put omega(z)=prod_j(z-rho_j), l_j=omega(gamma)/[(gamma-rho_j)omega'(rho_j)], W^2=1/m+sum_j |l_j|^2/m_(rho_j).
The residue theorem on |z-gamma|=3R gives the interpolation remainder
    F(gamma)-sum_j l_j F(rho_j)
      =(1/(2pi i)) integral F(z)omega(gamma)/[(z-gamma)omega(z)] dz.
Bounding the product ratio by 2^(-k) yields a functional of norm at most E=sqrt(2a/kappa_a) exp(3aR)2^(-k) on M_a.

In H let h have target coordinate 1/m and node coordinates -conjugate(l_j)/m_(rho_j), all others zero. Then ||h||=W and ||P_a h||<=E. The exact annihilator w=(I-P_a)h has |<e_gamma,w>|>=1/sqrt(m)-E and ||w||<=W. For E<1/sqrt(m) it is nonzero; hence
    delta_gamma(a)^2 >= (1/sqrt(m)-E)^2/W^2.
In particular E<=1/(2sqrt(m)) gives delta_gamma^2>=1/[4(1+m sum_j |l_j|^2/m_(rho_j))]. The finite vector h is not itself an exact annihilator; w is defined using the full orthogonal projection. This distinction avoids a false finite-nullspace argument.

A classical positive proportion of simple zeros under RH, together with Riemann–von Mangoldt, gives k(R)>=c R log R for sufficiently large R. For fixed a, kappa_a>0, so E tends to zero for the set of all distinct nodes within R. Thus there always exists a finite set satisfying the threshold, and the lower bound and item 4 imply strictness. Independently, e_gamma membership would require a nonzero entire exponential-type Fourier transform vanishing at a superlinear number of distinct ordinates; Jensen's formula centered at gamma excludes this. Multiplicity-counted zero density alone would not prove this assertion.

### Audit and limits

Rechecked powers, signs, projection domain, finite-rank trace arguments and the interpolation residue/normalization. Corrected D02's illustrative upper equality case to include the required second positive ambient eigenvalue; the lemma and main result are unchanged. No invalid step found in this internal review. No additional numerical or Lean check executed in D04. The lower bound is finite-parameter, not a matching asymptotic lower rate: the growth of kappa_a^(-1) and the interpolation coefficients is uncontrolled. In particular a Galerkin minimum is NOT a lower bound on the full form infimum. No interval, uniform-in-n, or prime-only error certificate is supplied.

Source trail: Suzuki arXiv:2610.32704v1; Lagarias–Montague arXiv:1106.4348v3, Lemma 3.1; Knyazev–Argentati arXiv:math/0701784; Riemann–von Mangoldt and classical conditional distinct-zero proportion (Conrey–Ghosh–Gonek, DOI 10.1112/S0024611598000306); D01–D03 source records give access limits and additional comparison. These are standard ingredients. Specific applications and refinement have not received exhaustive priority review; do not advertise them as first results. The five scalar lemmas previously verified in Lean do not constitute formal verification of this note.
