# B3-38 — Scalar spectral observations cannot create multiplicity fibers

Date: 2026-11-27. Status: exact rank obstruction for bounded observations
of a scalar multiplicity-one spectral model; does not rule out new
matrix-valued arithmetic data.

## Question

Can a positive finite matrix-valued spectral measure built only by taking
several bounded arithmetic observations of Suzuki's scalar global Weil
Hilbert space create rank `m_gamma>1` at a zero ordinate?

## Lemma

Let `T` be self-adjoint on a Hilbert space `H` and let `E_T` be its spectral
projection-valued measure. Suppose an eigenvalue `gamma` has eigenspace
dimension one. For a bounded map `V:C^r -> H`, the induced positive matrix
measure

    Sigma(B) = V^* E_T(B) V

satisfies

    rank Sigma({gamma}) <= 1.

Indeed, `E_T({gamma})` is a rank-one orthogonal projection, so
`Sigma({gamma})=V^* P_gamma V` has rank no greater than
`rank(P_gamma)=1`. This remains true for every finite number of observation
channels `r`; increasing the channel count changes the matrix size, not the
rank at a fixed scalar eigenvalue.

In Suzuki's scalar canonical-system representation under RH, the spectral
Hilbert space is `L^2(mu_xi)`. At a support point `gamma`, this space has one
coordinate, with norm weighted by `mu_xi({gamma})=m_gamma`; the scalar
multiplication eigenspace is one-dimensional. Therefore any matrix measure
obtained by bounded finite-channel observation of this representation has
rank at most one at `gamma`, even though its scalar weight may equal
`m_gamma`.

## Consequence for arithmetic multiplicity lifts

This rules out the following class: start from the scalar Suzuki spectral
representation, choose finitely many bounded feature/observation maps, and
form their matrix-valued Gram or spectral measure. Such a procedure cannot
turn the atom mass into geometric fiber rank. It explains the general
obstruction behind the rank-one limit in B3-16 without depending on the
specific normalized derivative-jet construction.

Any geometric multiplicity lift must add spectral degrees of freedom not
already present in scalar `L^2(mu_xi)`. For a self-adjoint dilation, those
degrees must come from a genuinely larger arithmetic-defined Hilbert space
or from unbounded/incomplete data not covered by the lemma. Simply taking
more bounded channels or rescaling the scalar atom cannot work. A direct sum
of `r` identical scalar models gives constant rank `r` at every atom; it
does not encode a nonconstant multiplicity function unless one inserts
zero-dependent projections, which is excluded by the arithmetic-input
requirement.

## Limits and falsification

- The lemma assumes a multiplicity-one underlying scalar eigenvalue and
  bounded observation maps. It does not rule out a new arithmetic
  matrix-valued Weil form whose own spectral Hilbert space has higher-rank
  fibers.
- It does not prove that any zeta zero is multiple, nor that multiplicity
  matching must use eigenspace dimension rather than spectral measure mass.
- It does not preclude infinite-dimensional or unbounded constructions; such
  constructions require separate domain, positivity, and self-adjointness
  arguments.
- The proof is one line of spectral-projection rank algebra; this is a
  scoped obstruction, not a novelty claim.

## Next precise design question

Can one define, from the prime-side local Weil distribution alone, a
positive matrix-valued measure or nested vector-valued form with genuinely
independent channels, such that its matrix spectral atom ranks are not
forced to one by scalar compression? Candidate constructions must specify
the arithmetic core and involution, prove positivity/closability, recover
the scalar Weil form as a compression, and show the channel rank arises
without using zero locations or multiplicities. If the only such channels
are direct scalar copies, reject them as constant-multiplicity padding.

## Relation to prior work

Scalar atom weights versus eigenspace dimensions are separated in B3-13,
B3-15, and B3-16. This lemma is the elementary spectral-theorem obstruction
for bounded finite-channel observations of that scalar model. General
matrix-valued canonical systems are established theory; no novel theorem in
that theory is claimed here.
