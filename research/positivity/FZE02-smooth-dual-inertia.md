# FZE02 — Smooth dual evaluation profiles and a quantitative ordinary inertia split

2026-11-25. AI-assisted candidate deduction without RH. Uses FZE01, BPF03/VMR02's finite endpoint evaluation geometry, the paired Weil formula and classical local zero counting. No actual nonreal zero data, numerical spectrum, independent verification or priority claim. All operators and spectral counts in this note use the original ordinary L2 metric.

Let F be a fixed nonempty finite collection of distinct nonreal conjugate pairs closed under reflection, with their full multiplicities. Write r=|F| (one upper ordinate per pair, including both signed real coordinates). Assume all remaining nonreal deviations are <=b, and all selected deviations d_j satisfy d_j>=d_min>b>=0. As in FZE01, write q=q_F+q_rem on V_a, and let K_a be the common selected-evaluation kernel. Define n_full(a,t), n_rem(a,t), n_ker(a,t) to count strictly negative shifted directions, equivalently depths strictly greater than t>=0, in the respective ordinary spaces/forms.

## 1. Smooth uniformly bounded right inverse

For z_j=u_j+i d_j in the upper half-plane, put alpha_j=d_j+i u_j. On (-a,a) the normalized ordinary Riesz columns for the two selected evaluations are
    l_(j,a)(x)=exp[-alpha_j(x+a)],
    r_(j,a)(x)=exp[-conj(alpha_j)(a-x)],
with zero extension. In the inner-product-linear-first convention their evaluation coordinates are
    <f,l_(j,a)> = exp(-d_j a+i u_j a) Ff(z_j),
    <f,r_(j,a)> = exp(-d_j a-i u_j a) Ff(conj z_j).
Let E_a be their synthesis and C_a=E_a* the evaluation map into C^(2r); ker C_a=K_a. Their finite ordinary Gram tends to a block diagonal positive Cauchy Gram G=diag(G_L,conj G_L), as proved by direct exponential tails and opposite-side decoupling in VMR02. The same-side Cauchy columns are independent by distinct exponential parameters. In particular ||C_a|| is uniformly bounded for all large a.

Choose fixed compact smooth half-line profiles approximating the limiting left and right exponential columns in L2, sufficiently accurately that their cross Gram with the original limiting columns is invertible (a small matrix perturbation of G). Translate/refelect these smooth profiles to the corresponding endpoints to form a synthesis E_a^s. Their supports lie inside the window for all large a. The finite matrix M_a=C_a E_a^s tends to that invertible cross Gram: same-side integrals converge by support and exponential tails, opposite-side integrals vanish. Thus
    W_a=E_a^s M_a^-1,    C_a W_a=I,    ||W_a||<=C_F.      (1)
The range is smooth compactly supported, with coefficients in a fixed finite envelope family uniformly bounded by C_F. This is a right inverse, NOT a claim that the ordinary orthogonal projection onto the exact evaluation columns has smooth endpoint traces.

It follows that V_a decomposes algebraically as
    f=W_a c+k, c=C_a f, k in V_a intersect K_a.
The map and its inverse are bounded in the ordinary L2/direct-sum norms uniformly in a, by (1) and the bound on C_a. They are also continuous in the form norm at each fixed a (the finite-dimensional range is smooth). This need not be an orthogonal decomposition.

## 2. The residual mixed term is ordinary-norm bounded on the dual profiles

Each fixed translated smooth profile from (1) has Fourier-Laplace bound
    |F(W_a c)(u+id)| <= C_(F,p) exp(a|d|)(1+|u|)^(-p)||c||,
uniformly for |d|<=1/2 and large a. Indeed in endpoint coordinates the translation yields exp(+/-ia z), and integration by parts on the fixed compact smooth envelope yields inverse powers of its real oscillation, with derivatives of exp(+/-d t) uniformly bounded on the fixed support. The uniformly bounded coefficients in W_a preserve this estimate.

For arbitrary ordinary L2 f supported in the window, |Ff(z)|<=sqrt(I_a(b))||f|| when |Im z|<=b. By classical local counting and p>1, the paired remainder sum with one smooth dual-profile argument is therefore absolutely bounded:
    |q_rem(W_a c,f)| <= C_F exp(ba) sqrt(I_a(b)) ||c||||f||.    (2)
For f in V_a this is the actual remainder form: first use smooth tests and then approximate in the form norm; the right-hand zero sum extends continuously in ordinary norm by the displayed bound. In particular, if b>0 the constant factor in a is O_(F,b)(exp(2ba)); if b=0 it is O_F(sqrt(a)). Define
    L_a=1+exp(ba) sqrt(I_a(b)).
The finite dual-block remainder norm and mixed-block ordinary norm are O_F(L_a) (use the uniform bound on W_a for the former). This is substantially stronger than a relative log-energy estimate on arbitrary high-frequency f; it is valid only with at least one argument in the particular finite smooth dual range.

## 3. Exact block elimination at an intermediate depth

By normalization of C_a, the finite selected form in coordinates c is represented by a Hermitian matrix D_a with one block per pair, each having eigenvalues +/-m_j exp(2d_j a). For example the pair expression is 2m_j exp(2d_j a) Re[exp(-2iu_j a)c_L conj(c_R)]. Its inverse norm is <=exp(-2d_min a), since all multiplicities are positive integers. The fast term vanishes whenever either argument belongs to K_a.

For t>=0 consider the shifted quadratic form q(f,f)+t||f||^2 in the coordinates f=W_a c+k. Its finite c-block is
    A_a(t)=D_a+E_a(t), ||E_a(t)||<=C_F(L_a+t),
and the mixed block is a bounded map from K_a into C^(2r) with norm <=C_F(L_a+t), by (2) and the uniform ordinary norm of W_a. The k-block is exactly q_rem(k,k)+t||k||^2. Denote the mixed block by J_a(t) with convention cross term 2 Re<c,J_a(t)k>.

Suppose C_F(L_a+t) exp(-2d_min a) <=1/2 (enlarge C_F as needed). The finite block A_a(t) is invertible with inverse norm <=2 exp(-2d_min a), by the Neumann estimate. It has exactly r negative and r positive eigenvalues: the straight-line finite perturbation from D_a cannot cross zero since the same inverse estimate holds throughout. Complete the square by replacing c with c+A_a(t)^-1 J_a(t)k. This is a bounded invertible triangular change of variables on the form domain. The remaining k-form is
    q_rem(k,k)+t||k||^2-<A_a(t)^-1 J_a(t)k,J_a(t)k>,
where the Schur correction has ordinary norm bounded by
    Delta_a(t)=C'_F (L_a+t)^2 exp(-2d_min a).             (3)
No inverse of the possibly anomalously negative remainder form was used. The correction may be indefinite; only its norm is asserted.

The negative index of the direct sum of the finite invertible block and the Schur form equals the sum of their negative indices. For the lower bound use the direct sum of negative subspaces; for the upper bound project any strictly negative space onto the two negative spectral subspaces (a kernel vector would have nonnegative form). The Schur form is the closed kernel form plus a bounded perturbation, so these indices equal the ordinary negative eigenvalue counts at their strict thresholds. Comparing its bounded correction with +/-Delta gives, whenever t>=Delta,
    r+n_ker(a,t+Delta_a(t)) <= n_full(a,t)
                           <= r+n_ker(a,t-Delta_a(t)).   (4)
The strict count convention is maintained even at eigenvalue equalities: an ordinary depth strictly above t+Delta gives a strictly negative Schur direction, while a strictly negative Schur direction must be strictly negative for the upper comparison form at t-Delta.

In particular at t=exp(s a), with 2b<s<2d_min, L_a=o(t), t exp(-2d_min a)->0, and Delta_a(t)/t->0. The formula counts the r genuine faster negative directions plus the negative count of the residual kernel up to a vanishing relative threshold error. This remains true even if the residual itself has ordinary negative modes at much larger rates than 2b. We have not replaced the residual by its generalized log metric or assumed its ordinary norm is small.

## 4. Parity-compatible version

Physical reflection permutes the normalized evaluation columns by interchanging left at u with right at -u. Let J be the corresponding coordinate involution, so C_a R=J C_a. Replace W_a by (W_a+R W_a J)/2 if necessary; its right-inverse property, uniform bounds and fixed smooth envelope properties are unchanged, and it intertwines the involutions. Thus the decomposition and the block elimination apply on each parity separately. Each quartet gives one fast negative and one fast positive coordinate eigenvalue in each parity: the two signed conjugate pairs are exchanged by reflection, their forms are unitarily identified, and a sector consists of the corresponding symmetric or antisymmetric identified two coordinates. Therefore replace r by r/2 in (4) for each parity, and interpret all residual/kernel counts in that same sector. The error constants may be enlarged but are independent of a.

FZE02 complete as candidate: ordinary-norm mixed control from smooth dual profiles, exact inertia Schur reduction and quantitative thresholds with no remainder-density or remainder-inverse assumption. FZE03 will combine this with the annihilator in FZE01 and handle selected modes slower than a tested threshold to obtain a rate-count decomposition. No actual nonreal zero, independent verification, RH proof or numerical computation. README unchanged.
