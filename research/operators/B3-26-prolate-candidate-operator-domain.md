# B3-26 — The prolate candidate lies in the fixed-window Weil operator domain

Date: 2026-11-27. Status: rigorous domain-membership result for each fixed
window; no small-residual or spectral-gap estimate.

## Question

Does the prolate-derived candidate `k_lambda=E(h_lambda)` belong to the
operator domain of the restricted Weil operator `A_lambda`, as required for
the direct residual-to-gap estimate used in Campaign XCVII?

## Result

For each fixed `lambda>1`, yes: `k_lambda` belongs to `Dom(A_lambda)`.
This follows from its finite piecewise-smooth structure and the logarithmic
growth of the archimedean Fourier multiplier. The result is pointwise in the
window and supplies no uniform bound on `||(A_lambda-m_lambda)k_lambda||`.

## Proof

Connes defines

    E(h)(u) = u^(1/2) sum_{n>=1} h(nu)

and takes `h_lambda` to be a linear combination of two prolate functions
supported in `[-lambda,lambda]`. On the compact interval
`u in [lambda^-1,lambda]`, only integers `1<=n<=lambda²` contribute. For
each such n, `u^(1/2)h_lambda(nu)` is smooth up to its cutoff `u=lambda/n`;
after zero extension at that cutoff it is piecewise smooth with at most a
finite jump. Therefore `k_lambda` has compact support in logarithmic
coordinates and bounded variation. Its Fourier transform satisfies

    |k_hat_lambda(t)| <= C_lambda/(1+|t|).

The restricted Weil form has, for fixed lambda, an archimedean part whose
operator multiplier under the unitary Fourier transform is
`2 partial_t theta(t)`. Equation (3.19) uses the unnormalized transform with
coefficient `2 partial_t theta/(2 pi)`; converting to the unitary transform
gives this multiplier. It is bounded near finite t and grows as
`O(log(2+|t|))`. Thus
`2 partial_t theta(t) k_hat_lambda(t)` is square-integrable: its
high-frequency square is
bounded by a constant times `log²(2+|t|)/(1+|t|)²`. In particular the
zero-extended candidate lies in the operator domain of the full-line
multiplier.

The Hilbert space for `A_lambda` is the closed subspace of functions
supported on the log-window. The operator associated with the restricted
archimedean form is the compression of the full-line multiplier: for a
supported `f` with `2 theta' (Uf) in L²`, its action is
`P_lambda U^-1(2 theta' Uf)`. This follows directly by testing the form against
supported vectors. The remaining fixed-window terms are bounded operators:
there are finitely many prime terms (`n<=lambda²`), and the two pole
evaluations are bounded linear functionals on a compact interval. Bounded
perturbation leaves the operator domain unchanged. Hence
`k_lambda in Dom(A_lambda)`.

## What remains missing

Membership does not imply the residual is small. The residual needed for the
ground-state comparison is

    r_lambda = ||(A_lambda-m_lambda) k_lambda||_2,
    m_lambda = QW_lambda[k_lambda]/||k_lambda||_2².

The argument above only proves that this quantity is finite for each fixed
lambda. Its constants depend on the window and on the candidate's endpoint
jumps; no decay as `lambda -> infinity` is established. Nor is there an
independent lower bound on the gap above the ground eigenvalue. Consequently
the residual-to-gap criterion in Campaign XCVII is still unavailable.

## Source and verification boundary

Primary sources: Connes, *The Riemann Hypothesis: Past, Present and a Letter
Through Time*, [arXiv:2602.04022v1](https://arxiv.org/abs/2602.04022), §6.4,
equations (14), (20), and the support statements in §6.3; Connes–Consani–
Moscovici, *Zeta Spectral Triples*,
[arXiv:2511.22755v1](https://arxiv.org/abs/2511.22755), equations (3.8)–(3.11),
(3.19)–(3.20), and Theorem 3.6. The argument uses the stated source
definitions and standard bounded-variation Fourier decay and bounded
perturbation facts. It is an independent derivation of domain membership,
not an audit of the papers' prolate asymptotics or Weil-form identities. No
residual computation, numerical experiment, formalization, or novelty claim
is made. The source's Theorem 3.6 describes the multiplier as
`partial_t theta(t)` in its compactness argument, whereas direct conversion
of equation (3.19) gives `2 partial_t theta(t)` for the exact operator. This
factor does not affect the logarithmic domain or compactness conclusion, but
the exact normalization should be reconciled before residual numerics.
