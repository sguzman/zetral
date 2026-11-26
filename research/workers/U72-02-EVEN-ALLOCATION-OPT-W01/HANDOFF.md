# U72-02 even allocation: alternate optimizer

- **ID:** U72-02-EVEN-ALLOCATION-OPT-W01
- **Status:** IN_PROGRESS
- **Starting main:** `5e076c163bf97f064a49272556145027bc72dbca`
- **Target inputs:** U72-02 even branch head `dae9753888f3a5bf0ec5374526d5637e9a849081`, fixed four-row transformed interval artifact and exact replay machinery.
- **Scope:** Try an independent continuous simplex optimizer for the allocation on the existing four-row even transform, then exact-replay a rationalized candidate. Do not alter campaign or prior worker artifacts; this does not cover alternative transforms or U72-04.
- **Question:** Does a direct numerical optimization of the fixed-transform allocation find any rational allocation that passes the exact fixed-energy replay, beyond the existing mirror-descent proposal and the remapped U71 allocation?
- **Acceptance criteria:** Document the objective used, solver/version, initialization and stopping conditions; exact-replay any promising rational shares using the pinned interval machinery; report pass/fail honestly. If no exact pass appears, preserve this as a bounded negative result, not a proof of all-allocation failure.
- **Completed:** Refreshed main and campaign coordination; read U72-02 and U72-03 handoffs. Confirmed the prior even approach uses a 350-step float mirror-descent-style proposal and exact replay; scipy 1.17.0 is available, cvxpy is absent.
- **Evidence:** This handoff; planned optimizer code, parameters, raw proposal and replay result under this directory.
- **Commands:** `git fetch origin main`; inspect `experiments/lxx-full-energy-proposal.js` and `experiments/u72-exact-replay.js` from the U72-02 branch; `python3` package inventory.
- **Checked:** Existing fixed transform and two known allocation outcomes from the worker handoff; exact replay is the acceptance test.
- **Unchecked:** Independent objective reconstruction, optimizer convergence, exact outcome of any candidate.
- **Blockers:** None currently.
- **Next:** Formulate and solve a continuous allocation problem independently; rationalize and exact-replay a bounded set of candidates.
