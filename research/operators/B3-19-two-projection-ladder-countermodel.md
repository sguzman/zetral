# B3-19 — Upper ladder bounds do not force a lower ladder bound

Date: 2026-11-27. Status: rigorous abstract countermodel; not a model of the
arithmetic Weil form and not a source-level obstruction to its additional
trace identities.

## Question

Do the qualitative semilocal uncertainty principle (no common range vector,
an infinite-dimensional common kernel, and compactness of the compressed
projection product) together with upper Fuchs-ladder estimates imply a
matching lower bound for the smallest positive eigenvalue?

## Construction

Fix a sufficiently large window parameter `lambda` and a finite initial
ladder segment `j=1,...,J(lambda)` on which the positive rungs
`delta_(4j)(lambda)` are increasing and below one. Choose

    mu_1 = delta_4(lambda)^2,
    mu_j = delta_(4j)(lambda),  2 <= j <= J(lambda),

and let `theta_j=arccos(1-mu_j)`, so `0 < theta_j < pi/2`. Let
`H = (direct_sum_(j=1)^J C^2) + (direct_sum_(n>=1) C^2) + K`, where `K`
is infinite-dimensional. On active block `j`, define orthogonal projections
by

    P_j = projection onto e_j,
    Q_j = projection onto cos(theta_j)e_j + sin(theta_j)f_j,

On each tail block let `P` and `Q` project onto orthogonal lines, and set
`P=Q=0` on `K`.

On each active block, `PQP` has its only nonzero eigenvalue
`cos(theta_j)^2`; hence `PQP` is finite rank and compact. Since each
`theta_j>0`, `Ran(P) intersect Ran(Q)={0}`. Also
`Ker(P) intersect Ker(Q)` contains `K`, so it is infinite-dimensional. On
each tail block `PQP=0` and `U=2-P-Q` is the identity. For `U=2-P-Q`, the
two eigenvalues on active block `j` are

    U_j = [[sin(theta_j)^2, -sin(theta_j)cos(theta_j)],
           [-sin(theta_j)cos(theta_j), 1+cos(theta_j)^2]],

    1-cos(theta_j)=mu_j,   1+cos(theta_j)=2-mu_j.

Indeed, `tr(U_j)=2` and `det(U_j)=sin(theta_j)^2`, giving this
characteristic polynomial and the two roots above.

On `K`, `U=2`. Thus `U` is positive with compact `PQP`, finite-dimensional
near-zero spectrum at each fixed `lambda`, and the desired qualitative
uncertainty/Sonin structure.

The even-sector upper bounds `epsilon_j <= C_j delta_(4j)` all hold for
`C_j>=1`: the first is stronger because `delta_4^2<=delta_4`, and the rest
are equalities. Yet

    epsilon_1 / delta_4 = delta_4 -> 0

as `lambda -> infinity`. Therefore these upper estimates and qualitative
two-projection properties alone do not imply any positive uniform lower
comparison `epsilon_1 >= c delta_4` with `c>0` independent of `lambda`.
An odd-sector copy can be made with rungs `delta_(4j+2)`.

## Scope and falsification

- This is an exact abstract countermodel to the proposed *logical
  implication* from upper ladder estimates plus the listed qualitative
  projection geometry to a lower ladder estimate.
- It is not a counterexample to the actual `QW_lambda`, and it does not
  satisfy the arithmetic-map identity, prime-power form, scale-covariant
  semilocal trace formula, or all quantitative assumptions in ACG §8.
- Thus the lower estimate might still follow from those additional
  arithmetic identities. The model identifies that such input is essential;
  it does not show which additional source hypothesis suffices.
- Positivity holds at each fixed `lambda`, but its bottom is
  `delta_4(lambda)^2`; this explicitly falsifies any inference that a
  qualitative no-intersection statement supplies the required quantitative
  spectral gap.

## Acceptance and next experiment

Accepted for the restricted implication above by direct diagonalization of
each two-dimensional block. Next audit the hypotheses of ACG's actual
Schur-block inequality and identify the weakest arithmetic identity or
uniform angle estimate that rules out this countermodel. Do not infer that
the source result is false or that RH fails.

Primary source defining the target assumptions: Andrews–Connes–La Gatta,
[arXiv:2611.13129v1](https://arxiv.org/abs/2611.13129), especially §8.8.
