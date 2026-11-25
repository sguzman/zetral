# L01 — Exact rank-one inverse perturbation in the natural phase

25 November 2026. Conditional on RH for the all-window positive local spaces and global compression. Internal candidate derivation, not independent human review or machine verification. The rank-one extension mechanism is standard; the explicit coefficient and its consequences are investigated here, not asserted original.

## 1. Imported setting and conventions

Actually reopened Suzuki arXiv:2610.32704v1, https://arxiv.org/html/2610.32704v1, §§2.1–2.3, equations (2.5)–(2.9), (3.1)–(3.3), Lemmas 3.1–3.2, Theorem 3.3 (3.5). Also opened arXiv:2606.09096v4 introduction. Under RH fix a>0 and H_a=H(A_a), inner product q linear in first argument. Let S be the closure of i d/dx on compact smooth tests in H_a; write D_theta for its self-adjoint extension with natural deficiency vectors u_+=A_a^-1 exp(x), u_-=A_a^-1 exp(-x). The domain is Dom S algebraic direct sum span(w_theta), w_theta=u_++exp(i theta)u_-, and D_theta=S* there. Use the boundary pairing

    W(f,h)=q(S*f,h)-q(f,S*h).

Put v=A_a^-1 1, w_0=u_++u_-, w_pi=u_+-u_-, N=||u_+||_q^2=||u_-||_q^2>0. Source (3.1) gives ker S*=span(v), S*u_+=i u_+, S*u_-=-i u_-. Reflection R is unitary, fixes v,w_0 and negates w_pi. The minimal S has no eigenvalues by Lemma 3.1. The same lemma puts v in Dom D_0; thus v is not in Dom S. Theorem 3.3 supplies the bounded compact self-adjoint inverse

    C_a=D_pi^-1=j_a* C j_a,

where j_a embeds into the global sampling Hilbert space and C is the diagonal compact inverse 1/gamma. In particular ||C_a||<=1/gamma_1. Do not replace j_a* by restriction of a physical-space function.

## 2. Boundary calculation and exact inverse

Let b=q(u_+,v)=F[u_+](0), with F the +izx Fourier convention. Since A_a commutes with conjugation and reflection, u_+ is real and b=q(u_-,v) is real. Reflection also gives q(v,u_+)=q(v,u_-)=b. By (3.3) W(a,pi;0)=-2i b is nonzero; alternatively use v in Dom D_0 but not Dom D_pi. (The symbol W(a,theta;z) denotes the entire characteristic; W(f,h) above denotes the boundary pairing.) Thus b!=0. The following computations use q linear in its first argument.

Since v in Dom D_0, write v=g+d w_0, g in Dom S, d!=0. The boundary pairing annihilates the minimal domain in either argument. Directly

    W(v,w_pi)=2i b,
    W(w_0,w_pi)=4i N.

Indeed S*w_pi=i w_0, S*w_0=i w_pi, and ||w_0||^2+||w_pi||^2=4N. Hence d=b/(2N), real. For arbitrary f in H_a write C_a f=h+k w_pi, h in Dom S. Then

    q(f,v)=W(C_a f,v)=k W(w_pi,v)=2i b k,

where W(w_pi,v)=-conj W(v,w_pi)=2i b. Thus k=q(f,v)/(2i b).

All solutions of S*x=f have the form x=C_a f+l v. Its deficiency coefficients in u_+,u_- are k+l d,-k+l d respectively. For theta!=0 modulo 2pi, the extension condition

    -k+l d=exp(i theta)(k+l d)

gives l d=i cot(theta/2) k, since (1+exp(i theta))/(1-exp(i theta))=i cot(theta/2). Therefore

    D_theta^-1 f = C_a f + [N/b^2] cot(theta/2) q(f,v) v.    (L01.1)

This is a construction of a bounded everywhere-defined right inverse, not just inference from absence of an eigenvalue. Injectivity follows because v lies in Dom D_0 but not in any other extension domain (distinct domains intersect in Dom S). Hence 0 is in the resolvent set for every theta!=0. Compactness and self-adjointness follow from the exact expression. For theta=pi it reduces to the imported inverse; otherwise the difference has rank exactly one.

Define e_a=v/||v||_q, Q_a=f->q(f,e_a)e_a. Then the difference equals eta_a cot(theta/2) Q_a, where eta_a=N||v||_q^2/b^2>0. Its operator norm and Hilbert–Schmidt norm are both eta_a |cot(theta/2)|. It is positive for 0<theta<pi and negative for pi<theta<2pi. In particular the inverse decreases in the Loewner order as theta increases on (0,2pi), consistent with the earlier differentiation eigenvalue flow; inverses and positive-rank labels require care at phase zero.

## 3. Coefficient solely in terms of the distinguished inverse and evaluation direction

There is an exact simplification which avoids separately estimating the potentially large Riesz norms. Since S*u_+=i u_+ and S*C_a u_+=u_+, we have (I-i C_a)u_+ in ker S*=span(v). It is nonzero since I-i C_a is invertible for bounded self-adjoint C_a. Thus u_+=lambda (I-i C_a)^-1 v, lambda!=0. Reflection anticommutes with C_a by invariance of Dom D_pi; it fixes v. Consequently q(C_a(I+C_a^2)^-1 v,v)=0, since the first vector is odd. Set

    m_a=q((I+C_a^2)^-1 v,v)>0.

Using (I-i C_a)^-1=(I+i C_a)(I+C_a^2)^-1 gives b=lambda m_a and N=|lambda|^2 m_a by the adjoint product of the resolvent factors. Hence N/b^2=1/m_a (b real), and

    eta_a = 1/q((I+C_a^2)^-1 e_a,e_a).                 (L01.2)

By the spectral theorem,

    1 <= eta_a <= 1+||C_a||^2 <= 1+gamma_1^-2,
    0 <= eta_a-1 <= (1+||C_a||^2)||C_a e_a||_q^2.      (L01.3)

For the last inequality, subtract the denominator from 1, obtaining q(C_a^2(I+C_a^2)^-1 e_a,e_a)<=||C_a e_a||^2, then divide by the denominator >=1/(1+||C_a||^2). The upper bound is independent of a. In particular if j_a e_a tends weakly to zero globally, compactness of C implies ||C_a e_a||<=||C j_a e_a||->0, and eta_a->1. This implication is proved; weak escape itself is L02, not assumed. The coefficient cannot vanish with a for a fixed non-pi invertible phase, so naive operator-norm convergence of the zero-extended perturbed inverse to C is impossible for such a phase.

## 4. Phase zero and bounded reduced inverse

Let Q_a be as above and P=I-Q_a. D_0 has kernel span(v) and no additional zero eigenvectors by (3.1). For f perpendicular to v, the coefficient k in section 2 is zero, so C_a f belongs to Dom S. Subtracting its projection on v, which lies in Dom D_0, gives P C_a f in Dom D_0 intersect v^perp and D_0 P C_a f=f. Conversely D_0 maps its domain into v^perp by self-adjointness. Thus the inverse on the reducing complement of the zero eigenspace is P C_a P restricted to v^perp, compact and self-adjoint. Its extension by zero to H_a is the bounded reduced inverse (Moore–Penrose inverse) of D_0. No division by zero or interpretation of the diverging cotangent coefficient as a bounded phase-zero inverse is valid. This also proves zero is isolated in the phase-zero spectrum. A nonreal resolvent can be obtained from this reduced inverse and the explicit scalar action on v, but is not needed for this milestone.

## 5. Global embedding and next step

Use Pi_a=j_a j_a* for the global subspace projection and h_a=j_a e_a for the unit evaluation direction. For theta!=0 the zero extension of the local inverse to the global Hilbert space is exactly

    T_(a,theta)=Pi_a C Pi_a + eta_a cot(theta/2) (h_a tensor h_a),

where h tensor h means f-><f,h>h with inner product linear first. It is compact, with the extra zero eigenspace outside the local subspace; nonzero eigenvalues are the reciprocals of the corresponding nonzero local differentiation eigenvalues. Suzuki gives Pi_a C Pi_a->C in Hilbert–Schmidt norm. The perturbation is rank one but its norm generally does not go to zero. L02 should prove or disprove weak escape of h_a by testing the local evaluation F[u](0) on compactly supported approximations to the theta kernel whose samples vanish under RH. If weak escape holds, eta_a->1 by (L01.3), and a fixed non-pi phase has a nonvanishing escaped inverse eigenvalue candidate cot(theta/2). This last spectral consequence requires a proof (including resonance and rank shifts), reserved for L02/L03. No large-window arbitrary-phase spectral convergence is asserted yet.

## 6. Status

Imported statements were checked in the exact primary HTML in section 1. Boundary and coefficient identities were derived here; no source claims of novelty. Sign checked against small-window phase flow (positive cotangent for theta<pi) and reflection theta->2pi-theta, which negates D_theta's spectrum. The coefficient bound gives an independent check against a vanishing or sign-reversed rank-one term. No numerical or Lean computation performed. Codex's previously absent S04-W02 branch now exists, handoff blob aaf9db1c89b0b41eae9304caf8368c5436e82d9e, IN_PROGRESS with scope acknowledgment only; no audit result submitted or accepted. No human review or priority determination.
