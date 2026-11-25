# STS02-W01 — Independent Laplace-inversion audit

Status: READY_FOR_LEAD_REVIEW

## Scope and conclusion

I checked the elementary exponential decomposition of the STS01 parity kernel, the boundary-error convergence, the Laplace transform's meromorphic continuation, pole residues, inverse multiplicity formula, and the scalar RH-equivalent boundedness argument. The signs and constants agree in the checked scope; I found no discrepancy.

The transform acts on the exact parity trace of the generalized Sobolev operator, not the ordinary L2 spectrum. It uses STS01's trace-class identity, the zeta symmetries, and the classical local zero count. No trace data or zeros are computed here, and analytic continuation of noisy finite observations is not supplied.

## Checks

- The boundary correction is bounded by \(C e^{-2a}|1+z^2|^{-2}\), since \(|d|\le1/2\), \(|\cos(2az)|\le e^a\), \(\coth(2a)-1=O(e^{-4a})\), and \(\operatorname{csch}(2a)=O(e^{-2a})\). The lower bound \(|1+z^2|\ge u^2+1/4\) follows from \(|1+z^2|^2=(u^2+(1-d)^2)(u^2+(1+d)^2)\). The local count makes the summed denominator series finite, so the aggregate correction is \(O(e^{-2a})\).
- Expanding the sine and cosine gives coefficients \(-i/[2z(1+iz)^2]\) at \(e^{2iza}\) and \(i/[2z(1-iz)^2]\) at \(e^{-2iza}\). Reindexing the first term by \(z\mapsto-z\) makes both contributions equal at \(e^{-2iza}\), yielding \(C_z=i/[z(1-iz)^2]\) and \(\lambda_z=-2iz\). Substitution of \(z=i\lambda_z/2\) gives \(C_z=2/[\lambda_z(1+\lambda_z/2)^2]\). The terms are absolutely summable by their \(O(|u|^{-3})\) coefficient decay and local zero count.
- For \(\Re s>1\), termwise integration is justified by \(\sum m_z|C_z|<\infty\) and \(|\Re\lambda_z|\le1\). The correction Laplace transform is analytic for \(\Re s>-2\). On compact sets away from the discrete ordinate poles, the rational-exponential series converges normally, giving a meromorphic continuation with simple residue \(m_zC_z\) at each \(s=\lambda_z\). Since the map \(z\mapsto-2iz\) is injective and \(C_z\ne0\), distinct ordinates cannot cancel; multiplicity is carried by the residue. Rearranging yields \(m_z=(\lambda_z/2)(1+\lambda_z/2)^2\operatorname{Res}H\).
- The coefficient sum gives the upper scalar growth bound \(\limsup a^{-1}\log(1+|P(a)|)\le2B\). If \(B>0\) and the limsup were smaller, the Laplace integral would be analytic on a half-plane extending past a pole with real part arbitrarily close to \(2B\), contradicting the meromorphic continuation. When \(B=0\), nonnegativity of the logarithm supplies the reverse bound. Similarly, bounded \(P\) implies analyticity on \(\Re s>0\); any off-line zero gives a nonzero-residue pole there, whereas RH makes all exponentials purely oscillatory with absolutely summable coefficients.
- The maximal-scale expansion follows by dominated convergence of the absolutely summable coefficients after multiplying by \(e^{-2Ba}\). If the supremum is unattained, no term has real part exactly \(2B\), and the scaled sum tends to zero; this is compatible with a limsup exponential rate determined by ordinates approaching the supremum. An infinite attained maximal set remains manageable because the coefficient series is absolutely summable.

## Limitations

No numerical transform, spectral trace, or external-source check was performed. The inverse is an exact-data identifiability theorem, not a stable finite-data method. It does not compute the poles, prove boundedness, establish RH, or assert ordinary-spectrum equivalence. The underlying STS01 trace identity remains an imported candidate pending lead review. No human review, formal proof, or novelty claim is made.
