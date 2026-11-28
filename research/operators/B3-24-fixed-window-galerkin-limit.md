# B3-24 — Fixed-window Fourier truncations converge variationally

Date: 2026-11-27. Status: source-pinned variational result with an independent
abstract derivation; no quantitative or joint-window conclusion.

## Question

What can be proved about the CCM Fourier-cutoff ground energies and vectors as
`N -> infinity` with the window `lambda > 1` fixed, without assuming RH?

## Result

For fixed `lambda`, let `q_lambda` be the lower-bounded closed Weil form on
`H_lambda = L^2([lambda^-1,lambda],du/u)`, with compact-resolvent associated
operator `A_lambda`. Let `E_N` be the span of the log-coordinate Fourier
modes `V_n`, `|n|<=N`, and

    mu_N(lambda) = inf { q_lambda[v] : v in E_N, ||v||_2=1 },
    mu(lambda)   = inf { q_lambda[v] : v in Dom(q_lambda), ||v||_2=1 }.

Then `mu_N(lambda)` decreases to `mu(lambda)`. This is the qualitative
Rayleigh–Ritz limit, not a rate. If `v_N` is any normalized lowest vector in
`E_N`, compactness of the form-domain embedding implies every sequence has a
subsequence converging strongly in `H_lambda` to a normalized ground vector
of `A_lambda`. If the full ground eigenspace is one-dimensional, then
`dist(v_N, C theta_lambda) -> 0`; without simplicity, only convergence of
subsequences to the ground eigenspace is guaranteed.

### Independent argument

The spaces `E_N` are nested and their union is the source's form core. Hence
`mu_N >= mu` and `mu_N` is decreasing. Given `epsilon>0`, choose a unit form
vector `f` with `q_lambda[f] < mu+epsilon`. By the form-core property it is
approximated in form norm by elements of the union of `E_N`; after
normalization their Rayleigh quotients approach `q_lambda[f]`. Thus
`lim_N mu_N <= mu+epsilon`, and epsilon arbitrariness proves the limit.

For normalized minimizers, `q_lambda[v_N]=mu_N` is bounded below and above.
After adding a fixed lower-bound shift, this bounds them in the form norm.
Compactness of the form embedding gives a strongly convergent subsequence;
lower semicontinuity makes its unit-norm limit a minimizer. The associated
operator therefore has that limit in its ground eigenspace. If that space is
simple, a subsequence contradiction argument upgrades convergence of
projective distance to convergence of the whole sequence.

## Boundary-normalization obstruction

This L2 convergence does not control the CCM boundary normalization
`<delta_N,v_N>=1`. In the normalized Fourier basis, CCM defines

    delta_N = L^(-1/2) sum_{|n|<=N} V_n,
    ||delta_N||_2^2 = (2N+1)/L,    L=2 log(lambda).

Consequently `g_N=delta_N/||delta_N||_2^2` satisfies
`||g_N||_2=sqrt(L/(2N+1))->0` while `<delta_N,g_N>=1`. This exact example
shows that L2 convergence alone cannot pass the varying boundary functional
to a limit. It is not a counterexample involving the minimizing vectors; it
isolates a missing continuity estimate for that particular sequence.

## Application and limitations

The CCM paper already states the fixed-window minimum convergence in
Proposition 3.4. The derivation above spells out the standard variational
argument and the compactness consequence for eigenvectors. The qualitative
result fills only the `N -> infinity` leg at fixed `lambda`, conditionally on
simple full ground state for convergence to a single ray. It gives no rate
uniform in `lambda`, proves neither simplicity nor evenness, and does not
control the CCM endpoint normalization or locally uniform convergence of
determinants. In particular it cannot be exchanged with the distinct limit
`lambda -> infinity` or a joint `N,lambda -> infinity` limit.

## Source and verification boundary

Primary source: Connes–Consani–Moscovici, *Zeta Spectral Triples*,
[arXiv:2511.22755v1](https://arxiv.org/abs/2511.22755), Proposition 3.4,
equations (3.21)–(3.22), Theorem 3.6, Corollary 3.7, and Corollary 5.6.
Proposition 3.4 states that the linear span of the `V_n` is a form core and
that the bottom of the restricted forms on `E_N` tends to the full lower
bound. Corollary 3.7 gives a minimizing eigenvector; compactness of the form
embedding follows from the standard equivalence for semibounded forms with
compact resolvent. Corollary 5.6 uses
`delta_N=L^(-1/2)sum_{|n|<=N}V_n` as a boundary evaluation approximation.
This note independently derives the stated consequences from those imported
facts. No independent audit of the primary-source proof of Proposition 3.4,
formalization, numerical experiment, or novelty claim is made.
