# STS03-W01 — Independent arithmetic-trace audit

Status: READY_FOR_REVIEW

Baseline: `dc92b04` (Campaign XXII, STS03 complete; STS04 ready).

## Question and scope

Independently audit `research/positivity/STS03-arithmetic-parity-trace.md`: the arithmetic-side expansion of the Sobolev reflection trace, prime/pole/archimedean contributions, and the stated truncation/error bounds. Check the connection to STS01–02's exact kernel while keeping the trace in the Sobolev metric. Do not duplicate STS04 consolidation.

## Acceptance criteria

- Re-derive the core arithmetic identities and check constants/signs in the finite cutoff estimates.
- Report discrepancies or the precise checked scope; preserve exact arithmetic checks if used.
- Verify any source-dependent explicit-formula inputs with actual source evidence; distinguish imported theorem from internal calculation.
- Bounded stopping condition: audit the arithmetic representation and its truncation guarantee, then reconcile or report mismatch. No actual off-line zero, RH proof, formal/human review, or novelty claim.

## Result

The scoped audit found no discrepancy in the checked identities or constants. The Green correlation formula follows by substituting the displayed Dirichlet Green kernel and integrating over the overlap; its derivative is `K'(s)=-(L-s)sinh(s)/(2sinh L)` on `(0,L)`. The trace calculation is trace-class justified by the uniformly absolutely convergent Dirichlet Green expansion. For the archimedean term, the nonnegative integrands permit Tonelli; the stated tail follows from `I_j <= L*coth(L)/(2*r_j^3)`, `r_j >= 2j`, and the integral comparison. The pole integral formula (4) gives exactly `52/135` at `L=log 4`; the endpoint prime power `n=4` has zero weight.

The independent exact-rational Python port recorded during this audit produced a slightly wider enclosure than the source note due to repeated outward rounding, but the strict sign survives: `-288912941/10^12 <= P(log 2) <= -263181814/10^12 < 0`. Separately, the source note's JavaScript BigInt program was extracted and executed with Node from the checked-in note. It reproduced the published interval exactly, including archimedean tail upper bound `24740704/10^12` and trace enclosure `[-288912938,-263181818]/10^12`. Thus the result has both an independent implementation check and a reproducible execution of the source-note implementation. No zero ordinates enter either calculation.

The Mellin identity is algebraically consistent: direct integration of `W` gives `1/[s(s+1)^2]`, and absolute convergence in `Re(s)>1/2` justifies interchanging the prime sum and integral. The comparison replacing `2K(log n)` by `W(n/X)` uses the stated absolutely convergent `sum Lambda(n)n^(-3/2)` term and Chebyshev's upper bound; it supplies an `O(log X/X)` error. This is a classical smoothed explicit-formula representation and is not a new independent source of zero information.

### Source check

Direct inspection of Suzuki, *Weil’s quadratic form via the screw function*, arXiv:2606.09096v4 HTML, supports only the imported context: §§2.4–2.5 give the digamma/prime coefficients and distributional form; §3.1 gives the logarithmic form domain and paired-zero formula. Sections 4–6 contain additional results, but they are outside this arithmetic-trace audit. This source check does not establish priority or novelty. The benchmark and tail arithmetic are internal calculations, not claims from Suzuki.

### Scope and limits

This verifies the arithmetic parity-trace representation and the displayed truncation certificate at the finite benchmark. It does not prove nonnegativity of the ordinary Weil form, identify an individual eigenvalue from the trace, evaluate the large-window prime sum efficiently, solve the analytic continuation problem from finite data, imply RH, or establish an off-line zero. The work is AI-assisted and has not had independent human or formal verification. No tests or zero computations were run.
