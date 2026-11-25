# LDE01 — Fractional logarithmic density bounds in the ordinary metric

2026-11-25. AI-assisted candidate deduction; no RH assumption, actual off-line zero, numerical experiment, priority claim or independent verification. Imports the paired Weil identity and classical local count from GSG03; no fresh literature inspection is claimed. F may be any fixed finite reflection-invariant subset of nonreal pairs removed from the form, including the empty set.

Let q_rem denote the remainder form. Its ordinary log-domain is unchanged by finite removal. Write w(t)=1+log(2+|t|), L_theta(f)=int w(t)^theta |Ff(t)|^2 dt/(2pi), 0<=theta<=1. Write d>0 for upper-ordinate deviations and count multiplicities m_z. For a deviation bin I contained in (0,b], let
    W_(k,I)=sum_(u in [k,k+1), d in I) m_z d^2.
Suppose W_(k,I)<=C_I w(k)^theta. This is an explicit hypothesis; the classical local total count alone gives theta=1. Define the nonnegative bin deficit
    D_I(f)= (1/2)sum_(d in I) m_z |Ff(u+id)-Ff(u-id)|^2.
Positive paired squares and real-ordinate squares can be discarded for a lower form estimate.

## 1. Uniform fractional weighted sampling

For f smooth and compactly supported in (-a,a), a>=1, the fundamental theorem of calculus gives
    D_I(f)<=2 sum_k W_(k,I) sup_(u in [k,k+1], |v|<=b)|F'f(u+iv)|^2.
The disk mean-value inequality with radius 1/a bounds each supremum by a^2/pi times the integral of |F'f|^2 over [k-1,k+2] times [-b-1/a,b+1/a]. The rectangles have bounded horizontal overlap, and w(k)^theta is comparable to w(u)^theta on each, uniformly for 0<=theta<=1. Therefore
    D_I(f)<= C C_I a^2 int_(|v|<=b+1/a) int_R w(u)^theta |F'f(u+iv)|^2 du dv.

For the inner integral put m_v(x)=ix exp(-vx) eta_a(x), where eta_a is the fixed-width smooth support cutoff of GSG03. Its L1 and second derivative L1 norms are <=C(a+1)^2 exp(|v|(a+1)), uniformly for |v|<=3/2. Hence the Fourier transform has weighted L1 norm with weight w^(theta/2) bounded by the same quantity times an absolute constant (split at frequency 1 and use decay t^-2). The elementary inequality w(s+t)<=C w(s)w(t) implies the same submultiplicativity up to an absolute constant for w^(theta/2), uniformly in theta. Weighted Young's inequality, using F'f(u+iv)=F(m_v f)(u), yields
    int w(u)^theta |F'f(u+iv)|^2 du
       <= C(a+1)^4 exp(2|v|(a+1)) L_theta(f).
The v interval is bounded and |v|(a+1)<=ba+O(1). Thus
    D_I(f)<= C C_I (a+1)^6 exp(2ba) L_theta(f).        (1)
All constants except C_I are uniform in b in [0,1/2] and theta in [0,1]. The d^2 weight is essential for bins approaching zero. The bound extends to the closed log domain by approximation: each individual sample is ordinary-norm continuous at fixed a, and the nonnegative deficit series is controlled by Fatou (or by the bound on smooth differences). The paired form inequality extends from the core.

## 2. Ordinary negative-subspace energy budget

The original arithmetic form has q_a=L_1+<B_a f,f>, with ||B_a||<=C exp(a) by GSG03. Finite removal adds a bounded perturbation with norm <=C_F exp(a) for a>=1, by the finite evaluation estimate I_a(d)<=exp(2da)/(2d) for each fixed d>0. Thus q_rem=L_1+<B_rem,a f,f>, ||B_rem,a||<=C_F exp(a). On every ordinary unit vector in any negative subspace of q_rem,
    L_1(f)<=C_F exp(a).
By concavity of x^theta, applied to the Fourier probability measure of the unit vector,
    L_theta(f)<=L_1(f)^theta<=C_F' exp(theta a).      (2)
The same conclusion holds at theta=0 with L_0=1.

Partition all remaining positive deviations into finitely many bins I_i with sup I_i=b_i and assumed local exponents theta_i as above. On any unit vector of a negative subspace, the paired formula and (1)-(2) yield
    -q_rem(f)<= C_F (a+1)^6 sum_i C_i exp[(2b_i+theta_i)a].
The ordinary coarse lower bound also gives -q_rem<=C_F exp(a). Consequently every indexed residual negative depth has the uniform upper exponential rate
    limsup_(a->infinity) a^-1 log(1+N_(rem,j)(a))
       <= min(1, max_i (2b_i+theta_i)).               (3)
This follows already from the bottom bound, and applies in both parity sectors. There is no claim that every term is attained or that the estimate excludes all anomaly rates.

## 3. A weaker sufficient hypothesis for exact rates

If for every epsilon>0 the entire residual weighted population obeys W_k<=C_epsilon w(k)^epsilon, then (3) with one bin gives upper rate 2B_rem, where B_rem is the supremum of remaining deviations. This condition permits unbounded W_k. For the original form, GSG02/NIR03 give the corresponding lower rates from finite cardinal trials. For indexed upper bounds, remove finitely many faster pairs at any b>b_j, where b_j is NIR03's jth deviation order statistic; the same subpower bound survives removal. A j-dimensional negative span intersects the at-most-(j-1) fast negative-direction constraints, on which the faster contribution is nonnegative. The remainder bound with b and (2), using the ordinary energy bound on the original negative span, then gives upper rate 2b+epsilon. Let b decrease to b_j and epsilon decrease to zero. Thus the previously sufficient uniformly bounded weighted population can be replaced by subpower logarithmic growth for matching all ordinary indexed rates (including parity with the quartet count). If fewer than j pairs exist, the negative index is at most their number by the paired formula. The subpower hypothesis is not established for zeta.

LDE01 completes the fractional weighted sampling and conditional ordinary rate bounds. LDE02 will resolve the bin envelope and indexed threshold without requiring subpower growth across all deviations. README unchanged.
