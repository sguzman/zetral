# B3-29 — Correcting the two radical moments of the prolate trial

Date: 2026-11-27. Status: exact finite-dimensional correction identity with a
source-domain obstruction; no restricted-Weil residual bound.

## Question

The arithmetic map `E` sends the zero-moment Schwartz space
`S_0^ev={f in S(R)^ev: f(0)=integral f=0}` into the radical of the global
Weil form (ACG equation (9)). The zero-integral two-mode prolate trial
`h_lambda` already satisfies one of these moments and has a very small value
at zero. Can that remaining moment be corrected by one additional prolate
mode at small Hilbert cost?

## Exact correction identity

Let `psi_n=h_{n,lambda}` be the real even orthonormal prolate basis used in
ACG §2.3, and write `v_n=psi_n(0)`. The finite Fourier eigenrelation and
equation (15) give

    integral psi_n = chi_n v_n.

For the two-mode vector `h=a_0 psi_0+a_4 psi_4` in equation (21), ACG's
definition gives `integral h=0`; set `r=h(0)=a_0v_0+a_4v_4`. Choose an
even index `j` with `v_j != 0` and `chi_j != chi_4`. Define

    c_4 = -chi_j r / ((chi_j-chi_4) v_4),
    c_j =  chi_4 r / ((chi_j-chi_4) v_j),
    h_* = h + c_4 psi_4 + c_j psi_j.

Then, by direct substitution,

    h_*(0)=0,       integral h_*=0,

and orthonormality gives the exact correction cost

    ||h_*-h||_2^2 = |c_4|^2+|c_j|^2.

For large enough `lambda`, one can take `j=4k` with `0<chi_j<=1/2`, while
`chi_4>3/4`; then `|chi_j-chi_4|>1/4`. Consequently

    ||h_*-h||_2 <= 4 |r| (|chi_j|/|v_4| + |chi_4|/|v_j|),

and the source asymptotic `r=O(delta_4(lambda))` makes this small whenever the
chosen `v_j` has a sufficiently good lower bound. The identity itself is
exact and needs no asymptotic approximation.

## Obstruction to turning it into a Weil-form residual

This is not yet a radical vector to which ACG equation (9) applies. That
inclusion is stated for even Schwartz functions. The `psi_n` in the trial are
defined on `[-lambda,lambda]` and extended by zero; a nonzero prolate ODE
solution cannot have a globally smooth zero extension, since a smooth
compactly supported extension would have all endpoint derivatives zero and
ODE uniqueness would force the solution to vanish identically. Thus `h_*`
is not in the cited Schwartz class. Its arithmetic image also has a lower
tail outside `[lambda^-1,lambda]`: compact support of `h_*` gives the upper
cutoff, but the finite Fourier transform is not compactly supported, so the
lower cutoff is not exact. No extension of the radical identity to this
piecewise-smooth class, no smoothing-error estimate in the Weil form norm,
and no boundary truncation estimate have been established.

The correction lemma therefore identifies a plausible near-radical route,
but does not show that the windowed vector has small operator residual or is
near the `A_lambda` ground state. It could also be quantitatively useless if
`|v_j|` is too small; a uniform lower bound for the selected mode is required.

## Falsification and verification

Substitution into the two moment equations independently verifies both exact
constraints and the norm formula. The candidate for falsification is the
small-cost premise: record `v_j` for a specified spectral index selection and
derive a uniform lower bound, rather than inferring it from `chi_j<=1/2`.
Even a successful small-cost bound would not bypass the Schwartz-domain and
window-tail gaps above. No numerical data, RH implication, operator
correspondence, independent proof audit, or novelty claim is made.

## Sources

Andrews–Connes–La Gatta, *The uncertainty operator, the Weil ground state
and the zeros of zeta*, arXiv:2611.13129v1, equations (9), (15), (21), and
(23). Equation (9) supplies the global radical inclusion only on the stated
Schwartz space; equations (15) and (21) give the exact moment coefficients;
equation (23) gives the source estimate `h_lambda(0)=O(delta_4)`. Standard
uniqueness for the regular prolate differential equation is used only to
show that the zero extension is not globally smooth. No source result is
claimed outside its stated domain.
