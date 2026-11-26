# U72 pole rank-one audit

Worker: `U72-POLE-RANK-ONE-AUDIT-W01`  
Status: READY_FOR_REVIEW  
Branch: `worker/u72-pole-rank-one-audit-w01`

Derived the even-sector pole matrix from the explicit-form pole term in the project’s DCR02 note. Centering the normalized `[0,h]` cosine basis introduces a factor `(-1)^(n/2)` for even modes, which cancels the same sign in the centered cosh integral. The resulting vector is exactly `N_n sinh(h/4)/(omega_n^2+1/4)/sqrt(h)`, so the pole form contributes `2 pole(n) pole(k)/h`, with positive sign as used in both source and interval evaluator.

Derivation and scope limits are in `POLE-AUDIT.md`. The primary-source formula is cited through DCR02 and was not re-fetched in this step. This does not establish positivity of the whole form or audit the complete certificate. No human or formal verification has been performed.
