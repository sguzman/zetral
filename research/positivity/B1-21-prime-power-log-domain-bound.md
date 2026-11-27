# B1-21 checkpoint — Uniform bound for prime powers k >= 2

Date: 2026-11-27. Status: unconditional uniform upper bound for the
prime-square and higher-prime-power terms on paired packets; no statement
about the first-prime term or positivity of the full form.

## Question

Can the non-first-prime arithmetic terms in Suzuki's direct Weil formula be
bounded uniformly over all normalized packet profiles, rather than only for
each fixed profile as in B1-14?

## Setup

Fix `L>0`, take real `g in C_c^infty((0,L))` with `||g||_2=1`, and set
`f_h(x)=(g(x)+g(h-x))/sqrt(2)`, `u_h=f_h*tilde(f_h)`, as in B1-14/15.
For any `h>=0`, `||f_h||_2^2<=2`, so Cauchy–Schwarz gives
`|u_h(x)|<=2` for every `x`. For `h>2L`, the packets are disjoint and
`||f_h||_2=1`; the cross-correlation at positive lag is
`(g*g)(h-x)/2` and is bounded by `1/2`.

The direct prime-power coefficient at `n=p^k` is `log(p)/p^(k/2)`.

## Higher prime powers

For `k>=3`, absolute summation over all primes and all exponents gives

    sum_p sum_(k>=3) log(p)/p^(k/2)
       (|u_h(k log p)|+|u_h(-k log p)|)
      <= 4 sum_p log(p)/(p^(3/2)(1-p^(-1/2))) < infinity.

The final series converges by comparison with
`sum_{n>=2} log(n)/n^(3/2)`. This bound is independent of `h` and of the
profile `g`; it uses only the L2 normalization and the factor-two bound for
the packet norm, including both signs in Suzuki's direct formula. No RH or
prime number theorem estimate is needed.

## Prime squares

For `h>2L`, the self-correlation pieces involve only primes with
`2 log p<=L`, a finite set depending on `L`; each is bounded using
`|g*tilde(g)(x)|<=1`. The cross term is supported on

    exp((h-2L)/2) <= p <= exp(h/2),

and, including both signs of the lag in the direct formula, has absolute value
at most

    sum_(A<p<=B) log(p)/p,  B/A=exp(L).

Chebyshev's bound `theta(x)=sum_(p<=x)log p <= C x` and partial summation
give

    sum_(A<p<=B) log(p)/p <= C(2+log(B/A)) = C(2+L)

when `A>=2`. If `A<2`, then `h<2L+2log(2)` and the whole cross sum has
`p<=2 exp(L)`, so it is bounded by a finite constant depending only on `L`.
For `0<=h<=2L`, the support of `f_h` lies in `[-L,2L]`, so the support of
`u_h` lies in `[-3L,3L]`. Only primes with `2 log p<=3L` contribute, a fixed
finite set, and `|u_h|<=2` applies.
Thus the complete `k=2` term is `O_L(1)`, uniformly over `h>=0` and the
L2-unit profile family. This bound is unconditional.

## Consequence and limits

All prime-power terms with `k>=2` in the direct arithmetic sum are uniformly
bounded on these packets, with no profile derivative or RH hypothesis. This
extends B1-14's fixed-profile estimates for those terms. It leaves the
first-prime term, whose leading archimedean cancellation and RH-conditional
residual are treated in B1-09/B1-12/B1-20. It also leaves the pole and
continuous-kernel terms, which may require the `H^log` norm, and says nothing
about sign, full-form coercivity, or RH. No finite numerical evidence is
used.

## Verification boundary and source

The packet autocorrelation bound is Cauchy–Schwarz; the higher-power sum is
an explicit convergent comparison; and the square term uses the standard
Chebyshev upper bound with partial summation. The arithmetic formula and
normalization are Suzuki, *The local Weil explicit formula and related
structures*, arXiv:2611.33001v1, equation (1.2), also transcribed in
B1-15. This is a manual derivation from that pinned source, not a Lean proof
or a claim of novelty.
