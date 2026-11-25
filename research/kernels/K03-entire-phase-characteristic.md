# K03 — Common entire normalization and exact phase determinant identity

25 November 2026. Conditional on RH and Suzuki's local/global theorems, with the L01–L02 and K01–K02 candidate deductions. Internal derivation, not human review, formal verification or established originality.

## 1. Source conventions and common normalization

Actually retrieved and read this turn: Suzuki, *Spectral convergence associated with Weil's quadratic form*, arXiv:2610.32704v1, https://arxiv.org/html/2610.32704v1, Theorem 1.2 (1.3), §3.2 (3.3)–(3.4), Theorem 3.3 (3.5), §5.1 (5.1), and §5.2 (5.2)–(5.4). Also retrieved Suzuki, arXiv:2606.09096v4, https://arxiv.org/html/2606.09096v4, §7.9 (7.7)–(7.8), including its final paragraphs explicitly leaving the off-diagonal singularity and relation of boundary forms open. The October paper establishes the distinguished normalized characteristic, not the arbitrary-phase scalar limit below. Its §5.2 makes a further holomorphic normalization to obtain A/E; we do not equate our common scalar normalization with that one or with the global de Branges phase expression.

Retain K01 notation, inner product q linear first, u_z=A_a^-1 exp(-izx), v=u_0, M_a=||v||_q, e_a=v/M_a, C_a=D_(a,pi)^-1, P_a(z)=W(a,pi;z)/W(a,pi;0), and Delta=Delta_Gamma. Equation (3.3) is

    W(a,theta;z)=(z-i)J_a(-i,z)+exp(i theta)(z+i)J_a(i,z).

Set b_a=q(u_i,v)=q(u_-i,v), real and nonzero, so W(a,pi;0)=-2i b_a. (This b_a is the boundary pairing scalar of L01, not the inserted inverse scalar denoted b_a in L03.) With phi=theta/2 define the real entire normalized characteristic

    F_(a,theta)(z)=W(a,theta;z)/(2 exp(i phi) b_a).

This is a common nonvanishing normalization for all theta in [0,2pi], including theta=0; at theta=pi, F_(a,pi)=-P_a. At the seam F_(a,2pi)=-F_(a,0), which has the same zeros. The sign convention is chosen so the limiting linear factor is z cos(phi)-sin(phi).

K02 yields J_a(±i,z)/M_a^2 -> Delta(i)Delta(z) uniformly on complex compacts, because Delta is real even entire and Delta(i)=product_(gamma>0)(1+1/gamma^2)>0. In particular b_a/M_a^2 -> Delta(i). Substitution in (3.3) proves, uniformly over theta and z in every fixed complex compact K,

    F_(a,theta)(z) -> [z cos(theta/2)-sin(theta/2)] Delta(z).    (K03.1)

Here convergence with a varying phase means the supremum of the difference from the expression at the actual phase tends to zero. No limit phase need be chosen. The compact estimate holds also at z=0 and at all ordinates, without a local resolvent bound at a pole. By Cauchy estimates derivatives of each fixed order converge with the same uniformity. For fixed theta != pi the linear factor has precisely the additional zero tan(theta/2); theta=0 gives the exact zero at the origin. At pi it is a nonzero constant. This recovers the finite spectral multiset result of L03 by Rouche around isolated limiting zeros, including multiplicity two at collisions, and does not assume zeta zeros are simple. For moving theta tending to pi the extra finite zero disappears. Uniform convergence alone does not give a uniform reciprocal error bound or a resonance splitting rate.

## 2. Exact scalar resolvent factor and quadratic error

Write R_a(z)=(I-z C_a)^-1 off the local phase-pi spectrum, H_a=(I+C_a^2)^-1 (a bounded operator, not the local Hilbert space), r_a=q(H_a e_a,e_a)=1/eta_a, and

    m_a(z)=q(R_a(z)e_a,e_a).

Reflection anticommutes with C_a and fixes e_a, so q(C_a H_a e_a,e_a)=0 and m_a is even meromorphic. K01.1 gives u_±i=P_a(i) R_a(±i)v, P_a(i)>0 by the paired product (5.1). Thus b_a=M_a^2 P_a(i) r_a>0, and

    J_a(-i,z)=M_a^2 P_a(i)P_a(z) q(R_a(i) R_a(z)e_a,e_a),
    J_a( i,z)=M_a^2 P_a(i)P_a(z) q(R_a(-i)R_a(z)e_a,e_a).

The conjugation in the kernel is essential: the first evaluation at -i corresponds to the vector u_i; moving the adjoint of R_a(conj z) across the inner product produces R_a(z). The reality of P_a gives the displayed coefficients.

Since R_a(±i)=(I±i C_a)H_a, direct algebra in (3.3) yields

    F_(a,theta)(z)=eta_a P_a(z)
       q(H_a [(z cos(phi)-sin(phi))I+(z sin(phi)+cos(phi)) C_a]
                                      R_a(z)e_a,e_a).

The sin(phi) terms combine to -sin(phi) H_a because (I-z C_a)R_a(z)=I. The cos(phi) terms simplify using

    H_a(z I+C_a)R_a(z)=z R_a(z)+C_a H_a,

which follows by multiplying the right side by I-z C_a. The odd moment q(C_a H_a e_a,e_a) vanishes. Therefore the exact meromorphic-factor expression, with removable values at the local poles, is

    F_(a,theta)(z)=P_a(z)[eta_a z cos(phi) m_a(z)-sin(phi)].   (K03.2)

The expression is entire because P_a m_a has removable poles (or by K01). This also checks F_(a,pi)=-P_a and F_(a,0)=eta_a z P_a m_a. At z=0, m_a(0)=1, so F_(a,theta)(0)=-sin(phi) exactly; phase zero has derivative eta_a>0. The exact factor in (K03.2) agrees with L01: off local phase-pi poles the rank-one inverse perturbation has the spectral condition 1-z eta_a cot(phi) m_a(z)=0.

With d_a=||C_a e_a||_q ->0, L01 gives eta_a-1=O(d_a^2). Reflection and the resolvent identity give

    m_a(z)-1=z^2 q(R_a(z) C_a e_a,C_a e_a).

Indeed the linear term z q(C_a e_a,e_a) is zero. On compact sets avoiding Gamma the resolvents are uniformly bounded by K01, so this is O_K(d_a^2). For every disk choose a larger boundary circle avoiding Gamma and apply maximum modulus to the entire function P_a(z)(eta_a m_a(z)-1), with P_a bounded on that circle. Hence on every compact K, including ordinates,

    sup_(theta,z in K) |F_(a,theta)(z)
        -P_a(z)(z cos(phi)-sin(phi))| = O_K(d_a^2).      (K03.3)

The error relative to the limit additionally includes ||P_a-Delta||_K, for which the distinguished compression/product bounds apply. This is an absolute compact error, not a relative estimate near a zero. No rate in a for d_a is claimed.

For fixed theta different from 0 and pi with tau=tan(phi) not in Gamma, one may select a small disk about tau disjoint from Gamma. On that disk P_a is bounded away from zero for all sufficiently large a, and eta_a m_a(z)=1+O(d_a^2). The unique extra root t_* in the disk satisfies t_* eta_a m_a(t_*)=tau by (K03.2), so t_*-tau=O_theta(d_a^2), an improved scalar bound in the nonresonant case. No such claim at collision.

## 3. Regularized determinant identity including phase zero

Here use det_2(I+L) for the standard Hilbert–Schmidt regularized determinant, defined by the canonical product of (1+lambda)exp(-lambda) with eigenvalues counted algebraically, and its continuity in Hilbert–Schmidt norm (equivalently the Fredholm determinant of (I+L)exp(-L), a trace-class perturbation of I). This use is standard operator theory; the finite-dimensional algebra below proves the needed rank-one formula without assuming that C_a is trace class.

By Suzuki (5.1), the paired spectral product gives P_a(z)=det_2(I-z C_a), since opposite eigenvalues cancel the exponential factors. Let Q project orthogonally onto e_a in the local space, R=I-Q, K_a^loc=R C_a R, and b=eta_a cot(phi) for theta!=0 modulo 2pi. L01 gives D_(a,theta)^-1=C_a+b Q. In finite dimensions the ordinary determinant lemma gives det(I-z(C_a+b Q))=det(I-z C_a)(1-z b m_a(z)); the trace exponential in det_2 contributes exp(z b). To justify this in the local infinite-dimensional space, use a sequence of finite-dimensional orthogonal projections increasing strongly to I and containing e_a (and commuting with reflection, possible by choosing bases in the parity subspaces). Compress C_a with these projections; convergence in HS norm follows by finite-rank approximation, and the compressed resolvents converge in norm off the fixed local spectrum. Their rank-one perturbations converge in HS as well. Continuity of det_2 and the finite identity prove, off the poles and hence everywhere by removability,

    det_2(I-z D_(a,theta)^-1)
       = exp(z b) P_a(z)(1-z b m_a(z)).

Thus for invertible phases,

    F_(a,theta)(z)=-sin(phi) exp(-z b)
                         det_2(I-z D_(a,theta)^-1).     (K03.4)

The explicit exponential compensates the regularized determinant's linear factor; it is not an arbitrary fit. The phase-zero expression has a separate cofactor identity. On the same finite-dimensional spaces, reflection makes both C_a's compression and the compression to e_a^perp traceless (the diagonal scalar on e_a is zero). The ordinary determinant cofactor gives det(I-z C_a) m_a(z)=det(I-z K_a^loc), with the trivial eigenvalue on span(e_a) counted as the factor 1. Hence by the same HS approximation

    P_a(z) m_a(z)=det_2(I-z K_a^loc),
    F_(a,0)(z)=eta_a z det_2(I-z K_a^loc).              (K03.5)

The operator K_a^loc is exactly the reduced inverse from L01, extended by zero on the phase-zero kernel; no inverse at zero is claimed.

For fixed invertible theta, (K03.1), (K03.4) and eta_a->1 give

    det_2(I-z D_(a,theta)^-1)
        -> exp(z p)(1-z p) Delta(z), p=cot(phi),

locally uniformly, since sin(phi)!=0 for a fixed invertible phase. The same holds for phases with p_a->finite p, since their sine denominators stay bounded away from zero. At phase zero det_2(I-z K_a^loc)->Delta by (K03.5), eta_a->1 and removable division at z=0 (or by HS convergence of the global zero-extended reduced inverse). This is consistent with the block-decoupling proof of Campaign VII. No claim of convergence of det_2 for unbounded p_a without renormalization; the common F characteristic remains uniform even there.

## 4. Checks and scope

Internal algebra checks: at pi the result is exactly the negative normalized characteristic already proved by Suzuki; at 0 the derivative equals eta_a and the reduced determinant is even; reflection gives F_(a,2pi-theta)(z)=F_(a,theta)(-z), matching the signed spectrum. The correction term has the sign of z cos(phi) times eta_a m_a-1. For nonreal arguments the use of R_a(z), not R_a(conj z), after moving the adjoint is essential. No numerical experiment or Lean run. The primary source passages in section 1 were actually retrieved in this turn, not inferred from prior notes. The determinant mechanism is standard; any originality of the explicit phase normalization and quadratic estimate remains unestablished. The off-diagonal kernel and its microscopic layer are candidate answers to specific parts of v4 §7.9 under RH, not a resolution of the full boundary-form conjecture or RH itself.

Worker K02-W04 lookup returned 404 in this turn. Its audit remains assigned and unacknowledged; Campaign VII worker audit does not verify Campaign VIII. K04 should consolidate K01–K03, including the explicit determinant phase-zero normalization, the microscopic layer and the remaining mixed-kernel question, and choose the next bounded research direction on evidence rather than task proliferation. No external submission.
