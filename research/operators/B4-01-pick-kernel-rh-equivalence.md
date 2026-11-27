# B4-01 — Nevanlinna-kernel formulation of Lagarias's RH criterion

Date: 2026-11-27. Status: exact classical equivalence, independently
re-derived; no novelty claim.

## Statement

Let

    L(s) = xi'(s)/xi(s),
    h(z) = i L(1/2 - i z),                 Im(z)>0,
    K(z,w) = [h(z)-conjugate(h(w))] / [pi (z-conjugate(w))].

Then RH is equivalent to the following condition:

1. `h` is holomorphic throughout the upper half-plane; and
2. `K` is a positive-semidefinite kernel there.

Equivalently, `h` is a Pick/Herglotz function. This is Lagarias's criterion
`Re(xi'/xi)(s)>0` for `Re(s)>1/2`, rewritten with the standard Nevanlinna
kernel. The exact positivity criterion is prior art: Lagarias, *On a
Positivity Property of the Riemann ξ-Function*, Acta Arith. 89 (1999),
217–234, Theorem 1.1, equations (1.5), (1.19), and the paragraph following
(1.19); Lagarias attributes the equivalent half-plane criterion to
Hinkkanen.

## Proof

The change of variables `s=1/2-i z` maps `C+` bijectively to
`Re(s)>1/2`, and

    Im(h(z)) = Re(L(s)).

Suppose RH. The even Hadamard product gives, locally uniformly on `C+`,

    h(z) = sum_(gamma>0) m_gamma
              [1/(gamma-z) + 1/(-gamma-z)].

Every summand has positive imaginary part for `Im(z)>0`, and the series
converges locally uniformly. Hence `h` is holomorphic and Pick (indeed
`Im(h)>0`). The Nevanlinna kernel of a Pick function,
`(h(z)-conjugate(h(w)))/(z-conjugate(w))`, is positive semidefinite. Thus
`K` is positive semidefinite. This is exactly the zero-measure kernel of
B3-09, up to the positive scalar `1/pi`.

Conversely, suppose `h` is holomorphic on `C+` and `K` is positive
semidefinite. Its diagonal satisfies

    K(z,z) = Im(h(z)) / (pi Im(z)) >= 0,

so `Im(h(z))>=0` throughout `C+`. Therefore
`Re(xi'/xi)(s)>=0` for every `Re(s)>1/2`. More directly, holomorphy alone
already excludes any xi zero with real part greater than `1/2`: a zero
`rho=beta+i gamma`, `beta>1/2`, maps to
`z=i(rho-1/2)=-gamma+i(beta-1/2) in C+`, where `h` has a pole with nonzero
residue. The functional equation pairs every zero with real part below
`1/2` with one above `1/2`. Thus all nontrivial zeros lie on the critical
line, proving RH. This pole check also shows why holomorphy is an essential
part of the kernel criterion; positivity on an arbitrarily chosen punctured
domain would not be the same statement.

## Relation to the shifted-xi limit and spectral measure

The B3-08 kernel is exactly `K`. Under RH, B3-09 expresses it as

    K(z,w) = (1/pi) sum_(gamma in Gamma)
                 m_gamma / ((gamma-z)(gamma-conjugate(w))).

Thus the first-order limit of the shifted model-space kernels is positive
precisely in the same RH regime as the classical Lagarias Pick criterion.
This provides an independent normalization/sign check on B3-08/B3-09, but
does not produce a new RH criterion or proof. The Herglotz measure is defined
from the zero divisor; the criterion is non-effective as a proof unless one
can establish holomorphy and kernel positivity without presupposing zero
locations.

## Falsification / verification boundaries

- If RH fails, choose a zero with `Re(rho)>1/2` (using the functional
  equation if necessary). Its image is a genuine interior pole of `h`,
  falsifying the holomorphy part.
- If RH holds, the paired canonical-product expansion makes every summand's
  imaginary part positive and gives the explicit positive kernel.
- The reverse implication via positive-real-part of `xi'/xi` is the classical
  theorem of Lagarias/Hinkkanen, not a novelty. The kernel reformulation is
  the standard Nevanlinna kernel identity.
- No finite numerical or rational test is asserted to prove global kernel
  positivity. No numerical, Lean, or RH computation was performed.

Primary source: J. C. Lagarias, [On a Positivity Property of the Riemann
ξ-Function](https://websites.umich.edu/~lagarias/doc/positivity.pdf), Acta
Arith. 89 (1999), 217–234.
