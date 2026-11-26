# U72-02 even reconstruction — worker handoff

**Status:** READY_FOR_REVIEW (bounded negative result; no candidate pass)

**Starting main commit:** `5e076c163bf97f064a49272556145027bc72dbca`

**Scope:** Campaign LXXII U72-02 even sector at `h=62/25`, `J=128`, `KEM=20`, `T=832`, `M=16384`, `lowCount=47`. Worker branch: `worker/u72-02-even-reconstruction`. No shared campaign or state files changed.

## Result

Regenerated the even staged trial with 47 low modes and 370 trial-complement directions. All 47 upper-energy diagonal lower endpoints are positive. Generated all 8,146 even residual modes in 16 consecutive exact interval chunks, aggregated them into the 47-by-47 raw comparison, and regenerated a rational congruence transform by floating leading-block decorrelation followed by integer rounding. The transform has determinant `10^35`; its exact transformed tail reconstruction matches all 47 old eighth-bound entries and preserves 43 untouched entries as expected.

The candidate does **not** pass. The untransformed raw comparison is not positive definite (its stored exact Bareiss leading minors are positive through index 3 and fail at index 4). With the new transform and the U71 allocation remapped to 47 rows by splitting one old tail share, the exact U72 replay reaches 7/47 positive leading minors and fails at the next pivot. The float optimizer's own proposed allocation does worse (0/47 in the exact replay); it is not a valid allocation.

A bounded fixed-transform obstruction probe used an integer direction obtained by solving the first-seven-pivot Schur complement of the U71-seed replay. Exact interval evaluation and the conservative Cauchy allocation bound give loss/energy at least `638877/1000000` in that direction, below 1. This particular direction therefore does not prove failure for every positive allocation. No global all-allocation obstruction was established; a better allocation may still help this fixed basis. I also extended the leading-block transform through rows 1–8 and 1–12. Both variants exactly regenerated all 47 eighth-bound entries (39 and 35 untouched entries, respectively); the float proposals replay at 9/47 positive minors and the remapped U71 allocation at 7/47. Neither passes, and these failed allocations do not establish a fixed-basis obstruction. These are exact finite-arithmetic replay outcomes of the stored interval matrices, not evidence about the original analytic form.

## Evidence and scripts

- `experiments/u72-staged.js`: U72 witness-regime extension, trial generation, and finite interval chunk generation.
- `experiments/u72-assemble.js`: exact aggregation and raw comparison assembly.
- `experiments/u72-even-transform.js` and `experiments/u72-even-transform-runner.js`: decorrelation transform and exact transformed-component/tail regeneration; runner arguments `8` and `12` extend the changed row block. `experiments/u72-alternate-replay-runner.js` compares each transformed bound set under float-proposed and remapped U71 allocations.
- `experiments/u72-exact-replay.js`, `experiments/u72-proposal-runner.js`, `experiments/u72-seed-replay.js`: exact rational allocation replay, plus the float allocation diagnostic and U71-seed allocation diagnostic. `experiments/u72-fixed-transform-obstruction.js` and `experiments/u72-obstruction-runner.js` perform the bounded fixed-direction Cauchy obstruction probe.
- `experiments/results/u72-62-25-even-t832-trial.json`: staged trial.
- `experiments/results/u72-62-25-even-finite-*.json`: 16 disjoint chunks covering 94 through 16384 by even indices, 8,146 modes total.
- `experiments/results/u72-62-25-even-t832-raw.json`: aggregate raw intervals and baseline replay inputs.
- `experiments/results/u72-62-25-even-t832-transform.json`, `...-transform-8rows.json`, `...-transform-12rows.json`: integer transforms, transformed intervals, radii, and exact tail refresh.
- `experiments/results/u72-62-25-even-t832-allocation.json`, `...-baseline-replay.json`, `...-transformed-replay.json`: float proposal and exact replay outputs (the proposed allocation is rejected).
- `experiments/results/u72-62-25-even-t832-u71-seed-allocation.json`, `...-u71-seed-replay.json`: remapped prior allocation and exact replay; transformed result is 7/47. `...-8rows-allocation-replay.json` and `...-12rows-allocation-replay.json` preserve the follow-up comparisons; float allocations reach 9/47 and seed allocations 7/47 for both. `experiments/results/u72-62-25-even-t832-fixed-transform-obstruction.json`: exact quadratic bounds for the Schur-complement direction; ratio lower bound `638877/1000000`, not an obstruction.

## Reproduction

From repository root, using Node v24.22.3:

```sh
node experiments/u72-staged.js trial even > experiments/results/u72-62-25-even-t832-trial.json
for start in 94 1118 2142 3166 4190 5214 6238 7262 8286 9310 10334 11358 12382 13406 14430 15454; do
  end=$((start+1022)); [ "$end" -gt 16384 ] && end=16384
  node experiments/u72-staged.js finite experiments/results/u72-62-25-even-t832-trial.json "$start" "$end" > "experiments/results/u72-62-25-even-finite-${start}-${end}.json"
done
node experiments/u72-assemble.js > experiments/results/u72-62-25-even-t832-raw.json
node experiments/u72-even-transform-runner.js
node experiments/u72-proposal-runner.js
node experiments/u72-seed-replay.js
node experiments/u72-obstruction-runner.js
node experiments/u72-even-transform-runner.js 8
node experiments/u72-alternate-replay-runner.js 8
node experiments/u72-even-transform-runner.js 12
node experiments/u72-alternate-replay-runner.js 12
```

The transform coefficients were selected from double-precision correlations of the raw upper-energy matrix and then rounded to integers. The final transformed intervals and both exact replays use the stored BigInt interval machinery. This is a numerical basis-selection heuristic, not a proof that the chosen transform is optimal.

## Checked and unchecked

**Checked:** trial parameter metadata and positive upper-energy diagonal endpoints; even-range coverage/count; interval aggregation through the exact assembler; exact transformed component and eighth-bound regeneration; baseline equality checks inside exact replay; Bareiss pivots and exact replay outcome for both allocations.

**Not checked:** independent regeneration of the endpoint-12 rational witness (U72-01 audit is separate); independent original-form evaluation; an all-allocation obstruction; a successful even candidate; odd-sector work; RH, analytic construction, CI, or novelty claims. No software test suite was run.

## Recommendation

Keep the U72-02 even campaign task open. Try a different row-selection strategy involving more than the first five low coordinates and jointly optimize the exact allocation; do not reuse either allocation here as a passing certificate. U72-03 odd remains separate.
