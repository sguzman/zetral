# AIR03W01 handoff

- ID: AIR03W01
- Status: IN_PROGRESS
- Starting commit: 0a975c6655f88112f37fe402f7cbfdb64f3a29b7
- Scope: Independently audit the AIR03 tighter Euler–Maclaurin tail used for frozen even/odd h=1.95 replay. Do not edit shared campaign/state files or the lead's AIR03 artifacts.
- Question: Does the derived tail enclosure rigorously bound the omitted prime-power/rate contribution on the implemented domain, including all endpoint and remainder terms?
- Acceptance criteria: Derive an independent inequality, check its assumptions against the implementation, identify any counterexample or certify the stated bound under explicit hypotheses; preserve exact commands and status.
- Bounded stopping condition: Audit the actual formulas and run a high-precision or exact spot-check of the integral/remainder; stop at a precise reviewable result, including a negative finding if applicable.
- Completed work: Assignment claimed; substantive audit pending.
- Evidence: This handoff.
- Commands: `git worktree add -b worker/air03w01-em-audit /workspace/zetral-air03 origin/main`
- Checked vs unchecked: Baseline main fetched; AIR03 source and derivation not yet audited.
- Blockers: None known.
- Next recommendation: Perform independent derivation and report to lead in this branch.
