# PMA63-W02 — Boundary and pole normalization audit

Date: 2026-11-25 UTC. Baseline `fce6991` (Campaign LXIII LB03). This is a symbolic source-to-code check of the one-cell boundary-rate and pole blocks in `experiments/lpa01-log11-regimes.js`. It does not certify the whole arithmetic form or any campaign comparison.

## Normalized cell basis

On `[0,h]`, set
\[
e_n(x)=\frac{\nu_n}{\sqrt h}\cos(\omega_nx),\qquad
\omega_n=\frac{n\pi}{h},\quad \nu_0=1,\quad \nu_n=\sqrt2\ (n>0),
\]
and `eta_n=(-1)^n`. Reflection about `h/2` sends `e_n(x)` to `eta_n e_n(x)`.

## Boundary rate block

For `r>0`, let `q=exp(-rh)`. The left endpoint exponential overlap is
\[
a_n(r)=\int_0^h e_n(x) r e^{-rx}\,dx
=\frac{\nu_n}{\sqrt h}\frac{r(1-\eta_nq)}{r^2+\omega_n^2}.
\]
The right overlap is `eta_n a_n(r)`. The one-cell coefficient block in the exact resolvent correction `2r D_r=U_r C_r U_r^*` is
\[
C_r=\frac1{2r(1-q^2)}\begin{pmatrix}1&q\\q&1\end{pmatrix}.
\]
Thus on a fixed reflection parity, the matrix element of `2r D_r` is
\[
2r\,(a_n,\eta_na_n)C_r(a_k,\eta_ka_k)^T
=\frac{2\nu_n\nu_k}{h}\frac{r^2(1-\eta_nq)}{(r^2+\omega_n^2)(r^2+\omega_k^2)}
\]
when `eta_n=eta_k`; it is zero for opposite parities. The simplification uses `(1-eta q)^2(1+eta q)/(1-q^2)=1-eta q`.

In the generator, `F[n]` encloses the full rate sum
\[
\sum_{j\ge0}\frac{1-\eta_n e^{-r_jh}}{r_j^2+\omega_n^2}.
\]
For `n!=k`, its divided difference
\[
\frac{\omega_n^2F[n]-\omega_k^2F[k]}{\omega_n^2-\omega_k^2}
=\sum_{j\ge0}\frac{(1-\eta e^{-r_jh})r_j^2}
{(r_j^2+\omega_n^2)(r_j^2+\omega_k^2)}
\]
is exactly the rate factor above. In code, the unweighted series is enclosed using its Euler–Maclaurin expansion and remainder, while the exponential-weighted part is summed through `J` with an explicit positive omitted-tail allowance; `D[n]` uses the corresponding squared-denominator sum and enclosure. The diagonal identity is the coincident-index value. The source then multiplies by `2 nu_n nu_k/h`. Thus the analytic rate identity matches the MBL02 one-cell formula; the numerical enclosure quality and all error constants are outside this audit's scope.

## Pole block

In centered coordinate `y=x-h/2`, the pole kernel is `2 cosh((y-z)/2)`, and
\[
2\cosh((y-z)/2)=2\cosh(y/2)\cosh(z/2)-2\sinh(y/2)\sinh(z/2).
\]
For `f_n(x)=\cos(\omega_nx)`, direct integration gives
\[
\int_0^h f_n(x)\cosh((x-h/2)/2)\,dx
=\begin{cases}\sinh(h/4)/(\omega_n^2+1/4),&n\text{ even},\\0,&n\text{ odd},\end{cases}
\]
and
\[
\int_0^h f_n(x)\sinh((x-h/2)/2)\,dx
=\begin{cases}0,&n\text{ even},\\-\cosh(h/4)/(\omega_n^2+1/4),&n\text{ odd}.
\end{cases}
\]
After basis normalization, the pole block therefore has entries
\[
H_{nk}=\frac{2\eta_n}{h}\,p_np_k,\qquad
p_n=\frac{\nu_n}{\omega_n^2+1/4}\begin{cases}\sinh(h/4),&n\text{ even},\\-\cosh(h/4),&n\text{ odd}.
\end{cases}
\]
This is positive rank one on the even sector and negative rank one on the odd sector. The generator's `pole(n)` and `2*eta/h*pole(n)*pole(k)` reproduce it. In particular its constant-mode entry is `32 sinh^2(h/4)/h`, consistent with the direct integral of the centered cosh profile.

## Scope and outcome

The boundary-rate and pole blocks agree with the exact one-cell identities in MBL02 and the source decomposition of the Weil form. The derivation is symbolic; no numerical run was needed. It does **not** audit the generator's archimedean diagonal enclosure, omitted-rate error enclosure, prime block, endpoint guard, full assembled matrix arithmetic, or the identification of every generator term with the closed original form. No positivity, complete normalization, or RH conclusion follows.

Primary source context: Suzuki, *Weil’s quadratic form via the screw function*, arXiv:2606.09096v4, equations (1.8), (2.9)–(2.10), together with the finite-cell resolvent decomposition in `research/positivity/DNB02-exact-positive-boundary-resolvent.md`. The repository derivation identifies the rank-two hyperbolic pole term and the boundary resolvent rate sum; this note checks the one-cell matrix factors directly.
