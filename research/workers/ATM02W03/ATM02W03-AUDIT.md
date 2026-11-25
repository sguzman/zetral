# ATM02W03: exact audit of the stored odd matrix

## Scope and command

This is an independent exact-integer replay of `experiments/results/atm02-9-4-odd.json`, the ATM02 h=9/4 odd-parity raw result. From the repository root, run:

```sh
python experiments/atm02w03-odd-matrix-audit.py
```

The checker uses Python arbitrary-precision integers and fraction-free Bareiss determinants. It checks all leading principal minors of the 30x30 `lowerInteger`, computes the exact determinant of the 30x30 saved basis, and checks tail-share positivity and normalization.

## Result

The check passed: all 30 recomputed leading principal determinants match the saved exact values and are positive; the basis determinant is nonzero (1620 digits in absolute value); and all eight rational tail shares are positive and sum exactly to `10000/10000`. These are internal-consistency results for the stored integer artifacts only. They do not verify outward interval generation or establish an operator/spectral conclusion.
