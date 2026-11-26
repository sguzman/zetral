# Campaign LXIX — Guarded extension to h=49/20

LXVIII closed at candidate h=2.44, margins 37523/10^6 even and 73952/10^6 odd. Target h=2.45.

- TC01 COMPLETE: [58/5 rational witness](../experiments/results/tc01-58-5-witness.json) c11aa25a3645be49490a4d49ee6fdcfe8dcb9828, bound 2873/1000, 52551 refined cells, step 16. Outward log endpoint slack exceeds 0.00100509. [Generator](../experiments/tc01-post-log11-em.js) 9dbd07d234a9ac39762750f858b7fc5b1e5cf365 preserves earlier regimes; [probe](../experiments/tc01-guard-probe.js) a378bef9f0120a63163e43379ca82f9b9efb5a15; [guards](../experiments/results/tc01-49-20-guards.json) d111c0a98bcb46e3ec791bfbea737fe537fa1041. All byte-verified. Modes 82–86 fail; 87 passes; all 14 tested guards at lowCount44–50 pass. Use lowCount44 for both sectors.
- TC02 NEXT: even J128 KEM20 M12288 T768 lowCount44, regenerate all factors and allocations, exact comparison and measured refinement if needed.
- TC03: odd comparison after even passes.
- TC04: independent reconstruction, scoped audit, close or pivot.

Candidate frontier remains 2.44. No CI, independent original-form evaluation, RH or novelty claim. README and worker scopes unchanged.
