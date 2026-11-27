# B3-10 — Transporting the arithmetic compression to the limit-kernel RKHS

Date: 2026-11-27. Status: exact unitary transport under RH; no new
zero-independent operator.

## Question

Does the B3-09 Cauchy-transform RKHS connect to the existing global Weil
completion, and does Suzuki's local inverse-compression identity survive
there with its domains intact?

## Exact unitary map

Assume RH and retain the signed distinct ordinate set `Gamma` and weights
`m_gamma` from B3-01. The measure in B3-09 is

    mu = sum_(gamma in Gamma) m_gamma delta_gamma,

so `L^2(mu)` is exactly the weighted coordinate space `ell^2(Gamma,m)`.
Let `S:H_W -> ell^2(Gamma,m)` be Suzuki's unitary sampling map
`S[u]=(hat u(gamma))`, equation (2.8) of arXiv:2610.32704v1. Let
`C_mu:L^2(mu)->H_0` be the unitary Cauchy-transform map to the B3-09 limit
RKHS, with feature normalization `1/sqrt(pi)`. Then

    U := C_mu S : H_W -> H_0

is unitary. On compactly supported smooth tests it is explicitly

    (U[u])(z) = (1/sqrt(pi))
                 sum_(gamma in Gamma) m_gamma hat(u)(gamma)/(gamma-z),
    ||U[u]||_(H_0)^2 = sum_(gamma in Gamma) m_gamma |hat(u)(gamma)|^2
                     = Q_W(u).

The series converges locally normally for such tests. Completion extends this
map to all of `H_W`.

## Operator and compression identity

Let `D_W` be Suzuki's global self-adjoint operator, represented under `S` as
real-coordinate multiplication `(D_W c)_gamma=gamma c_gamma`, with domain
`sum m_gamma gamma^2 |c_gamma|^2<infinity`. Transport it to

    D_0 := U D_W U^(-1) on H_0,
    Dom(D_0)=U Dom(D_W).

It is self-adjoint, has spectrum the distinct signed ordinates and simple
eigenspaces, and `D_0^(-1)` is compact. For each local Weil space
`H(A_a)` and its isometric embedding `j_a:H(A_a)->H_W`, put
`j_a^0=U j_a`. Then `j_a^0` is an isometry and Suzuki's Theorem 3.3 becomes
the exact identity

    (Dbar_(a,pi))^(-1) = (j_a^0)^* D_0^(-1) j_a^0.

This is a literal unitary conjugation: adjoints, domains of the global
operator, local domains, compactness and the inverse-compression equality are
preserved. It gives an explicit arithmetic embedding into the B3-09 RKHS,
conditional on RH and on Suzuki's established sampling/compression theorems.

## Interpretation and limitation

The compression bridge exists because the limiting kernel space is another
representation of the existing global Weil completion. It is not a new
construction independent of zeta zeros, nor does it show strong-resolvent
convergence of the positive-shift canonical-system operators as
`omega->0+`. The transported operator still has one eigendirection per
distinct ordinate. If a zeta zero is multiple, its multiplicity is an atom
weight in `mu`, not a higher-dimensional eigenspace; no simplicity assumption
is justified. Thus the exact arithmetic identity does not repair the
multiplicity issue or prove RH.

## Falsification / independent checks

- The measure space `L^2(mu)` and Suzuki's `ell^2(Gamma,m)` have identical
  coordinate norm, including signed ordinates and analytic weights.
- For compact tests, substituting `S[u]` into the Cauchy transform gives the
  displayed series; its squared norm equals the spectral representation of
  the Weil form, checking the `sqrt(pi)` factor and weights.
- Conjugating a self-adjoint operator by a unitary preserves its domain,
  adjoint, spectrum and resolvent. Applying this to Theorem 3.3 proves the
  displayed compression identity without changing local domains.
- No independent source-form derivation, strong-resolvent limit, zero
  simplicity, novelty, numerical calculation, or RH proof is claimed.

Primary source: Suzuki, *Spectral convergence associated with Weil's quadratic
form*, arXiv:2610.32704v1, equations (2.3), (2.8), (2.9) and Theorem 3.3.
