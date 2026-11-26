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

The first failed 3x3 block also gives an exact integer vector supported only
on coordinates 0, 1, and 2:

`x = (8331959681374282011919753294077338248419774668700, -4251276555770868656857704801801003077877199842864, 4039697220179633500361903175798324598536839156239)`.

It is obtained by clearing denominators in the Schur-complement minimizer for
the leading 2x2 block. Direct multiplication gives
`x^T L_baseline x = -514986795238578319769744225238741533332997588333273875514390946258891090962578938889805471379990500017593681423341971835`,
also equal to the second leading minor times the third. The stored upper
energy form on x is positive, with exact interval endpoints in
`weak-direction.json`. This is a concrete failure direction for the baseline
allocation only, not an obstruction to reallocation or a transformed trial.

Reproduce with:

```sh
python3 experiments/worker-LXX/replay_even_baseline.py
```

Scope is the stored raw interval object. This is not a fresh raw generator
reconstruction, a full comparison audit, or an evaluation of the original
operator form.
