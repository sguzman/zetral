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

## Actual executed matrix-tail test

Source experiments/ecr03-matrix-tail-complement.js commit b0ab4b0ae9f8f2b7dfdc09199e9a880075020917, raw experiments/results/ecr03-matrix-tail-complement.json commit 60e46920cd105720c980e2b102a203e6c2a93fe9. Both exactly read back. Actual V8 execution, not a separate Node/Rust process. Reproduce: node experiments/ecr03-matrix-tail-complement.js.

Parameters unchanged from ECR02: four low modes per parity, exact high trial support through T=48, M=512 residual evaluation, J=192 rate midpoint enclosure. The rational high trials are identical to ECR02 (same deterministic midpoint Cholesky); the new verification replaces only the scalar analytic tail with the matrix-valued bound above. Compute S0, V and C3_k by outward arithmetic; retain the full rank-one matrix entries for S0 and V, subtract the trace bound only for the third-order remainder. Exact tail matrix is enclosed entrywise and included in the symmetric radius-row-sum lower test. All lower pivots, positive high weights, trial coefficients and tail data are preserved in raw JSON. The positive diagonal comparison still uses the exact disjoint strip norm b, since all tested h<=1<log 3.

Actual results: both parity sectors pass at h=4/5,17/20,9/10,19/20,1. At h=1 the even lower pivot endpoints over 10^18 are 74641589388609913,1262028605404628,13095236087722882,4264705633922599; the odd endpoints are 171093717451300492,12476325501641257,54697076189845335,946459552855024189. The high weight lower endpoints are 0.893790574143999669 and 1.012043566500355446, respectively. The even third-order scalar tail upper bound is 0.000000000871939394; the leading/second matrix contributions are separately retained and must NOT be omitted or compared to that scalar alone. At h=9/10 the smallest even lower pivot is only 0.000096395969788845, still strictly positive. These are LDL pivots of a lower Schur matrix, not ordinary eigenvalue bounds of equal magnitude.

By ECR01, CAC02 and the arithmetic enclosures, strict positivity of the entire actual fixed-window restored operator follows at each tested length. In particular the longest candidate certificate advances from h=4/5 to h=1, with no finite rate-tail loss and no global trace bound on the leading two residual directions. This is an internal advance; published larger support ranges are reported in arXiv:2608.24827. No independent validation, literature record, negative restored eigenvalue, or RH proof. Further bounded tests may cross log 3 by including all active prime shifts and replacing the prime norm comparison correctly; the present code is not valid beyond that threshold.

## Two-prime regime: exact combined strip norm

For log 3<h<log 4=2 log 2, only primes 2 and 3 act, with s_i=log i and b_i=log i/sqrt i. Put l=h-s_2 and delta=s_3-s_2=log(3/2). All positive shifts connect the left strip (0,l) and right strip (s_2,h); these strips are disjoint because h<2s_2. Translate the right coordinate by -s_2. Then the combined prime operator on the paired strips is the self-adjoint off-diagonal block with one off-diagonal operator
    T=b_2 I+b_3 S_delta
on L²(0,l), where S_delta is a one-sided compressed translation by delta (the other block is T*); the middle strip contributes zero. Since delta<l<2delta (use log 2<2 log(3/2)), split each left/right coordinate into fibers modulo delta. Each fiber of S_delta is either the zero one-dimensional shift or the two-dimensional nilpotent shift with one nonzero off-diagonal entry. The length-two fibers occur on positive measure l-delta. Thus
    ||P||=||T||=||(b_2 I+b_3 [0 1;0 0])||
         =(sqrt(4 b_2²+b_3²)+b_3)/2.
The last identity follows from the two singular values of the displayed triangular matrix. This is smaller than b_2+b_3. At h=log 3 the second shift is zero a.e.; the norm may jump as a positive-measure strip appears, so no norm continuity in h is asserted.

The exact same-parity prime overlaps are the sum of the individual Wronskian/diagonal formulas of PBCI02. In the ECR03 residual tail, replace p sin(theta_n) by sum_i p_i sin(theta_(i,n)), where p_i=2 b_i sqrt2/pi; replace p S1 in V by sum_i p_i S1_i, with S1_i=sum_j b_j j sin(theta_(i,j)) (here b_j denotes the signed normalized trial coefficient, not the prime weight). Replace C_L's p by sum_i p_i and sum the corresponding prime remainders in C3_k. The common leading row S0 remains the same. Use the exact combined norm above, or a verified rational upper bound, in the positive high diagonal G; the proof does not assume independent prime tower diagonalization. This extension applies only to the stated two-prime regime. No extrapolation across log 4.

## Actual extended one- and two-prime experiments

The source experiments/ecr03-two-prime-complement.js commit 57554ce125bb568d48c89548131d6b3cdd7d578e, raw experiments/results/ecr03-two-prime-complement.json commit e6fcb788199c72faa3b712ea45437bf070485cb9 were actually executed in V8 and read back exactly. Reproduce: node experiments/ecr03-two-prime-complement.js. Six low modes per parity, T=64, M=768, J=256. The actual prime-3 shift is included at every h>log 3 and no prime-power 4 is active (all h<log 4). The combined prime norm is bounded by the exact rational 91/100 using the triangular-fiber norm above: code verifies 2c-b3>0 and (2c-b3)^2>4b2²+b3² by outward arithmetic, and verifies the chain-length inequality. sqrt3 is enclosed by integer squaring. The high weights, actual finite entries, signed second coefficient and leading amplitude sum include both shifts. All finite trial coefficients are frozen rational data; matrix tail and entry uncertainties are outward enclosed.

Results: h=21/20 (only prime 2),11/10,23/20,6/5 (primes 2 and 3), odd lower matrices pass, even fail. At h=5/4 and 13/10 both fail. The h=6/5 odd lower pivots are all strictly positive; minimum lower endpoint 0.002623278647418808. No full certificate at these lengths. Negative lower pivots are NOT negative actual spectral evidence. The longest full certificate remains h=1.

A further trial choice minimizes the finite residual upper cost rather than merely the finite system C_T X=R_T. In each column the finite objective is
    2 R_T* X-X* C_T X+(R_M-C_M X)*G_M^-1(R_M-C_M X)
       +t1 |u0_low-u0*X|²+t2 |u2_low-u2*X|²,
where t1,t2 are the rank-one tail factors and u0,u2 the corresponding high coefficient vectors. Its quadratic coefficient is C_M*G_M^-1 C_M-C_T+t1 u0 u0*+t2 u2 u2*. A Float64 ridge-regularized solve selects a rational trial (the exact mathematical verification remains the same including the third-order tail; no optimizer property is assumed). Source experiments/ecr03-optimized-residual-complement.js commit dd19dfd9002c025e170f8de81a2257d26b658, raw experiments/results/ecr03-optimized-residual-complement.json commit bc226ff130e6976b88e00e2fd7b239f41307704e. Actual V8 execution, exact readbacks. Same parameters, tested h=21/20,11/10,23/20,6/5. Even fails every test; odd passes through 23/20 but fails at 6/5 in this particular variant. Ridge 1e-8 selected on all runs, but the rational trials and certified arithmetic, not Float64 convergence, are the evidence. This bounded refinement did not improve the certified range. No separate Node or Rust replay or independent review. ECR03 complete.
