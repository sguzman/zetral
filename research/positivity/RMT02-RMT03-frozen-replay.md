# RMT02–03 — Frozen rational replay and bounded outcomes

2026-11-25. Worker reproducibility handoff based on the current main artifacts. This does not replace the lead's RMT02–03 derivation or constitute an independent audit of their analytic inequalities.

## Replay finding

The main-branch program `experiments/rmt03-rational-moment-tail.js` selects a rational finite trial and low congruence basis by first using `Number`/`Math` computations. Running it again in this environment produced slightly different integer pivots and coefficients from the committed raw file `experiments/results/rmt03-rational-moment-tail.json`. The selected objects remain rational after rounding, but the raw output is not byte-stable under a fresh floating-point selection pass.

`experiments/rmt03-rational-moment-tail-frozen.js` retains the interval calculation and validates the frozen rational basis' invertibility, while reading the exact basis and trial coefficients from the committed raw JSON. The chosen rational objects are admissible without any claim that their floating-point selection is reproducible. The frozen run reproduced the committed JSON byte for byte:

```
node experiments/rmt03-rational-moment-tail-frozen.js > /tmp/rmt03-frozen.json
cmp experiments/results/rmt03-rational-moment-tail.json /tmp/rmt03-frozen.json
```

This checks deterministic arithmetic from the recorded rational inputs. It is not an independent implementation of the full interval program and does not validate the analytic source bounds.

## Bounded results carried forward

The raw run contains both parity sectors at `h=3/2`, `31/20`, and `8/5`, with `J=1024`, `M=1024`, `S=49`, and `T=96`. The odd-sector interval LDL passes at all three lengths. The even-sector first lower pivot is negative at each length, so the sufficient certificate is inconclusive there; these pivots do not establish a negative eigenvalue. The recorded high weights are strictly positive in all six cases, so failure occurs in the low comparison enclosure rather than the tail coercivity threshold.

The saved exact trial and congruence basis are enough to make each reported comparison reproducible by the frozen runner. The next audit should inspect the fourth-order coefficient `C4`, the parity tail sums and row-radius Loewner correction, then seek an independent arithmetic implementation before extending the window. No RH proof, actual negative restored eigenvalue, novelty claim or independent human/formal review is established here.
