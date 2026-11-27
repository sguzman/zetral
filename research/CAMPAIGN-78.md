# Campaign LXXVIII — Multiplicity and independence in the global spectral model

Date opened: 2026-11-27. Status: ACTIVE. This bounded investigation audits
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

## Next milestone

Test whether derivative/Hermite data at repeated ordinates are continuous in
the Weil completion norm and compatible with local Riesz evaluation. State
the conditions for a revised unitary sampling map and prove or refute its
compatibility with local inverse compression. Do not infer zero simplicity,
RH, or novelty.

## Acceptance and integrity

Accept either a complete operator theorem with its exact domain and
multiplicity correspondence, or a precise obstruction to the stated
derivative-enriched repair. Record imported results and source versions.
Operator existence under RH alone does not count as an RH proof. No local
large build or external submission is in scope.
