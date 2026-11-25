# CZG03 independent audit

Status: READY_FOR_REVIEW

Scope: scoped audit of the nonreal-pair estimate, the conditional conclusion under hypothesis (H), and the carrier-set measure estimate in `research/positivity/CZG03-negative-pair-and-density-obstructions.md`. The explicit formula, CZG01–02 estimates, local zero count, and Ingham density theorem are treated as imported inputs; this is not source or formal verification.

## Findings

The main deductions appear consistent with the stated inputs. The paired zero contribution has negative part only in the difference square. For a zero pair with deviation (d=\beta-1/2>0), the squared endpoint difference contributes the factor (e^{-(1-2d)a}\min(1,ad)^2), up to the fixed-envelope constant and carrier decay. Its far-carrier tail is bounded by CZG01 after discarding this factor, which is at most one. The local zero count then gives the displayed necessary inequality (3). Since the carrier cost is (\tau=\lim L_\omega/e^a<1), its right side is bounded below by a positive constant; hence (ad\) cannot tend to zero. When (\tau=0), that right side diverges, forcing (ad\to\infty\).

Under (H), the CZG02 selected zero has ordinate tending to infinity, so its deviation from the critical line tends to zero. The local-geometry bound forces \(\log\log(2+|\omega|)/a\) to have liminf at least one, while finite carrier cost gives limsup at most one. Hypothesis (H), uniformly over the polylogarithmic local window, then makes the largest local (a d\) tend to zero, contradicting the nonreal-pair lower bound. This establishes the stated conditional (S=0\) deduction, conditional on the imported TPH/CZG inputs.

In the rarity argument, zeros near the negative ordinate range of positive carriers are counted by conjugation among positive ordinates up to (3T\). If no such zero has \(\beta>1-\kappa'/2\), the local weighted sum is (O(e^{-(\kappa'-\kappa)a})\); the union of radius-(R\) intervals around the remaining zero ordinates has measure bounded by (2R N(1-\kappa'/2,3T)\). Ingham's exponent simplifies to (3\kappa'/(2+\kappa')<1\), with polylogarithmic factors absorbed into (T^{o(1)}\).

## Wording correction

Section 3 says that for \(\kappa=0\), the condition \(\log\log(2+2T)\le \kappa a\) is “vacuous.” For (T\to\infty\), the left side tends to infinity while the right side is zero, so there are no such asymptotic pairs ((a,T)\). The claimed case is therefore empty/vacuous as a theorem, but the sentence should say the regime is empty and suggest \(\kappa>0\) for a nonempty regime. This does not affect the result for (0<\kappa<\kappa'<1\).

## Limits

- The result is a necessary zero-mass condition and a measure estimate, not exclusion of exceptional carriers or a pointwise ordinary upper bound.
- Hypothesis (H) is additional and unproved; the conditional conclusion is not an RH result.
- No source retrieval, numerical computation, or formal verification was performed.
- No actual off-line zero, anomalous state, RH proof, or priority claim.
