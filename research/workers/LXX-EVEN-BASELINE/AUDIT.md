# LXX02: independent replay of the even baseline failure

Starting from the seven persisted raw parts, a separate Python integer
implementation rebuilt the baseline interval matrix. It reproduced all 2,025
entries, all 45 weighted radius corrections, and the saved baseline minor
strings. All 45 upper-energy diagonal lower endpoints are positive, but the
third leading minor is

`-127481533186707088342604524645300391247340383917876558746548732382391765`.

The first two leading minors are positive, so the saved baseline fails the
positive-definiteness criterion at minor 3. This independently confirms the
stored baseline summary; it does not address whether an optimized allocation
or transformed trial can pass.

Reproduce with:

```sh
python3 experiments/worker-LXX/replay_even_baseline.py
```

Scope is the stored raw interval object. This is not a fresh raw generator
reconstruction, a full comparison audit, or an evaluation of the original
operator form.
