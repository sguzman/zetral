# Campaign LXXII — Guarded extension to h=62/25

Candidate frontier 2.47 (LXXI closed at fa10fc8a21e04b01c8bf50a089f26d0f0b892fc7). Target h=2.48; rational endpoint 12 within the eight-shift regime below log(13).

- U72-01: regenerate exact rational endpoint-12 eight-shift witness, outward endpoint and high guards; choose the first common adequate low support.
- U72-02: regenerate even staged trial and residuals at J128/KEM20, initially T832/M16384; optimize a rational decorrelating transform and exact allocation. Refine cutoff or trial only on measured evidence.
- U72-03: odd-sector counterpart, using a positive fixed-energy grid margin; do not extrapolate LXXI's exceptionally small odd margin.
- U72-04: independent stored reconstruction, witness and guard audit, all exact minors and adjacent margin boundaries; close or pivot.

Lead owns campaign; worker scopes unchanged. No independent original-form evaluation, CI, RH proof or novelty claim implied. README unchanged.


## U72-01 — Exact witness and guards COMPLETE

[Source](../experiments/u72-witness-guard.js) e1e425ba5bd70e153f7fa1e045025ed010d1b0a5. Exact endpoint-12 witness bound 2930/1000, step 15, 29897 checked cells, serialized witness 551338 characters across two byte-verified parts: 716f71e5e3826a8098bb85a4344a78812fa6004d and 25f594dd5e9718db9626b2c3d8653a963328ea6e. [Guard result](../experiments/results/u72-62-25-guards.json) a4d8413b1e1686962f7225e92309f2d2cfb750be, byte-verified. Endpoint slack log(12)-2.48 >0.00490664, within log(11)..log(13). LowCount46 fails even (odd passes); lowCount47 passes both, first common adequate support. Use lowCount47. Runtime execution used inherited interval generator with preserved previous regimes, not standalone CLI. Next U72-02 even h=62/25, J128/KEM20/T832/M16384/lowCount47, regenerate all trial and residual artifacts and exact comparisons. Frontier remains 2.47; no comparison yet at 2.48. No CI, independent original-form evaluation, RH proof or novelty claim.
