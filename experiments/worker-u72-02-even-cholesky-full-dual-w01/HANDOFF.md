# U72-02 even full-coordinate Cholesky Cauchy search

- **ID:** U72-02-EVEN-CHOLESKY-FULL-DUAL-W01
- **Status:** IN_PROGRESS
- **Starting commit:** current `origin/main` (refresh before work)
- **Scope:** On the fixed 10^12 midpoint-Cholesky basis, exactly scan all 47 coordinate and signed two-coordinate directions for positive Cauchy costs, then run a bounded full-47-coordinate SLSQP direction search from selected feasible starts. Rationalize the best candidate and exact-test the Cauchy obstruction.
- **Acceptance:** Reproducible sparse-direction screen, documented finite multistart search, exact candidate cost signs and ratio. No global optimization or all-basis conclusion.
- **Completed:** Work claimed; no calculation yet.
- **Evidence paths:** `experiments/worker-u72-02-even-cholesky-full-dual-w01/`; `experiments/results/u72-62-25-even-cholesky-full-dual-w01/`.
- **Checked vs unchecked:** None yet. The original interval source, global direction optimization, other bases, and operator-level conclusions are outside scope.
- **Blockers:** None.
- **Next:** Pin the Cholesky basis artifacts, run the exact sparse screen and full-coordinate numerical search, then exact-check.
