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

## Scoped formula audit

I checked the implementation's tail factors against RMT01. The source uses `f1=CL²/((M-1)g)`, `f2=2/(3(M-1)^3 g)`, `f3=4CL²/(5(M-1)^5 g)`, and the diagonal fourth remainder `4q C4_k²/(7(M-1)^7 g)`, with `g=g_(M+1)`. These are the stated four-term weighted-Cauchy constants combined with upper integral bounds on the parity-restricted tails. Its `C4` accumulates `(|CL|/m) sum |a_j|j^4`, `sum |a_j d_j|j²`, denominator `1-(K/m)²`, and `delta |V_H|`, matching the coefficient in RMT01. The signed rows `S0`, `S2`, and `V=V_H-D0` are formed before the matrix outer products. This is a source-level consistency check; it does not independently rederive the prime overlap identity, `CL`, or the analytic fourth-order remainder.

For the six saved cases, each `highWeight` lower endpoint is positive. The odd first LDL pivots are positive at all three tested lengths. The even first pivots are negative but tiny (between about `-9.01e-15` and `-5.98e-15` after dividing the stored integers by `Q=10^24`). These are failed sufficient pivots, not negative spectral evidence. The row diagnostics show the first even directional diagonal lower bound at `h=3/2` is positive (`1.491858556e-15`) while its row-radius subtraction is about `9.211375862e-15`; this points to enclosure-radius loss in that basis as a plausible immediate bottleneck. It motivates direct signed directional interval evaluation or a better congruence before merely increasing the cutoff. The exact negative pivot at other lengths likewise does not prove the underlying comparison indefinite.
