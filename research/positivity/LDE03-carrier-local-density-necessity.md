# LDE03 — Carrier-local weighted density necessity for an anomalous residual rate

2026-11-25. AI-assisted candidate deduction without RH. Uses FES01/02, LDE01/02, and classical local counting. No actual off-line zero, numerical experiment, independent verification or priority claim. The remainder is the original paired form with any fixed finite reflection-invariant nonreal set omitted. All depths are ordinary L2.

Let B_r be the supremum of its remaining deviations, N_r(a) its bottom negative depth, and s=limsup a^-1 log(1+N_r(a)). Assume s>2B_r (otherwise there is no anomalous bottom exponent at this threshold). We derive a necessary carrier-local density condition.

## 1. Exact packet selection for the residual form

The FES01 identity holds for q_rem: subtract the finite omitted paired contributions, each of which satisfies the same complex Parseval identity separately. On the form domain this follows by the FES01 extension and ordinary continuity of each finite evaluation on its support interval. The mass and relative-moment identities are unchanged.

The residual form is closed on the same domain and its depth is nondecreasing in the support window by zero extension and the paired formula. It has ordinary lower bound -C_F exp(a) because it differs from the full arithmetic form by finitely many bounded paired terms. Hence s<=1. For s>0 the FES02 telescoping argument applies without change: for any fixed h>0 and sigma>s there is a near-limsup sequence a_l->infinity with
    log N_r(a_l)/a_l -> s, N_r(a_l+h)/N_r(a_l)<=exp(sigma h).
The penalty selection FES02, applied with any fixed even moment order 2m, m>=1, gives smooth unit packets v_l supported in (-A_l,A_l), A_l=a_l+h, Fourier centers omega_l, with
    -q_rem,A_l(v_l)>=N_r(a_l)/2 = exp[(s+o(1))A_l],
    int (1+h|t-omega_l|)^(2m) |Fv_l(t)|^2 dt/(2pi)<=M_(m,h,sigma).
Their depths are also bounded above by N_r(A_l), so the normalized logarithm of their depth tends to s. A different fixed moment order can require a different sequence of packets; no simultaneous uniform bounds for all m are assumed.

By LDE01 with theta=1, the one-bin estimate gives -q_rem(v_l)<=C(A_l+1)^6 exp(2B_r A_l)L_1(v_l). The moment bound gives L_1(v_l)<=C+log(2+|omega_l|). Thus
    log(2+|omega_l|)>=exp[(s-2B_r-o(1))A_l].
The residual arithmetic lower estimate, q_rem=L_1+B_rem with ||B_rem||<=C_F exp(A_l), and the log-shift inequality also give log(2+|omega_l|)<=C_F exp(A_l)+C. Extract a subsequence with
    kappa=lim log log(3+|omega_l|)/A_l in [s-2B_r,1].   (1)
In particular the carriers diverge doubly exponentially. The sign convention here is the Fourier center omega_l: the physical modulation undoing the carrier is exp(i omega_l x).

## 2. Pointwise paired difference using the normalized carrier moment

Put u_l(x)=exp(i omega_l x)v_l(x). Since F uses exp(itx), its transform is centered at zero and the relative moment controls ||u_l^(j)||_2 for every 0<=j<=m, uniformly in l at fixed h,m. The paired difference at z=u+id is
    Fv_l(u+id)-Fv_l(u-id)
        =int [-2sinh(dx)] u_l(x) exp(i(u-omega_l)x) dx.
On |x|<=A_l and 0<d<=1/2, every derivative up to order m of -2sinh(dx) is bounded by C_m min(1,A_l d) exp(A_l d). For zero order this follows from |sinh y|<=C min(1,|y|) exp(|y|); for positive order use d^j<=1 and, when A_l d<=1, d^j<=A_l d. Leibniz and Cauchy-Schwarz on the support of length 2A_l bound the L1 norm of each derivative of the product by C sqrt(A_l) min(1,A_l d) exp(A_l d). The product is smooth and compact, so integration by parts m times at |u-omega_l|>=1, and the direct bound below 1, yield
    |Fv_l(u+id)-Fv_l(u-id)|
       <= C_(m,h) sqrt(A_l) min(1,A_l d) exp(A_l d)
                           (1+|u-omega_l|)^(-m).      (2)
In particular its square is <= C A_l^3 d^2 exp(2A_l d)(1+|u-omega_l|)^(-2m). The paired positive terms are discarded, giving
    sum_(remaining upper pairs) m_z d^2 exp(2A_l d)
                  (1+|u-omega_l|)^(-2m)
       >= exp[(s-o(1))A_l].                           (3)
The polynomial factor A_l^3 is absorbed in o(1). This estimate does not count real zeros as a source of negative mass.

## 3. A necessary UNIT-interval weighted population near the carrier

Fix an arbitrary epsilon>0 and choose m>=2 so that
    2B_r+1-(2m-1)epsilon<s.
Select packets with this fixed moment as above. For R_l=exp(epsilon A_l), the weighted sum in (3) over |u-omega_l|>R_l is bounded by
    C_m exp(2B_r A_l)
          [log(2+|omega_l|)+log(2+R_l)](1+R_l)^(1-2m).
This follows by grouping unit intervals and the classical local count, exactly as in CZG01, with d^2<=1/4. By (1) the tail is o(exp[(s-o(1))A_l]) in (3), because of the fixed strict exponent margin in the choice of m. Thus the near-carrier sum retains the lower exponent s.

For the unit bins k intersecting this near-carrier interval, put
    Z_l(k)=sum_(u in [k,k+1)) m_z d^2 exp(2A_l d)
over the remaining nonreal upper pairs. Their weighted contribution to (3) is at most
    C_m max_(|k-omega_l|<=R_l+1) Z_l(k),
because the weights (1+|u-omega_l|)^(-2m) have a summable upper envelope over all integer bins, uniformly in omega_l. Hence there is a unit bin k_l within R_l+1 of the Fourier center with
    Z_l(k_l)>=exp[(s-o(1))A_l].                        (4)
The exponentially growing radius is negligible relative to the doubly exponential carrier, so log log(3+|k_l|)/A_l->kappa. No assertion that every near-carrier bin has large mass or that a global average density estimate can exclude a single such bin.

The conclusion may be made for any fixed epsilon>0, with the moment order and realizing sequence chosen for that epsilon. In particular a fixed unit bin, rather than a whole exponentially long window, carries the required exponentially tilted population.

## 4. Tilted density compactness and the carrier-dependent envelope

Use LDE02's local deviation profile theta_*(d) and the high-ordinate deviation set D_infty for this remainder. We show that along a selected sequence satisfying (1)-(4) there is some d_* in D_infty with
    s <= 2 d_* + kappa theta_*(d_*).                  (5)
Proof: for each fixed positive radius r, cover the compact deviation range by finitely many relative neighborhoods centered at actual possible deviations or their limit points, with upper deviation endpoint at most d+r and logarithmic density exponent at most min(1,theta_*(d)+2r), as in LDE02. At sufficiently high |k_l|, the actual deviations lie in any chosen open neighborhood of D_infty; this follows by compactness and the definition of the nested tail closures. It therefore suffices to cover D_infty, with each chosen neighborhood's sup endpoint <=d+r. For each covering set the corresponding portion of Z_l(k_l) is <=
    C_r exp(2(d+r)A_l) w(k_l)^(min(1,theta_*(d)+2r)).
Thus (4) implies
    s<=max_(d in D_infty)[2d+kappa theta_*(d)]+4r,
using the finite sum and log w(k_l)/A_l->kappa. Let r decrease to zero. The maximum exists by compactness and upper semicontinuity, so (5) follows. This reasoning takes the fixed cover before the window limit, and does not assume uniform constants for shrinking covers.

A more explicit cluster interpretation is possible: take a sequence of finite covers with r tending to zero, and for each choose a bin portion attaining the required lower exponent on a subsequence. Diagonally select windows sufficiently far out for all the fixed-cover estimates, then take a convergent subsequence of the centers in D_infty. This yields for every fixed neighborhood J of that limiting d_*,
    limsup log(1+W_(k_l,J))/A_l >= s-2d_*,
on the extracted sequence. To check this, the selected portion has tilted mass at least Z_l(k_l) divided by the finite cover cardinality; choose windows so log(cardinality)/A_l->0, its max deviation tends to d_*, and eventually its whole selected neighborhood lies in J. Divide by exp(2(d_*+o(1))A_l). In particular theta_*(d_*)>= (s-2d_*)/kappa>0, using kappa>0 and the high-ordinate limit. One can also derive (5) directly from this cluster construction. We do not infer a fixed positive lower bound on d_*: the weighted d^2 population can accumulate at zero.

The main consequence is the carrier-dependent necessary inequality, stronger than the global envelope with kappa replaced by 1. An anomalous rate needs both high carrier cost exponent and sufficiently large local weighted off-line density at a specific deviation cluster. If H_tail<=2B_r it is excluded by (5), consistent with LDE02. If H_tail>2B_r the inequality still permits such a mode; positivity of the remaining squares may further obstruct it. The argument proves no anomalous state, no unconditional density improvement, and no converse from a large tilted population to ordinary negative spectrum.

LDE03 complete as candidate. LDE04 will check known local count estimates and audit whether they actually improve the logarithmic exponent; global density estimates alone must not be used as pointwise bounds. README unchanged.
