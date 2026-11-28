# B3-16 — Derivative kernels do not lift the limiting rank

Date: 2026-11-27. Status: exact consequence of Suzuki's locally uniform
kernel limit; rules out only the direct normalized jet-kernel lift.

## Question

Can derivatives of the scalar local Weil reproducing kernel provide a
finite-rank positive matrix kernel whose limiting fibers encode analytic
zero multiplicities?

## Derivation

Under RH, Suzuki's Theorem 8.2 gives

    J_a(w,z)/m_a -> conjugate(A_infinity(w)) A_infinity(z)

locally uniformly on `C^2`, where `m_a=J_a(0,0)` and
`A_infinity(z)=product_n(1-z^2/gamma_n^2)` runs over distinct positive zero
ordinates. For a fixed integer `r>=1` and a point `z0`, form the `r x r`
jet Gram matrix

    G_a[j,k] = (partial_wbar^j partial_z^k [J_a(w,z)/m_a])|_(w=z=z0),
                 0 <= j,k < r.

Each `G_a` is positive semidefinite: it is the Gram matrix of derivative
evaluation functionals in the RKHS. Local uniform convergence of entire
kernels implies locally uniform convergence of all fixed-order derivatives,
by Cauchy's integral formula on a slightly larger compact set. Therefore

    G_a[j,k] -> conjugate(A_infinity^(j)(z0)) A_infinity^(k)(z0).

The limiting matrix is an outer product, hence has rank at most one for
every `r`. At a distinct zero ordinate `z0=gamma`, the product over
distinct zeros has a simple zero, so for `r>=2` the jet vector begins with
`A_infinity(gamma)=0` and `A_infinity'(gamma) != 0`; the limiting matrix is
still rank one. If `m_gamma>1`, this is below the desired geometric
multiplicity; no such multiple zeta zero is known.

## Falsification and scope

- The derivative Gram construction is positive at each finite `a`, so the
  candidate is not rejected for lack of positivity.
- The normalized limit has no rank above one. Thus this direct construction
  cannot preserve an `r`-dimensional fiber in the limit for any `r>1`.
- The conclusion depends on the normalization `J_a/m_a` used in Theorem
  8.2. Other rescalings, subleading asymptotics, independent arithmetic
  feature kernels, and infinite-dimensional fibers are not ruled out.
- `A_infinity` uses each distinct ordinate once. The rank collapse is
  consistent with Suzuki's scalar spectral measure carrying analytic
  multiplicity as atom weights rather than geometric dimensions.
- No novelty claim is made: this is a direct consequence of the cited
  rank-one kernel limit, not a new theorem about all possible lifts.

## Next design target

Seek an arithmetic-defined vector of independent local functionals whose
limiting Gram matrix has rank reflecting the zero multiplicity while
remaining positive before RH or without using zero ordinates as input. Any
candidate must be tested for hidden circularity and for compatibility with
a self-adjoint matrix operator. If no such feature family emerges, pivot to
quantitative cutoff-Weyl estimates under explicit bounds on `gamma(a)`.

Primary source: [Suzuki, arXiv:2611.33001v1, Theorem 8.2](https://arxiv.org/html/2611.33001v1).
