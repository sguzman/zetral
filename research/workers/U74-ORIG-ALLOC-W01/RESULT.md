# U74-ORIG-ALLOC-W01 — bounded all-allocation obstruction attempt

## Scope and finding

I tested whether an exact fixed vector could rule out every positive share allocation for the LXXIV even (h=5/2), 50-direction comparison in the original trial coordinates. The test did **not** produce an allocation-independent obstruction. This is inconclusive: it neither proves an original-coordinate allocation exists nor proves that none can work.

The stored transformed proposal, replayed without its row transform and with unit direction factors, has a negative eighth leading pivot. Solving its first seven equations over (mathbb Q) gives an exact 282-digit integer direction with negative Schur complement. For this direction the all-allocation Cauchy lower bound is only about (10^{-5.3524}) times the energy upper bound, so it does not rule out reallocating shares. The archived `relativeDirection`, rounded to scale (10^{12}), gives a stronger but still insufficient ratio about (10^{-1.6721}).

A deterministic search tested 1,400 integer directions formed by uniform perturbations of the normalized archived relative direction (seven amplitudes, 200 samples each, LCG seed 1847351). None satisfied the strict obstruction inequality. The best tested ratio was about (10^{-1.65198}) (amplitude .01). This search is a diagnostic only; it is not a proof that no obstructing direction exists.

## Exact inequality tested

Write the 57 positive allocation shares as (w_j), with (sum_jw_j=D), and (p_j=w_j/D). For a fixed vector (x), each of the seven original rank components has quadratic lower bound (q_k(x)) from its stored interval matrix. The source forms these components as (f_k r_k r_k^T), with (f_k>0); therefore a negative interval lower bound can safely be replaced by zero. Each of the 50 eighth diagonal deductions has coefficient (e_i x_i^2), where (e_i) is the stored positive eighth bound. Since its additional multiplier contains ((sum_{i=1}^{50}w_{7+i})/w_{7+i}ge1), it is bounded below by the corresponding (a_j/(D_0p_j)) term as well. With (D_0=10000) the inherited share denominator, define these 57 nonnegative (a_j) as old-share times the corresponding rank or eighth quadratic contribution.

The Cauchy inequality gives

\[
 \sum_{j=1}^{57}\frac{a_j}{p_j}\ge
 \left(\sum_{j=1}^{57}\sqrt{a_j}\right)^2,
 \qquad p_j>0,\quad \sum_jp_j=1.
\]

The energy term is bounded above by the exact interval quadratic form of `upper - finite`. For each tested vector, integer square-root floors at scale (10^{30}) give a rigorous lower bound for the left side. The obstruction would be certified if this lower bound exceeded (D_0) times the energy upper bound. It did not for the exact Schur witness or for any of the 1,400 search vectors. The comparison's nonnegative weighted interval-radius deduction was omitted, so including it could only strengthen an obstruction.

## Reproduction

From the repository root, run:

```sh
node experiments/worker-u74-original-obstruction/fixed-vector.js
```

The script reconstructs the archived even raw row from the five trial parts and full residual aggregate using the LXXIV staged generator/assembler. It forms the original-coordinate candidate matrix using the stored positive allocation with unit factors, obtains the failing direction via exact rational elimination, then evaluates the allocation-independent inequality in exact integer arithmetic. The bounded search is seeded and repeated by the same command. Results: `experiments/worker-u74-original-obstruction/even-result.json`.

The matrix interval inputs and analytic majorants are inherited campaign data. This work checks a fixed-vector consequence of those inputs; it does not independently prove their analytic derivation or make a claim about the underlying operator.

## Limits

- Even sector only; no odd-sector allocation-independent search.
- No all-allocation obstruction found in the tested set; nonexistence remains open.
- No original-coordinate successful allocation found.
- No RH, operator, CI, formal verification, human review, or novelty claim.
