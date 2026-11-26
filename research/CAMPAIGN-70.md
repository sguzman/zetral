# Campaign LXX — Guarded extension to h=123/50

Candidate frontier 2.45 (LXIX); target 2.46.

## LXX01 — Exact witness and high guards

- Inherited exact rational refinement (source `experiments/tc01-post-log11-em.js`, prior commit 9dbd07d234a9ac39762750f858b7fc5b1e5cf365) yields window 47/4, bound 2897/1000, step 16, 55613 refined cells, 40934 partition points. Internally replays the winning witness inequality.
- Exact outward endpoint slack log(47/4)-123/50 exceeds 0.00385324059; within log(11)..log(13).
- [Driver](../experiments/lxx-witness-guard.js) a825cfddb1f26bfd2127602b997c9aeffe7dbb1f, byte-verified. Arithmetic executed from the inherited function and patched prefix in the tool runtime; standalone Node CLI not executed.
- Full witness initially committed as lxx-47-4-witness.json a672861dea0d5c2ad9d111aae1bf6090f776c319; read-back returned empty content for the 1062838-character file, so this single-file copy is not independently byte-verified. Canonical reconstructible copies [part 1](../experiments/results/lxx-47-4-witness-part1.txt) 46ecd0fde127c91fc535a6e7c6a07d06eaba7df9 and [part 2](../experiments/results/lxx-47-4-witness-part2.txt) b62e075e38f5076efd8228f2d08771b878839c37, each byte-verified and concatenation exactly matched regenerated JSON.
- [Guard results](../experiments/results/lxx-123-50-guards.json) 78202b2a2c03653c0ed6410df25776c4f00a4f7f, byte-verified. lowCount44 fails both parities; lowCount45 gives even n90 lower guard >0.00938759 and odd n91 >0.02043951. All tested lowCount45..50 positive. Select lowCount45 in both sectors; inherited monotone high-weight bound applies for larger n.

LXX01 complete within scoped arithmetic. Next LXX02: extend inherited generator witness regime without changing previous regimes; stage even trial generation at J128/KEM20/M12288/T832/lowCount45. Then exact finite residual chunks, factors, full-energy allocation, and comparison; odd and independent audit follow. Do not claim either sector passes at 2.46 until exact replay. No CI, independent original-form evaluation, RH or novelty claim. Worker scopes and README unchanged.
