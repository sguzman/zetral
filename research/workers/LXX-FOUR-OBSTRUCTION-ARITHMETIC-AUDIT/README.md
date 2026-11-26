# Four-direction obstruction arithmetic audit

The exact evidence blob
`experiments/results/lxx-123-50-even-t832-four-obstruction.json` gives a
fixed-direction allocation bound. I independently reconstructed the
transformed component intervals from the stored trial and all 12 finite
chunks, replayed all 54 directional energy/finite/rank/eighth interval sums,
then checked its integer square-root, Cauchy-sum, numerator, denominator, and
ratio-floor arithmetic.

```sh
python3 experiments/worker-LXX/audit_four_obstruction_arithmetic.py
python3 experiments/worker-LXX/audit_four_obstruction_direction.py
```

The replay confirms the loss-lower / energy-upper ratio exceeds
`1061659/1000000`; the finite-only ratio floor is `839377/1000000`. Of the
52 cost entries, 16 have positive lower numerators and contribute floor square
roots. Negative rank lower endpoints are discarded, as required to use the
stated positive-semidefinite rank-majorant assumption. The source's Cauchy
argument then yields a lower bound uniform over positive allocations summing
to one for this fixed basis and vector.

The directional script recomputes the component interval quadratic sums in
Python after reconstructing the stored comparison and four-direction
congruence. The companion `PSD-STRUCTURE.md` explains the source-form Gram
argument for the seven PSD terms and its high-guard condition.

Scope limitation: these checks do not establish an obstruction for another
basis, allocation model, remainder bound, or the underlying operator. They
are an independent audit of this stored fixed-basis comparison, not a full
campaign review.
