# CPC02-W01 — Independent audit of certified inverse approximation

Date: 2026-11-25 UTC. Scoped proof audit of `research/positivity/CPC02-certified-residual-approximation.md`. No formal verification, numerical certificate, human review, or priority claim.

## Scope and imported assumptions

I checked the rank-one quadrature error, inverse residual identity, two-sided eigenvalue enclosures, sign of the threshold implications, interior residual/tail estimate, and the asserted graph-core convergence. I treat CPC01's compact operator construction, FES03's symbol/form representation, and NIR04's full-line multiplier graph lemma as imported. No numerical solve or interval calculation was executed.

## Quadrature and exact residual identity

With \(v_t=P^{-1/2}e_t\), the exact preconditioned operator is the trace-norm integral \(C=\int v_t\otimes v_t\,d\nu(t)\). The resolvent lower bound \(P\ge\mu I\) gives \(\|v_t\|\le\sqrt{2A/\mu}\) and \(\|v_t-v_u\|\le\sqrt{2A^3/(3\mu)}|t-u|\). Using
\[
\|x\otimes x-y\otimes y\|_1\le(\|x\|+\|y\|)\|x-y\|
\]
gives the stated (4A^2/(\sqrt3\mu)\,\Delta\nu(\mathbb R)) trace-norm quadrature error; the operator-norm error is no larger. Factoring the finite rank sum as a synthesis map times its adjoint shows that its nonzero eigenvalues are the weighted Hermitian Gram eigenvalues.

For arbitrary trial columns (Z_i\in\operatorname{Dom}P), (R=E-PZ), and (G=E^*P^{-1}E), expansion using self-adjointness gives
\[
G-(E^*Z+Z^*E-Z^*PZ)=R^*P^{-1}R\ge0.
\]
The upper bound by \(\mu^{-1}R^*R\) follows from \(P^{-1}\le\mu^{-1}I\). Thus the residual matrix controls the inverse error even when (Z) is not Galerkin and the lower matrix is indefinite. Bounding \(\|R\|^2\) by the sum of squared column residual norms is valid via the Hilbert–Schmidt norm.

Combining the quadrature, residual, and arithmetic enclosure errors with Weyl's inequality yields (3). In particular an upper endpoint at most one proves \(\lambda_j(A_A)\ge-s\), while a lower endpoint strictly above one proves \(\lambda_j(A_A)<-s\) through CPC01's compact inertia count. For indices beyond the quadrature rank, the exact positive compact operator obeys (0\le\lambda_j(C)\le\epsilon_q); no positivity of an approximate matrix is required. The comparison is one-sided in the correct direction, so a large lower-comparison eigenvalue alone does not certify an actual negative direction.

## Residual and tail estimates

For smooth compactly supported (u), (p\widehat u\in L^2) because (p) grows at most logarithmically and (widehat u) decays rapidly. The compressed operator is (Pu=1_I\mathcal F^{-1}(p\widehat u)). Splitting the residual against (e_{t_i}) at (|t|=T), the interior part can be compared to (g_T) on (I); Plancherel bounds the omitted tail by \(\tau_T(u)\). The note correctly restricts the first residual term to (I): a full-line comparison would include exterior forcing.

If (p(t)\le M_p(1+\log(2+|t|))) and \(|\widehat u(t)|\le\|u^{(r)}\|_1|t|^{-r}\), then the two-sided Fourier tail is bounded by
\[
\tau_T(u)^2\le\frac{M_p^2\|u^{(r)}\|_1^2}{\pi}
T^{-(2r-1)}\left(\frac{(c+\log T)^2}{2r-1}
+\frac{2(c+\log T)}{(2r-1)^2}+\frac2{(2r-1)^3}\right),
\]
which follows by (t=T e^y) on (t\ge T). For (r\ge1) this tends to zero. The formula supplies a conservative certified tail once the stated derivative and multiplier constants are enclosed.

## Graph core and convergence

The graph-core claim is stronger than the form-core claim and is needed to make inverse residuals arbitrarily small. Under NIR04's lemma and the bounded-perturbation relation, \(\operatorname{Dom}P\) is equivalent in graph norm to supported zero-extensions with finite squared-log Fourier weight \([1+\log(2+|t|)]^2\). For any such vector, a dilation (u_r(x)=r^{-1/2}u(x/r)), (r\uparrow1), shrinks support strictly inside (I) and converges in this weighted norm: the Fourier transform is \(\sqrt r\,\widehat u(rt)\), dilations are strongly continuous, and weights are uniformly comparable for (r\in[1/2,1]). Convolution with a nonnegative smooth approximate identity of radius less than the support margin then preserves support in (I), has Fourier multiplier bounded by one and converges by dominated convergence. The resulting (C_c^\infty(I)) sequence converges in graph norm. Thus the inverse targets (P^{-1}e_{t_i}\in\operatorname{Dom}P) can be approximated with L2 graph residuals tending to zero. The result is an existence/convergence statement, not a guarantee that arbitrary Galerkin iterates have small residuals.

No flaw found in CPC02's residual identity, enclosure directions, or convergence argument under CPC01/FES03/NIR04 assumptions. Fixed-window strict separation from threshold one can eventually be certified in principle; equality at one and practical cost remain unresolved. No numerical certificate was generated.

## Source record

- Audited: `research/positivity/CPC02-certified-residual-approximation.md` at the starting commit recorded in the handoff.
- Cross-checked internally: CPC01 and NIR04 dependencies cited by CPC02.
- No external sources, numerical computation, or formal verifier used.
