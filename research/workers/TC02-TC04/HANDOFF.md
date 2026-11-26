# Handoff: TC02-TC04 stored-minor replay

The independent exact replay is documented in [AUDIT.md](AUDIT.md), with the
reproduction script at
`experiments/worker-TC02-TC04/replay_transformed_minors.py`.

It confirms all 44 saved leading minors and the `45449/10^6` fixed-energy
grid margin; the next grid point fails at the final leading minor. It does
not independently rebuild the transformed lower matrix or validate the
recomputed eighth-tail majorant from raw coefficients. Treat this as a
stored arithmetic replay only, not full independent reconstruction.
