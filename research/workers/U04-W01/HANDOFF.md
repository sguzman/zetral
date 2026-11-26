# U04-W01 worker handoff

- ID: U04-W01
- Status: IN_PROGRESS
- Starting commit: `8fb1647cd10dc948db15b65f13250d8f8d0ac4b2` (`origin/main`, active LXXIII)
- Scope: independently audit U04's finite-dimensional bottom-space rigidity deductions from U03: construction of `E=H P_{<m}` from division closure, uniqueness/parity of the generator, support/full-window claim, and the derivative/multiplicity criterion. Do not audit unrelated U03 resolvent blow-up bounds or lead-owned U73 comparison.
- Scientific relevance: tests the structural lemma underlying QER01/QER02 evaluation jets and the possible simplicity criterion for the local bottom.
- Acceptance: verify the polynomial-space argument, symmetry actions on the generator, Sobolev support/derivative claim, and both directions of the multiplicity criterion; state exact imported assumptions and unchecked pieces. No RH/novelty claim.
- Bounded stopping condition: settle these U04 implications only; preserve any negative finding and avoid a broader simplicity proof.
- Evidence: `research/workers/U04-W01/AUDIT.md`.

## Completion update — 2026-11-26

- Status: READY_FOR_REVIEW
- Result: no gap found in U04's finite-dimensional rigidity deductions under U03/U01 imports. The construction produces `E=H P_{<m}` from `m-1` selected nonreal zeros; involutions force the generator to be real up to phase and even or odd; polynomial Fourier multiples give the stated Sobolev regularity; strict window monotonicity forces full support span; and the derivative criterion is equivalent to `m>1`.
- Evidence and proof details: `research/workers/U04-W01/AUDIT.md`.
- Unchecked/imported claims and exact limitations: listed in AUDIT.md. This does not prove simplicity; it reduces it to exclusion of the derivative-in-bottom-space case.
- No RH, novelty, numerical, human-review or formal-verification claim.
- Next: scoped lead review.
