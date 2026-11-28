# B3-59 — Audit of the local spectral-weight multiplicity limit

Date: 2026-11-28. Status: bounded source-level audit of a recent preprint
theorem and its relation to the arithmetic measure lift; not an independent
proof of the paper's global operator-convergence theorem.

## Question

Does the local prime-defined differentiation-operator family recover the
analytic multiplicity of each zeta zero in its spectral weights, and does
this change the interpretation of B3-58's measure-to-operator lift?

## Source result

Brian M. Skelly, *Localized Weil Operators Across the Spectral Edge:
Bottom-Edge Characteristics, Pontryagin Continuation, Spectral Weights, and
Schur Comparison for Suzuki's Differentiation Operators*, revised 5 Nov
2026, §§1.3, 5.3–5.5, Theorems 1.6 and 1.7; source PDF:
[alphaXiv manuscript](https://www.alphaxiv.org/abs/2611.localized-weil-spectral-edge.pdf).
The author labels Hypothesis 1.5 as the assumption that zeta has only
finitely many off-critical-line zeros. RH is its zero-off-line special case.

Under that hypothesis, the paper's Theorem 1.6 says that for each distinct
zero `zeta` and all sufficiently large windows `a`, the local operator
`T_a = D~^0_(a,pi)` has a simple eigenvalue `t_a(zeta)` converging to `zeta`;
on each fixed zero-free-boundary compact set the local eigenvalues are in
bijection with the zero set. Theorem 1.7(ii) then asserts

    w_(t_a(zeta)) = 1/[u_(t_a),u_(t_a)] -> m_zeta.

For real eigenvalues this weight is `1/J_a(t,t)`, the reciprocal squared
norm of the local eigenvector in the arithmetic Hilbert metric. Under RH,
all local eigenvalues in this regime are real and of positive type. Thus
multiple zeros are represented by limiting spectral weights even though
each sufficiently large finite-window local eigenvalue is simple.

## Independent check of the multiplicity-limit step

Fix one zero `zeta`. Choose a real even test function `u` of compact support
with `u_hat(zeta) != 0`. Such a choice exists: rescale a nonnegative even
smooth bump toward a point mass, so its Fourier transform at the fixed point
converges to its nonzero total mass. For all sufficiently large `a`, the
support lies inside `(-a,a)` and Theorem 1.6 supplies the simple eigenvalue
`t=t_a(zeta)` and its Riesz projection `P_t`.

The source embeds the local Pontryagin spaces isometrically into one global
space `H_W`, and proves that the transported Riesz projections
`j_a P_t j_a^[*]` converge in operator norm to the global projection
`P_zeta`. The local rank-one projection identity gives

    [P_t u,u] = w_t u_hat(t) overline(u_hat(t)).

For the real-even test used in the paper, its transform is real on the real
axis; more generally the conjugate is evaluated at `bar(t)`. In the global
model, `[P_zeta S u,S u] = m_zeta u_hat(zeta) overline(u_hat(bar(zeta)))`.
Continuity of the Fourier transform, `t_a(zeta)->zeta`, and convergence of
the transported projections therefore imply

    w_(t_a(zeta)) -> m_zeta

after division by the nonzero limiting test factor. This verifies the
paper's final projection-to-weight implication, conditional on its stated
global embedding and Riesz-projection convergence. It does not independently
establish those substantial hypotheses or the operator convergence used to
obtain them.

## Falsification and scope

- A test with `u_hat(zeta)=0` cannot identify the weight; the bump-rescaling
  choice prevents this degeneracy.
- The conclusion needs the source's finite-off-line-zero hypothesis for its
  global Pontryagin model. RH implies that hypothesis, but Zetral has not
  rerun or formally composed either the external Lean RH proof or Skelly's
  argument.
- The local eigenvalue is simple for large finite `a`; `w_t -> m_zeta` is
  not an eigenspace of dimension `m_zeta`. It is a limiting norm/spectral
  weight. No fixed finite-window differential operator in this theorem has
  the desired geometric multiplicity when `m_zeta>1`.
- The result is stronger than mere vague convergence for this family: it
  matches an individual eigenvalue branch and its weight at every fixed
  zero. It still makes no claim that escaping eigenvalue weights vanish
  individually; the paper explicitly distinguishes weighted tails tested
  against fixed functions from that assertion.
- The paper itself notes function-field precedent for reciprocal kernel
  norms recording multiplicities and locates its zeta increment in moving
  eigenvalues and converging Riesz projections. Zetral makes no priority or
  novelty claim for the theorem.

## Relation to B3-58 and Zetral's edge quotient

B3-58's direct-sum fiber operator is an exact, standard realization of the
limiting integer-weighted atomic measure, with geometric multiplicity
`m_zeta`. B3-59 supplies a prime-defined local approximation route to that
measure's individual atoms and weights under the source hypothesis. The two
results are complementary: B3-59 provides local approximation evidence;
B3-58 performs the final canonical fiber lift. Neither yields a single
intrinsic local differential expression with geometric multiplicities
`m_zeta` or removes the imported global spectral-correspondence theorem.

Zetral's QER01–04 edge quotient is a different parameter regime: it uses the
quotient at the actual bottom `lambda_1(a)`, while Skelly's multiplicity
limit uses the arithmetically distinguished `lambda=0` family and assumes
finitely many off-line zeros. The QER04 exponential cluster estimates
therefore cannot be substituted for Theorem 1.7(ii), or vice versa, without
a proved identification of the operators and metrics. In particular, this
audit does not close QER04's statement about individual spurious weights in
its edge model.

## Next question

The global compression proof uses a common zero-indexed Pontryagin space.
Investigate whether Suzuki's zero-independent de Branges/canonical-system
direct limit supplies common spaces and maps for the local operators. State
the topology and prove compatibility of the forms and boundary operators;
attempt a rank-count falsification against the B3-58 fiber operator. If the
only limit is scalar/cyclic, identify precisely what new local channels are
needed. This follows the conditional rank obstruction established in
`B3-60-compression-limit-and-fiber-obstruction.md`.

Verification: theorem statement and proof lines were read in the manuscript;
the scalar projection identity, test-function choice, and limiting quotient
were checked here. No computations, Lean verification, or full source-proof
audit were performed.
