# B3-40 — Completeness check for the prime-defined canonical-system spectrum

Date: 2026-11-28. Status: source-hypothesis and operator-domain audit;
the imported canonical-system spectral-transform theorem and Suzuki's
analytic Weyl identification are not independently reproved here.

## Question

Once Suzuki's half-line Weyl function is identified with
`Q_xi(z)=i xi'(1/2-iz)/xi(1/2-iz)`, does its Nevanlinna measure describe the
whole self-adjoint canonical-system operator, or might it miss a reducing
subspace and its spectrum?

## Source hypotheses checked

For Suzuki, *The Local Weil Explicit Formula and Related Structures*,
[arXiv:2611.33001v1](https://arxiv.org/abs/2611.33001v1) (2026-11-24):

1. Theorem 6.2 constructs the diagonal Hamiltonian
   `H(a)=diag(gamma(a),gamma(a)^(-1))`, with both entries positive a.e. and
   locally integrable; in particular `det H=1` a.e. This is a definite
   canonical system, not a singular rank-one Hamiltonian.
2. The trace-normalized change of variable has length
   `L_a=integral_0^a tr(H(c)) dc >= 2a`, so the common system has an infinite
   normalized half-line. The source's Proposition 4.2 gives limit-point
   behavior there.
3. Proposition 7.2 identifies the selected half-line Weyl function with
   `Q_xi` under RH. The project-side PWPB-03.12 calculation matches its
   `U_12/U_22` quotient to the separated left line `y_1(0)=0` for
   `T_H=-H^(-1)J d/da`; PWPB-03.14 independently checked the trace maps,
   Green form, and quotient orientation.
4. Suzuki's Proposition 4.3 states that the canonical-system spectral
   measure is the Nevanlinna measure of its Weyl function. The underlying
   spectral-transform theorem is imported from standard canonical-system
   theory (the source cites Winkler, *Two-dimensional Hamiltonian systems*
   (2015), and *The inverse spectral problem for canonical systems*
   (1995), Theorems 1 and 2.1).

These checks align the source assumptions with the constructed Hamiltonian
and the selected boundary line. They do not independently prove Suzuki's
Proposition 7.2 or the cited spectral-transform theorem.

## Consequence under the source theorems

Under RH, symmetric logarithmic differentiation of the even Hadamard
product gives the pure atomic Nevanlinna measure

    mu_xi = sum_(gamma in Gamma, distinct signed ordinates)
              m_gamma delta_gamma,

with no continuous component. The simple canonical-system spectral
representation is a unitary equivalence of the chosen self-adjoint
operator with multiplication by `t` on `L^2(mu_xi)`. Consequently the
measure describes the full operator spectrum: there is no additional
continuous or reducing spectral summand invisible to this Weyl function.
Each atom has a one-dimensional `L^2` fiber, regardless of its positive
weight `m_gamma`; the operator has simple eigenspaces at the distinct
ordinates, while analytic multiplicity is encoded in the measure mass.

This closes the specific *hidden-spectrum* concern at the level of the
standard canonical-system theorem and checked source hypotheses. It does
not turn measure mass into geometric multiplicity. It also is not an
independent proof of the analytic Weyl identity, a Lean composition with
the external RH formalization, or an audit of Suzuki's full source proof.

## Falsification checks and limits

- If `H` were only nonnegative and not definite, canonical systems can have
  degenerate intervals and the simple spectral-transform hypothesis would
  need additional care. Suzuki's `det H=1` rules out that degeneracy here.
- A finite endpoint would give compact-resolvent phase spectra, not the
  desired global zero set. The infinite length `L_a -> infinity` is needed
  for the half-line Weyl system.
- A mismatch between `U_12/U_22` and the left boundary triple could select
  a different extension. PWPB-03.12/14 checked the sign and row convention;
  the independent constant-Hamiltonian example is only a sign test.
- The mass `m_gamma` is not an eigenprojection rank. Replacing the scalar
  space by bounded observations cannot change that fact (B3-38).

## Next investigation

Independently audit the analytic step in Suzuki's Proposition 7.2 that
selects the global screw-function extension and identifies its Weyl limit
with `Q_xi`. Track the prime-defined local data, extension parameter,
transfer quotient, and half-line limit with exact signs and domains. A
source-level synthesis alone does not pass this audit. If the analytic
identity is verified only by imported theorems, preserve that dependency
explicitly rather than upgrading the result to a Zetral proof.
