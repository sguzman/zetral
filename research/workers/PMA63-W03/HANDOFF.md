# PMA63-W03 worker handoff

- ID: PMA63-W03
- Status: READY_FOR_REVIEW — material algebraic discrepancy found
- Starting commit: `78d511d` (Campaign LXIII LB03 exact rational reallocation)
- Scope: independently audit the archimedean diagonal's midpoint Euler–Maclaurin expansion and local derivative expressions in `experiments/lpa01-log11-regimes.js`.
- Finding: `fa3` has a wrong sign in its mixed term; `fa5` has two wrong mixed-term signs; `fa7` has the correct derivative but the wrong Euler–Maclaurin coefficient sign. `fa9`, the half-log integral, and first-derivative coefficient match the derived expansion.
- Direction: at LB02/LB03 support/cutoffs, the net center discrepancy is downward. The code's symmetric `widen` is not a valid two-sided interval, but its lower endpoint is a valid lower bound using the inherited remainder estimate. The diagonal clipping and weighted row-radius step preserve that lower bound through congruence, conditional on the other intervals and tails. Stored two-sided widths are not certified enclosures.
- Evidence: `research/workers/PMA63-W03/AUDIT.md`.
- Bounded stopping condition: document the exact algebra, check direction over the LB02 support, and stop before altering lead-owned sources or rerunning LB comparisons. **Met.**
- Unchecked: the other finite-matrix intervals and tails, full generator arithmetic, and positivity results from any campaign run. No full comparison was run and no actual negative spectrum is inferred.
- Next: lead review and correction/replay decision.
