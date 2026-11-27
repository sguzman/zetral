# B3-08 — Strong collapse and first-order kernel limit at zero shift

Date: 2026-11-27. Status: conditional analytic result under RH.

## Question

In Suzuki's shifted-xi model-space construction, what happens to the model
spaces in their natural common ambient space as `omega -> 0+`? Can the first
nontrivial kernel scale be identified exactly?

## Setup and assumptions

Assume RH. For `omega>0`, let

    Theta_omega(z) = xi(1/2 - omega - i z) / xi(1/2 + omega - i z),
    K_omega = H^2(C+) \ Theta_omega H^2(C+).

By Suzuki 2012, Proposition 1.2, `Theta_omega` is meromorphic inner for all
positive `omega` under RH. For `z in C+`, put `s_z=1/2-i z`; then
`Re(s_z)>1/2`, where xi has no zeros under RH. Thus
`Theta_omega(z)->1` locally uniformly on `C+` as `omega->0+`.

## Unscaled model spaces collapse strongly

Let `P_omega` be the orthogonal projection from `H^2(C+)` onto `K_omega`.
The model-space reproducing kernel is

    k_omega(z,w) = i (1 - conjugate(Theta_omega(w))*Theta_omega(z))
                   / (2 pi (z-conjugate(w))).

On the diagonal,

    ||P_omega k_w||^2 = k_omega(w,w)
                       = (1-|Theta_omega(w)|^2)/(4 pi Im(w)) -> 0.

The Hardy kernels `k_w`, `w in C+`, span a dense subspace of `H^2(C+)`.
Since each `P_omega` is a contraction, convergence to zero on this dense set
implies `P_omega -> 0` strongly on all of `H^2(C+)`. Therefore the standard
model-space embedding has no nonzero strong subspace limit. In particular,
the associated de Branges/model-space realization cannot be continued to
`omega=0` merely by taking the unrenormalized subspaces in this common
ambient `H^2` space.

## A nontrivial first-order renormalized kernel

The zero-free half-plane `Re(s)>1/2` is simply connected, so choose an analytic
branch `F=log xi` there and let `L=xi'/xi`. Uniform Taylor expansion on
compact subsets gives

    log Theta_omega(z) = F(s_z-omega)-F(s_z+omega)
                       = -2 omega L(s_z) + O_K(omega^3).

Hence `Theta_omega(z)=1-2 omega L(s_z)+O_K(omega^2)`. Substitution into the
kernel formula yields locally uniformly for `z,w in C+`:

    k_omega(z,w)/omega ->
       i (L(s_z)+conjugate(L(s_w))) / (pi (z-conjugate(w))).

Because `k_omega/omega` is a positive semidefinite kernel for every positive
`omega`, its pointwise limit is positive semidefinite. It therefore defines a
reproducing-kernel Hilbert space after quotienting zero-norm vectors and
completing. Its diagonal is

    L(s_z)+conjugate(L(s_z))
    -------------------------------- = Re(L(s_z))/(pi Im(z)) >= 0.
                   2 pi Im(z)

The diagonal nonnegativity also follows directly as the limit of positive
diagonals. This identifies a candidate first-order space; it does not show
that the scaled operators converge, that this space is unitarily equivalent
to a zeta spectral space, or that it carries the arithmetic Weil form.
The limit kernel is not identically zero: if its diagonal vanished everywhere,
then `Re L(s)=0` throughout `Re(s)>1/2`; the open mapping theorem would force
`L` to be constant purely imaginary. Integrating would make xi exponential
there, and analytic continuation plus xi's functional equation would force
xi to be constant, a contradiction.

## Falsification and limits

- The strong-collapse proof uses only the standard model kernel formula,
  pointwise innerness, local uniform convergence to `1`, density of Hardy
  kernels, and the contraction bound for orthogonal projections.
- The kernel expansion is conditional on RH to ensure a zero-free analytic
  logarithm on `Re(s)>1/2`; the expansion is uniform only on compact subsets
  of the open half-plane, not up to its boundary zeros.
- Positive semidefiniteness of the limiting kernel is an independent check
  against sign errors in the Taylor calculation.
- No convergence of generators, self-adjoint extensions, Hamiltonians, or
  spectral measures is established. No arithmetic compression identity or RH
  proof follows. No numerical or Lean computation was used.

Primary model-space kernel and identification are Suzuki 2012, equations
(1.4)–(1.6), pp. 401–402; innerness criterion is Proposition 1.2. See
[primary paper](https://www.kurims.kyoto-u.ac.jp/~kenkyubu/bessatsu/open/B34/pdf/B34_023.pdf).
