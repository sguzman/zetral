# BPF04-W01 — Independent inverse-trace audit

Status: READY_FOR_LEAD_REVIEW

## Scope and conclusion

I checked the exact finite-group parity trace calculation and the asymptotic Cesàro Fourier recovery in `research/positivity/BPF04-audit-inverse-trace.md`. The Fourier sign, the projected Cauchy coefficient, and the multiplicity recovery formula are consistent in the stated conventions. I found no discrepancy in this scope.

This result is conditional on the BPF01–03 operator and parity asymptotics, the finite off-critical-line pair hypothesis (or the separated-top-set hypothesis), and exact knowledge of parity-resolved eigenvalue curves for arbitrarily large window parameter. It gives an identifiability theorem, not a finite-data recovery procedure or evidence for any actual off-line zero.

## Trace coefficient and sign

With inner product linear in the first slot, the rank-one convention \(x\otimes y:f\mapsto\langle f,y\rangle x\) gives \(\operatorname{tr}(x\otimes y)=\langle x,y\rangle\). For the projected current profile \(\phi_u\), BPF03's Gram entry is
\[
\langle\phi_{-u},\phi_u\rangle
=\frac{\overline{\beta_{-u}}\beta_u}{\overline{\alpha_{-u}}+\alpha_u}
=\frac{\beta_u^2}{2d_k+2iu},
\]
using \(\beta_{-u}=\overline{\beta_u}\), \(\alpha_u=d_k+iu\). Therefore
\[
\operatorname{tr}T_k(a)
=\sum_{u\in J_k}\frac{m_u\beta_u^2}{2(d_k+iu)}e^{2iua}.
\]
The sign in the Fourier mode is positive: the coefficient at frequency \(2u\) is exactly \(c_u=m_u\beta_u^2/[2(d_k+iu)]\). Each coefficient is nonzero because \(m_u>0\), the ordinates are finite and \(\beta_u\ne0\) by the positive-real-part Cauchy factors.

The even-sector negative depths are the magnitudes of negative eigenvalues of \(T_k\), while the odd-sector negative depths are its positive eigenvalues. Their signed sum difference (odd minus even) is \(\operatorname{tr}T_k\), so the chosen parity subtraction has the stated sign. Since every member of a deviation group has the same rate and uniform positive bounded prefactors, the ordered eigenvalue curves can be grouped by their common logarithmic growth rate; summing the whole group removes crossings within the group. The inherited uniform \(o(1)\) spectral errors remain \(o(1)\) after finite summation and scaling.

## Cesàro recovery

For \(f_k(a)=\sum_{u\in J_k}c_ue^{2iua}+r(a)\) with \(r(a)\to0\), its mean against \(e^{-i\omega a}\) over \([a_0,a_0+T]\) has the stated limit: each unequal frequency contributes at most \(2/(T|2u-\omega|)\), and the mean of the bounded tail \(r(a)e^{-i\omega a}\) tends to zero by splitting a fixed initial interval from the eventual uniformly small tail. Thus nonzero coefficients identify exactly the signed frequencies in a finite group, without rational independence. Once faster groups are recovered, \(\beta_u\) is known, and rearrangement gives
\[
m_u=\frac{2(d_k+iu)C_k(2u)}{\beta_u^2}.
\]
Under the exact model this is the original positive integer multiplicity; it is not a rule for rounding noisy finite estimates. The fastest group has \(\beta_u=1\). The separated-top-set version recovers only groups whose rates exceed the specified cutoff \(b\); the BPF03 bound on the next depth supplies the stated remainder-rate cap.

## Limitations

No numerical experiment or external source retrieval was needed for the finite algebra. I did not independently prove the BPF01–03 asymptotics, the parity-restricted form-domain comparison, or the BPF03 infinite-remainder estimates. Cesàro averages require complete exact spectral curves at unbounded windows; this audit does not establish practical finite-window stability. No actual zero or RH conclusion follows.
