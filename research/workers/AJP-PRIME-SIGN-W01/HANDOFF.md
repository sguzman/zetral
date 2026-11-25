# AJP-PRIME-SIGN-W01 — finite-window prime-shift sign audit

- **ID:** AJP-PRIME-SIGN-W01
- **Status:** READY_FOR_REVIEW
- **Starting commit:** `1021900` (Campaign XXXVI activation)
- **Scope:** Independently check the exact sign, coefficient, truncation, and jump-energy decomposition of the prime-shift part of the finite-window Weil form. This supports AJP01 without attempting its semigroup, ground-state, window-comparison, or asymptotic claims and without treating the prime-shift operator itself as positive semidefinite.
- **Acceptance question:** Does the cited explicit formula produce positive-weight translations with the minus sign used in the form, and can that finite sum be rewritten as positive discrete jump energy plus a scalar potential?

## Result

The sign and coefficient are consistent. Suzuki, *Weil's quadratic form via the screw function*, arXiv:2606.09096v4, §2.3, equation (2.5), gives the prime part for (v\in H_0^1(-a,a)) as

\[
-\sum_{2\le n\le e^{2a}}c_n\left(\int_{-a}^{a-\tau_n}v(x+\tau_n)\overline{v(x)}\,dx+\int_{-a+\tau_n}^{a}v(x-\tau_n)\overline{v(x)}\,dx\right),
\quad c_n=\frac{\Lambda(n)}{\sqrt n},\quad \tau_n=\log n.
\]

The two integrals are adjoint translates and their sum is twice the real part of one overlap. If (v\) is extended by zero to (\mathbb R), then

\[
\|v(\cdot+\tau_n)-v\|_2^2=2\|v\|_2^2-2\operatorname{Re}\int_{\mathbb R}v(x+\tau_n)\overline{v(x)}\,dx.
\]

Consequently the prime contribution is exactly

\[
\sum_{2\le n\le e^{2a}}c_n\|v(\cdot+\tau_n)-v\|_2^2
-2\left(\sum_{2\le n\le e^{2a}}c_n\right)\|v\|_2^2.
\]

This is a finite positive discrete jump-energy sum plus a finite scalar potential (for each fixed (a)). It explains why subtracting the positive-weight translation operator gives the correct nonpositive off-diagonal form sign. It does **not** make the translation operator positive semidefinite; the sum of difference squares and the scalar potential must remain paired. If (\tau_n\ge2a), the overlap is zero a.e.; its jump-energy term is canceled exactly by its potential contribution, so including or excluding the endpoint (n=e^{2a}) changes nothing.

The local PBC01 note states the same convention for (P_a=\sum c_n(T_{\tau_n}+T_{-\tau_n})), including the warning that positive weights do not imply (P_a\ge0), and that (P_a) enters the Weil form with a minus sign. This audit verifies the algebraic prime term only. It does not establish positivity improvement for the combined pole-removed operator: that also depends on the archimedean jump form, domain closure, and scalar potential, which remain in the lead's AJP scope.

## Evidence

## Closest source precedent

In the same primary source, §5.2 proves that the normalized archimedean form \\(\\mathcal L\\) is Markovian and irreducible, hence has a positivity-improving semigroup; §5.3 uses this for simplicity of its ground state. The proof uses a strictly positive \\(|x-y|^{-1}\\) jump kernel plus a nonnegative boundary potential. This result concerns the archimedean comparison form and its small-window application (the prime sum is empty for \\(a<\\tfrac12\\log2\\)); it does not itself establish the all-window prime-augmented \\(T_a\\) of Campaign XXXVI. The identity above shows how each finite prime term contributes a positive discrete difference energy, modulo a scalar shift, so it is a compatible ingredient for extending that Dirichlet-form argument once the campaign's exact pole-removed decomposition and closed domain are established.

- Primary source inspected: [arXiv:2606.09096v4 HTML](https://arxiv.org/html/2606.09096v4), §2.3, equations (2.2)–(2.5), especially (2.5); the translated prime integral is displayed in the derivation immediately before (2.5). The source states the formula on (H_0^1(-a,a)).
- Repository cross-check: `research/positivity/PBC01-prime-endpoint-limit.md`, §1; `research/positivity/PBC02-pole-cancellation-defect.md`, §1.
- Exact source access: web search service opened the arXiv HTML directly on 2026-11-25. No numerical, formal, or external computation was performed.

## Checked / unchecked

- **Checked:** (\Lambda(n)/\sqrt n) coefficient; minus sign; both shift directions; finite cutoff from support length; zero-extension identity; endpoint cancellation; distinction between positivity of weights and operator positivity.
- **Not checked:** The full archimedean Levy-kernel representation; closure/domain passage to (\mathfrak D(T_a)); semigroup positivity or irreducibility; simplicity/evenness of the ground state; pole rank-two restoration; any large-window asymptotic.
- **Finding:** No sign or factor error in the checked prime contribution. This is a supporting source/algebra audit, not an accepted proof of any AJP milestone.
- **Next:** Lead can use this exact decomposition as a bounded perturbation/jump-energy input where domain assumptions are justified. Do not infer a ground-state theorem from this handoff alone.
