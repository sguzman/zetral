# Primary-source derivation of the even pole contribution

Source: Masatoshi Suzuki, *Weil’s quadratic form via the screw function*, arXiv:2606.09096v4 (15 Nov 2026), equations (1.1) and definitions immediately following it, plus (1.3) only for context: https://arxiv.org/html/2606.09096v4.

Equation (1.1) defines the Weil functional with the exponential part

\[
\int_{\mathbb R} f(x)(e^{x/2}+e^{-x/2})\,dx,
\]

and then defines `Q_W(v)=W(v*\tilde v)`, `(v_1*v_2)(x)=\int v_1(y)v_2(x-y)dy`, and `\tilde v(x)=\overline{v(-x)}`. The convolution is

\[
(v*\tilde v)(x)=\int v(y)\overline{v(y-x)}\,dy.
\]

Writing `A_±=\int v(y)e^{±y/2}dy`, Fubini and the substitution `z=y-x` give

\[
\int (v*\tilde v)(x)e^{x/2}dx=A_+\overline{A_-},\qquad
\int (v*\tilde v)(x)e^{-x/2}dx=A_-\overline{A_+}.
\]

Their sum is `2 Re(A_+ overline(A_-))`. With `C=\int v(y)cosh(y/2)dy` and `S=\int v(y)sinh(y/2)dy`, `A_±=C±S` and `Re(A_+ overline(A_-))=|C|²-|S|²`. Thus the pole/exponential subform is exactly

\[
2\left|\int v(y)\cosh(y/2)dy\right|^2-2\left|\int v(y)\sinh(y/2)dy\right|^2.
\]

On the even subspace the `sinh` functional vanishes, leaving a positive rank-one form. This derivation is directly from Suzuki’s definition and does not use the derivative-kernel identity, whose stated core is narrower.

For the finite cosine coordinates, put `h=2a`, move to `[0,h]` with `y=x+a`, and use the orthonormal cosine modes `phi_n(y)=N_n/sqrt(h) cos(n pi y/h)`, `N_0=1`, `N_n=sqrt(2)` for `n>0`. The even-under-center-reflection modes have even `n`. In centered coordinate `x=y-h/2`,

\[
\cos(\omega_n y)=(-1)^{n/2}\cos(\omega_n x),\quad \omega_n=n\pi/h.
\]

Direct integration gives

\[
\int_{-h/2}^{h/2}\cosh(x/2)\cos(\omega_nx)dx
=\frac{\sinh(h/4)\cos(\omega_nh/2)+2\omega_n\cosh(h/4)\sin(\omega_nh/2)}{\omega_n^2+1/4}.
\]

For even `n`, this is `(-1)^(n/2) sinh(h/4)/(omega_n^2+1/4)`. The phase from translating the basis cancels this sign, so

\[
\langle\cosh(x/2),\phi_n\rangle=\frac{N_n}{\sqrt h}\frac{\sinh(h/4)}{\omega_n^2+1/4}.
\]

The resulting matrix entry from the positive pole subform is `2 pole(n) pole(k)/h`, with `pole(n)=N_n sinh(h/4)/(omega_n^2+1/4)`, exactly as in `tc01-post-log11-em.js` and the corrected independent interval evaluator.

## Scope

The exponential subform is a bounded rank-two form on the finite interval, so its modal contribution is well-defined independently of the more delicate full form domain. This checks that subform and its even-sector matrix coefficient, not the full Weil form on the cosine span. The Fourier/archimedean and prime contributions, the full-domain justification for the assembled modal matrix, and the campaign certificate remain separate. No positivity claim for the full form or RH conclusion follows.
