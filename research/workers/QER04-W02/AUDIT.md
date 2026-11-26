# QER04-W02 — Exponential convergence of fixed cluster masses

Date: 2026-11-26. Baseline: `8fb1647cd10dc948db15b65f13250d8f8d0ac4b2`.

## Scope and conclusion

Audited QER04 §2's claim that the weighted quotient spectral measure `mu_a` has exponentially accurate mass on a fixed bounded interval `I` whose endpoints avoid `Gamma`. **No gap was found under the stated RH sampling identity, the §1 off-ordinate compact-mass estimate, the unit-interval growth bound, and the §1 exponentially small `lambda_1(a)` estimate.** The exact Fourier factor is `1/(2pi)`, and endpoint atoms are safely contained in the exponentially small boundary strips. The result controls total weighted mass in a fixed cluster, not the number of nodes or individual node locations.

## Integrated sampling identity and normalization

Use QER04's probes `g_n` with `G_n=F[g_n]`, `Z_n=int |G_n|^2`, and `K_n(v)=|G_n(v)|^2/Z_n`. Thus `int K_n=1`. For (u\in I=[\ell,r]), modulate

`f_u(x)=g_n(x)exp(-iux)`, so `F[f_u](t)=G_n(t-u)`.

Integrating the exact RH sampling identity over `u in I`, Tonelli applies because both measures are positive. Swapping the order gives

`(1/Z_n) int_I int |G_n(t-u)|^2 dmu_a(t)du = int W_n(t)dmu_a(t)`,

where `W_n(t)=int_I K_n(t-u)du`; the same holds for `nu`. Plancherel with the convention `F[f](t)=int f(x)e^(itx)dx` gives `||g_n||_2^2=Z_n/(2pi)`. Since modulation preserves norm, the integrated subtraction term is

`(1/Z_n)lambda_1(a) int_I ||f_u||_2^2du=lambda_1(a)|I|/(2pi)`.

Therefore the identity in QER04 §2 has the displayed factor:

`int W_n dmu_a = int W_n dnu - lambda_1(a)|I|/(2pi)`.

## Approximate-indicator error

Choose a fixed `delta>0` such that the closed `delta`-neighborhoods of both endpoints of `I` are disjoint from `Gamma`; also take `2delta<|I|`. Let `B_delta` be the union of these two boundary neighborhoods. Then `nu(B_delta)=0`, and QER04 §1 gives `mu_a(B_delta)<=C exp(-c a)`.

Because `K_n` is a probability density, `0<=W_n<=1`; thus the error on `B_delta` is at most its measure. If `t in [ell+delta,r-delta]`, the interval of integration covers all shifts within distance `delta` of `t`, so

`|1-W_n(t)|<=int_(|v|>=delta)K_n(v)dv`.

If `t` is outside `I` at distance at least `delta`, then `W_n(t)<=int_(|v|>=delta)K_n(v)dv`. The QER04 §1 pointwise tail bound and `Z_n>=c/sqrt(n)` imply

`int_(|v|>=delta)K_n(v)dv <= C sqrt(n) r_delta^(2n-2)`

for some `r_delta<1`. For `|t|` larger than a fixed number depending on `I`, the stronger pointwise estimate gives

`W_n(t)<=C_I sqrt(n) r_delta^(2n-2)/(1+t^2)`.

On the remaining bounded region, the total `mu_a` mass is uniformly bounded by QER03's local growth estimate. On the tails, sum the last display over unit intervals and use `mu_a([j,j+1])<=C log(2+|j|)`; the series `sum log(2+|j|)/(1+j^2)` converges. The same argument applies to `nu` using its classical unit-interval zero count. Consequently

`int |W_n-1_I|dmu_a + int |W_n-1_I|dnu <= C exp(-c a)`

after absorbing `sqrt(n)` into a smaller exponential rate and adding the boundary-strip error. The rates may be reduced to the minimum of the §1 probe, endpoint, tail, and bottom-eigenvalue rates; all are positive for fixed `I` and fixed separation.

Finally,

`|mu_a(I)-nu(I)| <= int|W_n-1_I|dmu_a + lambda_1(a)|I|/(2pi) + int|W_n-1_I|dnu`,

which is the claimed exponential cluster-mass estimate. Since `nu(I)=sum_(gamma in I)m_gamma`, the limiting mass is the total arithmetic multiplicity in the interval. Boundary atoms of `mu_a` are included in `B_delta`, so closed versus half-open endpoint conventions change the estimate only by an exponentially small amount.

## Assumptions and limits

Imported, not rederived: under RH, the exact real-sample identity; strict positivity of `lambda_1(a)`; QER03's uniform local growth bound for `mu_a`; the classical multiplicity-weighted unit-interval zero count; and QER04 §1's off-ordinate compact-mass and exponential bottom estimates. This audit checks how those ingredients imply the §2 interval estimate; it does not validate the whole QER04 dependency chain.

No RH-independent statement, node-count or node-location convergence, individual weight limit, numerical/formal verification, human review, or novelty claim is made. Source: `research/positivity/QER04-exponential-concentration.md` §§1–2 at the baseline; no new external source retrieval.
