# WPR01 — Exact weighted cross-edge energy and near-saturation intensity

2026-11-25. AI-assisted candidate deduction, without RH. Uses the actual arithmetic prime/pole operators and ordinary L2 boundary coordinates from PBC01–03, and the classical PNT checked there. No new source inspection, actual anomalous state, off-line zero, numerical experiment, independent proof verification or originality claim. The assertions about deep ordinary states are necessary conditions only.

## 1. Exact weighted edge measure

Let h(t)=exp(-t/2) for t>0. Use g_L(t)=f(-a+t), g_R(t)=f(a-t) on (0,a), zero extended, for f in L2(-a,a). Write v_L=g_L/h and v_R=g_R/h on (0,a). The normalized cross prime block of PBC01 is K_a, with shifts r_n=2a-log n. Define a finite positive symmetric measure on (0,a)^2:
    int F(t,s) dGamma_a(t,s)
      =sum_(n<=exp(2a)) exp(-2a) Lambda(n)
         int_(0<t<a, 0<r_n-t<a) F(t,r_n-t) dt.         (1)
It is supported on finitely many line segments; no density with respect to planar Lebesgue measure is claimed. The exact weight is
    exp(-a)Lambda(n)/sqrt(n) h(t)h(r_n-t)
      =exp(-2a)Lambda(n).
Its two marginals coincide and are h(t)^2 ell_a(t)dt, where for almost every t in (0,a),
    ell_a(t)=(K_a h)(t)/h(t)
             =[psi(exp(2a-t))-psi(exp(a-t))]/exp(2a-t). (2)
At the finitely many t at which a prime power is an interval endpoint, one may use one-sided sums instead; these points are null for the marginals. The classical PNT and Chebyshev bound yield
    ess sup_(0<t<a)|ell_a(t)-1| <= delta_a+C exp(-a)=o(1),
    delta_a=sup_(X>=exp a)|psi(X)/X-1|.
Indeed the upper endpoint X=exp(2a-t) is always >=exp a; the discarded lower sum is <=C X exp(-a). This is a two-sided row bound, stronger than just the upper weighted Schur bound.

Define the nonnegative cross-edge energy
    E_a(f)=int |v_L(t)-v_R(s)|^2 dGamma_a(t,s).
All integrals exist on L2 because of the marginal bound, even though v_L and v_R need not have a uniformly bounded unweighted L2 norm as a grows. Expanding the square gives the exact identity
    E_a(f)=int_0^a ell_a(t)(|g_L(t)|^2+|g_R(t)|^2)dt
                -2 Re <K_a g_R,g_L>_2.                (3)
The cross term is real by taking its real part; the equality uses the weight identity following (1). Thus for unit f,
    E_a(f)=1-exp(-a)<P_a f,f>+o(1),                  (4)
with o(1) uniform over all unit f: the same-half prime blocks are O(exp(-a/2)) and the row error is uniform. This is an arithmetic weighted square-difference identity, not a positivity assertion for the full Weil form.

## 2. Uniform transition limit on observables

For a bounded continuous test phi on [0,infinity), let
    B_a phi(s)=h(s)^(-2) int phi(t) dGamma_a(t,s)/ds
             =1/X sum_(X exp(-a)<n<X) Lambda(n) phi(log(X/n)),
    X=exp(2a-s), 0<s<a.                                 (5)
The notation on the first line means the Radon-Nikodym density of the measure obtained by integrating phi(t), which exists by the second marginal formula. Endpoint atoms can be handled by one-sided sums and do not affect essential suprema. Then
    ess sup_(0<s<a)|B_a phi(s)-int_0^infinity phi(t)exp(-t)dt| ->0.     (6)
Here the uniformity is over the moving full endpoint range, not only fixed s.

Proof: for fixed T>0 and a>T, the cumulative mass of 0<t<=T in (5) is [psi(X)-psi(X exp(-T))]/X up to endpoint atoms of size O(log X/X). Uniformly over X in [exp a,exp(2a)], the PNT gives the limit 1-exp(-T), since X exp(-T)>=exp(a-T)->infinity. A finite step approximation on a fixed compact t-range proves uniform convergence for continuous phi there. The tail t>T has mass <=psi(X exp(-T))/X<=C exp(-T) by Chebyshev, and the target density has tail exp(-T). Let T increase after the compact approximation. This proves (6), including the test phi=1. No total-variation convergence of the atomic conditional transition distributions is claimed.

Write m_L=||g_L||^2, m_R=||g_R||^2, with m_L+m_R=1 for unit f. By Cauchy-Schwarz on (1),
    |int phi(t)(|v_L(t)|^2-|v_R(s)|^2)dGamma_a|
       <= ||phi||_infty sqrt(E_a(f))
             [int (|v_L(t)|+|v_R(s)|)^2 dGamma_a]^(1/2)
       <= ||phi||_infty sqrt(2(1+o(1)) E_a(f)).
Using the marginal identity (2) for the first term and (5)-(6) for the second gives
    |int phi(t)|g_L(t)|^2dt - m_R int phi(t)exp(-t)dt|
       <= ||phi||_infty sqrt(2(1+o(1)) E_a(f))+o_phi(1).  (7)
The same bound interchanges L,R. All the o terms are uniform over unit f for each fixed phi. This controls intensity distributions rather than phases or norm convergence of wavefunctions.

## 3. Defect budget on deep ordinary subspaces

Write A_a=A_(alpha,a)-R_a, R_a=P_a-H_a, with H_a the pole operator. PBC02 proves exp(-a)||R_a||->1, while PBC03 shows that the endpoint coordinates of the ordinary spectral subspace Pi_a^-(c) for eigenvalues <=-c exp(a) are weakly null uniformly in unit vectors, for any fixed c>0. The normalized pole has the rank-two boundary limit C in operator norm. Since C is compact, this weak-null property gives
    sup_(f in ran Pi_a^-(c), ||f||=1) exp(-a)||H_a f|| ->0,
interpreted as zero when the subspace is trivial. To see uniformity, bound the norm of the limit rank-two block by the two fixed h-coordinate pairings (each tends uniformly to zero), and add the norm-convergence error.

The archimedean form differs from the positive logarithmic energy L(f) by a uniformly bounded ordinary form (alpha-w bounded). From q_a=q_alpha-<P_a f,f>+<H_a f,f> and (4), it follows uniformly on these unit deep subspaces that
    E_a(f)+exp(-a)L(f)=1+exp(-a)q_a(f,f)+o(1).         (8)
The two terms on the left are nonnegative. Thus for depths at least c exp(a), 0<c<=1, they satisfy the budget E_a(f)+exp(-a)L(f)<=1-c+o(1). This is meaningful even for c fixed away from one, but it does not force E_a to vanish then. For example (7) gives intensity discrepancy bounded by ||phi||_infty sqrt(2(1-c+o(1)))+o_phi(1). Also, by the cross norm bound,
    c-o(1)<=2 Re<K_a g_R,g_L><=2(1+o(1)) sqrt(m_L m_R),
so |m_L-m_R|<=sqrt(1-c^2+o(1)). No fixed c>1 can have a nonzero deep subspace for all sufficiently large a, by PBC02.

## 4. Universal near-saturating intensity, even for form trials

Suppose a sequence of windows a->infinity and unit form-domain vectors f_a satisfies
    -exp(-a) q_a(f_a,f_a) ->1.                           (9)
This is a hypothetical saturation sequence, not an assertion of existence. It need not consist of eigenvectors. Since q_alpha>=alpha(0), (9) and exp(-a)||R_a||->1 imply
    exp(-a)<R_a f_a,f_a>->1, exp(-a)q_alpha(f_a,f_a)->0.
The latter also gives exp(-a)L(f_a)->0. For the bounded self-adjoint scaled residual,
    ||(exp(-a)R_a-I)f_a||^2
       <= exp(-2a)||R_a||^2+1-2 exp(-a)<R_a f_a,f_a> ->0.
In the fixed boundary space U_a f_a, the residual tends strongly to zero on every fixed test by PBC02. The approximate eigenvector identity therefore forces U_a f_a to tend weakly to zero. The compact rank-two pole limit again gives exp(-a)||H_a f_a||->0. Equation (4) now gives E_a(f_a)->0.

Apply (7) with phi=1 to obtain m_L-m_R->0, hence both masses tend to 1/2. Apply it to every bounded continuous phi:
    |g_L(t)|^2 dt -> (1/2) exp(-t) dt,
    |g_R(t)|^2 dt -> (1/2) exp(-t) dt,                 (10)
weakly as finite measures on [0,infinity). This is a universal spatial INTENSITY profile for any ordinary form trial approaching the sharp coarse depth constant, not a strong wavefunction limit. In fact the wavefunctions themselves tend weakly to zero by the preceding argument. The probability density h^2=exp(-t) appears from the exact prime weight and PNT; no actual zero configuration is used. The same argument applies uniformly to subspaces all of whose unit vectors meet (9) uniformly, with matrix-element intensity convergence on finite orthonormal families following by polarization.

A necessary Fourier budget for (9) is exp(-a)L(f_a)->0. Hence for each fixed epsilon>0, the Fourier mass of f_a at |t|>=exp(epsilon exp(a)) tends to zero by the positive log-weight Markov inequality. On the other hand deep eigenstates lose their entire mass below PBC03's growing moderate-frequency cutoff. This leaves a wide intermediate range, not a contradiction.

WPR01 complete as candidate: exact weighted cross-edge energy, uniform PNT transition limit, deep-subspace log-energy/edge-defect budget, and universal exponential intensity at hypothetical saturation. WPR02 next: localize the small weighted edge energy to compare two prime reflections and obtain a rigorous Fourier coherence condition, taking care not to infer uniform high-frequency convergence of atomic transition measures. No actual anomalous state, RH proof, numerical verification or priority claim. README unchanged.
