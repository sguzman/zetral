# ATM02 — Matched adaptive tail window extension

2026-11-25. Candidate full restored-form positivity, conditional on original-form normalization. Actual V8 runs, no separate Node/Rust runtime or independent human/formal review.

At h=9/4 use J=6144,T=576,M=6656,S=289,30 low modes per parity, 10^54 lattice, actual shifts through 9, norm bound 2.455 from the 19/2 rational witness and ATM01 shares. Execute full interval comparison with all finite high rows, seven signed rank matrices and eighth diagonal allowance.
- even experiments/results/atm02-9-4-even.json commit 4eee0cddafbde1ae0df9a8c47f30f65b55ca74f5, 30/30 positive principal minors, first numerator 32624706111925 on lattice 10^54. First upper interval [78016605617637,79523281408027], row radius 36222577214896. Approximate relative residual diagnostic 0.85850.
- odd experiments/results/atm02-9-4-odd.json commit 46de1950e67c73a30cb4461563bc958a6d38e7aa, 30/30 positive principal minors, first numerator 282058381260467239, approximate relative diagnostic 0.79441.

Control: identical even h, cutoffs and witness but old dyadic allocation. Actual V8 experiments/results/atm02-9-4-even-old.json 4d4a51d83520e1953edf556dff190185a09010c4, first six minors positive and seventh nonpositive; first numerator 31588849269907; approximate relative diagnostic 0.97424. Thus the new allocation turns an inconclusive comparison into a passing comparison at the same parameters. A failed comparison does not establish negative actual spectrum. The numerator values are not ordinary eigenvalue gaps. All raw files exact remote contents endpoint readbacks. Reproduce node experiments/atm01-adaptive-tail-regimes.js --even 9 4 6144 6656 576 30 (and --odd); add --old-allocation for the control.

The candidate frontier advances from 2.2 to 2.25. The even first row arithmetic radius now consumes a substantial fraction of its first upper energy; further bounded extension should monitor arithmetic precision rather than assume the new allocation alone suffices. ATM02 remains active for a bounded follow-up near h=2.3 if justified. No RH proof, actual negative spectrum, literature record or priority claim. README unchanged.
