# FBC04 — Full-boundary audit and cancellation pivot

2026-11-25. Scoped AI audit of the FBC02 scalar enclosures and FBC03 exploratory scan. No independent human/formal review, RH assumption, actual negative restored eigenvalue, or priority claim.

## Audit

The FBC02 nonexponential tail bounds follow from monotonicity on the rate mesh r_j=a+2j: a right-endpoint sum is bounded below by half the integral and above by its first term plus half the integral. The exponential tail is bounded by factoring out e^{-ah}/(a²+x) and summing the remaining geometric progression. For the diagonal series, r²/(r²+x)² is decreasing once r>=sqrt(x); the chosen J satisfies this condition for all reported modes. The diagonal tail uses its own positive summand rather than subtracting two separately rounded F_eta values. The partial-fraction off-diagonal identity is algebraically correct for distinct squared frequencies; direct positive summation remains the safe fallback near coincident frequencies.

After correcting the rate-tail start to r_J=2J+1/2, the independent 500,000-term float summation plus its own integral remainder lies inside selected F_eta and K_nn intervals. This is a plausibility check only; the certified enclosures come from the BigInt interval source. The first written raw endpoints were regenerated after that correction and are the ones now in the committed result file.

The FBC03 scan does not certify a new window. With W_b equal to the low four modes and W_p the first eight same-parity modes, its even finite Schur minimum is small and the smooth/prime residual tail crosses zero at h=4/5, 0.85 and 0.9. The odd comparison passes numerically. This does not contradict LPE03's h=4/5 certificate: the chosen full-boundary subspace and float-selected trial are different and more conservative. Increasing W_b made the ordinary double solve ill-conditioned; that is a computation limitation, not evidence against the exact compression.

## Next useful direction

The structural compression is exact, but a generic positive-column inverse trial does not automatically exploit it. The high-mode residual has a nonoscillatory boundary n^-1 term and an oscillatory prime n^-1 term. For fixed selected columns, each can be bounded separately, but that loses cancellation. Optimize rational trial columns against the signed combined leading coefficient before the interval stage, then certify the resulting coefficient and smooth remainder separately. A smaller, better-conditioned W_b or a basis adapted to the nearly dependent K_W Gram may be more practical than adding many Neumann modes. Keep LPE03's h=4/5 interval certificate as the current comparison point; no FBC result here improves it.

No reason to alter the Hilbert–Pólya objective follows from these positivity calculations. The full-boundary scalar enclosures are a reusable component, while a rigorous full-boundary positivity test remains open.

## Parity-aware combined leading-tail bound

There is a sharper way to carry the leading coefficients into the next interval attempt. For one low column, write the high residual in a fixed parity as
\[
r_n=\frac{A+B\sin(n\theta)}{n}+e_n,\qquad |e_n|\le C_2n^{-2},\qquad \theta=\pi\log(2)/h.
\]
Here A is the nonoscillatory full-boundary amplitude, B is the signed first-prime amplitude from LPE02, and C_2 includes both smooth remainders. Let N be the first index greater than M in the chosen parity and let
\[
S_p(N)=N^{-2}+(2N)^{-1},\quad S_3(N)=N^{-3}+(4N^2)^{-1},\quad S_4(N)=N^{-4}+(6N^3)^{-1}.
\]
Integral comparison on the step-two parity lattice gives upper bounds for the sums of n^-2, n^-3 and n^-4, respectively. Abel summation and the geometric partial-sum bounds give
\[
\left|\sum_{n\equiv p(2),\,n\ge N}\frac{\sin(n\theta)}{n^2}\right|\le\frac{1}{N^2|\sin\theta|},\qquad
\left|\sum_{n\equiv p(2),\,n\ge N}\frac{\cos(2n\theta)}{n^2}\right|\le\frac{1}{N^2|\sin(2\theta)|},
\]
when the denominators are nonzero. Expanding the square and using sin²=(1-cos(2·))/2 gives
\[
\sum_{n\equiv p(2),\,n\ge N}|r_n|^2\le
 A^2S_p+\frac{B^2}{2}S_p+
 \frac{2|AB|}{N^2|\sin\theta|}+\frac{B^2}{2N^2|\sin(2\theta)|}
 +2(|A|+|B|)C_2S_3+C_2^2S_4.
\]
Divide by the positive increasing lower weight g_(M+1) to obtain a weighted tail bound. At resonant phases where a sine denominator vanishes, use the coarser nonoscillatory S_p bound for that term. This keeps the boundary and prime leading terms combined before absolute values and can improve the triangle estimate; it does not guarantee cancellation. No numerical certificate from this refinement is claimed yet.
