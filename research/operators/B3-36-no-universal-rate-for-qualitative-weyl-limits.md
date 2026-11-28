# B3-36 — Qualitative Weyl convergence gives no universal cluster rate

Date: 2026-11-27. Status: exact countermodel in the general Herglotz class;
not a counterexample to Suzuki's arithmetic canonical systems.

## Question

Can local uniform convergence of finite Weyl functions alone force a
quantitative rate for the convergence of simple spectral clusters to a
multiplicity-weighted atom?

## Countermodel

Fix `gamma in R`, `m>0`, and any positive sequence `delta_n -> 0`. Define

    mu_n = (m/2) delta_(gamma+delta_n)
        + (m/2) delta_(gamma-delta_n),
    q_n(z) = integral (t-z)^(-1) d mu_n(t),  Im(z)>0.

Every `q_n` is a Herglotz function with a two-point, simple-atom spectral
measure; the two eigenvalues may be viewed as a simple two-dimensional
diagonal self-adjoint model. The total mass in any fixed interval containing
`gamma` and excluding its boundary is exactly `m` for all sufficiently
large `n`, while the two simple atoms converge to the single mass-`m` atom
`m delta_gamma`.

Set `a=gamma-z`. Direct algebra gives

    q_n(z) - m/(gamma-z)
      = m delta_n^2 / (a (a^2-delta_n^2)).

For any compact `K subset C+`, let `d=dist(K,gamma)>0`. If
`delta_n<=d/2`, then

    sup_(z in K) |q_n(z)-m/(gamma-z)|
       <= 4m delta_n^2/(3d^3).

Thus convergence is locally uniform and both simple poles converge to the
limiting location, but the rate is governed by the arbitrary sequence
`delta_n`. Taking `delta_n=1/log(n+2)` gives a Weyl-function error of order
at most `1/log(n)^2` on each such compact, which has no power-law rate in
`n`. Slower sequences can make the convergence slower still.

## Conclusion and scope

This rules out extracting a universal power-law cluster rate from only
qualitative Herglotz/Weyl convergence, even when the approximating measures
are positive, finite, and have simple atoms. It does not rule out a
quantitative rate for Suzuki's specific canonical systems: their Hamiltonian
and arithmetic structure may supply additional estimates. A rate must use
such extra source-proved information, not just Montel/limit-point
convergence. The countermodel has no arithmetic realization claim and is
not a novelty claim.

## Verification

The identity is obtained by averaging the two fractions
`1/(a-delta_n)` and `1/(a+delta_n)`. On `K`, `|a|>=d` and
`|a^2-delta_n^2|>=|a|^2-delta_n^2>=3d^2/4`, giving the displayed bound.
The cluster mass and positivity are immediate from the two-atom definition.

## Relation to Zetral

This delimits PWPB-03.39: its vague convergence is defensible, but no
quantitative improvement follows without a rate for the actual canonical
system's Weyl-function convergence. See
`research/operators/B3-35-vague-spectral-measure-limit.md`.
