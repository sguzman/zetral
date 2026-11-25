# BC01-W02 — independent exact audit of the high-mode guard

- ID: BC01-W02
- Status: READY_FOR_REVIEW
- Baseline: `58c4bc808fe5e930a613cf65bb85f02f7d964c09` (Campaign LXIV BC03 checkpoint).
- Scope: independently rederive the Campaign LXIV BC01 cutoff guard for h=12/5 and lowCount 41. Check the rational/transcendental intervals for the h-versus-log(11), log(111/10)-versus-h, and log(13)-versus-h slacks; verify the even and odd guard intervals at their first retained indices; prove analytically that each parity guard increases thereafter.
- Relevance: BC02/BC03 relies on the positive high-index complement at cutoff 41. This check is separate from the lead-owned matrix comparison and tests the guard inputs without running the spectral matrix.
- Acceptance met: `experiments/worker-BC01-W02/verify_guard.py` independently encloses 3/3 endpoint slacks and all 20 raw parity/lowCount guard intervals by exact rational arithmetic. First retained indices 82 (even) and 83 (odd) have positive lower bounds; the exact derivative is `1/n + 3*h^2/(pi^2*n^3) > 0`, with the odd pole correction constant at fixed lowCount. Full details are in `research/workers/BC01-W02/AUDIT.md`.
- Reproduction: `python3 experiments/worker-BC01-W02/verify_guard.py` from repository root; Python standard library only.
- Pinned guard source/raw commits: `204d897c96ef3385e5787943509f133906076221` and `71bd404aa713b75b9f608d97c7ab59d90c59189f`; blobs `0c84cef42c43d12a0a40bc80deca5021e9d1bb63` and `9855324299ab059ef0d49b2f4141a4d17a8e14c1`.
- Limits: the arithmetic guard is verified, but this does not certify the finite spectral matrix, complete form comparison, inherited normalization, RH, or a new candidate frontier.
