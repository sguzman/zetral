# FES04-W01 — Independent audit of local concentration certificates

Date: 2026-11-25 UTC. Scoped proof audit of `research/positivity/FES04-local-concentration-certificates.md`. No formal verification, numerical certification, human review, or priority claim.

## Scope and imported assumptions

I checked the trace formula for the positive concentration operator, the cell-scale (H^1) estimate, the local resonance-mass implication, the sign/index certificate directions, and the finite-rank approximation error. I treat the exact cutoff symbol and its bounds from FES03 and the packet moment conclusion from FES02 as imported. No numerical certificate was constructed.

## Trace and local cell bound

For (e_t(x)=e^{-itx}) on (I=(-A,A)), (|e_t|_2^2=2A), and (t\mapsto e_t\otimes e_t) is trace-norm continuous. Since (W\ge0) is integrable, the rank-one integral exists in trace norm and
\[
\operatorname{tr}K_W=\frac1{2\pi}\int W(t)\|e_t\|_2^2dt
=\frac A\pi\int W(t)dt.
\]
For (F=\widehat f\), (F\in H^1(\mathbb R)), with (|F\|_2^2=2\pi\|f\|_2^2) and (|F'\|_2^2=2\pi\|xf\|_2^2\le2\pi A^2\|f\|_2^2). The one-dimensional estimate
\[
\sup_J|F|^2\le\frac2\ell\int_J|F|^2+2\ell\int_J|F'|^2
\]
follows by comparing any point to an averaged base point and applying Cauchy–Schwarz to the integral of (F'). Multiplying cell suprema by (int_JW\le M_\ell(W)), summing disjoint cells, and dividing by (2\pi) gives
\[
\|K_W\|\le(2/\ell+2\ell A^2)M_\ell(W).
\]
At (\ell=1/A), this is (4A M_{1/A}(W)), as stated.

## Resonance mass and certificates

Since (S_A\to+\infty), (W_D=(-S_A-D/4)_+) is bounded and compactly supported. Pointwise, (-S_A\le D/4+W_D); hence a unit vector with (q_A(v)\le-D) has (\langle K_{W_D}v,v\rangle\ge3D/4). The FES02 relative-moment bound and (W_D\le Ce^A) make the weighted tail outside ( |t-\omega|\le L) at most (Ce^A M(1+hL)^{-p}), which is (o(1)) for (L=e^{\kappa A}) with (p\kappa>1). On the escaping deep-packet sequence it is eventually at most (D/4), leaving at least (D/2) inside. Applying the cell operator bound to the restricted weight gives (M_{1/A}\ge D/(8A)). The weight cap (Ce^A) then forces support measure at least (D/(8CAe^A)). The symbol relation (S_A=\alpha-P_A) and the large-frequency asymptotic for (\alpha) yield the stated local prime-resonance requirement. This is necessary mass, not a contradiction to the FES03 exceptional-set estimate.

For the sign certificate, with (W=(\mu-s-S_A)_+), the pointwise identity is (S_A+s=\max(S_A+s,\mu)-W), so
\[
q_A(f)+s\|f\|^2\ge\mu\|f\|^2-\langle K_Wf,f\rangle.
\]
Thus either trace or local operator-norm bounds at most (\mu) prove (A_A\ge-sI); strict inequality gives a positive gap. For the index bound, every vector in a negative subspace for (q_A+s\|\cdot\|^2) satisfies (\langle K_Wf,f\rangle>\mu\|f\|^2). Such a subspace has dimension at most the spectral rank of (K_W) above (\mu), which is at most (\operatorname{tr}K_W/\mu). The one-sided inequality does not allow reversing this conclusion from a large (K_W) eigenvalue.

## Finite-rank quadrature error

The elementary bound 
\[
\|e_t-e_u\|_2\le |t-u|\Big(\int_{-A}^Ax^2dx\Big)^{1/2}
=|t-u|\sqrt{2A^3/3}
\]
and the rank-one factorization imply
\[
\|e_t\otimes e_t-e_u\otimes e_u\|\le(\|e_t\|+\|e_u\|)\|e_t-e_u\|\le\frac{4A^2}{\sqrt3}|t-u|.
\]
Replacing each integral cell by its representative point therefore gives
\[
\|K_W-K_\Delta\|\le\frac{2A^2}{\pi\sqrt3}\Delta\int W,
\]
also in trace norm. Factoring (K_\Delta=SS^*) shows its nonzero eigenvalues equal those of the finite Gram matrix (S^*S), with the displayed sinc entries and diagonal (Aw_j/\pi). Weyl's inequality and the one-sided form bound justify the stated upper-certificate tests. The converse comparison eigenvalue inequality alone cannot certify negative eigenvalues of (A_A), as FES04 correctly cautions.

No flaw found in the concentration, certificate, or quadrature deductions under the imported symbol and packet hypotheses. The local measure lower bound is only necessary, and certificates still require controlled symbol integrals and certified finite-matrix eigenvalue bounds. This audit makes no claim about practical numerical strength or campaign-wide positivity.

## Source record

- Audited: `research/positivity/FES04-local-concentration-certificates.md` at the starting commit recorded in the handoff.
- Cross-checked internally: FES02/FES03 dependencies as cited by FES04.
- No external sources, numerical computation, or formal verifier used.
