# CAC03 nested-cell Schur diagnostic audit

- ID: CAC03-AUDIT-W01
- Status: READY_FOR_REVIEW
- Starting commit: `a5d8506` (`Execute nested-cell Schur diagnostic with certified arithmetic matrices`)
- Scope: independent audit and Node replay of `experiments/cac03-cell-schur-witness.js`.

## Result

Ran `node experiments/cac03-cell-schur-witness.js` in Node.js 24.22.3. It exited successfully and returned interval outputs with the same candidate-vector witnesses. The certified Rayleigh intervals for the finite matrix (H-\delta^{-1}G^*G) were:

| Cells (m) | Interval |
|---:|---:|
| 24 | `[-114.168641566227915062, -114.166998869600016353]` |
| 32 | `[-0.177579855256989922, -0.177563408736821910]` |
| 64 | `[-0.009488472548070837, -0.009479588987787101]` |
| 128 | `[-0.001240694410948496, -0.001232671582042220]` |

These certify that the conservative CAC02 lower comparison (H-\delta^{-1}R^*R) has a negative direction for each tested (m=24,32,64,128), using the finite nested-cell projection described below. This means that this *sufficient lower test* is inconclusive at those witnesses; it is not evidence that the true Schur matrix or restored operator has a negative direction.

## Projection and comparison audit

For the (2m)-cell compression, fold adjacent fine-cell indicators into the (m)-cell averages and their orthogonal differences. The script's (H) is the coarse Ritz matrix. Its matrix (G) is the coarse-to-fine-difference coupling, up to a global sign (the sign cancels in (G^*G)). Since every fine-cell difference lies in the complement of the (m)-cell averages, (G^*G\le R^*R) as quadratic forms. With the CAC01 complement lower bound (D\ge\delta I), the exact Schur matrix satisfies
\[
 S=H-R^*D^{-1}R\ \ge\ H-\delta^{-1}R^*R\ \le\ H-\delta^{-1}G^*G.
\]
Thus a negative Rayleigh quotient for the finite matrix (H-\delta^{-1}G^*G) implies that the conservative CAC02 lower comparison also has a negative direction. It does not imply (S<0): only the lower comparison is shown to fail as a positivity certificate. The nested projection is a lower bound on residual energy, which is enough for this *negative witness* about the lower comparison, but it could not certify that comparison positive.

The Jacobi rotation in `approxMin` is floating-point and used only to propose a vector. The code quantizes that vector to integer weights, then encloses its norm, Ritz quadratic value, projected residual norm and comparison value with outward-rounded intervals. Consequently the certified conclusion is about the selected vector, not about the numerical eigenvalue returned by Jacobi. The Toeplitz cell compression is formed from the singular-model diagonal/off-diagonal integrals, the (2\cosh-j) regular-plus-pole kernel, and the exact triangular overlap of the prime-2 shifts. The complementary fine-difference block is the stated (G), not the full infinite-dimensional residual.

## Evidence and limits

- Reproduction command: `node experiments/cac03-cell-schur-witness.js`
- Exact replay output: `/tmp/cac03-audit-output.json` in the execution workspace (summary values are also directly printed by the command).
- Checked: matrix-folding signs up to the harmless global sign in (G); complement projection ordering; outward interval witness logic; arithmetic reproduction.
- Not checked: every BigInt interval primitive independently, a complete spectral Schur solve, a positive certificate, an actual negative restored eigenvalue, or an RH conclusion.

The computed witness demonstrates that the simple (\delta^{-1}R^*R) lower bound is too crude for these partitions. It does not show that a refined approximate complement solve from CAC02 cannot succeed.
