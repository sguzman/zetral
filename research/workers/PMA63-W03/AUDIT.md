# PMA63-W03 — Archimedean diagonal Euler–Maclaurin audit

Date: 2026-11-25 UTC. Baseline `78d511d` (Campaign LXIII LB03 refinement). This is an independent algebraic audit of the midpoint Euler–Maclaurin correction used for the archimedean diagonal in `experiments/lpa01-log11-regimes.js`. It is not a replay of LB comparisons and does not evaluate the full positivity claim.

## Tail being expanded

The exact digamma series used in DNB01 is
\[
\alpha(t)=\alpha_0+\sum_{j\ge0}\frac{2t^2}{r_j(r_j^2+t^2)},
\qquad r_j=2j+\tfrac12.
\]
For the omitted tail after `J` rates, set
\[
R=\frac{4J-1}{2},\qquad x=t^2,\qquad g_x(r)=\frac{x}{r(r^2+x)}.
\]
The midpoint grid is `r_J=R+1`, with spacing 2. The corresponding Euler–Maclaurin expansion for `2 sum g_x(r_j)` has terms
\[
\frac12\log(1+x/R^2)+\frac16g_x'(R)-\frac7{360}g_x'''(R)
+\frac{31}{15120}g_x^{(5)}(R)-\frac{127}{604800}g_x^{(7)}(R)
+\frac{511}{23950080}g_x^{(9)}(R)+\mathcal R.
\]
The coefficients follow from the midpoint Bernoulli values `B_{2m}(1/2)`, with step 2, and the integral is `int_R^infty g_x(r)dr = (1/2) log(1+x/R^2)`. Thus the displayed half-log is correctly normalized.

## Exact derivative check

Write `u=R^2`, `d=u+x`. Differentiating `g_x(r)=1/r-r/(r^2+x)` gives
\[
g_x'''(R)=-\frac6{u^2}+\frac{6(u^2-6ux+x^2)}{d^4},
\]
\[
g_x^{(5)}(R)=\frac{120(u^3-15u^2x+15ux^2-x^3)}{d^6}-\frac{120}{u^3},
\]
\[
g_x^{(7)}(R)=\frac{5040(u^4-28u^3x+70u^2x^2-28ux^3+x^4)}{d^8}-\frac{5040}{u^4},
\]
\[
g_x^{(9)}(R)=\frac{362880(u^5-45u^4x+210u^3x^2-210u^2x^3+45ux^4-x^5)}{d^{10}}-\frac{362880}{u^5}.
\]
These identities follow recursively from `(P/(r^2+x)^k)'=((r^2+x)P'-2krP)/(r^2+x)^(k+1)` and `g_x=1/r-r/(r^2+x)`.

Comparing with the `fa3`, `fa5`, `fa7`, and `fa9` expressions in the generator's diagonal-tail block (around lines 331–349) gives three discrepancies:

1. `fa3` has `+6ux` where `-6ux` is required. Hence `fa3_code-g'''=72ux/d^4>0` for `x>0`.
2. `fa5` has `-15ux^2+x^3` where `+15ux^2-x^3` is required. Hence
   `fa5_code-g^(5)=240x^2(x-15u)/d^6`.
3. `fa7` is the correct derivative, but its coefficient in `diag` is `+127/604800`; the midpoint Euler–Maclaurin coefficient is `-127/604800`.

`fa9` and its coefficient agree with the expansion. The leading integral and first-derivative terms also agree.

Combining the three discrepancies, the exact difference between the implemented center and the correctly truncated center is
\[
C_{\rm code}-C_{\rm EM}
=-\frac75\frac{ux}{d^4}
+\frac{31}{63}\frac{x^2(x-15u)}{d^6}
+\frac{127}{302400}g_x^{(7)}(R).
\]
This isolates the sign of the bias without asymptotic notation.

## Direction and consequence at the campaign cutoffs

For Campaign LXIII parameters `h=239/100`, `T=768`, and `J>=4096` (covering LB02 at `J=4096` and LB03 at `J=8192`), only `0<=n<=T` can enter a diagonal finite-block entry. Since `h>2`, `pi<4`, and `R>8191`,
\[
0\le x=\omega_n^2 < (4\cdot768/2)^2 < R^2=u,
\]
so in particular `x<15u`. On this range the first two discrepancies lower the code's diagonal center: the `fa3` coefficient is negative and `fa3_code>fa3`; the `fa5` coefficient is positive and `fa5_code<=fa5`. Also `g_x^(7)(R)<0` for `x>0`, since
\[
\frac{d^8}{u^4}-\frac{u^4-28u^3x+70u^2x^2-28ux^3+x^4}{u^4}
=t(36-42t+84t^2+69t^3+56t^4+28t^5+8t^6+t^7)>0,
\quad t=x/u,
\]
and therefore the wrong positive `fa7` coefficient also lowers the code center. At `x=0`, all these correction terms vanish. Thus for these cutoffs the implemented center is a one-sided underestimate of the correctly truncated Euler–Maclaurin center, before the symmetric remainder allowance is applied.

This distinction matters: `widen(center,error)` is **not** a two-sided interval enclosure of the exact archimedean diagonal, because the omitted algebraic center bias is of order `x/R^6`, while the stated symmetric remainder is `O(x/R^14)`. However, the audited discrepancies have a downward sign at the LB02/LB03 support; consequently the lower endpoint `center-error` can still be a valid lower bound for that diagonal if the inherited symmetric Euler–Maclaurin remainder estimate is valid. This note does not independently verify that remainder estimate or downstream matrix lower-bound propagation. Any reported two-sided interval widths and diagnostics based on this `widen` call are not valid enclosures as written.

## Twelfth-order remainder and lower-bound propagation

The inherited `A_1-A_2` trapezoid identity applies Euler–Maclaurin with steps 1 and 2. Using the periodic Bernoulli remainder bound `|B_12({t})|<=|B_12|`, the two remainders add to at most
\[
C_{12}\int_R^\infty |f^{(12)}(r)|dr,
\qquad C_{12}=\frac{2(1+2^{11})|B_{12}|}{12!}.
\]
This is the constant recorded in AIR03/ATM03. For `g_x(r)=x/[r(r^2+x)]`, exact differentiation gives
\[
g_x^{(12)}(r)=12!\frac{x}{r^{15}}\frac{p(x/r^2)}{(1+x/r^2)^{13}},
\]
where
\[
p(t)=91-637t+2002t^2-572t^3+1573t^4+1703t^5+1716t^6+1287t^7+715t^8+286t^9+78t^{10}+13t^{11}+t^{12}.
\]
Coefficientwise, `|p(t)|<=91(1+t)^13` for `t>=0`: each absolute coefficient is bounded by the corresponding coefficient of `91(1+t)^13`. Hence
\[
|g_x^{(12)}(r)|\le \frac{91\,12!\,x}{r^{15}}=\frac{14!x}{2r^{15}}.
\]
After integration and the factor 2 in the digamma series, the resulting diagonal remainder is exactly bounded by
\[
2C_{12}\int_R^\infty\frac{14!x}{2r^{15}}dr
=\frac{36812334}{2730}\frac{x}{R^{14}},
\]
the generator's stated error. Thus the twelfth-order error constant is consistent with the combined trapezoid remainder and this derivative majorant.

For each diagonal frequency, write the exact diagonal as `C_EM + rho`, with `|rho|<=epsilon`, and the implemented center as `C_code=C_EM-delta`, where the explicit bias above gives `delta>=0` at the campaign support. Therefore the returned lower endpoint obeys
\[
C_{\rm code}-\epsilon=C_{\rm EM}-\delta-\epsilon\le C_{\rm EM}+\rho.
\]
The returned upper endpoint need not be an upper bound. In the generator the archimedean diagonal is added only when `n===k`; it is diagonal in the Neumann basis. If a downstream interval matrix routine needs a two-sided input interval, clip each exact diagonal value to `[lo,hi]`, where `lo` is the returned lower endpoint. The clipped matrix lies in the reported entry intervals and is Loewner-below the exact matrix, because each removed diagonal excess is nonnegative. Congruence by the stored rational coefficient matrix preserves this order. The row-radius lower-matrix step then applies to the clipped matrix. Consequently this bug invalidates the reported two-sided diagonal/derived interval widths, but it need not invalidate a strict positivity lower comparison, conditional on the other matrix intervals, the tail bounds, and the exact rational elimination being valid. This audit does not independently certify those other ingredients or reproduce any LB comparison.

## Required correction and scope

For true intervals, change the `fa3` middle sign, change the two `fa5` middle signs, and use a negative `fa7` coefficient. Then independently verify the twelfth-order remainder bound and re-run/replay affected raw comparisons before relying on their interval diagnostics. This audit did not edit the lead-owned generator, rerun any full comparison, or establish positivity/negativity of the restored form. It identifies an algebraic mismatch in a component of the candidate's comparison data, not a counterexample to the underlying operator.
