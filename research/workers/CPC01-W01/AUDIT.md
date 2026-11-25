# CPC01-W01 — Independent audit of the compact preconditioning reformulation

Date: 2026-11-25 UTC. Scoped proof audit of `research/positivity/CPC01-exact-compact-reformulation.md`. No RH, novelty, formal verification, numerical certification, or human-review claim.

## Scope and imported assumptions

I checked the positive/negative form splitting, closed coercive preconditioner, compact Birman–Schwinger congruence and threshold nullity, continuous frequency kernel, parity reduction, and inverse-compression inequalities. I treat FES03's exact cutoff symbol/form representation and FES04's trace-class concentration operator as imported. I do not independently establish those inputs or conduct a literature-priority review.

## Form split and compact inertia

The symbols satisfy pointwise \(p-W=S_A+s\), with \(p=\max(S_A+s,\mu)\ge\mu\) and \(W=(\mu-s-S_A)_+\). For fixed \(A,s,\mu\), continuity and \(S_A(t)=\log|t|+O_A(1)\) imply \(p(t)\asymp1+\log(2+|t|)\). Thus the weighted Fourier form is closed and coercive on the stated supported domain; its associated \(P\) has \(P\ge\mu I\) and \(\operatorname{Dom}P^{1/2}=V\). With \(K=U^*M_WU\), the exact form identity is \(A_A+sI=P-K\). Since \(K\) is bounded, the associated operator is the bounded perturbation of \(P\) on \(\operatorname{Dom}P\).

The map \(P^{1/2}:V\to H\) is a bijection with inverse \(P^{-1/2}\). Setting \(u=P^{1/2}f\) gives the form congruence
\[
q_A(f)+s\|f\|^2=\langle (I-C)u,u\rangle,
\qquad C=P^{-1/2}KP^{-1/2}.
\]
The congruence preserves maximal negative-subspace dimension. Since \(C\) is positive compact trace class, its negative index above level one is finite and equals the number of eigenvalues of \(A_A\) below \(-s\), counting multiplicity. For nullity, vanishing of the shifted form pairing against every \(g\in V\) is equivalent to \((I-C)u=0\), because \(P^{1/2}V=H\); the representation theorem then places \(f\) in the operator domain. This yields the asserted bijection of \(\ker(A_A+sI)\) with \(\ker(I-C)\), including threshold eigenvectors.

The equivalence \(A_A\ge-sI\iff\|C\|\le1\) follows from the same congruence. If there is a uniform positive gap above \(-s\), then \(C\le I\) and it has no eigenvalue at one; compactness rules out accumulation at one, so \(\|C\|<1\). Conversely \(\|C\|<1\) yields a positive gap using \(P\ge\mu I\). These are exact form statements, not a claim that the threshold test succeeds for a given window.

## Frequency kernel and parity

With \(d\nu=W(t)dt/(2\pi)\), the map \(Bf(t)=\langle f,e_t\rangle=F[f](t)\), \(e_t(x)=e^{-itx}\), is Hilbert–Schmidt with \(\|B\|_{HS}^2=2A\nu(\mathbb R)\), and \(K=B^*B\). Taking \(D=BP^{-1/2}\) gives \(C=D^*D\) and \(T=DD^*=BP^{-1}B^*\); the nonzero spectra and multiplicities coincide by mapping nonzero eigenspaces with \(D\) and \(D^*\). Under the stated linear-first inner product convention, the integral kernel is \(T(t,u)=\langle P^{-1}e_u,e_t\rangle\). Continuity and the bounds follow from \(\|P^{-1}\|\le\mu^{-1}\), \(\|e_t\|=\sqrt{2A}\), and
\[
\|e_t-e_{t'}\|_2\le |t-t'|\Big(\int_{-A}^Ax^2dx\Big)^{1/2}
=|t-t'|\sqrt{2A^3/3}.
\]
The trace estimate follows directly from the Hilbert–Schmidt factorization, not from a diagonal-trace formula for an arbitrary continuous kernel. Evenness of \(p,W\) makes physical reflection commute with \(P,K\), while \(B\) intertwines reflection and frequency reversal; hence the same spectral count applies by parity sector.

## Inverse-compression bracket

The variational identity for a coercive form is obtained by completing the square in \(P^{1/2}f\):
\[
\langle P^{-1}g,g\rangle
=\sup_{f\in V}\{2\Re\langle g,f\rangle-p_H(f,f)\}.
\]
Enlarging the supremum to all functions in the full weighted Fourier space removes the support constraint and gives \(\int |Ug|^2/p\), proving \(P^{-1}\le U^*M_{1/p}U\). Restricting the supremum to a finite independent trial span with synthesis map \(J_m\) gives \(J_mP_m^{-1}J_m^*\le P^{-1}\); if nested spans are dense in the form norm, the restricted suprema increase to the exact inverse quadratic form. Conjugating these order bounds by \(B,B^*\) gives (5). The comparison is one-sided; a lower comparison eigenvalue above one certifies a true negative direction, while the upper comparison can certify nonnegativity. No numerical gap between them is established.

No flaw found in the compact preconditioning or variational deductions under the imported FES03/FES04 assumptions. The continuous compact kernel and exact threshold count do not themselves give a computable certificate; CPC02's inverse-approximation errors remain necessary. No RH conclusion or novelty claim follows.

## Source record

- Audited: `research/positivity/CPC01-exact-compact-reformulation.md` at the starting commit recorded in the handoff.
- Cross-checked internally: FES03/FES04 dependencies as cited by CPC01.
- No external sources, numerical computation, or formal verifier used.
