# FDA03-W01 — Vector-box Gram bounds for signed moments

Date: 2026-11-25 UTC. This is an independent worker diagnostic of the stored FDA02 even interval data, not a replay of the arithmetic generator.

## Bound

Each of the seven signed-moment deductions has the form (R=c,v v^T), with (c>0) and one interval-enclosed moment vector (v\in\mathbb R^{32}). Let the saved intervals give a rational center \(\bar v\) and component radii \(\rho_i\), so that \(|v_i-\bar v_i|\le\rho_i\). Suppose \(c\le c_+\). For every \(x\in\mathbb R^{32}\) and \(\epsilon>0\),

\[
x^T R x=c(v^Tx)^2\le c_+(1+\epsilon)(\bar v^Tx)^2
+c_+(1+\epsilon^{-1})\|\rho\|_2^2\|x\|_2^2.
\]

Thus

\[
R\preceq c_+\bar v\bar v^T+\bigl(\epsilon A+(1+\epsilon^{-1})B\bigr)I,
\quad A=c_+\|\bar v\|_2^2,\quad B=c_+\|\rho\|_2^2.
\]

The optimized scalar excess is \(B+2\sqrt{AB}\), attained at \(\epsilon=\sqrt{B/A}\) when \(A,B>0\). This preserves the vector Gram structure: component uncertainty is paid as one isotropic Loewner error rather than expanded into 1,024 independent matrix-entry errors. It is a one-sided upper bound, appropriate because these rank-one terms are subtracted in the lower comparison.

For the stored data, \(c_+\) is obtained rigorously from any coordinate interval bounded away from zero: if \(R_{ii}\subseteq[L_i,U_i]\) and \(|v_i|\ge a_i>0\), then \(c\le U_i/a_i^2\). The script takes the minimum of these valid rational upper bounds over usable diagonal coordinates. All arithmetic, including the final upward rounding of square roots to the saved \(10^{66}\) lattice, uses integers and `Fraction`.

## Stored-data diagnostic

Input: `experiments/results/fda02-23-10-even.json` at scale \(Q=10^{66}\), pinned on source main `98de91ec03b7e2b3fc36bea49ce5e4fc56e09ded` (blob `1f948873e66234188409e0f95fee5447d782a137`), with its saved vectors `S0,V2,S2,V4,S4,V6,S6` and matching rank-one component intervals. Reproduce with:

```sh
python experiments/fda03w01-correlated-moment-bounds.py
```

The exact lattice excess bounds, in that order, are:

| Family | Excess upper on \(10^{-66}\) lattice |
| --- | ---: |
| S0 | 5 |
| V2 | 1,435,295,425,698,241 |
| S2 | 3 |
| V4 | 312,710,424,097 |
| S4 | 3 |
| V6 | 4,259,753 |
| S6 | 3 |

Their sum is \(1,435,608,140,382,105/10^{66}\). On the same saved input, summing the seven componentwise rank-matrix interval radii and applying the archived diagonal-weight row bound gives approximately \(6.82265492\times10^{-34}\), about \(4.75\times10^{17}\) times larger in scale. The archived maximum full weighted row radius is approximately \(8.25417078\times10^{-26}\); the grouped excess is smaller in scale, but that comparison alone does not establish a better positive-definiteness certificate. The bounds and weighted sums are accumulated exactly; the script's displayed scientific-notation ratios are approximate diagnostics only.

## Full saved-data assembly

The script now also replaces all seven rank-one intervals in the even lower comparison by their grouped Loewner upper matrices. Each central Gram entry is rounded to the nearest \(10^{-66}\) lattice point; a diagonal allowance of \(7\cdot32/(2Q)=112/Q\) covers the seven symmetric rounding errors in operator norm. It subtracts the unchanged saved upper bound for the finite correction and eighth-order diagonal remainder, symmetrizes the remaining intervals by intersection, and applies the saved positive diagonal weights to their exact residual radii. Fraction-free Bareiss elimination then gives **32/32 positive leading minors** for the resulting symmetric integer lower matrix on the \(2Q\) lattice. The first leading minor is exactly `354314337079607328911479` on that lattice.

The script writes `experiments/results/fda03w01-grouped-even-reassembly.json`, including the full exact lower matrix, all 32 Bareiss leading minors, the coefficient upper bounds, and the row radii. Re-running the command above regenerates this file deterministically. This is an exact positivity certificate for the *saved interval comparison data under this alternative assembly*. The archived primitive and moment intervals, high-block interval, finite matrix, and remainder remain premises inherited from the lead's generator; this work does not independently validate those inputs or the original-form normalization.

## Scope and conclusion

This proves a general enclosure lemma and gives an exact-arithmetic application to the archived moment boxes. It reduces the seven signed-moment interval deductions and the exact assembled even comparison remains positive. The parity power-sum and remainder bounds are unchanged. The exact certificate is conditional on the archived intervals; original-form normalization, independent interval generation, odd-parity grouped assembly, and human/formal review remain open. No RH or operator-construction conclusion follows.
