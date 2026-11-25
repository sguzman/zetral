# WPR03 — Coherence exclusion remains an arithmetic issue: mean-value limits and lattice countermodel

2026-11-25. AI-assisted candidate deduction. Uses WPR02 and PBC01–03. No actual saturating state, off-line zero, numerical experiment, independent verification, RH proof or originality claim. Actual related-literature check this turn: Larry Guth and James Maynard, *New large value estimates for Dirichlet polynomials*, arXiv:2405.20552, https://arxiv.org/abs/2405.20552, HTML lines 8–22 (introduction and comparison with classical estimates), and 59–61 (large-values question). Their improvement is principally aimed at values around length^(3/4); this is not a full literature review of near-maximal phase alignment, and no theorem of theirs is asserted to exclude our regime. The elementary mean calculation below is proved directly.

## 1. Precise remaining arithmetic condition

WPR02 shows that if a sequence of unit ordinary form trials approaches the coarse upper depth constant one, there are X=exp(2a-4), shrinking logarithmic widths ell>=1/a and ell>=eta_a^(1/4), and real frequencies omega satisfying
    |omega| ell ->infinity,
    log(2+|omega|)=o(sqrt X),
    |Q_(X,ell)(omega)| ->1,
    Q_(X,ell)(t)=[sum_(X exp(-ell)<=p<=X) log p (X/p)^(it)]
                    /[sum_(X exp(-ell)<=p<=X) log p].     (1)
Here eta_a is the PNT relative error plus exp(-a/2), and WPR02 also establishes the lower frequency |omega|>=eta_a^(-1/2)/2. Replacing omega by its negative has no effect on the magnitude. All primes in the interval are included. Its total prime log weight S is asymptotic to X ell by PNT as used in WPR02. The number N of primes is asymptotic to X ell/log X, because their log weights lie in [log X-ell,log X]. Thus N=X^(1-o(1)) for these widths (ell>=1/a). The unnormalized polynomial with coefficients log p/log X has a near-maximal value of order X^(1-o(1)), not the X^(3/4) scale emphasized by the Guth–Maynard improvement.

A theorem excluding (1), e.g. a fixed strict coherence gap throughout the stated sequences of intervals and frequencies, would exclude saturation of the sharp coarse coefficient one: otherwise a near-saturating ordinary bottom eigenvector sequence would satisfy WPR02. It would not by itself prove that ordinary negative depths are o(exp(a)), prove a smaller growth exponent or RH. No such exclusion is derived in this batch.

## 2. What elementary moment bounds can and cannot certify

Put w_p=log p/S for the primes in (1), so sum w_p=1, V=sum w_p^2 is asymptotic to 1/N, and |Q'(t)|<=ell by centering at X. If |Q(t0)|>=1-epsilon with 0<epsilon<1/4, then |Q(t)|>=1-2epsilon on |t-t0|<=epsilon/ell. This follows from the derivative bound, with no probabilistic hypothesis.

For an integer m>=1, unique factorization gives
    Q(t)^m=X^(imt) sum_(n<=X^m) A_n n^(-it),
    sum_n |A_n|^2 <= m! V^m.
Indeed for each prime multiplicity vector of total degree m, the coefficient is the multinomial factor times the product of the w_p powers. The square of the multinomial factor is bounded by m! times that factor; summing yields the bound. On [-T,T], integration of each off-diagonal exponential gives an absolute bound 2/|log(n/k)|<=2 X^m/|n-k|. Cauchy-Schwarz bounds the coefficient correlation at each integer offset by sum|A_n|^2. Summing offsets with the elementary harmonic bound therefore gives
    int_(-T)^T |Q(t)|^(2m) dt
       <= [2T+4 X^m(1+m log X)] m! V^m.              (2)
The same proof works on translated time intervals of length 2T, since their phases have unit modulus. Markov's inequality gives a measure upper bound on the set |Q|>=1-2epsilon by dividing (2) by (1-2epsilon)^(2m). These estimates can show that near-maximal coherence is rare relative to a sufficiently long time interval. They are not a pointwise exclusion theorem.

In particular this crude bound cannot even certify that the exceptional set in a centered or shifted time interval containing [t0-epsilon/ell,t0+epsilon/ell] is smaller than that persistent peak interval. Its positive off-diagonal term alone is
    4(1+m log X) m! (X V)^m/(1-2epsilon)^(2m).
Since V>=1/N and N is asymptotic to X ell/log X, X V>=c log X/ell for all large X. For every m>=1 this displayed term is much larger than 2epsilon/ell (indeed already its m=1 order exceeds that width, and X V>1 thereafter). This is a limitation of the calculated UPPER bound, not a lower bound on the true moment or exceptional set. Choosing a moment degree so that X^m is smaller than T can yield a small relative measure, but does not cure this absolute-measure problem. The possible frequencies exp(o(sqrt X)) are enormous compared with polynomial heights, and a single persistent coherence peak suffices for (1). A moment-count bound or recent zero-density improvement cannot simply be interpreted as its exclusion.

## 3. Explicit lattice-quadrature countermodel to untwisted PNT reasoning

The following is a mathematical countermodel to using only smooth/untwisted prime-measure approximations. It is not the von Mangoldt sequence, is allowed to depend on a, and is not claimed to come from any zero set.

Set h_a=exp(-a). Replace the true prime-shift operator on I=(-a,a) by
    Ptilde_a=sum_(k>=1, k h_a<=2a) h_a exp(k h_a/2)
                          (T_(k h_a)+T_(-k h_a)).
Keep the same ordinary archimedean compressed multiplier and exact pole H_a. The analogue of the unweighted prime summatory function is
    psitilde_a(X)=sum_(k>=1, k h_a<=log X) h_a exp(k h_a).
The geometric sum, or upper/lower exponential Riemann sums, gives
    |psitilde_a(X)/X-1|<=C(h_a+1/X), X>=1,
with absolute C for a>=1. For example the sum approximates the integral int_0^log X exp(s) ds=X-1 with error <=C h_a X, including the final partial cell. Thus its relative summatory error on X>=exp(a) is O(exp(-a)), stronger than the PNT error control used in PBC03. No arithmetic integer support or unique factorization is retained; the variables exp(k h_a) are just model support locations.

The endpoint cross block is the Riemann sum for the same density exp(-r/2)dr, with grid r=2a-k h_a and weights h_a exp(-r/2). Its weighted Schur row ratio at 0<t<a is
    exp(-2a+t) sum_(a-t<k h_a<2a-t) h_a exp(k h_a)
       <= h_a/(1-exp(-h_a))=1+O(h_a).
The same-half normalized blocks are O(exp(-a/2)) by the geometric sum. Riemann convergence on fixed compact smooth profiles and the Schur majorant h(t)=exp(-t/2) give the same strong rank-two boundary limit C=[0 h tensor h; h tensor h 0] and normalized norm one as in PBC01. The pole norm-converges to C as before. The upper defect-norm argument of PBC02 (decompose the cross block into span h and its complement) therefore gives
    limsup exp(-a)||Ptilde_a-H_a||<=1.
In particular the model's ordinary negative bottom depth Ntilde(a) satisfies limsup exp(-a) Ntilde(a)<=1 by the same archimedean lower bound.

But now modulation by omega_a=2pi/h_a=2pi exp(a) commutes EXACTLY with Ptilde_a because every shift is an integer multiple of h_a. For a fixed real compact smooth half-line function g with ||g||=1, place the two endpoint profiles (g,g)/sqrt(2) in the physical interval via U_a*, for all a containing the support, to obtain a unit compact smooth trial f_a. The unmodulated normalized prime expectation tends to |<g,h>|^2 by the strong boundary limit. The modulated trial F_a(x)=exp(i omega_a x) f_a(x) has exactly the same prime expectation. In endpoint coordinates its two fixed envelopes carry oscillating factors exp(±i omega_a t) and irrelevant constant phases. Hence the boundary h pairings tend to zero by Riemann–Lebesgue; the normalized pole expectation tends to zero by its norm-convergent finite-rank limit. The archimedean expectation is O_g(1+log(2+omega_a))=O_g(a): use |alpha|<=Cw, translation/reflection invariance of the Fourier norm of each fixed envelope, the triangle inequality for their log norm, and w(t+omega)<=w(t)+log(2+|omega|). This cost is o(exp(a)).

It follows that the actual compact-resolvent ordinary model operator, the same compressed archimedean operator plus this bounded shift/pole perturbation, has
    liminf exp(-a) Ntilde(a) >= |<g,h>|^2.
Compact smooth unit g can approximate h in L2(0,infinity), where ||h||=1. Taking the supremum over those fixed trials after the limit gives
    lim_(a->infinity) exp(-a) Ntilde(a)=1.                 (3)
Thus a discrete measure with excellent untwisted PNT-like summatory control, the correct strong boundary cancellation, and inexpensive logarithmic carrier energy can saturate the coarse upper constant. This verifies a logical obstruction to any proof that uses ONLY those approximations. It does not establish saturation for the actual prime shifts. The distinction is the arithmetic phase structure; the lattice model deliberately makes every shift commensurable.

WPR03 complete: precise coherence exclusion target, limitations of the elementary high-moment bound, and an explicit saturating ordinary lattice model despite strong PNT-like cancellation. WPR04 next: audit and decide whether a more productive route exists than pursuing a currently unproved uniform high-frequency prime-phase estimate. No actual zeta zero or ordinary anomalous state, numerical experiment, independent proof review or priority claim. README unchanged.
