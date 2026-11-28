# B3-20 — Local tail compactness does not supply a polynomial rate

Date: 2026-11-27. Status: exact scalar-density countermodel; not an example
of the semilocal Hankel operator.

## Question

Do the two properties established around ACG Lemma 8.9—polynomial growth of
local Mellin mass and decay of each fixed-frequency tail as the cutoff
`n0 -> infinity`—imply the polynomial-in-`n0` rate needed for conditioning
dimensions in Theorem 8.14?

## Countermodel

Choose a nonnegative smooth bump `psi` supported in `[-1/4,1/4]`, with
`integral psi=1` and `psi(0)>0`. For integers `n>=2`, put

    S_n = exp(n),
    M_n = n/log(n+2),
    rho^(N)(s) = sum_(n>N) M_n psi(s-S_n),  N>=1.

This is a decreasing family of positive tail densities; the sum is locally
finite. It satisfies both qualitative/local bounds:

1. For every fixed `R`, `integral_{|s|<=R} rho^(N)(s) ds -> 0`, since all
   supports with index `n>N` eventually lie outside `[-R,R]`.
2. Uniformly in `N` and `R>=1`,
   `integral_{|s|<=R} rho^(N)(s) ds <= C R`. Only indices
   `n<=log(R+1)` can contribute, and their total mass is at most
   `sum_(n<=log(R+1)) n/log(n+2) <= C(log(R+1))^2 <= C'R`.

But the relative density at its peak obeys

    rho^(N)(S_(N+1))/log(2+S_(N+1))
      ~ psi(0)/log(N+3),

which tends to zero more slowly than every negative power of `N`. Therefore
no polynomial-in-`N` bound on the relative tail density follows from the two
properties above.

This also tests the quadratic-form version. Fix a nonzero smooth compactly
supported `g` in logarithmic coordinates and modulate it by frequency
`S_(N+1)`. Its Mellin mass is translated to the bump, so the tail trace term
is asymptotic to a positive constant times `M_(N+1)||g||^2`, while
`Lambda(f_{S_(N+1)})` is asymptotic to
`log(S_(N+1))||g||^2=(N+1)||g||^2`. Their ratio is therefore comparable to
`1/log(N+3)`, not to any `N^{-c}`. For real tests, use the real cosine
modulation and symmetric bumps at positive and negative frequencies.

## Scope

- The construction shows that pointwise-in-`R` tail convergence plus the
  polynomial local mass estimate (the content of the proved half of ACG
  Lemma 8.9 and Lemma 8.8) cannot alone yield the polynomial rate in the
  relative density estimate identified in Remark 8.10.
- It is a scalar positive density, not a spectral density of a valid pair of
  projections or the semilocal operator. It does not refute H2′ for the
  actual arithmetic symbol.
- The missing ingredient must couple the cutoff index to Mellin-frequency
  localization, quantitatively, for the structured singular vectors. The
  paper's predicted `p^k`-frequency / `p^{-k/2}` angle mechanism is a
  candidate, not yet a proved uniform estimate.
- No polynomial rate, positivity theorem, RH result, or novelty claim is
  established.

## Next investigation

Derive a quantitative link between singular-value index `n0` and frequency
localization for the semilocal Hankel operator built from
`u=u_infinity product_p u_p`. A candidate estimate must imply the relative
density bound
`rho_N^(n0)(s) <= epsilon(n0) log(2+|s|)` with an explicit decay rate, and
also control the moving angle-count threshold. Keep this separate from the
independent transition/pole Schur-sign problem.

Source: Andrews–Connes–La Gatta,
[arXiv:2611.13129v1](https://arxiv.org/abs/2611.13129), §8.3, Lemma 8.9,
Remark 8.10 and Theorem 8.14.
