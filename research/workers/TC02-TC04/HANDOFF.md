# Handoff: TC02-TC04 stored-minor replay

The independent interval-to-matrix reconstruction and exact replay are
documented in [AUDIT.md](AUDIT.md), with the reproduction script at
`experiments/worker-TC02-TC04/replay_transformed_minors.py`.

It reconstructs every lower-matrix entry from raw stored component intervals
and confirms all 44 saved leading minors and the `45449/10^6` fixed-energy
grid margin; the next grid point fails at the final leading minor. The saved
transformed eighth-tail value in the changed coordinate remains an input, so
the tail majorant itself is not independently verified.
