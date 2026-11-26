# U72-02 even midpoint-Cholesky precision refinement

- **ID:** U72-02-EVEN-CHOLESKY-REFINE-W01
- **Status:** READY_FOR_REVIEW
- **Starting commit:** `5e076c1` (current main); claim commit `0519a4c`
- **Scope:** Repeat the single even midpoint-Cholesky integerized transform from `worker/u72-02-even-gram-schmidt-w01` at denominator `10^18` instead of `10^12`; exact-replay inherited seed and standard proposal. This isolates coefficient-rounding sensitivity for one basis.

## Result

At 100 mpmath decimal digits, the normalized inverse-Cholesky row coefficients were rounded at `10^18`, giving a lower-triangular integer transform with all diagonal entries `10^18` (determinant `10^846`) and largest integer coefficient 142 bits. Exact component and tail regeneration succeeded.

The exact leading-minor counts are unchanged from the `10^12` basis:

- Inherited seed: **7/47**, no fixed-energy margin.
- Standard proposal: **9/47**, no fixed-energy margin.

The `10^12` transform's corresponding counts were 7/47 and 9/47. Increasing the coefficient rounding precision by six decimal places did not change either count on this fixed basis. Since the standard proposal remains a bounded failure and the outcome is unchanged, no new SLSQP run was made.

## Evidence and inputs

- `propose_transform.py` generates the rounded transform; `row-transform.json` records the rows and `cholesky-output.txt` records precision and scale.
- `transform.json` contains exact transformed components/tails. `seed-replay.json`, `float-replay.json`, and `replay-output.txt` contain the exact comparisons.
- Pinned raw matrix, allocation and seed are copied from `worker/u72-02-even-gram-schmidt-w01` at `f2c2863`; raw source blob `b6000240e5f35913c5371fa2675faa6ab168bbe0`.
- Transform and replay helpers are included under this worker directory. The transform helper marks diagonal-scaled rows as changed so their eighth bounds are recomputed.

## Reproduction

From repository root with Python 3, mpmath, and Node available:

```sh
python3 experiments/worker-u72-02-even-cholesky-refine-w01/propose_transform.py
node experiments/worker-u72-02-even-cholesky-refine-w01/replay_transform.js
```

## Checked and unchecked

Checked: 100-digit midpoint-Cholesky calculation; exact integer transform and determinant; exact transformed interval/tail regeneration; exact leading-minor replay of seed and standard proposal; same counts as the pinned `10^12` basis.

Unchecked: optimality of the midpoint basis or `10^18` rounding; other denominators/bases; all allocations; full interval positive definiteness; independent reconstruction of raw inputs; any global obstruction or operator positivity claim.

## Recommendation

Do not treat the precision increase as a new candidate. It produces no exact minor-count improvement over the `10^12` basis. Further work should change the row geometry or tail bound, rather than refine this integerization alone. U72-04 remains lead-owned.
