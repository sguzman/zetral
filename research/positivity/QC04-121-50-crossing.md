# QC04 — Candidate crossing at h=121/50

Campaign LXVI. QC01 arithmetic witness at 45/4 (C=2795/1000, 26393 cells) and all 20 high-mode guards were already recorded in [QC02](QC02-121-50-even-bottleneck.md). QC02 at M8192 yielded only 2/41 exact positive leading minors after refined reallocation.

QC03 changed M to 10240, keeping J128, KEM20, T768, 41 low and the same rational endpoint and generator. All M-dependent factors and shares were recomputed. No new analytic bound was introduced: the existing eighth-order amplitude and integrated remainder formula are used at the larger cutoff, together with the established constant-oscillatory rank factors.

| Sector | Raw | Factors | Joint allocation | Exact replay |
|---|---|---|---|---|
| Even | 37108cedcf9080b5548ba0af1e99e392c89eb050 | 2a18bd84c96932260bab017dab2020a96ec43e5b | 2fcfd82ec749dc9d93f6b2a033019ce120eedc73 | 143ca182c4bc39344ecfeceed37f95a68caa6494 |
| Odd | c04c71b76f1308d3eaec45f85d49518b77974496 | 5f7538ee0b6072714ed5ba34e24cede8de209256 | fd0a41c8bb47c78460fd581684e336a73f332e10 | 9a051db81f3df922b8c88aab9cc9ee9806e0853f |

Both raw blobs were verified byte-for-byte (even by deterministic regeneration); all factor, joint and exact replay blobs matched written content. Both sectors have 41 positive energy lower endpoints and 8/8 refined allocations with 41/41 positive leading minors. Approximate optimized residuals 0.8925823339 even and 0.8915914638 odd are search diagnostics only.

QC04 independent [stored replay source](../../experiments/qc04-constant-oscillatory-replay.js) 5c73533731cd9a3d331f7a21a8d89ac890c1d92d, [results](../../experiments/results/qc04-121-50-independent-replay.json) 57898b627d738edc75971ffc89357a2d2d8b9fed. Changed only campaign input guards and filename from PC04. Both sectors reconstruct 1681 baseline and 1681 refined matrix entries, 41 baseline weighted radii and 41 exact minors each. Fixed-energy normalized grid lower margins 107417/10^6 even and 108408/10^6 odd; next grid values fail.

Candidate frontier advances to 2.42. This is a scoped analytic and stored-matrix verification under the inherited candidate assumptions, not independent evaluation of the original form or normalization, formal/human review, priority assessment or a proof of RH. No CI execution claimed.
