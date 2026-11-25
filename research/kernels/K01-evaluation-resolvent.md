# K01 — Exact evaluation resolvent and normalized rank-one kernel limit

25 November 2026. Conditional on RH and Suzuki's published local/global framework. Internal candidate derivation, not a human-reviewed theorem, formal verification or established priority.

## 1. Conventions and source imports

Primary HTML actually retrieved in this turn: Suzuki, Spectral convergence associated with Weil's quadratic form, arXiv:2610.32704v1, https://arxiv.org/html/2610.32704v1, Theorem 1.2, §2.2 (2.5)–(2.7), §2.3 (2.8)–(2.9), §3.1 (3.2), Lemma 3.1, §3.2 (3.3) and Lemma 3.2, Theorem 3.3 (3.5). Also retrieved v4, https://arxiv.org/html/2606.09096v4, §7.9 opening passages; this campaign investigates its kernel singularity question, not an asserted solution of the full boundary-limit problem.

Under RH let H_a be the local Weil-form space, q its inner product linear in the first argument, S its closed minimal differentiation operator and C_a=D_(a,pi)^-1=j_a* C j_a the distinguished inverse. Write u_z=A_a^-1 exp(-izx), v=u_0 and M_a=||v||_q. Then q(f,u_z)=F[f](conj z), S*u_z=z u_z, ker S*=span(v). In the source convention

    J_a(w,z)=q(u_(conj w),u_(conj z))=F[u_(conj w)](z),
    J_a(0,0)=M_a^2.

In particular J is antiholomorphic in w and holomorphic in z. The index on u is the adjoint eigenvalue, not the evaluation point. The map z->u_z is entire as an H_a-valued function: the exponential is L2-entire on the bounded interval and A_a^-1:L2->H_a is bounded by local coercivity.

Let W_a(z)=W(a,pi;z) in (3.3), and P_a(z)=W_a(z)/W_a(0). (P_a here is a scalar entire function, not an orthogonal projection.) Lemmas 3.1–3.2 establish nonzero W_a(0) and real simple zeros at the local distinguished eigenvalues. P_a is even and real entire: u_i,u_-i are real and reflection interchanges them, hence conjugate-reflection of W_a equals -W_a, as also holds for W_a(0). Theorem 1.2 gives P_a->Delta locally uniformly in C, where

    Delta(z)=product_(gamma>0 distinct) (1-z^2/gamma^2).

It is not in general the normalized xi unless all its zeros are simple.

## 2. Exact scalar in the adjoint resolvent identity

Since S*C_a=I and S*u_z=z u_z, (I-z C_a)u_z belongs to ker S* for every complex z. To identify its scalar, retain the L01 notation u_+=u_i, u_-=u_-i, w_pi=u_+-u_-, b=q(u_+,v)=q(u_-,v) real nonzero, W_a(0)=-2ib. For any f in H_a, L01 gives the deficiency decomposition C_a f=g+k w_pi with g in Dom S and k=q(f,v)/(2ib).

Denote the boundary pairing by Bdry(x,y)=q(S*x,y)-q(x,S*y). It annihilates the minimal domain. Then

    q((z C_a-I)u_z,f)=Bdry(u_z,C_a f)
       =conj(k) Bdry(u_z,w_pi)
       =-q(v,f) conj(W_a(conj z))/(2ib).

The first equality uses bounded self-adjointness of C_a; the last uses the source's (3.3), Bdry(u_z,w_pi)=conj(W_a(conj z)), and the conjugation of 2ib. Since W_a(0)=-2ib and P_a is real entire, this proves the exact identity

    (I-z C_a)u_z=P_a(z)v.                         (K01.1)

In particular, off the local phase-pi spectrum,

    u_z=P_a(z)(I-z C_a)^-1 v.                    (K01.2)

No new scalar function has to be fitted or estimated. At each local eigenvalue t, the resolvent has a simple pole with singular part (1-z/t)^-1 E_t, where E_t is the orthogonal eigenprojection of C_a at 1/t. The zero of P_a cancels that pole, giving the exact removable value

    u_t=-t P_a'(t) E_t v.

Indeed the remaining resolvent part is analytic near t and its product with P_a vanishes at t. The left side is entire, so the identity extends there by continuity. u_t is nonzero because the local Fourier space has no common zeros; consequently E_t v!=0. This also proves that v has a nonzero component in every phase-pi eigendirection. No equality between the global and local evaluation vectors is assumed.

## 3. Normalized kernel off the global ordinate set

Let e_a=v/M_a, h_a=j_a e_a, B_a=j_a C_a j_a*=Pi_a C Pi_a. Campaign VII proves h_a weakly tends to zero, ||h_a||=1, and d_a=||C_a e_a||_q=||B_a h_a||->0 by compactness of C. B_a->C in operator norm (indeed in HS norm). For a compact set K disjoint from Gamma, put L=max_(z in K)|z| and U=max_(z in K)||(I-z C)^-1||, finite by the diagonal compact spectrum and continuity. For sufficiently large a, L U ||B_a-C||<=1/2, so the bounded perturbation identity gives

    sup_(z in K)||(I-z B_a)^-1|| <= 2U.

This includes the zero-extended complement, on which the resolvent is I. Restrict to the embedded local space to get the same upper bound for R_a(z)=(I-z C_a)^-1. In particular no local phase-pi eigenvalues lie in K for sufficiently large a. For each z in K,

    ||R_a(z)e_a-e_a||_q <= 2U L d_a.

Consequently K01.2 and the locally uniform P_a limit prove

    sup_(z in K)||u_z/M_a-Delta(z)e_a||_q ->0.       (K01.3)

This is an approximation to a moving direction within H_a, not a strong limit to a vector in the global space. For the two-variable kernel take compact K_w,K_z disjoint from Gamma and apply the estimate to their conjugates. With real-entire P_a, the exact identity is

    J_a(w,z)/M_a^2 =
       conj(P_a(w)) P_a(z)
       q(R_a(conj w)e_a,R_a(conj z)e_a).            (K01.4)

The inner product tends uniformly to 1 on K_w x K_z. Therefore

    J_a(w,z)/J_a(0,0) -> conj(Delta(w)) Delta(z)   (K01.5)

uniformly on these compact products. This gives the leading normalized off-diagonal kernel singularity outside the ordinate set. In particular for fixed w,z off Gamma the unnormalized kernel diverges in magnitude as M_a^2 times a nonzero constant; the limit is a rank-one positive kernel. Diagonal divergence follows as a special case, consistent with L02's lower bound on M_a.

## 4. Quadratic scalar error by reflection

There is a sharper comparison than the O(d_a) vector bound. Reflection fixes e_a and anticommutes with C_a, hence q(C_a e_a,e_a)=0. For alpha=conj w, beta=z, the scalar factor in K01.4 equals q(R_a(alpha)R_a(beta)e_a,e_a), by moving the adjoint of the second resolvent to the first argument. Both resolvents commute with C_a. The exact operator identity is

    R_a(alpha)R_a(beta)-I-(alpha+beta)C_a
     = C_a^2 [alpha^2 R_a(alpha)+beta^2 R_a(beta)
                                  +alpha beta R_a(alpha)R_a(beta)].

It follows by multiplying R_a(t)=I+t C_a R_a(t) and expanding the linear terms once more. Moving one C_a across the inner product and using the zero linear moment bounds the scalar error by

    d_a^2 (|alpha|^2 ||R_a(alpha)||+|beta|^2 ||R_a(beta)||
                         +|alpha beta| ||R_a(alpha)|| ||R_a(beta)||).

On fixed compact products away from Gamma this is O(d_a^2). Since P_a is uniformly bounded there, the normalized kernel differs from conj(P_a(w))P_a(z) by O(d_a^2). The error relative to Delta additionally includes the actual characteristic convergence error. No quantitative a-rate for d_a is inferred from L02 alone. This estimate uses bounded operators and exact identities, no uncontrolled expansion near a pole.

## 5. Limits and next step

K01 establishes the exact coefficient, removable poles and compact-uniform normalized limit away from Gamma. There is also a direct route to extend the vector estimate to all compacts: for each finite set of ordinates enclosed by small disks, use the H_a-valued maximum modulus bound on the analytic difference u_z/M_a-P_a(z)e_a, taking disk boundaries outside Gamma. K02 will record this continuation carefully and address genuinely finer behavior at sampled ordinates (where unnormalized J_a(gamma,gamma)<=1/m_gamma via the global coordinate functional), mixed evaluations and possible subleading scales. The leading rank-one limit alone cannot determine those subleading singularities. The full xi multiplicity is not encoded in Delta.

Worker L03-W03 now has an acknowledged IN_PROGRESS handoff, blob ca9f1621b232993dc538c6404928aea566e8f152 on worker/l03-w03, baseline 93d17ac. No audit findings yet. No numerical or formal verification performed here. The present argument is conditional on RH and on the stated source imports and L01–L02 derivations; no claim of originality or RH proof. Primary source theorem statements were retrieved in this turn, not inferred from earlier notes. No external submission.
