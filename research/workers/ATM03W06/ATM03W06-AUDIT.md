# ATM03W06: exact replay of the doubled-J comparison

## Scope

I independently replayed `experiments/results/atm03-23-10-even-j12288.json` and compared it with the prior `experiments/results/atm02-23-10-even.json` stored matrix. The runs share h=23/10, parity, M/S, norm bound, witness window, index lists, T, tail shares, and dimensions; J changes from 6144 to 12288. The saved basis and trial entries are recalculated and are not identical between runs.

## Reproduction

From the repository root:

```sh
python experiments/atm03w06-j12288-even-audit.py
```

The checker uses arbitrary-precision integer Bareiss determinants. For both 32x32 symmetric lower matrices it recomputes every leading determinant, verifies the saved principal-minor prefix, checks exact basis nonsingularity and tail-share normalization.

## Findings

- All 32 leading principal determinants are negative in both stored matrices; the saved prefixes agree exactly. The J=12288 raw records only its first failed minor.
- The first lower diagonal changes from `-32960096072943` at J=6144 to `-11659252372580` at J=12288 on the same `10^54` lattice. This is an improvement in the stored lower bound but remains negative.
- Both stored bases are nonsingular and both share lists are positive rational partitions.

This is a certificate failure in both archived comparisons. It does not show that the underlying arithmetic form is negative or has a negative eigenvalue. The outward interval computation remains unchecked by this audit.
