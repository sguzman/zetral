# PBC01 — Sharp prime-shift boundary norm and strong endpoint limit

2026-11-25. AI-assisted candidate deduction, unconditional in RH. No actual off-line zero, numerical experiment, independent proof verification or originality claim. The standard prime number theorem input was checked this turn against NIST DLMF §25.16(i), equations (25.16.1) and (25.16.3), HTML lines 44–46 and 81–91, https://dlmf.nist.gov/25.16#E3: psi(X)=sum_(n<=X)Lambda(n)=X+o(X). The source is used only for this classical theorem. The arithmetic form and sign conventions are inherited from GSG03 and STS03; source provenance correction applies.

## 1. Endpoint coordinates

Let I_a=(-a,a) and use zero extension for ordinary L2 functions. Define the positive-weight self-adjoint prime-shift operator
    P_a=sum_(2<=n<=exp(2a)) Lambda(n)/sqrt(n) (T_log(n)+T_(-log(n))),
    T_s f(x)=f(x+s) restricted to I_a.
The term at n=exp(2a), if integral, acts as zero a.e. In the arithmetic Weil form this operator occurs with a MINUS sign. Positive weights do not mean P_a is positive semidefinite.

Identify L2(I_a) isometrically with the subspace L2(0,a) direct sum L2(0,a) of the fixed two-half-line space H_* by
    U_a f=( f(-a+t), f(a-t) ), 0<t<a,
and zero extension of each component. This is an ordinary L2 isometry with no midpoint trace condition. Write the normalized operator on H_* as
    exp(-a) U_a P_a U_a* = [D_L,a K_a; K_a D_R,a],
extending by zero on the range complement. Reflection identifies the two diagonal blocks. A same-half shift requires log n<a; hence each diagonal block has norm <=2 exp(-a) sum_(n<=exp a) Lambda(n)/sqrt(n) = O(exp(-a/2)) by Chebyshev's estimate and partial summation.

For the off-diagonal block put
    r_n=2a-log n,  mu_a=sum_(2<=n<=exp(2a)) exp(-a) Lambda(n)/sqrt(n) delta_(r_n).
Then, on the half-line with zero extension of the input,
    (K_a g)(t)=1_(0,a)(t) sum_n exp(-a) Lambda(n)/sqrt(n)
                         1_(0,a)(r_n-t) g(r_n-t).          (1)
Each summand is a reflection at r_n/2 compressed to (0,a), hence self-adjoint. The cross-block formula follows from x=-a+t and y=a-s, so the required positive shift is y-x=2a-(s+t). There is one shift, not a factor of two, in each cross block. All summands are positivity-preserving on real nonnegative functions.

## 2. Weighted Schur bound with sharp constant

Let h(t)=exp(-t/2), t>0, with ||h||_2=1. For 0<t<a,
    (K_a h)(t)/h(t)
       =exp(-2a+t) sum_(n: 0<2a-log n-t<a) Lambda(n)
       <=psi(exp(2a-t))/exp(2a-t).
In the equality we used exp(-a) Lambda(n)/sqrt(n) times h(r_n-t)/h(t)=exp(-2a+t) Lambda(n). Outside (0,a) the ratio is zero. Thus
    K_a h <= M_a h, M_a=sup_(X>=exp a) psi(X)/X = 1+o(1). (2)
The convergence follows directly from the prime number theorem; this supremum is finite for large a.

For completeness the weighted Schur argument applies to these discrete reflections without treating them as a bounded density kernel. Weighted Cauchy-Schwarz gives |K_a g|^2 <= (K_a h) K_a(|g|^2/h) a.e. Integrate and use (2) and the symmetric change of variable t->r_n-t for each summand to get
    ||K_a g||_2^2 <= M_a int h K_a(|g|^2/h)
                   = M_a int (K_a h)|g|^2/h
                   <= M_a^2 ||g||_2^2.
The inequality holds first for bounded compact functions, and then for all L2 by density and the finite-sum boundedness of (1). Consequently ||K_a||<=1+o(1). The constant one comes from the exact exponential weight and PNT, not a crude total-mass estimate (which would give a larger constant).

## 3. Strong convergence

For each fixed compact r-interval in [0,infinity), the positive measures mu_a converge weakly there to the density exp(-r/2) dr (test compact continuous functions on [0,infinity)). Indeed for fixed 0<=c<d and a large, the prime sum on r in [c,d] corresponds to n in [exp(2a-d),exp(2a-c)]. Partial summation of psi(x)=x+o(x) against x^-1/2, uniformly for x in this interval, gives
    exp(-a) sum_(exp(2a-d)<=n<=exp(2a-c)) Lambda(n)/sqrt(n)
       -> 2(exp(-c/2)-exp(-d/2)).
Endpoint atoms have normalized weight tending to zero (Lambda(n)<=log n). The interval convergence and bounded total mass on compacts imply weak convergence by step-function approximation. No claim of convergence in total variation: the measures are discrete at every finite a.

For g in C_c^infty(0,infinity), fix t>0. For large a both the output t and the input support are inside (0,a), and g(r-t), extended by zero, is a compact continuous test on [0,infinity). Thus (1) tends pointwise to
    int_0^infinity exp(-(t+s)/2)g(s)ds = (h tensor h)g(t).
By (2), |K_a g(t)|<=M_a h(t) sup_s |g(s)|/h(s), with a fixed finite constant for each such g. Dominated convergence in L2 gives convergence in norm for this dense family. The uniform operator bound extends it to all L2(0,infinity). Therefore
    K_a -> K=h tensor h strongly, ||K||=1.
Taking g=h shows liminf ||K_a||>=1; with (2),
    lim_(a->infinity)||K_a||=1.                           (3)
The full normalized prime operator converges strongly on H_* to the rank-two block
    C=[0 K; K 0],
and its operator norm tends to one: the diagonal blocks are o(1) and the off-diagonal self-adjoint block has norm ||K_a||. In particular the leading boundary scale exp(a) of the prime operator itself is exact and requires no RH assumption or zero locations.

This does not prove convergence in operator norm, nor positivity or negativity of the ordinary Weil form. Strong limits may miss high-frequency states. The arithmetic pole form has a leading endpoint block of the same type, so its cancellation with P_a must be examined in operator norm separately. PBC02 next: prove the norm defect from finite-shift recurrence and derive the implications for the ordinary upper spectral scale. README unchanged.
