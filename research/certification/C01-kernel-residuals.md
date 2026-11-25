# C01 — Coercive residual enclosures for exact local kernels

25 November 2026. Conditional human-readable derivation, not independently reviewed or machine-checked. Standard coercive residual and compliant-output identities specialized to Suzuki's local Weil form. No originality claim for the abstract estimates. No actual interval computation or certified spectral root is claimed.

## 1. Setting and indexing

Reopened Suzuki, Spectral convergence associated with Weil's quadratic form, arXiv:2610.32704v1, https://arxiv.org/html/2610.32704v1, §§2.2 and 6 (25 November 2026). Equations (2.3)–(2.5), Proposition 2.1, and (6.1)–(6.2) establish the form, positive local coercivity under RH, evaluation representers and trigonometric form trial spaces. We use these as imports, not independently established facts. In particular equation (2.4) gives the existence of a positive lower bound; it does NOT provide a numerical value.

Fix a>0. On H0=L2(-a,a) let A=A_a be the positive self-adjoint form operator, V=Dom(A^(1/2)), q(u,v)=<A^(1/2)u,A^(1/2)v>_2, all inner products linear in the first argument. Assume A>=kappa I with kappa>0. A certified usable number kappa must be a LOWER bound on the actual spectrum, not a Galerkin minimum. Write ||u||_q^2=q(u,u). The form norm is complete and ||u||_2<=||u||_q/sqrt(kappa).

Use F[u](z)=integral_(-a)^a u(x) exp(izx) dx. To avoid ambiguity with Suzuki's conjugate parameter convention, define k_w=u_(conjugate(w),a), f_w(x)=exp(-i conjugate(w)x). Then k_w=A^(-1) f_w and q(u,k_w)=<u,f_w>_2=F[u](w). The exact kernel is J(z,w)=F[k_w](z)=q(k_w,k_z). Write

    b_a(z)^2=||f_z||_2^2= integral_(-a)^a exp(-2 x Im z) dx
            = sinh(2a Im z)/(Im z), if Im z != 0,
            = 2a, otherwise.

This is positive, even as a function of Im z, with its removable value at zero. Evaluation is bounded by |F[u](z)|<=b_a(z)||u||_q/sqrt(kappa).

## 2. Residual identity for an arbitrary conforming approximation

Take v_w in V (not necessarily a Galerkin solution or in Dom A). Put e_w=k_w-v_w. Define the conjugate-linear full form residual on V:

    R_w(u)=<f_w,u>_2 - q(v_w,u)=q(e_w,u).

Its dual norm in the energy norm is exactly ||e_w||_q, by Cauchy–Schwarz and taking u=e_w if nonzero. This is not yet computable; merely writing the energy dual norm does not supply its bound.

If v_w belongs to Dom A, define the full L2 residual r_w=f_w-A v_w. Then e_w=A^(-1)r_w, and by spectral calculus,

    ||e_w||_q^2 = <A^(-1)r_w,r_w>_2 <= ||r_w||_2^2/kappa,
    ||e_w||_2 <= ||r_w||_2/kappa.                    (C01.1)

More generally any rigorous bound |R_w(u)|<=eta_w ||u||_q for all u in V supplies ||e_w||_q<=eta_w. One can also use a reference norm ||u||_Z if q(u,u)>=alpha ||u||_Z^2 and |R_w(u)|<=B_w ||u||_Z on V: then eta_w=B_w/sqrt(alpha). Coercivity in L2 alone does not justify a residual norm in a stronger reference space.

If a distributional expression f_w-A v_w is not known to be in L2 or to represent the form residual, one cannot apply (C01.1). The condition that R_w extends boundedly to L2 is equivalent to v_w being in Dom A by the representation theorem for closed forms (subtract <f_w,u> from that extension). Membership in V alone is not enough.

## 3. Corrected diagonal and off-diagonal kernel enclosure

For arbitrary conforming v_w define the real scalar

    L_w=2 Re F[v_w](w)-q(v_w,v_w).

Expanding q(k_w-v_w,k_w-v_w) gives the exact identity

    J(w,w)=L_w+||e_w||_q^2.                         (C01.2)

Consequently L_w<=J(w,w)<=L_w+eta_w^2. The lower bound is valid even for inaccurate coefficients, provided q and evaluation are exact or rigorously enclosed. In the exact Galerkin case q(e_w,v_w)=0, F[v_w](w)=q(v_w,v_w), so L_w equals the ordinary Galerkin diagonal. For an inexact solve the corrected expression is essential. The error is quadratic in the full residual rather than a first-order bound on an uncorrected output.

For several evaluation points w_1,...,w_s, use any trial v_j in V and define matrix entries

    J_ij=J(w_i,w_j)=q(k_(w_j),k_(w_i)),
    L_ij=F[v_j](w_i)+conjugate(F[v_i](w_j))-q(v_j,v_i).

Expanding the error Gram matrix shows

    J_ij-L_ij=q(e_j,e_i),
    J-L >= 0 in Hermitian Loewner order,
    |J_ij-L_ij|<=eta_i eta_j.                      (C01.3)

If each full L2 residual r_j is justified, define G^res_ij=<r_j,r_i>_2. Applying (C01.1) to any linear combination of the errors gives the stronger matrix enclosure

    0 <= J-L <= G^res/kappa.                       (C01.4)

For exact Galerkin approximants in one common conforming trial space, L_ij=F[v_j](w_i); the correction identity otherwise remains valid without exact orthogonality. For approximate interval arithmetic, every term in L and the residual Gram must be enclosed rigorously; floating-point symmetry or a small discrete solve residual is not sufficient. The Loewner inequalities are matrix inequalities, not entrywise inequalities.

## 4. From kernel diagonal to geometric spectral defect

Under RH and the imported isometric sampling map into weighted ell2(Gamma,m), let I_a:V->M_a be the isometry, P_a the global orthogonal projection. For a real zero ordinate gamma and unit coordinate e_gamma, the equality

    <I_a u,e_gamma>_H=sqrt(m_gamma) F[u](gamma)
                     =q(u,sqrt(m_gamma) k_gamma)

implies P_a e_gamma=I_a(sqrt(m_gamma) k_gamma). Hence

    delta_gamma(a)^2=||(I-P_a)e_gamma||_H^2
                    =1-m_gamma J(gamma,gamma).

Combine with (C01.2):

    max(0,1-m_gamma(L_gamma+eta_gamma^2))
       <= delta_gamma(a)^2
       <= min(1,1-m_gamma L_gamma).                (C01.5)

The right endpoint is automatically nonnegative for exact data. For interval data with L_gamma in [Llo,Lhi] and eta_gamma<=eta_hi, use Lhi in the lower endpoint and Llo in the upper endpoint. A negative or empty purported exact enclosure signals an input/certification error. A lower bound from the kernel is strictly positive only if the certified upper bound for J is less than 1/m_gamma. Near saturation, computing the complement by subtraction requires enough precision to resolve it.

More generally for distinct real target ordinates gamma_i, D=diag(sqrt(m_i)), the Gram of the global projection residuals equals I-D J D in the normalized coordinate basis. Consequently (C01.4) yields

    I-D(L+G^res/kappa)D <= I-D J D <= I-D L D.

The actual middle matrix is positive semidefinite and at most I. Its trace over the first n coordinates is exactly D_n(a) of Campaign III. Combining certified scalar/trace bounds with D02 and D03 would yield bounds on cumulative or individual exact spectral errors, subject to their hypotheses, including actual ordinate/index information. This kernel-defect route is not a prime-only zero-finder: it requires target ordinates and multiplicities. C03 will use only the evaluation representers at the known complex parameters +/-i to certify local characteristic roots without zero inputs.

## 5. A full residual criterion in the existing Fourier trial basis

Let chi_j(x)=exp(i pi j x/a)/sqrt(2a) on (-a,a), j in Z, the orthonormal L2 Fourier basis of Suzuki §6. The finite trigonometric spaces lie in V. Their union is form-dense under RH: Suzuki's proof of Proposition 6.1 explicitly invokes Connes–Consani, Spectral triples and zeta-cycles, Lemma 2.2, for the trigonometric form core and proves density in the energy norm using coercivity. This source proof was reopened and checked in C01. For a conforming v define the exact coefficients

    c_j=<f_w,chi_j>_2-q(v,chi_j)=R_w(chi_j).

If sum_(j in Z)|c_j|^2<infinity, the L2 basis gives a unique r=sum_j c_j chi_j in L2. On finite Fourier combinations R_w(u)=<r,u>_2. Both sides are continuous in the form norm, so form-density extends the equality to every u in V. The form representation theorem then implies v belongs to Dom A and r=f_w-A v. Conversely if v is in Dom A, Parseval gives exactly

    ||f_w-A v||_2^2=sum_j |c_j|^2.                (C01.6)

This is a conditional, precise test for operator-domain membership; one cannot assume it merely from finite-dimensional form membership. For a finite Fourier approximation v=sum_(|k|<=N) v_k chi_k, c_j uses <f_w,chi_j> and finitely many form entries q(chi_k,chi_j), all arithmetic expressions with a fixed cutoff. The full residual bound requires a rigorously summed tail beyond a chosen J:

    ||r||_2^2 <= sum_(|j|<=J) upper(|c_j|)^2 + B_tail,

where B_tail>=sum_(|j|>J)|c_j|^2. Deriving a useful B_tail, and an independently certified kappa, is the central concrete C02 task. The paper's numerical section bounds archimedean-series truncation for individual Gram entries, not the residual tail over omitted Fourier modes; these are different errors. This criterion avoids guessing that the piecewise trigonometric approximants are in Dom A. It also separates the full residual from finite Galerkin orthogonality.

## 6. Counterexamples and limits

(a) In R^2 take A=diag(1,epsilon), 0<epsilon<1, f=(1,1), trial space span(e1), exact Galerkin v=(1,0). The residual restricted to the trial space vanishes, but the full residual is (0,1), and the energy squared error is 1/epsilon. The kernel/compliant output error equals 1/epsilon, exactly attaining (C01.1) with kappa=epsilon. No finite solve tolerance controls omitted directions without a full-space bound.

(b) On ell2(N), A diagonal with A_j=j^2, v_j=j^(-2) belongs to Dom(A^(1/2)) since sum j^2 |v_j|^2 converges, but not to Dom A because (Av)_j=1 is not square summable. An energy-norm residual may still exist. A finite-dimensional residual vector cannot be substituted for a full L2 residual.

(c) A=diag(1,epsilon) also demonstrates the wrong direction of Galerkin coercivity: the trial minimum 1 is an upper bound on the exact bottom epsilon, and using it in (C01.1) would falsely bound the squared error by 1.

(d) Exact coercivity can be extremely small for large a. Even a rigorously bounded residual may be too large compared to it; no feasible numerical certificate is guaranteed. No tail estimate, actual certified coercivity constant, or numerical root is asserted here.

## 7. Source and novelty disposition

Primary source checked: Suzuki arXiv:2610.32704v1, §2.2 equations (2.3)–(2.5), Proposition 2.1 and §6 (6.1)–(6.2); exact source HTML available in the current research turn. These support the local form, representative, coercivity existence and form trial membership. The density requirement for (C01.6) is verified as an import from the proof of Proposition 6.1. That proof also already states the error-Gram identity for exact Galerkin kernel approximants. Our corrected formula extends that identity to arbitrary conforming trial vectors, a standard compliant-output technique; the L2 residual criterion and enclosure provide a proposed certification interface, not a claim of originality. Note that Suzuki indexes the kernel as J_a(w,z), with evaluation variable last; our J(z,w) reverses these argument positions. Standard reduced-basis a posteriori estimation and quadratic compliant-output error are established: Prud'homme et al., A posteriori error estimation for reduced-basis approximation of parametrized elliptic coercive partial differential equations: convex inverse bound conditioners, https://archive.numdam.org/articles/10.1051/cocv%3A2002041/ (abstract located); Hesthaven, Rozza, Stamm, Certified Reduced Basis Methods for Parametrized Partial Differential Equations, section 4.2.3 (search excerpt only); residual estimate exposition https://feelpp.github.io/course-rom/rom/certification/residual-bound.html (search excerpt). These are context, not new imported technical hypotheses; the identities above are proved directly. No novelty claim, independent peer review or formal verification. C02 must check the actual arithmetic operator entries, full-space coercivity, and Fourier-tail feasibility before any numerical claim.
