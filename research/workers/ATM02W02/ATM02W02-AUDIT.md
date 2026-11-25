# ATM02W02: exact audit of the old-allocation comparator

## Scope

I independently replayed the saved integer data in `experiments/results/atm02-9-4-even-old.json` and compared it with `experiments/results/atm02-9-4-even.json`. Both are h=9/4, even-parity ATM02 results. This does not rerun interval generation or independently validate the outward interval calculations.

## Reproducible check

From the repository root, run:

```sh
python experiments/atm02w02-old-allocation-audit.py
```

The script uses Python arbitrary-precision integers and fraction-free Bareiss determinants. It checks every leading principal determinant for both 30x30 stored lower matrices, compares the archived sequences, compares the finite setup fields, and verifies the positive rational share partitions.

## Findings

- In the old-allocation matrix, the six leading principal determinants of orders 1–6 are positive; the exact order-7 leading principal determinant is negative. The saved seven-value `principalMinors` list matches the replay through and including this failed minor. This explains why that run is marked `certified: false`.
- In the adaptive-allocation matrix, all 30 leading principal determinants are positive and exactly match the saved `principalMinors` list; that run is marked `certified: true`.
- The comparison is matched on h, parity, J/M/S dimensions, the prime norm upper bound, witness window, frequency index lists, cutoff T, basis, and trial matrix.
- Both tail-share lists are strictly positive and sum exactly to their respective denominator.

This is independent verification of internal consistency for the stored integer matrices and comparison setup. It does not establish that the interval enclosures feeding the matrices are valid, nor a spectral gap, RH, or a Hilbert–Pólya construction.
