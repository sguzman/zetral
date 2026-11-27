# B1-08 — Uniform endpoint remainder on bounded H1 profiles

Date: 2026-11-27. Status: proved analytically from the prime number theorem;
not a full quadratic-form positivity result.

## Question

Can the leading archimedean/prime cancellation from B1-06 be made uniform as
the paired boundary profile varies, without checking each endpoint
numerically?

## Exact prime-endpoint identity

Fix `L>0`. Let `g ∈ C_c^∞((0,L); ℝ)` with `||g||₂=1`, and put
`φ(v)=(g*g)(v)=∫g(x)g(v−x)dx`. Then `φ∈C_c^∞((0,2L))`. For `h>2L`, define
the large-prime, first-power endpoint contribution

    P_g(h) = Σ_p (log p)/sqrt(p) · φ(h−log p),
    C_g = ∫_0^(2L) exp(−v/2) φ(v) dv.

With `θ(t)=Σ_{p≤t}log p` and `E(t)=θ(t)−t`, Stieltjes integration by parts
gives the exact formula

    P_g(h) − C_g exp(h/2)
      = exp(−h/2) ∫_0^(2L) E(exp(h−v)) exp(v/2)
                         (φ'(v)+φ(v)/2) dv.                 (1)

Indeed, take `a_h(t)=t^(−1/2)φ(h−log t)`. Its support is contained in
`(exp(h−2L), exp(h))`, so endpoint terms vanish. The Lebesgue part is
`∫a_h(t)dt=C_g exp(h/2)`. Also
`a_h'(t)=−t^(−3/2)(φ'(h−log t)+φ(h−log t)/2)`; applying
`∫a_h dE=−∫E a_h' dt` and changing variables `v=h−log t` proves (1).

## Uniform PNT consequence

For `T>0`, write
`δ(T)=sup_{t≥T}|E(t)|/t`. The prime number theorem gives `δ(T)→0`; its
Chebyshev-function formulation is summarized in [DLMF §25.16](https://dlmf.nist.gov/25.16).
Formula (1) implies

    |P_g(h)−C_g exp(h/2)|
      ≤ δ(exp(h−2L)) exp(h/2)
          (||φ'||₁ + ||φ||₁/2).                            (2)

Young's inequality and the support length give
`||φ||₁≤||g||₁²≤L` and
`||φ'||₁=||g'*g||₁≤||g'||₁||g||₁≤L||g'||₂`.
Consequently, for every `M<∞`, uniformly over the class
`||g||₂=1`, `supp(g)⊂[0,L]`, `||g'||₂≤M`,

    exp(−h/2)|P_g(h)−C_g exp(h/2)|
       ≤ L(M+1/2) δ(exp(h−2L)) → 0.                        (3)

This is a genuinely uniform little-o statement on a bounded H1 family, not
only a fixed-profile PNT asymptotic. It requires no finite endpoint
verification.

More generally, if `|E(t)|≤C t^α(log t)^B` for `t≥t₀≥e` and `B≥0`, then for
`h>2L+log t₀`, (1) yields

    |P_g(h)−C_g exp(h/2)|
      ≤ C exp((α−1/2)h) h^B
          ∫_0^(2L) exp((1/2−α)v)(|φ'(v)|+|φ(v)|/2)dv.      (4)

This displays exactly how any stronger Chebyshev error estimate propagates
to this boundary contribution.

## Consequence and falsification boundary

The archimedean endpoint term in B1-06 has the same leading coefficient
`C_g exp(h/2)`. Thus (3) upgrades cancellation of the leading first-prime
term to uniformity over fixed-support profiles with bounded H1 norm. It
does not control the full operator on the unit sphere: the constants depend
on `||g'||₂`, and smooth normalized profiles can have arbitrarily large
derivative norm (for example, normalized high-frequency modulations of a
fixed bump). This is a limitation of the estimate, not a counterexample to
positivity. The sign and size of the lower-order remainder are still
undetermined; the full source-form map and the full-space lower bound remain
open.

**Evidence class:** analytical deduction from the classical PNT; no
numerical computation, Lean proof, RH implication, or novelty claim.
**Next question:** identify whether the actual test-space norm controls the
profile derivative term, or find a different cancellation identity that
does not require an H1 bound. Then include cross terms and all prime powers in
the full quadratic form before claiming coercivity.
