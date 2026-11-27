# Campaign LXXXV — Hermite de Branges spaces and Weil compression

Date opened: 2026-11-27. Status: ACTIVE.

## Precise question

Can the derivative interpolation mechanism in a squared de Branges space
`H(E^2)` be instantiated at the zeta-zero ordinates so that its jet sampling
norm is compatible with a zeta-derived local Weil form and an exact inverse
compression identity?

## Evidence and hypotheses

Goncalves, arXiv:1503.05178, Theorem 1 and Corollary 2, establishes Hermite
sampling under explicit de Branges hypotheses, including differentiation
closure, phase spacing and a nonmembership condition. Suzuki,
arXiv:2610.32704v1, Theorem 3.3, instead gives the arithmetic identity
`(Dbar_(a,pi))^(-1)=j_a^* C j_a` for the existing Weil local spaces. B3-04
shows why an equivalent norm cannot add continuous derivative samples to the
existing global completion. These two source results do not yet share a
Hilbert space or embedding.

## Design and falsification

1. Determine whether a Hermite-Biehler function `E` can be specified from
   existing Zetral data with the zeta `xi` function (or its distinct-zero
   product) as a companion function whose real sampling nodes are the
   ordinates in question. State all RH dependence.
2. Check the exact hypotheses of Goncalves Theorem 1 at those nodes:
   differentiation closure of `H(E^2)`, phase derivative lower bound,
   companion-product nonmembership, and the resulting jet norm.
3. Determine whether the jet Hilbert space has a candidate local arithmetic
   form whose compact-test norm agrees with the required sampling norm.
4. Require and attempt the operator identity
   `(Dbar~_(a,pi))^(-1)=j~_a^* C~ j~_a`. Test density, domains, self-adjointness,
   compactness, and multiplicities. If no candidate `E` follows from the
   source hypotheses, preserve that obstruction and pivot.

## Backlog criteria

- **Hypothesis:** Squaring a suitable Hermite-Biehler function may provide
  continuous first-jet samples in a changed space, but arithmetic compression
  is an independent and likely harder requirement.
- **Prerequisites:** B3-04; Goncalves Theorem 1/Corollary 2; Suzuki Theorem
  3.3; exact normalization of `xi` and the distinct-zero product.
- **Information gain:** Either connect an established Hermite sampling
  theorem to a genuine arithmetic operator model, or isolate the missing
  structure at the level of an explicit failed hypothesis/identity.
- **Acceptance:** A fully specified `E`, Hilbert space, sampling theorem,
  local arithmetic forms, and proved inverse compression; or a precise
  source-based obstruction to this candidate. No existence claim based only
  on RH or on the canonical product.
- **Verification:** Independent theorem-hypothesis audit and operator-domain
  review. No expensive local computation. No claim of RH or zero multiplicity.
