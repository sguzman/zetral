# VMR01 — Fixed-window vanishing log metric and quantitative depth comparison

2026-11-25. AI-assisted candidate deduction. Uses LBS01's form-domain identification and compact embedding, and the arithmetic decomposition in GSG03/NIR04. Source provenance qualifications in research/SOURCE-PROVENANCE-CORRECTION.md apply; no fresh source inspection or originality claim in this note. No RH assumption, actual off-line zero, numerical experiment or independent human/formal verification.

Let I=(-a,a), V_a the closure of C_c^infty(I) in the logarithmic energy norm L(f)=int w(t)|Ff(t)|^2 dt/(2pi), w(t)=1+log(2+|t|). All functions are zero extended. Write q_a=L+B_a as quadratic forms, with B_a a bounded self-adjoint ordinary L2 operator (including alpha-w, finite prime shifts and pole contribution), and D_a=||B_a||. LBS01 establishes that V_a is the ordinary closed form domain and its inclusion into L2(I) is compact. For a>=1 the classical arithmetic bounds give D_a<=C exp(a).

## 1. The regularized operator

For epsilon>0 equip V_a with metric L_epsilon(f)=||f||_2^2+epsilon L(f), equivalent to L at each epsilon. Denote its inclusion by j_epsilon and the bounded self-adjoint representing operator of q_a by Q_(a,epsilon). Exactly,
    Q_(a,epsilon)=epsilon^-1 I + j_epsilon* (B_a-epsilon^-1 I) j_epsilon.
Indeed the first term has quadratic form epsilon^-1||f||^2+L(f). The second term is compact, so the essential spectrum consists of the single point epsilon^-1, with finitely many nonpositive eigenvalues. The negative index equals the ordinary negative index because the forms have exactly the same domain and sign; the kernels coincide as sets by the ordinary form representation theorem. Nonzero spectra are not equal.

Let N_j(a)=max(0,-lambda_j(A_a)) for the ordinary compact-resolvent operator, and N_j^epsilon(a) the nonnegative jth negative magnitude of Q_(a,epsilon), zero padded. Both are the corresponding negative Rayleigh minmax, with zero applied after taking the sup over j-dimensional subspaces of V_a of the inf of -q/metric. For positive depths one can restrict to strictly negative subspaces; if no such subspace exists the depth is zero. This convention avoids a false monotonicity assertion for positive eigenvalues.

For each fixed a,
    0<=N_j^epsilon<=N_j,
    N_j^epsilon is nondecreasing as epsilon decreases,
    lim_(epsilon down to 0) N_j^epsilon=N_j.             (1)
To see the limit when N_j>0, take X_j the span of the first j ordinary negative eigenvectors, so -q(f)>=N_j||f||^2 on X_j. Its maximal log energy on the L2 unit sphere, M_j(a), is finite by finite dimensionality and form-domain membership. On this trial,
    N_j^epsilon >= N_j/(1+epsilon M_j).                  (2)
Together with the upper bound this proves (1); the zero case follows directly. No exchange of a->infinity and epsilon->0 is justified by (1).

## 2. Quantitative ordinary-depth enclosure

On X_j, q_a=L+<B_af,f> and q_a<=-N_j||f||^2. Thus L(f)<=(D_a-N_j)||f||^2. In particular D_a>=N_j+inf w whenever N_j>0. Substituting in (2) and rearranging yields the fixed-window two-sided estimate
    N_j^epsilon <= N_j <= (1+epsilon D_a) N_j^epsilon/(1+epsilon N_j^epsilon).   (3)
The algebra uses N_j^epsilon(1+epsilon(D_a-N_j))<=N_j; all denominators positive. If N_j=0 both sides vanish. Consequently
    0<=N_j-N_j^epsilon <= epsilon N_j^epsilon (D_a-N_j^epsilon)/(1+epsilon N_j^epsilon)
                         <= epsilon D_a N_j^epsilon.
A sharper version uses an independently bounded M_j in (2). These comparisons are uniform in j for a fixed a but D_a may grow like exp(a). For expanding a, epsilon exp(a)->0 is a sufficient condition for relative comparison of the nonzero ordinary and generalized negative depths, including any varying index j. This is a sufficient rate, not a necessary one.

There is a useful inverse statement: if N_j>(1+theta)N_j^epsilon>0 then (2) implies M_j>theta/epsilon. At least one unit vector in the first j ordinary negative spectral subspace must carry such log energy; it need not be a single eigenvector for j>1. The stronger exact comparison (3) also gives a bound on the maximum possible discrepancy from the arithmetic norm D_a. No unconditional uniform M_j improvement follows from these estimates.

All statements restrict to parity because both q and L_epsilon commute with reflection; one simply uses the first j ordinary negative eigenvectors of the specified sector. No pairing or equality of parity eigenvalues is assumed.

VMR01 complete as candidate: bounded regularized operator, negative-index and kernel preservation, fixed-window monotone convergence, and explicit ordinary-depth comparison. VMR02 must control the joint metric Gram and lower remainder; fixed-window convergence alone does not do that. README unchanged.
