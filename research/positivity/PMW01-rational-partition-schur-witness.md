# PMW01 — Rational multiplicative partition witnesses for combined prime norms

2026-11-25. AI-assisted candidate deduction without RH. Uses LPE01 and PGF01. Classical weighted Schur test, no independent review or novelty claim.

Use multiplicative coordinates t=exp(x) on a window [1,N], N>1 rational. The Hilbert measure is dt/t; multiplication by any positive rational is translation in x and preserves this measure on overlapping subintervals. For the finite active prime-power shifts m<N, let b_m=Lambda(m)/sqrt(m)>0. The actual compressed prime operator is
    (P f)(t)=sum_m b_m [1_(mt<N) f(mt)+1_(t/m>1) f(t/m)].
Endpoint values are immaterial. Fix exact rational upper weights beta_m>=b_m, let P_beta use these larger weights, and choose a strictly positive piecewise constant function w on a finite rational partition of [1,N]. If P_beta w<=c w almost everywhere, for exact c>0, then ||P||<=c. Indeed |P f|<=P_beta |f|, and the weighted Cauchy inequality gives
    |P_beta f(t)|² <= (P_beta w)(t) (P_beta (|f|²/w))(t)
                      <= c w(t) (P_beta (|f|²/w))(t).
Integrate, using symmetry of P_beta and dt/t invariance to exchange its arguments; the second use of P_beta w<=c w yields ||P_beta f||²<=c²||f||². This proof needs no assertion about finite orbit components or commuting prime towers. Restricting by zero extension to any shorter window gives the same norm upper bound.

## Exact finite verification

Let B be the sorted rational breakpoints of w including 1,N. Add every point b/m and mb in (1,N), for b in B and every active m. Sort and deduplicate their union with B by integer cross-products. On every open cell of this new partition, all w(t), w(mt) and w(t/m) (with zero exterior extension) are constant: their only possible jumps occur at listed breakpoints. Evaluate at the exact rational midpoint of each cell. Choose positive integer w values and integer upper weights beta_m=A_m/D, with common D>0. For a candidate c=C/D, the witness check is precisely
    sum_m A_m [w(mt)+w(t/m)] <= C w(t).
All arithmetic here can be exact integers including rational comparisons, without approximating logarithms of partition endpoints. Only the upper weight inequalities need separate certified log and square root arithmetic. Record every partition endpoint and w value or an exact deterministic generator plus raw witness data; check all cells and preserve the maximum ratio. Floating point may suggest a witness but never establish the verified inequality.

## Bounded search

Start from a positive constant w. For a fixed number of steps generate P_beta w by the finite partition refinement above, then choose a new positive integer w by rescaling and rounding P_beta w (with a positive floor), or adding a positive forcing term. Merge neighboring equal-valued cells. At each step verify its actual global ratio; retain the best witnessed bound. This is a search heuristic, not a theorem of convergence or optimality. Finite exact checks always terminate at a fixed finite step count, although partition size may grow and a better bound is not guaranteed. For a rational endpoint N and integer shifts, all breakpoints are rational; no numerical near-coincidence error occurs. One may also start from nonconstant weights or use linear inequalities on a fixed partition. An unsuccessful search does not establish a lower bound on the actual norm.

## First target

At N=6 active shifts 2,3,4,5 (6 has von Mangoldt weight zero). Conservative integer upper weights on denominator 1000 are A_2=491, A_3=635, A_4=347, A_5=720; their validity will be checked in PMW02 using the existing rigorous constants arithmetic. A separate tower fallback is bounded by 2.25: the 2-tower chain has at most three nodes and largest eigenvalue (b4+sqrt(b4²+8b2²))/2; 3 and 5 each have at most two nodes. The upper weight substitution gives <0.89+0.635+0.720=2.245<2.25 (0.89 check by squaring). A sharper actual piecewise weight witness may significantly improve the high complement coercivity. No guarantee of a longer positivity certificate or general norm formula. PMW01 complete as candidate.
