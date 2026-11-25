# ATM01W01 — rational-endpoint witness audit

## Finding

The saved ATM01 step witness on `[1,19/2]` verifies exactly under an independent `Fraction` implementation. It has 7,455 positive witness cells and requires 9,301 transformed cells for the active shifts 2,3,4,5,7,8,9. The exact worst ratio is `2455/1000 = 2.455`. The noninteger endpoint is handled by exact rational endpoint images and zero extension outside the window.

## Method

`experiments/atm01w01-endpoint-audit.py` reads `experiments/results/atm01-window-19-2.json`. It independently constructs the union of the saved partition breakpoints with all interior images `m*x` and `x/m` for each active shift, then evaluates each transformed step sum at exact rational midpoints. Because all transformed jumps are present, the summand is constant on each open cell. It checks the archived transformed-cell count, positivity of every witness cell, all integer inequalities `sum_j a_j*(w(m_j*x)+w(x/m_j)) <= B*w(x)`, and that the maximum exact ceiling ratio equals the reported B.

It also verifies all seven arithmetic coefficient bounds independently. Logarithms are bounded above using 80 exact rational atanh terms after power-of-two scaling into `[1,2]`, plus the exact geometric remainder. Bounds with square-root denominators are checked by squaring positive rational sides; the prime-power coefficients `log(2)/2` and `log(3)/3` are checked linearly.

Endpoint images are formed as exact fractions. The source's convention assigns zero outside and at the endpoints; those points have measure zero in the integral Schur inequality. No floating-point arithmetic enters the verification.

## Reproduction

Command:

```
python experiments/atm01w01-endpoint-audit.py
```

Output:

```
PASS endpoint 19/2: 7455 positive cells, 9301 transformed cells, exact worst ratio 2455/1000
PASS all 7 arithmetic coefficient upper bounds; exact endpoint images stay within the rational window
worst cell: [45/32, 21875/15552]
interval scale Q=1000000000000000000000000000000; bound=2455/1000=2.455
```

## Limits

This independently checks the saved scalar rational witness and coefficient majorants only. It does not verify ATM01's full generator integration, Campaign LX's tail-share scaling, the operator-to-Schur reduction, or the full outward spectral certificate. AI-assisted; no human/formal review, RH conclusion, actual negative restored eigenvalue, or priority claim.
