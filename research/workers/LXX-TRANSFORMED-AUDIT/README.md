# LXX transformed even comparison: exact failure direction

This worker check independently derives a short negative direction for the
stored transformed even comparison at `h=123/50`.

## Exact replay

Run:

```sh
python3 experiments/worker-LXX/replay_transformed_negative_witness.py
```

The script reads the four stored transformed component parts and the exact
transformed replay. It solves the leading `7 x 7` block system over `Q`, rounds
the seven exact Schur-minimizer coordinates to nearest integers, appends a
coordinate equal to one, and checks the resulting vector against the full
stored lower matrix. It also evaluates an outward interval for the quadratic
upper energy from the transformed component intervals.

The verified vector is

```text
(-98597322244550, 97328518062, -144871888557280, 1434841217205,
 21849937, -44112, 214, 1, 0, ..., 0)
```

For the exact stored integer lower matrix `L`,

```text
v^T L v = -134057228007209546115302579625466197521998092066040557.
```

The outward interval for the quadratic upper-energy component is

```text
[40556681391451500631049272252548247597296546427512958161,
 40556683858102631239975697632007664046075022523149066552],
```

which is strictly positive. Thus the proposed comparison fails in this
direction. The stored replay has seven positive leading principal minors and
a negative eighth leading minor; the vector provides an independent direct
quadratic-form witness for that failure.

## Scope

This is an exact diagnostic of the stored transformed even comparison and
its specific rational allocation. It does not establish failure of the
original untransformed form, rule out other transformations or allocations,
or settle the odd sector or the campaign frontier. The supplied
`transformed-loss-diagnostic.json` direction was not reused: direct evaluation
showed it has positive quadratic value on the stored lower matrix, so it does
not witness the failed pivot.
