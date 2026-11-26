# U74-ORIG-SEARCH-W02 — trace allocation in original coordinates

## Result

I constructed a positive rational allocation by minimizing a trace surrogate for the original-coordinate tail losses, then replayed the resulting 50-direction even comparison at (h=5/2) with exact integers. The exact comparison has only 5 positive leading pivots; pivot 6 is negative. An 18-point scan of diagonal-share mass, retaining trace-optimal relative proportions within the rank and diagonal blocks, also produced no exact pass; the best count was 5/50.

This rejects the trace-minimizing allocation and the stated one-parameter family. It does **not** prove that every original-coordinate allocation fails. The matrix comparison and input analytic majorants remain candidate finite evidence, not an operator or RH result.

## Allocation rule

Let (S) be the total share mass assigned to the 50 eighth diagonal terms. Ignoring interval-radius corrections, the continuous trace surrogate has form

\[
  \frac{\alpha}{1-S}+\frac{\beta}{S},\quad
  \alpha=\left(\sum_{k=1}^7\sqrt{o_k\,\operatorname{tr}R_k}\right)^2,
  \quad
  \beta=\left(\sum_{i=1}^{50}(o_8 e_i)^{1/3}\right)^3,
\]

where (o_k) are the inherited shares, (R_k) are the original rank-component upper matrices, and (e_i) are the stored positive eighth bounds. Thus (S=\sqrt{\beta}/(\sqrt{\alpha}+\sqrt{\beta})); rank shares are proportional to (\sqrt{o_k\operatorname{tr}R_k}), and eighth shares to ( (o_8e_i)^{1/3}). We rounded this floating allocation to positive integer shares summing exactly to the archived denominator (10^{12}). This trace objective is only a heuristic; the actual replay includes exact interval intersections and weighted radius corrections.

The minimizer chose (S\approx5.2691\times10^{-11}), near the smallest representable diagonal mass under the positive integer share constraint. Exact replay gave 5/50 positive leading minors, with a negative sixth pivot. The mass scan tested (S\in\{5\cdot10^{-11},10^{-9},10^{-8},10^{-7},10^{-6},10^{-5},10^{-4},10^{-3},.01,.025,.05,.1,.2,.35,.5,.7,.85,.95\}\); all candidates failed.

## Reproduction

From the repository root:

```sh
node experiments/worker-u74-original-search/trace-allocation.js
```

The script rebuilds archived inputs from the five trial parts and full even residual aggregate, computes the continuous trace rule, rounds shares, builds the original-coordinate interval comparison, and checks its pivots by Bareiss elimination. It writes the full share vectors and scan summary to `experiments/worker-u74-original-search/even-result.json`.

The trace allocation uses floating arithmetic only for candidate selection. Integer share totals, interval assembly, weighted radii, and pivot signs in the final replay are exact. No known zeros or transformed eighth bounds enter this calculation.

## Limits

- Even sector only.
- No original-coordinate allocation pass found in this trace family or mass scan.
- No all-allocation obstruction proved; the previous fixed-vector test was also inconclusive.
- No independent proof of inherited analytic majorants, RH/operator consequence, CI, formal proof, human review, or novelty claim.
