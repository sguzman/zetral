# B5-08 — Canonical-system limit from the normalized Weyl functions

Date: 2026-11-27. Status: RH-conditional canonical-system convergence; no
heat-flow intertwiner or strong-resolvent theorem.

## Question

Does the normalized shifted-xi endpoint identify a limit of canonical
systems, beyond the model-space projection and Clark-measure limits in
B5-05–07?

## Argument

Assume RH. For `omega>0`, use B5-05's normalized Hermite–Biehler pair and
its Herglotz quotient

    m_omega(z) = B^omega(z)/(omega A^omega(z)).

The central-difference limits `A^omega -> F` and
`B^omega/omega -> -F'`, locally uniformly, imply

    m_omega -> m_0 := -F'/F

locally uniformly on `C+`. This quotient is Herglotz by the Lagarias
criterion under RH. For every sequence `omega_n -> 0+`, the de Branges
correspondence supplies a unique trace-normalized canonical Hamiltonian
`H_n` on `[0,infinity)` with Weyl function `m_omega_n`, and a unique
trace-normalized `H_0` with Weyl function `m_0` (identifying Hamiltonians
equal almost everywhere).

The continuity theorem for this correspondence says that local uniform
convergence of the Weyl functions on `C+` is equivalent to local uniform
convergence of their integrated Hamiltonians. Consequently, for each finite
`x`,

    integral_0^x H_n(t) dt -> integral_0^x H_0(t) dt,

and the canonical transfer matrices `U_n(z,x)` converge locally uniformly
in `z` to `U_0(z,x)` for every fixed `x`. This is a genuine canonical-system
endpoint limit. It is independent of the vague Clark-measure argument and
identifies the limit in the trace-normalized gauge.

The cited continuity theorem is Proposition 2.3 in Eckhardt–Kostenko–Teschl,
*Spectral asymptotics for canonical systems*, J. Reine Angew. Math. 736
(2018), 285–315; it attributes the de Branges correspondence to
*Some Hilbert spaces of entire functions, II* (1961). Suzuki's paper
separately describes the canonical system along the de Branges-space chain
for the unnormalized `E^omega`; our `m_omega` belongs to the rescaled pair
`A^omega-iB^omega/omega`. No identity with Suzuki's original arithmetic
Hamiltonian is asserted.

## What this does not establish

- The Hamiltonians are obtained by inverse spectral theory; no explicit
  coefficient formula or arithmetic expression is obtained.
- Convergence of integrated Hamiltonians does not imply pointwise or
  `L^1_loc` convergence of their densities without extra hypotheses.
- This does not identify the finite-`omega` canonical systems with a
  de Bruijn–Newman heat-flow system, nor produce an intertwining operator.
- Transfer-matrix convergence on finite intervals is not strong-resolvent
  convergence of the global self-adjoint operators. Common domains,
  boundary conditions, and tail control remain unproved.
- RH enters in the Herglotz/Hermite–Biehler hypotheses. The construction is
  not an RH proof and is not a zero-independent Hilbert–Pólya construction.

## Verification and prior art

The scaling is fixed by the exact B5-05 limits, not a numerical fit. The
continuity theorem applies to any sequence tending to zero and uses the
trace-normalized representative; it supplies precisely integrated
Hamiltonian and transfer-matrix convergence. The underlying result is
classical, so no novelty claim is made. No computation or formal proof was
needed. An independent derivation of the continuity theorem is not claimed.

Sources:

- J. Eckhardt, A. Kostenko, G. Teschl, *Spectral asymptotics for canonical
  systems*, Proposition 2.3 and Theorem 2.2, 2018,
  https://www.mat.univie.ac.at/~gerald/ftp/articles/AsymCS.pdf
- M. Suzuki, *A canonical system of differential equations arising from the
  Riemann zeta-function*, §1.1, especially the canonical-system chain and
  its relation to de Branges spaces, https://arxiv.org/abs/1204.1827
- B5-05 through B5-07 in this repository for the RH-conditional normalized
  pair, Herglotz convergence, and Clark-model identification.
