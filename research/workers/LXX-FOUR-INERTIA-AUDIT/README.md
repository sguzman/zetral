# Exact inertia audit of the four-direction LXX replay

The exact 45-by-45 integer lower matrix saved in
`experiments/results/lxx-123-50-even-t832-four-replay.json` has rational
inertia

```text
(positive, negative, zero) = (44, 1, 0).
```

Reproduce with:

```sh
python3 experiments/worker-LXX/four_direction_inertia.py
```

The replay reports seven positive leading principal minors and a negative
eighth. Exact rational symmetric Schur elimination confirms the full inertia:
the remaining 37 pivots after the eighth are all positive. Thus this stored
four-direction comparison has exactly one negative mode. This is specific to
the saved lower matrix and its selected allocation; it is not an
allocation-independent obstruction or a conclusion about the underlying
operator. The independent three-direction lower-matrix inertia audit also
found `(44,1,0)` in its own stored comparison.
