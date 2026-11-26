# PC65-W01 — order-40 archimedean diagonal lower-bound audit

- ID: PC65-W01
- Status: READY_FOR_REVIEW
- Baseline: `e904939dace9106292530a5a0460a65a991beaec` (LXIV closure / LXV activation).
- Scope: independently derive the midpoint Euler–Maclaurin odd-derivative terms used by the current archimedean diagonal code, check whether the previously reported PMA63-W03 `fa3`/`fa5` discrepancies occur in the source, and prove the sign of any remaining center bias for all (x=\omega_n^2\ge0). Apply the result to the planned low-cutoff regime (J=128,T=768,h=241/100).
- Relevance: Campaign LXV reuses the order-40 diagonal expansion at much smaller (J) than the old W03 support. A rigorous one-sided lower-bound result (or counterexample) is needed because the implementation packages a symmetric `widen(center,error)` interval.
- Acceptance met: exact symbolic differentiation shows `fa3/fa5/fa7/fa9` match the source derivatives; the sole coefficient mismatch is the sign of `fa7`, and its center bias is nonpositive for every (x\ge0). The 12th-order remainder holds for all (x\ge0). In the planned J=128,T=768 range, (x/R^2>15) occurs, so the earlier restricted argument is insufficient but the new global factorization covers it. See `research/workers/PC65-W01/AUDIT.md`.
- Reproduction: `python3 experiments/worker-PC65-W01/verify_em_bias.py` from repository root; SymPy 1.14.0 is used for exact symbolic algebra (no dependencies installed).
- Limits: the result validates the diagonal lower endpoint conditional on the Euler–Maclaurin remainder, not the symmetric upper endpoint, downstream interval assembly, full comparison, or candidate frontier.
- Bounded stop: audit the diagonal expansion and its one-sided lower semantics only. Do not run or modify PC01–PC04 campaign calculations or assert full comparison validity.
