# Campaign LXXIV — Guarded extension to h=5/2

Candidate frontier h=2.49 (LXXIII closed at ee8a583b368797a0a47ab2115206d2eb3360d465). Target h=5/2. Candidate rational endpoint 49/4, strictly below 13, to be checked with exact arithmetic. Both preceding fixed-energy margins are positive (even 164539/10^6, odd 236761/10^6); this motivates the next 0.01 step, not extrapolation of positivity.

- U74-01: regenerate rational endpoint witness, validate bound and exact endpoint slacks, identify first common positive low support. If infeasible, refine endpoint/witness using measured obstruction.
- U74-02: fresh even trial initially J128/KEM20/T1024/M20480 and lowCount selected by U74-01. Generate fresh residuals at new h; reuse rank-aware exact congruence machinery, not residual data. Require positive exact fixed-energy comparison.
- U74-03: corresponding odd trial, residuals and exact comparison.
- U74-04: separate independent aggregate, interval reconstruction and stored exact determinant audits, witness/guard replay and scoped analytic closure. Persist compact results and active state promptly.

No independent original-form evaluation, formal/human review, standalone CLI, CI, RH proof or originality claim. Lead owns campaign; worker scopes and README unchanged.


- LXXIV U74-01 COMPLETE: [witness/guard source](https://github.com/sguzman/zetral/blob/74dc2a9e1dcefc998e9dd5f3094bec47a5de38eb/experiments/u74-witness-guard.js), guard result 3419fe55d4d4d5c022adab4728b92a4e5b969832. Rational endpoint 49/4, bound 2995/1000, step 16, 40780 cells, 787122 serialized characters across three byte-verified parts af8bedaf7bb78ae0c7f1b42cf09a22e07304069d, 0f01f132931e0762648aa5da878f22e69b1455d9, 1fdea0f39026cc07407d0a23db1bd77b32e6b2d4. Positive endpoint slacks, log(49/4)-2.50 >0.00552593699; first common positive tested low support 50. Next U74-02: fresh even trial h=5/2, J128/KEM20/T1024/M20480/lowCount50, then new finite residuals. Candidate frontier stays 2.49. No independent original-form verification, CI, standalone CLI, formal/human review, RH or originality claim.
