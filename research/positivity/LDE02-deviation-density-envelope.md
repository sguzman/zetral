# LDE02 — Deviation-density envelope and all-index rate criteria

2026-11-25. AI-assisted candidate deduction; no RH assumption, actual off-line zero, numerical experiment, independent verification or priority claim. Uses LDE01's fractional weighted sampling, NIR03's deviation order statistics and lower bound, and the finite-mode comparison of FZE03/SWD02. No fresh literature inspection.

For a fixed reflection-invariant paired remainder (obtained by removing finitely many nonreal pairs from the full form), let D be the closure in [0,1/2] of its actual positive deviations d. Empty D means there are no remaining nonreal pairs and the remainder is nonnegative. The classical local count is the only unconditional density input.

For any set J of deviations define
    W_k(J)=sum_(u in [k,k+1), d in J) m_z d^2,
    theta(J)=limsup_(|k|->infinity) log(1+W_k(J))/log w(k),
where w(k)=1+log(2+|k|). Thus 0<=theta(J)<=1. For every epsilon>0, theta(J)+epsilon<1 implies the bound W_k(J)<=C_(J,epsilon) w(k)^(theta(J)+epsilon) for all k, by the definition of limsup and absorbing finitely many bins in the constant. If theta(J)+epsilon>=1 use the unconditional exponent 1 instead. In particular one does not need an estimate at the exact limiting exponent.

## 1. Upper semicontinuous local deviation profile

For d in [0,1/2] define
    theta_*(d)=inf_(r>0) theta((d-r,d+r) intersect (0,1/2]).
The profile is independent of any fixed finite removal: finitely many ordinate bins are affected, so every limsup theta(J) is unchanged. The profile is upper semicontinuous. Indeed if theta_*(d)<c, choose r with theta(J_r(d))<c; for |d'-d|<r/2, J_(r/2)(d') subset J_r(d), hence theta_*(d')<=theta(J_r(d))<c. The endpoint d=0 is included with the same relative neighborhoods. Because the counts use d^2, a sequence of deviations shrinking to zero is not treated as a population of fixed positive deviations. At an isolated deviation occurring only finitely often, theta_*=0, as intended.

Define the compact-envelope number
    H(D)=max_(d in D) [2d+theta_*(d)].
The maximum exists for nonempty compact D by upper semicontinuity. If D empty set H(D)=0 as a convention. For every epsilon>0 and d in D, choose a relative open neighborhood J_d with sup J_d<=d+epsilon and theta(J_d)<=theta_*(d)+epsilon. Shrink the neighborhood if necessary; monotonicity of theta under inclusion ensures the latter bound remains true. The J_d cover D; compactness gives a finite subcover. Assign every actual deviation to one of the selected covering sets (e.g. in their fixed order), giving a disjoint finite partition. Each bin inherits the covering set's local bound, with exponent min(1,theta_*(d)+2epsilon). LDE01 then bounds its contribution to the ordinary upper rate by 2d+theta_*(d)+4epsilon. Letting epsilon decrease to zero yields
    limsup a^-1 log(1+N_(rem,j)(a)) <= min(1,H(D)).       (1)
This is uniform in the fixed index j, or applies to the bottom and hence all indices. An overlapping cover would also suffice for the nonnegative deficit estimate; the partition makes the interpretation explicit. No uniform constants as the cover shrinks are presumed.

## 2. Separating finite geometry from the tail density envelope

Let D_infty be the intersection over T>=1 of closures of the positive deviations of pairs with |u|>=T, taken in [0,1/2]. It is compact; it is empty exactly when only finitely many distinct nonreal pairs exist, by discreteness and the classical local count. If nonempty its maximum is B_tail, the high-ordinate deviation supremum. The profile at a point outside D_infty is zero: some neighborhood has no actual deviations beyond a finite ordinate threshold. Let
    H_tail=max_(d in D_infty) [2d+theta_*(d)]
with value zero for the empty tail.

Remove all nonreal pairs with |u|<=T (and their complete quartets) for a fixed T, so the actual remainder deviation closure D_T is nested compact and decreases to D_infty. If D_infty is nonempty then H(D_T) decreases to H_tail: pick maximizing d_T, take a convergent subsequence in D_1, its limit belongs to every D_T, and use upper semicontinuity. The reverse inequality follows from inclusion. If D_infty is empty, a finite cutoff has no nonreal remainder, by compactness of nested closed subsets. Thus the tail upper bound can approach min(1,H_tail) as closely as desired by finite ordinate removal. This is stronger than simply using 2B_tail+sup theta because deviation and density are optimized jointly.

One need not use SWD02 at a threshold below its mixed scale. For any s>max(2B_tail,H_tail) with s<=1, choose T large so H(D_T)<s and B_rem<s/2. The finite selected form contains all removed pairs; split off its modes with 2d<s (bounded perturbations at that threshold) and use FZE02 at thresholds separated from the remaining fast selected rates. By (1) the remainder has no depths with rates >s. Therefore the full strict rate counts above H_tail consist only of the finite genuine pair rates, except that if H_tail>=1 this assertion is vacuous in the coarse range. More explicitly for any s>H_tail not equal to a selected 2d,
    #{j: s_j^+(full)>s}=#{distinct nonreal pairs:2d>s},   (2)
and likewise for liminf. Here H_tail>=2B_tail when D_infty nonempty, so the stated choice is possible; if the tail is empty H_tail=0 and use finite removal. The strict threshold argument can also be proved directly by minmax and the finite-fast constraints as in LDE01.

## 3. Conditional exact ordinary indexed exponents

For the original form let b_j be the supremum, over j distinct nonreal conjugate pairs, of the minimum positive deviation among the j, with empty supremum zero. NIR03 gives the unconditional lower rate 2b_j; when there are fewer than j pairs the depth is identically zero. Otherwise for every b>b_j at most j-1 pairs have d>b, and b>=B_tail whenever infinitely many pairs exist. On the first j negative spectral span impose at most j-1 complex constraints Ff(z)=Ff(conj z) for these faster pairs. Their paired contributions are then nonnegative, so only the remaining pair deficits bound the depth on the nonzero intersection. The ordinary negative energy budget of LDE01 holds on the ORIGINAL negative span, even after the constraints.

Applying the finite-cover estimate to the remaining deviation closure gives upper rate at most max(2b,H_tail), capped at one: outside D_infty the local theta_* is zero, inside it the envelope is at most H_tail. If a tail point is not in the remaining closure it simply does not contribute. Let b decrease to b_j, using the coarse upper bound if b_j=1/2. We obtain for every fixed j with at least j pairs
    2b_j <= s_j^-(full) <= s_j^+(full)
         <= min(1,max(2b_j,H_tail)).                    (3)
The same proof in either parity counts one fast negative-direction constraint per quartet; use the corresponding b_j for that parity as in NIR03. If infinitely many pairs accumulate at zero, B_tail may be zero, but b_j is strictly positive for every fixed j for which at least j pairs exist (choose any j such pairs). In this case H_tail may still be positive.

In particular the following single tail-profile condition suffices for all ordinary indexed rates to match their zero deviations:
    theta_*(d)<=2(B_tail-d) for every d in D_infty.       (H)
It implies H_tail=2B_tail. Since b_j>=B_tail for every finite j when the tail is infinite, (3) proves existence and equality of the rates at 2b_j. For the finite-tail case the equality follows without (H). If there are no nonreal zeros, the form is nonnegative.

Condition (H) is weaker than requiring the entire weighted local population to be bounded or even subpower in log |u|: positive logarithmic density exponents are permitted away from the largest tail deviations, provided 2d+theta_*(d) stays below the tail geometric threshold. It is only a sufficient hypothesis, not established for zeta. No actual zero distribution attaining the envelope is claimed. A rate above 2b_j would require tail H_tail>2b_j, but this necessary condition is not sufficient for a negative mode because the positive part of the Weil form was discarded.

LDE02 completes the compact deviation-density envelope, finite-cutoff consistency and all-index conditional exact rates. LDE03 will localize the necessary excess density to a carrier-centered unit bin on a sequence of ordinary residual packets, retaining the log-log carrier cost explicitly. README unchanged.
