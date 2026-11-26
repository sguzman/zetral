# U01-W01 worker handoff

- ID: U01-W01
- Status: IN_PROGRESS
- Starting commit: `8fb1647cd10dc948db15b65f13250d8f8d0ac4b2` (`origin/main`, active LXXIII)
- Scope: independently check U01's translation-based strict monotonicity of the spectral bottom and its finite-translate gap inequality, including extension from the smooth core to bottom eigenvectors and the Fourier independence of translates. Do not audit RH's global Weil criterion or active U73 comparisons.
- Scientific relevance: validates the strict domain comparison imported into U04's full-support deduction and gives a precise, if non-effective, gap lower bound.
- Acceptance: prove or refute the exact statements with clear assumptions, including the rank/trace step in the quantitative bound; distinguish imported source results from the independent deduction. No RH or novelty claim.
- Bounded stopping condition: settle the translation monotonicity and stated finite-translate inequality only.
- Evidence: `research/workers/U01-W01/AUDIT.md`.

## Completion update — 2026-11-26

- Status: READY_FOR_REVIEW
- Result: no gap found in U01's translation strictness or stated finite-translate gap inequality under its operator/form imports. Translation extends from the common smooth core as an isometry in a shifted form norm; equality of bottoms would place arbitrarily many distinct translates in a finite-dimensional bottom eigenspace, contradicting Fourier/Vandermonde independence. For the quantitative estimate, a unit vector in `ker(PV)` supplies the trace lower bound `lambda_min(G)`, producing the exact denominator `m+1`.
- Evidence: `research/workers/U01-W01/AUDIT.md`.
- Limits: no effective Gram or spectral-gap bound; global RH criterion and source/prior-art audit unchecked. No numerical/formal/human review or novelty claim.
- Next: scoped lead review.
