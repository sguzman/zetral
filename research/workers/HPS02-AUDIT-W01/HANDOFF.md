# HPS02 independent audit

Status: READY_FOR_REVIEW

Scope: audit of the finite-channel minmax transfer, reflection-parity construction, and common-sequence saturation conclusion in `research/positivity/HPS02-indexed-harmonic-saturation.md`. HPS01, TPH03, and PBC02 are treated as imported results; this is not source or formal verification.

## Findings

The finite-channel dimension transfer is valid under HPS01's stated joint Gram and polarized-form convergence. For a finite selection of singular values strictly above \(\tau+c\), compactness gives a positive margin; fixed smooth approximations preserve it. The limiting Gram is positive definite, so for sufficiently large windows the actual trial vectors span the sum of the selected dimensions. Minmax yields the claimed ordinary lower bound. Taking thresholds below the supremum of the countable multiset handles the case where no decreasing enumeration is specified.

The parity construction also appears sound under the reflection invariance and cross-channel orthogonality in HPS01. Reflection takes a positive harmonic channel to its negative harmonic partner with swapped endpoint profiles. The even and odd combinations have the original limiting Gram and Rayleigh matrices because the cross-sign terms vanish; distinct absolute harmonics remain orthogonal. Thus each selected positive harmonic contributes the selected number of negative directions to each parity sector.

For saturation, an attaining \((\phi,\tau)=(1,0)\) sequence has normalized total positive mass tending to (2\), and its complex mass tends to (2\). The unit-circle mean-square identity implies weighted (L^2\) convergence of the prime phases to (1\); for every fixed integer (k\), \(|z^k-1|\le |k||z-1|\) gives the same result for the (k\)-th harmonic. Cauchy–Schwarz then gives total-variation convergence of each fixed harmonic measure to the untwisted positive measure. Since all fixed harmonics use the same base sequence, finite-channel minmax gives every fixed ordinary and parity index along that common sequence. The global coarse upper bound then squeezes the scaled depths to (1\).

## Limits

- No converse for indexed coefficients is established.
- The parity conclusion depends on exact reflection symmetry of the ordinary form and the HPS01 cross-channel limits.
- The final assertion about infinitely many off-line pairs depends on the cited GSG04 global negative-index result; I did not independently inspect that input.
- No actual saturation sequence, numerical spectrum, off-line zero, RH conclusion, or priority claim.
- No numerical or formal verification was performed.
