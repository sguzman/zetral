# SES03 — Infinite maximal-group nondegeneracy and subordinate scales without a gap

2026-11-25. AI-assisted internal candidate. Uses SES01–02 and the classical Hardy/Paley–Wiener theorem verified in LBS03 (Gorbunov 2025, Theorem 5.1, and Wiener–Hopf §2.1). The bounded analytic product needed below is constructed directly. No fresh external source inspection in this milestone, no observed off-line zero, numerical experiment, independent proof verification, priority claim or RH proof. Generalized H0^1 spectrum only.

## 1. Interpolation against an infinite ordinate set

Let Z be any set of distinct selected upper ordinates z_j=u_j+i d_j, 0<d_j<=1/2, with the classical local O(log(2+|u|)) count. In this section no lower bound on d_j is needed for the product convergence. We construct, for each selected z_j, a vector f_j in H_+=H_0^1(0,infinity) whose evaluations on Z are exactly the cardinal values delta_(j,l).

First the map U f(z)=(1-iz)Ff(z)=F(f+f')(z) is an isometry from H_+ onto the upper-half-plane Hardy space H^2 with boundary norm dt/(2pi). On compact tests use integration by parts; the norm equality follows from |1-it|^2=1+t^2 and Plancherel. For surjectivity, the classical Hardy Paley–Wiener theorem writes any H^2 function as Fg for a positive-half-line L2 function g. Solve f+f'=g by
    f(s)=int_0^s exp(-(s-t)) g(t)dt.
Young's inequality gives f in L2 and f'=g-f in L2, with zero trace at 0. Thus f belongs to H_+ (cutoff and mollification or the Sobolev trace characterization), and U f=Fg by density. The nonzero multiplier 1-iz has no zeros in the upper half-plane.

For each node z_l define
    r_l(z)=(z-z_l)/(z-conj z_l),
    b_l(z)= [conj(r_l(i))/|r_l(i)|] r_l(z).
No z_l=i because d_l<=1/2. The factors are analytic on the upper half-plane, have modulus <=1 there, vanish at z_l and satisfy b_l(i)=|r_l(i)|>0. For each compact set K in the upper half-plane, for all sufficiently large |u_l|,
    |r_l(z)-r_l(i)|
       = |2i d_l(z-i)/[(z-conj z_l)(i-conj z_l)]|
       <= C_K d_l/(1+u_l^2),
    1-|r_l(i)| <= C d_l/(1+u_l^2).
The second estimate follows by comparing the squared moduli u_l^2+(1-d_l)^2 and u_l^2+(1+d_l)^2. Thus sup_K |1-b_l(z)|<=C_K d_l/(1+u_l^2), summable by the local count. Finite bounded-u factors cause no difficulty. The product over all l!=j therefore converges locally uniformly to an analytic function B_j of modulus <=1, vanishing at every other selected node and nonzero at z_j. For the last assertion, all finite factors are nonzero at z_j and the tail deviations from one are summable, so the tail product has a nonzero limit (use a convergent log series once deviations are <1/2). This is the classical Blaschke-product construction with its convergence checked here.

The function G_j(z)=B_j(z)/(z+i) belongs to H^2 by the bounded product and the elementary Hardy norm bound for 1/(z+i). Let f_j be its U-preimage, rescaled so Ff_j(z_j)=1, possible because both G_j(z_j) and 1-iz_j are nonzero. It satisfies
    <f_j,k_(alpha_l)>_S=Ff_j(z_l)=delta_(j,l).
No uniform norm bound over j is implied, and no interpolation theorem for arbitrary infinite prescribed l2 data is needed. Only finitely many such cardinal vectors will be used at a time.

## 2. Uniform signed inertia at an infinite maximal group

For the symmetric maximal set d=B>0, write T_B(a) as in SES02. Choose any h distinct quartets, i.e. h positive signed ordinates u and their negative partners, and construct the 2h cardinal vectors above against the ENTIRE maximal set. Their synthesis from the chosen coordinates x in C^(2h) has a finite norm bound C_h independent of a. Evaluations of the synthesized f at selected nodes are x and at all other maximal nodes are zero.

On this span the quadratic form of T_B is exactly
    <T_B(a)f,f>_S = sum_(chosen signed u) m_u exp(2iua) x_(-u) conj(x_u).
Its coordinate matrix is a direct sum of h two-by-two Hermitian blocks with eigenvalues ±m_u. On the coordinate negative eigenspace of dimension h,
    <T_B f,f> <= -m_min ||x||^2 <= -(m_min/C_h^2)||f||_S^2.
The synthesis is injective by cardinal evaluations. The same argument on the positive coordinate eigenspace yields the opposite bound. Thus
    n_h(T_B(a))>=m_min/C_h^2>0, p_h(T_B(a))>=m_min/C_h^2>0
uniformly in every phase. If the maximal set is infinite, this proves infinitely many eigenvalues of both signs at each a and uniform nondegeneracy of every fixed-index signed depth (constants can shrink with the index). If it has exactly h quartets, the rank bound and these two h-dimensional subspaces give exactly h eigenvalues of each sign. Combined with SES02, the corresponding full generalized negative and positive depths have exponent 2B and uniformly positive maximal-scale prefactors. For an unattained B the prefactor model is empty as in SES02; no nondegeneracy assertion there.

This proof addresses a real infinite-dimensional issue: finite-subset truncation alone would not give the lower bound because the omitted modes could cancel the chosen ones. The cardinal vectors kill those omitted evaluations exactly.

## 3. Subordinate scales when all faster pairs form a finite set

Fix a target deviation d0>0 such that ALL faster pairs with d>d0 form a finite set H, with r_H distinct conjugate pairs, and let C contain ALL pairs with d=d0 (finite, infinite or empty). Do not assume a uniform gap below d0. The remaining lower pairs can approach d0 as |u|->infinity.

The argument of SES02 at scale d0, applied only to the lower pairs, gives
    exp(-2d0 a)||Q_lower(a)||_1 ->0.
Indeed use delta=d0/2 for small/real deviations and dominated convergence in the summable normalized pair weights for delta<d<d0. Let t=exp(2d0 a). Write
    t^-1 Q_S(a)=F_a+W_a,
where F_a=t^-1 O_H(a) is the exact faster finite-rank operator, and W_a consists of the current and lower terms. SES01 bounds W_a uniformly in trace norm and approximates it by J_a D_C(a) J_a* with o(1) trace-norm error, where D_C is the phase-dependent current boundary block of (1) in SES02 with d0 in place of B.

Let Y_a be the span of the faster exact normalized evaluation vectors, dimension 2r_H for large a. Their Gram converges to a strictly positive fixed Gram by SES01, so the restriction of F_a to Y_a is invertible with smallest absolute eigenvalue tending to infinity, and has r_H negative and r_H positive eigenvalues. For example its matrix is a positive Gram congruence of the block diagonal matrix with factors exp(2(d_h-d0)a), whose inverse norm tends to zero; the Gram and its inverse stay bounded. Let P_a^H project onto Y_a and decompose the Hilbert space into Y_a and its orthogonal complement. At any x in a fixed compact negative interval bounded away from zero, the fast block of F_a+W_a-xI remains invertible with inverse norm o(1) and negative inertia r_H (bounded perturbation of the diverging absolute eigenvalues). Its Schur complement on the complement is
    (I-P_a^H) W_a (I-P_a^H) - xI + o(1),
in operator norm, uniformly for these x, because the cross blocks have bounded norm. Exact block triangular congruence preserves the negative index; in the infinite complement the negative index at x<0 is finite, since the residual is a compact operator plus -xI. This is a threshold count, not subtraction of approximately known large eigenvalues.

Let P_*^H be the projection in the fixed boundary H_* onto all faster left and right half-line profiles. It is block diagonal by endpoint. The physical faster synthesis columns differ in norm by o(1) from the J_a-images of these fixed profiles, by SES01; the limiting Gram is strictly positive. The projection formula E(E*E)^-1 E* therefore gives
    ||P_a^H-J_a P_*^H J_a*|| ->0.
Also ||P_*^H(J_a*J_a-I)||->0 by strong convergence of the truncation projections and finite rank of P_*^H. It follows
    ||(I-P_a^H)J_a-J_a(I-P_*^H)|| ->0.
The uniformly trace-class D_C and the approximation of W_a now give, in trace norm,
    (I-P_a^H)W_a(I-P_a^H)
       =J_a D_eff(a) J_a*+o_1(1),
    D_eff(a)=(I-P_*^H)D_C(a)(I-P_*^H).
As in SES02, truncating this fixed boundary model by J_a*J_a changes it by o(1) in trace norm uniformly in phases: the current profile tails are summable and the faster projection is fixed finite rank. The physical image therefore has the same limiting ordered signed depths as the effective boundary block, by minmax and the partial isometry. These comparisons do not require the total faster operator to converge after scaling by t.

For a fixed j with negative effective depth uniformly separated from zero, choose a compact negative threshold interval containing the jth such eigenvalue. The fast inertia count and Schur perturbation give the jth depth after r_H faster negatives to within o(1), by squeezing counts at thresholds x±epsilon (valid through multiple eigenvalues). The analogous positive statement follows by applying the argument to -Q_S. If the effective model has only finitely many negative (positive) depths, beyond its rank the scaled remaining depths tend to zero: use any fixed x<0 (x>0 for positive), bounded away from zero, and count above that margin. This establishes fixed-index asymptotics
    t^-1 n_(r_H+j)(Q_S(a))=n_j(D_eff(a))+o(1),
    t^-1 p_(r_H+j)(Q_S(a))=p_j(D_eff(a))+o(1).            (1)
No l1 convergence after removal of faster modes is claimed here; the proof is a fixed-index inertia squeeze.

The block D_eff is off-diagonal with the current profiles projected away from the faster left/right spans. The left Gram is the ordinary Cauchy Gram with factors
    kappa_j=1/(1+alpha_j),
    beta_j=prod_(h in H) (alpha_j-alpha_h)/(alpha_j+conj(alpha_h)),
by the finite faster Cauchy elimination of BPF03 (diagonal congruence commutes with Schur complement). This formula holds for any finite entries of the possibly infinite current Gram. Nondegeneracy of a nonempty symmetric current group follows by section 1's cardinal vectors against the UNION of faster and all current nodes: these lie in the orthogonal complement of the faster left span and isolate current evaluations, so section 2's finite-coordinate sign argument applies to the effective half-line coupling. Reflection symmetry ensures equal faster parity counts r_H/2 and allows the Schur argument on each parity separately. Thus all fixed selected current depths have the stated prefactors even when lower deviations accumulate at d0.

The restriction of finitely many faster pairs is essential to this proof. It does not resolve a scale below infinitely many faster pairs, or claim uniform conditioning as d0 decreases toward zero. For C empty, the effective model vanishes and the remaining depths at fixed indices after the faster group are o(t). For H empty the argument reduces to SES02 at the maximal scale when no larger deviations exist.

SES03 complete as internal candidate: infinite maximal-group signed inertia and uniform fixed-index nondegeneracy, and extension to current scales with finitely many faster pairs without a lower gap, even for an infinite current group. No independent verification, ordinary L2 transfer, actual off-line zero or RH proof. SES04 audit the interpolation and infinite-dimensional Schur count, consolidate and select a justified next route. README unchanged.
