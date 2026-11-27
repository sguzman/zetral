# B1-13 — Almost-periodic obstruction to multiplier decay

Date: 2026-11-27. Status: RH-conditional consequence of B1-12; no positivity
conclusion.

## Question

Does the uniform RH-conditional bound from B1-12 strengthen to
\(c_h\to0\) as \(h\to\infty\), or does the zero-residue expansion force
nonvanishing along an unbounded sequence of endpoint parameters?

## Fixed-frequency expansion

Fix \(\xi\in\mathbb R\). B1-12 gives

\[
 \widehat\Delta_h(\xi)=A_\xi(h)+R_{h,b}(\xi),
\quad
 A_\xi(h)=-\frac12\widetilde\eta(i\xi)
 -\sum_{\gamma}m_\gamma\widetilde\eta(i(\xi-\gamma))e^{i\gamma h},
 \tag{1}
\]

with \(R_{h,b}(\xi)=O_{\xi,b,\eta}(e^{-bh})\) for fixed \(\xi\).
The sum over distinct ordinates, with analytic multiplicity \(m_\gamma\),
is absolutely and uniformly convergent in h by the Schwartz decay of
\(\widetilde\eta(iu)\) and the Riemann–von Mangoldt unit-interval count.
Therefore \(A_\xi\) is a uniformly convergent trigonometric series.

Choose any nonzero zero ordinate \(\gamma_0\); such ordinates exist by the
Riemann–von Mangoldt formula. Since \(\eta\not\equiv0\), its Fourier
transform \(u\mapsto\widetilde\eta(iu)\) is a nonzero entire function. It
cannot vanish for every real \(u\), so choose \(\xi\) such that
\(m_{\gamma_0}\widetilde\eta(i(\xi-\gamma_0))\ne0\). In the uniformly
convergent Fourier series (1), the coefficient at frequency \(\gamma_0\)
is then nonzero.

For a uniformly absolutely convergent series with distinct real
frequencies, termwise integration is justified by uniform convergence and
\(T^{-1}\int_0^T e^{i(\lambda-\mu)h}dh\to0\) when \(\lambda\ne\mu\).
Consequently the mean-square limit exists and equals the sum of squared
moduli of the coefficients, after combining any contributions at frequency
zero:

\[
 \lim_{T\to\infty}\frac1T\int_0^T|A_\xi(h)|^2dh
 =\sum_{\lambda}|a_\lambda(\xi)|^2
 \ge m_{\gamma_0}^2
   |\widetilde\eta(i(\xi-\gamma_0))|^2>0.
 \tag{2}
\]

Here \(a_\lambda\) denotes the coefficient after equal frequencies are
combined; \(\gamma_0\ne0\) ensures its coefficient is not mixed with the
constant \(-\widetilde\eta(i\xi)/2\). Since the remainder in (1) decays
exponentially, (2) also holds with \(\widehat\Delta_h(\xi)\) in place of
\(A_\xi(h)\). A positive mean-square limit implies

\[
 \limsup_{h\to\infty}c_h\ \geq\
 \frac{m_{\gamma_0}|\widetilde\eta(i(\xi-\gamma_0))|}
      {\log(2+|\xi|)}\ >0.
 \tag{3}
\]

This lower bound is existential in the fixed frequency \(\xi\); no numerical
value or explicit endpoint sequence is claimed. Together with B1-12, it
shows that under RH the smoothed multiplier is bounded in h but does not
converge to zero. This does not establish that \(c_h\) is bounded below for
all large h; oscillations may still produce small subsequences. It also says
nothing about the sign of the full Weil form.

## Falsification and scope

Potential cancellation by the \(k=2\) pole contributes only at frequency
zero in h. It cannot cancel the selected nonzero zero ordinate. Other
distinct ordinates are orthogonal in the long-interval mean square, so they
cannot cancel its positive contribution either. The key analytic dependency
is the B1-12 expansion with an exponentially decaying remainder; if that
contour formula or its RH hypotheses fail, this deduction does not apply.
No computation, Lean check, independent RH verification, or novelty claim
was made. The mean-square argument is elementary harmonic analysis applied
to the classical smoothed explicit formula.

**Next:** investigate whether adding the archimedean and remaining prime-power
terms cancels these almost-periodic coefficients in the full Weil multiplier;
the first-prime component alone cannot settle positivity.
