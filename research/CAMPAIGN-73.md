# Campaign LXXIII — Guarded extension to h=249/100

Candidate frontier 2.48 (LXXII closed at 6d2524ed161f3ce122105e3f8ab24fe591f8046a). Target h=2.49; rational endpoint 121/10 within the eight-shift regime below log(13).

- U73-01: regenerate exact rational endpoint-121/10 eight-shift witness, endpoint slacks and high guards; choose first common adequate low support.
- U73-02: regenerate even staged trial and residuals at J128/KEM20/T832/M20480, exact midpoint integer decorrelation and allocation replay. Refine based on measured bottlenecks, not extrapolation.
- U73-03: odd counterpart, require strictly positive fixed-energy grid margin.
- U73-04: independent stored reconstruction, witness and guard audit, exact minors and adjacent grid boundaries; close or pivot.

Lead owns campaign; worker scopes unchanged. No independent original-form evaluation, CI, RH proof or originality claim implied. README unchanged.


## U73-01 — Exact witness and guards COMPLETE

[Source](../experiments/u73-witness-guard.js) be1bdc36a9e0fd30f38822877d3a6d5e677d5e7c. Exact rational endpoint 121/10 witness bound 2971/1000, step 16, 41549 checked cells; 807455 serialized characters across two byte-verified parts a2d62789a490904ee47b33e47e579b5de37910ed and 4757040301997016b2f7a2ca17e581e1fbc3b591. [Guard result](../experiments/results/u73-249-100-guards.json) 9338b793dc4f92265a23180122dc73cf2a4cc608 byte-verified. Endpoint slack log(12.1)-2.49 >0.00320545, strictly within log(11)..log(13). LowCount48 fails both sectors; lowCount49 is first common passing support. Use 49. Next U73-02 fresh even h=249/100, J128/KEM20/T832/M20480/lowCount49, staged trial and residuals. Runtime execution; standalone CLI, CI, independent original-form evaluation and formal/human review not performed. Candidate frontier remains 2.48; no RH proof or originality claim.
