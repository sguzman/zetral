# Campaign LI — Direction-adapted Schur certification and precision diagnostics

Opened 2026-11-25 after ECR04. The exact complementary residual with matrix-valued asymptotic tail certifies physical h=1, but tested even comparisons beyond h=1 remain inconclusive. The relevant low directions have narrow margins; simply increasing mode counts or optimizing a floating residual cost did not resolve them.

- DSC01: derive paired exact upper/lower Schur bounds in rational transformed low directions, including direct cancellation-aware evaluation and rigorous direction-specific error accounting.
- DSC02: execute bounded diagnostics separating actual upper Rayleigh bounds, finite residual penalty, matrix tail and arithmetic enclosure effects at earlier inconclusive lengths.
- DSC03: attempt direction-adapted/high-precision certificate improvements only where those diagnostics justify them; preserve failures and compare cost.
- DSC04: audit and select the next productive direction.

No RH proof, restored negative eigenvalue, external submission, expenses or priority claim. Lead owns DSC01–04. Worker scopes unchanged; README unchanged.
