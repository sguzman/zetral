# DNB02 — Exact positive boundary resolvent correction for the archimedean form

2026-11-25. AI-assisted candidate deduction without RH, using DNB01. Classical resolvent Green functions and Dirichlet–Neumann bracketing are not originality claims. Related general bracketing: arXiv:2609.24892 (abstract actually retrieved in this work batch). No independent review or numerical spectrum.

Let I be partitioned into m intervals J_i=(l_i,l_i+h_i), in order. Write r_j=2j+1/2 for the positive rates in DNB01. For r>0 denote by G_0(r) the full-line resolvent of -d²/dx²+r² compressed to I, and G_N(r) the direct sum of the cell Neumann resolvents. Their difference D_r=G_N(r)-G_0(r) is positive by the variational order in DNB01. We derive its exact finite rank structure.

## 1. Single cell

In coordinates 0<x,y<h the free Green kernel is exp(-r|x-y|)/(2r). Let u(x)=exp(-rx), v(x)=exp(-r(h-x)), q=exp(-rh). The correction from the free kernel to the Neumann kernel solves the homogeneous equation in x, with derivatives at 0,h canceling those of the free kernel. Explicitly,
    G_N(x,y)-G_0(x,y)
       = [u(x)u(y)+v(x)v(y)+q(u(x)v(y)+v(x)u(y))]
           /[2r(1-q²)].
One verifies this by differentiating at both boundaries; the difference is homogeneous and the strictly positive Neumann resolvent equation has a unique solution. The expression also follows from the product-of-cosh formula for the Neumann Green function. It is a positive rank-two operator: the coefficient matrix is [1 q; q 1]/[2r(1-q²)] and 0<q<1. Its two exponential columns are linearly independent.

## 2. All cells

Define u_i,v_i,q_i on the respective cells and extend the columns by zero to I. The diagonal block of D_r on J_i is exactly the single-cell formula. For i<k write g_ik=l_k-(l_i+h_i)>=0. On J_i×J_k the Neumann resolvent vanishes and the free Green kernel factors, so the off-diagonal block is
    -exp(-r g_ik) v_i tensor u_k/(2r),
with its adjoint on the opposite block. Thus 2r D_r=U_r C_r U_r*, where U_r contains the 2m exponential columns, C_r has the diagonal 2x2 blocks [1 q_i; q_i 1]/(1-q_i²), and the cross blocks contain precisely the negative coefficient above. Its rank is at most 2m. Positivity is from DNB01's resolvent comparison, not from the signs of individual off-diagonal entries. Since the columns of U_r are independent (two independent functions on each disjoint cell), C_r is itself positive semidefinite by surjectivity of U_r* onto its finite-dimensional target. No assumption of simultaneous diagonalization across rates.

Since the coefficient 1/a_j in DNB01 equals 2/r_j, the difference of the actual archimedean form and its cellwise Neumann lower bound is exactly
    q_alpha(f)-q_(alpha_N)(f)=sum_(j>=0) <U_(r_j) C_(r_j) U_(r_j)* f,f>.
For f in the true log form domain this follows by subtracting finite resolvent sums and taking their limits; both forms are finite by DNB01. Every summand is nonnegative. In particular every finite partial sum produces a valid improved lower form on the *entire* physical support, not merely on a trial subspace:
    A >= alpha_N + sum_(j<J) U_(r_j) C_(r_j) U_(r_j)* - P + H.
The prime shifts and pole remain the actual arithmetic terms, not decoupled approximations. This is a monotone family of lower forms. The positive rank correction may be retained or omitted selectively by rate, but an arbitrary sub-block deletion need not preserve positivity.

## 3. The correction is bounded, but its tail is not small in operator norm

For a fixed cell length h, the diagonal-block kernel summed over rates is bounded in absolute value by a constant depending on h times
    k(x+y)+k(2h-x-y)+k(h+x-y)+k(h-x+y),
where k(s)=sum_j exp(-r_j s)=exp(-s/2)/(1-exp(-2s)). Indeed 1/(1-q_j²)<=1/(1-exp(-h)), and q_j<=1; the four products of exponentials give the four arguments. On 0<s<=2h, k(s)<=C_h/s. Each of these kernels is a reflected version of the truncated Carleman kernel 1/(x+y). Its L² operator norm is <=pi by the weighted Schur estimate
    int_0^h y^-1/2/(x+y) dy <= pi x^-1/2
(and the symmetric estimate in y). Reflections are unitary. Hence each diagonal-block sum is bounded in operator norm, uniformly over the number of terms. Positivity of the whole sum gives for any two cell components the cross-form Cauchy–Schwarz inequality, and consequently its entire form is bounded by m times the maximum diagonal-block norm. Increasing bounded positive partial sums therefore converge strongly to a bounded positive operator K_bdy, and the archimedean form equals alpha_N+K_bdy. In particular the domains of these two closed forms coincide; their difference is a bounded operator at fixed partition.

However this convergence is not in operator norm. Choose any fixed cell of length h, and N large with 1/N<h. The unit trial f_N=sqrt(N) 1_(0,1/N) supported adjacent to its left endpoint has, for rates j in [N,2N], inner product with u_(r_j) at least exp(-5)/sqrt(N). On that cell the single-cell correction has positive kernel entries, with the u tensor u coefficient at least one. Summing these N or more terms yields
    <(K_bdy-sum_(j<N) U_(r_j) C_(r_j) U_(r_j)*) f_N,f_N> >= exp(-10).
This is an unconditional fixed-partition obstruction to treating a finite boundary sum as an operator-norm approximation. It remains a valid lower form, and strong convergence is enough for fixed test vectors. No uniform bound as the partition is refined is asserted.

The exact resolvent correction isolates all archimedean coupling between cell averages and nonconstant local Neumann modes: alpha_N is diagonal in that basis, so the coupling arises entirely from K_bdy, the prime shifts, and the pole. DNB03 will exploit the explicit exponential moments to derive mode-resolved Schur bounds instead of a scalar residual penalty. No actual negative restored eigenvalue, full positivity certificate, independent verification or priority claim.
