# ATM02W05: exact audit of the h=23/10 even comparison

## Scope and reproduction

I audited `experiments/results/atm02-23-10-even.json`, the archived h=23/10 even ATM02 comparison, using exact Python integer arithmetic. Reproduce from the repository root with:

```sh
python experiments/atm02w05-even23-audit.py
```

The checker recomputes all leading principal determinants of the stored 32x32 `lowerInteger` by fraction-free Bareiss elimination, verifies symmetry, computes the exact determinant of the stored basis, and checks the rational tail-share partition.

## Findings

- The saved first principal minor matches exact replay and equals `-32960096072943` on the `10^54` lattice, so the comparison is not positive at its first coordinate.
- All 32 leading principal determinants recomputed independently are negative. The raw file records only the first failed minor, as expected from `certified: false`.
- The stored basis is nonsingular (exact determinant has 1,728 decimal digits in absolute value).
- All tail shares are positive and sum exactly to `10000/10000`.

This is a failure of the archived lower comparison certificate at h=2.3. It does not establish that the underlying arithmetic form has a negative direction or that the operator has a negative eigenvalue. The outward interval generation and the derivation of the stored comparison matrix remain unchecked in this audit.
