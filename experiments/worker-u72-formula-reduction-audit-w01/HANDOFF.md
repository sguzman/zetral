# U72 special-function reduction audit

Worker: `U72-FORMULA-REDUCTION-AUDIT-W01`  
Status: READY_FOR_REVIEW  
Branch: `worker/u72-formula-reduction-audit-w01`

I rederived the digamma/trigamma formulas used for the even original-form probe directly from the defining series. The series yield the evaluator's `F`, `D`, and `da` expressions with their factors of 4 and 8; the zero-frequency limits also agree with its special branch. In the staged source, `2*x*f/rate` equals the corresponding positive `da` summand exactly.

The derivation and limitations are recorded in `FORMULA-AUDIT.md`. This is a scoped algebraic reduction audit, not a validation of every matrix term, the alpha constant, staged fixed-point arithmetic, the complete residual sum, or RH. No human or formal verification has been performed.
