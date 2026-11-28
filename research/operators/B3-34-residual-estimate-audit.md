# B3-34 — Direct audit of the smoothed residual estimate

Date: 2026-11-27. Status: separate direct rederivation of the B3-33 component bounds;
the residual rate survives this audit. The ACG/CCM source theorems remain
imported and unaudited.

## Audit question

Do the tail coordinate, pole scaling, paired-shift support, and large-prime
sum in B3-33 actually yield `D_lambda lambda log(lambda+2)`? These are the
places where a sign, endpoint, or power-of-lambda error would invalidate the
claimed operator residual.

## Direct calculation

Let `ell=log(lambda)`, `p=N-3/2>1`, and write the tail in global logarithmic
coordinate as `W(t)=0` for `t>=-ell`, with

    |W(t)|+|W'(t)| <= D exp(p(t+ell)),  t<-ell.

Put `y=t+ell`; then `y<0` and the envelope is `D exp(py)`.

### Archimedean multiplier

For every `0<alpha<1/2`, the zero extension belongs to `H^alpha(R)`. On the
negative half-line, its `L2` and `H1` norms are bounded by constants
`C_p D`; the cross-boundary part of the fractional seminorm is bounded by

    C_alpha integral_(-infinity)^0 |W(y-ell)|^2 |y|^(-2 alpha) dy
       <= C_(alpha,p) D^2.

The interior part follows from the derivative envelope and the usual
fractional-difference integral. Therefore the multiplier
`2 theta'(s)=O_alpha((1+|s|)^alpha)` maps this tail to `L2` with norm at most
`C_(alpha,p)D`. This explicitly accounts for the jump at `t=-ell`; using an
`H1(R)` zero-extension claim would have been false.

### Pole functionals

On `[-ell,ell]`, both vectors `exp(t/2)` and `exp(-t/2)` have norm at most
`lambda^(1/2)`. Direct integration gives

    |integral W(t) exp(t/2) dt|
       <= D lambda^(-1/2)/(p+1/2),
    |integral W(t) exp(-t/2) dt|
       <= D lambda^(1/2)/(p-1/2).

The two rank-one outputs are consequently `O_p(D)` and `O_p(D lambda)`;
the larger pole contribution is indeed `O_p(D lambda)`. The requirement
`p>1/2` is met for every `N>=3`.

### Prime-power translations

For `a=log n>0`, the window restriction of `W(t+a)` is zero. The other
paired shift obeys the exact support estimate

    ||1_[-ell,ell] W(. - a)||_2
      <= D/sqrt(2p) * min(1, exp(-p(a-2ell))).

To see this, substitute `y=t-a+ell`; the integration range is
`[-a,min(0,2ell-a)]`, intersected with `y<0`, and integrate `D^2 exp(2py)`.
For `a<=2ell` this is at most `D^2/(2p)`; for `a>2ell` it is at most
`D^2 exp(2p(2ell-a))/(2p)`. Thus the full weighted series is bounded by

    C_p D [ sum_(n<=lambda^2) Lambda(n)/sqrt(n)
       + lambda^(2p) sum_(n>lambda^2) Lambda(n)n^(-p-1/2) ].

Using only `Lambda(n)<=log n`, integral comparison bounds the first sum by
`O(lambda log(lambda+2))`. Since `p>1/2`, the second sum is also
`O_p(lambda log(lambda+2))`: its tail is
`O_p((lambda^2)^(1/2-p) log(lambda+2))` before multiplication by
`lambda^(2p)`. This verifies the large-n decay and includes prime powers.

## Weak-form passage and domain

For a compactly supported smooth window test `phi`, its zero extension and
the B3-32 radical input lie in the cited Weil test class. Since `G=V+W` is
radical, polarization gives

    QW_global(V,phi) = -QW_global(W,phi).

The multiplier estimate, two pole functionals, and absolutely convergent
shift estimate represent the right side by an `L2` vector on the window.
By the closed-form representation theorem, density of the form core then
places `V` in `Dom(A_lambda)` and identifies that vector with `A_lambda V`.
Independently, the explicit operator formula gives the same membership:
`V` is piecewise `C1` with a finite endpoint jump, hence its Fourier
transform is `O_lambda(1/|s|)` and the logarithmic multiplier output is in
`L2`; all fixed-window pole and shift terms are bounded.

Combining this audit with B3-32's seminorm growth
`M_N^0+M_N^1=O_N(lambda^(3/2+3N/4))` gives

    D_lambda=O_N(lambda^(3-N/4)),
    ||A_lambda V||=O_N(lambda^(4-N/4) log(lambda+2)).

At `N=24` this is `O(lambda^-2 log(lambda+2))`. Also
`|QW_lambda(V,V)|=O_N(lambda^(6-N/2))`, hence `O(lambda^-6)` at `N=24`.
With `||V||>=c>0`, the centered normalized residual has the same
`O(lambda^-2 log(lambda+2))` bound.

## Falsification attempts and limits

The endpoint jump does not permit `H1(R)` zero extension, but it is harmless
for every fractional exponent below `1/2`; this was a potential failure
mode and is handled explicitly above. The shift `W(t+a)` vanishes on the
window; swapping the translation convention would incorrectly retain it.
The second pole functional has size `D lambda^(1/2)`, not
`D lambda^(-1/2)`, and produces the dominant `D lambda` term. The tail prime
sum uses the exponent `p+1/2=N-1>1`, so absolute convergence holds.

No gap or lower spectral bound follows. The result only says some spectrum
is close to the Rayleigh value. No proof of positivity, ground-state
identification, simple spectrum, Mellin convergence of a ground state, or
zeta-zero correspondence is supplied. The ACG radical inclusion/prolate
estimates and CCM operator formula are still imported, not independently
proved here. No novelty claim is made.

## Source references

- B3-33 residual estimate: `research/operators/B3-33-smoothed-prolate-operator-residual.md`.
- B3-32 arithmetic-tail and seminorm estimates:
  `research/operators/B3-32-smoothed-prolate-tail-energy.md`.
- B3-27 operator normalization and paired shifts:
  `research/operators/B3-27-exact-restricted-Weil-operator-decomposition.md`.
