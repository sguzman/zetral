# B1-20 — RH-uniform logarithmic dual bound for the first-prime residual

Date: 2026-11-27. Status: rigorous conditional deduction from B1-09 and
B1-12; this is one component of the Weil form, not a positivity result.

## Question

Does the RH-conditional zero-residue estimate in B1-12 repair B1-10's
high-frequency loss relative to the logarithmic Fourier weight of the local
form domain?

## Deduction

Fix the cutoff `eta` and support parameter `L` from B1-09. B1-12 proves,
under RH, that the smoothed first-prime multiplier satisfies

    c_h = sup_xi |Delta_hat_h(xi)|/log(2+|xi|) <= C_eta

uniformly for every `h>=0`. B1-09's Fourier-duality identity (3), with its
Fourier convention, then gives for each real `g in C_c^infty((0,L))`,

    |integral (g*g)(v) dDelta_h(v)|
      <= C_eta/(2 pi) integral log(2+|xi|)|g_hat(xi)|^2 dxi.

Consequently this first-prime endpoint residual extends continuously to the
completion in the displayed logarithmic norm and is uniformly bounded in
`h` on its unit ball. This strengthens the PNT-only `o(exp(h/2))` control
and the RH Chebyshev-only `O(h^2)` estimate for this particular component.
The improvement uses the zero-residue expansion, not just the pointwise
square-root Chebyshev estimate.

## Audit of the apparent conflict with B1-10

B1-10 correctly says its estimate (2),
`|Delta_hat_h(xi)| <= C h^2(1+|xi|)`, does not by itself give a bounded
`H^log` dual norm. B1-12 later proves a different, stronger estimate by
shifting the pole-removed Mellin contour and summing zero residues. The two
statements are compatible once their hypotheses and methods are distinguished.
The B1-10 note is updated to make this chronology explicit.

## Falsification and limits

- Check the factor `1/(2 pi)` and logarithmic weight directly against
  B1-09 equation (3); no interpolation or hidden smoothness is used.
- The constant may depend on the fixed cutoff and the chosen contour line;
  uniformity over cutoffs is not claimed.
- RH, the zero-residue expansion, the local zero-count estimate and the
  contour-shift justification in B1-12 are assumptions/dependencies. This
  is not an unconditional theorem.
- Only the smoothed first-prime endpoint discrepancy is bounded. The other
  prime powers, the other endpoint, archimedean/continuous pieces and their
  cross terms have not been shown to be uniformly bounded or positive in
  the full Weil form. No full-space coercivity or RH proof follows.

No numerical computation or Lean proof is used. The result is an explicit
cross-check of two existing analytic estimates, not a novelty claim.
