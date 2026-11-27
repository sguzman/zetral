# B4-02 — A local negative Pick-kernel witness from an off-line zero

Date: 2026-11-27. Status: rigorous conditional implication; no zero input or
numerical computation.

## Local witness

Use B4-01's

    h(z) = i xi'(1/2-i z)/xi(1/2-i z),
    K(z,z) = Im(h(z))/(pi Im(z)).

Suppose a nontrivial zero `rho=beta+i gamma` has `beta>1/2`, of multiplicity
`m`. It maps to

    z0 = i(rho-1/2) = -gamma+i(beta-1/2) in C+.

The logarithmic derivative has residue `m` at `rho`; since
`d(1/2-i z)/dz=-i`, the transformed function has residue `-m` at `z0`:

    h(z) = -m/(z-z0) + r(z),

where `r` is holomorphic in some disk `|z-z0|<R` containing no other
mapped xi zero. Choose `R<Im(z0)` and let
`M = sup_{|z-z0|<=R} |r(z)|`, finite after shrinking the disk if needed.
For any

    0 < epsilon < min(R, Im(z0))

with `epsilon*M < m` (the last condition is automatic if `M=0`), the point
`z_epsilon=z0-i epsilon` remains in `C+` and

    Im(h(z_epsilon)) <= -m/epsilon + M < 0.

Consequently `K(z_epsilon,z_epsilon)<0`. By continuity, the strict
inequality holds on an open neighborhood, so that neighborhood contains a
point with rational real and imaginary parts. If the original off-line zero
lies left of the critical line, the functional equation supplies a zero
with real part greater than `1/2`, and the same argument applies.

This gives a rigorous finite diagonal witness conditional on any off-line
zero. It does not locate such a zero or give an effective `R,M` without
information isolating the zero and bounding the regular part.

## Why a finite Pick matrix alone is not a global certificate

For any fixed finite set of distinct sample points `z_1,...,z_n in C+`, the
standard Pick matrix of `h_0(z)=z+i` is positive definite. (The `1/pi`
normalization in B4-01 only multiplies it by a positive scalar.) Its kernel
is

    K_0(z,w) = 1 + 2i/(z-conjugate(w)),

the sum of the constant positive kernel and twice the Hardy kernel. Choose a
point `p=a+ib in C+` different from all samples, with `b` different from
every sample height, and set

    h_epsilon(z) = z+i + epsilon/(p-z),

with real nonzero `epsilon`. The finite sample Pick matrices are exactly
`P_epsilon=P_0+epsilon B`, where

    B_ij = (g(z_i)-conjugate(g(z_j)))/(z_i-conjugate(z_j)),
    g(z)=1/(p-z).

Both matrices are Hermitian. The height choice makes
`B_ii=Im(g(z_i))/Im(z_i)` nonzero, so `C=||B||_2>0`. If `lambda_0` is the
least eigenvalue of `P_0`, then `lambda_0>0`; the operator-norm inequality
gives

    lambda_min(P_epsilon) >= lambda_0 - |epsilon| C.

Hence every real `epsilon` with `0<|epsilon|<lambda_0/(2C)` leaves the
finite matrix strictly positive, while `h_epsilon` has an interior pole at
`p` and is not a Pick function. The same threshold applies with the `1/pi`
normalization, since `lambda_0` and `C` scale together. Thus no single finite
Pick matrix can certify the global Pick property without separate analytic
information that excludes unsampled poles and controls the rest of the
domain.

This example concerns general meromorphic functions; it is not a
counterexample to a possible xi-specific finite theorem with additional
arithmetic or analytic bounds. For xi, a proof would need exactly such global
input. The argument rules out interpreting a finite positive Loewner matrix
as sufficient by itself.

## Falsification / verification

- The residue sign was checked from the chain rule and the local factor
  `xi'/xi ~ m/(s-rho)`.
- The negative value follows by dominating the holomorphic regular part with
  the pole term; no approximation of a zero is used.
- Strict positive definiteness of the base finite Pick matrix follows from
  the Hardy kernel on distinct points. Weyl's eigenvalue inequality gives
  the explicit perturbation threshold displayed above.
- The witness is conditional on an off-line zero. It is not a computed
  counterexample to RH, and no finite numerical test proves RH.

Prior-art context is Lagarias 1999, Theorem 1.1, and the standard finite Pick
matrix criterion for positive kernels. This note adds a local witness
calculation and a finitary limitation; it makes no novelty claim.
