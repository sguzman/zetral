# U72-02 even Perron radius weights

- **ID:** U72-02-EVEN-RADIUS-PERRON-W01
- **Status:** READY_FOR_REVIEW
- **Starting commit:** refreshed `origin/main`
- **Scope:** For the fixed U72 even 10^12 midpoint-Cholesky basis and standard allocation, rebuild the exact symmetrized interval-radius matrix. Use the Perron vector of the energy-normalized nonnegative radius matrix to choose positive Gershgorin scaling weights; rationalize and exact-replay the same comparison.
- **Acceptance:** Exact transformed interval/radius replay and comparison with inherited 9/47 standard proposal. No change to raw intervals or allocation; no U72-04 overlap.
- **Completed:** Rebuilt the transformed component interval matrix with integer arithmetic, symmetrized the exact interval intersections, formed its entrywise radius matrix, and computed an energy-normalized Perron vector numerically. Rounded the positive scaled vector to 40 decimal places and replayed the stored exact checker with those integer weights.
- **Checked vs unchecked:** Checked: the Perron weights reduce the maximum energy-normalized Gershgorin radius ratio from `1.0420522120074103e-4` for the inherited transform weights to `1.0280853713325795e-4`, matching the numerical spectral radius `1.028085371332253e-4` up to rounding. The exact replay uses the staged raw intervals, proposal and transformed interval data; it fails at the first principal minor (`-3361495045982263396854831625792835262605049567643846611136881`). It therefore yields no positive-minor or margin certificate. This is only a radius-scaling result for a fixed basis/allocation, not an independent original-form verification or a global obstruction.
- **Reproduction:** From the repository root, run `python experiments/worker-u72-02-even-radius-perron-w01/perron_radius.py` (Python 3 and NumPy 2.3.5 in the recorded run). Then run the exact replay with Node by loading `source-u72-exact-replay.js`, `raw-t832.json`, `proposal.json`, `transform.json`, and the generated `perron-radius-weights.json`, replacing `transform.radiusWeights` with the generated weights before calling `exact(raw, proposal, transform)`.
- **Pinned inputs (Git blob IDs):** raw intervals `b6000240e5f35913c5371fa2675faa6ab168bbe0`; transformed intervals `594a20645811a066d21cfbb347c7d54ffae05776`; allocation proposal `5fd45ea3d7e54b0c1ea088a9516ebc4f188f9b03`; exact replay source `ee6e6d8638f835a7866156bf8d26b960718978b5`.
- **Exact row-bound maxima:** inherited weights give `448293173774790360814049953392530593998727733298666556911679393108809756303889/4302022188611815812239789810068115515281951582951031476438680923044621993830776832`; Perron weights give `9109602801995187134539247392959925693818154694781621931/88607454750450707046976805045572597818418375207832925503488`. These are exact maxima of `(R s)_i/(s_i E_i)` for the reconstructed integer radius matrix R and upper-energy diagonal E. The Perron eigenvector itself is a floating-point proposal, not a certified eigenvector; the actual rational weights and interval replay are exact.
- **Evidence:** `experiments/results/u72-62-25-even-radius-perron-w01/perron-radius-weights.json`; reconstruction source `experiments/worker-u72-02-even-radius-perron-w01/perron_radius.py`; exact replay source in the worker directory.
- **Unchecked:** No attempt to alter the fixed allocation or basis; no claim that Perron scaling optimizes positive-minor feasibility.
- **Evidence paths:** `experiments/worker-u72-02-even-radius-perron-w01/`; `experiments/results/u72-62-25-even-radius-perron-w01/`.
- **Checked vs unchecked:** None yet. Perron eigenvectors are numerical proposals until rationalized weights are replayed; no global basis/allocations claim.
- **Blockers:** None.
- **Next:** Lead review; a follow-on would need to change the basis or allocation, outside this bounded experiment.

## Scaling lemma (exact statement)

Let `R` be a symmetric entrywise-nonnegative matrix and `E` a positive diagonal matrix. Set `A = E^{-1/2} R E^{-1/2}`. For every positive vector `s`, put `x = E^{1/2}s`; then

`max_i (R s)_i/(E_i s_i) = max_i (A x)_i/x_i`.

The Collatz–Wielandt formula gives `inf_{x>0} max_i (A x)_i/x_i = rho(A)`. Thus the Perron scaling solves the continuous minimum-maximum row ratio problem. If `A` is irreducible, a positive Perron vector attains the infimum; without irreducibility, strict-positive vectors need only approach it. This optimizes the maximum weighted row-radius/energy ratio, not positive definiteness of the penalized midpoint matrix. In particular, it gives no guarantee that any leading principal minor is positive. For this staged case, the exact rationalized scaling improves the bound, while the exact principal-minor replay fails immediately.
