# U72-02 even Perron radius weights

- **ID:** U72-02-EVEN-RADIUS-PERRON-W01
- **Status:** IN_PROGRESS
- **Starting commit:** refreshed `origin/main`
- **Scope:** For the fixed U72 even 10^12 midpoint-Cholesky basis and standard allocation, rebuild the exact symmetrized interval-radius matrix. Use the Perron vector of the energy-normalized nonnegative radius matrix to choose positive Gershgorin scaling weights; rationalize and exact-replay the same comparison.
- **Acceptance:** Exact transformed interval/radius replay and comparison with inherited 9/47 standard proposal. No change to raw intervals or allocation; no U72-04 overlap.
- **Completed:** Work claimed; no Perron weights generated yet.
- **Evidence paths:** `experiments/worker-u72-02-even-radius-perron-w01/`; `experiments/results/u72-62-25-even-radius-perron-w01/`.
- **Checked vs unchecked:** None yet. Perron eigenvectors are numerical proposals until rationalized weights are replayed; no global basis/allocations claim.
- **Blockers:** None.
- **Next:** Pin Cholesky raw, transform, and proposal; reconstruct the exact radius matrix, compute Perron weights, replay.
