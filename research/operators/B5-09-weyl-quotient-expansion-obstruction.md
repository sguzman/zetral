# B5-09 — Second-order comparison of shifted and heat Weyl quotients

Date: 2026-11-27. Status: RH-conditional second-order scalar-time
obstruction for these normalized Weyl quotients; general intertwiners remain
open.

## Question

Can a scalar time change make the normalized canonical Weyl functions of the
shifted and heat families agree to their first nonconstant order near the
common endpoint?

## Expansions

Let `F(z)=xi(1/2-iz)`, and set

    m_shift,omega = B^omega/(omega A^omega),
    m_heat,t = -F_t'/F_t,

where `F_t` is the same-scale heat family from B5-01 and
`partial_t F_t=-(1/4)partial_z^2 F_t`. Under RH, `m_shift,omega` is
Herglotz. Also RH implies `Lambda=0` using Rodgers–Tao's `Lambda>=0` and
the de Bruijn–Newman equivalence; for `t>=0`, `F_t` has only real zeros.
The Fourier kernel gives `F_t` an even real entire function of order at
most one. Its even Hadamard product with only real zeros then makes
`m_heat,t` Herglotz as well (with the usual meromorphic continuation across
the real axis).

Central differences and the heat equation give, locally uniformly away
from zeros of `F`,

    m_shift,omega = -F'/F
      + omega^2 [ F'''/(6F) - F'F''/(2F^2) ] + O(omega^4),

    m_heat,t = -F'/F
      + (t/4) [ F'''/F - F'F''/F^2 ] + O(t^2).

Thus if `t(omega)=a omega^2+o(omega^2)`, agreement through order
`omega^2` requires the meromorphic identity

    (1/6-a/4) F'''/F + (-1/2+a/4) F'F''/F^2 = 0.       (*)

This is a necessary condition for equality of these fixed-normalization Weyl
quotients to that order. It is more specific than the mismatch of the
original Fourier multipliers: it compares the induced logarithmic
derivative data.

## Pole test under RH

Under RH, (*) is impossible for every real `a`. First, Conrey's theorem
gives infinitely many simple zeros of zeta on the critical line, hence
simple real zeros of `F`. At any such zero `r`, RH makes all zeros of `F`
real; evenness and order one give the paired product

    F(z) = F(0) product_(gamma>0) (1-z^2/gamma^2)^(m_gamma).

Factor `F(z)=(z-r)G(z)`. At `r`, `G(r)!=0` and

    (log G)''(r) = - sum_(rho != r) m_rho/(r-rho)^2 < 0.

The sum converges absolutely since the xi zeros have exponent of convergence
at most one. If `F''(r)=2G'(r)` is zero, then `G'(r)=0`, so
`F'''(r)=3G''(r)=3G(r)(log G)''(r)!=0`. Thus every simple zero has at
least one of `F''(r),F'''(r)` nonzero.

Now (*) fails for every real `a`:

- If `F''(r)!=0`, the double-pole coefficient forces `a=2`. Substitution
  into (*) leaves `-F'''/(3F)`, which cannot vanish identically because
  `F` is nonpolynomial.
- If `F''(r)=0` but `F'''(r)!=0`, the two terms in (*) have a combined
  simple-pole coefficient `-F'''(r)/(3F'(r))`, independent of `a`, so it
  cannot vanish.

Therefore, under RH, the fixed-normalization functions `m_shift,omega` and
`m_heat,t(omega)` cannot agree through order `omega^2` for any scalar
rescaling `t(omega)=a omega^2+o(omega^2)`. No zero ordinate is used as an
input. This excludes only equality of these particular Weyl functions to
that order; it does not rule out a nonlinear fractional-linear Weyl
transformation, a different choice of endpoint pair, or a general
intertwining operator.

## Verification and limitations

The coefficients follow by direct quotient expansion from B5-01's exact
definitions. The pole orders use a local Taylor series. The jet nonvanishing
uses only the paired Hadamard product under RH and a classical theorem
guaranteeing simple critical-line zeros. No numerical computation or formal
proof was used. The source search also found Rezvyakova's work on zeros of
derivatives of xi; it concerns their location and proportions, not this
specific jet-at-a-simple-zero identity. No novelty claim is made.

This result does not identify canonical Hamiltonian densities, give an
intertwining map, prove equality or inequality of finite-parameter spectra,
or establish strong-resolvent convergence. Next investigate whether a
nontrivial fractional-linear Weyl transformation or a general operator
intertwiner can evade the scalar-time obstruction.

Sources:

- M. Suzuki, *A canonical system of differential equations arising from the
  Riemann zeta-function*, equations (1.1)–(1.2),
  https://arxiv.org/abs/1204.1827
- D.H.J. Polymath, *Effective approximation of heat flow evolution of the
  Riemann xi function*, heat equation and zero threshold,
  https://arxiv.org/abs/1904.12438
- B. Rodgers and T. Tao, *The de Bruijn-Newman constant is non-negative*,
  Theorem 1.1, https://arxiv.org/abs/1801.05914
- J. B. Conrey, *More than two fifths of the zeros of the Riemann zeta
  function are on the critical line*, Theorem 1, J. Reine Angew. Math. 399
  (1989), 1–26, https://doi.org/10.1515/crll.1989.399.1
- I. S. Rezvyakova, *Zeros of the derivatives of the Riemann xi-function*,
  Izv. Math. 69:3 (2005), 539–605,
  https://doi.org/10.1070/IM2005v069n03ABEH000538
- B5-01 and B5-05 in this repository for scaling and the normalized shift
  quotient.
