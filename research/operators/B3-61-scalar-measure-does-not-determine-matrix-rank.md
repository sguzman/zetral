# B3-61 — Scalar Weyl measure does not determine matrix multiplicity rank

Date: 2026-11-28. Status: exact Herglotz-function nonidentifiability
example. This is a structural constraint on matrix lifts, not a zeta-specific
no-go theorem or a novelty claim.

## Question

Does the scalar arithmetic Weyl function or its positive atomic measure
determine the rank of the atoms in a matrix-valued Weyl measure, as would be
needed to infer geometric eigenspace dimensions from a matrix canonical
system?

## Proposition

Let `mu=sum_n w_n delta_(x_n)` be any positive discrete measure on `R` with
infinitely many positive atoms and
`sum_n w_n/(1+x_n^2)<infinity`. Choose a partition of the atom indices into
two infinite sets `I_1,I_2`, and define the scalar Herglotz functions

    q_j(z) = sum_(n in I_j) w_n (1/(x_n-z) - x_n/(1+x_n^2)),
    q(z)   = q_1(z)+q_2(z).

The sums converge locally uniformly off `R`; the subtraction terms are real
and preserve positive imaginary part in the upper half-plane. The two
`2 x 2` matrix Herglotz functions

    M_1(z) = diag(q_1(z), q_2(z)),
    M_2(z) = (q(z)/2) I_2

are both strictly Herglotz (`Im M_j(z)>0` for `Im z>0`) and have the same
scalar trace `tr M_1=tr M_2=q`. At each atom `x_n`, the positive residue
matrix in the convention `M(z)=...+W_n/(x_n-z)` is

    W_n(M_1) = diag(w_n,0) or diag(0,w_n),   rank 1,
    W_n(M_2) = (w_n/2) I_2,                  rank 2.

Both matrix measures are positive and satisfy the matrix Herglotz
integrability condition, and their scalar trace measures are exactly `mu`.
So the scalar Herglotz function, including its complete scalar atomic
weights, does not determine matrix atom ranks.

## Proof and attempted falsification

For `Im z>0`, each atomic kernel has imaginary part
`Im(1/(x_n-z)) = Im(z)/|x_n-z|^2>0`. Each partition has an atom, so both
diagonal entries of `M_1` have strictly positive imaginary part; `M_2` is
strictly positive for the same reason. The displayed weights follow by
isolating the coefficient of `(x_n-z)^(-1)`. The regularized real constants
do not affect residues or positivity. Taking traces gives `q` in either
case, and `tr W_n=w_n` at every atom. No sign, normalization, or convergence
counterexample appears under the stated weighted summability.

The example does not assert that both functions arise from Suzuki's
particular prime-defined matrix Hamiltonian, nor that either selected matrix
measure has the exact canonical-system normalization of a specific zeta
model. It proves only that scalar Weyl data cannot select the rank. If one
wants rank `m_gamma` at each ordinate, this must come from additional
matrix-valued arithmetic data or a separate rank theorem; it cannot be
deduced from the scalar residue `m_gamma` alone. The B3-58 fiber lift is a
standard choice of geometric multiplicity, not a matrix factorization
selected by the scalar local kernel.

## Consequence for the operator campaign

Together with B3-60, this sharpens the next requirement. The existing
prime-defined scalar chain has only one channel per simple local eigenvalue,
and its scalar Weyl measure loses the matrix-rank information. A useful
matrix route must define a positive matrix-valued local Weil kernel before
passing to the scalar trace; then prove that its atomic rank is the desired
zero multiplicity. Any construction choosing rank or channel vectors after
reading the zeros is circular for the arithmetic construction goal.

This is an algebraic obstruction to recovery from scalar data only. It does
not rule out a new matrix-valued prime-side Weil form, an infinite-channel
construction, or simplicity of every zeta zero.

## Backlog

Test whether independent arithmetic features (for example, distinct
prime-side test channels) define a positive matrix-valued local Weil kernel
whose matrix spectral measure has ranks compatible with analytic
multiplicity. The design must avoid simply taking `q I_p`, `q` in a chosen
rank-one corner, or inserting zero-indexed projections: those constructions
have the desired scalar trace but demonstrate precisely the nonuniqueness,
not the required arithmetic rank identity. First bounded question: identify
the smallest nontrivial two-channel form derivable from the local explicit
formula and calculate whether its kernel limit has rank one or higher.

## Verification

All statements in the proposition follow by direct convergence and positivity
checks for Herglotz atomic sums. This is an abstract exact example; no
numerical experiment, canonical-system realization theorem, formal proof,
prior-art novelty claim, or independent zeta operator proof is asserted.
