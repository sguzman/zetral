# LBS02-W01 — Independent log-metric spectrum audit

Status: READY_FOR_LEAD_REVIEW

## Scope and conclusion

I audited `research/positivity/LBS02-half-line-gram.md`: the Riesz representers for endpoint evaluations, same-side Gram positivity, opposite-side decoupling, the generalized finite-rank pencil, multiscale prefactors, and the norm-perturbation transfer to the full log-metric operator. The signs, normalizations, and scale comparisons are consistent in this scope; I found no discrepancy.

The result is about the log-energy Hilbert metric and its generalized spectrum, not the ordinary L2 spectrum. It is conditional on the finite selected set and strict deviation gap, LBS01's bounded remainder, BPF03's pencil argument, and the stated form/sampling imports. I did not independently establish those inputs or the detailed domain construction.

## Derivation checks

- For \(w(t)=1+\log(2+|t|)\), the full-line inverse multiplier \(W^{-1}:L^2\to H_w\) has norm at most one and \(\langle f,W^{-1}g\rangle_w=\langle f,g\rangle_2\). Restricting to \(H_{w,I}\) therefore projects the full Riesz vector: \(P_IW^{-1}g\). The note correctly warns that it is not generally the unprojected inverse restricted in physical space.
- The ordinary evaluation representers on \((-a,a)\) are \(e^{-(d+iu)(x+a)}\) for \(Ff(u+id)\) and \(e^{-(d-iu)(a-x)}\) for \(Ff(u-id)\). Their prefactors in the log-metric Riesz identities are \(e^{-da+iua}\) and \(e^{-da-iua}\), respectively. These signs agree with linearity in the first argument and with the Fourier convention in the note.
- The finite-interval representers converge in \(H_w\) to their half-line projections because the support subspaces increase and compactly supported positive-half-line tests exhaust the half-line closure. For fixed limiting representers, the opposite-side scalar product is the Fourier transform at translation \(2a\) of \(wF[Rg]\overline{F[h]}\in L^1\); Riemann–Lebesgue gives zero. The replacement of truncated vectors by their limits costs only \(o(1)\) by norm convergence and bounded norms. Hence the finite Gram converges to conjugate same-side blocks, and finite-set strict positivity gives uniform invertibility for large \(a\).
- The generalized eigenvalue equation for \(E_aD_aE_a^*\) on its range is congruent to the pencil \(D_a-\lambda G_a^{-1}\). For \(\lambda=t_kx\), \(x<0\), the fast inverse tends to zero, the slow block tends to \(-xK_{LL}>0\), and the nested Schur complement yields the current projected Gram metric. Since \(G_a^{-1}\to G_w^{-1}\), the remainder is \(o(1)\) even without an exponential Gram convergence rate. The inertia squeeze works at repeated eigenvalues and gives the displayed group scale.
- LBS01's two-sided remainder norm bound changes every Hilbert minmax value by at most \(Ca e^{2ba}\); dividing by a selected scale \(e^{2d^{(k)}a}\) gives \(Ca e^{-2(d^{(k)}-b)a}\to0\) under the strict gap. If all off-line pairs are selected, the residual positive form bounds the negative count above, while the diverging selected negative eigenvalues give the matching lower count. The operator \(I+\)compact has essential spectrum at 1, so negative values are discrete.

## Limitations

No numerical experiment or external source retrieval was needed. The LBS01 remainder estimate, BPF03 transfer details, source form identity, support-space closure, and projection-to-Riesz formulas are used as stated, not independently re-proved. No explicit factorization of the log-metric Gram is claimed here; that is LBS03's scope. No actual off-line zero, ordinary L2 asymptotic, formal verification, human review, or novelty claim follows.
