# B3-53 — A scale-explicit isolated-block tail bound

Date: 2026-11-28. Status: elementary uniform bound beyond the Slepian scale;
the large-shift regime and operator-sum localization remain open.

## Question

Can the fixed-scale archimedean tail transferred in B3-52 be bounded with
explicit dependence on the prolate scale, at least once the singular-index
cutoff lies beyond the Slepian bulk?

## Finite-rank approximation of the prolate kernel

For the archimedean block at scale `T`, ACG identifies its singular values
with those of the finite Fourier transform restricted to `[-T,T]`. By Fourier
dilation, its nonzero singular values are those of
`P_[-1,1] F P_[-T^2,T^2]`, where `F` has kernel
`exp(-2 pi i x y)`. The kernel rectangle has area `4 T^2`.

For an integer `N>=1`, replace its kernel by

    R_N(x,y) = sum_(k=0)^(N-1) (-2 pi i x y)^k/k!.

This gives an operator of rank at most `N`. Since `2 pi x y` is real, the
integral form of Taylor's remainder and `|exp(-iu)|=1` give

    |exp(-2 pi i x y)-R_N(x,y)| <= (2 pi |x y|)^N/N!.

The Hilbert–Schmidt error, and hence the operator-norm error, is at most

    2 T (2 pi T^2)^N/N!
      <= 2 T (2 pi e T^2/N)^N.

Thus, for `N>=4 pi e T^2`, the `(N+1)`-st singular value is at most
`2 T 2^(-N)`. Applying this with `N=n-1` yields

    kappa_n(T) <= 2 T 2^(-(n-1))    (n-1 >= 4 pi e T^2).

Because the Mellin-band multiplier `M_chi_R` is a contraction, the isolated
archimedean localized tail satisfies

    L_T(n0,R) := sum_(n>n0) kappa_n(T)
                   ||M_(chi_R)^(1/2) a_n(T)||^2
               <= 4 T 2^(-n0),

provided `n0>=4 pi e T^2`. B3-52 transfers this same bound exactly to the
isolated shift with effective scale `T=t p^(m/2)`.

For its geometric coefficient `d_(p,m)=(1-p^(-1))p^(-m/2)`, this gives

    d_(p,m) L_(T_m)(n0,R) <= 4(1-p^(-1)) t 2^(-n0)

whenever `n0>=4 pi e t^2 p^m`. Consequently the sum of the *separate*
localized traces over the geometric modes satisfying this condition is at
most

    4(1-p^(-1)) t (M+1) 2^(-n0),
    M = floor(log_p(n0/(4 pi e t^2))),

when `n0>=4 pi e t^2`; if not, this estimate covers no geometric mode. The
exceptional shift `-log p` has scale `t p^(-1/2)` and coefficient magnitude
`p^(-1/2)`, so it contributes at most `4t p^(-1)2^(-n0)` when
`n0>=4 pi e t^2/p`.

## What remains uncontrolled

The bound is uniform in the scale only in the region `n0 >= 4 pi e T^2`.
For shifts with `T^2>n0/(4 pi e)`, the Taylor-rank estimate gives no useful
small tail: the cutoff lies inside the prolate bulk. Thus it does not control
all prime-power shifts for fixed `n0`, even for a single prime. Moreover,
summing separate block traces is not the same as the localized negative trace
of the operator sum, because the shift blocks' singular subspaces can mix.
The still-needed estimates are therefore (i) low-Mellin-content suppression
for large `T` before `n0` passes its bulk scale, and (ii) a trace/Schatten
stability estimate for the sum. The operator-norm truncation in B3-50 alone
does not provide (ii).

## Verification and prior art

The rank bound and remainder estimate above are re-derived directly from the
Taylor polynomial, the integral remainder, and the Hilbert–Schmidt kernel
norm. No computation or formal proof was used. The same one-dimensional
Fourier-rectangle approximation appears in Azimifard, *Plunge bounds for
Fourier concentration operators: geometry, smoothing, and wave packets*,
arXiv:2610.09406v1, Lemma 2.3; that paper is a recent preprint, and no claim
is made here about its main theorem. ACG's identification of the archimedean
singular values with the prolate finite-Fourier singular values is imported
from arXiv:2611.13129v1, Lemma 8.6. This is a partial isolated-shift bound,
not (66), not the full semilocal H2′ estimate, and not an RH result.
