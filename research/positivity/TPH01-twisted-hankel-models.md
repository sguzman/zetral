# TPH01 — Attainable twisted Hankel models and ordinary lower bounds

2026-11-25. AI-assisted candidate deduction without RH, using PBC01–02, the arithmetic form and the classical PNT as inherited inputs. No new literature retrieval, numerical execution, independent human/formal verification, priority claim or observed off-line zero. The source-provenance correction applies to inherited source claims.

Let M_omega f(x)=exp(i omega x)f(x). The ordinary arithmetic form is q_a=q_alpha-<P_a f,f>+<H_a f,f> with the prime shifts and pole kernel of PBC01–02. Write N_j(a) for the ordinary negative depths, zero padded. All spectral conclusions below concern that ordinary form, not a changed metric.

## 1. Twisted measures and compact limits

For a>0, omega real, set
    mu_(a,omega)=sum_(2<=n<=exp(2a)) exp(-a)Lambda(n)/sqrt(n)
                       exp(i omega log n) delta_(2a-log n).
The total variation is bounded uniformly in a>=1 by Chebyshev and partial summation. More precisely the mass on [R,infinity) is bounded by C exp(-R/2) for R>=0: it only uses n<=exp(2a-R), and sum Lambda(n)/sqrt(n)<=C sqrt(X). This also covers R>2a, when the sum is empty. The positive untwisted measure mu_(a,0) tends vaguely to exp(-r/2)dr by PBC01.

For any sequence a->infinity and arbitrary omega, a subsequence of the complex measures converges vaguely: the uniform total variation bound and a diagonal argument on a countable dense family of compact continuous tests produce a bounded limit functional, hence a finite complex Radon measure. For every compact continuous test F,
    |int F dmu_limit| <= int |F(r)| exp(-r/2)dr.
Thus the limit is absolutely continuous with respect to exp(-r/2)dr and has density phi(r) of modulus <=1 almost everywhere (by the Radon-Nikodym theorem, or the duality of L1 and L-infinity after extending the bounded functional). Tightness gives convergence against all bounded continuous tests as well. No claim that every such phi is attainable.

Define the half-line Hankel operator
    (K_phi g)(t)=int_0^infinity exp(-(t+s)/2) phi(t+s) g(s)ds.
Its kernel is square integrable; in fact
    ||K_phi||_HS^2=int_0^infinity r exp(-r)|phi(r)|^2 dr<=1.
Consequently it is compact and its norm is <=1. It need not be self-adjoint, because phi may be complex. The two-endpoint block is the self-adjoint
    D_phi=[0 K_phi; K_phi* 0].
Its positive and negative nonzero spectra are the signed singular values of K_phi.

## 2. Strong, not norm, convergence of the twisted blocks

Use U_a, the ordinary two-endpoint isometry of PBC01. The normalized modulated prime operator exp(-a) U_a M_omega* P_a M_omega U_a* has cross block K_(a,omega) with
    (K_(a,omega)g)(t)=1_(0,a)(t) int 1_(0,a)(r-t)g(r-t) dmu_(a,omega)(r),
and reverse block K_(a,omega)*, given by the conjugate twisted measure. The same-half blocks have norm O(exp(-a/2)), uniformly in omega. Pointwise absolute values of the cross block are bounded by the untwisted positive block on |g|, so the weighted Schur bound of PBC01 gives norm <=1+o(1).

For compact smooth half-line g and fixed t>0, vague convergence gives K_(a,omega)g(t)->K_phi g(t). The majorant C_g exp(-t/2) follows from the same weighted Schur row bound; dominated convergence then gives L2 convergence. Uniform boundedness extends it to all g. The adjoint converges strongly by the identical argument with the conjugate measures. Thus along any sequence realizing phi,
    exp(-a) U_a M_omega* P_a M_omega U_a* -> D_phi strongly.  (1)
No operator-norm convergence is asserted.

For later use there is also a uniform tail bound. If either the left or the right coordinate is >R, a cross term must have r_n>=R, hence log n<=2a-R. Such compressed reflection operators have norm <=1, and the normalized sum of their weights is <=C exp(-R/2). The cross block minus its compression to (0,R)^2 has norm <=2C exp(-R/2), uniformly in omega,a>=R. The same-half blocks are already o(1). The pole has the analogous uniform tail estimate up to o(1) by its norm limit. This does not supply compactness on (0,R) for arbitrary unmodulated input sequences; that is where the packet moment will be needed.

## 3. Carrier cost and disappearance of the pole

A pair (phi,tau) is called attainable here if a sequence a_l->infinity, |omega_l|->infinity realizes the above vague measure limit and
    exp(-a_l) log(2+|omega_l|)->tau in [0,infinity).
Use the full ordinary form, not only a bounded remainder. For any fixed smooth compact endpoint envelopes g=(g_L,g_R), set f_a=M_omega U_a* g for windows containing the supports. Its norm is ||g||. The normalized modulated pole expectation tends to zero, since U_a M_omega U_a* g has components exp(i omega(-a+t))g_L(t), exp(i omega(a-t))g_R(t), weakly null by Riemann-Lebesgue, and the normalized unmodulated pole converges in norm to a fixed finite-rank block. This argument also applies to all fixed finite spans by polarization.

The archimedean symbol satisfies alpha(t)=log(2+|t|)+O(1) uniformly in t by its digamma asymptotics. For all real t,omega,
    |log(2+|t+omega|)-log(2+|omega|)| <= log(1+|t|).
This follows from the triangle inequality in each direction and 2+|x+y|<=(2+|x|)(1+|y|). Thus after modulation the archimedean expectation differs from log(2+|omega|)||g||^2 by at most a constant times the log energy of U_a* g. The latter is uniformly bounded for fixed smooth compact envelopes by translation/reflection invariance and the triangle inequality in the log norm. This proves
    exp(-a) q_a(M_omega U_a*g,M_omega U_a*g)
           -> tau||g||^2-<D_phi g,g>.                 (2)
The sign of omega is irrelevant to the log cost; the chosen sign of the complex measure corresponds to M_omega* T_s M_omega=exp(i omega s)T_s.

## 4. Ordinary lower bounds

Since the supremum of <D_phi g,g> on the unit sphere is ||K_phi||, approximate its maximizing singular-vector pair in L2 by fixed compact smooth endpoint envelopes. Equation (2) and ordinary Rayleigh minmax give, along every realizing sequence,
    liminf exp(-a_l) N_1(a_l) >= max(0,||K_phi||-tau).  (3)
Indeed one takes the limit with each fixed envelope first, then uses density to approach the supremum; no uniform control of all envelopes is asserted.

More generally for each fixed j choose the span of the first j positive eigenvectors of D_phi when sigma_j(K_phi)>tau. Approximate an orthonormal basis by compact smooth profiles and use Gram convergence and boundedness of D_phi to preserve the finite-dimensional lower Rayleigh margin up to an arbitrarily small error. Equation (2) is uniform on this fixed finite-dimensional span by polarization. Minmax then gives
    liminf exp(-a_l) N_j(a_l) >= max(0,sigma_j(K_phi)-tau). (4)
For a zero right side it is immediate. No matching higher-index upper bound is claimed.

For bounded omega_l, after a further subsequence omega_l->omega_0, the twisted measure need not be constant phase because exp(2i a_l omega_l) may vary. But pass to a subsequence on that circle; the limit density is c exp(-i omega_0 r) by uniform convergence on compact r-ranges. The modulated pole has the same cross limit as the prime, so the normalized residual vanishes strongly on fixed envelopes. These bounded-carrier sequences are excluded from the definition of attainability above. Counting them as zero-cost positive Hankel modes would be an error.

TPH01 establishes the lower half of the proposed characterization and the tail estimates for TPH02. It uses no estimate of the attainable phase set beyond |phi|<=1. A positive lower bound from (3) would require actually producing a nontrivial attainable phase/cost pair; none is produced here. README unchanged.
