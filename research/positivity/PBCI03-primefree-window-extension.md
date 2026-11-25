# PBCI03 follow-up — Interval certificate at h=9/16

2026-11-25. AI-assisted candidate positivity certificate using outward-rounded fixed-point interval arithmetic. No RH assumption, priority claim, or independent human/formal verification.

This extends the prime-free one-cell certificate from h=1/2 to h=9/16. Since 9/16<log(2), no prime shift is present. Use the first J=16 positive boundary rates, low Neumann modes n<=8, and modes 9<=n<=300 in the complementary calculation. The selected boundary matrix is V D_c V*, with V's columns v_r(n)=k_n r/(r²+omega_n²). Each sector uses an exact rational Y with eight decimal places, embedded in the source. The finite Schur comparison subtracts Y*D_c^-1Y, the weighted finite residual Gram matrix, and the explicit infinite residual-tail bound. The odd high block subtracts the full projected negative pole norm; the even high-high pole term is positive and dropped.

The script encloses pi, log, exponentials, hyperbolic functions, Euler's constant, and sqrt(2) using outward-rounded BigInt intervals at scale 10^18. It checks the sqrt(2) enclosure by exact integer squaring, verifies every high diagonal weight is positive, and performs interval LDL on the tail-subtracted low comparison. Reproduce with:

```sh
node experiments/pbci03-primefree-interval-h9_16.js
```

Raw endpoints are in `experiments/results/pbci03-primefree-interval-h9_16.json`.

## Certified signs

The lower endpoints for the high diagonal comparison are 2.184321177501234664 (even) and 2.078845508797721847 (odd). The upper endpoints for the omitted weighted tails are 0.000000026219047167 and 0.000000023968397778. Every interval LDL pivot is strictly positive. The smallest lower pivot is 0.090274145253551113 in the even sector; the smallest odd lower pivot is 0.230367325544495984.

Therefore the tail-subtracted finite Schur comparison is positive definite in both sectors. The complementary comparison is coercive, so the finite-rate lower operator is strictly positive. Since the omitted boundary rates are positive, the restored operator is strictly positive on the physical window h=9/16, conditional on the MBL02/DNB02 form identities. The earlier float64 diagnostic at the same parameters agrees to displayed precision, but the interval program supplies the strict signs.

This advances the construction's verified range beyond the h=1/2 certificate in the companion follow-up note. It remains a prime-free range and is not a record claim; DNB04 already notes larger published ranges based on abstract/excerpt review. The first-prime window remains unresolved. This artifact has not received independent human review or formal proof-assistant checking.
