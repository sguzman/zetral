# U72-03 odd sparse-basis dual sweep

- **ID:** U72-03-ODD-SPARSE-DUAL-W01
- **Status:** IN_PROGRESS
- **Starting commit:** `5e076c1` (current main)
- **Scope:** On the single fixed U72 odd sparse-row basis from worker head `3c2ed88d7bf7669ef7a6599727b8f67d5cc1bd22`, exactly evaluate the inherited conservative Cauchy lower-bound obstruction on all coordinate and signed two-coordinate directions (2,209 total). This complements the prior exact sparse-row replay; it does not search larger-support vectors or other transforms.
- **Acceptance:** Reproducible exact integer sweep and a clear bounded result. Do not claim an all-direction or all-basis obstruction if this finite family finds none.
- **Completed:** Work claimed; no sweep run yet.
- **Evidence paths:** `experiments/worker-u72-03-odd-sparse-dual-w01/`; `experiments/results/u72-62-25-odd-sparse-dual-w01/`.
- **Checked vs unchecked:** None yet. Full operator positivity, larger support, all allocations outside the Cauchy relaxation, and independent source reconstruction are outside scope.
- **Blockers:** None.
- **Next:** Pin raw/transform/allocation inputs from the cited branch; execute exact sweep and persist result.
