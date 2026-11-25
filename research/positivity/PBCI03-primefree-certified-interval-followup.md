# PBCI03 follow-up — Certified prime-free h=1/2 Woodbury comparison

2026-11-25. AI-assisted candidate positivity certificate; exact fixed-point interval computation, not a formal proof assistant artifact or independent human verification. No RH assumption, priority claim, or actual off-line zero.

## Certificate setup

This completes the h=1/2 prime-free case that was inconclusive in the original MBL03 scalar Schur test. The physical interval length is h=1/2, below log(2), so there are no prime shifts. Use the MBL02 lower Neumann weights, the exact pole overlaps, and the first J=16 positive boundary rate corrections. In each reflection parity sector, place modes n<=8 in the low block and modes 9<=n<=300 of that parity in the finite high block. The remaining infinite high block is handled by the PBCI01 variational inequality.

The selected high correction is K_J=V D_c V*, with V's rate columns v_r(n)=k_n r/(r²+omega_n²) and positive diagonal D_c entries 2(1-eta exp(-rh)). Use a rational Y with entries rounded to eight decimal places (the exact decimals are embedded in the source). The comparison matrix is
\[
 A-Y^*D_c^{-1}Y-(R_M-V_MY)^*G_M^{-1}(R_M-V_MY)-\tau I,
\]
where A and R retain the full low and low/high blocks of the finite lower operator, G includes the full projected negative odd-pole norm, and tau bounds the omitted weighted residual tail. Even pole high-high terms are positive and may be discarded. The omitted boundary rates are positive and are discarded by lower-form order.

For each low column, the remaining rate and pole entries have an explicit n^-2 coefficient majorant. Its weighted squared tail uses sum_(n>M)n^-4<=1/(3M^3) and the monotone lower weight G_(M+1). Summing the column bounds gives a scalar identity loss tau. All displayed matrix calculations and tail sums use outward-rounded BigInt intervals at scale 10^18. The elementary enclosures use Machin's pi formula, the atanh log series with its positive geometric remainder, an alternating atan remainder, exp(-x) by halving and alternating Taylor bounds, an exact rational harmonic sum with Euler's standard two-sided harmonic bounds, and an exact-square-checked sqrt(2) enclosure.

Run and reproduce with:

```sh
node experiments/pbci03-primefree-interval-certificate.js
```

The raw integer endpoints are in `experiments/results/pbci03-primefree-interval-certificate.json`.

## Executed interval output

At scale 10^18, the certified lower endpoints for the high diagonal comparison are 2.302205138555386851 in even parity and 2.196753851200561788 in odd parity. The omitted-tail upper endpoints are respectively 0.000000018331898681 and 0.000000016467457997.

The exact interval LDL pivots of the tail-subtracted finite comparison have lower endpoints:

- Even, low modes 0,2,4,6,8: 0.096817974320792107; 0.239270309194471728; 1.216430318168012876; 1.742468541571259377; 2.061385524304967079.
- Odd, low modes 1,3,5,7: 0.347757997369864111; 1.102162106047330264; 1.612675387048689145; 1.947301888440289012.

Every interval pivot is strictly positive, so the finite comparison matrix is positive definite in each sector. The complementary comparison is coercive. By the Schur complement and the monotone lower-form construction, this certifies strict positivity of the actual restored operator on the physical window of length 1/2, conditional on the established MBL02/DNB02 lower-form identities.

This is a new certified range for this construction relative to its prior MBL03 output, which stopped at h=7/16. It is not a record claim: DNB04 reports larger ranges in prior work, based on abstract/excerpt review. The earlier float64 PBCI03 row is superseded for h=1/2 by this interval computation. The prime-inclusive case just above log(2) remains inconclusive in the even sector.

## Scope and audit notes

The interval program verifies positivity of a conservative Schur lower matrix, not approximate eigenvalues. The eight-decimal Y entries need not equal an optimizer; the variational inequality holds for every exact rational Y. The high-mode tail is for the finite J=16 lower model, and monotonicity then transfers positivity to the full boundary-rate sum. This certificate has not been independently audited or formalized in Lean. The next useful verification is a separate implementation of the interval LDL and tail calculation, followed by an attempt to extend the certified window toward log(2).
