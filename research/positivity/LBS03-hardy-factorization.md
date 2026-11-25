# LBS03 — Explicit Hardy factorization of the log-boundary Gram

2026-11-25. AI-assisted internal candidate. Conditional spectral conclusions use LBS02's separated finite selected set, with no uniform weighted lower-remainder density assumption. No actual off-line zeros, RH proof, originality claim, numerical experiment or independent proof verification. The Hardy/Paley–Wiener theorem is classical. Fresh source verification this turn: S. M. Gorbunov, *Unitary transform diagonalizing the confluent hypergeometric kernel*, Sb. Math. 216:12 (2025), 1643–1663, Theorem 5.1, https://www.mathnet.ru/php/archive.phtml?jrnid=sm&option_lang=eng&paperid=10319&wshow=paper (HTML lines 177–179, theorem statement); and *Unbounded Wiener–Hopf Operators and Isomorphic Singular Integral Operators*, §2.1, https://link.springer.com/article/10.1007/s11785-021-01110-w (HTML lines 110–118, boundary Hardy characterization and outer-modulus context). These sources establish the classical input, not novelty of the Zetral spectral deduction. No PDF analyzed. The specific multiplier and density argument below is supplied directly to avoid applying a bounded-weight Hardy theorem to an unbounded log weight without justification.

## 1. Support closure on the half-line

Let w(t)=1+log(2+|t|), w0=w(0)>1. Use the H_w norm and positive difference kernel J of LBS01. The closed subspace H_(w,+)=closure of C_c^infty(0,infinity) equals the subspace of H_w functions supported in [0,infinity).

The inclusion from the closure is immediate by L2 convergence. Conversely, translate a supported f inward by epsilon>0; translations tend to the identity in H_w by dominated convergence of their Fourier multipliers. For fixed epsilon, multiply the translated function by smooth compact cutoffs chi_R tending to one pointwise with uniformly bounded supremum and Lipschitz constants. The removed part g_R=(1-chi_R)g tends to zero in L2. For each fixed displacement h, its L2 difference tends to zero, and the product-difference estimate of LBS01 bounds its squared difference by
    C||g(.+h)-g||_2^2+C min(h^2,1)||g||_2^2
uniformly in R. This is J-integrable by LBS01. Dominated convergence therefore gives g_R->0 in H_w. The cut-off function is compactly supported away from zero; convolve by a compact smooth approximate identity of support smaller than epsilon/2. Convergence in H_w follows from the bounded Fourier multipliers tending pointwise to one. The result lies in C_c^infty(0,infinity). Taking the approximations successively proves the claimed support equality without an implicit trace condition at the endpoint.

## 2. Explicit zero-free analytic factor

For Im z>0 define
    h(z)=exp{ (1/(2pi i)) int_R [1/(t-z)-t/(1+t^2)] log w(t) dt }.       (1)
The integrand has integrable tails O_z(log w(t)/(1+t^2)), locally uniformly in z on compact upper-half-plane sets; hence the exponent is analytic. The real part of the exponent is
    log |h(x+iy)|=(1/2pi) int_R y log w(t)/[(t-x)^2+y^2] dt,
so
    |h(x+iy)|^2=exp(P_y(log w)(x)),                       (2)
where P_y is the Poisson probability convolution. In particular |h(z)|^2>=w0 and 1/h is a bounded analytic function. The modulus tends to sqrt(w(x)) at each real x as y->0: use local continuity and the integrable tail against (1+t^2)^-1 in the Poisson approximate-identity formula. No choice of a complex logarithm of an unknown spectral quantity is needed.

For the growth bound, log w(t)<=C+2log(1+|t|). Substitute t=x+y v in the Poisson average and use 1+|x+y v| <= (1+|z|)(1+|v|). The remaining integral of log(1+|v|)/(pi(1+v^2)) is finite. This gives |h(z)|<=C(1+|z|) uniformly in the upper half-plane. Evenness of w and normalization h(i)>0 in (1) also give
    h(-conj z)=conj h(z).
Indeed the two analytic exponents with this reflected-conjugated convention have identical real parts and agree at i; their imaginary difference is constant and zero.

## 3. Unitary reduction to the classical Hardy space

Use H^2(C_+) with the boundary norm int |F(t)|^2 dt/(2pi). The classical upper-half-plane Paley–Wiener theorem identifies it isometrically with the Fourier–Laplace transforms Ff(z)=int_0^infty f(s)e^(izs)ds of L2 positive-half-line functions. The norm normalization follows from Plancherel with our convention. The cited theorem and boundary characterization are used precisely here.

For f in C_c^infty(0,infinity), set Uf(z)=h(z)Ff(z). The Fourier–Laplace transform of such a test is O((1+|z|)^-2) uniformly for Im z>=0: use its L1 norm and two integrations by parts with the decaying exponential. Together with the growth bound of h this shows Uf is in H^2. Its Hardy norm equals L(f): take y->0 in the integral of |h(x+iy)Ff(x+iy)|^2 using the boundary modulus limit and the integrable bound C/(1+|x|)^2; the Hardy norm equals this boundary norm. The map extends as an isometry U:H_(w,+)->H^2. Point evaluation at each fixed upper z is continuous both in Hardy space (by the L2 Laplace evaluation) and on H_(w,+) (by the L2 half-line exponential test). Consequently the identity Uf=h Ff continues pointwise on the completed space.

Surjectivity requires a separate check because h itself need not be a bounded Hardy multiplier. Given G in H^2, G/h belongs to H^2 by boundedness of 1/h. Apply Paley–Wiener to write G/h=Ff for a supported L2 function f. Taking boundary limits (or an a.e. convergent subsequence of the L2 boundary limits for both Hardy functions) and (2) gives w(t)|Ff(t)|^2=|G(t)|^2 almost everywhere. Hence f belongs to H_w, and section 1 puts it in H_(w,+). Thus Uf=G. We have proved U is unitary, not just an embedding into a weighted Hardy subspace.

## 4. The exact diagonal Cauchy factorization

For z_j=u_j+i d_j in the upper half-plane, alpha_j=d_j+i u_j, the half-line log-metric representer k_j of Ff(z_j) was constructed in LBS02. The corresponding ordinary L2 representer is ell_j(s)=exp(-alpha_j s) on s>0. Let K_j=Fell_j denote its Hardy transform; Paley–Wiener identifies K_j as the Hardy evaluation kernel under our norm. Since Ff(z_j)=(Uf)(z_j)/h(z_j) and inner products are linear in the first argument,
    U k_j = kappa_j K_j,   kappa_j=1/conj(h(z_j)).
The Cauchy Gram in LBS02 now has the explicit form
    (G_w,L)_ij=conj(kappa_i) kappa_j/[conj(alpha_i)+alpha_j].        (3)
This is a diagonal congruence of the ordinary Cauchy Gram, with all diagonal factors nonzero. In particular the previously implicit half-line metric does not destroy its Cauchy structure. No approximation or finite-window inverse is involved in (3); it is the exact limiting half-line Gram.

For each current group let beta_j be the product in BPF03 over the faster signed selected pairs,
    beta_j=prod_h (alpha_j-alpha_h)/(alpha_j+conj(alpha_h)).
The Schur complement commutes with invertible diagonal congruence on the faster/current blocks (the faster diagonal factors cancel in the inverse). Therefore
    (S_w,L,k)_ij=conj(kappa_i beta_i) (kappa_j beta_j)
                       /[conj(alpha_i)+alpha_j].                    (4)
All beta_j are nonzero for distinct exponents. This gives an explicit effective singular-value matrix at every selected deviation scale via LBS02. Its determinant product equals the ordinary determinant product with an additional factor prod_(selected j)|kappa_j|^2.

For a reflection-symmetric selected set, kappa_-u=conj(kappa_u) and beta_-u=conj(beta_u). The projected left profiles phi_u therefore obey the BPF04 parity trace identity with
    c_(w,u)=m_u kappa_u^2 beta_u^2/[2(d+i u)] !=0.                   (5)
In particular no frequency disappears through cancellation within a single distinct signed ordinate. The parity-resolved scale hierarchy of LBS02 is valid with only the classical local zero count for the lower remainder. Fourier averaging, exactly as in BPF04, recovers each selected signed u and coefficient from the scaled odd-minus-even generalized spectral depth sums. If the cutoff b is known, all indices with logarithmic rates above b are exactly the selected ones; the next-index remainder bound in LBS02 separates them. Recursively compute beta_u from the already recovered faster coordinates, and kappa_u from (1); then
    m_u=2(d+i u)c_(w,u)/(kappa_u^2 beta_u^2).
Equivalently use the positive magnitude formula
    m_u=2 sqrt(d^2+u^2) |h(u+i d)|^2 |c_(w,u)|/|beta_u|^2.
This proves the conditional asymptotic inverse identifiability result in the log metric without the previous uniform weighted-density hypothesis. It still needs a finite separated leading set and asymptotic parity spectral observations, and is not a practical arithmetic computation or a claim of existence of such zeros.

## 5. Size of the new factor and conditioning

From (2), |kappa(z)|^2=exp(-P_y(log w)(x))<=1/w0. More precisely for 0<y<=1/2, put t=x+y v. The inequalities 2+|t| <= (2+|x|)(1+|t-x|/2) and the reversed version imply
    |w(t)-w(x)|<=log(1+|t-x|/2).
Since w>=w0,
    |log w(x+y v)-log w(x)|<=log(1+|v|/4)/w0.
This function is integrable against the Cauchy probability density. Hence |h(x+i y)|^2 is comparable to w(x) with positive absolute constants uniformly in this strip. In fact |h(x+i y)|^2/w(x)->1 as |x|->infinity, uniformly over 0<y<=1/2: for each fixed v the supremum of the difference in log w tends to zero by the explicit slowly growing weight, and the displayed integrable bound supplies dominated convergence. Therefore the new attenuation behaves as |kappa(x+i y)|^2~1/w(x) at large ordinates, in addition to the earlier faster-group attenuation beta. This is not a uniform conditioning bound for an arbitrarily large set.

For magnitude evaluation only the real Poisson integral is needed. Its centered log-ratio integral can be truncated at |v|<=V, V>=1, with absolute omitted error bounded by C (1+log V)/V using the displayed domination and (1+v^2)^-1<=v^-2. This is an elementary tail estimate, not an executed validated quadrature. The phase of h, if needed, is determined by the absolutely convergent analytic integral (1). No numerical evaluation was performed here.

LBS03 complete as conditional candidate: exact half-line Hardy reduction with unbounded-weight support/density justification, weighted Cauchy Gram and Schur factors, nonvanishing parity inverse-trace coefficients, magnitude conditioning estimates. The classical Hardy theorem was checked against the specific sources above; no priority or independent proof review. LBS04 next: audit the result and assess its forward-use implications. README unchanged.
