# BFA02 independent remainder and replay audit

2026-11-25. I checked the constant-trial tail decomposition in `research/positivity/BFA02-explicit-accelerated-first-moment.md` and ran `node experiments/bfa02-accelerated-first-moment.js` from a separate Node.js 24.22.3 process at main commit `0aa7615`. The process exited successfully and returned every displayed interval endpoint unchanged. This replay verifies reproducibility, not the implementation of every outward-rounding branch.

## Remainder check

For the length-one constant trial, (4\sin^2(\pi n/4)/(\pi^2n^2)=2(1-\cos(n\pi/2))/(\pi^2n^2)); pairing the positive and negative Fourier modes gives the stated prefactor (4/\pi^2). At (t_n=\pi n/2), the leading symbol is (\log(n/4)-2b\cos(n\theta_p)), with (\theta_p=\pi\log2/2). The nonoscillatory log sum differs from its integral by at most (f(N)=\log(N/4)/N^2). Geometric partial sums followed by Abel summation give the listed bounds 2, 3, 6, and 2 for the four nonzero angles. Product-to-sum for the prime term then contributes at most 7/N² inside the common (4/\pi^2) factor.

The symbol remainder estimate ​(|e(t)|\le2/t^2+10/t), with (t_n=\pi n/2), yields the text's additional bound (16/(3\pi^2N^3)+20/(\pi N^2)\le N^{-3}+7N^{-2}) inside that factor. The archimedean and compact pole corrections are (O(1/t)) by integration by parts and monotonicity/bounded variation, so the same envelope applies to (T) and (A). These checks recover the stated total (3\log(N/4)+14+1/N) numerator.

## Executed consequence and limits

The replay confirms the accelerated restored first-moment interval is strictly positive at (N=16) and (N=32), and inconclusive at (N=8). This establishes positivity of the quadratic form on this one fixed trial vector, conditional on the analytic remainder derivation; it does not establish positivity of the operator or a spectral lower bound. I did not independently verify the DLMF remainder citation, reimplement the interval arithmetic, or certify any second-moment tail. No RH or ordinary full-spectrum conclusion follows.
