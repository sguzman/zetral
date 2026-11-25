# DNB01–02 independent form and kernel audit

- ID: DNB-AUDIT-W01
- Status: READY_FOR_REVIEW
- Starting commit: `3eb7476` (`Derive exact positive cell-boundary resolvent corrections and nonuniform tail`)
- Scope: independent estimate audit of DNB01–02; no numerical run or prior-art claim.

## DNB01 form order

The series term is exactly
\[
 \frac1{a_j}\frac{t^2}{t^2+r_j^2},\qquad a_j=j+\tfrac14,\quad r_j=2a_j.
\]
The variational resolvent formula reverses the form order (L_N\le L_0\le L_D), so (I-r_j^2(L+r_j^2)^{-1}) has the required increasing order. Positive summation gives the Neumann lower and Dirichlet upper forms for the compressed full-line multiplier. On the zero-cell-average space, the cellwise Neumann constants vanish, leaving the modes (n\ge1).

The global symbol bound is consistent: for (|t|\ge1), ​\(\Re\log z\ge\log(|t|/2)\), ​\(\Re(1/(2z))\le1/(2t^2)\), and the cited sector remainder is at most (2\sqrt2/(3t^2)), whose total is below (3/(2t^2)). For (0<t\le1), the first positive series term is (16t^2/(1+4t^2)); after subtracting \(\log(t/(2\pi))\), its lower envelope has its minimum at (t_0=(\sqrt2-1)/2). This matches CAC01’s interval check.

For the negative pole direction (s(x)=\sinh(x/2)), cellwise mean-zero orthogonality permits replacing (s) by (s-\bar s_i); Neumann Poincare gives (\|P_Es\|^2\le(h/\pi)^2\|s'\|^2). On ((-a,a)), (\|s'\|^2=(a+\sinh a)/4), giving the stated pole loss (h^2(a+\sinh a)/(2\pi^2)). The prime bound (2S_a) uses each zero-extended shift as a contraction.

## DNB02 resolvent correction

On a single cell, subtracting (e^{-r|x-y|}/(2r)) from the Neumann Green function gives the stated kernel with coefficient matrix
\[
 \frac1{2r(1-q^2)}\begin{pmatrix}1&q\\q&1\end{pmatrix},\qquad q=e^{-rh}.
\]
It is positive rank two. Between ordered distinct cells the difference is the negative free Green block (-e^{-rg}v_i\otimes u_k/(2r)); the global operator difference remains positive by the resolvent form order, despite those negative off-diagonal blocks. Multiplying by the DNB01 coefficient (1/a_j=2/r_j) yields the finite-rank summand (U_{r_j}C_{r_j}U_{r_j}^*) with the normalization stated in DNB02.

The boundedness argument is sufficient at each fixed finite partition: diagonal-block kernels are dominated by reflected Carleman kernels, the Schur test gives norm at most \(\pi\) for (1/(x+y)), and positivity plus block Cauchy–Schwarz bounds the whole sum by (m) times the largest diagonal bound. The high-rate boundary layer trial has ​\(\langle f_N,u_{r_j}\rangle\ge e^{-5}/\sqrt N\) for (N\le j\le2N) and large (N); the (u\otimes u) coefficient is at least one. Summing at least (N) such positive contributions gives the claimed fixed positive lower bound on the operator-norm tail. Therefore strong convergence and a bounded form correction are available, while norm convergence of finite boundary sums is not.

## Limits

No flaw was found in these derivations. This audit did not independently retrieve the DLMF remainder source, verify all DNB03 weighted Schur estimates, or reproduce the executed diagnostics. A finite positive boundary partial sum is a valid lower form; it is not itself a finite-dimensional positivity certificate for the full arithmetic operator.
