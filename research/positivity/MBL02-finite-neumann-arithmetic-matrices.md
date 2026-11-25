# MBL02 — Explicit finite Neumann arithmetic matrices and sharpened one-cell Schur test

2026-11-25. AI-assisted candidate deduction without RH. Uses DNB01–03 and MBL01. General Neumann spectral expansions and rank-one Schur complements are classical. No originality or independent-review claim.

## 1. Exact matrices for any finite cell partition

In cell i of length h_i, put omega_(i,n)=n pi/h_i, e_(i,n)(x)=k_(i,n) cos(omega_(i,n)(x-l_i)), with k_(i,0)=1/sqrt(h_i), k_(i,n)=sqrt(2/h_i) for n>0. The Neumann part is diagonal with alpha(omega). For rate r, eta_n=(-1)^n, q_i=exp(-r h_i), the left and right exponential overlaps are
    a_(i,n)(r)=k_(i,n) r(1-eta_n q_i)/(r²+omega_(i,n)²),
    eta_n a_(i,n)(r).
This includes n=0. Multiplying the overlap matrix by C_r of DNB02 and its adjoint gives the exact finite rate correction. For equal cells the off-diagonal exponential factors are geometric in cell separation; left/right recurrence evaluates a rate action without a dense rate matrix. Every retained rate is positive semidefinite on the full physical space.

For each actual shift s=log l, the finite prime entry is the overlap of e_(i,n)(x) and e_(j,k)(x+s) on J_i intersect (J_j-s); it vanishes if the intersection is empty. On a nonempty intersection use cos u cos v=[cos(u+v)+cos(u-v)]/2 with the exact antiderivative, including the zero-frequency constant case. Add the opposite shift or take its transpose and multiply by Lambda(l)/sqrt l. This preserves the physical zero extension. On any cell a pole vector f=c or s satisfies f''=f/4, hence integration by parts gives
    <f,e_(i,n)>=k_(i,n) [eta_n f'(l_i+h_i)-f'(l_i)]/(omega_(i,n)²+1/4).
The rank-two pole matrix is 2 c_vec c_vec* -2 s_vec s_vec*. These formulas require no zeros of zeta, frequency quadrature, or missing interval projection.

For a fixed finite rate sum and equal cells, a sharper cross-coupling estimate than MBL01's global M is available. The full-circle/physical distinction is absent here: the Neumann basis lives on the cells. Let E_N omit modes 0..N, N>=1. The two exponential columns on each cell satisfy
    ||E_N U_r||² <= 4 h³ r²(1+q)²/(3 pi⁴ N³)
by summing the n^-4 overlap bound over n>N, using disjoint cells. Also ||U_r||²<= (1-q²)/r from the sum of the two column squared norms on a cell. Therefore
    ||E_N K_J Q_N|| <= sum_(j<J) ||C_r|| ||E_N U_r|| ||U_r||.
For fixed J this tends to zero at O(N^-3/2), rather than estimating the positive boundary coupling by the full operator norm. Prime cross coupling can still be bounded by ||P|| and pole cross by the exact coefficients or a norm bound. On E_N the full lower model is bounded below by alpha((N+1)pi/h)-||P||-2||E_N s||² because K_J is positive. These sharper constants can be used directly in CAC02. No uniform N estimate as J grows is asserted.

## 2. One-cell parity and a finite strict certificate without a huge mode cutoff

Use one cell of physical length h=2a and coordinate x in [0,h], with reflection about h/2. Parity is eta_n. The boundary matrix for a single rate has no opposite-parity entries; within either parity it is the rank-one matrix
    K_r(n,k)=2 k_n k_k r²(1-eta_n q)/[(r²+omega_n²)(r²+omega_k²)].
This follows by applying [1 q;q 1]/(1-q²) to the endpoint-overlap vector (1,eta_n). In particular K_r(0,0)=2(1-q)/(h r²) and K_r(0,n)=2 sqrt(2)(1-q)/(h(r²+omega_n²)) for positive even n. All terms of these entries are nonnegative. The even pole contributions are
    H00=32 sinh²(h/4)/h,
    H0n=8 sqrt(2) sinh²(h/4)/(h(omega_n²+1/4)).
The odd pole is negative rank one.

For h<log 2 there are no prime terms, and all odd modes have n>=1. Define the explicit DNB01 lower weights
    w_n=log(n/(2h))-3h²/(2 pi² n²)
for n>=1, in the high-frequency regime n pi/h>=1. If w_1>2(sinh(h/2)-h/2), the entire odd restored operator is strictly positive, since K_J>=0 and the pole loss is bounded by its norm. For the even sector, isolate the constant. Provided w_2>0, the complementary lower form is diagonal with w_n for n positive even, since the even pole and K_J are nonnegative. Thus the scalar Schur complement of B_J is bounded below by
    L_J=alpha0+sum_(j<J) K_(r_j)(0,0)+H00
               -sum_(n>=2 even) |sum_(j<J)K_(r_j)(0,n)+H0n|²/w_n.
If L_J>0 and the odd bound is positive, B_J is strictly positive by CAC02, hence the actual A is strictly positive on the entire fixed window. Unlike testing a finite positive Ritz form, this includes its infinite-dimensional complement. It is sufficient, not necessary.

For evaluating the infinite sum, use sum_(j>=0)(r_j²+omega²)^-1<=1/omega²+pi/(4omega) by monotone integral comparison. Consequently for n positive even,
    |R_n|<= A0/n+B0/n²,
    A0=sqrt(2)/2,
    B0=2 sqrt(2) h/pi²+8 sqrt(2) h sinh²(h/4)/pi².
The omitted weighted tail n>N is at most (A0+B0/(N+1))²/[N w_(N+1)], using monotonicity and the sum over all positive integers as an upper bound. For finite retained n use actual finite rate sums with certified entry intervals. This is a computable fixed-window strict positivity certificate; it uses a true lower operator, no approximation of the omitted positive rate tail by an operator-norm error. Its current scope is prime-free h<log 2. A prime-inclusive application requires retaining exact prime entries and accounting for its complementary loss and coupling; not claimed here.

MBL02 complete as candidate. MBL03 will execute a bounded one-cell test at several prime-free lengths, preserve rigorous results, and compare with earlier positivity ranges; no claim of new best range.
