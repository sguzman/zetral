# B3-42 — Direct derivation of the prime-side transform

Date: 2026-11-28. Status: hand-checked analytic derivation of Suzuki's
existing theorem; not a new theorem, Lean-checked proof, or RH result.

## Question and source

Can the transform identity linking the prime-defined screw function to the
completed zeta logarithmic derivative be recovered directly from the
explicit formula, including all constants and justified exchanges?

Source: M. Suzuki, *Aspects of the screw function corresponding to the
Riemann zeta-function*, [arXiv:2206.03682v4](https://arxiv.org/abs/2206.03682v4),
Theorem 1.1, equations (1.1)–(1.2), and §2. The arXiv HTML labels v4 as
submitted 30 May 2023, while the paper itself says “Version of August 24,
2026”; this source-version metadata discrepancy is retained rather than
silently normalized. The stated identity is

    integral_0^infinity Psi(t) exp(i z t) dt
      = -z^(-2) xi'(1/2-i z)/xi(1/2-i z),   Im z > 1/2.

The formula for `Psi` is decomposed into its rational/exponential term, prime
sum, linear gamma term, and Hurwitz–Lerch term as in (1.1).

## Derivation

Put `a=1/4`, `s=1/2-iz`, `d=-iz/2`, and `w=s/2=a+d`; write `y=Im z>1/2`.
The elementary transforms are

    integral_0^infinity exp(i z t) dt = i/z,
    integral_0^infinity t exp(i z t) dt = -1/z^2,
    integral_L^infinity (t-L) exp(i z t) dt = -exp(i z L)/z^2.

For each prime power `n`, set `L=log n`. Its contribution from the negative
prime sum in (1.1) is

    (Lambda(n)/sqrt(n)) exp(i z log n)/z^2.

Since `Re(s)=1/2+y>1`, the Dirichlet series is absolutely convergent and the
sum of these terms is

    z^(-2) sum_n Lambda(n)n^(-s) = -z^(-2) zeta'(s)/zeta(s).

The first term of (1.1) transforms to

    R=4[-1/(1/2+i z)-1/(-1/2+i z)-2i/z]
     =4[1/(s-1)+1/s]-8i/z
     =-z^(-2)[1/(s-1)+1/s].

Here the final equality uses `s(s-1)=-1/4-z^2`. The linear term transforms
to `-(psi(a)-log(pi))/(2z^2)`.

For the remaining term define

    C=Phi(1,2,a)=sum_(n>=0)(n+a)^(-2)=psi'(a).

The last equality is the trigamma series. The explicit value in the source,
`C=pi^2+8G`, also follows by separating positive integers congruent to 1 and
3 modulo 4. Termwise integration gives

    F = i C/(4z) - (1/8) sum_(n>=0) 1/((n+a)^2(n+w))
      = (1/8) sum_(n>=0) [1/(d(n+a)^2)-1/((n+a)^2(n+w))]
      = (1/(8d)) sum_(n>=0) 1/((n+a)(n+w))
      = (psi(w)-psi(a))/(8d^2)
      = -(psi(w)-psi(a))/(2z^2).

The penultimate equality follows from the absolutely convergent digamma
difference series `psi(w)-psi(a)=d sum 1/((n+a)(n+w))`; `d` is nonzero on
the stated half-plane. Combining the linear and Franel terms yields

    -(psi(s/2)-log(pi))/(2z^2).

Adding all four components and using the logarithmic derivative of
`xi(s)=s(s-1) pi^(-s/2) Gamma(s/2) zeta(s)/2` gives exactly

    integral_0^infinity Psi(t) exp(i z t) dt
      = -z^(-2)[1/s + 1/(s-1) - log(pi)/2
                 + psi(s/2)/2 + zeta'(s)/zeta(s)]
      = -z^(-2) xi'(s)/xi(s).

## Convergence and scope

All interchanges above hold for `y>1/2`. For the prime part, the integral of
the absolute value of the `n`th summand is bounded by
`Lambda(n)n^(-1/2-y)/y^2`, whose series converges because `1/2+y>1`.
For the Lerch part, Tonelli's theorem applies to the absolute majorant with
integrated terms proportional to `(n+a)^(-2)/(2(n+a)+y)`, a summable
series. The elementary exponential and linear terms are integrable because
`y>1/2`. No boundary statement at `y=1/2` is obtained.

This independently checks the algebraic transform step feeding the
prime-defined global Weyl function. It relies on the explicit formula (1.1)
and standard digamma/Dirichlet-series identities, but not on the transform
identity (1.2) itself. It does not prove Suzuki's canonical-system
reconstruction, spectral-transform theorem, an arithmetic spectral
correspondence, or RH. No computation was needed; this is a manual
derivation, not a formal proof or an independent peer review.
