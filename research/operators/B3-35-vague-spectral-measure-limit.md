# B3-35 — Multiplicity as a vague limit of local spectral masses

Date: 2026-11-27. Status: conditional measure-convergence consequence of
Suzuki's published canonical-system results under RH; no new operator
construction or novelty claim.

## Question

Can the finite local canonical-system measures recover analytic zero
multiplicity as *cluster mass*, even though each finite-interval
self-adjoint extension has simple eigenvalues?

## Source input

Assume RH. For each local endpoint parameter `a`, Suzuki's phase-`pi`
extension has simple real spectrum `Gamma_(a,pi)` and discrete spectral
measure

    mu_a = sum_(gamma_a in Gamma_(a,pi)) J_a(gamma_a,gamma_a)^(-1) delta_(gamma_a).

The associated finite Weyl functions `q_a` converge locally uniformly in
`C+` to `Q_xi(z)=i xi'(1/2-iz)/xi(1/2-iz)`. The source also gives the
finite Weyl expansion with no linear term. Since these measures are
symmetric, the Cauchy transforms below are understood in symmetric pairs
(equivalently, with the standard Nevanlinna subtraction),

    q_a(z) = integral_R (t-z)^(-1) d mu_a(t),

and under RH the limit has the pure atomic representation

    Q_xi(z) = integral_R (t-z)^(-1) d mu_xi(t),
    mu_xi = sum_(gamma in Gamma) m_gamma delta_gamma.

Here `Gamma` is the set of distinct signed ordinates and `m_gamma` is the
analytic multiplicity. The source further proves matching local eigenvalue
and weight limits. This note derives a measure-level aggregate version from
the Weyl convergence.

## Derived vague-convergence statement

Define finite weighted measures

    nu_a(dt) = (1+t^2)^(-1) mu_a(dt),
    nu_xi(dt) = (1+t^2)^(-1) mu_xi(dt).

Evaluating the Weyl representations at `z=i` gives

    nu_a(R) = Im q_a(i) -> Im Q_xi(i) = nu_xi(R).

For any subsequence, the bounded masses of `nu_a` have a further weakly
convergent subsequence on the one-point compactification of `R`. For
`z=x+iy` in `C+`, the imaginary-part kernel after weighting is

    y(1+t^2)/((t-x)^2+y^2),

which extends continuously to the compactification with value `y` at
infinity. Any mass escaping to infinity would therefore contribute a
positive linear term `c y` to `Im Q_xi(x+iy)`. But the displayed pure Cauchy
representation of `Q_xi` has zero Nevanlinna linear coefficient. Hence no
mass escapes. The subsequential limit on `R` has the same Poisson transform
as `nu_xi`; uniqueness of the Poisson representation forces it to equal
`nu_xi`. Every subsequence has the same limit, so `nu_a` converges weakly to
`nu_xi` on `R`.

Consequently, for every bounded interval `I` whose endpoints are not zero
ordinates,

    mu_a(I) -> mu_xi(I) = sum_(gamma in Gamma intersect I) m_gamma.

In particular, if `I` isolates one distinct ordinate `gamma`, the total
finite-interval spectral weight in that cluster tends to `m_gamma`. The
finite operators may have simple eigenvalues throughout: the multiplicity
appears as limiting spectral mass, not as a finite eigenvalue's geometric
multiplicity.

## Implications and limits

This supplies a precise measure-theoretic multiplicity correspondence for
the arithmetic-defined canonical-system route under RH. It clarifies one
meaning of “spectral correspondence”: the family of local spectral measures
converges to the zero-counting measure, with analytic multiplicities
recovered by cluster mass. It does **not** produce an individual
self-adjoint operator whose eigenspace dimensions equal `m_gamma`; the
scalar half-line canonical system remains multiplicity one. Nor is this an
independent proof of RH: global positivity and the Weyl identity are
imported under RH. Suzuki's paper already states convergence of selected
local eigenvalues and their reciprocal-kernel weights to each zero and its
multiplicity, so this is a measure-level reformulation/extension of source
results, not a novelty claim.

## Verification outline

The only derived step beyond the source identities is the weighted-measure
compactness argument. The imaginary part of a Nevanlinna representation is
the Poisson transform. The kernel above is bounded and continuous on the
compactification, so subsequential weak limits commute with its integral.
The limiting transform has no mass-at-infinity term because the source's
limit is explicitly a pure Cauchy transform. Uniqueness of the finite
Poisson measure then gives the full weak limit. For interval masses, apply
the portmanteau theorem to `nu_a` and multiply on bounded `I` by the
continuous bounded weight `1+t^2`; the boundary condition excludes endpoint
atoms.

## Sources and exact scope

- Suzuki, *The Local Weil Explicit Formula and Related Structures*,
  arXiv:2611.33001v1 (2026-11-24), §§2.1, 4.3–4.4, Proposition 7.2,
  §7.3 equation (8.4), and §8.1.
- Hadamard-product identification of `Q_xi` and the analytic-multiplicity
  measure: `research/operators/B3-09-nevanlinna-kernel-and-zero-measure.md`.
- Arithmetic definition and RH dependency of the Hamiltonian:
  `research/operators/B3-13-prime-defined-canonical-system.md`.

No Lean formalization, numerical experiment, external audit, human review, or
RH-independent spectral identity is claimed.
