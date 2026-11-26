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

## Exact norm of the first compressed kernel

The Schur bound can be sharpened by solving the exponential-kernel eigenproblem. For `a=1/2`, let `E_a` have kernel `exp(-a|x-y|)` on `[0,h]`. If `E_a f=lambda f` and `g=E_a f`, differentiation in the distributional sense gives

`-g''+a^2 g = (2a/lambda) g`, with `g'(0)=a g(0)` and `g'(h)=-a g(h)`.

The top eigenfunction is positive and symmetric about `h/2`, so it has the form `cos(omega(x-h/2))`. Its boundary condition is `omega tan(omega h/2)=a`, with the smallest positive root `omega` in `(0, pi/h)`. Substitution gives

`||E_a|| = 2a/(a^2+omega^2)`.

Therefore the first-term compressed multiplier satisfies

`4I-E_{1/2} >= (4 - 1/(1/4+omega^2)) I`.

At `h=62/25`, the root is approximately `omega=0.5763064538840257`; the resulting lower bound is approximately `2.2821680782726705`, versus `4 exp(-31/50) ~= 2.151777750378698` from Schur. The exact bound is stated through the unique root equation; these decimals are illustrative numerical evaluations. It remains a bound for the `alpha-alpha_0` component only.

## Summing the remaining positive digamma terms

The same argument applies termwise to the full series. For `u_j=j+1/4` and `r_j=2u_j`, Fourier inversion gives the compressed operator for `beta_j` as

`B_j = (1/u_j) I - E_{r_j}`, where `E_r` has kernel `exp(-r|x-y|)` on `[0,h]`.

Indeed `beta_j(t)=(1/u_j)(1-r_j^2/(t^2+r_j^2))`, and the inverse Fourier kernel of `(t^2+r^2)^(-1)` is `exp(-r|x-y|)/(2r)`. The row integral of `E_r` is at most `(2/r)(1-exp(-rh/2))`, so Schur's test and `r_j=2u_j` imply

`B_j >= exp(-u_j h)/u_j I`.

For any `f` in the form domain, Tonelli's theorem applies to the nonnegative multipliers `beta_j` and gives the full compressed-form lower bound by summing these inequalities. Use the exact top-eigenvalue estimate from the preceding section for `j=0` and Schur for all `j>=1`:

`alpha compression - alpha_0 I >= [4 - 1/(1/4+omega^2) + sum_(j>=1) exp(-(j+1/4)h)/(j+1/4)] I`,

where `omega` is the smallest positive solution of `omega tan(omega h/2)=1/2`. The series is convergent for every `h>0`. At `h=62/25`, numerical evaluation gives about `2.31998802335`, compared with `2.28216807827` from the exact first-term bound alone. The inequality itself is analytic; the displayed decimals are illustrative numerical evaluations, not interval-certified endpoints. This remains a bound on `alpha-alpha_0` only.
