# ATM02W04: independent endpoint-10 witness audit

## Scope

I audited the archived scalar witness in `experiments/results/atm02-window-10.json` using a fresh Python implementation with `fractions.Fraction`. This is a check of the saved witness, not of its search algorithm or the spectral certificate generator.

## Reproducible command

From the repository root:

```sh
python experiments/atm02w04-endpoint10-audit.py
```

The checker independently encloses the seven logarithm/square-root weights using the rational arctanh series for logarithms with an explicit positive tail bound, plus integer-square-root bounds. It verifies that the saved `10^30` intervals contain these independent enclosures and that each rational share dominates its arithmetic weight. It then reconstructs the refinement of all witness breakpoints under shifts 2, 3, 4, 5, 7, 8, and 9 and verifies the weighted inequality on every resulting cell using exact rational arithmetic.

## Result

- All seven saved weight intervals enclose the independent rational bounds, and all seven allocations dominate the bounded weights.
- The witness partition has 6,129 refined cells, matching the archived count.
- The exact maximum cell ratio has ceiling `2520`, matching `boundNumerator=2520`; the archived witness's stated maximizing cell also attains that ceiling. Thus the scalar coefficient bound is `2520/1000`.

This confirms internal arithmetic of the stored endpoint-10 scalar witness. It does not establish optimality of the search, validate generator guards or spectral interval matrices, or imply an ordinary eigenvalue gap, RH, or a Hilbert–Pólya construction.
