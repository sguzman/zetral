# PBC03 — Ordinary deep spectral subspaces must escape in frequency but remain at endpoints

2026-11-25. AI-assisted candidate deduction, no RH assumption. Uses PBC01–02, LBS01's form-domain identification, and the inherited digamma kernel. No actual ordinary deep mode, off-line zero, numerical experiment, priority claim or independent review. For an optional explicit frequency scale, the classical unconditional Korobov–Vinogradov PNT error estimate was actually checked this turn in the Exponent Database blueprint, chapter 14, Theorem 14.4, HTML lines 102–108, https://teorth.github.io/expdb/blueprint/chap-prime_counting_function.html . No claim that the source states the operator conclusions below.

Let P_a be the prime operator, H_a the pole operator, R_a=P_a-H_a and A_a=A_(alpha,a)-R_a, where A_(alpha,a) is the self-adjoint support-constrained archimedean multiplier (bounded below by alpha(0)). Let Pi_a^-(c) be the ordinary spectral projection onto eigenvalues <=-c exp(a), for fixed c>0. This projection is finite rank at each a by compact resolvent and may be zero for every a. All assertions below are uniform operator bounds on its range, not the claim that such eigenvalues exist.

## 1. Uniform physical localization near the two endpoints

For a>R+1, R>=0, choose a real smooth cutoff chi_(a,R), 0<=chi<=1, zero whenever the distance to the boundary a-|x| is <=R (including outside the interval), one when that distance is >=R+1, with uniformly bounded Lipschitz constant. Such cutoffs are products of the two smooth one-sided boundary transitions.

If chi(x) is nonzero and x+s remains inside I_a, then |s|<=2a-R. Hence chi P_a only uses shifts with n<=exp(2a-R). The norm of each truncated shift is <=1, and Chebyshev/partial summation gives
    ||chi P_a||<=2 sum_(n<=exp(2a-R)) Lambda(n)/sqrt(n)
               <= C exp(a-R/2).
For the pole term the same restriction on |x-y| applies on the support of chi; Young's convolution bound for the positive majorant kernel 2cosh(s/2) 1_(|s|<=2a-R) yields
    ||chi H_a||<=C exp(a-R/2).
Consequently ||chi R_a||<=C exp(a-R/2), uniformly in a,R in the stated range.

The commutator [A_(alpha,a),chi] is bounded on L2 with norm <=C independent of a,R. On compact smooth tests the difference kernel is -k(|x-y|)(chi(y)-chi(x)), with k(s)=exp(-s/2)/(1-exp(-2s)), up to the immaterial commutator sign convention. The identity follows by subtracting the digamma difference-form expressions; the singular diagonal constant cancels. Its absolute kernel has an integrable majorant C min(|x-y|,1) k(|x-y|), giving the uniform bound by Young. Multiplication by chi preserves the log form domain by LBS01's Lipschitz multiplier estimate. The commutator identity therefore extends by form density and implies preservation of the archimedean operator domain by chi via the form representation theorem. The full A_a has this same operator domain by bounded perturbation.

Write P=Pi_a^-(c), X=chi restricted to ran P as a map into L2(I_a), and A_-=A_a restricted to ran P. For the finite-dimensional domain ran P, the operator equation is
    A_(alpha,a) X-X A_-=Y,
    Y=chi R_a P+[A_(alpha,a),chi]P, interpreted on ran P.
Since A_(alpha,a)>=alpha(0) and A_-<=-c exp(a), for sufficiently large a the spectral gap g_a=alpha(0)+c exp(a)>0. Integrating the derivative of exp(-t A_(alpha,a)) X exp(t A_-) gives
    X=int_0^infinity exp(-t A_(alpha,a)) Y exp(t A_-) dt,
    ||X||<=||Y||/g_a.
The integral converges in norm since the integrand is bounded by exp(-t g_a)||Y||; the endpoint at infinity vanishes. Differentiation is justified because the finite-dimensional range of X lies in the operator domain. Therefore
    ||1_(a-|x|>=R+1) Pi_a^-(c)||
       <= [C exp(a-R/2)+C]/[alpha(0)+c exp(a)].          (1)
In particular the entire spectral subspace is uniformly tight in physical endpoint coordinates: its interior norm is O_c(exp(-R/2)+exp(-a)). This is stronger than an estimate on each individual eigenvector with a dimension-dependent summation.

## 2. Quantitative low-frequency cancellation of the arithmetic part

Use the full-line Fourier transform convention of GSG03. The even signed finite measure
    nu_a=exp(-a)[ sum_(n<=exp(2a)) Lambda(n)/sqrt(n)
                                (delta_log n+delta_-log n)
                    -2cosh(s/2) 1_(|s|<=2a) ds ]
represents R_a after compression to I_a: if E_a is zero extension into L2(R), then exp(-a) R_a=E_a* C_(nu_a) E_a, where C is convolution by the measure. The equality holds for the zero-extended shift and pole forms; evenness removes any sign convention in convolution. Its total variation is uniformly bounded by Chebyshev and the elementary integral of the pole kernel.

Put delta_a=sup_(X>=exp a)|psi(X)/X-1| and eta_a=delta_a+exp(-a/2), tending to zero by PNT. For every real t,
    |F[nu_a](t)|<=C min(1, eta_a(1+|t|)).                (2)
To prove the nontrivial bound, consider only positive shifts, and first n in (Y,X], Y=exp a, X=exp(2a). The normalized weighted Fourier sum is exp(-a) int_(Y,X] x^(-1/2+it) d psi(x). Subtract the continuous principal pole term exp(-a) int_Y^X x^(-1/2+it) dx (change variable s=log x in the kernel exp(s/2)). Stieltjes partial summation with F(x)=psi(x)-x gives endpoint errors <=C delta_a and integral error
    exp(-a) int_Y^X |F(x)| (1/2+|t|) x^(-3/2) dx
       <= C delta_a(1+|t|).
The left-open interval correctly excludes any endpoint atom at Y. The small-n sum n<=Y and the integral on 1<=x<=Y have normalized mass O(exp(-a/2)). The secondary pole kernel exp(-s/2) for s>=0 has normalized mass O(exp(-a)). Add the reflected shifts to get (2); the uniform total variation supplies the other bound. This is a pointwise statement on a growing band, not an unrestricted Fourier multiplier norm tending to zero.

## 3. Strong frequency escape of the full deep negative subspace

Let F_R be the orthogonal full-line Fourier band projection to |t|<=R, with R>=1 (frequency cutoff, not the residual R_a). For a full-line unit vector g, write v=F_R g and f=E_a* v, so E_a f=1_(I_a) v. Bandlimiting gives ||v'||_2<=R||g|| and sup_x |v(x)|<=C sqrt(R)||g|| by Fourier Cauchy-Schwarz. The zero-extended f has distributional derivative
    (E_a f)'=1_(I_a)v'+v(-a)delta_-a-v(a)delta_a.
For any S>=R, Plancherel and the Fourier transform of this identity give
    ||(I-F_S) E_a f||_2 <= C [R/S+sqrt(R/S)]||g||.       (3)
Indeed the interior derivative contributes at most R/S, and the endpoint delta terms use the integral of t^-2 on |t|>S and the two endpoint value bounds. No smooth cutoff at the physical endpoints is assumed.

One also has the archimedean graph bound
    ||A_(alpha,a) f||_2 <= C w(R)||g||,                  (4)
uniformly in a,R. For details, use |alpha(t)|<=C w(t). On |t|<=R the weighted Fourier norm of E_a f is at most w(R)||g||. On |t|>R use the derivative identity above: w(t)/|t|<=w(R)/R for t>=R>=1, and int_(|t|>R) w(t)^2/t^2 dt<=C w(R)^2/R (substitute t=R u and use w(Ru)<=w(R)+log u for u>=1). The interior derivative term and the endpoint terms are both bounded by C w(R)||g|| in the log-squared Fourier norm. Thus the zero extension lies in the full archimedean multiplier domain. It lies in the support form domain by trimming/mollification at fixed a: the restricted smooth v has finite BV and L1 norm on the fixed finite interval, and the bounded BV approximants converge in log norm as in VMR02. The form representation then puts f in Dom A_(alpha,a), with its action the compression of the full multiplier. This proves (4); no boundary trace condition is imposed on this log form.

For the bounded residual, (2), (3) and the compression representation yield
    exp(-a)||R_a f|| <= C[eta_a(1+S)+sqrt(R/S)]||g||,
for S>=R, absorbing R/S into sqrt(R/S). If eta_a R<=1, choose S=(R/eta_a^2)^(1/3)>=R. Then
    exp(-a)||R_a E_a* F_R|| <= C (eta_a R)^(1/3).         (5)
The same estimate with a harmless additive C eta_a follows directly; eta_a<= (eta_a R)^(1/3) for the stated range. This is uniform over all band-limited inputs after restriction to the physical interval, even though restriction introduces jumps.

Because Pi_a^-(c) commutes with A_a and its eigenvalues have absolute value at least c exp(a),
    ||Pi_a^-(c) E_a* F_R|| <= exp(-a)/c ||A_a E_a* F_R||.
Taking adjoints and using (4)-(5) gives the main full-subspace frequency estimate
    ||F_R E_a Pi_a^-(c)||
       <= C/c [exp(-a) w(R)+(eta_a R)^(1/3)].           (6)
This is an operator norm on the entire ordinary deep spectral subspace, not an expectation bound for a single vector. For every cutoff R(a)>=1 with eta_a R(a)->0, the right side tends to zero: eta_a>=exp(-a/2) ensures R(a)<=exp(a/2) eventually, so exp(-a)w(R(a))->0. Thus ALL normalized Fourier mass escapes each such growing band, uniformly on unit vectors in ran Pi_a^-(c), if this subspace is nonzero.

For a concrete scale, the classical unconditional Korobov–Vinogradov PNT estimate gives delta_a<=C exp[-A a^(3/5)/(log a)^(1/5)] for some A>0 and all sufficiently large a (the function of log X is eventually increasing, so it bounds the supremum). Then for any fixed 0<A'<A, R(a)=exp[A' a^(3/5)/(log a)^(1/5)] satisfies the condition in (6). This imported constant is not evaluated, and no numerical cutoff is claimed. The scale is subexponential in a, far below the doubly exponential frequencies implicated by the earlier prefactor/rate obstruction VMR03 in the separated lower-deviation setting. The new feature is vanishing of the entire low-band mass uniformly, and it holds without a separated zero set.

## 4. Weak boundary limit and the remaining issue

For fixed g=(g_L,g_R) compact smooth positive-half-line profiles, U_a* g is, for large a, a sum of two compact smooth translations/reflections with disjoint support. Its full archimedean multiplier norm is uniformly bounded by the triangle inequality and translation/reflection invariance. The residual divided by exp(a) tends to zero on these vectors by PBC02's strong limit. Thus ||A_a U_a* g||/exp(a)->0, and
    ||Pi_a^-(c) U_a* g||->0.
Density and boundedness of U_a and the projection extend this to every fixed g in the two-half-line L2 space. In particular any sequence of unit vectors in the deep negative subspaces has weak boundary-coordinate limit zero, while (1) makes its boundary-coordinate mass tight. This is consistent with the strong Fourier escape of (6).

The results identify a precise necessary geometry of ordinary anomalous modes at the largest arithmetic scale: localization near endpoints but loss of all mass in growing moderate-frequency bands. Neither (1) nor (6) excludes such modes. In particular the recurrence from PBC02 might occur at frequencies far beyond those controlled by PNT partial summation, and the logarithmic archimedean energy may then be too expensive. A possible next step is a weighted square-difference identity for the cross-endpoint prime shifts, exploiting the exact cancellation of weights against exp(-t/2). It could characterize modes nearly attaining the sharp coarse upper constant, without treating the prime shifts as a continuous density at high frequency.

PBC03 complete as candidate. No actual anomalous state, spectral computation, RH proof or independent review. README unchanged.
