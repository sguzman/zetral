# Campaign LXXI — Guarded extension to h=247/100

Candidate frontier 2.46 (LXX closed); target 2.47. Use the previous proven cutoff strategy, not repeated optimization of obstructed fixed comparisons.

- U71-01: exact 119/10 eight-shift witness, outward endpoint and high guards, choose smallest adequate common low support.
- U71-02: staged even trial at J128/KEM20/M16384/T832 initially, regenerate h-dependent residuals and factors. Rational decorrelation and exact comparison; refine M/T or remainder if warranted.
- U71-03: odd-sector counterpart after even candidate passes.
- U71-04: independent stored reconstruction, grid margin and scoped analytic audit; close or pivot.

Lead owns campaign; existing worker scopes unchanged. No independent original-form evaluation, CI, RH or novelty claim implied.

## U71-01 COMPLETE — Exact witness and outward guards

[Driver](../experiments/u71-witness-guard.js) 7ebf34da8cd4c9686dabed8220e23e0c4d78cad4 preserves older witness regimes; exact rational 119/10 witness bound 2.923, step 16, 58855 checked cells. Canonical compact witness 1115799 bytes in three pinned byte-verified parts `u71-119-10-witness-part{1..3}.txt`: 4492b4444ccea898cd31be05dd3c2c8c26c2842b, 61a7fb2dd19682d99dae191abe5b320bb7fe45cb, 0e0d2bd7a364e2d15dbfbb790a93567a82e0f94c. [Guard output](../experiments/results/u71-247-100-guards.json) 1c767d0e187980d58b4e9f84036fc55ba579fc3b, byte-verified: log(119/10)-247/100 >0.0065384, within log(11)..log(13). lowCount44 and 45 fail both parities; lowCount46 first passes both (n92 even, n93 odd). Use lowCount46. Arithmetic executed in tool runtime; standalone CLI not run. Next U71-02 even J128/KEM20/M16384/T832, regenerate h-dependent trial/residuals and factors. Frontier 2.46; no CI, independent original-form evaluation, RH or novelty claim.
