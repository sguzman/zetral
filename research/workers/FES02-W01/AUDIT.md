# FES02-W01 — Independent audit of carrier coercivity and packet selection

Date: 2026-11-25 UTC. Scoped proof audit of `research/positivity/FES02-carrier-coercivity.md`. No formal verification, numerical certification, human review, or priority claim.

## Scope and imported inputs

I checked the carrier logarithmic inequality, high-carrier leakage estimate, direct-sum compression, packet selection with a moment penalty, near-limsup window-ratio lemma, and the carrier-size conclusion. I treat FES01's exact partition identities and moment bounds, GSG03's multiplier/arithmetic estimates, NIR04's escape inequality, and monotonicity/growth results for the bottom eigenvalue as imported. I do not independently reprove these analytic inputs.

## Carrier coercivity and truncation

The elementary inequality
\[
2+|t|\le(2+|\omega|)(1+|t-\omega|)
\]
implies \(\log(2+|t|)\ge\log(2+|\omega|)-\log(1+|t-\omega|)\). For fixed \(h>0,p\ge1\), the latter logarithm is bounded by \(D_h(1+h|t-\omega|)^p\), so inserting the carrier multiplier lower bound yields (1). Summing uses \(\sum E_n\le C_p\|f\|_2^2\); it does not require uniform normalized moments of individual packets.

For \(|\omega_n|>\Omega\), split packet Fourier mass into \(|t|\ge\Omega/2\) and \(|t|<\Omega/2\), with low-frequency mass \(l_n\). On the high part, \(\log(2+|t|)-K_A\ge H-K_A\); on the low part it is at least \(-K_A\). Thus
\[
q_A(g_n)\ge(H-K_A)m_n-Hl_n.
\]
If \(H\ge K_A\), the same split gives \(q_A(g_n)\ge-K_A l_n\). The carrier-relative tail bound controls \(\sum l_n\), and hence \(\sum_{\rm high}\max(0,-q_A(g_n))\le\epsilon_A\|f\|_2^2\). Since the exact frame identity says \(q_a(f)=q_{\rm low}+q_{\rm high}\), this implies \(q_{\rm low}\le q_a(f)+\epsilon_A\|f\|_2^2\).

If \(X\) is k-dimensional with \(q_a(f)\le-\gamma\|f\|_2^2\), \(\gamma>\epsilon_A\), then the low-packet map is injective on \(X\), because its kernel would give \(q_{\rm low}=0\) while the displayed upper bound is strictly negative. Its output norm is at most \(\|f\|_2\). Since the form upper bound is negative, this also gives \(q_{\rm low}\le-(\gamma-\epsilon_A)\|T_{\rm low}f\|^2\). The resulting negative subspace is in the finite direct sum of low-carrier packet spaces. This does not imply a k-dimensional negative subspace in a single packet, nor that fast-pair constraints survive packetization.

## Penalized packet selection

For a normalized ground state, \(\sum m_n=1\), \(\sum q_A(g_n)=-N(a)\), and \(\sum E_n\le C_p\). Setting \(\tau=N(a)/(4C_p)\) makes the weighted sum of \(q_A(g_n)+\tau E_n\) at most \(-3N(a)/4\). Therefore some nonzero packet has normalized quotient at most \(-N(a)/2\); otherwise the weighted average would exceed \(-N(a)/2\). For \(v=g_n/\sqrt{m_n}\), this gives \(q_A(v)\le-N(a)/2\). The global lower bound \(q_A(v)\ge-N(A)\) then implies
\[
\tau E_n/m_n\le N(A)-N(a)/2\le N(A),
\]
which is exactly the normalized moment estimate (3). No lower bound on the selected packet's mass is needed. The constant is uniform along any sequence with bounded \(N(a+h)/N(a)\) for fixed \(h,p\), but the audit confirms this is not simultaneous control for all \(p\).

## Near-limsup sequence and escape scale

Let \(S=\limsup a^{-1}\log N(a)\), and fix \(\sigma>S\). Choose \(t_j\to\infty\) on the limsup sequence with lower rate \(S-e_j\), while the upper envelope beyond \(t_j\) is at most \(S+e_j\), where \(e_j\downarrow0\). If every one of \(L_j\) consecutive fixed-length steps had ratio greater than \(e^{\sigma h}\), monotonicity and telescoping would give
\[
(S-e_j)t_j+\sigma L_jh<(S+e_j)(t_j+L_jh).
\]
Taking \(L_j\asymp \sqrt{e_j}t_j/h\) violates this inequality for large \(j\), since the positive term \((\sigma-S-e_j)L_jh\) dominates \(2e_jt_j\). A selected step therefore has bounded ratio, and its starting windows still have rate tending to \(S\). Applying (3) gives uniformly bounded fixed-order carrier-relative moments along the near-limsup sequence.

If \(S>2B\), NIR04's bound and the packet's negative depth force \(L(v_j)\) to grow at least like \(\exp((S-2B-o(1))a_j)\). The logarithmic comparison around \(\omega_j\), together with the uniform relative moment, then forces \(\log(2+|\omega_j|)\) to grow at that exponential scale. Conversely, (1) and \(q(v_j)<0\) bound \(\log(2+|\omega_j|)\le K_{A_j}+O(1)=O(e^{A_j})\). This places carriers between the claimed doubly exponential lower and upper scales. The conclusion concerns selected packets retaining half the bottom depth, not single eigenvectors for higher index, and does not rule out escape.

No flaw found in the audited deductions under the imported FES01/GSG03/NIR04 hypotheses. The finite-carrier truncation cost can itself be doubly exponential, and the bounded-moment packet result is not a proof that arithmetic high-carrier packets cannot exist. FES03 remains necessary for that question.

## Source record

- Audited: `research/positivity/FES02-carrier-coercivity.md` at the starting commit recorded in the handoff.
- Cross-checked internally: FES01, NIR04, and GSG03 dependencies as cited by FES02.
- No external source, numerical computation, or formal verifier used.
