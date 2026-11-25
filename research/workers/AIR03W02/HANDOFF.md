# AIR03W02 handoff

- ID: AIR03W02
- Status: READY_FOR_REVIEW
- Starting commit: 8fc84eb11476ce87b6acb64eb46adc626b93b6e4 (origin/main at assignment start; verify exact hash in Git history)
- Scope: Determine whether outward fixed-point rounding salvaged historical RRC prime-five runs that used the defective 24-term Machin atan denominator 81. Work only in this worker branch; do not modify the RRC or lead artifacts.
- Question: At the original Q=10^30 scale, does the corrected π interval change the relevant saved analytical enclosures/certificate decision, and do corrected frozen replays retain their status?
- Acceptance criteria: Independently compare old and corrected rational π bounds after outward rounding; when feasible, replay saved RRC certificates with denominator 49 and report any changed intervals/status.
- Bounded stopping condition: Check the two existing worker-run windows h=1.65 and 1.70, or stop earlier if source/data are unavailable; document exact command and output.
- Completed work: Exact Machin endpoint analysis and full Q=10^30 original/corrected replay for RRC02 h=33/20 and 17/10; outputs match archived JSON exactly.
- Evidence: `research/workers/AIR03W02/REPLAY.md`; paired scripts under `experiments/air03w02/`; exact lattice checker `experiments/air03w02/pi-lattice-check.py`.
- Commands: See exact paired replay and lattice-check commands in `REPLAY.md`.
- Checked vs unchecked: The specific RRC02 h=1.65,1.70 outputs are unchanged when only atan denominator 81 is corrected to 49. Other affected sources, precisions, and analytic formulas remain unchecked.
- Blockers: None known.
- Next recommendation: Treat these two-window RRC02 results as unaffected by this particular defect after the corrected replay; continue audit of other historical sources independently if still useful.
