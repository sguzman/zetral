# APM02 — Convergent relative heat germ and triangular pole moment recovery

2026-11-25. AI-assisted internal candidate, no RH assumption or independent review. Uses APM01 and RHI01–03. This applies classical rank-one perturbation machinery to the actual arithmetic operators, with no claim that the general machinery is new.

Fix one parity, B=T+sigma u tensor u, sigma=+2 or -2. Let m_j=<T^j u,u>, g(t)=<exp(-tT)u,u>=sum_j (-1)^j m_j t^j/j! near zero, and F(t)=tr(exp(-tB)-exp(-tT)). Define convolution along the straight segment from 0 to t, which agrees with real-time convolution for t>0.

For real t>0 the iterated bounded-perturbation Dyson series converges in trace norm after subtracting the zeroth term. The k-th term is an integral over k+1 nonnegative time pieces s_0,...,s_k with sum t (Lebesgue ds_1...ds_k, s_0 determined), of a product of k rank-one perturbations between semigroups. Its trace norm is bounded by |sigma|^k ||u||^(2k) exp(t max(0,-inf T)) t^k/k!, by the finite-rank product bound, so summation and tracing are legitimate. Its scalar trace is (-sigma)^k g(s_0+s_k) product_(j=1)^(k-1) g(s_j), by cycling bounded factors against finite rank. Integrate the split of s_0+s_k to obtain a factor v=s_0+s_k. The remaining k time variables have sum t, with symmetric product of g's. Their integrals weighted by any one time variable coincide; summing the k weights gives t. Consequently the exact identity is
    F(t)=sum_(k>=1) (-sigma)^k (t/k) g^{*k}(t).             (1)
For k=1 this is -sigma t g(t). No trace of an individual short-time heat operator is taken.

APM01 gives holomorphic scalar g on a disk |t|<rho, some rho>0. On any smaller closed disk its supremum G is finite. Writing convolutions as simplex integrals along the complex segment gives |g^{*k}(t)|<=G^k |t|^(k-1)/(k-1)!. Hence (1) extends F holomorphically to that disk, by locally uniform convergence. It is a genuine convergent germ, not just a formal expansion. This claim concerns only the scalar relative trace; the negative-time operator e^(-tT) need not be bounded.

Expand each g in (1). For nonnegative j_1,...,j_k with sum J, the elementary simplex beta integral for convolution of t^j/j! gives t^(J+k-1)/(J+k-1)!; this follows inductively by integrating monomials. In the Taylor expansion F(t)=sum_(n>=1) f_n t^n,
    f_n = (-1)^n/(n-1)! sum_(k=1)^n (sigma^k/k)
                          sum_(j_1+...+j_k=n-k) product_(i=1)^k m_(j_i).
Thus define b_n=(-1)^n (n-1)! f_n. Then
    m_(n-1) = [ b_n - sum_(k=2)^n (sigma^k/k)
                          sum_(j_1+...+j_k=n-k) product_i m_(j_i)]/sigma.
All indices in the subtraction are <=n-2, so this is an exact triangular inverse. In particular
    f_1=-sigma m_0,
    f_2=sigma m_1+(sigma²/2)m_0²,
    f_3=-(sigma m_2+sigma² m_0 m_1+(sigma³/3)m_0³)/2.
The second formula agrees with RHI01; m_0=||u||². Knowing the first n relative heat coefficients in a single parity determines the first n pole moments (degrees 0 through n-1). Summing both parities loses that direct triangular inverse, so keep the resolved functions.

The full short-time germ also determines the positive-time relative heat function by holomorphic identity on the connected positive half-plane, and thereby the meromorphic scalar capacity of RHI03. This is exact uniqueness, not stable analytic continuation from approximate finite coefficients. No uncoupled eigenvalue of T can be recovered by these scalar invariants alone. APM03 next: certified finite-moment bounds below the spectrum. No actual heat coefficients beyond previously derived symbolic formulas evaluated for zeta, no numerical experiment or RH proof.
