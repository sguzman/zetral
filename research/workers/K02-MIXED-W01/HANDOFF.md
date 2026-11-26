# K02-MIXED-W01 handoff

- Status: READY_FOR_REVIEW.
- Scope: test whether K02's fixed-sampled-point mixed-kernel bound `J_a(gamma,z)=o(M_a)` can be improved from qualitative abstract inputs alone.
- Finding: an explicit compact diagonal operator / increasing-projection model shows those qualitative inputs do not impose a rate tying `M_a` to weak overlaps. The model mixed quantity can stay bounded or diverge. This is not a counterexample to the actual Weil-form kernel.
- Evidence: `research/workers/K02-MIXED-W01/NOTE.md`.
- Starting source: main `8fb1647cd10dc948db15b65f13250d8f8d0ac4b2`; K02 blob `545bc03ee92c06ecc941b395acd9a60443c11c9f`.
- No tests, numerical computations, or formal verification were needed or run.
- Required lead disposition: review whether a quantitative model-specific estimate is worth pursuing; no change to campaign claims is warranted from this abstract diagnostic.

- Follow-up refinement: the abstract example was strengthened to satisfy the sampled-point vector identity `(I-gamma Pi_n C Pi_n)Pi_n g = P_n(gamma) M_n h_n` at a simple scalar zero while retaining arbitrary behavior of `M_n <g,h_n>`. The omitted analytic-family and Weil-form links remain explicit; this is not an actual-kernel counterexample.

- Actual-model deduction added: pairing K02's exact vector identity with `h_a` bounds the overlap by `gamma ||C|| delta_a + gamma d_a/sqrt(m_gamma)`, where `delta_a=||(I-Pi_a)g_gamma||` and `d_a=||B_a h_a||`. Substitution gives `J_a(gamma,z)=O_{K,gamma}(M_a(delta_a+d_a))`; this identifies the missing model-specific rates but proves no bounded unnormalized limit.

- Control model added: an explicit diagonal compact operator with commuting spectral projections satisfies the exact vector resolvent identity, locally uniform characteristic limit, and all finite sample identities, yet has a finite fixed-sample mixed-kernel limit. This rules out any inference of divergence from those shared qualitative identities alone; the actual noncommuting local compression remains unmodeled.

- Quantitative refinement: exact factorial formulas in the control model give `M_N ~ (pi/2)^(1/4) N^(1/4)`, `||B_N h_N||^2 ~ (pi^2/3)/sqrt(pi/2) * N^(-1/2)`, and `M_N ||B_N h_N|| -> pi/sqrt(3)`. The proof uses a Gaussian Riemann sum with an explicit tail bound and dominated convergence. This is an analytic toy-model calculation, not numerical verification or an actual Weil-form asymptotic.

- Microscopic check added: direct resolvent-coordinate estimates in the same model give the multiplicity-one profile `1 + conjugate(eta) zeta |Delta'(k)|^2` at offsets of size `1/M_N`, while the fixed-separated sample kernel stays finite.

- Stronger synthetic countermodel added: paired nodes with `N_+(T)=T log T/(2 pi)+O(1)` and an even real entire order-one canonical product. Tuned near-collisions force the exact sample interpolation weights to make `M_N -> infinity` and `h_N` weakly escape, while the full commuting-projection resolvent model still has finite fixed-sample mixed limits. This is not zeta: its artificial close pairs and lack of arithmetic/Weil structure are explicit.

- Growth claim made explicit: Jensen's formula and Stieltjes integration by parts show `log M_Delta(r) = Theta(r log r)` from the synthetic `N_+(T)=T log T/(2 pi)+O(1)` law, hence order one and infinite exponential type.

- General lemma added: for any simple signed node product with `sum gamma_n^-2 < infinity`, the commuting resolvent/sample construction has a finite fixed-sample mixed limit. If the canonical-product residue sequence `a_n=-1/(gamma_n Delta'(gamma_n))` is not in `ell^2` (a sufficient, not necessary condition), the model also has `M_N -> infinity`, weak escape, and vanishing compressed inverse. Close-pair clustering is one sufficient way to force this condition, not a required mechanism.
- Follow-up regular-node diagnostic: for t_n defined by t_n log(t_n)/(2 pi)=n, a finite-product computation with a 20-term density-integral tail estimate gives increasing log-residue values through n=100 and stable fixed-n cutoff changes through M=8000. This suggests close pairs may not be necessary in the abstract model, but the omitted sum-integral error and lack of uniform estimates prevent a theorem. Full parameters and caveats are in NOTE.md; no zeta claim.
- Analytic follow-up: proved for regular quantiles F(t)=t log(t)/(2 pi), t_n=F^-1(n), that log|1/(t_n Delta'(t_n))|=pi*t_n/4+O((log t_n)^2). The proof compares the discrete log-product sum with its density integral; the integral has zero leading log(g) coefficient and logarithmic moment -pi^2/2, while the monotone quadrature error is O(log g). Thus regular-node residues diverge and are not in ell^2, so the already-proved commuting model has divergent M_N without artificial close pairs. Full derivation and scope limits are in NOTE.md; this remains an abstract canonical-product result, not a Weil/zeta claim.
- Extension added: for exact quantiles of F(t)=c*t log(t)+d*t+b, c>0, the same argument yields log-residue = c*pi^2*t_n/2 + O((log t_n)^2); the linear-count term cancels because the unweighted log-kernel integral is zero. This includes the smooth Riemann–von Mangoldt main term but does not transfer to actual ordinates with O(log T) counting error; gap-sensitive perturbation control remains open.
