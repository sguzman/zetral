# N03 — Nested-window comparison and exceptional-set growth

25 November 2026. Conditional on RH and Suzuki's local positive form and real sampling representation. No additional Fuchs or local-pair hypothesis for the main result. Internal candidate deduction, not established novelty, human peer review, or formal verification.

## 1. Inputs and exact translation inequality

Reopened Suzuki arXiv:2610.32704v1, https://arxiv.org/html/2610.32704v1, actual returned HTML (2.6), (2.8)–(2.9), Theorem 3.3 (3.5)–(3.6), and (4.1). Read the repository L02 and R03 notes and N02 audit. The following exceptional-set proof is a new internal deduction from these inputs, not attributed to Suzuki or Mori.

Write F[f](z)=integral f(x) exp(izx) dx, q(f,f)=sum_gamma m_gamma |F[f](gamma)|^2 on compact tests, under RH. Let M(a)=||u_0||_q and N(a)=||u'_0||_q, so by Riesz representation and density these are respectively the suprema of |F[f](0)|/||f||_q and |F[f]'(0)|/||f||_q over nonzero compact smooth tests in (-a,a). Both are finite, positive, nondecreasing in a: compact tests nest, the sampled norm is independent of the enclosing interval, and local positive coercivity bounds both functionals. Thus both are measurable. L02.2 proves M(a)->infinity, by a compact theta-kernel witness. In particular it gives M(a)>=c exp(pi X)/(X^(7/4) sqrt(log X)), X=exp(2a). Only divergence, not this rate, is needed below.

For any 0<h<a and f in C_c^infty(-(a-h),a-h), define

    w(x)=[f(x-h)-f(x+h)]/2.

Then w is a compact smooth test in (-a,a), F[w](z)=i sin(hz)F[f](z), and F[w]'(0)=ih F[f](0). All sampled ordinates are real under RH, so |sin(h gamma)|<=1 and ||w||_q<=||f||_q. If F[f](0)!=0 then w has nonzero derivative evaluation and positive norm; tests with zero integral do not matter for M. Taking the supremum, without assuming the extremizer belongs to the compact core, gives

    N(a)>=h M(a-h),
    L(a):=N(a)^2/M(a)>=h^2 M(a-h)^2/M(a).             (N03.1)

This holds for every h in the indicated range, including h depending on a and M(a). It bypasses all growing-window coercivity estimates.

## 2. Small exceptional set under RH alone

Fix 0<=kappa<1. Choose delta=(1-kappa)/4>0 and r=(1+kappa)/2+delta=(3+kappa)/4<1. Fix any real s with 1<s<1/r. On a sufficiently large tail a>=A>1 write B(a)=log M(a)>0 and choose h(a)=exp(-delta B(a)). Then 0<h(a)<1<a. Define the measurable bad set

    E_kappa={a>=A: L(a)<=M(a)^kappa}.

Taking logarithms in N03.1, at each a in E_kappa we have

    kappa B(a)>=2 B(a-h(a))-B(a)-2 delta B(a),

hence B(a-h(a))<=r B(a). In other words every bad point requires a fixed fractional increase of log M across a window of length at most M(a)^(-delta).

Set B_j=s^j B(A) for integers j>=0 and T_j=inf{t>0: B(t)>=B_j}. These thresholds exist and are finite by divergence; monotonicity is all that is needed, so no continuity or attainment at T_j is assumed. For each bad a choose the unique j with B_j<=B(a)<s B_j. Then

    B(a-h(a))<=r B(a)<r s B_j<B_j.

Monotonicity implies a-h(a)<=T_j<=a. Indeed no earlier threshold crossing can precede a-h(a), and a itself is above threshold. Since h(a)<=exp(-delta B_j), each such a lies in [T_j,T_j+exp(-delta B_j)]. This includes jumps and endpoints. Thus, denoting Lebesgue measure by |.|,

    |{a>=A: L(a)<=M(a)^kappa}|
       <= sum_(j>=0) exp(-delta s^j B(A))
       <= exp(-delta B(A))/
                     [1-exp(-delta(s-1)B(A))].          (N03.2)

For the last inequality use s^j>=(1+j(s-1)). In particular the right side tends to zero as A->infinity. Using L02.2 it is O_kappa(M(A)^(-delta)), and hence O_kappa(X_A^(7 delta/4)(log X_A)^(delta/2) exp(-pi delta X_A)) for X_A=exp(2A). Constants and the sufficiently large starting A depend on kappa. The result is a measure estimate in the half-width a, not in X or physical time.

In particular, for each fixed kappa in (0,1), L(a)>M(a)^kappa for all a outside a set of finite Lebesgue measure on the tail. This proves limsup L(a)=infinity under RH alone, and the larger-detuning regime holds off an exceptional set in the sense described below. No Mori LP hypothesis or Fuchs lower bound is used. The finite measure assertion is substantially stronger than just limsup or density one, but does not rule out an unbounded exceptional sequence.

One can choose a single finite-measure exceptional set E so that log L(a)/log M(a)->1 along its complement. To see this, let kappa_j=1-1/(j+1) for j>=1. Choose A_j->infinity with the tail measure bound in N03.2 at A_j less than 2^(-j), and take the union of the corresponding bad tails. Its measure is at most one. For any fixed j, a outside E and a>=A_j has log L/log M>kappa_j. The upper bound follows from the inherited K01 identity differentiated at zero, u'_0=C_a u_0 (P_a is even), and Suzuki's inverse compression, giving L(a)=M(a)d_a^2<=||C||^2 M(a). Thus the ratio has limsup <=1 and liminf >= every kappa_j on the complement. This last upper estimate uses K01; the lower and exceptional-set bounds did not require it. This is not pointwise asymptotic equivalence L(a)~M(a), since d_a->0 in Campaign VII.

## 3. Consequence for the fixed resonant phase

For a fixed distinct positive ordinate gamma, retain the candidate R03.4 identity

    M(a)(tau_0-gamma)=gamma(1+gamma^2)L(a)+o(1+L(a)).

On the complement of E_kappa for any fixed 0<kappa<1, L(a)->infinity as a->infinity, since M(a)->infinity. Thus fixed tau=gamma is in the larger negative-detuning regime there: D=gamma-tau_0 ~ -gamma(1+gamma^2)d_a^2, M(a)|D|->infinity. R03 gives the lower escaping eigenvector and upper retained eigenvector, with gap asymptotic to gamma(1+gamma^2)d_a^2 along this complement. The same holds along any subsequence with L->infinity. This is a conditional consequence of the prior candidate resonance identities; it does not settle behavior at every large window. The exceptional set in N03.2 concerns only the scalar and so does not depend on gamma, but none of the R03 estimates is claimed uniform in gamma.

## 4. Why the scalar comparison cannot alone give pointwise divergence

Here is a continuous synthetic scalar model, not a Weil operator or arithmetic counterexample. It satisfies the nesting/translation inequality, M,N nondecreasing, exponential-in-a growth for log M, and N/M->0, yet L has a subsequence tending to zero. It tests the logical strength of the scalar estimates even with an upper growth bound of the kind audited in N02.

Take K>pi, and build B(a)=K exp(2a)+S(a) with S(a) nondecreasing, continuous and constant except on disjoint short ramps beginning at positive integers n (start at n>=2). Write B_n=B(n) before the nth ramp, set w_n=exp(-4 B_n), and add 2 B_n to S linearly over [n,n+w_n], keeping it constant afterward until the next ramp. The recursion is well-defined since w_n<1. If S_n is the value after the nth ramp, then S_n=3 S_(n-1)+2K exp(2n). Because 3<exp(2), summing this geometric recurrence gives S_n=O(exp(2n)), hence K exp(2a)<=B(a)<=C exp(2a) for a>=2. Set M(a)=exp(B(a)) and

    N(a)=sup_(0<h<a) h M(a-h),   L(a)=N(a)^2/M(a).

These quantities are positive and finite. N is nondecreasing because a larger a increases the available h range and M is nondecreasing. N03.1 holds by definition. Also N/M->0: for 0<h<=epsilon the normalized product is at most epsilon, and for h>=epsilon (with h<a), B(a)-B(a-h)>=K exp(2a)(1-exp(-2epsilon)) from the baseline and monotonic S. Hence the latter products are at most a exp(-K exp(2a)(1-exp(-2epsilon))) ->0. Let epsilon tend to zero. Taking a sufficiently small fixed h in the defining supremum also gives a lower growth bound for N^2 at least as strong, in exponential order, as N01 since K exp(-2h)>pi. This is not required for the countermodel, but shows compatibility with the crude differentiated witness rate.

At a_n=n+w_n, the end of the ramp, 3B_n<=B(a_n)<=4B_n for all large n: the baseline increment K exp(2n)(exp(2w_n)-1) is at most B_n for small w_n. If h<w_n, then h^2 M(a_n-h)^2/M(a_n)<=w_n^2 exp(B(a_n))<=exp(-4B_n). If h>=w_n, then a_n-h<=n and h^2 M(a_n-h)^2/M(a_n)<=a_n^2 exp(2B_n-B(a_n))<=a_n^2 exp(-B_n). Taking the supremum gives L(a_n)->0. Hence even continuity, the given monotonicity and log M=O(exp(2a)) do not force a pointwise limit by N03.1 alone. The short-ramp model satisfies the exceptional-set theorem rather than contradicting it. It does not claim to realize the full analytic RKHS or spectral identities of the Weil form. A pointwise theorem requires extra information, for instance ruling out this kind of growth of log M on the extremely small intervals used in section 2.

## 5. Status and next step

N03 proves the exact nested-window inequality and an RH-only exceptional-set result, without any new lower coercivity assumption. N02's stronger prolate route gives pointwise divergence only with its additional assumptions. N04 should consolidate both routes, explicitly correct any presentation suggesting the original N01 sufficient coercivity threshold is attainable, and assess whether a concrete pointwise growth-control theorem is available. Do not invent an arithmetic proof from the synthetic model or proceed indefinitely without a viable approach. K02-W04 handoff lookup again returned 404; no independent audit findings. No numerical or formal computation, human review, proof of RH, or established originality in this milestone. Primary source statements here were retrieved in current web results; prior source or rerun descriptions are not substitutes for verification. No external submission.
