# VMR02 independent audit — joint Gram limit

Status: READY_FOR_REVIEW

Baseline: `7079447` (Campaign XXIV active). Audited `research/positivity/VMR02-joint-gram-limit.md`, checking the exact evaluation columns, logarithmic-energy control, simultaneous Gram limit, and the stated scope of the selected-pencil conclusion. This is not a review of VMR01's full operator construction or the finite-pencil derivation in BPF03.

## Findings

No discrepancy found in the checked inequalities or scale conditions.

1. **Endpoint densities and logarithmic energy.** After translating either endpoint profile to `[0,2a]`, its zero extension has L1 norm at most `1/d_j`, derivative L1 norm at most `|alpha_j|/d_j`, and two endpoint jumps of bounded size. Its Fourier transform therefore has a uniform `O((1+|t|)^-1)` envelope. For a fixed finite coefficient vector, this gives `L(E_a c)<=C||c||^2` uniformly in `a`. Trimming a fixed-window profile, then mollifying inside the interval, preserves a uniform BV bound and gives pointwise Fourier convergence; dominated convergence with the integrable weight `w(t)/(1+|t|)^2` proves membership in `V_a`. This membership is essential to the lower variational bound.

2. **Variational Gram enclosure.** Completing the square in the `L_epsilon` Riesz problem gives
   `c*G_(a,epsilon)c = sup_f (2 Re<f,E_a c>_2 - ||f||_2^2 - epsilon L(f))`.
   The upper bound is the ordinary L2 dual norm; testing at `f=E_a c` and using item 1 gives the lower bound. Hence `0<=G_(a,0)-G_(a,epsilon)<=C epsilon I` uniformly over the finite profile family and for any chosen function `epsilon(a)>0`. This justifies the joint limit without exchanging iterated limits. The ordinary same-side Gram tails vanish exponentially; the opposite-side integrals are `O(exp(-d_min a))` by splitting at the midpoint and integrating the decaying factor on each half. The limiting direct-sum Cauchy Gram is positive definite for distinct exponents.

3. **Finite pencil and remainder scaling.** For the selected finite family, the nonzero eigenvalue problem for `E D E*` is equivalent to the pencil `D-xG^-1`; the faster-group Schur reduction therefore uses the inverse metric Gram with the stated projected current Gram. The remainder operator norm in the `L_epsilon` metric is bounded by `C a exp(2ba)/epsilon`. Relative to the smallest selected scale `exp(2d_min a)`, this tends to zero exactly under `a exp(-2(d_min-b)a)/epsilon(a)->0`. With `epsilon=exp(-kappa a)`, any `0<kappa<2(d_min-b)` suffices. The bounded self-adjoint minmax perturbation then preserves the selected finite negative depths at that scale.

4. **Conclusion kept appropriately limited.** Since the regularized denominator is at least the ordinary L2 denominator, `N_j>=N_j^epsilon`; the selected-pencil asymptotic supplies ordinary lower bounds only. Combining the sufficient conditions `epsilon exp(a)->0` from VMR01 and `kappa<2(d_min-b)` may fail in the strip when `2(d_min-b)<=1`. This is a failure of those two sufficient estimates to overlap, not a no-go theorem for other regularizations or an ordinary upper bound. The VMR02 note states that limitation correctly.

## Scope and limits

AI-assisted scoped audit; no formal proof checking, numerical experiment, primary-source reinspection, RH inference, actual off-line zero, ordinary upper estimate, or novelty claim. It inherits the LBS01 remainder estimate, VMR01 fixed-window framework, and BPF03 finite-pencil reduction; those full inputs were not independently reproved here.
