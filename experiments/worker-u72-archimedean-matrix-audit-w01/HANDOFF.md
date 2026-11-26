# U72 archimedean matrix audit

Worker: `U72-ARCHIMEDEAN-MATRIX-AUDIT-W01`  
Status: READY_FOR_REVIEW  
Branch: `worker/u72-archimedean-matrix-audit-w01`

Derived the finite-interval cosine matrix of the digamma archimedean multiplier from its convergent series and the exponential-kernel resolvent. In the even sector, the exact matrix is `K + delta*(alpha_0+da)`, with `F_n=sum(1-exp(-h r_j))/(r_j^2+omega_n^2)`, the matching diagonal `D_n`, and `da_n=Re psi(1/4+i omega_n/2)-psi(1/4)`. This reproduces the independent evaluator's exponential correction and off-diagonal/diagonal branches, including normalization.

Full derivation and scope limits are in `ARCHIMEDEAN-AUDIT.md`. This is a scoped derivation of the archimedean block, not the full arithmetic matrix or candidate certificate. No human/formal review, positivity result, or RH claim.
