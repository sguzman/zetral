# B1-21b — Continuous, pole, and archimedean remainder bounds

Date: 2026-11-27. Status: RH-conditional uniform upper bound for the full
direct Weil form on paired packets in the logarithmic profile norm; no
positivity or coercivity conclusion.

## Question and setup

For fixed `L>0`, real `g in C_c^infty((0,L))`, and
`f_h(x)=(g(x)+g(h-x))/sqrt(2)`, do the continuous kernel, pole, and
archimedean terms remain uniformly bounded in `h` by the logarithmic Fourier
norm of `g`? Use Suzuki's direct formula (B1-15, equation (1)) and
`||g||_log^2=integral log(2+|xi|)|g_hat(xi)|^2 dxi`.

## Continuous kernel

Write `K(x)=e^{-x/2}/(1-e^{-2x})=sum_{n>=0}e^{-a_n x}`, with
`a_n=2n+1/2`. For an autocorrelation `u=f*tilde(f)`, the subtracted
continuous integral is

    J(f)=integral_0^infty (u(x)-||f||_2^2 e^{-x/2}) K(x) dx.

For smooth compactly supported `f`, Fourier inversion and the Laplace cosine
integral give

    J(f)=(1/(2 pi)) integral |f_hat(xi)|^2 M(xi) dxi,
    M(xi)=sum_(n>=0)[a_n/(a_n^2+xi^2)-1/(a_n+1/2)].

The subtraction makes each summand `O(a_n^-2)` for bounded `xi`, so the
series is locally uniformly convergent. Put `R=max(1,|xi|)`. For `a_n<=R`,
the first summands have total `O(1)` when `|xi|>=1` (and are bounded on
`|xi|<=1`), while the subtracted harmonic sum is `O(log(2+R))`. For
`a_n>R`,

    |a_n/(a_n^2+xi^2)-1/(a_n+1/2)|
       <= xi^2/a_n^3 + C/a_n^2,

whose tail is `O(1)`. Hence `|M(xi)|<=C log(2+|xi|)` globally. Termwise
Fourier inversion is first applied to finite kernel sums; the displayed
bound and the `O(x)` cancellation of the bracket at zero justify passage to
the limit for smooth compactly supported `f`. Thus `J` extends continuously
to `H^log` by density.

For `f_h`, translation and reflection preserve the even logarithmic weight,
so `||f_h||_log^2<=2||g||_log^2`; therefore the direct continuous term
`-2J(f_h)` is uniformly bounded by `C||g||_log^2` for all `h`.

## Pole and archimedean terms

The pole term is a fixed coefficient times `u_h(0)=||f_h||_2^2<=2||g||_2^2`.
For `h>2L`, set `G_+=integral g(x)e^{x/2}dx` and
`G_-=integral g(x)e^{-x/2}dx`. Direct expansion gives

    Q_arch(f_h)=2G_+G_-+e^{-h/2}G_+^2+e^{h/2}G_-^2.

The leading `e^(h/2)G_-^2` term cancels the corresponding first-prime
PNT main term. B1-20 bounds the remaining first-prime discrepancy by
`C||g||_log^2` under RH. Archimedean self/other terms are bounded by
`C_L||g||_2^2`. For `0<=h<=2L`, the packet support lies in `[-L,2L]`,
so the archimedean integral is bounded by `C_L||g||_2^2` directly.

Combining this with B1-21a's unconditional prime-square and higher-power
bounds shows that for fixed `L`, under RH,

    |W(f_h*tilde(f_h))| <= C_L ||g||_log^2  (h>=0).

The estimate is an upper bound on this paired-packet family. The RH
dependence enters through B1-20; the continuous multiplier and prime-power
bounds are unconditional.

## Scope and audit boundary

This establishes no nonnegativity, lower bound, coercivity, or extension to
arbitrary test functions outside the paired family. In particular it does
not resolve Suzuki's uniform local RKHS-kernel criterion, prove RH, or
identify an operator with zeta zeros. The kernel expansion, multiplier sign
and factors were rederived from the direct formula in B1-15; the Fourier
normalization is the `1/(2 pi)` convention used by B1-09/B1-20. The
derivation is manual, not machine checked. No novelty claim is made.

Primary source: [Suzuki, arXiv:2611.33001v1, equation (1.2)](https://arxiv.org/html/2611.33001v1).
