# Campaign LXIX — Guarded extension to h=49/20

LXVIII closed at candidate h=2.44, margins 37523/10^6 even and 73952/10^6 odd. Target h=2.45.

- TC01 COMPLETE: [58/5 rational witness](../experiments/results/tc01-58-5-witness.json) c11aa25a3645be49490a4d49ee6fdcfe8dcb9828, bound 2873/1000, 52551 refined cells, step 16. Outward log endpoint slack exceeds 0.00100509. [Generator](../experiments/tc01-post-log11-em.js) 9dbd07d234a9ac39762750f858b7fc5b1e5cf365 preserves earlier regimes; [probe](../experiments/tc01-guard-probe.js) a378bef9f0120a63163e43379ca82f9b9efb5a15; [guards](../experiments/results/tc01-49-20-guards.json) d111c0a98bcb46e3ec791bfbea737fe537fa1041. All byte-verified. Modes 82–86 fail; 87 passes; all 14 tested guards at lowCount44–50 pass. Use lowCount44 for both sectors.
- TC02 ACTIVE: even J128 KEM20 M12288 T768 lowCount44, regenerate all factors and allocations, exact comparison and measured refinement if needed.
- TC03: odd comparison after even passes.
- TC04: independent reconstruction, scoped audit, close or pivot.

Candidate frontier remains 2.44. No CI, independent original-form evaluation, RH or novelty claim. README and worker scopes unchanged.

## TC02 — First even comparison fails at M12288

J128 KEM20 M12288 T768 lowCount44. Raw compact JSON (3,109,269 characters) reconstructs by concatenating `experiments/results/tc02-49-20-even-m12288-raw-part{1..6}.txt` in numerical order. All six parts byte-verified: 6345e6176b133839f99ba3a35800ecca10951913, be1cc752360ee50d723ffb05e161af64dc0883f3, b5e0132cbf7e9f70cc65c55d8ee8b386ac3d7226, 722e443bfc83eb3ab8b7bece0ba45a00cb81af26, 6b9feef756fb63e42f3bf7c952c5cffee160423a, 3095bc4c2c03073318d28d9051e02f4740d2311a. Factors e280bce3da919096f00c8d6e9e22af63a8e5be7b, joint dc9c734590127e0cf699324061b7ec0085a23b34, replay de0c9d5a8ca5c3d0bfda979b7a3cdb2daccab49c, diagnostics 45136ef1ba82a513a7927089a61128b337d57b14; byte-verified. 44 positive energy endpoints; baseline and all eight optimized candidates 1/44 exact positive minors. Heuristic residual 1.0217085825194685. Dominant approximate normalized residual direction: finite loss 1.0094633857481916, summed rank losses approximately 0.01219034, eighth loss 0.0000548553. Eighth allocation share only 0.4480113%; increasing M alone is not the indicated remedy. These are float diagnostics, not an exact eigenvector certificate.

Next TC02 refinement: improve finite residual by extending trial cutoff T from 768 to 1024 (hold J128 KEM20 M12288 lowCount44 fixed; regenerate components, factors and allocations). If insufficient, measure the sensitivity to complement guard/low support and consider a tighter arithmetic witness or trial optimization. No refined result yet; odd pending; frontier 2.44.
