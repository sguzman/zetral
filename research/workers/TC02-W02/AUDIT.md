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

## No-allocation obstruction for the stored T832 bounds

The same vector yields a stronger necessary-condition check. Write (H=U-F)
for the upper-energy matrix minus the finite-residual matrix. Exact interval
quadratic arithmetic gives

```text
v^T H v <= 10966863453333417539072951774069409600627486121868702452100.
```

The seven rate corrections in the generator have the form (f_k r_k r_k^T)
with (f_k\ge0) (see `experiments/atm03-stable-diagonal-regimes.js`, lines
463–466); the eighth correction is diagonal and nonnegative, and the row-radius
correction is also nonnegative. For the rank corrections named `second`,
`fourth`, and `sixth`, interval evaluation and the positive lower endpoints of
their factor ratios give exact nonnegative coefficients (b_k). For the first
two eighth-coordinate corrections, the saved `eighthUpper` values and the
positive lower endpoint of the eighth factor give coefficients (b_{8,i}).
Using the total allocation denominator (D=10^{12}), their individual losses
along (v) are bounded below by (D b_j/x_j), where (x_j) denotes the
corresponding rank share or eighth-coordinate weight.

The rank shares and all eighth-coordinate weights together sum to (D). The
continuous Cauchy bound therefore gives

\[
\sum_j D b_j/x_j \;\ge\; (\sum_j\sqrt{b_j})^2.
\]

To avoid any floating square-root dependence, the script uses the exact integer
lower bound (S=\sum_j\lfloor\sqrt{b_j}\rfloor). It obtains

```text
S = 175441256152138039175746614531
S^2 = 30779634360240113379886364546373993494157361937107900349961
S^2 - upper bound on v^T H v
   = 19812770906906695840813412772304583893529875815239197897861 > 0.
```

Thus, for the fixed T832 finite components, factor bounds, and this tail
allocation scheme, **no positive real allocation with total budget (D)** can
make the lower-comparison quadratic nonnegative along (v). This includes all
positive integer allocations as a subset. It is a necessary-condition
obstruction for the stored bounds, not a result about other trial spaces,
larger cutoffs, tighter analytic remainders, or the original operator.

Reproduce this allocation bound with:

```sh
python3 experiments/worker-TC02-W02/t832_allocation_obstruction.py
```

## Reproduction and scope

From the repository root:

```sh
python3 experiments/worker-TC02-W02/rebuild_t832_baseline.py
```

The script independently concatenates `experiments/results/tc02-49-20-even-m12288-t832-raw-part{1..6}.txt`, reconstructs outward component intervals, symmetrizes by interval intersection, recomputes midpoint/radius data, applies the stored weighted row radii, and performs exact fraction-free Bareiss elimination through the first nonpositive pivot. It then uses the saved factors and allocation data to independently rebuild every selected matrix and repeats the exact determinant check. Finally it evaluates the weak-direction upper-energy interval and lower-matrix quadratic forms using integers.

The separate `t832_allocation_obstruction.py` performs the exact headroom and
Cauchy lower-bound argument above. It omits nonnegative rank terms, tail
coordinates outside the support of (v), and row radii, which can only weaken
the obstruction. It allows a continuous allocation simplex, which is more
permissive than the integer replay allocations. The positivity of all omitted
rank and diagonal corrections follows from their outer-product / nonnegative
diagonal construction at lines 463–477 of
`experiments/atm03-stable-diagonal-regimes.js`.

This validates stored component arithmetic and finite comparison matrices only.
It does not regenerate analytic bounds, reproduce the trial-space construction,
or certify positivity of the underlying operator. No RH, original-form, or
novelty claim is made. AI-assisted research; no human review is claimed.
