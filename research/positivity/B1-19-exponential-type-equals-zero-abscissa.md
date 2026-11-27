# B1-19 — Multiplier exponential type equals the zero real-part abscissa

Date: 2026-11-27. Status: analytic deduction from B1-17/B1-18 and the
classical local logarithmic-derivative formula; no RH assumption.

## Theorem

Let
\[
 \Theta=\sup_{\rho}\Re\rho
\]
over nontrivial zeta zeros, and retain the fixed window and cutoff of
B1-17. Then

\[
 \limsup_{h\to\infty}\frac{\log(1+c_h)}h
       =\Theta-\frac12.
 \tag{1}
\]

The lower bound is B1-18. The upper bound follows by shifting the
pole-removed Mellin contour to any fixed zero-free line
\(\Re q=\sigma>\Theta\), when \(\Theta<1\), and by the unconditional
B1-09 estimate when \(\Theta=1\). In particular, the exponential type is
zero exactly under RH; the quantitative polynomial/logarithmic size under
RH is stronger and is B1-12.

## Upper bound when \(\Theta<1\)

Fix \(\sigma\) with \(\Theta<\sigma<1\). In the prime-zeta continuation

\[
 F(q)=\sum_{k\ge1}\mu(k)(-\zeta'/\zeta)(kq),
\]

the k≥2 tail is bounded on \(\Re q=\sigma\), because \(k\sigma>1\).
For k=1, Titchmarsh's local partial-fraction formula gives, away from
zeros,

\[
 \frac{\zeta'}{\zeta}(s)
 =\sum_{|\Im\rho-\Im s|<1}\frac{1}{s-\rho}
     +O(\log(2+|\Im s|)),
 \tag{2}
\]

uniformly on fixed strips; the local zero count is \(O(\log(2+|t|))\).
Every zero satisfies \(\Re\rho\le\Theta<\sigma\), so each denominator on
the line \(\Re s=\sigma\) is at least \(\sigma-\Theta\) in modulus.
Consequently

\[
 |F(\sigma+it)|\ll_{\sigma,\Theta}\log(2+|t|).
 \tag{3}
\]

Start from B1-11's absolutely convergent Mellin representation to the
right of q=1 and shift to q=σ. Since the whole intervening half-strip is
zero-free, the only crossed singularity is the pole of F at q=1. Its
residue is exactly the smooth term subtracted in \(\Delta_h\), so it
cancels. The horizontal integrals vanish: (2) gives at most logarithmic
growth on the zero-free strip, while \(\widetilde\eta\) is Schwartz on
fixed vertical strips. The resulting line integral has the factor
\(e^{(\sigma-1/2)h}\). By (3) and Schwartz decay,

\[
 |\widehat\Delta_h(\xi)|
 \ll_{\sigma,\Theta,\eta}
 e^{(\sigma-1/2)h}\log(2+|\xi|),
 \qquad c_h\ll_{\sigma,\Theta,\eta}e^{(\sigma-1/2)h}.
 \tag{4}
\]

Thus the limsup in (1) is at most \(\sigma-1/2\). Letting
\(\sigma\downarrow\Theta\) gives the upper bound \(\Theta-1/2\).

## Boundary case \(\Theta=1\)

B1-09's unconditional PNT argument gives
\(c_h=o(e^{h/2})\). Therefore
\[
 \limsup_{h\to\infty}h^{-1}\log(1+c_h)\le\frac12
 =\Theta-\frac12.
\]
The lower bound (2) of B1-18, taken over zeros with real parts
approaching their supremum \(\Theta=1\), gives the reverse inequality.
No zero with real part exactly 1 is required.

## Consequence and limits

Combining with B1-18 proves (1). By the functional equation,
\(\Theta=1/2\) is equivalent to RH; hence the multiplier's exponential
type detects the supremal zero displacement. This does not determine
\(c_h\)'s sign, its exact limsup constant, or its polynomial behavior
when RH holds. The RH case still uses the stronger B1-12 contour estimate.

## Source and audit boundary

The local logarithmic-derivative formula (2) and unit-interval zero count
are classical; Titchmarsh, *The Theory of the Riemann Zeta-Function*,
Theorem 9.6(A), is reproduced in this
[PDF copy](https://sites.math.rutgers.edu/~zeilberg/EM18/TitchmarshZeta.pdf).
The formula's nearby-zero sum is bounded by the fixed horizontal gap, and
its remainder is \(O(\log t)\). Prime-zeta continuation and main-pole
normalization are from B1-11/B1-17. The contour shift is a manual argument;
no Lean proof, numerical computation, or RH verification was performed.

**No novelty claim:** (1) packages the classical zero-abscissa/explicit-formula
mechanism in the Zetral endpoint multiplier. Its project value is the
precise matching rate and the fixed logarithmic-dual norm, not a new RH
proof.
