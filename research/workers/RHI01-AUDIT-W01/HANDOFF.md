# RHI01-AUDIT-W01 — relative heat trace audit

- **ID:** RHI01-AUDIT-W01
- **Status:** READY_FOR_REVIEW
- **Starting commit:** `37778b0` (Campaign XXXIX activation)
- **Scope:** Independently check RHI01's absolute heat-trace threshold, trace-class relative Duhamel formula, and second-order short-time coefficient. No claim about RH or the full heat curve.
- **Acceptance question:** Are the trace bounds, threshold exponents, and signs/factors in the relative expansion correct under the stated common-domain assumptions?

## Checks

For (B=A,T) as a bounded perturbation of the compressed archimedean multiplier, the eigenvalue inequality is
\[
\lambda_j(B)\ge (2\pi)^{-1}\int\alpha(\omega)|\widehat f_j(\omega)|^2d\omega-\|V\|.
\]
Because \(|\widehat f_j|^2/(2\pi)\) is a probability measure, Jensen gives the stated bound on (e^{-t\lambda_j}). Completeness on (L^2(I)) gives \(\sum_j|\widehat f_j(\omega)|^2=\|e^{i\omega x}\|_{L^2(I)}^2=L\). Tonelli therefore reduces the trace upper bound to \(\int e^{-t\alpha(\omega)}d\omega\), finite exactly for (t>1).

For the reverse direction, on the first (n) Dirichlet Laplacian modes,
\(\|f'\|_2\le n\pi L^{-1}\|f\|_2\). The upper symbol bound and concavity of \(\log\) yield (q_B(f)\le\log n+C_{a,B}\). Min–max gives \(\lambda_n(B)\le\log n+C_{a,B}\), so \(\sum e^{-t\lambda_n}\) dominates a constant multiple of \(\sum n^{-t}\), divergent for all (0<t\le1). This proves the exact absolute-trace threshold, assuming the inherited compact-resolvent form setup.

Since (H\) is finite rank and bounded, the Duhamel integral is trace class for every (t>0). Expanding its two semigroups on the finite-dimensional range vectors of (H) is legitimate because those vectors lie in the common operator domain. Uniformity over (0\le r\le t) follows from strong differentiability at zero on each fixed vector. The expansion is
\[
\operatorname{tr}(e^{-(t-r)A}He^{-rT})
=\operatorname{tr}H-(t-r)\operatorname{tr}(AH)-r\operatorname{tr}(TH)+o(t),
\]
uniform in (r). Integrating with the leading minus sign in Duhamel gives
\[
F_a(t)=-t\operatorname{tr}H+\tfrac12t^2[\operatorname{tr}(AH)+\operatorname{tr}(TH)]+o(t^2)
=-t\operatorname{tr}H+\tfrac12t^2[2\operatorname{tr}(TH)+\operatorname{tr}(H^2)]+o(t^2),
\]
since (A=T+H). The coefficient and sign in RHI01 are consistent. Finally, (\|c\|^2-\|s\|^2=2a=L), so \(\operatorname{tr}H=2L=4a\).

## Finding and limits

- No sign, factor, or threshold error found in the checked argument.
- The result establishes (F_a(t)=\operatorname{tr}(e^{-tA}-e^{-tT})) as a trace-class relative difference for every (t>0); for (t\le1), it does not define a subtraction of two finite heat traces.
- Not checked: inherited arithmetic form/domain identities against primary sources; RHI02 prime-threshold coefficient computation; RHI03 spectral-shift recovery; numerical curves, formal proof, or exhaustive prior art.
- AI-assisted scoped audit, not human review; no RH, actual zero, ordinary rate, or Hilbert–Pólya conclusion.

## Evidence

- Reviewed `research/positivity/RHI01-relative-heat-trace.md` and RHI04 at `37778b0`.
- Exact command: `git show origin/main:research/positivity/RHI01-relative-heat-trace.md`.
- No numerical or formal computation was run.
