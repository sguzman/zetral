# Campaign LXXXIII — Uniform endpoint dual criterion for RH

Date opened: 2026-11-27. Status: CLOSED within stated scope (2026-11-27).

## Precise question

For the fixed-cutoff first-prime endpoint multiplier
\(c_h=\sup_\xi|\widehat\Delta_h(\xi)|/\log(2+|\xi|)\), is uniform
boundedness in h equivalent to RH, and can the converse be made effective
in terms of an off-line zero?

## Checkpoints

B1-17 derives the equivalence
\(\mathrm{RH}\iff\sup_{h\ge0}c_h<\infty\). Under RH, B1-12 gives the
uniform bound. Conversely, c_h bounded controls every fixed smooth
convolution pairing; its Laplace transform is holomorphic for Re z>0. The
prime-zeta derivative identity continues that transform meromorphically,
and any zero \(\rho\) with Re \(\rho>1/2\) gives a nonremovable pole at
\(z=\rho-1/2\), after choosing a bump whose Laplace transform does not
vanish there. This contradicts holomorphy. The prime-pole subtraction at
z=1/2 cancels exactly. See
`research/positivity/B1-17-uniform-multiplier-rh-criterion.md`.

B1-18 sharpens the converse: each hypothetical zero
`rho=beta+i gamma` with `beta>1/2` forces
`limsup h^(-1)log(1+c_h) >= beta-1/2`. The proof uses the Laplace-transform
abscissa and does not require a rightmost zero. See
`research/positivity/B1-18-off-line-zero-growth-obstruction.md`.

B1-19 supplies the matching upper bound. For `Theta<1`, shift to any fixed
zero-free line `Re q=sigma>Theta`; the local logarithmic-derivative formula
and the positive gap control `F(q)` by `O(log(2+|Im q|))`, and the fixed
Schwartz cutoff controls horizontal edges uniformly in frequency. For
`Theta=1`, B1-09 gives the required upper bound. Thus the multiplier's
exponential type equals `Theta−1/2`. This is a classical zero-abscissa
mechanism in this endpoint formulation, not an RH proof or novelty claim.
See `research/positivity/B1-19-exponential-type-equals-zero-abscissa.md`.

Independent paper audit: `research/positivity/B1-17-independent-audit.md`
rederives the Laplace identity, normal convergence of the k≥2 tail,
residue cancellation at q=1, and the profile nonvanishing argument. It found
no normalization or cutoff defect. The forward implication remains at the
manual contour-proof evidence level of B1-12.

Prior art: this is a project-specific Mellin/Laplace formulation within the
established convolution-criterion tradition. Báez-Duarte's Theorem 3.1 in
arXiv:math/0504402v1 uses multiplicative convolution growth and Mellin
nonvanishing to characterize RH ([§3](https://arxiv.org/html/math/0504402)).
No novelty or computational advantage is claimed.

## Investigation completed

1. Independently audited normal convergence and singularity locations in the
   prime-zeta Möbius derivative for Re q>1/2.
2. Checked all Laplace-transform normalizations, including the smooth main
   term and the pole cancellation at z=1/2.
3. The zero-free-line contour shift to the right of
   `Theta=sup Re(rho)` proves the matching upper exponential rate, with
   frequency uniformity and logarithmic-derivative growth controlled.
4. Compared the criterion with Báez-Duarte's classical criterion using the
   primary source; no novelty claim is made.

## Acceptance and limits

The acceptance conditions were met within the campaign's scope: the
equivalence, hypotheses, independent audit, quantitative off-line-zero lower
bound, and matching upper rate are recorded. This criterion concerns only the
first-prime smoothed endpoint component. Even its RH equivalence gives no
positivity sign or operator correspondence on its own.

Dependencies: B1-09/B1-12; the classical prime-zeta identity; functional
equation; standard holomorphy of bounded Laplace transforms. No numerical
work or local build is required.
