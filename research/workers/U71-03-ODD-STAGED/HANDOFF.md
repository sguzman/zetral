# U71-03 odd-sector arithmetic handoff

- ID: U71-03
- Status: IN_PROGRESS
- Starting main commit: 8f76f8142bdb0ff201865b21aa193055e8593d0b
- Worker branch: `worker/u71-03-odd-staged-data`
- Scope: parity-odd trial, residual arithmetic, and transformed interval replay for Campaign LXXI U71-03. No shared campaign or state files were changed.

## Completed calculations

Using the repository's `experiments/u71-staged.js` against `experiments/tc01-post-log11-em.js` (source blob `2f9035722076c6c8e96bf01b00901191c3466c52`), exact integer/rational JS arithmetic generated the odd trial for (h=247/100), (J=128), (KEM=20), (M=16384), (T=832), lowCount (46). The trial has 46 low-support directions and 370 trial directions, split losslessly across `experiments/results/u71-247-100-odd-t832-m16384-trial-part{1..5}.txt`.

Sixteen disjoint odd-mode chunks cover every residual mode (n=93,95,ldots,16383). Fifteen chunks have 512 modes and the last has 466. Each exact interval output is saved as `experiments/results/u71-247-100-odd-t832-m16384-finite-<start>-<end>.json`; their aggregate is `...-finite-total.json`.

The repository's assembler, factor generator, and exact replay were run on these stored objects with U71 parameters. The earlier one-row odd transform had only 9/46 positive principal pivots. Applying the five-direction integer congruence used by U71-02 to the odd intervals, with the odd parity tail bound and a refreshed eighth-tail calculation, yielded all 46/46 exact principal-minor interval pivots positive. Its determinant is 10^35, but the exact generalized 10^-6 grid search gives margin 0. A hybrid change replacing only the first-row coefficient -1366811236/10^9 by 1166544273/10^9 kept all 46 pivots positive and improved the float proposal score from 0.91565 to 0.93529; its exact grid margin remained 0. A broader scan then varied that coefficient while holding the other four rows fixed. At 5.00, 5.01, 5.02, 5.03, and 5.04 billion, exact replay kept all 46 pivots positive but returned margin 0. At 5.10 billion only 31 pivots remained positive; at 5.20–5.40 billion only 10 remained positive. Higher samples at 10, 20, and 50 billion failed after 3 pivots. The sample table is `experiments/results/u71-247-100-odd-t832-m16384-row-coefficient-scan.json`. This is a finite parameter scan, not an obstruction theorem. Neither transform is a guarded candidate pass.

Transformed interval components are in `experiments/results/u71-247-100-odd-t832-m16384-five-{upper,finite,leading,second,third,fourth,fifth,sixth,seventh}.json`. Transform and refreshed tail metadata are in `...-five-transform.json`; the compact exact replay summary is `...-five-replay.json`; its exact lower integer matrix is saved separately in `...-five-lower-integer.json`. All output files were read back remotely after writing.

## Reproduction and scope

The local checkout remained unavailable because the workspace filesystem is full. The exact fetched source strings and saved trial/chunk objects were evaluated in the JS tool runtime. The assembler, parity-aware factor generator, five-direction transform, float proposal, and Bareiss exact replay routines were adapted only in their regime assertions/parameters for (h=247/100), odd parity, and (M=16384). The old one-row transform was also tried and failed as noted above.

This establishes a positive interval replay for the selected transformed matrix, but not the campaign's strict grid-margin criterion. U71-03 remains IN_PROGRESS; no candidate pass or frontier extension is claimed. No standalone CLI, CI, independent original-form evaluation, RH claim, or novelty claim is made.

## Next work

Optimize or replace the odd congruence transform / energy allocation to obtain a strictly positive exact grid margin. If that cannot be achieved, document the obstruction and pivot to the campaign's U71-04 scoped audit without calling U71-03 a pass. Do not edit lead-owned `STATE.md`, `COORDINATION.md`, or campaign files.


## Branch coordination note

Main advanced during this work batch to `f4a293f9af98465642a8b62d92c992cb8e00ebbf` while the lead persisted U71-03 artifacts. Main now has `experiments/results/u71-247-100-odd-t832-m16384-trial-part1.txt` at blob `9538f9268ea8673f24a4a7ca25a86aa4702af3ab`; this worker branch has different contents at the same path (blob `893cbc8fb4b9b4541f418ccb7e66c27a93251693`). Do not merge this branch as-is or use it to overwrite main. The worker trial has five 350,000-character shards; main's part 1 is 470,757 characters. Rename the worker shards under a worker-specific prefix or reconcile against lead's branch before any later integration. The exact transformed replay and audit files otherwise remain on this branch.
