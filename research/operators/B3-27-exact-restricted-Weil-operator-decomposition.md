# B3-27 — Exact restricted Weil operator decomposition

Date: 2026-11-27. Status: exact source-form rewrite for residual analysis; no
residual bound or RH implication.

## Question

Can the operator action required by the prolate-candidate residual be written
as explicit pieces with fixed normalizations and signs?

## Operator formula

Set `L=2 log(lambda)` and identify `H_lambda=L²([0,L])` with the closed
subspace of `L²(R)` supported on `[0,L]`; let `P_L` denote this support
projection. Write `F` for the nonunitary Fourier transform
`Ff(t)=integral f(x) exp(-itx) dx` and `U=(2 pi)^(-1/2)F` for the unitary
Fourier transform. Define

    m(t) = 2 partial_t theta(t),
    u_+(x)=lambda^(-1/2) exp(x/2),
    u_-(x)=lambda^(1/2) exp(-x/2),
    S_a = P_L tau_a P_L,   (tau_a f)(x)=f(x+a).

On `Dom(A_lambda)`, the operator associated with the restricted Weil form is

    A_lambda
      = P_L U^(-1) M_m U P_L
        + |u_-><u_+| + |u_+><u_-|
        - sum_(1<n<=lambda²) Lambda(n)/sqrt(n)
            (S_(log n) + S_(-log n)).

The first term is the compression of the archimedean multiplier. Equation
(3.19) gives `integral |Ff(t)|² (2 theta'(t)/(2 pi)) dt`, which equals
`integral |Uf(t)|² 2 theta'(t) dt`; this fixes the exact coefficient. The
second is rank at most two. Each prime-power term is a self-adjoint, zero-extended
partial translation and there are finitely many for each fixed lambda. In
particular, all terms after the compressed multiplier form a bounded
self-adjoint perturbation for fixed lambda.

## Derivation and normalization check

The pole functionals in the source's equation (3.19) are

    Ff(i/2)=integral_0^L f(x) lambda^(-1/2) exp(x/2) dx = <u_+,f>,
    Ff(-i/2)=integral_0^L f(x) lambda^(1/2) exp(-x/2) dx = <u_-,f>,

for the inner product antilinear in the first variable. Thus
`<f,(|u_-><u_+|+|u_+><u_-|)f>` equals exactly
`2 Re(Ff(i/2) overline(Ff(-i/2)))`, including the sign and no extra factor.
The reciprocal lambda factors cancel in the outer products, so the displayed
rank-two operator can equivalently be written with the unscaled pair
`exp(±x/2)`.

For `a=log n`, the additive-coordinate convolution identity is

    (f* *g)(a) = integral_0^L overline(f(x)) g(x+a) dx
               = <f,S_a g>,

where functions are zero extended before translation. The same identity at
`-a` gives `T(n)=n^(-1/2)(S_a+S_-a)` from source equation (3.20). Substitution
into (3.19) gives the displayed negative prime sum. The factor `n^(-1/2)` is
inside `T(n)` and the separate coefficient is `Lambda(n)`.

The formula consequently gives the exact residual expression for any
`k_lambda in Dom(A_lambda)`:

    r_lambda = || P_L U^(-1)(m U k_lambda)
        + u_- <u_+,k_lambda> + u_+ <u_-,k_lambda>
        - sum_(1<n<=lambda²) Lambda(n)/sqrt(n)
            (S_(log n)+S_(-log n)) k_lambda
        - m_lambda k_lambda ||_2,

where `m_lambda=QW_lambda[k_lambda]/||k_lambda||²`. This is a formula for the
quantity to estimate, not an estimate: none of its terms has yet been
combined to show decay as `lambda` increases.

## Falsification / scope check

The prime shift sum is finite at fixed lambda, not uniformly finite in the
limit. `P_L tau_a P_L` is self-adjoint only after pairing `a` and `-a`; using
one shift alone would give the wrong symmetry. The pole term is indefinite
in general despite being self-adjoint. No positivity, small-residual claim,
spectral gap, or zero correspondence follows from this decomposition.

The source's Theorem 3.6 describes the archimedean multiplier as
`partial_t theta(t)` in its compactness argument, while direct conversion of
equation (3.19) gives `2 partial_t theta(t)` for the exact operator. This
factor-of-two mismatch is left unresolved here. Both symbols are comparable
to `log(2+|t|)`, so domain and compactness claims are unaffected; residual
numerics require the normalization to be clarified.

## Source

Connes–Consani–Moscovici, *Zeta Spectral Triples*,
[arXiv:2511.22755v1](https://arxiv.org/abs/2511.22755), equations (3.8)–(3.11),
(3.19)–(3.20); log-coordinate isometry and convolution conversion in
Proposition 3.2, equations (3.17)–(3.18). The decomposition is derived
directly from these source identities. No separate source-proof audit,
formalization, numerical experiment, or novelty claim is made.
