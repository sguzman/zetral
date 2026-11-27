# B1-17 independent derivation audit

Date: 2026-11-27. Scope: audit the RH-equivalence derivation in
`B1-17-uniform-multiplier-rh-criterion.md`. This is a paper audit, not Lean
verification.

## Re-derivation

Fix \(L>0\), \(g\in C_c^\infty((0,L);\mathbb R)\),
\(\phi=g*g\), and \(\Phi(z)=\int\phi(v)e^{-zv}dv\). Then
\(\operatorname{supp}\phi\subset[0,2L]\) and
\(\Phi(z)=(\int g(x)e^{-zx}dx)^2\). The endpoint pairing is

\[
D_\phi(h)=\sum_p\frac{\log p}{\sqrt p}\phi(h-\log p)
              -e^{h/2}\Phi(1/2).
\]

For \(\Re z>1/2\), absolute convergence justifies Tonelli/Fubini:

\[
\begin{aligned}
\int_0^\infty e^{-zh}\sum_p\frac{\log p}{\sqrt p}
       \phi(h-\log p)dh
&=\sum_p\frac{\log p}{\sqrt p}e^{-z\log p}
       \int_0^\infty e^{-zv}\phi(v)dv\\
&=\Phi(z)F(z+1/2),
\end{aligned}
\]

because \(v=h-\log p\) and \(\phi(v)=0\) for v<0. The main term
transforms to \(\Phi(1/2)/(z-1/2)\), giving B1-17's identity with the
stated sign.

The prime-zeta relation is first differentiated in \(\Re q>1\), where all
series converge absolutely. For a compact subset of \(\Re q>1/2\), every
\(k\ge2\) satisfies \(\Re(kq)>1+\epsilon\) for some compact-dependent
\(\epsilon>0\). The Euler-series bound on \(\zeta'/\zeta(kq)\) then decays
geometrically in k, proving normal convergence of the k≥2 tail. The only
possible poles in this half-plane are therefore k=1 zeta zeros and the
zeta pole at q=1. Their residues in \(-\zeta'/\zeta\) are respectively
\(-m_\rho\) and +1. At q=1 (z=1/2), the residue of the product term is
\(+\Phi(1/2)\), exactly canceled by the explicit main subtraction.

If \(\sup_h c_h=C<\infty\), B1-09's pairing inequality gives
\(|D_\phi(h)|\leq C K_g\) for each fixed g, where
\(K_g=(2\pi)^{-1}\int\log(2+|\xi|)|\widehat g(\xi)|^2d\xi<\infty\).
The bound is allowed to depend on g. Hence the Laplace integral is
holomorphic in all \(\Re z>0\), sufficient to exclude each proposed
off-line zero individually.

For a proposed \(\rho=\beta+i\gamma\), choose a nonnegative smooth g in
an interval of width \(\delta<\pi/(2(1+|\gamma|))\). After rotating by
the phase at the interval center, all values of \(e^{-(\rho-1/2)x}\) on
the support have positive real part. Thus
\(\int g(x)e^{-(\rho-1/2)x}dx\ne0\), so \(\Phi(\rho-1/2)\ne0\).
At q=ρ, k≥2 terms are regular since \(\Re(k\rho)>1\). The resulting
pole cannot be removed by the q=1 main subtraction or another k term.
This independently confirms the contradiction without selecting a
rightmost zero.

## Falsification checks and boundary

- The argument needs `η=1` on the support of \(\phi\); the values of the
  cutoff outside `[0,2L]` do not enter the pairing.
- It needs a uniform bound over all h for this fixed η. A sequence-wise
  bound, an average-in-h bound, or the earlier `o(exp(h/2))` estimate is
  insufficient to make the Laplace transform holomorphic in Re z>0.
- It uses the entire family of pairings controlled by `c_h`, because the
  detecting profile may depend on a hypothetical zero. A single fixed g
  would only rule out zeros at which its transform does not vanish.
- The RH forward implication still relies on B1-12's cited fixed-strip
  logarithmic-derivative estimate and manually justified contour shift.
- This is structurally close to established Mellin/convolution criteria,
  especially Báez-Duarte Theorem 3.1. The audit verifies the Zetral
  normalization but does not establish novelty or computational advantage.

Conclusion: no normalization, pole, or cutoff defect was found in B1-17's
equivalence. Its evidence level is a manually audited analytic deduction
from classical identities and the B1-12 estimate; it is not a proof of RH.
