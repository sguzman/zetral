# U75-ORIG-FORM-W01 — h=2.51 even comparison in original coordinates

## Finding

For the fresh (h=251/100), (J=128), KEM20, (T=1024), (M=20480), 52-direction even trial, an exact replay of the stored proposal shares in the original trial coordinates has 35 positive leading pivots; pivot 36 is negative. The archived transformed replay has 51/52 positive pivots and fails at pivot 52. The untransformed baseline allocation has 45/52 positive pivots and fails at pivot 46.

The original baseline reconstruction matched all 2704 stored integer matrix entries and all 52 radius corrections exactly. Thus the loss of positivity is in the chosen finite comparison after removing the row transformation and transformed tail bounds. It does not refute the analytic estimate or the transformed M20480 candidate, which itself has no positive margin; the lead has since moved to M24576.

## Method

Run from the repository root:

```sh
node experiments/worker-u75-original-form/original-form.js
```

The script rebuilds the raw row from the six byte-persisted trial parts and the complete M20480 residual aggregate using the archived U75 staged generator and assembler. It then independently forms the original-coordinate baseline and proposal matrices from the stored component intervals. For the proposal replay it uses the stored positive allocation shares, sets all direction-specific multipliers to one, uses only the original-coordinate eighth bounds, intersects directed intervals symmetrically, takes integer midpoints, and subtracts weighted radius corrections. Bareiss fraction-free elimination determines pivot signs exactly.

The baseline exact match is a consistency check against the assembled raw row, while the proposal replay is independently implemented in the scoped worker script. The transformed 51/52 count is read from the stored replay only as a comparison reference. Full output: `experiments/worker-u75-original-form/result.json`.

## Limits

- Even sector and M20480 only; no M24576 or odd-sector audit.
- No positive energy-grid margin in the original-coordinate replay.
- Inherited analytic majorants are not independently proved here.
- No RH proof, operator consequence, CI, formal verification, human review, or originality claim.
