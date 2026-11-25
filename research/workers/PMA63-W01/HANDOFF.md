# PMA63-W01 worker handoff

- ID: PMA63-W01
- Status: READY_FOR_REVIEW
- Starting commit: `02978d1a94e74f9ca44e22a708c8b2356c7a8a15` (Campaign LXIII activation)
- Scope: independently derive the finite prime-shift matrix entries used by `experiments/lpa01-log11-regimes.js`, checking translation truncation on the one-cell parity space, cross-parity cancellation, the ν-index normalization, the negative sign in the restored form, and the diagonal/zero-mode cases.
- Relevance: Campaign LXIII approaches a prime-power boundary; the prime contribution is a large, window-dependent part of the comparison. This audit checks a specific link between the arithmetic shift operator and its finite cosine matrix without duplicating LB01–LB04 witness, high-mode, or positivity work.
- Acceptance: derive a closed integral formula for all same-parity entries and zero for opposite parity; map every factor in the generator's `P(n,k)` to that derivation; identify clearly what this does and does not verify. **Met within the scoped prime block.**
- Bounded stopping condition: finish the formula and source mapping, with one exact symbolic derivation for distinct indices plus the diagonal and zero-mode cases. Do not rerun either full-window generator or attempt the endpoint witness.
- Completed: proved the reflection cancellation, factor 2, ν-index normalization, negative prime sign, Wronskian off-diagonal formula, and diagonal/zero-mode formulas. No flaw found in the source prime entry. No numerical run was needed.
- Evidence paths: `research/workers/PMA63-W01/AUDIT.md`.
- Exact source commands: see AUDIT.md. No experiment or test was run.
- Unchecked claims at start: the archimedean, pole, high-mode, and remainder blocks; the complete original-form normalization; the campaign's full candidate matrices and any relation to RH.
- Next: lead review. The full original-form normalization and all non-prime blocks remain unchecked; this worker does not mark the candidate accepted.
