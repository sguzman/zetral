# TC02-TC04: independent arithmetic audit of the even transformed certificate

## Verified

Starting from the six raw parts' stored component intervals, I independently
reconstructed the integer congruence for the upper-energy, finite, and seven
rank components. I then applied the saved allocation weights, all specified
outward ceilings/floors, symmetric interval intersections, midpoint/radius
correction, and diagonal scaling to rebuild the final lower integer matrix.
It matches every entry in
`tc02-49-20-even-m12288-t832-transformed-certificate.json`. For the changed
coordinate, I additionally reconstructed the exact transformed coefficient
row from the stored basis and trial integers, using an independent Python
implementation. Against per-frequency norm, derivative, and pole intervals
extracted from the committed generator, Python's outward-arithmetic replay
independently matches both saved values:

- `C8 = 182382101436345160152033792029056615323132163493127736231676945961510988709328`
- `eighthUpper = 12737659102525118422466397610`

The extraction helper runs the committed exact generator to expose those
per-frequency intervals. This checks the transformed coefficient combination,
absolute-sum aggregation, and final C8/eighth interval arithmetic across two
implementations. It does not independently derive the norm, derivative, or
pole intervals from their analytic source expressions.

Using a separate Python integer Bareiss implementation, I replayed the 44
leading principal minors of the rebuilt matrix. Every division was exact, all
44 pivots were positive, and every pivot string matched the certificate. The
first pivot is `929226141064924700398`; the final pivot has 2,676 decimal
digits.

I also rebuilt the fixed-energy grid matrix from the stored lower integer
matrix and its 44 positive energy upper endpoints. The reported grid value
`45449/1000000` gives 44 positive pivots. At `45450/1000000`, the leading
minor test fails at pivot 44. The 51 allocation weights are positive and sum
to the stated denominator `10^12`. The reconstructed source record has the
claimed even `h=49/20`, `M=12288`, `T=832`, and 44-dimensional low basis.

Reproduction:

```sh
python3 experiments/worker-TC02-TC04/replay_transformed_minors.py
python3 experiments/worker-TC02-TC04/replay_transformed_eighth.py
```

## Scope

The changed transformed eighth-tail coefficient and its final allowance are
independently replayed in Python from exact per-frequency intervals extracted
from the committed generator. The upstream derivation of those norm,
derivative, and pole intervals was not independently reconstructed. The row
transform itself has determinant `100000`, hence preserves the finite trial
span. This is an arithmetic audit, not a separate derivation of every
analytic tail input.

No conclusion is drawn about the original form beyond the stated comparison,
and this audit is not a full independent original-form evaluation, RH result,
or formal proof review.
