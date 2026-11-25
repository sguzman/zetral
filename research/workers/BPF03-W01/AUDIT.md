# BPF03-W01 — Independent deviation-hierarchy audit

Status: READY_FOR_LEAD_REVIEW

## Scope and conclusion

I audited the finite-dimensional multiscale pencil reduction and its transfer statements in `research/positivity/BPF03-deviation-hierarchy.md`. The block scaling, two Schur complements, effective projected Gram, Cauchy attenuation formula, and product identities are algebraically consistent in the checked scope. I found no discrepancy in these calculations.

The conclusions for the actual Weil operator depend on BPF01's endpoint factorization/minmax transfer. The infinite-remainder conclusion additionally depends on the cited GSG03 derivative estimate and the explicit weighted local-density hypothesis. I did not independently prove those imports or rederive their form-domain extensions. This is an AI-assisted scoped audit, not human review, formal verification, or a novelty claim.

## Finite hierarchy checks

Let \(G=E^*E\) and \(D_a=\operatorname{diag}_k(t_kH_k)\). On \(\operatorname{ran}E\), the isometry \(EG^{-1/2}\) gives the Hermitian matrix \(G^{1/2}D_aG^{1/2}\). The pencil for eigenvalue \(t_kx\) is congruent to \(D_a/t_k-xG^{-1}\), so its negative inertia counts eigenvalues below \(t_kx\). For faster groups, the leading diagonal block has inverse norm \(O(\max_{i<k}t_k/t_i)=o(1)\); all off-diagonal metric blocks are bounded, so its Schur correction is \(o(1)\). Slower diagonal blocks tend to zero, and their \(-xK_{LL}\) block is positive for \(x<0\). Eliminating both blocks leaves \(H_k-xK_{\rm eff}+o(1)\), where \(K_{\rm eff}=S_k^{-1}\). Congruence by \(S_k^{1/2}\) gives \(F_k-xI+o(1)\), with \(F_k=S_k^{1/2}H_kS_k^{1/2}\). This yields the claimed group count and eigenvalue-depth comparison by inertia bracketing; no simplicity assumption is needed.

The block-inverse identity for \(K_{\rm eff}\) is the usual nested Schur-complement identity. The resulting \(S_k=G_{CC}-G_{CH}G_{HH}^{-1}G_{HC}\) is the Gram matrix after projection away from faster groups, which explains why slower groups do not enter the leading metric at scale \(t_k\).

For the left Cauchy Gram \(G_{ij}=(\bar\alpha_i+\alpha_j)^{-1}\), eliminating one faster profile \(h\) gives the factor \((\bar\alpha_i-\bar\alpha_h)(\alpha_j-\alpha_h)/[(\bar\alpha_i+\alpha_j)(\bar\alpha_i+\alpha_h)(\alpha_j+\bar\alpha_h)]\). This is exactly the update \(\overline{\beta_i}\beta_j/(\bar\alpha_i+\alpha_j)\) with \(\beta_j=(\alpha_j-\alpha_h)/(\alpha_j+\bar\alpha_h)\). Iterating produces (3); all factors are nonzero for distinct exponents with positive real parts. The left and right conditional Grams are conjugates, so singular-value products multiply to \(\det S_{L,k}\prod_{j\in C}m_j\). The Schur determinant chain then gives the invariant product in (4).

## Transfer and infinite-remainder scope

For finite selected pairs, form order gives \(\lambda_j(A_a)\ge\lambda_j(O_a)\) because the real-zero contribution is nonnegative. The upper minmax bound uses the first \(j\) negative eigenvectors of \(O_a\) as a trial space and the stated uniform \(O(1)\) real-form bound there. Since every selected depth grows like \(e^{2d^{(k)}a}\), this additive error vanishes after scale normalization. This implication is sound conditional on the BPF01 trial-space estimates and shared closed-form domain.

For the infinite remainder, the document explicitly needs more than the ordinary local zero count: it assumes (5), invokes the GSG03 strip derivative estimate for a lower form bound, and uses bounded variation plus local zero counting for the selected trial-space upper bound. The stated errors vanish relative to selected scales because \(d_{\min}>b\). I found no contradiction in these conditional inequalities, but did not independently verify the imported derivative estimate, density-to-form bound, or approximation/domain argument. The infinite extension should therefore remain qualified by those hypotheses and imports.

## Limitations

No numerical experiment or external source retrieval was used. This audit covers the algebraic hierarchy and conditional transfer logic, not the original Weil-form derivation, BPF01 proof, GSG03 estimate, zeta zero hypotheses, or the full form-core arguments. No actual off-line zero is assumed to exist.
