# AIR01–02 — Interval integrity and frozen h=1.95 replay

2026-11-25. AI-assisted arithmetic audit and bounded replay. No independent human/formal review, RH proof, actual negative eigenvalue, or priority claim.

## AIR01: elementary interval audit

The corrected `experiments/p7w03-adaptive-corrected.js` uses fixed-point endpoints at `Q=10^42`. The integer `floor`/`ceil` helpers handle negative denominators by flipping signs, then use Euclidean floor; `R(n,d)` is `[floor(nQ/d),ceil(nQ/d)]`. Addition, negation and subtraction preserve endpoint order. The optimized multiplication branches are the exact endpoint hull for the four sign-definite quadrants; the generic four-product branch handles intervals crossing zero. Division rejects any denominator interval containing zero; its positive-denominator shortcuts are the corresponding monotone endpoint formulas, with a four-quotient fallback for all remaining cases. The square routine uses monotonicity off zero and `[0,max(endpoint²)]` when the input crosses zero.

`experiments/air01-interval-audit.py` independently exercises directed rounding with exact integers/Fractions, compares the sign-specialized multiplication/division/square branches against exact endpoint hulls, and checks zero-divisor rejection. It also checks the analytic input domains and remainder forms used by the logarithm, exponential, trigonometric and arctangent routines. This is a bounded primitive audit, not a proof that every call site in the matrix program satisfies its preconditions; the frozen replay adds range guards for the logarithm, exponential and trigonometric calls it exercises.

### Defect and affected history

I found a real underbound in ten older sources: each summed 24 alternating arctangent terms, leaving the next numerator `p=x^49`, but divided it by 81 when forming the remainder. The first omitted alternating term has denominator 49. At `x=1/5`, the exact alternating-series lower bound on the remainder, `x^49/49 - x^51/51`, is strictly larger than the old claimed upper bound `x^49/81`. In the Machin combination, the resulting `pi` upper endpoint misses the true value by at least `6.55559e-36` (about 6.56 million units at scale `10^42`).

The older source files matching that invalid pattern are:

```
experiments/p7w02-prime-seven-certificate.js
experiments/p7w03-adaptive-high-trial.js
experiments/p7w03-higher-moment-extended.js
experiments/p7w03-higher-moment-prime.js
experiments/pmw03-prime-five-certificate.js
experiments/pmw03-precise-prime-five.js
experiments/rmt03-sixth-order-rate.js
experiments/rrc02-larger-high-trial.js
experiments/rrc03-extended-rate-residual.js
experiments/rrc03-fine-lattice.js
```

Their dependent raw interval results must not be relied on individually without corrected replay. In particular, the earlier worker branch `worker/rrc02-rrc03-w01` used a clone of `pmw03-precise-prime-five.js`; its h=1.65 and h=1.70 findings are not certified until rerun with a valid `pi` enclosure. The defect is specific to those 24-term `atan` routines. The `logUnit` series also uses denominator 81, but after 40 terms its next power is `r^81`, so that logarithm tail denominator is correct. The current `p7w03-adaptive-corrected.js` uses 48 terms, `p=x^97`, and denominator 97; it is not affected by this arctangent defect.

For other primitive domains: `logUnit` is used after scaling its positive argument into `[1,2]`, so `r=(x-1)/(x+1)` lies in `[0,1/3]` and the positive geometric tail `2p/[81(1-r²)]` applies. `expAny` halves a nonnegative input until it is at most `1/2`; the alternating `expneg` terms then decrease and the next-term enclosure applies. `atanNear` enforces `|a|<=1/2`; `atanPos` handles positive inputs by the reciprocal identity. `trig` uses an integer period reduction; for the source calls with nonnegative phase intervals, the resulting Taylor argument is within `2π` up to the propagated interval width. At that range the sine and cosine terms are decreasing by their 41st omitted terms, so the explicit omitted-term denominators 82·83 and 81·82 are valid. The guarded frozen replay checks these conditions for every phase call it recomputes.

## AIR02: frozen full-matrix replay

`experiments/air02-frozen-certificate-replay.js` is a standalone replay of the corrected h=39/20 (1.95) source. It loads the persisted exact rational low basis and high trial from the parity-specific raw JSON, checks their shapes and exact basis Gram diagonal dominance, then recomputes all low/cross/high entries, finite residual Gram, moment tails, outward matrix radii, lower integer comparison and Bareiss pivots. It skips the trial LDL solve and Jacobi basis selection entirely. It also guards the `logUnit`, `expneg` and trig Taylor input ranges exercised by the complete recomputation.

Commands:

```
python3 experiments/air01-interval-audit.py
node experiments/air02-frozen-certificate-replay.js --even > /tmp/air02-even.json
node experiments/air02-frozen-certificate-replay.js --odd > /tmp/air02-odd.json
cmp experiments/results/p7w03-adaptive-corrected-even.json /tmp/air02-even.json
cmp experiments/results/p7w03-adaptive-corrected-odd.json /tmp/air02-odd.json
python3 experiments/air02-verify-frozen-output.py experiments/results/p7w03-adaptive-corrected-even.json experiments/results/p7w03-adaptive-corrected-odd.json
```

Both parity replays reproduced the saved JSON byte for byte in this environment. An independent Python `Fraction` LDL pass over each saved integer lower matrix confirmed all 18 pivots are strictly positive and independently found the saved rational basis determinants to be nonzero. At `Q=10^42`, the first LDL pivots divided by Q are approximately `3.24428e-28` (even) and `1.01840e-24` (odd); high-weight lower endpoints divided by Q are approximately `0.15110` and `0.17852`. These are pivots of the certified lower comparison, not eigenvalue margins.

The frozen JS replay still shares the corrected source's interval formulas; the Python pass independently checks the resulting exact integer matrix, not its analytic entries. AIR03 must continue the audit of those formulas against the ECR/P7W03 derivations and verify that any prior affected artifacts are either corrected and replayed or explicitly left unrelied upon.
