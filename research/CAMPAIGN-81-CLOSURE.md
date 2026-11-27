# Campaign LXXXI closure — full-form zero-frequency survival

Date: 2026-11-27. Status: CLOSED within the fixed-packet scope.

## Question

On fixed paired edge packets, do B1-12's nonzero zero-ordinate coefficients
cancel in the complete direct Weil form?

## Finding

B1-15 gives the complete direct decomposition from Suzuki arXiv:2611.33001v1,
equation (1.2). The self, pole and continuous terms tend to constants; the
prime-square endpoint has its PNT constant; powers k≥3 decay. The remaining
nonzero frequencies are exactly
\(m_\gamma\widehat{g*g}(-\gamma)e^{i\gamma h}\). For a smooth nonnegative
bump supported in a sufficiently short interval,
\(\widehat g(\gamma_0)\ne0\) at a chosen nonzero zero ordinate, so at least
one coefficient is nonzero. Thus cancellation does not occur for this
profile. The conclusion is conditional on RH for the explicit zero
expansion, while direct-form decomposition and PNT prime-square asymptotic
are unconditional.

Suzuki's equation (1.3) independently cross-checks the coefficient and
normalization under RH: \(Q_W(f_h)=\sum_\gamma
m_\gamma|\widehat f_h(\gamma)|^2\). This also confirms nonnegativity for
these packets under the assumed RH. No Zetral RH proof or full-domain
coercivity follows.

## Verification and limits

The packet correlation and residue coefficients were manually derived and
compared with the primary-source formulas. No Lean proof, numerical
computation, independent RH verification, or novelty claim was made. The
result proves persistent oscillation around a positive mean for one chosen
profile; it does not determine whether the liminf is positive or zero.

## Pivot

Campaign LXXXII is opened to study the liminf of this nonnegative
almost-periodic packet value. Its first question is how the orbit closure of
\(h\mapsto(e^{i\gamma_1h},\ldots,e^{i\gamma_Nh})\) and the Fourier
coefficients of g govern approximate simultaneous cancellation. Linear
independence of zeta-zero ordinates must not be assumed; identify what can be
proved from known relations and what remains an explicit conditional.
