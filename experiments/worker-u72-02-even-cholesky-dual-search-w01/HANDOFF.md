# U72-02 even Cholesky Cauchy direction search

- **ID:** U72-02-EVEN-CHOLESKY-DUAL-SEARCH-W01
- **Status:** READY_FOR_REVIEW
- **Starting commit:** `5e076c1` (current main); claim commit `3b946c9`
- **Scope:** On the fixed `10^12` midpoint-Cholesky basis, heuristically search directions supported on the first 10 coordinates for positive finite, energy, seven rank, and eighth costs, then exact-test a rationalized candidate with the inherited Cauchy bound.

## Result

SciPy 1.17.0 SLSQP was started from the 20 signed coordinate vectors plus the previous negative direction (21 starts). Twenty starts returned floating candidates with positive costs; 7 reported successful solver termination. The best floating ratio was `0.8731811577321992` (start 17, success, 263 iterations), below the strict-obstruction threshold 1.

After rationalization at denominator `10^20`, exact recomputation gave a negative seventh rank cost. Thus the exact positive-cost hypotheses fail, and no all-allocation Cauchy obstruction is certified. The floating search is local and restricted to the first ten coordinates; it gives no conclusion about other directions or allocations.

## Evidence and inputs

- Search and exact post-check: `experiments/worker-u72-02-even-cholesky-dual-search-w01/search_directions.py`.
- Exact candidate, solver log, and cost breakdown: `experiments/results/u72-62-25-even-cholesky-dual-search-w01/direction-search.json`, `search-output.txt`.
- Raw matrix, transformed components and earlier direction copied from `worker/u72-02-even-cholesky-dual-w01` at `9d5600a`; factor-bearing proposal copied from `worker/u72-02-even-gram-schmidt-w01` at `f2c2863`.

## Reproduction

From repository root with Python 3, NumPy, and SciPy available:

```sh
python3 experiments/worker-u72-02-even-cholesky-dual-search-w01/search_directions.py
```

Floating SLSQP results are diagnostics. The candidate cost signs and any obstruction ratio are recomputed with exact Python integer arithmetic after rationalization.

## Checked and unchecked

Checked: specified starts and solver status counts; best displayed floating score; exact signs for all candidate quadratic costs after rationalization; no valid strict exact obstruction from this candidate.

Unchecked: global optimality of the local search; directions outside the first ten coordinates; larger-support certified searches; other bases; independent input reconstruction; any global operator claim.

## Recommendation

Do not report an all-allocation obstruction from this search. The bounded direction family and rationalized candidate did not produce one. U72-04 remains lead-owned.
