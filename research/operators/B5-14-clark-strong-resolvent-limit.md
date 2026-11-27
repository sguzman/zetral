# B5-14 — Strong-resolvent convergence in the normalized Hardy model

Date: 2026-11-27. Status: RH-conditional strong-resolvent theorem for the
Clark realizations, embedded in one Hardy space; not the original arithmetic
Hamiltonian operator.

## Question

Does B5-05's strong convergence of normalized model-space projections, plus
the varying Clark spectral measures in B5-06, suffice to prove an operator
limit under the natural Hardy-space embeddings?

## Setup

Assume RH. For `omega>0`, set

    q_omega(z)=B^omega(z)/(omega A^omega(z)),
    q_0(z)=-F'(z)/F(z),
    theta_omega(z)=(1+i q_omega(z))/(1-i q_omega(z)),
    theta_0(z)=(1+i q_0(z))/(1-i q_0(z)).

These are the inner functions from B5-05 and B5-07. Under the Cayley map
`z=i(1+u)/(1-u)`, they become inner functions `vartheta_omega` on the unit
disk. B5-05 gives local-uniform convergence
`vartheta_omega -> vartheta_0` and strong convergence of the projections
`P_omega -> P_0` onto `K_omega=H^2(D) ominus vartheta_omega H^2(D)`.

For an inner function `vartheta`, write

    k_0=1-conjugate(vartheta(0))*vartheta,
    ktilde_0=(vartheta-vartheta(0))/u,
    c_alpha=(alpha+vartheta(0))/(1-|vartheta(0)|^2).

The standard Clark formula is
`U_alpha=S_vartheta+c_alpha(k_0 tensor ktilde_0)` on `K_vartheta`, where
`S_vartheta=P_vartheta M_u|K_vartheta`. Choose `alpha=-1`, the parameter
whose Herglotz function is `-i q` and whose spectral measure is the
xi-zero divisor at the endpoint.

## Common-space convergence

For each `omega>=0`, extend the Clark unitary by `-I` on the orthogonal
complement in the same `H^2(D)`:

    Uhat_omega=P_omega M_u P_omega
        + c_(−1,omega) (k_(omega,0) tensor ktilde_(omega,0))
        − (I−P_omega).

This is the orthogonal direct sum of the Clark unitary on `K_omega` and
`-I` on `K_omega^perp`. Since `vartheta_omega -> vartheta_0` locally
uniformly and all are inner, they converge weakly in `H^2`; the values at
zero converge as well. The vectors `k_(omega,0)` and
`ktilde_(omega,0)` therefore converge weakly. Their squared norms both
equal `1-|vartheta_omega(0)|^2`, which converge to the corresponding limit
norms, so both vector sequences converge strongly. Also
`c_(−1,omega) -> c_(−1,0)`, since the nonconstant inner limit satisfies
`|vartheta_0(0)|<1`. The formula and B5-05's projection convergence now give

    Uhat_omega -> Uhat_0 strongly on H^2(D).

Every `Uhat_omega` is unitary, including the limit. Hence their adjoints
also converge strongly.

The point `u=1` corresponds to spectral infinity under the Cayley map. The
Clark unitary on `K_omega` has no eigenvalue there: its Clark measure has
infinity mass equal to the linear Herglotz coefficient
`b_omega=lim_(y->infinity) Im q_omega(iy)/y`. For fixed `omega>0`,
B5-11 gives `q_omega(iy)->i/omega`; at the endpoint B5-07 gives
`q_0(iy)=O(log y)`. Thus `b_omega=b_0=0`. The extra `-I` summand also has
no eigenvalue `1`.

Define the self-adjoint Cayley transforms

    That_omega = i(I+Uhat_omega)(I-Uhat_omega)^(-1).

They act as the alpha=-1 Clark self-adjoint operator on `K_omega` and as
zero on `K_omega^perp`. For every `z` outside the real axis,

    (That_omega-z)^(-1)=f_z(Uhat_omega),
    f_z(u)=(1-u)/((i-z)+(i+z)u).

The denominator has no zero on the unit circle for nonreal `z`, so `f_z`
is continuous there (and `f_z(1)=0`). Strong convergence of the unitaries
and their adjoints implies strong convergence of their continuous
functional calculi. Therefore

    (That_omega-z)^(-1) -> (That_0-z)^(-1) strongly

for every nonreal `z`: this is strong-resolvent convergence on the fixed
space `H^2(D)` under the natural model-space inclusions.

## Falsification and scope

- The rank-one coefficient, conjugate kernel, and operator orientation were
  checked against the cited Clark formula for arbitrary `vartheta(0)`;
  no normalization `vartheta(0)=0` is silently assumed.
- A possible atom at spectral infinity is explicitly excluded using the
  linear Herglotz coefficient. If it were nonzero, the Cayley transform
  would be a nondensely-defined relation on the Clark space and this proof
  would not apply as stated.
- At a multiple zero of `F`, the limiting Clark eigenspace is still one
  dimensional, with atom mass equal to the analytic multiplicity. This
  limit is the scalar zero-divisor model; it is not B3-12's augmented
  multiplicity-fiber operator. Extra fiber directions may escape weakly
  under the Hardy embedding.
- This proves convergence of a specific bounded-transform spectral model,
  not of Suzuki's original arithmetic Hamiltonian, nor of the unrescaled
  canonical-system operators on `L^2(H_omega)`. The Hardy-space extension
  by zero is part of the theorem's precise identification.
- The result does not transfer zero-realness between shift and heat flow;
  it only constructs a common endpoint operator limit for the shifted
  family. It is RH-conditional and not an RH proof or a zero-independent
  Hilbert–Pólya operator.

## Prior art and verification

The Clark unitary model and its rank-one formula are classical. The
strong-resolvent conclusion is derived here from that formula, the kernel
convergence in B5-05, the Cayley transform, and the continuous functional
calculus; it is a scoped consequence, not a novelty claim. The argument is
manual and independently checks the coefficients, the spectral-infinity
condition, and the resolvent function. No numerical experiment or Lean
formalization was used.

Sources:

- R. V. Bessonov, “Truncated Toeplitz Operators of Finite Rank,” formula
  (16), pp. 6–7 of the preprint accepted for *Proceedings of the AMS*:
  https://www.moebiuscontest.ru/files/2012/bessonov.pdf
- D. N. Clark, “One-dimensional perturbations of restricted shifts,”
  *J. Analyse Math.* 25 (1972), 169–191,
  https://doi.org/10.1007/BF02790036.
- B5-05 through B5-07 for the RH-conditional inner functions, projection
  convergence, and endpoint Clark measure.
