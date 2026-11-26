# U72-02 even result: independent bounded audit

- **ID:** U72-02-EVEN-AUDIT-W01
- **Status:** IN_PROGRESS
- **Starting main:** `5e076c163bf97f064a49272556145027bc72dbca`
- **Target worker head:** `dae9753888f3a5bf0ec5374526d5637e9a849081` (`worker/u72-02-even-reconstruction`)
- **Scope:** Independently check a narrow exact-arithmetic claim in the U72-02 even bounded negative result. Audit whether the stored raw comparison's first four leading principal minors have the reported sign transition using a separate short exact-rational calculation. No changes to the lead's U72-04 reconstruction scope or U72-02 source/artifacts.
- **Question:** Do exact interval endpoints in the stored raw matrix independently certify positive leading minors 1–3 and a nonpositive/failing fourth pivot, as the U72-02 handoff reports?
- **Acceptance criteria:** Parse the pinned raw artifact, independently reconstruct the first 4x4 lower comparison matrix from endpoint rationals, calculate exact determinant signs without calling the worker's replay code, and report scope/limitations. If artifact structure prevents this, document the obstacle.
- **Completed:** Read main instructions, campaign and coordination ledger, U72-01 audit recommendation, and U72-02/U72-03 handoffs. Confirmed no existing remote branch named for this audit. Initial attempt to add a linked worktree under `/dev/shm` failed because git metadata is in the full `/workspace` overlay; recovered by using an independent clone in `/dev/shm`.
- **Evidence:** This handoff; planned verification script and captured output under this directory.
- **Commands:** `git fetch origin main`; `git show FETCH_HEAD:AGENTS.md`; targeted source reads; `git clone --no-hardlinks --branch main https://github.com/sguzman/zetral.git /dev/shm/zetral-u72-02-audit`; fetch target branch.
- **Checked:** The exact parameters and reported bounded result in the U72-02 handoff; absence of this audit branch in the remote branch inventory.
- **Unchecked:** Exact artifact parsing, rational reconstruction, determinant calculations.
- **Blockers:** None.
- **Next:** Retrieve the pinned worker artifacts and implement the narrow verifier independently; preserve exact command, outputs, and limitations here.
