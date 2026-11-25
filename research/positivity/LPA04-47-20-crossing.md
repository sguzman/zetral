# LPA04 — Candidate positivity comparison at h=47/20

Campaign LXII, 2026-11-25. Internal AI-assisted calculation; no human or formal review, independent original normalization, independent operator evaluation, novelty or RH claim. Both full parity comparisons pass under the inherited operator formula and analytic bounds. The comparison frontier advances from 23/10 to 47/20. All results below are from executed arithmetic, not merely planned.

## Witness and guard

The FDA01 rational witness generator at 21/2 exactly reproduces the stored [witness](../../experiments/results/fda04-window-21-2.json), including 6795 refined cells and bound 2632/1000. [LPA01 generator](../../experiments/lpa01-log11-regimes.js) adds only the guarded local regime h < log(21/2), with an outward rational log comparison and checked count, preserving the inherited guards, arithmetic and tail bounds. Source exact pinned readback succeeded. The first even test with 32 low modes failed at the high-mode guard (not a negative operator eigenvalue). At 37 low modes the first high mode n=74 gives g(n) in [0.124349312144293225066700528369059741760107528078059932850238429044,0.124349312144293225066700528369059741760107528078059932850238429691].

## Executed tests

All tests at h=47/20, J=4096, lattice 10^66. The even 37-mode T576/M6656 run fails at its first leading minor; its approximate normalized finite residual is 0.9507114158160554 and eighth-tail block deduction dominates the first direction. Exact rescaling of the outward component intervals by oldShare/newShare, followed by weighted interval radius and Bareiss comparison, screens 75 rational allocations; none passes, best 6/37. Increasing trial support T to 768 and cutoff M to 8192 reduces the approximate finite residual to 0.7011263429288078; default even allocation still fails. A heuristic normalized matrix screen of 56 allocations selects 15, all 15 pass exact integer elimination. The selected shares sum to 1000000: (919778,45999,4557,79,3,1,1,29582). The odd T768/M8192 comparison passes 37/37 with the default shares (9550,400,45,1,1,1,1,1)/10000. Heuristic eigenvalue estimates are not certification; only exact tests are used for acceptance.

| Run | Stored result | Outcome |
|---|---|---|
| 32 even, T576 M6656 | [raw](../../experiments/results/lpa02-47-20-even.json) | high weight guard fails |
| 37 even, T576 M6656 | [raw](../../experiments/results/lpa03-47-20-even-37.json), [reallocation](../../experiments/results/lpa03-47-20-even-37-reallocation.json) | 0/37 default, best 6/37 |
| 37 even, T768 M8192 | [raw](../../experiments/results/lpa03-47-20-even-37-t768-m8192.json), [reallocation](../../experiments/results/lpa03-47-20-even-37-t768-reallocation.json) | 0/37 default, selected 37/37 |
| 37 odd, T768 M8192 | [raw](../../experiments/results/lpa03-47-20-odd-37-t768-m8192.json) | 37/37 |

Reproduce generator: node experiments/lpa01-log11-regimes.js --even 47 20 4096 8192 768 37 (and --odd). Reproduce exact reallocation with experiments/lpa03-weighted-reallocation.js, supplying the selected candidate or recorded screened candidates as JSON [{shares:[...],den:"1000000"}]. Earlier exact source guard adapted to the FDA01 records; original matrix and radii reconstructed exactly. Float candidate selection is exploratory; all rational candidates are stored, so exact checks are reproducible independently of heuristic choices.

## Independent stored replay

Run from repository root:

```sh
node experiments/lpa04-replay.js experiments/results/lpa03-47-20-even-37-t768-m8192.json experiments/results/lpa03-47-20-even-37-t768-reallocation.json experiments/results/lpa03-47-20-odd-37-t768-m8192.json
```

[Replay output](../../experiments/results/lpa04-47-20-replay.json): baseline matrices and all 74 weighted radii reproduced, selected matrices 2738 entries matched, all 74 leading minors independently reproduced with nonsymmetric integer row elimination tracking exact rational scales. Fixed-energy normalized lower comparison margins (grid 1/1000000) even 0.136301, odd 0.204083; next grid value fails in each case. These margins are not spectral gaps. The replay was executed on stored raw objects fetched by blob; the large initial 37-mode file was read by exact blob identifier because the raw contents endpoint rejected its size. Both final raw objects had exact readback equality.

Candidate frontier 2.35 accepted under inherited formulas. No RH proof. Next bounded question: approach log(11) from below, without silently changing the prime support regime.
