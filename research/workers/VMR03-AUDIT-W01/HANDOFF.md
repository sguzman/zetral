# VMR03 independent audit — excess-depth escape

Status: READY_FOR_REVIEW

Baseline: `346de60` (Campaign XXIV). Audited `research/positivity/VMR03-excess-depth-escape.md`: the threshold intersection estimate, Fourier-mass escape consequence, and diagonal countermodel. The work does not claim a counterexample for the Weil form or zeta zeros.

## Findings

No discrepancy found in the checked inequalities or countermodel.

1. **Threshold intersection.** Let `Y` be the span of the selected operator's negative eigenvectors with depth strictly greater than `H`. On `Y^perp`, the selected form is bounded below by `-H||f||^2`. Intersecting this complement with the first `j` ordinary negative directions loses at most `r_a(H)` dimensions. For any resulting unit vector, `q<=-N_j` and `q_selected>=-H`, so `|q_rem|>=N_j-H`; (1) then gives `L(f)>=(N_j-H)/K_a`. Choosing `H=n_j(O_a)` leaves at least one dimension because at most `j-1` selected depths strictly exceed it, including the zero-padded case. Taking the maximum logarithmic energy over the ordinary `j`-dimensional negative space yields (3). The argument does not require eigenvectors to be individually localized in the selected coordinates.

2. **Fourier escape.** For a unit vector with `L(f)>=E`, the cutoff `R=exp(E/4)` makes `w(t)<=E/2` on `|t|<=R` once `E` is sufficiently large. Thus the high-frequency contribution to `L(f)` is at least `E/2`. The graph estimate and Cauchy–Schwarz give `P_f(|t|>R)>=E^2/(4C_1 exp(2a))`. Substituting `E'=c exp(2(d-b)a)/(Ca)` yields `log log R'=2(d-b)a-log a+O(1)`. This is a necessary escape estimate; its mass lower bound may be small and it does not exclude escape.

3. **Abstract diagonal model.** With `h=ceil(exp(a))`, `d=1/4`, `b=1/8`, `s=3/4`, the quadratic form `R=L-(h+exp(sa))P_h` has moving-coordinate coefficient `-exp(sa)` and all other coefficients `n`; since `exp(sa)<=h`, `|R(c,c)|<=L(c,c)`. The full form `q=O+R` has depths `exp(a/2)-1` on `e_1` and `exp(3a/4)` on `e_h`. Its ordinary bounded part in `q=L+B_a` has norm at most `3exp(a)` for `a>=1`. Under metric `I+epsilon L`, the depths are `[exp(a/2)-1]/[1+epsilon]` and `exp(3a/4)/[1+epsilon h]`. For `epsilon=exp(-kappa a)`, `0<kappa<1/4`, the selected scale retains its unit leading prefactor while the moving-coordinate depth tends to zero in the regularized metric, despite dominating the ordinary bottom. This verifies the countermodel's stated implication: the coarse norm, graph, fixed-window, and selected-Gram estimates alone cannot yield an ordinary upper bound.

## Scope and limits

The diagonal example is an abstract model satisfying the displayed coarse inequalities; it is not a zeta-like zero system or a counterexample to any claim specific to the Weil form. The audit inherits VMR01–02, LBS01, and NIR04 estimates and does not reprove them. AI-assisted, not formalized or independently human-reviewed. No numerical experiment, actual off-line zero, RH inference, or novelty claim.
