# U72-03 odd-sector reconstruction — worker handoff

**Status:** READY_FOR_REVIEW (bounded negative result; no odd candidate pass)

**Starting main commit:** `5e076c163bf97f064a49272556145027bc72dbca`

**Scope:** Campaign LXXII odd sector at `h=62/25`, `J=128`, `KEM=20`, `T=832`, `M=16384`, `lowCount=47`. Worker branch: `worker/u72-03-odd-reconstruction`. The branch was selected after the remote branch inventory had no U72-03 worker branch. No shared campaign state or coordination file was edited.

## Result

Regenerated the odd staged trial: 47 low modes and 369 trial-complement directions; all 47 upper-energy diagonal lower endpoints are positive. Generated and assembled every odd residual mode from 95 through 16383, 8,145 modes total, as 16 exact interval chunks.

Tested two transforms against fresh U72 data. First, the U71 odd two-row integer transform (determinant `10^18`) was rerun with U72 factors, eighth-tail refresh, and exact replay; it matched all 47 original eighth bounds and 45 unchanged transformed bounds. The float-proposed allocation produced 7/47 positive leading minors. Remapping the U71 allocation onto 47 rows produced 4/47. Neither replay returns a positive fixed-energy grid margin. An exact 11-point convex allocation sweep from the remapped U71 shares to equal shares yields 4/47 at the seed, 7/47 for blend numerators 1–9, and 6/47 at equal shares. No sweep point returns a positive margin. An exact conservative Cauchy obstruction sweep over all 2,209 coordinate and signed two-coordinate directions in this transformed basis finds no all-allocation obstruction; every tested direction has positive conservative terms, but the largest loss/energy lower-bound ratio is only `269577/1000000`. A deterministic floating multi-start projected-gradient search from the 80 best sparse directions also stopped at the coordinate direction `e_0`, with displayed ratio `0.2695777389344755`; this local search is heuristic and is not a global bound. The finite direction sweep does not rule out obstruction directions with larger support or establish that a passing allocation exists.

Second, a leading-block decorrelation from the U72 raw upper-energy matrix was computed in double precision and rounded to an integer two-row transform (determinant `10^17`). Exact transformed component and eighth-tail bounds were regenerated (47 original bounds and 45 unchanged bounds). Its float-proposed allocation produced 0/47 positive leading minors; the remapped U71 allocation produced 4/47. Neither replay returns a positive fixed-energy grid margin.

These failures do not show that every odd allocation or transform fails. No all-allocation obstruction or arithmetic-form obstruction was established. The fresh U72 data do not inherit LXXI's odd margin; the requested positive fixed-energy margin was not achieved.

## Evidence and scripts

- `experiments/u72-staged.js`: endpoint-12 staged regime, odd trial and interval generation.
- `experiments/u72-assemble.js`: exact chunk aggregation; `--odd` selects the odd sector.
- `experiments/u72-odd-transform.js`, `experiments/u72-odd-transform-runner.js`, `experiments/u72-odd-replay-runner.js`: U71 two-row candidate transform freshly replayed at U72 parameters.
- `experiments/u72-odd-gs-transform-runner.js`, `experiments/u72-odd-gs-replay-runner.js`: double-precision leading-block decorrelation, integer rounding, fresh exact replay.
- `experiments/u72-exact-replay.js`: BigInt Bareiss and fixed-energy grid-margin replay. `experiments/u72-odd-obstruction-sweep.js` and `...-obstruction-sweep.json` preserve the exact bounded coordinate/two-coordinate Cauchy obstruction search. `experiments/u72-odd-allocation-dual-search.js` and `...-dual-search.json` preserve the separate heuristic dense-direction local search.
- `experiments/results/u72-62-25-odd-t832-trial.json`: odd staged trial.
- `experiments/results/u72-62-25-odd-finite-*.json`: 16 nonoverlapping exact chunks covering 95..16383 by odd indices (8,145 modes).
- `experiments/results/u72-62-25-odd-t832-raw.json`: assembled raw intervals.
- `experiments/results/u72-62-25-odd-t832-factors.json`, `...-transform.json`, `...-allocation.json`, `...-baseline-replay.json`, `...-transformed-replay.json`, `...-u71-seed-allocation.json`, `...-u71-seed-replay.json`: U71 transform with freshly generated U72 factors/refresh and exact outcomes.
- `experiments/results/u72-62-25-odd-t832-gs-factors.json`, `...-gs-transform.json`, `...-gs-allocation-replay.json`: second transform and exact outcomes. `experiments/u72-odd-allocation-blend.js` and `...-allocation-blend.json` preserve the 11-point exact allocation sweep for the first transform.

## Reproduction

From repository root with Node v24.22.3:

```sh
node experiments/u72-staged.js trial odd > experiments/results/u72-62-25-odd-t832-trial.json
for start in 95 1119 2143 3167 4191 5215 6239 7263 8287 9311 10335 11359 12383 13407 14431 15455; do
  end=$((start+1022)); [ "$end" -gt 16383 ] && end=16383
  node experiments/u72-staged.js finite experiments/results/u72-62-25-odd-t832-trial.json "$start" "$end" > "experiments/results/u72-62-25-odd-finite-${start}-${end}.json"
done
node experiments/u72-assemble.js --odd > experiments/results/u72-62-25-odd-t832-raw.json
node experiments/u72-odd-transform-runner.js
node experiments/u72-odd-replay-runner.js
node experiments/u72-odd-obstruction-sweep.js
node experiments/u72-odd-allocation-dual-search.js
node experiments/u72-odd-allocation-blend.js
node experiments/u72-odd-gs-transform-runner.js
node experiments/u72-odd-gs-replay-runner.js
```

The first transform's rows are inherited from the U71 odd candidate, but all U72 components, tail bounds, allocations and exact comparisons were regenerated. The second transform's row selection uses floating correlations and is only a basis-selection heuristic. Final interval assembly, tail refresh and replay use the repository's exact integer interval machinery. No software test suite was run.

## Checked and unchecked

**Checked:** U72 parameter metadata; all positive staged upper-energy diagonals; full odd residual range/count and assembly; factor generation; exact transformed interval and tail refresh; exact Bareiss replay and grid-margin failure for both transforms and both listed allocations.

**Not checked:** independent regeneration of the U72-01 endpoint-12 witness (separate audit branch); all possible odd transforms or allocations; independent original-form evaluation; RH, CI, novelty, or a Hilbert–Pólya construction. Campaign acceptance remains with the lead.

## Recommendation

Treat U72-03 as a failed bounded candidate attempt, not an obstruction. A different odd basis/allocation is required to seek a positive fixed-energy margin. The tested U71 transform alone is insufficient at the U72 endpoint.
