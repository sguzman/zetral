# B5-02 — No positive heat-time mixture for the shifted-xi multiplier

Date: 2026-11-27. Status: rigorous no-go for a specified representation.

Could Suzuki's exact symmetric-shift multiplier be represented as a positive
mixture of de Bruijn-Newman heat multipliers? That would require a probability
measure `nu` on real heat times, with an exponential moment near zero, such
that for all real `u` near zero,

    cosh(2 omega u) = integral exp(t u^2) d nu(t).

The value at `u=0` forces total mass one. Set `x=u^2`; comparison of the
Taylor coefficients at zero gives

    E[t]   = 2 omega^2,
    E[t^2] = (2 omega)^4 / 12 = (4/3) omega^4.

But then

    Var(t) = E[t^2] - E[t]^2
           = (4/3) omega^4 - 4 omega^4
           = -(8/3) omega^4 < 0

for every nonzero `omega`, impossible for a real probability measure. (The
same contradiction follows by matching the `x^2` coefficient: it gives
`E[t^2]/2=(2/3)omega^4`.) Thus there is no positive probability mixture of
heat times representing the shift multiplier, even if negative heat times
are allowed, provided the required moments exist.

This rules out one natural positive-mixture transfer argument. It does not
rule out signed mixtures, nonlocal intertwiners, or other zero-set
correspondences. Positivity of a mixture of functions would itself require
additional reasoning to preserve real-rootedness. This result uses only
Taylor coefficients and the nonnegative variance axiom; no computation is
performed.
