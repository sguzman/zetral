# TPH01 independent audit — twisted Hankel lower bounds

Status: READY_FOR_REVIEW

Baseline: `9ccdd9b` (Campaign XXVII). Audited `research/positivity/TPH01-twisted-hankel-models.md`: twisted-measure compactness, Hankel compactness, strong block convergence, carrier cost, pole handling and the fixed-index lower-bound argument. The PBC01–02 operator decomposition is inherited.

## Findings

No discrepancy found in the checked implications.

1. **Twisted limits.** The total variation of each twisted measure is bounded by the untwisted positive measure, whose tail above `R` is `O(exp(-R/2))`. This gives subsequential vague compactness and tightness. Passing the domination inequality to the limit gives `|mu|(dr)<=exp(-r/2)dr`, hence a density `phi(r)exp(-r/2)` with `|phi|<=1`. No claim of attainability for arbitrary such `phi` is made.

2. **Hankel model and strong convergence.** The kernel square integral is `int_0^infinity r exp(-r)|phi(r)|^2dr<=1`, so `K_phi` is Hilbert–Schmidt. For compact smooth `g` and fixed `t`, the integrand `g(r-t)` is a compact continuous test (it vanishes near `r=t`); vague convergence yields pointwise convergence. The PBC01 positive row bound and `|g|<=C_g h` give the integrable majorant `C_g exp(-t/2)`. Dominated convergence proves strong convergence on a dense class, and the uniform Schur bound extends it to all L2. The conjugate measures give strong convergence of adjoints as well. The weighted tail restriction `t+s>=R` leaves only prime weights with `log n<=2a-R`, whose normalized sum is `O(exp(-R/2))`; splitting by which endpoint exceeds `R` yields the stated two-sided compression tail estimate. No operator-norm convergence is inferred.

3. **Carrier cost and pole.** For diverging `|omega|`, fixed endpoint envelopes become weakly null after modulation, so the compact norm limit of the normalized pole contributes zero. The symbol difference from `log(2+|omega|)` is controlled by the integrable `log(1+|t|)` moment of a fixed smooth envelope; thus the scaled archimedean cost is `tau||g||^2`. The phase in the twisted prime measure agrees with `M_omega^*T_sM_omega=exp(i omega s)T_s`. For bounded carriers, after subsequences the prime and modulated pole have the same twisted cross limit, so treating the prime Hankel norm as an uncancelled zero-cost contribution would be incorrect.

4. **Spectral lower bounds.** The top Rayleigh value of `D_phi` is `||K_phi||`. Approximation of a maximizing pair by compact smooth endpoint envelopes, followed by the ordinary minmax principle and then the supremum over fixed envelopes, yields (3) along the realizing sequence. The same finite-dimensional approximation works for each `j` with `sigma_j(K_phi)>tau`, and gives only the claimed lower bound. These are conditional on an attainable pair; TPH01 does not produce any nontrivial one and does not prove an ordinary upper bound.

## Scope and limits

AI-assisted scoped audit, not formal verification or independent human review. I did not reprove PBC01–02, independently inspect sources, or determine the attainable twisted phase set. No numerical work, actual ordinary anomalous state, RH inference, matching upper bound or priority claim.
