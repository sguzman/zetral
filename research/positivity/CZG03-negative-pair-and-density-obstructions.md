# CZG03 — Nonreal-pair obstruction, conditional narrowing theorem and zero-density rarity

2026-11-25. AI-assisted candidate deductions without an RH assumption. Uses TPH01–02, CZG01–02 and the classical paired explicit formula/local zero count. The additional classical Ingham density estimate was directly checked during this turn in the Analytic Number Theory Exponent Database, Theorem 11.14 and Definition 11.1, https://teorth.github.io/expdb/blueprint/zero-density-chapter.html (HTML lines 68–82 and 466–475). It supplies N(sigma,T)<=T^{3(1-sigma)/(2-sigma)+o(1)} for fixed 1/2<sigma<1; no new proof of that input. No actual off-line zero, observed negative mode, numerical experiment, independent proof verification or priority claim.

## 1. A necessary off-line weighted mass, not merely a cross-trace zero

Suppose an attainable pair (phi,tau) has positive gain ||K_phi||-tau>0. By TPH01, choose fixed compact smooth half-line envelopes G=(g_L,g_R), ||G||=1, so that <D_phi G,G>-tau>c>0. For the unit physical trials f_l=M_omega_l U_a_l* G on its realizing sequence,
    -exp(-a_l) q_a_l(f_l,f_l) >= c
eventually (decrease c if necessary). On the zero side, each real ordinate contributes a nonnegative square. Each distinct upper/lower conjugate pair z=u+id, conj z (d>0), multiplicity m, contributes
    m/2 (|Ff(z)+Ff(conj z)|^2 - |Ff(z)-Ff(conj z)|^2).
In particular only the second term can contribute negatively.

For every integer p>=2, the fixed endpoint envelopes give
    |Ff_l(u+id)-Ff_l(u-id)|
       <= C_(G,p) min(1,a_l d) exp(a_l d) (1+|u+omega_l|)^(-p).   (1)
To verify this, split the physical integral into its two endpoint envelopes. The difference of the exponential evaluation weights is -2sinh(dx); on the physical support |x|<=a_l its magnitude is <=C min(1,a_l d) exp(a_l d). In each endpoint coordinate, all derivatives up to p of that factor have the same bound up to a p-dependent constant: derivatives of positive order introduce factors d^k<=1, and for a_l d<=1 they are <=a_l d since a_l>=1. The compact smooth envelope has bounded derivatives independent of a_l. Integration by parts in the endpoint coordinate with the real oscillation u+omega_l gives (1), with the small-frequency estimate obtained directly by integration. Constant endpoint phases have modulus one and cause no loss. This uses the difference before taking absolute values, retaining the small-deviation factor.

Thus a positive attainable gain necessarily has
    sum_(upper nonreal conjugate pairs) m min(1,a_l d)^2
            exp[-(1-2d)a_l] (1+|u+omega_l|)^(-2p) >= c_(G,p)>0   (2)
eventually. For every theta>0 choose p large enough that 2p>1+1/theta. By CZG01's local count tail with R_l=[log(2+|omega_l|)]^theta, the contribution outside |u+omega_l|<=R_l tends to zero, since the additional deviation factor in (2) is <=1. Consequently (2) holds with a smaller positive lower bound within this polylogarithmic window. This is specifically a lower bound on *nonreal* paired zero mass, even if tau>0, unlike the cross-identity bound which includes critical-line zeros.

Writing d_l for the largest positive deviation of a nonreal pair in this local window, which must be nonempty, the local weighted count bound yields
    min(1,a_l d_l)^2 exp(2a_l d_l)
            >= c'_(G,p) exp(a_l)/log(2+|omega_l|).        (3)
The function on the left is nondecreasing in d_l. Since any positive-gain model has tau<||K_phi||<=1, log(2+|omega_l|)/exp(a_l) is bounded. Therefore liminf a_l d_l>0 for positive gain, including positive-cost carriers. If tau=0, a_l d_l->infinity. Neither statement asserts that a fixed deviation bounded away from zero must occur when log log |omega_l|/a_l tends to one. No actual off-line zero has been found.

## 2. A conditional ordinary consequence of high-ordinate narrowing

Assume the following separate geometric hypothesis, not established for zeta:
    lim_(T->infinity) sup_(rho: |Im rho|>=T)
            |Re rho-1/2| log log(3+|Im rho|) =0.         (H)
This allows infinitely many off-line zeros, provided their deviations narrow sufficiently at large heights. It is weaker than eventual RH but stronger than merely requiring deviations to tend to zero.

Under (H), S=limsup exp(-a) N_1(a)=0. Proof: if S>0, TPH02 supplies some attainable positive-gain model. It has phi!=0 and finite cost tau<1. Apply CZG02(3) to this model with theta fixed. Hypothesis (H) implies all high-ordinate deviations tend to zero. The selected zero there has |u_l|~|omega_l|->infinity, so its beta_l->1/2. The inequality 2a_l(1-beta_l)<=log log(2+|omega_l|)+O(1) therefore forces
    liminf log log(2+|omega_l|)/a_l >=1.
The bounded carrier cost gives the opposite limsup <=1. Hence the ratio tends to one. Throughout the polylogarithmic carrier window used in (2), log log(3+|u|)/a_l->1 uniformly. By (H), the maximum local deviation d_l satisfies a_l d_l->0. This contradicts (3), whose right side stays bounded below by a positive constant. This proves the conditional conclusion.

No smaller ordinary exponential rate is implied by S=0, and (H) is not an unconditional result or a reformulation proved equivalent to RH. In particular this does not bridge the ordinary upper exponent in NIR03/VMR03. The purpose is to identify a precise zero-geometry hypothesis under which the maximal ordinary coefficient disappears even in an infinite off-line system.

## 3. Quantitative rarity of nonzero twisted tests below maximal log-log carrier rate

Fix W in C_c^infty(0,infinity), epsilon>0 and 0<=kappa<kappa'<1. Let a and T tend to infinity with
    log log(2+2T) <= kappa a
(if kappa=0 this eventual condition is vacuous, so take positive kappa for a nonempty regime). Consider positive carriers omega in [T,2T] such that
    |int W dmu_(a,omega)| >= epsilon.                   (4)
By CZG01, with R=[log(2+T)]^theta and p>1+1/theta, the pole, archimedean and far-carrier zero tail estimates tend to zero uniformly in this carrier interval. If there is no zero with |u+omega|<=R and beta>sigma_0=1-kappa'/2, the remaining local zero sum is bounded by
    C_p log(2+2T) exp(-kappa' a)
       <= C_p exp(-(kappa'-kappa)a) ->0.
For all sufficiently large a,T this contradicts (4). Thus every carrier satisfying (4) lies in the union of intervals of radius R around the opposite signed ordinates of zeros with beta>sigma_0 and |u|<=3T. By conjugation symmetry and Ingham's classical estimate, the Lebesgue measure of this union is bounded by
    2 R N(sigma_0,3T)
        <= T^{3 kappa'/(2+kappa')+o(1)}.                (5)
The exponent is strictly smaller than one. The same estimate holds for negative carriers by reflection; no independence or random phase assumption is used. The o(1) here includes the polylogarithmic radius and the fixed-sigma density estimate.

This is a geometric rarity theorem: each exceptional carrier must be close to a zero to the right of a specified vertical line, rather than simply being in an abstract large-value set. It does not exclude exceptional carriers, and does not bound the pointwise supremum over them. At kappa approaching one there is no fixed positive power saving from (5). We deliberately do not apply a fixed-sigma density theorem to a varying sigma_0->1/2 without its own uniform estimates.

CZG03 establishes a nonreal-only necessary weighted local mass for positive ordinary phase gain, a conditional zero-coefficient theorem under explicit high-ordinate narrowing, and a submaximal-carrier rarity bound from a classical density input. The unresolved pointwise regime log log |omega|/a near one remains; no actual anomalous state, off-line zero or RH proof. README unchanged.
