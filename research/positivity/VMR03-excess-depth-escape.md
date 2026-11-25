# VMR03 — Sharp excess-depth escape condition and an abstract countermodel

2026-11-25. AI-assisted candidate deduction, without RH. Uses VMR01–02, LBS01 and the zero-extended logarithmic graph bound NIR04. No actual off-line zero, fresh source inspection, numerical experiment, independent review or originality claim. The abstract counterexample is a model of the estimates, not a zeta-like zero system.

## 1. A direct threshold argument in the ordinary metric

Fix a finite selected set consisting of all distinct conjugate pairs with deviation d>b, for some b>=0, and write the arithmetic form as q_a=q_selected+q_rem. The selected form is an ordinary bounded finite-rank self-adjoint operator O_a, whereas LBS01 gives
    |q_rem(f,f)| <= K_a L(f), K_a=C a exp(2ba), a>=1.       (1)
Only the classical local zero count is needed for (1); it does not bound the remainder in ordinary L2 norm. The argument below also works for any finite selected set and any such remainder estimate.

Let X_j be the first j ordinary negative eigenvectors' span whenever N_j(a)>0. For H>=0, let r_a(H) count the negative depths of O_a strictly exceeding H. Their eigenvectors span a subspace Y, dimension r_a(H). On X_j intersect Y^perp,
    q_a(f,f)<=-N_j(a)||f||^2,
    q_selected(f,f)>=-H||f||^2.
The intersection has dimension at least j-r_a(H). Whenever N_j>H and j>r_a(H), every unit vector in this entire intersection satisfies
    L(f)>=(N_j-H)/K_a=:E_a>0.                              (2)
In particular one can take H=n_j(O_a), the jth negative depth of the selected operator padded by zero: the number strictly exceeding H is at most j-1 (also when H=0). This gives the direct comparison
    N_j(a)<=n_j(O_a)+K_a M_j(a),                           (3)
where M_j is the maximum of L on the unit sphere of X_j; if N_j<=n_j(O_a) the inequality is already immediate. The zero case is trivial. The same argument works on reflection sectors with their own counts and M_j. No projection of individual eigenfunctions onto selected pairs has been assumed.

For a selected group at deviation d>b, the ordinary finite-rank model has n_j(O_a)=exp(2da)(s_j(a)+o(1)) by BPF03; VMR02 gives the same lower prefactor for the ordinary full depth. Thus if
    M_j(a)=o(exp(2(d-b)a)/a),
then (3) gives the matching ordinary prefactor at that index. More weakly, it is enough that there exists a unit vector with this energy bound in the indicated threshold intersection; the maximum over X_j is not necessary. This criterion is sharper than using a fixed regularization exponent strictly below 2(d-b).

## 2. Quantified Fourier escape at an anomalous prefactor

Suppose along a sequence a->infinity a selected-scale ordinary depth exceeds the selected-model prediction by at least c exp(2da), c>0. Choose H=n_j(O_a). By (2) there is a unit vector (or an entire subspace if j-r_a(H)>1) with
    L(f)>=E_a>=c exp(2(d-b)a)/(C a).
On the ordinary negative spectral subspace, the arithmetic form decomposition q=L+B gives L(f)<=||B_a||-N_j(a), and the stronger zero-extended graph estimate of NIR04 gives
    int w(t)^2 |Ff(t)|^2 dt/(2pi) <= C_1 exp(2a).
For sufficiently large E_a, take R_a=exp(E_a/4). On |t|<=R_a we have w(t)<=E_a/2, so for the Fourier probability measure dP_f=|Ff|^2dt/(2pi),
    int_(|t|>R_a) w(t)dP_f >= E_a/2.
By Cauchy-Schwarz,
    P_f(|t|>R_a) >= E_a^2/[4 C_1 exp(2a)].               (4)
In particular one may use the explicit lower energy E'_a=c exp(2(d-b)a)/(C a) in both the cutoff and bound. The required frequencies are doubly exponential in a:
    log log R'_a=2(d-b)a-log a+O(1).
This improves the polynomial loss of the earlier rate-only NIR04 obstruction and applies even to an excess by a fixed leading-prefactor amount rather than only a larger exponential growth exponent. The mass bound can be small; it is a necessary condition, not exclusion of escape. It holds for every unit vector in the threshold intersection for which the same E_a is available. For j>1 it does not in general identify a particular eigenvector.

The crude graph bound permits this escape whenever 2(d-b)<1. Even using the exact VMR01 enclosure cannot yield a matching ordinary upper prefactor uniformly from the currently available D_a<=C exp(a) and the remainder estimate (1).

## 3. Explicit abstract countermodel to the norm-estimate-only strategy

The following construction verifies that the inability of the previous estimates to exclude escape is logical, not merely an algebraic inconvenience. It is NOT an example of a Weil form or a possible zeta zero configuration.

Use the fixed Hilbert space ell2(N), with basis e_n, positive unbounded diagonal form L(c)=sum_n n |c_n|^2 and common form domain V. The inclusion of V into ell2 is compact. Let a>=1, d=1/4, b=1/8, s=3/4, h(a)=ceil(exp(a))>=3, and
    O_a=exp(a/2)(-e_1 tensor e_1+e_2 tensor e_2),
    R_a=L-(h(a)+exp(sa)) e_h tensor e_h,
    q_a=O_a+R_a.
Here the last two expressions denote quadratic forms and the rank-one notation uses the ordinary metric. The selected operator has one negative and one positive eigenvalue of exact scale exp(2da)=exp(a/2), on fixed columns with bounded log energy. The ordinary arithmetic-analogue decomposition is q_a=L+B_a with ||B_a||<=3 exp(a). The remainder satisfies the even stronger absolute inequality |R_a(c,c)|<=L(c): at the moving coordinate its coefficient is -exp(sa), whose magnitude is at most h(a), and all other coefficients are n. In particular it satisfies (1) with the stated b and an absolute constant. The ordinary negative span's second L-moment is bounded by h(a)^2=O(exp(2a)), as in NIR04's graph estimate.

Nevertheless the ordinary bottom negative depth is exp(sa) for large a, strictly faster than exp(2da), from coordinate e_h. For the regularized metric ||c||^2+epsilon L(c) and any epsilon=exp(-kappa a), 0<kappa<2(d-b)=1/4, the two negative magnitudes are
    [exp(a/2)-1]/[1+epsilon],
    exp(3a/4)/[1+epsilon h(a)] <= exp((kappa-1/4)a).
The latter tends to zero, so the regularized leading prefactor and its ordinary finite-rank Gram limit are exactly as predicted by VMR02; the ordinary leading depth still has the larger exponent. At each fixed a, sending epsilon to zero recovers the ordinary depth, as VMR01 says. Both kinds of limit hold without a uniform expanding-window comparison.

This counterexample has a stronger remainder bound than the one needed for the joint limit and exactly the permitted coarse arithmetic norm/graph growth. It demonstrates that these abstract inequalities, even combined with fixed-window convergence and the joint selected Gram limit, cannot alone prove the ordinary upper exponent. A proof for zeta would have to exploit additional specific structure (e.g. the lower zero form or arithmetic shifts), not assert that the moving coordinate is physically absent because the metric suppresses it.

## 4. Disposition

VMR03 completes the excess-depth criterion, doubly exponential Fourier escape bound at prefactor precision, and explicit countermodel to the norm-estimate-only route. VMR04 should audit and return to a genuinely arithmetic-specific issue. No actual escape state, off-line zero, numerical certification, independent verification or RH proof. README unchanged.
