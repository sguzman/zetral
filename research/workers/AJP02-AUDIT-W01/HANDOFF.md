# AJP02-AUDIT-W01 — singular rank-one inertia audit

- **ID:** AJP02-AUDIT-W01
- **Status:** READY_FOR_REVIEW
- **Starting commit:** `db331c4` (Campaign XXXVII/PTI01 checkpoint)
- **Scope:** Independently audit AJP02's rank-one inertia formulas at regular and singular real parameters, equality/nullity cases, and the stated even/odd strict-positivity criteria. This does not repeat the external teal-sea note's priority-sensitive regular case; no novelty claim.
- **Acceptance question:** Do the bordered-form congruences give the displayed negative indices and nullities in both cases (P_Ku=0) and (P_Ku\ne0)?

## Independent check

Write (D=T-z), (K=\ker D), (u_0=P_Ku), (u_1=u-u_0), and (D_1=D|_{K^\perp}). Compact resolvent makes (K) finite-dimensional and (D_1^{-1}) bounded on (K^\perp). For (u_0=0), (K) remains in the kernel. On (K^\perp\oplus\mathbb C), the bordered quadratic form is

\[
\mathcal M=\begin{pmatrix}D_1&u_1\\u_1^*&-1/\sigma\end{pmatrix}.
\]

Eliminating its scalar block gives the congruence 
\(\mathcal M\sim\operatorname{diag}(D_1+\sigma u_1\otimes u_1,-1/\sigma)\). Eliminating (D_1) instead gives
\(\mathcal M\sim\operatorname{diag}(D_1,r)\), where
\(r=-1/\sigma-\langle u_1,D_1^{-1}u_1\rangle\).
Thus

\[
n_-(B-z)=m+\mathbf1_{r<0}-\mathbf1_{-1/\sigma<0},\qquad
\dim\ker(B-z)=k+\mathbf1_{r=0}.
\]

The formula also handles (u_1=0), since then (r=-1/\sigma\) and the two scalar inertia terms cancel as they should.

When (u_0\ne0), decompose (f=v+w+\alpha e_0), with (v\in K^\perp), (w\in K\cap u_0^\perp), and (e_0=u_0/\|u_0\|). Then

\[
q_{B-z}(f)=q_{D_1}(v)+\sigma|\langle u_1,v\rangle+\alpha\|u_0\||^2.
\]

The bounded invertible shear 
\(\alpha\mapsto\alpha+\langle u_1,v\rangle/\|u_0\|\) removes the mixed term. It is bounded in the shifted form norm because (u_1\in H) and the form norm controls the (L^2) norm. The scalar direction contributes one negative direction exactly when \(\sigma<0\), while (w) contributes (k-1) null directions. Therefore

\[
n_-(B-z)=m+\mathbf1_{\sigma<0},\qquad \dim\ker(B-z)=k-1.
\]

At regular (z\), differentiating the scalar resolvent function gives
\(\frac{d}{dz}\langle u,(T-z)^{-1}u\rangle=\|(T-z)^{-1}u\|^2>0\) whenever (u\ne0\), so each secular root is simple. The positive-sign even criterion for one negative direction is (1+2\langle c,T_e^{-1}c\rangle<0); equality produces a kernel, rather than strict positivity. In the singular even case, the second formula shows strict positivity exactly when (m=0,k=1,u_0\ne0\). For the odd negative rank-one update, strict positivity requires (T_o>0) and is equivalent to (2\langle s,T_o^{-1}s\rangle<1\); if (T_o\) has a nonpositive direction, subtracting a positive rank-one form cannot repair it.

## Findings and limits

- No sign, nullity, or negative-index error found in either singular case or the regular secular criterion.
- The bounded shear and Schur-complement arguments are valid at the closed-form level: (D_1^{-1}u_1\in\mathfrak D(D_1)), and the finite-rank form perturbation is bounded on the form domain.
- The large-window necessary condition follows from the AJP01 fact that the global pole-free ground state is even and eventually negative; it does not assert any uniform gap above that state.
- No evidence here evaluates the actual arithmetic capacities, proves RH, or supplies a Hilbert–Pólya construction. Prior-art caveat for the regular rank-one criterion is acknowledged in AJP02 and AJP04.

## Evidence

- Reviewed `research/positivity/AJP02-pole-rank-one-inertia.md`, `AJP01-pole-free-jump-ground-state.md`, and `AJP04-audit-and-prime-tower-pivot.md` at `db331c4`.
- Exact repository command: `git show origin/main:research/positivity/AJP02-pole-rank-one-inertia.md`.
- No numerical or formal computation was run; this is a symbolic congruence/inertia audit.
- Not checked: every external-source derivation of the original arithmetic quadratic form; AJP03 gap bound; quantitative capacities or actual positivity at any finite window.

**Overall:** Scoped AI-assisted audit, no substantive flaw identified. This is not human review or independent source verification.
