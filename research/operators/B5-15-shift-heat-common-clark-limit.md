# B5-15 — Shift and heat Clark models share a strong-resolvent endpoint

Date: 2026-11-27. Status: RH-conditional common-limit comparison for the
normalized scalar Clark models; no finite-parameter intertwiner.

## Question

Can the B5-14 common-Hardy-space strong-resolvent construction be applied to
the heat family as well, and what relation survives between the two
deformations when their Weyl quotients disagree at second order?

## Heat-family hypotheses

Assume RH. The de Bruijn–Newman theorem and Rodgers–Tao's
`Lambda>=0` result imply `Lambda=0`, so `F_t` has only real zeros for every
`t>=0`. The function `F_t` is even, real entire, and of order at most one.
Its even Hadamard product (including a possible zero at the origin) gives
`q_t=-F_t'/F_t` as a Herglotz function. For positive zeros `gamma` of
multiplicity `m_(t,gamma)`,

    q_t(z) = -m_(t,0)/z
             + sum_(gamma>0) 2 m_(t,gamma) z/(gamma^2-z^2).

For each fixed `t`, the super-exponential decay of the even Fourier kernel
implies order at most one: bounding the integral by
`exp(tu^2+r|u|)|Phi(u)|` and using
`|Phi(u)| <= exp(-c exp(4|u|))` for large `|u|` gives
`log max_|z|<=r |F_t(z)| = O_t(r log(2+r))`. Thus the order-one Hadamard
factorization applies. The order bound implies
`sum_gamma m_(t,gamma)/gamma^2 < infinity`. Hence

    Im q_t(iy)/y = m_(t,0)/y^2
        + 2 sum_(gamma>0) m_(t,gamma)/(gamma^2+y^2) -> 0.

So the half-plane Clark measure has no atom at infinity for each fixed
`t>=0`. The Fourier representation in B5-01 also gives
`F_t -> F_0` and `F_t' -> F_0'` locally uniformly as `t->0+`. Under RH,
`F_0` has no zero in `C+`; therefore `q_t -> q_0` and the associated inner
functions

    theta_t^heat=(1+i q_t)/(1-i q_t)

converge locally uniformly in `C+` and, after the Cayley map, in the disk.

## Shared limit with the shifted family

Theorem B5-14 used only (i) local-uniform convergence of inner functions,
(ii) strong convergence of their model-space projections, (iii) the
explicit Clark rank-one formula, and (iv) absence of a Clark atom at
infinity. The heat family satisfies all four conditions. Thus its
alpha=`-1` Clark self-adjoint operators, embedded in the same `H^2(D)` and
extended by zero on the model-space complements, converge in strong
resolvent sense to the B5-07 endpoint Clark operator `T_0` as `t->0+`.

B5-14 proves the identical endpoint convergence for the normalized shifted
family as `omega->0+`. With the second-order time match `t=2 omega^2` from
B5-01, for every `z` outside the real axis,

    (T_shift,omega-z)^(-1) - (T_heat,2omega^2-z)^(-1) -> 0

strongly on `H^2(D)`. This is a rigorous common-endpoint spectral relation
for the chosen Clark models. It coexists with B5-09/B5-10: strong-resolvent
convergence at the common endpoint does not imply equality of finite-
parameter Weyl functions, equality of zero sets, an intertwiner between
positive-parameter operators, norm-resolvent convergence, or a uniform
estimate as `z` moves into B5-11's exponential high-energy layer.

## Falsification and scope

- The heat parameter is restricted to `t>=0`; the all-real-zero property
  uses both RH and the Rodgers–Tao lower bound for the de Bruijn–Newman
  constant. No claim is made for negative heat time.
- No infinity atom is inferred from local convergence. It is checked
  separately for each heat parameter by the Hadamard product and the
  convergent reciprocal-square zero sum.
- The argument establishes only convergence of the specified scalar Clark
  operators under the natural Hardy-space inclusions. It does not identify
  them with Suzuki's arithmetic Hamiltonians or prove an operator relation
  between the two families away from the endpoint.
- The conclusion is fixed-`z` strong-resolvent convergence. B5-11's
  exponentially high spectral layer remains nonuniform and is not removed
  by this result.

## Verification and prior art

The canonical product includes the possible origin zero explicitly: evenness
removes an exponential linear factor, and order at most one leaves the paired
factors `(1-z^2/gamma^2)`. The reciprocal-square sum is the convergence
condition for this genus-zero paired product. For `y>=1`, the summands in
`Im q_t(iy)/y` are bounded by `2m_gamma/gamma^2`; dominated convergence
therefore proves the zero linear coefficient. The local limit follows from
B5-01's exact Fourier family and super-exponential kernel. The operator step
is exactly the Clark/Cayley argument in B5-14, applied separately to the
heat family. These are standard ingredients; no novelty claim is made. No
numerical zero data or Lean proof is used. The shared-limit comparison uses
the triangle inequality for strong convergence of the two resolvents at each
fixed nonreal spectral parameter; it gives no uniformity in that parameter.

Sources:

- B5-01 for the Fourier heat family and scale `t=2 omega^2`.
- B5-14 and the classical Clark formula source cited there.
- H. L. Montgomery, D. H. J. Polymath, *Effective approximation of heat
  flow evolution of the Riemann xi function*,
  https://arxiv.org/abs/1904.12438.
- B. Rodgers and T. Tao, *The de Bruijn-Newman constant is non-negative*,
  Theorem 1.1, https://arxiv.org/abs/1801.05914.
