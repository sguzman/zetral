# U72-02 even Cholesky basis failure direction

- **ID:** U72-02-EVEN-CHOLESKY-WITNESS-W01
- **Status:** READY_FOR_REVIEW
- **Starting commit:** `5e076c1` (current main); claim commit `0adc0ec`
- **Scope:** Diagnose the standard proposal's 9/47 exact leading-minor failure on the single `10^12` midpoint-Cholesky basis from `worker/u72-02-even-gram-schmidt-w01`. Extract one rationalized negative direction from its first failed leading block and compute the exact quadratic form against the stored integer comparison matrix.

## Result

A 100-digit eigensolve of the normalized first 10x10 block produced an approximate least eigenvalue `-1.8941405547e-4`. After rationalization at denominator `10^20`, exact integer arithmetic verifies a strictly negative quadratic form for the stored lower comparison matrix:

- `x^T L x = -5173500637561574628313749846206225892824872130427867323032208370725382628956085867167874`.
- Before the row-radius penalty, `x^T A_mid x` is also negative: `-5165324742762875434338217957152481497906652340896371155847306866271998616767152640467215`.
- The exact radius penalty subtracts a further positive `8175894798699193975531889053744394918219789531496167184901504453384012188933226700659`.
- The exact identity `x^T L x = x^T A_mid x - x^T R x` is checked in the script. Relative to the comparison energy upper form, the midpoint term is about `-1.89114e-4`, the radius penalty about `2.99337e-7`, and the final lower form about `-1.89413e-4`.

For this fixed basis and standard proposal, reducing only the stored radius cannot make this witness positive because the stored midpoint quadratic form is already negative. This does not rule out another allocation, another basis, or a different midpoint comparison.

## Evidence and inputs

- Diagnostic source and exact vector: `diagnose_direction.py`, `experiments/results/u72-62-25-even-cholesky-witness-w01/negative-direction.json`.
- Output matrix/replay inputs: `float-replay.json` and `transform.json`, copied from `worker/u72-02-even-gram-schmidt-w01` commit `f2c2863` (source blobs `1bb437f638fb79aa974e5d6bce1ab5f1c1f72e73` and `594a20645811a066d21cfbb347c7d54ffae05776`).
- Full result summary: `diagnostic-output.txt`.

## Reproduction

From repository root with Python 3, NumPy, and mpmath available:

```sh
python3 experiments/worker-u72-02-even-cholesky-witness-w01/diagnose_direction.py
```

The eigensolve proposes the vector at 100 digits. All quadratic forms, midpoint/radius identities, and strict sign checks after vector rationalization use Python integers.

## Checked and unchecked

Checked: exact negative quadratic form for the stored lower comparison matrix; exact midpoint-minus-radius identity and signs for the same rational vector; reproduction of the first failing 10x10 block from the stored comparison.

Unchecked: independent reconstruction of the interval matrix; any claim over other allocations/bases; global positivity or obstruction; and whether an improved mathematical bound could change the midpoint comparison itself.

## Recommendation

This isolates a center/basis/allocation bottleneck rather than a radius-only bottleneck for this candidate. Do not infer an all-allocation obstruction. A new candidate would need to change the allocation, transformed center, or basis.
