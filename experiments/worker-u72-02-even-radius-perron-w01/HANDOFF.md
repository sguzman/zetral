# U72-02 even Perron radius weights

- **ID:** U72-02-EVEN-RADIUS-PERRON-W01
- **Status:** READY_FOR_REVIEW
- **Starting commit:** refreshed `origin/main`
- **Scope:** For the fixed U72 even 10^12 midpoint-Cholesky basis and standard allocation, rebuild the exact symmetrized interval-radius matrix. Use the Perron vector of the energy-normalized nonnegative radius matrix to choose positive Gershgorin scaling weights; rationalize and exact-replay the same comparison.
- **Acceptance:** Exact transformed interval/radius replay and comparison with inherited 9/47 standard proposal. No change to raw intervals or allocation; no U72-04 overlap.
- **Completed:** Rebuilt the transformed component interval matrix with integer arithmetic, symmetrized the exact interval intersections, formed its entrywise radius matrix, and computed an energy-normalized Perron vector numerically. Rounded the positive scaled vector to 40 decimal places and replayed the stored exact checker with those integer weights.
- **Checked vs unchecked:** Checked: the Perron weights reduce the maximum energy-normalized Gershgorin radius ratio from `1.0420522120074103e-4` for the inherited transform weights to `1.0280853713325795e-4`, matching the numerical spectral radius `1.028085371332253e-4` up to rounding. The exact replay uses the staged raw intervals, proposal and transformed interval data; it fails at the first principal minor (`-3361495045982263396854831625792835262605049567643846611136881`). It therefore yields no positive-minor or margin certificate. This is only a radius-scaling result for a fixed basis/allocation, not an independent original-form verification or a global obstruction.
- **Evidence:** `experiments/results/u72-62-25-even-radius-perron-w01/perron-radius-weights.json`; exact replay source in the worker directory.
- **Unchecked:** No attempt to alter the fixed allocation or basis; no claim that Perron scaling optimizes positive-minor feasibility.
- **Evidence paths:** `experiments/worker-u72-02-even-radius-perron-w01/`; `experiments/results/u72-62-25-even-radius-perron-w01/`.
- **Checked vs unchecked:** None yet. Perron eigenvectors are numerical proposals until rationalized weights are replayed; no global basis/allocations claim.
- **Blockers:** None.
- **Next:** Lead review; a follow-on would need to change the basis or allocation, outside this bounded experiment.
