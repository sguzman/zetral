# Even pole rank-one term in the U72 cosine basis

The prior entry reconciliation matched the pole vector between implementations but did not derive it from the form. This note performs that derivation using the explicit-form decomposition recorded in `research/positivity/DCR02-moment-constraints.md`, which cites Suzuki arXiv:2606.09096v4, §2.4: the pole form on `(-a,a)` is

\[
2\left|\int_{-a}^{a}\cosh(x/2)f(x)\,dx\right|^2
-2\left|\int_{-a}^{a}\sinh(x/2)f(x)\,dx\right|^2.
\]

Set `h=2a`, and shift to `[0,h]` by `y=x+a`. The normalized cosine modes on `[0,h]` are

\[
\phi_n(y)=\frac{N_n}{\sqrt h}\cos(\omega_n y),\qquad
\omega_n=\frac{n\pi}{h},\qquad N_0=1,\quad N_n=\sqrt2\ (n>0).
\]

Reflection about the window center sends this mode to `(-1)^n phi_n`; hence even-sector modes have even `n`. Put `x=y-h/2` in the pole integral. For even `n`,

\[
\cos(\omega_n y)=\cos(\omega_n(x+h/2))=(-1)^{n/2}\cos(\omega_n x).
\]

A direct integration gives

\[
\int_{-h/2}^{h/2}\cosh(x/2)\cos(\omega_n x)\,dx
=\frac{\sinh(h/4)\cos(\omega_n h/2)+2\omega_n\cosh(h/4)\sin(\omega_n h/2)}{\omega_n^2+1/4}.
\]

For even `n`, `sin(omega_n h/2)=0` and `cos(omega_n h/2)=(-1)^(n/2)`. The basis sign cancels this endpoint sign. Therefore

\[
\left\langle\cosh(x/2),\phi_n\right\rangle
=\frac{N_n}{\sqrt h}\frac{\sinh(h/4)}{\omega_n^2+1/4}.
\]

The even pole form is positive because its `sinh` functional vanishes on even functions. Its matrix entry is consequently

\[
2\left\langle\cosh,\phi_n\right\rangle
 \left\langle\cosh,\phi_k\right\rangle
=\frac2h\,p_n p_k,\qquad
p_n=N_n\frac{\sinh(h/4)}{\omega_n^2+1/4}.
\]

This agrees exactly with the staged source's even `pole(n)` and `2*pole(n)*pole(k)/h` term and with the independent interval evaluator's `poles` vector. The alternating signs would appear if one used centered cosine modes without translating the basis phase; the source uses the `[0,h]` modes above, so its all-positive pole vector is correct.

## Scope

This derives the even-sector pole contribution and its normalization/sign from the explicit-form pole term. It does not rederive the archimedean part, odd-sector negative pole vector, complete Weil-form decomposition, matrix truncation/tail, or full campaign certificate. The source statement is taken from the cited DCR02 extraction; this note does not independently re-fetch the primary paper. No RH, positivity of the full operator, or formal-verification claim follows.
