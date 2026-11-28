# B3-31 — Poisson bound for the lower arithmetic-image tail

Date: 2026-11-27. Status: exact L2 tail estimate for Schwartz radical inputs;
no Weil-form tail or residual bound.

## Question

For the smooth, exact-moment approximants in B3-30, can the arithmetic image
below the finite window's lower endpoint be bounded directly, without
estimating the divisor sum term by term?

## Exact Poisson identity

Let `f` be even Schwartz on `R`, with

    f(0)=0,       integral_R f(x) dx=0,

and use the Fourier convention `hat f(y)=integral f(x) exp(-2 pi i x y) dx`.
For `E(f)(u)=sqrt(u) sum_(n>=1) f(nu)`, Poisson summation gives, for every
`u>0`,

    E(f)(u) = (1/(2 sqrt(u))) sum_(k in Z, k!=0) hat f(k/u).

Indeed, evenness gives the half-lattice identity
`sum_(n>=1)f(nu)=(sum_(n in Z) f(nu)-f(0))/2`; the two zero moments remove
the `k=0` Poisson term and the `f(0)` term. The sum is absolutely convergent
because `f` is Schwartz.

For any integer `N>1`, put

    M_N(f)=sup_(y in R) (1+|y|)^N |hat f(y)|.

If `lambda>=1` and `0<u<=lambda^-1`, then

    |E(f)(u)| <= M_N(f) zeta(N) u^(N-1/2),

so the lower-tail norm satisfies the explicit bound

    integral_0^(lambda^-1) |E(f)(u)|^2 du/u
      <= M_N(f)^2 zeta(N)^2 / ((2N-1) lambda^(2N-1)).

Equivalently,
`||1_(0,lambda^-1) E(f)||_(L2(du/u)) <= zeta(N) M_N(f)/(sqrt(2N-1) lambda^(N-1/2))`.
Compact support of `f` in `[-lambda,lambda]` also gives `E(f)(u)=0` for
`u>lambda`; hence this is the only arithmetic-image tail outside the window.

## Consequence and scaling bottleneck

For each fixed window and each Schwartz approximant, the lower tail is in
`L2` and has an arbitrary-power endpoint estimate. For a growing family
`f_lambda`, this proves tail convergence at rate
`M_N(f_lambda) lambda^(-(N-1/2))`; in particular it tends to zero if
`M_N(f_lambda)=o(lambda^(N-1/2))` (or satisfies the corresponding
target-rate bound). The
moment-preserving mollification in B3-30 gives no such uniform seminorm
control: narrowing the endpoint taper can make high derivatives and `M_N`
large. The unsmoothed prolate function has only `O(1/|y|)` Fourier
decay from its endpoint jumps, so this absolute Poisson-tail argument does
not apply to it directly.

The result controls only the tail's Hilbert norm. It does not put the tail
in a global Weil-form domain with a quantitative bound, justify splitting
the radical sesquilinear identity across the window boundary, or bound the
restricted operator residual. Those remain separate requirements.

## Falsification and verification

The identity follows by substituting the stated Fourier convention into
Poisson summation; the constants `1/2` and `1/sqrt(u)` are retained before
squaring and integrating. The tail estimate uses
`sum_(k!=0)|k|^-N=2 zeta(N)` and
`integral_0^(1/lambda)u^(2N-2)du=1/((2N-1)lambda^(2N-1))`.
No numerical evidence, uniform prolate-family estimate, form-norm claim, or
RH implication is asserted.

## Sources

The arithmetic map and Poisson relation are stated in Andrews–Connes–La
Gatta, *The uncertainty operator, the Weil ground state and the zeros of
zeta*, arXiv:2611.13129v1, equation (9) and the discussion in §2.2. The
displayed pointwise and L2 tail inequalities are derived here for the
Schwartz zero-moment class. No extension to the nonsmooth prolate input is
claimed.
