# PTI03 — Cross-prime noncommutation and the zero-gap weighted graph

2026-11-25. Internal candidate deductions without RH; no numerical run or independent verification. Uses PTI01–02, PBC03 and WPR02–03; no claim of a new arithmetic pointwise prime estimate.

## 1. The interval towers genuinely do not commute

Let 0<s<t<L=2a be logarithms of two distinct primes p,q, and let T_s be the compressed shift of PTI01. Same-direction shifts compose exactly, but for opposite directions
    [T_s,T_-t] f(x)=1_I(x+s-t)
       [1_I(x+s)-1_I(x-t)] f(x+s-t), x in I.
For x just to the right of -a+t-s, the final x+s-t is in I, x+s is in I (t<L), and x-t is outside I. Thus the coefficient is one on a nonempty interval. The tower commutator [K_p,K_q] is a finite sum of restricted translations with coefficients that are bounded measurable functions of x. At displacement s-t the coefficient is exactly r_p r_q times the displayed indicator difference: unique factorization implies no other signed pair of nonzero integer multiples of log p and log q has displacement s-t, including larger powers in either tower. Terms containing an identity commute. A unit L² test supported on a sufficiently short interval about a point just to the right of -a isolates this displacement on its shifted output interval; choose the support width less than every separation of the finitely many distinct displacements and less than the width of the region with coefficient one. All other displacement terms vanish there. Therefore
    ||[K_p,K_q]|| >= r_p r_q >0.
This applies even if s+t>L. On the full line the tower convolution operators commute. The obstruction is precisely the intermediate boundary restriction, not the Euler factor coefficient algebra. Inverting each tower preserves noncommutation of the two invertible operators. No simultaneous diagonalization or product-of-inverses formula is justified.

## 2. The exact weighted prime graph has only one zero mode in sufficiently wide windows

Let D=V_a-P_a>=0 be the bounded operator in PTI02, h=c/||c||. For L>=log 2+log 3, ker D=span h. Indeed D(f)=0 implies, from the nonnegative sum and the prime 2 and prime 3 weights,
    v(x+log 2)=v(x), v(x+log 3)=v(x)
where both arguments are in I and v=f/c, in the a.e. sense. The first identity represents v as the restriction of a log 2-periodic L²_loc function, constructed from its values on the first log 2 cell by finitely many translations (endpoints negligible). The second identity holds on the interval of length L-log 3>=log 2, hence for a complete period of the periodic representative, and so on the entire line a.e. In the Fourier series of this periodic function each coefficient indexed by m satisfies
    (exp(2pi i m log 3/log 2)-1) vhat(m)=0.
Unique factorization makes log 3/log 2 irrational; thus all nonzero Fourier modes vanish and v is constant. The same argument works for any two available primes with logarithms summing to <=L. Conversely D(h)=0 exactly. This is not irreducibility in the operator-norm gap sense.

## 3. No positive gap even after restricting to parity

For each fixed a, there are arbitrarily large omega with exp(i omega log n)->1 simultaneously for all finitely many shifts (PBC02 compact-torus recurrence). On the unit vectors f_omega=h exp(i omega x), PTI02 gives
    <D f_omega,f_omega> =
      sum c_n int_(x,x+s_n in I) h(x)h(x+s_n)
                  |1-exp(i omega s_n)|² dx ->0.
They converge weakly to zero by Riemann–Lebesgue. Since D is bounded positive, ||D f_omega||²<=||D||<D f_omega,f_omega>->0. Thus zero belongs to the essential spectrum despite the one-dimensional kernel in the large-window regime. Projecting away h leaves the same approximate null sequence; the projection coefficient tends to zero and D h=0. On real even and odd subspaces respectively take h cos(omega x), h sin(omega x); their norms tend to 1/sqrt 2 and their D energies tend to zero by expressing each as a combination of the two recurrent modulations (or direct difference estimates). Subtract the h component in the even sector. Therefore
    inf sigma(D restricted to h^perp and even)=0,
    inf sigma(D restricted to odd)=0
for every fixed window, also when the kernel may be larger. The rank-one positive kernel argument for the full continuous archimedean jump form in AJP01 cannot be applied to this atomic form. This identifies a specific obstacle to using PTI02's graph energy alone to prove a residual gap.

## 4. What the log penalty actually restores

Let F_R be full-line Fourier band projection, E zero extension. For any normalized f orthogonal to h, PBC03(2) gives, using the Fourier form of the compressed signed measure R_a=P_a-H_a,
    e^-a <P_a f,f> <= C eta_a(1+R)+ C ||(I-F_R) E f||²
for R>=1 and eta_a=delta_a+e^(-a/2). Indeed <H f,f>=-2|<sinh(x/2),f>|²<=0 under this orthogonality, and the residual symbol is bounded by C min(1,eta_a(1+|omega|)). With PTI02(1),
    e^-a D(f) >= 1-o(1)-C eta_a(1+R)-C ||(I-F_R) E f||².
Consequently a sequence of unit h-orthogonal vectors with D/e^a->0 must carry a fixed positive high-band Fourier mass for any R(a) with eta_a R(a)->0. The log moment L(f) is then at least c log R(a). This is a weak but unconditional lower cost in the complementary near-null graph sector; it is not an estimate of the high-frequency prime characteristic function. In fact for any f orthogonal to h and any R>=1,
    e^-a D(f)+C L(f)/log(2+R)
        >= 1-o(1)-C eta_a(1+R).
This follows by Markov's inequality for the log weight. For R=eta_a^-1/2 the right side tends to one, but the logarithm of that cutoff is only sublinear in a on the known PNT scale. The resulting cost does not reach exp(a) and hence cannot exclude the residual anomaly. No quantitative recurrence upper bound is used or claimed; the fixed-a Weyl sequences pay unbounded log energy at fixed a.

PTI03 complete as candidate: exact noncommutation, simple graph kernel for sufficiently wide windows but no graph gap even in parity, and explicit limited frequency-cost inequality. The full ordinary residual rate remains unresolved. README unchanged.
