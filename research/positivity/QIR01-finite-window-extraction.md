# QIR01 — Finite-window extraction, error budgets and localization margins

2026-11-25. AI-assisted candidate deduction. Conditional on BPF03–04's separated finite selected pair set, known group indices and a positive deviation d for the group; the finite case needs no infinite-remainder hypothesis. No observed off-line zero, RH proof, priority claim, fresh source inspection, executed numerical experiment or independent human/formal verification. This is an analysis of hypothetical spectral observations, not an available arithmetic computation of A_a.

## 1. Quantitative version of the asymptotic remainder

Let D(a)=sum of the selected odd negative depths minus the selected even negative depths, with h indices in each sector, and
    f(a)=exp(-2da) D(a)=sum_(j=1)^r c_j exp(i omega_j a)+R(a),
    omega_j=2u_j, c_j=m_j beta_j^2/[2(d+i u_j)], r=2h.
The index selection and coefficient identity are BPF04. Put M=sum|c_j| and c_min=min|c_j|>0. These constants need not be known from the data; for a certificate they must be bounded using independent assumptions or verified candidate enclosures. A positive lower bound on c_min is important.

The o(1) in BPF03 can be upgraded to a fixed-set rate. Let d_min be the smallest selected deviation; for the current group d let gamma be the minimum positive difference between d and any other selected deviation (omit the corresponding term if there is no other group). On a compact negative threshold interval [-M0,-c0] enclosing all current effective negative eigenvalues strictly in its interior, BPF03's exact scaled Gram satisfies ||G_a-G||<=C exp(-d_min a), hence ||G_a^-1-G^-1|| has the same order for large a. The inverse of the fast divided block is bounded by C exp(-2 gamma a) by a Neumann perturbation of the block diagonal matrix whose minimum absolute eigenvalue grows at least exp(2 gamma a). The divided slow diagonal has norm <=C exp(-2 gamma a); its limiting positive block -x K_LL is uniformly invertible for x in the stated interval. In both Schur eliminations the remaining cross blocks stay uniformly bounded; the identity B^-1-C^-1=B^-1(C-B)C^-1 bounds the perturbation of the slow inverse. Thus the final effective pencil differs from H_k(a)-x S_k^-1 by
    O(exp(-d_min a)+exp(-2 gamma a)).
The constants may depend on the selected pair set and interval, not the phases or a. Congruence with S_k^(1/2) and the inertia squeeze at x±epsilon as in BPF03 bound the errors of each indexed scaled eigenvalue by the same order (choose epsilon larger than the uniform perturbation norm after congruence). The argument restricts to both parity spaces because the involution commutes with the matrices and the partitions.

In the finite case the actual-operator comparison adds O(exp(-2da)) after scaling, from the additive O(1) comparison on the BV trial space. With a separated infinite remainder as in BPF03(5), having d_min>b and remainder deviations <=b, it adds O((a+1)^3 exp(-2(d-b)a)). Summing finitely many selected depths yields, for a>=a_*,
    |R(a)| <= C_k [exp(-d_min a)+exp(-2 gamma a)
                   +(a+1)^3 exp(-2(d-b)a)] =: E_k(a).       (1)
In the finite case use the sharper exp(-2da) last term; omit missing-group terms. This is a rate with finite, pair-set-dependent constants and a threshold a_*, NOT a numerically evaluated bound. To use it as a certified observation-error budget one needs independent bounds on those constants (e.g. Gram conditioning, multiplicities, selected deviations, the real-zero sampling bound, and in the infinite case weighted local density). No unconditional effective error bound for zeta claimed.

## 2. A finite-window coefficient estimator and observation errors

Take center A and length T>0 with A-T/2>=a_*. Suppose the observed parity difference Dtilde(a) satisfies |Dtilde(a)-D(a)|<=E_obs(a) on this interval (e.g. sum the absolute errors of all 2h measured eigenvalues; cancellation of the errors cannot be presumed). Let dhat approximate d with |dhat-d|<=eta. Define
    y(t)=exp(-2 dhat (A+t)) Dtilde(A+t),   |t|<=T/2.
With F_A(t)=sum c_j exp(i omega_j A) exp(i omega_j t), the centered true signal is F_A(t). The direct normalization obeys
    ||y-F_A||_infty <= exp(2 eta (A+T/2)) (E_R+E_N)
                          + M [exp(2 eta (A+T/2))-1],      (2)
where A-T/2>0, E_R=sup E_k(a) on the interval and E_N=sup exp(-2da)E_obs(a). To use a known dhat rather than unknown d in E_N, bound it by sup exp(-2(dhat-eta)a) E_obs(a), with a>0. Inequality (2) follows by multiplying the true normalized trace plus observation error by exp(-2(dhat-d)a), then bounding its difference from 1. Relative errors in each eigenvalue also work: if the scaled sum of absolute depths is bounded by L and each relative error <=epsilon, then E_N<=epsilon L; relative error of the parity difference itself is not assumed. Near a cancellation in D(a), such a relative bound could be misleading.

For frequency localization only, one can factor out the unknown positive constant g=exp(-2(dhat-d)A). Then
    ||y-g F_A||_infty <= g [exp(eta T)(E_R+E_N)+M(exp(eta T)-1)].
The unknown global gain rescales every coefficient equally; shape recovery needs eta T small, whereas absolute coefficient/multiplicity recovery using direct normalization needs eta A small as well, unless the gain is independently calibrated. If using this relative budget for a threshold test, certified bounds on g or a gain-independent threshold are required. No assumption that normalizing by D at a single point is safe: it can vanish.

Use the normalized triangular window
    w_T(t)=(2/T)(1-2|t|/T) for |t|<=T/2, zero otherwise,
    Z_T(omega)=int w_T(t)y(t)exp(-i omega t)dt.
It is the convolution of two uniform densities on [-T/4,T/4], so its transform is
    K_T(x)=[sin(xT/4)/(xT/4)]^2, K_T(0)=1,
    0<=K_T(x)<=min(1,16/(T^2 x^2)) for x!=0.
If ||y-F_A||_infty<=epsilon from (2), then
    |Z_T(omega)-sum_j c_j exp(i omega_j A) K_T(omega_j-omega)|<=epsilon.  (3)
This bound also holds with epsilon=int w_T |y-F_A| rather than the sup norm; the gain-adjusted version follows by replacing c_j with g c_j. At a true frequency with minimum separation Delta=min_(i!=j)|omega_i-omega_j|>0,
    |exp(-i omega_j A) Z_T(omega_j)-c_j|
       <= epsilon + (M-|c_j|) min(1,16/(T^2 Delta^2)).
In contrast, a rectangular window gives only the leakage bound min(1,2/(T|x|)). The improvement is in deterministic leakage; there is no claim of optimal resolution or stochastic noise reduction.

## 3. Bounded candidate-frequency localization

Assume a bounded search interval contains all r signed frequencies (including negative frequencies if searching the whole symmetric set). Give certified constants M_up>=M, m_low<=c_min with m_low>0, separation Delta_low<=Delta, and epsilon>= the true observation and model error budget in (3). For the case of a single frequency the separation restriction is vacuous and the cross-term sum is zero. Take a uniform grid with covering distance h/2 over the interval, radius r0 satisfying 0<h/2<r0<Delta_low/4 and hT/8<=1. At a grid node omega within h/2 of true omega_j,
    K_T(omega_j-omega)>=1-(hT/8)^2/3
by sin x/x>=1-x^2/6 for |x|<=1 and squaring the nonnegative bound. All other frequencies are at least Delta_low-h/2 away. Consequently
    |Z_T(omega)| >= L_in
      := m_low[1-(hT/8)^2/3]
           - M_up min(1,16/[T^2(Delta_low-h/2)^2])-epsilon.
For any grid node at distance >=r0 from every true frequency,
    |Z_T(omega)| <= U_out
      := M_up min(1,16/(T^2 r0^2))+epsilon.
If L_in>U_out, choose any threshold strictly between them. Then every true frequency has a marked grid node within h/2 and every marked node is within r0 of a true frequency. Since each true frequency's marked nodes have total diameter <2r0 and marks belonging to different frequencies have distance >Delta_low-2r0>2r0, sort the marked nodes and split at gaps >2r0. There are exactly r clusters, each associated with one distinct true frequency; any representative localizes it within r0. The count need not be supplied separately once the hypotheses hold, although group indices and upper/lower signal bounds must be known for this analysis. Positive and negative frequencies are separate under the separation hypothesis, and real symmetry may be checked.

The margin condition is sufficient, not necessary. Failure does not imply absence of a frequency or of an off-line zero. The method uses continuum weighted integrals as observations; if approximated by sample-based quadrature one must add an error bound for that approximation to epsilon (sample spacing/alias control is QIR02). If r0 is much smaller than 1/T the off-peak bound is unhelpful; no superresolution guarantee from this crude estimate. More sophisticated nonlinear methods may succeed under different hypotheses. No spectral observations were generated or assumed available.

With a localized frequency omegahat and error |omegahat-omega_j|<=r0<Delta_low/4, there is also the coefficient bound
    |exp(-i omegahat A) Z_T(omegahat)-c_j|
      <= epsilon + M_up min(1,16/[T^2(Delta_low-r0)^2])
           + |c_j| ( |1-K_T(omegahat-omega_j)|
                        + min(2,A r0) ).                   (4)
Here K_T is real in [0,1] and |exp(i(omega_j-omegahat)A)-1|<=min(2,A r0). If Tr0/4<=1 the kernel loss is <=(Tr0/4)^2/3; otherwise use 1. The A r0 term records a separate phase-stability problem for recovering multiplicities from absolute phase at large windows. A centered coefficient omits this dephasing loss but is not directly c_j in BPF04. Equation (4) is a conservative certificate bound, not a claim that precise absolute phase cannot be obtained by a different fitting method.

## 4. Scale estimation from positive spectral depths, not signed parity differences

Each selected negative depth N(a)>0 has N(a)=exp(2da)(s(a)+r(a)) where 0<c<=s(a)<=C, |r(a)|<=c/2 for a sufficiently large. Thus c/2<=exp(-2da)N(a)<=C+c/2. Write certified positive envelopes l<=exp(-2da)N(a)<=L. If observed Ntilde(a)>0 has relative error <=nu<1, its normalized value lies in [l(1-nu),L(1+nu)]. At two windows a1<a2 in this regime the log-slope estimator
    dhat=[log Ntilde(a2)-log Ntilde(a1)]/[2(a2-a1)]
satisfies
    |dhat-d|<= log([L(1+nu)]/[l(1-nu)])/[2(a2-a1)].       (5)
This requires no limit of the prefactor; its bounded oscillation is included. With multiple separated groups, if their rate error intervals are disjoint they can be distinguished, provided the indices and a priori bounds were established. For unknown group assignments the data alone need not certify which envelope applies.

A consequence is a scale-versus-phase tradeoff: to make the absolute-amplitude distortion in (2) smaller than a prescribed theta>0, it suffices to have eta <= log(1+theta)/[2(A+T/2)]. The direct two-point estimator (5) does not automatically attain this with a short observation interval far out at large A. Estimating shape only can relax the requirement to eta <=log(1+theta)/T, but leaves unknown gain. No claim that the finite observations supply both the exponent and phase to the needed precision without additional information.

## 5. Disposition

QIR01 supplies a quantitative fixed-set remainder rate, a deterministic observation/scale error budget, second-order triangular-window leakage, sufficient finite-grid localization/count margins, a dephasing-sensitive coefficient bound and a two-point slope bound. These results use standard Fourier windowing and elementary estimates; no priority claim. They require certified input bounds and are not a practical spectral computation or a new zero discovery. Next QIR02: derive sample-based stable frequency recovery with a justified alias restriction and noise error; identify limits when separation or amplitude bounds are absent. No new external-source or Rust execution claim. README unchanged.
