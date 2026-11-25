# BFA03 lifted moment replay

2026-11-25. Ran `node experiments/bfa03-lifted-second-moments.js` in a separate Node.js 24.22.3 process from main commit `4a03bdf`. It exited successfully and reproduced every reported endpoint, including (J_{upper}=0.604032829660374952) and the six lifted/continuum intervals. This verifies reproducibility of the committed program output, not a fresh proof of each interval enclosure.

For the restored (N=32) row, the lifted squared-norm interval is `[0.143528728801112422, 0.146825797539815630]` and the certified action error is at most `0.001104206228257657`. Applying the reverse and forward triangle inequalities to the square roots gives the reported continuum interval `[0.142693286914523747, 0.147673233083609410]`. It lies inside the independently computed CME03 physical enclosure, but that intersection is a consistency check; the BFA03 continuum interval comes from the lifted error bound itself.

The finite matrix square is not being treated as a continuum moment: the program evaluates the physical support norm of the lifted action and then applies an (L^2) tail bound. No operator positivity, eigenvalue, or RH conclusion follows from this one fixed-seed second moment.
