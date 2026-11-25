# AJP04 — Capacity certificate, audit and prime-tower pivot

2026-11-25. Internal lead audit; not independent human or formal verification. No actual off-line zero, new numerical calculation, proof of RH or priority claim.

## 1. A sufficient scalar certificate and why it is not yet useful

In the even sector suppose the pole-free simple ground eigenvalue mu<0 and the positive spectral gap g obeys delta=mu+g>0 (using the global gap is sufficient; an even-sector gap would also work). Decompose c=beta phi+v, v orthogonal to the unit ground state, and D=T_e restricted to phi^perp. Then D>=delta I. For f=x phi+y the even restored form is
    mu |x|²+<Dy,y>+2|beta x+<v,y>|².
The minimum over y for fixed x is attained at y=-2 beta x D^-1 v/(1+2<v,D^-1 v>) (with conjugation conventions adjusted for complex beta). Its coefficient in |x|² is exactly
    mu+2 beta²/(1+2<v,D^-1 v>).
This follows by the rank-one inverse identity or by direct completion of squares; D+2v tensor v is strictly positive. Therefore a sufficient strict even positivity certificate is
    mu+2 beta²/(1+2||v||²/delta)>0.                        (1)
If v=0 the certificate is exact. In the odd sector T_o>=mu+g I=delta I, so the crude sufficient criterion delta>2||s||² gives strict odd positivity; the exact criterion is AJP02's odd capacity. None of these bounds assumes the full form is positive.

AJP03 gives an explicit positive lower bound for g, but it decays much too rapidly to establish delta>0 at large windows where mu~ -exp(a). Even if delta>0 were known, small alignment defect alone would not control <v,D^-1 v>: the residual eigenvalues could be arbitrarily close to zero. A 2D diagnostic illustrates the exact scale issue. For T=diag(-1,epsilon), c=(sqrt((1+d)/2), sqrt(d/2)) with d>0, epsilon>0, the bare ground-state pole contribution is +1+d, giving positive trial value d. But the restored even Schur coefficient is -1+(1+d)/(1+d/epsilon), negative whenever epsilon<1. Letting d->0 gives asymptotically perfect alignment yet a negative restored direction at each epsilon<1. This is only a finite-dimensional capacity diagnostic, not an actual zeta counterexample. AJP03 implication is necessary, not sufficient.

## 2. Audit

AJP01 uses the full-line translation difference norm; using the compressed translation norm instead would lose exit killing. Its continuous kernel half-double-integral normalization agrees with STS03's digamma representation. Subtracting j0 on I×I removes j0(L||f||²-|int f|²), so the positivity-improving Duhamel term has the stated sign. The smooth endpoint trial uses PBC01's strong limit only on fixed vectors; it does not assume operator-norm convergence. The sharp leading pole-free bottom follows.

AJP02 bordered-form inertia preserves domains because the bounded shears add D1^-1 u1 in the operator domain and transform the scalar coordinate. Singular case with nonzero kernel component does not use the inverse at the singular eigenvalue. The parity strictness conditions exclude nullity as required. AJP03 free semigroup comparison uses positive-part form testing and the zero-extension characterization; the multiplier exp(-alpha) is square-integrable. The ground-state quotient test retains exit energy through V; the discarded negative scalar remainder is dominated and tends to zero. The variance identity uses ||phi||_2=1. The alignment result concerns the pole-free eigenfunction, not the potentially sign-changing full Weil eigenfunction. No sign error identified in this limited lead review.

## 3. Prior art and direction

Fresh actual source retrieval this turn: Suzuki https://arxiv.org/html/2606.09096v4, §5.2 around lines 676ff (archimedean Dirichlet form positivity improvement); external unreviewed project https://zeta.teal-sea.com/read/hunts/weil_propagation/theory/RESULTS.html lines 126–139 (same pole-free simplicity and parity reduction), 232–248 (reported arithmetic comparison and suggestion of degree-one prime-power tower inverse). The external numerical claims were not independently reproduced or verified here. Treat that page as related research, not a peer-reviewed theorem. The basic pole-free ground state and regular capacity are therefore NOT claimed novel. No exhaustive originality search has been performed for the quantitative deductions.

Campaign XXXVI closes with AJP01–04. The generic positive jump structure is insufficient to establish the remaining ordinary spectral rate; neither its positivity-improving semigroup nor the finite gap gives adequate control of the near-zero residual. The next bounded campaign uses a more specific arithmetic feature: for each prime p the full geometric tower of coefficients p^(-k/2), and its exact inverse on finite interval chains. The local-factor inverse was suggested in the external note at line 248; derive its exact interval compression, boundary correction and cross-prime limitations rather than claim that basic identity is original. Goal: an actual quantitative arithmetic relation or a precisely identified obstruction. No new worker acceptance; README unchanged.
