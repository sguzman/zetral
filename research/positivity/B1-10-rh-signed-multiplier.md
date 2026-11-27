# B1-10 — Exact signed multiplier under the RH Chebyshev bound

Date: 2026-11-27. Status: exact transform identity; conditional RH estimate;
not full-form positivity.

## Question and assumptions

Can the Fourier transform of B1-09's first-prime endpoint discrepancy be
bounded on a polynomial rather than exponential scale, while keeping its
sign information visible?

Fix `L>0` and the cutoff `η∈C_c^∞(ℝ)` from B1-09, equal to one on `[0,2L]`
and supported in `[-1,2L+1]`. Let

    E(t)=θ(t)−t,
    R_h(v)=E(exp(h−v))/exp((h−v)/2),

and use Fourier convention `μ_hat(ξ)=∫exp(iξv)dμ(v)`. The conditional
analytic input is the standard RH consequence

    |E(t)| ≤ C sqrt(t) (log t)^2  (t≥t₀).

The RH equivalence and prime-counting context are summarized in
[DLMF §25.16(i)](https://dlmf.nist.gov/25.16.i); the square-root logarithmic
Chebyshev estimate under RH is stated, for example, in [Theorem 1.2 of this
Chebyshev-function paper](https://www.cambridge.org/engage/api-gateway/coe/assets/orp/resource/item/61eedb2263acba992118ab44/original/new-bound-on-the-chebyshev-function-and-the-riemann-hypothesis.pdf).
Only the bound itself is used here, and it is explicitly RH-conditional.

## Exact transform

With `v=h−log t`, define

    a_(h,ξ)(t)=t^(−1/2) η(h−log t) exp(iξ(h−log t)).

The prime measure in B1-09 is `dθ(t)` under this change of variables, and its
Lebesgue main measure is `dt`. Thus

    Δ_hat_h(ξ)=integral a_(h,ξ)(t) dE(t).

The cutoff makes `a_(h,ξ)` compactly supported away from both endpoints.
Since

    a'_(h,ξ)(t)=−t^(−3/2) exp(iξv)
                  ((1/2+iξ)η(v)+η'(v)),

Stieltjes integration by parts has no boundary term and yields

    Δ_hat_h(ξ)
      = integral E(t)t^(−3/2) exp(iξv)
                    ((1/2+iξ)η(v)+η'(v)) dt
      = integral R_h(v) exp(iξv)
                    ((1/2+iξ)η(v)+η'(v)) dv.             (1)

The last equality uses `dt=−t dv`; reversing the endpoints removes the minus
sign. This is an exact *signed* identity, not a modulus estimate.

## Conditional multiplier and profile bound

On the fixed support of `η`, `log(exp(h−v))=h−v`, so the RH input gives
`|R_h(v)|≤C_L h²` for all sufficiently large `h`. Equation (1) therefore
implies, uniformly for real `ξ`,

    |Δ_hat_h(ξ)| ≤ C_(L,η) h² (1+|ξ|).                   (2)

For a real `g∈C_c^∞((0,L))`, put `φ=g*g`; then `φ_hat(ξ)=g_hat(ξ)^2` and
`η=1` on `supp φ`. Fourier inversion and (2) give

    |integral φ(v)dΔ_h(v)|
       ≤ C_(L,η) h²/(2π)
              integral (1+|ξ|)|g_hat(ξ)|²dξ.             (3)

Thus under RH the first-prime residual is `O_g(h²)` for each fixed profile,
and uniformly `O(h²)` on profile families with bounded displayed
`H^(1/2)`-type Fourier norm. This improves the PNT-only `o(exp(h/2))`
estimate in magnitude for those profiles, but it remains conditional and
has no sign conclusion.

## Falsification boundary and remaining gap

The local form domain is logarithmic Fourier regularity `H^log`, as recorded
in B1-09. Estimate (2) gives only a multiplier-to-log-weight majorant
`C h²(1+|ξ|)/log(2+|ξ|)`, which is unbounded as `|ξ|→∞`; it therefore does
not yield a uniform `H^log`-dual estimate. This is a failure of the bound,
not a proof that the true signed multiplier is large or that a negative form
direction exists. High-frequency cancellation in (1) is unresolved.

The calculation concerns only the first-prime endpoint piece. It does not
include higher prime powers, the other endpoint, archimedean or continuous
terms, or their cross-effects. It cannot establish the lower bound required
for Suzuki's full-space coercivity criterion. No numerical, Lean, or RH
verification was performed; RH is an assumption in (2)–(3).

**Next question:** can oscillation in `R_h(v)` yield a signed multiplier
estimate with logarithmic weight at all frequencies, or does a sequence of
high frequencies violate the proposed dual bound? Keep the RH-conditional
square-root estimate distinct from any unconditional argument.
