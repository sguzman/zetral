# V01 — Adversarial audit of the theta-cardinal candidate

Date: 2026-11-25. Audited exact manuscript v0.1, Git blob 6fcdb4c0a3cfe8de0a2986ff04f05a3c20c20952. This is a second AI-assisted mathematical review, not independent external review or formal verification. Verdict: no invalid step identified; several failure modes and two exposition improvements identified. The candidate remains conditional on RH and the stated source results.

## 1. Reopened source imports

- Masatoshi Suzuki, arXiv:2610.32704v1 (23 Oct 2026), https://arxiv.org/html/2610.32704v1. Introduction and (2.1)–(2.4): xi normalization is twice the conventional one; Fourier sign +izx; distinct real nonzero ordinates and weighted reciprocal-square summability; local form completion. Section 2.3 (2.8), (2.13): unitary sampling map, isometric local inclusion, diagonal operator on weighted sequence space. The source explicitly distinguishes the sampling model from its model-space function representative, so we may use the sample vector of any compact test function without identifying its Fourier transform with that representative. Theorem 3.3 (3.5): inverse of exact phase-pi differentiation extension equals the compression of the global inverse. Section 4 (4.2)–(4.5): decreasing positive inverse eigenvalues, variational characterization valid for indefinite compact operators, and reciprocation. All relevant definitions and statements were checked directly against the pinned HTML during V01. We import these results; this is not an independent audit of every proof in Suzuki's antecedents.
- Lagarias–Montague, arXiv:1106.4348v3 (18 Aug 2011), https://arxiv.org/html/1106.4348v3. Equations (1.1),(1.2) and Lemma 3.1(1)–(4) give the exact classical theta kernel, its parity, analyticity around the real axis, and Fourier representation. In particular the smooth even extension across zero is justified by Lemma 3.1, not by extending an arbitrary half-line formula. The manuscript should cite that lemma explicitly in revision. The precise stronger tail exponent follows directly from the series, not just the looser bound in Lemma 3.1(3).

## 2. Proof obligations and attempts to falsify

| Obligation | Disposition |
|---|---|
| Fourier sign | With F[f](z)=integral f(x)e^(izx) dx, integration by parts gives F[i f']=z F[f]. For g=-i e^(-i gamma x) integral_-infinity^x e^(i gamma t) f(t)dt, i g'=gamma g+f. No sign reversal. |
| Two-sided tail | For r<m, the total integral is F[f_r](gamma)=0 by the analytic quotient. This makes g equal to an outward right tail for x>=0. A further division after r=m would fail: F[f_m](gamma) is nonzero, so the left-end antiderivative acquires a nondecaying oscillation at +infinity. The manuscript stops exactly at m. |
| Multiplicity | Normalizer is sqrt(m) A^(m)(gamma)/m!, not A'(gamma) unless m=1. E.g. the toy entire function (z^2-1)^2 exp(-z^2) divided once at +1 still vanishes there; divided twice gives 4/e at +1 and zero at -1. With weight 2, division by sqrt(2) times 4/e gives unit weighted coordinate. Thus assuming simplicity is unnecessary and the proposed handling is correct. |
| Entire extension | For each compact set of complex z, exponential factors e^(abs(Im z) abs(x)) times any fixed polynomial in x are dominated by the double-exponential tail. Differentiation under the integral and the identity theorem justify analytic division, including at the removed zero. |
| Tail power | With y=e^(2 abs(x)), dx=dy/(2y) outward. Each integration lowers the exponent 9/4-r by one, with a constant depending on r. The derivative restores at most one power because i f_m'=gamma f_m+f_(m-1). |
| Smooth truncation | For a>=1, a-h>0. The absolute-value cusp is inside a constant part of the cutoff. The support lies strictly in (-a,a). Y=X exp(-2/X)>=X-2 and Y/X>=1/2. Both the derivative integral and transition-strip contribution have order X^(9/4-m)e^(-pi X); no extra factor X survives because strip length is h. |
| Full sampling norm | Every rho is real and nonzero. Since r and r' are integrable and r vanishes at both endpoints at infinity, abs(F[r](rho))<=||r'||_1/abs(rho). The weighted sum converges by source (2.2), including the target coordinate. Unweighted summability would not suffice for an arbitrary multiplicity distribution. |
| Variational estimate | E reduces the self-adjoint C. The compressed QP on E is positive with spectrum in [1-delta^2,1]; the claimed bound B-B^2<=delta^2 B follows by scalar functional calculus. The negative spectral endpoint is used explicitly. Positivity of the Ritz value follows from the threshold; reciprocation cannot be used before this. |
| Fixed index | Constants may depend on the selected n and actual derivatives. No estimate uniform in n, computable numerical certificate, lower asymptotic bound, or assertion of exact equality is made. |

## 3. Second derivation of the spectral step without projection geometry

This argument is an internal cross-check of the main lemma. It yields the same asymptotic order directly from the cardinal approximants and avoids proving the operator inequality B-B^2<=delta^2 B.

Let E be the n-dimensional leading positive eigenspace with orthonormal basis e_j and smallest eigenvalue lambda>0; let Q be its orthogonal projector. Let L=inf spectrum(C), and M the trial subspace. Given v_j in M with ||v_j-e_j||<=epsilon_j, put epsilon^2=sum_j epsilon_j^2. Define T:E->M by T(sum_j c_j e_j)=sum_j c_j v_j. Cauchy–Schwarz gives ||Tu-u||<=epsilon ||u||. For epsilon<1, T is injective, since ||Tu||>=(1-epsilon)||u||. Hence Y=T(E) has dimension n. For v=Tu, (I-Q)u=0, so
    ||(I-Q)v|| <= epsilon ||u|| <= epsilon/(1-epsilon) ||v||.
Because E reduces C, the Rayleigh quotient for nonzero v in Y is at least
    lambda-(lambda-L) [epsilon/(1-epsilon)]^2.
Once this is positive, the max-min lower bound and the ambient max-min upper bound imply
    0<=lambda-mu_n<=(lambda-L)[epsilon/(1-epsilon)]^2.
For epsilon<=1/2 the right side is <=4(lambda-L)epsilon^2. If that last quantity is <=lambda/2, then
    0<=1/mu_n-1/lambda<=8(lambda-L)epsilon^2/lambda^2.
Use the actual compactly truncated theta cardinal vectors as v_j; their weighted sample defects have epsilon^2=O_n(X^(5/2)e^(-2 pi X)). The theorem follows directly. This proof uses neither the local projection P_a nor strong convergence of P_a. It still uses Suzuki's compression theorem and the variational characterization. The constant is less sharp than the original projection proof, but asymptotically equivalent in order.

## 4. Counterexamples to tempting weaker hypotheses

These are analytical checks, not numerical experiments.
- Without an invariant E, Rayleigh error can be first order: for C=[[0,1],[1,0]], E=span(e_1), the Rayleigh quotient at e_1 is zero, whereas at cos(theta)e_1+sin(theta)e_2 it is sin(2theta). The angle-squared estimate would fail. Our E is a true invariant spectral subspace.
- A squared-angle estimate with only the positive endpoint and no lower bound fails on indefinite C: take C=diag(2,-3), trial line rotated by theta. The loss is exactly 5 sin^2(theta), not 2 sin^2(theta).
- An inverse eigenvalue estimate alone cannot be reciprocated uniformly if the approximation approaches zero. For lambda=1 and mu=epsilon>0, lambda-mu<=1 but 1/mu-1 diverges as epsilon goes to zero. The explicit half-lambda threshold is necessary.
- Strong convergence of nested projections alone does not fix a rate: let H=ell2(N), P_k project onto first k coordinates, C be rank-one orthogonal projection onto a normalized vector whose squared tail decays at an arbitrarily slow prescribed rate. Its leading compression eigenvalue equals ||P_k u||^2. This is a nested counterexample; it strengthens the earlier nonnested illustration in R04.

## 5. Verdict and onward obligations

No contradiction or missing mathematical implication found in the candidate as stated. The direct-trial-subspace argument is a separate derivation of the most delicate variational step. This is a self-audit, not a claim of peer review or Lean verification. V02 must compare the exact result against related theta/cardinal literature, including any already published fixed-index rate. V03 can target the scalar reciprocal lemma and the direct trial-subspace estimate; neither needs to re-formalize the whole RH proof. V04 must track explicit constants, including the cardinal normalizer; an exact multiplicity and a certified nonzero derivative cannot be silently supplied by numerical approximations. V05 must not equate the finite Fourier Riesz-root error with the exact cutoff error.

Revision items for V06: cite Lagarias–Montague Lemma 3.1 in addition to equations (1.1),(1.2); consider including the direct trial-space proof as a simpler alternative. No modification of the archived v0.1 manuscript is made during V01.
