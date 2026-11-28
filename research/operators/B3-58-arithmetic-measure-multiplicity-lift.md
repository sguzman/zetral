# B3-58 — Multiplicity lift from the arithmetic Weyl measure

Date: 2026-11-28. Status: exact spectral-measure construction under the
source's RH-conditional Weyl identity; standard measure-to-operator lift,
not a new local differential operator or an RH proof.

## Question

Can Suzuki's prime-defined scalar canonical system be converted into a
self-adjoint operator whose *geometric eigenspace multiplicities* equal the
analytic multiplicities of the zeta zeros, rather than only carrying those
multiplicities as scalar spectral weights?

## General construction

Let `mu=sum_(x in X) w_x delta_x` be a positive, purely atomic Borel measure
on `R`, where `X` is discrete with finitely many points in every bounded
interval, and each atom mass `w_x` is a positive integer. Assume
`sum_x w_x/(1+x^2)<infinity`. Define

    K_mu = direct_sum_(x in X) C^(w_x),
    (H_mu v)_x = x v_x,
    Dom(H_mu) = {v : sum_x x^2 ||v_x||^2 < infinity}.

This is the real multiplication operator over the measure's atoms with fiber
dimension equal to the integer atom mass. It is self-adjoint. Since `X` is
discrete and finite in bounded intervals, `(H_mu-i)^(-1)` is compact; hence
`H_mu` has compact resolvent. For each atom,

    spectrum(H_mu)=X,
    dim ker(H_mu-x)=w_x.

Thus the scalar mass is converted into geometric multiplicity. This operation
uses only `mu` and its atom masses, not a separately supplied list of zeros.
It is a post-processing of a spectral measure; the standard spectral theorem
does not make it a local differential operator.

## Application to the zeta Weyl measure

Suzuki's v1 source defines the canonical Hamiltonian from the arithmetic
local Weil forms and, under RH, identifies the global Weyl function with
`Q_xi(z)=i xi'(1/2-iz)/xi(1/2-iz)`. Its §7.1 records the resulting global
spectral measure

    mu_xi = sum_(gamma in Gamma) m_gamma delta_gamma,

where `Gamma` is the set of distinct signed ordinates and `m_gamma` is the
analytic multiplicity. Under that source theorem, this is a purely atomic
measure with positive integer masses, discrete support, and
`sum m_gamma/(1+gamma^2)<infinity` by the Herglotz measure condition.

Taking `H_xi := H_(mu_xi)` therefore gives a compact-resolvent self-adjoint
operator with each ordinate as an eigenvalue of geometric multiplicity
exactly `m_gamma`. Its data are defined in two stages: first the
prime-side-defined Hamiltonian and its boundary spectral measure, then the
canonical atomic-multiplicity lift. No zero locations or multiplicities are
inserted as inputs. The equality with the zeta zero data is still conditional
on Suzuki's RH-conditional global Weyl identity and canonical-system spectral
theorem. Since RH is separately claimed by an externally kernel-checked Lean
proof recorded in `STATE.md`, the premise is available at theorem level if
one accepts that external verification; Zetral has not formally composed or
independently re-proved Suzuki's analytic chain.

This resolves the *geometric multiplicity mismatch* of the scalar
canonical-system realization by spectral-measure post-processing. It does
not show that the original scalar canonical-system operator itself has
eigenspace dimension `m_gamma`; that operator remains multiplicity one with
weights `m_gamma`.

## Regularized determinant

The zeta measure has no atom at zero: the alternating eta series gives
`eta(1/2)>0`, and `eta(s)=(1-2^(1-s))zeta(s)` implies
`zeta(1/2)<0`, hence `xi(1/2)>0`. The Herglotz integrability above then gives
`sum_gamma m_gamma/gamma^2<infinity`, so `H_xi^(-1)` is Hilbert–Schmidt.
The second regularized Fredholm determinant is therefore defined, with

    det_2(I-z H_xi^(-1))
      = product_(gamma in Gamma) ((1-z/gamma) exp(z/gamma))^(m_gamma).

The functional equation pairs `gamma` and `-gamma`; their exponential
regularizers cancel, leaving

    det_2(I-z H_xi^(-1))
      = product_(gamma>0 distinct) (1-z^2/gamma^2)^(m_gamma)
      = xi(1/2-iz)/xi(1/2).

The last equality is the even Hadamard product. Products converge locally
uniformly because `sum m_gamma/gamma^2<infinity`. Thus the lifted operator
has the exact multiplicity-sensitive characteristic determinant, not merely
the scalar Weyl function.

## Falsification, prior-art scope, and limitations

The construction fails for noninteger atom masses, a continuous measure, or
finite accumulation of atoms; those hypotheses are checked here only for
`mu_xi` under the cited source theorem. It also cannot establish RH: without
RH, Suzuki's global Weyl identity and the real atomic measure are not
available. The lift is the canonical direct-sum realization of an
integer-weighted atomic measure; it is a standard spectral construction, and
no novelty claim is made. Its value here is to make precise that the
arithmetic Weyl measure can carry multiplicities as weights and, after a
canonical fiber lift, as eigenspace dimensions, while preserving the exact
regularized determinant.

The result does not replace the local prime-defined Hamiltonian with a new
explicit differential expression, and the lifted operator is not shown to
inherit its local domain or de Branges embedding. It is therefore a
Hilbert–Pólya spectral realization through the arithmetic spectral measure,
not a stronger local-operator construction.

## Verification and sources

The self-adjointness, compact-resolvent, multiplicity, Hilbert–Schmidt, and
determinant claims follow directly from the direct-sum definition and the
paired product. The analytic inputs are Suzuki, *The Local Weil Explicit
Formula and Related Structures*, arXiv:2611.33001v1, Theorem 6.2,
Proposition 7.2 and §7.1, plus standard Herglotz and canonical-system
spectral theory. RH is a hypothesis in that source theorem. The Lean RH
verification cited in STATE.md was not rerun here. No numerical or formal
verification was used, and the source proofs were not independently audited
in this bounded construction.
