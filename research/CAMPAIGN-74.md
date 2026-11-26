# Campaign LXXIV — Guarded extension to h=5/2

Candidate frontier h=2.49 (LXXIII closed at ee8a583b368797a0a47ab2115206d2eb3360d465). Target h=5/2. Candidate rational endpoint 49/4, strictly below 13, to be checked with exact arithmetic. Both preceding fixed-energy margins are positive (even 164539/10^6, odd 236761/10^6); this motivates the next 0.01 step, not extrapolation of positivity.

- U74-01: regenerate rational endpoint witness, validate bound and exact endpoint slacks, identify first common positive low support. If infeasible, refine endpoint/witness using measured obstruction.
- U74-02: fresh even trial initially J128/KEM20/T1024/M20480 and lowCount selected by U74-01. Generate fresh residuals at new h; reuse rank-aware exact congruence machinery, not residual data. Require positive exact fixed-energy comparison.
- U74-03: corresponding odd trial, residuals and exact comparison.
- U74-04: separate independent aggregate, interval reconstruction and stored exact determinant audits, witness/guard replay and scoped analytic closure. Persist compact results and active state promptly.

No independent original-form evaluation, formal/human review, standalone CLI, CI, RH proof or originality claim. Lead owns campaign; worker scopes and README unchanged.
