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
