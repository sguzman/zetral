# B3-30 — Smooth moment-preserving approximation on a fixed window

Date: 2026-11-27. Status: fixed-window density and map-continuity lemma;
global-radical-to-window transfer remains conditional and unproved.

## Question

Can the piecewise-smooth, moment-corrected prolate function from B3-29 be
approximated by even Schwartz inputs satisfying both exact radical moments,
while its arithmetic image converges in the fixed-window Weil form norm?

## Fixed-window approximation theorem

Fix `lambda>1`, `0<s<1/2`, and an even function `h` supported in
`[-lambda,lambda]` that is piecewise `C^1`, has finitely many jumps, and is
`C^1` near zero. Suppose

    h(0)=0,       integral_R h(x) dx=0.

Then there exist even `f_j in C_c^infinity((-lambda,lambda))` such that

    f_j(0)=0,       integral_R f_j=0,
    ||f_j-h||_(H^s(R)) -> 0.

### Proof

The jump condition implies `h in H^s(R)` for every `s<1/2`: integration by
parts on its finitely many smooth pieces gives `|h_hat(t)|=O_h((1+|t|)^-1)`,
and the weighted Fourier integral for `H^s` converges. Compress `h` slightly
so its support lies strictly inside the interval, then convolve with an even
smooth approximate identity of smaller support. Dilation and mollification
are continuous in `H^s`, so the resulting even `g_j in C_c^infinity` converge
to `h` in `H^s`; since `h` is smooth near zero, this construction also gives
`g_j(0)->0`. The integrals converge by the `L2` convergence and common compact
support.

Choose fixed even bumps `phi,psi in C_c^infinity((-lambda,lambda))` with
`phi(0)=1`, `psi(0)=0`, and `integral psi=1` (take `psi` supported away from
zero). Set

    f_j = g_j - g_j(0) phi
          - (integral g_j - g_j(0) integral phi) psi.

Both moments then vanish exactly. The two correction coefficients tend to
zero, hence `f_j -> h` in `H^s`.

Now define the windowed arithmetic map in log coordinates by

    (E_lambda f)(u) = 1_[lambda^-1,lambda](u) sqrt(u)
                         sum_(1<=n<=lambda^2) f(nu).

For fixed `lambda`, each summand is composition with the smooth diffeomorphism
`t -> n exp(t)` on `[-log lambda,log lambda]`, followed by multiplication by
`exp(t/2)` and restriction to that interval. Composition and multiplication
are bounded on `H^s` on these compact intervals; extension by the interval
indicator is bounded for `s<1/2`. Since the sum is finite,

    ||E_lambda f_j - E_lambda h||_(H^s(d log u)) -> 0.

The exact archimedean form has logarithmic Fourier weight, dominated by an
`H^s` weight for every fixed `s>0`; the fixed-window prime and pole terms are
bounded. Thus this convergence implies convergence in the shifted closed
`QW_lambda` form norm, with constants depending on `lambda` and `s`.

## What the lemma does and does not bridge

Each `f_j` is in the source's even Schwartz zero-moment class, so ACG's
global radical identity applies to `E(f_j)`. The theorem also shows that
their projections to the fixed multiplicative window converge in its Weil
form norm to the arithmetic image of `h` restricted to that window. This
removes the Schwartz-regularity objection at the level of fixed-window
approximation.

It does **not** show that the projected vectors are radical or have small
Weil energy. Projection to `[lambda^-1,lambda]` is not known to preserve the
global radical identity. The arithmetic image has zero upper tail for
`supp(f_j) subset [-lambda,lambda]`, but retains a lower tail on
`(0,lambda^-1)`. Transferring the global zero form to its window projection
requires a justified global sesquilinear-form extension to the split pieces
and a bound on that lower tail in the global Weil form topology. Neither is
proved here. The approximation constants also depend on `lambda`; no joint
large-window estimate follows.

## Falsification and verification

The exact-moment correction can be checked by substitution. The main
analytic checks are: (i) the jump-to-`H^s` estimate for all `s<1/2`,
(ii) continuity of the finite arithmetic composition map on a compact
window, and (iii) domination of the logarithmic form weight by `H^s`.
The most consequential possible failure would be the asserted Sobolev
boundedness of interval restriction/zero extension; it is why the strict
threshold `s<1/2` is required. No numerical experiment, uniform-in-window
estimate, residual estimate, or RH implication is claimed.

## Sources and prior art

Andrews–Connes–La Gatta, *The uncertainty operator, the Weil ground state
and the zeros of zeta*, arXiv:2611.13129v1, equations (9), (15), and (21):
the global radical inclusion is stated on the even Schwartz zero-moment
space, and the prolate moment relation is explicit. CCM,
*Zeta Spectral Triples*, arXiv:2511.22755v1, equation (3.19) and Theorem
3.6: the fixed-window archimedean form has logarithmic multiplier and the
remaining prime/pole terms are bounded at fixed window. The Sobolev density,
finite-composition continuity, and weighted-form implication are derived
here from standard one-dimensional Sobolev facts. No novelty or source-proof
audit claim is made.
