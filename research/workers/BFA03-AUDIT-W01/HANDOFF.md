# BFA03 independent second-moment audit

2026-11-25. I checked the symbol split, model action, support restriction, and tail normalization in `research/positivity/BFA03-singularity-lift-second-moment.md` at main commit `2c14775`. The displayed constants are consistent in the fixed-window setting. This is an internal estimate audit, not formal verification of the imported CPC04/CME03 form identities.

## Checks

- The identity (k(s)=1/(2s)+j(s)) gives (\alpha_\chi(t)=C+M(t)-2\int_0^{d_0}j(s)\cos(ts)ds). The Fourier multiplier (M) acts by the symmetric second difference (\int_0^{d_0}(2v(x)-v(x+s)-v(x-s))/(2s)\,ds); this retains the physical projection (Q) in the operator action and in the norm square.
- For (r(t)=-2\int_0^{d_0}j(s)\cos(ts)ds), one integration by parts gives the bound (J/|t|), with (J=2(|j(d_0)|+\int|j'|)). Combining it with (|c_n|\le V/(\sqrt{2L}|t_n|)) gives
  \[
  J^2V^2\frac{1}{2L}\,2\Big(\frac L\pi\Big)^4\sum_{n>N}n^{-4}
  \le \frac{J^2V^2L^3}{3\pi^4N^3},
  \]
  so the stated squared (L^2) error and (N^{-3/2}) norm error have the correct factors.
- For (d_0=1), the model action on the constant seed is (-\tfrac12\log(d(1-d))). The endpoint limit (2F(d)+\log d\to\log4+\pi/2) yields (C=-\gamma-\log2-\log\pi), consistent with the benchmark action.
- The sharper real bounds follow from (j(s)=\tfrac12\int_0^1g'(\theta s)d\theta) and (j'(s)=\tfrac12\int_0^1\theta g''(\theta s)d\theta). The stated (g') and (g'') envelopes imply (|j|<1), (|j'|<1), hence (J\le4). The length-one tail coefficient is (512/(3\pi^4N^3)).
- For the midpoint residual-symbol quadrature, differentiating (j(s)\cos(ts)) twice gives the conservative bound (20+20|t|+10t^2), matching the proposed enclosure recipe.

## Limits

The error estimate applies to fixed BV seed data and truncates only the (O(1/t)) residual; it does not bound high-degree moments uniformly. The proposed lifted action still requires certified evaluation of the singular model and physical-space integral. No numerical BFA03 benchmark was rerun, and no eigenvalue or operator positivity conclusion follows.
