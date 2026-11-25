# GSG01 — Global semiboundedness and the Weil criterion

2026-11-25. Internal candidate proof, no RH assumed in necessity. No formal/numerical/human verification or priority claim. Actual source inspection: Suzuki, arXiv:2606.09096v4, https://arxiv.org/html/2606.09096v4, §1.1 and §3.1 equation (3.1), unconditional paired-zero formula; §7.5 concerns translations under RH, not the necessity proved here. Prior-art search returned arXiv:2402.10604 (Explicit formula and quasicrystal definition), abstract establishing an equivalent temperedness criterion for the prime/pole measure; full theorem comparison outstanding. Standard Riemann–von Mangoldt O(T log T) zero count is used unconditionally, not re-proved.

## 1. Setting and translated correlation

Use F[f](z)=int f(x) exp(izx)dx and Gamma the distinct complex numbers z=(rho-1/2)/i from nontrivial zeta zeros, with multiplicities m_z. Gamma is invariant under conjugation and negation by the functional equation and reality; |Im z|<1/2. For compact smooth f,g, Suzuki (3.1) gives
    q(f,g)=sum_(z in Gamma) m_z F[f](z) conj(F[g](conj z)).
This is not a real-sample identity without RH. Uniform integration by parts on the closed strip |Im z|<=1/2 gives |F[f](z)|<=C_(f,N)(1+|Re z|)^(-N), so the sum converges absolutely by the standard zero count. For T_t f(x)=f(x-t) we have F[T_t f](z)=exp(itz)F[f](z). Simultaneous translation cancels in the two factors; in particular q(T_t f,T_t f)=q(f,f).

For any f define c_z=m_z F[f](z) conj(F[f](conj z)) and C_f(t)=q(T_t f,f)=sum_z c_z exp(itz). Then sum |c_z|<infinity and |C_f(t)|<=exp(|t|/2) sum|c_z|. Convergence is uniform on compact real t intervals.

Suppose some off-line zero exists. By conjugation choose z0 with Im z0<0. Choose real nonnegative smooth phi with integral 1 and compact support, then f_r(x)=r^-1 phi(x/r) for sufficiently small r>0. F[f_r](z)=F[phi](rz) tends to 1 at z0 and conj z0, so choose r making both nonzero. In fact one may choose r in any positive open interval outside a countable exceptional set: for each z, F[phi](rz) is an entire function of r not identically zero (value 1 at r=0); its real zeros are discrete. Thus a single f can detect every zero, without needing a numerical list of zeros. Fix such an f for the remainder.

## 2. Laplace poles

For Re s>1/2 the one-sided Laplace transform is absolutely convergent and Fubini gives
    L_f(s)=int_0^infinity exp(-st) C_f(t)dt
          =sum_(z in Gamma) c_z/(s-iz).
The series continues meromorphically to the entire s-plane: the points iz form a locally finite discrete set, and on any compact set avoiding them denominators are uniformly bounded away from zero, since |Re z| tends to infinity along zeros escaping compacts. The Weierstrass M-test applies using sum|c_z|. In a small disk about iz0, the other summands are holomorphic and normally convergent, so the residue is exactly c_z0!=0. Multiplicities have already been combined at each distinct z; no cancellation between different poles is possible.

If q is globally bounded below by -B||.||_2^2 for some finite B>=0 on compact smooth functions, the sesquilinear form q_B=q+B<.,.> is positive semidefinite there. Cauchy–Schwarz for positive semidefinite forms and simultaneous translation give
    |q_B(T_t f,f)|<=q_B(f,f).
The L2 correlation is bounded by ||f||^2 (indeed zero for sufficiently large |t|), so C_f is bounded. Its Laplace integral is then holomorphic throughout Re s>0, by dominated convergence on compact sub-half-planes (also for derivatives). In Re s>1/2 it equals the above meromorphic series. By the identity theorem for meromorphic functions on the connected right half-plane they agree there; the nonremovable pole iz0, with Re iz0=-Im z0>0, contradicts holomorphy. Thus no off-line zero exists.

Conversely under RH the paired formula is a sum of nonnegative squares, so B=0 works. The global lower-bound condition is equivalent to inf_(a>0) lambda_1(A_a)>-infinity: every compact smooth function fits a finite window, and the compact-test core/minmax characterization of Suzuki extends the same bound to each window. Consequently RH iff this infimum is finite from below. By U01 monotonicity, if RH fails then lambda_1(A_a)->-infinity as a->infinity; no mere isolated negative eigenvalue alternative remains.

## 3. Quantitative consequence and next milestone

Fix f normalized in L2 supported strictly in (-b,b). For t>=2b and a>=b+t/2 the two translations by +/-t/2 have disjoint supports and are orthonormal in L2. Their q matrix has diagonal q(f,f) and off-diagonal C_f(t) or its conjugate. Its smaller eigenvalue gives
    lambda_1(A_a) <= q(f,f)-|C_f(t)|.
More generally any claimed global lower bound lambda_1(A_a)>=-M(a) would bound the correlations by q(f,f)+M(b+t/2) for t>=2b. This is the bridge from Laplace pole positions to spectral growth, not yet an all-window exponential bound. GSG02 will quantify limsup growth, and investigate all-window lower bounds (including oscillatory cancellation and possible nonattainment of the maximal off-line distance). GSG03 upper growth. Related known temperedness equivalences require full prior-art comparison before asserting novelty. This result does not establish the finite lower bound and thus does not prove RH.
