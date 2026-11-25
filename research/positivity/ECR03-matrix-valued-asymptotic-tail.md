# ECR03 — Matrix-valued asymptotic residual tail preserving low-direction cancellation

2026-11-25. AI-assisted candidate deduction, no RH assumption, no originality or independent-review claim. Uses ECR01 and FBC02. The initial ECR02 direct residual test used a scalar trace bound and failed the even comparison even at the independently certified h=4/5. This note replaces the main tail terms by their actual low-block rank-one matrices.

Let c_j be the row of signed low-minus-high trial coefficients, as in ECR01, and b_j=nu_j c_j. These are row vectors over the finite low space. Put
    S0=sum_j b_j,    S2=sum_j b_j x_j F_eta(x_j),
    S1=sum_j b_j j sin(pi j s/h),    pc=sum_j c_j pole(j),
where x_j=(pi j/h)^2 and pole(j)=nu_j sinh(h/4)/(x_j+1/4) in even parity, -nu_j cosh(h/4)/(x_j+1/4) in odd parity (scaled overlaps). Let a=2 sqrt2 h/pi², p=2 b sqrt2/pi (b=log 2/sqrt2), e=1+E_h as in FBC01, and q_h=sinh(h/4) or -cosh(h/4) by parity. For n>M>Kmax, the exact residual row can be written
    F_n=L_n S0+V/n²+E_n,
    L_n=(2 sqrt2/h) F_eta(x_n)+p sin(pi n s/h)/n,
    V=-a S2-p S1+(2 eta/h) sqrt2 q_h h²/pi² pc.
Indeed the boundary identity of FBC02 section 4 gives the first term and -a S2/n² plus its two rational remainders. The negative prime Wronskian expansion contributes +p sin(theta_n) S0/n-p S1/n²; the pole formula gives the stated second coefficient plus its denominator correction. Thus
    |L_n| <= C_L/n, C_L=sqrt2/2+p+a e/(M+1).
The full unknown O(n^-2) part of F_eta(x_n) is included in L_n, so it multiplies S0 rather than a trace majorant.

Let m=M+1, D=1-(Kmax/m)^2, Fcoef=h/4+e h²/(pi² m). In each low column k the remainder obeys |E_(n,k)|<=C3_k/n³, where
    C3_k =
       (a/D)[Fcoef sum_j |b_jk| x_j
             + (h²/(pi² m)) sum_j |b_jk| x_j² F_eta(x_j)]
       +(p/D) sum_j |b_jk| j² (1+j/m)
       + |(2 eta/h) sqrt2 q_h h²/pi² pc_k| h²/(4pi² m).
The first two terms are the rational boundary remainders, using F_eta(x_n)<=Fcoef/n and n^-4<=n^-3/m. The prime remainder uses the same exact expansion. The last term bounds the difference of (1+h²/(4pi²n²))^-1 from one. All constants are computable by FBC02 intervals.

For a vector v in the low space, use |u+w+z|²<=2|u|²+4|w|²+4|z|² (weighted Cauchy since 1/2+1/4+1/4=1). Sum over the omitted parity, with g_n>=g_(M+1)>0 and the elementary parity power tails of LPE02. This yields the matrix inequality
    F_tail*G^-1 F_tail <=
       [C_L²/((M-1)g_(M+1))] S0* S0
       + [2/(3(M-1)^3 g_(M+1))] V* V
       + [2 sum_k C3_k²/(5(M-1)^5 g_(M+1))] I.
The leading and second terms are rank one, even when the residual has many low columns. This preserves cancellation on their orthogonal complement; the scalar trace loss now affects only the third-order remainder. An arbitrary rational trial remains admissible. No assumption that S0 or V vanish is necessary. Matrix entry intervals and radius row-sum correction are handled as in PBCI03. The inequality is valid for one active shift; for multiple shifts sum their leading amplitude bounds in C_L and their signed second coefficients in V, with the corresponding remainder sums.

ECR03 will execute this bound against the same fixed-window tests. No numerical claim yet in this note.
