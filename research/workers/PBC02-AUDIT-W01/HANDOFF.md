# PBC02 independent audit — prime/pole norm defect

Status: READY_FOR_REVIEW

Baseline: `94901b6` (Campaign XXV). Audited `research/positivity/PBC02-pole-cancellation-defect.md`, focusing on the pole boundary norm limit, finite-shift modulation recurrence, essential norm comparison, and the ordinary coarse upper bound. PBC01's PNT boundary limit and arithmetic decomposition are inherited inputs, not re-proved here.

## Findings

No discrepancy found in the checked bounded-operator argument.

1. **Pole limit.** In endpoint coordinates, the normalized cross kernel is exactly `h(t)h(s)+exp(-2a)exp((t+s)/2)`, with `h(t)=exp(-t/2)`. The second rank-one term has norm `exp(-2a)(exp(a)-1)=O(exp(-a))`. Same-half blocks have Hilbert–Schmidt norm `O(a exp(-a/2))` after normalization. Thus the stated norm convergence to the rank-two off-diagonal block follows.

2. **Norm upper bound and recurrence lower bound.** The PBC01 weighted Schur estimate gives `||K_a||<=1+o(1)` and strong convergence `K_a h->h`. For `D_a=K_a-K`, the block on `span{h}` and both off-diagonal blocks vanish because `D_a h->0`; the compression to `h^perp` is a compression of `K_a`, of norm at most `1+o(1)`. Hence `limsup ||D_a||<=1`, yielding the residual upper bound after same-half pole blocks vanish.

   For a fixed window, the prime-shift sum has finitely many shifts. The phase vectors `(exp(i n s_l))_l` have a convergent subsequence on the finite torus. Taking index pairs `k,2k` makes their differences tend to infinity while the phase ratios tend to the identity; this proves the required unbounded recurrence without a rational-independence assumption. Conjugating each shift by modulation multiplies it by its phase, so `M_omega^*P_aM_omega-P_a->0` in operator norm along that sequence. For each fixed vector, `M_omega f` is weakly null; compact pole subtraction therefore vanishes on it. Taking a supremum over unit vectors gives `||P_a-H_a||>=||P_a||`. Combined with the upper bound and PBC01's `exp(-a)||P_a||->1`, this proves the asserted normalized norm defect.

3. **Spectral and ordinary implications.** The same weakly-null modulation argument preserves both extremal Rayleigh quotients of the bounded prime operator after compact subtraction. The conclusion concerns the bounded residual's positive and negative spectral extrema. The ordinary lower bound for the archimedean multiplier gives `N_1(a)<=||R_a||-alpha(0)`, hence the stated `limsup exp(-a)N_1(a)<=1`. It is an upper bound only; it does not imply a negative eigenvalue exists. The constant shift from `-R_a` to `B_a` is bounded independently of `a`, so the normalized operator norm limit is unchanged.

## Scope and limits

AI-assisted scoped audit, not formal verification or independent human review. It inherits PBC01's strong-limit/Schur estimates and the arithmetic form decomposition; these were not independently rederived. No quantitative recurrence rate, numerical experiment, actual off-line zero, RH inference, lower bound on ordinary negative depths, or priority claim.
