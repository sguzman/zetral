# CPC03-W01 — Independent audit of parity and cutoff certificates

Date: 2026-11-25 UTC. Scoped proof audit of `research/positivity/CPC03-parity-cutoff-certificates.md`. No formal verification, numerical certificate, human review, or priority claim.

## Scope and imported assumptions

I checked the parity trace split, second-order centroid quadrature constants, support-null cosine freedom and convex certificate direction, and the analytic benchmark at (A=1/2048). I treat CPC01–02's compact operator framework, FES03's cutoff representation, and the established arithmetic form as imported. No numerical calculation or fresh literature search was performed.

## Parity and trace bounds

Because the symbols (p,W) are real and even, their compressed operators commute with physical reflection. For (t>0), projecting (e_t(x)=e^{-itx}) gives (e_t^+(x)=\cos(tx)), (e_t^-(x)=-i\sin(tx)); replacing the odd vectors by \(\sin(tx)\) changes only a unit phase and leaves rank-one operators unchanged. Since \(\nu\) is even and absolutely continuous, splitting its rank-one integral across (t\) and (-t) yields the factor two on (t>0) and no atom at zero. Their squared norms are
\[
\|e_t^\pm\|_2^2=A\pm\frac{\sin(2At)}{2t},
\]
with continuous values at zero. Multiplication by \(\|P_\pm^{-1/2}\|^2\le\mu^{-1}\) gives the trace bounds; summing them recovers (2A\nu(\mathbb R)/\mu). Also \(\|e_t^-\|^2\le(2A^3/3)t^2\) follows from \(|\sin(tx)|\le|tx|\), giving the stated sharper odd-sector estimate near zero.

## Centroid quadrature

For (v_t=P^{-1/2}e_t), differentiation in trace norm gives
\[
M''=v''\otimes v+2v'\otimes v'+v\otimes v''.
\]
The bounds from \(\|x^j\|_{L^2(-A,A)}^2=2A^{2j+1}/(2j+1)\) imply
\[
\|M''(t)\|_1\le2\|v''\|\|v\|+2\|v'\|^2
=\frac{4A^3}{\mu}\left(\frac1{\sqrt5}+\frac13\right)=H_2.
\]
Taylor expansion about the weighted centroid cancels the first-order term exactly. The bounded-interval variance inequality gives \(\int_J|t-t_J|^2d\nu\le w_J\Delta^2/4\); multiplying by the Taylor factor (H_2/2) yields (H_2\Delta^2\nu(\mathbb R)/8). The same rank-one factorization bounds trace norm and operator norm. Certified centroid or mass errors must still be propagated as stated.

## Cutoff freedom and convex certificates

For (d\ge2A), the translated supports of (f\) and (f(\cdot+d)) overlap only on a null set or not at all, so the autocorrelation at (d) vanishes for all (L^2) vectors supported in (I). Consequently adding (b\cos(dt)) leaves the compressed quadratic form unchanged. Finite sums preserve the same identity. For each fixed coefficient vector, the altered symbol remains continuous, bounded below, and logarithmically divergent at infinity; the compact framework applies, although the preconditioned compact operator itself need not have invariant eigenvalues. Since (x\mapsto x_+) is convex, (W_b=(\mu-s-S_b)_+) is convex pointwise in the coefficients. Integration against a fixed nonnegative weight, and taking a supremum over fixed cells, preserve convexity. These tests remain sufficient only; failure to find feasible coefficients says nothing necessary about positivity.

## Analytic small-window benchmark

At (A=1/2048), (2A<\log2), so the compact-support prime correlations vanish. The pole negative term is bounded by (2(\sinh A-A)\|f\|^2). The digamma series is increasing for (t\ge0); the quarter-argument value satisfies \(\alpha(0)>-6\). At (t=256), retaining (n=0,\ldots,63), the positive terms are at least (4+\log(65/2)>7.25), while the subtracted terms are at most (1/4); hence \(\alpha(256)>1\) and so for \(|t|\ge256\), \(\alpha(t)>1\). On the low-frequency interval, \(|F[f](t)|^2\le2A\) for unit (f), giving probability mass at most (512A/(2\pi)=1/(4\pi)<1/12\). Therefore the archimedean form is at least (1-7/(4\pi)>5/12). The pole loss is less than (1/12), leaving a bound strictly above (1/3), which extends to the closed form by the core. Zero-extension monotonicity carries it to smaller windows.

No flaw found in the parity, quadrature, cutoff, or benchmark arguments under the imported framework. The benchmark is an analytic inequality, not a numerical finite-matrix certificate or an improvement claim over earlier results. No RH or novelty conclusion follows.

## Source record

- Audited: `research/positivity/CPC03-parity-cutoff-certificates.md` at the starting commit recorded in the handoff.
- Cross-checked internally: CPC01–02 and FES03 dependencies as cited by CPC03.
- No external sources, numerical computation, or formal verifier used.
