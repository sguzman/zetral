# R05 — A theta-cardinal cutoff bound

Date: 2026-11-24 Mexico / 2026-11-25 UTC. Status: conditional human-readable candidate theorem, self-audited but not independently reviewed or Lean-verified; novelty not established. It concerns Suzuki's exact phase-pi differentiation extension, NOT the lowest eigenvalue of the ordinary L2 Weil-form operator A_a and NOT a finite Fourier matrix root.

## Statement

Assume RH and use Suzuki's sampling isomorphism and inverse compression (arXiv:2610.32704v1, (2.8), Thm 3.3 and §4). For every fixed index n of the distinct positive zero ordinates gamma_n, there are constants K_n>0 and a_n such that for a>=a_n, with X=exp(2a),

    0 <= t_(a,n)-gamma_n <= K_n X^(5/2) exp(-2 pi X).

Consequently for every 0<c<2 pi the error is O_(n,c)(exp(-c exp(2a))). In particular it is O_(n,B)(exp(-B a)) for every fixed B>0. No assertion of optimality, uniformity in n, or computable a priori error certificate from finite arithmetic input. Multiplicities need not be one.

## 1. Fourier kernel, normalization and tail lemma

Use F[f](z)=integral_R f(x) exp(izx) dx as in Suzuki. Let xi_0(s)=s(s-1) pi^(-s/2) Gamma(s/2) zeta(s)/2 and A(z)=xi_0(1/2-iz). Suzuki uses twice xi_0, which has the same zeros and multiplicities. The classical even smooth Fourier kernel Phi obeys, for x>0,

    Phi(x)=sum_(k>=1) (4 pi^2 k^4 exp(9x/2)-6 pi k^2 exp(5x/2))
                        exp(-pi k^2 exp(2x)),
    A(z)=F[Phi](z).

Source: Lagarias–Montague, The Integral of the Riemann xi-Function, arXiv:1106.4348v3, (1.1)–(1.2); also Romik, arXiv:1902.06330. The normalization agrees with the usual xi(s)=s(s-1) pi^(-s/2) Gamma(s/2) zeta(s)/2. Using Suzuki's convention instead doubles both the kernel and the cardinal normalizer, leaving q_gamma unchanged.

For y=exp(2|x|)>=1 the series gives |Phi(x)|<=C y^(9/4) exp(-pi y): factor out exp(-pi y), bound the remaining sum by sum (k^4+k^2) exp[-pi(k^2-1)], and use y^(5/4)<=y^(9/4). Smoothness and evenness are the classical theta identity.

Tail lemma: for any real alpha and Y>=1,
    integral_Y^infinity v^(alpha-1) exp(-pi v) dv
       <= C_alpha Y^(alpha-1) exp(-pi Y).
Proof: write v=Y+w; (1+w/Y)^(alpha-1) <= (1+w)^max(alpha-1,0), whose integral against exp(-pi w) is finite. With y=exp(2|x|), integration along either outward half-line therefore lowers a power of y by one while preserving exp(-pi y).

## 2. Divide out an entire zero without destroying tail decay

Fix a real ordinate gamma of exact multiplicity m>=1. Set f_0=Phi. For r=0,...,m-1 define
    f_(r+1)(x)=-i exp(-i gamma x) integral_(-infinity)^x exp(i gamma t) f_r(t) dt.
Inductively F[f_r](z)=A(z)/(z-gamma)^r, understood by entire continuation. For r<m, F[f_r](gamma)=0. Thus the integral from -infinity to x can also be written as minus the integral from x to infinity. This cancellation is essential; using only one endpoint would not prove decay at both ends.

By the tail lemma, for every fixed r<=m, with y=exp(2|x|),
    |f_r(x)| <= C_r y^(9/4-r) exp(-pi y).
The base r=0 was proved above. For the induction take the left outward tail for x<=0 and the right outward tail for x>=0; the complex phase has modulus one because gamma is real. The resulting functions are smooth, and differentiation gives
    (i d/dx-gamma) f_(r+1)=f_r.
Consequently f_(r+1) and its derivative are integrable, and integration by parts with vanishing endpoints gives (z-gamma)F[f_(r+1)](z)=F[f_r](z) on the real line. The tail bound also gives entire transforms by dominated convergence on compact z sets, so the relation extends to all z. This completes the induction with no use of simplicity.

Set b_gamma=(A^(m)(gamma)/m!) sqrt(m), nonzero by the definition of multiplicity, and q_gamma=f_m/b_gamma. Its transform equals 1/sqrt(m) at gamma and vanishes at every other ordinate, including those of multiplicity >1. Thus its weighted sample sequence is exactly the normalized coordinate vector e_gamma. We do not need to assert that q_gamma itself is in a local Hilbert space.

For y>=1 the preceding bounds give
    |q_gamma(x)| <= C_gamma y^(9/4-m) exp(-pi y),
    |q'_gamma(x)| <= C'_gamma y^(13/4-m) exp(-pi y).
The second follows from the first-order relation at r=m and the f_(m-1) bound; gamma and the normalizer are fixed.

## 3. Smooth compact truncation at the arithmetic scale

For a>=1 write X=exp(2a) and h=1/X. Choose a fixed smooth transition eta on R equal to 1 for s>=1 and 0 for s<=1/2, with bounded derivative and 0<=eta<=1. Define
    chi_a(x)=eta((a-|x|)/h).
This is smooth even at x=0 because it is identically one near zero. It equals one for |x|<=a-h, vanishes for |x|>=a-h/2, and |chi'_a|<=C/h, supported in the two transition strips of length h/2. The function u_(gamma,a)=chi_a q_gamma belongs to C_c^infty(-a,a). Let r_(gamma,a)=(1-chi_a)q_gamma.

At the inner edge Y=exp(2(a-h))=X exp(-2/X), one has X-2<=Y<=X and Y>=X/2 for X>=4. Thus for any fixed real power alpha, Y^alpha is comparable to X^alpha and exp(-pi Y)<=exp(2pi)exp(-pi X).

By the product rule,
    ||r'_(gamma,a)||_1 <= integral_(|x|>=a-h) |q'_gamma(x)| dx
                           + integral |chi'_a q_gamma| dx
                        <= C''_gamma X^(9/4-m) exp(-pi X).
The first term uses the tail lemma on both ends with alpha=13/4-m; the second uses the strip length h/2 and derivative bound C/h, and comparability of y with X throughout the strips. This shrinking transition width is needed to retain the coefficient pi in the exponential. A fixed transition width would give a weaker coefficient.

For every nonzero real ordinate rho, integration by parts yields
    |F[r_(gamma,a)](rho)| <= ||r'_(gamma,a)||_1/|rho|.
Suzuki (2.2) supplies M=sum_(rho in Gamma) m_rho/rho^2<infinity. The sampled compact trial vector v_(gamma,a)=S[j_a u_(gamma,a)] therefore satisfies
    ||v_(gamma,a)-e_gamma||^2_(ell2(Gamma,m))
      <= M ||r'_(gamma,a)||_1^2
      <= C'''_gamma X^(9/2-2m) exp(-2 pi X)
      <= C'''_gamma X^(5/2) exp(-2 pi X).
The target coordinate may have a small truncation error too; it is included in this bound. No zero-gap lower bound enters.

## 4. Transfer to eigenvalues

Let E_n=span(e_(gamma_1),...,e_(gamma_n)) in the weighted sampling space; P_a is the orthogonal projection onto the embedded local space (transported by S). Orthogonal best approximation and Cauchy–Schwarz give
    delta_a^2=||(I-P_a)|_(E_n)||^2
       <= sum_(j<=n) ||(I-P_a)e_(gamma_j)||^2
       <= K'_n X^(5/2) exp(-2 pi X).
Use the squared Ritz bound already proved in research/quantitative-cutoff.md §A. Its hypotheses hold: C is compact self-adjoint, its top positive eigenvalues are 1/gamma_j, and its lower spectral endpoint is -1/gamma_1. For sufficiently large a, B_n delta_a^2<=lambda_n/2. Therefore
    0<=t_(a,n)-gamma_n<=2 B_n gamma_n^2 delta_a^2.
This proves the stated estimate with K_n=2 B_n gamma_n^2 K'_n. The constants are allowed to depend on n, actual xi derivatives at the target zeros and multiplicities. The exact cutoff is arithmetic X=exp(2a), not the discretization order N.

## 5. Audit, boundaries and interpretation

- No hidden appeal to the desired convergence rate: only the published compression identity, sampling isometry, and compact spectrum, plus the abstract Ritz bound and explicit theta decay.
- The induction uses exact vanishing at each division step; at the final step the quotient has a nonzero target value. A single division is insufficient when m>1.
- The weighted norm uses all ordinates, not a finite zero sample or finite-band approximation. Integration by parts and the summability of m_rho/rho^2 control the full tail.
- The theta kernel itself has zero samples and is not a coordinate witness. The divided-out kernel is necessary to isolate a specific ordinate. Existing theta-window estimates for the bottom of A_a are close prior art, not automatically estimates for t_(a,n).
- Proof witnesses contain known zeros/derivatives. This does not change the finite-arithmetic definition of the exact local operator, but neither does it provide a zero-independent computable constant or a certified numerical algorithm.
- No matching lower bound or asymptotic equivalent is asserted. There is no uniformity for increasing n. The finite-N experimental errors can be much larger than the bound for the exact operator.
- No independent reviewer or Lean kernel has checked this argument. Runtime PATH was actually checked for lean, lake, cargo, rustc; none present. Do not create a pseudo-formal proof or claim verification. Prior-art status in literature/theta-prior-art.md.

## 6. Alternative polynomial filter

The R04 planned filter also works, albeit weaker. For fixed R>0 and gamma_j, take P_j(w)=product_(0<|rho-gamma_j|<=R) (1-w/(rho-gamma_j)), over distinct ordinates. Multiply the Fourier transform of the smooth normalized bump in R04 by P_j before box convolution; this corresponds to a polynomial in i d/dx and leaves compact support unchanged. The product P_j(w)F[psi](w) is bounded on R because the smooth compact bump transform decays faster than every inverse power. With b=2/R and k=floor(a/b)-1, the off-target samples within R vanish; outside R the sinc estimate of R04 applies with a new constant. Thus delta_a^2=O_(n,R)(exp(-R log(2) a)) for each fixed R. Reciprocation gives arbitrary fixed exponential rates. The constants depend on R, so one cannot let R grow with a without further estimates. The theta proof above is stronger and supersedes this route for zeta; the filter remains a useful elementary cross-check and more general argument.
