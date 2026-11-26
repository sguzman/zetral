# U72-02 even sparse row-selection follow-up

- **ID:** U72-02-EVEN-SPARSE-ROW-W01
- **Status:** IN_PROGRESS
- **Starting main:** `5e076c163bf97f064a49272556145027bc72dbca`
- **Target input:** U72-02 even T=832 raw artifact and exact transform/replay code at `dae9753888f3a5bf0ec5374526d5637e9a849081`.
- **Scope:** Test one new sparse congruence strategy that selects the most correlated target rows beyond the first 12 coordinates in the existing even normalized upper-energy matrix. Refresh transformed bounds exactly, optimize a rational allocation, and exact-replay. No shared source/campaign edits and no U72-04 reconstruction.
- **Question:** Does selecting sparse decorrelation rows across the full 47-mode support improve the exact even comparison at h=62/25?
- **Acceptance criteria:** Record the selection rule, selected row/parent pairs and integer coefficients; regenerate all transformed components and tail bounds; run a bounded allocation search and exact replay; report outcome without global failure claims.
- **Completed:** Refetched main and read AGENTS, STATE, COORDINATION and Campaign LXXII. Read the U72-02 handoff recommendation to try row selection beyond the first five coordinates. Confirmed no existing sparse-row branch.
- **Evidence:** This handoff; planned row-selection code, exact transform output, allocations and replay under `experiments/worker-u72-02-even-sparse-row-w01/` and `experiments/results/u72-62-25-even-sparse-row-w01/`.
- **Commands:** Fetch/read main; inspect pinned U72-02 raw and source artifacts.
- **Checked:** Prior T=832 fixed transforms and allocations failed bounded exact replay; this method tests a distinct row-selection strategy.
- **Unchecked:** Selection computation, exact refreshed bounds, optimizer and replay.
- **Blockers:** None.
- **Next:** Select up to 12 strongly correlated target rows with indices >12, add a single earlier parent per target as a lower-triangular integer shear, then exact replay one optimized rational allocation.
