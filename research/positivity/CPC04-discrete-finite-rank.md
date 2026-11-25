# CPC04 — Exact discrete finite-rank reduction and Campaign XVII closure

2026-11-25. AI-assisted internal candidate deduction without RH. Uses the exact arithmetic form in GSG03, its digamma off-diagonal kernel in NIR04, and CPC01–03. Classical distribution periodization, Fourier series and Birman–Schwinger theory are not claimed as novel. Current search inspected the search excerpt of Connes–Consani, Weil positivity and Trace formula, §6.1, https://alainconnes.org/wp-content/uploads/Selecta.pdf (variable-interval discrete approximation), and the abstracts of arXiv:2006.13771 and arXiv:2607.02828 (finite Galerkin/Toeplitz approaches). No PDF full text analyzed, no equivalence with these constructions or priority claim. A further search excerpt of scale-resolved Weil positivity explicitly reports a doubly exponential envelope cutoff barrier; not imported as a theorem here. No human/formal verification or numerical certificate.

## 1. Exact periodic extension with a corrected archimedean symbol

Fix A>0 and choose L>2A. Choose an even real smooth cutoff chi equal to one on [-2A,2A], with 0<=chi<=1 and support strictly inside (-L,L). Write D_alpha for the tempered inverse Fourier transform of alpha(t)=Re psi(1/4+it/2)-log pi. Off the origin, NIR04 gives D_alpha(x)=-k(|x|), k(r)=exp(-r/2)/(1-exp(-2r)). Thus the compactly supported distribution chi D_alpha has real even Fourier transform
    alpha_chi(t)=alpha(t)+ integral_R (1-chi(x)) k(|x|) exp(itx) dx.
The correction is an ordinary absolutely integrable smooth function of x, since 1-chi vanishes near zero. In particular the Fourier correction is bounded by J_chi=2 integral_(2A)^infinity k(r)dr, finite for A>0. It tends to zero as |t| grows. This step is essential: simply sampling the uncorrected continuous symbol of FES03 would introduce periodic aliases of the archimedean kernel.

Define the compactly supported even arithmetic distribution
    D=chi D_alpha
      - sum_(n<=exp L) Lambda(n)/sqrt(n) chi(log n)
           [delta_(log n)+delta_(-log n)]
      +2 chi(x)cosh(x/2).
Its transform is the real symbol
    S_chi(t)=alpha_chi(t)
      -2 sum_(n<=exp L) Lambda(n)/sqrt(n) chi(log n)cos(t log n)
      + integral_R 2chi(x)cosh(x/2) exp(itx)dx.
Multiplication by chi changes no arithmetic quadratic form on (-A,A): the test autocorrelation is supported in [-2A,2A]. Periodize D with period 2L, a distribution on the circle. Because D is supported strictly in (-L,L), and the test autocorrelation is supported in (-2A,2A), its pairing with the periodic autocorrelation is exactly the original pairing; translated copies do not contribute. More explicitly, for f in C_c^infty(-A,A), extend by zero to the circle (-L,L), and let
    t_n=pi*n/L, c_n=F[f](t_n)/sqrt(2L).
These are its normalized Fourier coefficients (basis exp(-it_n x)/sqrt(2L)). Circle convolution with the periodized distribution has eigenvalue S_chi(t_n) on that basis, since the kernel has Fourier coefficients S_chi(t_n)/(2L) and convolution is with unnormalized Lebesgue measure. Consequently
    q_A(f,f) = sum_(n in Z) S_chi(t_n) |c_n|^2,         (1)
    ||f||^2 = sum_n |c_n|^2.
One may justify termwise distribution pairing by the rapid decay of smooth test coefficients and logarithmic growth of S_chi. Polarization proves the bilinear identity. This is an exact diagonal representation on an enlarged circle, with the crucial constraint that the zero-extended physical f lies in the proper support subspace. It does not assert that individual periodic modes are admissible physical tests.

## 2. Exact finite negative part, with no frequency quadrature

For fixed s real and mu>0, put p_n=max(S_chi(t_n)+s,mu), w_n=(mu-s-S_chi(t_n))_+. The p_n are comparable to 1+log(2+|n|) at fixed A,L,s,mu and w_n vanish except for finitely many n, because S_chi(t)=log|t|+O(1). Let e_n(x)=exp(-it_n x)/sqrt(2L) restricted to (-A,A), with ||e_n||^2=A/L. The exact positive form p_H on smooth tests is sum p_n |<f,e_n>|^2. It closes on the original form domain: on tests its difference from q_A+s||f||^2 is the bounded finite-rank form of K=sum_n w_n(e_n tensor e_n), so the form norms after a sufficiently large positive scalar shift are equivalent, and both completions coincide. P is the associated positive operator with P>=mu I. Hence
    A_A+sI=P-K
as self-adjoint bounded perturbations, and CPC01 gives the exact threshold count and nullity. In this discrete case the Birman–Schwinger operator is itself finite rank, with nonzero spectrum exactly the spectrum (apart from zero padding) of the finite matrix
    G_ij=sqrt(w_i w_j)<P^(-1)e_j,e_i>,  i,j in J={n:w_n>0}.
The count below -s is the number of eigenvalues of G greater than 1, and nullity at -s is multiplicity at 1. There is no continuous-frequency quadrature error in this reformulation. It still requires the inverse of the compressed positive form, not a diagonal inverse substituted for it. The variational inverse upper comparison by allowing all periodic functions is
    P^(-1) <= U_L^* diag(p_n^-1) U_L,
where U_L sends f to its sequence (c_n). The restricted variational supremum is over the support-constrained form domain, while the enlarged one is over the full diagonal form domain on the circle. This yields a computable upper Gram comparison; CPC02's residual identity yields two-sided Gram enclosures.

## 3. Explicit enclosure and cost limitation

Choose a certified lower bound alpha(t)>=log(2+|t|)-c_alpha. Then
    S_chi(t)>=log(2+|t|)-K,
    K=c_alpha+J_chi+2 sum_(n<=exp L) Lambda(n)/sqrt(n)chi(log n)
          +integral_R 2chi(x)cosh(x/2) dx.
It follows J is contained in {|n| < (L/pi)exp(K+mu-s)}; a rounded outward bound is sufficient. For L=2A+1 and large A, K=O(exp A), reproducing a potentially doubly exponential index ceiling. The exact finite-rank reduction is therefore NOT a practical large-window algorithm by itself. Nor do the prior exceptional-measure bounds eliminate isolated bad samples. Parity pairs n and -n can be combined into real cosine and sine columns, with one zero-mode column in the even sector, reducing redundant solves but not the exponential scale.

For smooth compact physical trials u, P u is the restriction of the periodic Fourier multiplier sum_n p_n <u,e_n> exp(-it_n x)/sqrt(2L). Its full-circle L2 series converges by the logarithmic bound and smoothness. Truncation at |n|<=N has interior residual error at most [sum_(|n|>N) p_n^2 |<u,e_n>|^2]^(1/2) by Parseval. Integration by parts yields |<u,e_n>| <= ||u^(r)||_1 /(sqrt(2L)|t_n|^r), r>=1, so an elementary integral bound on the log-weighted power tail makes this error explicit. The smooth tests are graph dense for P by CPC02: P is a bounded perturbation of A_A, not a different physical domain. The residual method can thus converge for a fixed finite J and strictly separated eigenvalues. No claim that a particular finite numerical solve has converged.

## 4. Audit and disposition

CPC01's inertia and threshold-nullity identity uses a bijective coercive form map; the comparison by the full-line inverse is upper only. CPC02's residual identity holds for operator-domain trials, not mere form-domain trials; an interior residual is essential. CPC03's centroid cancellation and parity estimates are correct under exact nonnegative masses; numerical error enclosures remain necessary. Its A=1/2048 analytic benchmark is conservative: the stated elementary digamma inequalities yield alpha>1 outside |t|<256 and alpha>-6 everywhere, while support restricts the low-frequency mass to 1/(4pi); the pole loss is below 1/12. It is not an executed matrix test or originality claim. Prior literature already investigates much larger windows, so no improvement claim. CPC04 removes frequency quadrature via an exact finite-rank negative split; worst-case cutoff and inverse cost still unresolved. All four notes are AI-assisted candidates, not independently verified.

Campaign XVII closes mathematically. Next Campaign XVIII — Discrete certificate validation. Rather than add further theoretical variants without testing, choose a bounded small-window case where the corrected periodic symbol and its negative-index ceiling are explicit; derive a reproducible arithmetic-only certificate with interval/rational error controls, implement and execute a bounded Rust benchmark if tool/runtime permits, compare with the known analytic benchmark, and assess cost before larger windows. If execution or certification fails, preserve actual logs and mathematical obstruction rather than claim a certificate. No RH proof, priority claim, external submission or new expense. README stays stable.
