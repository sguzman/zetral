# FBC02 — Midpoint rate tails and combined full-boundary/prime residual estimates

2026-11-25. AI-assisted candidate deduction without RH. Uses FBC01 and LPE02. Classical midpoint quadrature and Fourier coefficient estimates, no originality claim. No independent review.

## 1. Infinite scalar sums with elementary certified tails

Write r_j=2j+1/2, R=r_J-1=2J-1/2>0. The omitted rates j>=J are midpoints of consecutive length-two intervals partitioning [R,infinity). For a twice differentiable f with integrable f and f'', Taylor's formula integrated on each interval gives
    |sum_(j>=J) f(r_j) - (1/2) int_R^infinity f(r)dr|
      <= (1/4) int_R^infinity |f''(r)|dr.
Indeed the integral Taylor remainder has kernel (1-|u|)^2/2 on -1<=u<=1 about each midpoint; dividing by two bounds the kernel by 1/4. This avoids the O(R^-2) endpoint uncertainty of a crude monotone estimate.

Set x=t²>=0. For f(r)=1/(r²+x), |f''|<=6/r^4. Hence the nonexponential F_eta tail equals
    (1/2) I(x,R) ± 1/(2 R³),
    I(x,R)=atan(t/R)/t for t>0, and 1/R for t=0.
The omitted exponentially weighted part is bounded absolutely by
    E_J=exp(-r_J h)/[(1-exp(-2h)) r_J²].
This applies in both parities. For the diagonal kernel f_d(r)=r²/(r²+x)²=f-x f², the derivative bound |f_d''|<=26/r^4 follows by differentiating f-x f² and bounding each denominator by r²+x. Its tail equals
    (1/4)[I(x,R)+R/(R²+x)] ± 13/(6 R³),
plus an exponential tail bounded by E_J (since f_d<=r^-2). Integration uses derivative of r/(r²+x). These enclosures cover the full infinite correction, not a truncated lower operator. Evaluate F_eta once per n, and diagonal sums only for the finite selected modes; use FBC01's partial fraction formula for off-diagonal entries.

For alpha's positive series let f_a(r)=x/[r(r²+x)]. By product differentiation, |f_a''|<=12x/r^5. The alpha series has coefficient two, so its omitted tail equals
    (1/2) log(1+x/R²) ± 3x/(2 R^4).
This evaluates the full low diagonal alpha. At t=0 the expression vanishes exactly.

Elementary interval functions suffice: reduce atan of a nonnegative argument by inversion when >=1, and use atan x=pi/4+atan((x-1)/(x+1)) near one; then a finite alternating Taylor series with symmetric next-term error is valid for |argument|<=1/2. Use the log and exp series from CME03. A sharper classical harmonic-sum constant enclosure is
    gamma=H_N-log N-1/(2N)+1/(12N²)-r_N,
    0<=r_N<=1/(120N^4).
Verified source: G.J.O. Jameson (2019), *A logarithmic estimate for harmonic sums and the digamma function*, DOI 10.1186/s13660-019-2104-9, equation (1), HTML lines 62–70 actually retrieved. This is the standard Euler–Maclaurin bound; no new proof of that bound is claimed.

## 2. Weighted combined residual

Use low modes Q, full boundary seed W_b containing Q, and positive prime seed W_p also containing Q. Retain the positive even pole, if applicable, in the complementary comparison. For high n>M exceeding all selected indices, define signed boundary coefficients c_j=delta_(j,k)-Y_b(j,k), and signed prime coefficients a_j=Y_p(j,k)-delta_(j,k). The actual residual in low column k is the full boundary combination sum c_j K_nj, plus sum a_j P_nj, plus its remaining exact pole coefficient. FBC01 gives
    |sum c_j K_nj| <= C_b1/n+C_b2/n²,
    C_b1=(sqrt2/2)|sum c_j nu_j|,
    C_b2=(2 sqrt2 h/pi²) sum |c_j| nu_j [
       1+E_h+omega_j² F_eta(omega_j²)/(1-(K_b/(M+1))²) ],
where K_b is the largest boundary selected index and E_h=exp(-h/2)/(1-exp(-2h)). The prime term is bounded by C_p1/n+C_p2/n² exactly as LPE02, combining its signed leading phase amplitude. The pole tail has n^-2 coefficient bound via MBL02. With C1=C_b1+C_p1 and C2=C_b2+C_p2+C_pole, the parity weighted squared tail is at most
    [C1²/(2(M-1))+C1 C2/(2(M-1)²)+C2²/(6(M-1)³)]/g_(M+1).
Sum over low columns for a trace majorant. No assumption that boundary and prime phases cancel each other. Both leading sums can be made zero by imposing separate linear constraints on the trial (feasibility follows from W containing Q). Whether this improves the finite cost is a numerical question. The rate tail here is not a full operator norm bound.

## 3. Finite implementation

Use exact low/cross full boundary entries, full low digamma, exact prime/pole overlaps. The positive column penalties are the full boundary Gram G_b, the prime Gram G_p, and inverse positive pole coefficient h/2 in scaled coordinates. An approximate minimizer is allowed, but every trial coefficient is frozen as an exact rational. The entire penalty and finite weighted residual Gram are outward evaluated, then the combined analytic tail and matrix-radius correction are subtracted. The high diagonal lower weights remain those of PBCI02. Positive interval LDL pivots and positive high weights certify strict positivity on the full fixed window. Numerical output and any failures will be recorded in FBC03.

Fresh related-work check retrieved the abstract of arXiv:2608.24827 (reports support-length 1.6 certificate) and the search excerpt of *Full-source Schur certificates for Weil positivity at support radius two*, rstation.ai/problems/riemann_hypothesis/papers/60, which reports a full-source response/digamma displacement approach. Neither external certificate was independently evaluated. No claim of novel general Schur or rate-sum methods. FBC02 complete as candidate.

## 4. Second signed coefficient and optional leading cancellation

The first FBC03 execution revealed that a sum of absolute low-index remainder constants can dominate a small even Schur margin. A sharper expansion combines the second coefficient as well.

For the full boundary combination set b_j=c_j nu_j, S0=sum b_j, S2=sum b_j x_j F_eta(x_j), x_j=omega_j². For n>M, x=x_n and D=1-(K_b/(M+1))²>0, the exact rational formula yields
    sum c_j K_nj=(2 sqrt2/h)[ F(x) S0-S2/x
         + F(x) sum b_j x_j/(x-x_j)
         - sum b_j x_j² F(x_j)/(x(x-x_j)) ].
With |F(x)-pi/(4 sqrt(x))|<=(1+E_h)/x, it follows that the boundary contribution is bounded by C_b1/n+C_b2/n², where the new
    C_b2=(2 sqrt2 h/pi²)[(1+E_h)|S0|+|S2|
       + F_upper sum |b_j| x_j/D
       + sum |b_j| x_j² F(x_j)/(D x_(M+1))],
    F_upper=pi/(4 sqrt(x_(M+1)))+(1+E_h)/x_(M+1).
The last two terms bound the exact remaining expression after multiplying by x. This retains the signed cancellation of S2; no cancellation is assumed in the remainder.

Similarly for prime weights a_j nu_j, set A0=sum a_j nu_j and A1=sum a_j nu_j j sin(theta_j). Expanding 1/(n²-j²)=1/n²+j²/[n²(n²-j²)] gives the same C_p1 as above and the sharper
    C_p2=(2 b sqrt2/pi)[ |A1|+
       sum |a_j nu_j| j² [1/(M+1)+j/(M+1)²]/(1-(K_p/(M+1))²)].
Thus both the constant and oscillatory leading terms, and both second coefficients, are combined with signs before absolute values. The pole coefficient is still exact. Use the same parity tail formula with these improved C1,C2.

A numerical trial may enforce sum_j nu_j Y_b(j,k)=nu_k and sum_j nu_j Y_p(j,k)=nu_k, either by a constrained finite quadratic minimization or by a large finite quadratic penalty. This is optional; rounding the resulting trial to a rational may leave nonzero leading terms, which are recomputed and bounded rather than assumed zero. Any trial remains admissible. The exact verification is unchanged. The tighter formula will be tested separately; no improvement asserted in advance.
