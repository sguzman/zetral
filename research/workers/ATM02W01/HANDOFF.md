# ATM02W01 handoff

- ID: ATM02W01
- Status: IN_PROGRESS
- Starting commit: 4eee0cddafbde1ae0df9a8c47f30f65b55ca74f5
- Scope: Independently audit the archived ATM02 h=9/4 even stored lower matrix, frozen basis nonsingularity, and rational share normalization. Do not edit lead ATM02 source/raw or shared state.
- Question: Do the stored 30x30 lower matrix's exact principal minors match the saved positive sequence, is the rational trial basis nonsingular, and do saved rational tail shares form a valid positive partition?
- Acceptance criteria: Recompute every leading principal determinant from the raw integer matrix, compare to stored values, verify exact basis determinant is nonzero, and check all shares positive and sum exactly to their denominator.
- Bounded stopping condition: Audit the one archived even raw result only; do not rerun interval generation or the odd case.
- Completed work: Assignment claim only.
- Evidence: This handoff.
- Commands: 
- Checked vs unchecked: Baseline main and Campaign LX read; exact raw replay pending.
- Blockers: None known.
- Next recommendation: Complete independent exact integer check and report whether the saved even matrix is internally consistent.
