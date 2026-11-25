# LZC02 — Exact arithmetic strip sweep and fractional-log discrepancy

2026-11-25. AI-assisted candidate deduction without RH. Uses LZC01's elementary positive kernel and the inherited paired/arithmetic Weil formula. No actual off-line zero, numerical experiment, independent verification or priority claim. The analytic growth estimate below is proved from zero-free right-half-plane geometry and elementary complex analysis; no unverified niche theorem is imported.

Let F be a fixed finite reflection/conjugation-invariant set of omitted nonreal ordinates (full multiplicities), possibly empty. All remaining deviations satisfy |v|<=b<=1/2. For c>b, c>0, define the finite-height positive density
    p_c(T)=sum_(remaining z=u+iv) m_z Q_(c,v)(T-u),
where Q is LZC01's positive strip kernel, with Fourier multiplier cosh(vs)/cosh(cs). This sum converges normally on compact real T sets by exponential horizontal decay and the classical local count. Here p_c is NOT normalized by log T.

## 1. Exact formula initially for c>1/2

Write
    Qtilde_(c,v)(x)=(1/(4c))[sech(pi(x+iv)/(2c))+sech(pi(x-iv)/(2c))].
For |v|<c this is Q_(c,v). Outside the strip it is only a meromorphic continuation; it need not be positive. Let alpha(t)=Re psi(1/4+it/2)-log pi be the arithmetic symbol. For c>1/2, the scalar test h(s)=exp(-iTs)/cosh(cs) gives
    p_c(T) = (1/(2pi)) int alpha(t) Q_(c,0)(t-T) dt
            +(2/pi) Re sum_(k>=0) (-1)^k zeta'/zeta(1/2+(2k+1)c+iT)
            +2 Qtilde_(c,1/2)(T)
            -sum_(z in F) m_z Qtilde_(c,v)(T-u).        (1)

Proof and constants: the symmetry in v and the kernel Fourier representation yield p_c,full(T)=(1/(2pi)) sum_z m_z Fh(z). The scalar paired/arithmetic identity for compact smooth h follows from the approximate-identity correlation argument of LZC01/CZG01:
    sum_z m_z Fh(z) = int alpha(t) Fh(t) dt/(2pi)
       -sum_(n>=2) Lambda(n)/sqrt(n)[h(log n)+h(-log n)]
       +int 2cosh(s/2) h(s) ds.
To extend to this noncompact h, multiply by real even cutoffs chi(s/R) equal one near zero, of fixed smooth shape. On |Im z|<=1/2, all the test derivatives weighted by exp(-v s) have uniformly bounded L1 norms and their tails tend to zero because c>1/2. Integration by parts gives uniform rapid real-ordinate decay for their transforms; the local count justifies dominated convergence of the zero sum and of the alpha integral. The prime series is absolutely dominated by C sum Lambda(n)n^(-1/2-c), finite for c>1/2, and the pole integral by the same exponential decay in s. Thus the extension is valid, without a formal interchange of nonabsolutely summable zero and prime series.

The real-axis transform of h is 2pi Q_(c,0)(t-T). The prime term after division by 2pi is -1/pi times the real part of sum Lambda(n)n^(-1/2-iT)/cosh(c log n). Expand sech(c log n)=2 sum_(k>=0)(-1)^k n^(-(2k+1)c); the double series is absolutely summable for c>1/2. The Dirichlet series for -zeta'/zeta gives the second term of (1). The pole integral after division by 2pi is (1/(2c)) times the sum of the two shifted sech functions, exactly 2 Qtilde_(c,1/2)(T). Finally subtract the actual finite omitted zero sweep. This verifies signs and factors.

For fixed c>1/2, the prime series in (1) is uniformly bounded in T, the pole/finite subtraction decays exponentially for |T|->infinity, and alpha(t)=log(2+|t|)+O(1) together with the elementary log shift inequality gives
    p_c(T)=log(2+|T|)/(2pi)+O_(c,F)(1).                  (2)

## 2. Continue the arithmetic expression to every c>b at large height

For a fixed real T with |T| greater than the largest absolute ordinate of the finite omitted set and |T|>1, (1) extends to all real c>b, c>0, with Qtilde at the pole/omitted arguments. The remaining-zero sum is real analytic in c: in a compact complex neighborhood inside Re c>b, each sech denominator has no zero, since its poles in c would have real part of magnitude <=|v|<=b, and the terms decay exponentially in |T-u| uniformly on that compact neighborhood. Hence the zero sum converges normally. The arch integral is analytic in a neighborhood of each positive real c for the same exponential decay. The real part of the log derivative sum can be written as half the sum at +iT and -iT, by the conjugation symmetry of zeta. It has no poles along the real c>b interval: all zeros with Re rho>1/2+b have been removed from the remaining set and belong to the finite omitted set, whose heights differ from +/-T. The pole at s=1 is also absent at nonzero T. The large k tail converges normally by the absolutely convergent Dirichlet series in a sufficiently right half-plane (geometric decay in k). The finite meromorphic Qtilde terms have no pole at real c>0 when T-u!=0 (or T!=0 for the pole term). Thus both sides are real analytic on the connected real interval c>b, c>0. Equality on c>1/2 extends throughout it. This is not an assertion of convergence of the original prime series for c<=1/2; only the log-derivative expression is continued.

The assertion about all zeros with Re rho>1/2+b uses the actual omitted set and the sign convention v=1/2-Re rho. It holds by the assumed bound on the remaining absolute deviations. If b=1/2 there is no continuation below 1/2, as expected.

## 3. Log-derivative growth from the residual zero-free half-plane

Suppose b<1/2 and put sigma_0=1/2+b. Beyond a fixed height all zeta zeros lie in Re s<=sigma_0. We establish for each fixed sigma>sigma_0 and epsilon>0,
    |zeta'/zeta(sigma+iT)|
       <= C_(sigma,b,epsilon,F) [log(2+|T|)]^(gamma(sigma)+epsilon),
    gamma(sigma)=max(0,(1-sigma)/(1-sigma_0)).          (3)
For sigma>1 one can take the bounded absolutely convergent Dirichlet series instead.

First obtain a uniform O(log |T|) bound on every compact substrip sigma_0<sigma_L<=Re s<=sigma_R at sufficiently large heights. For a compact family of points sigma+i(T+y), |y| bounded, choose a large fixed real center R>2 and a disk centered at R+iT with radius less than R-sigma_0 but containing those points in its interior with a fixed margin. This is possible by taking R large compared with the bounded vertical spread and the positive horizontal margin. The disk is zero-free and pole-free for large |T|. Choose the analytic log zeta branch there whose value at the center agrees with the absolutely convergent log Dirichlet series, and hence is bounded there. On the disk Re log zeta=log|zeta|<=C log |T| by elementary polynomial growth for Re s bounded below by a positive constant: for example the Euler summation identity zeta(s)=s/(s-1)-s int_1^infinity {x} x^(-s-1) dx gives O(1+|s|) in such a fixed right half-plane away from the pole. Borel-Caratheodory bounds the analytic log on a smaller disk by O(log |T|), and the Cauchy derivative estimate on a still smaller disk bounds its derivative zeta'/zeta by O(log |T|). The centers/radii may be fixed for a whole compact substrip at relative heights |y|<=1; translating the center proves the bound uniformly at all sufficiently large heights.

To interpolate, fix sigma_0<sigma_L<sigma<sigma_R with sigma_R>1. In the rectangle [sigma_L,sigma_R] times [T-H,T+H], let L=log(2+|T|), H=sqrt(2 log L). At large |T| it is zero/pole-free. Multiply zeta'/zeta(s) by
    L^((s-sigma_R)/(sigma_R-sigma_L)) exp((s-iT)^2).
On the left vertical boundary the power factor is L^-1 and the derivative is O(L); on the right it is one and the derivative is O(1). On the horizontal boundaries the derivative is O(L) uniformly on the compact substrip and the Gaussian factor has modulus <=C exp(-H^2)=C L^-2, while the power factor is at most one. The maximum modulus principle bounds the product by a fixed constant throughout. At sigma+iT this gives the exponent (sigma_R-sigma)/(sigma_R-sigma_L). Let the fixed boundaries approach sigma_0 and 1 sufficiently closely to obtain any exponent strictly above gamma(sigma), for sigma in (sigma_0,1], proving (3). There is no estimate with constants uniform as sigma approaches sigma_0.

Combining (1)-(3), the finitely many log derivative terms with real parts <=2 and the uniformly summable right-half-plane tail give, for fixed c>b,
    p_c(T) = (1/(2pi)) int alpha(t) Q_(c,0)(t-T) dt
                + O_(c,b,epsilon,F)( L_T^(theta_c+epsilon)),
    theta_c=max(0,(1/2-c)/(1/2-b)).                     (4)
This is an ordinary real-axis bound for the signed arithmetic discrepancy of the POSITIVE projected density, not a local bound on the unswept off-line population. The finitely many removed/pole Qtilde terms decay exponentially at large height even after continuation. On bounded T the actual p_c and the arch convolution are bounded by their positive-kernel definitions and the local count, so (4) also gives a global bound on their difference with an enlarged constant. For c>1/2 the stronger (2) holds. For b<c<1/2, theta_c<1, so the discrepancy is genuinely sublinear in log T and even a fractional power, despite no such uniform bound on individual off-line populations being established.

## 4. What this signed saving gives for ordinary form estimates

For compact smooth f,g, let h(s)=int f(y+s)conj g(y)dy. For every c>b the convolution identity (3) of LZC01 and symmetry imply
    q_rem(f,g) = int p_c(t) F[h(s)cosh(cs)](t) dt.      (5)
Indeed convolution with Q_(c,v) cancels cosh(cs) in the test and averages the two imaginary shifts; all integrals are justified by rapid strip test decay and the logarithmic local count. Thus in (5), for f=g, the Fourier factor is the real part of Ff(t+ic)conj Ff(t-ic). Similarly the arch convolution in (4) gives exactly the original alpha form: its base-kernel transform is sech(cs), which cancels the same cosh. No positive lower bound on the real part at each t is assumed.

If more generally the discrepancy in (4) is bounded by C w(t)^theta with theta<1, weighted Cauchy-Schwarz and the log-weighted Fourier convolution estimate of LDE01 (multiplying now by smooth cutoffs of exp(+/-cx), without the derivative factor x) give
    |q_rem(f,f)-q_alpha(f,f)| <= C (a+1)^K exp(2ca) L_theta(f)
for some fixed polynomial power K and all support windows a>=1. This extends by log-form density. Since q_alpha=L_1+O(||f||^2), on a unit negative vector Jensen yields
    L_1 <= C + C(a+1)^K exp(2ca) L_1^theta.
Hence both its log energy and its negative depth are bounded by C'(a+1)^(K') exp[2ca/(1-theta)]. The fractional signed-discrepancy estimate obtained in (4) from the zero-free half-plane alone does not improve the existing coarse exponent one: for b<c<1/2,
    2c/(1-theta_c)=2c(1/2-b)/(c-b) >=1,
with strict inequality when b>0 and c<1/2. Taking epsilon>0 in (4) only worsens this ratio. For c>=1/2 the bound is also no better than one. Thus the signed projection provides a new exact arithmetic observable and fractional-log discrepancy but does not settle the ordinary upper exponent.

A stronger independent bound on this discrepancy, with theta<1-2c at some c>b, would improve the coarse ordinary exponent; subpower discrepancy for c arbitrarily close to b would yield the matching residual upper rate 2b. These are sufficient hypotheses, not established. LZC03 will test admissible measures and derive a sharper moving-window obstruction using the actual signed discrepancy.

No actual off-line zero, anomalous state, numerical experiment, independent verification, priority claim or RH proof. README unchanged.
