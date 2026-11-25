# Zetral — DCR03: support-sensitive multiplicity bound and countermodel

2026-11-25. Campaign XII mathematical milestone 3/4. Internal candidate deductions, no RH assumption, originality claim, formal verification, or independent human review. Preserve the DCR01 and DCR02 recovery notes alongside this file. Current main 1126c25b856ca6882b134d819cb163f1474b7bbd (U04 compact recovery), STATE.md and COORDINATION.md still stale; Campaign XII plan and DCR01 paths returned 404. The new DCR03 create returned HTTP 409: Repository rule violations found — Timed out validating the rule. No remote write success is claimed. Do not bypass repository rules.

## Source provenance
Direct primary-source inspection this turn: Suzuki arXiv:2606.09096v4 https://arxiv.org/html/2606.09096v4 §1.1 (Weil functional), §2.4 (Fourier archimedean and prime terms, real digamma asymptotic), §2.5 (2.9)–(2.11) and §3.1 (3.1 and log form domain). Connes–van Suijlekom arXiv:2511.23257 abstract only. No full comparison or priority claim. The pole decomposition below is an elementary deduction from the explicit functional, not a quotation from the source.

## 1. Support-sensitive prime penalty
Write alpha(t)=Re psi(1/4+it/2)-log pi. It is strictly increasing in |t| for positive |t| by the convergent digamma series, and tends to infinity. The exact form on a supported window is the Fourier alpha energy minus twice the real prime correlations, plus the pole energy 2|int cosh(x/2)f(x)dx|^2-2|int sinh(x/2)f(x)dx|^2. The pole expression follows from 2cosh((x-y)/2). Extend the identity by density in the log form domain, with bounded prime and pole terms at fixed a.

For 0<d<=L=2a, truncate the translation by d to the interval. Decompose L2(-a,a) by residues r in [0,d), grouping x=-a+r+kd with k nonnegative and x<a. The resulting finite chains have at most N=ceil(L/d) sites for almost every r (if L/d is integral the longer endpoint chain has measure zero). Translation is the nilpotent unilateral shift on each chain. Its real part on an n-site chain has off-diagonal entries 1/2 and largest eigenvalue cos(pi/(n+1)), from the explicit sine eigenvectors. Thus Re <T_d f,f> <= cos(pi/(N+1))||f||^2 after integrating over r. For d=L the correlation is zero. Define

S_eff(a)=sum_{2<=n<=exp(2a)} Lambda(n)/sqrt(n) cos(pi/(ceil(2a/log n)+1)).

This improves the penalty S_a from DCR02 whenever there is a nonzero prime coefficient in the sum. For an endpoint shift the coefficient is zero. No assertion that all individual correlation extrema can be attained simultaneously.

## 2. Chebyshev interpolation and odd pole bound
U04 states that an m-dimensional bottom eigenspace admits a generator h with derivatives through m-1 in the same eigenspace. Let j=m-1>=1, f=h^(j)/||h^(j)||_2. By compact-support weak integration by parts, f is orthogonal to polynomials of degree <j. Interpolate exp(itx) at the j Chebyshev roots scaled to [-a,a]. The monic nodal polynomial has sup norm 2^(1-j)a^j. For a complex-valued smooth function on the real interval, the divided difference remainder is bounded by sup |g^(j)|/j! times the product of nodal distances; this follows from the integral over the simplex for the divided difference (volume 1/j!), with the repeated-node case by continuity. For real t, the derivative norm is |t|^j. Orthogonality to the interpolating polynomial and Cauchy–Schwarz give

|F[f](t)| <= sqrt(2a) 2^(1-j)(a|t|)^j/j!.

Therefore the Fourier probability of [-R,R] is at most

delta_j(R)=min(1, (2aR/(pi(2j+1))) [2^(1-j)(aR)^j/j!]^2).

Here the integral of |t|^(2j) on [-R,R] is 2R^(2j+1)/(2j+1), and the Fourier measure is dt/(2pi). The same interpolation for exp(x/2) gives |int exp(x/2)f(x)dx| <= sqrt(2a)e^(a/2)2^(1-j)(a/2)^j/j!. The derivative has definite parity by U04. If f is odd, its sinh moment equals the exp(x/2) moment, and its cosh moment is zero; if even, the pole energy is nonnegative. A parity-independent lower bound is -P_j, where

P_j=4a e^a [2^(1-j)(a/2)^j/j!]^2.

One can use P_j=0 for an even member. By monotonicity of alpha and the probability bound, every bottom eigenspace of dimension m>=2 must obey, for every R>0,

lambda+2 S_eff+P_j >= alpha(R)-delta_j(R)[alpha(R)-alpha(0)], j=m-1.

For R=j/(e a), the factorial bound j! >= (j/e)^j yields delta_j(R)<=2j*4^(1-j)/(pi e(2j+1))<1/2 for j>=1. Hence

alpha((m-1)/(e a)) <= 2lambda+4S_eff+2P_(m-1)-alpha(0).

At fixed a and for any available test Rayleigh upper bound U>=lambda, the inequality with U in place of lambda eventually fails as j grows: alpha tends to infinity and P_j tends to zero, with P_(j+1)/P_j=(a/(4(j+1)))^2. More explicitly, once j>=1 with j+1>=a/4 and alpha(j/(e a))>2U+4S_eff+2P_j-alpha(0), the same strict exclusion holds for all larger j; thus m<=j. This gives a finite, arithmetic, test-dependent bound that improves the frequency scale and prime penalty of DCR02, while the odd pole correction can weaken the bound in particular regimes. Retain both inequalities and take the stronger available bound. No numerical evaluation or general simplicity result.

## 3. Countermodel to abstract simplicity
On supported L2(-a,a) with the log form domain, set

q_0(f)=int log(1+t^2)|F[f](t)|^2 dt/(2pi),
q_c(f)=q_0(f)+2c(|int cosh(x/2)f(x)dx|^2-|int sinh(x/2)f(x)dx|^2), c>=0.

The log domain is closed; its bounded subsets are relatively compact in L2 by the Fourier tail bound and compactness of the restriction of the Fourier transform from the supported interval to any finite frequency interval (Hilbert–Schmidt). The bounded pole perturbation preserves lower semiboundedness and compact resolvent. Reflection and conjugation preserve the forms. The q_0 term is translation invariant on compactly supported functions. The pole term is the quadratic form of the difference kernel 2c cosh((x-y)/2), so simultaneous translations preserve it too whenever the support remains in the interval. On the core, identical Fourier modulus on the real line implies identical autocorrelation and hence identical form value, including the pole term; alternatively the entire functions F(z)overline(F(conj(z))) agree by the identity theorem. The same identity holds on the form domain. Thus zero flipping of a nonreal Fourier zero preserves the energy, just as in U03.

At c=0 the even bottom is strictly below the odd bottom. Indeed an odd real normalized minimizer exists by compact resolvent and reality (take a nonzero real or imaginary part of an odd minimizer). It has positive and negative parts of nonzero measure by oddness. Use

log(1+t^2)=int_0^infty (1-exp(-s t^2)) exp(-s) ds/s.

By Tonelli and Plancherel, q_0(f) is the integral of nonnegative heat energies ||f||^2-<e^(s Delta)f,f>. Replacing real f by |f| preserves the norm and strictly increases the heat correlation at every s>0, since the heat kernel is strictly positive and f changes sign. Therefore |f| is in the form domain and q_0(|f|)<q_0(f); it is even. Consequently the even infimum is strictly lower than the odd infimum at c=0. For c>=0 the even lowest eigenvalue is nondecreasing, while the odd lowest tends to minus infinity by testing any supported smooth odd function with nonzero sinh moment. Both are continuous (Lipschitz by the bounded rank-two perturbation and minmax on fixed parity spaces). The intermediate value theorem gives c_*>0 with equal even and odd bottom levels. At this parameter the total ground multiplicity is at least two. The model retains translation invariance, logarithmic growth, reflection and zero-flipping symmetry; hence these properties alone cannot yield simplicity. This does not contradict any theorem for the actual Weil form and does not assert that its coefficient corresponds to c_*.

## 4. Coordination and resume
Actual current worker branch search found worker/u02-w02. Pinned head d59d91e93084615ea3570dbe3a040774c8172623; HANDOFF.md blob 80ffb3c9b6ea3b9e14523aff0a062145aa51b3d0, READY_FOR_REVIEW, scope U02 all-index continuity extension. Worker reports normal Git push returned Internal Server Error, repository API succeeded for its evidence. Full audit not yet read or accepted. Earlier three reviews K02-W04, U01-W01, U02-W01 are scoped AI reviews pending integration; see DCR02 checkpoint for exact hashes and audit scope.

DCR03 complete mathematically as internal candidate. DCR04: consolidate DCR01–03, audit assumptions, and choose a non-redundant next campaign. Concrete direction: quotient by critical nullspace and division by its real-zero generator H, investigate a closed symmetric differentiation operator and its extension problem in the degenerate metric without RH. Need verify whether nullspace reduction respects domain and derivative (it generally does not without restricting a subdomain). This is a research question, not a claimed construction. Do not activate a new campaign remotely before its plan and state are saved. Attempt normal authorized GitHub writes; no rule bypass, no needless retries, no outside submission or expenses. Before resuming read AGENTS, STATE, COORDINATION, active plan, and current handoffs. If remote rules remain unavailable, preserve cumulative local evidence, do not treat stale remote state as scientific regression. No completion sentinel.
