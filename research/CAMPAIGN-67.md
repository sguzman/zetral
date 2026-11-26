# Campaign LXVII — Guarded extension to h=243/100

LXVI closed at candidate h=2.42. Target h=2.43, preserving existing regimes and worker scopes.

- RC01 COMPLETE: [57/5 rational witness](../experiments/results/rc01-57-5-witness.json), commit 7d52c9d85356493cdafedcc397c7d1b98206ef3c. Exact bound 2836/1000, 46527 checked refined cells, step 16. Outward log endpoint slack exceeds 0.0036133. [Generator](../experiments/rc01-post-log11-em.js) f08264023899602e01839147afe00aae0055c64d; [probe](../experiments/rc01-guard-probe.js) 8c652dbe2789994e4fa04b86fa5250378f6f71fb; [guard results](../experiments/results/rc01-243-100-guards.json) caa23f4fdf68cbb653399e6dad8867d7696e5a72. Exact byte readbacks. Mode 82 fails at lowCount=41 (g lower approx -0.010453); 83 passes; 84 and 85 pass (lower approx 0.013651 and 0.025488), and all 18 tested guards at lowCount 42–50 pass. Use lowCount=42 for both sectors.
- RC02 NEXT: even J128 KEM20 M10240 T768 lowCount=42 with all factors regenerated; optimize and exact replay. Diagnose any failure before further refinement. Narrower rational support is an alternative if needed.
- RC03: odd comparison after even passes; regenerate parity-specific factors and allocations.
- RC04: independent stored reconstruction, exact margins, scoped analytic audit, close or pivot.

Candidate frontier remains 2.42. No CI, independent original-form evaluation, RH or novelty claim. README unchanged.
