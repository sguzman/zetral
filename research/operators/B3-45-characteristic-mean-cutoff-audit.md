# B3-45 — The complete characteristic mean forces quadratic Fourier resolution

Date: 2026-11-28. Status: independent scalar-tail derivation from a recent
finite-characteristic paper; does not establish its mean hypothesis.

## Source and question

Dylan Suvlu, *Constant-mode transfer and compactness criteria for finite
Weil characteristics*, draft dated 2026-09-24, Paper IV in the four-paper
[*Weil form operators* series](https://github.com/dsuvlu/weil-form-operators),
equations (12), (69)–(71). Does its uniform bound on the complete
characteristic mean force the Fourier cutoff `N` to grow quadratically in
the interval length `L`, using only the untouched Fourier lattice zeros?

## Independent derivation

The characteristic mean is a sum of nonnegative contributions from
corrected roots plus the untouched lattice tail. At anchor `alpha=1/4`, the
positive lattice frequencies are `xi_n=2 pi n/L`, `n>N`; therefore

    mu >= mu_lat
       = sum_(n>N) alpha^2/(xi_n^2+alpha^2)
       = sum_(n>N) a_L^2/(n^2+a_L^2),
    a_L = alpha L/(2 pi) = L/(8 pi).

Suppose `mu<=M` with `M>0`. The summand `f(t)=a_L^2/(t^2+a_L^2)` is positive
and decreasing, so the lower integral comparison is

    M >= mu_lat >= integral_(N+1)^infinity f(t) dt
                      = a_L arctan(a_L/(N+1)).

If `L>16M`, then `M/a_L<pi/2`; monotonicity of tangent yields

    N >= a_L cot(M/a_L)-1.

For `0<u<pi/2`, `sin u<=u` and `cos u>=1-u^2/2`, hence
`cot u>=1/u-u/2`. Consequently

    N >= a_L^2/M - M/2 - 1.

If `a_L^2>=M^2+2M`, the right side is at least `a_L^2/(2M)`. Thus, for
`L>=max(1,8 pi sqrt(M^2+2M))`,

    N >= L^2/(128 pi^2 M).

The sharper asymptotic form follows directly from
`a cot(M/a)=a^2/M+O_M(1)` as `a->infinity`:

    liminf_(L->infinity) N/L^2 >= 1/(64 pi^2 M).

All constants agree with the cited manuscript. The derivation uses no
numerical zero data and no arithmetic-root contribution; adding those
nonnegative terms can only strengthen the cutoff constraint.

## Scope and relation to Zetral

This verifies only the elementary implication from a *postulated uniform
complete-mean bound* to Fourier resolution. It does not prove that such a
bound holds for any unbounded arithmetic family, establish simple/even
ground-state selection, or establish the paper's filtered-energy and
zero-retention theorem. The published formalization inventory explicitly
excludes the moving-selection premise and RH conclusion; this was checked
from the author's theorem map but not rebuilt locally.

The cutoff condition complements Zetral's fixed-window Rayleigh–Ritz limit
(B3-24), whose conclusion takes `N->infinity` at each fixed window and gives
no joint `L,N` rate. It also does not control the varying endpoint
normalization in B3-24/B3-25. The new series is a useful separate route to
audit because its central remaining premise is a complete-mean bound rather
than ACG's H2′ semilocal tail estimate.

No proof of RH, new theorem, formal verification, or novelty claim is made.
The source is a September 2026 author draft, not a peer-reviewed publication;
its remaining analytic claims require independent review.
