# CPC02 — Two-sided finite-rank approximation with certified inverse residuals

2026-11-25. AI-assisted internal candidate deduction without RH. Uses CPC01's coercive operator P, exact compact threshold count and finite measure nu=W dt/(2pi), FES04's rank-one estimate, and NIR04's full-line logarithmic graph-norm lemma. No fresh literature retrieval, novelty claim, numerical execution, machine-checked certificate or independent human review. The residual identity is elementary coercive Galerkin theory; its application here is to the actual support-constrained inverse.

## 1. Quadrature of the exact compact operator

Fix the physical window I=(-A,A), A>=1, s real and mu>0. Let H=L2(I), e_t(x)=exp(-itx), P the positive operator from CPC01 (P>=mu I), W=(mu-s-S_A)_+, nu(dt)=W(t)dt/(2pi). Set C=P^(-1/2)K_W P^(-1/2), and v_t=P^(-1/2)e_t. In trace norm,
    C=integral (v_t tensor v_t) dnu(t).
All integrals are over the bounded support of W. Partition an enclosing interval into finitely many measurable cells J_i of diameter <=Delta; let t_i in J_i and w_i=nu(J_i)>=0, dropping zero-mass cells. Define
    C_delta=sum_i w_i (v_(t_i) tensor v_(t_i)).
Since ||v_t||<=sqrt(2A/mu) and ||v_t-v_u||<=sqrt(2 A^3/(3mu))|t-u|, the rank-one difference estimate gives
    ||C-C_delta|| <= ||C-C_delta||_1
        <= epsilon_q = 4 A^2 Delta nu(R)/(sqrt(3) mu).       (1)
A sharper version replaces Delta nu(R) by sum_i integral_J_i |t-t_i| dnu(t). The positive finite-rank C_delta has the same nonzero spectrum, with multiplicity, as the Hermitian Gram matrix
    G_ij=sqrt(w_i w_j)<P^(-1)e_(t_j),e_(t_i)>
using inner products linear in the first variable. All remaining eigenvalues are padded with zero. In particular an operator-norm approximation of G is enough to bound every decreasing eigenvalue of C, even if the physical operator has unbounded spectrum.

## 2. Certified inverse errors without knowing the inverse

Use synthesis maps E,Z: C^m -> H, with columns E_i=sqrt(w_i)e_(t_i) and arbitrary Z_i in Dom P approximating P^(-1)E_i. Write R=E-PZ (operator from C^m to H) and
    G_lo = E*Z+Z*E-Z*PZ.
This Hermitian matrix is well defined even if the approximate solves are not Galerkin solves or have floating-point errors. Direct expansion gives
    G - G_lo = R*P^(-1)R >=0,
    0 <= G-G_lo <= mu^(-1)R*R.                              (2)
For a vector c, this is the scalar energy-error identity obtained by completing the square at P^(-1)Ec. Hence (2) uses the true residual of the coercive compressed problem, not merely the residual of its finite trial matrix. G_lo need not be positive for arbitrary Z; no such assumption is used. For exact Galerkin solves, Z*R=0 and G_lo=Z*PZ>=0.

If rho_i are certified upper bounds for ||R_i||_H, then
    ||R||^2 <= sum_i rho_i^2,
    epsilon_r=mu^(-1) sum_i rho_i^2
bounds the entire inverse Gram error. Alternatively a certified upper bound on lambda_max of the residual Gram R*R can reduce the cost. Unweighted trial solves u_i approximating P^(-1)e_(t_i) give Z_i=sqrt(w_i)u_i and epsilon_r<=mu^(-1)sum_i w_i ||e_(t_i)-P u_i||^2.

Suppose a computed Hermitian approximation L to G_lo has certified ||L-G_lo||<=epsilon_m, including errors in weights, integrals and arithmetic. Weyl's minmax inequalities give for j<=m
    lambda_j(L)-epsilon_m-epsilon_q
       <= lambda_j(C)
       <= lambda_j(L)+epsilon_m+epsilon_r+epsilon_q.         (3)
For the lower bound compare G to L from below and then C_delta to C; for the upper compare from above. Padding needs care because G_lo or L can be indefinite: for j<=m the exact positive G has its usual m eigenvalues including zeros, and these are precisely the first m of C_delta. For j>m, 0<=lambda_j(C)<=epsilon_q. Negative lower enclosures may be replaced by 0. If m=0, C=0. No assertion that C_delta<=C in operator order is needed.

Thus a certified upper endpoint <=1 proves the corresponding ordinary eigenvalue of A_A is >=-s by CPC01, and a lower endpoint >1 certifies a genuine eigenvalue below -s. For example if lambda_j(C)>1 and lambda_(j+1)(C)<1 are enclosed with strict margins, the count below -s is exactly j and the threshold nullity is zero; exact equality to 1 is not decidable from shrinking intervals alone. For j=0 use only the first upper bound. These are two-sided certificates for the actual operator, unlike FES04's one-sided constant baseline.

## 3. Residual evaluation using full-line Fourier integrals

Let U be the zero-extension Fourier isometry, with measure dt/(2pi), and p=max(S_A+s,mu). For u in C_c^infty(I), p F[u] belongs to L2(R,dt/(2pi)) because p(t)<=C_(A,s,mu)(1+log(2+|t|)). The compressed operator acts as
    Pu = 1_I F^(-1)[p F[u]]
in L2(I), by testing against V and using the form representation. The same identity holds for every zero-extended u with p F[u] in L2. In particular these smooth trial functions belong to Dom P.

For a truncation parameter T>=1, put
    g_T(x)=(2pi)^(-1) integral_[-T,T] p(t) F[u](t) exp(-itx)dt.
Then, for a target e_(t_i),
    ||e_(t_i)-Pu||_(L2(I))
      <= ||e_(t_i)-g_T||_(L2(I)) + tau_T(u),
    tau_T(u)^2=(2pi)^(-1) integral_|t|>T p(t)^2 |F[u](t)|^2dt.       (4)
Only the interior residual should be used for the first term: a full-line residual against the zero-extended target can contain nonzero exterior forcing and need not vanish even for an exact solve. The first term is a finite-domain norm involving a finite frequency integral, to be enclosed by rigorous quadrature. If an approximate g_T has uniform error <=eta on I, add sqrt(2A)eta. Smooth trial functions have derivative-based tail estimates:
    |F[u](t)|<=||u^(r)||_1 |t|^-r, r>=1.
For instance choose a certified M_p with p(t)<=M_p[1+log(2+|t|)]. For |t|>=T>=1, 1+log(2+|t|)<=c+log|t| with c=1+log 3. Put beta=2r-1>0. Elementary integration gives
    tau_T(u)^2 <= (M_p^2 ||u^(r)||_1^2/pi) T^-beta
       * [(c+log T)^2/beta + 2(c+log T)/beta^2 + 2/beta^3].
This follows by t=T exp y, integrating exp(-beta y)(c+log T+y)^2. The bound tends to zero for each fixed trial. A finite certified M_p follows from the digamma symbol bound plus explicit prime and cutoff pole bounds (FES03); no numeric value is asserted here. The residual can be evaluated for rational or interval-enclosed trial coefficients; the residual criterion does not require exact finite-matrix solves.

For form matrix entries <Pu_i,u_j> the same truncated integral and tail bounds, or Cauchy–Schwarz using (4), give certified enclosures. For <E_i,Z_j> use direct finite physical integrals. For a certified enclosing support of W, use S_A(t)>=log(2+|t|)-K_A with K_A an explicit bound from the digamma, finite prime sum and cutoff pole L1 norm, so W=0 once log(2+|t|)>=K_A+mu-s. Obtain cell masses by interval quadrature of the continuous nonnegative W; max(.,0) is Lipschitz, so nondifferentiability at a threshold is not an obstacle to interval subdivision. Use exact masses conceptually in (1)-(3); if approximated, propagate interval errors through the weighted entries of L and rho estimates (or use a certified upper bound for each mass in epsilon_r). No claim of practical feasibility for the potentially doubly exponential support enclosure.

## 4. The method can converge, not only certify a fixed guess

A form core alone does not guarantee small L2 operator residuals. Here the compact smooth tests are also an operator core of P. To see this, P=A_A+sI+K_W as a bounded perturbation, so Dom P=Dom A_A. By NIR04's graph-norm lemma, any u in Dom P, zero-extended, belongs to Dom H_alpha on the full line, hence has finite norm
    ||u||_log2^2=(2pi)^(-1) integral [1+log(2+|t|)]^2 |F[u](t)|^2dt.
Conversely any u supported in the closed I with this norm finite lies in Dom P by the multiplier representation above. These norms are graph-equivalent for fixed A,s,mu by the same lemma and boundedness of p by the log weight.

For such a u first shrink its support via u_r(x)=r^(-1/2)u(x/r), r<1 approaching 1. Dilations are strongly continuous in this weighted Fourier norm: F[u_r](t)=sqrt(r)F[u](rt), the weight at t/r is uniformly comparable for r in [1/2,1], and strong convergence follows by density of continuous compactly supported Fourier functions and uniform boundedness. Then mollify u_r by a smooth approximate identity supported in a radius smaller than A(1-r). The Fourier multiplier tends to 1, is bounded by 1 for nonnegative integral-one mollifiers, and dominated convergence gives convergence in log2. A diagonal sequence consists of C_c^infty(I) and converges in the graph norm of P. Thus for any fixed finite cell list and target e_(t_i), smooth trials approaching the exact inverse in graph norm give rho_i->0. This is an existence/convergence proof; arbitrary form-Galerkin sequences need not give small graph residuals. A practical scheme may minimize the L2 residual on graph-dense trial spaces (the exact inverse is the minimizer), or use ordinary Galerkin and test (4) a posteriori. No unverified numerical convergence assumption is needed.

Let the cell diameters Delta tend to zero on a fixed certified enclosing support. For each finite list choose smooth trial residuals small enough that epsilon_r tends to zero, and refine numerical enclosures so epsilon_m tends to zero (all finite integrals are continuous or smooth and tails controlled). Then (3) encloses each fixed indexed compact eigenvalue with vanishing width, provided enough cells are retained, or the zero-padding tail applies. If an eigenvalue is strictly separated from 1, this in principle eventually certifies its side. No effective complexity claim and no certificate at exact equality. CPC02 complete as internal candidate; CPC03 next investigate parity, cutoff freedom, practical sign/complexity bounds and any favorable small-window test. No RH proof, numerical certification or originality claim. README unchanged.
