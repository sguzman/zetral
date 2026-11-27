# Campaign XCV closure — theta differential pencil

Date: 2026-11-27. Status: CLOSED WITHIN THE TESTED REALIZATION CLASSES.

## Question and disposition

Campaign XCV asked whether Hedenmalm's theta boundary-value pencil admits a
positive, zero-independent self-adjoint Hilbert-space realization with exact
spectrum and multiplicities. It did not construct such an operator and did
not prove a global nonexistence theorem. It established the obstructions below
for specific, explicitly stated classes.

## Results retained

- HP-03.1–.2: the direct gauge-weighted realization and, more generally, every
  strictly positive smooth local density fail formal pair symmetry on the
  common `C_c^infinity` core.
- HP-03.3: the boundary equation gives a one-dimensional solution direction
  at each zero; that geometric dimension does not encode analytic order.
- HP-03.4: the natural gauge graph form is closed and induces the free
  Laplacian, with its formal kernel excluded from that weighted Hilbert space.
- HP-03.5–.6: the pair identity is inconsistent on domains containing
  `k,Dk,D²k`, while the literal zero-generated finite span excludes those
  functions pointwise. Thus the source's restricted domain evades that test;
  no density or completion result follows.
- HP-03.7: the simple similarity-transported metric fails to factor through
  `L`, and quotienting constants is not invariant under its transformed
  differential expression.
- HP-03.8: on the natural similarity metric, the transformed expression is
  essentially self-adjoint on `C_c^infinity`; its unique closure is
  unitarily equivalent to the free first derivative and has no point
  spectrum. A self-adjoint boundary correction that preserves this core
  action therefore cannot add the theta-zero solutions as eigenvectors.

## Scope limits and verification

These are manual calculations and theorem applications. A separate algebra
pass checked the local-weight defect, kernel-vector identity, and gauge
conjugation without finding a sign error. The differentiated theta
asymptotics, Hedenmalm's complex endpoint conditions, and all source-domain
hypotheses were not independently reproved. No Lean verification, external
second-person audit, complete prior-art review, RH proof, or Hilbert–Pólya
construction is claimed.

Still open: a different positive nonlocal metric; a zero-independent dense
completion of `H_finite`; domains not containing the compact core; closability
and multiplicity in such a completion; and full spectral correspondence with
no extraneous spectrum. The milestone write-up map remains in
`research/PAPER-PIPELINE.md`; HP-03.2 is the strongest theorem-shaped
candidate, but is not yet independently audited or cleared for novelty.

## Pivot

The literature scan found Meyer's older nuclear Fréchet-space spectral model.
Campaign XCVI will test the precise distinction between that spectral
encoding and a positive Hilbert–Pólya operator, beginning with whether the
original nuclear topology can admit a compatible Hilbert norm.
