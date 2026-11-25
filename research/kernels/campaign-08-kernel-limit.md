# Normalized reproducing kernels and entire phase characteristics

Candidate research note v0.1 — 25 November 2026. AI-assisted research under human direction. Throughout assume RH and the local/global framework of Suzuki [1]. These are internal deductions, not a proof of RH, human-reviewed theorem, machine proof or established priority.

## 1. Setting and main statements

Use the localized positive Weil-form Hilbert space H_a with inner product q linear in its first argument, the closed minimal differentiation S and the distinguished inverse C_a=D_(a,pi)^(-1). Under RH Suzuki [1], Theorem 3.3, identifies C_a=j_a* C j_a, where j_a embeds H_a into the weighted sample space H=ell2(Gamma,m), and C acts diagonally by 1/gamma at each distinct signed ordinate. The projections Pi_a=j_a j_a* increase strongly to I, and B_a=Pi_a C Pi_a converges to C in Hilbert–Schmidt norm. Set

    u_z=A_a^(-1) exp(-izx), v=u_0, M_a=||v||_q, e_a=v/M_a,
    J_a(w,z)=q(u_conj(w),u_conj(z)),
    P_a(z)=W(a,pi;z)/W(a,pi;0),
    Delta(z)=product_(gamma>0 distinct)(1-z^2/gamma^2).

The local evaluation convention is q(f,u_z)=F[f](conj z) with F[f](z)=integral f(x)exp(izx)dx. In particular J_a is antiholomorphic in w, holomorphic in z, and J_a(0,0)=M_a^2. Theorem 1.2 and (5.1) of [1] give P_a->Delta locally uniformly, with P_a the paired product over simple local eigenvalues. Delta includes each distinct ordinate once, not the xi multiplicity. Campaign VII [3] supplies M_a->infinity, h_a=j_a e_a weakly->0, d_a=||C_a e_a||_q->0, and eta_a=1/q((I+C_a^2)^(-1)e_a,e_a)=1+O(d_a^2).

Main candidate results:
- J_a(w,z)/M_a^2 -> conj(Delta(w)) Delta(z), locally uniformly on the whole two-variable complex domain.
- For fixed gamma,rho in Gamma, J_a(gamma,rho)->delta_(gamma,rho)/m_gamma.
- At microscopic offsets eta/M_a and zeta/M_a from those ordinates, the limit is delta_(gamma,rho)/m_gamma+conj(eta) zeta Delta'(gamma)Delta'(rho), uniformly on bounded parameter products.
- The common phase normalization F_(a,theta) defined below converges locally uniformly, uniformly in phase, to (z cos(theta/2)-sin(theta/2))Delta(z). An exact scalar resolvent factor and regularized determinant formula hold before the limit.

## 2. Evaluation-vector identity

The map z->u_z is entire into H_a, since the exponential is L2-entire on the finite interval and the positive local operator gives a bounded inverse map L2->H_a. By the adjoint-evaluation identity in [1] §3.1, S*u_z=z u_z and ker S*=span(v). Since S*C_a=I, (I-z C_a)u_z is a scalar times v.

For the scalar, put u_+=u_i, u_-=u_-i, w_pi=u_+-u_-, b=q(u_+,v)=q(u_-,v) real nonzero. The boundary pairing is W_bdry(x,y)=q(S*x,y)-q(x,S*y). From L01, C_a f=g+k w_pi with g in Dom S and k=q(f,v)/(2ib). Equation (3.3) of [1] gives W_bdry(u_z,w_pi)=conj(W(a,pi;conj z)), with W(a,pi;0)=-2ib. Thus

    q((z C_a-I)u_z,f)=W_bdry(u_z,C_a f)
        =-q(v,f) conj(W(a,pi;conj z))/(2ib).

The normalized P_a is real entire by the paired product, so

    (I-z C_a)u_z=P_a(z)v,                         (8.1)
    u_z=P_a(z)(I-z C_a)^(-1)v

off the local phase-pi spectrum. At a simple local eigenvalue t, with E_t the orthogonal projection of C_a at 1/t, the removable value is u_t=-t P_a'(t)E_t v. This is nonzero by the local evaluation property; consequently E_t v is nonzero.

## 3. Rank-one limit and quadratic error

On any complex compact K avoiding Gamma, norm convergence B_a->C gives a uniform bound for R_a(z)=(I-z C_a)^(-1). Indeed the global resolvent is uniformly bounded there and the norm perturbation tends to zero. The restriction to the embedded local space has the same bound. Hence

    ||R_a(z)e_a-e_a||_q <= |z| ||R_a(z)|| d_a.

By (8.1) and the uniform bound on P_a, u_z/M_a-P_a(z)e_a=O_K(d_a) in H_a. This difference is entire. Enclose any compact in a larger disk with boundary avoiding Gamma; scalar maximum modulus after pairing with each unit vector proves the same estimate inside. Thus it holds on every compact, and Cauchy estimates give the corresponding fixed-order derivative estimates.

Reflection fixes e_a and anticommutes with C_a, so q(C_a e_a,e_a)=0. Off poles the normalized kernel is conj(P_a(w))P_a(z) times q(R_a(conj w)R_a(z)e_a,e_a). The exact identity, with alpha=conj w and beta=z, is

    R_a(alpha)R_a(beta)-I-(alpha+beta)C_a
       = C_a^2[alpha^2 R_a(alpha)+beta^2 R_a(beta)
                              +alpha beta R_a(alpha)R_a(beta)].

Move one C_a across the inner product. Uniform resolvent bounds off Gamma give scalar error O(d_a^2) on compact products. The entire difference in the independent variables conj(w), z extends this bound by maximum modulus on each of two enclosing circles avoiding Gamma. Consequently

    J_a(w,z)/M_a^2=conj(P_a(w))P_a(z)+O_(K_w,K_z)(d_a^2).

This proves the first claimed limit. It is a leading absolute estimate, not relative at zeros. For fixed w,z outside Gamma the limiting product is nonzero, so the unnormalized kernel diverges in magnitude at scale M_a^2, answering the off-diagonal divergence question for such pairs under the hypotheses. No a-rate for d_a is inferred.

## 4. Sampled and microscopic kernels

For gamma in Gamma let g_gamma in H have coordinate 1/m_gamma at gamma and zero elsewhere. Its norm squared is 1/m_gamma. Evaluation at real gamma is exactly that coordinate in the sample representation, first on compact tests and then by continuity. Therefore j_a u_gamma=Pi_a g_gamma and

    J_a(gamma,rho)=<Pi_a g_gamma,Pi_a g_rho>_H.

Strong projection convergence proves the second claimed limit, with diagonal nondecreasing and at most 1/m_gamma. Writing delta_a(gamma)=||(I-Pi_a)g_gamma||, the diagonal deficit is exactly delta_a(gamma)^2 and the off-diagonal error is at most delta_a(gamma)delta_a(rho). Unlike Delta, these finite values retain actual xi multiplicity.

For fixed sampled gamma and z in a compact, the vector estimate and weak escape give J_a(gamma,z)=o_K(M_a). This is sublinear, not an unnormalized finite limit. Also by (8.1) and C g_gamma=g_gamma/gamma,

    P_a(gamma) M_a h_a=(I-gamma B_a)Pi_a g_gamma
                       =gamma Pi_a C(I-Pi_a)g_gamma.

Thus |P_a(gamma)|M_a <= |gamma| ||C|| delta_a(gamma)->0.

For fixed gamma and bounded complex eta, Taylor's formula and the compact derivative estimates give

    u_(gamma+conj(eta)/M_a)
       =u_gamma+conj(eta) Delta'(gamma)e_a+o(1)

uniformly in eta: the derivative divided by M_a approaches Delta'(gamma)e_a, and the second-order remainder is O(1/M_a). Under j_a the baseline vectors converge strongly to g_gamma while h_a escapes weakly with norm one. Taking the inner product for two such expansions proves

    J_a(gamma+eta/M_a,rho+zeta/M_a)
      -> delta_(gamma,rho)/m_gamma
          +conj(eta) zeta Delta'(gamma)Delta'(rho).       (8.2)

For the diagonal this yields 1/m_gamma+|zeta|^2 |Delta'(gamma)|^2. Every distinct zero of Delta is simple by the convergent product. If epsilon_a->0 with M_a|epsilon_a|->0, the diagonal at gamma+epsilon_a tends to 1/m_gamma. If instead M_a|epsilon_a|->infinity, dividing the Taylor identity by M_a conj(epsilon_a) gives diagonal ratio J_a/(M_a^2 |epsilon_a|^2)->|Delta'(gamma)|^2. These are fixed-ordinate statements, not uniform in gamma. The unnormalized mixed kernel at fixed nonzero separation is still unresolved.

## 5. Common phase characteristic and determinant

By [1] (3.3), W(a,theta;z)=(z-i)J_a(-i,z)+exp(i theta)(z+i)J_a(i,z). With phi=theta/2 and b=q(u_i,v), define

    F_(a,theta)(z)=W(a,theta;z)/(2 exp(i phi)b).

This common denominator is nonzero including at phase zero; F_(a,pi)=-P_a. The kernel limit gives b/M_a^2->Delta(i)>0 and both J_a(±i,z)/M_a^2->Delta(i)Delta(z). Substitution gives the fourth claimed limit. The sign matches the additional root tan(phi), phase zero gives a root at zero, and at pi the factor is constant. At a collision with Gamma, Rouche yields limiting local count two. This is not a double finite-window eigenvalue.

For an exact formula put H0=(I+C_a^2)^(-1), m_a(z)=q(R_a(z)e_a,e_a). From (8.1), u_±i=P_a(i)R_a(±i)v, so b=M_a^2 P_a(i)/eta_a>0. Move the second resolvent adjoint across the kernel inner product to obtain J_a(∓i,z)=M_a^2 P_a(i)P_a(z) q(R_a(±i)R_a(z)e_a,e_a). Use R_a(±i)=(I±iC_a)H0 and simplify: the sin(phi) term is -sin(phi)H0; the cos(phi) term is H0(zI+C_a)R_a(z)=z R_a(z)+C_a H0. The latter odd moment vanishes by reflection. Thus

    F_(a,theta)(z)=P_a(z)[eta_a z cos(phi)m_a(z)-sin(phi)],    (8.3)

with removable poles. At zero its value is -sin(phi), and F_(a,0)'(0)=eta_a. Since m_a(z)-1=z^2 q(R_a(z)C_a e_a,C_a e_a), off Gamma this is O_K(d_a^2). Maximum modulus for the entire product P_a(eta_a m_a-1) extends the estimate everywhere. Consequently the error relative to P_a(z)(z cos(phi)-sin(phi)) is O_K(d_a^2) uniformly in phase. For a fixed nonresonant additional root tau=tan(phi), finite and outside Gamma, P_a stays nonzero on a small disk about tau, and (8.3) gives t_*-tau=O_theta(d_a^2). No resonance splitting rate follows from this bound.

Let Q be projection onto e_a, K_a^loc=(I-Q)C_a(I-Q). By [1] (5.1), P_a=det_2(I-z C_a), using paired eigenvalues to cancel the genus-one exponentials. L01 gives D_theta^(-1)=C_a+s Q with s=eta_a cot(phi) for invertible phases. The finite-dimensional determinant lemma, with the trace exponential for the Hilbert–Schmidt determinant, gives

    det_2(I-z D_theta^(-1))=exp(zs) P_a(z)(1-zs m_a(z)),
    F_(a,theta)=-sin(phi) exp(-zs) det_2(I-z D_theta^(-1)).

For phase zero, the finite cofactor formula gives P_a m_a=det_2(I-z K_a^loc), so F_(a,0)=eta_a z det_2(I-z K_a^loc). For both formulas approximate by increasing finite-dimensional projections containing e_a and commuting with reflection, which give HS convergence of the compressed operators. Reflection ensures the paired compressions are traceless, including the complement of e_a. Resolvent convergence away from poles and continuity of det_2 in HS norm yield the identities there, then analyticity extends them everywhere. K_a^loc is the reduced inverse, not the inverse at zero. For fixed invertible phase with p=cot(phi), the determinant tends locally uniformly to exp(zp)(1-zp)Delta(z); for the reduced inverse it tends to Delta. No unrenormalized determinant convergence claimed for divergent p.

## 6. Review status and next direction

Primary sources were opened and checked in this consolidation turn: [1] Theorems 1.1–1.2, 3.3, (3.3), (5.1), §5.2; [2] §7.9, especially its final paragraphs at lines 1029–1033 of the HTML. The latter explicitly leaves the possible off-diagonal singularity and its boundary-form consequences open. The conclusions above address a particular RH-conditional normalized kernel and phase characteristic, not all aspects of the conjectural boundary limit. The imported distinguished-phase entire-function theorem is not new here. A complete literature/priority audit remains outstanding.

The internal consolidation checked signs, conjugations, parity, maximum modulus, Taylor estimates and determinant approximation against K01–K03. No new material flaw identified. The independent K02-W04 audit remains assigned, branch absent at K04; no findings. Earlier scoped worker acceptance for Campaign VII does not verify this campaign. No numerical or formal run in this consolidation. Prior verification descriptions in historical notes must not substitute for current tool evidence; the accepted worker audits are limited to their stated scope. In particular the lead's historical numerical-rerun claims are not independently re-established here.

Next question: resolve the collision of the additional phase root with a fixed ordinate. Equation (8.3) and the exact pole residue from (8.1), together with (8.2), suggest a two-root transition at scale 1/M_a under a phase tuning defined by the regular part of m_a. The scale and tuning must be derived, not assumed; a fixed resonant phase could have detuning larger than that scale. Campaign IX will investigate this directly.

[1] M. Suzuki, Spectral convergence associated with Weil's quadratic form, arXiv:2610.32704v1 (23 October 2026), https://arxiv.org/html/2610.32704v1.
[2] M. Suzuki, Weil's quadratic form via the screw function, arXiv:2606.09096v4 (15 November 2026), https://arxiv.org/html/2606.09096v4.
[3] Zetral, research/large-phase/campaign-07-phase-limit.md (conditional candidate). Detailed internal derivations: K01-evaluation-resolvent.md, K02-ordinate-boundary-layer.md, K03-entire-phase-characteristic.md.
