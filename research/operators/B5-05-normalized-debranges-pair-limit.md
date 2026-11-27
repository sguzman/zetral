# B5-05 — A normalized de Branges pair with a nontrivial endpoint limit

Date: 2026-11-27. Status: RH-conditional kernel and strong model-space
projection limit; no operator resolvent convergence.

## Normalize the imaginary part of Suzuki's pair

Assume RH. With `s=1/2-iz`, write Suzuki's real entire functions as

    A^omega=(xi(s+omega)+xi(s-omega))/2,
    B^omega=(i/2)(xi(s+omega)-xi(s-omega)),
    E^omega=A^omega-i B^omega=xi(s+omega).

For each `omega>0`, `E^omega` is Hermite-Biehler under RH. Define a second
Hermite-Biehler function by the positive rescaling

    E_tilde^omega = A^omega - i B^omega/omega.

Indeed, for an HB pair the meromorphic quotient `R_omega=B^omega/A^omega`
maps the upper half-plane to its closure. Replacing it by
`R_omega/omega`, a positive multiple, preserves that property and hence
preserves the HB inequality. This is a new family of entire functions; it is
not the original `E^omega` up to a scalar.

Central differences give local-uniform limits

    A^omega -> F,       B^omega/omega -> -F',
    E_tilde^omega -> E_0 := F+iF',
    F(z)=xi(1/2-iz).

Set `q=-F'/F=i xi'(1/2-iz)/xi(1/2-iz)`. By the Lagarias criterion,
under RH `q` is holomorphic with positive imaginary part in `C+`. Therefore

    Theta_0 = E_0^#/E_0 = (1+i q)/(1-i q)

is inner and meromorphic in `C+`; in particular `E_0` has no zero in `C+`
and satisfies the strict HB inequality there. This does not assume simple
zeros: any common real factors of `F` and `F'` lie on the boundary.
The limiting inner function is nonconstant: if `q` were constant, then
`F'=-qF` would make `F` exponential; evenness of `F` would force it to be
constant, contrary to the nonconstant xi function. Hence its model space is
nonzero.

## Kernel and common-space limit

The de Branges reproducing kernel is linear in the imaginary component
`B`. Consequently

    K_(E_tilde^omega) = K_(E^omega)/omega.

The normalized model-space inner functions

    Theta_tilde_omega = (A^omega+i B^omega/omega)
                         /(A^omega-i B^omega/omega)

converge locally uniformly on `C+` to `Theta_0`. Their model-space kernels

    k_theta(z,w) = i(1-conjugate(theta(w))*theta(z))
                   /(2 pi (z-conjugate(w)))

therefore converge locally uniformly to `k_Theta0`. Let
`P_omega` and `P_0` be the orthogonal projections in the same Hardy space
`H^2(C+)` onto `H^2 ominus Theta_tilde_omega H^2` and
`H^2 ominus Theta_0 H^2`, respectively. For each Hardy kernel `k_w`,
`P_omega k_w` is the model-space kernel vector. Local kernel convergence
gives weak convergence of these vectors against the dense Hardy-kernel span
and convergence of their norms from the diagonal. Hence they converge
strongly. Uniform contractivity of the projections extends convergence from
that dense span to all of `H^2(C+)`:

    P_omega -> P_0 strongly.

This gives a natural nonzero common-Hardy-space subspace limit after
rescaling the imaginary component. It sharpens B3-08's collapse result for
the *unrescaled* Suzuki inner functions; it does not contradict it.

The limit kernel is explicitly related to B3-08's Pick kernel:

    k_Theta0(z,w) = K_q(z,w)/
        ((1-i q(z))(1+i conjugate(q(w)))),
    K_q(z,w)=(q(z)-conjugate(q(w)))/(pi(z-conjugate(w))).

Thus the normalized model-space limit is a gauge transform of the Lagarias
Pick-kernel RKHS. The de Branges kernel of `E_0` is
`F(z) conjugate(F(w)) K_q(z,w)`. These are related spaces with distinct
kernel normalizations; the Pick kernel itself is not the model-space kernel
`k_Theta0`.

## Verification limits

- The sign in `B^omega/omega -> -F'` follows from the central difference in
  the displayed `s=1/2-iz` convention.
- Positivity and innerness use RH through Lagarias's criterion and Suzuki's
  HB family. This is not an unconditional construction.
- Strong convergence is only for orthogonal projections onto the normalized
  model spaces. No multiplication/differentiation operator, domain, or
  self-adjoint resolvent convergence is proved.
- The limit uses xi and its logarithmic derivative. It is not a
  zero-independent Hilbert-Pólya proof, and no novelty claim is made.

Primary references: Suzuki 2012, equations (1.1), (1.2), Proposition 1.2;
Lagarias 1999, Theorem 1.1; B3-08 for the unrescaled kernel limit.
