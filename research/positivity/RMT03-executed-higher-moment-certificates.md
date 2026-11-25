# RMT03 — Executed rational-moment positivity certificates

2026-11-25. AI-assisted candidate computation; no independent mathematical/formal verification, RH proof, actual negative restored eigenvalue or priority claim.

## Third signed moment with fourth-order remainder

Source experiments/rmt03-rational-moment-tail.js commit f7d9d03493ba89055905a148b816507a88fd33bc; raw experiments/results/rmt03-rational-moment-tail.json commit af7a26985100b76ea5b95d611cce1ae900fcd4a7. Both exactly read back after actual V8 execution. Reproduce: node experiments/rmt03-rational-moment-tail.js.

Use eight low modes per parity, T=96, M=1024, J=1024, outward scale 10^24, full three-shift entries and verified prime norm upper 1.221 of PGF01–02. The rational congruence and exact high trials are chosen from midpoint arithmetic and frozen at denominator 10^12. Replace the previous scalar third-order remainder by the exact common signed third moment S2 rank-one term and fourth-order directional allowance of RMT01–02. Verify every form Gram, residual, tail and LDL pivot by outward BigInt.

Actual h=3/2,31/20,8/5: odd passes all three, even fails all three lower comparisons. At h=3/2 the first even individual lower endpoint is positive (1491858556/10^24); fourth directional remainder upper 29663/10^24 and third rank-one directional term upper 21791/10^24. Its row arithmetic radius 9211375862/10^24 overwhelms the small positive margin. At h=31/20 and 8/5 the first even upper intervals contain zero. No negative certified upper direction or negative actual eigenvalue. The new tail addresses the earlier third-order obstruction but reveals the next arithmetic limitation.

## Sixth-order rate enclosure

Source experiments/rmt03-sixth-order-rate.js commit 17c038337321db38856d5ca9c56656d826cff58d; raw experiments/results/rmt03-sixth-order-rate.json commit b44d96e97d2eef18954ef0b19dede0e699526e1e. Both exactly read back after actual V8 execution. Reproduce: node experiments/rmt03-sixth-order-rate.js.

Retain all J,T,M, parity and physical prime parameters. Use RMT02's sixth-order midpoint rate enclosures, refined harmonic gamma interval, 10^30 fixed-point scale, longer elementary series and checked integer square roots. Reselect and reverify rational trials and basis with the improved intervals. All six parity tests now pass, at h=3/2,31/20,8/5. At h=3/2 the first even row radius decreases from about 9.21e-15 to about 1.11e-20 (different reselected rational trial/basis); first lower pivot 3251193002616012/10^30. At h=31/20 the first even lower pivot is 236887999409768/10^30.

At h=8/5 the exact first even upper form interval is [19121814749911,19125392980851]/10^30, finite residual interval [3092024700038,3092024700714]/10^30, leading tail upper 514663691710/10^30, second 13025626941/10^30, third 243652075/10^30, fourth block allowance 652390267190/10^30, and row arithmetic radius 10794671554/10^30. All eight even and eight odd lower LDL pivots pass; first even lower endpoint 14840461255536/10^30, first odd 13831432615624558/10^30. The high weights and rational basis invertibility checks are strictly positive. These pivots are not ordinary eigenvalue lower bounds of the same magnitude.

Under the candidate mathematical derivations of DSC01/ECR01/PGF01/RMT01–02, the entire restored fixed-window operator is strictly positive at each tested length. Longest internal candidate range increases from 1.45 to 1.6. This remains below log5, and is NOT a literature-record claim (earlier actual abstract search arXiv:2608.24827 reported support length 1.6, without an independently checked normalization comparison). All raw intervals, direction bases and rational trials preserved. No independent verification, separate Node/Rust reproduction or RH proof. The three-shift code cannot be extrapolated beyond log5. RMT03 complete.
