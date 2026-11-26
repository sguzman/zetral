# TC02-W02 — independent T832 matrix and weak-energy audit

## Result

At main commit `cfbdb84`, I reconstructed the stored T832 baseline lower matrix
from six raw payload parts and independently reconstructed all eight selected
allocation lower matrices using the factor, joint-allocation, and replay files.
The script verifies all 1,936 baseline entries and 44 weighted row radii, plus
all 15,488 selected entries and exact Bareiss prefixes. Baseline prefix:

```text
898870236922162014325
-717120806111628842029091158099264654577486
```

The baseline and all eight selected matrices have a positive first leading
minor and negative second leading minor: every stored sufficient comparison
still fails at 1/44 for T832. The stored floating residual estimate is
`1.08317287694566`; it is not an eigenvalue certificate.

## Exact weak-direction finding

Let (U) be the saved upper-energy interval matrix and let (L_i) be the exact
stored lower-comparison matrix for the baseline or selected allocation (i).
From the midpoints of the first two coordinates of (U), the script constructs
the integer vector

```text
(4097905284838983763154, -1048414180024224900712).
```

Using only endpoint arithmetic on the saved intervals, its upper-energy
quadratic form is bounded below by the positive integer
`12678893976432120139619466592232124722217251139657974223300` and above by
`12678894137959272564414340670088474052018022765224896648416`. The exact
determinant lower bound for the first 2×2 upper-energy block is also positive:
`12093401842522887600237841669055597166` in the raw (Q^2) scale. Yet exact
integer evaluation gives (v^T L_i v<0) for the baseline and for every one of
the eight selected allocations. Thus each stored lower comparison has a
negative generalized Rayleigh direction relative to this positive energy
quadratic. The midpoint correlation of that energy block is approximately
`0.9999996399237941` (floating diagnostic).

This proves that the subunit diagonal-normalized residual score does not certify
the T832 comparison. The result is restricted to the saved finite matrices and
does not assert a negative direction for the original infinite-dimensional
form.

## Reproduction and scope

From the repository root:

```sh
python3 experiments/worker-TC02-W02/rebuild_t832_baseline.py
```

The script independently concatenates `experiments/results/tc02-49-20-even-m12288-t832-raw-part{1..6}.txt`, reconstructs outward component intervals, symmetrizes by interval intersection, recomputes midpoint/radius data, applies the stored weighted row radii, and performs exact fraction-free Bareiss elimination through the first nonpositive pivot. It then uses the saved factors and allocation data to independently rebuild every selected matrix and repeats the exact determinant check. Finally it evaluates the weak-direction upper-energy interval and lower-matrix quadratic forms using integers.

This validates stored component arithmetic and finite comparison matrices only.
It does not regenerate analytic bounds, reproduce the trial-space construction,
or certify positivity of the underlying operator. No RH, original-form, or
novelty claim is made. AI-assisted research; no human review is claimed.
