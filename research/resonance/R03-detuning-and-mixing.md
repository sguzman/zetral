# R03 — Larger detuning, eigenvector mixing, and fixed-phase obstruction

25 November 2026. Conditional on RH, Suzuki's local/global framework, and the candidate deductions of Campaigns VII–VIII and R01–R02. Internal analytic derivation, no established novelty, human review or formal verification.

## 1. Inputs and notation

Directly reopened Suzuki arXiv:2610.32704v1 (https://arxiv.org/html/2610.32704v1) in this turn: Theorems 1.1–1.2, including t_(a,n)>=gamma_n; equations (3.1)–(3.3), Lemmas 3.1–3.2, Theorem 3.3 and the norm convergence in (4.1). The actual returned HTML confirms that the local real eigenfunction is a multiple of u_z, the adjoint evaluation representer. A web search also located the standard rank-one secular/eigenvector formulas, e.g. the abstract of *A secular equation for the eigenvalues of a diagonal matrix perturbation* (https://www.sciencedirect.com/science/article/pii/0024379594003149) and the search excerpt for *Asymptotic estimations of a perturbed symmetric eigenproblem* (https://www.sciencedirect.com/science/article/pii/S089396592300383X); the latter full-page request returned HTTP 403. These provide context only, not proof inputs or a priority determination.

Fix a positive distinct ordinate gamma=gamma_n. Let t=t_a=t_(a,pi,n), M=M_a, e=e_a=v_a/M, h_a=j_a e, d_a=||C_a e||, beta^2=||E_t e||^2. Retain c=c_gamma=1/(sqrt(m_gamma)|Delta'(gamma)|)>0. R01 gives M(t-gamma)->0 and M^2 t^2 beta^2->c^2. K02 gives j_a u_gamma->g_gamma, ||g_gamma||^2=1/m_gamma, h_a weakly->0, and u'_z/M approximates Delta'(z)e uniformly on complex compacts. The second normalized derivative is uniformly bounded there. R02 gives the analytic equation

    G_a(z;tau)=(z-t)(f_a(z)-tau)-eta_a z t beta^2=0,
    f_a(z)=eta_a z r_a(z), tau_0=f_a(t),
    f_a'=1+O_gamma(d_a^2), f_a''=O_gamma(d_a^2)

on a fixed sufficiently small disk about gamma, r_a=m_a-beta^2/(1-z/t), m_a(z)=q((I-z C_a)^(-1)e,e). It is exactly equivalent to the characteristic there for tau=tan(theta/2) near gamma. All local real zeros give actual eigenfunctions by the source identity (3.1). These earlier internal identities are not attributed to Suzuki.

## 2. Larger detuning

Consider arbitrary real tau_a->gamma, D_a=tau_a-tau_0, with M|D_a|->infinity. Then D_a->0 and eventually nonzero. Because f_a is real and its derivative is uniformly near 1 on the fixed real interval, it has a unique real regular root s_a near gamma satisfying f_a(s_a)=tau_a. In detail the fixed endpoints bracket tau_a eventually, and strict monotonicity gives uniqueness. The mean value theorem yields

    s_a-t = D_a (1+O_gamma(d_a^2)).

Set epsilon_a=1/(M^2 D_a), a signed scale. Then epsilon_a/D_a=1/(M D_a)^2->0. For real x in any fixed bounded interval,

    M^2 G_a(t+x epsilon_a;tau_a) -> -x-c^2,
    M^2 G_a(s_a+x epsilon_a;tau_a) -> x-c^2.

For the first expression, f_a(t+x epsilon_a)-tau_a=-D_a+O(epsilon_a), so the product term after multiplication by M^2 is -x+O(epsilon_a/D_a). For the second expression use f_a(s_a+x epsilon_a)-tau_a=x epsilon_a(1+o(1)) and s_a+x epsilon_a-t=D_a(1+o(1)), giving x+o(1). In both, eta_a z t M^2 beta^2->c^2 uniformly since z->gamma and eta_a->1. The real functions are continuous and their limiting linear functions change sign at x=-c^2 and +c^2, respectively. Applying the intermediate value theorem on arbitrarily small intervals about these values yields one real zero in each corresponding neighborhood. The neighborhoods are disjoint because |epsilon_a|/|D_a|->0. On a fixed circle surrounding gamma, G_a->(z-gamma)^2 uniformly, so Rouche gives exactly two zeros there. The constructed roots exhaust them, and the same shrinking-neighborhood argument gives the signed asymptotics

    z_ret=t-c^2/(M^2 D_a)(1+o(1)),
    z_esc=s_a+c^2/(M^2 D_a)(1+o(1)).             (R03.1)

The subscripts identify retained and escaping eigendirections, proved below, not increasing order. If D_a>0 the retained root is below t and the escaping root is above s_a, and if D_a<0 the order reverses. In particular the gap is |D_a|(1+o(1)); the two displayed corrections are measured from the actual centers t and s_a, not from gamma and tau_a. Replacing the centers by their limits would destroy the smaller-scale information.

## 3. Microscopic eigenvector mixing

For bounded detuning sigma=M(tau_a-tau_0), write y_±(sigma)=(sigma±sqrt(sigma^2+4c^2))/2. By R02, M(z_(a,±)-gamma)=y_±(sigma)+o(1) uniformly on bounded real sigma. Taylor's formula from K02, with a uniformly bounded normalized second derivative, gives

    j_a u_(z_(a,±)) = g_gamma + y_±(sigma) Delta'(gamma) h_a + o(1)

in global norm, uniformly on bounded sigma. The two terms are asymptotically orthogonal since h_a weakly->0. Define unit retained direction G_gamma=sqrt(m_gamma) g_gamma, and for real y let k(y)=sqrt(m_gamma) y Delta'(gamma), so k(y)^2=y^2/c^2. The normalized eigenvectors can be chosen as x_(a,±)=j_a u_(z_(a,±))/||u_(z_(a,±))||, with the canonical evaluation-vector sign. Then

    x_(a,±) = [G_gamma+k(y_±) h_a]/sqrt(1+k(y_±)^2)+o(1).  (R03.2)

Thus squared overlaps with G_gamma converge uniformly to

    w_ret,±(sigma)=c^2/(c^2+y_±(sigma)^2),

and squared overlaps with h_a converge to w_esc,±=1-w_ret,±. Although the two directions are only asymptotically orthogonal at finite a, the limiting weights are unambiguous. The identity y_+ y_-=-c^2 implies k(y_+)k(y_-)=-1; hence the two approximate vectors in (R03.2) become orthogonal, as required by distinct eigenvalues of one self-adjoint extension. The two retained weights sum to one, as do the escaping weights. At exact tuning each eigenvector has retained and escaping weight 1/2. For sigma tending to a fixed finite value, x_(a,±) converges weakly to G_gamma/sqrt(1+k(y_±)^2), but does not converge strongly to that vector because its norm remains one and the escaping weight is positive. This is an actual statement about the evaluation eigenvectors in the global sample space, not physical-space eigenfunctions.

In the larger-detuning regime of section 2, R01 and (R03.1) give M(z_ret-gamma)->0, so j_a u_(z_ret)->g_gamma and the normalized retained vector converges strongly to G_gamma. Also z_esc-gamma=D_a(1+o(1)), with M|z_esc-gamma|->infinity. Taylor's formula divided by M(z_esc-gamma) gives j_a u_(z_esc)/(M(z_esc-gamma))->Delta'(gamma) h_a in the sense that the norm of the difference tends to zero. Indeed the constant term divided by that quantity vanishes, the first derivative approximates Delta' h_a, and the remainder is O(|z_esc-gamma|). After normalization and an optional real sign, the escaping vector approaches h_a in norm and hence tends weakly to zero. This completes the branch identification in (R03.1).

## 4. Fixed phase: sharpened detuning relation

The previous O(d_a^2) estimate for tau_0-t can be sharpened using the paired distinguished inverse spectrum. Write t_j=t_(a,pi,j)>0, beta_j^2=||E_(t_j)e||^2. Reflection fixes e and anticommutes with C_a, so the negative eigenspace at -t_j has equal weight. Since C_a is compact self-adjoint and injective, the eigenvectors are complete and

    2 sum_j beta_j^2=1,
    d_a^2=2 sum_j beta_j^2/t_j^2,
    1/eta_a=m_a(i)=2 sum_j beta_j^2/(1+1/t_j^2).

Each fixed j has beta_j^2=O_j(M^-2) by R01 applied at gamma_j. We have t=t_n, beta=beta_n. Evaluating the pole-subtracted scalar at t gives the exact absolutely convergent difference

    r_a(t)-m_a(i)
      = beta_n^2 [1/2-2/(1+1/t^2)]
        + 2 sum_(j!=n) beta_j^2
            [(1-t^2/t_j^2)^(-1)-(1+1/t_j^2)^(-1)].       (R03.3)

The n contribution contains the remaining negative pole at -t, evaluated as beta_n^2/2. Each j!=n summand uses the identity

    (1-t^2/t_j^2)^(-1)-(1+1/t_j^2)^(-1)
       = (1+t^2)/[t_j^2 (1-t^2/t_j^2)(1+1/t_j^2)].

For fixed J>=n the finite prefix contributions, including their corresponding terms in (1+t^2)d_a^2, are O_(gamma,J)(M^-2): local t_j converge to distinct positive ordinates, so the denominators for j!=n stay away from zero. For j>J, Suzuki's monotone bound t_j>=gamma_j makes the two denominator factors uniformly arbitrarily close to 1 as J increases, since t remains bounded. For every epsilon>0 choose J sufficiently large that the reciprocal of their product differs from 1 by at most epsilon. Then for all sufficiently large a,

    |r_a(t)-m_a(i)-(1+t^2)d_a^2|
       <= O_gamma(epsilon d_a^2)+O_(gamma,J)(M^-2).

Multiply by M and divide by 1+M d_a^2. The finite-prefix contribution tends to zero at fixed J, while the other contribution is bounded by O_gamma(epsilon). Taking epsilon to zero proves the precise scaled statement

    M[r_a(t)-m_a(i)-(1+t^2)d_a^2]=o(1+M d_a^2).

Because tau_0=eta_a t r_a(t), eta_a m_a(i)=1, eta_a->1, t->gamma and M(t-gamma)->0, we conclude

    M(tau_0-gamma)
       = gamma(1+gamma^2) M d_a^2+o(1+M d_a^2).           (R03.4)

No relative equivalence is asserted when M d_a^2 tends to zero. There is also a one-sided estimate independent of this finer asymptotic. In (R03.3) terms with j>n are positive, terms with j<n and j=n are O_gamma(M^-2), so r_a(t)-m_a(i)>=-O_gamma(M^-2). The imported t>=gamma gives tau_0>=gamma-O_gamma(M^-2). Consequently the fixed phase tau=gamma has detuning sigma_a=M(gamma-tau_0)<=O_gamma(M^-1); any finite accumulation value is nonpositive.

More specifically, along any subsequence on which M d_a^2->L in [0,infinity], the actual fixed phase has:
- L=0: sigma_a->0, symmetric tuned limit and equal weights;
- 0<L<infinity: sigma_a->-gamma(1+gamma^2)L, the asymmetric microscopic law and weights of section 3;
- L=infinity: sigma_a->-infinity, so section 2 applies, with the escaping branch below t and retained branch above t. Here D_a=gamma-tau_0 is asymptotic to -gamma(1+gamma^2)d_a^2.

This is a classification conditional on the behavior of M d_a^2, not a proof of its actual limit in the Weil system. The rate problem has now been reduced to a single positive scalar. In evaluation terms, differentiating K01.1 at zero and using even P_a yields u'_0=C_a v, so M d_a^2=||u'_0||_q^2/M. Determining the relative growth of the first derivative evaluation norm and the zeroth evaluation norm is a concrete unresolved arithmetic question.

## 5. Bounded analytic obstruction and scope

To test whether the norm and fixed-pole estimates alone force M d_a^2->0, consider a synthetic four-dimensional paired model, not a Weil operator. Choose arbitrary fixed gamma>0 and L_gamma>0, let M tend to infinity, and set C_M=diag(1/gamma,-1/gamma,M^(-alpha),-M^(-alpha)) with alpha>0. Choose the unit reflection-even e_M with first two coordinates sqrt(L_gamma)/M and last two coordinates sqrt((1-2L_gamma/M^2)/2), for sufficiently large M. Reflection swaps each pair. The first pole weight is exactly L_gamma/M^2, and

    d_M^2=2L_gamma/(gamma^2 M^2)+(1-2L_gamma/M^2)M^(-2alpha).

Thus M d_M^2 tends to zero for alpha>1/2, to 1 for alpha=1/2, and diverges for alpha<1/2. The normalized finite paired characteristic tends to 1-z^2/gamma^2, and m_M(i), eta_M and the pole-subtracted regular part obey the same scalar identities used above. This elementary example shows that those estimates and symmetry by themselves do not force microscopic tuning at the fixed phase. It does not reproduce the infinite arithmetic sampling/evaluation structure and is not a counterexample to a possible stronger arithmetic theorem. No numerical solver was run.

Worker K02-W04 branch returned 404 again; no acknowledgment or findings. Primary source access in this milestone is supported by actual returned web results; prior turns' source-access and rerun assertions cannot substitute for this evidence. No new numerical/Lean verification, human review, proof of RH or originality claim. R04 should consolidate the tuned and larger-detuning laws, eigenvector mixing, and fixed-phase classification, and assess whether a next bounded campaign on relative derivative evaluation norms has a concrete viable route. Do not manufacture a rate or assume that more work necessarily resolves it.
