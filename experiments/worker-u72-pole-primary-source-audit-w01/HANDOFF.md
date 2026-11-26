# U72 primary-source pole audit

Worker: `U72-POLE-PRIMARY-SOURCE-AUDIT-W01`  
Status: READY_FOR_REVIEW  
Branch: `worker/u72-pole-primary-source-audit-w01`

I checked Suzuki arXiv:2606.09096v4 directly, equations (1.1) and the following convolution definitions. Factoring the two exponential terms in `W(v*tilde(v))` gives the rank-two form `2|int cosh(v)|^2-2|int sinh(v)|^2`. For the translated `[0,h]` cosine basis, the even modes' alternating centered-integral signs cancel their basis phase, yielding the positive coefficient vector used in the staged source and independent evaluator.

The detailed derivation and its domain limitation are in `PRIMARY-SOURCE.md`. This verifies only the exponential/pole subform and its modal matrix contribution, not the full Weil form on the cosine span, the full matrix certificate, positivity, or RH. No human or formal verification has been performed.
