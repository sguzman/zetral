# RDC02W01 — exact inertia audit of the correction difference

## Finding

Independent exact arithmetic confirms that the RDC02 corrected conservative lower matrices have all 28 diagonal entries strictly above the corresponding old entries, while their differences are indefinite in both parities. The first failing leading principal determinant is order 2 in the even case and order 4 in the odd case. I extracted exact rational negative directions from the corresponding leading blocks. Thus the rowwise diagonal gain does not establish Loewner improvement; this agrees with the archived RDC02 analysis.

## Method

`experiments/rdc02w01-difference-witness.py` reads the old PPW03 and corrected RDC02 stored `lowerInteger` matrices, checks matching scale/window/parity/basis and unchanged initial trial, and subtracts the integers exactly. It verifies all diagonal differences are positive and recomputes every leading principal determinant by fraction-free Bareiss elimination.

For the first failing leading block, all preceding leading minors are positive, so its leading block (A) is positive definite. Writing that block as

```
[ A  b ]
[ b* c ]
```

the exact rational vector `(-A^-1 b, 1)` has quadratic form

```
c - b* A^-1 b = det(block)/det(A) < 0.
```
The script clears denominators and prints the resulting integer vector and exact negative form numerator. The physical matrix difference has the additional saved lattice denominator (10^{54}).

## Reproduction

Command:

```
python experiments/rdc02w01-difference-witness.py
```

Output:

```
PASS even: 28 positive diagonal deltas; first nonpositive leading minor order 2; preceding order 1 positive
  negative witness support (indices 0..1): [79725867773097921, 14251511964782]
  exact quadratic form on integer matrix: -40948554714566058943423470224251337877577403090 < 0
PASS odd: 28 positive diagonal deltas; first nonpositive leading minor order 4; preceding order 3 positive
  exact quadratic form on integer matrix: -1517438226480468016680085216504044479900748203358258148664081500365961025084841311567736211952738204945916067674099592469586395922739580463801176680966430404 < 0
```

The script also prints the exact odd integer witness vector. All computations use Python integers and `Fraction` for solving; no floating-point arithmetic is involved.

## Limits

This is an audit of the difference of the two stored conservative lower matrices. It does not compare the exact Schur complements, prove monotonicity of the underlying correction map, or rerun the interval certificate. The result is consistent with RDC02's characterization of a mixed correction: better diagonal entries and first pivots, worse approximate relative diagnostics, and no uniform Loewner improvement. AI-assisted; no human/formal review, RH conclusion, actual negative restored eigenvalue, or priority claim.
