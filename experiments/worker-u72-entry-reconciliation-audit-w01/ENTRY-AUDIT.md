# Even-sector entry reconciliation for the U72 finite probe

This check derives the algebraic entry reductions used by the interval evaluator and compares them term by term with `experiments/tc01-post-log11-em.js` (source blob `2f9035722076c6c8e96bf01b00901191c3466c52`). It assumes the scalar form decomposition already encoded by that generator; it is not a derivation of the complete Weil explicit formula from first principles.

Let `r_j=2j+1/2`, `x_n=omega_n^2`, `omega_n=n*pi/h`, and `N_0=1`, `N_n=sqrt(2)` for `n>0`. The previous reduction audit established

\[
 F_n=\sum_j(r_j^2+x_n)^{-1},\qquad
 D_n=\sum_j r_j^2(r_j^2+x_n)^{-2}.
\]

For `n != k`, partial fractions give the exact quotient

\[
 \sum_j\frac{r_j^2}{(r_j^2+x_n)(r_j^2+x_k)}
 =\frac{x_nF_n-x_kF_k}{x_n-x_k};
\]

for `n=k` the sum is `D_n`. Thus the evaluator's scalar matrix block

\[
 K_{nk}=\frac{2N_nN_k}{h}\begin{cases}
 D_n,&n=k,\\
 (x_nF_n-x_kF_k)/(x_n-x_k),&n\ne k
 \end{cases}
\]

has the same factors and ordering as the generator's `K(n,k)`.

For each included prime power `q` with shift `s=log(q)`, put

\[
 I_{nk}(s)=\int_0^{h-s}\cos(\omega_n t)\cos(\omega_k(t+s))\,dt.
\]

When `n,k` have the same parity, `omega_n h=n*pi` and the endpoint signs in the antiderivative give

\[
 I_{nk}(s)=\frac{\omega_k\sin(\omega_k s)-\omega_n\sin(\omega_n s)}{x_n-x_k},\quad n\ne k.
\]

Taking the coincident-frequency limit gives

\[
 I_{nn}(s)=\frac{(h-s)\cos(\omega_n s)-\sin(\omega_n s)/\omega_n}{2},
\]

with `I_00(s)=h-s`. These are exactly the source's off-diagonal and diagonal `P` cases and the interval evaluator's formulas. The prime contribution in both is

\[
 P_{nk}=\frac2h\sum_q w_q N_nN_k I_{nk}(\log q),
\]

and the entry subtracts `P`.

The coefficient table also agrees. The represented prime powers are `2,3,4=2^2,5,7,8=2^3,9=3^2,11`, with `w_q=log(p)/sqrt(q)` for `q=p^m`: respectively `log(2)/sqrt(2)`, `log(3)/sqrt(3)`, `log(2)/2`, `log(5)/sqrt(5)`, `log(7)/sqrt(7)`, `log(2)/sqrt(8)`, `log(3)/3`, `log(11)/sqrt(11)`. In particular, the staged source sets `b4=ln2/2`; this matches the interval evaluator's `log(2)/2` even though the shift is `ln4`.

Finally, the even-sector pole vector is identically coded in both implementations as

\[
 q_n=N_n\,\frac{\sinh(h/4)}{x_n+1/4},
\]

and both add `2 q_n q_k/h`. The diagonal constant is `alpha` at zero frequency and `alpha+A_n` otherwise, with `A_n=Re(psi(1/4+i omega_n/2))-psi(1/4)` as checked in the prior formula-reduction note.

## Finding and limits

No factor or sign discrepancy was found between these displayed entry formulas and the staged source/interval evaluator. The initial apparent `q=4` weight mismatch was a misread: both use `log(2)/2`. The pole term is matched across implementations but its derivation from the underlying explicit-form pole was not independently repeated here. Nor did this audit rederive the global Weil-form decomposition, the `alpha` constant, the prime-tail guards, the fixed-point generator arithmetic, the remaining residual modes, positivity, or RH. This is an algebraic consistency audit of the four-mode input formula, not full independent validation of the staged certificate.
