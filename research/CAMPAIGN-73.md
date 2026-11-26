# Campaign LXXIII — Guarded extension to h=249/100

Candidate frontier 2.48 (LXXII closed at 6d2524ed161f3ce122105e3f8ab24fe591f8046a). Target h=2.49; rational endpoint 121/10 within the eight-shift regime below log(13).

- U73-01: regenerate exact rational endpoint-121/10 eight-shift witness, endpoint slacks and high guards; choose first common adequate low support.
- U73-02: regenerate even staged trial and residuals at J128/KEM20/T832/M20480, exact midpoint integer decorrelation and allocation replay. Refine based on measured bottlenecks, not extrapolation.
- U73-03: odd counterpart, require strictly positive fixed-energy grid margin.
- U73-04: independent stored reconstruction, witness and guard audit, exact minors and adjacent grid boundaries; close or pivot.

Lead owns campaign; worker scopes unchanged. No independent original-form evaluation, CI, RH proof or originality claim implied. README unchanged.


## U73-01 — Exact witness and guards COMPLETE

[Source](../experiments/u73-witness-guard.js) be1bdc36a9e0fd30f38822877d3a6d5e677d5e7c. Exact rational endpoint 121/10 witness bound 2971/1000, step 16, 41549 checked cells; 807455 serialized characters across two byte-verified parts a2d62789a490904ee47b33e47e579b5de37910ed and 4757040301997016b2f7a2ca17e581e1fbc3b591. [Guard result](../experiments/results/u73-249-100-guards.json) 9338b793dc4f92265a23180122dc73cf2a4cc608 byte-verified. Endpoint slack log(12.1)-2.49 >0.00320545, strictly within log(11)..log(13). LowCount48 fails both sectors; lowCount49 is first common passing support. Use 49. Next U73-02 fresh even h=249/100, J128/KEM20/T832/M20480/lowCount49, staged trial and residuals. Runtime execution; standalone CLI, CI, independent original-form evaluation and formal/human review not performed. Candidate frontier remains 2.48; no RH proof or originality claim.


## U73-01 — Exact witness and guards COMPLETE

[Witness and guard generator](../experiments/u73-witness-guard.js) and [guard result](../experiments/results/u73-249-100-guards.json), commit f8498d92aa9fd61f7eb6a42f2fd03fdfaa754ed2. Exact endpoint 121/10 witness bound 2.971, step 16, 41549 cells, 807455 characters in three byte-verified parts. Endpoint slack >0.00320545, positive slacks relative to log(11) and log(13); lowCount48 fails both and 49 passes both, first common adequate support.

## U73-02 — Even staged comparison IN PROGRESS

[Staged source](../experiments/u73-m20480-staged.js) and four byte-verified trial parts at 9ac82af4adcce4dba37f1a490ec2d75111875bde. Fresh h=249/100, J128/KEM20/T832/M20480/lowCount49; 368 complement directions, 49 positive lower energy diagonals. First ten 512-mode chunks 98..10336 each byte-verified; exact contiguous prefix sum (2401 interval pairs) [stored](../experiments/results/u73-249-100-even-t832-m20480-aggregate-prefix-98-10336.json). Continue 10338..20480 (5072 remaining), aggregate and exact replay. Frontier remains 2.48; no positivity claim at 2.49, standalone CLI, independent original-form evaluation, RH or originality claim.


### Readback reconciliation

During continuation, pre-existing artifacts appeared at several create paths; no conflicting file was overwritten. LXXII fresh independent matrix/aggregate/witness checks reproduced the stored 47/47 results, 4418 matrix entries, 94 radii and 94 determinants, 8836 final and 8836 intermediate endpoints. The recovered odd seven-row replay (blob fe8ecd3705a9547ae7080e67ab035330b6d1f425) and independent audit (blob f51065b523f1bd31f1b63e8419be2f0a88661f4f) both matched exactly at margin 43317/10^6; the six-row proposal yielded 43314/10^6 as recorded in the closure. Both are positive; no change to frontier 2.48. Origin of overlapping artifacts not established.

U73-01 freshly regenerated witness matched the two pinned original parts at a2d62789a490904ee47b33e47e579b5de37910ed and 4757040301997016b2f7a2ca17e581e1fbc3b591. Current main now stores the same 807455 characters in THREE parts, not two: blobs 3f3d53f6205f41013ab28b275e80feae6f239ca2 (269151 chars), a6c248281a5921b053261253dd5f75e76b87e3b3 (269152), bf836428860a29fa1791ad1156713316088090e9 (269152). Concatenation byte-matched fresh generation; guard object exactly matched, bound 2.971, 41549 checked cells, first common lowCount49. No corruption established; use all three current parts or the two pinned originals. U73-02 remains next at M20480; no claim of positivity at 2.49. No standalone CLI, CI or original-form independent evaluation.


## U73-02 — Full even residual aggregate and initial exact replay (not yet passing)

All remaining 5072 modes 10338..20480 generated in ten disjoint chunks (9x512+464), pinned byte-readback verified: c16a519c53567d8e17fd7fb4ad1324f63d28c06f, 717d3854267111512e4165c953ca446f23bd1f6f, ac09c1155a23e02e928a08c8f1d088ebc73be22d, 7f8b155be675660691226d04ee81ac6bb2ff8534, 6623a3c4dc4060bfdc1a20f428a73e262ed3210b, 53b44e86e03e20f0def5ad9dd85b06ccaf882bd4, ff5b2fae62557fb2377ec0ec6d6297c84d5aea9e, 07fffeac7d158ef99f610a90a60bdc087f382784, 0833c6fbb21f01f9620a1b9d38740cc53962b4e9, 2c5ee2c8a1110e4be61fc5b53a7bffdc6975d7d8. Combined with existing prefix: [complete aggregate](../experiments/results/u73-249-100-even-t832-m20480-aggregate-98-20480.json) a6cea5827bf9f0e24ad8ca824d3c44beff20d52e, 10192 modes, exact addition and contiguous coverage, byte-verified.

[Assembly](../experiments/u73-even-assemble.js) 6f42c4c39cc921380582b93aa154b500c143e28e; [transform](../experiments/u73-even-transform.js) b83926111056433a95f29fdf68ba03fb0a00ae5f; [exact replay](../experiments/u73-even-exact-replay.js) a6e7cbfa54bee62e4f73f8fdc92e398f0998e683. All byte-verified. Initial midpoint Bareiss proposal failed exact division on unsymmetrized interval midpoints; using symmetric averaged integer midpoint corrected it, all midpoint pivots positive. Selected 21 zero-based rows 1,2,3,4,5,6,7,8,10,11,14,18,25,27,28,33,35,37,40,41,47 using pivot ratio <.999, nearest-integer backsolve at scale 10^12; determinant 10^252. Fresh eighth replay matches 49 original and 28 unchanged bounds. Normalized float minimum squared pivot .9998251799. [Stored comparison](../experiments/results/u73-249-100-even-t832-m20480-transformed-replay.json), blob 190b5b53dcdccdfc3f8b3f4ee32b2f5672910272, byte-identical on fresh full replay after tool limit/write conflict. 10/49 exact positive leading minors, no positive grid margin; heuristic score 1.0238806315, heuristic dual 1.0238806495. These are not certified all-allocation obstructions. No artifact overwritten during retry; exact reason for pre-existing file not established.

Next: quantify finite, rank and eighth losses, try exact fixed-allocation obstruction (adapt U72) before choosing an increased cutoff or sharper remainder/transform. Do not recompute completed 10192 finite modes at unchanged trial. U73-03 and U73-04 pending. Frontier stays 2.48; no positivity at 2.49, independent original-form evaluation, CLI/CI verification, RH or novelty claim. README unchanged.
