# B3-44 — A real modulation probe for ACG's H2′ tail bound

Date: 2026-11-28. Status: exact necessary averaged-density criterion and
sufficient pointwise criterion; the arithmetic H2′ estimate remains open.

## Source condition

Fix the semilocal scale `t` and tail index `n0` in ACG §8.3. Write
`N=N_t^(n0) >= 0` for the negative near-self-dual tail and
`rho(s)=sum_(n>n0) kappa_n(t)|M a_n(is)|^2` for its Mellin density. With
`F(s)=M f(is)`, the spectral expansion gives

    Tr(theta(f) N theta(f)^*) = (1/(2 pi)) integral |F(s)|^2 rho(s) ds,
    Lambda(f) = (1/(2 pi)) integral |F(s)|^2 log(2+|s|) ds.

ACG's (H2′) asks for the first quantity to be at most
`epsilon_t(n0) Lambda(f)`, uniformly over real smooth `f` supported in the
window, with `epsilon_t(n0)->0`.

## Necessary symmetric moving-average test

Let `f` be any nonzero real smooth function supported in the window and set
`F(s)=M f(is)`. For `T>=0`, both

    f_c,T(u)=f(u) cos(T log u),
    f_s,T(u)=f(u) sin(T log u)

remain real smooth admissible tests. Their Mellin transforms are

    F_c,T(s) = (F(s+T)+F(s-T))/2,
    F_s,T(s) = (F(s+T)-F(s-T))/(2i).

The parallelogram identity gives the exact pointwise relation

    |F_c,T(s)|^2 + |F_s,T(s)|^2
       = (|F(s+T)|^2+|F(s-T)|^2)/2.

Apply (H2′) to both tests and add. Normalize
`K_f(s)=|F(s)|^2/(2 pi ||f||_2^2)`; Mellin Plancherel gives
`integral K_f=1`. Then the exact necessary consequence is

    (1/2) integral [K_f(s+T)+K_f(s-T)] rho(s) ds
      <= epsilon_t(n0) (1/2) integral
           [K_f(s+T)+K_f(s-T)] log(2+|s|) ds.       (1)

Since `F` is Schwartz, the right-hand normalized average is
`log(2+T)+O_f(1)` as `T->infinity`. Indeed, after shifting the integration
variable, the difference between `log(2+|T-r|)` and `log(2+T)` is bounded
by `log(1+|r|)`, which is integrable against `K_f(r)`. Thus (H2′) forces
every such symmetric local Mellin average of the tail density near `+T`
and `-T` to be `O_f(epsilon_t(n0) log(2+T))`, uniformly in `T`.

This modulation is deliberately real-valued, so it respects the source's
test-function quantifier. It avoids assuming that H2′ is valid for arbitrary
complex tests or that its restricted Mellin-transform family is dense in an
unweighted `L^2` space. The conclusion is averaged: it does not imply a
pointwise bound on `rho`.

## Sufficient criterion and limitation

A simple sufficient condition for H2′ is

    rho(s) <= epsilon_t(n0) log(2+|s|)   for almost every real s,

because inserting it in the density integral proves the desired inequality
for every admissible `f`. This criterion is stronger than necessary on the
restricted family of Mellin transforms. Formula (1) is instead a family of
necessary smoothed tests and can detect a proposed density estimate that
places too much mass in a frequency band, even when a pointwise bound is
unavailable.

The ACG local trace-class result and Lemma 8.8 give convergence of these
averages for each fixed `T` as `n0->infinity`, but no uniform rate in `T`.
Lemma 8.9 bounds local mass polynomially in the window size, uniformly in
`n0`, also without the required tail decay. This probe therefore sharpens
what a quantitative localization proof or counterexample must address; it
does not prove (H2′), the positive-complement theorem, the transition/pole
Schur sign, or RH.

## Verification boundary and source

The shift formulas, parallelogram identity, Plancherel normalization, and
logarithmic large-`T` estimate were derived directly. No numerical or formal
verification was used. Source: Andrews–Connes–La Gatta,
[*The uncertainty operator, the Weil ground state and the zeros of zeta*](https://arxiv.org/abs/2611.13129v1),
§8.3, Lemmas 8.8–8.9, (H2′), (64)–(66), and Remark 8.10. The next step is
to estimate these smoothed density averages using the actual finite-prime
Hankel/local-factor structure, preserving the `n0`, `T`, and prime-set
dependence.
