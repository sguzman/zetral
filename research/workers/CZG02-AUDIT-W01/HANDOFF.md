# CZG02 independent audit

Status: READY_FOR_REVIEW

Scope: audit of the zero-free-region scale calculation, the near-carrier tail and local-zero deduction, and the global deviation consequence in `research/positivity/CZG02-zero-free-carrier-exclusion.md`. The cited Korobov–Vinogradov theorem and CZG01 inputs are treated as imported hypotheses; this handoff does not verify their sources.

## Findings

I found no error in the stated scale exponents or implications, subject to those imported inputs.

For (L=\log(2+|\omega|)\le c_1a^{3/2}/(\log a)^2), a zero with \(|u+\omega|\le a^4\) has \(\log(3+|u|)\le 2c_1a^{3/2}/(\log a)^2\) eventually. Substitution in the stated zero-free region yields (a(1-\beta)\ge c_2c_1^{-2/3}\log a). Choosing (c_1) so (2c_2c_1^{-2/3}>3) makes each near-window attenuation at most (a^{-3-\epsilon}); the local count then bounds the weighted near sum by (O(L a^{-3-\epsilon})=o(1)). With (p\ge3), the (a^4) tail also tends to zero uniformly in this range. The same argument applies when (L=o(a^{3/2}/(\log a)^2)).

For the local geometry claim, set (R=L^\theta). The CZG01 tail tends to zero when (p>1+1/\theta). A nonzero limiting test integral therefore forces a positive lower bound on the finite near-carrier weighted zero sum. The local count is (O(L)), so at least one zero must have attenuation at least a constant times (1/L), giving (2a(1-\beta)\le\log L+O(1)). The three stated consequences follow from (\tau=\lim L/e^a) and the definitions of (\delta=1-\beta) and (\beta-1/2=1/2-\delta).

For the global consequence, (B=\sup|\Re\rho-1/2|<1/2) implies (1-\Re\rho\ge1/2-B). Inserting this into CZG01's global weighted estimate gives the displayed exponential attenuation and the stated necessary carrier scale for a nonzero fixed-test limit.

## Limits

- This is a fixed-test and fixed-exponent argument; constants are not uniform in the test, (p), or \(\theta\).
- The conclusions are weak-limit/necessary-geometry statements. They do not exclude carriers above the stated scales or prove an ordinary spectral upper bound.
- The zero-free region, local zero count, CZG01 identity, and TPH characterization were not independently sourced or formally verified here.
- No numerical or formal computation; no actual anomalous state, observed off-line zero, RH conclusion, or priority claim.
