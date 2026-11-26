# Finite-interval coercivity of the archimedean increment

Use the digamma-series decomposition established in `ARCHIMEDEAN-AUDIT.md`:

\[
\alpha(t)-\alpha_0=\sum_{j\ge0}\beta_j(t),\qquad
\beta_j(t)=\frac{t^2}{u_j(t^2+r_j^2)},\quad
u_j=j+\tfrac14,\quad r_j=2u_j,
\]

where `alpha_0=psi(1/4)-log(pi)`. Each multiplier `beta_j` is nonnegative. Retaining only `j=0`, with `u_0=1/4` and `r_0=1/2`, gives

\[
\alpha(t)-\alpha_0\ge\beta_0(t)=\frac{4t^2}{t^2+1/4}.
\]

For a function supported on `[0,h]`, the inverse-Fourier operator for `beta_0` is the compression

\[
B_0=4I-E_{1/2},\qquad
(E_{1/2}f)(x)=\int_0^h e^{-|x-y|/2}f(y)\,dy.
\]

The row integral of this symmetric nonnegative kernel is

\[
R(x)=\int_0^h e^{-|x-y|/2}dy
=4-2e^{-x/2}-2e^{-(h-x)/2}.
\]

By AM–GM, `e^{-x/2}+e^{-(h-x)/2} >= 2e^{-h/4}`, so

\[
\sup_{0\le x\le h}R(x)\le4(1-e^{-h/4}).
\]

Schur's test therefore gives `||E_{1/2}||_{2->2} <= 4(1-e^{-h/4})`, and hence

\[
B_0\ge4e^{-h/4}I.
\]

Consequently the compressed archimedean multiplier obeys the rigorous quadratic-form bound

\[
\frac1{2\pi}\int_{\mathbb R}(\alpha(t)-\alpha_0)|\widehat f(t)|^2dt
\ge4e^{-h/4}\|f\|_2^2
\]

for every supported `f` in its form domain. It follows immediately for every finite cosine subspace that the nonconstant archimedean matrix `K+diag(da_n)` has least eigenvalue at least `4e^{-h/4}`. At the U72 value `h=62/25`, the bound is exactly `4e^{-31/50}`.

This lower bound comes from the finite support restriction: the multiplier `beta_0(t)` vanishes at `t=0` on the whole line, while its compression to a finite interval has a strictly positive bottom bounded here by Schur's test. The bound applies only to `alpha-alpha_0`; `alpha_0` itself is negative, and the total Weil form also has prime and pole contributions.

## Limits

The estimate is a lower bound on one explicit component, not a positivity certificate for the Weil form, the finite residual matrix, or the candidate operator. It does not use or validate the campaign's high-mode tail allocations. The Schur estimate is intentionally coarse and not optimized.

## Exact norm of the first compressed kernel

The Schur bound can be sharpened by solving the exponential-kernel eigenproblem. For `a=1/2`, let `E_a` have kernel `exp(-a|x-y|)` on `[0,h]`. If `E_a f=lambda f` and `g=E_a f`, differentiation in the distributional sense gives

`-g''+a^2 g = (2a/lambda) g`, with `g'(0)=a g(0)` and `g'(h)=-a g(h)`.

The top eigenfunction is positive and symmetric about `h/2`, so it has the form `cos(omega(x-h/2))`. Its boundary condition is `omega tan(omega h/2)=a`, with the smallest positive root `omega` in `(0, pi/h)`. Substitution gives

`||E_a|| = 2a/(a^2+omega^2)`.

Therefore the first-term compressed multiplier satisfies

`4I-E_{1/2} >= (4 - 1/(1/4+omega^2)) I`.

At `h=62/25`, the root is approximately `omega=0.5763064538840257`; the resulting lower bound is approximately `2.2821680782726705`, versus `4 exp(-31/50) ~= 2.151777750378698` from Schur. The exact bound is stated through the unique root equation; these decimals are illustrative numerical evaluations. It remains a bound for the `alpha-alpha_0` component only.

## Summing the remaining positive digamma terms

The same argument applies termwise to the full series. For `u_j=j+1/4` and `r_j=2u_j`, Fourier inversion gives the compressed operator for `beta_j` as

`B_j = (1/u_j) I - E_{r_j}`, where `E_r` has kernel `exp(-r|x-y|)` on `[0,h]`.

Indeed `beta_j(t)=(1/u_j)(1-r_j^2/(t^2+r_j^2))`, and the inverse Fourier kernel of `(t^2+r^2)^(-1)` is `exp(-r|x-y|)/(2r)`. The row integral of `E_r` is at most `(2/r)(1-exp(-rh/2))`, so Schur's test and `r_j=2u_j` imply

`B_j >= exp(-u_j h)/u_j I`.

For any `f` in the form domain, Tonelli's theorem applies to the nonnegative multipliers `beta_j` and gives the full compressed-form lower bound by summing these inequalities. Use the exact top-eigenvalue estimate from the preceding section for `j=0` and Schur for all `j>=1`:

`alpha compression - alpha_0 I >= [4 - 1/(1/4+omega^2) + sum_(j>=1) exp(-(j+1/4)h)/(j+1/4)] I`,

where `omega` is the smallest positive solution of `omega tan(omega h/2)=1/2`. The series is convergent for every `h>0`. At `h=62/25`, numerical evaluation gives about `2.31998802335`, compared with `2.28216807827` from the exact first-term bound alone. The inequality itself is analytic; the displayed decimals are illustrative numerical evaluations, not interval-certified endpoints. This remains a bound on `alpha-alpha_0` only.

## Exact eigenvalue bound for every series term

The exponential-kernel norm calculation applies at every rate `r_j=2u_j`, not just `r_0`. Let `omega_j` be the unique root in `(0, pi/h)` of

`omega_j tan(omega_j h/2)=2u_j`.

The top eigenvalue of `E_{2u_j}` is `4u_j/(4u_j^2+omega_j^2)`. Thus the exact bottom of `B_j=(1/u_j)I-E_{2u_j}` is

`c_j(h)=omega_j^2/[u_j(4u_j^2+omega_j^2)]`.

Termwise Tonelli summation now gives the stronger full-series bound

`alpha compression - alpha_0 I >= [sum_(j>=0) c_j(h)] I`.

This root series converges: `0<omega_j<pi/h` implies `0<c_j(h)<(pi/h)^2/(4u_j^3)`. At `h=62/25`, a numerical sum through `j=99,999` is approximately `2.431806049717852`; the same elementary `u_j^-3` comparison bounds the omitted positive tail by less than `2.1e-11`. The root evaluations and displayed decimal are numerical illustrations, not an interval-certified endpoint. The exact root-series inequality is the analytic result and, like the preceding bounds, applies only to `alpha-alpha_0`.

## Large-interval asymptotic of the root-series bound

Let `C(h)=sum_j c_j(h)` be the exact lower-bound series above. For fixed `j`, set `x_j=omega_j h/2`; its equation becomes `x_j tan(x_j)=u_j h`. As `h` tends to infinity, `x_j` tends to `pi/2`, so `h omega_j` tends to `pi` and

`h^2 c_j(h) -> pi^2/(4u_j^3)`.

Moreover `0<omega_j<pi/h` gives the summable domination `h^2 c_j(h)<pi^2/(4u_j^3)`. Dominated convergence therefore proves

`lim_(h->infinity) h^2 C(h) = (pi^2/4) sum_(j>=0) 1/(j+1/4)^3`

`= (pi^2/4) (28 zeta(3) + pi^3) ~= 159.5517039088`.

This is the asymptotic of the proved component lower bound, not an asymptotic for the actual least eigenvalue of the full archimedean or Weil operator.

## A logarithmic lower bound for short intervals

The root series also gives an explicit lower bound as `h` tends to zero. Write

`x_j=omega_j h/2`, `y_j=u_j h`; then `x_j tan(x_j)=y_j` and

`c_j(h)=x_j^2/[u_j(y_j^2+x_j^2)]`.

If `0<y_j<=1`, then `x_j<1`: the function `x tan x` is increasing on
`(0,pi/2)`, while `tan(1)>1`. On `0<=x<=1`, `sin(x)<=x` and
`cos(x)>=cos(1)>1/2`, so `tan(x)<=2x`; also `tan(x)>=x`. Therefore
`y_j=x_j tan(x_j)` implies

`y_j/2 <= x_j^2 <= y_j`.

Substitution into the root term gives

`c_j(h) >= 1/[2u_j(1+y_j)] >= 1/(4u_j)`

whenever `u_j h<=1`. For `0<h<=4`, set
`N=floor(1/h-1/4)>=0`. Then `u_jh<=1` for `0<=j<=N`, and the
decreasing-integrand comparison yields

`C(h) >= (1/4) sum_(j=0)^N 1/(j+1/4)`
`     >= (1/4) log(4N+5) >= (1/4) log(4/h)`.

The last inequality follows from `N>=1/h-5/4`. In particular,
`C(h) >= (1/4)log(4/h) -> infinity` as `h` decreases to zero. Since
`alpha_0` is a fixed constant, the full compressed archimedean form
`alpha_0+(alpha-alpha_0)` is bounded below by
`alpha_0+(1/4)log(4/h)` for `0<h<=4`; it is therefore strictly positive
once `h<4 exp(4 alpha_0)`. This is an explicit sufficient short-window
condition, not a sharp threshold. It concerns the archimedean compression
alone and does not establish positivity of the prime-corrected Weil form.

In fact this root-series floor has the sharper asymptotic

`C(h) ~ log(1/h)` as `h` decreases to zero.

To see the lower bound, fix `0<delta<1` and retain only indices with
`y_j=u_jh<=delta`. Since `x_j^2<=y_j`, we have `x_j^2<=delta`, and
`cos(x_j)>=1-x_j^2/2>=1-delta/2`. Using `sin(x)<=x` gives
`tan(x_j)<=x_j/(1-delta/2)`, hence
`x_j^2>=y_j(1-delta/2)`. Together with
`y_j^2+x_j^2<=y_j(1+y_j)`, this proves

`c_j(h) >= [(1-delta/2)/(1+delta)] / u_j`.

The harmonic sum over `u_j<=delta/h` is `log(1/h)+O_delta(1)`, so
`liminf C(h)/log(1/h)>=(1-delta/2)/(1+delta)`. Letting delta decrease
to zero gives a lower limit of at least one. For the upper bound,
`c_j<=1/u_j` for all indices, while for `y_j>1`,
`c_j<=pi^2/(4u_j^3h^2)` because `x_j<pi/2`. The indices with
`y_j<=1` therefore contribute at most `log(1/h)+O(1)`, and the
remaining cubic tail is `O(1)` by integral comparison. This proves the
matching upper limit. Consequently the established full archimedean lower
floor `alpha_0+C(h)` has leading term `log(1/h)`; this does not identify
the exact asymptotic of the actual compressed operator's least eigenvalue.

The same decomposition gives its additive constant with an `O(h)` remainder.
For `q=1/4`, the singular sum is
`sum_(j=0)^N 1/(j+q)=psi(N+q+1)-psi(q)`, with
`N+q+1=1/h+O(1)`, hence it equals
`log(1/h)-psi(q)+O(h)`. The bounded-variation quadrature for `g` has
error at most `3h`, and its integral is

`I = integral_0^infinity g(y)dy`
`  = limit_(Y->infinity) (integral_0^Y phi(y)dy-log(Y))`
`  = (Ci(pi)+log(pi/4)-gamma)/2`.

Indeed, under `y=x tan(x)`,
`phi(y)dy=(cos^2(x)/x+cot(x))dx`, with antiderivative
`(1/2)log(x)+(1/2)Ci(2x)+log(sin x)`. Here `Ci` is the cosine integral.
Therefore

`C(h)=log(1/h)-psi(1/4)+I+O(h)`.

Using `psi(1/4)=-gamma-pi/2-3log(2)`, this gives

`alpha_0+C(h)=log(1/h)+A_*+O(h)`,
`A_*=(Ci(pi)-gamma-2log(2)-log(pi))/2`.

Since the prime term vanishes and the pole norm is `O(h)` as `h->0`,
this implies the lower asymptotic
`liminf_(h->0)(lambda_min(h)-log(1/h))>=A_*` for the full Weil form.
Combining with Suzuki's Theorem 1.4 in half-width notation `h=2a`,
`lambda_min(a)=log(1/a)+mu_1-log(2pi)-gamma+O(a)`, yields

`mu_1 >= A_*+log(pi)+gamma`
`      = gamma+log(pi)-log(2) + (1/2) sum_(k>=1)(-1)^k pi^(2k)/(2k(2k)!)`.

The exact-rational script certifies the right-hand side exceeds `1/5` by
using the odd partial sum through `k=15` of the alternating cosine-integral
series and rational intervals for pi, gamma and the logarithms. The absolute
series terms decrease because their successive ratio is
`pi^2 k/[2(k+1)^2(2k+1)]<=pi^2/24<1`; hence the odd partial sum is a lower
bound. For Euler's constant, put `a_n=H_n-log(n)`. Then
`a_n-gamma=sum_(k>=n)[log(1+1/k)-1/(k+1)]`. Each summand equals
`integral_0^(1/k) t/(1+t)^2 dt < 1/(2k(k+1))`; summing this telescoping
majorant yields `gamma>H_n-log(n)-1/(2n)`. The summand inequality follows by
putting `x=1/k`: the derivative of `x^2/(2(1+x))-integral_0^x t/(1+t)^2dt`
is `x^2/(2(1+x)^2)>0`, and its value at zero is zero. With `n=50000`, the updated
exact-rational script now certifies `mu_1>0.20465` (previously only the
coarser threshold `0.2046` was recorded). This remains a quantitative lower
bound on Suzuki's already positive constant, not a claim that the asymptotic
itself is new.

There is also an upper bound from the normalized constant trial vector
`f_a=(2a)^(-1/2)1_(-a,a)`. Its Fourier transform is
`sqrt(2a) sinc(at)`, where `sinc(x)=sin(x)/x`; it belongs to the logarithmic
form domain since its transform decays as `O(1/|t|)`. For `2a<log(2)` the
prime term vanishes, and the pole expectation is `O(a)`. The archimedean
expectation is

`(1/pi) integral_R alpha(xi/a) sinc^2(xi) dxi`.

The digamma asymptotic gives
`alpha(t)=log(1+|t|)-log(2pi)+r(t)`, with `r` bounded and tending to zero
as `|t|->infinity`. After subtracting `log(1/a)`, dominated convergence
therefore leaves
`-log(2pi)+(1/pi)integral_R sinc^2(xi)log|xi| dxi`.
The Mellin integral

`I(s)=integral_0^infinity x^s sinc^2(x)dx`
`   =pi*2^(-s)/(2 Gamma(2-s) cos(pi*s/2))`

gives `(1/pi)integral_R sinc^2(x)log|x|dx=2I'(0)/pi=1-gamma-log(2)`.
The Rayleigh principle and Suzuki's Theorem 1.4 consequently imply

`mu_1 <= 1-log(2)`.

Together with the exact-rational lower bound, this brackets the constant as
`0.2046 < mu_1 <= 1-log(2)`. The lower endpoint uses an odd alternating
partial sum for `Ci(pi)`; the upper endpoint is an analytic trial bound.
Neither inequality is a novelty claim for Suzuki's small-window theorem.

## A concrete very-short-window bound for the full Weil form

Prior-art qualification: Suzuki, arXiv:2606.09096v4, Theorem 1.4, already
proves that the lowest eigenvalue is positive for all sufficiently small
half-widths `a`, and gives its small-`a` asymptotic. The estimate below does
not claim either qualitative result as new. It gives an explicit, conservative
cutoff and a uniform Rayleigh lower bound by a direct form estimate.

The root series admits a sharper short-window estimate by a Riemann-sum
decomposition. Set `y_j=u_jh`, let `x(y)` be the root of `x tan(x)=y`, and
put `phi(y)=cos^2(x(y))/y`; then `c_j(h)=h phi(y_j)`. Define

`g(y)=phi(y)-1/y` for `0<y<=1`, and `g(y)=phi(y)` for `y>1`.

On `(0,1]`, `g(y)=-sin(2x(y))/(2x(y))` increases from `-1`. If `x_1`
satisfies `x_1 tan(x_1)=1`, then `pi/4<x_1<1`. Since `sin(z)/z`
decreases on `(0,pi)`, the variation on this branch is
`1-sin(2x_1)/(2x_1)<2/3`; here `sin(2)/2>1/3`, as follows from its
alternating Taylor lower bound. On `(1,infinity)`, `phi` decreases from
`cos^2(x_1)<1/2` to zero. The jump at one has size one, so
`Var(g)<13/6`.

The regularized integral is explicitly

`I=integral_0^infinity g(y)dy`
` =(Ci(pi)+log(pi/4)-gamma)/2`
` =log(pi)-log(2)+(1/2) sum_(k>=1)(-1)^k pi^(2k)/(2k(2k)!)`.

Thus, if `I_lower` is any certified lower bound for `I`, the shifted
bounded-variation quadrature gives
`h sum g(y_j)>=I_lower-(13/6)h`.

For the singular part, set `N=floor(1/h-1/4)` and `M=N+5/4>=1/h`.
The trapezoid lower bound for the convex function `1/x` gives

`sum_(j=0)^N 1/(j+1/4) >= log(1/h)+22/5-log(5/4)-h/2`.

Combining these terms,

`C(h)>=log(1/h)+22/5-log(5/4)+I_lower-(8/3)h`.

For `0<h<=1/10`, the prime shifts vanish because `h<log(2)`. The pole
operator norm is at most `4sinh(h/2)<4h`. The exact-rational calculation in
`constant_full_form_certificate.py` verifies

`alpha0_lower+log_lower(10)+22/5-log_upper(5/4)+I_lower-2/3>1/20`.

Here `alpha0_lower` and `I_lower` are obtained from rational Machin bounds
for pi, the harmonic-limit bounds for Euler's constant, the odd alternating
partial sum through `k=15` for `Ci(pi)`, and rational atanh bounds for
logarithms. Consequently, under the stated physical-space Weil-form
identity, every form-domain vector satisfies
`q_h(f)>(1/20)||f||_2^2` for `0<h<=1/10`. In Suzuki's half-width notation
this is `0<a<=1/20`. This is a conservative quantitative bound, not a new
qualitative positivity theorem or an RH proof.

## Exact-rational finite certificate at `h=62/25`

The root-series decimal can be bounded below without trusting floating-point root evaluations. For `x in [0,pi/2]`, Taylor's theorem gives

`sin(x) <= S_9(x)=x-x^3/3!+x^5/5!-x^7/7!+x^9/9!`,

`cos(x) >= C_11(x)=1-x^2/2!+x^4/4!-x^6/6!+x^8/8!-x^10/10!`.

The remainders have signs `-sin(xi)x^10/10! <= 0` and `cos(xi)x^12/12! >= 0`. Use the classical rational bound `223/71 < pi`. For each `j=0,...,99`, the accompanying Python program proposes a rational `q_j` on the `10^-6` grid and verifies entirely with rational arithmetic that `q_j h < 223/71`, `C_11(q_j h/2)>0`, and

`q_j S_9(q_j h/2) <= 2u_j C_11(q_j h/2)`.

These exact inequalities imply `q_j tan(q_j h/2)<=2u_j`, hence `q_j<=omega_j` by monotonicity. The program sums the rational lower terms `q_j^2/[u_j(4u_j^2+q_j^2)]` and checks exact threshold inequalities. For the campaign interval it proves `C(62/25)>24317843723/10000000000=2.4317843723`. It also certifies the physical interval length `h=1` used in the stored DNB example: `C(1)>723383109/200000000=3.616915545`. Consequently the corresponding full archimedean floor there is `alpha_0+C(1)`, approximately `-1.7552678742` (the decimal is illustrative). Since all omitted `c_j` are positive, each finite sum is a certified lower bound for the infinite root series. Reproduce both checks with:

`python3 experiments/worker-u72-archimedean-coercivity-audit-w01/rational_root_certificate.py`

Observed output reports 100 terms and grid `1/1000000` for each interval, followed by the two exact rational thresholds; all assertions pass. This certifies the component lower bounds, not the full restored operator. The source proof uses the classical Archimedean inequality `223/71<pi`; floating-point candidate roots do not enter the validity of the exact checks.

## Monotonicity in interval length

For each fixed `u_j`, implicit differentiation of `omega_j tan(omega_j h/2)=2u_j` gives

`d omega_j/dh = -[omega_j^2 sec^2(omega_j h/2)/2]/[tan(omega_j h/2)+(omega_j h/2)sec^2(omega_j h/2)] < 0`.

Since `c_j` is strictly increasing as a function of `omega_j`, every `c_j(h)` decreases with `h`; consequently `C(h)=sum_j c_j(h)` is decreasing. Thus the exact certificate `C(62/25)>2.4317843723` also supplies the same lower bound for every `0<h<=62/25`. This interval comparison concerns only the compressed `alpha-alpha_0` form.

## Limitation after restoring the constant multiplier

The full archimedean multiplier is `alpha_0 + (alpha-alpha_0)`, where

`alpha_0 = -EulerGamma - pi/2 - 3 log(2) - log(pi)`.

Combining only the certified increment lower bound `C(62/25)>2.4317843723` with this constant gives a lower endpoint of approximately `-2.94039904693`. Thus this component estimate alone does not certify positivity even for the full archimedean compression, much less the Weil form. This negative lower endpoint is a limitation of the bound and is not evidence that the actual compressed archimedean operator has a negative eigenvalue.

## Interpolated lower model with prime and pole terms

This scalar floor can be inserted into the stored DNB/MBL lower-operator framework without deleting the prime or pole terms. Use the notation of DNB02/MBL01 on a fixed interval of length `L`: let `A` be the compressed archimedean operator, `D=alpha(sqrt(L_N))` its cellwise Neumann lower operator, and `K=A-D>=0` the bounded positive boundary correction. Let `K_J` be the increasing finite positive rate sums, so `0<=K_J<=K`. Write the restored form as `B=A-P+H`, with the actual bounded prime and pole operators `P,H` retained. The root-series result gives `A>=b I`, where `b=alpha_0+C(L)`.

For any fixed `0<=theta<1`, define

`B_(theta,J)=(1-theta)(D+K_J)+theta*b*I-P+H`.

Then the exact operator difference is

`B-B_(theta,J)=(1-theta)(K-K_J)+theta*(A-b*I)>=0`.

Thus this is a valid lower operator including the unchanged prime and pole forms. It is increasing in `J` for each fixed `theta`. Its finite Neumann base has mode weights

`d_(theta,n)=(1-theta)*alpha(n*pi/h_cell)+theta*b`.

For fixed `theta<1` these still grow like `(1-theta) log(n)`. The bounded perturbation norm in the MBL01 finite-mode enclosure can be taken as

`M_theta <= (1-theta)*||K|| + ||P|| + ||H||`,

and the complement threshold as `d_(theta,N+1)`. Therefore the same Schur truncation error has the form

`e_(theta,N)=M_theta^2/(d_(theta,N+1)-U_(theta,k))`

whenever the denominator is positive, with a fixed-mode rate-tail error equal to `(1-theta)` times the MBL01 rate-tail bound. These expressions exhibit a tunable tradeoff: increasing `theta` reduces the bounded boundary perturbation and rate tail, but also reduces high-mode growth and lowers the high-mode threshold toward `b`.

As `J` increases, `B_(theta,J)` converges monotonically to `B_theta=(1-theta)A+theta*b*I-P+H`. As `theta` decreases to zero, `B_theta` increases in form order to `B`, because `A-bI>=0`. This yields an iterated lower-approximation scheme; for `theta<1`, the high-mode base remains coercive and the finite-mode MBL01 enclosure applies. The interpolation is a valid analytic construction, but no optimizing `theta`, updated finite matrix, or successful certificate has been computed here. It does not establish positivity of `B`.

## Check against stored DNB03 comparison

The stored DNB03 witness cannot be improved by simply replacing its coarse archimedean block with the scalar floor `b`. The stored coarse matrix is already assembled from the exact coarse archimedean-plus-even-pole block minus the prime block (see `experiments/dnb01-stronger-complement-witness.js`, `cellMatrix`, and the DNB01/DNB03 handoffs); its residual coupling is separately enclosed mode by mode. Since `A>=bI`, restriction gives `P A P>=bP`, so substituting `bP` for the exact `P A P` weakens or preserves, but cannot strengthen, that coarse matrix. Thus the scalar floor alone does not resolve the stored negative Schur quotients.

The interpolation `B_(theta,J)` still offers a different possible tradeoff: it scales both the positive boundary correction and its finite-rate tail by `1-theta`, while lowering high-mode growth from `alpha(n pi/h_cell)` to `(1-theta)alpha(n pi/h_cell)+theta b`. The existing DNB03 data were generated at `theta=0`; they do not determine whether re-optimizing `theta`, the spectral cutoff, and the finite-rate cutoff improves the enclosure. No such rerun was done here, so that optimization remains open.

## Parameter tradeoff in the generic MBL01 truncation bound

The interpolation's effect on the generic MBL01 Schur error is explicit. Put `x=1-theta`, `A0=||K||`, `V0=||P||+||H||`, and

`Delta_N=alpha((N+1)pi/h_cell)-lambda_k(D)`.

For `D_theta=xD+(1-x)bI`, the common bounded-perturbation estimate is `M_theta=x A0+V0`. The high-mode threshold minus the common Ritz upper bound is

`G_N(x)=x(Delta_N-A0)-V0`.

Since `0<x<=1`, this gap can be positive only if `Delta_N>A0+V0`; interpolation cannot make the generic MBL01 separation condition pass at a cutoff where the unscaled (`x=1`) condition fails. When the gap is positive, the error bound is

`e_N(x)=(x A0+V0)^2/[x(Delta_N-A0)-V0]`.

Write `C_N=Delta_N-A0`. Its unconstrained stationary point is

`x_star=V0(2 A0+C_N)/(A0 C_N)`.

If `x_star<1`, it minimizes `e_N` on the admissible interval `V0/C_N < x <= 1`; otherwise the minimum is at `x=1`. The projected rate-tail term is additionally multiplied by `x`, so optimizing the total enclosure requires adding it and the interval arithmetic errors. This identifies a possible reduction in the conservative error after the cutoff has passed the same gap threshold; it does not guarantee a practical improvement, and no numerical optimum or revised finite certificate was computed.

For `A0>0` and `V0>0`, the condition for a strict interior minimizer simplifies to

`x_star<1  <=>  C_N(A0-V0)>2 A0 V0`.

Thus `A0>V0` is necessary, and then the gap parameter must exceed `2 A0 V0/(A0-V0)`. In particular, mere admissibility `C_N>V0` is not enough to justify interpolation. Differentiating gives

`e_N'(x)=(A0*x+V0)*(A0*C_N*x-2*A0*V0-C_N*V0)/(C_N*x-V0)^2`.

The derivative is negative below `x_star` and positive above it. If `x_star>=1`, it is nonpositive throughout the admissible interval, so the minimum is the endpoint `x=1` (`theta=0`); interpolation does not improve this generic unweighted error bound. This endpoint criterion concerns `e_N` alone; the separately scaled rate-tail term can change the optimizer of a combined bound.

For completeness, include an explicit nonnegative rate-tail contribution `T_N*x`, with `T_N` fixed at the chosen cutoff. On the same admissible interval, put `y=C_N*x-V0`, `a=A0/C_N`, and `d=V0*(A0+C_N)/C_N`. Then

`e_N(x)+T_N*x = (a^2*C_N+T_N)*x + 2*a*d + d^2/(C_N*x-V0)`.

Its second derivative is `2*d^2*C_N^2/(C_N*x-V0)^3>0`, so it is strictly convex. The derivative tends to `-infinity` at the left endpoint. Therefore the minimizer is `x=1` exactly when

`T_N <= [V0^2*(A0+C_N)^2/(C_N-V0)^2 - A0^2]/C_N`;

otherwise there is a unique interior minimizer, characterized by

`(A0^2/C_N + T_N) = V0^2*(A0+C_N)^2/[C_N*(C_N*x-V0)^2]`.

The right side of the endpoint threshold can be negative; in that case every `T_N>=0` gives an interior minimizer. This is a conditional optimizer for the stated two-term analytic bound, not an optimization of the stored DNB comparison or its interval errors.

Equivalently, set `s=A0^2/C_N+T_N` and `d=V0*(A0+C_N)/C_N`. The unconstrained critical point is

`x_u=[V0+d*sqrt(C_N/s)]/C_N`.

Use `x_u` when it is below `1`, and use `x=1` otherwise. In the interior case the minimum of this two-term bound is

`s*V0/C_N + 2*(A0/C_N)*d + 2*d*sqrt(s/C_N)`.

At the endpoint it is `(A0+V0)^2/(C_N-V0)+T_N`. These formulas follow by setting `y=C_N*x-V0>0`, which reduces the variable part to `s*y/C_N+d^2/y`; its minimum over positive `y` occurs at `y=d*sqrt(C_N/s)`.

## A negative constant-function direction for the archimedean component

The root-series lower bound is not a positivity test for the archimedean compression. In fact, at the campaign interval `h=62/25`, its normalized constant function already gives a rigorously negative Rayleigh quotient. Let `f=h^(-1/2) 1_[0,h]`, so `||f||_2=1` and

`|f_hat(t)|^2=4 sin^2(th/2)/(h t^2)`.

Using the positive digamma expansion

`alpha(t)=alpha_0+sum_(j>=0) (1/u_j) t^2/(t^2+4u_j^2)`, `u_j=j+1/4`,

and the elementary integral `int_0^infinity sin^2(th/2)/(t^2+4u^2) dt = pi*(1-exp(-2uh))/(8u)`, the Fourier form with convention `q(f)=(2pi)^(-1) int_R alpha(t)|f_hat(t)|^2 dt` is

`q_alpha(f)=alpha_0+sum_(j>=0) [1-exp(-2u_j h)]/(2h u_j^2)`.

Each summand is positive and at most `1/(2h u_j^2)`. For the full sum,

`sum_(j>=0) 1/(j+1/4)^2 <=16+1/(5/4)^2+int_1^infinity (x+1/4)^(-2) dx = 436/25`.

At `h=62/25`, this gives `q_alpha(f) <= alpha_0+109/31`. Also `alpha_0=-gamma-pi/2-3log(2)-log(pi)<-9/2`: use `gamma>=0`, `pi>3`, `log(2)>2/3`, and `log(pi)>1` (from `pi>3>e`). Therefore

`q_alpha(f)< -9/2+109/31 = -61/62 <0`.

This proves the standalone archimedean compression has a negative direction at `h=62/25`; it does not show that the full Weil form is negative, since the pole and prime contributions can change the Rayleigh quotient. It also does not conflict with the positive lower bound for `alpha-alpha_0`, because the negative constant `alpha_0` is restored here.

## Odd linear test at `h=62/25`

The same rational script also evaluates the normalized odd linear test `f(x)=c*x`, `c^2=12/h^3`, at `h=62/25`. For `r=2u_j`, let `G_r(x,y)=exp(-r|x-y|)/(2r)` and

`I_r=int_(-a)^a int_(-a)^a x*y*exp(-r|x-y|) dx dy`, `a=h/2`.

Solving `K''=r^2 K-2r*x` for `K(x)=int exp(-r|x-y|)y dy`, with the exterior boundary condition `K'(a)=-rK(a)`, gives

`I_r=4a^3/(3r)-2(1+ar)*exp(-ar)/r^2 * [a*cosh(ar)/r-sinh(ar)/r^2]`

or, using `q=exp(-rh)`,

`I_r=4a^3/(3r)-2(1+ar)/r^2 * [a*(1+q)/r-(1-q)/r^2]`.

Thus the `j`th digamma increment on this test is `(1/u_j)*(1-r*c^2*I_r/2)`. For `j>=1`, `I_r<=I_r|_(q=0)` and the increment is bounded below by `c^2*(a^2/(2u_j^2)-1/(8u_j^4))>0`; retain `j=1,...,299` and drop the positive tail. For `j=0`, the script lower-bounds `exp(-h/2)` by an odd alternating Taylor partial sum. The pole contribution is `-2*c^2*[4a*cosh(a/2)-8sinh(a/2)]^2`. For shift `s=log n`, the prime overlap is

`int_(-a)^(a-s) x*(x+s) dx=(h-s)*(h^2/2-h*s-s^2)/6`;

the script propagates exact rational log and inverse-square-root intervals through all nonzero `Lambda(n)` terms. It certifies the full odd linear-test quotient exceeds `1/10`. This is a single vector check, not an odd-sector positivity certificate.

Both test functions lie in the full quadratic-form domain. Their Fourier transforms are `2 sin(at)/(t sqrt(h))` for the constant vector and `2i*c*(a*t*cos(at)-sin(at))/t^2` for the odd linear vector; each is `O(1/|t|)` at infinity and bounded near zero. Since `alpha(t)=O(log(2+|t|))`, the integrals of `|alpha(t)|*|f_hat(t)|^2` converge. On the fixed compact interval the prime sum has finitely many shifts and the pole is finite rank, so those terms are also form-finite.

As a finite-subspace consequence, let `e_0=h^(-1/2)1_[-h/2,h/2]` and `o_1=sqrt(12/h^3)*x*1_[-h/2,h/2]`. Reflection commutes with the archimedean multiplier and the symmetric prime-shift sum; the pole splits into its even `c tensor c` and odd `-s tensor s` terms. Therefore the cross form `q_A(e_0,o_1)` vanishes. The two exact lower bounds above imply

`q_A(a*e_0+b*o_1) >= (19/500)|a|^2+(1/10)|b|^2 >= (19/500)(|a|^2+|b|^2)`.

This is positivity on this explicit two-dimensional subspace only; it is not a lower bound on the orthogonal complement or on the full operator spectrum.

## Full-form constant test at the campaign window

For the full restored even form on `I=(-h/2,h/2)`, the same normalized constant has an exact quotient decomposition `q_A=q_alpha+q_H-q_P`. The odd pole vector `sinh(x/2)` is orthogonal to this test; for `c(x)=cosh(x/2)`,

`q_H=2|<f,c>|^2=32 sinh^2(h/4)/h`.

The truncated prime shifts give

`q_P=2 sum_(n>=2, log(n)<h) [Lambda(n)/sqrt(n)]*(1-log(n)/h)`.

At `h=62/25`, `log(12)>h`, so only `n=2,3,4,5,7,8,9,11` contribute. `constant_full_form_certificate.py` uses exact `Fraction` intervals: Machin's arctangent series for pi; positive atanh series with explicit tails for logarithms; `gamma < H_N-log N` at `N=5000`; a positive Taylor partial sum to lower-bound each `1-exp(-2u_j h)` for `j=0,...,299`; a positive Taylor partial sum for `sinh`; and rational upper bounds on `1/sqrt(n)` and the finite prime terms. It asserts the full constant Rayleigh quotient exceeds `19/500=0.038`.

Thus the full-form constant direction is strictly positive at this window even though the standalone archimedean component is strictly negative on the same vector. This is only a one-vector Rayleigh lower bound; it does not prove positivity of the full operator or any finite Schur comparison. Run with `python experiments/worker-u72-archimedean-coercivity-audit-w01/constant_full_form_certificate.py`.

The same lower bound is uniform for every interval length `h in [247/100,62/25]`. The prime support is fixed there because `log(11)<247/100` and `log(12)>62/25`, both checked by rational logarithm intervals. On this interval the constant quotient is strictly convex: each archimedean summand

`g_j(h)=[1-exp(-2u_j h)]/(2h u_j^2)`

has second derivative proportional to `2-(x^2+2x+2)exp(-x)>0`, `x=2u_jh`; the pole term is `16[cosh(h/2)-1]/h`, whose power series has nonnegative second derivative; and `-q_P` has positive second derivative `4 sum_n [Lambda(n)/sqrt(n)]*log(n)/h^3`. Hence `q_A'(h)` is increasing. The certificate bounds `q_A'(62/25)<-0.04333`, so `q_A` decreases throughout this interval and its minimum occurs at `62/25`. The `19/500` lower bound therefore holds uniformly for the normalized constant test vector. It remains only a one-vector bound, not operator positivity.

## A sharper trial upper bound for Suzuki's constant

The constant trial profile gives `mu_1 <= 1-log(2)`. A smoother endpoint profile improves this. Let `g_p(x)=c_p*(1-x^2)^p` for `|x|<1`, zero otherwise, where `c_p` normalizes the `L^2` norm. For fixed `p> -1/4`, its Fourier transform before normalization is

`F_p(xi)=sqrt(pi)*Gamma(p+1)*(2/|xi|)^(p+1/2)*J_(p+1/2)(|xi|)`.

Scaling `f_a(x)=a^(-1/2)g_p(x/a)` in the logarithmic-symbol Rayleigh quotient and taking `a->0` gives `mu_1 <= gamma + L_p`, where

`L_p=(1/(2*pi*||g_p||_2^2))*integral_R |F_p(xi)|^2 log|xi| dxi`.

For this profile the logarithmic moment follows by differentiating the Weber–Schafheitlin Bessel-square Mellin integral

`integral_0^infty x^(-lambda) J_nu(x)^2 dx = Gamma(lambda)*Gamma(nu+(1-lambda)/2) / (2^lambda*Gamma((lambda+1)/2)^2*Gamma(nu+(1+lambda)/2))`,

valid in a neighborhood of `lambda=2*nu` for `nu=p+1/2`. It gives

`L_p=-psi(2p+1)+psi(1/2)/2+log(2)+psi(p+1)+psi(2p+3/2)/2`.

At `p=1/4`, the values `psi(1/2)=-gamma-2log(2)`, `psi(3/2)=psi(1/2)+2`, `psi(2)=1-gamma`, and `psi(5/4)=4-gamma-pi/2-3log(2)` simplify the Rayleigh endpoint to

`mu_1 <= 5/2 - pi/2 - log(2) ~= 0.2360564926`.

Although `g_(1/4)` is not smooth at its endpoints, it is in `H^s` for every `s<3/4`, and its logarithmic Fourier moment is finite. Interior cutoffs and mollification approximate it by smooth compactly supported profiles in some `H^s`, `0<s<3/4`. The logarithmic multiplier form is continuous under this approximation, so the same infimum bound follows from admissible smooth trials. Since `pi>2`, this improves the previous trial upper bound. Together with the separately certified lower bound this gives `0.2046 < mu_1 <= 5/2-pi/2-log(2)`. This is a Rayleigh bound using Suzuki's asymptotic, not a numerical determination of `mu_1`, and it does not alter the full-form coercivity claims above.

## Two-profile Mellin trial

The one-profile endpoint weight can be improved by mixing `g_0(x)=(1-x^2)^(1/4)` and `g_1(x)=(1-x^2)^(5/4)`, both zero outside `[-1,1]`. Take the explicit rational trial

`g(x)=g_0(x)+(121/1000)g_1(x)`.

For `p_i in {1/4,5/4}`, put `nu_i=p_i+1/2`, `A_i=sqrt(pi)*Gamma(p_i+1)*2^nu_i`, so `F_i(xi)=A_i*|xi|^(-nu_i)*J_(nu_i)(|xi|)`. The product Mellin identity used for the cross terms is

`integral_0^infty x^(-lambda) J_mu(x)J_nu(x)dx = 2^(-lambda)*Gamma(lambda)*Gamma((mu+nu-lambda+1)/2) / [Gamma((-mu+nu+lambda+1)/2)*Gamma((mu+nu+lambda+1)/2)*Gamma((mu-nu+lambda+1)/2)]`,

valid in the convergence strip containing `lambda=mu+nu` for these orders. Define `M_ij=(1/(2*pi))*integral_R F_i(xi)*conj(F_j(xi))dxi`; Plancherel identifies this with the physical-space Gram matrix. Applying the Mellin identity at zero log weight gives the squared norm matrix

`M/pi = [[1/2,3/8],[3/8,5/16]]`.

Differentiating each Mellin integral at logarithmic weight zero gives the log-moment matrix entries `M_ij*q_ij`, with

`q_00=-gamma-log(2)-pi/2+5/2`,
`q_01=-gamma-log(2)-pi/2+149/60`,
`q_11=-gamma-log(2)-pi/2+53/20`.

Consequently the Rayleigh constant for coefficient `c` is `-log(2)-pi/2+R(c)`, where

`R(c)=[(1/2)(5/2)+2c(3/8)(149/60)+c^2(5/16)(53/20)] / [(1/2)+2c(3/8)+c^2(5/16)]`.

At `c=121/1000`, exact rational arithmetic gives `R(c)=95199173/38100820`, hence

`mu_1 <= 95199173/38100820 - log(2) - pi/2 < 0.234669`.

The last inequality is certified in `constant_full_form_certificate.py` by rational lower bounds for `log(2)` and `pi`. Numerically the upper endpoint is about `0.2346686747`. As before, Suzuki's asymptotic relates the limiting Rayleigh quotient to `mu_1`; the fixed compactly supported profile is approximable by smooth admissible profiles in a positive Sobolev norm. This is a rigorous trial upper bound, not an estimate of the true minimizing profile. The matching two-dimensional trial-matrix calculation does not assert positivity of the full form.

## Six-profile Mellin trial

The same moment formula extends to `g_j(x)=(1-x^2)^(j+1/4)` on `[-1,1]`. The norm Gram entries are `M_ij=pi*m_ij`, where

`m_ij=(1/2)*product_(k=0)^(i+j-1) (2k+3)/(2k+4)`.

After factoring the common term `-gamma-log(2)-pi/2` from each log-moment quotient, the remaining rational entry is

`r_ij=-2*sum_(k=0)^(i+j) 1/(2k+1) + (4*sum_(k=0)^i 1/(4k+1) + 4*sum_(k=0)^j 1/(4k+1) + H_(i+j+1))/2`,

where `H_n` is the nth harmonic number. This follows directly by substituting the half-integer and quarter-integer digamma recurrences into the differentiated Weber–Schafheitlin formula above.

Take the rational trial

`g=sum_(j=0)^5 c_j*g_j`, with `c=(1,-597/250,9877/1000,-1821/100,15801/1000,-649/125)`.

Exact fraction arithmetic gives

`(c^T (m_ij*r_ij) c)/(c^T m c) = 1920119516153329/768815005763376`,

and hence

`mu_1 <= 1920119516153329/768815005763376 - log(2) - pi/2 < 0.233562`.

`constant_full_form_certificate.py` reconstructs both rational matrices and verifies this cap with exact rational lower bounds on `log(2)` and `pi`; its run reported `0.23356174652192577`. This remains a Rayleigh upper bound from Suzuki's asymptotic, not a lower bound or an evaluation of the true minimizer. The finite linear combination remains in `H^s` for every `s<3/4` and is approximable by smooth compactly supported admissible profiles.

## Twelve-profile rational trial

A larger explicit span gives a slightly sharper cap. With the same `g_j` and `m_ij,r_ij` above, take `g=sum_(j=0)^11 c_j*g_j`, where the fixed rational coefficients are

`(1,-12112/1000,191158/1000,-1674893/1000,8937056/1000,-30707153/1000,70094353/1000,-107384582/1000,109133785/1000,-70568085/1000,26281696/1000,-4291498/1000)`.

Exact reconstruction gives

`(c^T (m_ij*r_ij)c)/(c^T m c) = 1583706824907594442232592989897201/634175928969695803725059349324000`,

so

`mu_1 <= 1583706824907594442232592989897201/634175928969695803725059349324000 - log(2) - pi/2 < 0.233324`.

The exact coefficient ratio and rational endpoint enclosure are both checked by `constant_full_form_certificate.py`. No property of a floating-point optimizer is used in the inequality; this is just one explicit trial vector in the twelve-dimensional subspace. The resulting bracket is `0.2046<mu_1<0.233324`, with the exact upper expression above. As before, this is only a Rayleigh bound derived using Suzuki's small-window asymptotic.

## Nested Mellin spaces form a core for Suzuki's limiting problem

Suzuki defines the limiting closed form on `(-1,1)` by

`bar(L)(v) = (1/(2*pi))*integral_R (log|xi|+gamma)*|vhat(xi)|^2 dxi`,

initially on `H_0^1(-1,1)`. In arXiv:2606.09096v4, §§4.2 and 4.6, the scaled Rayleigh quotient has the form `log(1/a)-(2A+1)+L(v)/||v||^2+O(a)` with a uniform `O(a)` remainder for small `a`; §5.3 identifies the lowest eigenvalue of the closed limiting form with `mu_1` and proves that its ground state is simple and even. The form norm is equivalent to the `H^log` norm, which is compactly embedded into `L^2` on the bounded interval (§4.1).

For `N>=1`, define the nested even spaces

`V_N=span{g_0,...,g_(N-1)}`, `g_j(x)=(1-x^2)^(j+1/4)*1_[-1,1](x)`.

Let `rho_N=inf_(0!=v in V_N) bar(L)(v)/||v||_2^2`. Then

`rho_1 >= rho_2 >= ... >= mu_1` and `lim_(N->infty) rho_N=mu_1`.

Here is the core argument. Suzuki's initial domain is `H_0^1`; smooth compactly supported functions are dense there, and the logarithmic form norm is bounded by an `H^s` norm for any fixed `0<s<1/2` on functions supported in this interval. Thus even `C_c^infty(-1,1)` is a form core after symmetrization. For every even `h in C_c^infty(-1,1)`, write `h(x)=g_0(x)*phi(1-x^2)`. Since `h` vanishes near the endpoints and is smooth and even, `phi` extends smoothly to `[0,1]`. Approximate `phi` in `C^1([0,1])` by polynomials `P`; multiplication by `g_0` maps this convergence to `H^s(R)` convergence for fixed `0<s<1/2`, because `g_0 in H^s` and `P(1-x^2)` has uniformly controlled `W^{1,infty}` multiplier norm. The supported `H^s` limit is in the form closure: for `s<1/2`, inward dilation followed by mollification approximates any supported `H^s` function by `C_c^infty(-1,1)`. Therefore the union of the `V_N` is form dense in the even sector. Suzuki's simple even ground state makes the bottom over that sector equal to the full `mu_1`; the Rayleigh principle and form density give the decreasing convergence above.

Every `V_N` Ritz matrix is explicitly rational up to a common scalar: with `M_ij=pi*m_ij`, entries `m_ij` and `r_ij` as in the preceding section, the closed-form matrix is `pi*m_ij*(-log(2)-pi/2+r_ij)`. Hence

`rho_N = -log(2)-pi/2 + lambda_min((m_ij*r_ij)_(i,j<N), (m_ij)_(i,j<N))`,

where `lambda_min(A,M)` denotes the smallest generalized eigenvalue `A v=lambda M v`. This supplies a convergent Galerkin route to the known limiting constant using rational matrices and interval enclosures for `log(2)` and `pi`. The current artifact certifies explicit trial-vector bounds, including `mu_1<0.233324`; it has not yet computed an interval-certified generalized eigenvalue for any `N>1`.

## Exact isolation of generalized Ritz values in dimensions three and six

For `V_N=span{g_0,...,g_(N-1)}`, define `A_N=(m_ij*r_ij)` and `M_N=(m_ij)`, both rational. The smallest Ritz value is `rho_N=-log(2)-pi/2+lambda_min(A_N,M_N)`. The generalized eigenvalues are isolated using exact `LDL^T` inertia at rational endpoints. The mass matrix `M_N` is positive definite because the profiles are linearly independent and its entries are their Gram matrix.

For `N=3`, with `ell=2498100869/10^9` and `u=249810087/10^8`, all exact LDL pivots of `A_3-ell*M_3` are positive and the signs at `A_3-u*M_3` are `(+,+,-)`. Thus

`2498100869/10^9 < lambda_min(A_3,M_3) < 249810087/10^8`,

and `rho_3<0.234158`.

For `N=6`, with `ell=2497505224/10^9` and `u=2497505225/10^9`, the lower-endpoint pivot signs are all positive and the upper-endpoint signs are `(+,+,+,+,+,-)`. Thus

`2497505224/10^9 < lambda_min(A_6,M_6) < 2497505225/10^9`,

and `rho_6<0.233562`.

The reusable `ritz_interval_certificates.py` reconstructs the matrices and verifies each pivot sign entirely with `Fraction`; Machin's formula and the positive atanh series certify the decimal Ritz caps. The six-profile Ritz enclosure is slightly sharper than the explicit six-profile vector bound. The same exact LDL procedure now also handles `N=12` below.


For `N=12`, the exact LDL signs at `ell=2497265582/10^9` are all positive, while those at `u=2497265583/10^9` are eleven positive pivots followed by one negative pivot. Thus

`2497265582/10^9 < lambda_min(A_12,M_12) < 2497265583/10^9`,

and

`mu_1 <= rho_12 < 2497265583/10^9 - log(2) - pi/2 < 0.233323`.

This Ritz cap is sharper than the explicit twelve-profile vector cap: their common scalar `-log(2)-pi/2` cancels, and the rational Ritz upper endpoint `2497265583/10^9` is smaller than the exact vector rational part `1583706824907594442232592989897201/634175928969695803725059349324000`. The exact interval certificate also covers `N=16` below.

For `N=16`, exact LDL pivots at `ell=2497222396/10^9` are all positive; at `u=2497222397/10^9`, the first fifteen are positive and the last is negative. Hence

`2497222396/10^9 < lambda_min(A_16,M_16) < 2497222397/10^9`,

and the rational pi/log enclosures give

`mu_1 <= rho_16 < 2497222397/10^9 - log(2) - pi/2 < 0.233279`.

This was the sharpest certified upper bound before the next extension. The exact generalized-eigenvalue intervals are available for `N=3,6,12,16` and `N=20` below.


For `N=20`, exact LDL pivots at `ell=2497200927/10^9` are all positive; at `u=2497200928/10^9`, the first nineteen are positive and the last is negative. Therefore

`2497200927/10^9 < lambda_min(A_20,M_20) < 2497200928/10^9`,

which gives the current bound

`mu_1 <= rho_20 < 2497200928/10^9 - log(2) - pi/2 < 0.233258`.

The exact Ritz intervals are now certified for `N=3,6,12,16,20`.

For `N=24`, exact LDL pivots at `ell=2497188692/10^9` are all positive; at `u=2497188693/10^9`, the first twenty-three are positive and the last is negative. Therefore

`2497188692/10^9 < lambda_min(A_24,M_24) < 2497188693/10^9`,

and

`mu_1 <= rho_24 < 2497188693/10^9 - log(2) - pi/2 < 0.233246`.

The certified decimal ceilings from the current root isolations are:

| Dimension `N` | Certified Ritz cap |
|---:|---:|
| 3 | `<0.234158` |
| 6 | `<0.233562` |
| 12 | `<0.233323` |
| 16 | `<0.233279` |
| 20 | `<0.233258` |
| 24 | `<0.233246` |

The gains decrease as `N` grows, while the exact LDL arithmetic remains fast through `N=24`. Further dimensions remain possible, but a basis with better approximation of the ground state may give more progress per added profile.

## Mass-orthogonal Jacobi basis audit

The monomial profile basis can be replaced by

`h_j(x)=(1-x^2)^(1/4) P_j^(-1/2,1/2)(1-2x^2)`,

where `P_j^(alpha,beta)` is the Jacobi polynomial. With `y=1-x^2`, even-function integration becomes integration against `y^(1/2)(1-y)^(-1/2)dy` on `[0,1]`. Jacobi orthogonality therefore makes the mass Gram matrix diagonal:

`<h_i,h_j>=0` for `i!=j`, and `||h_j||_2^2=pi*m_j`,

where `m_0=1/2` and `m_(j+1)=m_j*((2j+1)/(2j+2))^2`.

The change of basis from `g_j=(1-x^2)^(j+1/4)` is triangular with rational coefficients, so the log-form matrix remains rational up to the common `pi` factor and the generalized Ritz spectrum is unchanged. This may be useful for stable floating-point trial optimization. The monomial-basis LDL certificate already works directly through `N=24`.

An exploratory `N=32` search in the Jacobi coordinates produced a fixed rational trial vector with a slightly sharper bound. The candidate was obtained from SciPy 1.17.0 `scipy.linalg.eigh` on the double-precision generalized symmetric eigenproblem for the rational-part matrix against the diagonal mass matrix, with `subset_by_index=[0,0]`, the first coefficient normalized to one, and all 32 coefficients rounded to the nearest multiple of `10^-6`. An independent rerun reproduced all stored coefficients; the computed generalized eigen residual was below `7e-16`. No accuracy claim about that numerical optimizer is needed: `jacobi_trial_certificate.py` rebuilds both matrices and evaluates the stored rational vector entirely with `Fraction`, verifies exact Jacobi orthogonality, and uses rational lower bounds for `pi` and `log(2)`. It certifies

`mu_1 <= rational_part - log(2) - pi/2 < 0.233233`,

where the exact rational part is printed by the script. The script fixes all 32 rational coefficients explicitly, so its proof is independent of SciPy availability, floating-point eigensolver errors, and rounding behavior. This improved the previous `N=24` cap `<0.233246` by about `1.3e-5`; it does not improve the lower bound or construct an operator. Reproduce with `python experiments/worker-u72-archimedean-coercivity-audit-w01/jacobi_trial_certificate.py`.

Extending the same search to `N=40` and rounding to `10^-6` gives another fixed rational trial. The separate exact script `jacobi_trial40_certificate.py` verifies the Jacobi mass diagonal and evaluates the Rayleigh quotient with `Fraction`, then applies the same rational `pi` and `log(2)` bounds. It proves

`mu_1 <= rational_part - log(2) - pi/2 < 0.233227`,

with exact rational part
`1283831422819474895975983651616251260777710177893146089258489012811965984080574137601282634652103920216455637 / 514114591367928305242537846801111025484748899052255981941106747733778675276552191168302389246906518032123500`.
The forty coefficients are stored in the certificate. Their discovery used the same double-precision `scipy.linalg.eigh` procedure, normalized at the first coefficient and rounded to six decimal places; no correctness claim for the optimizer is needed for the exact fixed-vector bound. Reproduce the proof with `python experiments/worker-u72-archimedean-coercivity-audit-w01/jacobi_trial40_certificate.py`.

At `N=48`, the same `10^-6` coefficient rounding yields a further exact improvement:

`mu_1 <= rational_part - log(2) - pi/2 < 0.233223`,

where `jacobi_trial48_certificate.py` stores all 48 rational coefficients and checks the full quotient and endpoint enclosure with `Fraction`. The exact rational part is
`173787580033921159120401367306635504080278304562216967632676359358793406086383149896105100535911976913265300875411423752301 / 69593914696906053431175238408519655238736717991517795153161361596453562965786489599037009552839001671591029996168093468750`.
The candidate was generated by the same double-precision generalized eigensolver; the fixed vector alone is used in the rigorous inequality. Reproduce with `python experiments/worker-u72-archimedean-coercivity-audit-w01/jacobi_trial48_certificate.py`.

One further extension to `N=56` gives `mu_1<0.233221`, certified by `jacobi_trial56_certificate.py` using the same exact construction. Its rational part is
`2191422905985830163210564322356897406420660530602099217163483602564322405916245577027153362738403923673817273532143168176367186412204633069199 / 877564606553124839467629879868227132801942780688779419468775970636868434852369392719956967964749677944154097390327971302525444304164373091250`.
The stored 56 rational coefficients are independent of the generalized eigensolver at proof time. Relative to N=48, the improvement is only about `2.1e-6`, showing diminishing gains. Reproduce with `python experiments/worker-u72-archimedean-coercivity-audit-w01/jacobi_trial56_certificate.py`.

The finite-dimensional optimality gap can also be checked exactly. `jacobi_ritz56_certificate.py` reconstructs the N=56 Jacobi pencil and applies rational `LDL^T` inertia at the endpoints to prove

`2.4971641855 < lambda_min(A_56,M_56) < 2.4971641856`.

The stored rational trial quotient `2.497164185544405...` is verified as an exact rational to lie inside this same interval. Thus this trial is within `10^-10` of the exact N=56 Ritz minimum; the exact Ritz endpoint also gives `rho_56<0.233220679`. This refines finite-dimensional optimality only and does not give a rate for convergence of `rho_N` to `mu_1`. Reproduce with `python experiments/worker-u72-archimedean-coercivity-audit-w01/jacobi_ritz56_certificate.py`.

At N=64 the Jacobi trial search and exact fixed-vector certificate improve the cap to `mu_1<0.233220`. The certificate stores all rational coefficients and the exact rational Rayleigh part; no optimizer accuracy is assumed in the proof. The gain beyond N=56 is small. Reproduce with `python experiments/worker-u72-archimedean-coercivity-audit-w01/jacobi_trial64_certificate.py`.

### Independent check of the form-core density step

I checked the nested-profile core argument above separately from its original derivation. For even `h in C_c^infty(-1,1)`, the quotient `h(x)/g_0(x)` vanishes near `|x|=1`; near `x=0`, even smoothness gives a smooth function of `x^2`. Thus it is a smooth function `phi(y)` of `y=1-x^2` on `[0,1]`. C¹ polynomial approximation can be obtained by uniformly approximating `phi'` by polynomials and integrating, with the additive constant fixed at `phi(0)`. If `P_n -> phi` in C¹, multiplication by `g_0` gives convergence in `H^s(R)` for any fixed `0<s<1/2`, since multiplication by `P_n(1-x^2)-phi(1-x^2)` has operator norm on `H^s` controlled by its `W^{1,infty}` norm. These products are exactly finite linear combinations of the `g_j`.

For `s<1/2`, inward dilation moves a supported `H^s` function to a strict subinterval and converges in `H^s`; mollification with support smaller than the inward gap then gives `C_c^infty(-1,1)` approximation. The logarithmic form norm is controlled by this fixed `H^s` norm, so the finite-profile union is form dense in the even sector. Suzuki v4 §5.3's simple even ground state then identifies that sector's form infimum with `mu_1`, and the decreasing Ritz convergence follows. I found no gap in this density chain. This audit does not independently reprove Suzuki's imported form-norm equivalence, simplicity/evenness theorem, or small-window eigenvalue asymptotic; those remain source assumptions as cited above.
