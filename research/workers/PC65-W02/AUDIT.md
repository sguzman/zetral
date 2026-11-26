# PC65-W02 — one-sided diagonal interval propagation

Date: 2026-11-26 UTC. Baseline `a9aee29ffa371319cf2e3cdc56fc51b7fbf6adf8` (LXV PC03 even pass / odd work order). This is an algebraic source trace, not a matrix replay or verification of the full candidate comparison.

## Result

The archimedean `widen(center,error)` interval need not enclose the exact diagonal from above. Nevertheless, the interval calculations can support a lower-matrix proof through signed basis changes **by clipping the exact diagonal first**. The clipped diagonal belongs to every reported interval and is Loewner-below the exact diagonal. The current source inserts the archimedean term only on the original matrix diagonal (`entry(n,k)`, line 224), then propagates those entries with outward interval operations and fixed rational point coefficients. Consequently, assuming all other intervals/tails are valid, the computed component boxes contain the corresponding clipped finite matrix and residual.

This is the valid one-sided reading of the source intervals. They do not generally enclose the un-clipped exact matrix after signed basis changes. No PC65 finite matrix, tail, or odd comparison was reconstructed here.

## Clipping and congruence lemma

Let (D=\operatorname{diag}(d_1,\ldots,d_N)) be the exact diagonal contribution and let the computed intervals be (I_i=[\ell_i,u_i]), with the proved lower-bound property (\ell_i\le d_i). Define
\[
\tilde d_i=\min(d_i,u_i),\qquad \tilde D=\operatorname{diag}(\tilde d_i).
\]
Then (\ell_i\le\tilde d_i\le u_i), so every clipped coordinate lies inside its interval, and (D-\tilde D\succeq0). For every fixed real matrix (T),
\[
T^T D T-T^T\tilde D T=T^T(D-\tilde D)T\succeq0.
\]
Thus positivity of the clipped form implies positivity of the exact form. This conclusion is order-theoretic; it does not require the interval upper endpoint to enclose (d_i).

The fixed transformation condition is met by the code's final calculations: `X`, `V`, `XT`, and `coeff` are selected as rational point intervals (lines 245–250, 274–282). They are chosen from interval midpoints and heuristic eigendirections, but after selection they are fixed exact vectors; the later interval dot products outwardly enclose the clipped matrix under those vectors. Signed entries in these vectors do not harm the clipped-matrix argument.

## Why the two-sided interpretation fails

An exact rational example makes the distinction explicit. If (d=5) and (I=[1,3]), then (d\ge1), but (d\notin I). Multiplication by (-2) sends the interval to ([-6,-2]), which excludes (-10=-2d), while it includes the clipped value (-6=-2\min(d,3)).

For a congruence, take (D=\operatorname{diag}(5,2)), (\tilde D=\operatorname{diag}(3,2)), and (T=\begin{pmatrix}1&2\\-1&1\end{pmatrix}). Then
\[
T^TDT=\begin{pmatrix}7&8\\8&22\end{pmatrix},\quad
T^T\tilde DT=\begin{pmatrix}5&4\\4&14\end{pmatrix},
\]
and their difference is (\begin{pmatrix}2&4\\4&8\end{pmatrix}\succeq0). Entrywise interval multiplication contains the clipped congruence but can exclude the exact one. The script `experiments/worker-PC65-W02/clipped_interval_example.py` checks these rational identities.

## Trace through the current generator

- At lines 222–226, `sums[n].diag` is added only when (n=k); this is the necessary original-basis diagonal structure.
- The interval routines (lines 83–86) use outward floor/ceiling arithmetic. Other primitive validity is assumed here, not independently audited.
- The point-valued trial and basis coefficients are frozen before `brows`, `bu`, `upper`, `residues`, and `finite` are calculated (lines 245–250 and 274–285). Since the clipped input belongs to each diagonal interval, outward interval arithmetic contains its image under all these fixed linear maps.
- The rank/tail terms are then combined into interval entries `mat` (lines 310–319). Their validity is an external hypothesis of this audit.
- Symmetric entry intervals are intersected and converted to midpoints and radii (lines 320–324). The clipped residual, being symmetric and in both boxes, remains in this intersection.
- The weighted row subtraction `errors[i]=sum_j ceil(radius[i][j]*weight[j]/weight[i])` and (G=M-\operatorname{diag}(errors)) (lines 325–330) give (G\preceq S_{clip}): for every real (z), apply (2|z_i z_j|\le (w_j/w_i)z_i^2+(w_i/w_j)z_j^2) to the symmetric entry radii. Thus, if the exact lower matrix (G) is positive definite, the clipped finite residual is positive definite. The positive-pivot implication itself is conditional on correct exact Bareiss arithmetic, as covered by the prior PMA63-W05 scope.

The conclusion is therefore conditional and local: the diagonal upper-endpoint defect does not by itself invalidate this lower-matrix route, provided the PC65-W01 lower endpoint is valid for every positive-frequency diagonal, the special zero-mode `alpha` interval is valid, and the remaining moment, rate, prime, tail, interval, and high-complement arguments are sound. This audit does not certify those assumptions, the full Schur-complement reconstruction, or RH.

## Reproduction and provenance

From the repository root:

```sh
python3 experiments/worker-PC65-W02/clipped_interval_example.py
```

The script uses only Python's `fractions.Fraction`; it prints that the interval excludes the un-clipped congruence, contains the clipped congruence, and the Loewner difference is PSD.

Current source: `experiments/bc01-log13-regime.js`, blob `e5de03cc7ebba9309ad15d6fa313f823aee7c18b`. This audit concerns the diagonal interval semantics only; it does not alter the lead's files or replay any PC65 data.
