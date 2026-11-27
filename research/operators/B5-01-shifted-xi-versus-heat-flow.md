# B5-01 — Suzuki horizontal shifts versus de Bruijn-Newman heat flow

Date: 2026-11-27. Status: rigorous transform identity and nonidentity
result; no zero-set correspondence is established.

## Definitions and primary-source conventions

Suzuki defines, with `s=1/2-iz`,

    A^omega(z) = [xi(s+omega)+xi(s-omega)]/2.

The de Bruijn-Newman family uses

    H_t(y) = integral_0^infinity exp(t u^2) Phi(u) cos(yu) du,
    H_0(y) = (1/8) xi(1/2+i y/2),

where `Phi` is the classical even, super-exponentially decaying kernel.
Define the same-scale heat family `F_t(z)=8 H_t(2z)`. Functional-equation
symmetry gives `F_0(z)=xi(1/2-iz)`.

## Exact shift multiplier

Write `F(z)=F_0(z)`. Direct substitution gives

    A^omega(z) = [F(z+i omega)+F(z-i omega)]/2.

Using the Fourier representation of `H_0`, this becomes

    A^omega(z) = 8 integral_0^infinity
        Phi(u) cosh(2 omega u) cos(2 z u) du.

By contrast,

    F_t(z) = 8 integral_0^infinity
        Phi(u) exp(t u^2) cos(2 z u) du,
    partial_t F_t = -(1/4) partial_z^2 F_t.

Thus the exact Fourier multipliers are `cosh(2 omega u)` for Suzuki's
symmetric shift and `exp(t u^2)` for the rescaled heat flow. The expansions
match through order `omega^2` at `t=2 omega^2`:

    cosh(2 omega u) = 1 + 2 omega^2 u^2
                         + (2/3) omega^4 u^4 + O(omega^6 u^6),
    exp(2 omega^2 u^2) = 1 + 2 omega^2 u^2
                           + 2 omega^4 u^4 + O(omega^6 u^6).

Equivalently, as entire-function Taylor expansions,

    A^omega = F - (omega^2/2) F'' + (omega^4/24) F'''' + O(omega^6),
    F_(2 omega^2) = F - (omega^2/2) F'' + (omega^4/8) F'''' + O(omega^6).

Their fourth-order difference is
`A^omega-F_(2 omega^2)=-(omega^4/12)F''''+O(omega^6)` locally uniformly
in `z`. The remainder statements follow from analyticity in omega and local
uniform convergence of the Fourier integrals, using the super-exponential
decay of `Phi`.

No scalar choice `t=t(omega)` makes the Fourier multipliers identical for
nonzero omega: the quadratic coefficient forces `t=2 omega^2`, while the
fourth-order coefficients then differ. Since `Phi` is a nonzero analytic
function and the Fourier transform is injective on these rapidly decaying
kernels, the resulting entire functions are not identical.

## Spectral interpretation and limitations

The match of the second-order generators is only a local perturbative
similarity. It does not identify the functions or their zero sets, and does
not transfer a real-zero theorem between the two families. Suzuki's cited
shifted-zero result says `A^omega` has only real zeros for `omega>=1/2`
unconditionally and for `0<omega<1/2` under RH. The de Bruijn-Newman family
has all-real zeros exactly for `t>=Lambda`; Rodgers-Tao prove `Lambda>=0`,
and RH is equivalent to `Lambda<=0`. Those are distinct deformation
parameters with different Fourier symbols.

## Prior art and verification boundary

Primary sources inspected: Suzuki, [*A canonical system of differential
equations arising from the Riemann zeta-function*](https://arxiv.org/abs/1204.1827),
equations (1.1), (1.2) and Proposition 1.2; Polymath, [*Effective
approximation of heat flow evolution of the Riemann xi
function*](https://arxiv.org/abs/1904.12438), equations (1)–(4), §§1–2;
Rodgers and Tao, [*The de Bruijn-Newman constant is non-negative*](https://arxiv.org/abs/1801.05914),
Theorem 1.1. No claim of novelty is made; a targeted search did not
establish whether this particular multiplier comparison appears elsewhere.
The algebraic identity and Taylor coefficients were checked directly. No
zero data or numerical computation is involved, and no operator intertwiner
has been constructed.
