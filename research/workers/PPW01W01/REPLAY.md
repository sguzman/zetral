# PPW01W01 — independent exact norm-witness audit

## Finding

The two saved PPW01 step-function witnesses satisfy their claimed weighted Schur inequalities under an independent Python `Fraction` implementation. For N=9, the exact bound is 2303/1000 on 4,086 transformed cells; for N=11, it is 2714/1000 on 13,333 transformed cells. Each is the actual worst ceiling ratio found by the independent checker. All saved step weights are positive, endpoints and monotonic ordering are valid, and all von Mangoldt weight upper bounds are independently verified by rational logarithm series plus exact squaring.

## Method and endpoint handling

`experiments/ppw01w01-independent-audit.py` reads the saved rational breakpoints and integer step weights. It independently forms the union of the original partition with all interior images `m*x` and `x/m` for every active shift. On each resulting open cell it evaluates the witness at an exact rational midpoint; the transformed step functions are constant throughout that cell because all their jump locations have been included. The endpoints 1 and N are assigned zero by the source convention; endpoint values have measure zero in the integral inequality. The checker confirms the transformed-cell count against the archived `checked` field, checks `sum_j a_j*(w(m_j*x)+w(x/m_j)) <= B*w(x)` exactly, and recomputes the worst integer ceiling ratio.

For the actual arithmetic coefficients, it independently encloses each required logarithm using the atanh series after exact power-of-two scaling into [1,2]. The geometric remainder is rational. Positive inequalities involving `log(m)/sqrt(m)` are checked by squaring exact positive rational bounds; the shift-4 and shift-9 prime-power coefficients use direct linear comparisons for `log(2)/2` and `log(3)/3`. No floating-point values enter the checks.

## Reproduction

Command:

```
python experiments/ppw01w01-independent-audit.py
```

Output:

```
PASS N=9: 3321 positive witness cells; 4086 exact transformed cells; bound 2303/1000; worst ratio 2303/1000; all arithmetic weights below stated rationals
PASS N=11: 10611 positive witness cells; 13333 exact transformed cells; bound 2714/1000; worst ratio 2714/1000; all arithmetic weights below stated rationals
```

This is a separate exact-rational implementation of the saved witness inequalities; it is not a proof assistant artifact, and it does not independently verify the campaign's operator-to-Schur reduction or prime-power classification. No priority claim, RH conclusion, actual negative eigenvalue, or human review is claimed.
