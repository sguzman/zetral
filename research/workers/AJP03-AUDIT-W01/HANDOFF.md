# AJP03-AUDIT-W01 — pole-free gap and alignment audit

- **ID:** AJP03-AUDIT-W01
- **Status:** READY_FOR_REVIEW
- **Starting commit:** `db331c4` (Campaign XXXVII/PTI01 checkpoint)
- **Scope:** Independently audit the finite-window ground-state gap argument and the necessary pole-alignment estimate in AJP03. This is not an audit of every imported arithmetic form identity or the prior-art claim.
- **Acceptance question:** Are the ground-state transform, variance lower bound, and scale implications algebraically valid under the stated form/domain assumptions?

## Findings

### Gap argument

The full-line multiplier (b(t)=\alpha(t)-2\sum c_n\cos(ts_n)) is consistent with the full-line jump form: each prime difference term contributes (2c_n(1-\cos(ts_n))), and the scalar (-2\sum c_n\) leaves the multiplier (\alpha(t)-2\sum c_n\cos(ts_n)). Thus the interval form is its zero-extension restriction. For a sufficiently large common shift, the positive-part resolvent comparison is the usual killed-process domination argument; (w=(u-v)_+\) is supported in (I), belongs to the zero-extended logarithmic form domain by the lattice property, and the jump-form inequality yields (0\le e^{-tT_a}F\le e^{-tT_{\rm free}}F\).

The free smoothing estimate has the stated constant: (e^{-b(t)}\le e^{2\sum c_n}e^{-\alpha(t)}), and (e^{-\alpha}\in L^2(\mathbb R)) since \(\alpha(t)=\log(2+|t|)+O(1)\). Fourier inversion and Cauchy–Schwarz then give
\[
\|\phi\|_\infty\le e^{\mu+2\sum c_n}\left(\frac1{2\pi}\int e^{-2\alpha(t)}dt\right)^{1/2}.
\]

For bounded real (f\), the identity used with (g=f^2/(\phi+\varepsilon)) is exact after writing (p=\phi(x)+\varepsilon,q=\phi(y)+\varepsilon):
\[
(f_x-f_y)^2-(\phi_x-\phi_y)(f_x^2/p-f_y^2/q)=pq(f_x/p-f_y/q)^2.
\]
The residual potential is exactly \((V-\mu)\varepsilon f^2/(\phi+\varepsilon)\); its negative part vanishes by dominated convergence because (V\) is bounded below and \(\phi>0\) a.e. Applying Fatou to the continuous jump part, (k(|x-y|)\ge j_0=k(2a)\) on (I^2\), and \(\phi\le M\), gives
\[
t(f)-\mu\|f\|^2\ge\frac{j_0}{M^2}(\|f\|^2-|\langle\phi,f\rangle|^2).
\]
The factor is correct: the weighted double integral of \(|f/\phi(x)-f/\phi(y)|^2\) equals twice the variance, canceling the preceding factor (1/2\). Truncation extends the inequality to the real form domain because the truncation-error map is 1-Lipschitz and dominated by the original jump/exit energy; real and imaginary parts give the complex case. Therefore the next spectral level is separated by at least (j_0/M^2\). The bound may be very small, but is positive at each fixed window.

### Pole alignment

Using the even ground state as a trial vector for (A=T+2c\otimes c\) gives 
\(-N\le\mu+2C|\langle p,\phi\rangle|^2\). With (p=c/\sqrt C\) and (d^2=1-|\langle p,\phi\rangle|^2\), rearrangement gives exactly (2Cd^2\le N+\mu+2C\). Since (2C/e^a\to1\) and (\mu/e^a\to-1\), (N=o(e^a)\) implies (d\to0\); nonnegativity of the unit vectors yields \(\|p-\phi\|^2\le2d^2\). Conversely a positive limsup of (d^2\) forces a positive limsup of (e^{-a}N\). No converse alignment implication is asserted.

The endpoint profile of (p\) in fixed PBC01 coordinates is \((h,h)/\sqrt2\), (h(t)=e^{-t/2}\), by direct normalization of the two hyperbolic-cosine tails. The use of PBC01's strong prime limit on fixed vectors is consistent; no operator-norm convergence is needed.

## Checked / unchecked

- **Checked:** Symbol composition; resolvent comparison structure; Fourier smoothing constant; regularized ground-state identity; variance factor; extension by truncation; spectral-gap implication; alignment inequality and scale directions.
- **Not checked:** The full proof that the exact inherited arithmetic form has the asserted domain/potential decomposition; PBC01's PNT boundary limit; numerical constants; external sources or exhaustive prior art; formal verification or human review.
- **Finding:** No substantive algebraic error identified in the checked AJP03 deductions. The conclusions are a finite-window gap bound and a necessary alignment condition only; they do not furnish the required ordinary upper rate or prove RH.

## Evidence

- Reviewed `research/positivity/AJP03-gap-and-ground-state-alignment.md`, AJP01, and `research/positivity/PBC01-prime-endpoint-limit.md` at `db331c4`.
- Exact repository command: `git show origin/main:research/positivity/AJP03-gap-and-ground-state-alignment.md`.
- No numerical or formal computation was run; this is a symbolic audit.
