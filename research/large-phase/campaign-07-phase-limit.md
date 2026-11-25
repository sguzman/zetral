# Arbitrary-phase spectral convergence for localized Weil differentiation

Candidate research note v0.1, 25 November 2026. AI-assisted research under human direction. Conditional on RH throughout. The local extension theory and distinguished-phase compression are Suzuki's; the additional phase limit below is an internally derived candidate, not an established originality claim or independently reviewed theorem.

## 1. Statement and setting

Assume RH. Use the distinct signed zero ordinates Gamma of the Riemann xi-function, with gamma_n the increasing positive ordinates and m_gamma the multiplicities. For the natural deficiency phase theta in [0,2pi), denote the local differentiation extension on H_a by D_(a,theta). As a increases, its limiting signed spectrum, counted locally with multiplicity on bounded intervals whose endpoints avoid the limiting set, is the candidate multiset

    Gamma multiset-union {tan(theta/2)},    theta != pi;
    Gamma,                                  theta = pi.

Each distinct ordinate contributes once, independently of its xi multiplicity. At a collision the limiting multiset has multiplicity two, although finite-window eigenvalues remain simple. Phase zero has an exact zero eigenvalue. This is not a proof of RH or a new construction independent of RH.

Use inner products linear in the first argument and F[u](z)=integral u(x)exp(izx)dx. By Suzuki [1], §2 and Theorem 3.3, the positive local Weil-form space H_a embeds isometrically via j_a into H=ell2(Gamma,m), compact tests mapping to their sample sequences. These embedded spaces increase with dense union. The diagonal global inverse C acts by 1/gamma and is Hilbert–Schmidt. With Pi_a=j_a j_a*, the distinguished inverse C_a=D_(a,pi)^-1=j_a* C j_a is bounded, compact, self-adjoint and injective, and B_a=Pi_a C Pi_a tends to C in Hilbert–Schmidt norm. These are imported RH-dependent results; the local Fourier transform must not be confused with the global model-space representative in [1] (2.12).

## 2. Exact inverse relation

Let S be the closed minimal differentiation operator, u_+=A_a^-1 exp(x), u_-=A_a^-1 exp(-x), v=A_a^-1 1, and w_theta=u_++exp(i theta)u_-. From [1] (3.1)–(3.3), Dom D_theta=Dom S direct sum span(w_theta), S*u_+=i u_+, S*u_-=-i u_-, ker S*=span(v), v in Dom D_0 but not Dom S. Reflection preserves the local norm and exchanges u_+,u_-. Put N=||u_+||_q^2=||u_-||_q^2 and b=q(u_+,v)=q(u_-,v), real. The phase-pi characteristic at zero is -2ib, nonzero. Define boundary pairing W(f,g)=q(S*f,g)-q(f,S*g). Writing w_0=u_++u_- and w_pi=u_+-u_-, we have W(v,w_pi)=2ib, W(w_0,w_pi)=4iN. Decompose v=g+d w_0 with g in Dom S; these identities give d=b/(2N).

For f in H_a write C_a f=h+k w_pi, h in Dom S. Then q(f,v)=W(C_a f,v)=2ib k. Every solution of S*x=f is C_a f+l v. The extension condition on deficiency coefficients is -k+ld=exp(i theta)(k+ld). For theta!=0 this gives ld=i cot(theta/2) k, hence

    D_(a,theta)^-1 f=C_a f+(N/b^2)cot(theta/2)q(f,v)v.

This constructs a bounded inverse on all H_a; injectivity follows because the only adjoint null direction belongs to D_0 and no other extension. Put e_a=v/||v||_q and let Q_a^loc project onto e_a. The perturbation is eta_a cot(theta/2)Q_a^loc, with eta_a=N||v||_q^2/b^2. To simplify, (I-i C_a)u_+ belongs to ker S*, hence u_+=lambda(I-i C_a)^-1 v for a nonzero scalar lambda. Reflection anticommutes with C_a and fixes v; thus q(C_a(I+C_a^2)^-1 v,v)=0. Set m=q((I+C_a^2)^-1 v,v)>0. Then b=lambda m and N=|lambda|^2 m. Since b is real,

    eta_a=1/q((I+C_a^2)^-1 e_a,e_a),
    1<=eta_a<=1+gamma_1^-2,
    eta_a-1<=(1+gamma_1^-2)||C_a e_a||^2.

The last bounds follow from spectral calculus and ||C_a||<=1/gamma_1. In particular the sign of the perturbation is the sign of cot(theta/2). This is an explicit instance of a standard rank-one self-adjoint extension mechanism.

At phase zero, for f perpendicular to v the coefficient k vanishes and C_a f belongs to Dom S. Subtract its projection onto v to solve D_0 x=f in v^perp. Hence the reduced inverse, extended by zero on the kernel, is (I-Q_a^loc)C_a(I-Q_a^loc). The exact simple zero is isolated, and the reduced inverse is compact.

## 3. Unbounded evaluation and weak escape

Let M_a=||v||_q, h_a=j_a e_a and Q_a the global projection onto h_a. The local Riesz identity q(u,v)=F[u](0) gives <j_a u,h_a>=F[u](0)/M_a. We prove M_a diverges using the undivided theta kernel, not a zero-cardinal function.

Use the classical even smooth Phi with F[Phi](z)=xi_0(1/2-iz), where xi_0=xi/2 in Suzuki's convention. See [3] (1.1)–(1.2) and the earlier theta-cardinal proof. Its samples at Gamma vanish, but F[Phi](0)>0. The theta series for x>0 is

    Phi(x)=sum_(k>=1) (4pi^2 k^4 exp(9x/2)-6pi k^2 exp(5x/2))
                              exp(-pi k^2 exp(2x)).

All terms are positive on x>0. With y=exp(2|x|), the series and its derivative give |Phi(x)|=O(y^(9/4)exp(-pi y)), |Phi'(x)|=O(y^(13/4)exp(-pi y)). Put X=exp(2a), use a smooth cutoff chi_a equal to 1 on |x|<=a-1/X and 0 on |x|>=a-1/(2X), derivative O(X). Define u_a=chi_a Phi and r_a=(1-chi_a)Phi. At the inner edge y>=X-2, so tail integration with dx=dy/(2y) and the product rule give

    ||r_a||_1=O(X^(5/4)exp(-pi X)),
    ||r_a'||_1=O(X^(9/4)exp(-pi X)).

For the full weighted sample sum use |F[u_a](gamma)|=|F[r_a](gamma)|<=min(||r_a||_1,||r_a'||_1/|gamma|). The Riemann–von Mangoldt estimate counts O(T log T) signed ordinates with multiplicity up to T, and dyadic summation bounds the weighted inverse-square tail beyond X by O(log X/X). Splitting at X gives

    ||j_a u_a||^2=O(X^(7/2)log X exp(-2pi X)).

Since F[u_a](0) tends to F[Phi](0)>0, Cauchy–Schwarz for local evaluation gives

    M_a >= c exp(pi X)/(X^(7/4)sqrt(log X))

for all large a, some c>0. This is a lower bound, not an asymptotic equivalent. On each fixed compact test, <j_a u,h_a> tends to zero; density and ||h_a||=1 extend this to all H. Thus h_a converges weakly, not strongly, to zero. Compactness of C implies ||C h_a||->0. From section 2, eta_a->1. The local physical Fourier evaluation at zero cannot extend as a bounded global sample-space functional; this does not contradict bounded evaluation of a model-space representative.

## 4. Block decoupling and spectral ordering

For invertible phases put p_a=cot(theta(a)/2), b_a=eta_a p_a. The zero-extended inverse T_a=B_a+b_a Q_a converges strongly to C when p_a is bounded. For fixed p, its operator and HS norm distance from C tends to |p|, by the reverse triangle inequality and ||Q_a||=||Q_a||_HS=1. Hence strong convergence alone is insufficient to identify the limiting eigenvalue multiset.

Let R_a=I-Q_a, K_a=R_a B_a R_a, d_a=||B_a h_a||<=||C h_a||->0. The decomposition B_a-K_a=Q_a B_a+R_a B_a Q_a gives both norm and HS error at most 2d_a. Thus K_a->C in HS norm and

    ||T_a-(K_a+b_a Q_a)|| <= 2d_a.

The second operator is block diagonal on h_a^perp direct sum span(h_a), with scalar b_a on the latter. This estimate is independent of the size of p_a. The phase-zero reduced inverse, zero extended, is K_a.

Let mu_n=1/gamma_n. For compact self-adjoint M write lambda_n^+(M) for the decreasing positive eigenvalue list padded by zero, and lambda_n^-(M)=lambda_n^+(-M). Signed min–max bounds the change in each entry by operator norm. Let I_n(mu;b) insert the scalar b if positive, otherwise leave the list unchanged. For n=1 this is max(mu_1,max(b,0)); for n>=2 it is max(mu_n,min(mu_(n-1),max(b,0))). These formulas are 1-Lipschitz in the list and scalar under sup norm. Hence, for epsilon=+1 or -1,

    |lambda_n^epsilon(T_a)-I_n(mu;epsilon*b_a)|
       <= 2d_a+||K_a-C|| =: E_a ->0.

This comparison is uniform in phase and index for the inverse eigenvalues, not for their reciprocals. If a positive comparison value u exceeds E_a, reciprocal error is at most E_a/[u(u-E_a)]. For p_a tending to finite p, b_a->p; insertion followed by reciprocation gives the signed limit in §1 for fixed phases and the corresponding moving-phase limit. If p>0 insert 1/p in the positive differentiation list; if p<0 insert 1/p on the negative side, ordered by magnitude. Beyond the insertion position the rank shifts by one on that side only. If p=0 no additional finite eigenvalue is present. A collision gives two consecutive local eigenvalues approaching the same ordinate, not a repeated local eigenvalue. Local counts on bounded intervals follow from fixed-index convergence and the fact that the limiting ordered magnitudes grow without bound.

For p_a tending to positive or negative infinity, use the actual b_a (do not assume |p_a||eta_a-1|->0). The leading inverse eigenvalue on that sign has magnitude |b_a|+O(E_a); the others converge to the shifted base list, and the opposite side to the unshifted list. The signed near-zero differentiation value is 1/b_a+O(E_a/b_a^2), so t_* p_a->1. At exactly phase zero the reduced inverse converges in norm and the simple zero stays exact. Sequences alternating exact zero phase and invertible near-zero phases have the same local multiset limit Gamma plus zero; positive-rank labels depend on which side approaches zero.

For fixed nonzero p away from spec(C), the scalar block is separated from the other block by a positive gap eventually. For a unit T_a eigenvector with eigenvalue tending to p, projecting the eigenvector equation to h_a^perp and using the uniform resolvent bound on that block shows its component there tends to zero. Thus the extra mode approaches h_a up to a unit complex scalar and escapes weakly. At resonance only the cluster multiplicity is established here, not a splitting rate or individual eigenvector limit. There is no extra eigenvector of the strong limit C.

## 5. Review status and research context

The algebra of L01–L03 was internally checked during consolidation: boundary signs and scalar inverse relation, even reflection, sample tail and weak escape, phase-zero complement, insertion and reciprocation. No new flaw identified in that pass. No numerical or formal check of Campaign VII. Worker L03-W03 has been assigned an independent adversarial proof/source audit, but branch lookup at L04 returned 404; no acknowledgment or findings. The earlier accepted S04-W02 audit concerns Campaign V only, not this theorem. No human review, numerical certificate or exhaustive priority assessment.

[1] Masatoshi Suzuki, Spectral convergence associated with Weil's quadratic form, arXiv:2610.32704v1, https://arxiv.org/html/2610.32704v1. Reopened at L04: introduction, Lemmas 3.1–3.2, Theorem 3.3, §5.2. Distinguished-phase convergence, inverse compression and normalized canonical product are established there under RH. The present note derives arbitrary-phase convergence using those imports.

[2] Masatoshi Suzuki, Weil's quadratic form via the screw function, arXiv:2606.09096v4, https://arxiv.org/html/2606.09096v4. Reopened at L04, §7.9 (7.7)–(7.8): the local reproducing kernels can become singular upon quotienting by globally null vectors; off-diagonal behavior and its relation to the boundary form are explicitly left open. L02 supplies the witness at zero; the precise normalized off-diagonal kernel is the next research target. This note does not claim to settle all of that open problem.

[3] J. C. Lagarias and D. Montague, The integral of the Riemann xi-function, arXiv:1106.4348v3, https://arxiv.org/abs/1106.4348, theta kernel import recorded in L02 and the earlier theta-cardinal proof; not re-opened in this consolidation turn.

Detailed derivations: L01-rank-one-inverse.md, L02-weak-escape.md and L03-ordered-spectral-limit.md. The unconditional small-window notes in Campaigns V and VI are separate from this RH-dependent result. No external submission.
