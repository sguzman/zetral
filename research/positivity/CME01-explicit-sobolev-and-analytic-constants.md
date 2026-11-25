# CME01 — Elementary numerical Sobolev cutoff and analytic-vector constants

2026-11-25. AI-assisted candidate deduction without RH. APM01 imported the classical Shamir–Strichartz half-line multiplier theorem; this note supplies a direct, conservative numerical bound at Sobolev order 1/4, avoiding an unspecified multiplier constant. No independent verification or priority claim. The fractional Hardy and interpolation techniques are classical.

## 1. Explicit half-line Hardy estimate

For f smooth rapidly decreasing on R, put
    D(f)=int_R int_R |f(x)-f(y)|²/|x-y|^(3/2) dx dy,
    I_+(f)=int_0^infinity |f(x)|² x^(-1/2) dx.
Average |f(x)|²<=2|f(x)-f(y)|²+2|f(y)|² over y in [16x,32x], with uniform probability dy/(16x). Multiply by x^-1/2 and integrate x>0. The first term is at most
    (2/16) 32^(3/2) D_+(f)=16 sqrt(2) D_+(f)<24 D_+(f),
where D_+ restricts both points to the positive half-line; we used |x-y|<=32x. For the second term, interchange positive integrals and evaluate
    (2/16) int_(y/32)^(y/16) x^(-3/2) dx
       =(sqrt(2)-1)y^(-1/2)<(1/2)y^(-1/2).
Hence I_+(f)<=48 D_+(f)<=48 D(f). Translation and reflection give the same bound at either endpoint and on either half-line. The estimate extends to H^(1/4) by smooth approximation and Fatou.

For Q=1_(l,r), direct splitting into inside/inside and inside/outside pairs gives
    D(Qf)=D_inside(f)+4 int_l^r |f(x)|²[(x-l)^(-1/2)+(r-x)^(-1/2)]dx
         <=385 D(f).
The factor 4 includes both ordered cross-pairs and the integral of the power kernel over each exterior half-line. For the homogeneous Fourier seminorm, Plancherel applied to translations and Tonelli gives D(f)=C int |omega|^(1/2)|Ff(omega)|² d omega/(2pi) with one fixed finite positive C, by scaling the integral of |exp(i omega h)-1|²/|h|^(3/2). It applies also to Qf by the finite difference bound, so C cancels in comparing their homogeneous seminorms.

Using (1+omega²)^(1/4)<=1+|omega|^(1/2) and its lower bounds by each summand individually,
    ||Qf||_(H^1/4)² <=386 ||f||_(H^1/4)².
In particular the operator norm is <20, independent of interval location and length. At order zero the norm is one. Complex interpolation on the full-line Bessel scale yields the common bound
    ||Q||_(H^s -> H^s)<=20 for every 0<=s<=1/4.
No extension operator or boundary trace condition at positive order is being assumed.

## 2. Explicit archimedean loss

Use alpha0=psi(1/4)-log pi and k from STS03. Elementary constants give |alpha0|<7 (gamma<1, pi<4, log 2<1, log pi<log 4< 1.4). For 0<u<=1, concavity of 1-exp(-2u) and 1-exp(-2)>3/4 give k(u)<=4/(3u); for u>=1, k(u)<=4 exp(-u/2)/3. In alpha(omega)-alpha0=2 int k(u)(1-cos(omega u))du, split at r=1/max(1,|omega|) and 1. Use 1-cos v<=v²/2 on the first interval and <=2 otherwise. The three bounds are 2/3, (16/3)log max(1,|omega|), and 32/3 (the last drops exp(-1/2)). Therefore
    |alpha(omega)|<=19+6 log sqrt(1+omega²).
For 0<delta<=1/4 the multiplier loss constant is bounded by
    sup_(y>=0) (19+6y) exp(-delta y)
       <=19+6/(e delta)<7/delta,
using 19/4+6/e<7. Combining with the cutoff estimate gives ||Q alpha(D)||_(H^s -> H^(s-delta))<=140/delta.

## 3. Fully specified analytic moment bound

Fix a and put S=sum_(n<exp(2a)) Lambda(n)/sqrt n. Each zero-extended compressed shift has H^s norm <=20, so the prime operator loss is bounded by 40 S (and thus by 10 S/delta for delta<=1/4). The full pole operator has two rank-one terms with coefficients +2,-2. Write c=cosh(x/2), d=sinh(x/2) on I, extended by zero. Put
    C_a=140+10 S+(||c||_2 ||c||_(H^1/4)+||d||_2 ||d||_(H^1/4))/2.
This bounds delta times the H^s -> H^(s-delta) norm of both A and T for 0<delta<=s<=1/4, including their parity restrictions. For a pole-free estimate the final term may be omitted. By APM01's equal-loss iteration,
    ||B^n v||_2 <= (4 e C_a)^n n! ||Ev||_(H^1/4).
All constants can now be bounded by finite arithmetic and elementary real numbers.

For explicit seed norms, any compactly supported BV function v with L1 norm J and total variation V (including the jumps of zero extension) satisfies |Fv(omega)|<=min(J,V/|omega|) by distributional integration by parts. Split the Sobolev integral at |omega|=1, use (1+omega²)^(1/4)<=2 there and <=2|omega|^(1/2) beyond. This gives the conservative
    ||v||_(H^1/4)² <=2 J²/pi+4 V²/pi.
For c, J=4 sinh(a/2), V=4 cosh(a/2)-2; for d, J=4(cosh(a/2)-1), V=4 sinh(a/2). Their L² norms are known exactly from AJP02. For a restricted Fourier seed exp(i t x)/sqrt(2L_circle), J=2a/sqrt(2L_circle) and V<=(2+2a|t|)/sqrt(2L_circle), and multiply by sqrt(w) for a weighted seed. These give actual explicit upper constants in MVI03's exponential moment error estimate, not practical small constants.

CME01 complete as candidate. The interval multiplier bound above is on the real line; a periodic Fourier truncation scheme must justify its own supported-space norm comparison rather than assume this exact bound transfers unchanged to a circle. CME02 next. No actual numerical benchmark, priority claim or independent verification.
