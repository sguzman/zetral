# B5-04 — Different leading split for a hypothetical multiple zero

Date: 2026-11-27. Status: rigorous local model conditional on zero order
four; no multiple zero of xi is asserted.

The simple-zero expansion B5-03 does not apply at a multiple zero. Suppose
an analytic function `F` has a zero of order four at `r`:

    F(r+delta)=a delta^4 + O(delta^5),  a != 0.

Scale `delta=omega*x`. From the exact symmetric shift and the heat operator
at `t=2 omega^2`, uniformly on compact `x`-sets,

    A^omega(r+omega*x)/(a omega^4)
       -> P_shift(x) = ((x+i)^4+(x-i)^4)/2
                     = x^4 - 6x^2 + 1,

    F_(2 omega^2)(r+omega*x)/(a omega^4)
       -> P_heat(x) = x^4 - 6x^2 + 3.

The four roots of each limit polynomial are simple and real, but the
locations differ:

    P_shift: +/- (sqrt(2)+1), +/- (sqrt(2)-1),
    P_heat:  +/- sqrt(3+sqrt(6)), +/- sqrt(3-sqrt(6)).

Rouché's theorem on small circles around these eight distinct scaled roots
shows that, for sufficiently small positive `omega`, each deformation has
four local roots near `r`, whose `delta/omega` coordinates approach its own
four listed limits. Local uniform convergence in the fixed `z`-disk ensures
the order-four zero splits into exactly four roots counted with multiplicity.

More generally, for a zero of order `m`, the leading scaled polynomials are

    P_shift,m(x) = ((x+i)^m+(x-i)^m)/2
                 = sum_k (-1)^k binom(m,2k) x^(m-2k),

    P_heat,m(x) = sum_k (-1/2)^k m!/[k!(m-2k)!] x^(m-2k).

The `k=0,1` coefficients agree; they need not agree for `k>=2`. The order
four case is the first such difference. This local algebra shows why a
simple-zero perturbation result cannot be extended across arbitrary
multiplicities by continuity.

## Limits and falsification

This is a conditional local result for any analytic function with an
order-four zero. It does not establish that xi has any multiple zero, does
not establish a global difference between the two zero sets, and does not
give a zero-independent operator construction. The limiting polynomials
were independently expanded from both definitions; their roots are
verified by factoring the quadratics in `x^2`. No numerical zero data or
computation is used.
