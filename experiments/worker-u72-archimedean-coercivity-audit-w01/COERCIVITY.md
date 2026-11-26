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

## Exact-rational finite certificate at `h=62/25`

The root-series decimal can be bounded below without trusting floating-point root evaluations. For `x in [0,pi/2]`, Taylor's theorem gives

`sin(x) <= S_9(x)=x-x^3/3!+x^5/5!-x^7/7!+x^9/9!`,

`cos(x) >= C_11(x)=1-x^2/2!+x^4/4!-x^6/6!+x^8/8!-x^10/10!`.

The remainders have signs `-sin(xi)x^10/10! <= 0` and `cos(xi)x^12/12! >= 0`. Use the classical rational bound `223/71 < pi`. For each `j=0,...,99`, the accompanying Python program proposes a rational `q_j` on the `10^-6` grid and verifies entirely with rational arithmetic that `q_j h < 223/71`, `C_11(q_j h/2)>0`, and

`q_j S_9(q_j h/2) <= 2u_j C_11(q_j h/2)`.

These exact inequalities imply `q_j tan(q_j h/2)<=2u_j`, hence `q_j<=omega_j` by monotonicity. The program then sums the rational lower terms `q_j^2/[u_j(4u_j^2+q_j^2)]` and checks the exact rational inequality

`sum_(j=0)^99 q_j^2/[u_j(4u_j^2+q_j^2)] > 24317843723/10000000000 = 2.4317843723`.

Since all omitted `c_j` are positive, this is a certified lower bound for the infinite root series `C(62/25)`, derived using only exact integer/rational checks after the candidate roots are proposed. Reproduce with:

`python3 experiments/worker-u72-archimedean-coercivity-audit-w01/rational_root_certificate.py`

Observed output: `terms=100; grid=1/1000000` and `certified_root_series_lower_bound > 24317843723/10000000000`; the assertions pass. This is a certification of the component lower bound, not of the full archimedean/Weil form. The source proof uses the classical Archimedean inequality `223/71<pi`; the candidate-root floating calculations do not enter the validity of the checks.

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
