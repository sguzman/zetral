# FDA02W01: exact replay of the h=23/10 crossing

## Scope and reproduction

I independently replayed the canonical FDA02 even and odd artifacts:

- `experiments/results/fda02-23-10-even.json`
- `experiments/results/fda02-23-10-odd.json`

From the repository root, run:

```sh
python experiments/fda02w01-h230-crossing-audit.py
```

The checker uses Python arbitrary-precision integers and fraction-free Bareiss elimination. It verifies matrix symmetry, recomputes every leading principal determinant, compares all 32 values to the archived sequence, computes the exact determinant of each 32x32 basis, and checks the positivity and normalization of each rational share vector.

## Findings

- Even: all 32 recomputed determinants match the saved sequence and are positive; basis determinant is nonzero (2,112 decimal digits in absolute value); shares are positive and sum exactly to 10,000/10,000.
- Odd: the same exact checks pass; basis determinant is nonzero (2,112 digits); shares sum exactly to 10,000/10,000.

This confirms internal consistency of the two stored integer matrices and bases. It does not independently validate component interval generation or original-form normalization, and it does not establish an ordinary eigenvalue gap, RH, or a Hilbert–Pólya construction.
