# Campaign XCIII — Arithmetic finite-matrix spectral transfer

Date opened: 2026-11-27. Status: ACTIVE.

## Precise question

Can the finite Prime–Weil matrix pencils constructed from Weil's explicit
formula be shown, using only arithmetic-side estimates, to converge to the
complete zeta-zero spectrum in a way that yields a zero-independent
self-adjoint Hilbert–Pólya operator? In particular, can the relative pencil
estimate in Shi, arXiv:2609.04908 v12, §4.9, equation (4.51), be proved
without assuming RH or feeding ordinates into the construction?

## Existing evidence and literature

Shi constructs finite real-symmetric arithmetic matrices from pole,
archimedean and prime-power terms. A contrast-space generalized eigenvalue
pencil is Hermitian definite when its finite metric is positive. On the
zero-side finite model, rational interpolation reconstructs the input
ordinates exactly. The manuscript explicitly calls this a reconstruction,
not an independent proof of RH, and identifies relative control of the
prime-to-zero tail in the finite-zero quotient-energy metric as the central
remaining problem. Under RH, the full zero-side decomposition has a positive
tail; this dependence must not be silently used in an RH-independent
construction.

The target estimate is

    sup_{|z|<=R} || G0^(-1/2) (Delta K - z Delta G) G0^(-1/2) || -> 0,

for each fixed `R`, with the paper's notation. Along with reference-spectrum
separation and uniform control of the compressed metric, it would transfer
each fixed low ordinate. Entrywise or uncompressed norm convergence and a
small Rayleigh quotient alone do not imply this estimate.

Primary source: Yaoming Shi, “Construction of Finite Hilbert–Pólya Matrices
from Weil's Explicit Formula,” arXiv:2609.04908v12 (2026-09-07), especially
§§4.9, 5.3, 6.1, 8.3, and 11. The paper discloses substantial AI assistance
and author responsibility in §12. The literature check also found a related
formal RH proof status update: the original Lean proof's external verifier
now reports all checks finished, and a shorter community version passed its
reported checks by 2026-11-26. This changes the external proof-status record,
not the need for an HP operator construction. Zetral has not independently
replayed either proof artifact.

## Information gain and design

First audit the exact pencil definitions, equation (4.51), and its required
perturbation hypotheses. Falsify any shortcut from ordinary tail convergence
to relative control by testing the weakest possible finite-dimensional
examples. Then seek direct arithmetic bounds for the compressed forms using
the explicit formula, without presupposing the zero-side decomposition.
Compare against Zetral's existing exact positivity matrices and distinguish
finite arithmetic positivity from the RH-conditional endpoint Clark models.

Candidate routes:

1. **Metric-aware prime-side estimate:** express the compressed quadratic
   form in the paper's interpolation basis and derive bounds directly from
   prime-power coefficients and the archimedean multiplier.
2. **Compactness / variational route:** identify a common Hilbert space and
   prove Mosco or strong-resolvent convergence of arithmetic forms, including
   uniform lower bounds and tightness of spectral mass.
3. **Obstruction route:** exhibit metric degeneration or a compatible model
   where all uncompressed residuals vanish but the relative pencil error
   remains large; use it to specify which quantitative arithmetic input is
   indispensable.

Do not treat the zero-side finite reconstruction as independent: the
ordinates are explicit inputs there. Do not use RH to prove positivity and
then claim the construction proves RH.

## Dependencies and verification

- Read Shi v12 directly and pin formulas, hypotheses and normalization.
- Verify the Hermitian pencil algebra independently, including the
  compression and congruence conventions.
- Audit exactly which steps invoke RH, zero ordinates, or a positive zero
  measure.
- Any candidate operator limit must be densely defined and self-adjoint,
  have complete spectral correspondence with correct multiplicities, and
  exclude spectral pollution.
- Numerical comparisons use known zeros only as validation data, never as
  hidden construction inputs.

## Acceptance

Prove a zero-independent relative transfer estimate adequate for a spectral
limit, or establish a rigorous obstruction to deriving it from the currently
available uncompressed bounds and state the missing arithmetic estimate.
Then select a genuinely different in-scope route if needed. This campaign
does not close the mission and no RH or novelty claim is presumed.

## Initial audit checkpoint — 2026-11-27

The paper's abstract and detailed sections confirm: (i) arithmetic finite
matrices are built from explicit-formula data; (ii) the exact finite
zero-side quotient uses ordinates as data; (iii) the full-tail positivity
decomposition is stated under RH; and (iv) the proposed transfer is a
relative norm after whitening by `G0`, not ordinary operator norm. A simple
2-by-2 example already falsifies the implication from unwhitened norm
convergence alone: with `G0=diag(1,epsilon_n)`, `Delta G=0`, and
`Delta K=diag(0,sqrt(epsilon_n))`, the ordinary norm tends to zero but the
whitened norm is `1/sqrt(epsilon_n)`. This is a logical countermodel to that
shortcut, not a model of zeta matrices and not an obstruction to the paper's
stronger target.

HP-01.1 independently translates the fixed-index tail estimate into the
normalized reference eigenbasis. The `2N`-dimensional whitened norm is at
most `2N` times the largest tail entry divided by the square roots of the
corresponding reference weights, plus separately controlled shift terms.
The paper's `O_(z,w)` estimate for fixed spectral points does not provide
uniform constants for moving indices, and the explicit weights can be small
near sine resonance or when the interpolation derivative is small. Thus the
estimate does not establish the relative transfer theorem. This matches the
paper's stated gap; it is an independent scope audit, not a counterexample
to the actual zeta matrices.

The next milestone is to inspect whether simultaneous sine-resonance
avoidance can be obtained for a controlled `N,L` coupling and then determine
what lower bound is needed for the interpolation derivatives / small metric
directions. In parallel, attempt a prime-side compressed-form estimate that
does not decompose through zero ordinates. No numerical computation is
needed at this stage. Source review is manual; the paper's arithmetic
numerical experiment has not been independently reproduced.
