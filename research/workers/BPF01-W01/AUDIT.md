# BPF01-W01 — Independent endpoint-factorization audit

Status: READY_FOR_LEAD_REVIEW

## Scope and conclusion

I checked the endpoint profiles and their phases, the operator-norm approximation, finite-matrix singular-value bounds, bounded-variation trial estimate for the positive remainder, leading minmax transfer, and the projection-concentration argument. The scale and sign conventions are internally consistent; I found no discrepancy in the checked scope.

The argument is conditional on the paired Weil-form identity, compact smooth form core, local zero count, and finite nonempty off-critical-line pair set. I did not independently reprove these imports or retrieve primary sources. No actual off-line zero is assumed or observed.

## Checks

- With \(e_z(x)=e^{-(d+iu)x}\), the left endpoint at \(x=-a+s\) gives \(e^{-Ba}e_z(-a+s)=e^{iua}e^{-(B+iu)s}\) for \(d=B\). The conjugate zero on the right gives phase \(e^{-iua}\) and profile \(e^{-(B-iu)s}\). Under the stated linear-first tensor convention, the first cross rank-one term therefore has phase \(e^{2iua}\), agreeing with (1). Opposite-half pieces and omitted half-line tails have norm \(O(e^{-Ba})\); subordinate operator terms scale as \(e^{-2(B-b)a}\).
- The endpoint Cauchy Gram matrices are positive definite for distinct frequencies; the synthesis isometry reduces the nonzero singular spectrum to \(G_L^{1/2}M_aG_R^{1/2}\). Its minimum singular value is bounded below by \(\min_jm_j\sqrt{\lambda_{min}(G_L)\lambda_{min}(G_R)}\), uniformly in phase. Thus the negative eigenvalues of the block operator stay separated from zero.
- The endpoint trial space has uniformly conditioned coefficient/L2 norms because the truncated Gram matrices converge to the positive half-line Grams. Finite exponential sums on the two halves have bounded L1 norm and total variation, including the midpoint/end jumps. Integration by parts gives \(|F[f](t)|\le C/(1+|t|)\). With the imported local zero count, the real-ordinate positive sum is finite and bounded on this fixed-dimensional space. Trimming then mollifying preserves uniform variation, and pointwise Fourier convergence plus the summable weighted majorant justifies form-core approximation. This proves only the stated trial-space bound, not global boundedness.
- For the leading trial subspace, the compressed endpoint vectors differ from their half-line profiles by \(O(e^{-Ba})\), and their Gram distortion is quadratic. The Rayleigh quotient error is therefore \(O(\delta_a+e^{-Ba}+e^{-2Ba})\), absorbed in the displayed \(\delta_a\). The reverse minmax inequality uses global form order \(A_a\ge O_a\). The gap \(c_*>0\) isolates the first \(r\) negative eigenvalues; the next scaled eigenvalue is bounded below by \(-\delta_a\).
- In the concentration argument, summing the leading scaled eigenvalues bounds \(\operatorname{tr}(D_aP_a)\) above by \(-\sum_j\sigma_j+O(\delta_a)\), while \(D_a\ge-\sum_j\sigma_j(y_j\otimes y_j)\). Since \(\sigma_j\ge c_*>0\) and both projections have rank \(r\), this gives \(\|P_a-\Pi_a^-\|_{HS}^2=O(\delta_a)\), including at eigenvalue crossings.

## Limitations

No numerical experiment was needed. The imported positivity/core facts and the full Weil-form derivation were not independently established here. I did not check any subordinate-scale asymptotic (BPF03 handles that separately), or assert convergence of individual eigenvectors at degeneracies. This is not formal verification, human review, or a novelty claim.
