# LPE03 — Executed localized positive-prime complementary certificates

2026-11-25. AI-assisted candidate computation; no independent review, RH proof, negative restored eigenvalue or priority claim.

## First execution: exact prime column compression

Source experiments/lpe03-localized-prime-complement.js commit a5a1c360c6115f072bee84a83b6f8723a1e3b4de, raw experiments/results/lpe03-localized-prime-complement.json commit 535f58da7a740b5a6af641d92342383664d4eaff. Both exactly read back; actual V8 execution, no separate Node or Rust replay. Reproduce: node experiments/lpe03-localized-prime-complement.js.

Extend the refined four-mode PBCI03 implementation by selecting the first eight physical Neumann modes in each parity for W (including the four low modes). The exact positive prime correction is E Z W (W* Z W)^-1 W* Z E, Z=bI-P, as in LPE01. The high column matrix uses b delta - P, including its diagonal term at selected high rows; the entire non-diagonal penalty G_W is included in coordinate selection and interval verification. Both parity high weights still subtract b and the odd high pole bound. Retain J=256 positive boundary rate terms, select first S=24 in the complementary inverse, cutoff M=512. All low and cross entries retain all the actual prime and finite boundary terms; the low digamma is a lower partial series. Use 80 coordinate sweeps only to choose rational trial coefficients on scale 10^-12. Recompute the full Gram penalty and residual using outward-rounded BigInt at scale 10^18; use LPE02's signed leading prime coefficient, parity tail and combined smooth coefficient. Subtract the certified tail upper endpoint and entry-radius row sum exactly before interval LDL, as in PBCI03.

Actual returned strict-sign results (full raw endpoints and rational trials in the linked JSON):
    h=3/4: both parity tests pass; min even pivot >=0.010806384099458481,
      min odd pivot >=0.200087424216470566; even tail upper 0.000121870391953782.
    h=4/5: both pass; min even pivot >=0.003615045810258793,
      min odd pivot >=0.188571825854764802; even tail upper 0.000094546982128571.
    h=17/20 and 9/10: odd passes, even lower comparison fails.
    h=1: both comparisons fail.

At h=3/4 the previous refined PBCI even comparison had a negative third pivot. Retaining the positive prime complement resolves that test and also the h=4/5 test. At h=4/5 the high weights have lower endpoints 1.117789022945191642 (even) and 1.235876789863533559 (odd), with all finite lower pivots positive. Hence the mathematical criterion yields strict positivity of the whole fixed-window restored operator at h=4/5, not merely the low block. The tail error in the even calculation is also much smaller than the previous PBCI four-mode bound (0.000094546982128571 vs 0.000604590417037712). These are lower matrix pivots, not eigenvalue bounds of equal magnitude.

The larger lengths remain inconclusive, not counterexamples. The tested window is entirely within the single-prime regime. This is an internal method improvement beyond the h=7/10 certificate, not a literature record; arXiv:2608.24827 reports physical support length 1.6 as checked during PBCI04. No external validation or full academic comparison is claimed.

## Second execution: larger six-mode block

Source experiments/lpe03-larger-localized-complement.js commit 7158764e218c54d16197205b19d33ecd5e78d3dc, raw experiments/results/lpe03-larger-localized-complement.json commit 4f790d25f9aa3a28ef9248a9e3e54f4db817e3cc, both exactly read back after actual V8 execution. Reproduce: node experiments/lpe03-larger-localized-complement.js.

Use six low modes and twelve W modes per parity, J=512, S=48, M=512, otherwise the same verified arithmetic protocol. The odd high pole bound uses sum_(n>12)n^-4<=1/(3*12³). The prime-tail bound uses the actual larger W indices in its remainder. Results:
    h=17/20,9/10,19/20: odd comparison passes, even fails.
    h=1: both comparisons fail.
At h=17/20 the even second lower pivot interval has strictly negative endpoints near -0.0003233751; at h=19/20 it is near -0.0001735653. At h=1 the second pivot is positive but the third is negative. These are exact lower-comparison failures and do not imply negative actual spectrum. More modes and rates did not improve the longest full certificate beyond h=4/5 in this bounded test. The larger finite rate cutoff also increases the smooth tail bound at fixed M, illustrating that naively increasing J need not improve the particular finite certificate even though the underlying lower operator increases in form order.

Both actual experiments, all rational trials and exact interval outputs are preserved. Independent verification, separate Node process replay and Rust execution remain unperformed. LPE03 complete.
