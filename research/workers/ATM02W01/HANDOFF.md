# ATM02W01 handoff

- ID: ATM02W01
- Status: READY_FOR_REVIEW
- Starting commit: 4eee0cddafbde1ae0df9a8c47f30f65b55ca74f5
- Scope: Independently audit the archived ATM02 h=9/4 even stored lower matrix, frozen basis nonsingularity, and rational share normalization. Do not edit lead ATM02 source/raw or shared state.
- Question: Do the stored 30x30 lower matrix's exact principal minors match the saved positive sequence, is the rational trial basis nonsingular, and do saved rational tail shares form a valid positive partition?
- Acceptance criteria: Recompute every leading principal determinant from the raw integer matrix, compare to stored values, verify exact basis determinant is nonzero, and check all shares positive and sum exactly to their denominator.
- Bounded stopping condition: Audit the one archived even raw result only; do not rerun interval generation or the odd case.
- Completed work: Exact Bareiss replay of all 30 saved leading principal minors; exact basis determinant; exact share positivity and normalization.
- Evidence: `research/workers/ATM02W01/ATM02-AUDIT.md`; `experiments/atm02w01-even-matrix-audit.py`.
- Commands: `python experiments/atm02w01-even-matrix-audit.py` (PASS).
- Checked vs unchecked: Stored integer matrix/basis/share arithmetic checked exactly; interval generator, outward intervals, and spectral conclusions unchecked.
- Blockers: None.
- Next recommendation: Lead may append this scoped internal-consistency result to the coordination ledger; keep interval generation and spectral claims separately audited.
