# B3-15 — Finite matrix dimension and zero multiplicities

Date: 2026-11-27. Status: rigorous necessary condition for a specified
finite-dimensional class; not a no-go for all Hilbert–Pólya constructions.

## Question

Can a canonical system with fixed finite matrix size realize the analytic
multiplicity of every zeta zero as the geometric multiplicity of a
self-adjoint eigenvalue, without assuming simplicity?

## Class and proof

Consider a definite canonical system of order `2n` on a half-line, with
locally integrable Hamiltonian and a separated self-adjoint boundary
condition at the regular left endpoint. Assume the realization is
self-adjoint and uses the usual `n`-dimensional Lagrangian boundary subspace
there. A solution of the eigenvalue equation is uniquely determined by its
initial vector in `C^(2n)`. The left boundary condition restricts that vector
to a subspace of dimension `n`; the square-integrability condition at
infinity can only reduce the set of admissible initial vectors. Uniqueness
of the initial-value problem makes evaluation at the left endpoint
injective on each eigenspace. Therefore

    dim ker(T - lambda) <= n

for every eigenvalue `lambda` of this realization.

If exact spectral correspondence is required to match the analytic
multiplicity `m_gamma` of each zero to this eigenspace dimension, it is
necessary that

    n >= sup_gamma m_gamma.

This condition is sufficient only for the dimension count; it says nothing
about constructing an arithmetic Hamiltonian, proving self-adjointness, or
identifying its spectrum. The scalar Suzuki system has `n=1`, so its
one-dimensional eigenspaces cannot match a multiple zero geometrically. Its
Weyl measure instead records `m_gamma` as the weight of the atom at `gamma`,
which is a different multiplicity convention.

## Falsification attempts and limits

- A scalar Weyl atom of mass two is not a two-dimensional eigenspace; hence
  `Q_xi = i xi'/xi` alone does not supply geometric multiplicity matching.
- The bound does not rule out finite matrix size if a uniform upper bound
  for all zeta-zero multiplicities is proved. No such bound is supplied by
  RH or by the cited density results for simple zeros.
- It does not rule out an infinite-dimensional fiber, a noncanonical
  operator, or a correspondence that matches analytic multiplicity by
  spectral weights rather than geometric multiplicity.
- It does not disprove simplicity. Gonek's survey records that simplicity
  of every zeta zero remains unknown; Xu's RH-conditional density result
  guarantees only a positive proportion of simple zeros.

## Prior art and scope

Matrix canonical systems and matrix Weyl/spectral functions are established
theory; see A. L. Sakhnovich, *Fundamental Solutions of Canonical Systems*,
Documenta Mathematica 26 (2021), 583–615, and arXiv:2104.07612. This note
does not claim a new theorem in that literature. It gives a necessary
dimension check for the proposed arithmetic lift. No arithmetic-defined
matrix-valued local Weil kernel has been found in the sources inspected so
far.

## Next experiments

1. Search for a prime-defined vector-valued local Weil form whose reproducing
   kernel has matrix rank sufficient to encode atom multiplicities.
2. Test whether derivatives of the scalar local kernel yield positive
   matrix kernels without inserting zero ordinates; reject any construction
   whose positivity or fiber dimension secretly uses the zero divisor.
3. Seek a quantitative finite-cutoff Weyl error under explicit
   lower/upper bounds on `gamma(a)`; the prior limit argument is qualitative.

Primary references: [Sakhnovich, arXiv:2104.07612](https://arxiv.org/abs/2104.07612);
[Gonek, *Simple zeros of the Riemann zeta-function*](https://sas.rochester.edu/mth/people/faculty/gonek-steve/assets/pdf/simplezeros.pdf);
[Xu, arXiv:2611.34546v1](https://arxiv.org/abs/2611.34546).
