# B5-03 — Local zero motion under the shift and heat deformations

Date: 2026-11-27. Status: rigorous local expansion conditional on a simple
zero; no simplicity assertion for xi zeros.

Let `F(z)=xi(1/2-iz)` and suppose `r` is a simple zero, so `F'(r) != 0`.
The implicit function theorem gives a unique nearby zero branch for each
analytic family, with an even expansion in `omega` for the symmetric shift.
Using B5-01,

    A^omega(z) = F(z) - (omega^2/2)F''(z)
                    + (omega^4/24)F''''(z) + O(omega^6),
    F_(2 omega^2)(z) = F(z) - (omega^2/2)F''(z)
                           + (omega^4/8)F''''(z) + O(omega^6).

Write each nearby root as `r+c_2 omega^2+c_4 omega^4+O(omega^6)`. At
order `omega^2`, both satisfy

    c_2 = F''(r)/(2F'(r)).

At order `omega^4`, the common nonlinear terms cancel on subtraction, giving

    c_(4,shift) - c_(4,heat) = F''''(r)/(12F'(r)).

For comparison, direct differentiation of the heat equation
`partial_t F_t=-(1/4)partial_z^2 F_t` gives the simple-root velocity
`dr/dt=F_t''(r(t))/(4F_t'(r(t)))`. At `t=0`, its first displacement under
`t=2 omega^2` agrees with `c_2` above. The shift and heat zero paths therefore
have matching quadratic displacement, but in general their quartic
coefficients differ. If `F''''(r)=0`, this particular fourth-order test
does not separate the two branches; higher terms may be needed.

## Coefficient falsification check

For the toy entire function `F(z)=z+c z^4` with `c != 0`, zero `r=0` is
simple and `F''''(0)/[12F'(0)]=2c`. Direct substitution gives the shifted
root `-c omega^4+O(omega^10)` and the heat root at `t=2 omega^2` equal to
`-3c omega^4+O(omega^10)`. Their difference is `2c omega^4`, agreeing with
the formula. This toy calculation checks algebra only; it is not a model of
zeta-zero data.

## Scope

For xi, the conclusion is conditional on RH if one wants `r` real, and
conditional on simplicity at the selected zero for the implicit root branch.
Neither RH nor simplicity is assumed as an established fact here. The
coefficient comparison does not prove that any actual xi zero has
`F''''(r)/F'(r) != 0`, and does not prove a zero-set mismatch at a specific
ordinate. No numerical zero input is used.
