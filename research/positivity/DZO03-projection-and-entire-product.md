# DZO03 — Signed strip discrepancy and entire-function realization of the fixed discrete model

2026-11-25. AI-assisted candidate construction of an abstract zero system, NOT the zeros of zeta. No actual off-line zeta zero, RH proof, numerical experiment, independent verification or priority claim. Uses DZO01–02 and the explicit positive strip kernel from LZC01. All parameters and nodes are fixed independently of the test window.

Fix 0<b<1/2 and s in (2b,1], with kappa=s-2b. Write Gamma for the quantile-discretized multiset, beta for the baseline real counting density, and Q_(c,d) for the positive strip kernel of LZC01, c>b and |d|<=b.

## 1. The actual discrete strip projection

Define
    p_(Gamma,c)(t)=sum_(z=u+id in Gamma) Q_(c,d)(t-u).
The unit-bin count and exponential kernel decay make this a positive continuous function. The corresponding continuous projection of DZO01 is
    p_(cont,c)=Q_(c,0)*r_0+Q_(c,b)*r_off.
Evenness in d makes the two nonreal vertical masses combine into the second term.

The cumulative quantile discrepancy is bounded on each horizontal line and each half-line. Apply integration by parts to the test Q_(c,d)(t-u) in the variable u. Its boundary terms vanish, and the L1 norm of its derivative is finite and independent of t, by translation invariance and the explicit sech kernel. Thus, for every fixed c>b,
    sup_t |p_(Gamma,c)(t)-p_(cont,c)(t)|<=C_(c,b).       (1)
This is a bounded absolute error, not merely convergence after normalization by log t. No error bound uniform as c decreases to b is claimed.

## 2. Exact cancellation and quantitative moving discrepancy

Recall Fp_b(v)=cosh(bv) Fp(v), where p_b=Re p(.+ib) is the subtracted real density. The Fourier multipliers of Q give
    Q_(c,0)*p_b=Q_(c,b)*p
because sech(cv) cosh(bv)=cosh(bv)/cosh(cv). This holds after either carrier translation as well. Therefore the nonoscillatory parts cancel in the continuous projected density exactly, giving
    p_(cont,c)(t)-(Q_(c,0)*beta)(t)
        =eps eta sum_(l,sigma=+/-1) L_l
                        [Q_(c,b)*r_(l,sigma)](t),      (2)
where r_(l,sigma)(u)=p(u-sigma T_l)cos(k_l(u-sigma T_l)). The passage from finite sums is justified by DZO01's local logarithmic domination and exponential decay of Q; the same estimates below also give locally normal convergence of the right side.

After translating the argument by sigma T_l, the Fourier transform of each convolution in (2) is
    [cosh(bv)/cosh(cv)] [Fp(v+k_l)+Fp(v-k_l)]/2.
It is supported in the two fixed-width bands around +/-k_l. For fixed c>b, all fixed-order derivatives of cosh(bv)/cosh(cv) on those bands are bounded by C_(c,b,N) exp[-(c-b) k_l], by the elementary quotient expression in exponentials on each half-line. The translated Fp factors are fixed compact smooth functions. Inverse Fourier transformation, with N integrations by parts, consequently yields for every fixed integer N>=2,
    |[Q_(c,b)*r_(l,sigma)](t)|
       <= C_(c,b,N) exp[-(c-b) k_l](1+|t-sigma T_l|)^(-N).
This estimate is uniform in l; finitely many small bands can be absorbed in the constant.

By k_l=2a_l-4r and L_l=exp(kappa a_l),
    L_l exp[-(c-b)k_l] = exp(4r(c-b)) exp[(s-2c)a_l].
Put
    gamma_c=max(0,(s-2c)/(s-2b)).
For c>b this exponent lies in [0,1), and the last expression is bounded by a constant times L_l^gamma_c. Apply DZO01's lacunary domination lemma with this exponent in (2), and then use (1). We obtain
    |p_(Gamma,c)(t)-(Q_(c,0)*beta)(t)|
         <= C_(c,b,s) [log(2+|t|)]^gamma_c.             (3)

For b<c<1/2 and s<=1, gamma_c<=theta_c=(1/2-c)/(1/2-b): if s<=2c this is trivial, otherwise
    (s-2c)/(s-2b)=1-2(c-b)/(s-2b)
                    <=1-2(c-b)/(1-2b).
For c>=1/2, gamma_c=0. Since beta(t)=alpha(t)/(2pi)+O(1) on the real line (the baseline logarithm and the digamma asymptotic differ by a bounded function), convolution by the unit-mass Q_(c,0) preserves this bounded difference. Thus the fixed discrete model satisfies the SAME signed projection bound
    |p_(Gamma,c)(t)-(1/(2pi)) int alpha(u) Q_(c,0)(t-u)du|
       <= C_(c,b,s) [log(2+|t|)]^theta_c,               (4)
with theta_c=max(0,(1/2-c)/(1/2-b)). In fact for s<1 the model may have a strictly smaller exponent gamma_c than theta_c. For s=1 the derived exponent matches theta_c on every b<c<1/2, without any epsilon loss. This is a bound, not a claim that all the pointwise maxima are attained. The model does NOT satisfy LZC02's specific arithmetic log-derivative identity for zeta; only its positive-kernel and discrepancy estimates are matched.

## 3. Exact high-carrier local test constraints

DZO02 proved that on every fixed physical support window the discrete paired form is the positive log reference form plus a bounded ordinary perturbation. The perturbation is independent of the modulation frequency at that fixed window. Thus the proof of LZC01 sections 1–2 applies verbatim: the shifted normalized measures
    (log(2+|T|))^-1 sum_(z=u+id in Gamma) delta_(u-T,d)
are locally precompact, and every vague limit mu satisfies
    int Fh(u+id) dmu(u,d)=h(0), h in C_c^infty(R).
Here the local count bound supplies the uniform rapid-test tails, and the log shift estimate supplies the exact fixed-envelope normalization. In particular their positive strip projection is identically 1/(2pi) for every c>b, and their boundary population obeys LZC03's domination by du/(2pi). The model is compatible with these constraints at ALL diverging carriers, not merely its designed sequence T_l.

Combining this with DZO02 gives a single fixed discrete multiset with classical leading zero count, globally only O(log T) nonreal zeros, deviation supremum b, ordinary exponent s>2b, and the full fixed-test projection identity plus the signed discrepancy bound (4). Thus neither global zero-density rarity nor these local projected analytic constraints, even taken together with the ordinary log-form structure, can exclude anomalous ordinary rates in the broader class of abstract zero systems. The specifically arithmetic Weil kernel or comparably stronger information remains necessary.

## 4. An entire function with precisely these symmetric zeros

There is also a direct entire-product realization, without claiming any Euler product. Choose one representative gamma with positive real ordinate from each reflection pair of Gamma. The unit-strip count gives
    sum_(Re gamma>0) |gamma|^-2 < infinity,
by grouping ordinates in unit intervals (finitely many small ordinates are harmless). Define
    E(z)=prod_(Re gamma>0) (1-z^2/gamma^2).
The product converges normally on compact z sets by the preceding summability; standard elementary infinite-product estimates show it is entire, equals one at zero, and has exactly the prescribed simple zeros at +/-gamma. Conjugate representatives occur together, so E is even and real-entire: E(conj z)=conj E(z).

For R>=2,
    log max_(|z|<=R)|E(z)| <= sum_(Re gamma>0) log(1+R^2/|gamma|^2)
                             <= C R log(2+R).
To verify the last bound, let n(t) count representatives of modulus <=t. The strip bound and DZO02's count give n(t)<=C t log(2+t) for large t. Integration by parts against log(1+R^2/t^2), whose negative derivative is 2R^2/[t(t^2+R^2)], gives an integral bounded by C R log R: split t<=R and t>=R, using n(t)=O(t log(2+t)). The finite small t range is O(log R), and the boundary terms vanish since n(t)=0 near zero and the logarithmic factor decays as t^-2 at infinity. Hence E has order at most one. The Riemann-von Mangoldt leading count also gives n(R)>=c R log R for large R, since |Im gamma|<=b. Jensen's formula then rules out any entire order less than one (use its disk of radius 2R to bound n(R) log 2 by log maximum there, since E(0)=1). Thus the order is exactly one.

The entire function Xi_Gamma(w)=E((w-1/2)/i) is of order one, satisfies Xi_Gamma(1-w)=Xi_Gamma(w), and is real-entire in w by the evenness and reality of E. Its zeros lie on Re w=1/2 and Re w=1/2 +/- b and obey the stated counting asymptotics. This supplies the standard reflection/conjugation symmetry of a completed zeta-like function, but does not supply a gamma-factor/Dirichlet-series identity, Euler product, or arithmetic explicit formula. It is not zeta, and it is not a counterexample to RH.

DZO03 completes the projection and entire-product checks of the fixed discrete model. DZO04 will audit the full construction and record precisely which assumptions are insufficient. No actual zeta off-line zero, independent proof verification or novelty claim. README unchanged.
