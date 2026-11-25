# FDA03/04 — Weighted replay, margins, and campaign closure

2026-11-25. The h=23/10 candidate crossing from FDA02 is independently replayed at the stored-component level.

The first attempted exact rational LDL replay timed out; replaced by exact nonsymmetric integer row elimination with primitive-row gcd reduction and explicit positive rational row scales. For elimination at pivot p>0 and entry a, replace row i by (p/g) row i - (a/g) row k, g=gcd(p,a), then divide trailing entries by their positive gcd. The determinant of each leading block is the product of transformed pivots divided by the corresponding cumulative row multipliers. No floating point or approximate pivot acceptance. This is an independent arithmetic algorithm relative to generator Bareiss.

Source experiments/fda03-weighted-replay.js 521a6dc17ac58d53ec6e9d345ee549ba96f2c612. Actual V8 runs:
- even raw experiments/results/fda03-weighted-replay-even.json abe2f5eb95ea121a9f11e8782c0dd3b761469d97, all 1024 lower entries, 32 radii, 32 leading minors exactly reproduced.
- odd raw experiments/results/fda03-weighted-replay-odd.json 4a850413e8b856d81cf78b9ab2c246f70569ad8a, same 1024/32/32 checks.
All pinned readbacks exact. This reconstructs the stored component intervals and verifies their matrix implications; it does not independently recompute operator integrals or normalize the original form.

Using the fixed positive upper-energy diagonal E and exact integer testing of 10^6 A - m diag(E), the greatest passing grid value is m=1788 even and m=63256 odd. The next grid integer fails in each. Thus the exact normalized comparison margins are at least 0.001788 and 0.063256 respectively (not ordinary spectral gaps). The limiting sector is even. No additional arithmetic refinement is necessary for this crossing; FDA03 complete.

For the next bounded window, rationalNineWitness(21n,2n) from FDA01 was actually run. At endpoint 10.5, the bound is 2632/1000 with 6795 exact refinement cells checked at iteration 16. Raw experiments/results/fda04-window-21-2.json 49db9f8336dccc22b0275da17dccbf926d94e242, exact pinned readback. This is smaller than the inherited global endpoint-11 witness 2714/1000. Since log(10.5)>2.35, it motivates the next trial at h=47/20. The full comparison at 2.35 has not been run; do not claim a larger frontier. FDA04 complete. Campaign LXI closed. Candidate frontier remains 2.30, under inherited original-form identification. Independent original normalization, full independent operator computation, formal/human review, priority and any RH proof remain outstanding. README unchanged.
