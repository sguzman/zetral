# CAC03 — Executed consistent cell-coupling test and sharper prime bound

2026-11-25. AI-assisted candidate computation, not independently reviewed. Uses CAC01–02 and BFA03. No actual negative restored eigenvalue, RH proof or full positivity certificate.

## 1. Exact single-prime norm improvement

At a=1/2 the only prime shift is s=log 2, with b=log 2/sqrt 2. Since 1/2<s<1, the two end strips of width 1-s are disjoint. The shift T_s identifies one end strip isometrically with the other; on their direct sum T_s+T_-s is the two-by-two flip and it vanishes on the middle strip. Therefore ||P||=b exactly, rather than the triangle bound 2b. Reflection preserves P. The even complement bound in CAC01 increases from d=log(m/2)-3/2-2b to d'=d+b for the equal m-cell partition. The full bound retains the small negative pole correction. No other changes to CAC01's derivation are required.

## 2. Actual scalar direction of the consistent finite Schur matrix

For the unit constant u on the length-one interval let Q_m be projection onto the m equal cells. The scalar of the CAC02 sufficient lower matrix on the coefficient vector representing u is
    L_m=<Au,u>-||(I-Q_m)Au||²/d,
where d is the certified even complement bound (the constant is even and partitions symmetric). The same expression with d' uses the exact prime norm. This is a direction of the actual m-cell matrix, NOT a two-cell moment combined with a different partition. If L_m<0 the sufficient lower matrix is not positive definite; it says nothing about negativity of the exact Schur complement.

The experiment experiments/cac03-consistent-cell-coupling.js (commit 1e5b06ebeda858eb92cf8b7ff078c5e7e0a9c56b) was actually executed in V8 and exactly read back. It uses the refined BFA03 lift at N=32 and degree 30, with 3072 quadrature cells aligned with all three tested partitions. Its interval arithmetic, kernel Taylor error, and logarithmic primitives are those of BFA03. For each physical half-cell integrate the lifted action and its square with outward rounding; sum contiguous subcells into each partition cell. Reflection supplies the other half. For the lifted action z,
    ||Q_m z||²=2m sum_(left cells J) |int_J z|²,
    ||(I-Q_m)z||²=||z||²-||Q_m z||².
The lifted action norm error epsilon transfers to the projected residual norm by contraction, then square the nonnegative endpoints. First-moment error is at most epsilon. This directly encloses the exact coupling on the chosen coefficient vector for each partition. No full block matrix or continuum eigenvalue computed. No separate Node process reproduction or Rust run claimed.

Actual integer endpoints over 10^18:
```json
{"scale":"1000000000000000000","M":3072,"N":32,"first":["86579171916789893","89545457553767983"],"secondLift":["144063745147792562","146259623515709080"],"epsilonUpper":"1104206228257657","rows":[{"m":24,"delta":["4648506319453002","4648506319453276"],"sharperDelta":["494777578053726583","494777578053726895"],"projectedLift":["118876753566894528","119083397317553904"],"coupling":["24632523702986853","27749532239179383"],"crudeTest":["-5882979721238532262","-5209473627330245665"],"sharpTest":["30494309808980037","39760413130610924"]},{"m":32,"delta":["292330578771233922","292330578771234202"],"sharperDelta":["782459650505507503","782459650505507821"],"projectedLift":["126341691813597184","126689980966686208"],"coupling":["17083893544182424","20230826217068996"],"crudeTest":["17373869132161187","31105134218481287"],"sharpTest":["60723747673509252","67711879894977042"]},{"m":64,"delta":["985477759331179212","985477759331179543"],"sharperDelta":["1475606831065452793","1475606831065453162"],"projectedLift":["134973940569661696","135270634985362816"],"coupling":["8587243097336898","11521510916204521"],"crudeTest":["74887877205051393","80831670747290629"],"sharpTest":["78771190363949367","83725992018265867"]}]}
```
The crude 24-cell sufficient matrix is rigorously NOT positive definite: its constant-direction value is below -5.20. With the sharper prime bound the same direction is strictly positive, and at 32 and 64 cells even the crude direction is positive. These passing scalar tests do not establish that the full matrix is positive. The test is an executed obstruction/feasibility diagnostic, not a completed finite-cell full spectral certificate. Reproduce: node experiments/cac03-consistent-cell-coupling.js.

The next task is to compute the entire finite matrix with the same partition, or to identify a precise failure of that calculation's sufficient bound. Do not repeat the already executed constant-direction test.
