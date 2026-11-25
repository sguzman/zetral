# L02 — Unbounded local evaluation and weak escape

25 November 2026. Conditional on RH and the published Suzuki sampling and distinguished-phase compression theorems. Internal candidate derivation, not independent human review, formal verification, or established originality. The theta kernel is classical; the purpose is to understand the escaping rank-one direction in L01.

## 1. Setting and verified imports

Reopened the primary HTML of Suzuki, arXiv:2610.32704v1, https://arxiv.org/html/2610.32704v1, especially (2.8), (2.9), (2.12), Theorem 3.3 (3.5), and the Hilbert–Schmidt compression convergence in §4. Under RH, the global Hilbert space H is the weighted sample space ell2(Gamma,m), with distinct signed ordinates Gamma and multiplicities m. The local form norm q_a on compact tests is the squared sample norm, and j_a embeds the local space isometrically; the embedded subspaces increase with a and their union is dense. Write Pi_a=j_a j_a*, C the global compact self-adjoint diagonal operator with entries 1/gamma, C_a=j_a* C j_a=D_(a,pi)^-1, and B_a=Pi_a C Pi_a. Then B_a->C in Hilbert–Schmidt norm.

The local evaluation at zero on H_a has representer v_a=A_a^-1 1: q_a(u,v_a)=F[u](0), F[u](z)=integral u(x)exp(izx)dx. Let M_a=||v_a||_(q_a)>0, h_a=j_a v_a/M_a and Q_a the orthogonal projection onto h_a in H. On each fixed compact test, its evaluation F[u](0) is independent of the window once the support is included. This is the actual Fourier transform of the local test, not the model-space representative of its global sample class in (2.12). The latter has a different bounded evaluation theory.

## 2. An explicit vanishing-sample witness

Reopened Lagarias–Montague, arXiv:1106.4348v3, https://arxiv.org/html/1106.4348v3, (1.1)–(1.2). In its normalization A_0(z)=xi_0(1/2-iz), with xi_0(s)=s(s-1)pi^(-s/2)Gamma(s/2)zeta(s)/2. Its even smooth real inverse Fourier kernel Phi has, for x>0,

    Phi(x)=sum_(k>=1) [4pi^2 k^4 exp(9x/2)-6pi k^2 exp(5x/2)] exp(-pi k^2 exp(2x)).

Thus F[Phi]=A_0, which has precisely the same zeros as Suzuki's A=2A_0. In particular every sampled value F[Phi](gamma) is zero. Also F[Phi](0)=A_0(0)>0: each summand is positive for x>0 since 2pi k^2 exp(2x)>3. Smoothness follows from the classical theta transformation at zero, as used in the earlier theta-cardinal note. No individual zero ordinate or its derivative is required in the witness.

For y=exp(2|x|)>=1 the series and its termwise derivative away from zero imply

    |Phi(x)|<=K y^(9/4) exp(-pi y),
    |Phi'(x)|<=K' y^(13/4) exp(-pi y).

Indeed each differentiation of a summand gives at most an extra power of y and k^2, and the remaining k-sum after factoring exp(-pi y) converges uniformly for y>=1. Use X=exp(2a), h=1/X and the smooth cutoff chi_a from research/theta-cardinal-bound.md, equal to one on |x|<=a-h and zero for |x|>=a-h/2, |chi_a'|<=K/h. Let u_a=chi_a Phi in C_c^infty(-a,a), r_a=(1-chi_a)Phi. At the inner edge y=X exp(-2/X)>=X-2 and comparable to X. The tail lemma of the earlier note (substitute y and use the integrable exponential tail) gives

    ||r_a||_1=O(X^(5/4) exp(-pi X)),
    ||r_a'||_1=O(X^(9/4) exp(-pi X)).

For the second bound apply the product rule: the derivative tail loses one power on integration, while the cutoff derivative times the strip length is bounded and the maximum Phi on the strips is O(X^(9/4)exp(-pi X)). The bounds apply to both half-lines. They show F[u_a](0)=A_0(0)+O(X^(5/4)exp(-pi X)), bounded away from zero eventually.

Since F[u_a](gamma)=-F[r_a](gamma), integration by parts yields

    |F[u_a](gamma)|<=min(||r_a||_1, ||r_a'||_1/|gamma|).

Already sum m_gamma/gamma^2<infinity gives q_a(u_a,u_a)->0. A sharper bound uses the classical Riemann–von Mangoldt counting estimate N_*(T)=sum_(|gamma|<=T) m_gamma=O(T log T), and dyadic summation gives sum_(|gamma|>X) m_gamma/gamma^2=O(log X/X). Splitting the full weighted sum at X yields

    ||j_a u_a||^2 <= N_*(X)||r_a||_1^2
                    + ||r_a'||_1^2 sum_(|gamma|>X) m_gamma/gamma^2
                  = O(X^(7/2) log X exp(-2pi X)).            (L02.1)

The two powers are X^1 X^(5/2) and X^(9/2)/X. This is the undivided theta kernel, not the earlier zero-cardinal witness. The use of RH is in the real weighted sample norm, not in the classical kernel. The full Phi is not asserted to be an element of a local space or to have nonzero norm in the global completion. Only compact smooth truncations are used.

By Riesz representation and Cauchy–Schwarz,

    M_a>= |F[u_a](0)|/||j_a u_a||
        >= K_0 exp(pi X)/(X^(7/4) sqrt(log X))              (L02.2)

for sufficiently large a and some positive constant K_0. The local norm of u_a is nonzero by positive local coercivity under RH and its nonzero integral. This is a lower bound only, not an asymptotic equivalent, computable optimal constant or uniform coercivity estimate. In particular evaluation of the local Fourier transform at zero is unbounded on the dense global test subspace in the sample norm. It cannot extend as a bounded functional to H.

## 3. Weak escape and the coefficient limit

For each fixed compact test u and all sufficiently large a,

    <j_a u,h_a>_H=F[u](0)/M_a ->0.

The test embeddings are dense in H by (2.9), and ||h_a||=1. Approximation by a fixed test and Cauchy–Schwarz extend this convergence to every f in H. Thus h_a converges weakly to zero as a->infinity. It does not converge strongly, since its norm remains one. Q_a f=<f,h_a>h_a ->0 in norm for each fixed f, so Q_a->0 strongly but ||Q_a||=1. This is the precise sense in which the evaluation direction escapes.

The compactness of C now gives ||C h_a||->0 (compact operators map weakly convergent bounded sequences to norm convergent sequences; equivalently approximate C by finite rank operators). Because j_a is an isometry and h_a belongs to its range, ||C_a e_a||=||Pi_a C h_a||<=||C h_a||, where e_a=v_a/M_a. L01.3 then proves

    eta_a -> 1,  0<=eta_a-1<=(1+gamma_1^-2)||C h_a||^2.     (L02.3)

We do not infer a quantitative rate for ||C h_a|| from the lower bound (L02.2) alone. The weak convergence on individual test functions has a rate depending on the test, and density without quantitative approximation does not transfer it uniformly to the whole unit ball.

For fixed theta!=0 modulo 2pi put p=cot(theta/2). L01 gives T_(a,theta)=B_a+eta_a p Q_a. It follows that T_(a,theta)->C strongly, whereas

    ||T_(a,theta)-C|| -> |p|,
    ||T_(a,theta)-C||_HS -> |p|.

Both follow by the triangle and reverse triangle inequalities since B_a->C in Hilbert–Schmidt norm, eta_a->1 and Q_a has both norms one. Thus strong convergence by itself does not guarantee convergence of every eigenvalue with multiplicity. For varying p_a bounded the same norm and HS difference equal |p_a|+o(1), and strong convergence persists. No strong convergence for arbitrary unbounded p_a is inferred.

## 4. Block decoupling: quantitative comparison before ordering

Define R_a=I-Q_a, K_a=R_a B_a R_a, so K_a acts by zero on h_a and as a compact self-adjoint operator on h_a^perp. Write d_a=||B_a h_a||<=||C h_a||->0. Then

    ||B_a-K_a|| <= 2 d_a,
    ||B_a-K_a||_HS <= 2 d_a,

by B_a-K_a=Q_a B_a+R_a B_a Q_a, each summand rank at most one, with norm and HS norm bounded by d_a. Consequently K_a->C in HS norm. On H=h_a^perp direct sum span(h_a),

    Z_(a,theta)=K_a+p Q_a = (K_a restricted to h_a^perp) direct sum [p].

Its difference from T_(a,theta) satisfies, in either norm,

    ||T_(a,theta)-Z_(a,theta)|| <= 2 d_a+|p| |eta_a-1| ->0.  (L02.4)

For bounded moving phases the same estimate holds uniformly in p. For unbounded p_a one can instead compare to K_a+eta_a p_a Q_a with error <=2d_a, avoiding multiplication by a growing coefficient. At phase zero the zero-extended reduced inverse from L01 is exactly K_a and therefore converges to C even in HS norm; the actual differentiation operator still has its exact zero eigenvalue.

The approximate block is a direct sum with a one-dimensional scalar. It is not a norm limit on a fixed decomposition because h_a changes. But its nonzero spectrum can be compared by signed min–max: the positive/negative eigenvalues of K_a on h_a^perp are exactly the corresponding nonzero eigenvalues of K_a on H, so they approach those of C by its norm convergence. Inserting the scalar p into the appropriate signed list and controlling the difference (L02.4) is the route to ordered arbitrary-phase convergence, including collisions with a global inverse eigenvalue. Reserve the full indexed spectral statement, reciprocal conversion, resonance and moving-phase cases for L03. This comparison already identifies the source of the extra mode; there is no claim that the strong operator limit C itself has an additional eigenvector.

## 5. Integrity and scope

Sources actually inspected in this turn: Suzuki October v1 (2.8),(2.9),(2.12), Thm 3.3 and §4; Lagarias–Montague v3 (1.1),(1.2). The earlier repository theta-cardinal tail proof was fetched directly; the full counting bound uses the classical Riemann–von Mangoldt estimate. No exhaustive priority search or new numerical/Lean computation. The standard compactness and rank-one block estimates are not themselves originality claims. The independent Codex S04-W02 handoff remains IN_PROGRESS, same blob aaf9db1c89b0b41eae9304caf8368c5436e82d9e; no audit findings submitted. The result is conditional on RH; no RH proof, independent human review or practical interval certificate.

Next L03: apply signed min–max to the block comparison, explicitly handle the inserted scalar and resonance multiplicity in inverse space, reciprocal ordering and theta=0. Explore moving phases p_a->0 or finite p or unbounded p_a using the appropriate block estimate; derive finite-window inequalities with actual error terms. Distinguish convergence of eigenvalues from convergence of the corresponding directions. Compare relevant prior phase-dependent literature before claiming novelty.
