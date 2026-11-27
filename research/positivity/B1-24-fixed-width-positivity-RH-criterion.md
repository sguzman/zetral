# B1-24 — Fixed-width paired-packet positivity is RH-equivalent

Date: 2026-11-27. Status: analytic deduction using the unconditional
zero-side Weil form and Landau's Laplace-transform singularity theorem. This
is not a proof of RH or a novelty claim.

## Theorem

Fix any `L0>0`. RH is equivalent to

    W(f_{g,H}*tilde(f_{g,H})) >= 0

for every real `g in C_c^infty((0,L0))` and every packet separation `H>=0`,
where `f_{g,H}(x)=(g(x)+g(H-x))/sqrt(2)`.

RH implies the inequality by the classical Weil criterion. The converse
below uses only the subfamily `H=L0+t`, `t>=0`, and one carefully chosen
fixed profile `g`.

## Fixed-profile construction

Choose `d<L0/2` and let `E` be the real Fréchet space of even smooth
functions supported in `[-d,d]`. For each nontrivial zeta zero
`rho=beta+i gamma`, put `z_rho=rho-1/2` and

    H_h(z)=integral h(x) exp(z x) dx.

The functional `h -> H_h(z_rho)` is continuous and not identically zero on
`E`: a sufficiently narrow even unit-mass bump has transform tending to 1
at that fixed `z_rho`. Its kernel is therefore a proper closed subspace.
There are countably many zeros, so Baire's theorem gives one real even
`h in E` such that `H_h(z_rho)!=0` for every nontrivial zero, including
zeros with multiplicity (the same value is repeated).

Set `c=L0/2` and fix the profile

    g(x)=sqrt(2) h(x-c),

which is supported in `(0,L0)`. For each `t>=0`, use packet separation
`H=L0+t=2c+t`. Evenness of `h` gives the exact identity

    f_{g,L0+t}(x)=h(x-c)+h(x-c-t)
                   = tau_c (h+tau_t h)(x),

where `tau_a h(x)=h(x-a)`. Thus the same profile works for every separation.

## Positivity yields a nonnegative function

Use the unconditional centered zero-side Weil Hermitian form

    B(f,k)=sum_rho H_f(z_rho) overline(H_k(-overline(z_rho))),
    Q(f)=B(f,f)=W(f*tilde(f)).

The series converges absolutely for smooth compactly supported functions;
integration by parts gives rapid decay in `|Im z_rho|`, and the zero count
is `O(T log T)`. Translation invariance follows directly because
`H_{tau_a f}(z)=exp(a z)H_f(z)` and the two factors in each summand cancel.
For real even `h`,

    F_h(t):=B(tau_t h,h)
           =sum_rho H_h(z_rho)^2 exp(t z_rho)

is real. Expanding the quadratic form and using translation invariance gives

    Q(h+tau_t h)=2 Q(h)+2 F_h(t).

By the exact packet representation above, the fixed-width positivity
hypothesis implies `G_h(t):=F_h(t)+Q(h)>=0` for every `t>=0`.

## Laplace transform and Landau contradiction

Assume RH fails. Let

    alpha=sup_rho Re(z_rho)=sup_rho Re(rho)-1/2 > 0.

There is no assumption that this supremum is attained. Since
`sum_rho |H_h(z_rho)|^2<infinity` and `Re(z_rho)<=alpha`,

    |F_h(t)| <= exp(alpha t) sum_rho |H_h(z_rho)|^2,

so the nonnegative `G_h` has a finite Laplace abscissa of convergence
`sigma_c<=alpha`.

For `Re(s)>alpha`, absolute convergence permits termwise integration:

    integral_0^infty F_h(t) exp(-s t) dt
       = sum_rho H_h(z_rho)^2/(s-z_rho).

The right side continues meromorphically to the plane: on compact sets away
from the zeros, its tail converges locally uniformly by the same rapid
decay and zero count. Each `z_rho` is a genuine pole, with residue equal to
its multiplicity times `H_h(z_rho)^2`, which is nonzero by construction.
Adding the constant `Q(h)` adds only `Q(h)/s` to this transform.

The Laplace transform of the nonnegative function `G_h` is holomorphic in
`Re(s)>sigma_c`. Since its meromorphic continuation has a pole at every
`z_rho`, it follows that `sigma_c>=sup_rho Re(z_rho)=alpha`. Hence
`sigma_c=alpha`.

Here is the needed Laplace singularity argument. If a locally integrable
`G>=0` has finite abscissa `sigma_c`, its transform is holomorphic for
`Re(s)>sigma_c`. Suppose it also had a holomorphic continuation to a disk
around the real point `sigma_c`. Choose a real `s0>sigma_c` sufficiently
close to `sigma_c` that the Taylor series of `L(s0-x)` about `x=0` has
radius greater than `s0-sigma_c`. Its coefficients are

    integral_0^infinity t^n G(t) exp(-s0 t) dt / n! >= 0.

At a real `x>s0-sigma_c` still inside that radius, monotone convergence
allows summing the nonnegative Taylor terms under the integral, and gives
`integral G(t) exp(-(s0-x)t)dt < infinity`. This contradicts the definition
of `sigma_c`. Thus the transform must be singular at the real point
`s=sigma_c` (the same proof works after discarding any bounded initial
interval, so eventual nonnegativity suffices).

But the meromorphic series is analytic at the positive real point `s=alpha`:
the zeta function has no real zero in `0<s<1`, so no centered nontrivial
zero `z_rho` is real, and `alpha>0` also avoids the added pole at zero. This
contradiction proves RH. The supremum need not be attained; its value is
forced as the convergence abscissa by the poles approaching its right edge.

## Falsification and literature audit

- The profile `g` is fixed independently of `t`; this matters because the
  hypothesis only quantifies positivity for each admissible fixed profile.
- Packet reflection and the `sqrt(2)` factor were expanded explicitly.
- Distinct zeros have distinct pole locations; multiplicities add and cannot
  cancel. Generic Baire choice prevents a zero residue from vanishing.
- Positivity supplies a one-sided lower bound on the cross term, not an
  absolute-value bound. Landau's theorem is the step that converts that
  one-sided condition into a contradiction without a rightmost zero.
- Danesh's 2026 two-interval criterion proves RH from an eventual uniform
  normalized Cauchy–Schwarz bound for arbitrary separated pairs and uses a
  related zero-pole transform. The present fixed-width deduction has a
  different hypothesis: equal reflected profiles with positivity only. No
  priority or novelty claim is made.

The zero-side Weil form and its translation law are recorded explicitly in
Danesh, [arXiv:2611.10726, equations (1)–(5)](https://arxiv.org/abs/2611.10726).
Its local zero-count and transform decay justify normal convergence. The
continuous Laplace singularity principle is Landau's theorem; its standard
nonnegative-transform statement is summarized
[here](https://mathworld.wolfram.com/LandausOscillationTheorem.html). The
zeta zero-free real interval follows from the alternating eta series and
`zeta(s)=eta(s)/(1-2^(1-s))` for `0<s<1`. This is a manual proof and audit,
not a machine-checked result.
