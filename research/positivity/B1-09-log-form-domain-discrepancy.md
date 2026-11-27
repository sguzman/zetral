# B1-09 — Endpoint discrepancy in the logarithmic form domain

Date: 2026-11-27. Status: domain obstruction and Fourier-side bound proved;
no full-form positivity conclusion.

## Question

Does the H1 restriction in B1-08 reflect the actual local Weil test space,
and can the endpoint cancellation be bounded in the Fourier norm that the
local Weil form uses?

## Domain evidence and derivative obstruction

Suzuki v1, §2.1, equation (2.1), defines the local form domain as

    H^log(-a,a) = {u in L²(-a,a):
      integral |u_hat(t)|² log(2+|t|) dt < infinity}.

The same section states that `C_c^∞(-a,a)` is a core and that, after adding a
sufficiently large multiple of the squared L2 norm, the closed-form norm is
equivalent to this logarithmically weighted Fourier norm. Source:
[arXiv:2611.33001v1, §2.1](https://arxiv.org/html/2611.33001).

Fix a nonzero smooth bump `χ` supported in the profile interval and normalize
`g_N(x)=χ(x)e^{iNx}/||χ||₂`. Then `||g_N||₂=1` and
`||g_N'||₂` grows as `N`. But Fourier translation gives

    integral log(2+|t|)|g_hat_N(t)|²dt
       = (log N)||χ_hat||₂² + O_χ(1),

as `N→∞`. Thus the derivative norm is not bounded by the actual logarithmic
domain norm (nor by the L2 norm). B1-08's bounded-H1 uniformity does not
cover the full core or the form domain. This is a domain mismatch, not a
counterexample to positivity.

## Fourier-dual endpoint estimate

Fix `L>0` and choose `η∈C_c^∞(ℝ)` equal to 1 on `[0,2L]`, supported in
`[-1,2L+1]`, with `0≤η≤1`. Let

    μ_h = Σ_p (log p)/sqrt(p) η(h−log p) δ_(h−log p),
    ν_h = exp(h/2) exp(−v/2) η(v) dv,
    Δ_h = μ_h−ν_h.

For `φ=g*g` with `supp(g)⊂[0,L]`, pairing with `Δ_h` is exactly the
large-prime endpoint remainder in B1-08; the cutoff does not change either
term because `η=1` on the support of `φ`.

Use the Fourier convention `μ_hat(ξ)=∫exp(iξv)dμ(v)`. The prime number
theorem gives

    ε_h := sup_(t ≥ exp(h−2L−1)) |θ(t)−t|/t  -> 0.

Stieltjes integration by parts, now applied to
`t^(−1/2)η(h−log t)exp(iξ(h−log t))`, yields for all real `ξ`

    |Δ_hat_h(ξ)| ≤ C_L ε_h (1+|ξ|) exp(h/2).              (1)

The support of `η` is fixed, so `C_L` depends only on `L` and `η`. Also
`||Δ_h||_TV ≤ C_L exp(h/2)`, by `θ(t)=O(t)` and the fixed support in
log-coordinates. Split the frequency line at
`A_h=max(2,ε_h^(−1/2))`. For `|ξ|≤A_h`, (1) gives
`|Δ_hat_h(ξ)|/log(2+|ξ|) ≤ C_L sqrt(ε_h) exp(h/2)`; for `|ξ|>A_h`, the
total-variation bound gives at most
`C_L exp(h/2)/log(2+A_h)`. Both factors tend to zero relative to
`exp(h/2)`. Therefore

    c_h := sup_(ξ∈ℝ) |Δ_hat_h(ξ)|/log(2+|ξ|)
          = o_L(exp(h/2)).                                (2)

Fourier inversion and `φ_hat(ξ)=g_hat(ξ)^2` now imply

    |integral φ(v)dΔ_h(v)|
       ≤ c_h/(2π) integral log(2+|ξ|)|g_hat(ξ)|²dξ.       (3)

So the leading first-prime endpoint cancellation is uniform on bounded
`H^log` families as well as bounded-H1 families. This uses only PNT and a
frequency split; no endpoint computation is needed.

## Limits and next question

The factor `c_h=o(exp(h/2))` can still grow with `h`; it gives neither a
uniform positive lower bound nor a sign for the full Weil form. The local
form also contains prime powers, the other endpoint, the archimedean and
continuous terms, and their cross-effects. Moreover, (3) is relative to the
logarithmic form norm, while RH coercivity requires control of the Rayleigh
quotient against the L2 norm over the full support-dependent domain. No such
comparison is obtained here.

The next precise target is to estimate the *signed* Fourier multiplier
`Δ_hat_h(ξ)` on low, transition, and high frequency ranges sharply enough to
compare it with the positive logarithmic energy and the remaining terms of
the full quadratic form. The trivial total-variation estimate loses the
sign and is too large to establish coercivity. A counterexample must be an
actual profile `g` with a negative full Weil value; failure of this upper
bound alone is not one.

**Evidence class:** analytic deduction from the PNT and the pinned
definition of `H^log`; no Lean build, RH implication, numerical result, or
novelty claim.
