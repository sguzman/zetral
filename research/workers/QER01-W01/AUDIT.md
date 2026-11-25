# QER01-W01 — Independent audit of the spectral-edge quotient

Date: 2026-11-25 UTC. Scoped proof audit of `research/positivity/QER01-edge-quotient.md`. No RH, novelty, formal verification, or human-review claim.

## Scope and assumptions

I audited the quotient differentiation argument conditional on the stated U01/U04 inputs: (i) (A_a) is the self-adjoint operator of the localized closed form with discrete spectrum and compact smooth form core; (ii) (T=A_a-\lambda_1(a)I\ge0), with finite-dimensional (E=\ker T) and positive gap (g>0) on (E^\perp\); and (iii) U04’s Fourier image identity (\widehat E=H_a\mathbb C[z]_{<m}), with (H_a) having no nonreal zero. I do not reprove U04’s division theorem or the completeness/core assertions imported by QER01.

I directly inspected Suzuki, *Weil’s quadratic form via the screw function*, arXiv:2606.09096v4, §§3.1–3.2, 4.1–4.4, and 6.1–6.3. In §3.1, equations (3.2)–(3.3) identify the localized form domain with (H^{\log}(-a,a)), with form norm equivalent to the Fourier norm weighted by (1+\log^+|\xi|). Section 4.4, equations (4.5)–(4.6), gives the common logarithmic form and bounded remaining terms. Section 6.1 establishes symmetry of compact-test differentiation; §6.2 derives that adjoint eigenfunctionals solve the first-order Fourier-evaluation ODE. The source’s positive-shift operator has deficiency indices ((1,1)); that is not the quotient-at-the-bottom operator audited here.

## Dense, well-defined minimal operator and symmetry

The quotient Hilbert space is (\mathcal H=V/E), with norm (q_T([f])^{1/2}), and the proposed core is the image of (C_c^\infty(-a,a)). This image is dense because the compact smooth functions are a form core and quotienting by the finite-dimensional kernel preserves density. It is injective: if a compact smooth (f\ne0) belonged to (E), its support would lie in a strictly smaller window ((-b,b)); translation/form invariance would make its Rayleigh quotient at window (b) equal to (\lambda_1(a)), contradicting strict monotonicity (\lambda_1(b)>\lambda_1(a)) from U01. Thus the rule (S[f]=[if']) is well-defined on that image.

Symmetry follows from the simultaneous-translation invariance of the autocorrelation form on compact tests, differentiated at zero; equivalently it is the identity checked in Suzuki §6.1. This does not assert that differentiation acts on arbitrary quotient representatives in (V/E); QER01 correctly defines only the minimal test-class operator and then closes it.

## Deficiency spaces

For (h\in\ker(S^*-z)), define the continuous functional (\ell_h(f)=q_T([f],h)) on compact tests. With the inner product linear in its first argument, the adjoint relation gives
\[
\ell_h(if'-\bar z f)=0.
\]
As a distribution on ((-a,a)), this is a first-order constant-coefficient equation. Its solution space is one-dimensional: every such functional is (c\widehat f(\bar z)), where (\widehat f(w)=\int f(x)e^{iwx}dx\). This is the same integration-by-parts/ODE calculation as Suzuki §6.2. Since (h\) is a functional on (V/E), it must vanish on (E). For nonreal (z), U04’s factorization supplies an (e\in E) with \(\widehat e(\bar z)=H_a(\bar z)\ne0\) (choose polynomial factor (1)); hence (c=0), so both deficiency spaces vanish. The closure (D=\bar S) is therefore self-adjoint.

For real (t), the same evaluation descends exactly when (H_a(t)=0). Evaluation is bounded on (V/E): use the (L^2)-orthogonal representative in (E^\perp), the gap inequality (\|f\|_2\le g^{-1/2}q_T([f])^{1/2}), and the fixed-support Fourier Cauchy–Schwarz bound. Its Riesz vector (v_t\) obeys (D^*v_t=t v_t) by (\widehat{if'}(t)=t\widehat f(t)), so it is a nonzero eigenvector of the self-adjoint closure. Every eigenspace is at most one-dimensional by the same ODE functional classification.

If (H_a) had a multiple real zero at (t), both evaluation and derivative evaluation would annihilate (E). Derivative evaluation is bounded by the same gap argument, with the extra factor (|x|\le a). Let (v_0,v_1) be their Riesz vectors. From
\[
\widehat{if'}(t)=t\widehat f(t),\qquad
\frac{d}{dz}\widehat{if'}(z)\big|_{z=t}=\widehat f(t)+t\widehat f'(t),
\]
we get (Dv_0=t v_0) and ((D-t)v_1=v_0\ne0). This contradicts self-adjointness: (\langle(D-t)v_1,v_0\rangle=\langle v_1,(D-t)v_0\rangle=0), whereas the left side is (\|v_0\|^2\). Thus zeros are simple, conditional on U04’s generator representation.

## Compact graph embedding

Here is an explicit version of the compactness argument summarized in QER01. For compact-test (f_n) bounded in the graph norm of (S), set
\[
u_n=(i\partial_x-i)f_n=g_n+e_n,
\quad g_n=P_{E^\perp}u_n,\quad e_n=P_Eu_n.
\]
Since ([u_n]=(S-i)[f_n]) is graph-bounded, the gap gives (\|g_n\|_2^2\le g^{-1}q_T([u_n])=O(1)\). Use the zero-left Volterra inverse
\[
(Rr)(x)=-i e^x\int_{-a}^x e^{-y}r(y)\,dy,
\]
which solves ((i\partial_x-i)Rr=r), to obtain (f_n=Rg_n+Re_n); uniqueness follows from (f_n(-a)=0). The map (R:L^2(-a,a)\to H^1(-a,a)) is bounded.

Its zero-extended image is relatively compact in the supported logarithmic form norm. Indeed, boundedness in (H^1) gives a uniform (O(|\xi|^{-1})) Fourier bound by integration by parts (including the endpoint traces), so the high-frequency (H^{\log}) tail is uniformly (O((\log M)/M)). Rellich compactness gives a subsequence convergent in interval (L^2), which makes the Fourier transforms converge uniformly on every bounded frequency interval. This proves compactness in (H^{\log}), hence in (V), using Suzuki’s form-domain identification and norm equivalence above. Therefore ([Rg_n]) is precompact in (\mathcal H).

Although (e_n\) need not be bounded in (E), the classes ([Re_n]=[f_n]-[Rg_n]) are bounded: the first term is graph-bounded and the second is bounded by the continuous map (R:L^2\to V). These classes lie in the finite-dimensional image ([R(E)]\), so they are precompact. Thus ([f_n]) is precompact in (\mathcal H). By graph-core approximation, the inclusion (\operatorname{Dom}D\hookrightarrow\mathcal H) is compact. Since (D) is self-adjoint, its resolvent is compact.

This verifies the summarized compactness mechanism without needing a bound on the coefficients of (e_n) themselves. It does require the supported (H^{\log}) form-domain identification/norm equivalence; that is supported by the directly inspected Suzuki §§3 and 4 source, not reproved from first principles here.

## Disposition and limits

No flaw was found in the QER01 deficiency, simple-spectrum, or compact-resolvent deductions **conditional on** the imported U01/U04/core inputs and the stated (H^{\log}) form-domain facts. The quotient at the exact bottom is materially different from Suzuki’s strictly positive shifted space: the latter has ((1,1)) deficiency indices, whereas quotienting out the bottom eigenspace makes nonreal Fourier evaluation fail to descend and gives zero deficiency. No relation of the quotient spectrum to zeta ordinates is established by this audit.

Unchecked: independent proof of U04’s division-stability/factorization, all assumptions of U01’s translation extension to the closed form, and the original full Campaign XIII derivation (not present as a repository artifact). No formal, numerical, exhaustive literature, or novelty audit.

## Source record

- Suzuki v4: https://arxiv.org/html/2606.09096v4
- Inspected: §3.1 lines 454–467 (localized form domain (H^{\log})); §4.1–4.4 lines 539–580 (compact (H^{\log}\to L^2) embedding and logarithmic form); §6.1–6.3 lines 689–763 (symmetric minimal derivative, evaluation ODE, positive-shift deficiency vectors).
- Repository notes: `QER01-edge-quotient.md`, `QER02-quotient-sampling.md`, `U01-strict-bottom-monotonicity.md`, `U02-strict-indexed-spectrum.md`, `U03-critical-inverse.md`, `U04-bottom-space-rigidity.md`.
