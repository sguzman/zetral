# AJP01-AUDIT-W01 — pole-free jump ground-state audit

- **ID:** AJP01-AUDIT-W01
- **Status:** READY_FOR_REVIEW
- **Starting commit:** `db331c4` (latest fetched main; Campaign XXXVII/PTI01 checkpoint)
- **Scope:** Independently audit the completed AJP01 pole-free form, jump-kernel normalization, positivity-improving argument, strict window comparison, and coarse large-window bottom limit. No claim of novelty; prior-art overlap is already recorded by the lead.
- **Acceptance question:** Are the AJP01 form and asymptotic calculations consistent, and does the positivity-improving proof as written establish its conclusion?

## Findings

### Jump-kernel normalization

For (k(s)=e^{-s/2}/(1-e^{-2s})=\sum_{m\ge0}e^{-(2m+1/2)s}), direct integration gives

\[
2\int_0^\infty k(s)(1-\cos(ts))\,ds
=2\sum_{m\ge0}\frac{t^2}{(2m+1/2)((2m+1/2)^2+t^2)}
=\operatorname{Re}\psi(1/4+it/2)-\psi(1/4).
\]

Thus the coefficient and the use of the full-line difference norm in the archimedean form agree with the digamma difference. For the finite prime sum, the Fourier shift identity gives 
\(\langle (T_{s_n}+T_{-s_n})f,f\rangle=2\operatorname{Re}\int f(x+s_n)\overline{f(x)}\,dx\); completing the square yields

\[
-\langle P_af,f\rangle
=\sum_{s_n<2a}c_n\|f(\cdot+s_n)-f\|_{L^2(\mathbb R)}^2
-2\sum_{s_n<2a}c_n\|f\|_2^2.
\]

The prime term is therefore a finite positive difference energy plus a scalar shift at every fixed (a). The full-line norm is essential: it retains exit jumps. The total scalar may be negative, but a scalar shift does not change cone positivity of the semigroup.

### Positivity-improving proof: a small inference gap with a direct repair

AJP01 writes (T=S-j_0J), (j_0=k(2a)>0), with (J=1\otimes1), and obtains a Dyson lower bound involving products such as
\(\langle g,e^{-(t-r)S}1\rangle\langle1,e^{-rS}f\rangle\). The note says these products are positive because the semigroup images are nonnegative and nonzero by injectivity. That implication alone is not valid: two nonzero nonnegative functions can have disjoint supports, so their inner product can vanish.

The conclusion appears repairable from the exact kernel already displayed. Since (k) is strictly decreasing,
\[
k(|x-y|)-j_0>0\quad\text{for a.e. }(x,y)\in I\times I.
\]
Thus the residual continuous jump kernel in (S) still connects every pair of interior sets of positive measure. Its Dirichlet form is irreducible; adding the finite positive atomic jump energies and a scalar preserves irreducibility/positivity preservation. The irreducible Dirichlet-form theorem then makes (e^{-uS}) positivity improving for every (u>0). With that extra sentence, the displayed Dyson integral is strictly positive for nonzero (f,g\ge0) (or the zeroth Dyson term already suffices). This is a proof-detail gap, not a counterexample to the claimed conclusion.

### Remaining claims checked algebraically

- **Domain/compactness:** At fixed (a), (P_a) is a finite sum of bounded compressed shifts, so it is a bounded perturbation of the closed archimedean log form and does not change its form domain or compact resolvent.
- **Ground state and parity:** Once positivity improvement is established, the simple positive ground state follows by the standard Perron/irreducibility argument. Reflection commutes with the form, so uniqueness forces the positive ground state to be even. The positive-kernel sign comparison also excludes a sign-changing ground eigenfunction.
- **Strict window comparison:** For zero-extended (f\) supported in (I_b\subset I_a), the original archimedean form is unchanged; any newly active prime translation has length at least (2b), hence its overlap on (I_b\) is zero. In the jump-energy decomposition the corresponding scalar and exit terms cancel exactly. Equality of bottoms would extend a smaller-window ground state by zero to a larger-window minimizer, contradicting its strict positivity.
- **Bottom rate:** The lower bound μ\(_1(a)\ge\alpha_0-\|P_a\|) and (e^{-a}\|P_a\|\to1) give λ\(\liminf e^{-a}\mu_1\ge-1\). The two-endpoint trial has Fourier transform bounded in modulus squared by (2|\widehat g|^2) for real (g\), so its archimedean expectation stays (O_g(1)\); the prime endpoint limit gives (e^{-a}\langle P_af_a,f_a\rangle\to|\langle g,e^{-\cdot/2}\rangle|^2\). Approximating the normalized exponential by such (g\) yields the matching limsup ≤ -1.
- **Ground-state log moment:** The identity (q_{\rm arch}(\phi_a)=\mu_1(a)+\langle P_a\phi_a,\phi_a\rangle\), combined with μ\(_1(a)\sim- e^a\), \(\|P_a\|\sim e^a\), and (q_{\rm arch}\ge\alpha_0\), gives (q_{\rm arch}(\phi_a)=o(e^a)\). Since the multiplier differs from the logarithmic weight by (O(1)\), the stated (o(e^a)\) logarithmic Fourier moment follows. It is not a subexponential bound.

## Evidence and limits

- Reviewed `research/positivity/AJP01-pole-free-jump-ground-state.md`, `AJP04-audit-and-prime-tower-pivot.md`, `PBC01-prime-endpoint-limit.md`, and the corresponding campaign summary at `db331c4`.
- Direct calculation: expand (k(s)) as its geometric series and use \(\int_0^\infty e^{-as}(1-\cos(ts))ds=t^2/[a(a^2+t^2)]\); use the standard digamma series for the same difference.
- No numerical or formal verification was run. I did not reproduce PBC01's PNT boundary limit or check the full inherited arithmetic form against a primary explicit-formula source in this audit.
- **Overall:** The jump normalization, window comparison, and large-window bottom argument are consistent at the stated level. The positivity-improving proof needs the irreducibility observation above to justify its strict Dyson overlap. This remains an AI-assisted scoped audit, not human review, and it does not establish positivity of the full operator (A_a=T_a+H_a), RH, or a Hilbert–Pólya construction.
