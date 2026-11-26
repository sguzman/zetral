# U72 archimedean coercivity bound

Worker: `U72-ARCHIMEDEAN-COERCIVITY-AUDIT-W01`  
Status: READY_FOR_REVIEW  
Branch: `worker/u72-archimedean-coercivity-audit-w01`

Retaining the first positive term of the digamma series and applying Schur's test to its finite-interval exponential kernel proves

`alpha compression - alpha_0 I >= 4 exp(-h/4) I`.

Thus the evaluator's nonconstant archimedean cosine block `K+diag(da)` is strictly positive, with lower bound `4 exp(-31/50)` at `h=62/25`. This is a component-level bound only; `alpha_0`, the prime and pole terms, and the residual/tail determine the full Weil form.

Proof and limitations are recorded in `COERCIVITY.md`. No human or formal review, full-form positivity, or RH claim.
