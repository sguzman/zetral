# BC01-W01 — independent endpoint witness audit

Date: 2026-11-25 UTC. Baseline: `7029f3b629cd12e0ad96f1c76366a415736638ff` (Campaign LXIV BC03). AI-assisted exact-arithmetic audit; not formal verification, an independent original-form derivation, or a spectral positivity result.

## Question and result

Does the pinned piecewise-constant weight on `(1,111/10)` satisfy the claimed eight-shift Schur inequality under rigorously valid rational upper bounds for its coefficients?

**Result: yes.** A separate Python standard-library verifier parses the pinned witness, certifies each coefficient interval by a separately coded rational atanh series and integer square-root bounds, reconstructs the complete shifted-cell refinement with `Fraction`, and checks the inequality cell by cell. All 33,139 cells pass. The largest exact coefficient ratio is

\[
\frac{345142926369}{125000000000}=2.761143410952 < \frac{2762}{1000}.
\]

The largest rounded numerator `ceil(sum_j a_j(W(mx)+W(x/m))/W(x))` is 2762. Its reported cell is `(176/175,566433/563200)`. The largest unrounded ratio occurs on `(26411/26244,118400/117649)`.

## Exact verification method

The stored witness defines the shift multipliers
\[
 m\in\{2,3,4,5,7,8,9,11\},\qquad
 a_j\le (491,635,347,720,736,246,367,724)_j/1000.
\]
For each prime-power shift, the verifier independently encloses `log(p)` using
\[
2\sum_{j=0}^{39}\frac{r^{2j+1}}{2j+1}
\le \log y \le
2\sum_{j=0}^{39}\frac{r^{2j+1}}{2j+1}
+\frac{2r^{81}}{81(1-r^2)},\quad r=\frac{y-1}{y+1},\quad 1\le y<2,
\]
after exact dyadic reduction `p=2^k y`, including a separately bounded `log(2)`. Positive rational interval division and `floor(sqrt(n*10^60))/10^30 < sqrt(n) < (floor(sqrt(n*10^60))+1)/10^30` give enclosing intervals for `log(p)/sqrt(m)` (with the prime-power identities for 4, 8, and 9). All eight enclosures lie inside the stored `10^-30` intervals, and each interval's upper endpoint is no larger than its displayed rational coefficient.

The verifier reads the positive rational step weight `W` and base partition, inserts every in-window image `x*m` and `x/m` of every base endpoint for all eight shifts, sorts these exact rational breakpoints, and evaluates at a midpoint of each resulting open cell. On each cell all nine step-weight values are constant. It checks exactly, using integers,
\[
\sum_j c_j\bigl(W(mx)+W(x/m)\bigr)\le 2762 W(x),
\]
where `c_j` are the integer numerators above. This proves the Schur bound `C=2762/1000` for the rational upper coefficients. The points omitted at interval endpoints form a null set for the integral Schur test.

Reproduce from repository root:

```sh
python3 experiments/worker-BC01-W01/verify_witness.py
```

Output: 8/8 independent coefficient-enclosure checks; 24,461 base cells; 33,139 refined cells; maximum rounded numerator 2762; exact Schur inequalities pass.

## Pinned inputs and limits

- Campaign source commit `c6e1c0d8eea15272d7bed8f234200791949f89bd`; source blob `089b18b75c3d84aa71e34f1b0623629ced836d96` (`experiments/bc01-eleven-witness.js`).
- Raw-result commit `eb0a0e4da51d390cb7fa7d5544eade824813467e`; raw blob `79b66f4e0d6f0b6b163bd30652660ada12f19089` (`experiments/results/bc01-endpoint-111-10-witness.json`).
- Independent verifier: `experiments/worker-BC01-W01/verify_witness.py`.

This verifies the stored finite local Schur witness and coefficient upper bounds. It does not independently derive the inherited operator normalization or prove downstream tail formulas, the full quadratic-form comparison, either parity matrix, RH, or a new candidate frontier. No discrepancy was found in this scope.
