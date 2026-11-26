# QER04-W01 worker handoff

- ID: QER04-W01
- Status: IN_PROGRESS
- Starting commit: `8fb1647cd10dc948db15b65f13250d8f8d0ac4b2` (`origin/main`, active LXXIII)
- Scope: independently check QER04 §1's compactly supported sinc-power probes and the resulting exponential bound on quotient spectral mass in compact sets separated from the real ordinate set. Focus on support margin, Fourier normalization, upper/lower probe estimates, zero-count summability, covering multiplicity, and exponent conversion. Do not audit §2 cluster-mass convergence or make RH-independent claims.
- Scientific relevance: this is the quantitative off-ordinate concentration input underlying the edge sampling measure result.
- Acceptance: derive explicit inequalities with correctly placed constants, confirm all bounds are uniform for centers in a fixed compact ordinate gap, and state the RH/sample-identity assumptions. Report any flaw or repair.
- Bounded stopping condition: settle the §1 fixed-compact off-ordinate mass estimate only.
- Evidence: `research/workers/QER04-W01/AUDIT.md`.

## Completion update — 2026-11-26

- Status: READY_FOR_REVIEW
- Result: no gap found in QER04 §1's RH-conditional probe-to-mass estimate under the imported sample identity and unit-interval zero count. The sinc-power tail is bounded by `r^(2n-2)min(1,(b|t|)^-2)`, the normalization has the needed lower bound `Z_n>=c/sqrt(n)`, and an `O(sqrt(n))` cover yields exponential mass decay after absorbing the polynomial into a smaller rate.
- Evidence and derivation: `research/workers/QER04-W01/AUDIT.md`.
- Limits: fixed compact sets separated from `Gamma` only; no node exclusion, near-ordinate rate, uniform shrinking-gap constant, or cluster-mass audit. RH and sample identity are assumed.
- No fresh primary-source, numerical, formal, human-review or novelty claim.
- Next: scoped lead review.
