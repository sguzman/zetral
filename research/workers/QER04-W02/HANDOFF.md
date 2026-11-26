# QER04-W02 worker handoff

- ID: QER04-W02
- Status: IN_PROGRESS
- Starting commit: `8fb1647cd10dc948db15b65f13250d8f8d0ac4b2` (`origin/main`, active LXXIII)
- Scope: independently audit QER04 §2's exponential convergence of weighted spectral mass on a fixed interval with endpoints off `Gamma`, using the normalized probe kernel `K_n` and integrated sampling identity. Verify endpoint handling, tail integration against the local measure-growth bounds, Plancherel normalization, and final error decomposition. Do not duplicate QER04-W01's §1 probe-to-compact-mass proof beyond using its stated estimate.
- Scientific relevance: checks whether RH-conditional edge measures recover the correct total multiplicity of each fixed ordinate cluster at an exponential rate.
- Acceptance: derive each approximation/error term with exact assumptions and correct Fourier factors; report any flaw or repair. No RH-independent node convergence claim.
- Bounded stopping condition: settle the fixed-interval cluster-mass estimate only.
- Evidence: `research/workers/QER04-W02/AUDIT.md`.
