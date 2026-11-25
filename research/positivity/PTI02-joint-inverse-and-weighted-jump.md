# PTI02 — Joint inverse inequalities and exact weighted prime jump form

2026-11-25. AI-assisted candidate deduction without RH. PTI01's geometric covariance matrix is the classical Kac–Murdock–Szego matrix (fresh search excerpt https://pmc.ncbi.nlm.nih.gov/articles/PMC5121191/ identifies the tridiagonal inverse; no claim of originality). The following uses the actual von Mangoldt coefficients; no numerical run or independent verification.

## 1. Joint tower inverse: exact variational formula, limited scale

For the finite set p<exp(2a), write l_p=log p, W=sum l_p, S=sum l_p K_p=P+W I. Assume the set nonempty. Each K_p is uniformly strictly positive by PTI01. For any v,
    <v,S^-1 v>= min_(sum v_p=v) sum_p l_p^-1 <v_p,K_p^-1 v_p>.
Indeed the minimizing components are v_p=l_p K_p S^-1 v. Expanding around these components cancels cross terms since the differences sum to zero, leaving a nonnegative sum. In particular take v_p=l_p v/W to get
    S^-1 <= W^-2 sum l_p K_p^-1.
For the pole span v=A w_+ + B w_- the trial upper bound is explicit:
    <v,S^-1 v> <= W^-2 sum_p l_p [e^a(1-p^-1)(|A|²+|B|²)+2 l_p Re(A conj B)].
The exact right side follows from PTI01. The formula is not the capacity of T or A: S contains a large identity shift W I. By PNT for theta, W~e^(2a), while ||P||~e^a (PBC01). Thus ||W S^-1-I||<=||P||/(W-||P||)=O(e^-a); the harmonic trial estimate mainly measures the artificial identity shift. No inference about a near-zero eigenvalue of T can be drawn from this inverse bound.

## 2. Exact positive reference function for the actual prime sum

Let c(x)=cosh(x/2)>0, C=||c||²=sinh a+a, h=c/sqrt C. Define the bounded real function V_a=(P_a c)/c. The actual shift weights are nonnegative. Expanding squares gives the exact weighted graph identity
    D_a(f):=< (V_a-P_a)f,f>
       =sum_(2<=n<e^(2a)) Lambda(n)/sqrt n
          int_(x,x+s_n in I) c(x)c(x+s_n)
            |f(x)/c(x)-f(x+s_n)/c(x+s_n)|² dx >=0.
Each unoriented pair appears once; expanding its two diagonal terms gives V_a. This is an identity on all L²(I) since c and 1/c are bounded on fixed windows. In particular D_a(h)=0. It treats the full joint prime sum, not separate tower inverses.

Put Psi(X)=sum_(n<=X)Lambda(n) and M(X)=sum_(n<=X)Lambda(n)/n. Endpoints of shifts may be excluded without changing the a.e. identity. With w_±=e^(±x/2) and X_±=e^(a±x), direct multiplication gives
    2 P_a c = w_+ [Psi(X_-)+M(X_+)]+w_- [Psi(X_+)+M(X_-)].
The main terms Psi(X)=X give exactly e^a c. Thus
    V_a-e^a =
      [w_+(Psi(X_-)-X_-)+w_-(Psi(X_+)-X_+)]/(w_++w_-)
      +[w_+ M(X_+)+w_- M(X_-)]/(w_++w_-).
Chebyshev and partial summation give M(X)=O(1+log X)=O(1+a) here. For eta(a)=sup_(X>=e^(a/2)) |Psi(X)/X-1|, the error terms with X>=e^(a/2) total at most e^a eta(a). If X_-<e^(a/2) then x>a/2 and its normalized error coefficient is bounded by e^a w_-/(w_++w_-)<=e^(a/2), using bounded relative Chebyshev error on X>=1. The other small-X case follows by reflection. Therefore
    ||V_a-e^a||_infty <= e^a eta(a)+O(e^(a/2)+a+1).       (1)
PNT makes this o(e^a); the classical de la Vallee Poussin estimate yields O(e^a exp(-c sqrt a)) for some c>0. Fresh HTML source checked via search: Encyclopedia of Mathematics https://encyclopediaofmath.org/wiki/Distribution_of_prime_numbers states the Psi error; also https://kskedlaya.org/ant/part-2-4.html search excerpt. No stronger hypothesis invoked.

## 3. Quantitative consequence for the pole-free eigenvalue

Since P<=V_a in form order and alpha>=alpha0, mu_1(T_a)>=alpha0-e^a-||V_a-e^a||. Testing with h gives the reverse bound mu_1<=-e^a+||V_a-e^a||+O(1). The O(1) archimedean energy is justified: h zero extended has Fourier transform bounded by C min(1,1/|t|), uniformly for a>=1, by its uniform L1 norm and bounded total variation including the endpoint jumps. Integrate against alpha(t)=log(2+|t|)+O(1). The log-domain characterization includes these test vectors (inward dilation and mollification). Consequently
    mu_1(T_a)=-e^a+O(e^a exp(-c sqrt a)).
Also for the normalized ground state phi,
    D_a(phi)+< (alpha-alpha0)phi,phi>
       =mu_1-alpha0+<V_a phi,phi>
       =O(e^a exp(-c sqrt a)).
Both left terms nonnegative. This improves the o(e^a) bound of AJP01 quantitatively but does not show subexponential archimedean energy or alignment.

For the full operator A, exactly
    q_A(f)=<alpha f,f>+D_a(f)-<V_a f,f>+<H_a f,f>.
The positive D_a is not itself coercive on the orthogonal complement of h; PTI03 must address recurrence and the log penalty. No claim of actual full positivity or improved ordinary exponent.
