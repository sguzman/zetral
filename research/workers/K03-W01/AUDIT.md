# K03-W01 — Independent K03 derivation audit

Status: READY_FOR_LEAD_REVIEW

## Scope and conclusion

I audited the algebraic chain in `research/kernels/K03-entire-phase-characteristic.md`: the common normalization of the boundary characteristic, its resolvent-factor expression, the uniform phase limit, and the invertible-phase and phase-zero regularized determinant formulas. I found no algebraic discrepancy within that scope.

K01/K02 identities, the source boundary formula, the rank-one inverse formula from L01, RH, and the compactness / Hilbert–Schmidt inputs remain imported assumptions. This is not a fresh primary-source audit, a full proof of those inputs, human review, formal verification, or a novelty assessment.

## Checks

Let \(\phi=\theta/2\). The two-variable kernel limit at \((-i,z)\) and \((i,z)\) is \(M_a^2\Delta(i)\Delta(z)\) in both terms. Substitution in the source boundary formula gives

\[
(z-i)+e^{2i\phi}(z+i)
=2e^{i\phi}(z\cos\phi-\sin\phi).
\]
Since \(b_a/M_a^2\to\Delta(i)>0\), division by \(2e^{i\phi}b_a\) yields the stated common limit, uniformly in \(\theta\) because the remaining trigonometric coefficients are bounded. At \(\theta=\pi\), \(F=-P_a\); at \(\theta=0\), \(F(0)=0\) with the stated sign for the limiting linear factor.

For the resolvent expression, use \(R(\pm i)=(I\pm iC)H\), \(H=(I+C^2)^{-1}\), and the conjugate-linear second slot to move \(R(\bar z)\) across the inner product as \(R(z)\). The coefficients from the two terms combine to

\[
H\big[(z\cos\phi-\sin\phi)I+(z\sin\phi+\cos\phi)C\big]R(z).
\]
The cosine part satisfies \(H(zI+C)R(z)=zR(z)+CH\), while the sine part is \(-H(I-zC)R(z)=-H\). Reflection gives \(q(CH e_a,e_a)=0\), and \(q(H e_a,e_a)=1/\eta_a\). Thus the scalar reduces to \(z\cos\phi\,\eta_a m_a(z)-\sin\phi\), with the sign and normalization in (K03.2). This also yields \(F_{a,0}(0)=0\), \(F'_{a,0}(0)=\eta_a\), and \(F_{a,\pi}=-P_a\).

For (K03.3), away from \(\Gamma\), the resolvent identity gives \(m_a(z)-1=z^2q(R_a(z)C_ae_a,C_ae_a)\) because the linear moment vanishes by reflection. The resulting \(O_K(d_a^2)\) bound extends across \(\Gamma\) by applying the maximum modulus principle to the entire removable product \(P_a(\eta_am_a-1)\). This is an absolute error; it does not imply a relative bound at zeros.

For the determinant identities, the finite-dimensional rank-one determinant lemma gives the factor \((1-zbm_a(z))\), and the regularizing exponential contributes \(e^{zb}\) when \(\mathrm{tr}(C_a)=0\) and \(\mathrm{tr}(C_a+bQ)=b\). This matches (K03.4) after substituting \(b=\eta_a\cot\phi\) and (K03.2). At phase zero, the cofactor identity removes the \(e_a\) coordinate; the compression \(K_a^{\rm loc}\) and \(C_a\) both have zero trace by reflection, so no additional trace exponential appears in (K03.5). The Hilbert–Schmidt approximation and continuity argument is needed to pass these finite-dimensional formulas to the local operators; I did not independently establish those compactness premises.

## Limitations

No new numerical computation was needed: the checked steps are exact algebra under the stated operator identities. I did not rederive K01/K02, Suzuki's boundary identity, L01, the Hilbert–Schmidt approximation hypotheses, or the full source conventions. The campaign document's primary-source retrieval is a reported import, not independently repeated here. I make no formal, human-review, or originality claim.
