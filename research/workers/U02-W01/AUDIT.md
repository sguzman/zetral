# U02-W01 — independent audit of indexed monotonicity and translate Gram bound

Date: 2026-11-25 UTC. Baseline `d755df7`. AI-assisted mathematical audit, not human review, formal verification or a novelty assessment. Scope is U02's strict indexed-eigenvalue argument and explicit equally spaced translate-Gram estimate; it excludes the U02 prior-art survey and active U03.

## Source context checked

I directly retrieved Suzuki, *Weil's quadratic form via the screw function*, arXiv:2606.09096v4, HTML `https://arxiv.org/html/2606.09096v4` (1,215,591 bytes). Theorem 1.1 supplies the Friedrichs realization with lower-bounded discrete spectrum and finite-multiplicity eigenvalues; Corollary 1.2 supplies the compact-test form-core statement; Theorem 1.3 supplies continuity of the bottom. The quantitative translate estimate and indexed-ordering proof audited below are internal derivations in U02, not claims imported from Suzuki. I did not re-audit the separate continuity extension for every indexed eigenvalue.

Reproducible fetch (standard library):

```sh
python - <<'PY'
import urllib.request
u='https://arxiv.org/html/2606.09096v4'
r=urllib.request.urlopen(u,timeout=30).read()
print(len(r),r[:40])
PY
```

## Strict indexed ordering: finite endpoint argument

For a nonzero compactly supported (L^2(\mathbb R)) function (f), define \(\ell(f)=\operatorname{ess\,inf}\operatorname{supp}f\). If \(f_1,\ldots,f_r\) have distinct left endpoints ordered \(\ell(f_1)<\cdots<\ell(f_r)\), choose a positive-width interval between the first and second endpoints. By the definition of essential infimum, (f_1) is nonzero on a positive-measure subset before the second endpoint, while every later function vanishes there. A zero linear combination therefore has zero first coefficient. Repeating after removing it proves linear independence. Hence the set of left endpoints realized by a finite-dimensional space (S) has at most \(\dim S\) elements.

For finite-dimensional (S,E), if \(J_t S\cap E\ne\{0\}\), some nonzero (f\in S) and (g\in E) satisfy \(J_t f=g\). Since translation adds (t) to the essential left endpoint, \(t=\ell(g)-\ell(f)\). The exceptional shifts are contained in the finite set \(L(E)-L(S)\).

Now let \(\mu=\lambda_k(a)=\lambda_k(b)\) be the hypothesized equality, and let (S) be the span of the first (k) eigenvectors at (b). For every allowed shift, \(J_tS\) has dimension (k) and every unit vector in it has (a)-form value at most \(\mu\), by the form-domain translation isometry. The spectral subspace \(E_<\) below \(\mu\) has dimension less than (k). Thus each (J_tS\) contains a unit vector orthogonal to (E_<\). Its form value is both at most and at least \(\mu\); equality in the spectral lower bound forces it into the finite-dimensional eigenspace (E_=\) at \(\mu\). This would give nonzero intersections \(J_tS\cap E_=\) for every shift in an interval, contradicting the finite-exception result. The indexed strict inequality follows. This check confirms the argument does not require simple eigenvalues; it does require discrete finite-multiplicity spectrum and a form-domain translation isometry.

## Explicit Gram lower bound

Let (f\) be unit and supported in an interval of length (2b); let (T) translate by spacing (d>0). After at most (m) factors (T-rI), the support hull has length at most (2b+md). With
\[
N=\left\lceil\frac{2b}{d}\right\rceil+m+1,
\]
we have (Nd>2b+md), so the support of any such intermediate (g) is disjoint, up to null endpoints, from that of (U^N g), for (U=T) or (T^{-1}).

The telescoping identity
\[
\sum_{j=0}^{N-1}\alpha^j U^j(I-\alpha U)g=g-\alpha^N U^N g
\]
holds for (|\alpha|\le1). Restricting the right side to the support of (g) gives norm \(\|g\|\); the triangle inequality bounds the left side by (N\|(I-\alpha U)g\|\). Therefore \(\|(I-\alpha U)g\|\ge\|g\|/N\).

For \(|r|\le1\), (T-rI=T(I-rT^{-1})); for \(|r|>1\), (T-rI=-r(I-T/r)). Since (T,T^{-1}) are unitary, both cases give
\[
\|(T-rI)g\|\ge\frac{\max(1,|r|)}{N}\|g\|.
\]
Factor a degree-ℓ polynomial (p(z)=c_\ell\prod_{i=1}^\ell(z-r_i)). Applying the factor bound successively (the support hull grows by at most (d) each time) gives
\[
\|p(T)f\|\ge |c_\ell|N^{-\ell}\prod_i\max(1,|r_i|).
\]
The coefficient vector has Euclidean norm one, hence its ℓ1 norm is at least one. Its ℓ1 norm is at most \(|c_\ell|\prod_i(1+|r_i|)\le 2^\ell|c_\ell|\prod_i\max(1,|r_i|)\). Thus \(\|p(T)f\|\ge(2N)^{-\ell}\ge(2N)^{-m}\), including the constant-polynomial case. Taking the infimum over unit coefficient vectors proves \(\lambda_{\min}(G)\ge(2N)^{-2m}\). The exponent is squared exactly once when passing from a least singular-value bound to a Gram eigenvalue.

Combining this with the U01 trace/gap estimate yields
\[
\lambda_1(b)-\lambda_1(a)\ge\frac{g_a}{(m+1)(2N)^{2m}}.
\]
The factor (m+1), direction of the inequality, and dependence on (N) check out. The bound degenerates rapidly with (m) or small margin and supplies no arithmetic lower bound for (g_a); it cannot itself rule out a first zero crossing.

## Findings and limits

No gap or counterexample was found in the finite-left-endpoint strict-order argument or the telescoping/polynomial-factor proof of the Gram lower bound. These are conditional on the source framework and exact translation invariance of the Weil form. I did not rederive the all-index continuity argument in U02, inspect the cited CCM/Bombieri literature, run numerical experiments, or formalize the proof; no exhaustive prior-art search or originality claim is made. Lean and Lake are unavailable on PATH in this workspace, so no formal check was performed.

Recommendation: retain the bound with its stated non-effective limitations. This is only a scoped independent AI audit, subject to lead review.
