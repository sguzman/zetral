# B3-05 — Separation obstruction to standard Hermite sampling at zeta ordinates

Date: 2026-11-27. Status: source-based obstruction to one specific de Branges
route; not a no-go for all jet sampling.

## Precise question

Can Goncalves–Littmann's higher-order de Branges interpolation theorem be
applied with the sampling set equal to all distinct nontrivial zeta-zero
ordinates, under its standard bounded-differentiation hypotheses?

## Source theorem and consequence

Goncalves–Littmann, *Interpolation Formulas with Derivatives in de Branges
Spaces II*, arXiv:1510.08383, Theorem 2, assumes a Hermite-Biehler function
`E` with `E'/E` bounded in the upper half-plane and a uniform positive lower
bound on the phase derivative at the sampling set `T_B`. Under these
hypotheses, it reconstructs each `F in H(E^nu)` from the jets
`F^(j)(t)`, `0<=j<nu`, and gives a two-sided jet-sampling norm inequality.
The proof explicitly obtains that `T_B` is uniformly separated from the
bounded logarithmic derivative condition and its spacing lemma. The paper
also establishes that higher-order jets naturally live in `H(E^nu)`, rather
than `H(E)`.

Uniform separation means that some `delta>0` satisfies
`|t-t'|>=delta` for all distinct nodes. Consequently, any such set has only
`O(T)` points in `[0,T]`.

## Zeta-node obstruction

Heath-Brown, *Zeros of the Riemann Zeta-function on the Critical Line*,
Mathematische Zeitschrift 212 (1993), 193–199, recalls Selberg's theorem that
there are `c T log T` distinct ordinates of odd-multiplicity zeros on the
critical line up to height `T`, for some `c>0`. These are distinct ordinates
and hence belong to the full distinct zero-ordinate set `Gamma`. Therefore
`#(Gamma intersect [0,T]) >= c T log T`, which contradicts the `O(T)` count
forced by uniform separation.

Thus no Hermite-Biehler `E` can have `T_B=Gamma` and simultaneously satisfy
the standard hypotheses of the Goncalves–Littmann Theorem 2. The conclusion
does not depend on RH for the lower bound on critical-line zero ordinates; RH
is needed only if `Gamma` is intended to represent all nontrivial zeros.

## Scope and possible escapes

This rules out the direct application of this particular bounded-
`E'/E`, uniformly-spaced phase theorem on the full zeta node set. It does
not rule out weighted/nonuniform interpolation, a phase derivative that
degenerates at high ordinates, a different function space, or a construction
using only a suitably sparse subset of nodes.

Relevant nonuniform prior art exists for *value* sampling: Marzo–Nitzan–Olsen,
arXiv:1103.0566, Theorem 1, characterizes sampling and interpolation in
de Branges spaces with doubling phase using phase-separated sets and
Beurling-type densities. That framework is compatible with nonuniform
Euclidean node density in principle, but the cited theorem does not provide
higher-jet reconstruction or a zeta-derived arithmetic form. Each escape
still needs the arithmetic local form and inverse-compression identity absent
from the sampling literature. Sampling only a sparse subset would not by
itself recover analytic multiplicities at every zero.

The B3-04 equivalent-norm obstruction remains independent: any construction
that keeps the existing Weil norm and ordinary derivative coordinate on the
full compact-test space still fails regardless of the interpolation theorem.

## Evidence level and sources

- The `O(T)` consequence of uniform separation is elementary packing on the
  real line.
- The `cT log T` lower bound is Selberg's odd-multiplicity count, recalled in
  Heath-Brown's peer-reviewed 1993 paper.
- The interpolation hypotheses and separation consequence are from
  Goncalves–Littmann, arXiv:1510.08383, Theorem 2 and the proof of Theorem 15.
- No claim of zero simplicity, RH, or impossibility of other Hermite spaces is
  made. No numerical or Lean computation was performed.
