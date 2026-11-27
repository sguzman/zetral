# Campaign LXXX closure — first-prime endpoint multiplier

Date: 2026-11-27. Status: CLOSED within the stated bounded scope.

## Question and acceptance

Campaign LXXX asked whether the smoothed first-prime endpoint multiplier
\[
 c_h=\sup_{\xi\in\mathbb R}
 \frac{|\widehat\Delta_h(\xi)|}{\log(2+|\xi|)}
\]
has a useful uniform bound in h or must grow, and required either a proved
estimate or a rigorous lower bound along a sequence. It also asked that any
conclusion be kept separate from full Weil-form positivity.

## Findings

- B1-11 gives \(c_h=O_\epsilon(e^{\epsilon h})\) for every fixed
  \(\epsilon>0\), conditional on RH and a cited fixed-strip
  logarithmic-derivative estimate.
- B1-12 shifts the pole-removed prime-zeta contour across the critical line.
  Including both nontrivial zero residues and the k=2 pole at q=1/2 gives
  \(c_h=O_\eta(1)\) uniformly for h≥0, conditional on RH and the cited
  classical estimates. This is a manual analytic derivation, not a machine
  checked proof.
- B1-13 uses absolute convergence and mean-square orthogonality of the
  smoothed zero-residue series to prove \(\limsup_{h\to\infty}c_h>0\),
  conditional on RH. This is existential and permits small subsequences.
- B1-14 combines the bound with the direct paired-edge decomposition. For
  each fixed smooth profile, the leading archimedean and first-prime terms
  cancel, prime squares contribute a finite PNT main term, higher powers
  vanish, and the remaining direct continuous terms stay bounded. Hence
  \(Q_W(f_h)=O_g(1)\) under RH on this one family. No sign or coercivity
  follows.

## Verification and limits

The contour residues and transform bounds were manually rederived in the
research notes; no computation, Lean proof, build, or independent RH
verification was performed. The prime-square endpoint asymptotic uses PNT.
No novelty claim is made. The conclusions concern the specified smoothed
component and a fixed family of packets; they do not control the full unit
sphere, prove positivity, or construct a Hilbert–Pólya correspondence.

## Pivot

The multiplier's size question is resolved within scope: it is bounded under
RH and has positive limsup. Continuing to optimize this component alone has
diminishing value. Campaign LXXXI therefore asks whether the bounded
almost-periodic zero-residue contribution survives or cancels in the full
direct Weil form on paired edge packets. It has a concrete first task:
separate the fixed limiting prime-square, archimedean, continuous-kernel,
and pole contributions from the B1-12 zero frequencies.
