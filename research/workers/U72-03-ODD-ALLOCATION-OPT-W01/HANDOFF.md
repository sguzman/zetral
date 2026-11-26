# U72-03 odd allocation: alternate optimizer

- **ID:** U72-03-ODD-ALLOCATION-OPT-W01
- **Status:** READY_FOR_REVIEW
- **Starting main:** `5e076c163bf97f064a49272556145027bc72dbca`
- **Target inputs:** U72-03 odd branch head `5acb2522e5a66e91e0aa187749821d84822a5d0c`; fixed U71 two-row transformed intervals and exact replay machinery.
- **Scope:** Apply a separate high-precision-whitened SLSQP allocation method to the odd U71 transform and exact-replay a rationalized candidate. No changes to campaign or source artifacts, no alternative transforms, and no duplicate of U72-04.
- **Question:** Can continuous simplex optimization improve the stored allocations and attain a positive fixed-energy margin on this transform?
- **Acceptance criteria:** Record objective, solver/version, initialization and termination; exact-replay any rationalized candidate; do not infer all-allocation failure from a bounded search.
- **Completed:** Refetched main and reread AGENTS, STATE, COORDINATION, and Campaign LXXII. Reviewed U72-03 handoff and confirmed no existing odd allocation audit branch. Used 100-digit Cholesky construction, SLSQP from three initial points, denominator-10^12 rationalization, and exact replay.
- **Evidence:** `optimize_allocation.py`, `optimizer-output.txt`, `slsqp-allocation-candidate.json`, `replay_candidate.js`, and `slsqp-exact-replay.json`.
- **Commands:** Fetched the pinned raw, transform, allocation, seed-allocation and replay files from `worker/u72-03-odd-reconstruction`; ran the Python optimizer and Node exact replay with those paths.
- **Checked:** Exact replay of the rational candidate; SLSQP termination from three starts; positive rational weights summing to 10^12.
- **Not checked:** Global optimality or exhaustive allocations; independent regeneration of factors and interval matrices; the alternate GS transform; other odd transforms; original-form evaluation.
- **Blockers:** None.
- **Recommendation:** Bounded negative result for allocation optimization on this fixed U71 odd transform. SLSQP success is local numerical termination, not proof of optimality.

## Reproduction and result

- Input blobs: raw matrix `036bfe26a716cf3ac759b5cae9faed422e6db56d`; transformed intervals `1554fe127066ff484253af35cb6cabeb53a09cdc`; float allocation `6bc57a3923e412eedccd8a6e803c77763fa21ef0`; U71 seed allocation `6720e0effbd52c6cd6825c890e41f76e594977b7`.
- Exact replay source blob `experiments/u72-exact-replay.js`: `ee6e6d8638f835a7866156bf8d26b960718978b5`.
- Optimizer command: `python3 research/workers/U72-03-ODD-ALLOCATION-OPT-W01/optimize_allocation.py /dev/shm/u72-03-odd-raw.json /dev/shm/u72-03-odd-transform.json /dev/shm/u72-03-odd-allocation.json /dev/shm/u72-03-odd-seed-allocation.json`.
- Exact replay command: `node research/workers/U72-03-ODD-ALLOCATION-OPT-W01/replay_candidate.js /dev/shm/u72-03-odd-raw.json research/workers/U72-03-ODD-ALLOCATION-OPT-W01/slsqp-allocation-candidate.json /dev/shm/u72-03-odd-transform.json /dev/shm/u72-03-exact-replay.js`.
- Solver: scipy 1.17.0 SLSQP, analytic simple-eigenvalue gradient, 54 simplex variables, lower bound `1e-8`, maximum 800 iterations, `ftol=1e-12`; starts were stored proposal, equal shares, and U71 seed. mpmath 1.3.0 at 100 decimal digits built the Cholesky factor. Minimum Cholesky diagonal `3.2476948725130407e-4`; largest inverse-factor entry after float conversion `1.3370234615e9`.
- Objective values: proposal start `-1.0329006574592132e-8` (12 iterations); equal start `-4.9251736486198075e-8` (10); seed start `-6.260607925486931e-9` (10, selected). Candidate shares differ from U71 seed by L1 distance `7.84866e-7`.
- Exact results: stored float allocation 7/47 positive minors; U71 seed 4/47; SLSQP candidate 4/47, negative fifth pivot, no fixed-energy margin. This replays the stored interval data; it does not independently validate their upstream generation.
