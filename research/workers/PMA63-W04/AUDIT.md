# PMA63-W04 — exponential rate tail and fixed-point exponential audit

Status: completed scoped analytic audit; ready for lead review.

Baseline: `045cc3d2149731c2531c702261803b0b4e1bc36f` (LXIII active). Scope is the rate-tail allowance and `expneg`/`expAny` in `experiments/lpa01-log11-regimes.js`; this does not audit the remaining matrix construction or certify the campaign comparison.

## Question and conclusion

Does `Et` enclose the omitted exponentially weighted rate sums, and do `expneg` and `expAny` enclose (e^{-x}) for their uses in this generator? Under the source's fixed-point interval operations, the mathematical arguments below establish both claims for the positive inputs used here. No generator run or independent arithmetic implementation was performed.

## Geometric tail

The rate sequence is (r_j=(4j+1)/2=2j+1/2), so (r_{J+k}=r_J+2k). For (x\ge0), (r_j^2+x\ge r_j^2\ge r_J^2) when (j\ge J), and

\[
\sum_{j\ge J}\frac{e^{-r_jh}}{r_j^2+x}
\le \frac{e^{-r_Jh}}{r_J^2}\sum_{k\ge0}e^{-2kh}
=\frac{e^{-r_Jh}}{r_J^2(1-e^{-2h})}.
\]

For the derivative-weighted sum, (r_j^2/(r_j^2+x)^2\le1/r_j^2\le1/r_J^2), hence the same upper bound applies:

\[
\sum_{j\ge J}e^{-r_jh}\frac{r_j^2}{(r_j^2+x)^2}
\le \frac{e^{-r_Jh}}{r_J^2(1-e^{-2h})}.
\]

These are absolute bounds, so they also cover either sign of the odd/even combination of the weighted rates. The code computes `Et = expAny(rJ*h) / ((1-expAny(2*h))*rJ^2)` as an outward interval expression. Its upper endpoint is therefore a valid bound, provided the interval denominator is strictly positive. For the campaign input h=239/100>0, the exact denominator is positive. The focused replay recorded below also verifies that the computed interval lower complement is strictly positive for this input. The source later uses `Ferror`/`Derror` by widening with the error interval's upper endpoint, which is the required direction.

## Exponential enclosure

The interval arithmetic in the file uses integer lattice (Q=10^{54}), with `R`, `mul`, and `div` rounding endpoints outward. For (0\le x\le1/2), the magnitudes (x^j/j!\) decrease. The alternating-series theorem gives

\[
S_{51}(x)=\sum_{j=0}^{50}(-x)^j/j!-x^{51}/51!\le e^{-x}\le S_{50}(x).
\]

`expneg` accumulates an outward interval for (S_{50}), computes an outward interval for the nonnegative next-term magnitude, and returns `[S50_lo-next_hi, S50_hi]`; thus it contains (e^{-x}). If its argument is the interval produced by repeated halving, the same reasoning applies pointwise to every argument in that interval; monotonicity of (e^{-x}) also gives an enclosure for the full input interval.

`expAny` halves a nonnegative argument interval until its upper endpoint is at most (1/2), applies `expneg`, then applies the source’s outward interval square operation (k) times. Since e^{-x}=(e^{-x/2^k})^{2^k}, each square preserves containment. Clipping to `[0,Q]` is safe because 0<e^{-x}<=1. In this generator, `expAny` is called on (h/4), (r_jh), (2h), and (r_Jh), all strictly positive for the admissible positive (h) and rates. Thus the nonnegative-input premise is met, including the denominator use above.

## Limits and review points

This is an analytic audit of the formulas and interval direction, not a machine-checked proof of the JavaScript operations. It assumes the fixed-point primitives' outward-rounding definitions shown in the source and does not independently execute or validate them. It does not check the Euler–Maclaurin tail, the diagonal/rate formulas, endpoint witness, full matrix entries, row radii, elimination, or any positivity result. No claim is made about RH or an operator construction.

A bounded executable replay resolved that denominator check for this campaign input. `exp-tail-replay.js` reproduces the target's (10^{66}) directed fixed-point primitives and exponential routines for (h=239/100,J=4096); `node research/workers/PMA63-W04/exp-tail-replay.js` returns `1-expAny(2*h)` as `[991604001032508527339494228333246431524618282404319121875543794635, 991604001032508527339494228333246431524618282404319121875543794645] / Q`, strictly positive, and `Et` as `[0,1]/Q`. This is a focused replay of copied source primitives, not an independent implementation or validation of the full generator.
