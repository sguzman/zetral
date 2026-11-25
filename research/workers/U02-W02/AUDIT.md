# U02-W02 — audit of all-index eigenvalue continuity

Date: 2026-11-25 UTC. Baseline `d755df7`. AI-assisted internal verification, not human review, formal verification or novelty claim. Scope: the U02 extension of Suzuki's bottom-continuity proof to each fixed indexed eigenvalue.

## Source passage actually opened

I fetched the primary HTML of Suzuki, *Weil's quadratic form via the screw function*, arXiv:2606.09096v4, `https://arxiv.org/html/2606.09096v4`, and inspected §§4.1–4.4, equations (4.1)–(4.9), Proposition 4.1, and Theorem 1.3. In (4.5), after scaling to the fixed interval, the Rayleigh form is the sum of an (a)-independent logarithmic form and an (a)-dependent remainder. Equation (4.6) controls the common form norm; Proposition 4.1 gives compact embedding into (L^2); §§4.3–4.4 prove bottom semicontinuity. The source's §4.4 explicitly describes the remainder as a finite sum of translation quadratic forms and integral operators with continuous kernels, continuous in ((a,w)) on strongly convergent (L^2) sequences. The extension from the bottom to each fixed (k) is U02's deduction, not a theorem attributed to Suzuki.

Reproducible fetch and section extraction (Python standard library):

```sh
python - <<'PY'
import urllib.request,re,html
u='https://arxiv.org/html/2606.09096v4'
r=urllib.request.urlopen(u,timeout=30).read().decode()
s=re.sub(r'\\s+',' ',html.unescape(re.sub(r'<[^>]+>',' ',r)))
for q in ['Proposition 4.1 .','4.2. Scaling transformation','4.3. Proof of upper semicontinuity','4.4. Proof of lower semicontinuity']:
    i=s.find(q)
    print(q, s[i:i+900] if i>=0 else 'not found')
PY
```

The source response was 1,215,591 bytes. This was read-only; no packages were installed.

## Common form and perturbation control

On the fixed interval, the source expression has the form
\[
q_a[w]=\overline{\mathcal L}[w]+\langle R_a w,w\rangle,
\]
where \(\overline{\mathcal L}\) is the closed lower-bounded form obtained from the (a)-independent logarithmic form, and the remainder consists of the scalar \(-\log a-(2A+1)\), a finite prime-shift sum, and a continuous-kernel integral operator. On each compact (a)-neighborhood:

1. The number of prime terms is uniformly finite; each shift/overlap operator is bounded on (L^2) by its coefficient. The continuous-kernel remainder is bounded by its Hilbert–Schmidt norm. Hence (R_a) is uniformly bounded.
2. (a\mapsto R_a) is strongly continuous. Translations are strongly continuous on zero-extended (L^2) functions; restricting to the moving overlap intervals preserves this. At a prime cutoff (n=e^{2a}), the shift length is 2 on (-1,1), so the overlap shrinks to measure zero; the newly appearing term is strongly zero at threshold. The continuous kernel varies continuously, in fact in Hilbert–Schmidt norm.
3. Since (q_a-\overline{\mathcal L}) is a bounded quadratic perturbation on (L^2), adding a sufficiently large scalar makes the form norms equivalent. Thus the closed forms have the same form domain. By (4.6) and Proposition 4.1, form-bounded families are relatively compact in (L^2).

This states the common-domain step needed by the all-index extension. The lower bound/closedness of \(\overline{\mathcal L}\), formula (4.6), and compact embedding are source imports.

## Min–max continuity for every fixed index

Fix (k\ge1) and (a_n\to a_0>0). For the upper bound, use the (k)-dimensional first spectral subspace at (a_0), which lies in the common form domain. The base form is fixed there and strong continuity of (R_{a_n}) is uniform on this finite-dimensional unit sphere. Its maximum Rayleigh quotient converges to \(\lambda_k(a_0)\). Min–max gives
\[
\limsup_n\lambda_k(a_n)\le\lambda_k(a_0).
\]

For the lower bound, pass to a subsequence realizing the liminf. The forms are locally uniformly bounded below, while a fixed smooth test gives a local upper bound for \(\lambda_k(a_n)\). Consequently the first (k) orthonormal eigenvectors (u_{n,1},\ldots,u_{n,k}) have uniformly bounded common-form norm. Compact embedding gives, after one subsequence for these finitely many vectors, strong (L^2) limits (u_1,\ldots,u_k), still orthonormal.

For any fixed unit coefficient vector (c\in\mathbb C^k), let (u_n(c)=\sum_jc_ju_{n,j}\) and (u(c)=\sum_jc_ju_j). Then (u_n(c)\to u(c)) strongly in (L^2), and
\[
q_{a_n}[u_n(c)]=\sum_j|c_j|^2\lambda_j(a_n)\le\lambda_k(a_n).
\]
Uniform boundedness and strong operator continuity imply \(\langle R_{a_n}u_n(c),u_n(c)\rangle\to\langle R_{a_0}u(c),u(c)\rangle\). Lower semicontinuity of the fixed closed form yields
\[
q_{a_0}[u(c)]\le\liminf_n\lambda_k(a_n).
\]
This holds for every unit (c) using the same convergent subsequence. The limit span is (k)-dimensional, so min–max gives \(\lambda_k(a_0)\le\liminf_n\lambda_k(a_n)\). Together these bounds prove continuity for each fixed (k). Repeated eigenvalues cause no issue: take the first (k) orthonormal eigenvectors with multiplicity. This is pointwise in fixed (k), not uniform over the whole spectrum.

## Findings and limits

The U02 all-index continuity extension is valid under the cited source hypotheses, provided the bounded-perturbation/common-form-domain inference is stated. I found no gap in compactness or either min–max semicontinuity direction. No formal or numerical check was run; Lean/Lake are unavailable on PATH. I did not re-audit the other U02 estimates or its literature survey.

Recommendation: retain this as an internal deduction under the cited operator/form framework, explicitly marking the common-domain inference and the fixed-index scope. Lead review remains necessary.
