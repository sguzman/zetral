# N02 — Coercivity literature audit and a revised sufficient route

25 November 2026. This is a bounded literature comparison and conditional deduction, not a proof of RH or of the conjectural lower Fuchs ladder. The original N01 witness inequality remains valid under its hypotheses, but the proposed sufficient coercivity threshold is incompatible with known upper estimates. Record this negative finding explicitly.

## 1. Sources actually retrieved in this turn

- Andrews, Connes and La Gatta, arXiv:2611.13129v1, https://arxiv.org/html/2611.13129v1 (9 November 2026): §2.1 (6)–(8), §2.3 (13), §2.5 (17)–(18), Theorem 2.4 (25), §3.2 Theorems 3.1–3.2 (30)–(31), Hypothesis 3.4 (32), Remark 3.5, §6.1 and §6.3–6.4. Direct HTML excerpts returned.
- Suzuki, arXiv:2606.09096v4, https://arxiv.org/html/2606.09096v4, introduction, (1.1), including explicit a=log(lambda) equivalence to the multiplicative window; arXiv:2610.32704v1, https://arxiv.org/html/2610.32704v1, introduction and (2.8). Direct HTML excerpts returned.
- Ryota Mori, *A conditional lower bound for windowed Weil forms from sampling on the zeros of zeta*, v2, 10 October 2026, DOI 10.5281/zenodo.23282860. DOI redirect was inaccessible via web. Retrieved the actual LaTeX source through GitHub instead: https://github.com/moriryota/prolate-weil-bounds/blob/main/paper-IV/main.tex, blob fe494d02be708e67152779f625d5026f7c92f653, lines 1–210 and 205–266. Read statements, setting, sampling reduction and final theorem proof. This is the author's preprint, not an independently certified result. No full audit of Voss's external theorem or every proof detail.
- K02-W04 worker handoff again returned 404; no acknowledgment or evidence.

## 2. Normalization and the original route's obstruction

Use lambda (multiplicative window parameter) = exp(a), X=lambda^2=exp(2a). The map g(u)->f(x)=g(exp(x)) is unitary from L2([lambda^-1,lambda],du/u) to L2(-a,a). Under this substitution F(exp(t))=integral f(x)f(x+t)dx for the real functions in Andrews–Connes–La Gatta §2.1. The pole, prime and archimedean terms (6)–(8) become the terms in Suzuki's introductory explicit formula on the symmetric autocorrelation. For example x^(1/2)/(x-x^-1) becomes exp(t/2)/(exp(t)-exp(-t)), and inversion becomes reflection. Hermitian extension agrees for complex functions, and the compact smooth core defines the same closed quadratic form. Thus their epsilon_lambda(1) is precisely our even-sector bottom lambda_a^ev (not the full bottom unless evenness of the latter is established). No extra factor of two in window length or exponential parameter is warranted.

The Fuchs defect delta_n=1-|chi_n| is half the concentration defect asymptotically, since 1-chi_n^2=delta_n(2-delta_n). Their (17)–(18) with prolate parameter 2pi lambda^2 give, for fixed n, delta_n asymptotic to a positive constant times X^(n+1/2) exp(-4pi X). In particular delta_4 has power 9/2, not 9, in X.

Theorem 3.1 gives epsilon_lambda(1)<=C delta_4(log lambda)^3. Theorem 3.2 provides corresponding sector upper bounds. The lower half of Hypothesis 3.4, not proved in that paper (Remark 3.5), would give epsilon_lambda(1)>=c delta_4, and an odd bottom >=c delta_6. The upper halves at the log power 1 are also stronger than the stated proved log power 3.

Consequently, already the stated unconditional even-sector upper bound implies

    lambda_a <= lambda_a^ev <= C X^(9/2)(log X)^3 exp(-4pi X).

This rules out the N01 sufficient threshold lambda_a^ev exp(4pi X)/(X^11(log X)^3)->infinity: the left side is O(X^(-13/2)) and tends to zero. In particular lambda_a^ev>=exp(-(4pi-epsilon)X) eventually for any fixed epsilon>0 is incompatible with the upper bound. The sufficient implication N01.3 remains logically valid but cannot resolve this problem via such coercivity. Substituting just the hypothesized Fuchs lower bound into N01.3 provides a lower bound of order X^(-13/4)/(log X)^(3/2), which tends to zero and does not imply divergence. No conclusion L_a->0 follows from this inadequate lower bound. This is a correction to the research direction, not a disproof of the differentiated-theta estimate.

## 3. Mori Paper IV: what its actual lower bounds say

The author's setting explicitly uses mu=lambda^2=X, a=log lambda and s=log mu=2a, and the bottom of W on L2(-a,a). The sampling reduction in §2 uses g(x)=F[f](pi x/a), with ||g||_2^2=2a||f||_2^2. Its lower inequality lambda_min>=s A((a/pi)Gamma') for a chosen distinct subset Gamma' follows by RH, Plancherel and dropping multiplicities >=1. This matches the q normalization in N01.

The main Theorem H requires RH AND (LP), a uniform bound on unordered close labelled pairs in every bounded interval J, including distance zero for multiplicities:

    P_h(J)<=C_P(h |J| L_J^2+|J|+L_J^2),
    L_J=log(2+max(2,sup_(t in J)|t|)), 0<h<=h_0.

Theorem H states lambda_min>=exp(-C X log log X) eventually. LP is not derived from RH or ordinary averaged pair correlation in the paper. Theorem I under RH alone states (a) lambda_min>=exp(-exp(C X^B)) and (b) lambda_min>=exp(-C K_X X log log X), where K_X>=1 measures the deficit after close-pair thinning up to height exp(X^B). The proof of (b) gives a lower bound prefactor pi^2 log X/108 times exp[-(X K_X+4)Z], Z=6 log log X-2 log c_0+(log C_V)/2; LP bounds K_X. The explicit lower estimate in (a) is much weaker. These are asserted analytic results of the preprint, not verified machine computations. Their proof uses the finite-deficit sampling bound and the density-margin/separation costs, as detailed in §4–6. No sharp constant 4pi or 8pi is established by them. Neither the RH-only bound nor the LP-dependent lower estimate provides the N01 criterion; indeed the N01 criterion is impossible by §2. Finite-window positivity certificates in the repository are not growing-window lower estimates. The source itself labels constants effective but not computed, not formalized or independently human reviewed.

## 4. A revised conditional route via a prolate witness

The same Andrews–Connes–La Gatta preprint supplies a stronger numerator witness than the unmodified theta truncation. Use the normalized smooth real test vector k_lambda in Theorem 3.1, whose q energy is bounded by C delta_4(log lambda)^3. The source §6.3 states that after L2 normalization k_lambda approaches theta/||theta|| at rate O(lambda^-2) in L2 of the window. Theorem 2.4 gives a nonzero full integral of theta in d*u, as its Mellin value at zero. In particular, on the growing log window the difference of integrals is bounded by sqrt(2b) times the L2 error, where b=log lambda, and the integral of theta over the window tends to its full integral. Thus the stated trial-vector estimates imply |integral k_lambda d*u|>=c_*>0 eventually. We use this convergence assertion as an explicit source input, not a separately re-proved theorem; §6 is presented under positivity and gap hypotheses. For the conditional conclusion below assume RH and full Hypothesis 3.4, so those hypotheses are satisfied. One could weaken those inputs by proving the normalized trial integral bound directly; we do not assume it under RH alone without checking the supporting estimates.

Let a be the target half-width, X=exp(2a), h=1/X and b=a-2h. Set Y=exp(2b)=X exp(-4/X)=X-4+O(1/X). Take f_b(x)=k_(exp(b))(exp(x)), L2 normalized and supported on [-b,b]. The two source trial-vector inputs give

    |F[f_b](0)|>=c_*,
    q(f_b,f_b)<=C Y^(9/2)(log Y)^3 exp(-4pi Y).

The source states the trial is smooth; its support, including after shifts by ±h, lies strictly within (-a,a), so it is admissible for q_a. Under RH the form norm on a given compact test is independent of the enclosing window. Define

    w(x)=[f_b(x-h)-f_b(x+h)]/2.

Then F[w](z)=i sin(hz) F[f_b](z), F[w]'(0)=i h F[f_b](0). Under RH |sin(h gamma)|<=1 at every sampled ordinate, so q_a(w,w)<=q(f_b,f_b). No assumption of oddness of f_b is necessary, because F[w](0)=0 and the odd part alone retains the derivative and cannot increase its form norm. By the same Riesz argument as N01, and Y=X-O(1),

    N_a^2 >= h^2 |F[f_b](0)|^2/q_a(w,w)
          >= c exp(4pi X)/(X^(13/2)(log X)^3).          (N02.1)

The strict support margin avoids any endpoint/core ambiguity. This is a conditional deduction from the stated trial estimates; no actual prolate numerical solver or independent proof of those estimates was performed. Similarly the unshifted f_b gives

    M_a >= c exp(2pi X)/(X^(9/4)(log X)^(3/2)).

With these trial estimates, even the direct sufficient upper bound on M_a proposed in N01 is incompatible with this lower bound.

Combining (N02.1) with M_a<=sqrt(log X/lambda_a^ev) gives the revised sufficient inequality

    L_a >= c sqrt(lambda_a^ev) exp(4pi X)/
                      [X^(13/2)(log X)^(7/2)].

Thus lambda_a^ev exp(8pi X)/(X^13(log X)^7)->infinity would suffice, provided the trial-vector inputs above hold. This improved threshold is compatible with the known upper scale. In particular under RH and Hypothesis 3.4 (with the trial estimates as stated), the lower Fuchs bound lambda_a^ev>=c X^(9/2) exp(-4pi X) implies

    L_a >= c exp(2pi X)/(X^(17/4)(log X)^(7/2)) -> infinity.

This settles the regime only under those additional hypotheses and the earlier resonance candidate identities: R03 implies sigma_a->-infinity, the escaping branch lies below the retained branch, and the gap is asymptotic to gamma(1+gamma^2)d_a^2. No RH-only conclusion. Mori's LP bound still cannot guarantee this pointwise improved threshold, since log log X grows without bound.

## 5. Next bounded investigation

N03 should investigate direct translation comparisons of the evaluation norms in nested windows. For any 0<h<a and compact f in (-a+h,a-h), the same translation-difference test has derivative i h F[f](0) and no larger sample norm. Taking the supremum gives N_a>=h M_(a-h), hence L_a>=h^2 M_(a-h)^2/M_a. This can yield a nontrivial subsequential obstruction to bounded L_a when an upper growth bound for log M_a is available, even without pointwise coercivity at the 8pi scale. In particular assess RH+LP via Mori's asserted bound log M_a=O(X log log X), and whether RH alone gives any useful consequence; do not infer a pointwise limit from limsup. Investigate optimization over h and monotonicity, not another impossible N01 threshold. Explicitly distinguish the source's stronger trial-vector assumptions from a proof under RH alone.

No new numerical or Lean run, no human review or originality claim. The current source retrieval is supported by actual web and GitHub tool responses, not the prior turns' unverified descriptions. Historical numerical-rerun claims remain unverified. No external submission.
