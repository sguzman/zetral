# U72-03 odd sparse-basis dual sweep

- **ID:** U72-03-ODD-SPARSE-DUAL-W01
- **Status:** READY_FOR_REVIEW
- **Starting commit:** `5e076c1` (current main); claim commit `84cd8b9`
- **Scope:** On the single fixed U72 odd sparse-row basis from worker head `3c2ed88d7bf7669ef7a6599727b8f67d5cc1bd22`, exactly evaluate the inherited conservative Cauchy lower-bound obstruction on all coordinate and signed two-coordinate directions (2,209 total). This complements the prior exact sparse-row replay; it does not search larger-support vectors or other transforms.

## Result

All 2,209 tested directions had positive conservative terms, but none gave a strict obstruction for every positive allocation on this fixed basis. The largest floor ratio was `269577/1000000`, attained at the coordinate direction `e_0`; its ratio is far below 1. This direction is unchanged by the sparse shear. The search covers 47 coordinate directions plus 2,162 signed two-coordinate directions. It gives no information about directions with larger support, other bases, or the original operator.

For each integer direction x, the script bounds the allocation-dependent quadratic comparison below by `F(x)*D0*Q + (sum_i floor(sqrt(C_i(x))))^2`, using exact interval endpoints and positive integer component costs. It compares that lower bound with `E_upper(x)*D0*Q`; only a strict ratio above 1 would certify failure for all positive allocation shares along that direction. No such direction was found.

## Evidence and inputs

- Sweep source: `experiments/worker-u72-03-odd-sparse-dual-w01/cauchy_sweep.js`.
- Full result: `experiments/results/u72-62-25-odd-sparse-dual-w01/cauchy-sweep.json`.
- Pinned inputs copied from `worker/u72-03-odd-sparse-row-w01` at `3c2ed88d7bf7669ef7a6599727b8f67d5cc1bd22`: raw matrix `raw-t832.json`, transformed interval components and eighth bounds `transform.json`, and factor-bearing proposal `base-allocation.json`.

## Reproduction

From repository root with Node available:

```sh
node experiments/worker-u72-03-odd-sparse-dual-w01/cauchy_sweep.js
```

## Checked and unchecked

Checked: exact integer endpoint arithmetic for all 2,209 enumerated directions; enumeration includes every `e_i` and `e_i ± e_j` for `0 <= i < j < 47`; all 2,209 directions have positive energy, finite, rank and eighth terms; no conservative ratio exceeds 1.

Unchecked: directions with support three or greater; any global optimization over directions; other row transforms or allocation rules; independent reconstruction of input intervals; and positive definiteness of the full comparison.

## Recommendation

Do not infer an all-allocation obstruction from this finite search. It did not find a useful dual certificate for the sparse basis. Any further obstruction work should add a principled larger-support direction set or a certified global relaxation; U72-04 remains the independent reconstruction and audit.
