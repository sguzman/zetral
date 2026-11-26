# U72-02 even result: independent bounded audit

- **ID:** U72-02-EVEN-AUDIT-W01
- **Status:** READY_FOR_REVIEW
- **Starting main:** `5e076c163bf97f064a49272556145027bc72dbca`
- **Target worker head:** `dae9753888f3a5bf0ec5374526d5637e9a849081` (`worker/u72-02-even-reconstruction`)
- **Scope:** Independently check a narrow exact-arithmetic claim in the U72-02 even bounded negative result. Audit whether the stored raw comparison's first five leading principal minors have the reported sign transition using a separate short exact-rational calculation. No changes to the lead's U72-04 reconstruction scope or U72-02 source/artifacts.
- **Question:** Do the stored integer matrix entries independently reproduce positive leading principal minors of orders 1–4 and a negative order-5 minor, which corresponds to the handoff's zero-based pivot failure at index 4?
- **Acceptance criteria:** Parse the pinned raw artifact, independently reconstruct the leading 5x5 matrix from stored integer entries (the common positive scale does not affect signs), calculate exact determinant signs without calling the worker's replay code, and report scope/limitations. If artifact structure prevents this, document the obstacle.
- **Completed:** Read main instructions, campaign and coordination ledger, U72-01 audit recommendation, and U72-02/U72-03 handoffs. Confirmed no existing remote branch named for this audit. An initial linked worktree attempt failed because common git metadata is on the full `/workspace` overlay; recovered by using an independent clone in `/dev/shm`. Independently computed exact determinants of orders 1–5 from the pinned raw artifact and matched every stored determinant.
- **Evidence:** `verify_leading_minors.py` and `leading-minors-output.txt`; the exact worker head and raw artifact blob are recorded below.
- **Commands:** `git fetch origin main`; `git show FETCH_HEAD:AGENTS.md`; targeted source reads; `git clone --no-hardlinks --branch main https://github.com/sguzman/zetral.git /dev/shm/zetral-u72-02-audit`; fetch target branch.
- **Checked:** Exact parameter metadata; raw artifact JSON and stored integer comparison matrix; exact order-1 through order-5 determinants by an independent permutation-sum implementation; exact equality to all five stored principal-minor integers. The matrix uses a common positive scale `10^66`, irrelevant to determinant signs.
- **Not checked:** Independent reconstruction of the 47-by-47 matrix from residual chunks; the trial, factor, transformed comparison, allocation, all other minors, endpoint witness, analytic form, or all possible transforms/allocations. This is a narrow consistency audit of the pinned raw integer matrix, not the U72-04 stored reconstruction.
- **Blockers:** None.
- **Status:** READY_FOR_REVIEW.
- **Recommendation:** Lead can accept this as an independent exact check of the raw artifact's first five leading minors only. It verifies the reported bounded failure index, not the upstream analytic or residual computations.

## Exact artifact and calculation

- Target branch head: `dae9753888f3a5bf0ec5374526d5637e9a849081`.
- Raw JSON Git blob: `b6000240e5f35913c5371fa2675faa6ab168bbe0`.
- Command: `git show origin/worker/u72-02-even-reconstruction:experiments/results/u72-62-25-even-t832-raw.json > /dev/shm/u72-02-raw.json`; `python3 research/workers/U72-02-EVEN-AUDIT-W01/verify_leading_minors.py /dev/shm/u72-02-raw.json`.
- Artifact SHA-256: `1051fd0ac1b45d0e0cc3ac3d08d91e856f687afe423497723d067a26faabccef`.
- Result: determinant signs for orders 1 through 5 are `+,+,+,+,-`; each independent integer determinant equals the `principalMinors` integer stored in the artifact exactly. The order-5 determinant is `-943362133886286207963921078370920956361683316084180494557083525316600443609957471520990478543775642536117193198530516603628584169199825713323732933956`.
- The verification script uses the Leibniz permutation sum for matrices of size at most 5 and Python arbitrary-precision integers. It asserts the matrix is 47-by-47, symmetric, and that its common scale is positive. It does not call U72 worker replay code.
