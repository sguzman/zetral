# Exact inertia of the stored transformed even comparison

The exact integer lower matrix in
`experiments/results/lxx-123-50-even-t832-transformed-replay.json` has
inertia

```text
(positive, negative, zero) = (44, 1, 0).
```

Replay with:

```sh
python3 experiments/worker-LXX/transformed_lower_inertia.py
```

The script uses rational symmetric Schur elimination. Each nonzero scalar
pivot contributes its sign by Sylvester's law of inertia, and the trailing
block is updated by an exact Schur complement. The observed pivot signs are
seven positive, one negative, then 37 positive, with no swaps or zero pivots.
This confirms that the failed eighth leading minor corresponds to a single
negative direction for this stored matrix; it does not assert that the
underlying operator or all possible allocations have only one negative
direction.

This is complementary to the short exact negative vector in the separate
`LXX-TRANSFORMED-AUDIT` handoff. Scope remains limited to the stored
transformed even comparison and its specific allocation. It does not test the
odd sector, the lead's proposed third-coordinate transform, or other
allocations.
