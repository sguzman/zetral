# LBS03-W01 — Independent Hardy-factorization audit

Status: READY_FOR_LEAD_REVIEW

## Scope and conclusion

I checked the support-space density argument, the explicit analytic factor, the unitary map to upper-half-plane \(H^2\), the diagonal weighted Cauchy Gram, and the parity-trace coefficient. I found no discrepancy in the checked derivations or their signs and normalizations.

The imported Paley–Wiener statement is verified against Gorbunov, *Unitary transform diagonalizing the confluent hypergeometric kernel*, Theorem 5.1. The primary MathNet HTML states that upper-half-plane \(H^2\) consists of Fourier–Laplace transforms of \(L^2(\mathbb R_+)\), with the factor \(e^{-\omega\delta}e^{i\omega x}\) (Theorem 5.1, lines 178–179): [source](https://www.mathnet.ru/php/archive.phtml?jrnid=sm&option_lang=eng&paperid=10319&wshow=paper). The normalization used in Zetral follows from Plancherel with boundary measure \(dx/(2\pi)\); the source theorem does not supply the project’s weighted-space factorization or spectral conclusions.

## Checks

- LBS03's support closure uses the LBS01 difference-kernel norm. Inward translation converges by dominated convergence of Fourier multipliers. Smooth cutoffs have uniformly bounded multiplier norms; the cutoff error tends to zero in \(L^2\), and its difference seminorm is dominated by the integrable bound \(C\|g(\cdot+h)-g\|_2^2+C\min(h^2,1)\|g\|_2^2\). Mollification after inward translation preserves positive support. This proves the stated support-space equality assuming LBS01's kernel representation.
- In (1), subtraction of \(t/(1+t^2)\) makes the tail integrable; the real part of the exponent is the Poisson average of \(\log w\). Thus \(|h|^2=e^{P_y\log w}\), \(|h|^2\ge w(0)>0\), and \(1/h\) is bounded analytic. The logarithmic growth estimate yields \(|h(z)|\le C(1+|z|)\). Evenness and the value \(h(i)>0\) fix the reflected-conjugate identity.
- On compact smooth tests supported away from the endpoint, two integrations by parts give uniform \(O((1+|z|)^{-2})\) decay in the closed upper half-plane. Together with the growth bound this places \(hFf\) in \(H^2\), and its boundary norm equals \(L(f)\). The map extends isometrically. For surjectivity, \(G/h\in H^2\) since \(1/h\in H^\infty\); Paley–Wiener supplies a positive-half-line \(L^2\) preimage, and the boundary identity \(|h|^2=w\) puts it in \(H_w\). The preceding support-density argument then puts it in the defined closure. So the proof establishes a unitary map, not merely an embedding.
- With linear-first inner products, the Hardy evaluation representer is \(K_j=\mathcal F\ell_j\), \(\ell_j(s)=e^{-\alpha_js}\). Since \(Ff(z_j)=(Uf)(z_j)/h(z_j)\), the Riesz vector maps to \(\kappa_jK_j\), \(\kappa_j=1/\overline{h(z_j)}\). Therefore \(\langle k_j,k_i\rangle_w=\overline{\kappa_i}\kappa_j/(\overline{\alpha_i}+\alpha_j)\), matching (3). The faster-group Schur factor is the BPF03 factor multiplied by this diagonal congruence; the faster diagonal factors cancel in its Schur inverse.
- Under reflection symmetry, \(\kappa_{-u}=\overline{\kappa_u}\) and \(\beta_{-u}=\overline{\beta_u}\). The trace term \(\langle\phi_u,\phi_{-u}\rangle\) is \(\kappa_u^2\beta_u^2/[2(d+iu)]\), so (5) has the positive Fourier phase \(e^{2iua}\), the correct denominator, and a nonzero coefficient. The magnitude identity uses \(|\kappa_u|^2=|h(u+id)|^{-2}\), consistent with the last formula for \(m_u\).
- The Poisson comparison for \(|h(x+iy)|^2/w(x)\) is directionally valid: the logarithmic variation is dominated by \(w(0)^{-1}\log(1+|v|/4)\), integrable against \((\pi(1+v^2))^{-1}\). Its tail is \(O((1+\log V)/V)\). This gives the stated comparability and large-ordinate asymptotic without evaluating a phase numerically.

## Limitations

The external source verifies only classical Paley–Wiener support characterization. The unbounded-weight outer factor, support closure, and factorization formulas are checked from the displayed arguments; the underlying LBS01/BPF03 operator results remain imports. No numerical evaluation, formal proof, human review, actual off-line zero, ordinary L2 transfer, or novelty claim is made.
