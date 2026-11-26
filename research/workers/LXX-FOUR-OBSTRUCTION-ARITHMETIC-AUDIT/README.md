# Four-direction obstruction arithmetic audit

The exact evidence blob
`experiments/results/lxx-123-50-even-t832-four-obstruction.json` gives a
fixed-direction allocation bound. I independently replayed its integer
square-root, Cauchy-sum, numerator, denominator, and ratio-floor arithmetic.

```sh
python3 experiments/worker-LXX/audit_four_obstruction_arithmetic.py
```

The replay confirms the loss-lower / energy-upper ratio exceeds
`1061659/1000000`; the finite-only ratio floor is `839377/1000000`. Of the
52 cost entries, 16 have positive lower numerators and contribute floor square
roots. Negative rank lower endpoints are discarded, as required to use the
stated positive-semidefinite rank-majorant assumption. The source's Cauchy
argument then yields a lower bound uniform over positive allocations summing
to one for this fixed basis and vector.

Scope limitation: this script checks the exact arithmetic encoded in the
blob. It does not independently reconstruct the 52 directional component
quadratics from raw intervals, verify the seven PSD hypotheses, or establish
an obstruction for another basis, allocation model, remainder bound, or the
underlying operator. It is an arithmetic audit, not a full independent
verification of the mathematical premises.
