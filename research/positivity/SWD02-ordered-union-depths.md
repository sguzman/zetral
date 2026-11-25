# SWD02 — Same-window ordered-union comparison of ordinary negative depths

2026-11-25. AI-assisted candidate deduction without RH. Uses SWD01 and FZE02's uniform mixed-form bound. No actual off-line zero or anomalous state, numerical spectrum, independent proof review or priority claim. All spectral quantities are ordinary L2 depths.

Fix finite F and residual deviation bound b as in SWD01. Let O_a be the exact selected finite ordinary operator (not its limiting Cauchy matrix), A_rem the unrestricted ordinary remainder, and A_rem,K the kernel-restricted ordinary remainder. Denote their zero-padded negative depths by N_(F,j), N_(rem,j), and N_(ker,j). Use the common residual mixed scale
    L_a=1+exp(ba)sqrt(I_a(b)).
In particular L_a=O(exp(2ba)) for b>0 and O(1+sqrt(a)) for b=0.

## 1. Dimension-preserving kernel comparison at the SAME window

For each fixed 0<epsilon<1/4 choose SWD01's smooth right inverse W_a^epsilon, uniformly close to the orthogonal right inverse in the sense ||(W_a^epsilon-W_a^0) C_a||<=epsilon for large a. Set
    T_a=I-W_a^epsilon C_a.
This is a bounded projection onto K_a (not generally orthogonal), with
    ||T_a||<=||I-W_a^0 C_a||+epsilon<=1+epsilon.
It maps V_a into V_a intersect K_a exactly, by smoothness of the range of W_a^epsilon and the right-inverse identity. It does not enlarge the support, unlike the convolution annihilator in FZE01.

For f in V_a, put c=C_a f. The mixed estimate of FZE02 applied to W_a^epsilon c, along with uniform ||C_a|| and ||W_a^epsilon||, gives
    |q_rem(T_a f,T_a f)-q_rem(f,f)| <= D_(a,epsilon)||f||^2,
    D_(a,epsilon)=C_(F,epsilon) L_a,                    (1)
by expanding the two cross terms and the finite remainder term. This estimate holds even if f has arbitrarily large log energy or an anomalous residual depth. Enlarge D if necessary to also dominate SWD01's difference error.

On a residual j-dimensional negative spectral subspace with depth N_(rem,j)>D, (1) gives a strict negative form on every nonzero f after applying T_a, so T_a is injective on that subspace despite having a finite-dimensional kernel on the whole space. With its ordinary norm bound the resulting j-dimensional kernel trial space gives
    (N_(rem,j)-D)_+/(1+epsilon)^2
               <= N_(ker,j) <= N_(rem,j).              (2)
The upper inequality is subspace inclusion. Thus the finite evaluation constraints can be imposed at the same physical window without sacrificing any negative dimension above the residual mixed scale. No estimate of individual evaluation values of escaping eigenfunctions was required.

## 2. The ordered union and explicit two-sided comparison

Let U_j(a) be the jth largest member, counting multiplicity, of the union of the positive negative magnitudes of O_a and A_rem, zero padded. Let V_j(a) be the corresponding union with A_rem,K in place of A_rem; these are exactly the negative depths of SWD01's reference direct sum P_a=O_a|S_a direct sum A_rem,K. This union is well defined since each ordinary negative spectrum is finite at fixed a (compact resolvent and semiboundedness), and the selected part has finite rank.

Equation (2) and equality of the selected block give
    (U_j-D)_+/(1+epsilon)^2 <= V_j <= U_j.             (3)
One way to see the lower inequality is to apply the nondecreasing scalar transformation x->(x-D)_+/(1+epsilon)^2 to every entry of the unrestricted union. Each entry of the reference union from its corresponding component dominates the transformed entry. Ordering preserves the comparison, or equivalently compare the numbers above each positive threshold. No arbitrary pairing of eigenfunctions across different components is assumed.

Combining (3) with SWD01(5), for all sufficiently large a at the chosen fixed accuracy and every j>=1,
    [ (U_j-D)_+/(1+epsilon)^2 -D ]_+/(1+epsilon)^2
        <= N_(full,j)(a) <= (U_j+D)/(1-epsilon)^2.      (4)
In particular with absolute numerical C (for epsilon<1/4),
    |N_(full,j)-U_j| <= C epsilon U_j+C D_(a,epsilon). (5)
Indeed the upper bound follows by expanding (1-epsilon)^-2-1=O(epsilon); the lower bound is at least U_j/(1+epsilon)^4-O(D), since discarding positive-part signs only lowers it. This comparison is independent of the largest finite selected eigenvalue, and is uniform over every index j, not merely a fixed index. It is at the same window, without any support expansion or gap at a selected scale.

## 3. Asymptotically exact relative depths above the mixed scale

Let t(a)>0 satisfy t(a)/L_a->infinity. Dividing (5) by t(a)+U_j(a) and taking the supremum over all j gives, at fixed epsilon,
    limsup_(a->infinity) sup_j |N_(full,j)-U_j|/(t(a)+U_j)
       <= C epsilon,
because the constant C_(F,epsilon) is finite and fixed before the limit. Then let epsilon decrease to zero. We obtain
    sup_(j>=1) |N_(full,j)(a)-U_j(a)|/[t(a)+U_j(a)] ->0. (6)
No claim of a uniform bound on C_(F,epsilon) as epsilon decreases is needed; equivalently a sufficiently slow diagonal choice epsilon(a)->0 works.

For any possibly varying index j(a) with U_j(a)>=c t(a), c>0 fixed, (6) yields relative asymptotic equality N_full,j/U_j->1. If U_j=o(t(a)), then N_full,j=o(t(a)), and conversely by (4). For b>0 the condition t/L_a->infinity is satisfied not only at each fixed exponent s>2b but also at t=exp(2ba) times any divergent factor. Thus it is stronger than a growth-exponent comparison.

At a selected group scale t=exp(2d a), d>b, this gives the ordinary depths as the ordered union of the finite genuine selected depths (whose multiscale Cauchy prefactors are known from BPF03) and the actual ordinary residual depths, to o(t) for entries of order t and relative error o(1) for larger entries. If the residual top depth is o(t), the selected finite-group prefactors transfer without the extra ordinary remainder-density hypothesis. If residual anomalies coexist at the same scale, the union includes them rather than presuming their absence. Thus (6) isolates exactly what must be controlled to recover a given finite prefactor.

This also gives a same-window alternative proof of FZE03's strict rate-count equivalences above 2b: the rates of the ordered union are those of the finite genuine rates and the residual rates when compared at strict exponential margins, and (6) transfers every such margin. In contrast with FZE03, the actual finite selected spectrum is retained even at matching thresholds. The result does not evaluate the residual rates or prove that they are <=2b.

All estimates hold separately in either parity, by SWD01's equivariant right inverse. They do not force relative parity equality of a finite genuine group: its two finite-sector prefactors can differ, and the respective unions retain that difference.

SWD02 completes the same-window ordinary ordered-union comparison. SWD03 next: strengthen this to a norm-resolvent and spectral-band projection decomposition, and specify the gaps required for assigning actual subspaces rather than only ordered depths. No actual anomalous mode, numerical spectrum, independent verification or RH proof. README unchanged.
