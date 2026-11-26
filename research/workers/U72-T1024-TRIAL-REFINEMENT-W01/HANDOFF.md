# U72 T=1024 trial refinement

- **ID:** U72-T1024-TRIAL-REFINEMENT-W01
- **Status:** IN_PROGRESS
- **Starting main:** `5e076c163bf97f064a49272556145027bc72dbca`
- **Scope:** Test whether increasing the trial cutoff from T=832 to T=1024 changes the U72-02 even and U72-03 odd candidate outcomes at h=62/25, J=128, KEM=20, M=16384, lowCount=47. Preserve the same endpoint-12 witness and exact arithmetic framework. This is a new candidate refinement, not the lead-owned U72-04 stored audit.
- **Question:** Does the larger trial improve either parity to a positive fixed-energy grid margin after exact interval generation and replay?
- **Acceptance criteria:** Regenerate trial/factors and necessary residual interval artifacts for both sectors; exact-replay a fixed basis/allocation candidate per sector; report exact margins if any or bounded failures. Do not infer global failure from tested candidates.
- **Completed:** Refetched main and read active STATE/CAMPAIGN-72/COORDINATION and research protocol. Measured T=832 outcomes: even candidates at most 7/47, odd candidates at most 7/47 in tested replays; no positive fixed-energy margin. Confirmed no branch with this trial refinement ID.
- **Evidence:** This handoff; planned scripts, input/output hashes, and exact replay artifacts under this path.
- **Commands:** `git fetch origin main`; targeted reads of active state and campaign; U72-02/U72-03 handoff inspection; remote branch inventory.
- **Checked:** T=832 failures from pinned worker handoffs; campaign plan permits cutoff refinement on measured evidence.
- **Unchecked:** T=1024 trial/factor generation, exact residual intervals, transformed comparisons, fixed-energy margins.
- **Blockers:** None.
- **Next:** Adjust only local runner parameters to T=1024, regenerate both parity trials/factors, and exact-replay one inherited transform/allocation per parity. Stop the cutoff experiment if data generation fails or exact candidates remain clearly negative; do not expand to a sweep.
