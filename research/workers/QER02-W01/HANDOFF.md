# QER02-W01 worker handoff

- ID: QER02-W01
- Status: IN_PROGRESS
- Starting commit: `44b9f0fe29867a96f86f6b06a813ca2f8932231f` (Campaign XIV opened; latest main at start)
- Scope: independently audit QER02’s exact sampling weights, gauge interpolation, domain extension, cardinal expansion, and reproducing-kernel convergence. Treat QER01/U04 as imported dependencies unless a concrete dependency flaw appears.
- Acceptance: check every normalization, conjugation, quotient invariance and convergence argument; report any gap/counterexample, otherwise provide a bounded proof audit with exact checked and unchecked claims. No originality claim.
- Completed: read QER02, QER01, U04 and QER04; selected this distinct completed QER result as expressly invited by Campaign XIV. The published campaign state/coordination ledger remains stale (still points to XI/X) while main newly adds Campaign XIV; no shared-state edits planned.
- Evidence: forthcoming at `research/workers/QER02-W01/AUDIT.md`.
- Exact commands: `git fetch origin main`; `git switch -c worker/qer02-w01 origin/main`; `git rev-parse HEAD`; `git show origin/main:research/CAMPAIGN-14.md`; read QER02/QER01/U04/QER04 notes.
- Checked: AGENTS.md, STATE.md, COORDINATION.md, Campaign XIV, QER02, QER01, U04, QER04.
- Not checked: full underlying QER01 derivation; Suzuki/source literature; formal verification or numerical checks.
- Blockers: none identified.
- Next: derive the exact Riesz/eigenbasis formulas independently and test the gauge and graph-core extension line by line.
