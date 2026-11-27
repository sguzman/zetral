# Campaign LXXXVII — Pick-kernel positivity and finite RH witnesses

Date opened: 2026-11-27. Status: CLOSED WITHIN SCOPE (2026-11-27).

## Precise question

The first-order shifted-xi kernel is the Nevanlinna kernel of
`h(z)=i xi'(1/2-i z)/xi(1/2-i z)`. Lagarias's classical criterion says
RH is equivalent to `h` being Pick. Can this kernel viewpoint provide an
effective analytic criterion or a rigorous finite witness for RH failure,
and what global information would be required for any finite positivity
certificate to imply RH?

## Existing evidence and prior art

Lagarias, *On a Positivity Property of the Riemann ξ-Function*, Acta Arith.
89 (1999), 217–234, Theorem 1.1 and equations (1.5), (1.19), proves the
equivalence between RH and positivity of `Re(xi'/xi)` on `Re(s)>1/2`, and
identifies the transformed function as Pick. Hinkkanen is cited there for
the half-plane criterion. Nevanlinna's kernel theorem identifies Pick
functions with positive semidefinite kernels. B3-08/09 derive the same kernel
as the first-order limit of shifted de Branges model spaces and its Herglotz
measure under RH. No novelty claim is assumed.

## Design and falsification

1. Audit the exact equivalence and all domain/pole conditions; compare the
   kernel criterion to Lagarias rather than presenting it as new.
2. Assume a hypothetical zero off the critical line and derive an explicit
   negative diagonal-kernel witness near its mapped pole. Quantify the
   witness using the residue and a bound for the regular part on an isolating
   disk.
3. Determine what a rigorous interval evaluation at rational points could
   certify and whether any finite sample can prove global positivity without
   a separate analytic tail/domain bound.
4. Try to falsify the local witness by checking pole signs, mapping
   conventions, multiplicities, and interaction with the regular part.
5. Seek primary literature for any stronger quantitative Pick/Loewner
   formulations; preserve standard results and negative computational
   conclusions.

## Persistent backlog entry

- **Hypothesis:** Every off-line zero creates an open region where the
  meromorphic continuation of the Lagarias Pick function has negative
  imaginary part, hence a finite diagonal-kernel witness. A finite positive
  sample, by itself, cannot certify the entire upper half-plane.
- **Prerequisites:** B4-01; Lagarias 1999 Theorem 1.1; standard Nevanlinna
  kernel criterion; local Laurent expansion of `xi'/xi`.
- **Information gain:** A rigorous witness formula would clarify how a
  counterexample could be detected; a global finite certificate would give a
  new RH proof route, while a precise coverage obstruction would prevent
  overinterpreting finite Loewner matrices.
- **Dependencies:** Any numerical/interval test must specify evaluation
  precision, rigorous error bounds, and the region it covers. Global RH
  implication requires control outside sampled points.
- **Acceptance:** Prove a quantitative off-line-zero witness and audit
  finitary limitations, or construct a fully rigorous global positivity
  certificate with explicit coverage bounds. No finite numerical evidence
  alone passes.
- **Verification:** Independent sign/residue derivation, exact prior-art
  check, and rational interval arithmetic only if it adds information. Use
  Nix and hosted CI for any expensive computation.

## Checkpoint B4-01

The B3-08 limit kernel is exactly the Nevanlinna kernel of the transformed
logarithmic derivative. Holomorphy plus kernel positivity is RH-equivalent,
but this is Lagarias/Hinkkanen prior art. The proof and limitations are
recorded in `research/operators/B4-01-pick-kernel-rh-equivalence.md`.
Next derive an explicit negative diagonal witness from a hypothetical
off-line zero, with no numerical zero input.

## Checkpoints B4-02 and B4-03

B4-02 derives the negative diagonal witness conditional on a hypothetical
off-line zero and proves the generic finite-sample obstruction. B4-03 makes
that obstruction quantitative: for any fixed finite set of distinct sample
points, an explicit operator-norm threshold on a pole perturbation preserves
strict positivity of the sample Pick matrix while introducing an
unsampled interior pole. This is not xi-specific. The bounded investigation
is closed; a xi-specific global certificate would require additional analytic
coverage bounds. See `research/CAMPAIGN-87-CLOSURE.md`.

The quantitative refinement and closure are recorded in
`research/operators/B4-02-offline-pole-witness-and-finite-test-obstruction.md`
and `research/CAMPAIGN-87-CLOSURE.md`. The generic finite-sample result does
not exclude an xi-specific theorem using global arithmetic bounds.
