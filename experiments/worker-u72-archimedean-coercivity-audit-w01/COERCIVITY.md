# Finite-interval coercivity of the archimedean increment

Use the digamma-series decomposition established in `ARCHIMEDEAN-AUDIT.md`:

\[
\alpha(t)-\alpha_0=\sum_{j\ge0}\beta_j(t),\qquad
\beta_j(t)=\frac{t^2}{u_j(t^2+r_j^2)},\quad
u_j=j+\tfrac14,\quad r_j=2u_j,
\]

where `alpha_0=psi(1/4)-log(pi)`. Each multiplier `beta_j` is nonnegative. Retaining only `j=0`, with `u_0=1/4` and `r_0=1/2`, gives

\[
\alpha(t)-\alpha_0\ge\beta_0(t)=\frac{4t^2}{t^2+1/4}.
\]

For a function supported on `[0,h]`, the inverse-Fourier operator for `beta_0` is the compression

\[
B_0=4I-E_{1/2},\qquad
(E_{1/2}f)(x)=\int_0^h e^{-|x-y|/2}f(y)\,dy.
\]

The row integral of this symmetric nonnegative kernel is

\[
R(x)=\int_0^h e^{-|x-y|/2}dy
=4-2e^{-x/2}-2e^{-(h-x)/2}.
\]

By AM–GM, `e^{-x/2}+e^{-(h-x)/2} >= 2e^{-h/4}`, so

\[
\sup_{0\le x\le h}R(x)\le4(1-e^{-h/4}).
\]

Schur's test therefore gives `||E_{1/2}||_{2->2} <= 4(1-e^{-h/4})`, and hence

\[
B_0\ge4e^{-h/4}I.
\]

Consequently the compressed archimedean multiplier obeys the rigorous quadratic-form bound

\[
\frac1{2\pi}\int_{\mathbb R}(\alpha(t)-\alpha_0)|\widehat f(t)|^2dt
\ge4e^{-h/4}\|f\|_2^2
\]

for every supported `f` in its form domain. It follows immediately for every finite cosine subspace that the nonconstant archimedean matrix `K+diag(da_n)` has least eigenvalue at least `4e^{-h/4}`. At the U72 value `h=62/25`, the bound is exactly `4e^{-31/50}`.

This lower bound comes from the finite support restriction: the multiplier `beta_0(t)` vanishes at `t=0` on the whole line, while its compression to a finite interval has a strictly positive bottom bounded here by Schur's test. The bound applies only to `alpha-alpha_0`; `alpha_0` itself is negative, and the total Weil form also has prime and pole contributions.

## Limits

The estimate is a lower bound on one explicit component, not a positivity certificate for the Weil form, the finite residual matrix, or the candidate operator. It does not use or validate the campaign's high-mode tail allocations. The Schur estimate is intentionally coarse and not optimized.
