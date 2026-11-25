# FZE03 — Additive ordinary rate counts: finite zero modes plus residual escape

2026-11-25. AI-assisted candidate deduction without RH. Uses FZE01's exact annihilator and FZE02's ordinary mixed-form/inertia bounds. No actual off-line zero, anomalous eigenstate, numerical spectrum, independent verification or priority claim. The finite removal is a theoretical construction using exact hypothetical selected nodes.

## 1. Fixed removal and spectral threshold

Let F be a fixed finite reflection-invariant set of nonreal conjugate pairs with positive deviations d_j>b>=0, containing all such pairs above b. Each distinct conjugate pair counts once, independent of its multiplicity; multiplicities enter the finite form coefficients but not the negative index. Write q_rem for q with the entire F contribution removed, so remaining nonreal deviations are <=b.

For the ordinary full and residual negative depths define
    s_j^+(full)=limsup_(a->infinity) a^-1 log(1+N_(full,j)(a)),
    s_j^-(full)=liminf_(a->infinity) a^-1 log(1+N_(full,j)(a)),
and likewise for rem. The quantities are nonnegative and finite: the full coarse bound is O(exp a), and each of the removed finite terms has norm O(exp(2 d_j a)) for fixed d_j>0, with 2d_j<=1. Bounded perturbation gives the same coarse exponential upper bound for the residual. Each indexed sequence is nonincreasing in j.

Fix a real threshold s>2b such that s!=2d_j for any selected pair. Partition the finite selected set into F_high with 2d_j>s and F_low with 2d_j<s. Set r_s=|F_high|. The lower-scale finite contribution satisfies
    ||q_(F_low,a)||_ordinary <= C_F exp(s_low a), s_low=max_(F_low)2d_j<s,
where an empty contribution is zero. This is the rank-one evaluation estimate I_a(d_j) from PPE02, summed over the fixed finite set. Thus removing F_low alters each negative depth by at most this norm by ordinary minmax (including zero padding). We may compare the form q'=q_rem+q_Fhigh instead, with a negligible error relative to exp(s a).

If F_high is nonempty, its smallest deviation d_min,high satisfies 2d_min,high>s. Apply FZE02 to q' using the same residual q_rem and selected set F_high. The proofs there only use the residual paired subset's deviations <=b and classical local counts, so the already omitted F_low terms play no role. At t=exp(s' a) for any fixed s' with
    s<s'<min_(F_high)2d_j
and s'>2b, the shifted inertia bound is
    r_s+n_(rem,Khigh)(a,t+o(t)) <= n_(q')(a,t)
                                 <= r_s+n_(rem,Khigh)(a,t-o(t)).  (1)
The explicit o(t) is the positive Schur bound Delta_a(t) in FZE02. All counts are strict depths above threshold. In the empty F_high case take r_s=0, K_high the full support space, q'=q_rem and Delta=0, with no upper bound on s' from this set.

The residual restriction satisfies the two-sided comparison of FZE01 even though its omitted set is the whole F, not just F_high. Indeed construct the even contraction annihilating F_high; the form-difference proof of FZE01 sums over the remaining paired subset of q_rem, with its deviations <=b, and works unchanged. With H fixed depending on F_high,
    N_(rem,Khigh,j)(a)<=N_(rem,j)(a),
    N_(rem,Khigh,j)(a+H)>=(N_(rem,j)(a)-E(a))_+, E(a)=O(exp(2ba))
for b>0, with E=0 for b=0. This comparison is dimension-preserving despite the exact selected evaluation constraints.

## 2. Strict limsup-rate threshold equivalence

For every fixed j and admissible s above, we claim
    s_j^+(full)>s
       iff [j<=r_s] or [j>r_s and s_(j-r_s)^+(rem)>s].   (2)

For the forward direction with j>r_s, choose s'>s strictly below s_j^+(full) and all F_high rates. Along some expanding sequence the full jth depth exceeds exp(s' a) by an arbitrarily large multiplicative factor (choose a rate between s' and s_j^+(full)). Removing F_low changes the depth by o(exp(s' a)), so n_(q')(a,t)>=j for t=exp(s' a) eventually on that sequence. The upper bound in (1) forces at least j-r_s residual kernel depths >t-o(t). The unrestricted residual depths dominate them. Thus s_(j-r_s)^+(rem)>=s'>s.

For the reverse direction when j<=r_s, choose any s' strictly between s and the smallest F_high rate. The lower bound in (1) alone gives n_(q')(a,t)>=r_s for every sufficiently large a. Adding back F_low changes the depths by o(t), so s_j^-(full)>=s'>s, which also proves the required limsup statement.

If j>r_s and s_(j-r_s)^+(rem)>s, choose s' strictly between s and both this rate and all F_high rates. Along some sequence a_l the corresponding residual depth exceeds exp(s' a_l) by a factor tending to infinity. Transfer its actual negative subspace into the F_high kernel at windows A_l=a_l+H via the annihilator. The additive E(a_l)=o(exp(s' a_l)) is negligible; the fixed support enlargement changes exp(s' a_l) by only a fixed factor. Thus the kernel at A_l has j-r_s depths exceeding exp(s' A_l)+Delta_(A_l)(exp(s' A_l)) for all large l. The lower bound of (1) supplies j full q' depths above exp(s' A_l). Adding back F_low has o of this threshold norm, so the full limsup rate is at least s'>s. This proves (2). The proof does not exchange the limits in a and the fixed annihilator support radius.

## 3. Liminf rates and ordered multiset interpretation

The identical strict-threshold equivalence holds for liminf:
    s_j^-(full)>s
       iff [j<=r_s] or [j>r_s and s_(j-r_s)^-(rem)>s].   (3)
In the forward argument use the eventual lower exponential margin for all sufficiently large windows instead of a subsequence. In the reverse argument, the annihilator comparison holds for every sufficiently large a, so its output windows A=a+H cover every sufficiently large A, not only a subsequence. All threshold and Schur errors vanish uniformly along that eventual range. This proves (3) without assuming existence of the individual rates as limits.

Equations (2) and (3) identify the full exponential rate multiset ABOVE 2b as the ordered union of the finite genuine zero rates {2d_j:j in F} and the respective residual rates above 2b, with the strict-threshold count interpretation. For example for any s>2b outside the finite exceptional list,
    #{j:s_j^+(full)>s}=r_s+#{j:s_j^+(rem)>s},
and likewise for the liminf rates. Infinite counts are permitted. Thresholds outside a finite set are dense, so the strict-threshold comparisons determine every fixed ordered rate above 2b (including at a finite selected rate by approaching from either side). This is not a statement that the residual rates are bounded by 2b; those are precisely the potential anomalous rates that remain unresolved. Nor is it a same-window addition formula for the actual eigenvalue magnitudes or their oscillatory prefactors at a selected rate. At such rates the fast inverse estimate used in (1) need not apply to the equal-scale group.

## 4. Parity and consistency of the residual anomaly

The whole proof holds in either parity, using FZE02's equivariant right inverse and FZE01's parity-preserving annihilator. Replace r_s by r_s/2, since each reflection quartet contributes one genuine fast negative direction in each sector. Apply PPE02's sign-filter argument to the residual itself (a reflection-invariant paired subset of deviations <=b): the real-zero contribution to the upper comparison is nonpositive, and the remaining deficit error is O(exp(2ba)) for b>0, zero if no nonreal remainder exists. Thus residual ordinary limsup or liminf rates strictly above 2b are paired between the two parities and their corresponding full indices. The finite genuine rates have the same parity duplication. This supplies another derivation of rate pairing above 2b for the full form, not equality of actual parity prefactors.

Let B_tail be the tail-deviation supremum of PPE03. For every b>B_tail in the strip there is a finite set F of all pairs above b. For two such cutoffs b_1<b_2, the residual forms differ by only finitely many paired terms with rates <=2b_2; their ordinary operator norm difference is O(exp(2b_2 a)). Consequently their fixed-index rates strictly above 2b_2 agree, both limsup and liminf, by ordinary bounded-perturbation minmax. This consistency allows one to define the residual anomalous count at any fixed s>2B_tail using any cutoff b with B_tail<b<s/2: the count is independent of this choice. Equations (2)–(3) then give the full above-threshold count as the finite count of genuine pairs with 2d>s plus that cutoff-independent residual anomaly count, provided s is not a selected rate. If B_tail=1/2 there is no such nonvacuous threshold within the coarse upper exponent one.

For a useful special case, if a residual ordinary upper exponent <=2b were independently proved, (2) would immediately identify all full ordinary rates above 2b with the finite genuine deviations. But neither this decomposition nor the filter proves that bound. It localizes the open rate problem to the infinite tail, and separates its possible extra spectral directions from the finite-dimensional geometric ones without assuming an ordinary remainder norm estimate.

FZE03 completes the proposed additive rate-count decomposition, for both limsup and liminf and in each parity. FZE04 should audit it and decide which arithmetic tail condition can plausibly yield a substantive next result. No actual anomalous mode, independent proof verification, numerical spectrum or RH proof. README unchanged.
