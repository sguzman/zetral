# U72 archimedean coercivity bound

Worker: `U72-ARCHIMEDEAN-COERCIVITY-AUDIT-W01`  
Status: READY_FOR_REVIEW  
Branch: `worker/u72-archimedean-coercivity-audit-w01`

Retaining the first positive term of the digamma series and applying Schur's test to its finite-interval exponential kernel proves

`alpha compression - alpha_0 I >= 4 exp(-h/4) I`.

Thus the evaluator's nonconstant archimedean cosine block `K+diag(da)` is strictly positive, with lower bound `4 exp(-31/50)` at `h=62/25`. This is a component-level bound only; `alpha_0`, the prime and pole terms, and the residual/tail determine the full Weil form.

Proof and limitations are recorded in `COERCIVITY.md`. No human or formal review, full-form positivity, or RH claim.

- Follow-up 2026-11-26: extended the lower bound to the full nonnegative digamma increment series. Each `j>=1` compressed term contributes at least `exp(-(j+1/4)h)/(j+1/4)` by an exponential-kernel Schur estimate; retaining the exact `j=0` eigenvalue bound yields approximately 2.31998802335 at `h=62/25`. The symbolic series inequality is rigorous; decimals are illustrative, not interval-certified. Still only the `alpha-alpha_0` component. See the final section of `COERCIVITY.md`.
- Follow-up 2026-11-26: solved the exponential-kernel top-eigenvalue problem at every digamma index. The resulting rigorous lower bound is the convergent root series `sum_j omega_j^2/(u_j(4u_j^2+omega_j^2))`, where `omega_j tan(omega_j h/2)=2u_j`; the illustrative sum at `h=62/25` is about 2.43180604972. The root-series formula and an elementary cubic tail bound are in the final section of `COERCIVITY.md`. Still only the `alpha-alpha_0` component.
- Follow-up 2026-11-26: proved the large-`h` asymptotic of the exact root-series lower bound: `h^2 C(h) -> (pi^2/4)(28 zeta(3)+pi^3)`. The proof uses `omega_j h -> pi` and the summable majorant `pi^2/(4u_j^3)`. This describes the component bound only, not the full operator bottom.
- Follow-up 2026-11-26: added `rational_root_certificate.py`, a Python-standard-library exact-rational certificate. Taylor remainder signs for sine/cosine and `223/71 < pi` validate 100 downward rational root bounds; exact summation proves the root-series component bound exceeds `24317843723/10^10 = 2.4317843723` at `h=62/25`. Candidate roots use floating point only as proposals; all acceptance checks and the final threshold assertion are rational. Command and proof scope are recorded in `COERCIVITY.md`.
- Follow-up 2026-11-26: added interval-length monotonicity: implicit differentiation gives `omega_j'(h)<0`, hence each root-series term and `C(h)` decrease with `h`. The certified `h=62/25` bound therefore applies to all shorter positive intervals, for the same component only.
