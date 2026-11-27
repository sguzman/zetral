# B1-17 — RH equivalence via uniform endpoint dual boundedness

Date: 2026-11-27. Status: analytic equivalence with classical inputs; no RH
proof claimed.

## Statement

Fix any \(L>0\) and a nonzero \(\eta\in C_c^\infty(\mathbb R)\) with
\(\eta=1\) on \([0,2L]\). Define B1-09's smoothed first-prime discrepancy
\(\Delta_h\) and

\[
 c_h=\sup_{\xi\in\mathbb R}
 \frac{|\widehat\Delta_h(\xi)|}{\log(2+|\xi|)}.
\]

Then

\[
 \mathrm{RH}\quad\Longleftrightarrow\quad
 \sup_{h\ge0}c_h<\infty.
 \tag{1}
\]

The forward direction is B1-12's contour-shift bound. The converse follows
from a Laplace transform of one fixed-window pairing and detects any
off-critical-line zero. The implicit bound may depend on \(L,\eta\); no
explicit constant is claimed.

## Pairing controlled by \(c_h\)

For real \(g\in C_c^\infty((0,L))\), put \(\phi=g*g\) and define

\[
 D_\phi(h)=\sum_p\frac{\log p}{\sqrt p}\phi(h-\log p)
   -e^{h/2}\Phi(1/2),\qquad
 \Phi(z)=\int_{\mathbb R}\phi(v)e^{-zv}dv.
 \tag{2}
\]

Because \(\operatorname{supp}\phi\subset[0,2L]\) and \(\eta=1\) there,
this is exactly \(\langle\phi,\Delta_h\rangle\). B1-09's Fourier-dual
inequality gives

\[
 |D_\phi(h)|\leq \frac{c_h}{2\pi}
 \int_{\mathbb R}\log(2+|\xi|)|\widehat g(\xi)|^2d\xi.
 \tag{3}
\]

Thus uniform boundedness of \(c_h\) makes \(D_\phi\) bounded on
\([0,\infty)\) for every such fixed g.

## Mellin–Laplace identity and pole detection

For \(\Re z>1/2\), absolute convergence permits termwise integration in
(2): with \(F(q)=\sum_p(\log p)p^{-q}=-P'(q)\) initially for
\(\Re q>1\),

\[
 \mathcal L D_\phi(z):=\int_0^\infty D_\phi(h)e^{-zh}dh
 =\Phi(z)F(z+1/2)-\frac{\Phi(1/2)}{z-1/2}.
 \tag{4}
\]

Indeed, in each prime term set \(v=h-\log p\); the integral factors as
\(\Phi(z)(\log p)p^{-(z+1/2)}\). The second term is the elementary
Laplace transform of \(e^{h/2}\Phi(1/2)\).

For all \(\Re q>1/2\), the classical prime-zeta identity continues

\[
 F(q)=\sum_{k\ge1}\mu(k)(-\zeta'/\zeta)(kq).
 \tag{5}
\]

The k≥2 series is normally convergent there because \(\Re(kq)>1\).
Thus the only singularities of \(F\) in this half-plane are the pole at
q=1 (residue +1) and zeta-zero poles with \(\Re\rho>1/2\) (residue
\(-m_\rho\)). At z=1/2 in (4), the pole of F has residue
\(+\Phi(1/2)\), exactly canceled by the displayed subtraction.

Assume \(\sup_{h\ge0}c_h<\infty\). By (3), \(D_\phi\) is bounded,
so its Laplace transform is holomorphic throughout \(\Re z>0\). If
\(\rho=\beta+i\gamma\) were a zero with \(\beta>1/2\), then
\(z_0=\rho-1/2\) lies in this half-plane. Choose a nonnegative smooth
bump \(g\) supported in an interval of width less than
\(\pi/(2(1+|\gamma|))\). Its phase \(e^{-z_0x}\) varies by less than a
right angle across the support, so
\(\int g(x)e^{-z_0x}dx\ne0\). Since \(\phi=g*g\),
\(\Phi(z_0)=(\int g(x)e^{-z_0x}dx)^2\ne0\). The right side of (4),
meromorphically continued using (5), therefore has a nonremovable pole at
z0 with residue \(-m_\rho\Phi(z_0)\). No k≥2 term is singular there,
since \(\Re(k\rho)>1\) for k≥2. This contradicts holomorphy of the
Laplace transform. Hence no zero has real part greater than 1/2. The
functional equation reflects any zero left of 1/2 to one right of 1/2,
proving RH.

This argument does not require isolating a zero in a contour sum or assuming
that a rightmost off-line zero exists; each hypothetical off-line zero
produces its own nonremovable Laplace-transform pole.

## Literature and scope

The prime-zeta Möbius identity and RH fixed-strip estimate are recorded in
B1-11/B1-12. Classical RH criteria include square-root prime-counting error
bounds (for example DLMF §25.16(i),
[NIST DLMF](https://dlmf.nist.gov/25.16)); this note gives a fixed-window
logarithmic-dual formulation and a direct pole-detection proof. No novelty
claim is made. The RH-to-boundedness direction uses the cited RH
logarithmic-derivative estimate; the converse uses only analytic
continuation of the prime-zeta derivative, the Laplace identity, and the
Fourier-dual pairing bound. No numerical computation, Lean proof, or
independent RH verification was performed.

This pole-detection mechanism belongs to a broader established family of
Mellin/convolution criteria. Báez-Duarte's *Möbius-convolutions and the
Riemann hypothesis*, arXiv:math/0504402v1, Theorem 3.1, derives RH criteria
from growth of multiplicative convolutions and nonvanishing of their Mellin
transforms ([primary source, §3](https://arxiv.org/html/math/0504402)). The
present formulation uses the first-prime endpoint discrepancy and its
logarithmic-Fourier dual norm; it is recorded as a project-specific
equivalent criterion, not as a novelty or advantage over those criteria.

**Interpretation:** (1) is an equivalent criterion, not a proof of RH. It
turns failure of RH into exponential growth of at least one fixed-window
pairing and hence failure of uniform multiplier boundedness. The next
quantitative question is the sharp limsup growth rate of `c_h` in terms of
the rightmost zero real parts.
