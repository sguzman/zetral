# B3-23 — Operator-norm convergence does not control the weighted trace tail

Date: 2026-11-27. Status: rigorous abstract obstruction to a norm-only
trace argument; not a counterexample to the semilocal Weil trace formula.

## Question

Does the uniform operator-norm approximation of the finite-prime multiplier
in B3-22, by itself, control pairings of the form
`Tr(theta(f) R theta(f)^*)` that appear in H2′?

## General trace criterion

If `R` is bounded and `B` is Hilbert–Schmidt, then

    |Tr(B R B*)| <= ||R|| ||B||_2^2.

Indeed, `BR` is Hilbert–Schmidt and `BRB*` is trace class, with
`||BRB*||_1 <= ||BR||_2 ||B||_2 <= ||R|| ||B||_2^2`. For `R>=0` this also
gives `0<=Tr(BRB*)<=||R|| ||B||_2^2`. Thus operator-norm error yields a
weighted trace estimate when the tested factor has a controlled
Hilbert–Schmidt norm.

## Countermodel when the tested factor is not Hilbert–Schmidt

On `ell^2(N)`, let `B e_n = n^(-1/2)e_n`. Then `B` is bounded but not
Hilbert–Schmidt, since `sum_n ||B e_n||^2 = sum_n 1/n = infinity`. Let

    H_M = sum_(n=1)^M 1/n,
    R_M = H_M^(-1) P_M,

where `P_M` projects onto the first `M` basis vectors. Each `R_M` is positive
finite rank and `||R_M||=1/H_M -> 0`, and each weighted product is trace
class. Nevertheless

    Tr(B R_M B*) = H_M^(-1) sum_(n=1)^M 1/n = 1.

So even positive finite-rank residuals converging to zero in operator norm
can retain a fixed weighted trace when the test factor is bounded but not
Hilbert–Schmidt. No modulus depending only on `||R_M||` can force this trace
to zero.

## Application boundary

In the Mellin representation used for the semilocal trace formula,
`theta(f)` acts as multiplication by the Mellin transform of `f`. For any
nonzero compactly supported smooth `f`, this multiplier is a nonzero entire
function. It is bounded below in modulus on some interval of positive
measure; normalized indicators on disjoint subsets give an orthonormal
sequence whose images have norms bounded below. Hence `theta(f)` is not
compact, and in particular not Hilbert–Schmidt, on the full Mellin `L²`
space. The straightforward Hilbert–Schmidt trace estimate therefore cannot
be applied globally.

This does **not** show that the actual ACG quantity
`Tr(theta(f)N_t^(n0)theta(f)*)` lacks a uniform estimate: its trace-class
property follows from the structured interaction between the scaling action
and the near-self-dual tail. It shows why the operator-norm approximation in
B3-22 is insufficient by itself. To use it in H2′ one needs a localized
Schatten estimate or an index/frequency bound exploiting that structure.

## Next criterion

Seek a bound of the form

    ||theta(f) P_{tail,R}||_2^2 <= C Lambda(f) w(R,n0)

for frequency-localized tail projections `P_{tail,R}`, with a summable
high-frequency remainder. Alternatively prove the relative-density estimate
directly. Neither follows from operator-norm approximation alone. This is a
necessary analytic bridge, not a no-go for the source's H2′ hypothesis.

Primary source: Andrews–Connes–La Gatta,
[arXiv:2611.13129](https://arxiv.org/abs/2611.13129), §8.3, equations (64)–(66)
and Remark 8.10.
