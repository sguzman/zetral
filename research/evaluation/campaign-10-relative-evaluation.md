# Campaign X — Relative derivative evaluation growth

Consolidation, 2026-11-25. Internal AI-assisted candidate deductions under RH and the local/global sampling framework of Suzuki, not a proof of RH, established novelty, independent human review, or formal verification.

## Setup and dependency boundary

Let X=exp(2a), F[f](z)=integral f(x)exp(izx)dx, and q(f,f)=sum_gamma m_gamma |F[f](gamma)|^2 for compact smooth tests in (-a,a). Under RH and Suzuki's positive local form, write M(a)=||u_0||_q, N(a)=||u'_0||_q, L(a)=N(a)^2/M(a). M,N are the suprema of the respective zero and derivative evaluation moduli divided by ||f||_q. They are positive, finite and nondecreasing by nesting. L02 gives M(a)>=c exp(pi X)/(X^(7/4)sqrt(log X)); K01 gives u'_0=C_a u_0, hence L=M d_a^2<=||C||^2 M, with d_a=||C_a u_0/M||->0 from Campaign VII. These inherited claims are not unconditional constructions.

## 1. Absolute derivative witness and failure of the initial relative route

N01 uses the inverse Fourier kernel Phi of xi_0(1/2-iz), with xi_0 normalized by the factor 1/2. The odd witness is a smooth truncation of Phi', with F[Phi']=-iz F[Phi] and nonzero derivative at zero. For y=exp(2|x|), |Phi^(j)(x)|<=C_j y^(9/4+j)exp(-pi y) for j<=2. Cut off at distance O(1/X) from the endpoints. The omitted derivative-kernel tail r obeys ||r||_1=O(X^(9/4)exp(-pi X)) and ||r'||_1=O(X^(13/4)exp(-pi X)). Since F[Phi'] vanishes on Gamma, splitting the sampled tail at X using the zero-counting bound gives q(w,w)=O(X^(11/2)log X exp(-2pi X)). The derivative evaluation stays bounded away from zero. Thus

    N(a)^2 >= c exp(2pi X)/(X^(11/2) log X).

With the even bottom lambda_a^ev of the L2-normalized Weil form, M<=sqrt(log X/lambda_a^ev), since the integral vanishes on odd tests. This implies L>=c sqrt(lambda_a^ev) exp(2pi X)/(X^(11/2)(log X)^(3/2)). The resulting sufficient condition lambda_a^ev exp(4pi X)/(X^11(log X)^3)->infinity is unattainable: N02 matches the normalization of Andrews–Connes–La Gatta, whose Theorem 3.1 upper bound is O(X^(9/2)(log X)^3 exp(-4pi X)). The sufficient-condition expression is consequently O(X^(-13/2)). Failure of this sufficient route is not evidence that L fails to diverge.

## 2. Stronger prolate route with extra assumptions

N02 imports the normalized prolate trial integral bounded away from zero and energy O(Y^(9/2)(log Y)^3 exp(-4pi Y)), Y=exp(2b), from the stated trial estimates in Andrews–Connes–La Gatta (assume RH and full Hypothesis 3.4 to retain the hypotheses of that discussion). Set h=1/X, b=a-2h, so Y=X-O(1). The translation difference of this trial multiplies its Fourier transform by i sin(hz), has derivative ih times its integral, and does not increase q under RH. Therefore

    N(a)^2 >= c exp(4pi X)/(X^(13/2)(log X)^3).

With the same even-sector bound on M, L>=c sqrt(lambda_a^ev) exp(4pi X)/(X^(13/2)(log X)^(7/2)). The revised sufficient threshold is lambda_a^ev exp(8pi X)/(X^13(log X)^7)->infinity, given the trial inputs. The conjectured lower Fuchs-ladder bound lambda_a^ev>=c X^(9/2)exp(-4pi X) would then give L>=c exp(2pi X)/(X^(17/4)(log X)^(7/2))->infinity. Hypothesis 3.4 is unproved, not a result of RH alone. Mori's RH+LP lower bound exp(-C X log log X) and much weaker RH-only sampling lower bound do not guarantee either sufficient threshold. N02 contains the precise source audit and assumptions.

## 3. RH-only nested-window theorem

For any 0<h<a, translate a compact test from (-a+h,a-h) by +/-h, subtract and divide by two. At real samples the multiplier i sin(h gamma) has modulus at most one, and derivative at zero is ih F[f](0). Taking suprema yields

    N(a)>=h M(a-h),     L(a)>=h^2 M(a-h)^2/M(a).       (10.1)

No extremizer regularity, LP hypothesis or sharp coercivity lower bound is needed.

Fix 0<=kappa<1, delta=(1-kappa)/4, r=(3+kappa)/4, 1<s<1/r. Put B=log M and choose a tail A>1 with B(A)>0. At any bad a>=A with L<=M^kappa, taking h=exp(-delta B(a)) in (10.1) gives B(a-h)<=r B(a). Set B_j=s^j B(A), T_j=inf{t>0:B(t)>=B_j}. Select j with B_j<=B(a)<s B_j. Since B(a-h)<B_j, monotonicity implies a-h<=T_j<=a, including nonattained first crossings. Thus each bad a belongs to [T_j,T_j+exp(-delta B_j)] and

    |{a>=A:L(a)<=M(a)^kappa}|
      <= exp(-delta B(A))/(1-exp(-delta(s-1)B(A))).       (10.2)

The geometric bound uses s^j>=1+j(s-1). The right side tends to zero, and is O_kappa(X_A^(7delta/4)(log X_A)^(delta/2)exp(-pi delta X_A)), X_A=exp(2A). The measure is in a, not X.

It follows that limsup L=infinity and L->infinity off a finite-measure exceptional set. Choose kappa_j increasing to 1 and A_j with the corresponding bad-tail measures <=2^(-j). Their union has finite measure. Off that union log L/log M->1, using L<=||C||^2 M. This is logarithmic equivalence only, compatible with L/M=d_a^2->0.

N03 also constructs a continuous synthetic example B=K exp(2a)+S(a), K>pi, with increments 2 B(n) on ramps of width exp(-4 B(n)) at integers n>=2. Set M=exp B and N=sup_{0<h<a} h M(a-h). Then M,N are nondecreasing, B=O(exp(2a)), N/M->0 and (10.1) holds. At each ramp endpoint a_n, B(a_n) lies between 3B(n) and 4B(n). Splitting h at the ramp width bounds L(a_n) by max(exp(-4B(n)), a_n^2 exp(-B(n))), tending to zero. This is a countermodel to the scalar inference, not a realization by the Weil form.

## 4. Pointwise regularity target and its limitation

A direct quantitative criterion follows from (10.1). If some fixed h>0 and epsilon>0 satisfy B(a-h)>=(1/2+epsilon)B(a) eventually, then L(a)>=h^2 exp(2epsilon B(a))->infinity. More generally, if there exist shifts 0<h(a)<a with log(1/h(a))=o(B(a)) and liminf B(a-h(a))/B(a)>1/2, the same logarithmic estimate gives pointwise divergence. In particular B(a)~c exp(2a), c>0, would suffice (take h<(log 2)/2). Even two-sided bounds c exp(2a)<=B(a)<=C exp(2a) suffice if C<2c: choose h with 2c exp(-2h)>C. These are conditional criteria, not estimates proved for the actual Weil norm. Conversely along any sequence with bounded L, every fixed h>0 satisfies B(a-h)<=B(a)/2+O_h(1); a bounded subsequence requires at least a near doubling of log M over every fixed preceding shift. This follows directly by taking logs in (10.1), not by assuming differentiability.

Follow-up source inspection (after the original N04 commit): Suzuki arXiv:2610.32704v1 Proposition 2.1 and (2.5)–(2.8) establish the local de Branges spaces and kernels under the stated assumptions. Suzuki arXiv:2606.09096v4 Theorem 1.3 and sections 4.2–4.4, especially (4.5), establish lowest-eigenvalue continuity by scaling and compactness. Neither inspected argument supplies the required uniform relative control as a tends to infinity. The scaled prime terms involve compressed translations; operator-norm smallness cannot be inferred merely from strong continuity of translations, particularly with a degenerating positive bottom. Even an additive perturbation estimate must be controlled relative to the small form values or specifically to the integral extremizer. A de Branges kernel identity at fixed a likewise does not bound the variation in a without additional quantitative information on the chain. These are barriers to the proposed argument, not proofs that no route exists. No usable all-window relative estimate was established. Do not turn this into an open-ended regularity campaign without a concrete method.

## 5. Spectral consequence and status

For each fixed distinct positive ordinate gamma, retain R03's candidate identity M(tau_0-gamma)=gamma(1+gamma^2)L+o(1+L). Wherever L->infinity, fixed tau=gamma gives negative detuning D=gamma-tau_0~ -gamma(1+gamma^2)d_a^2 and M|D|->infinity. The lower eigenvector escapes weakly and the upper is retained; the gap is asymptotic to gamma(1+gamma^2)d_a^2 along these windows. Under RH and inherited candidate identities this holds off the exceptional set of (10.2); with the additional N02 prolate/Fuchs assumptions it holds at every sufficiently large window in the asymptotic sense. No uniformity in gamma or pointwise RH-only result is claimed.

Campaign X's bounded objective is met by sharply delimiting the scalar, not by settling RH or all-window divergence. N01–N03 proofs and sources are retained in the adjacent notes. N04 internal review checked threshold crossing, powers, detuning sign and scalar obstruction; no independent audit, numerical or formal verification, or full re-proof of source imports. K02-W04 handoff ref returned 404 again. Do not count Codex work as accepted. No external submission. No new campaign opened on an unsupported pointwise conjecture.

Sources: [N01](N01-derivative-witness.md), [N02](N02-coercivity-audit.md), [N03](N03-nested-window-growth.md); Suzuki https://arxiv.org/html/2610.32704v1 and https://arxiv.org/html/2606.09096v4; Andrews–Connes–La Gatta https://arxiv.org/html/2611.13129v1; Mori Paper IV, source and version in N02. Earlier source and run claims are historical, not newly reverified here.

### Provenance correction (2026-11-25, follow-up)

The original N04 commit described the Suzuki source inspection as current-turn work, but that wording was not backed by direct retrieval during that turn. The follow-up actually retrieved arXiv:2610.32704v1 Proposition 2.1, (2.5)–(2.9), and arXiv:2606.09096v4 §§4.2–4.4, (4.1)–(4.9), including the compactness and translation-continuity argument. The narrower claim about the scope of those passages is now directly supported: they give fixed-window kernels and local continuity, not the quantitative growing-window estimate needed in §4. No change to the mathematical deductions or campaign closure. Exact branch search for worker/k02-w04 returned no matches; no handoff received. No new campaign opened.
