# RRC02–03 — Residual diagnostics and adaptive support results

2026-11-25. AI-assisted bounded computational study, based on the exact RRC01 and PMW03 formulas. The exact integer comparison results below are independently replayed in Python rational arithmetic; analytic overlap and tail bounds remain unreviewed independently.

## Baseline at h=33/20

The PMW03 saved rational basis and trial were frozen, and the full upper matrix, finite weighted residual Gram, each moment-tail block, fourth diagonal remainder, interval matrix, and entry-radius matrix were retained in `experiments/results/rrc02-relative-diagnostics.json` (`Q=10^30`, `J=1024`, `M=1536`, `S=49`, `T=96`). The guaranteed lower matrix has a negative fourth exact LDL pivot, `-1.1613292090353804e-4` after dividing by Q. This reproduces the failure of the prior sufficient comparison.

As a heuristic diagnostic, I divided the approximate finite residual and each moment-tail block entrywise by the square roots of the upper-form diagonal entries. In this diagonal-energy scaling, the largest eigenvalue of the finite residual block is about `0.9025`; adding the leading rank-one `S0` tail moves it to `1.0527`; the second and third rank-one terms move it to about `1.0532`, and the fourth diagonal remainder to about `1.0618`. This is not the generalized eigenvalue of (residual, upper form), because the upper form has substantial off-diagonal correlations. It only locates the leading-tail contribution in this chosen scaling and must not be read as a positivity or negativity certificate.

## Adaptive high support at h=33/20

Holding the rate cutoff `J=1024` and evaluation cutoff `M=1536` fixed, I increased the exact high-trial support from `T=96` to `T=128` and enlarged the diagonal rate evaluation `S` to 80 so every selected high diagonal is directly evaluated. The trial is newly formed from a finite complement solve, then rounded to exact rational coefficients; its source solve only selects the trial and is not used in the certificate. The saved interval computation produced a ten-pivot exact lower matrix with all pivots strictly positive. Its first LDL pivot divided by Q is about `7.31e-19`, and its last is about `2.4362`. This gives a candidate strict positivity certificate for the even h=33/20 comparison under the PMW/RMT analytic bounds, extending the prior h=1.6 internal range to h=1.65.

The rational basis determinant is nonzero (checked directly from the saved integer basis). `experiments/rrc03-verify-lower-matrices.py` independently recomputes the exact determinant and rational LDL pivots from the raw integer lower matrices; it does not independently derive the analytic matrix entries.

## Longer-window attempts at h=17/10

Keeping `J=1024` and `M=1536` fixed, I tested `T=128,160,192` with `S=80,96,112`, respectively, so the exact diagonal rate sums covered all finite trial modes. All three even lower comparisons fail at the final exact LDL pivot. After division by Q, those pivots are approximately `-2.13e-9`, `-8.00e-9`, and `-3.04e-8`. In this bounded series, increasing T did not improve the certified lower matrix at h=1.7. These failures concern the sufficient Schur lower comparison and do not establish a negative actual eigenvalue.

## Reproduction

From the repository root, the parameterized runner uses the frozen PMW03 low basis and computes the finite trial for each requested window:

```
node experiments/rrc02-relative-diagnostics.js 33 20 1024 1536 49 96 > /tmp/rrc02-baseline.json
node experiments/rrc02-relative-diagnostics.js 33 20 1024 1536 80 128 > /tmp/rrc02-t128.json
node experiments/rrc02-relative-diagnostics.js 17 10 1024 1536 80 128 > /tmp/rrc03-h17-t128.json
node experiments/rrc02-relative-diagnostics.js 17 10 1024 1536 96 160 > /tmp/rrc03-h17-t160.json
node experiments/rrc02-relative-diagnostics.js 17 10 1024 1536 112 192 > /tmp/rrc03-h17-t192.json
python3 experiments/rrc03-verify-lower-matrices.py experiments/results/rrc02-t128.json experiments/results/rrc03-h17-t128.json experiments/results/rrc03-h17-t160.json experiments/results/rrc03-h17-t192.json
```

The four completed raw configurations are in `experiments/results/rrc02-relative-diagnostics.json`, `rrc02-t128.json`, and `rrc03-h17-{t128,t160,t192}.json`. The h=33/20 baseline and T=128 outputs, and the h=17/10 T=128 and T=160 outputs, byte-match fresh executions in this Node runtime; the T=192 execution also byte-matches when run separately. No RH proof, actual negative restored eigenvalue, independent review, or priority claim is established.

## Next direction

The T=128 result makes h=1.65 worth handing off for review. The h=1.7 residual persists as T grows, while the baseline component diagnostic points to the shared leading tail as a promising target. Next, test the RRC01 positive inverse correction on the remaining residual at h=1.7, retaining the current finite T trial and adding positive boundary/prime correction columns. If that does not reduce the near-null comparison, revise the low basis or finite trial using the actual coupled residual Gram rather than only the upper-form diagonal scaling.
