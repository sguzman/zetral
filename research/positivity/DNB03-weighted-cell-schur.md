# DNB03 — Mode-weighted Schur bound and explicit residual coefficients

2026-11-25. AI-assisted candidate derivation, no RH assumption. Uses DNB01–02, CAC02–03. General inverse comparison and Fourier cosine expansions are classical; no originality claim or independent review.

Take m equal cells of length h=2a/m and normalized indicator synthesis V. Let E=V^perp, let R=(I-VV*)B V, and let D be the complementary shifted form B-z, as in CAC02. For a scalar pole loss gamma>=2||proj_E sinh(x/2)||² (zero for T or the even sector), define
    w_n=alpha(n pi/h)-2 S_a-z-gamma, n>=1.
For a sufficiently fine partition w_1>0. DNB01 gives D>=W, where W is the diagonal cell Neumann form with weights w_n on every cell's n-th cosine mode. By the coercive variational resolvent formula D^-1<=W^-1, and the exact Schur matrix satisfies
    S(z)>=H-z I-sum_(n>=1) R_n* R_n/w_n,
where R_n maps the coarse cell coefficients to the vector of its action coefficients in the n-th cosine mode of each cell. The same holds with any nondecreasing positive explicit lower weights, for example
    w_n^lo=log(n/(2h)) - 3 h²/(2 pi² n²) -2 S_a-z-gamma.
This strictly improves the scalar model whenever substantial residual energy lies in higher modes. It is still a sufficient bound, not the exact Schur complement. If the negative pole is retained exactly, use W0 with weights alpha(n pi/h)-2S_a-z and p=proj_E sinh(x/2); when 2<p,W0^-1 p><1, the rank-one inverse formula gives
    (W0-2p tensor p)^-1=W0^-1+2(W0^-1 p tensor W0^-1 p)/(1-2<p,W0^-1 p>).
This alternative retains its correlation with R rather than subtracting its full norm.

## 1. Exact archimedean coefficients

Write omega=n pi/h, eta=(-1)^n, r_j=2j+1/2, q=exp(-r_j h). A normalized constant has overlap (1-q)/(r_j sqrt h) with either boundary exponential. The left exponential has overlap sqrt(2/h) r_j(1-eta q)/(r_j²+omega²) with the normalized n-th cosine; the right overlap is eta times this. Both follow by elementary integration. The decoupled Neumann alpha form has zero coupling from a constant to a nonconstant cosine, so all archimedean R_n arises from the positive boundary corrections of DNB02.

For a coarse coefficient vector v_i (zero outside i=1,...,m), set
    L_i=sum_(k<i) q^(i-k-1) v_k,
    U_i=sum_(k>i) q^(k-i-1) v_k.
The contribution of rate r_j to (R_alpha,n v)_i is exactly
    sqrt(2)/h * (1-eta q)/(r_j²+omega²)
             * [(1+eta)v_i-(1-q)(L_i+eta U_i)].             (1)
Indeed the diagonal single-cell block combines the two constant overlaps; the cross blocks of DNB02 give precisely the two geometric sums and their signs. The sums can be evaluated by one left and one right recurrence per rate, without storing an m by m exponential matrix.

For each rate, the absolute row and column sums of this coefficient matrix are at most 4 sqrt(2)/(h(r_j²+omega²)). To see this, if eta=1 the diagonal is 2(1-q) and the off-diagonal geometric row sum is <=2(1-q), after the common factor is incorporated; if eta=-1 the diagonal vanishes and the off-diagonal sum is <=2(1+q). The stated bound covers both. Schur's row-column norm estimate and monotone integral comparison yield
    ||R_alpha,n|| <= 4 sqrt(2)/h [1/omega² + pi/(4 omega)]
                  = sqrt(2)/n + 4 sqrt(2) h/(pi² n²).      (2)
For a finite rate sum j<J its missing block has norm <=
    4 sqrt(2)/h [1/r_J²+1/(2r_J)].
Here sum_(j>=J) 1/(r_j²+omega²) is bounded by 1/r_J²+int_J^infinity (2x+1/2)^-2 dx. This is an explicit fixed-mode error even though DNB02 proves that the full boundary operator's tail is not small in operator norm.

## 2. Exact prime coefficients and pole bounds

For a positive shift s, write s/h=k+f, k integer and 0<=f<1. With coefficients zero outside the cells, direct overlap integration gives its two-direction sum in the n-th cosine mode:
    sqrt(2) sin(n pi f)/(n pi)
       * [(-1)^(n+1)(v_(i+k)-v_(i+k+1))
                         +v_(i-k-1)-v_(i-k)].
This holds also at exact cell alignment f=0, where both contributions vanish. Subtract the actual arithmetic weights Lambda(l)/sqrt l for B. Each direction has absolute row and column sum <=2 sqrt(2)/(pi n) since it overlaps at most two source cells. Therefore ||R_prime,n||<=4 sqrt(2) S_a/(pi n).

For u=c or s (hyperbolic cosine or sine), integration by parts against the normalized cell cosine (the normalized sine vanishes at both endpoints) gives the norm of its vector of n-th mode coefficients <=h||u'||_2/(pi n). Since the pole is 2 c tensor c-2 s tensor s, and c'=s/2, s'=c/2,
    ||R_pole,n||<=2h ||c||_2 ||s||_2/(pi n).
This is a norm bound; the coefficients themselves are elementary exponential integrals if tighter evaluation is needed.

Combining the three terms gives
    ||R_n||<=A/n+B0/n²,
    A=sqrt(2)+4 sqrt(2) S_a/pi+2h||c||||s||/pi,
    B0=4 sqrt(2)h/pi²,
with the pole term omitted for T. All constants are explicit. In particular for the weighted correction tail,
    ||sum_(n>K) R_n*R_n/w_n|| <= (A+B0/(K+1))²/(K w_(K+1)).
This follows from w_n increasing and the integral bound sum_(n>K)n^-2<=1/K. It is uniform in the number of cells except through h and S_a. It is a positive-semidefinite tail enclosure, not a claim of cancellation.

For finite certified approximate mode matrices Z_n with ||R_n-Z_n||<=epsilon_n, the first K correction terms have matrix error at most sum_(n<=K)(2||Z_n||epsilon_n+epsilon_n²)/w_n, in addition to weight and arithmetic interval errors. Adding the tail bound produces a rigorous sufficient Schur lower matrix with no full second-moment integration. Alternatively a negative quotient of H-z I minus only a finite subset of exact weighted mode Gram terms already falsifies this particular sufficient lower test, by the same reasoning as CAC03. Neither failure nor success of an uncertified numerical matrix can be interpreted as a spectral result. A bounded executed diagnostic is recorded separately.
