# LZC03 — Admissible complex-strip measures and moving-window signed obstruction

2026-11-25. AI-assisted candidate deduction without RH. Uses LZC01–02 and LDE03's fixed-moment packet selection. No observed off-line zero, actual anomalous mode, numerical experiment, independent verification or priority claim. The model measures below are explicit abstract local measures, not a zeta zero system.

## 1. Positive admissible measures need not be uniform or supported on the critical line

Let b>0, and choose 0<=d_1<d_2<=b. For d>=0 denote by nu_d the probability measure on the vertical coordinate assigning mass 1/2 to each of +/-d (at d=0 it is the unit atom). Let Q be the positive strip kernel of LZC01, and choose
    0<lambda <= [2pi sup_x Q_(d_2,d_1)(x)]^-1.
The supremum is finite and positive because d_1<d_2. The measure
    mu(du,dv) = [1/(2pi)-lambda Q_(d_2,d_1)(u)] du nu_(d_2)(dv)
                      +lambda delta_0(du) nu_(d_1)(dv)              (1)
is positive, translation bounded and symmetric in v. For every c>b its strip projection equals 1/(2pi): the kernel multiplier identity gives exactly
    Q_(c,d_2) * Q_(d_2,d_1)=Q_(c,d_1),
since cosh(d_2 s) cancels, and the constant density is preserved by unit-mass convolution. Therefore the two nonconstant terms cancel in the sweep. By LZC01 this measure satisfies every fixed analytic test identity (2) of that note. It may contain a genuine interior off-line atom in the abstract limit (choose d_1>0); its horizontal marginal is not Lebesgue. This is stronger than the trivial translation-invariant examples and prevents identifying the full complex local measure from the fixed-envelope normalization alone.

There is nevertheless a useful boundary restriction. For any positive admissible mu supported in |v|<=b, let mu_b be its horizontal marginal restricted to the two extreme boundary lines v=+/-b (one line if b=0). For c>b positivity gives
    Q_(c,b) * mu_b <= 1/(2pi).
As c decreases to b, these kernels form an approximate identity: their unit integrals are one and their mass outside any fixed neighborhood of zero tends to zero by the explicit kernel formula (pointwise decay away from zero and uniformly integrable exponential far tails). For b=0 the same conclusion follows by dilation of Q_(c,0). For compact continuous tests, convergence of their convolutions against the translation-bounded mu_b follows by the usual approximate identity argument on compacts and the uniform tail bound. Passing to the limit shows the measure inequality
    mu_b <= du/(2pi).                                    (2)
Thus an extreme-deviation boundary population in a local limit is absolutely continuous in its horizontal coordinate, with the indicated maximal density. It cannot have an atom there, although interior atoms such as (1) are permitted. For actual high-carrier normalized zero measures, compactness also gives the successive-limit version for any fixed compact interval I:
    lim_(eta down to 0) limsup_(|T|->infinity)
       mu_T(I times {v: |v|>=b-eta}) <= length(I)/(2pi).
If not, choose T_l->infinity and eta_l->0 with a larger mass, take a vague limit, apply the upper bound for the compact sets with |v|>=b-eta fixed, then decrease eta to zero and use (2). This is a coefficient restriction at fixed horizontal resolution, not a fractional logarithmic exponent saving in unit bins.

## 2. Moving-window model saturating the signed-discrepancy exponent

Fix 0<b<1/2, let a->infinity, and choose a fixed compact smooth real envelope g of ordinary L2 norm one supported in (-r,r), r>0. Put k_a=2a-4r>0 for large a. Consider the positive symmetric model measure
    mu_a(du,dv)=(1/(2pi))[1+epsilon cos(k_a u)] du nu_b(dv),
    0<epsilon<=1 fixed.
These measures are uniformly translation bounded and converge vaguely to the uniform horizontal population du nu_b/(2pi), by the Riemann-Lebesgue lemma. For each FIXED compact smooth scalar test h with support in (-K,K), their analytic test identity is exactly h(0) once k_a>K, since Fourier inversion gives
    int Fh(u+iv) dmu_a
        = h(0)+(epsilon/2) cosh(b k_a)[h(k_a)+h(-k_a)].  (3)
This holds with the displayed constants for all compact smooth h, not just when its support is fixed. To see it, integrate over the two vertical ordinates first, producing the real-axis transform of h(s)cosh(bs), then use Fourier inversion against 1+epsilon cos(k_a u).

The c>b strip projection is explicit:
    p_(a,c)(t)=1/(2pi)[1+epsilon cos(k_a t) cosh(b k_a)/cosh(c k_a)].
Its discrepancy from the constant density is <=C epsilon exp[-(c-b) k_a]. Now scale the measure by L_a=exp[(1-2b)a], interpreted solely as a model log-carrier scale. For each fixed c in (b,1/2), its projected discrepancy from L_a/(2pi) is O(exp[(1-2c)a])=O(L_a^theta_c), with theta_c=(1/2-c)/(1/2-b), precisely the fractional exponent of LZC02. For c>=1/2 it is O(1), or decaying if c>1/2. Thus it satisfies even the exact exponent without the epsilon loss in that interpolation bound. It also has the exact fixed-test normalization for all sufficiently large windows.

Nevertheless on the growing window (-a,a), take the unit trial
    f_a(x)=[g(x+k_a/2)-g(x-k_a/2)]/sqrt(2).
The two supports are disjoint for large a and lie strictly inside the physical interval. With h_a(s)=int f_a(y+s)conj(f_a(y))dy, h_a(0)=1 and h_a(k_a)=h_a(-k_a)=-1/2. Equation (3) gives for the form represented by the scaled measure
    q_model,a(f_a)=L_a[1-(epsilon/2) cosh(b k_a)].
Hence
    -exp(-a) q_model,a(f_a) -> (epsilon/4) exp(-4br)>0.   (4)
The exact model form on ordinary L2 of the window is L_a I plus the bounded shifted autocorrelation term L_a epsilon cosh(b k_a) Re h(k_a). Its negative depth is bounded by C exp(a), since each truncated translation is a contraction and L_a cosh(b k_a)=O(exp a). Thus the model has an anomalous ordinary growth exponent one above 2b despite satisfying all the stated fixed-test limits, positive strip projection structure and signed fractional-log discrepancy bounds.

This is a family of continuous complex-strip measures depending on a, not a fixed discrete arithmetic zero set, and the reference positive term L_a is a local constant carrier cost, not the full global archimedean multiplier. The family does NOT satisfy all zeta explicit-formula or global zero-density constraints. Its purpose is precise: neither fixed-envelope analytic normalization nor the projected discrepancy estimates of LZC02 alone can exclude a moving long-window anomaly. It is not an example of a zeta off-line population or an actual ordinary zeta eigenvalue.

## 3. Necessary signed local large values at an actual anomalous residual carrier

Return to the actual residual form with remaining deviations <=b<1/2. Suppose its ordinary bottom rate s>2b. LDE03 supplies for every fixed sufficiently large even moment order a sequence of smooth unit packets v_l supported in (-A_l,A_l), Fourier centers omega_l, with
    -q_rem(v_l)=exp[(s+o(1))A_l],
    log log(3+|omega_l|)/A_l -> kappa in [s-2b,1],
and bounded normalized carrier-relative moment. Choose any fixed c with b<c<s/2 (hence c<1/2). Put
    D_c(t)=p_c(t)-(1/(2pi)) int alpha(u) Q_(c,0)(u-t)du.
This is the actual signed projected discrepancy of LZC02. The exact reconstruction gives
    q_rem(v_l)-q_alpha(v_l)
       = int D_c(t) Re[Fv_l(t+ic) conj(Fv_l(t-ic))] dt.    (5)
The archimedean expectation is log(2+|omega_l|)+O(1) by the fixed carrier moment and log shift inequality. Since kappa>0, the magnitude of the difference on the left of (5) has exponential rate max(s,kappa).

For a fixed integer m>=2 the demodulated packet has bounded H^m norm when its relative moment order is 2m. Repeated integration by parts on exp(+/-c x) times that smooth compact demodulated packet, using the same support L1 estimates as LDE03 without the small-deviation factor, gives
    |Fv_l(t+ic) Fv_l(t-ic)| <= C A_l exp(2c A_l)
                                  (1+|t-omega_l|)^(-2m).
Consequently
    int |D_c(t)| (1+|t-omega_l|)^(-2m)dt
                 >= exp[(max(s,kappa)-2c-o(1))A_l].     (6)
The rate on the right is strictly positive. The actual discrepancy obeys the coarse bound |D_c(t)|<=C w(t) from positive kernel decay and the local total count (also from LZC02). For any fixed epsilon_0>0, choose m large enough that 1-(2m-1)epsilon_0<s-2c. The weighted tail outside |t-omega_l|<=exp(epsilon_0 A_l) is then negligible relative to (6), by the same elementary weighted integral bound as LDE03 and log(2+|omega_l|)<=C exp(A_l). Here the packet sequence is chosen with this fixed m; it need not work for all moment orders.

Since the integral of the weight over R is a fixed constant, there is a real t_l within exp(epsilon_0 A_l) of omega_l with
    |D_c(t_l)| >= exp[(max(s,kappa)-2c-o(1))A_l].         (7)
The discrepancy is continuous; one may take a point within a fixed factor of the maximum. This is a signed large-value necessity, not merely a large nonreal population. The normalized carrier exponent at t_l is still kappa.

LZC02(4) therefore implies
    max(s,kappa) <= 2c+kappa theta_c                      (8)
after taking arbitrary epsilon in its logarithmic exponent bound to zero. More generally if an independent bound |D_c(t)|<=C w(t)^theta is available, replace theta_c by theta. In particular the right side with the established theta_c allows max(s,kappa)<=1 and does not by itself contradict an anomaly. This agrees with the explicit model in section 2.

## 4. Localization to the logarithmic derivative

By LZC02(1), at large |t_l| the discrepancy is
    (2/pi) Re sum_(j>=0)(-1)^j zeta'/zeta(1/2+(2j+1)c+i t_l)+o(1),
with the pole and finite-removed sweeps exponentially small. The tail with real parts >2 is absolutely bounded uniformly in t_l; the finite terms with real parts between 1 and 2 are also bounded for fixed c unless the real part equals 1, which can be included among the finite possible large-value terms. Since the lower bound (7) grows exponentially, at least one of the finitely many real lines sigma_j=1/2+(2j+1)c<=1 must have
    |zeta'/zeta(sigma_j+i t_l)| >= exp[(max(s,kappa)-2c-o(1))A_l]
on a subsequence with fixed j. Every such line is in the zero-free tail half-plane sigma_j>1/2+b.

If desired, the large value can be transferred to the FIRST line sigma=1/2+c at a nearby height. For sigma_j>sigma, choose a fixed sigma_R>2. On the rectangle between sigma and sigma_R, centered at height t_l with half-height H_l=sqrt(2 log log(2+|t_l|)), the derivative is holomorphic at large height and uniformly O(log |t_l|) by the elementary bound of LZC02. Multiply by exp((z-i t_l)^2): on the right edge the product is bounded, and on the two horizontal edges it is O(log |t_l| exp(-H_l^2))=o(1). At the interior large-value point its magnitude is multiplied by the fixed positive factor exp(sigma_j^2). The maximum modulus principle implies a comparably large value on the left vertical edge. Thus there exists t'_l with |t'_l-t_l|<=H_l and
    |zeta'/zeta(1/2+c+i t'_l)|
           >= exp[(max(s,kappa)-2c-o(1))A_l].            (9)
The carrier neighborhood remains negligible relative to |omega_l|. If j=0 use t'_l=t_l. This supplies an actual right-half-plane analytic large-value requirement for any residual anomaly; it is not known to be impossible at the indicated heights.

LZC03 establishes a boundary restriction, explicit nonuniform admissible measure, moving-window obstruction to fixed-test/strip-discrepancy reasoning, and a carrier-local signed large-value necessity. LZC04 will audit all steps and decide whether to pursue a genuinely stronger analytic estimate or a different in-scope direction.

No actual anomalous state, off-line zero, numerical experiment, independent proof verification, priority claim or RH proof. README unchanged.
