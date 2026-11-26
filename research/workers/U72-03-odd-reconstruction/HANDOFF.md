# U72-03 odd-sector reconstruction — worker handoff

**Status:** IN_PROGRESS

**Starting main commit:** `5e076c163bf97f064a49272556145027bc72dbca`

**Scope:** Independently generate the Campaign LXXII odd staged trial and all odd residual intervals at h=62/25, J=128, KEM=20, T=832, M=16384, lowCount=47; then investigate an exact comparison with a positive fixed-energy grid margin. This branch is independent of U72-02 even. The remote branch inventory had no U72-03 worker branch at start.

**Acceptance criteria:** preserve exact regenerated staged/trial and complete residual data, exact assembly, a separately selected odd transform/allocation if baseline needs it, exact principal-minor replay, and honest failure/positive-margin result. No original-form evaluation, RH proof, CI, novelty claim, or campaign acceptance is implied.

**Bounded stopping condition:** finish one fresh odd generation and exact comparison attempt; record a negative result if a positive fixed-energy margin cannot be certified, and do not extrapolate LXXI's odd margin.

## Completed

- Read main AGENTS.md, STATE.md, COORDINATION.md, and research/CAMPAIGN-72.md at the starting commit.
- Confirmed no remote `worker/u72-03` branch.

## Evidence and next steps

No numerical work has been performed on this branch yet. Next: regenerate the odd trial and residual chunks, exact-assemble them, derive parity-specific factors, then test a fresh integer congruence and exact allocation.
