# QER02-W01 — Independent audit of quotient sampling and interpolation

Date: 2026-11-25 UTC. Scoped worker proof audit of `research/positivity/QER02-quotient-sampling.md`. No RH, novelty, formal verification, or human-review claim.

## Scope and dependencies

I checked the sampling, weight, gauge, cardinal, and kernel arguments in QER02 using the repository’s stated setting: (T=A_a-\lambda_1(a)I\ge0) has compact resolvent, (E=\ker T) is finite dimensional, (V) is the form domain, and (q_T) is the shifted form. I treat QER01’s self-adjoint compact-resolvent quotient differentiation, its eigenbasis and simple-real-zero claims, and U04’s Fourier description of (E) as hypotheses; this audit does not reprove those foundational claims. I also do not validate Campaign XIII’s full recovery against prior source artifacts.

## Evaluation gauge and boundedness

Let (H=V/E) with its (q_T) inner product. The positive spectral gap (g>0) of (T) on (E^\perp\subset L^2) gives the canonical (L^2)-orthogonal representative (f_0\in V\cap E^\perp) of a class, with
\[
\|f_0\|_2\le g^{-1/2}\|[f]\|_{q_T}.
\]
For (z\) in a compact set and support in ([-a,a]), Cauchy–Schwarz gives
\[
|F[f_0](z)|\le (2a)^{1/2}e^{a|\operatorname{Im}z|}\|f_0\|_2.
\]
Thus Fourier evaluation is bounded locally uniformly in (z) on (H). Since U04 identifies (F[E]=H_a\mathbb C[z]_{<m}), interpolation at (m) distinct nonreal nodes is a finite-dimensional bounded operation; the inverse map from the polynomial to (E) is bounded because (E) is finite dimensional. Subtracting the interpolant therefore gives a bounded linear gauge representative in (V). Adding (e\in E) adds its polynomial to (P_f), so (G_{[f]}=F[f]-H_aP_f) is independent of the representative. At any real zero (t) of (H_a), this gives (G_{[f]}(t)=F[f](t)).

## Canonical samples and weights

For a real zero (t) of (H_a), (e_t(x)=e^{-itx}\) is in (E^\perp), because (\langle e,e_t\rangle_{L^2}=F[e](t)=0) for every (e\in E). The Moore–Penrose inverse (T^+) is bounded on (E^\perp) by the gap and maps (E^\perp) into (\operatorname{Dom}T\). Hence (v_t=[T^+e_t]\in H), and for (f\in V),
\[
q_T([f],v_t)=\langle f,T T^+e_t\rangle_{L^2}
=\langle f,e_t\rangle_{L^2}=F[f](t),
\]
where we use the form/operator identity when the second argument belongs to (\operatorname{Dom}T). Thus (v_t) is the Riesz vector of evaluation at (t). It is nonzero, with
\[
\kappa_t=\|v_t\|_{q_T}^2=\langle T^+e_t,e_t\rangle_{L^2}>0.
\]

The same Riesz identity and the test-class relation (F[if'](z)=zF[f](z)) imply (v_t\in\operatorname{Dom}D^*\) and (D^*v_t=t v_t); since QER01 assumes (D=D^*), (Dv_t=t v_t). With the compact-resolvent simple eigenbasis from QER01, the normalized (v_t/\sqrt{\kappa_t}) form an orthonormal basis of (H). Expansion in this basis proves
\[
q_T([f],[g])=\sum_t\frac{F[f](t)\overline{F[g](t)}}{\kappa_t},
\qquad
\sum_t\frac{|F[f](t)|^2}{\kappa_t}=\|[f]\|_{q_T}^2.
\]
Conversely, for any sequence ((c_t)) with (\sum|c_t|^2/\kappa_t<\infty), the convergent vector series (\sum_t(c_t/\kappa_t)v_t) has samples (c_t). This verifies the claimed weighted-\(\ell^2\) onto statement, conditional on the QER01 basis theorem.

The normalization and conjugation are consistent with the convention that the inner product is linear in its first argument: (q_T(f,v_t)=F[f](t)), and the Parseval term is (F[f](t)\overline{F[g](t)}/\kappa_t).

## Cardinal identity and convergence

For a compactly supported smooth test (f), (F[if'](z)=zF[f](z)) by integration by parts. At the gauge nodes (w_j), (F[f](w_j)=H_a(w_j)P_f(w_j)); therefore (P_{if'}) interpolates (w_jP_f(w_j)). The polynomial (zP_f-P_{if'}) vanishes at all (w_j) and has degree at most (m), so it equals (c_fQ), with (c_f) the degree-((m-1)) coefficient of (P_f) (taken to be zero if that coefficient vanishes). This yields
\[
G_{D[f]}(z)=zG_{[f]}(z)+c_fH_a(z)Q(z).
\]

The graph-core passage is justified as stated: (G) is bounded from (H) to locally uniform convergence on each compact set, so graph-norm convergence of tests to (u\in\operatorname{Dom}D) gives local uniform convergence for both (G_u) and (G_{Du}). At one fixed (z_0) with (H_a(z_0)Q(z_0)\ne0), the identity solves continuously for (c_f); the identity then passes to the limit. For (u=v_t), (Dv_t=t v_t), and (G_{v_t}(t)=q_T(v_t,v_t)=\kappa_t). Using the simple zero (H_a'(t)\ne0) gives exactly
\[
G_{v_t}(z)=\kappa_t\frac{H_a(z)Q(z)}{(z-t)H_a'(t)Q(t)}=\kappa_t L_t(z).
\]
The apparent singularity at (z=t) is removable. At every real spectral node (s), (L_t(s)=\delta_{ts}). Expanding an arbitrary class in the eigenbasis and applying bounded evaluation proves the cardinal formula
\[
G_{[f]}(z)=\sum_t F[f](t)L_t(z).
\]
The tail converges in (H), hence locally uniformly after applying bounded evaluations. Absolute convergence follows by Cauchy–Schwarz from the square-summability of the samples and the finite norm of the evaluation representer. The two-variable kernel series is likewise locally uniformly convergent: Riesz evaluation vectors vary norm-continuously over compact (z)-sets, and strong convergence of finite eigenbasis projections is uniform on compact subsets of (H) by a finite-net argument.

## Disposition

No normalization, conjugation, quotient-invariance, cardinal-factor, or convergence error was found in QER02’s stated scope, conditional on QER01/U04. The formulas do establish a unitary weighted sampling map and gauge-dependent entire cardinal interpolation for the local shifted quotient. They do not identify these nodes or weights with zeta zeros/multiplicities, and they do not independently establish the imported quotient operator hypotheses. Those are material scope limits, not flaws in the checked deductions.

## Exact evidence and limits

- Repository note checked: `research/positivity/QER02-quotient-sampling.md`, all lines; dependencies `QER01-edge-quotient.md`, `U04-bottom-space-rigidity.md`; downstream consistency context `QER04-exponential-concentration.md`.
- Primary literature not reopened; none is used as a proof input in this audit.
- No numerical run, formal proof, full QER01/U04 audit, or independent source/novelty review.
