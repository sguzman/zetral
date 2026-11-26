# U72-03 odd allocation: alternate optimizer

- **ID:** U72-03-ODD-ALLOCATION-OPT-W01
- **Status:** IN_PROGRESS
- **Starting main:** `5e076c163bf97f064a49272556145027bc72dbca`
- **Target inputs:** U72-03 odd branch head `5acb2522e5a66e91e0aa187749821d84822a5d0c`, fixed U71 two-row transformed intervals, and exact replay machinery.
- **Scope:** Apply the independent high-precision-whitened SLSQP allocation method from the even follow-up to the odd U71 transform, then exact-replay a rationalized candidate. Do not alter campaign/source artifacts, search alternative transforms, or duplicate U72-04.
- **Question:** Can a continuous simplex optimizer find an odd allocation for this fixed transform that improves on the stored 7/47 or 4/47 results and attains any positive fixed-energy margin?
- **Acceptance criteria:** Record exact objective, solver/version, initialization and termination; produce a positive rational allocation and exact replay if found. Otherwise provide a bounded negative search and do not infer all-allocation failure.
- **Completed:** Refetched main and reread AGENTS, STATE, COORDINATION, and Campaign LXXII; reviewed U72-03 handoff and confirmed no existing branch for this audit/optimization. Scipy 1.17 and mpmath 1.3 are available.
- **Evidence:** This handoff; planned optimizer script, candidate, logs and exact replay under this directory.
- **Commands:** `git fetch origin main`; read the campaign/coordination docs; inspect the pinned odd worker handoff and existing exact replay/float proposal.
- **Checked:** U72-03 target parameters and existing bounded failures from its handoff.
- **Unchecked:** Odd objective construction, alternate optimizer convergence and exact candidate replay.
- **Blockers:** None.
- **Next:** Reconstruct the fixed-transform continuous allocation model, optimize from several starts with high-precision whitening, and exact-replay the rationalized candidate.
