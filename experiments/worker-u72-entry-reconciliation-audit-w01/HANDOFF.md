# U72 even entry reconciliation audit

Worker: `U72-ENTRY-RECONCILIATION-AUDIT-W01`  
Status: READY_FOR_REVIEW  
Branch: `worker/u72-entry-reconciliation-audit-w01`

I derived the even-sector off-diagonal quotient from the defining `F` series by partial fractions, checked the diagonal limit against `D`, and derived the shifted-cosine prime overlap for same-parity modes. The prime-power coefficient table, signs, normalization factors, pole rank-one term, and diagonal correction match the staged source and corrected interval evaluator. The suspected `q=4` weight difference was a misread: both implementations use `log(2)/2`.

Detailed derivation and limitations are in `ENTRY-AUDIT.md`. This does not independently derive the full Weil-form decomposition, the pole contribution's analytic origin, or the complete certificate. No human or formal verification has been performed.
