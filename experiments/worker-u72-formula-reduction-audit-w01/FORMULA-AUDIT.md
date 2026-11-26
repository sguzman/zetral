# Digamma reductions used in the U72 finite probe

This note checks the special-function reductions in `certify_first_finite_block_tail.py` against the defining series. It concerns the even-sector scalar sums only, not the full matrix derivation.

Set

\[
 c=\tfrac14,\qquad a=\omega/2,\qquad u_j=j+c,
 \qquad r_j=2j+\tfrac12=2u_j.
\]

The evaluator uses

\[
 F(\omega)=\sum_{j\ge0}\frac1{r_j^2+\omega^2},\quad
 D(\omega)=\sum_{j\ge0}\frac{r_j^2}{(r_j^2+\omega^2)^2},\quad
 A(\omega)=\sum_{j\ge0}\frac{a^2}{u_j(u_j^2+a^2)}.
\]

All three series converge absolutely; for `A`, terms are nonnegative and are `O(j^-3)`. From the standard defining series

\[
 \psi(z)=-\gamma+\sum_{j\ge0}\left(\frac1{j+1}-\frac1{j+z}\right),
 \qquad \psi_1(z)=\sum_{j\ge0}\frac1{(j+z)^2},
\]

for `a>0` one obtains

\[
 \Im\psi(c+ia)=a\sum_{j\ge0}\frac1{u_j^2+a^2},
\]

and therefore

\[
 F(\omega)=\frac{\Im\psi(c+ia)}{4a}.
\]

For the diagonal sum, the trigamma series gives

\[
 \Re\psi_1(c+ia)=\sum_{j\ge0}\frac{u_j^2-a^2}{(u_j^2+a^2)^2}.
\]

Adding `Im psi(c+ia)/a` yields twice the sum of `u_j^2/(u_j^2+a^2)^2`. Since `r_j^2/(r_j^2+omega^2)^2=u_j^2/(4(u_j^2+a^2)^2)`,

\[
 D(\omega)=\frac18\left(\Re\psi_1(c+ia)+\frac{\Im\psi(c+ia)}a\right).
\]

Finally, subtracting the digamma series at `c` from that at `c+ia` gives

\[
 \Re\psi(c+ia)-\psi(c)
 =\sum_{j\ge0}\left(\frac1{u_j}-\frac{u_j}{u_j^2+a^2}\right)
 =A(\omega).
\]

At `a=0`, continuity gives `F(0)=D(0)=psi_1(1/4)/4` and `A(0)=0`. These are exactly the branches used for `n=0` and the `da` value in the interval evaluator. The staged source's finite expression `2*x*f/rate`, with `x=omega^2`, `f=1/(rate^2+x)`, and `rate=2u_j`, equals the `j`th summand of `A`.

## Scope and provenance

The identity check applies to these infinite scalar sums and their translation into the Python evaluator. The source used for the staged comparison is `experiments/tc01-post-log11-em.js` (blob `2f9035722076c6c8e96bf01b00901191c3466c52`); the interval implementation is in the preceding finite-tail audit branch. This does not verify the alpha constant, prime and pole terms, trigonometric logarithmic shifts, matrix-entry derivation, or the staged fixed-point arithmetic. It does not extend the four residual modes to the full residual sum. No RH, positivity, operator-construction, or novelty claim follows.
