# HP-01.2 — Simultaneous resonance avoidance and derivative obstruction

Date: 2026-11-27. Status: manual analytic lemma and abstract countermodel;
no estimate for the actual zeta ordinates and no operator construction.

## Question

Can the small factors

    omega_(k,N,L)=(4/L) sin^2(L gamma_k/2) (R'_(N,L)(gamma_k))^2

in the finite-zero metric be controlled uniformly as the retained dimension
grows? This note separates the sine-resonance factor from the interpolation
derivative and tests what follows from frequency lower bounds and zero-count
information alone.

## A uniform finite-family resonance lemma

Let `0<gamma_*<=gamma_1,...,gamma_N` be arbitrary positive frequencies,
`T>0`, and `0<delta<=1/2`. For one frequency gamma, the set

    E_gamma(delta)={L in [T,2T]: |sin(L gamma/2)|<delta}

is periodic with period `2 pi/gamma`. In one period its total length is
`8 arcsin(delta)/gamma`. The interval `[T,2T]` intersects at most
`T gamma/(2 pi)+2` such periods. Therefore

    meas(E_gamma(delta))/T
      <= (4/pi) arcsin(delta)+16 arcsin(delta)/(gamma T)
      <= (8/pi+32/(gamma_* T)) delta,

using `arcsin(delta)<=2 delta`. By the union bound,

    meas(union_{k<=N} E_gamma_k(delta))/T
      <= N delta (8/pi+32/(gamma_* T)).

For example, set

    delta=1/[100 N (1+1/(gamma_* T))].

Then the last bound is strictly less than one (indeed below 0.33), so some
`L in [T,2T]` satisfies

    min_{k<=N} |sin(L gamma_k/2)| >= delta.

This is an existence result for every finite frequency family. It needs no
Diophantine assumptions and loses only order `N^-1` in the worst coordinate.
It does not control `R'_(N,L)(gamma_k)`. Also, the selected `L` depends on
the frequencies; it cannot itself serve as a zero-independent parameter
choice for the arithmetic-side operator construction.

There is a related fixed-frequency averaging identity:

    (1/T) integral_T^(2T) sin^2(L gamma/2) dL
      =1/2-(sin(2 gamma T)-sin(gamma T))/(2 gamma T)
      >=1/2-1/(gamma T).

Thus the mean sine-square is at least `1/4` when `gamma_* T>=4`. Including
the factor `4/L` still gives

    (1/T) integral_T^(2T) (4/L) sin^2(L gamma/2) dL
      >=1-2/(gamma T) >=1/2.

This suggests averaging may remove resonance loss for a single fixed
frequency. It does not yield a lower bound for the actual averaged metric
weight, because `R'_(N,L)(gamma_k)` also varies with `L` and can be small.

## Why frequency counts do not control the derivative

Shi's equation (5.31) gives

    R'_(N,L)(gamma_k)
      =2 product_{ell!=k}(gamma_k^2-gamma_ell^2)
         / product_{n=1}^N(gamma_k^2-nu_(n,L)^2),

where `nu_(n,L)=2 pi n/L` in the paper's Fourier grid. For `N=2`, fix
`gamma_1>0` and choose `L` so neither `gamma_1` nor its limiting grid
coincidences make the denominator vanish. Set `gamma_2=gamma_1+epsilon`.
Then the numerator for `k=1` is

    2(gamma_1^2-gamma_2^2)=-4 gamma_1 epsilon+O(epsilon^2),

while the denominator has a finite nonzero limit as `epsilon -> 0`.
Consequently `R'_(2,L)(gamma_1)->0`. Thus no positive lower bound for this
factor can follow from `N`, a lower bound on the frequencies, and a zero
count alone. This is an abstract frequency countermodel, not a claim that
zeta has arbitrarily close pairs or that the actual zeta derivative factor
is small along Shi's parameter sequence.

## Consequences for the relative metric target

The resonance lemma removes one obstruction only after choosing `L` from
the retained ordinates. Even granting that choice, it gives at best

    omega_(k,N,L) >= (4/L) delta^2 |R'_(N,L)(gamma_k)|^2,

and supplies no lower bound for the derivative. Conversely, the close-pair
model shows why the zero-count estimate and a uniform lower frequency bound
cannot close the whitened norm estimate on their own. The precise missing
input is a joint estimate combining (i) a usable lower bound for the
interpolation derivative or a basis-invariant replacement for its smallest
directions, (ii) tail matrix elements in those same directions, and (iii)
an `L` selection or averaging procedure that does not feed unknown zero
ordinates into the arithmetic construction.

An averaged-in-`L` metric is a possible next question: integrate
`sin^2(L gamma/2)` over an `L` interval before whitening, then determine
whether the resulting arithmetic-side family has a common Hilbert space and
a spectral limit. Averaging the sine factor alone does not control the
interpolation products, so this is only a research direction.

## Verification and source

The measure estimate above is derived directly by counting periods and
applying the union bound. The close-pair limit is a direct expansion of the
displayed rational product. The source formulas are Shi, arXiv:2609.04908
v12, equations (5.30)–(5.32); the paper states the remaining uniform
compressed-metric control as open. The source was consulted through its
rendered full-text mirror after arXiv's HTML/PDF endpoints returned 404 in
this session; no numerical experiment or formal proof was run. No novelty,
RH, or Hilbert–Pólya operator claim is made.
