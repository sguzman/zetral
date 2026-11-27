# Campaign LXXXV — Hermite de Branges spaces and Weil compression

Date opened: 2026-11-27. Status: CLOSED WITHIN SCOPE (2026-11-27).

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

## Checkpoint B3-05: standard bounded-derivative route is excluded

Goncalves–Littmann, arXiv:1510.08383, Theorem 2, obtains higher-jet
reconstruction in `H(E^nu)` under `E'/E in H^infinity` and a uniform positive
phase-derivative lower bound at the nodes. Its proof also gives uniform
separation of the node set. Heath-Brown's 1993 paper recalls Selberg's
`c T log T` lower bound for distinct ordinates of odd-multiplicity
critical-line zeros. Hence the full distinct zeta node set `Gamma` is not
uniformly separated. So Theorem 2 cannot be applied with `T_B=Gamma` under
its standard hypotheses. This is a route-specific obstruction; it leaves
weighted/nonuniform sampling open and supplies no arithmetic compression.
Full derivation and source boundaries:
`research/operators/B3-05-separation-obstruction-to-zeta-hermite-sampling.md`.
Marzo–Nitzan–Olsen, arXiv:1103.0566, Theorem 1, supplies a nonuniform
doubling-phase framework for value sampling, but no higher-jet or Weil-form
bridge. The next investigation is to test whether a zeta-density phase can
satisfy its doubling/density hypotheses and whether any derivative-sampling
extension survives without uniform Euclidean separation.

## Design and falsification

1. Test a candidate zeta-density phase (with derivative comparable to
   `log(2+|t|)`) against the doubling-phase value-sampling theorem, including
   phase separation and density of the distinct zero nodes.
2. Search for primary theorems supporting weighted or nonuniform higher-jet
   sampling on `N(T) >= c T log T`; check whether they avoid uniform
   Euclidean separation without imposing an incompatible phase bound.
3. For any surviving candidate `E`, determine whether the zeta `xi` function
   (or distinct-zero product) can be a companion function; state all RH and
   multiplicity assumptions.
4. Determine whether the jet Hilbert space has a candidate local arithmetic
   form whose compact-test norm agrees with the required sampling norm.
5. Require and attempt the operator identity
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

## Checkpoint B3-06: doubling-phase value sampling is not yet a zeta bridge

`research/operators/B3-06-doubling-phase-density-gap.md` audits the exact
Marzo–Nitzan–Olsen density conditions. The natural comparison weight
`phi'(t)=1/2 log(2+|t|)` is doubling and matches the centered zero-counting
scale at density `1/pi`, but Riemann–von Mangoldt counts multiplicity while
the proposed nodes are distinct, and centered counts do not control the
uniform densities over translated intervals. Even assuming RH and simple
zeros, the density is at the theorem's critical threshold, not its strict
sufficient range. No failure of sampling is proved. This route audit led to
the separate shifted-xi canonical-system investigation in Campaign LXXXVI.
