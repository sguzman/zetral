# B3-04 — Derivative-sample obstruction is invariant under equivalent norms

Date: 2026-11-27. Status: proved abstractly and applied to the RH-conditional
Weil sampling model; no assertion about actual zero multiplicities.

## Question

Can an equivalent Hilbert norm on the existing global Weil completion make
ordinary derivative evaluation at a fixed zero ordinate continuous, while
preserving its sampling representation and local isometries?

## Equivalent-norm lemma

Let `D` be a vector space with norms `||.||_0` and `||.||_1` satisfying

    a ||x||_0 <= ||x||_1 <= b ||x||_0       (x in D),

for constants `0<a<=b<infinity`. For any linear functional `L:D->C`,

    b^(-1) ||L||_(D,0)* <= ||L||_(D,1)* <= a^(-1) ||L||_(D,0)*,

with infinite dual norm allowed. This follows directly by taking suprema of
`|Lx|/||x||_j` and applying the two norm inequalities. In particular, `L` is
bounded in one norm exactly when it is bounded in the other. The identity on
`D` extends to a bounded isomorphism between the completions, and identifies
their continuous duals.

## Application to the Weil derivative sample

Take `D=C_c^infinity(R)` modulo the null space of the Weil seminorm, under the
RH-conditional sampling construction. Fix a distinct ordinate `gamma` and set

    L'_gamma(f) = d/dz [ integral f(x) exp(i z x) dx ] at z=gamma.

B3-03 derives from the local kernel asymptotic and Riesz representation that
the norms of the restrictions to the nested local spaces satisfy

    ||L'_gamma|_(H_a)|| / M_a -> |Delta'(gamma)| > 0,
    M_a -> infinity.

The functional is consistent on the compact-test union: the displayed
Fourier derivative depends only on `f`, and any compactly supported `f`
belongs to every sufficiently large local test space. If it extended
continuously to the global completion, all restrictions to isometrically
embedded `H_a` would have norm bounded by its single global dual norm. The
divergence above contradicts this. Therefore `L'_gamma` is unbounded on the
global test space.

By the equivalent-norm lemma it remains unbounded under every globally
equivalent renorming. More generally, the obstruction remains if a proposed
new global norm and the original norm are uniformly equivalent on the common
compact-test union, even when described through local spaces. A norm change
whose equivalence constants deteriorate with `a` is not covered; it changes
the completion in a substantive way.

## Compression identity boundary

Suzuki's Theorem 3.3 uses an isometric embedding `j_a:H_a -> H_W` and proves
`(Dbar_(a,pi))^(-1)=j_a^* C j_a`, with `C` the global inverse. Thus retaining
the old local norms and their isometric embeddings keeps the same compact
test norm and cannot make `L'_gamma` bounded. A derivative-enriched completion
would need a new family `j~_a`, a bounded self-adjoint global inverse `C~`,
and a proved identity

    (Dbar~_(a,pi))^(-1) = j~_a^* C~ j~_a,

including the modified local form, domains, density, and compatibility on the
compact-test core. No such arithmetic identity follows from changing norms.

## Prior art: Hermite sampling exists in changed spaces

Goncalves, *Interpolation Formulas with Derivatives in de Branges Spaces*,
Theorem 1, proves a derivative interpolation formula in `H(E^2)` under
closedness under differentiation, a phase-spacing lower bound, and an
exclusion condition. Corollary 2 gives a two-sided sampling inequality for
values and first derivatives in a Paley-Wiener space and unique interpolation
for square-summable pairs. This shows that a changed ambient space can
support jet data. It does not identify the space with the Weil completion,
the nodes with the zeta ordinates with analytic multiplicity, or establish a
compression identity for a zeta-derived local form. It is a relevant
mathematical route, not a completed Hilbert-Pólya construction.

## Evidence and limits

- Abstract norm lemma: direct proof above.
- Application: deduction from B3-03 and the isometric local embeddings in
  Suzuki's Theorem 3.3; conditional on RH and the source model.
- Source audit: Suzuki, arXiv:2610.32704v1, Theorem 3.3; Goncalves,
  arXiv:1503.05178, Theorem 1 and Corollary 2.
- No Lean proof, numerical computation, human review, or zeta zero with
  multiplicity greater than one is claimed.
