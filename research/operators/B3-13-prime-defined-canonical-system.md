# B3-13 — Prime-defined canonical system as a Hilbert–Pólya candidate

Date: 2026-11-27. Status: source-grounded operator extraction under RH;
independent audit of the cited Suzuki theorems remains open.

## Question

Does the local Weil-form/de Branges chain give one prime-side-defined
self-adjoint spectral model for the zeta zeros, rather than only a family of
zero-defined sampling models or finite-window operators?

## Evidence and construction chain

Suzuki, *The Local Weil Explicit Formula and Related Structures*,
arXiv:2611.33001v1 (version 2026-11-24), provides a candidate framework. Its
starting data are the Weil distribution and the local quadratic forms
`Q_W^a` on `C_c^infinity(-a,a)`. The prime and archimedean terms define these
forms without using zero locations. When `Q_W^a` is strictly positive, the
paper closes the form, constructs the associated RKHS kernel `J_a`, and
obtains self-adjoint differentiation extensions with compact resolvent and
the local explicit formula (Theorem 1.1). Its Theorem 6.2 recovers the
canonical Hamiltonian coefficient from these kernels:

    gamma(a) = J_a(i,0) / J_a(i,i) * d/da J_a(i,0)  a.e.

Thus the local Hamiltonian is specified from the arithmetic local-form chain,
not by inserting the zero ordinates into a diagonal multiplication operator.

The source's Proposition 7.2 then says that, under RH, the common half-line
canonical system has Weyl function

    Q_xi(z) = i * xi'(1/2 - i z) / xi(1/2 - i z).

It proves the tail systems are limit point and the corresponding finite-tail
Weyl functions converge locally uniformly in the upper half-plane to
`Q_xi`. Under RH, `Q_xi` is the Herglotz transform of the atomic measure

    mu_xi = sum_(gamma in Gamma) m_gamma delta_gamma,

where `Gamma` is the set of distinct signed ordinates and `m_gamma` is the
analytic multiplicity. This also follows from logarithmic differentiation
of the even Hadamard product: with symmetric summation,
`Q_xi(z) = sum_gamma m_gamma/(gamma-z)`. Its poles have residues
`-m_gamma`; the positive spectral masses are `m_gamma`.

The source's canonical-system spectral theorem identifies the half-line
system's spectral measure with the Nevanlinna measure of its Weyl function.
The Hamiltonian is positive definite almost everywhere and the system is
limit point, so the standard multiplicity-one spectral representation
applies. The explicit atomic formula therefore gives pure point spectrum
with support exactly `Gamma`; no additional continuous spectrum is present
in this realization. This theorem-level correspondence imports standard
canonical-system spectral theory and is not a Zetral formal proof. A scalar
canonical system has simple eigenspaces; the masses `m_gamma` are spectral
weights, not eigenspace dimensions. The paper makes this distinction visible
in Section 8: its limiting product `A_infinity(z)=prod_(gamma>0 distinct)
(1-z^2/gamma^2)` equals `xi(1/2-iz)/xi(1/2)` iff every zero is simple.
Thus the construction realizes the zero set as simple spectrum with
multiplicity-sensitive spectral weights; it does not match analytic
multiplicities as operator multiplicities unless all zeros are simple.

## What changes after the formal RH result

The positivity premise is not merely hypothetical: Weil's criterion and the
independently kernel-checked Alpöge–Claude formal theorem imply
`Q_W >= 0`. Suzuki's local theory states that under RH each finite local
form is strictly positive, so the kernels and canonical Hamiltonian exist
along the full half-line. This implication is mathematical conditional
composition of cited results; Zetral has not formally composed the Lean
proof with Suzuki's analysis, nor independently audited the full Suzuki
proof. The repository therefore records a source-grounded operator route,
not a Zetral-verified theorem.

This is stronger than the earlier zero-defined diagonal construction in
B3-01 in one specific respect: the Hamiltonian is defined from the Weil
forms, while the zero divisor enters through the proved Weyl-function
identity. It is not a new construction by Zetral and makes no novelty claim.
It also does not turn every finite-window differentiation extension into
the zeta-zero operator. Proposition 7.1 says local spectra at different
phases interlace; under RH the zero measure is nonorthogonal on every finite
local de Branges space, so no one finite phase spectrum is the global zero
set. The correspondence occurs at the common half-line system / spectral
measure level.

## Audit and limits

- **Construction data:** prime-side Weil distribution, local form closures,
  kernels, and the Hamiltonian formula are source-stated and source-derived.
  Their detailed proofs have not been independently audited here.
- **Spectral identification:** conditional on RH in the source; after the
  externally checked formal RH result, the premise is available at theorem
  level, with trust in Lean kernels and Mathlib semantics. The bridge still
  imports Suzuki's global screw-function/Weyl theorem and canonical-system
  inverse spectral theory.
- **Spectrum:** the measure support gives the distinct zero ordinates. Its
  atom mass `m_gamma` is not the geometric multiplicity of the simple scalar
  canonical-system eigenvalue.
- **Independence:** the Hamiltonian's definition uses arithmetic forms, but
  establishing the exact Weyl function uses RH. It therefore cannot now be
  presented as an independent proof of RH; it is a spectral realization
  whose RH condition has been discharged by the separate formal theorem.
- **Verification:** hand-checked the logical chain and the sign/residue
  identity from the Hadamard product. No Lean formalization, independent
  audit of Suzuki's source proof, or numerical computation was performed.

## Next investigation

Independently audit the exact endpoint and operator statement in Suzuki's
Proposition 7.2 and Theorem 6.2: pin the common Hilbert space, boundary
condition, and domain, and verify that the Hamiltonian is specified without
zero data. Then investigate whether a multiplicity-sensitive extension is
compatible with the arithmetic form chain; the derivative-jet Jordan
obstruction in MHS-03.4 rules out only Meyer's unchanged dilation action,
not all alternatives.

Primary source: [Suzuki, arXiv:2611.33001v1](https://arxiv.org/html/2611.33001).
Formal RH verification scope is summarized in `STATE.md`; no novelty or
human-review claim is made here.
