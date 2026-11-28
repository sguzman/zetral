# B3-60 — Compression limit and the missing multiplicity fibers

Date: 2026-11-28. Status: conditional operator-theory audit and exact
obstruction to obtaining the geometric multiplicity lift as the limit of
the source's transported local Riesz projections. The global target model
and its embeddings depend on zero data; no independent Hilbert–Pólya
construction is obtained.

## Question

Does Skelly's local compression theorem produce a norm/strong spectral
projection limit in the multiplicity-fiber operator from B3-58, or does it
only converge to a scalar-multiplicity model?

## Source compression mechanism

Under Hypothesis 1.5 (finitely many off-line zeros; RH is the special case),
Skelly defines the global Pontryagin space

    H_W = ell^2(Z,m),       ||x||^2 = sum_{zeta in Z} m_zeta |x(zeta)|^2,

where `Z` is the set of distinct zeros and the indefinite fundamental
symmetry pairs conjugate off-line zeros. The multiplication operator
`(Dx)(zeta)=zeta x(zeta)` has each distinct zero as a simple eigenvalue;
analytic multiplicity enters through the metric weight `m_zeta`. Its
inverse `C` is Hilbert–Schmidt in the majorant since
`sum_{zeta in Z} |zeta|^-2 < infinity`.

The arithmetic sampling maps embed each local form space into nested closed
subspaces `M_a` of `H_W`. Once the negative index stabilizes at `kappa`, a
fixed maximal negative subspace `N` lies in all `M_a`. Decomposing
`H_W=N [+] N^[perp]` makes each indefinite orthogonal projection
`Pi_a` the sum of one fixed finite-rank projection onto `N` and a Hilbert
orthogonal projection in the positive complement. Density of the nested
union then gives `Pi_a -> I` strongly and `sup_a ||Pi_a|| < infinity`.

For the Hilbert–Schmidt operator `C`, dominated convergence on an
orthonormal basis gives `||(Pi_a-I)C||_HS -> 0`; applying the same argument
to the adjoints gives `||C(Pi_a-I)||_HS -> 0`. Consequently

    ||Pi_a C Pi_a - C||_HS -> 0,

and hence operator-norm convergence. The compression identity identifies
`Pi_a C Pi_a` on `M_a` with the inverse of the local arithmetic operator.
Kato's compact-operator perturbation theorem then gives one simple local
eigenvalue branch and rank-one Riesz-projection convergence near each simple
eigenvalue `1/zeta` of `C`. The identities, topology, and order of these
implications check out conditional on the stated sampling embeddings and
source theorems.

## Exact fiber obstruction

Under RH the global space is the positive Hilbert space `ell^2(Gamma,m)`.
Let

    H_f = direct_sum_{gamma in Gamma} C^(m_gamma)

be B3-58's multiplicity-fiber space, with multiplication by `gamma` on each
fiber. Define the normalized diagonal isometry

    (U x)_gamma = x(gamma) (1,...,1)/sqrt(m_gamma).

It intertwines global multiplication on `H_W` with multiplication on
`H_f`, but its range `M=U H_W` has dimension one in each `gamma`-fiber. The
orthogonal complement has dimension `m_gamma-1` at every atom with
`m_gamma>1`, is reducing for the fiber operator, and is invisible to every
scalar sampling map `U j_a`.

Since `j_a` is onto `M_a` and `union_a M_a` is dense in `H_W`,
`closure(union_a U M_a)=M`, not `H_f` when any zero is multiple. The
transported local Riesz projection at `gamma` has rank one, whereas the
Riesz projection of the fiber operator has rank `m_gamma`. Norm convergence
of projections cannot change finite rank (and the source already proves the
rank-one limit in its scalar target). Therefore the existing compression
limit cannot be strengthened to convergence onto the full B3-58 eigenspace
when a multiple zero exists. This is not a contradiction: the source
recovers `m_gamma` in the limiting scalar spectral weight, and B3-58 adds
the missing `m_gamma-1` orthogonal directions by a separate fiber lift.

The obstruction does not rule out a different prime-side matrix/local model
that supplies those extra directions before taking a limit. It identifies
the exact missing ingredient: an arithmetic construction of additional
channels or independent approximate eigenvectors, with compatible maps and
without using the zero-indexed fibers as input. If all zeros are simple,
the complement vanishes and this particular multiplicity obstruction is
vacuous; simplicity is not established by RH.

## Circularity boundary and falsification

The local forms and operators are prime-defined, but this proof's common
space `ell^2(Z,m)`, norms, and embeddings are defined using the zeros and
their multiplicities. Thus the compression theorem is a spectral comparison
under the stated zero-set hypothesis, not by itself a zero-independent
construction of the limiting operator. It proves the local arithmetic
family approximates that target in the specified model; it does not give a
zero-independent common-space limit.

Falsification checks: (1) if a fiber has dimension `m>1`, normalized
diagonal embedding has a nontrivial `(m-1)`-dimensional complement; (2)
rank-one Riesz projections cannot converge in norm to rank-`m` projections;
(3) the scalar local theorem explicitly states simple finite-window
eigenvalues while weights, not dimensions, tend to `m`. No contradiction
between the two papers' multiplicity statements is present.

## Next investigation

Test whether the zero-independent de Branges/canonical-system direct limit
from Suzuki's prime-side kernels can define common maps for the local
operator family and recover a Hilbert-space spectral measure without first
postulating `Z` or `m`. Specify a candidate topology, prove compatibility
of the local embeddings and boundary operators, and attempt the same
rank-count falsification. If the only viable limit is the scalar cyclic
subspace, record that as the boundary and investigate whether matrix local
Weil forms can supply independent multiplicity channels.

## Verification and literature

The HS convergence deduction and fiber/rank obstruction are checked directly
from the stated hypotheses. The required nested sampling subspaces, uniform
projection bound, local compression identity, and global spectral model are
imported from Skelly, *Localized Weil Operators Across the Spectral Edge*,
revised 5 Nov 2026, §§5.1–5.5, Proposition 5.7 and Theorem 1.6. This is not
an independent audit of those constructions, and no Lean, numerical, or
formal verification is claimed. Source:
[full manuscript](https://www.alphaxiv.org/abs/2611.localized-weil-spectral-edge.pdf).
