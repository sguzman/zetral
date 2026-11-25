# WPR01 independent audit — weighted edge intensity

Status: READY_FOR_REVIEW

Baseline: `ef6ef79` (Campaign XXVI). Audited `research/positivity/WPR01-weighted-edge-intensity.md`: edge-measure normalization, uniform conditional PNT limit, cross-energy identity, deep-subspace defect budget, and hypothetical saturation intensity. PBC01–03 and the cited PNT input are inherited; no fresh source inspection was made.

## Findings

No discrepancy found in the checked calculations.

1. **Edge measure and exact square identity.** On each line segment `s=r_n-t`, `h(t)h(s)=exp(-a)sqrt(n)`, so the normalized prime coefficient times the two weights is exactly `exp(-2a)Lambda(n)`. Both marginals are `h(t)^2 ell_a(t)dt`, and dividing the PBC01 cross kernel applied to `h` by `h` gives the stated quotient of psi values. Expanding the square then gives (3); the cross term is precisely the real part of the normalized cross-block form. The uniform row error makes (4) uniform for unit vectors, with the same-half prime blocks contributing `O(exp(-a/2))`.

2. **Uniform test-observable limit.** For each fixed truncation `T`, the cumulative mass on `0<t<=T` is `[psi(X)-psi(X exp(-T))]/X` up to endpoint atoms of size `O(log X/X)`. Since `X exp(-T)>=exp(a-T)` throughout the moving range, PNT error tends uniformly to zero. The tail beyond `T` is `O(exp(-T))` by Chebyshev. Compact step approximation followed by `T->infinity` proves (6) for bounded continuous tests; it does not imply total-variation convergence of the atomic conditional measures.

3. **Edge-energy comparison.** The inequality `|| |v_L|-|v_R| ||` in the weighted Cauchy–Schwarz step is controlled by `|v_L-v_R|`; the second factor has squared integral at most twice the sum of the two marginal `|v|^2` integrals, hence `2(1+o(1))` for unit `f`. Replacing the marginals by their densities and using (6) yields (7), with errors uniform over unit vectors for each fixed test function.

4. **Deep-subspace budget and near-saturation.** On a unit vector in the `<=-c exp(a)` spectral space, the scaled pole term is uniformly negligible because the boundary coordinates are weakly null and the normalized pole converges in norm to a compact rank-two operator. The bounded difference between the archimedean form and `L` is negligible after scaling. Thus (8) gives the stated nonnegative defect/log-energy budget. For a hypothetical saturation sequence, `q_alpha>=alpha(0)` and `||exp(-a)R_a||->1` force both `exp(-a)<R_af,f>->1` and `exp(-a)q_alpha(f,f)->0`; the norm-square inequality then makes it an approximate eigenvector of `exp(-a)R_a` at eigenvalue 1. PBC02 strong cancellation on fixed boundary tests implies weak-null boundary coordinates, so the scaled pole term vanishes. Equations (4) and (7) then give equal endpoint masses and the weak finite-measure limits `(1/2)exp(-t)dt` on each side. This is a necessary condition for saturation, not evidence that a saturating sequence exists.

5. **Fourier budget.** From `exp(-a)L(f_a)->0`, Markov's inequality for the positive logarithmic weight gives vanishing Fourier mass above `|t|>=exp(epsilon exp(a))` for every fixed `epsilon>0`. This is compatible with PBC03's moderate-band escape and leaves an intermediate frequency region; it does not close the frequency gap.

## Scope and limits

AI-assisted scoped audit, not formal verification or independent human review. I did not reprove PBC01–03 or recheck their primary PNT source. No existence claim for deep or saturating states, actual zero inference, RH conclusion, numerical computation, or priority claim.
