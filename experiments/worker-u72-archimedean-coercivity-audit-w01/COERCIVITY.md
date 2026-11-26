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

## A concrete very-short-window bound for the full Weil form

Prior-art qualification: Suzuki, arXiv:2606.09096v4, Theorem 1.4, already
proves that the lowest eigenvalue is positive for all sufficiently small
half-widths `a`, and gives its small-`a` asymptotic. The estimate below does
not claim either qualitative result as new. It gives an explicit, conservative
cutoff and a uniform Rayleigh lower bound by a direct form estimate.

The logarithmic floor implies strict positivity of the full local Weil form
on a sufficiently short interval, without any assumption on the zeros. For
`0<h<=1/1400`, take `delta=1/9` in the preceding low-rate estimate. The
coefficient `(1-delta/2)/(1+delta)` is `17/20`. With
`N=floor(1/(9h)-1/4)`, the harmonic integral comparison gives

`C(h) >= (17/20) log(4N+5) >= (17/20) log(5600/9)`.

The exact-rational calculation in `constant_full_form_certificate.py`
verifies `(17/20)log(5600/9)-27/5-1/350>1/20` using rational atanh
bounds for the logarithm. The same certificate gives `alpha_0>-27/5` using
rational Machin bounds for pi, the harmonic-limit bound for Euler's
constant, and rational atanh bounds for the logarithms.

For `h<log(2)`, every prime shift `log(n)` exceeds the interval length, so
the prime contribution is identically zero. The remaining pole form obeys
the operator bound

`|2|int cosh(x/2)f(x)dx|^2 - 2|int sinh(x/2)f(x)dx|^2|`
`    <= 4 sinh(h/2) ||f||_2^2 < 4h ||f||_2^2`.

Here the first inequality is Cauchy–Schwarz and
`2 int_(-h/2)^(h/2)(cosh(x/2)^2+sinh(x/2)^2)dx=4sinh(h/2)`;
the last uses `sinh(h/2)<h` for this range. Therefore, for every form-domain
vector and `0<h<=1/1400`,

`q_h(f) > (1/20)||f||_2^2 > 0` for `f!=0`.

This is a deliberately conservative explicit window and uses the stated
physical-space Weil-form identity. It proves small-window positivity only;
it neither reaches the U72 candidate window nor implies RH.
In Suzuki's half-width notation the explicit range is `0<a<=1/2800`.

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
