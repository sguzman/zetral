# PBCI03 — Bounded Woodbury diagnostics at and above the first shift

2026-11-25. AI-assisted numerical research. The computations below are ordinary float64 diagnostics, not interval arithmetic or a rigorous positivity certificate. No RH assumption, actual off-line zero, priority claim, or independent human/formal verification.

## Model and calculation

Use the one-cell Neumann lower model from MBL02, with the exact finite boundary correction through J=512, the pole, and the first prime-power shift when h>log 2. For h<log 3 there is only the shift s=log 2 with coefficient b=log(2)/sqrt(2). Split by reflection parity. In the finite complementary block retain the positive rank-one-per-rate boundary correction and apply the PBCI01 Woodbury identity to the diagonal high comparison G. The high comparison subtracts b in both sectors; in the odd sector it also subtracts twice the squared norm of the odd pole vector above the low cutoff. The low block and low-to-high coupling contain all finite-rate, prime, and pole entries.

Prime entries use the exact cosine overlap formulas in PBCI02. The omitted-mode estimate combines the rate and pole O(n^-2) coefficient majorant with the prime O(n^-1) majorant by Minkowski, then uses increasing positive high weights. This controls the infinite tail analytically in the candidate derivation. The finite matrices, Woodbury solves, and all displayed decimal results were nevertheless evaluated in float64; their signs are not rigorous enclosures.

Reproduce the numerical work with:

```sh
python3 experiments/pbci03-woodbury-diagnostic.py
```

This requires NumPy and SciPy. Raw output is in `experiments/results/pbci03-woodbury-diagnostic.json`.

## Results

| physical length h | prime term | low indices | high modes included | retained rates | parity | min G | finite Woodbury Schur min | omitted tail bound | after tail |
|---:|:---:|---:|---:|---:|:---:|---:|---:|---:|---:|
| 0.5 | no | 0–20 | 21–1500 | 512 | even | 3.0909639504 | 0.0323639170 | 0.0000010196 | 0.0323628975 |
| 0.5 | no | 0–20 | 21–1500 | 512 | odd | 3.0444361722 | 0.3741545002 | 0.0000009702 | 0.3741535300 |
| 0.6940001806 | yes | 0–20 | 21–1000 | 512 | even | 2.2728980198 | -0.0023658108 | 0.0031232366 | -0.0054890474 |
| 0.6940001806 | yes | 0–20 | 21–1000 | 512 | odd | 2.2263629643 | 0.0048503182 | 0.0028210075 | 0.0020293107 |

At h=1/2, both parity Schur comparisons remain positive after the explicit candidate tail allowance. This improves on the coarse scalar comparison in MBL03, which was inconclusive at that length. Because the finite arithmetic is not outward rounded, this is only a strong candidate for a full fixed-window certificate; it does not certify positivity of the actual restored operator.

Just above log 2, the odd comparison passes numerically after the tail, but the even comparison fails. The failed sufficient lower matrix is inconclusive about the actual operator. The prime-inclusive calculation therefore did not produce a new positivity range.

## Audit and limitations

The Woodbury term is applied only to the retained positive boundary correction; its sign increases the Schur lower bound. The unused boundary rates are nonnegative and may be dropped from the lower model. The prime norm bound b is valid only in the stated single-shift regime log 2<h<log 3. The odd pole loss uses the exact Neumann Parseval identity for the high projection, while its low and cross entries remain explicit. The tail treatment distinguishes n^-2 boundary/pole coefficients from n^-1 prime coefficients; replacing the latter by an n^-2 estimate would be invalid.

The main limitation is arithmetic verification: the positive h=1/2 margin has not been propagated through outward-rounded entry intervals or a rational LDL test. A next bounded task could convert that row to certified arithmetic, likely at smaller low/high/rate cutoffs, before spending effort on the negative even prime-inclusive row. This is a candidate numerical direction, not a claim that the certificate is already proved. No published-range comparison or exhaustive prior-art search was undertaken here.
