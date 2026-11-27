# Campaign XCIII closure — Arithmetic finite-matrix spectral transfer audit

Date: 2026-11-27. Disposition: closed within the audit of the currently
stated relative-tail estimates. The actual Prime–Weil pencil remains
unresolved; this is neither a counterexample to it nor an operator result.

## Findings

1. The paper's finite arithmetic matrices and Hermitian-definite quotient
   pencils are genuine finite-dimensional constructions. The exact finite
   zero-side reconstruction inputs the ordinates and is not independent.
2. The source's scale-free transfer target is the whitened relative norm in
   equation (4.51). Its fixed-index tail estimates do not furnish uniform
   constants in the growing basis, and generic unwhitened norm convergence
   cannot imply relative convergence when the metric degenerates. The
   two-dimensional countermodel in
   `research/operators/HP01-relative-tail-metric-audit.md` verifies this
   logical limitation only.
3. HP-01.2 proves that simultaneous sine resonance can be avoided at
   `O(1/N)` loss for any finite list of frequencies by choosing `L` from
   that list. This does not give an arithmetic-independent choice. The
   interpolation derivative's exact product formula degenerates in an
   abstract coalescing-frequency example, so zero count and a frequency
   lower bound alone cannot certify the metric. This says nothing about
   actual zeta gaps.
4. Under RH, the source's exact tail formula is a zero-side positive sum.
   It provides no estimate for its whitened prime-side form that bypasses
   the zero data. No such compressed prime-side estimate was proved here.

The missing input remains a joint, uniform estimate for compressed tail
forms relative to their small metric directions, with adequate control of
moving indices and a parameter rule not based on unknown ordinates. A
global relative norm is sufficient but may be stronger than needed for
fixed low ordinates.

## Disposition and pivot

The bounded question—what follows from the currently available uncompressed
and fixed-index estimates, and what metric information is missing—is
resolved. The estimates do not imply the relative target. The next campaign
tests a weaker, fixed-low-spectrum Schur-complement route and asks whether
its arithmetic-side hypotheses can be verified without a global whitened
norm estimate. It must still prove absence of spectral pollution in compact
sets and must not use a zero-dependent basis as part of the operator
construction.

Source checked: Shi, arXiv:2609.04908 v12, §§4.9 and 5.1–5.3, including
equations (4.51), (5.6), (5.30)–(5.32). Its rendered full text was available
through a mirror; direct arXiv HTML/PDF fetches returned 404 in this
session. No numerical experiment, Lean formalization, independent replay of
the paper's computations, novelty claim, or RH proof was made.
