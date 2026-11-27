# B3-12 — Spectral-basis strong-resolvent limit with multiplicity fibers

Date: 2026-11-27. Status: conditional strong-resolvent construction under RH;
the identifications are spectral and noncanonical.

## Question

Can the positive-shift self-adjoint extensions be placed on one Hilbert space
so that they converge in strong-resolvent sense to a multiplicity-preserving
operator, and can the Weil compression identity be retained?

## Ordered zero convergence

Assume RH. Write the distinct positive ordinates as
`0<gamma_1<gamma_2<...`, with analytic multiplicities `m_j`. Form the
nondecreasing sequence `lambda^0_1,lambda^0_2,...` by repeating `gamma_j`
exactly `m_j` times. For every `omega>0`, let
`0<lambda_(omega,1)<lambda_(omega,2)<...` be the positive zeros of
`A^omega`; they are simple and real by the shifted-xi Hermite–Biehler
construction. The local-uniform convergence `A^omega -> A^0` and Hurwitz's
theorem imply, for each fixed `n`,

    lambda_(omega,n) -> lambda^0_n.

To see the indexing assertion, choose a positive height not in the zero set
of `A^0`. Its disk/interval contains finitely many zero clusters; argument
principle counts exactly `m_j` simple positive-shift roots in the cluster of
`gamma_j`, and local uniform convergence excludes additional roots between
clusters. Letting the height exceed `lambda^0_n` proves convergence for that
fixed index. Evenness supplies the corresponding negative roots.

## Common-space construction and strong-resolvent convergence

Let

    I = { (j,k,+),(j,k,-) : j>=1, 1<=k<=m_j },
    H_mult = ell^2(I),

and define the diagonal operator

    (T_0 x)_(j,k,+) =  gamma_j x_(j,k,+),
    (T_0 x)_(j,k,-) = -gamma_j x_(j,k,-),
    Dom(T_0) = {x: sum_(i in I) lambda_i^2 |x_i|^2 < infinity},

where `lambda_i` denotes the corresponding repeated signed ordinate. This is
self-adjoint, has compact (indeed Hilbert–Schmidt) inverse, and its eigenspace
at `+/-gamma_j` has dimension `m_j`.

Let `T_omega` be the de Branges self-adjoint extension whose simple spectrum
is the zeros of `A^omega`. Choose an orthonormal eigenbasis of `T_omega` and
map its eigenvector at `+/-lambda_(omega,n)` to the coordinate in `I`
corresponding to the nth repeated `+/-gamma` in the limit. This defines a
unitary `V_omega:H_omega->H_mult`. It is a spectral-basis identification;
no canonical convergence of eigenvectors is asserted. Then
`V_omega T_omega V_omega^(-1)` and `T_0` are diagonal in the same basis with
coordinate eigenvalues converging pointwise. For every nonreal `z`, the
resolvent entries are bounded by `1/|Im z|`; dominated convergence in
`ell^2(I)` therefore proves

    V_omega T_omega V_omega^(-1) -> T_0

in the strong-resolvent sense. The operator domains are exactly the
weighted-square-summability domains displayed for each diagonal operator.

This is a genuine common-Hilbert-space strong-resolvent limit, but the
identifications use ordered eigenvectors and the zero divisor. It is not a
zero-independent operator construction and cannot prove RH.

## Arithmetic compression on the multiplicity-fiber space

Suzuki's global Weil sampling unitary identifies `H_W` with
`ell^2(Gamma,m)`, one scalar coordinate `c_gamma` per signed distinct
ordinate, with norm `sum_gamma m_gamma |c_gamma|^2`. Define the isometry

    J: ell^2(Gamma,m) -> H_mult,
    (Jc)_(gamma,k)=c_gamma,  k=1,...,m_gamma.

It embeds each scalar coordinate along the diagonal direction of its
multiplicity fiber. It intertwines the global operator and `T_0`, and direct
coordinate averaging gives

    J^* T_0^(-1) J = D_W^(-1).

For `j_a:H(A_a)->H_W`, set `j_a^mult=J j_a`. The exact compression identity
then remains

    (Dbar_(a,pi))^(-1) = (j_a^mult)^* T_0^(-1) j_a^mult.

All local domains are unchanged because `j_a^mult` is an isometric
composition and the compressed inverse is the same bounded operator as in
Suzuki's Theorem 3.3. The extra `m_gamma-1` fiber directions are invisible to
this arithmetic embedding; no new local Weil samples or multiplicity-sensitive
arithmetic form have been constructed.

The scalar limit-kernel RKHS of B3-09 is exactly the diagonal-fiber
observation space: its kernel weights each atom by `m_gamma`, while its
operator has only one eigendirection per distinct ordinate. The full
`H_mult` strong-resolvent limit is a multiplicity augmentation of that scalar
space, not the RKHS limit itself. Convergence of the positive-shift
eigenvectors to the scalar kernel features or to the extra fiber directions
has not been established.

## Falsification and scope

- The strong-resolvent proof uses only fixed-index zero convergence, a chosen
  eigenbasis unitary, and the resolvent bound for self-adjoint operators.
- Multiplicity fibers are necessary for geometric multiplicity when a zero is
  multiple; no such zero is asserted. If all zeros are simple, each fiber is
  one-dimensional.
- The arithmetic embedding uses values with weights `m_gamma`; its range is
  only the diagonal line in each fiber. Thus compression is preserved, but
  the added dimensions have no arithmetic meaning in the current model.
- The limit operator is defined from the xi zero divisor, RH is assumed, and
  the unitary identifications are noncanonical. No RH proof, independent
  spectral correspondence, novelty, numerical computation, or formal check
  is claimed.

Primary sources for positive-shift spectra, zero simplicity at positive
shift, and arithmetic compression: Suzuki 2012, Proposition 1.2 and §1.1;
Suzuki, arXiv:2610.32704v1, equations (2.3), (2.8), and Theorem 3.3.
