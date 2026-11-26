# Campaign LXVIII — Guarded extension to h=61/25

LXVII closed at candidate h=2.43, with fixed-energy margins 8828/10^6 even and 118887/10^6 odd. Target h=2.44.

- SC01 COMPLETE: [23/2 rational witness](../experiments/results/sc01-23-2-witness.json) 715208e2cd67e7db0eac5d918397e516e79c139c, bound 2851/1000, 49219 refined cells, step 16. Outward endpoint slack exceeds 0.0023470. [Generator](../experiments/sc01-post-log11-em.js) 3522b804a8715c02ac0a20a938cdd77681f0ae7d preserves prior regimes; [probe](../experiments/sc01-guard-probe.js) 4d6bb468de0d46948711b89d0de8e149b7bafd7; [guards](../experiments/results/sc01-61-25-guards.json) 0aac8665105fbdf317af218b0603fe000a7ddc90. All byte-verified. Modes 82,83,84 fail; modes 85 onward tested positive, including all 16 guards at cutoffs 43–50. Use lowCount43 for both sectors.
- SC02 ACTIVE: even J128 KEM20 M10240 T768 lowCount43; regenerate factors and allocations, exact replay, diagnose residual components and refine if necessary. Use split raw artifacts and blob readbacks.
- SC03: odd comparison after even passes.
- SC04: independent reconstruction, scoped audit, close or pivot.

Candidate frontier remains 2.43. No CI, original-form audit, RH or novelty claim. Worker scopes and README unchanged.

## SC02 — First even comparison fails; measured refinement

J128 KEM20 M10240 T768 lowCount43. Raw compact JSON (2,988,151 characters) reconstructs by concatenating `experiments/results/sc02-61-25-even-m10240-raw-part{1..5}.txt` in order; byte-verified commits 7474adc1c13f246b72c2e18114ae6dccffb5df3c, e8206f6beef3d85158e657fd28965be8075efda5, 6a0d8ee868989761116d9c21cdc0a6f73cffa001, 3498a950251aafb6f475d4ba8cc23f9fba015cf4, b4c51e99e439f8c7e184c5a27b0a92e02de95027. Constant factors 04a56171e3e3e2c208484646ea2518e740358f15; joint 36fd98851525b511396021abe32d2bf2f357907b, exact replay ad3516f1f0e305a7dc883fbd6370f6c043a32524, diagnostics 91304588090fd18de9cf3c44ca251752fa7ab113, all byte-verified. 43 positive energy endpoints, baseline 0/43, all eight optimized allocations stop at eighth minor (7/43); heuristic residual 1.0700983727218383. Direction zero approximate finite loss 0.105653, rank sum 0.006832, eighth loss 0.479452; 71.3838% of joint allocation to eighth term. These are float diagnostics, not an eigenvector certificate. Next SC02 targeted M12288 with unchanged J/KEM/T/lowCount, regenerate all factors and weights, exact comparison. Larger M targets inherited squared eighth amplitude bound proportional to (M-1)^(-15)/g(M+1) with recomputed constants. Odd pending; frontier 2.43.
