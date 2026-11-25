# PBCI03 follow-up — Interval certificate at h=37/64

2026-11-25. AI-assisted candidate positivity certificate using outward-rounded fixed-point intervals. No RH assumption, priority claim, or independent human/formal verification.

This extends the prime-free h=9/16 certificate to physical length h=37/64. Since 37/64<log(2), the prime term vanishes. Keep J=16 positive boundary rates, low Neumann modes n<=8, and modes 9<=n<=300 in the complementary calculation. As in the preceding PBCI03 follow-ups, use the PBCI01 variational inequality with an exact rational trial matrix Y whose entries have eight decimal places. The finite comparison includes the complete low and low/high blocks of the finite lower operator; its tail bounds the remaining rate and pole residuals by their n^-2 coefficient majorants. The odd comparison subtracts the full projected negative pole norm. The even high-high pole term is nonnegative and is dropped.

The outward-rounded BigInt interval program uses scale 10^18. Unlike the h=1/2 and h=9/16 scripts, it encloses the irrational Neumann normalizations sqrt(2/h) and 1/sqrt(h) with an integer-square-root routine and exact endpoint checks. It verifies positivity of every high diagonal weight and performs interval LDL on the tail-subtracted finite Schur matrix. Reproduce with:

```sh
node experiments/pbci03-primefree-interval-h37_64.js
```

The raw integer endpoints are in `experiments/results/pbci03-primefree-interval-h37_64.json`.

## Certified signs

The lower endpoints for the high diagonal comparison are 2.156895116717395525 in even parity and 2.051412889887114848 in odd parity. The omitted weighted-tail upper endpoints are 0.000000028495773923 and 0.000000026136450491. Every interval LDL pivot is strictly positive; the smallest lower pivot is 0.067613530209644108 in the even sector, and 0.202365718045792729 in the odd sector.

Thus the tail-subtracted Schur comparison is positive definite in both parity sectors. Its high complement is coercive, so the first-16-rate lower form is strictly positive. All omitted boundary rates add nonnegative forms. Subject to the established DNB02/MBL02 form identities, the actual restored operator is strictly positive on the physical window h=37/64.

This is a candidate construction certificate beyond h=9/16 and remains prime-free. It is not a record claim; prior work reports larger positivity ranges, as noted in DNB04 from abstract/excerpt review. The first-prime regime remains unresolved, and no independent audit or proof-assistant verification has been performed.
