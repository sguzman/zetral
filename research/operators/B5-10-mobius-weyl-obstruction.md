# B5-10 — No smooth constant Möbius match of the Weyl expansions

Date: 2026-11-27. Status: RH-conditional perturbative obstruction for
constant projective changes; general spectral intertwiners remain open.

## Question

Can the second-order mismatch in B5-09 be absorbed by a small
parameter-dependent real Möbius transformation of the heat Weyl function,
as might arise from changing a canonical-system boundary condition? For
actual Herglotz heat functions under RH, take `t(omega)>=0` (hence
`a>=0`); the meromorphic coefficient identity below is valid for every
real `a`.

## Quotient form of the coefficients

Write `q=-F'/F` and `t=a omega^2+o(omega^2)`. The B5-09 expansions,
rewritten using `q`, are

    m_shift,omega = q + omega^2[-q''/6 + q^3/3] + O(omega^4),
    m_heat,t      = q + omega^2[-a q''/4 + (a/2)q q'] + o(omega^2).

These identities hold locally uniformly in `C+`; all derivatives are in
`z`. Thus the coefficient difference that a projective change would need
to absorb is

    D_a(z) = (a/4 - 1/6)q''(z) + q(z)^3/3 - (a/2)q(z)q'(z).

The formulas follow algebraically from `q=-F'/F` and the expansions in
B5-09. In particular,

    F'''/F = -q'' + 3q q' - q^3,
    F'F''/F^2 = q q' - q^3.

## Möbius perturbation obstruction

Let `M_omega(w)=(A_omega w+B_omega)/(C_omega w+D_omega)` be real
Möbius maps preserving the upper half-plane, with coefficients smooth in
`epsilon=omega^2` and `M_0` the identity. After projective normalization,
write

    A=1+epsilon alpha+o(epsilon), B=epsilon beta+o(epsilon),
    C=epsilon gamma+o(epsilon), D=1+epsilon delta+o(epsilon).

Expansion gives

    M_omega(w)=w+epsilon[beta+(alpha-delta)w-gamma w^2]
                 +o(epsilon).

Hence a match through order `omega^2` would require `D_a(z)` to be a
polynomial of degree at most two in `q(z)`.

Under RH, evaluate on `z=iy`, `y -> +infinity`. Put
`g(s)=xi'(s)/xi(s)`. Then

    q(iy) = i g(1/2+y)
           = (i/2)log(y/(2 pi)) + O(1/y),
    q'(iy) = O(1/y),
    q''(iy) = O(1/y^2).

These estimates follow from Stirling's expansion for the gamma factor and
the absolutely convergent logarithmic derivative of zeta for real
`s=1/2+y>1`. Therefore, for every fixed real `a`,

    D_a(iy) = q(iy)^3/3 + O(log(y)/y)
            = -(i/24)log^3 y + O(log^2 y).

By contrast, every fixed polynomial of degree at most two in `q(iy)` is
`O(log^2 y)`. This contradiction proves that no such smooth
near-identity constant real Möbius transformation makes the two Weyl
functions agree through order `omega^2` for any scalar coefficient `a`.

## Scope and attempted falsification

The argument does not require a simple-zero hypothesis; it uses the
large-imaginary-axis asymptotic instead. The asymptotic scales distinguish
the cubic term from all tangent directions of a constant projective
transformation, so cancellation by a special zero configuration cannot
falsify it. The conclusion assumes a scalar heat-time scale
`t=a omega^2+o(omega^2)` and a projective matrix differentiable at the
identity in `omega^2`.

It does not rule out a transformation whose coefficients depend on `z`, a
singular/non-differentiable parameterization, a different endpoint pair, or
a general (possibly nonlocal) intertwining operator. It gives no
strong-resolvent result and no RH proof. Prior art checked is the canonical
system Weyl-function framework and the primary deformation definitions;
the search was targeted, not comprehensive, and no novelty claim is made.

## Verification

The quotient identities were algebraically checked from B5-09. Stirling
gives `g(s)=1/2 log(s/(2pi))+O(1/s)`,
`g'(s)=1/(2s)+O(1/s^2)`, and `g''(s)=O(1/s^2)`; zeta logarithmic
derivatives contribute exponentially small terms on this positive real
ray. No zero data, numerical computation, or formal proof is used.

Sources:

- B5-01, B5-08, and B5-09 in this repository for the normalized families,
  canonical Weyl context, and expansions.
- J. Eckhardt, A. Kostenko, G. Teschl, *Spectral asymptotics for canonical
  systems*, Theorem 2.2 and Proposition 2.3,
  https://www.mat.univie.ac.at/~gerald/ftp/articles/AsymCS.pdf
- M. Suzuki, *A canonical system of differential equations arising from
  the Riemann zeta-function*, https://arxiv.org/abs/1204.1827
