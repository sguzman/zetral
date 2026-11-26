# N03 exceptional-tail exponent sharpening

- **ID:** N03-EXCEPTIONAL-TAIL-SHARPENING
- **Status:** IN_PROGRESS
- **Starting commit:** `5e076c163bf97f064a49272556145027bc72dbca` (main, fetched 2026-11-26)
- **Scope:** Independently check whether the parameter choice in the completed N03 exceptional-set proof can be strengthened, preserving the exact hypotheses and measure statement. This is a bounded follow-up to Campaign X's scalar estimate; it does not overlap the lead-owned Campaign LXXII U72-04 reconstruction.
- **Question:** Does N03.1 imply a tail bound with exponent arbitrarily close to `(1-kappa)/2`, and are there hidden continuity, threshold, measurability, or endpoint issues?
- **Acceptance criteria:** Give a self-contained parameterized proof or a counterexample to the proposed sharpening; distinguish supremal exponent from an attained endpoint; state exact conditional assumptions and avoid novelty claims.
- **Completed work:** Campaign/state/coordination and N03 source note read. Preliminary derivation suggests every `delta < (1-kappa)/2` is admissible, with the same geometric threshold argument.
- **Evidence paths:** This handoff; source is `research/evaluation/N03-nested-window-growth.md` at the starting commit.
- **Commands:** `git fetch origin main`; `git show FETCH_HEAD:AGENTS.md`; targeted reads of `STATE.md`, `COORDINATION.md`, `research/CAMPAIGN-72.md`, and `research/evaluation/N03-nested-window-growth.md`.
- **Checked:** Source's N03.1 inequality, original threshold construction, and active campaign ownership/scope.
- **Unchecked:** Full proof audit of parameterization; no independent literature search or external review.
- **Blockers:** None currently.
- **Next recommendation:** Complete the proof audit and update this handoff with precise bound and limitations; push for lead review.

## Proof audit and result

Assume the exact conditional hypotheses used in N03: on a sufficiently large tail, `M(a)>1`, `M` is finite, positive, nondecreasing and tends to infinity; `N(a)` is finite and `N03.1`, namely

`N(a) >= h M(a-h)` for every `0<h<a`, holds. Let `B(a)=log M(a)`. Fix `0<=kappa<1` and any

`0 < delta < (1-kappa)/2`, and set `r=(1+kappa)/2+delta<1`. For all sufficiently large `a`, `h(a)=exp(-delta B(a))<1<a`. If `L(a)=N(a)^2/M(a)<=M(a)^kappa`, then N03.1 gives

`M(a)^kappa >= h(a)^2 M(a-h(a))^2/M(a)`,

so taking logarithms yields `B(a-h(a)) <= r B(a)`. No regularity beyond monotonicity is used here.

Fix `1<s<1/r`. For a tail start `A` with `B(A)>0`, put `B_j=s^j B(A)` and `T_j=inf{t>=A:B(t)>=B_j}`. Every threshold is crossed at a finite point in the infimum sense because `B` is nondecreasing and divergent. For each bad `a>=A`, there is a unique integer `j>=0` such that `B_j<=B(a)<sB_j`. Then `B(a-h(a))<=r B(a)<rsB_j<B_j`. Monotonicity implies `a-h(a)<=T_j<=a`: every point in `[A,a-h(a)]` is below threshold, while `a` is at or above it. This argument does not require continuity or that the infimum itself attain the threshold. As `h(a)<=exp(-delta B_j)`, all such `a` lie in `[T_j,T_j+exp(-delta B_j)]`. Thus the bad set is contained in a countable union of intervals, giving

`|{a>=A:L(a)<=M(a)^kappa}| <= sum_(j>=0) exp(-delta s^j B(A))`

`<= exp(-delta B(A))/(1-exp(-delta(s-1)B(A)))`.

The last inequality follows from `s^j >= 1+j(s-1)` and the geometric series. The sets and functions are measurable: finite monotone `M,N` are measurable, and `L` is their quotient with positive denominator. Threshold endpoints do not affect the measure bound.

Consequently, for every `epsilon` with `0<epsilon<(1-kappa)/2`, choosing `delta=(1-kappa)/2-epsilon` gives

`|{a>=A:L(a)<=M(a)^kappa}| = O_{kappa,epsilon}(M(A)^(-(1-kappa)/2+epsilon))` as `A` tends to infinity.

For fixed `kappa,epsilon`, choose any fixed `s` satisfying `1<s<1/r`; for large `A` the denominator is at least `1/2`, so the implied constant can be taken as 2. The exponent `(1-kappa)/2` is a supremum of exponents furnished by this argument, not an attained endpoint: at equality, `r=1` and there is no admissible `s>1` with `s<1/r`. This audits and sharpens N03.2's explicit choice `delta=(1-kappa)/4`; it does not establish that the supremal rate is optimal for the spectral problem.

The conclusion remains an exceptional-set measure estimate in half-width `a`. It does not imply pointwise divergence of `L`, eliminate an unbounded exceptional sequence, establish a rate after changing variables to `X`, prove RH, or add anything to the synthetic non-pointwise example except that it still obeys the stronger estimate. The result is an internal deduction from N03.1, not a novelty claim.

- **Commands / reproducibility:** Proof is elementary and fully displayed above; no numerical computation or external package was used. Source inspection command: `git show FETCH_HEAD:research/evaluation/N03-nested-window-growth.md`.
- **Checked:** Algebraic implication, choice of admissible parameters, threshold crossing under monotonicity including jumps, countable interval cover, geometric sum, and distinction between supremal and attained exponent.
- **Unchecked:** Independent review by the lead; no search for prior art (no novelty asserted); no machine formalization.
- **Status:** READY_FOR_REVIEW.
- **Recommendation:** Lead may incorporate the sharpened parameter range into N03/N04 commentary if useful. Preserve the qualification that this is a measure bound and that the endpoint exponent is not achieved by this proof.
