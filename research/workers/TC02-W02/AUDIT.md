# TC02-W02 — independent T832 baseline reconstruction

## Result

At main commit `e479135` (LXIX, T832 even raw part 6), I reconstructed the
stored baseline lower matrix from the six raw payload parts. The script verifies
all 1,936 matrix entries against `lowerInteger`, all 44 weighted row radii
against the saved diagnostics, and the exact Bareiss prefix determinant
sequence. The prefix is

```text
898870236922162014325
-717120806111628842029091158099264654577486
```

Thus the stored baseline has a positive first leading minor and a negative
second one: the sufficient comparison still fails at 1/44 for T832. The stored
floating residual estimate is `1.08317287694566`; it is not an eigenvalue
certificate.

## Reproduction and scope

From the repository root:

```sh
python3 experiments/worker-TC02-W02/rebuild_t832_baseline.py
```

The script independently concatenates `experiments/results/tc02-49-20-even-m12288-t832-raw-part{1..6}.txt`, reconstructs outward component intervals, symmetrizes by interval intersection, recomputes midpoint/radius data, applies the stored weighted row radii, and performs exact fraction-free Bareiss elimination through the first nonpositive pivot.

This validates the saved payload's baseline arithmetic only. It does not
regenerate analytic bounds, reproduce a selected allocation, evaluate the
floating residual direction, or certify positivity of the underlying operator.
No RH, original-form, or novelty claim is made. AI-assisted research; no human
review is claimed.
