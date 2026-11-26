# U72-02 even summed-correlation row selection

- **ID:** U72-02-EVEN-SUM-CORR-W01
- **Status:** READY_FOR_REVIEW
- **Starting commit:** `5e076c1` (current main); claim commit `32c05e8`
- **Scope:** Test whether a distinct sparse congruence basis results from ranking non-leading targets 13–46 by the exact sum of squared midpoint correlations with all earlier rows; for each target, shear against its strongest earlier parent. This is a selection-criterion comparison on the U72 even T=832 raw matrix, not an exhaustive search.

## Result

The summed-correlation rule selected exactly the same 12 targets, parents, and integer coefficients as the earlier strongest-single-correlation rule: targets `[18,19,24,25,32,33,35,36,38,41,42,46]` with the same parent assignments and integer coefficients as the earlier selection (the parent assignments include rows 41→1 and 33,24→2). The resulting row matrix is exactly equal entry-by-entry to the prior selection, and recomputation produced the same transform JSON Git blob `171dc8721a8a1cacb060750ea7c81d799cdc806a` as the pinned transform on `worker/u72-02-even-sparse-row-w01` at `1bcd1d0`.

Therefore this rule produced no distinct basis to optimize or replay. The prior exact transform and allocation replay remain the applicable evidence: inherited seed 4/47 positive minors; SLSQP candidate 4/47; standard float proposal stopped at a whitening pivot. These are results for that fixed transform only, not an all-basis or all-allocation claim.

## Evidence and inputs

- Exact summed-correlation selector: `select_rows.py`.
- Full row-selection output and rational scores: `experiments/results/u72-62-25-even-sum-corr-w01/row-selection.json`.
- Raw matrix copied from `worker/u72-02-even-sparse-row-w01` at commit `1bcd1d0`, source blob `b6000240e5f35913c5371fa2675faa6ab168bbe0`.
- Exact comparison target and replay source: `worker/u72-02-even-sparse-row-w01` at `1bcd1d0`; prior `row-selection.json` rows compare equal, and prior `transform.json` blob equals the recomputed transform's blob above.

## Reproduction

From repository root with Python 3:

```sh
python3 experiments/worker-u72-02-even-sum-corr-w01/select_rows.py
```

The script uses exact Python `Fraction` arithmetic for all midpoint correlations and writes the full exact selection under the result directory. Compare its `rows` field to the previous worker's `row-selection.json`; they are equal. The prior worker branch contains the exact transform and replay commands for the identical row matrix.

## Checked and unchecked

Checked: aggregate correlation scores computed exactly; all 12 selected row entries match the earlier criterion's entries; recomputed full exact transform JSON hash matches the existing transform; no distinct candidate basis was generated.

Unchecked: any alternative rule beyond this summed-correlation ranking; different parents per row; other transform families; global allocation or operator claims. No new SLSQP run was made because the candidate transform is byte-identical to the already replayed one.

## Recommendation

Do not treat summed-correlation ranking as a new candidate here. A useful next selection rule must change the row matrix or parent assignment before another costly optimization/replay is justified. U72-04 remains the independent reconstruction and audit.
