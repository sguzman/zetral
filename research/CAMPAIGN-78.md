# Campaign LXXVIII — Multiplicity and independence in the global spectral model

Date opened: 2026-11-27. Status: CLOSED WITHIN SCOPE. This bounded investigation audits
the existing Hilbert–Pólya candidate; it does not close the original-form or
analytic positivity campaigns.

## Question

What exact spectral correspondence is supplied by the global sampling
operator under RH? In particular, does it preserve analytic zero
multiplicity, and does it give a zero-independent construction?

## Checkpoint B3-01

`research/operators/B3-01-distinct-zero-model.md` verifies directly that the
inverse of the diagonal compact operator on the distinct-ordinate sampling
space is self-adjoint with compact resolvent and complete spectrum equal to
the distinct signed ordinates. It also records two limitations: analytic
multiplicities are not eigenspace dimensions in this model, and the global
construction uses RH and the ordinates in its definition. The multiplicity
failure is conditional on existence of a multiple zero; none is asserted.

The exact source sampling map is unitary onto scalar `ℓ²(Γ,m)`. Replicating
each coordinate as a multiplicity-dimensional fiber while using only that
same scalar sample cannot be onto; its image in each fiber is at most a line.
This rules out weight changes and naive coordinate replication as a repair,
but not genuinely new derivative data.

**B3-03:** The stored K02 vector-kernel asymptotic and L02 growth bound imply
that derivative evaluation at each fixed ordinate has local Riesz norm
asymptotic to `M_a |Δ'(γ)|`, hence diverges. Since local embeddings are
isometric and the derivative on compact tests is window-independent, it has
no bounded extension to the existing global Weil completion. This rules out
ordinary derivative values as continuous coordinates in a multiplicity
fiber with the unchanged Weil norm. It does not rule out a new completion or
an unbounded sampling map with a stated domain. Details and dependencies are
in `research/operators/B3-01-distinct-zero-model.md`.

## Disposition

The ordinary first derivative coordinate is ruled out for the unchanged
Weil norm. A renormalized jet space would require a genuinely different
Hilbert norm and a new local-to-global theorem; no concrete candidate is
currently specified. Full research continuity is recorded in
`research/CAMPAIGN-78-CLOSURE.md`; the wider Hilbert–Pólya direction remains
open. Do not infer zero simplicity, RH, or novelty.

## Acceptance and integrity

Accept either a complete operator theorem with its exact domain and
multiplicity correspondence, or a precise obstruction to the stated
derivative-enriched repair. Record imported results and source versions.
Operator existence under RH alone does not count as an RH proof. No local
large build or external submission is in scope.
