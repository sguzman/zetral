# B1-18 — Exponential growth forced by any off-line zero

Date: 2026-11-27. Status: conditional implication, derived from B1-17; no
claim that an off-line zero exists.

## Statement

Let \(\rho=\beta+i\gamma\) be any nontrivial zero with \(\beta>1/2\).
For the fixed cutoff/window in B1-17,

\[
 \limsup_{h\to\infty}\frac{\log(1+c_h)}h\geq\beta-\frac12.
 \tag{1}
\]

Consequently, with
\(\Theta=\sup_\rho\Re\rho\),

\[
 \limsup_{h\to\infty}\frac{\log(1+c_h)}h
 \geq\Theta-\frac12.
 \tag{2}
\]

Under RH, B1-12 gives the matching value zero for the left side. The bound
is conditional on a hypothetical off-line zero and does not assert one.

## Proof

Write \(a=\beta-1/2>0\), \(z_0=\rho-1/2\), and choose the real smooth
bump g from B1-17 so that \(\Phi(z_0)\ne0\). Let \(D_\phi(h)\) be the
fixed-window pairing in (2) of B1-17 and
\(K_g=(2\pi)^{-1}\int\log(2+|\xi|)|\widehat g(\xi)|^2d\xi<\infty\).
Then \(|D_\phi(h)|\le K_g c_h\).

Suppose contrary to (1) that
\(\limsup h^{-1}\log(1+c_h)<a\). Choose \(\epsilon>0\) with this
limsup below \(a-2\epsilon\). For all sufficiently large h,
\(c_h\le e^{(a-\epsilon)h}\), after absorbing a fixed factor; hence
\(D_\phi(h)=O_g(e^{(a-\epsilon)h})\). Its Laplace transform is therefore
holomorphic on \(\Re z>a-\epsilon\), in particular at \(z_0\).

But B1-17's identity
\[
 \mathcal LD_\phi(z)=\Phi(z)F(z+1/2)-\frac{\Phi(1/2)}{z-1/2}
\]
holds initially for \(\Re z>1/2\) and continues meromorphically. At z0
it has a nonremovable pole with residue \(-m_\rho\Phi(z_0)\ne0\). The
other terms are analytic there: the main pole is only at z=1/2, and for
k≥2 in the prime-zeta Möbius derivative, \(\Re(k\rho)>1\). Thus the
holomorphic Laplace transform and its meromorphic continuation contradict
each other. This proves (1). Taking the supremum over zeros gives (2), even
if \(\Theta\) is not attained.

The argument uses only the exponential growth abscissa of the Laplace
transform; it does not give an explicit sequence of h or a pointwise lower
bound. The test profile may depend on \(\rho\), whereas \(c_h\) itself is
independent of that choice.

## Scope

This sharpens B1-17's qualitative converse: failure of RH forces at least
exponential-in-h growth of the multiplier, at a rate no smaller than the
real-part excess of each off-line zero. It does not prove the converse
upper rate or an asymptotic formula for \(c_h\). The analytic mechanism is
the standard principle that a Laplace transform cannot be holomorphic past
the exponential growth abscissa of a function. No numerical calculation,
Lean proof, novelty claim, or off-line zero is asserted.

**Next:** determine whether a contour shift to any zero-free line
\(\Re q>\Theta\) supplies a matching upper exponential rate, and identify
the growth hypotheses needed to justify it uniformly in frequency.
