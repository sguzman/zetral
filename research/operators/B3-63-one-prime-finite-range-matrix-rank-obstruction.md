# B3-63 — One-prime finite-range symbols cannot encode variable zero rank

Date: 2026-11-28. Status: conditional no-go for a specific finite-range
two-channel architecture, using an unconditional positive-proportion simple
zero theorem. It does not rule out multivariate-prime or non-Toeplitz
matrix-valued constructions, nor assert the existence of a multiple zero.

## Candidate class

Fix a prime `p`, put `h=log p`, and let

    B(z)=sum_(k=-K)^K B_k z^k,     B_k in C^(2x2),

be a Hermitian Laurent-polynomial matrix that is positive semidefinite on
the unit circle. This is the spectral Gram symbol of a finite-range
two-channel convolution using shifts by integer multiples of `log p`.
At a positive zero ordinate `gamma`, suppose the matrix spectral atom of
the proposed construction is a positive scalar multiple of
`B(exp(i h gamma))`. Scalar normalization can set its trace to the scalar
Weil mass; it cannot change the rank.

Exact geometric multiplicity matching in two channels requires

    rank B(exp(i h gamma)) = m_gamma.

In particular, every simple zero requires rank one, while a double zero
would require rank two; multiplicity at least three is already impossible
in dimension two.

## Proposition

Assume RH and suppose the rank condition holds at every positive zero. Then
`det B` vanishes identically as a Laurent polynomial. Consequently
`rank B(z)<=1` for every `|z|=1`, so the construction cannot represent any
multiple zero with geometric multiplicity two.

## Proof

Conrey proved unconditionally that at least two fifths of the nontrivial
zeta zeros are simple and on the critical line. Together with
Riemann–von Mangoldt, the number of their distinct positive ordinates up to
`T` is at least `c T log T` for some `c>0` and all sufficiently large `T`.
Call this set `S`.

At every `gamma in S`, exact rank matching gives
`det B(exp(i h gamma))=0`. The phase map `gamma -> exp(i h gamma)` has at
most `1+hT/(2 pi)` ordinates in `[0,T]` for any one fixed phase, because
its preimages are an arithmetic progression of spacing `2 pi/h`. If only
finitely many distinct phases occurred on `S`, then `#(S cap [0,T])=O(T)`,
contradicting the `Omega(T log T)` lower bound. Hence these determinant zeros
include infinitely many distinct points on the unit circle. Compactness of
the circle gives an accumulation point `z_*` with `|z_*|=1`.

The Laurent polynomial `det B(z)` is holomorphic on `C minus {0}`. Its zeros
accumulate at an interior point of that domain, so the identity theorem
forces `det B` to vanish identically. Every `B(z)` on the unit circle is
therefore singular and has rank at most one. This contradicts rank two at
any double zero. The argument uses no numerical zero data.

## Falsification attempts and scope

- The phase-count bound is exact for each fixed phase; a finite phase set
  cannot contain `Omega(T log T)` simple ordinates.
- If all zeta zeros are simple, rank one at every zero is compatible with
  this proposition. The result does not disprove simplicity or a
  multiplicity-one Hilbert–Pólya operator.
- The proposition only treats one-prime finite-range translation symbols.
  With several prime logarithms the phase lies on a higher-dimensional
  torus; an infinite zero sequence with an accumulation point does not force
  a multivariate trigonometric polynomial to vanish identically. Infinite
  range, non-translation-invariant, and genuinely differential matrix
  systems are also outside the result.
- No multiple zeta zero is known. Under RH this rejects a route to exact
  multiplicity matching if a multiple zero exists; it does not reject the
  route under the additional simplicity hypothesis or an observed candidate
  spectrum.
- The requirement that the residue rank equal `m_gamma` is itself the target
  specification. The construction has not produced a prime-side matrix
  Weyl function; the lemma is a design obstruction before implementation.

## Prior art and next direction

The matrix-symbol identity argument is elementary and no novelty is claimed.
Its zeta input is Conrey's unconditional theorem that at least two fifths of
the zeros are simple and on the critical line, not RH:
[Conrey, J. reine angew. Math. 399 (1989), 1–26](https://doi.org/10.1515/crll.1989.399.1).

Next either (i) formulate a multi-prime symbol and identify the additional
arithmetic distribution theorem needed to control its values at simple zero
ordinates, or (ii) pivot to a zero-independent infinite-channel
construction. Do not infer multivariate symbol rigidity from the
one-prime identity theorem. Any proposed architecture must state how
multiple-zero ranks are recovered without assuming simplicity or inserting
zero data.

## Verification

The proof is an exact Laurent-polynomial identity argument plus the cited
simple-zero density and zero-count asymptotic. No numerical experiment,
canonical-system realization, Lean proof, or independent audit of Conrey's
theorem was performed.
