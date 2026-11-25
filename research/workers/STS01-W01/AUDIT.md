# STS01-W01 — Independent Sobolev trace audit

Status: READY_FOR_LEAD_REVIEW

## Scope and conclusion

I checked the Sobolev evaluation bound, trace-norm summability, rank-one series convention, reflection trace, Green-function solution, and the closed per-ordinate formula. The factors and signs are consistent in this scope; I found no discrepancy.

The identity of the Sobolev quadratic form with the paired Weil form on the test core, the classical local zero count, and ordinary form-core statements remain imports. The resulting operator is in the Sobolev metric; its nonzero eigenvalues are not asserted to be the ordinary L2 spectrum. No actual off-line zero or RH conclusion is used.

## Checks

- Integration by parts for \(f\in H_0^1(-a,a)\) gives \(\mathcal F(f')(z)=-iz\mathcal Ff(z)\). Cauchy–Schwarz with \(|e^{izx}|=e^{-dx}\) yields both \(|\mathcal Ff(z)|^2\le I_a(d)\|f\|_2^2\) and \(|z|^2|\mathcal Ff(z)|^2\le I_a(d)\|f'\|_2^2\); summing proves the stated evaluation norm bound. Since \(I_a(d)=I_a(-d)\), the two Riesz norms at \(z\) and \(\bar z\) give rank-one trace norm at most \(I_a(d)/(1+|z|^2)\). The strip bound and local count make \(\sum_z m_z\log(2+|u|)/(1+u^2)\) finite, so the operator series converges absolutely in trace norm.
- For the linear-first convention, \((v\otimes w)f=\langle f,w\rangle v\) has trace \(\langle v,w\rangle\). Its adjoint swaps \(v,w\); pairing \(z\) with \(\bar z\) proves self-adjointness. The series quadratic form is \(\sum_zm_z\mathcal Ff(z)\overline{\mathcal Fg(\bar z)}\), as required by the paired identity.
- Reflection sends \(k_z\) to \(k_{-z}\), so \(\operatorname{tr}(RQ_S)=\sum_zm_z\langle k_{-\bar z},k_z\rangle\). Because \(Q_S\) commutes with reflection, this is the full even trace minus the full odd trace (including positive eigenvalues). Absolute trace-class convergence makes the parity trace split valid without assumptions on crossings.
- The Riesz equation for \(k_{-\bar z}\) is \((-\partial_x^2+1)k=e^{izx}\), with Dirichlet endpoints. Substitution verifies the displayed solution: the particular term contributes \((1+z^2)e^{izx}\) under the differential operator, and both homogeneous corrections enforce zero boundary values. The exceptional values \(z=\pm i\) are outside the stated zeta strip.
- The integral identities for \(e^{2izx}\), \(e^{izx}\cosh x\), and \(e^{izx}\sinh x\) follow by direct antiderivatives. Substituting the solution first gives
  \[
  \Theta_z=\frac{1}{(1+z^2)^2}\left[\frac{(1+z^2)\sin(2az)}{z}-2\{\tanh a\cos^2(za)-\coth a\sin^2(za)+z\sin(2za)\}\right].
  \]
  Using \(\tanh a+\coth a=2\coth(2a)\) and \(\tanh a-\coth a=-2\operatorname{csch}(2a)\) reduces this to (4). Its removable value at zero is \(2a-2\tanh a\), consistent with the Dirichlet solution for source 1.

## Limitations

No numeric experiment or fresh external-source check was needed for these elementary identities. The paired Weil formula and form-core/domain implications are imported rather than independently re-proved. The audit does not analyze STS02's Laplace transform, establish equality of nonzero ordinary and Sobolev spectra, or imply RH. No formal proof, human review, or novelty claim is made.
