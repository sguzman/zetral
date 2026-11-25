# DZO02 — Quantile-discretized zero system with prescribed anomalous ordinary rate

2026-11-25. AI-assisted candidate construction of a fixed ABSTRACT zero system. No actual off-line zeta zero, RH proof, numerical execution, independent verification or priority claim. Uses DZO01's fixed positive densities and explicit long-shift form. Fix 0<b<1/2 and s in (2b,1], with kappa=s-2b.

## 1. Quantiles give a fixed discrete symmetric multiset

For each of the two positive-half-line densities r_0 and r_off/2 of DZO01, let M(t) be its continuous cumulative mass on [0,t]. It is unbounded: for r_0 this follows from r_0>=beta/2; for r_off it follows from the contributions of the successive disjoint carrier neighborhoods, each of mass >=c L_l because 1+eta cos>=1-eta>0. Define quantile nodes
    x_n=inf{t>=0: M(t)>=n-1/2}, n>=1.
They are positive, distinct, locally finite, with count floor(M(T)+1/2) up to T (including endpoint atoms). This follows from continuity, monotonicity and unboundedness of M, even if some density has intervals of zero mass. Reflect each positive node to its negative. Use the r_0 nodes as real ordinates, and for the r_off/2 nodes put both complex ordinates u+ib and u-ib at each signed u, with multiplicity one. The resulting multiset Gamma is fixed, invariant under reflection and conjugation, with all nonreal deviations exactly b. There is no real-ordinate zero u=0. All complex nodes are simple; a coincidence of a real node and a nonreal node's horizontal coordinate does not identify their complex positions.

For each horizontal line the cumulative discrepancy of its discrete counting measure from the corresponding continuous density is bounded by a universal constant on both half-lines. In particular the total positive-ordinate count differs from the continuous total count by O(1), and the off-line count does too. DZO01 thus gives, as T->infinity,
    N_Gamma(T)=T/(2pi) log(T/(2pi))-T/(2pi)+O(log(2+T)),
    N_Gamma,off(T)=O(log(2+T)).
The local count over every unit horizontal interval is O(log(2+|u|)), by subtracting the two cumulative discrepancies and using the continuous density bound. These are the count shapes of interest, not an assertion that Gamma is an actual zeta multiset. It contains infinitely many nonreal nodes but their global number grows only logarithmically.

## 2. Ordinary-norm quantile error on all support-constrained trials

For smooth compact f,g supported in (-a,a), and each fixed d in {0,+b,-b}, define
    G_d(u)=Ff(u+id) conj(Fg(u-id)).
It and its derivative decay rapidly in u. Integration by parts against the bounded cumulative discrepancy on each half-line bounds the quadrature error by C int_R |G_d'(u)|du. For example choose the signed primitive from zero on the two half-lines; its distributional derivative is precisely the difference measure, it is bounded, and boundary terms vanish at infinity. At zero the cumulative primitive can be taken zero because neither density nor quantile measure has an atom there. The same bound holds when the half-lines are reflected.

By Plancherel,
    ||Ff(.+id)||_2 <= sqrt(2pi) exp(a|d|)||f||_2,
    ||(Ff)'(.+id)||_2 <= sqrt(2pi) a exp(a|d|)||f||_2,
and likewise for g and the conjugate shift. Leibniz and ordinary Cauchy-Schwarz therefore give
    int |G_d'| <= 4pi a exp(2a|d|)||f||_2||g||_2.
The discrete paired form
    q_Gamma,a(f,g)=sum_(z in Gamma) Ff(z) conj(Fg(conj z))
is absolutely convergent on compact smooth tests by their strip decay and the local count. Summing the three horizontal errors yields
    |q_Gamma,a(f,g)-q_cont,a(f,g)|
          <= C a exp(2ba)||f||_2||g||_2.              (1)
This bound does not depend on carrier height or on derivatives of the chosen trial functions beyond their physical support. It is an ordinary bounded form difference, not a log-relative estimate. In particular it is strictly lower exponential order than exp(sa).

By DZO01(3), q_Gamma is the ordinary log reference form plus a bounded Hermitian form on each support window. Taking the closure of the compact smooth core in the support-constrained logarithmic Fourier norm gives a closed semibounded form on that same domain, with a unique representing self-adjoint operator. The inclusion of this domain into L2(-a,a) is compact: the high-frequency tail is uniformly small on its log-norm unit ball, and the restriction of each fixed low-frequency projection to the finite physical interval is Hilbert-Schmidt. Thus the operator has compact resolvent. We define N_Gamma(a) as its bottom negative depth, zero padded. Equations (1) and DZO01(3) give N_Gamma(a)<=C exp(sa) for a>=1, since a exp(2ba)<=C_s,b exp(sa). The forms are compatible under support inclusion because they agree with the same global paired test formula before taking closures; the domain inclusions follow by zero extension of the log-form core.

## 3. Matching lower rate on a fixed realizing sequence

Let g be a fixed real nonnegative compact smooth function supported in (-r,r) with ordinary norm one, where r is the fixed parameter of DZO01. Use the already fixed a_l,k_l,T_l,L_l of that note. Put
    f_l^0(x)=[g(x+k_l/2)-g(x-k_l/2)]/sqrt(2),
    f_l(x)=exp(-i T_l x) f_l^0(x).
For sufficiently large l the two supports are disjoint and lie strictly inside (-a_l,a_l), because k_l/2=a_l-2r. Both vectors have norm one. The autocorrelation h_l of f_l is exp(-i T_l v) h_l^0(v), where
    h_l^0(v)=h_g(v)-[h_g(v+k_l)+h_g(v-k_l)]/2,
    h_g(v)=int g(y+v)g(y)dy.
The support of h_l^0 is confined to the three intervals of radius 2r about 0 and +/-k_l. By the choice of separated k_l, no band about +/-k_j with j!=l can contribute in DZO01(2), regardless of its carrier. On the bands about +/-k_l, h_l^0(v)=-h_g(v∓k_l)/2, respectively.

For the positive carrier sigma=+1 of the lth term, the phase exp(i T_l v) cancels the modulation exp(-i T_l v) exactly. Both bands then contribute
    - (eps eta L_l/2) cosh(b k_l) J,
    J=int_R Fp(t) h_g(t) cosh(bt) dt>0.               (2)
Indeed each band has a factor 1/2 from the cosine transform and -1/2 from the shifted correlation. Evenness of Fp and h_g makes the two cosh integrals identical after reflection; their sinh parts integrate to zero. The constant J is positive: Fp=2pi psi*psi is nonnegative and positive at zero, h_g is nonnegative and equals one at zero, and both are continuous. Thus their product has positive integral.

For the negative carrier sigma=-1 of that same lth term, the residual phase is exp(-2i T_l v). After v=+/-k_l+t, the remaining smooth compact envelope and its first derivative are bounded in L1 by C exp(b k_l). Integration by parts gives a contribution O(L_l exp(b k_l)/T_l), hence o(exp(s a_l)). The fact that k_l changes with l introduces only constant unit phases and the explicitly bounded cosh factors; no derivative of the carrier phases other than the one used for integration by parts is hidden here.

The reference form of f_l equals L_l+O(1). Indeed its reference symbol is log(2+|u|/(2pi)), differing from log(2+|u|) by a bounded function. Translation of the fixed envelope leaves its log energy invariant, and the sum of two translates has uniformly bounded log energy by the triangle inequality in that norm. The log-shift inequality then bounds the difference from log(2+|T_l|)=L_l+o(1) after modulation by a uniform constant. Since kappa=s-2b<s, this positive term is o(exp(s a_l)). The quantile error (1) is also o(exp(s a_l)) because 2b<s.

Combining (2) with L_l=exp(kappa a_l) and k_l=2a_l-4r proves the explicit trial limit
    -exp(-s a_l) q_Gamma,a_l(f_l) -> (eps eta J/4) exp(-4br)>0.
Hence
    limsup_(a->infinity) a^-1 log(1+N_Gamma(a))=s.     (3)
The upper bound came from the actual ordinary form norm estimate, so (3) concerns a single compact-resolvent ordinary spectral family on expanding intervals, not a succession of unrelated abstract matrices or a regularized metric. We assert only the limsup rate; an all-window lower rate s is not proved. The zero-deviation supremum of this fixed system is b, so (3) is genuinely larger than twice that supremum.

DZO02 completes a fixed discrete obstruction: classical main count, globally logarithmic off-line population, integer multiplicities, and a rigorously specified candidate ordinary anomalous rate anywhere in (2b,1]. DZO03 will check its local analytic projection identities, fractional signed-discrepancy bounds, and entire-product realization. It deliberately lacks the arithmetic Euler product and is NOT a counterexample to RH. No numerical experiment or independent proof verification. README unchanged.
