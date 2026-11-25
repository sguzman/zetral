# GSG03 — Upper growth: unrestricted, restricted, and conditional
2026-11-25. Internal candidate deductions, no RH assumption, no human/formal/numerical verification or priority claim. GSG01 uses Suzuki arXiv:2606.09096v4 (3.1); current direct inspection of primary HTML https://arxiv.org/html/2606.09096v4 §§1.1, 2.4, 2.5, 3.1, particularly (2.8) and (3.1), confirms the paired sum and archimedean/prime/pole formula. Related Skelly abstract and other search results only; no full priority comparison. GSG02 full local manuscript remains available, remote write previously failed.

Set B=sup |Im z| among complex zeta ordinates, N(a)=max(0,-lambda_1(A_a)). For a>=1, put w(t)=1+log(2+|t|), L(f)=(2pi)^-1 integral w(t)|F[f](t)|^2 dt. F[f](z)=integral f(x)e^(izx)dx. All test functions are compact smooth in (-a,a) unless stated otherwise.

## 1. Unconditional unrestricted upper rate
The exact source formula in §2.4 gives q(f)=integral alpha(t)|F[f](t)|^2 dt/(2pi) minus twice the real prime correlations with weights Lambda(n)/sqrt(n), n<=exp(2a), plus the pole form with kernel 2cosh((x-y)/2), where alpha(t)=Re psi(1/4+it/2)-log pi. The digamma series gives alpha(t)>=alpha(0). Each truncated translation is a contraction. The pole form equals 2|<f,cosh(x/2)>|^2-2|<f,sinh(x/2)>|^2, and ||sinh(x/2)||^2=sinh(a)-a. Chebyshev's classical estimate sum_(n<=X)Lambda(n)=O(X) by partial summation gives sum_(n<=X)Lambda(n)/sqrt(n)=O(sqrt X). Therefore q(f)>=-C e^a ||f||^2. By the test core this holds for the closed form and N(a)<=C e^a. Together with GSG02:
    2B <= liminf log(1+N(a))/a <= limsup log(1+N(a))/a <= 1.
When B=0 the actual N=0 by Weil positivity. When B=1/2 equality of exponents follows. Otherwise the matching unrestricted exponent is not proved.

## 2. Uniform weighted pair bound
Group the zero-sum by upper-half-plane ordinates z=u+id, d>0, and their conjugates, multiplicity m_z. Real ordinates contribute nonnegative squares. Each nonreal pair contributes
    (m_z/2)(|F(z)+F(conj z)|^2-|F(z)-F(conj z)|^2)
    >= -2m_z d^2 sup_(|v|<=B)|F'(u+iv)|^2.
For integer k let W_k=sum m_z d^2 over upper-half ordinates with u in [k,k+1). The standard unconditional local Riemann-von Mangoldt count O(log(2+|k|)) yields W_k<=C w(k). Thus -q(f)<=2 sum_k W_k M_k where M_k=sup |F'(u+iv)|^2 on u in [k,k+1], |v|<=B. With r=1/a, the holomorphic mean-value inequality bounds M_k by (pi r^2)^-1 integral |F'|^2 over [k-1,k+2] times [-B-r,B+r], since every radius-r disk is contained in that rectangle. Finite overlap and weight comparability then imply
    -q(f) <= C a^2 integral_(|v|<=B+1/a) integral_R w(u)|F'(u+iv)|^2 du dv.

To bound the inner integral uniformly use F'(u+iv)=F[ix e^(-vx) f](u). Choose smooth eta_a equal one on [-a,a], supported [-a-1,a+1], first two derivatives uniformly bounded. m_v(x)=ix e^(-vx)eta_a(x). For |v|<=B+1/a<=3/2, its L1 norm and second derivative L1 norm are bounded by C(a+1)^2 exp(|v|(a+1)). Integration by parts twice shows integral sqrt(w(t)) |F[m_v](t)| dt <= C(a+1)^2 exp(|v|(a+1)); split at |t|=1. The weight satisfies w(s+t)<=C w(s)w(t) (use 2+|s+t|<=(2+|s|)(2+|t|) and w>=1), so weighted Young convolution gives
    integral w(u)|F'(u+iv)|^2 du <= C(a+1)^4 exp(2|v|(a+1)) L(f).
Integrating v (length bounded by 3), using |v|(a+1)<=Ba+B+1+1/a, gives
    -q(f) <= C(a+1)^6 exp(2Ba) L(f).             (GSG03.1)
No assumption on B beyond the strip bound, no estimate of unweighted negative energy by replacing L(f) with ||f||^2. The logarithmic moment is a genuine restriction, not controlled by L2 norm.

## 3. Exact restricted rate
For fixed M let N_M(a)=max(0,sup -q(f) over L2-unit tests with support in (-a,a) and L(f)<=M), taking 0 if no such tests. Then (GSG03.1) gives limsup log(1+N_M(a))/a<=2B. GSG02 uses an L2-unit fixed smooth f0 supported strictly in (-b,b) whose transform is nonzero at all ordinates. For t>=2b the two translates by +/-t/2 are orthonormal. Every unit combination of them has pointwise |F|^2<=2|F[f0]|^2 on the real line, by Cauchy-Schwarz for the two complex coefficients. Hence its L<=2L(f0) independently of t,a. In particular the minimizing vector of their two-by-two form matrix is eligible for M>=2L(f0). GSG02 proves all-window lower exponential rate 2B for exactly these trials. Therefore for every such fixed M,
    lim log(1+N_M(a))/a=2B.
Equivalently the negative variational quotient normalized by the positive logarithmic Fourier norm, sup max(0,-q(f))/L(f), has the same exact exponent: upper from (GSG03.1), lower from those trials. No assertion about the full bottom eigenvectors' log-energy bound. If their log energies were subexponential in a, the full exact exponent would follow; this has not been established.

## 4. Conditional unrestricted matching exponent
Assume the extra zero-density hypothesis sup_k W_k<infinity (sufficient, not known unconditionally; includes finitely many off-line zeros). The same disk estimate, now unweighted, and Plancherel give
    -q(f)<=C a^2 integral_(|v|<=B+1/a) ||x exp(-vx) f||_2^2 dv
       <= C (a+1)^3 exp(2Ba)||f||_2^2,
because ||x exp(-vx) f||^2<=a^2 exp(2a|v|)||f||^2 and integral exp(2a|v|)dv<=exp(2Ba+2)/a. The test-core lower bound extends to all form vectors. Thus under this hypothesis the full growth exponent equals 2B by GSG02. If only finitely many off-line zeros exist, the direct pointwise Fourier estimate gives a sharper polynomial factor O(a e^(2Ba)) using the finite sum of multiplicities. No unconditional uniform W_k bound inferred from averaged density estimates.

## 5. Disposition
GSG03 mathematical milestone resolved partially: exact unconditional restricted and log-normalized rates, unrestricted exponent bracket, exact unrestricted rate under an additional hypothesis. The main obstruction is high-frequency behavior of minimizing states, or a uniform weighted local off-line-zero density bound. An unconditional matching unrestricted upper rate remains open in this campaign; do not label it proved. GSG04 consolidate and pivot to a justified concrete question, e.g. negative-index growth via finite off-line pair interpolation or a regularized spectral bottom. No RH proof, no independent numerical/formal/human review, no novelty claim.
