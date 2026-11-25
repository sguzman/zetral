# WPR02 independent audit — local prime-phase coherence

Status: READY_FOR_REVIEW

Baseline: `92d4f27` (Campaign XXVI). Audited `research/positivity/WPR02-local-phase-coherence.md`: the local reflected-edge comparison, shrinking prime interval, transfer of low-band escape through the cutoff, and extraction of a coherent frequency. WPR01, PBC03 and the cited PNT estimates are inherited inputs.

## Findings

No discrepancy found in the checked implications.

1. **Local reflection comparison.** For `r,r'` in the interval `J`, the right coordinates `s` and `s+Delta` share the same left coordinate `t`. The difference of cutoff wavefunctions splits into two edge differences plus the cutoff derivative term. The first two square integrals are subintegrals of the weighted edge energy; averaging in `r,r'` with the normalized prime weights contributes `O(E_a/M_(a,J))`. The cutoff term is `O(ell^2)` because the support remains in a fixed compact subset and the local `L2` norm of `v_R=e^{s/2}g_R` is uniformly bounded. Plancherel turns the averaged translation difference into exactly `2(1-|Phi_(a,J)(omega)|^2)`.

2. **Shrinking interval mass.** With `X=exp(2a-4)`, the interval mass is `e^-2a[psi(X)-psi(Xe^-ell)]` up to endpoint atoms. Uniform PNT error applies because both endpoints tend to infinity at least as `exp(a)`. The main term is `exp(-4)(1-exp(-ell))`; the `O(delta_a+a exp(-2a))` error is `o(ell)` since `ell>=eta_a^(1/4)`. Thus `M_(a,J)` is comparable to `ell`, while `E_a/ell<=E_a^(2/3)`. Both terms in the coherence bound tend to zero.

3. **Frequency-band extraction.** Applying the adjoint of PBC03's restricted-band residual estimate to the near-eigenvector relation for a saturation trial gives low-band mass `o(1)` for `R=eta_a^-1/2`. Multiplication by the fixed smooth compact cutoff preserves this escape on a halved band: low input frequencies have vanishing norm, and transfer from higher input frequencies into the halved output band is bounded by the Fourier tail of the cutoff. The bounded log-energy multiplier estimate gives `L(w_a)<=C L(f_a)`. With `xi_a=sqrt(exp(-a)L(w_a))+1/a`, Markov's inequality makes the Fourier mass above `log(2+|omega|)>xi_a exp(a)` vanish. Since the cutoff profile has norm bounded below, a fixed positive mass remains between the low and high exclusions. The vanishing coherence-deficit integral then supplies a frequency in that band with `|Phi|->1`. The inequalities imply `|omega_a|ell_a->infinity` and `log(2+|omega_a|)=o(exp(a))`.

4. **Prime-phase restatement.** The characteristic function differs from the normalized interval sum of `Lambda(n)n^(±i omega_a)` only by a constant phase; hence its modulus is the displayed prime-power sum ratio. Proper prime powers have total weight `O(sqrt(X_a))`, while the denominator is `X_a ell_a` and `ell_a>=exp(-a/8)`, so their relative contribution vanishes. Replacing log weights by unweighted prime proportion is valid because `log p` varies by at most `ell_a` across the interval. The conclusion remains a necessary near-total phase-coherence condition conditional on saturation, not an existence claim.

## Scope and limits

AI-assisted scoped audit, not formal verification or independent human review. I did not reprove WPR01/PBC03, independently inspect the primary PNT sources, or establish an arithmetic estimate excluding the coherence condition. No actual saturating state, ordinary upper-bound improvement, RH inference, numerical computation or novelty claim.
