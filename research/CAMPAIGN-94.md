# Campaign XCIV — Fixed-low-spectrum transfer by Schur complements

Date opened: 2026-11-27. Status: ACTIVE.

## Precise question

Can the first fixed number of generalized eigenvalues of the arithmetic
Prime–Weil pencils converge to the corresponding zero-side ordinates using
low/high block estimates, without proving the stronger global whitened norm
target of Shi equation (4.51)? Can the required estimates be obtained from
the arithmetic matrix data without assuming RH or feeding zeros into the
operator construction?

## Existing evidence

Campaign XCIII shows that fixed-index zero-tail entry estimates do not
control a growing-dimensional whitened norm, while abstract small metric
directions invalidate an unwhitened shortcut. The source's exact
zero-side diagonalization offers a comparison basis but depends on the
ordinates. The arithmetic contrast pencil itself is defined independently
from the zero data. Standard finite-dimensional Schur complements suggest
that convergence on a fixed compact spectral window may need only (i) a
stable high block resolvent, (ii) convergence of the low block, and (iii)
vanishing of the weighted low/high coupling, rather than a global operator
norm tending to zero.

## Candidate criterion

In coordinates that diagonalize the reference pencil, write its spectral
equation as `D_N-zI+E_N(z)`, where `D_N` has the reference ordinates and
`E_N(z)` is the whitened arithmetic perturbation. Let `P` project onto the
first `m` positive and negative reference modes, with `m` fixed, and `Q=I-P`.
For `z` in a compact set `K` disjoint from the high reference spectrum, set

    H_N(z)=Q(D_N-zI+E_N(z))Q,

    S_N(z)=P(D_N-zI+E_N(z))P
             -P E_N(z) Q H_N(z)^(-1) Q E_N(z) P.

If `H_N(z)` is uniformly invertible on `K`, and the low Schur complement
converges uniformly on contours around the first `m` reference eigenvalues
to `P(D_N-zI)P`, then its determinant has the same limiting zeros with
multiplicity. Uniform invertibility and Schur convergence on the rest of a
fixed compact set would also exclude spectral pollution there. This
criterion is a proposed reduction, not an accepted spectral theorem yet;
the moving coordinates and changing pencil dimension need careful handling.

## Falsification and design

1. Prove the finite-dimensional block determinant identity and state the
   exact uniform hypotheses needed for convergence of roots and exclusion
   of spurious compact roots.
2. Falsify weaker variants with small Hermitian pencils. In particular,
   test whether low-block convergence alone controls the spectrum when
   high-mode coupling grows.
3. Translate the criterion to the Prime–Weil contrast pencil. Identify
   which low/high blocks can be bounded directly from its arithmetic
   entries, and which available bounds still invoke zero-side data or RH.
4. If the arithmetic bounds are inaccessible, preserve the conditional
   criterion and pivot to the next operator route; do not claim spectral
   transfer from the abstract lemma.

## Initial checkpoint — HP-02.1

The finite-dimensional Schur determinant identity and uniform-contour
criterion are derived in `research/operators/HP02-low-window-schur-criterion.md`.
A 2x2 Hermitian family with `D=diag(1,M)` and off-diagonal perturbation
`sqrt(M)` keeps the low diagonal block exact and the high resolvent uniformly
bounded, yet shifts the low eigenvalue from `1` to `0`; the weighted
low/high Schur correction is order one. Thus the coupling term cannot be
omitted. This is a generic countermodel, not a zeta-pencil obstruction.

Next inspect the exact low/high blocks from Shi's zero-side basis and the
arithmetic contrast formulas. Determine whether the finite-index tail
estimate controls the low-to-high coupling after high-block inversion, and
whether any such bound can be obtained without assuming RH or supplying zero
ordinates to the arithmetic construction. No such arithmetic estimate has
yet been proved. The fixed-low tail-metric block can be bounded by the
fourth-power tail divided by the two low metric normalizations (HP-02.2),
but the denominator, the moving high blocks, and the `Delta K` contribution
remain uncontrolled.

## Fixed-low resonance checkpoint — HP-02.3

For `L_N=N^2+U` with one fixed `U` uniform on `[0,1]`, a uniform phase-period
count and the first Borel–Cantelli lemma show that almost surely every one of
the first `N` sine factors is at least `N^-3` for all sufficiently large
`N`. The selection rule itself does not use ordinates, though the exceptional
set and the probability-one assertion refer to the fixed actual sequence;
this gives neither an explicit certified offset nor a deterministic
preselected-offset guarantee.

Combining this with Shi's exact derivative product and the
Riemann–von Mangoldt upper count gives, for each fixed `k`,
`log omega_(k,N,L_N) >= 4N log N - 4N log log(2N) - O_k(N)` almost surely.
The proof uses distinct ordinates, their separation from the first fixed low
ordinate after finitely many indices, and `gamma_j >= c j/log(2j)` from the
zero-count upper bound. The total fourth-power mass `sum m_j/gamma_j^4` is
finite by dyadic summation. Consequently the HP-02.2 fixed-pair normalized
`Delta G` tail entries tend to zero under the source's RH decomposition.
This is a fixed-low RH-conditional metric-tail result in the zero-side
comparison basis, not a prime-side bound or spectral transfer. It leaves
`Delta K`, moving low/high coupling, and uniform high-block invertibility
open. Full derivation and caveats: `research/operators/HP02-fixed-low-random-window.md`.

## Dependencies and acceptance

- Primary source arXiv:2609.04908 v12, especially §§4.9 and 5.
- Exact normalization of the generalized pencil and metric whitening.
- Acceptance: a rigorous low-spectrum transfer theorem with explicit
  zero-independent hypotheses verified for the arithmetic matrices, or a
  countermodel showing the proposed weaker hypotheses are insufficient and
  a precise missing arithmetic estimate. A general Schur-complement lemma
  alone is not campaign completion.
- Any claimed operator limit must still establish self-adjointness,
  completeness of spectral correspondence, multiplicities and no spectral
  pollution. No RH, novelty or numerical claim is presumed.
