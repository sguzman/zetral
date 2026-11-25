# GSG04-W01 — Independent audit of global negative inertia

Date: 2026-11-25 UTC. Scoped proof audit of `research/positivity/GSG04-global-inertia.md`. This is not a formal proof, human review, novelty assessment, or RH result.

## Scope and imported assumptions

I reconstructed the positive sampling-space density argument, the upper and lower bounds for the finite-window negative index, and the parity decomposition. The audit assumes the unconditional paired-zero identity \(q(f,g)=\langle Vf,JVg\rangle\) on compact smooth tests, the strip bound \(|\Im z|\le 1/2\), local finiteness of distinct ordinates, the stated classical zero-count estimates needed for \(Vf\in K\), and the existing closed-form/core/compact-resolvent setup for \(A_a\). I did not independently establish those analytic inputs or revisit the cited literature.

## Sampling-space density

Let \(y\in K\) be orthogonal to every \(Vf\) for \(f\in C_c^\infty(\mathbb R)\). Choose a compact smooth integral-one bump \(f_0\). For each fixed ordinate \(z\), \(r\mapsto \widehat f_0(rz)\) is entire and nonzero at \(r=0\); its real zero set is discrete. Avoiding the countable union of those zero sets gives a dilation for which \(\widehat f_0(z)\ne0\) at every ordinate. This uses only countability and permits a compactly supported dilate.

For the translate \(T_t f_0(x)=f_0(x-t)\), the stated transform convention gives \(\widehat{T_t f_0}(z)=e^{itz}\widehat f_0(z)\). Orthogonality therefore yields
\[
\sum_z c_z e^{itz}=0,\qquad c_z=m_z\widehat f_0(z)\overline{y_z}.
\]
By Cauchy–Schwarz, \(\sum_z|c_z|\le \|Vf_0\|_K\|y\|_K<\infty\). Since \(|\Im z|\le1/2\), this series converges absolutely and uniformly on compact real \(t\)-intervals. For \(\Re s>1/2\), multiplication by \(e^{-st}\) and integration over \(t\ge0\) is justified by
\[
\sum_z |c_z|\int_0^\infty e^{-(\Re s+\Im z)t}\,dt
\le \frac{\sum_z|c_z|}{\Re s-1/2}.
\]
Thus \(F(s)=\sum_z c_z/(s-iz)=0\) on that half-plane. On compact sets avoiding its poles, the series is normally convergent: only finitely many ordinates lie in a bounded region, and the denominators grow like \(|\Re z|\) in the tail while \((c_z)\in\ell^1\). It defines a meromorphic function with distinct poles \(s=iz\), and the identity theorem forces every residue \(c_z\) to vanish. Since each \(m_z>0\) and \(\widehat f_0(z)\ne0\), all coordinates of \(y\) vanish. This confirms density of the global test image in \(K\), not density for any single fixed support window.

## Negative-index limit

The involution \(J\) gives \(q(f,f)=\|P_+Vf\|^2-\|P_-Vf\|^2\). On a strictly negative subspace, \(P_-V\) is injective: a vector in its kernel would have nonnegative form value. Hence each test-class negative subspace has dimension at most \(r=\dim K_-\). Under the stated form-core assumptions, approximate any finite set of negative spectral vectors simultaneously in form norm; continuity of their finite Gram and form matrices preserves strict negativity. This transfers the same upper bound to the closed form and min-max index (with the bound informative when \(r<\infty\)).

For the converse, choose any finite orthonormal set \(y_1,\ldots,y_k\in K_-\). Global density gives tests \(f_j\) with \(\|Vf_j-y_j\|<\delta\). The synthesis error map from \(\mathbb C^k\) to \(K\) has norm at most \(e=\sqrt{k}\delta\). For \(Yc=\sum c_jy_j\) and \(Xc=\sum c_jVf_j\), \(JY=-Y\) and \(\|J\|=1\), so
\[
\langle Xc,JXc\rangle\le(-1+2e+e^2)\|c\|^2.
\]
Taking \(e<\sqrt2-1\) (in particular the report's \(e<1/4\)) makes this strictly negative. It also implies the tests are independent. Their finitely many compact supports fit in one window; min-max then gives \(n_-(A_a)\ge k\) for every larger window. Taking all finite \(k\le r\) proves \(\lim_{a\to\infty}n_-(A_a)=r\) in the extended integers. If \(r<\infty\), combining both bounds yields eventual equality; if \(r=\infty\), the lower bound means divergence. This counts distinct negative directions of \(J\), so multiplicity changes normalization but not the count.

## Parity refinement and limits

Reflection satisfies \(V(Rf)=PVf\), where \((Py)_z=y_{-z}\), and \(P\) commutes with \(J\). Applying the bounded projections \((I\pm P)/2\) to the dense global test range proves density separately in the even and odd sampling sectors. Repeating the same injectivity and approximation arguments identifies their limiting negative indices with \(\dim(K_-\cap K_{\rm even})\) and \(\dim(K_-\cap K_{\rm odd})\), respectively. On a generic four-point orbit, the two conjugate-pair negative directions are exchanged by \(P\), producing one even and one odd direction. On a purely imaginary conjugate pair, \(P\) reverses its sole negative direction, producing one odd and zero even directions. Real ordinates contribute no negative direction.

No flaw found in the sampled density or inertia deductions under the imported hypotheses. The proof is qualitative: global density supplies no quantitative window threshold, which is precisely what NIR01 addresses. The audit does not establish the paired-zero identity, the spectral setup, an RH criterion beyond the statements already conditioned in GSG04, or priority relative to Bombieri and other work.

## Source record

- Audited: `research/positivity/GSG04-global-inertia.md` at the starting commit in the handoff.
- No external source, numerical computation, or formal verifier was used; analytic source identities and zero-count estimates are treated as imported.
