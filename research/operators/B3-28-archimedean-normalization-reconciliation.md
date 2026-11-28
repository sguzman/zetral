# B3-28 — Reconcile the archimedean multiplier normalization

Date: 2026-11-27. Status: exact source-form reconciliation; compactness
argument unaffected; no candidate residual or gap estimate.

## Question

Does CCM's equation (3.19) define the restricted Weil operator with multiplier
`2 theta'(t)` or `theta'(t)` after passing to the unitary Fourier transform,
and does the difference affect Theorem 3.6?

## Exact calculation

Use the source's nonunitary convention

    F f(t) = integral_R f(x) exp(-itx) dx,
    U f = (2 pi)^(-1/2) F f.

CCM equation (3.19) gives the archimedean quadratic form

    Q_arch(f) = integral_R |F f(t)|^2 2 theta'(t)/(2 pi) dt.

Since `|F f|^2/(2 pi)=|U f|^2` pointwise, its exact operator multiplier in
the unitary Fourier representation is `2 theta'(t)`. This is also consistent
with CCM equation (3.8) and Plancherel. The pole and prime terms are separate
bounded terms for each fixed window, so they cannot alter this multiplier.

Theorem 3.6's proof text instead says that the archimedean contribution is
multiplication by `theta'(t)` and then compares with a multiplier behaving
like `log |t|`. The source's own displayed asymptotic is

    theta'(t) = (1/2) log |t| - (1/2)log(2 pi) + O(t^(-2)),

so the exact multiplier `2 theta'(t)` behaves like `log |t|-log(2 pi)`.
Thus equation (3.19), the exact operator normalization, and the subsequent
comparison with `log |t|` agree with each other; the isolated `theta'` in
the Theorem 3.6 prose is inconsistent by a factor of two. We classify this
as an internal normalization typo/omission, not as a confirmed author erratum.

## Effect on the spectral-form argument

The discrepancy does not invalidate the stated compact-resolvent conclusion.
Indeed `2 theta'(t)-ell(t)` is bounded on `R`, where
`ell(t)=1` for `|t|<=e` and `ell(t)=log|t|` otherwise. Hence, after adding a
sufficient scalar lower-bound shift, the exact archimedean form norm is
equivalent to the norm with weight `1+ell(t)`. This is the weight used in the
compact-embedding argument. The factor must nevertheless be fixed in any
quantitative Rayleigh quotient or residual calculation; this note uses
`2 theta'` throughout.

## Falsification and limits

The calculation is algebraic and exact; no numerical approximation is
involved. It would be falsified only if the transform in (3.19) were defined
with a different normalization than the source's Fourier convention or if
the represented Hilbert-space inner product carried an additional factor.
The source defines the log-coordinate inner product as ordinary Lebesgue
`L^2` and explicitly notes in Theorem 3.6 that the unitary transform carries
the `1/sqrt(2 pi)` factor, so neither alternative applies. The conclusion
settles only the normalization question. It proves no residual cancellation,
uniform bound, gap, ground-state simplicity, or Hilbert–Pólya correspondence.

## Source and verification boundary

Primary source: Connes–Consani–Moscovici, *Zeta Spectral Triples*,
arXiv:2511.22755v1 (2025-11-27), equations (3.8), (3.19), and the proof of
Theorem 3.6, especially (3.24). An independent derivation is the direct
Plancherel substitution above. The source-level comparison confirms the
internal factor discrepancy; no author erratum, source-proof audit, Lean
formalization, residual experiment, or novelty claim is asserted.
