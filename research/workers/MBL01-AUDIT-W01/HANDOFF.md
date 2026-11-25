# MBL01 independent convergence audit

- ID: MBL01-AUDIT-W01
- Status: READY_FOR_REVIEW
- Starting commit: `b89a9bb` (`Audit cell-complement investigation and identify uniform coupling direction`)
- Scope: audit of the monotone lower-operator eigenvalue convergence and strict fixed-window completeness argument.

## Checks

1. **Uniform perturbation and Schur enclosure.** With (B_J=D+E_J), (B=D+E), and ​\(\|E_J\|,\|E\|\le M), the (D)-diagonal cross block between (Q_N) and (Q_N^\perp) vanishes, so \(\|Q_N^\perp B_JQ_N\|\le M\). The complementary diagonal block is at least (d_N=\alpha((N+1)\pi/h)-M). At every (z\le U_k<d_N), the Schur loss is therefore at most (M^2/(d_N-U_k)=e_N). For (z=\lambda_k(H_{J,N})-e_N), the lower Schur matrix is (H_{J,N}-\lambda_k(H_{J,N})I), with at most (k-1) strictly negative eigenvalues; hence ​\(\lambda_k(B_J)\ge\lambda_k(H_{J,N})-e_N\). The ordinary Ritz upper bound has the correct direction.

2. **Projected rate tail.** In one cell the two exponential columns have total squared projection onto Neumann modes (0,\dots,N) at most (2(1+2N)/(hr^2)). Columns have disjoint cell supports, so this bounds the operator norm square of (Q_NU_r) without an extra factor of the cell count. Combining with (\|C_r\|\le2/(1-e^{-rh})) gives the per-rate bound (4(1+2N)/(h r^2(1-e^{-rh}))). Monotone integral comparison of (r_j=2j+1/2) yields the stated (b_{J,N}). This is a bound after projection; it makes no claim that the full operator-norm rate tail vanishes.

3. **Eigenvalue convergence.** (B_J\le B_{J+1}\le B) as forms, and (H_{\infty,N}-H_{J,N}\) is positive with norm at most (b_{J,N}). Ritz plus the same Schur loss gives
\[
0\le\lambda_k(B)-\lambda_k(B_J)\le e_N+b_{J,N}.
\]
At fixed (N), (b_{J,N}\to0); then (e_N\to0) as (N\to\infty), proving fixed-index monotone convergence including multiplicity. The order of choices (first large (N), then sufficiently large (J)) is essential.

4. **Strict-sign completeness.** If (\lambda_1(B)>0), monotone convergence gives a finite (J) with (\lambda_1(B_J)>0). For that (J), choose (N) so (e_N<\lambda_1(B_J)); since (\lambda_1(H_{J,N})\ge\lambda_1(B_J)), the finite lower enclosure becomes strictly positive. If (\lambda_1(B)<0), finite Neumann spans are a form core for (D) and hence for (B), whose form differs by a bounded perturbation; a finite trial can retain a strict negative Rayleigh sign. At zero, no strict sign decision is promised.

## Limits

No algebraic error was found. The constants (M), (e_N), and (b_{J,N}) can be very large or decay slowly; this establishes finite-certificate completeness in principle for a strictly signed fixed-window operator, not practical feasibility. I did not audit MBL02 matrix implementation, independently verify the imported DNB02 Carleman bound, or prove any actual window has strictly positive spectrum.
