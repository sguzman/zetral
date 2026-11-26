# U72-02 even Cholesky single-direction Cauchy bound

- **ID:** U72-02-EVEN-CHOLESKY-DUAL-W01
- **Status:** READY_FOR_REVIEW
- **Starting commit:** `5e076c1` (current main); claim commit `ad0e106`
- **Scope:** Evaluate the inherited exact Cauchy allocation bound on one rationalized 10-coordinate direction from the standard proposal's failed leading block, for the `10^12` midpoint-Cholesky basis. This tests one direction and one basis only.

## Result

For the chosen vector, energy upper and finite lower quadratic terms are positive. However, two of the seven rank-term costs are negative (the 6th and 7th entries of `rankCosts`). The inherited Cauchy bound requires every component cost to be positive before applying `sum(cost_i/p_i) >= (sum sqrt(cost_i))^2`. It therefore cannot certify an all-positive-allocation obstruction on this direction. No square-root bound or ratio was computed.

This does not show that some allocation succeeds; it only shows that this particular one-direction Cauchy certificate is inapplicable with the signed component costs produced by this basis.

## Evidence and inputs

- Exact cost computation: `experiments/worker-u72-02-even-cholesky-dual-w01/cauchy_direction.py`.
- Exact results: `experiments/results/u72-62-25-even-cholesky-dual-w01/cauchy-direction.json`, `cauchy-output.txt`.
- Direction and transformed components: copied from `worker/u72-02-even-cholesky-witness-w01` at `8c2b4f4` (direction blob `d439d0095e6483d4f009e2c3d959c6ef6d439e03`; transform blob `594a20645811a066d21cfbb347c7d54ffae05776`).
- Factor-bearing proposal: copied from `worker/u72-02-even-gram-schmidt-w01` at `f2c2863`; blob `5fd45ea3d7e54b0c1ea088a9516ebc4f188f9b03`.

## Reproduction

From repository root with Python 3:

```sh
python3 experiments/worker-u72-02-even-cholesky-dual-w01/cauchy_direction.py
```

All component quadratic costs and sign checks use exact integers.

## Checked and unchecked

Checked: exact energy, finite, seven rank, and eighth costs for the pinned direction; the two negative rank costs make this Cauchy form unusable.

Unchecked: any alternate PSD majorant; other directions/bases/allocations; global obstruction; independent source reconstruction; and operator positivity.

## Recommendation

Do not report an all-allocation obstruction from this direction. A broader certificate would require positive semidefinite majorants for the signed rank terms or a different vector/basis; U72-04 remains lead-owned.
