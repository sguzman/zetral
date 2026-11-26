# U72 T=1024 trial refinement

- **ID:** U72-T1024-TRIAL-REFINEMENT-W01
- **Status:** READY_FOR_REVIEW
- **Starting main:** `5e076c163bf97f064a49272556145027bc72dbca`
- **Scope:** Test T=1024 instead of T=832 for U72 even and odd at h=62/25, J=128, KEM=20, M=16384, lowCount=47, using the same endpoint-12 witness and inherited U71 transform matrices. This is a new candidate trial, not the lead-owned U72-04 stored audit.
- **Question:** Does increasing the trial cutoff improve either parity to a positive fixed-energy grid margin after exact generation and replay?
- **Completed:** Regenerated both T=1024 trials, all disjoint exact residual chunks, raw interval matrices, factors, transformed interval data and exact replays. Also used high-precision Cholesky plus SLSQP to search rational allocations for each fixed transform, then exact-replayed them.
- **Evidence:** `experiments/worker-u72-t1024-trial-refinement-w01/` contains runner/source adapters; `experiments/results/u72-t1024-trial-refinement-w01/` contains trials, all chunks, raw matrices, factors, transforms, seed and SLSQP allocations, exact replays, a replay log, and a hash/coverage manifest.
- **Commands:**
  - `node experiments/worker-u72-t1024-trial-refinement-w01/generate_t1024.js`
  - `node experiments/worker-u72-t1024-trial-refinement-w01/replay_t1024.js`
  - `python3 experiments/worker-u72-t1024-trial-refinement-w01/source/optimize_even_slsqp.py experiments/results/u72-t1024-trial-refinement-w01/even-raw.json experiments/results/u72-t1024-trial-refinement-w01/even-transform.json experiments/results/u72-t1024-trial-refinement-w01/even-t832-init.json experiments/results/u72-t1024-trial-refinement-w01/even-t832-seed-allocation.json experiments/results/u72-t1024-trial-refinement-w01/even-slsqp-allocation.json`
  - `python3 experiments/worker-u72-t1024-trial-refinement-w01/source/optimize_odd_slsqp.py experiments/results/u72-t1024-trial-refinement-w01/odd-raw.json experiments/results/u72-t1024-trial-refinement-w01/odd-transform.json experiments/results/u72-t1024-trial-refinement-w01/odd-t832-init.json experiments/results/u72-t1024-trial-refinement-w01/odd-t832-seed-allocation.json experiments/results/u72-t1024-trial-refinement-w01/odd-slsqp-allocation.json`
  - `node experiments/worker-u72-t1024-trial-refinement-w01/replay_slsqp.js`
  - `python3 experiments/worker-u72-t1024-trial-refinement-w01/make_manifest.py`
- **Result:** Both full residual ranges assembled successfully: 8,146 even modes (94–16384) and 8,145 odd modes (95–16383), in 16 chunks each. T=1024 uses 466 even and 465 odd trial directions. Under the inherited U71 transform, the U71 seed allocation gives 3/47 positive minors even and 4/47 odd. The high-precision SLSQP rational candidates reproduce those same counts. No positive fixed-energy margin was obtained. The standard double-precision proposal routine aborts on a whitening pivot for both T=1024 transforms, so it supplied no float allocation; a 100-digit Cholesky calculation on normalized interval midpoints returned positive pivots, but this is numerical conditioning evidence, not a formal positive-definiteness certificate. SLSQP termination is local and is not an all-allocation obstruction.
- **Comparison to T=832:** The pinned U72-02 even U71-seed replay gave 7/47; U72-03 odd seed gave 4/47. This one T=1024 transform/refinement therefore worsens the even count and leaves the odd count unchanged. No global cutoff conclusion follows.
- **Checked:** Exact chunk parity/contiguity/count via assembler and `make_manifest.py`; exact raw assembly; regenerated factors and transformed components/tails; exact replay of seed and rationalized SLSQP allocations. Trial/regime metadata preserved.
- **Not checked:** Alternative transform matrices (including the GS transforms), other cutoffs/trial spaces, exhaustive allocation optimality, independent reconstruction of the original analytic form, or U72-04 acceptance. The exact intervals use the repository's existing arithmetic generator.
- **Blockers:** None.
- **Recommendation:** Do not adopt T=1024 with these inherited transforms and allocations. A different trial or basis would be needed; the result does not establish failure for all choices.

## Pinned source inputs

- U72-02 source branch head `dae9753888f3a5bf0ec5374526d5637e9a849081`; original script blobs: staged `53ec575457964f00183a10db2a75e395d2bc6ff9`, assembler `54a0c8477bc0d4b3bb62b84c3fc35752dbdb1666`, even transform `ea1654716bc80dc533a1a2d98f511f84f7768dec`, exact replay `ee6e6d8638f835a7866156bf8d26b960718978b5`.
- U72-03 source branch head `5acb2522e5a66e91e0aa187749821d84822a5d0c`; odd transform blob `0b4cb1a240273f17502775a12293dd5b92987631`.
- Main arithmetic input `experiments/tc01-post-log11-em.js` blob `2f9035722076c6c8e96bf01b00901191c3466c52`; factor generators `lb03-dyadic-tail-factors.js` blob `3915ffa95edad0757aa13b81251c52dd6fb14df6` and `pc03-constant-oscillatory-factors.js` blob `99309a19931866207fa1d3ed8486450cef92b601`.
- The `source/*-1024.js` adapters are the pinned worker scripts with T changed from 832 to 1024 in the regime checks and parameters; `lxx-full-energy-proposal.js` is copied unchanged. The `basis-even.json` and `basis-odd.json` files preserve the U71 integer transforms from the T=832 artifacts.

## Exact optimizer and replay details

- SLSQP/scipy 1.17.0, 54 positive simplex shares, lower bound `1e-8`, max 800 iterations, `ftol=1e-12`, analytic simple-eigenvalue gradient; starts were the T=832 float proposal, equal shares, and U71 seed. Whitening Cholesky was formed at 100 decimal digits with mpmath 1.3.0, then converted to double for SLSQP. Even minimum Cholesky diagonal `9.173448468026068e-5`; odd `2.951224447226888e-4`.
- Best-start objectives: even `-5.072057025230904e-10` (seed start, 7 iterations); odd `-2.2161582554151257e-9` (seed start, 18 iterations). The exact allocations are preserved in `even-slsqp-allocation.json` and `odd-slsqp-allocation.json`.
- Exact replay results: even 3/47, failing at the fourth pivot, no margin; odd 4/47, failing at the fifth pivot, no margin. Full exact outputs are `even-slsqp-replay.json`, `odd-slsqp-replay.json`, and corresponding `seed-replay.json` files.
