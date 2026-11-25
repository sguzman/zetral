# ATM03W06 handoff

- ID: ATM03W06
- Status: READY_FOR_REVIEW
- Starting commit: `bdfb2ab` (doubled-J ATM03 even result at h=23/10)
- Scope: exact stored-integer replay of the ATM03 J=12288 even comparison and matched J=6144 ATM02 raw. No lead source, raw file, or shared state changed.
- Completed: recomputed all 32 leading principal determinants for each matrix; compared each archived prefix; checked matrix symmetry, basis nonsingularity, and rational shares. Confirmed selected run metadata match except J; basis/trial entries are recomputed and therefore differ.
- Evidence: `research/workers/ATM03W06/ATM03W06-AUDIT.md`; `experiments/atm03w06-j12288-even-audit.py`.
- Exact command: `python experiments/atm03w06-j12288-even-audit.py` (PASS).
- Checked: exact arithmetic of stored matrices/bases/share partitions and metadata comparison.
- Unchecked: interval generator and interpretation of the `relativeEstimate`; no actual-form spectral conclusion.
- Blockers: None.
- Next recommendation: record that doubling J improves but does not remove the first-coordinate certificate failure; investigate the local arithmetic/precision bottleneck before further cutoffs.
