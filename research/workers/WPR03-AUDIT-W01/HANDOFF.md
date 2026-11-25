# WPR03 independent audit — phase obstruction and lattice model

Status: READY_FOR_REVIEW

Baseline: `ed57e7f` (Campaign XXVI). Audited `research/positivity/WPR03-arithmetic-coherence-obstruction.md`: the reduction to a prime-phase condition, the elementary moment bound, and the explicit lattice-shift countermodel. No fresh external-source inspection was made.

## Findings

No discrepancy found in the checked calculations; the stated conclusions remain limited to the model and estimates described.

1. **Remaining arithmetic target.** In the WPR02 interval, `log(X/p)` lies in `[0,ell]`, so the normalized exponential sum has derivative bounded by `ell`. Its total prime log weight is `S~X ell`, and since each `log p=log X+O(ell)`, the prime count is `N~X ell/log X=X^(1-o(1))`. The unnormalized coefficient sum is therefore of order `X^(1-o(1))`, as stated. A uniform strict coherence gap along the WPR02 sequences would preclude saturation at coefficient one, but says nothing by itself about all `exp(a)`-scale negative depths.

2. **Moment estimate.** Expanding `Q^m` gives coefficients indexed by prime multiplicity vectors. The squared multinomial coefficient is at most `m!` times the multinomial coefficient, so `sum |A_n|^2<=m!V^m`. On a time interval, the diagonal integral is `2T sum |A_n|^2`; for distinct indices the integral is at most `2/|log(n/k)|<=2X^m/|n-k|`. Cauchy–Schwarz bounds each offset correlation by `sum|A_n|^2`, and summing offsets gives (2). The argument applies after translating the time interval. The derivative estimate implies persistence of a peak on width `O(epsilon/ell)`. The resulting moment upper bound is too large in absolute measure to rule out that interval; this is a limitation of the upper estimate, not evidence for a true large-value peak. I did not independently check the cited Guth–Maynard paper or characterize its full range of applicability.

3. **Lattice countermodel.** The grid summatory weights `h exp(kh)` are right-endpoint exponential Riemann sums, with relative error `O(h+1/X)` (including the initial and final partial cells). The corresponding shift coefficient is correctly `h exp(kh/2)`, since its analogue of `Lambda(n)/sqrt(n)` is `h exp(kh)/exp(kh/2)`. With `h=exp(-a)`, modulation frequency `2pi/h` gives phase one on every retained shift. The endpoint cross block is the exponential Riemann sum for the PBC01 kernel; its weighted row ratio is at most `h/(1-exp(-h))=1+O(h)`, and the same-side normalized block is `O(exp(-a/2)`. Hence the normalized prime/pole residual has limsup norm at most one.

   For fixed compact smooth endpoint envelope `g`, the modulated trial preserves the prime expectation exactly. Its endpoint coordinates are weakly null, so the compact normalized pole limit contributes `o(1)`. The archimedean multiplier cost is `O_g(log(2+2pi/h))=O_g(a)=o(exp(a))`. The Rayleigh quotient therefore gives `liminf exp(-a) N_tilde(a)>=|<g,h_0>|^2`, where `h_0(s)=exp(-s/2)` is unit norm. Taking fixed smooth unit envelopes with overlap tending to one, and combining with the model's coarse limsup upper bound, yields (3). This countermodel keeps neither integer prime support nor unique factorization, so it is a logical obstruction to arguments using only smooth summatory control, not a counterexample for the actual Weil form.

## Scope and limits

AI-assisted scoped audit, not formal verification or independent human review. I did not reprove WPR01–02/PBC01–03, verify the external literature comparison, or derive any bound for actual prime-phase sums at the required frequencies. No actual saturation sequence, actual off-line zero, RH conclusion, numerical calculation, or novelty claim.
