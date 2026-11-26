# Handoff: TC02-M01

See [AUDIT.md](AUDIT.md) for the source-level scaling analysis and its scope.
The key result is a conditional frozen-tail threshold at M=12497, not a
certificate or a prediction for a regenerated run. The exact generator guard
shrinks as `2/M` when `Kmax=M`, invalidating the simpler `M^-15` scaling.

Reproduce the conditional calculation with:

```sh
python3 experiments/worker-TC02-M01/frozen_tail_threshold.py
```

No lead-owned state was modified. The work is isolated to this worker branch.
