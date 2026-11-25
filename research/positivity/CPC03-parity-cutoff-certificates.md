# CPC03 — Parity, cutoff freedom and constructive certificate improvements

2026-11-25. AI-assisted internal candidate derivation without RH. Uses CPC01–02, FES03–04 and the previously established arithmetic form. No new literature retrieval, priority claim, executed numerical certificate, formal verification or independent human review. Classical parity and quadrature arguments are not claimed as original. Small-window example below is a deliberately conservative analytic benchmark, not an asserted improvement over earlier small-window campaigns.

## 1. Parity reduction and sharper trace bounds

Fix A>0, I=(-A,A), H=L2(I). The preceding compact formulation was stated for A>=1 for convenience; its fixed-window proof only uses A>0. Let S be an exact real even cutoff symbol, s real, mu>0, p=max(S+s,mu), W=(mu-s-S)_+, nu(dt)=W(t)dt/(2pi), P the positive compressed operator, C=P^(-1/2)K_W P^(-1/2). Reflection R on H commutes with P and K_W. Set H_+=ker(R-I), H_-=ker(R+I), Q_±=(I±R)/2. The projected evaluation vectors are e_t^+(x)=cos(tx) and e_t^-(x)=-i sin(tx), from e_t(x)=exp(-itx). As W is even and e_-t^±=±e_t^±,
    C_±=2 integral_(0,infinity) (v_t^± tensor v_t^±) dnu(t),
    v_t^±=P_±^(-1/2)e_t^±.
There is no point atom at t=0 since nu is absolutely continuous. This representation yields exact sector-wise threshold inertia as in CPC01. In particular
    tr C_± <= (2/mu) integral_0^infinity [A ± sin(2At)/(2t)] dnu(t).
Use the continuous value at zero. The sum of these two bounds equals the original trace bound 2A nu(R)/mu. In the odd sector a stronger near-origin estimate is available:
    ||e_t^-||^2 <= (2A^3/3)t^2,
since |sin(tx)|<=|tx|. This can sharply reduce the deficit trace if W is concentrated near zero. A sufficient full positivity certificate is that both parity trace upper bounds are <=1. More generally sector-specific upper eigenvalue certificates can be combined by adding their strictly negative counts. Because P and e_t^+ are real under complex conjugation (and e_t^- is pure imaginary), after replacing e_t^- by sin(tx), both finite Gram matrices and residual solves can be real. A symmetric cell partition of the full frequency line is replaced by a half-line partition with weights 2 nu(J_i), avoiding redundant opposite-carrier solves. Actual runtime reduction depends on implementation.

## 2. Second-order trace-norm quadrature

For either sector use v_t=P_±^(-1/2)e_t^±, and likewise for the unrestricted H use v_t=P^(-1/2)e_t. Let M(t)=v_t tensor v_t, interpreted as a positive rank-one operator, with the fixed convention of CPC02. Differentiability in trace norm follows from differentiability of e_t in H, bounded P^(-1/2), and rank-one trace-norm factorization. Uniformly,
    ||v_t|| <= sqrt(2A/mu),
    ||v_t'|| <= sqrt(2A^3/(3mu)),
    ||v_t''|| <= sqrt(2A^5/(5mu)).
Projection to parity can only decrease the norms. Hence
    ||M''(t)||_1 <= 2||v_t''||||v_t||+2||v_t'||^2
                 <= (4 A^3/mu)(1/sqrt(5)+1/3) = H2.
Here derivatives are along real t. For a cell of mass w_i>0 with respect to the appropriate measure (nu or its doubled positive-half restriction), take its weighted centroid t_i=integral_J t dnu / w_i. It lies in the closed cell interval. Taylor's formula with integral remainder in trace norm, and exact cancellation of the linear term, give
    ||C - sum_i w_i M(t_i)||_1
       <= (H2/2) sum_i integral_J |t-t_i|^2 dnu(t).
For cells of diameter <=Delta, the variance is <=Delta^2/4 (the elementary bounded-interval variance inequality, obtained by integrating (t-a)(b-t)>=0). Thus the total error is <=H2 Delta^2 nu(R)/8 in the unrestricted case, or with the sector's doubled half-line mass in the sector case. This is a second-order replacement for CPC02's first-order epsilon_q; all inverse residual enclosures remain unchanged. For approximate centroids, retain the linear term and bound it by H1 sum_i w_i |t_i-t_i^exact|, with H1=4A^2/(sqrt(3)mu); equivalently compare rank-one quadratures by the Lipschitz estimate. Certified moments of each cell and certified weights are required. No numerical speedup measured.

## 3. Exact cutoff freedom and convex sufficient tests

For d>=2A the autocorrelation of every zero-extended f in H at shift d vanishes, including d=2A (the overlap has measure zero). Thus the addition of b cos(dt) to S has zero compressed quadratic form, for any real b. The same holds for finite real sums of such cosines, or Fourier transforms of integrable real even physical kernels supported outside (-2A,2A); justify the latter by Fubini and autocorrelation. In particular for fixed d_j>=2A, all
    S_b(t)=S(t)+sum_j b_j cos(d_j t)
define the same arithmetic form. They remain even, continuous, bounded below and logarithmically divergent at infinity for each finite b, so CPC01–02 still apply with a possibly different enclosing support. This freedom is independent of changing the smooth cutoff in FES03. One must not assume the resulting compact C_b has the same eigenvalues: only the counts above and at 1 are invariant by CPC01.

Fix mu>0 and s real. W_b=(mu-s-S_b)_+ is convex pointwise in b. Thus each weighted integral of W_b with a fixed nonnegative weight is convex in b, including the parity trace bounds from section 1, the total deficit trace, and the supremum of fixed cell integrals in FES04. For example minimizing the maximum of the two parity trace upper bounds over a prescribed compact convex box of b is a convex sufficient-certificate optimization. The support can be enclosed uniformly on that box using S>=log(2+|t|)-K and the uniform sum of |b_j|. A strict feasible solution with both bounds <1 gives a genuine positive gap of A_A+sI by CPC01. Failure of the optimization does not imply nonpositivity: these are sufficient upper comparisons. No optimizer or numerical certificate was executed. The exact residual-based eigenvalue test is not asserted convex in b, because P and its inverse vary too.

## 4. A concrete analytic small-window benchmark

Take A=1/2048, s=0, with the GSG03 arithmetic form. No primes contribute because 2A<log 2. The negative pole term is bounded below by -2||sinh(x/2)||^2||f||^2=-2(sinh A-A)||f||^2, and the positive cosh term may be discarded. The digamma symbol alpha(t)=Re psi(1/4+it/2)-log pi is even and nondecreasing for t>=0 by its series:
    alpha(t)=alpha(0)+sum_(n>=0) [1/(n+1/4)-(n+1/4)/((n+1/4)^2+t^2/4)].
The classical quarter-argument identity gives alpha(0)=-gamma-pi/2-3log 2-log pi > -6, using gamma<1, pi/2<11/7, log 2<7/10 and log pi<6/5. At t=256, retain n=0,...,63 only. The positive reciprocal sum is at least
    4+sum_(n=1)^63 1/(n+1) >= 4+integral_2^65 dx/x =4+log(65/2).
The subtracted terms have sum <=64*64/128^2=1/4. Since log(65/2)>13/4 (for instance exp(13/4)<32 using elementary exponential-series estimates), the retained difference exceeds 7. Thus alpha(t)>1 for |t|>=256, and alpha(t)>-6 everywhere. The inequalities log 2<0.7, log pi<1.2, log(65/2)>3.25 follow from elementary exponential estimates; the last can also use log 2>0.65, since 65/2>32. No floating-point values are required.

For unit f supported in I, |F[f](t)|<=sqrt(2A), so its probability Fourier mass in [-256,256] is <=2A*256/pi=1/(4pi)<1/12. Therefore the archimedean form is bounded below by 1-7/(4pi)>5/12. The pole loss satisfies 2(sinh A-A)<1/12, e.g. sinh A-A<=A^3 cosh(1)/6<A^3/3 for 0<A<1. Consequently
    A_(1/2048) >= (1/3) I
on the closed form domain by core approximation. This is a conservative, unconditional analytic lower bound and a regression benchmark for future numerical sign tests, not an executed finite-matrix certificate, not a new RH result, and not claimed stronger than prior small-window work. Smaller A inherit the bound by zero-extension minmax.

## 5. Disposition

CPC03 complete as internal candidate: exact parity reduction, improved second-order certified quadrature, convex sufficient tests using the support-null cosine freedom, and a concrete analytic small-window benchmark. Practical large-window complexity and any successful numerical implementation remain unresolved. CPC04 should consolidate and audit; distinguish the established classical operator framework and conservative benchmark from new project-specific consequences; identify a next scientifically justified route instead of multiplying certificate variants without testing them. No RH proof, human/formal verification or priority claim. README unchanged.
