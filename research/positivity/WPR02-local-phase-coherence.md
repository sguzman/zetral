# WPR02 — Local translation rigidity forces prime-phase coherence

2026-11-25. AI-assisted candidate deduction, without RH. Uses WPR01's exact weighted edge energy and intensity, PBC03's quantitative band-restricted residual estimate and LBS01's log-energy multiplier estimate. No actual saturating ordinary state, actual off-line zero, numerical experiment, fresh literature inspection, independent proof verification or priority claim. This is a necessary condition for the sharp normalized ordinary depth to be approached, not a construction of such a state.

Assume hypothetically a sequence of windows a->infinity and unit form-domain trials f_a with
    -exp(-a) q_a(f_a,f_a)->1.                              (1)
Write the boundary profiles g_L,g_R, their ratios v_L=g_L/h,v_R=g_R/h with h(s)=exp(-s/2), and weighted edge energy E_a=E_a(f_a) as in WPR01. Then E_a->0, exp(-a)L(f_a)->0, and each boundary intensity converges weakly to (1/2)exp(-s)ds. The proof below does not require the trials to be eigenvectors.

## 1. Comparing two nearby prime reflections

Fix a smooth nonzero real cutoff chi supported inside (2.3,2.7), independent of a, and set w_a(s)=chi(s)v_R(s), zero extended on R. For all sufficiently large a this is well defined. The intensity conclusion WPR01(10) gives
    ||w_a||_2^2 -> (1/2) int |chi(s)|^2 ds >0.            (2)
Indeed |chi|^2 exp(s) is a fixed bounded continuous compact test of the right intensity.

For 0<ell<=1/10 let J=[4,4+ell] be an interval of prime reflection parameters r_n=2a-log n. Put
    M_(a,J)=exp(-2a) sum_(r_n in J) Lambda(n).
When the mass is positive, let pi_(a,J) assign probability weight exp(-2a)Lambda(n)/M_(a,J) to r_n in J, including prime powers. For two parameters r,r' from this interval, put Delta=r'-r, |Delta|<=ell. If chi(s+Delta) or chi(s) is nonzero, both s and s+Delta are in a fixed compact subset of (2,3), and t=r-s and r'-t are positive and bounded independently of a. The two reflections have the same left coordinate t.

Decompose
    w_a(s+Delta)-w_a(s)
       =chi(s+Delta)[v_R(s+Delta)-v_R(s)]
        +[chi(s+Delta)-chi(s)]v_R(s).
For the first term, the difference v_R(r'-t)-v_R(r-t) is the sum of the two differences via v_L(t). Integrate its square on the relevant t-range and use |x+y|^2<=2(|x|^2+|y|^2). All the resulting squared integrals are subintegrals of the weighted edge energy over the corresponding r or r' segment. Averaging independently over pi in r and r' thus bounds their total by C_chi E_a/M_(a,J). For the second term the uniform Lipschitz bound of chi gives C_chi ell^2 times the L2 norm squared of v_R on a fixed compact interval. That local norm is bounded by exp(3)||g_R||^2<=exp(3). Consequently
    int int ||w_a(.+r'-r)-w_a||_2^2 d pi(r)d pi(r')
       <= C_chi [E_a/M_(a,J)+ell^2].                    (3)
Every difference is localized before integrating, so no invariance of the zero extension at physical boundaries is presumed.

By Plancherel, (3) is equivalently a Fourier coherence bound. Define
    Phi_(a,J)(omega)=int exp(i omega r)d pi_(a,J)(r).
Averaging |exp(i omega(r'-r))-1|^2 gives exactly 2(1-|Phi_(a,J)(omega)|^2). Therefore
    int (1-|Phi_(a,J)(omega)|^2)|F w_a(omega)|^2 d omega/(2pi)
       <= C_chi [E_a/M_(a,J)+ell^2].                    (4)
This compares the local wavefunction to an atomic characteristic function. The argument does not replace that characteristic function by its continuous PNT limit at high frequencies.

## 2. A shrinking logarithmic interval with nontrivial mass

Let eta_a=delta_a+exp(-a/2) as in PBC03, delta_a=sup_(X>=exp a)|psi(X)/X-1|. For large a choose
    ell_a=max(E_a^(1/3), eta_a^(1/4), 1/a),
which tends to zero and is eventually <=1/10. Let J_a=[4,4+ell_a]. By PNT with X=exp(2a-4) and lower endpoint X exp(-ell_a), both endpoints exceed exp a for large a. The normalized prime-power mass has
    M_(a,J_a)=exp(-4)(1-exp(-ell_a))+O(delta_a+a exp(-2a)).
The endpoint atom error follows from Lambda(n)<=log n; the relative PNT errors are uniform because the two endpoints are >=exp a. Since delta_a<=eta_a and ell_a>=eta_a^(1/4), the error is o(ell_a). Hence M_(a,J_a) is comparable to ell_a with positive fixed constants. In particular it is nonzero for all large a. From ell_a>=E_a^(1/3) we have E_a/ell_a<=E_a^(2/3) (with the zero case immediate). Thus the right side of (4) tends to zero for this shrinking interval.

Using a slowly shrinking interval is necessary for obtaining a vanishing coherence deficit from the cutoff error ell^2. It also creates the possibility of trivial coherence at frequencies of size much smaller than 1/ell. The next section excludes that trivial interpretation for the necessary frequency conclusion.

## 3. The necessary frequencies really are large, but their log cost is small

Let R_a=P_a-H_a be the bounded arithmetic residual, and use E for physical zero extension (to avoid confusing it with the scalar edge energy E_a). WPR01's proof of (1) gives
    ||(exp(-a)R_a-I) f_a||_2 ->0.
For the full-line band projection F_R, taking adjoints in PBC03(5) yields
    ||F_R E f_a||
       <= ||F_R E (f_a-exp(-a)R_a f_a)||+
              exp(-a)||F_R E R_a||
       <= o(1)+C(eta_a R)^(1/3)
when R>=1 and eta_a R<=1. Thus choose R(a)=eta_a^(-1/2), which tends to infinity and satisfies eta_a R(a)->0. This extends the needed low-band escape to the hypothetical near-saturating form trials, rather than assuming they are eigenvectors.

In physical coordinates w_a is a translate/reflection of f_a multiplied by a translate of the fixed smooth compact multiplier chi(s) exp(s/2); for a>3 its entire support is in the right half. Translation/reflection preserve the full-line L2 norm, Fourier frequency band norms and log energy. A fixed smooth compact multiplier preserves escape from the band |omega|<=R(a)/2: split the input into frequencies <=R(a) and >R(a). The former part has L2 norm tending to zero, and the latter contributes to the smaller output band only through multiplier Fourier frequencies >=R(a)/2, whose L1 tail tends to zero by smoothness and Young's inequality. Thus
    int_(|omega|<=R(a)/2) |F w_a(omega)|^2 d omega/(2pi) ->0. (5)
Also LBS01's bounded Lipschitz multiplier estimate, uniform under translation/reflection, gives L(w_a)<=C_chi L(f_a)=o(exp(a)). Put
    xi_a=sqrt(exp(-a)L(w_a))+1/a ->0.
Since the log weight is at least log(2+|omega|), Markov's inequality gives
    int_(log(2+|omega|)>xi_a exp(a)) |F w_a(omega)|^2 d omega/(2pi)
       <= exp(-a)L(w_a)/xi_a ->0.                       (6)
Combining (2), (5) and (6), a fixed positive amount of local Fourier mass lies in the nonempty band
    |omega|>=R(a)/2, log(2+|omega|)<=xi_a exp(a).
By (4) with J_a, the integral of the nonnegative coherence deficit over that band tends to zero. There must therefore exist a frequency omega_a in that band (up to null sets) at which
    |Phi_(a,J_a)(omega_a)| ->1.                           (7)
For instance choose a point where the deficit is at most twice its weighted average over the band; the band's Fourier mass is bounded below. This is an existence conclusion, not an algorithm for finding omega_a.

Importantly,
    |omega_a| ell_a >= (1/2) eta_a^(-1/2) eta_a^(1/4)
                    = (1/2)eta_a^(-1/4) ->infinity,
    log(2+|omega_a|)=o(exp(a)).
Thus coherence is not the elementary small-frequency behavior of a measure supported on a tiny interval. It is required at a frequency whose log cost is subleading at the maximal arithmetic scale, but whose oscillation length is much shorter than the logarithmic prime interval. The continuous exponential density on J_a would have characteristic magnitude O(1/(|omega_a|ell_a)) by integration by parts, hence tending to zero. Equation (7) concerns genuine high-frequency arithmetic phase alignment.

## 4. Restatement directly in prime phases

Set X_a=exp(2a-4). Because r_n=2a-log n, the phase magnitude in (7) equals
    | sum_(X_a exp(-ell_a)<=n<=X_a) Lambda(n) n^(i omega_a) |
      / sum_(X_a exp(-ell_a)<=n<=X_a) Lambda(n).
The denominator is asymptotic to X_a ell_a. Proper prime powers are negligible here: by Chebyshev,
    sum_(p^k<=X, k>=2) log p
       <= C [sqrt X+X^(1/3) log X]=O(sqrt X)
for sufficiently large X (adjust the constant for small X). Since ell_a>=eta_a^(1/4)>=exp(-a/8), this is o(X_a ell_a). Thus (7) also holds with the sum restricted to primes p, weights log p. For these normalized positive weights the mean squared distance from a common unit phase equals 2(1-|Phi|), after rotating by the argument of the nonzero mean. Hence an asymptotically full weighted fraction of primes in that interval must have phases arbitrarily close to a common unit phase; the unweighted fraction statement follows too because log p differs from log X_a by at most ell_a. No assumption of probabilistic independence of these phases.

WPR02 proves a concrete arithmetic necessary condition for saturation: shrinking logarithmic interval ell_a not too small, frequency |omega_a|ell_a->infinity, log |omega_a|=o(sqrt(X_a)), and near-total prime-phase coherence. It does not establish that such frequencies exist independently of the hypothetical trials. Excluding this condition would exclude approach to the sharp coefficient one, not automatically all ordinary growth at scale exp(a) or the ordinary upper exponent sought earlier. WPR03 should examine actual arithmetic estimates and whether untwisted PNT control alone can rule it out. README unchanged.
