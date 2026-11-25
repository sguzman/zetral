# FBC04 — Full-boundary audit and cancellation pivot

2026-11-25. Scoped AI audit of the FBC02 scalar enclosures and FBC03 exploratory scan. No independent human/formal review, RH assumption, actual negative restored eigenvalue, or priority claim.

## Audit

The FBC02 nonexponential tail bounds follow from monotonicity on the rate mesh r_j=a+2j: a right-endpoint sum is bounded below by half the integral and above by its first term plus half the integral. The exponential tail is bounded by factoring out e^{-ah}/(a²+x) and summing the remaining geometric progression. For the diagonal series, r²/(r²+x)² is decreasing once r>=sqrt(x); the chosen J satisfies this condition for all reported modes. The diagonal tail uses its own positive summand rather than subtracting two separately rounded F_eta values. The partial-fraction off-diagonal identity is algebraically correct for distinct squared frequencies; direct positive summation remains the safe fallback near coincident frequencies.

After correcting the rate-tail start to r_J=2J+1/2, the independent 500,000-term float summation plus its own integral remainder lies inside selected F_eta and K_nn intervals. This is a plausibility check only; the certified enclosures come from the BigInt interval source. The first written raw endpoints were regenerated after that correction and are the ones now in the committed result file.

The FBC03 scan does not certify a new window. With W_b equal to the low four modes and W_p the first eight same-parity modes, its even finite Schur minimum is small and the smooth/prime residual tail crosses zero at h=4/5, 0.85 and 0.9. The odd comparison passes numerically. This does not contradict LPE03's h=4/5 certificate: the chosen full-boundary subspace and float-selected trial are different and more conservative. Increasing W_b made the ordinary double solve ill-conditioned; that is a computation limitation, not evidence against the exact compression.

## Next useful direction

The structural compression is exact, but a generic positive-column inverse trial does not automatically exploit it. The high-mode residual has a nonoscillatory boundary n^-1 term and an oscillatory prime n^-1 term. For fixed selected columns, each can be bounded separately, but that loses cancellation. Optimize rational trial columns against the signed combined leading coefficient before the interval stage, then certify the resulting coefficient and smooth remainder separately. A smaller, better-conditioned W_b or a basis adapted to the nearly dependent K_W Gram may be more practical than adding many Neumann modes. Keep LPE03's h=4/5 interval certificate as the current comparison point; no FBC result here improves it.

No reason to alter the Hilbert–Pólya objective follows from these positivity calculations. The full-boundary scalar enclosures are a reusable component, while a rigorous full-boundary positivity test remains open.
