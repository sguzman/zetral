# U72-02 even reconstruction — worker handoff

**Status:** READY_FOR_REVIEW (bounded negative result; no candidate pass)

**Starting main commit:** `5e076c163bf97f064a49272556145027bc72dbca`

**Scope:** Campaign LXXII U72-02 even sector at `h=62/25`, `J=128`, `KEM=20`, `T=832`, `M=16384`, `lowCount=47`. Worker branch: `worker/u72-02-even-reconstruction`. No shared campaign or state files changed.

## Result

Regenerated the even staged trial with 47 low modes and 370 trial-complement directions. All 47 upper-energy diagonal lower endpoints are positive. Generated all 8,146 even residual modes in 16 consecutive exact interval chunks, aggregated them into the 47-by-47 raw comparison, and regenerated a rational congruence transform by floating leading-block decorrelation followed by integer rounding. The transform has determinant `10^35`; its exact transformed tail reconstruction matches all 47 old eighth-bound entries and preserves 43 untouched entries as expected.

The candidate does **not** pass. The untransformed raw comparison is not positive definite (its stored exact Bareiss leading minors are positive through index 3 and fail at index 4). With the new transform and the U71 allocation remapped to 47 rows by splitting one old tail share, the exact U72 replay reaches 7/47 positive leading minors and fails at the next pivot. The float optimizer's own proposed allocation does worse (0/47 in the exact replay); it is not a valid allocation. These are exact finite-arithmetic replay outcomes of the stored interval matrices, not evidence about the original analytic form.

## Evidence and scripts

- `experiments/u72-staged.js`: U72 witness-regime extension, trial generation, and finite interval chunk generation.
- `experiments/u72-assemble.js`: exact aggregation and raw comparison assembly.
- `experiments/u72-even-transform.js` and `experiments/u72-even-transform-runner.js`: decorrelation transform and exact transformed-component/tail regeneration.
- `experiments/u72-exact-replay.js`, `experiments/u72-proposal-runner.js`, `experiments/u72-seed-replay.js`: exact rational allocation replay, plus the float allocation diagnostic and U71-seed allocation diagnostic.
- `experiments/results/u72-62-25-even-t832-trial.json`: staged trial.
- `experiments/results/u72-62-25-even-finite-*.json`: 16 disjoint chunks covering 94 through 16384 by even indices, 8,146 modes total.
- `experiments/results/u72-62-25-even-t832-raw.json`: aggregate raw intervals and baseline replay inputs.
- `experiments/results/u72-62-25-even-t832-transform.json`: integer transform, transformed intervals, radii, and exact tail refresh.
- `experiments/results/u72-62-25-even-t832-allocation.json`, `...-baseline-replay.json`, `...-transformed-replay.json`: float proposal and exact replay outputs (the proposed allocation is rejected).
- `experiments/results/u72-62-25-even-t832-u71-seed-allocation.json`, `...-u71-seed-replay.json`: remapped prior allocation and exact replay; transformed result is 7/47.

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
```

The transform coefficients were selected from double-precision correlations of the raw upper-energy matrix and then rounded to integers. The final transformed intervals and both exact replays use the stored BigInt interval machinery. This is a numerical basis-selection heuristic, not a proof that the chosen transform is optimal.

## Checked and unchecked

**Checked:** trial parameter metadata and positive upper-energy diagonal endpoints; even-range coverage/count; interval aggregation through the exact assembler; exact transformed component and eighth-bound regeneration; baseline equality checks inside exact replay; Bareiss pivots and exact replay outcome for both allocations.

**Not checked:** independent regeneration of the endpoint-12 rational witness (U72-01 audit is separate); independent original-form evaluation; an all-allocation obstruction; a successful even candidate; odd-sector work; RH, analytic construction, CI, or novelty claims. No software test suite was run.

## Recommendation

Keep the U72-02 even campaign task open. Try a different row-selection strategy involving more than the first five low coordinates and jointly optimize the exact allocation; do not reuse either allocation here as a passing certificate. U72-03 odd remains separate.
