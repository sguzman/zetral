# FBC01 — Full positive boundary correction with exact selected columns

2026-11-25. AI-assisted candidate deduction without RH. Uses DNB02, MBL02 and LPE01. Positive column compression and elementary rational series are classical. No numerical result, independent review or originality claim.

## 1. Do not discard the infinite positive rate tail

On a single physical cell of length h, use the normalized Neumann modes e_n and parity eta=(-1)^n. DNB02 proves that the entire archimedean boundary correction K is bounded positive and is the strong sum of the positive rate operators. It is not an operator-norm limit of finite rate sums. In a fixed parity, write
    nu_0=1, nu_n=sqrt2 (n>0), omega_n=pi n/h, r_j=2j+1/2,
    d_j=2(1-eta exp(-r_j h))/h,
    v_j(n)=nu_n r_j/(r_j²+omega_n²).
Then K=sum_(j>=0) d_j v_j tensor v_j in strong form, with exact matrix entries
    K_nk=(2 nu_n nu_k/h) sum_(j>=0)
        (1-eta exp(-r_j h)) r_j²/[(r_j²+omega_n²)(r_j²+omega_k²)].
These scalar sums converge absolutely; the finite column vectors themselves are in L² since K is bounded. This distinguishes exact low/cross data from a nonexistent small full operator-norm tail.

Choose W a finite physical Neumann mode isometry. Its exact Gram G_b=W* K W is positive definite. Indeed if the quadratic form vanishes on Wc, every positive rate term vanishes, so the rational function sum_(n in W) c_n nu_n/(r²+omega_n²) vanishes for infinitely many distinct r_j. Multiplying by the product of its distinct denominators gives a polynomial in r² with infinitely many roots; evaluating at its distinct poles after clearing denominators forces every coefficient to vanish. This also covers n=0. Thus c=0.

By the projection proof of LPE01,
    0<=K_W=K W G_b^-1 W*K<=K.
Moreover K_W W=KW exactly, since W*K W=G_b. If W contains the low block Q, the finite positive lower approximation preserves both QKQ and E K Q exactly, E=I-Q; only the high complementary block is reduced. No finite rate cutoff or positive tail approximation is needed in this identity. A sequence of expanding W whose spans are dense gives strong convergence of K_W to K: the corresponding projections onto K^(1/2)W increase strongly to the projection onto the closure of ran K^(1/2). No norm convergence or uniform rate is asserted.

For the actual restored operator B=D+K-P+H, the low and cross entries can therefore be computed using the full K. The high comparison retains V_b G_b^-1 V_b*, V_b=E K W. One may also retain the positive even pole and the localized prime term V_p G_p^-1 V_p* of LPE01. In the weighted variational upper bound on the complementary inverse, arbitrary trial coefficients for the full boundary columns carry penalty Y_b*G_b Y_b. There is no need to calculate a trusted numerical inverse of G_b: verify the exact quadratic cost with finite arithmetic intervals. The entire comparison is for the actual B (or a finite-column lower form matching its selected blocks), not the finite-rate B_J of PBCI03.

## 2. Scalar rate-sum reuse

Define, for x>=0,
    F_eta(x)=sum_(j>=0) (1-eta exp(-r_j h))/(r_j²+x).
For distinct x=omega_n² and y=omega_k², elementary partial fractions yield
    K_nk=(2 nu_n nu_k/h) [x F_eta(x)-y F_eta(y)]/(x-y).
For x=y use the absolutely convergent sum
    K_nn=(2 nu_n²/h) sum_j (1-eta exp(-r_j h)) r_j²/(r_j²+x)²,
equivalently (2 nu_n²/h)(F_eta(x)+x F_eta'(x)), with termwise differentiation justified by uniform summable bounds on each compact subset of x>=0. Thus evaluate a single scalar F for each high or low mode rather than a fresh rate loop for every off-diagonal matrix entry. Diagonal entries are needed only for selected finite mode Grams. When frequencies nearly coincide, interval cancellation can enlarge the enclosure; direct positive series is a safe fallback. All relevant sums have elementary explicit tails, developed further in FBC02.

For the exact low diagonal D, use alpha(t)=alpha0+2 sum_j t²/[r_j(r_j²+t²)] from DNB01. The positive omitted rate tail after J is decreasing in r and lies between
    0.5 log(1+t²/r_J²)
and that value plus 2 t²/[r_J(r_J²+t²)].
Indeed the rate spacing is two, so multiplying the integral comparison by two gives the integral of t²/[r(r²+t²)] and the endpoint term. This avoids simply dropping the positive low-diagonal rate tail. At t=0 both vanish. No exact real arithmetic is assumed; the logarithm and constants need certified enclosures.

## 3. Preliminary full-boundary high-mode coefficient

For omega>0, the nonexponential part of F differs from its half-integral over (0,infinity) by at most 1/omega²: compare the decreasing function 1/(r²+omega²) on the mesh r_j=.5+2j, with the missing initial interval of length .5 and the first endpoint term. Its half-integral is pi/(4 omega). The exponential part is bounded by E_h/omega², E_h=exp(-h/2)/(1-exp(-2h)). Hence
    |F_eta(omega²)-pi/(4 omega)| <= (1+E_h)/omega².
For fixed low or selected k and high n>M>k, insert this estimate into the off-diagonal formula
    [x F(x)-y F(y)]/(x-y)=F(x)+y[F(x)-F(y)]/(x-y).
Since F is positive decreasing in x (all weights are positive), the absolute second term is <=y F(y)/(x-y). Therefore
    K_nk=nu_n nu_k/(2n)+O_(h,k,M/n)(n^-2),
and explicitly its remainder is at most
    (2 nu_n nu_k h/(pi² n²)) [
       1+E_h+omega_k² F_eta(omega_k²)/(1-(k/(M+1))²) ].
For n>0, nu_n=sqrt2. In a signed linear combination of full-boundary columns the leading coefficient is sqrt2/2 times the signed sum of the nu_k-weighted coefficients, just as the prime phase tail in LPE02. Combine before taking absolute values. This yields an O(n^-2) residual boundary tail if the leading coefficient cancels, without approximating the infinite boundary correction in norm. No cancellation is guaranteed for an arbitrary finite optimizer.

FBC01 complete as candidate. FBC02 will tighten the infinite scalar rate enclosures, combine full boundary and prime high tails and develop an executed arithmetic test. No RH proof, actual negative restored eigenvalue or novelty claim.
