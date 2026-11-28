# B3-54 — Summable localized tails for the isolated shifts of one prime

Date: 2026-11-28. Status: rigorous isolated-block bound, conditional only on
the cited ACG trace-class estimate; no estimate for the sum of shifted blocks.

## Question

Can the large-scale shifts omitted by the Taylor estimate in B3-53 be summed
for one prime when the target is the Mellin-localized negative-pair trace?

## Uniform archimedean bound in the scale

Let `N_T^(n0)` be the archimedean negative-pair tail at scale `T`, and let
`M_R` be the Mellin projection onto `[-R,R]`. Choose a smooth multiplier
`0<=chi_R<=1` equal to one on `[-R,R]` and supported in `[-2R,2R]`. Positivity
of `N_T^(n0)` gives

    Tr(M_R N_T^(n0)) <= Tr(M_chi_R N_T^(n0))
                       <= ||M_chi_R A_T||_1 <= C R^A.

The last inequality is ACG Lemma 8.9 / equation (65), with the source's
absolute exponent `A` and constant `C`. Its scale-uniformity can also be
checked directly: the dilation unitary `theta(T)` conjugates both support
projections, hence `A_T=theta(T) A_1 theta(T)^*`; it commutes with Mellin
multipliers and preserves the ordered negative spectral tail. Therefore the
localized trace and trace-norm estimate are invariant under `T`. This uses
the archimedean scaling model, not a semilocal estimate.

By B3-52, the same bound applies exactly to an isolated shift at effective
scale `T_m=t p^(m/2)`.

## Summing one prime's geometric shifts

Write `d_m=(1-p^(-1))p^(-m/2)`. For indices whose prolate bulk lies below
the cutoff, B3-53 gives

    d_m Tr(M_R N_(T_m)^(n0)) <= 4(1-p^(-1))t 2^(-n0)

whenever `n0 >= 4 pi e t^2 p^m`. Set

    q = n0/(4 pi e t^2),   M = floor(log_p q),

and assume `q>=1`. Sum this estimate for `0<=m<=M`. For the remaining
large-scale shifts use the scale-uniform trace bound:

    sum_(m>M) d_m Tr(M_R N_(T_m)^(n0))
      <= C R^A (1-p^(-1)) p^(-(M+1)/2)/(1-p^(-1/2))
      <= C R^A (1-p^(-1))/(1-p^(-1/2)) sqrt(4 pi e) t/sqrt(n0).

The exceptional shift `-log p` is covered by B3-53 once
`n0>=4 pi e t^2/p`, and contributes at most `4t p^(-1)2^(-n0)`.
Consequently, for `n0>=4 pi e t^2`, the sum of the separately localized
negative-pair traces of all shifts in one prime factor is bounded by

    4(1-p^(-1))t(M+1)2^(-n0)
    + C R^A (1-p^(-1))/(1-p^(-1/2)) sqrt(4 pi e) t/sqrt(n0)
    + 4t p^(-1)2^(-n0).

In particular it tends to zero as `n0` grows, for each fixed `p,t,R`.
This closes the isolated one-prime large-scale summability gap left by
B3-53. The polynomial `R^A` dependence is explicit at the level of the
source's absolute exponent; the source constant and exponent have not been
recomputed here.

## Limits of the result

This is a sum of *separate* block traces. It is not the localized negative
trace of the sum of shifts: addition can mix singular subspaces. It also does
not give a uniform-in-prime bound summable over all primes; the displayed
large-scale coefficient is only bounded uniformly in `p`, so summing it over
a growing prime set incurs at least its cardinality absent further structure.
Thus this is not ACG's semilocal H2′ estimate, not positivity, and not an RH
result. The next mathematical gap is a Schatten/trace stability inequality
for block addition that retains the localized negative part, followed by
dependence on the finite prime set.

## Verification and sources

The split point, geometric sum and cutoff inequalities were derived
algebraically from B3-53 and ACG's local trace estimate. The scale invariance
was checked by conjugating the two projections and the negative spectral
projection by the dilation unitary; the Mellin cutoff commutes with it. No
numerics or formal proof assistant were used. ACG explicitly identifies
semilocal H2′ as open and distinguishes this archimedean localization from
the missing prime-product mechanism.

Primary source: Andrews, Connes, La Gatta, *The uncertainty operator, the
Weil ground state and the zeros of zeta*, arXiv:2611.13129v1, §8.3,
Lemma 8.9, equations (64)–(66), and Remark 8.10:
https://arxiv.org/abs/2611.13129.
