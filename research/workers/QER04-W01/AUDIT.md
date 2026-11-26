# QER04-W01 — Sinc-power probe concentration

Date: 2026-11-26. Baseline: `8fb1647cd10dc948db15b65f13250d8f8d0ac4b2`.

## Scope and conclusion

Audited only QER04 §1's RH-conditional estimate of quotient spectral mass on a compact set separated from the ordinate set. **The probe, normalization, covering, and exponential conversion are valid under the stated exact sampling identity and unit-interval zero-count bound.** The compact mass estimate has the form `mu_a(K) <= C_K exp(-c_K a)` for fixed compact `K` disjoint from `Gamma`, for sufficiently large `a`. Constants depend on the chosen support scale and the distance from `K` to `Gamma`; no uniformity as the gap shrinks follows.

## Probe construction and estimates

Fix `b>0`, choose nonnegative `psi in C_c^∞(-b,b)` with integral one, and let `rho_b=(2b)^(-1)1_[-b,b]`. Set `g_n=psi*rho_b^{*n}` and `G_n=F[g_n]`. Then

`G_n(t)=F[psi](t) sinc(bt)^n`, `|F[psi](t)|<=1`, and `supp(g_n) subset [-b(n+1),b(n+1)]`.

With `n=floor(a/(2b))` and `a>2b`, the support radius obeys `b(n+1)<=a/2+b<a`; hence `g_n(x)e^(-iux)` is admissible in the window for every real center `u`.

Let `K` be a fixed compact subset of `R\Gamma`, and let `delta=dist(K,Gamma)>0`. Since `sinc(v)` tends to zero and has modulus strictly less than one off zero,

`r=sup_(|v|>=b delta)|sinc(v)| < 1`.

For `|t|>=delta`, split off `n-1` sinc factors and use `|sinc(v)|<=min(1,1/|v|)` to obtain

`|G_n(t)|^2 <= r^(2n-2) min(1,(b|t|)^(-2))`.

For a sufficiently small fixed `c>0`, continuity and `F[psi](0)=1` give `|F[psi](t)|>=1/2` on `|t|<=c/sqrt(n)` for all large `n`; also `sinc(bt)>=1-(bt)^2/6` there. Thus `|G_n(t)|^2>=c_0>0` on that interval, with `c_0` independent of `n`. In particular

`Z_n=int_R |G_n(t)|^2dt >= c_1/sqrt(n)`.

The upper estimate also gives `int |G_n(t)|² dnu(t) <= C_K r^(2n-2)` uniformly for centers `u in K`: the sum

`sum_(gamma in Gamma) m_gamma min(1,(b|gamma-u|)^(-2))`

is uniformly bounded. On bounded ordinate ranges this follows from the fixed positive gap `delta`; on unit intervals in the tails, the classical bound `sum_(gamma in [j,j+1])m_gamma=O(log(2+|j|))` makes the remaining series comparable to `sum_j log(2+|j|)/(1+j^2)`, which converges uniformly for bounded `u`.

## Transfer to `mu_a` and covering

Assume RH and import QER02–03's sampling identity

`int |F[f]|^2 dmu_a = int |F[f]|^2 dnu - lambda_1(a)||f||_2^2`, with `lambda_1(a)>0`.

For `f_u(x)=g_n(x)e^(-iux)`, `F[f_u](t)=G_n(t-u)`. The sampling identity and nonnegative bottom give

`int |G_n(t-u)|^2 dmu_a(t) <= C_K r^(2n-2)`

uniformly for `u in K`. The lower probe bound on `[u-c/sqrt(n),u+c/sqrt(n)]` then implies

`mu_a([u-c/sqrt(n),u+c/sqrt(n)]) <= C'_K r^(2n-2)`.

Choose a maximal separated set of centers in `K` at scale comparable to `n^(-1/2)`. Since `K` lies in a fixed bounded interval, at most `O_K(sqrt(n))` centers are needed, and the corresponding probe intervals cover `K`. Hence

`mu_a(K) <= C''_K sqrt(n) r^(2n-2)`.

For `n=floor(a/(2b))`, `n>=a/(2b)-1`. Since `0<r<1`, the right side is `O_K(sqrt(a) exp((a/b)log r))`; absorbing the polynomial into any strictly smaller exponential rate yields `mu_a(K)<=C_K exp(-c_K a)` for some `c_K>0`.

An atom of `mu_a` in `K` is itself bounded by `mu_a(K)`, so the same estimate controls each individual reciprocal weight there regardless of how many quotient nodes occur. This does not exclude nodes with very small positive weights.

## Checks, assumptions, and limits

- Fourier normalization is consistent: `||g_n||_2^2=Z_n/(2pi)`, so the separate Rayleigh trial estimate for `lambda_1(a)` gains the factor `sqrt(n)` from dividing the zero-sum upper bound by `Z_n/(2pi)`. That estimate was not needed for the compact-mass proof itself.
- The `O(sqrt(n))` cover is valid for any compact subset of a bounded interval, not only an interval, by a maximal separated-set argument.
- Imported, not reproved: under RH the real-sample identity for `mu_a`; positivity `lambda_1(a)>0`; the classical multiplicity-weighted unit-interval zero count; and QER02–03 spectral measure definitions. This is not an RH-independent estimate.
- The proof is for each fixed compact `K` with positive distance to `Gamma`. The constants degenerate as the gap closes; no uniform control near ordinates or node counts inside a cluster is shown. QER04 §2's cluster-mass convergence was not audited.
- No fresh primary-source retrieval, numerical computation, formal verification, human review, prior-art audit, or novelty claim.

## Sources

Repository source at baseline: `research/positivity/QER04-exponential-concentration.md` §1. Its cited imports include Suzuki arXiv:2610.32704v1 §2.3, (2.8)–(2.9), plus QER02–03. The probe inequalities and covering argument were independently rederived here; the cited sample identity itself remains an import.
