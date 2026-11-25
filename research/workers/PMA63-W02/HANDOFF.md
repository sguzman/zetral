# PMA63-W02 worker handoff

- ID: PMA63-W02
- Status: READY_FOR_REVIEW
- Starting commit: `fce6991` (Campaign LXIII LB03 arithmetic refinement)
- Scope: independent symbolic audit of the one-cell boundary-rate and hyperbolic pole matrix normalization in `experiments/lpa01-log11-regimes.js`; no LB01–LB04 witness or comparison work.
- Acceptance: derive and match the exact one-cell boundary parity rank-one term, the rate divided-difference/diagonal factors, and the pole rank-one signs and coefficients to the implementation. **Met within this bounded scope.**
- Bounded stopping condition: finish these block identities and source mapping; do not rerun the full generator or claim a full-form/positivity result.
- Evidence: `research/workers/PMA63-W02/AUDIT.md`; source documents `research/positivity/MBL02-finite-neumann-arithmetic-matrices.md` and `research/positivity/DNB02-exact-positive-boundary-resolvent.md`.
- Unchecked: archimedean diagonal enclosure, omitted-rate error constants, prime block, endpoint guard, assembled comparison arithmetic, and complete source-to-closed-form normalization.
- Next: lead review. No numerical experiment or test was run; the claimed identities are symbolic derivations only.
