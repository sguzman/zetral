# B1-14 — Bounded full Weil form on fixed paired edge packets

Date: 2026-11-27. Status: RH-conditional bound for one normalized test
family; no positivity conclusion.

## Question

Can the B1-12 uniform bound for the first-prime multiplier improve the
known \(o(e^{h/2})\) direct-form estimate on the fixed smooth paired edge
packets, once the other prime powers and continuous terms are included?

## Prime-power endpoint estimates

Fix real \(g\in C_c^\infty((0,L))\), \(\|g\|_2=1\), and let
\(\phi=g*g\), supported in \([0,2L]\). Use the paired unit vector
\(f_h(x)=(g(x)+g(h-x))/\sqrt2\) from B1-06. Its right endpoint
correlation is \(\phi(v)\) at shift \(h-v\). The direct arithmetic sum
uses \(\Lambda(p^k)/p^{k/2}=\log(p)/p^{k/2}\).

For prime squares the endpoint contribution is

\[
 S_2(h)=\sum_p\frac{\log p}{p}\phi(h-2\log p)
 =\int t^{-1}\phi(h-2\log t)\,d\theta(t).
\]

Writing \(\theta(t)=t+E(t)\), the continuous main term changes variables
\(v=h-2\log t\) to give

\[
 \int t^{-1}\phi(h-2\log t)\,dt
   =\frac12\int_0^{2L}\phi(v)\,dv.
\]

The error tends to zero by the prime number theorem. Indeed the test
\(a_h(t)=t^{-1}\phi(h-2\log t)\) is supported on
\([e^{(h-2L)/2},e^{h/2}]\), has zero boundary values, and
\(|a'_h(t)|\leq C_{\phi}t^{-2}\). Integration by parts gives
\(|\int a_h\,dE|\leq C_\phi\sup_{t\ge e^{(h-2L)/2}}|E(t)|/t\),
which tends to zero. Hence

\[
 S_2(h)=\frac12\int_0^{2L}\phi(v)\,dv+o_g(1).
 \tag{1}
\]

For \(k\ge3\), the contributing prime variable satisfies
\(p\in[e^{(h-2L)/k},e^{h/k}]\). Chebyshev's bound
\(\theta(t)\ll t\) gives, uniformly for the relevant k,

\[
 \sum_p\frac{\log p}{p^{k/2}}|\phi(h-k\log p)|
 \ll_{g,L} e^{-h(1/2-1/k)}.
 \tag{2}
\]

Only \(k\le h/\log2+O_L(1)\) can contribute. Summing (2) for
\(3\le k\le h/\log2+O_L(1)\) gives \(o_g(1)\): the terms are bounded by
the k=3 exponential scale \(e^{-h/6}) times a factor polynomial in h
(a fixed enlargement handles the bounded small-h range). The other endpoint
and bounded-shift contributions are \(O_g(1)\).

## Full-form bound under RH

B1-06 identifies the direct archimedean right-endpoint term as
\(C_g e^{h/2}+O_g(1)\), with
\(C_g=\int e^{-v/2}\phi(v)dv\). The first-prime term is
\(C_g e^{h/2}+\langle\phi,\Delta_h\rangle+O_g(1)\), where
\(\Delta_h\) is B1-09's smoothed discrepancy; the cutoff equals one on
\(\operatorname{supp}\phi\). Fourier inversion and B1-12 give

\[
 |\langle\phi,\Delta_h\rangle|
 \leq \frac{c_h}{2\pi}\int_\mathbb R
       \log(2+|\xi|)|\widehat g(\xi)|^2d\xi
 \ll_{g,\eta}1,
 \tag{3}
\]

conditional on RH. The leading \(C_g e^{h/2}\) terms cancel in the direct
Weil formula. Equations (1)–(2), and B1-06's fixed-profile
\(O_g(1)\) bound for the remaining continuous-kernel and pole terms, then
yield

\[
 |Q_W(f_h)|\ll_{g,L,\eta}1\qquad(h\to\infty),
 \tag{4}
\]

conditional on RH. The constant depends on the fixed profile and cutoff; no
uniformity over the unit sphere or over varying profiles is asserted.

## Limits

Equation (4) is an upper bound on one family of normalized tests. It does not
show that \(Q_W(f_h)\) converges, determine its sign, or imply full-space
coercivity. B1-13 shows the isolated first-prime discrepancy has a positive
limsup in its logarithmic-dual norm; (4) does not transfer that lower bound
to the quadratic form because other bounded terms may cancel it. The
prime-square asymptotic is unconditional by PNT, while (3) and (4) use RH
through B1-12. No numerical calculation, Lean verification, or novelty claim
was made.

**Next:** identify the bounded limiting terms in the direct formula and test
whether their zero-frequency coefficients cancel the B1-12 almost-periodic
coefficients. Any sign conclusion must use the complete form, not the
isolated first-prime component.
