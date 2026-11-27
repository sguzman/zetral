# Campaign LXXVIII closure — Global sampling multiplicity audit

Date: 2026-11-27. Disposition: completed within the candidate-audit scope;
the broader Hilbert–Pólya program remains open.

## Findings

- Under RH and Suzuki's global sampling construction, the diagonal operator
  is self-adjoint with compact resolvent and complete spectrum equal to the
  distinct signed ordinates. Its definition uses the zero set and RH.
- The source sampling map is unitary onto scalar `ℓ²(Γ,m)`, one coordinate
  per distinct ordinate. It does not encode analytic zero multiplicity as
  eigenspace dimension. A multiplicity mismatch would occur if any zero were
  multiple; none is asserted here.
- Merely replacing scalar coordinates by larger fibers while retaining only
  the old sample values cannot produce a surjective isometry.
- Ordinary derivative evaluation at any fixed ordinate is not bounded in
  the existing global Weil norm: its local Riesz norm is asymptotic to
  `M_a |Δ'(γ)|`, with `M_a→∞`. This uses the earlier K02 vector-kernel
  estimate and L02 evaluation-growth bound, both conditional on RH and the
  imported Suzuki characteristic limit.

The exact scope and derivations are in
`research/operators/B3-01-distinct-zero-model.md`. No multiplicity-sensitive
operator or zero-independent Hilbert–Pólya construction was found. A new
completion or unbounded sampling operator remains a distinct research
question, not a completed repair.

## Verification boundary

The primary source is Suzuki, arXiv:2610.32704v1, §§1–3. The global diagonal
domain and compact resolvent were checked directly from its sequence model.
The derivative obstruction was independently re-derived from the stored
vector-kernel asymptotic and Riesz representation. No Lean build, numerical
calculation, or RH conclusion was made. No novelty or exhaustive-priority
claim is made.

## Pivot

Continue the separate B1 analytic positivity campaign. The next investigation
is an exact signed Fourier-transform identity for the first-prime endpoint
remainder, followed by a conditional RH-scale bound. This will not establish
positivity, but will determine how much stronger the endpoint control becomes
under square-root Chebyshev error and what regularity it still requires.
