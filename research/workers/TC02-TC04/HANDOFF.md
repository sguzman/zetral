# Handoff: TC02-TC04 stored-minor replay

The independent interval-to-matrix reconstruction, C8/eighth cross-language
replay, and exact minor check are documented in [AUDIT.md](AUDIT.md), with
reproduction scripts at
`experiments/worker-TC02-TC04/replay_transformed_minors.py` and
`experiments/worker-TC02-TC04/replay_transformed_eighth.py`.

It reconstructs every lower-matrix entry from raw stored component intervals,
replays the changed `C8` and `eighthUpper` in a separate Python interval
implementation, and confirms all 44 saved leading minors and the `45449/10^6`
fixed-energy grid margin. See the audit for the remaining limits on how the
generator's per-frequency analytic intervals were sourced. A separate full
raw even regeneration was stopped after 4:50 without output, so no byte
comparison was completed.
