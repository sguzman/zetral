# Form-domain justification for finite cosine modes

Primary source: Masatoshi Suzuki, *Weil’s quadratic form via the screw function*, arXiv:2606.09096v4 (15 Nov 2026), especially equations (2.7), (3.1), and the paragraph identifying the form domain in §3.1: https://arxiv.org/html/2606.09096v4.

## What requires justification

The derivative-kernel identity (2.9) is stated for `v in H_0^1(-a,a)`. A truncated cosine mode has nonzero endpoint values, so it cannot be inserted into (2.9) directly. The finite comparison instead needs the cosine modes to be admissible for the closed Weil form and for the Fourier formula.

## Domain check

Suzuki defines `H^log(-a,a)` by

\[
H^{\log}(-a,a)=\left\{v\in L^2(-a,a):\int_{\mathbb R}(1+\log^+|t|)|\widehat v(t)|^2dt<\infty\right\},
\]

and §3.1 identifies this space with `D(Q_W^a)` (equation and text around (3.3)–(3.4), HTML lines 454–467). For a cosine mode on `[-a,a]`, extended by zero, integration by parts on the interval gives

\[
|\widehat v(t)|\le \frac{|v(a)|+|v(-a)|+\int_{-a}^{a}|v'(x)|dx}{|t|}\quad (t\ne0).
\]

Also `|vhat(t)|<=||v||_1` near zero. Hence

\[
\int_{\mathbb R}(1+\log^+|t|)|\widehat v(t)|^2dt<\infty,
\]

since the large-frequency majorant is a constant times `(1+log t)/t^2`. Every finite cosine mode is therefore in `H^log` and in the closed form domain, despite not being in `H_0^1`.

## Extension of the exact Fourier identity

In §2.4 Suzuki derives (2.7) for `v in H_0^1`; its three pieces are the logarithmic Fourier form, the finite prime multiplier, and the truncated exponential remainder `r_{0,a}''`. The subsequent calculation at lines 399–404 combines the logarithmic term with `r_1''` into the exact multiplier

\[
\alpha(t)=\operatorname{Re}\psi(1/4+it/2)-\log\pi,
\]

leaving only the `r_0` exponential term. By equation (1.1) and the convolution convention, the latter is the bounded rank-two pole form derived in `POLE-AUDIT`/`PRIMARY-SOURCE.md`. Thus on `H_0^1`,

\[
Q_W^a(v)=\frac1{2\pi}\int_{\mathbb R}\alpha(t)|\widehat v(t)|^2dt
-\frac1{2\pi}\int_{\mathbb R}|\widehat v(t)|^2\sum_{q\le e^{2a}}\frac{2\Lambda(q)}{\sqrt q}\cos(t\log q)dt
+2|\langle\cosh(x/2),v\rangle|^2-2|\langle\sinh(x/2),v\rangle|^2.
\]

For fixed `a`, the prime sum is finite and bounded on `L^2`; the pole terms are bounded rank-one forms; and `alpha(t)=O(1+log^+|t|)` is a continuous multiplier on the `H^log` form norm. Since the source identifies `D(Q_W^a)=H^log` and states that `C_c^infty(-a,a)` is dense in the form norm (the discussion after (2.11) and §3), the identity extends by continuity from the smooth core to the entire form domain. Polarization gives the corresponding sesquilinear identity for pairs of cosine modes.

The prime-power sum is over `q<=e^{2a}`; with `h=2a=62/25`, this is precisely the eight shifts `2,3,4,5,7,8,9,11` used in the staged source. The even cosine basis is a finite-dimensional subspace of this form domain. This validates evaluating the closed form on those modes; it does not validate any truncation or positivity conclusion by itself.

## Limits

This resolves admissibility and extension of the explicit Fourier form for finite cosine modes, conditional on the source’s stated domain/density results. It does not independently reprove all of Suzuki’s §3 functional-analysis claims, audit the candidate’s high-mode comparison/tail bounds, or establish positive definiteness of the full form. The argument is not a derivative-kernel application to a non-`H_0^1` function.
