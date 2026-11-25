# NIR01-W01 — Independent audit of finite-pair interpolation

Date: 2026-11-25 UTC. Scoped proof audit of `research/positivity/NIR01-constructive-interpolation.md`. No RH, novelty, formal verification, numerical certification, or human-review claim.

## Scope and imported inputs

I checked the finite-band cardinal interpolation, convolution damping, tail and L2 estimates, negative Gram estimate, min-max threshold, and fixed-pair growth deduction. The audit is conditional on the stated Fourier sampling identity for the localized Weil form, the symmetry of the zero multiset, the strip bound \(|\Im z|\le 1/2\), and the classical unit-interval zero count with multiplicity \(O(\log(2+|t|))\). I do not reprove those inputs, the operator's compact-resolvent setup, or any source theorem behind them.

## Audit findings

For fixed finite \(S\) and finite conjugation-invariant \(\Gamma_R\), the polynomial \(p_w(z)=\prod_{v\in\Gamma_R\setminus\{w\}}(z-v)\) has \(p_w(w)\ne0\). The small-support bump condition gives \(\widehat\chi(w)\ne0\), and the convention \(\widehat f(z)=\int f(x)e^{izx}\,dx\) yields \(\widehat{i f'}(z)=z\widehat f(z)\). Therefore \(k_w=p_w(iD)\chi/(p_w(w)\widehat\chi(w))\) is compact smooth and its transform has exactly the stated cardinal values on \(\Gamma_R\). This uses exact zero locations in the chosen finite band; it is an existence construction, not a robust finite-precision recipe.

The box kernel has transform \(G_w(z)=\sin(h(z-\Re w))/(h(z-\Re w))\), unit L1 norm in physical space, and \(G_w(w)=\sinh(h|\Im w|)/(h|\Im w|)>1\) for the selected off-line zeros. For \(|\Re z|>R\), \(|z-\Re w|\ge R-U\), while \(|\Im(z-\Re w)|\le1/2\). Thus the stated choice of \(R\) makes \(|G_w(z)|<r\); the factor \(L_w^{-n}\) further damps the out-of-band samples. Multiplicities are accounted for in the weighted sequence norm. Two integrations by parts give \(|\widehat{k_w}(z)|\le e^{h_0/2}\|k_w''\|_1/|z|^2\), so the claimed tail is finite under the imported zero count. Young's inequality gives the physical-space bound \(\|b_{w,n}\|_2\le\|k_w\|_2L_w^{-n}\).

For the paired basis, conjugation invariance of the band makes the exact in-band vectors \(y_j\) orthonormal and negative for \(J\). The out-of-band error map has norm at most \(C(r/L)^n\). Since the band and its complement are both \(J\)-invariant, cross terms vanish, and the compressed Gram matrix differs from \(-I_k\) in operator norm by at most \(C^2(r/L)^{2n}\). This establishes the stated strict negative margin whenever that bound is at most \(\epsilon<1\). Exact in-band samples on the selected ordinates also give linear independence.

For the synthesis map from \(\mathbb C^k\), the triangle inequality followed by Cauchy–Schwarz gives \(\|f\|_2\le A L^{-n}\|c\|_2\). Combining with \(q(f,f)\le-(1-\epsilon)\|c\|_2^2\) yields Rayleigh quotient at most \(-(1-\epsilon)L^{2n}/A^2\), so the min-max conclusion for \(\lambda_k\) has the stated direction. For growth, fix \(h,r,R,h_0\), choose (for example) \(\epsilon=1/2\), and take \(n=\lfloor(a-h_0)/h\rfloor\); the margin condition holds eventually and \(n/a\to1/h\). This gives the stated \((2/h)\log L\) lower exponent. Sending fixed \(h\to\infty\) after that liminf gives \(2d_{\min}\), since \(h^{-1}\log(\sinh(hd)/(hd))\to d\). No uniformity in \(h\) is needed.

## Disposition and limits

No flaw found in the interpolation, damping, Gram-margin, threshold, or fixed-selected-pair growth deductions under the imported inputs above. The result is conditional on exact finite-band zero data; the enormous polynomial coefficients and their sensitivity are not controlled here and are properly left to NIR02. The threshold is sufficient and need not be practical or sharp. This audit says nothing about matching upper bounds, ordering of individual off-line pairs, RH, or priority.

## Reproducibility / source record

- Audited: `research/positivity/NIR01-constructive-interpolation.md` at the starting main commit recorded in the handoff.
- No external source or numerical computation was used in this proof audit. The zero-count and localized sampling-form inputs are treated as imported exactly as NIR01 labels them.
- No formal verification or independent primary-source audit performed.
