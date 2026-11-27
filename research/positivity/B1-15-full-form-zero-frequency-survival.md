# B1-15 — Nonzero zero-frequency coefficient survives in the full packet form

Date: 2026-11-27. Status: RH-conditional almost-periodic decomposition for a
chosen fixed profile; no sign conclusion.

## Question

Do the nonzero zero-ordinate coefficients in B1-12's first-prime endpoint
residual cancel against the other terms of the complete direct Weil form on
the paired edge packets?

## Exact direct-form decomposition

Use Suzuki's direct Weil distribution, arXiv:2611.33001v1, equation (1.2):

\[
W(u)=\int_{\mathbb R}u(x)(e^{x/2}+e^{-x/2})dx
-\sum_{n\ge1}\frac{\Lambda(n)}{\sqrt n}
       (u(\log n)+u(-\log n))
-(\log4\pi+C_0)u(0)
-\int_0^\infty\{u(x)+u(-x)-2e^{-x/2}u(0)\}
       \frac{e^{x/2}}{e^x-e^{-x}}dx.
\tag{1}
\]

For real \(g\in C_c^\infty((0,L))\), normalized in \(L^2\), set
\(f_h(x)=(g(x)+g(h-x))/\sqrt2\), \(u_h=f_h*\widetilde f_h\), and
\(\phi=g*g\). For \(h>2L\), the positive-lag autocorrelation splits into
the fixed self-correlation \(r(t)\), supported in \([0,L]\), and the
right cross-packet \(\frac12\phi(h-t)\), supported in
\([h-2L,h]\). Also \(u_h(0)=1\).

The right cross-packet contributes to the archimedean integral

\[
2\int_0^{2L}\phi(v)\cosh((h-v)/2)dv
=e^{h/2}\int_0^{2L}e^{-v/2}\phi(v)dv+O_g(e^{-h/2}).
\tag{2}
\]

The first-prime cross contribution is
\(-\sum_p(\log p)p^{-1/2}\phi(h-\log p)\). Its PNT main term is the
negative of the leading term in (2). With the B1-09 cutoff equal to one on
\([0,2L]\), the residual is \(-\langle\phi,\Delta_h\rangle\), up to
fixed self terms. B1-12 and Fourier inversion give

\[
 -\langle\phi,\Delta_h\rangle
= C_{g,0}+\sum_{\gamma\ne0}
      m_\gamma\widehat\phi(-\gamma)e^{i\gamma h}+o_g(1),
\tag{3}
\]

where \(C_{g,0}\) absorbs the k=2 pole and any zero ordinate at zero.
The series converges absolutely because \(\widehat\phi\) is Schwartz and
the ordinates satisfy the Riemann–von Mangoldt local count. The contour
remainder is \(O_{g,b,\eta}(e^{-bh})\). The cutoff drops out of the
nonzero coefficients because \(\eta=1\) on \(\operatorname{supp}\phi\):
the inverse Fourier transform of
\(\widetilde\eta(-i(\xi+\gamma))\) is
\(\eta(v)e^{-i\gamma v}dv\).

The prime-square cross term in (1) is
\(-\sum_p(\log p)p^{-1}\phi(h-2\log p)\). By B1-14 and PNT it tends to
\(-\frac12\int\phi\). The k≥3 cross terms tend to zero. The archimedean
self term, low-prime self terms, the pole term, and the self part of the
subtracted continuous integral are independent of h. The cross part of that
integral is \(O_g(e^{-h/2})\), since its kernel
\(e^{x/2}/(e^x-e^{-x})\) is \(O(e^{-x/2})\) at infinity. Thus for a real
constant \(C_g\),

\[
 Q_W(f_h)=C_g+\sum_{\gamma\ne0}
      m_\gamma\widehat\phi(-\gamma)e^{i\gamma h}+o_g(1),
 \qquad (\mathrm{RH}).
\tag{4}
\]

The constants and the sign of the full expression depend on all direct
terms in (1); equation (4) asserts only that the nonzero frequencies are
the displayed zero-residue coefficients.

## Noncancellation for a suitable profile

There is a nonzero zero ordinate \(\gamma_0\) by the classical
Riemann–von Mangoldt formula. Choose a nonnegative smooth bump \(g\) in an
interval of width less than \(\pi/(2|\gamma_0|)\). Its Fourier integral
\(\widehat g(\gamma_0)=\int g(x)e^{i\gamma_0x}dx\) is nonzero: after
factoring out the phase at the interval center, the remaining phases lie
within an arc of length less than \(\pi/2\), so their positive weighted
average cannot vanish. Normalize \(g\) in L2. Since
\(\widehat\phi(-\gamma_0)=\widehat g(-\gamma_0)^2\ne0\), the coefficient
at \(\gamma_0\) in (4) is nonzero.

The uniformly absolutely convergent series in (4) has positive
mean-square variance after its constant term is removed:

\[
 \lim_{T\to\infty}\frac1T\int_0^T
 \left|\sum_{\gamma\ne0}m_\gamma
       \widehat\phi(-\gamma)e^{i\gamma h}\right|^2dh
=\sum_{\gamma\ne0}m_\gamma^2|\widehat\phi(-\gamma)|^2>0.
\tag{5}
\]

Hence the nonzero zero-frequency contribution survives in the full direct
form for this chosen profile; it is not canceled by the archimedean,
prime-square, pole, or continuous terms. The full value remains bounded on
this family and has no limit after subtracting its constant term. Neither
fact gives a negative value or a failure of positivity. The result is
conditional on RH for (3)–(5); the direct formula (1) and prime-square PNT
limit themselves are unconditional.

As an independent normalization check, the same source's Weil explicit
formula, equation (1.3), says
\(W(u_h)=\sum_\gamma m_\gamma\widehat u_h(\gamma)\). Under RH,
\(\widehat u_h(\gamma)=|\widehat f_h(\gamma)|^2\), and
\[
 \widehat f_h(\gamma)=\frac{\widehat g(\gamma)
             +e^{i\gamma h}\widehat g(-\gamma)}{\sqrt2}.
\]
Expanding and pairing \(\gamma\) with \(-\gamma\) reproduces exactly the
coefficient \(m_\gamma\widehat g(-\gamma)^2
=m_\gamma\widehat\phi(-\gamma)\) in (4), and identifies the constant term
as \(C_g=\sum_\gamma m_\gamma|\widehat g(\gamma)|^2>0\) for the chosen
profile. There is no ordinate at zero: the alternating Dirichlet eta series
is positive at 1/2 and
\(\zeta(1/2)=\eta_D(1/2)/(1-2^{1/2})<0\). Thus the diagonal terms all
belong to nonzero frequencies. This is a source-formula cross-check under RH, not an independent
proof of RH. The primary source is
[Suzuki, arXiv:2611.33001v1, equations (1.2)–(1.3)](https://arxiv.org/html/2611.33001v1).

## Verification boundary

Equation (1) is the cited primary-source formula. Packet normalization,
right-endpoint factors, and the coefficient extraction were manually
rederived above and cross-checked against B1-06/B1-14. The zero-residue
series is from B1-12 and was not machine checked; no numerical work, Lean
proof, independent RH verification, or novelty claim is made. A persistent
oscillation in one packet family does not determine the sign of the full
quadratic form or prove a uniform coercivity bound.

**Next:** determine whether the nonnegative almost-periodic full-form values
have a positive liminf or approach zero along a subsequence. The spectral
expansion exposes this as a phase-approximation problem for the zero
ordinates; numerical scans alone cannot decide it.
