# U01-W01 — independent audit of strict bottom monotonicity

Date: 2026-11-25 UTC. Baseline `a7ded21`. AI-assisted proof audit; not formal verification, human review, or a novelty assessment.

## Source actually checked

I fetched Masatoshi Suzuki, *Weil's quadratic form via the screw function*, arXiv:2606.09096v4, primary HTML `https://arxiv.org/html/2606.09096v4`, and inspected the theorem text for Theorem 1.1, Corollary 1.2, Theorems 1.3–1.4, and (1.7)–(1.8). The source supplies the Friedrichs realization, lower-bounded discrete spectrum with finite-multiplicity eigenvalues, the compact-test core statement for minimizers, continuity of the bottom, and positivity for sufficiently small windows. It recalls Yoshida's nondegeneracy criterion. I did not inspect the cited Connes–Consani or Bombieri papers independently and make no priority claim.

Reproducible primary-source retrieval and text search (standard library only):

```sh
python - <<'PY'
import urllib.request,re,html
u='https://arxiv.org/html/2606.09096v4'
r=urllib.request.urlopen(u,timeout=30).read().decode()
s=re.sub(r'\\s+',' ',html.unescape(re.sub(r'<[^>]+>',' ',r)))
for q in ['Theorem 1.1 .','Corollary 1.2 .','Theorem 1.3 .','Theorem 1.4 .','(1.7)']:
    i=s.find(q)
    print(q, s[i:i+500] if i>=0 else 'not found')
PY
```

The primary HTML response was 1,215,591 bytes. The proof below uses those source claims as imports; strict monotonicity itself is checked independently.

## Independent proof check

Let (q_a) be the closed lower-bounded form on (L^2(-a,a)), with compact smooth functions as a form core, and let (0<b<a). For a shift (|t|<a-b), (J_t f) is the zero-extended translate. On the core, the Weil form is translation invariant under simultaneous translation: in the autocorrelation representation the shift cancels between the two factors. (J_t) is also an (L^2) isometry. Choose (c) large enough that both (q_b+c\|\cdot\|_2^2) and (q_a+c\|\cdot\|_2^2) are positive form norms. Equality of these norms on the core extends (J_t) by completion to an isometry of form domains. Since the form norm dominates (L^2), the extension agrees with the ordinary zero-extended translate. Thus the translation identity applies to a bottom eigenvector in the form domain, not only to tests.

The variational principle gives (lambda_a\le\lambda_b). If equality held, take a normalized bottom eigenvector (f\ne0) at (b). Each (J_t f) has norm one and form value (lambda_a), so it minimizes the (a)-form and lies in (E_a=\ker(A_a-\lambda_a I)). This last implication follows from the spectral theorem for the nonnegative shifted operator (A_a-\lambda_a I): a form vector with zero quadratic form for that shift lies in its kernel.

For any finite set of distinct shifts (t_1,\dots,t_k), the translates are linearly independent. Indeed the zero extension of (f) is compactly supported and in (L^1(\mathbb R)), so (F[f](z)=\int f(x)e^{izx}\,dx) is entire and not identically zero. If \(\sum_j c_jJ_{t_j}f=0\) in (L^2\), its Fourier transform gives
\[
F[f](z)\sum_j c_j e^{izt_j}=0.
\]
On an open set where (F[f]\ne0), the exponential polynomial vanishes; analytic continuation makes it identically zero. Its first (k) derivatives at zero form a Vandermonde system in the distinct (t_j), forcing every (c_j=0). Taking (k=\dim E_a+1) shifts inside the nonempty margin interval contradicts (J_t f\in E_a). Hence \(\lambda_a<\lambda_b\).

I separately checked the finite-translate gap inequality. The Gram operator (G=V^*V) is positive definite by that independence. Since (\operatorname{rank}(PV)\le m=\dim E_a<k=m+1), choose a unit (c\in\ker(PV)). Then
\[
\operatorname{tr}(V^*(I-P)V)\ge\langle V^*(I-P)V c,c\rangle
=\|Vc\|^2\ge\lambda_{\min}(G).
\]
The spectral gap gives (q_a(v_j)-\lambda_a\ge g_a\|(I-P)v_j\|^2). Since each shifted vector has form value \(\lambda_b\), summing and dividing by (m+1) gives the stated inequality. The direction and factor are correct.

Using the cited continuity and small-window positivity, strict decrease implies at most one zero of \(\lambda_a\); when the global Weil form has a negative compact test, some finite window has negative bottom and continuity gives exactly one crossing. If the global form is nonnegative, every local bottom is nonnegative, and strict decrease rules out equality to zero at any finite window. This is conditional only on the imported Weil criterion and source framework; it does not prove RH.

## Findings and limits

No gap was found in the form-domain extension, attainment step, Fourier/Vandermonde independence, finite-dimensional contradiction, or trace/gap estimate. The key hypothesis for translation isometry is the translation-invariant autocorrelation form and simultaneous translation of both arguments; it is not a consequence of domain nesting alone. I did not independently certify the source's Friedrichs/core/continuity theorems, search all prior art, run computation, or formalize the argument. No counterexample or novelty claim is reported.

Recommendation: retain the U01 result as an internal conditional/import-based deduction, with the scope and attribution already stated. This audit is independent AI checking only and requires lead review.
