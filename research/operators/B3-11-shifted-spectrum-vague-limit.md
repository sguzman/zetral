# B3-11 — Vague convergence of shifted-xi eigenvalue counting measures

Date: 2026-11-27. Status: conditional spectral-measure result under RH.

## Question

Do the self-adjoint extension spectra attached to the positive-shift
functions `A^omega` converge to the critical xi zero divisor when
`omega -> 0+`, and what multiplicity information survives?

## Spectral setup

Assume RH and let

    A^omega(z) = (xi(1/2+omega-i z)+xi(1/2-omega-i z))/2,
    A^0(z) = xi(1/2-i z).

For every `omega>0`, Suzuki 2012, Proposition 1.2 and §1.2, gives the
Hermite–Biehler function `E^omega(z)=xi(1/2+omega-i z)` under RH (for
`omega>=1/2` the property also holds unconditionally). Since `E^omega` has
no real zero under RH, the associated de Branges multiplication operator has
a self-adjoint extension whose pure discrete spectrum is the zero set of
`A^omega`; these eigenvalues are simple. The simple-zero conclusion follows
from the strict Hermite–Biehler property, not from zero simplicity of xi.

## Vague limit

Because xi is entire, `A^omega -> A^0` locally uniformly on `C` as
`omega -> 0+`. Under RH, all zeros of `A^omega` for positive omega are real.
For each zero `lambda` of `A^0` with multiplicity `m_lambda`, choose a small
disk containing no other zero of `A^0`. Hurwitz's theorem (or the argument
principle on that disk) gives exactly `m_lambda` zeros of `A^omega` in the
disk, counted with multiplicity, for every sufficiently small omega. They
are simple and real. On compact sets away from the zeros of `A^0`, local
uniform convergence excludes any zeros of `A^omega` for small omega.

Define the locally finite eigenvalue-counting measure

    nu_omega = sum_(lambda: A^omega(lambda)=0) delta_lambda,

where each positive-shift eigenvalue is counted once, and define the zero
divisor measure

    nu_0 = sum_(lambda: A^0(lambda)=0) m_lambda delta_lambda.

Then `nu_omega -> nu_0` vaguely on `R`: for every compactly supported
continuous test function, each cluster of `m_lambda` simple eigenvalues
contributes a sum tending to `m_lambda` times the value at the limiting zero.
The measure `nu_0` is exactly the signed measure `mu` in B3-09 (with the
sign convention `lambda=-gamma` for `A^0(z)=xi(1/2-i z)`). It is the
spectral-counting-measure counterpart of the B3-09 Herglotz measure and is
consistent with the `1/omega` kernel limit.

## Multiplicity audit and limits

The limit `nu_0` counts limiting eigenvalues with their cluster multiplicity.
But the scalar B3-09 RKHS operator on `L^2(mu)` has one eigendirection at
each distinct support point, regardless of atom mass `m_lambda`. Therefore
vague convergence of eigenvalue-counting measures is not strong-resolvent
convergence to that scalar operator if xi has a multiple zero. A
multiplicity-preserving operator limit would need fibers of dimension
`m_lambda` and a proof that the positive-shift eigenvectors converge into
those fibers. This construction supplies neither. If all zeros are simple,
the limiting counting measure has unit atoms, but simplicity is not assumed
or established.

No strong-resolvent or norm-resolvent convergence is inferred from Hurwitz.
Zero convergence alone does not identify eigenvectors, Hilbert-space maps, or
operator domains.

## Verification / prior art

- `A^omega` zero spectra and the Hermite–Biehler parameter range were checked
  against Suzuki 2012, Proposition 1.2 and §1.2; the self-adjoint extension
  correspondence is in §1.1.
- The measure convergence is a direct Hurwitz/argument-principle deduction
  from local uniform convergence; it uses no numerical zero data.
- RH is essential to assert the positive-shift spectra are real throughout
  `0<omega<1/2`. No claim is made about off-line zeros or their absence
  without RH.
- No new canonical-system construction, strong operator limit, arithmetic
  compression, zero simplicity, Lean proof, or novelty is claimed.

Primary source: M. Suzuki, *A canonical system of differential equations
arising from the Riemann zeta-function*, RIMS Kôkyûroku Bessatsu B34 (2012),
397–435, Proposition 1.2 and §§1.1–1.2.
