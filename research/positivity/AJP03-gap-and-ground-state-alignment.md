# AJP03 — Quantitative pole-free gap and pole-alignment necessity

2026-11-25. Internal candidate deductions, not independently checked. Basic positivity and rank-one capacity criteria overlap the external teal-sea research note (AJP01–02); no priority claim. The estimates below concern the actual pole-free operator, not a substitute spectrum.

## 1. A finite-window positive gap bound

Use AJP01 notation, phi the unit positive ground state and mu its eigenvalue. The zero-extended form can be written as
    t(f)=E_int(f)+int_I V(x)|f(x)|² dx,
where E_int is one half the double integral of squared differences against the symmetric continuous and atomic jump measure restricted to I×I. V is the scalar alpha0-2 sum c_n plus the nonnegative exit killing rate; in particular V is bounded below. The finite atomic contributions use the same full-line zero-extension convention as AJP01. Both interior energy and nonnegative exit energy are finite on the form domain.

First phi is bounded. Let T_free be the full-line operator with multiplier
    b(t)=alpha(t)-2 sum_(s_n<2a)c_n cos(t s_n).
It has the same jump form plus scalar, and the interval operator is its zero-extension restriction in the form sense. Killed semigroup domination follows directly from the resolvent comparison: for nonnegative F supported in I, solve the two shifted resolvent equations with sufficiently large common shift, giving nonnegative full-line v and interval u. The positive part w=(u-v)_+ vanishes outside I and belongs to the full-line log form domain by the lattice property; it is an admissible interval test by the zero-extension domain characterization. Subtract the weak equations tested against w. For real functions the jump bilinear form between u-v and w dominates the jump energy of w, since (r-s)(r_+-s_+) >= (r_+-s_+)². The shifted scalar term is positive and equals its value on w. Therefore w=0. Iterating the resolvent inequality and taking the Euler semigroup limit proves 0<=e^(-tT)F<=e^(-tT_free)F (zero extension). Positivity of the full-line operator follows from its same Markovian jump representation, without an RH assumption.

The full-line Fourier multiplier satisfies exp(-b(t))<=exp(2 sum c_n) exp(-alpha(t)). Since alpha(t)=log(2+|t|)+O(1), the latter exponential without its constant is square-integrable. Fourier inversion and Cauchy–Schwarz give the explicit finite estimate
    M=||phi||_infty <= C_alpha exp(mu+2 sum c_n),
    C_alpha=[(2pi)^-1 int_R exp(-2 alpha(t))dt]^(1/2).
Use e^(-T)phi=e^(-mu)phi and free domination at time 1. This bound is generally enormous, not a uniform large-window estimate.

For a bounded real form vector f and eps>0, test the ground-state equation against g=f²/(phi+eps), which is in the form domain: bounded Lipschitz operations of the bounded form vectors f,phi control the jump differences and |g|<=||f||_infty |f|/eps controls exit killing. At two interior points with p=phi(x)+eps, q=phi(y)+eps, the elementary identity is
    (f(x)-f(y))²-(p-q)(f(x)²/p-f(y)²/q)
        =pq(f(x)/p-f(y)/q)².
The ground-state equation therefore gives
    t(f)-mu||f||²
      = (1/2) int_I² (phi(x)+eps)(phi(y)+eps)
             |f(x)/(phi(x)+eps)-f(y)/(phi(y)+eps)|² dJ
        +int_I (V-mu) eps f²/(phi+eps).
Here dJ denotes the symmetric pair jump measure, not merely its continuous density. The negative part of the last integral tends to zero by boundedness below and dominated convergence (phi>0 a.e.). Discard the nonnegative part and use Fatou on the continuous jump term alone. Since k(|x-y|)>=j0=k(2a) and phi<=M, we get
    t(f)-mu||f||² >= (j0/(2M²)) int_I² phi(x)² phi(y)²
                          |f(x)/phi(x)-f(y)/phi(y)|² dxdy
                      = (j0/M²)(||f||²-|<phi,f>|²).
The inequality extends to arbitrary real form vectors by truncation f_N=max(-N,min(f,N)): f_N->f in form norm by dominated convergence of differences of the truncation error and of exit terms, then to complex vectors by real/imaginary parts. In particular the next distinct eigenvalue, in either parity sector, satisfies
    gap(T_a) >= k(2a)/||phi||_infty²
               >= k(2a) C_alpha^-2 exp(-2mu-4 sum c_n)>0.       (1)
AJP01 simplicity already proves strictness; (1) gives a quantitative albeit weak lower bound using only arithmetic and the pole-free bottom. One may replace mu in the exponent by an explicit variational upper bound to get an entirely scalar lower bound. Its double-exponential weakness at large a cannot certify the residual positivity.

## 2. Alignment necessary for sub-leading full negative depth

Define c=cosh(x/2), C=||c||²=sinh a+a, phi the same even unit ground state, and N=max(0,-lambda_1(A_a)). Put p=c/sqrt(C). Since phi is a valid even trial,
    -N <= mu+2C |<p,phi>|².
Equivalently, with d²=1-|<p,phi>|²,
    2C d² <= N+mu+2C.                                    (2)
The nonnegative right side is an exact consequence, not a sign assumption. AJP01 gives mu/e^a->-1 and 2C/e^a->1, hence mu+2C=o(e^a). It follows:
    N=o(e^a)  =>  ||phi-p||_2->0.
Indeed both vectors are nonnegative, so ||phi-p||²=2(1-<p,phi>)<=2d². Conversely any fixed positive limsup of d² implies a positive limsup of e^-a N. More precisely limsup d²<=limsup e^-a N by (2) and the asymptotic constants. RH implies the antecedent (N=0), but (2) alone does NOT prove RH, ordinary upper rate, or the converse implication that alignment forces N=o(e^a).

In PBC01 fixed endpoint coordinates the normalized c converges in L² to (h,h)/sqrt(2), h(t)=exp(-t/2), directly by its two exponential components and C asymptotic. Thus under RH, or under the weaker N=o(e^a), the pole-free ground state converges strongly to that explicit endpoint profile. The normalized prime operator converges only strongly, not in norm; positivity of phi alone is not enough to conclude this profile unconditionally. This implication concerns the pole-removed ground state, not the full Weil ground state (which may be sign-changing). It offers an arithmetic-only necessary test for the sub-leading scale: quantitative control of misalignment produces a lower obstruction, not an upper certificate.

AJP03 complete as candidate. AJP04 assesses whether a scalar comparison or capacity reduction can exploit these estimates at the required precision; no actual eigenvalue computation or independent verification.
