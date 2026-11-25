# CPC04-W01 — Independent audit of the periodic finite-rank reduction

Date: 2026-11-25 UTC. Scoped proof audit of `research/positivity/CPC04-discrete-finite-rank.md`. No formal verification, numerical certificate, human review, or priority claim.

## Scope and imported assumptions

I checked the corrected archimedean cutoff, exact periodization and Fourier-series normalization, finite negative-mode split, inverse comparison, support-index ceiling, and residual-tail statement. I treat NIR04's off-diagonal inverse-Fourier kernel and the GSG03 arithmetic form as imported. I do not independently retrieve those source identities, run a numerical certificate, or compare the construction exhaustively with prior art.

## Corrected archimedean symbol and periodization

Off the origin \(D_\alpha(x)=-k(|x|)\). Since \(\chi=1\) on a neighborhood of the support of every test autocorrelation, multiplication by \(\chi\) preserves the archimedean quadratic form on \((-A,A)\). Distributionally,
\[
\chi D_\alpha=D_\alpha+(\chi-1)D_\alpha
=D_\alpha+(1-\chi)k(|x|),
\]
where the correction vanishes near zero and is integrable. Its Fourier transform is therefore \(\alpha+\int(1-\chi)k(|x|)e^{itx}dx\), with the positive sign in CPC04. The correction is bounded by \(J_\chi\) and tends to zero at infinity. The arithmetic deltas transform to the cosine prime sum; the cutoff pole kernel transforms to the stated ordinary Fourier integral.

The distribution \(D\) has support strictly inside \((-L,L)\). The test autocorrelation is supported in \([-2A,2A]\), and its noncentral periodic copies are disjoint from \((-L,L)\) because \(L>2A\). Periodizing (D) on length (2L) therefore leaves the pairing unchanged. On the circle, the normalized modes \(e^{-it_nx}/\sqrt{2L}\) diagonalize convolution by the periodized distribution with eigenvalue \(\widehat D(t_n)=S_\chi(t_n)\); Parseval gives \(q_A(f)=\sum_nS_\chi(t_n)|c_n|^2\), and \(\sum_n|c_n|^2=\|f\|_2^2\). The normalization is consistent with unnormalized Lebesgue convolution and the coefficient definition (c_n=(2L)^{-1/2}\int f(x)e^{it_nx}dx). Smoothness of the test coefficients and logarithmic growth of the symbol justify distributional Fourier-series pairing.

## Finite negative part and operator comparison

Since \(S_\chi(t)=\log|t|+O(1)\), the weights \(w_n=(\mu-s-S_\chi(t_n))_+\) have finite support. The positive form with coefficients \(p_n=\max(S_\chi(t_n)+s,\mu)\) differs from the original shifted form by the bounded finite-rank form \(K=\sum_nw_n(e_n\otimes e_n)\). Its norm is equivalent to the original shifted form norm after a sufficiently large scalar shift, so the closures have the same domain and (A_A+sI=P-K). The vectors have \(\|e_n\|^2=A/L\), as required for the Fourier coefficient convention.

The finite Birman–Schwinger matrix is the Gram matrix of \(P^{-1/2}\sqrt{w_n}e_n\); hence its entries are \(\sqrt{w_iw_j}\langle P^{-1}e_j,e_i\rangle\). The count above one and nullity at one follow from CPC01's coercive form congruence. Enlarging the variational inverse problem from the supported subspace to the full periodic Fourier space gives \(P^{-1}\le U_L^*\operatorname{diag}(p_n^{-1})U_L\), in the correct upper direction; the support constraint is why the inverse is not obtained by substituting (p_n^{-1}) directly.

The lower symbol estimate follows by bounding the archimedean correction below by \(-J_\chi\), the finite prime sum by its absolute coefficient sum, and the cutoff pole transform by the L1 norm of its kernel. Thus \(S_\chi(t)\ge\log(2+|t|)-K\). Any (w_n>0) must satisfy \(\log(2+|\pi n/L|)<K+\mu-s\), which yields the stated finite outward index ceiling. With \(L=2A+1\), Chebyshev and the cutoff pole L1 norm give \(K=O(e^A)\), so the reduction can still have a doubly exponential mode ceiling.

For smooth compact trials, (p_n\) grows logarithmically and the Fourier coefficients decay faster than any power, so the periodic multiplier series converges in (L^2). Restricting its tail to (I) cannot increase its norm; Parseval gives the stated residual bound. Integration by parts provides \(|\langle u,e_n\rangle|\le\|u^{(r)}\|_1/(\sqrt{2L}|t_n|^r)\). Under CPC02's graph-core result this supports convergence for fixed finite negative-mode sets and strict threshold separation, not a claim that a particular numerical solve has converged.

No flaw found in the exact periodic reduction or finite-rank threshold count under the imported form/kernel assumptions. Correcting the archimedean symbol is necessary; sampling the uncorrected FES03 continuous symbol would alias its noncompact kernel. The method removes frequency quadrature but does not remove the potentially doubly exponential index ceiling or inverse-solve cost. No RH or novelty conclusion follows.

## Source record

- Audited: `research/positivity/CPC04-discrete-finite-rank.md` at the starting commit recorded in the handoff.
- Cross-checked internally: CPC01–03 and NIR04 dependencies cited by CPC04.
- No fresh external source, numerical computation, or formal verifier used.
