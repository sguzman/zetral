# LXX02: independent aggregate audit of even residual chunks

## Result

The Python audit reads the 12 deterministic even residual chunks directly,
checks each range/count/scale and 45x45 interval shape, then sums all 4,050
interval entries using integer endpoint addition. It verifies disjoint
consecutive coverage of all 6,100 even modes `90..12288`, inclusive. The
result is a 45x45 finite-residual interval matrix.

The resulting compact JSON is byte-identical to
`experiments/results/lxx-123-50-even-t832-finite-total.json` on main. Its
SHA-256 is
`223dc7da65458875211f405a14f5d17fb3265508d0687b001892af964f53ee7a`.
The largest individual source interval width is 1,806,352, at entry `[16][16]`
of the chunk covering modes `1114..2136`.

Reproduce with:

```sh
python3 experiments/worker-LXX/aggregate_even_residuals.py
```

The script also prints SHA-256 hashes and counts for every input chunk.

## Scope

This verifies exact interval assembly and chunk coverage only. It does not
regenerate residual entries, derive the component intervals, allocate the
seven rank bounds, or establish positivity of the even comparison.
