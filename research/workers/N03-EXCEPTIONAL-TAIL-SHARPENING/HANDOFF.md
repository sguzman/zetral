# N03 exceptional-tail exponent sharpening

- **ID:** N03-EXCEPTIONAL-TAIL-SHARPENING
- **Status:** IN_PROGRESS
- **Starting commit:** `5e076c163bf97f064a49272556145027bc72dbca` (main, fetched 2026-11-26)
- **Scope:** Independently check whether the parameter choice in the completed N03 exceptional-set proof can be strengthened, preserving the exact hypotheses and measure statement. This is a bounded follow-up to Campaign X's scalar estimate; it does not overlap the lead-owned Campaign LXXII U72-04 reconstruction.
- **Question:** Does N03.1 imply a tail bound with exponent arbitrarily close to `(1-kappa)/2`, and are there hidden continuity, threshold, measurability, or endpoint issues?
- **Acceptance criteria:** Give a self-contained parameterized proof or a counterexample to the proposed sharpening; distinguish supremal exponent from an attained endpoint; state exact conditional assumptions and avoid novelty claims.
- **Completed work:** Campaign/state/coordination and N03 source note read. Preliminary derivation suggests every `delta < (1-kappa)/2` is admissible, with the same geometric threshold argument.
- **Evidence paths:** This handoff; source is `research/evaluation/N03-nested-window-growth.md` at the starting commit.
- **Commands:** `git fetch origin main`; `git show FETCH_HEAD:AGENTS.md`; targeted reads of `STATE.md`, `COORDINATION.md`, `research/CAMPAIGN-72.md`, and `research/evaluation/N03-nested-window-growth.md`.
- **Checked:** Source's N03.1 inequality, original threshold construction, and active campaign ownership/scope.
- **Unchecked:** Full proof audit of parameterization; no independent literature search or external review.
- **Blockers:** None currently.
- **Next recommendation:** Complete the proof audit and update this handoff with precise bound and limitations; push for lead review.
