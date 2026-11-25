# Microscopic resonance of localized Weil differentiation

Candidate research note v0.1 — 25 November 2026. AI-assisted research under human direction. Assume RH and Suzuki's local/global framework [1], together with the candidate evaluation identities of Campaigns VII–VIII. No proof of RH, originality determination, human review or machine certification.

## 1. Setting and residue

Fix a distinct positive ordinate gamma=gamma_n of multiplicity m_gamma, and let t=t_a be the corresponding positive phase-pi local eigenvalue. Let C_a be the phase-pi inverse in the local form Hilbert space, q linear in the first argument, and j_a its global weighted sample embedding. Write u_z=A_a^(-1) exp(-izx), M=M_a=||u_0||_q, e=u_0/M, h_a=j_a e, d_a=||C_a e||, and eta_a=1/q((I+C_a^2)^(-1)e,e). By Campaign VII, M->infinity, h_a weakly->0, d_a->0, eta_a=1+O(d_a^2). Let P_a be the phase-pi characteristic normalized at zero; Suzuki's Theorem 1.2 gives P_a->Delta locally uniformly, Delta(z)=product_(gamma>0 distinct)(1-z^2/gamma^2). Every distinct zero of Delta is simple, regardless of the xi multiplicity.

Campaign VIII gives the exact equation (I-z C_a)u_z=P_a(z)u_0 and its removable value at the simple pole t,

    u_t=-t P_a'(t) M E_t e,

where E_t is the local inverse spectral projection at 1/t. For the weighted coordinate vector g_gamma of norm squared 1/m_gamma, j_a u_gamma=Pi_a g_gamma, where Pi_a is the projection onto the embedded local space. Set delta_a=||(I-Pi_a)g_gamma||->0. The evaluation equation at gamma yields |P_a(gamma)|M<=gamma||C||delta_a. Since P_a' converges locally uniformly to Delta' and is bounded away from zero near gamma, the real mean value theorem gives M|t-gamma|=O_gamma(delta_a)->0. Uniform Cauchy estimates on u_z/M from Campaign VIII give ||u_t-u_gamma||=O_gamma(delta_a). Therefore j_a u_t->g_gamma in norm. For beta^2=||E_t e||^2>0,

    M^2 beta^2=||u_t||^2/(t^2 |P_a'(t)|^2)
              -> 1/(m_gamma gamma^2 |Delta'(gamma)|^2).

Define c=1/(sqrt(m_gamma)|Delta'(gamma)|)>0. The isolated scalar resolvent pole has residue -t beta^2. The exact moving cardinal row

    J_a(t,z)=||u_t||^2 P_a(z)/((z-t)P_a'(t))

converges locally uniformly, including the removable value, to Delta(z)/(m_gamma (z-gamma)Delta'(gamma)). This follows by pairing the residue vector with the resolvent expression for u_conj(z) and maximum modulus. It is not a fixed-ordinate unnormalized mixed kernel limit.

## 2. Resonance tuning and bounded detuning

On a fixed sufficiently small closed disk centered at gamma, P_a has only its simple zero t eventually (Rouche). Decompose

    m_a(z)=q((I-z C_a)^(-1)e,e)=beta^2/(1-z/t)+r_a(z).

The regular part is holomorphic on the disk and real on its diameter. On a surrounding fixed circle avoiding Gamma, compression norm convergence bounds the resolvent and reflection gives m_a-1=z^2 q((I-z C_a)^(-1) C_a e,C_a e)=O(d_a^2). Since beta^2/t^2<=d_a^2, maximum modulus and Cauchy estimates give r_a-1=O(d_a^2) and its first two derivatives O(d_a^2) on a smaller disk. Put f_a(z)=eta_a z r_a(z), so f_a'=1+O(d_a^2), f_a''=O(d_a^2), and define the tuning tau_0=f_a(t)->gamma.

The exact characteristic from Campaign VIII is P_a(z) cos(theta/2)[eta_a z m_a(z)-tau], where tau=tan(theta/2) near gamma. Divide out the nonzero holomorphic factor cos(theta/2) P_a(z)/(z-t) to get the equivalent analytic equation

    G_a(z;tau)=(z-t)(f_a(z)-tau)-eta_a z t beta^2=0.

Its value at t is strictly negative; no artificial pole-root was introduced. For real bounded sigma let tau=tau_0+sigma/M and y=M(z-t). Then uniformly for bounded complex y and bounded real sigma,

    M^2 G_a(t+y/M;tau) -> y^2-sigma*y-c^2.

Indeed M(f_a(t+y/M)-f_a(t))=y+o(1) by the derivative bounds, and eta_a(t+y/M)t M^2 beta^2->c^2. The two limiting roots y_±=(sigma±sqrt(sigma^2+4c^2))/2 are separated by at least 2c and are nonzero. On disjoint circles of radius epsilon<c around them the product modulus is at least epsilon(2c-epsilon), uniform on bounded sigma. Rouche gives one root in each circle, real by conjugation and uniqueness. On the original fixed circle G_a tends to (z-gamma)^2, so precisely these two roots constitute the local cluster. Thus

    M(z_(a,±)-gamma)->y_±(sigma)

uniformly on bounded sigma, using M(t-gamma)->0. At sigma=0 the gap is 2c/M+o(1/M). The angular tuning theta_0+k/M corresponds to sigma=(1+gamma^2)k/2+o(1). The L02 lower bound on M gives an upper bound O_gamma(X^(7/4)sqrt(log X)exp(-pi X)) on the tuned gap, X=exp(2a); no matching lower bound in X is asserted.

## 3. Larger detuning and mixing

For tau->gamma with D=tau-tau_0 and M|D|->infinity, f_a has a unique real regular root s near gamma, f_a(s)=tau, with s-t=D(1+O(d_a^2)) by monotonicity. Put epsilon=1/(M^2 D), so epsilon/D->0. Uniformly on bounded real x,

    M^2 G_a(t+x epsilon;tau)->-x-c^2,
    M^2 G_a(s+x epsilon;tau)-> x-c^2.

The two sign changes give roots by the intermediate value theorem in disjoint neighborhoods, and the fixed-circle count excludes additional roots. They satisfy

    z_ret=t-c^2/(M^2 D)(1+o(1)),
    z_esc=s+c^2/(M^2 D)(1+o(1)).

The labels identify directions rather than ordering. For D>0 the retained root lies below t and the escaping root above s; for D<0 the order reverses. The gap is asymptotic to |D|. The corrections are relative to the actual centers t and s.

The kernel expansion of Campaign VIII gives at bounded sigma

    j_a u_(z_±)=g_gamma+y_± Delta'(gamma)h_a+o(1)

in global norm. Put G_gamma=sqrt(m_gamma)g_gamma (unit) and k(y)=sqrt(m_gamma)y Delta'(gamma). The normalized embedded eigenvectors, with the evaluation-vector convention, are

    x_±=[G_gamma+k(y_±) h_a]/sqrt(1+k(y_±)^2)+o(1).

Their limiting squared overlaps with G_gamma are c^2/(c^2+y_±^2); the escaping weights are the complements. Both weights are 1/2 at tuning. Orthogonality follows in the limit from y_+ y_-=-c^2 and weak escape. For larger detuning, M(z_ret-gamma)->0, so x_ret->G_gamma strongly. Meanwhile z_esc-gamma=D(1+o(1)); dividing the Taylor expansion by M(z_esc-gamma) gives Delta'(gamma)h_a plus a norm error tending to zero. Thus x_esc approaches h_a up to sign and escapes weakly. These are sample-space statements, not convergence of physical L2 eigenfunctions.

## 4. Fixed-phase classification

Use reflection symmetry and completeness of the phase-pi inverse eigenvectors. For positive t_j let beta_j^2=||E_(t_j)e||^2, with equal weight at -t_j. Then 2 sum beta_j^2=1, d_a^2=2 sum beta_j^2/t_j^2 and 1/eta_a=m_a(i)=2 sum beta_j^2/(1+1/t_j^2). At t=t_n,

    r_a(t)-m_a(i)
      = beta_n^2[1/2-2/(1+1/t^2)]
        +2 sum_(j!=n) beta_j^2 (1+t^2)/
                   [t_j^2(1-t^2/t_j^2)(1+1/t_j^2)].

Each fixed beta_j^2=O_j(M^-2) by the residue limit. A finite prefix therefore contributes O_(gamma,J)(M^-2), including the corresponding prefix of (1+t^2)d_a^2. For the tail, the imported t_j>=gamma_j makes the two denominator factors uniformly close to one as J->infinity. For every epsilon>0 the difference from (1+t^2)d_a^2 is at most O_gamma(epsilon d_a^2)+O_(gamma,J)(M^-2). Multiply by M/(1+M d_a^2), take a->infinity first, then epsilon->0. Since eta_a->1 and M(t-gamma)->0,

    M(tau_0-gamma)=gamma(1+gamma^2) M d_a^2+o(1+M d_a^2).

The terms j>n are positive, the remaining terms O_gamma(M^-2); t>=gamma gives tau_0>=gamma-O_gamma(M^-2). Thus fixed tau=gamma has no strictly positive finite limiting detuning. Along subsequences with L_a=M d_a^2 tending to zero, a positive finite L, or infinity, the respective fixed-phase limits are symmetric tuned, microscopic with sigma=-gamma(1+gamma^2)L, or larger negative detuning. In the last case the escaping branch is lower and the retained branch upper. The actual limit of L_a is unresolved.

Since P_a is even, differentiation of the evaluation identity at zero gives u'_0=C_a u_0, hence L_a=||u'_0||_q^2/M. A four-dimensional synthetic paired inverse with diagonal ±1/gamma, ±M^(-alpha), even unit vector weights L_gamma/M^2 on each fixed pole and the remaining mass on the moving pair satisfies d^2=2L_gamma/(gamma^2 M^2)+(1-2L_gamma/M^2)M^(-2alpha). Varying alpha>0 realizes all three behaviors of M d^2. This is an analytic obstruction to deducing a rate from only symmetry and fixed-pole estimates, not a counterexample within the Weil system.

## 5. Next direction and verification

A concrete next step is to estimate the first derivative evaluation norm by a compact truncation of Phi', with Phi the classical theta kernel whose full Fourier transform vanishes at the sampled ordinates. The differentiated full transform is -iz A_0(z), whose derivative at zero is nonzero. The resulting lower bound on ||u'_0||, combined with a sufficiently strong upper bound on M, could prove L_a->infinity. Lower bounds alone on both quantities are insufficient. Campaign X will establish the witness and precise sufficient coercivity threshold and assess the literature for actual matching lower bounds; it will not assume a conjectural ladder. Relevant new primary paper [2], introduction and Remark 3.5, explicitly separates numerical evidence for the lower Fuchs-ladder bound from proved upper bounds and conditional positivity. The exact lower bound remains unproved there. The Mori repository [3] advertises a conditional sampling lower bound, but its full proof and normalization have not been audited. These are concrete routes, not imported estimates in this note.

R01–R03 reviewed internally; signs, root counts, normalization and tail argument checked, no new material error found. K02-W04 branch lookup returned 404 again. No independent audit of VIII or IX yet. No numerical or Lean computation in this milestone, no human review or priority determination. Historical source claims without actual accessible tool outputs are not fresh verification; the source status in [1]–[3] below is grounded in actual returned results in R04. The historical lead numerical-rerun assertions are not independently verified here.

[1] Suzuki, arXiv:2610.32704v1, https://arxiv.org/html/2610.32704v1. R04 directly retrieved introduction and Theorem 1.2, including the monotone lower bound t_(a,n)>=gamma_n and compact convergence of P_a; the local inverse and evaluation identities are inherited from prior notes, not newly checked in full here.
[2] The uncertainty operator, the Weil ground state and the zeros of zeta: a numerical study and conditional positivity of the Weil quadratic form, arXiv:2611.13129v1, https://arxiv.org/html/2611.13129v1. R04 directly retrieved introduction, Remark 3.5 and §8 summary.
[3] https://github.com/moriryota/prolate-weil-bounds, README Paper IV summary directly retrieved, not its full proof.

Detailed proofs R01-isolated-pole.md, R02-microscopic-splitting.md, R03-detuning-and-mixing.md. No external submission.
