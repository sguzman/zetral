# Campaign LXXIX — Signed multiplier for the first-prime endpoint remainder

Date opened: 2026-11-27. Status: ACTIVE. This analytical investigation
follows Campaign LXXVIII's closure within its bounded operator-audit scope;
that closure does not end the broader research program.

## Precise question

For the endpoint discrepancy measure `Δ_h` from B1-09, can its Fourier
transform be written exactly in terms of the normalized Chebyshev error, and
what bound follows under the RH square-root error estimate? Does that bound
reach the logarithmic form domain or full-form coercivity?

## Evidence and method

Start from B1-09's compactly supported cutoff `η`, the exact measures `μ_h`
and `ν_h`, and Stieltjes integration by parts. Set
`R_h(v)=(θ(e^(h-v))−e^(h-v))/e^((h-v)/2)`. Derive the signed multiplier
identity, then apply the conditional estimate
`θ(t)−t=O(sqrt(t) log²t)` under RH. Pair the result with
`φ=g*g`, using `φ_hat=g_hat²`, and determine precisely which Fourier norm is
required. Falsify any claimed full-domain control by checking the growth of
the multiplier-to-log-weight ratio at high frequency.

## Information gain and dependencies

The result distinguishes genuine signed cancellation from the PNT-only
`o(exp(h/2))` bound, while exposing any Sobolev regularity still missing from
the actual logarithmic form domain. The square-root Chebyshev estimate is
conditional on RH; this campaign cannot use it in an unconditional proof of
RH. The PNT identity and cutoff support are imported from B1-09.

## Acceptance

Accept the exact transform identity with all signs, variables and endpoint
terms justified, plus a norm inequality with stated assumptions and a clear
comparison to `H^log`. Do not call it positivity or a proof of RH. A
counterexample to a proposed log-domain multiplier bound is also a valid
checkpoint. Use no large local computation; record theorem sources and
versions.

## Checkpoint B1-10

See `research/positivity/B1-10-rh-signed-multiplier.md` for the exact signed
formula and conditional `H^(1/2)` bound. Its failure to control the full
`H^log` unit sphere is explicit; the multiplier's sharp signed behavior and
all other Weil-form terms remain open.
