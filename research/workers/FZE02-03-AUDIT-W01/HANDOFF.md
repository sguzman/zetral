# FZE02–03 independent audit

Status: READY_FOR_REVIEW

Scope: audit of the smooth dual evaluation right inverse, Schur inertia comparison, and strict-threshold rate-count decomposition in `FZE02-smooth-dual-inertia.md` and `FZE03-additive-rate-decomposition.md`. The paired zero identity, local zero count, and FZE01 annihilator are treated as imported inputs; this is not source or formal verification.

## Findings

The right inverse in FZE02 is an ordinary Hilbert-space right inverse, as required: the normalized evaluation columns have a uniformly nonsingular finite Gram limit, and approximating their limiting columns by smooth endpoint profiles yields an invertible cross-Gram (C_aE_a^s\). The resulting (W_a=E_a^s(C_aE_a^s)^{-1}\) has fixed smooth profile range and uniformly bounded coefficients. Its Fourier decay combined with the arbitrary-vector evaluation bound gives the stated ordinary-norm mixed estimate; the factor is (e^{ba}\sqrt{I_a(b)}\), of order (e^{2ba}\) for (b>0\) and (\sqrt a\) for (b=0\).

In the selected finite coordinates the fast matrix has (r\) positive and (r\) negative eigenvalues, with inverse norm at most (e^{-2d_{\min}a}\). Under the stated smallness condition, the perturbation preserves this inertia. Completing the square gives a Schur correction of norm (O((L_a+t)^2e^{-2d_{\min}a})\); the strict-threshold inequalities in (4) have the correct direction. The equivariant right-inverse symmetrization is valid when (F\) is reflection invariant.

FZE03's strict-threshold rate-count argument correctly requires choosing thresholds with margin. In the reverse implication, a residual limsup strictly above (s\) supplies a subsequence with an exponential margin above (e^{s'a}\); that margin absorbs the fixed support enlargement in FZE01 and the vanishing relative Schur error. In the liminf direction, the fixed enlargement still covers every sufficiently large target window by taking its input at (a-H_f\). Lower-scale finite terms are bounded perturbations of size (o(e^{sa})\), so they do not change counts at a strict threshold. The parity version relies on the finite selected set being a union of reflection quartets, giving one fast negative direction per parity for each reflected pair of conjugate pairs.

I found no decisive dimension or threshold-direction error under the stated hypotheses.

## Limits

- The argument is only for strict thresholds away from the selected finite rates; equal-rate groups require separate treatment.
- The constants and support enlargement depend on the finite selected zero set, so no uniform growing-set statement follows.
- The classical local count and paired-form/domain inputs were not independently source-verified or formally checked.
- No actual off-line zero, RH conclusion, numerical result, or priority claim.
