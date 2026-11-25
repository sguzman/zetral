# AIR03W02 — historical RRC Machin-bound replay

## Finding

The 24-term Machin arctangent upper bound `S24 + x^49/81` is strictly below the true pi when used at x=1/5. However, in the specific archived RRC02 runs at scale Q=10^30, replacing 81 by the correct next denominator 49 leaves the full generated JSON byte-for-byte unchanged. This is a bounded result for the RRC02 source and its h=33/20,17/10 runs; it does not validate the defective rational interval as an enclosure, other precisions, other affected sources, or the underlying analytic proof.

## Exact lattice analysis

`experiments/air03w02/pi-lattice-check.py` uses `Fraction` arithmetic. For the 24-term alternating partial `S24(x)` and `p=x^49`, the true remainder lies between `p/49-p*x^2/51` and `p/49`. Applying the lower endpoint at x=1/5 and the upper endpoint at x=1/239 in Machin's identity proves the true pi is at least `6.555593215090787...e-36` above the defective rational upper endpoint. The corrected endpoint is another `7.26204021546263...e-36` above the defective one. Both endpoints have the same ceiling after multiplication by `10^30`; the difference is under `0.0000073` lattice units.

Command: `python experiments/air03w02/pi-lattice-check.py`.

## Full replay

The original source is a byte-preserving extraction of commit `3a4f71d651f938ece521e3470d90bafd85b5ebb1` (`rrc02-larger-high-trial.js`). The corrected clone changes only the atan remainder denominator 81 to 49. Both were executed with Node v24.22.3:

```
node experiments/air03w02/rrc02-original.js > /tmp/air03w02-original.json
node experiments/air03w02/rrc02-corrected.js > /tmp/air03w02-corrected.json
cmp /tmp/air03w02-original.json experiments/results/rrc02-larger-high-trial.json
cmp /tmp/air03w02-corrected.json experiments/results/rrc02-larger-high-trial.json
```

Both `cmp` commands exited 0. The archive result's SHA-256 is `608adcc96ef45fcfd74c0a1067d9190ca978527b1a3d65017afd685d8ad6dc61`. Every row is exactly equal between original, corrected, and saved output, including all component intervals, selected basis/trial, lower integer matrices, pivots, and `certified` flags. All four rows (even/odd at h=33/20 and 17/10) remain marked `certified: true` as sufficient fixed-window comparisons. Their first principal pivots are respectively 720254961976, 896812053141982, 24030465648, and 43999766269749 on the 10^30 scale. These are not actual eigenvalue gaps.

## Limits

- The corrected full replay reruns the source's deterministic candidate selection; equality of its saved rational basis/trial and all rows means this instance also acts as a frozen-output replay, but it is not a separate implementation or runtime.
- This only resolves the effect of the pi endpoint at Q=10^30 for these four rows. It says nothing about the ten other affected source files noted in AIR01 or their historical scales.
- The result supports a candidate strict positivity comparison, not an actual negative restored eigenvalue, RH, independent verification, or a priority claim. AI-assisted; no human/formal review.
