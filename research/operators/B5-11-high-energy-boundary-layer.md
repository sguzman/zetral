# B5-11 — Exponential high-energy boundary layer in the canonical limit

Date: 2026-11-27. Status: RH-conditional double-scaling asymptotic and
canonical endpoint irregularity; no global resolvent conclusion.

## Question

How uniform is B5-08's canonical-system convergence as the spectral
parameter grows while `omega` tends to zero? Does the trace-normalized
Hamiltonian have a regular limiting average at the initial endpoint?

## Finite-shift high-energy limit

Set `s=1/2-iz` and

    g(s)=xi'(s)/xi(s),
    m_omega(z)=B^omega(z)/(omega A^omega(z)).

The exact quotient is

    m_omega(z) = (i/omega)
       (1 - xi(s-omega)/xi(s+omega))
       /(1 + xi(s-omega)/xi(s+omega)).

For fixed `omega>0` and `z` tending to infinity in a closed sector of
`C+`, Stirling's formula and the Dirichlet series for zeta give

    xi(s-omega)/xi(s+omega)
       = (s/(2 pi))^(-omega)(1+O_omega(1/|s|)),

so this ratio tends to zero and `m_omega(z) -> i/omega`. For its unique
trace-normalized canonical Hamiltonian `H_omega`, the canonical-system
high-energy theorem of Eckhardt–Kostenko–Teschl then gives

    (1/x) integral_0^x H_omega(t)dt ->
       diag(1/(1+omega^2), omega^2/(1+omega^2))
       as x -> 0+.

Here the entries follow from the theorem's correspondence
`a=|m_inf|^2/(1+|m_inf|^2)`, `c=1/(1+|m_inf|^2)`, `b=-Re(m_inf)/(1+|m_inf|^2)`.
For each positive `omega` this endpoint average is positive definite, but
its limit as `omega -> 0+` is the rank-one matrix `diag(1,0)`.

## Double-scaling asymptotic

For fixed `lambda>0`, let `y_omega=exp(lambda/omega)` and
`s_omega=1/2+y_omega`, so that `z=i y_omega`. On the positive real axis,

    g(s) = (1/2)log(s/(2 pi)) + O(1/s).

Integrating this estimate over `[s_omega-omega,s_omega+omega]` yields

    log(xi(s_omega-omega)/xi(s_omega+omega)) -> -lambda.

Consequently,

    omega m_omega(i y_omega)/i -> tanh(lambda/2),
    omega m_0(i y_omega)/i -> lambda/2,
    m_0=-F'/F.

For every fixed `lambda>0`, `tanh(lambda/2) != lambda/2`. Thus the
locally uniform convergence `m_omega -> m_0` in B5-08 is not uniform on
spectral regions where `omega log |z|` stays bounded away from zero. The
transition occurs at heights exponential in `1/omega`.

## Endpoint noncommutation

The same conclusion follows from inverse canonical theory. By B5-08,
`integral_0^x H_omega -> integral_0^x H_0` for each fixed `x`. But
`m_0(i y)=(i/2)log(y/(2 pi))+O(1/y)` is unbounded at high energy. The
equivalence in Theorem 3.1 of Eckhardt–Kostenko–Teschl implies that
`x^(-1) integral_0^x H_0` has no finite limit as `x -> 0+`. Therefore the
iterated endpoint limits do not commute:

    lim_(omega->0) lim_(x->0) x^(-1) integral_0^x H_omega
       = diag(1,0),

whereas `lim_(x->0) lim_(omega->0) x^(-1) integral_0^x H_omega` does not
exist. This does not contradict fixed-`x` convergence; it identifies a
nonuniform initial-endpoint layer in the inverse-spectral Hamiltonians.

## Verification and limits

The exact quotient follows from Suzuki's definitions. The ratio asymptotic
comes from Stirling's gamma-ratio formula and `zeta(s)=1+O(2^{-s})` on the
positive real axis; for fixed closed sectors the standard uniform Stirling
expansion applies. The double-scaling limit is derived by integrating
`g(s)` over a real interval of length `2 omega`. The Hamiltonian conclusion
uses the cited canonical-system theorem with trace normalization.

This proves neither failure nor validity of global strong-resolvent
convergence. Nor does it construct an arithmetic Hamiltonian. It shows
that any resolvent argument must control the nonuniform high-energy tail
and the rank-one degeneration at the initial endpoint.

Primary references:

- M. Suzuki, *A canonical system of differential equations arising from
  the Riemann zeta-function*, equations (1.1)–(1.2),
  https://arxiv.org/abs/1204.1827
- J. Eckhardt, A. Kostenko, G. Teschl, *Spectral asymptotics for canonical
  systems*, Theorem 3.1 and Proposition 2.3, 2018,
  https://www.mat.univie.ac.at/~gerald/ftp/articles/AsymCS.pdf
- B5-08 in this repository for local-uniform Weyl convergence and
  finite-interval transfer-matrix convergence.
