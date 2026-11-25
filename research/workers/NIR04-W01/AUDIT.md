# NIR04-W01 — Independent audit of the frequency-escape bound

Date: 2026-11-25 UTC. Scoped proof audit of `research/positivity/NIR04-frequency-escape.md`. No formal verification, numerical certification, human review, or priority claim.

## Scope and imported inputs

I checked the full-line multiplier-domain argument, the exterior Carleman estimate, the second logarithmic moment bound, the fast-pair kernel selection, and the resulting lower bound on high-frequency mass. The audit treats as imported the Suzuki Fourier multiplier representation and its form-domain identification on \((-a,a)\), GSG03's arithmetic-remainder bound and derivative/log-energy estimates, NIR03's fast-pair constrained estimate, and the ordinary spectral/min-max setup. I do not independently verify those source identities or campaign dependencies.

## Full-line multiplier graph bound

For \(f\in\operatorname{Dom}A_a\), its zero extension is in \(L^2(\mathbb R)\), so the logarithmic multiplier \(H_\alpha\) defines a distribution in \(H^{-\sigma}\) for each \(\sigma>0\): its symbol grows only logarithmically and \((1+|t|)^{-\sigma}\log(2+|t|)\) is bounded. The form representation, tested in the interior, gives \(H_\alpha f=A_af-B_af\) there. The digamma integral yields the off-diagonal kernel \(-k(|x-y|)\), with
\[
k(s)=\frac{e^{-s/2}}{1-e^{-2s}}\le \frac{C}{s}.
\]
On the right exterior, set \(u=x-a>0\), \(v=a-y>0\), so \(|x-y|=u+v\). The kernel is bounded by \(C/(u+v)\). Weighted Schur with weight \(u^{-1/2}\) applies because
\[
\int_0^\infty\frac{v^{-1/2}}{u+v}\,dv=\pi u^{-1/2};
\]
the left exterior has the same bound. This gives an exterior \(L^2\) operator norm independent of \(a\). Approximation in \(L^2(I)\) extends the exterior distribution identity from compact smooth functions.

Combining interior and exterior formulas defines a global \(L^2\) function with norm at most \(\|A_af\|_2+(\|B_a\|+C_0)\|f\|_2\). The difference from \(H_\alpha f\) is supported at the two endpoints and belongs to \(H^{-\sigma}\) for every positive \(\sigma\). Taking \(0<\sigma<1/2\) rules out every nonzero finite sum of endpoint delta derivatives, since even a point mass is not in \(H^{-\sigma}\) in that range. Thus the difference vanishes and the graph estimate (1) follows. This endpoint argument is a key part of the extension from a compressed interval operator to the full-line multiplier.

Because \(\alpha(t)=\log|t|-\log(2\pi)+O(t^{-2})\) at infinity and is bounded near zero, \(w(t)=1+\log(2+|t|)\le C(1+|\alpha(t)|)\). The graph estimate therefore controls \(\|w\widehat f\|_2\). On the whole finite-dimensional negative spectral subspace, \(\|A_af\|_2\le C e^a\|f\|_2\) follows from the imported lower bound \(A_a\ge-Ce^aI\); hence the probability measure \(P_f(dt)=|\widehat f(t)|^2dt/(2\pi)\) for unit \(f\) has the stated second moment \(\int w^2dP_f\le C_1e^{2a}\). Plancherel gives \(P_f(\mathbb R)=1\), and monotonicity of \(w\) gives the stated Markov tail upper bound.

## Necessary escape from an interior rate gap

For fixed \(b_k<b\le1/2\), the order-statistic definition leaves at most \(k-1\) pairs with deviation above \(b\). Fourier evaluation on each such pair is bounded on \(L^2(-a,a)\), so the fast negative-sample map is a bounded finite-rank map on the first \(k\) ordinary negative eigenvectors. Its kernel has a nonzero unit vector \(f_a\) in that span. Since \(-q\) is at least \(N_k(a)\) on the span, \(-q(f_a)\ge N_k(a)\). The fast-pair terms vanish; continuity of the finite evaluation terms and of the form norm extends the NIR03 estimate from compact tests to this form-domain vector, yielding
\[
\int w\,dP_{f_a}=L(f_a)\ge \frac{N_k(a)}{C_b(a+1)^6e^{2ba}}.
\]

If the ordinary limsup exponent exceeds \(2b_k\), choose \(b>b_k\) and an intermediate \(s>2b\) still below that limsup. Along a sequence \(a_j\to\infty\), the lower bound gives a first moment at least \(H_j\asymp e^{(s-2b)a_j}/(a_j+1)^6\), which tends to infinity exponentially. With \(R_j=e^{H_j/4}\), one has \(w(t)\le H_j/2\) on \(|t|\le R_j\) for large \(j\). At least \(H_j/2\) of the first moment must then lie outside that interval. Cauchy–Schwarz and the second-moment bound imply
\[
P_{f_{a_j}}(|t|>R_j)\ge \frac{H_j^2}{4C_1e^{2a_j}}.
\]
Since \(\log\log R_j=\log(H_j/4)=(s-2b)a_j-O(\log a_j)\), this is the claimed doubly exponential frequency scale. The tail probability lower bound can itself be exponentially small; the result is a necessary escape condition, not a contradiction. For \(k>1\), the vector is a linear combination in the first \(k\)-dimensional negative span, not necessarily a single eigenvector.

No flaw found in the graph-norm or escape deductions under the imported hypotheses. The interior ordinary exponent gap remains unresolved because the established lower bound on tail mass does not conflict with the second-moment upper bound. This audit does not independently establish the multiplier representation, the \(B_a\) norm bound, or NIR03's constrained inequality.

## Source record

- Audited: `research/positivity/NIR04-frequency-escape.md` at the starting commit in the handoff.
- Cross-checked internally: GSG03 and NIR03 dependencies as cited by NIR04.
- No external sources, numerical computation, or formal verifier used.
