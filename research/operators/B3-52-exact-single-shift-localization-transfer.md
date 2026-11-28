# B3-52 — Exact transfer of Mellin localization for one prime-shift block

Date: 2026-11-28. Status: exact isolated-block identity; uniform scale bounds
and localization of the full prime-factor sum remain open.

## Question

Does the effective-scale identity in B3-51 transfer the *localized negative
pair trace* (the quantity in ACG (66)), and not just singular values, from one
prime-shift block to the archimedean block? If so, precisely what is still
needed for the prime-factor sum?

## Operators and exact identity

Use ACG's positive multiplicative model, with Mellin multiplier `U_infinity`,
support projections `P_a`, and scaling multipliers `theta(c)`. Write `T_tau`
for translation by `tau` in `x=log u`; both `T_tau` and `theta(c)` are
unitary Mellin multipliers. Fix any real shift `tau`; this includes the
geometric shifts `m log p`, `m>=0`, and the exceptional `-log p` term in a
one-prime local factor. The isolated shift has unitary symbol
`V_tau=U_infinity T_tau` and Hankel block

    Gamma_(t,tau) = (1-P_(1/t)) V_tau P_t.

Let `T=t exp(tau/2)`, `q=exp(tau/2)`, and

    Gamma_infinity(T) = (1-P_(1/T)) U_infinity P_T.

The support relation `T_tau P_t=P_(t exp(tau)) T_tau` and the exact scaling
conjugacy from B3-51 give

    Gamma_(t,tau) = theta(q) Gamma_infinity(T) theta(q)^* T_tau.

Thus with `L=theta(q)`, `R=theta(q)^* T_tau`, this is
`Gamma_(t,tau)=L Gamma_infinity(T) R`. If
`Gamma_infinity(T)e_n=kappa_n g_n`, then a corresponding singular pair
for the shifted block is

    e_(n,tau) = R^* e_n = T_tau^* theta(q) e_n,
    g_(n,tau) = L g_n = theta(q) g_n.

The companion vector used in the two-projection decomposition is
`f_n=U_infinity^* g_n` for the archimedean block and
`f_(n,tau)=V_tau^*g_(n,tau)` for the shifted block. Since `U_infinity`,
`T_tau`, and `theta(q)` commute,

    f_(n,tau) = T_tau^* theta(q) f_n.

Consequently the normalized negative-pair vector
`a_n=(e_n+f_n)/sqrt(2(1+kappa_n))` transforms by the *same* unitary:

    a_(n,tau) = W_tau a_n,
    W_tau := T_tau^* theta(exp(tau/2)).

For every Mellin-band multiplier `M_chi_R`, `W_tau` commutes with
`M_chi_R`. Hence, for every cutoff `n0`,

    sum_(n>n0) kappa_n ||M_(chi_R)^(1/2) a_(n,tau)||^2
      = sum_(n>n0) kappa_n ||M_(chi_R)^(1/2) a_n||^2.

This is an exact equality of localized negative-pair traces, not merely an
estimate. Multiplication of the block by a real local coefficient `d`
leaves singular vectors unchanged up to the harmless left sign when `d<0`,
and multiplies the negative-pair trace by `|d|`. For geometric modes,
`|d|=(1-p^(-1))p^(-m/2)`; for the exceptional shift `-log p`,
`|d|=p^(-1/2)` and the effective scale is `t p^(-1/2)`.

There is also a direct projection-level check. Write `I g(u)=g(1/u)` and
`P_hat_t=V_tau^*(1-P_(1/t))V_tau`, using the source relation
`I V_tau I=V_tau^*`. The support relation and multiplier commutation give

    P_t = R^* P_T R,
    P_hat_t = R^* P_hat_T R,
    1-P_t-P_hat_t = R^*(1-P_T-P_hat_T)R.

So the whole two-projection uncertainty operator, including its negative
spectral projection and eigenvalue ordering, is unitarily conjugate to the
archimedean one. This independently verifies the pair-vector transport and
also handles repeated singular values without choosing a special basis.

## Consequence from the source and remaining gap

ACG §8.3, Remark 8.10, explicitly states that the archimedean version of
(66) has a super-exponentially small tail in \(n_0\), and describes the
high-index prolate vectors as having negligible Mellin content below
frequency \(R\) once \(n\gg Rt\). The identity above transfers that
archimedean statement to each *fixed* isolated shift at its moving scale
`T=t exp(tau/2)`. The source's qualitative super-exponential assertion is
imported here; this note does not independently derive its constants or
uniformity in \(T\). B3-53 independently derives an explicit exponential
tail once the index cutoff exceeds a constant times `T^2`.

Two gaps remain. First, the bound must be quantified uniformly as
`T=t p^(m/2)` grows with positive `m`, strongly enough to sum over all prime
powers with weights \(d_{p,m}\). A fixed-\(T\) tail limit does not justify
that exchange of limits and summation. Second, even a summable estimate for
the isolated blocks does not by itself control the singular vectors of their
operator sum: distinct shifts need not have orthogonal singular subspaces.
An operator-norm remainder for omitted shifts is insufficient for this
weighted trace without an additional localized Schatten or resolvent bound
(cf. B3-23).

## Verification and scope

The right/left singular-vector transformations were derived separately from
`Gamma'=L Gamma R` and checked again by conjugating both support projections.
The cutoff commutation then proves the trace identity. No numerical or formal
check was used.
This is an isolated-block reduction, not (66) for the arithmetic product,
not a Hilbert–Pólya spectral correspondence, and not an RH result.

Source: Andrews–Connes–La Gatta, arXiv:2611.13129v1, §8.3, especially
(60)–(66) and Remark 8.10: https://arxiv.org/abs/2611.13129.
