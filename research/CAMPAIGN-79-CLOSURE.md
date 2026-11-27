# Campaign LXXIX closure — First-prime endpoint multiplier identity

Date: 2026-11-27. Disposition: accepted within the exact-transform and
conditional-bound scope; no positivity conclusion.

## Results

`research/positivity/B1-10-rh-signed-multiplier.md` derives an exact
Stieltjes identity for the signed Fourier multiplier of the first-prime
endpoint discrepancy. Under the RH-conditional square-root Chebyshev bound,
it gives `|Δ_hat_h(ξ)|≤C h²(1+|ξ|)` and an `O(h²)` estimate on profiles with
bounded `H^(1/2)`-type Fourier norm.

This improves the scale for regular fixed profiles compared with the
unconditional PNT estimate, but it assumes RH and does not control the full
logarithmic domain. It also gives no sign, and it omits other terms of the
Weil form. Thus it does not establish coercivity or RH.

## Verification boundary and pivot

The transform, signs, cutoff support and Fourier pairing were checked
analytically. The Chebyshev estimate is an imported RH-conditional result.
No numerical calculation, Lean check, or independent RH verification was
performed.

The next campaign tests the true high-frequency multiplier rather than
improving the same low-frequency norm estimate. It will use the prime-zeta
Möbius identity in its initial half-plane as prior art, but any continuation
to the critical line and contour movement must be justified separately.
