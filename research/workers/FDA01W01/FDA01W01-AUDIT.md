# FDA01W01: exact audit of the first-row radius budget

## Scope and reproduction

I independently reconstructed the stored h=23/10 even matrix and its counterfactual first-row radius budget from `experiments/results/atm03-23-10-even.json`, using Python integers and exact division. Reproduce with:

```sh
python experiments/fda01w01-radius-budget-audit.py
```

The script first reconstructs all 32x32 baseline lower entries from the saved `componentIntervals` and verifies equality with `lowerInteger`. It then applies the proposed shares `(9400,476,84,8,8,8,8,8)/10000` using outward floor/ceiling rescaling, intersects transposed intervals, forms the integer midpoint and radii, and applies the stored square-root row weights. Exact fraction-free Bareiss elimination and integer bisection check the positivity budgets.

## Findings

- All 1,024 baseline lower-matrix entries reproduce exactly from the archived component intervals.
- Under the proposed shares, the first weighted row radius is `28,588,096,588`; the full reweighted lower matrix has only 8 positive Bareiss pivots.
- Setting only that first row radius to zero yields 32 positive pivots.
- Holding every other row radius fixed, exact integer bisection gives a maximum safe first radius of `2,855,864,459`. The actual radius is about 10.01 times that threshold.
- The first energy upper endpoint is `238,234,022,506` on the saved integer scale.

This confirms the stored counterfactual bottleneck arithmetic. It does not validate the interval-generation formulas, show that the underlying form has a negative direction, or establish operator positivity.
