# ATM02W01: exact replay of the stored even matrix

## Question and scope

This is an independent exact-integer replay of `experiments/results/atm02-9-4-even.json`, the stored ATM02 run at `h=9/4` with even parity. It does not rerun interval generation, reconstruct the matrix from interval components, audit the odd case, or establish any spectral/operator conclusion.

## Reproducible check

Run from the repository root:

```sh
python experiments/atm02w01-even-matrix-audit.py
```

The checker reads the archived raw JSON and uses fraction-free Bareiss elimination with Python integers. It checks the 30 leading principal determinants of `lowerInteger` against all 30 saved `principalMinors`; computes the determinant of the saved 30x30 `basis`; and checks the integer tail shares against their denominator.

## Result

The checker passed:

- All 30 recomputed leading principal determinants exactly match the saved values, and each is positive.
- The exact determinant of the 30x30 basis is nonzero (1620 decimal digits in absolute value), so that stored basis is nonsingular.
- All eight tail shares are positive and sum to `10000/10000`.

This verifies internal consistency and the stated finite-dimensional matrix and share facts for this stored even raw result. It is not an independent verification of the outward interval bounds or of the computation that produced `lowerInteger`.
