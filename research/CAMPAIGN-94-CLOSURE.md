# Campaign XCIV closure — Fixed-low Schur transfer audit

Date: 2026-11-27. Closed within the bounded scope of determining what
follows from the available fixed-index and coarse zero-count estimates. The
Prime–Weil spectral-transfer problem itself remains open.

## Results

HP-02.1 proves the finite-dimensional Schur reduction and gives a Hermitian
2x2 countermodel showing that low-corner convergence and a bounded high
resolvent do not suffice without vanishing weighted coupling. HP-02.2–.4
derive an RH-conditioned, ordinate-basis fixed-low corner limit under the
source formulas and a random offset schedule. HP-02.5 identifies sufficient
weighted high-block and coupling targets. HP-02.6 bounds the scalar-shift row
conditionally by the inverse-metric weighted sum. HP-02.7 shows by an
abstract close-pair construction that coarse `T log T` counting and sine
separation alone cannot bound that sum. These are manual derivations; they
are not Lean verified and do not constitute a zeta counterexample.

The available source estimates are fixed-pair and do not establish the
uniform moving-block hypotheses. This resolves the audit question of whether
the cited estimates imply Schur transfer: they do not. No actual arithmetic
transfer estimate, operator limit, RH proof, or novelty claim is established.

## Follow-up

Pivot to Campaign XCV, auditing Hedenmalm's theta-based differential pencil
and the missing sesquilinear structure. This is a distinct candidate
construction, not an assumption that the operator correspondence is solved.

Full records: `research/CAMPAIGN-94.md` and
`research/operators/HP02-moving-block-schur-target.md`.
