# RHI02 — Exact relative heat coefficient and prime-power threshold recovery

2026-11-25. Internal AI-assisted candidate deduction without RH. Uses RHI01 and the digamma formula of STS03. No numerical run, independent proof verification or originality claim.

Write L=2a, and let B(L) denote the t² coefficient of the relative heat trace F_a(t), i.e.
    F_a(t)=-2Lt+B(L)t²+o(t²),
    B(L)=tr(A_alpha H)-tr(P H)+(1/2)tr(H²).
All traces are of finite-rank operators, including the first as justified by the pole vectors' operator-domain membership in RHI01.

## 1. Arithmetic formula

For a compressed translation T_u, tr(T_u H)=2cosh(u/2)(L-|u|)_+. This follows by expanding the two pole rank-one terms, or by integrating the finite-rank kernel H(x+u,x) on x,x+u in I. Here y_+=max(y,0). In particular tr H=2L. The exact prime term is
    tr(P H)=4 sum_(n>=2) Lambda(n)/sqrt n cosh(log n/2)(L-log n)_+
           =2 sum_(n>=2) Lambda(n)(1+1/n)(L-log n)_+.
Only finitely many terms contribute for each L. The pole square is tr H²=4[(sinh a+a)²+(sinh a-a)²]=8(sinh² a+a²).

For the archimedean term, use alpha=alpha0+2 int_0^infty k(u)(1-cos(omega u))du, k(u)=exp(-u/2)/(1-exp(-2u)). Apply this form to c and s separately with their signed finite coefficients; each integral is absolutely finite because the positive difference energies are finite. Thus
    G(L):=tr(A_alpha H)
      =2L alpha0+4 int_0^infty k(u)[L-cosh(u/2)(L-u)_+]du.
At u near zero the bracket is O_L(u), so the apparent singularity is integrable. At infinity k decays. Combining,
    B(L)=G(L)+4 sinh²(L/2)+L²
            -2 sum_(n>=2) Lambda(n)(1+1/n)(L-log n)_+.    (1)
No zero ordinates enter (1). Notice the sign of the prime term: P is subtracted from A_alpha.

## 2. Exact threshold reconstruction

On compact subintervals of L>0 differentiate G under the integral: near u=0 the derivative bracket is 1-cosh(u/2)=O(u²), and at the moving boundary u=L the original bracket is continuous. One obtains
    G'(L)=2 alpha0+4 int_0^infty k(u)[1-cosh(u/2) 1_(u<L)]du,
    G''(L)=-4 k(L)cosh(L/2).
Hence G is smooth for L>0. Differentiating (1) in the sense of distributions on (0,infinity) gives
    B''(L)=[2 cosh L+2-4 k(L)cosh(L/2)] dL
            -2 sum_(n>=2) Lambda(n)(1+1/n) delta_(log n).
The ordinary density follows from 4 sinh²(L/2)=2cosh L-2. In particular B is continuous and piecewise smooth; its one-sided derivative has jump
    B'(log n+)-B'(log n-)=-2 Lambda(n)(1+1/n).
There is a nonzero jump precisely at a prime power. Its size recovers Lambda(n) by division by the explicit positive factor. Equivalently the entire atomic measure of the second distributional derivative is the prime-power measure with these coefficients. If the parameter is a rather than L=2a the corresponding derivative jump doubles and occurs at a=(log n)/2.

This is an exact spectral invariant of the *pair* of operators (A_a,T_a) across varying windows, obtained from a trace-class difference even at times where neither absolute trace is finite. It is not an inverse recovery from the ordinates alone, and the prime operator is already part of the input. It identifies exactly where the prime-power data appear in this relative heat coefficient. It does not show the full A is positive, nor estimate its low spectrum from finitely many coefficients.

## 3. Parity refinement of the prime thresholds

Let H_e=2c tensor c, H_o=-2s tensor s, extending both by zero on the opposite parity. Since T and A commute with reflection, compute each relative trace independently. For u>=0, u<L,
    tr(T_u H_e)=(L-u)cosh(u/2)+2sinh((L-u)/2),
    tr(T_u H_o)=(L-u)cosh(u/2)-2sinh((L-u)/2).
For u>=L both vanish. The identity follows by integrating 2c(x)c(x+u) or -2s(x)s(x+u), respectively, with the product-to-sum formula. Each corresponding t² coefficient is tr(A_alpha H_sector)-tr(P H_sector)+(1/2)tr(H_sector²). The archimedean part is smooth for L>0 by the same differentiation of the kernel integrals (the bracket vanishes to O(u) at zero and its first two L derivatives are uniformly O(u) locally in L). The pole part is smooth. Thus at L=log n the jump of the even and odd coefficient derivatives respectively is
    -2 Lambda(n)/sqrt n [cosh(log n/2)+1],
    -2 Lambda(n)/sqrt n [cosh(log n/2)-1].
Their sum equals the full derivative jump above. Both are negative for every prime power n>=2 despite opposite signs of the pole perturbation in the two sectors. Their difference recovers -4 Lambda(n)/sqrt n.

RHI02 complete as candidate; RHI03 next exact relative trace sign, Laplace relation and parity spectral shift. No actual anomalous state, RH proof or numerical verification.
