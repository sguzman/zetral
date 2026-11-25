# FES01-W01 — Independent audit of the frequency frame

Date: 2026-11-25 UTC. Scoped proof audit of `research/positivity/FES01-exact-frequency-partition.md`. No formal verification, numerical certification, human review, or priority claim.

## Scope and imported assumptions

I checked the Fourier-series normalization, support expansion, exact L2 and log-energy identities, paired Weil-form decomposition, extension to the closed form domain, and the carrier-relative moment estimate. I treat GSG01's unconditional paired-zero identity, the strip/zero-count facts, and NIR04's localized form-domain identification as imported. I do not audit FES02 packet selection/coercivity or make a prior-art determination.

## Frame identity and support

With \(\eta_h(x)=h^{-1/2}\eta(x/h)\), \(\|\eta_h\|_2=1\), the functions \((2h)^{-1/2}e^{i\pi n x/h}\) form an orthonormal Fourier basis on \((-h,h)\). The coefficients of \(x\mapsto \eta_h(x)e^{izx}\) in that basis are exactly
\[
W_n(z)=(2h)^{-1/2}\int_{-h}^h\eta_h(x)e^{i(z-\pi n/h)x}\,dx
=2^{-1/2}\widehat\eta(hz-\pi n).
\]
Parseval and polarization therefore give
\[
\sum_n W_n(z)\overline{W_n(w)}
=\int_{-h}^h\eta_h(x)^2e^{i(z-\overline w)x}\,dx.
\]
The sum is absolutely convergent by Cauchy–Schwarz on the two coefficient sequences. Taking \(w=t\in\mathbb R\) gives \(\sum_n|W_n(t)|^2=1\); taking \(w=\bar z\) gives \(\sum_nW_n(z)\overline{W_n(\bar z)}=1\). Since \(\eta\) is real and even, \(\widehat\eta\) is real on the real axis and satisfies the conjugation symmetry needed for \(W_n(z)=\overline{W_n(\bar z)}\); hence also \(\sum_nW_n(z)^2=1\). This does not assert the false off-axis identity \(\sum_n|W_n(z)|^2=1\).

The convolution theorem gives \(\widehat{P_nf}(z)=W_n(z)\widehat f(z)\). Since \(p_n\) is smooth and supported in \((-h,h)\), convolution maps supported \(L^2(-a,a)\) functions to smooth functions supported in \((-a-h,a+h)\), with the stated per-side expansion. No bandlimiting claim is needed.

## Exact form identities and convergence

For real \(t\), Tonelli and \(\sum_n|W_n(t)|^2=1\) give
\[
\sum_n\|P_nf\|_2^2=\|f\|_2^2,\qquad
\sum_nL(P_nf)=L(f),
\]
and polarization yields the corresponding bilinear identities. For compact smooth \(f,g\), the paired form summand at \(z\) gains the factor \(W_n(z)\overline{W_n(\bar z)}\), whose sum is one. Also
\[
\sum_n|W_n(z)\overline{W_n(\bar z)}|
\le \Big(\sum_n|W_n(z)|^2\sum_n|W_n(\bar z)|^2\Big)^{1/2}
\le e^{2h|\Im z|}\le e^h.
\]
Thus the double sum over \(z,n\) is absolutely bounded by \(e^h\) times the original absolute paired sum. Fubini is justified, and the exact identity \(q_a(f,g)=\sum_n q_{a+h}(P_nf,P_ng)\) follows from the complex-ordinate Parseval identity.

For the closed-domain extension, the output log-energy sum is exactly the input log energy. If the closed form at window \(a+h\) is bounded by \(C_{a+h}L(\cdot)^{1/2}L(\cdot)^{1/2}\), Cauchy–Schwarz across \(n\) yields
\[
\sum_n|q_{a+h}(P_nf,P_ng)|
\le C_{a+h}\sqrt{L(f)L(g)}.
\]
Approximating in the compact smooth form core therefore extends the identity without assuming direct pointwise absolute convergence of samples for every nonsmooth vector. The frame reconstruction has multiplier \(\sum_n|W_n(t)|^2=1\) and finite partial sums are dominated by one, so it converges in \(L^2\), and in finite log energy by dominated convergence.

## Carrier-relative moments and consequence

The scaling formula and repeated integration by parts give rapid decay in \(ht-\pi n=h(t-\omega_n)\). For each fixed \(p\), choosing an integration-by-parts order \(j\) with \(2j-p>1\) makes the lattice sum of \((1+|s-\pi n|)^p|\widehat\eta(s-\pi n)|^2\) uniformly bounded in \(s\) (reduce \(s\) modulo \(\pi\)). Tonelli then gives the aggregate moment estimate \(\sum_n E_{p,h,n}(f)\le C_p\|f\|_2^2\). The tail estimate follows by lower-bounding each tail weight by \((1+hD)^p\). Constants can depend on \(p\) and on the chosen window; the report does not claim packetwise normalized bounds uniform in \(n\).

The negative-form decomposition is a countable absolutely convergent sum. If its total is negative, at least one nonzero packet has negative form; if all nonzero packets had quotient greater than the original quotient plus a fixed \(\epsilon>0\), summing against their L2 masses would contradict the exact L2 and form identities. This establishes the stated bottom-level packet consequence, but no k-dimensional min-max transfer. The report correctly notes that NIR03's fast-pair constraints need not survive filtering because \(W_n(z)\) and \(W_n(\bar z)\) generally differ.

No flaw found in the frame or form identities under the imported assumptions. This audit establishes neither carrier confinement nor exclusion of NIR04's escape mechanism; those remain FES02/FES03 questions.

## Source record

- Audited: `research/positivity/FES01-exact-frequency-partition.md` at the starting commit recorded in the handoff.
- No external source, numerical computation, or formal verifier used.
