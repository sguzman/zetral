# U75-BASE-AUDIT-W01 worker handoff

- Status: READY_FOR_REVIEW
- Baseline commit: `f3aba1bd0f6541784687fd472792f8ee088685d2` (LXXV U75-02 even residual checkpoint)
- Branch/worktree: `worker/u75-base-original-audit` / `/dev/shm/zetral-u75-base-audit`
- Scope: Independently evaluate the h=5/2 LXXIV even and odd finite comparisons in their original (untransformed) trial coordinates from the archived raw intervals and trial data. Rebuild the rational comparison inputs and test exact positive definiteness/margins, then identify what the result does and does not validate about the transformed candidate.
- Rationale: LXXIV closure explicitly records that no independent original-form evaluation was done; U75 carries the LXXIV h=2.50 frontier as its baseline. This is outside the active U75-01–04 lead-owned scope.
- Exclusive files: `research/workers/U75-BASE-AUDIT-W01/` and `experiments/worker-u75-base-audit/` only.
- Acceptance: reproducible independent evaluator and raw result; exact integer/rational checks for both sectors; a handoff that distinguishes a passing/failing original-coordinate finite comparison from the transformed certificate and from any RH/operator conclusion.
- Stopping condition: both sectors audited or a precise artifact/definition gap blocks reconstruction.
- No shared campaign/state/coordination edits; no frontier, RH, operator, novelty, CI, or formal verification claim.
- Completed: exact original-coordinate comparison in both sectors. The persisted proposal allocation fails at leading pivot 8 (even) and 26 (odd); archived transformed replays remain 50/50 with margins 127110/10^6 and 211333/10^6. Baseline reconstruction matches all 2500 stored entries and 50 radius corrections per sector.
- Evidence and limitations: `research/workers/U75-BASE-AUDIT-W01/RESULT.md`, `experiments/worker-u75-base-audit/original-form.js`, and `experiments/worker-u75-base-audit/result.json`. The staged source/assembler reconstruct the archived intervals; the original-coordinate exact replay is independent. No conclusion beyond the finite comparison.
- Completed commit: `ee222ed6d52e4c078d592e6b05a518ae9008e260`.
