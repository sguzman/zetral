# BFA01 — Exact leading Fourier moment tail from boundary jumps and prime resonances

2026-11-25. AI-assisted candidate deduction without RH. Uses CPC04, CME02–03. Fresh primary reference check: NIST DLMF §5.11.2 https://dlmf.nist.gov/5.11.E2 gives the classical digamma asymptotic and §5.11(ii) complex remainder bounds. No claim of originality for Fourier integration by parts, Abel summation or this standard asymptotic. No independent review.

Let circle length 2L, L>2a, and v supported on I=(-a,a), piecewise C^2 with finitely many jumps J_j=v(x_j+)-v(x_j-) at distinct points modulo 2L, including zero-extension endpoints, and piecewise derivative of bounded variation. The ordinary operator B is A or T with corrected periodic symbol S(t) from CPC04; the cutoff chi can be smooth, or piecewise smooth/BV away from the origin as in CME03, constant one on the physical difference interval. For t_n=pi n/L, n>=1,
    S(t_n)=log n + c_L -2 sum_l b_l cos(t_n s_l)+O(1/n),
    c_L=-log(2L), b_l=Lambda(l)chi(log l)/sqrt l, s_l=log l.
The sum is finite with 0<s_l<L. DLMF gives Re psi(1/4+it/2)-log pi=log(|t|/(2pi))+O(t^-2). The cutoff correction to the archimedean distribution is an ordinary integrable BV kernel away from the singular origin, whose Fourier transform is O(1/|t|); the same applies to the compact pole kernel, if present. Thus the pole does not affect either leading tail coefficient below.

The normalized Fourier coefficient of v, with positive exponential convention, satisfies
    c_n=-(sum_j J_j exp(i t_n x_j))/(i t_n sqrt(2L))+O(n^-2).
This follows from distributional integration by parts; the ordinary piecewise derivative has Fourier decay O(1/n) by BV, so its contribution is O(n^-2). All remainders are uniform as n tends to infinity with the vector and window fixed. Write
    D_0=sum_j |J_j|²,
    D(s)=sum_(j,k: x_j-x_k congruent s mod 2L) J_j conj(J_k).
Then D(-s)=conj(D(s)). Distinct jumps ensure that D_0 is the zero-frequency coefficient. The pair |c_n|²+|c_-n|² equals L/(pi² n²) times the real cosine polynomial sum_(j,k) J_j conj(J_k) cos(t_n(x_j-x_k)), plus O(n^-3).

The true first-moment tail is exactly
    R_N=<Bv,v>-<B_Nv,v>=sum_(|n|>N) S(t_n)|c_n|²
by CME02 (the final support projection drops only because v is supported). To sum it, the constant term of the cosine polynomial is D_0; multiplying it by cos(t_n s_l) gives constant term Re D(s_l), since s_l is not zero or L modulo 2L. This accounts for differences both +s_l and -s_l, including interior jumps. Every other frequency is nonzero modulo 2pi, so its partial exponential sums are bounded by 1/|sin(theta/2)|. Abel summation gives an O(log N/N²) tail for the weight log n/n², and O(N^-2) for 1/n². Also the summed symbol and Fourier coefficient remainders are O(log N/N²). Finally integral comparison gives
    sum_(n>N) log n/n²=(log N+1)/N+O(log N/N²),
    sum_(n>N) 1/n²=1/N+O(N^-2).
Consequently
    R_N = L/(pi² N) [ D_0(log N+1-log(2L))
                            -2 sum_l b_l Re D(s_l)]
             + O(log N/N²).                                (1)

This is an arithmetic-dependent boundary correction: the dominant log N/N coefficient is the squared jump mass, and the next coefficient detects exact coincidences between prime-power shift lengths and jump separations. No resonance means no prime contribution at order 1/N, even if the first moment itself has large prime terms. Near but nonexact resonances can make the fixed-window O constant large; no uniform separation in a is claimed. For continuous piecewise smooth v the jump mass vanishes, and the crude O bound is not sharp (the Fourier coefficients already decay O(n^-2)). By polarization the corresponding bilinear tail formula applies to pairs of such seeds.

For the CME03 constant trial on the length-one interval, L=2, J=+1,-1 at distance one, D_0=2. The sole shift log 2 differs from one, so D(log 2)=0. The same leading correction applies to A and T:
    R_N=4/(pi² N)(log N+1-log 4)+O(log N/N²).
This predicts a substantial positive tail at N=8,16,32, consistent with the independently enclosed continuum values and the finite-cutoff sign artifact. The prediction is not itself a certified finite-N correction because the remainder constant has not yet been evaluated. BFA02 next derives an explicit bound at this benchmark and executes its interval arithmetic. No second-moment claim: <B_N²v,v> contains the intermediate support projection and is not a diagonal symbol square.
