# RRC03 — Executed fine-lattice certificates approaching log6

2026-11-25. AI-assisted candidate computations, not independent mathematical/formal review. No RH proof, actual negative restored eigenvalue or priority claim.

## Extended rate and residual cutoffs

Source experiments/rrc03-extended-rate-residual.js commit c0a2b6e4712be3eff34105013a190b1e1b81ae39; raw experiments/results/rrc03-extended-rate-residual.json commit c69ea46897fd92c73c7b1e9c5906b0a86b0b0e47. Actual V8 execution, exact remote readbacks. Reproduce: node experiments/rrc03-extended-rate-residual.js.

Retain RRC02's T=192, ten low modes per parity, fixed-point trial selection and integer Bareiss sign check. Increase J from 1024 to 2048 and M from 2048 to 3072, keeping the 10^30 arithmetic lattice. The actual four shifts and exact 1.547 norm witness remain unchanged. Test h=7/4 and 89/50. Both odd tests pass; both even tests fail because the first upper form interval includes zero. At h=7/4 the first even upper interval is [-8753125449,12088495887]/10^30, row radius 41330325974/10^30. Despite a smaller analytic rate truncation error, arithmetic interval width is larger than the tiny energies, motivating finer fixed-point arithmetic rather than further increasing J. One possible mechanism is rounding of squared reciprocal intervals before multiplication by large rate squares; the experiment does not separately identify every rounding contribution.

## Finer lattice at fixed mode counts

Source experiments/rrc03-fine-lattice.js commit f3cc38d4954578b5ae48cb95945acdfa853487d4; raw experiments/results/rrc03-fine-lattice.json commit 693b4cc0a5d2446b3f591067afda9c0098daed98. Actual V8 execution, exact readbacks. Reproduce: node experiments/rrc03-fine-lattice.js.

Change ONLY the main calculation lattice to 10^42 (and the matching conversion for approximate diagnostics), with J=2048,M=3072,T=192, S=97 and ten low modes per parity unchanged. The embedded independent prime norm witness retains its original 10^30 lattice. Recompute the fixed-point trial solve, Jacobi basis, all form/residual/tail intervals and integer principal minors. The elementary series and their explicit remainder bounds are unchanged; increasing precision does not remove analytic series remainder terms. The square-root endpoints use exact integer square roots at the new scale.

Actual first lower pivot endpoints, divided by 10^42:
| h | parity | first pivot numerator | all 10 pivots positive |
| --- | --- | --- | --- |
| 7/4 | even | 1360094705854209285443 | yes |
| 7/4 | odd | 2232570717522104637366800 | yes |
| 89/50 | even | 48006814314452959715 | yes |
| 89/50 | odd | 275230839091884006083637 | yes |

At h=89/50 the first even directional upper interval is [191423955952768682951,198412764512699860028]/10^42; finite residual upper 33610925215763807652/10^42, leading tail upper 4111249558119878943/10^42, fourth block allowance 56623290586633080997/10^42, row radius 52540762153977132392/10^42. The first lower pivot is about 4.80e-23; it is NOT an ordinary eigenvalue lower bound. The approximate diagonally energy-scaled residual diagnostic is 0.742 in even and 0.558 in odd parity (not a certified generalized eigenvalue). The full component intervals, basis and rational trials are preserved. The exact positive principal minors and high coercivity and basis checks establish the candidate full fixed-window strict positivity at h=1.75 and 1.78, subject to the preceding mathematical derivations. The range increases from 1.70 to 1.78. No negative upper direction was established. No separate Node or Rust execution or independent verification. No literature-record claim. RRC03 complete.
