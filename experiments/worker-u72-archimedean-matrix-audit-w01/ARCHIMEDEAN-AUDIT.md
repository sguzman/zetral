# Archimedean cosine matrix from the digamma multiplier

This derives the archimedean matrix formulas used by the U72 even finite evaluator from the multiplier in Suzuki, *Weil’s quadratic form via the screw function*, arXiv:2606.09096v4, §2.4, equation (2.7) (the exact `Re psi(1/4+it/2)-log pi` expression at HTML lines 399–404): https://arxiv.org/html/2606.09096v4.

Set `h=2a`, `omega_n=n*pi/h`, `x_n=omega_n^2`, and use the orthonormal cosine modes on `[0,h]`

\[
\phi_n(y)=N_n h^{-1/2}\cos(\omega_n y),\qquad N_0=1,\quad N_n=\sqrt2\ (n>0).
\]

The even subspace about the window center has even indices `n`. The archimedean multiplier is

\[
\alpha(t)=\operatorname{Re}\psi(1/4+it/2)-\log\pi.
\]

Put `u_j=j+1/4`, `r_j=2u_j=2j+1/2`. From the defining digamma series,

\[
\alpha(t)=\underbrace{\psi(1/4)-\log\pi}_{\alpha_0}
+\sum_{j\ge0}\frac{t^2}{u_j(t^2+r_j^2)}.
\]

Each summand is nonnegative and equals

\[
\frac{t^2}{u_j(t^2+r_j^2)}=\frac1{u_j}-\frac{r_j^2/u_j}{t^2+r_j^2}.
\]

Under the stated Fourier convention, the inverse transform of `1/(t^2+r^2)` is `e^{-r|x|}/(2r)`. Since `r=2u`, the operator for this summand on `[0,h]` is therefore

\[
M_r=\frac{2}{r}I-E_r,\qquad
(E_rf)(x)=\int_0^h e^{-r|x-y|}f(y)\,dy.
\]

For a cosine mode, direct integration yields

\[
(E_r\cos(\omega_k\cdot))(x)=
\frac{2r\cos(\omega_kx)-r e^{-rx}-r(-1)^k e^{-r(h-x)}}{r^2+x_k},
\]

using `sin(omega_k h)=0`. Also,

\[
\int_0^h e^{-rx}\cos(\omega_nx)dx
=\frac{r(1-(-1)^n e^{-rh})}{r^2+x_n},
\]

and the reflected boundary integral is `(-1)^n` times this. Orthogonality then gives, for even `n,k`,

\[
\langle\phi_n,E_r\phi_k\rangle
=\frac{2r}{r^2+x_n}\,\mathbf1_{n=k}
-\frac{2N_nN_k}{h}\frac{r^2(1-e^{-rh})}{(r^2+x_n)(r^2+x_k)}.
\]

Subtracting this from `(2/r)I` gives

\[
\langle\phi_n,M_r\phi_k\rangle
=\frac{2N_nN_k}{h}\frac{r^2(1-e^{-rh})}{(r^2+x_n)(r^2+x_k)}
+\mathbf1_{n=k}\frac{x_n}{u(r^2+x_n)}.
\]

Summing over `j` and adding `alpha_0 I`, the evaluator's archimedean matrix is exactly

\[
A_{nk}=K_{nk}+\mathbf1_{n=k}(\alpha_0+\mathrm{da}_n),
\]

where

\[
K_{nk}=\frac{2N_nN_k}{h}\sum_j\frac{r_j^2(1-e^{-hr_j})}{(r_j^2+x_n)(r_j^2+x_k)},\qquad
\mathrm{da}_n=\sum_j\frac{x_n}{u_j(r_j^2+x_n)}.
\]

For `n != k`, partial fractions rewrite the sum in `K` as `(x_n F_n-x_k F_k)/(x_n-x_k)`, with

\[
F_n=\sum_j\frac{1-e^{-hr_j}}{r_j^2+x_n}.
\]

For `n=k`, the sum is

\[
D_n=\sum_j\frac{r_j^2(1-e^{-hr_j})}{(r_j^2+x_n)^2}.
\]

These are precisely the Python evaluator's `F=fb-ex`, `D=db-dex`, off-diagonal quotient, and diagonal `D` formulas. The digamma identity gives `da_n=Re psi(1/4+i omega_n/2)-psi(1/4)`, while `alpha_0=psi(1/4)-log(pi)`; hence the diagonal constant is `Re psi(1/4+i omega_n/2)-log(pi)`.

## Scope and limits

This verifies the even-sector archimedean block, its factors, and its finite-interval exponential correction. The derivation uses the paper's Fourier-form identity and the cosine basis; it does not independently rederive the source's full explicit-form formula, verify the prime/pole blocks again, certify interval-library behavior, or audit the campaign's high-mode allocation/tail. The odd-sector boundary factor is different (`1+e^{-hr}` in this derivation) and is not asserted here. No positivity or RH conclusion follows.
