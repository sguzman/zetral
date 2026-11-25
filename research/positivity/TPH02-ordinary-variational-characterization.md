# TPH02 — Exact bottom-scale variational characterization by attainable phase limits

2026-11-25. AI-assisted candidate deduction, without RH. Uses TPH01, FES01's exact tight partition of the Weil form and its aggregate carrier moments, PBC02's sharp coarse bound, and the classical PNT. No fresh source retrieval, numerical execution, independent verification, priority claim or actual nonreal zero. Source-provenance correction applies. The result concerns the ordinary L2 operator.

Define
    S=limsup_(a->infinity) exp(-a) N_1(a), 0<=S<=1,
and let V be the supremum over all attainable pairs (phi,tau) in TPH01 of max(0,||K_phi||-tau). The pair set is nonempty: take omega=a and extract a vague limit, with tau=0. TPH01 proves V<=S. We prove the reverse inequality.

## 1. Packet selection with an adjustable depth loss

If S=0 there is nothing to prove. Assume S>0 and select a_l->infinity with exp(-a_l)N_1(a_l)->S. Let f_l be a unit ordinary bottom eigenvector. Fix a support expansion h>0 and a penalty parameter delta>0 with 2delta<S. Put A_l=a_l+h. Use the exact convolution frame of FES01 with carrier centers pi n/h and moment p=2:
    g_n=P_n f_l, m_n=||g_n||^2,
    E_n=int (1+h|t-pi n/h|)^2 |Fg_n(t)|^2 dt/(2pi).
Then sum m_n=1, sum q_(A_l)(g_n)=-N_1(a_l), sum E_n<=C_2. The support is contained in (-A_l,A_l) and the outputs are smooth. Set the positive penalty p_l=delta exp(a_l)/C_2. The weighted average identity implies a nonzero packet with
    [q_(A_l)(g_n)+p_l E_n]/m_n <= -N_1(a_l)+2delta exp(a_l).
To justify selection even if an infimum is not attained, the weighted average is <=-N_1+delta exp(a_l), strictly below the displayed threshold; otherwise every term of positive mass would exceed it. Let v_l=g_n/sqrt(m_n) and denote its Fourier center by omega'_l. Then
    q_(A_l)(v_l)<=-N_1(a_l)+2delta exp(a_l),               (1)
    E_n/m_n <= C_2 [N_1(A_l)-N_1(a_l)+2delta exp(a_l)]/[delta exp(a_l)].
The second estimate uses q_(A_l)(v_l)>=-N_1(A_l). PBC02 gives N_1(A_l)<=C exp(A_l) for large l; hence the normalized second carrier moment is bounded independently of l for fixed h,delta. No need for a ratio of negative depths, a lower bound on individual packet masses or preservation of fast-zero constraints.

Use physical modulation M_omega=exp(i omega x); the Fourier transform convention of the project is Ff(t)=int f(x)exp(itx)dx. Thus set omega_l=-omega'_l and let u_l=M_omega_l* v_l. Its Fourier center is zero, and the preceding moment estimate yields
    ||u_l||_2=1, ||u_l||_(H1(R))<=C_(h,delta),
with zero extension from (-A_l,A_l). In particular its log energy is uniformly bounded. The elementary log estimate in TPH01 gives the exact asymptotic carrier cost on these varying unit envelopes:
    q_alpha(v_l,v_l)=log(2+|omega_l|)+O_(h,delta)(1).    (2)
The uniform boundedness of the normalized arithmetic residual and (1)-(2) imply exp(-A_l)log(2+|omega_l|) is bounded, since q_(A_l)(v_l)<=0 eventually. After subsequence extraction it tends to some tau>=0.

## 2. Strong local compactness suffices

Let G_l=U_(A_l)u_l in the two-half-line space, where each component is zero extended beyond A_l. These vectors have norm one. On each fixed (0,R), for A_l>R, their H1 norms are bounded uniformly in l by the full-line bound just established. Rellich compactness on bounded intervals (equivalently here the elementary H1 equicontinuity bound plus Arzela-Ascoli) yields strong L2 convergence on (0,R) along a diagonal subsequence. Also take a weakly convergent subsequence in the full endpoint Hilbert space; the two limits agree locally. Write G for this limit. It has ||G||<=1; we do not claim tightness of the full packet mass or strong global convergence. The restriction at the midpoint need not be in global half-line H1; only local compactness on fixed endpoint ranges was used.

Extract a twisted vague limit phi for the sequence (A_l,omega_l) by TPH01. Let B_l be the normalized modulated prime operator in the endpoint space. It converges strongly to D_phi, and its norm is bounded. Moreover the uniform tail estimate of TPH01 gives
    ||B_l - Q_R B_l Q_R|| <= C exp(-R/2)+o_l(1),
where Q_R cuts both components to (0,R). For any fixed R, strong convergence of B_l, strong local convergence Q_R G_l->Q_R G and uniform operator bounds imply convergence of the compressed quadratic expectation. Then let R increase, using the tail bound and boundedness of the unit vectors. The limit is
    <B_l G_l,G_l> -> <D_phi G,G>.                       (3)
Mass escaping toward the midpoint can only lower the maximum achievable arithmetic gain; it cannot be silently identified with mass of G.

## 3. Bounded carriers cancel, unbounded carriers lose the pole

If a subsequence omega_l remains bounded, pass to omega_l->omega_0 and to a limit of exp(2i A_l omega_l). As in TPH01, the prime and pole have identical modulated strong endpoint limits. For the pole the corresponding expectation convergence on G_l follows from the same local compactness argument (the pole has uniform tails). Thus the normalized residual expectation tends to zero. Equation (2) gives normalized archimedean expectation zero as well. This contradicts (1), which forces normalized negative depth at least exp(-h)(S-2delta)>0 eventually in the limit. Therefore a realizing subsequence must have |omega_l|->infinity.

In that case, the normalized unmodulated pole is norm-close to a fixed finite-rank endpoint block with cross kernel exp(-(t+s)/2). In its expectation on the physical modulated vector, the endpoint pairings with h_0(t)=exp(-t/2) vanish: on (0,R) replace G_l by G in L2, then use Riemann-Lebesgue for the L1 product of the fixed truncated G and h_0 against exp(±i omega_l t); outside R use the small L2 tail of h_0 and the unit vector bound. Constant endpoint phases do not affect this conclusion. Thus
    exp(-A_l)<H_(A_l) v_l,v_l> ->0.
Equations (2)-(3) now give a limit for the full normalized depth of the packet:
    -exp(-A_l) q_(A_l)(v_l,v_l) -> <D_phi G,G>-tau.
The pair (phi,tau) is attainable by definition (with windows A_l, not a_l). Since ||G||<=1, this depth is <=||K_phi||-tau. Positivity of its lower bound from (1) ensures that the latter expression is positive; no normalization of a potentially vanishing G is needed.

## 4. Equality

For every fixed h>0 and 0<2delta<S, the construction gives
    exp(-h)(S-2delta) <= ||K_phi||-tau <= V.
The subsequence and pair may depend on h and delta. Taking the numerical inequalities first and only then letting h,delta decrease to zero yields S<=V, without claiming that the packet estimates are uniform as h,delta->0. Together with TPH01:
    limsup_(a->infinity) exp(-a) N_1(a)
       = sup_(attainable (phi,tau)) (||K_phi||-tau)_+.     (4)

This is an exact candidate variational characterization of the bottom ordinary spectral coefficient at the largest arithmetic scale. It uses no actual zero positions, off-line-set assumption, deviation gap or additional local zero density. It is not yet an evaluated coefficient: the attainable set is a high-frequency arithmetic problem. In particular a zero coefficient does not itself imply RH or give a smaller exponential rate. The packet selection is bottom-only; it supplies no matching higher-index upper bound.

TPH02 complete as internal candidate. TPH03 will examine the structure and compactness of attainable limits, the norm-one condition and what they imply about the arithmetic obstruction. README unchanged.
