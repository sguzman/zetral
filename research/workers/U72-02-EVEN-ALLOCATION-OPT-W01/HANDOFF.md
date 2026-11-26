# U72-02 even allocation: alternate optimizer

- **ID:** U72-02-EVEN-ALLOCATION-OPT-W01
- **Status:** READY_FOR_REVIEW
- **Starting main:** `5e076c163bf97f064a49272556145027bc72dbca`
- **Target inputs:** U72-02 even branch head `dae9753888f3a5bf0ec5374526d5637e9a849081`, fixed four-row transformed interval artifact and exact replay machinery.
- **Scope:** Try an independent continuous simplex optimizer for the allocation on the existing four-row even transform, then exact-replay a rationalized candidate. Do not alter campaign or prior worker artifacts; this does not cover alternative transforms or U72-04.
- **Question:** Does a direct numerical optimization of the fixed-transform allocation find any rational allocation that passes the exact fixed-energy replay, beyond the existing mirror-descent proposal and the remapped U71 allocation?
- **Acceptance criteria:** Document the objective used, solver/version, initialization and stopping conditions; exact-replay any promising rational shares using the pinned interval machinery; report pass/fail honestly. If no exact pass appears, preserve this as a bounded negative result, not a proof of all-allocation failure.
- **Completed:** Refreshed main and campaign coordination; read U72-02 and U72-03 handoffs. Confirmed the prior even approach uses a 350-step float mirror-descent-style proposal and exact replay; scipy 1.17.0 is available, cvxpy is absent.
- **Evidence:** `optimize_allocation.py`, `optimizer-output.txt`, `slsqp-allocation-candidate.json`, `replay_candidate.js`, and `slsqp-exact-replay.json` under this directory.
- **Commands:** `git fetch origin main`; inspect `experiments/lxx-full-energy-proposal.js` and `experiments/u72-exact-replay.js` from the U72-02 branch; `python3` package inventory.
- **Checked:** Existing fixed transform and two known allocation outcomes from the worker handoff; exact replay is the acceptance test.
- **Checked:** The continuous matrix model and exact interval replay outcome of the rationalized candidate. SLSQP returned success from all three starts (existing float proposal, equal allocation, and U71 seed); the selected seed-start solution has objective `-2.209641369111659e-11`, min share `1e-8`, 54 positive rational weights summing to `10^12`. Exact replay reports 7/47 positive leading minors and a negative eighth pivot; no fixed-energy margin is returned. Its share vector is within L1 distance `8.0672e-7` of the U71 seed allocation.
- **Not checked:** Global optimality or exhaustive allocations; independent construction of component intervals, transform or factors; alternate transforms; original-form evaluation; a positive fixed-energy candidate. SLSQP success is a local solver termination status, not a proof of optimality.
- **Blockers:** None.
- **Status:** READY_FOR_REVIEW.
- **Recommendation:** Retain this as a bounded negative allocation search. It found no exact pass and does not improve the positive-minor count over the U71 seed. Do not infer that all allocations fail.


## Reproduction and exact replay

- U72-02 source head: `dae9753888f3a5bf0ec5374526d5637e9a849081`.
- Input blobs: raw matrix `b6000240e5f35913c5371fa2675faa6ab168bbe0`; four-row transform `04733f192f099cbb505dc1a70b35933b9288d368`; existing float proposal `5fd45ea3d7e54b0c1ea088a9516ebc4f188f9b03`; U71 seed allocation `a43642b910cc7d90aa0379bb936e115afa168c20`.
- Exact replay source blob `experiments/u72-exact-replay.js`: `ee6e6d8638f835a7866156bf8d26b960718978b5`.
- Commands used: `python3 research/workers/U72-02-EVEN-ALLOCATION-OPT-W01/optimize_allocation.py /dev/shm/u72-02-raw.json /dev/shm/u72-02-transform.json /dev/shm/u72-02-allocation.json /dev/shm/u72-02-seed-allocation.json`; `node research/workers/U72-02-EVEN-ALLOCATION-OPT-W01/replay_candidate.js /dev/shm/u72-02-raw.json research/workers/U72-02-EVEN-ALLOCATION-OPT-W01/slsqp-allocation-candidate.json /dev/shm/u72-02-transform.json /dev/shm/u72-02-exact-replay.js`.
- Optimizer: scipy 1.17.0 SLSQP, analytic smallest-eigenvector gradient, 54 simplex variables, lower bound `1e-8`, max 800 iterations, `ftol=1e-12`; initial points were the stored float proposal, equal shares, and U71 seed. The energy upper matrix's Cholesky was reconstructed at 100 decimal digits with mpmath 1.3.0; minimum Cholesky diagonal `2.6450921682751366e-5`, maximum absolute inverse-factor entry after conversion to float `2.908815406434179e8`. A double-only attempt in the independent reconstruction produced a negative roundoff pivot at index 7 (`-2.6951e-8`); high-precision factorization succeeded. This documents sensitivity of the whitening diagnostic, not an invalidation of prior exact replays.
- Exact outcomes from stored baseline: existing optimizer proposal 0/47 positive minors; U71 seed 7/47; SLSQP candidate 7/47 with negative eighth pivot and no grid margin. Exact replay uses the pinned U72-02 routine and fixed stored interval data; it does not independently validate those inputs.
