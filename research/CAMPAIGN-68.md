# Campaign LXVIII — Guarded extension to h=61/25

LXVII closed at candidate h=2.43, with fixed-energy margins 8828/10^6 even and 118887/10^6 odd. Target h=2.44.

- SC01 COMPLETE: [23/2 rational witness](../experiments/results/sc01-23-2-witness.json) 715208e2cd67e7db0eac5d918397e516e79c139c, bound 2851/1000, 49219 refined cells, step 16. Outward endpoint slack exceeds 0.0023470. [Generator](../experiments/sc01-post-log11-em.js) 3522b804a8715c02ac0a20a938cdd77681f0ae7d preserves prior regimes; [probe](../experiments/sc01-guard-probe.js) 4d6bb468de0d46948711b89d0de8e149b7bafd7; [guards](../experiments/results/sc01-61-25-guards.json) 0aac8665105fbdf317af218b0603fe000a7ddc90. All byte-verified. Modes 82,83,84 fail; modes 85 onward tested positive, including all 16 guards at cutoffs 43–50. Use lowCount43 for both sectors.
- SC02 NEXT: even J128 KEM20 M10240 T768 lowCount43; regenerate factors and allocations, exact replay, diagnose residual components and refine if necessary. Use split raw artifacts and blob readbacks.
- SC03: odd comparison after even passes.
- SC04: independent reconstruction, scoped audit, close or pivot.

Candidate frontier remains 2.43. No CI, original-form audit, RH or novelty claim. Worker scopes and README unchanged.
