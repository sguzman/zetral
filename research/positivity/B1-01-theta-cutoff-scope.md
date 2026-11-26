# B1-01 — Scope audit of the theta-cardinal cutoff estimate

Date: 2026-11-26. Status: completed logical/dependency audit; no new RH
implication or positivity theorem. This is a bounded investigation of whether
the existing theta-cardinal estimate can supply the uniform analytic tail
needed to extend the finite arithmetic Gram certificates.

## Precise question

Can the fixed-index estimate in `research/theta-cardinal-bound.md` be used to
derive positivity of the original Weil quadratic form for every compact
support parameter, or a uniform tail estimate for the finite Gram
certificates, without additional hypotheses or a new argument?

## Objects and quantifiers

The theta-cardinal estimate assumes RH and uses Suzuki's sampling isomorphism
and inverse compression. For each fixed zero index `n`, it bounds the
difference between the `n`th positive eigenvalue of Suzuki's phase-pi
differentiation extension and the ordinate `gamma_n`. Its constants depend on
`n`, on the target zero multiplicity, and on derivatives of the completed
zeta function at that zero. It explicitly makes no uniform-in-`n` or
zero-independent computability claim.

The finite campaigns instead certify selected matrices for the arithmetic
quadratic form at selected support lengths and with explicit finite
truncations and tail majorants. The present repository has not established a
map turning the R05 eigenvalue error into a uniform lower bound for these
finite Gram matrices. Theorem 1.1 of the inspected Suzuki source is itself
conditional on RH and concerns a different operator construction. This is an
object mismatch as well as a quantifier mismatch; no such transfer is
asserted here.

## Falsification of the tempting uniformity inference

Pointwise-in-index decay cannot by itself be made uniform in the index. For
example, define `e_n(A)=1` when `A<n`, and `e_n(A)=exp(-A)` when `A>=n`.
For every fixed `n`, `e_n(A)=O_n(exp(-A))` as `A` tends to infinity, while
`sup_n e_n(A)=1` for every finite `A`. This is a counterexample to the
quantifier inference only, not a model for the actual zeta spectrum. R05's
stated constants and threshold are likewise index-dependent, so its theorem
statement alone gives no uniform control over all modes.

## Prior-art and logical boundary

The repository's source audit pins R05 to Suzuki, arXiv:2610.32704v1,
Theorem 1.1 and §§2–4, and records related theta-window work by Zhu and Mori
in `literature/theta-prior-art.md`. For the broader positivity target, Weil's
criterion identifies positivity of the explicit-formula quadratic
functional on the full compactly supported test class with RH; Bombieri's
formulation gives the autocorrelation version (Theorem 1),
<https://www.bdim.eu/item?fmt=pdf&id=RLIN_2000_9_11_3_183_0>.
Therefore a proof that truly extends the original form's positivity to all
support lengths would be RH-strength. This is the intended mission, but the
finite frontier and the conditional R05 rate do not already accomplish it.

## Result and next experiment

The theta-cardinal result supplies no B1 tail inequality as currently
formulated. It is useful as a conditional fixed-index spectral convergence
estimate, while B1 requires a zero-independent estimate tied directly to the
arithmetic form and uniform over its growing mode set. This negative finding
rejects only the proposed shortcut; it does not reject analytic extension.

## Direct arithmetic-tail route: absolute shift mass

Write `X=exp(h)` and let the positive shift mass be
`B(X)=sum_{p^k<X} log(p)/p^(k/2)`. This is the coefficient sum in the
log-coordinate prime-power shift family. The prime contribution satisfies

    sum_{p<=X} log(p)/sqrt(p)
      = theta(X)/sqrt(X) + (1/2) integral_2^X theta(t)t^(-3/2) dt
      ~ 2 sqrt(X),

by partial summation and the prime number theorem `theta(t)~t`. The square
prime contribution is `O(log^2 X)` by comparison with all integers, and the
sum over powers `k>=3` is `O(1)` because
`sum_{n>=2} log(n)/n^(3/2)` converges. Hence
`B(X)~2 sqrt(X)=2 exp(h/2)`.

Every individual zero-extended dilation/translation used in the arithmetic
shift representation is a contraction on the ambient log-coordinate L2
space (the window restriction is an orthogonal compression). Therefore the
triangle estimate for their weighted sum is at most `B(X)`, and its
coefficient majorant grows like `2 exp(h/2)`. This rigorously rules out a
uniform-in-h bound from the absolute shift-mass/triangle method. It is not a
lower bound on the norm of the signed sum: oscillatory cancellation may make
the actual operator much smaller. Thus it falsifies this proof route, not
analytic extension itself. The PNT input is standard; DLMF §25.16 records
the Chebyshev-function formulation,
<https://dlmf.nist.gov/25.16>.

The next experiment is now sharper: seek a cancellation-aware estimate for
the oscillatory high-mode sum as both the number of prime-power shifts and
the phase angles vary with `h`; compare it to the BC03 fixed-shift Abel bound.
Try to prove quantified control or exhibit an exact interval counterexample
to a proposed uniform bound. No sampled endpoint will be treated as a
theorem.

## B1-02: endpoint coherence defeats blanket cancellation

For a fixed `alpha>0`, partial summation and `theta(t)~t` also give the
oscillatory prime sum

    S(X,alpha) = sum_{p<=X} log(p)/sqrt(p) sin(alpha log(p))
               = Im(X^(1/2+i alpha)/(1/2+i alpha)) + o(sqrt(X)).

The contribution of prime squares to the corresponding prime-power sum is
`O(log^2 X)` by an absolute integer comparison; powers `k>=3` contribute
`O(1)`. Now set `h_m=2 pi m`, `X_m=exp(h_m)`, and choose the integer mode
`n_m=m`. The BC03 phase is then
`n_m*pi*log(q)/h_m=(1/2)log(q)`, so `alpha=1/2` and the endpoint phase is
`exp(i alpha h_m)=(-1)^m`. Consequently

    S(X_m,1/2) = -(-1)^m sqrt(X_m) + o(sqrt(X_m)).

Meanwhile the full positive coefficient mass is `B(X_m)~2 sqrt(X_m)`.
Thus the sine-projected prime-power sum is not `o(B(X_m))`; its ratio to the
total coefficient mass has absolute limit `1/2`. The common BC03 factor
`2 sqrt(2)/pi` cancels in this ratio. The bounded archimedean coefficient
cannot cancel this `sqrt(X_m)` term when the high-mode cutoff scales with
`h_m` as in its rate-sum estimate.

This rigorously falsifies the heuristic that the expanding prime-power
phases automatically average away. It does not disprove a uniform bound for
the normalized tail: the ratio is bounded, and the target positivity problem
depends on squares, cross terms, other modes, and the exact positive
coercivity. No nonpositivity or counterexample to RH follows. It does show
that a useful uniform argument must retain the endpoint main term rather
than discard all oscillation through cancellation. This is an asymptotic
derivation from the classical PNT, not finite numerical evidence.

Next derive a uniform decomposition into the explicit endpoint main term
above plus a controlled error uniformly for `alpha=n*pi/h` over the mode
range used by the high-mode comparison; then propagate it through the square
and exact rank allocation. Falsify that proposed decomposition near
successive prime-power thresholds. The full signed matrix inequality remains
open.

## B1-03: compact-frequency uniform endpoint expansion

This next step can be proved at the level of the raw shift coefficient.
Let `theta(x)=sum_{p<=x} log p=x+o(x)` (PNT), and for fixed `A>0` define
`f_alpha(t)=t^(-1/2+i alpha)`, `|alpha|<=A`. Partial summation gives

    sum_{p<=X} log(p) p^(-1/2+i alpha)
      = X^(1/2+i alpha)/(1/2+i alpha) + o_A(sqrt(X)),

uniformly for `|alpha|<=A`. Indeed, writing `E(t)=theta(t)-t=o(t)`, the
boundary error is `E(X)f_alpha(X)=o(sqrt(X))`; for the integral error use
`|f'_alpha(t)| <= (1/2+A)t^(-3/2)`, split at a fixed `T`, and bound the
remaining part by `epsilon * integral_T^X t^(-1/2)dt`. This proof gives
uniform little-o without requiring a quantitative PNT remainder. Prime
squares contribute `O(log^2 X)` uniformly by comparison with all integers;
powers `k>=3` contribute `O(1)` uniformly by absolute convergence.

Consequently, for the full prime-power shift sum
`C(X,alpha)=sum_{p^k<=X} log(p) p^(-k/2+i alpha k)`,

    C(X,alpha)/B(X)
       = exp(i alpha h)/(2(1/2+i alpha)) + o_A(1),
       B(X)=C(X,0)~2 sqrt(X),    X=exp(h),

uniformly for `|alpha|<=A`. At BC03's mode phase `alpha=n*pi/h`,
`exp(i alpha h)=(-1)^n`, so its sine projection satisfies

    Im(C/B) = -(-1)^n alpha/(2(1/4+alpha^2)) + o_A(1).

This both explains B1-02 and extends it uniformly over every compact scaled
frequency interval. In the BC03 normalization the constant multiplier
`2 sqrt(2)/pi` cancels. If the cutoff `M` is chosen proportional to `h`,
the archimedean coefficient bound remains `O(1)` and is negligible relative
to `B(X)`. This is a rigorous asymptotic result for raw coefficients under
the unconditional PNT, not yet a bound for the squared, weighted matrix tail.

**Next question.** Can this compact-frequency main term be squared and summed
against the actual `n^(-p)/g(n)` weights uniformly, while a separate bound
controls `alpha>A` and the full matrix cross terms? A useful falsification
attempt is to track the exact `g(n)` lower bound and rank factor as `M` and
the number of shifts grow; a bounded normalized modal coefficient alone does
not imply positive residual slack.
