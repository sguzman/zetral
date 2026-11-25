# PBC03 independent audit — deep-subspace localization

Status: READY_FOR_REVIEW

Baseline: `53047f3` (Campaign XXVI active). Audited `research/positivity/PBC03-spatial-frequency-escape.md`: physical endpoint localization, the residual Fourier multiplier estimate, band truncation, graph bound, and whole-subspace projection estimate. PBC01–02 and LBS01 form-domain results are inherited inputs.

## Findings

No discrepancy found in the checked estimates.

1. **Endpoint localization.** The interior cutoff restricts every contributing shift to length at most `2a-R`, so the remaining prime weights sum to `O(exp(a-R/2))`; the same restriction on the pole kernel gives the same order. The commutator kernel has the factor `chi(y)-chi(x)=O(min(|x-y|,1))`, cancelling the `1/|x-y|` singularity of the digamma difference kernel and leaving an integrable Young majorant. The Sylvester equation has gap `alpha(0)+c exp(a)`, and its integral solution gives a whole-subspace bound without a rank factor.

2. **Residual multiplier.** The even measure representation has uniformly bounded total variation by the normalized Chebyshev prime-weight sum and pole mass. In Stieltjes partial summation on `(exp(a),exp(2a)]`, the endpoint terms are `O(delta_a)` and the derivative integral is `O(delta_a(1+|t|))`; the small-prime interval and secondary pole term contribute `O(exp(-a/2))`. Together these give the stated pointwise multiplier estimate `C min(1,eta_a(1+|t|))`. It is a frequency-dependent bound, not an operator-norm convergence claim.

3. **Band truncation and graph norm.** For `f=1_(I_a)v`, `v=F_R g`, the distributional derivative has the interior term and two endpoint atoms. On `|t|>S`, division by `t` bounds the interior term by `R/S` and the atoms by `sqrt(R/S)`, yielding (3). In the log-squared multiplier norm, the interior derivative term is bounded using `w(t)/t<=w(R)/R`; each endpoint term uses `int_(|t|>R) w(t)^2/t^2 dt=O(w(R)^2/R)`. This yields the stated `O(w(R))` graph estimate. Balancing `eta_a S` with `sqrt(R/S)` at `S=(R/eta_a^2)^(1/3)` gives `O((eta_a R)^(1/3))` under `eta_a R<=1`.

4. **Whole-subspace estimate.** Since the negative spectral projection commutes with the ordinary operator and has spectral gap at least `c exp(a)`, `||Pi^- f||<=exp(-a)||A_a f||/c`. Applying the graph and residual estimates to `E_a^*F_R` and taking adjoints gives the operator norm bound (6) on the entire deep negative subspace. The conclusion is conditional on that spectral subspace being nonzero; it does not construct an eigenstate or exclude one.

5. **Boundary weak limit.** Fixed smooth endpoint profiles embed as disjointly supported physical translates for large `a`; their archimedean graph norms stay bounded by translation/reflection invariance, and PBC02's strong residual cancellation makes their ordinary operator images `o(exp(a))`. The same spectral-gap inequality gives vanishing projection on each fixed profile. Density and contraction of the projections extend this to weak convergence of boundary coordinates for any unit vectors chosen in the deep subspaces.

## Scope and limits

AI-assisted scoped audit, not formal verification or independent human review. I did not repeat the primary PNT-error source inspection, or reprove PBC01–02, LBS01, or VMR02 domain approximation. No numerical data, actual deep eigenstate, RH inference, ordinary upper exponent below one, or novelty claim.
