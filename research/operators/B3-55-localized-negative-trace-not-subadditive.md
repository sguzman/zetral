# B3-55 — Localized negative trace is not subadditive

Date: 2026-11-28. Status: exact finite-dimensional obstruction to a generic
trace inequality; it is not a counterexample to the arithmetic operator.

## Question

Can the one-prime localized negative-trace bounds be added directly to bound
the negative trace after shifted blocks are summed?

## Exact counterexample

In the orthonormal basis `(u,e2,e3)`, set

    A = [[ 2, 0, 1],       B = [[ 2, 1, 0],
         [ 0,-2, 0],            [ 1, 1, 0],
         [ 1, 0, 1]],           [ 0, 0,-2]],

and let `M=|u><u|`, a rank-one orthogonal projection. The `{u,e3}` block of
`A` and `{u,e2}` block of `B` are each
`[[2,1],[1,1]]`, with eigenvalues `(3±sqrt(5))/2>0`. Their remaining
eigenvalue is `-2`, along `e2` for `A` and `e3` for `B`. Hence

    Tr(M A_-) = Tr(M B_-) = 0.

But

    A+B = [[4,1,1],[1,-1,0],[1,0,-1]].

The antisymmetric vector `(e2-e3)/sqrt(2)` has eigenvalue `-1` and zero
`u`-component. On the span of `u` and `w=(e2+e3)/sqrt(2)`, the matrix is
`[[4,sqrt(2)],[sqrt(2),-1]]`, with negative eigenvalue
`(3-sqrt(33))/2`. A normalized eigenvector for this eigenvalue has squared
`u`-component `4/(33+5sqrt(33))`. Therefore

    Tr(M (A+B)_-)
      = 2(sqrt(33)-3)/(33+5sqrt(33)) > 0
      > Tr(M A_-)+Tr(M B_-)=0.

Thus the tempting localized inequality
`Tr(M(A+B)_-) <= Tr(M A_-)+Tr(M B_-)` is false, even though the ordinary
unlocalized negative trace obeys the familiar variational subadditivity.
The example isolates the mechanism: positive-sector couplings in each block
combine with negative directions from the other block and rotate a negative
eigenvector into the observed subspace `Ran(M)`.

## Consequence for the research route

B3-54 bounds the sum of isolated block traces, but that sum cannot be
identified with or used as a generic upper bound for the localized negative
trace of the block sum. The counterexample does not model the arithmetic
Hankel blocks, their shared Mellin multipliers, or the specific cutoff
`M_chi_R`; those structures may still give a stronger inequality. The next
route should control cross-block low/high Mellin couplings (for example via a
Schur complement with a verified positive high-frequency block), or exploit
the common-shift structure to prove a tailored Schatten estimate. Merely
repeating the individual trace estimate is insufficient.

## Verification and scope

All claims follow by exact block diagonalization and the displayed
eigenvalues; no numerical computation was used. The rational matrices give
an independently checkable certificate. This is a scoped obstruction to a
generic inequality, not a no-go for ACG's H2′ estimate, not an arithmetic
counterexample, and not an RH result. No novelty claim is made; finite
dimensional noncommutativity is standard, and the purpose is to pin the
specific failure of the proposed localized-trace inference.
