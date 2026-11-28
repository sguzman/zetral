# B3-41 — Prime-side screw function selects the global zeta Weyl extension

Date: 2026-11-28. Status: equation-level source-chain audit under RH;
Suzuki's explicit transform theorem and canonical-system limit theorems
remain imported.

## Question

Does the global screw function built from the prime-side Weil distribution
select the half-line extension with Weyl function `Q_xi`, with the same
sign, normalization, and boundary parameter as the canonical system
recovered from local Weil forms?

## Sources

- M. Suzuki, *Aspects of the screw function corresponding to the Riemann
  zeta-function*, [arXiv:2206.03682v4](https://arxiv.org/abs/2206.03682v4),
  version 2026-08-24: Theorem 1.1 and equations (1.1)–(1.8), (3.9)–(3.11).
- M. Suzuki, *The Local Weil Explicit Formula and Related Structures*,
  [arXiv:2611.33001v1](https://arxiv.org/abs/2611.33001v1), version
  2026-11-25: §§2.1, 4.3–4.4, Proposition 5.3, Theorem 6.2, Proposition 7.2.
- Zetral's independently derived full-endpoint boundary maps and sign audit:
  PWPB-03.12/14 in `research/operators/B3-13-prime-defined-canonical-system.md`.

## Prime-side normalization

In the 2023 source, the triangular function is

    Delta_t(x) = (t-|x|)/2  for |x|<=t, and 0 otherwise,

and its Fourier transform is `(1-cos(zt))/z^2`. The source obtains
`W(Delta_t)=Psi(t)` (equations (3.9)–(3.11)) and defines the global screw
function `g=-Psi` (equation (1.8)). The 2026 source instead writes
`g(t)=-W(u_t * u_t-tilde)` with
`u_t=2^(-1/2) 1_[-|t|/2,|t|/2]`; this convolution is exactly `Delta_|t|`.
Thus both papers give the same prime-defined function, with no factor of
two or change of window scale.

The 2023 explicit transform theorem gives, initially for `Im z>1/2`,

    integral_0^infinity Psi(t) exp(i z t) dt
      = - z^(-2) xi'(1/2-i z)/xi(1/2-i z).

Since `g=-Psi` and `Q_xi(z)=i xi'(1/2-i z)/xi(1/2-i z)`, direct
multiplication by `i z^2` yields

    integral_0^infinity g(t) exp(i z t) dt = -i Q_xi(z)/z^2.

This is exactly the Krein–Langer screw-function/Weyl normalization quoted
in the 2023 source's equation (1.6), not its negative or an additive
constant. The transform formula itself is a source theorem and has not
been independently reproved in this audit.

## Extension parameter and tail transfer

Under RH, the 2023 source's Theorem 1.2 says this `g` is a global screw
function and its associated Nevanlinna function is `Q_xi`. In the 2026
source, Theorem 6.2 reconstructs the same local Hamiltonian from the
prime-defined kernels. For the fundamental matrix `U` normalized by
`U(0,z)=I`, the canonical-system concatenation rule (Proposition 4.3) is

    q_global(z) = U(a,z) dot Omega_a(z),

where `Omega_a` is the tail Weyl parameter. The source's projective action
is `(M11 w+M12)/(M21 w+M22)`. Since `det U(a,z)=1`, it is invertible, and

    Omega_a(z) = U(a,z)^(-1) dot Q_xi(z).

For a finite endpoint `b`, the tail with right-end parameter `0` has
parameter

    Omega_(a,b)(z) = (U(a,z)^(-1) U(b,z)) dot 0
                   = (U(a,z)^(-1) U(b,z))_12 /
                     (U(a,z)^(-1) U(b,z))_22.

The normalized length to infinity is at least `2(b-a)` because
`det H=1` and `tr H>=2`; the right endpoint is limit point. Standard
canonical-system theory therefore gives locally uniform convergence
`Omega_(a,b) -> Omega_a` in the upper half-plane. This is the quotient
and limit in Suzuki's Proposition 7.2. The fractional-linear action is
injective, so the extension parameter that produces the global `g` is
unique.

## Affine Nevanlinna terms and falsification checks

Under RH, logarithmic differentiation of the even Hadamard product gives

    Q_xi(z) = sum_(gamma in Gamma, signed distinct)
                    m_gamma/(gamma-z),

with symmetric pairing. The paired series converges locally uniformly off
its poles because `sum m_gamma/gamma^2<infinity`; it has positive
imaginary part on the upper half-plane and exactly the zero ordinates as
poles. The measure is therefore `sum m_gamma delta_gamma`. The symmetric
pairing and evenness give `Q_xi(0)=0`; the source's growth condition
`Q_xi(iy)/y -> 0` excludes a linear Nevanlinna term. Thus the measure
representation has no extra real or linear term that could alter the
Weyl normalization.

Falsification checks:

- Reversing `g=-Psi` would reverse the Weyl sign and violate the Herglotz
  positivity under RH; the explicit transform fixes this sign.
- Replacing the half-width `t/2` by `t` would change `Delta_t`; both source
  definitions use the half-width and the normalization `1/sqrt(2)`.
- A different endpoint line would replace `U_12/U_22`; PWPB-03.12/14
  independently matches this ratio to `y_1(0)=0` in the chosen boundary
  maps. The `H=I` calculation checks orientation only.
- Without RH, `g` need not be a global screw function, so this positive
  self-adjoint spectral interpretation is conditional.

## Audit status

No sign, factor, endpoint, or projective-transfer mismatch was found in
the cited equation chain. This independently checks the source-to-source
composition and the project's transfer algebra; it does not reprove
Suzuki's 2023 transform theorem, the Krein–Langer correspondence, the
2026 Hamiltonian reconstruction, or the limit-point convergence theorem.
It is not a Lean theorem, human review, or independent proof of RH. The
remaining direct verification opportunity is to derive the 2023 transform
from its explicit prime/archimedean formula, including convergence and
contour terms, without importing the stated transform theorem.
