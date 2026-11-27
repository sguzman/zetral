# HP-02.3 — One random window offset controls fixed-low metric weights

Date: 2026-11-27. Status: manual analytic lemma conditional on Shi's
zero-side formulas; it controls fixed-low metric normalization and the
fixed-low tail-metric block only. It does not establish Prime–Weil spectral
transfer.

## Question

Can the sine resonance factors in the finite-zero metric be controlled by a
window schedule that does not inspect the ordinates, and does the exact
interpolation product then force the fixed-low metric weights to grow?

## Setup and conclusion

Let `0 < gamma_1 < gamma_2 < ...` be the distinct positive ordinates in
Shi's zero-side reconstruction, with multiplicities `m_k >= 1`. For each
integer `N >= 1`, choose

    L_N = N^2 + U,    U uniform on [0,1].

The rule for `L_N` is independent of all zero ordinates. For every fixed
ordinate sequence with `gamma_1 > 0`, almost surely in the single common
offset `U`, for every sufficiently large `N`,

    min_{1 <= k <= N} |sin(L_N gamma_k/2)| >= N^(-3).

If in addition the standard Riemann–von Mangoldt upper bound is used, then
for each fixed `k`, Shi's product formula implies

    log |R'_(N,L_N)(gamma_k)|
      >= 2 N log N - 2 N log log(2N) - O_k(N),

and consequently, almost surely,

    log omega_(k,N,L_N)
      >= 4 N log N - 4 N log log(2N) - O_k(N),

where `omega_(k,N,L)=(4/L) sin^2(L gamma_k/2) |R'_(N,L)(gamma_k)|^2`.
The constants may depend on the fixed ordinate and the sequence, but not on
`N` or `U`. This is a fixed-index statement, not a uniform estimate as `k`
grows.

## Almost-sure simultaneous sine bound

Fix `gamma >= gamma_1` and `0 < delta <= 1/2`. As `U` ranges over an interval
of length one, the phase `gamma(N^2+U)/2` ranges over an interval of length
`gamma/2`. The set `|sin x|<delta` has length `2 arcsin(delta)` in each
period of length `pi`. In the `U` coordinate, each such bad interval has
length `4 arcsin(delta)/gamma`, and at most `gamma/(2 pi)+2` intervals meet
`[0,1]`. Therefore

    meas{U: |sin(gamma(N^2+U)/2)|<delta}
      <= (2/pi + 8/gamma) arcsin(delta)
      <= (4/pi + 16/gamma_1) delta.

The estimate is uniform in the phase shift `N^2 gamma/2`. A union bound over
`k <= N`, with `delta=N^(-3)` for `N >= 2`, gives

    meas{U: min_(k<=N)|sin(L_N gamma_k/2)|<N^(-3)}
      <= C_(gamma_1) N^(-2).

The right side is summable. The first Borel–Cantelli lemma gives the claimed
eventual bound for almost every one fixed `U`; independence between the
events for different `N` is not needed.

This is a probability-one existence result, not an explicit certified value
of `U`. The exceptional set depends on the actual ordinate sequence, so the
argument does not provide a computable deterministic offset or prove that a
particular preselected offset works. It nevertheless avoids choosing each
`L_N` after looking at the first `N` ordinates.

## Fixed-low interpolation derivative

Shi's equation (5.31) gives

    R'_(N,L)(gamma_k)
      = 2 product_(ell<=N, ell!=k)(gamma_k^2-gamma_ell^2)
          / product_(n=1)^N(gamma_k^2-(2 pi n/L)^2).

For `L=L_N`, the largest grid point is `2 pi N/L_N <= 2 pi/N`. Thus for a
fixed `k` and all sufficiently large `N`, this grid is below `gamma_1`, and
each denominator factor has absolute value at most `gamma_k^2`. Hence the
denominator magnitude is at most `gamma_k^(2N)`.

Let `N_z(T)` count zeros with multiplicity. The Riemann–von Mangoldt upper
bound `N_z(T) <= C T log(2T)` implies

    gamma_ell >= c ell/log(2 ell).

Indeed, `ell <= N_z(gamma_ell)`; if `gamma_ell < ell`, substitute
`log(2 gamma_ell) <= log(2 ell)` in the counting bound, while the other
case is immediate after reducing `c`. For fixed `k`, choose `ell_0(k)` so
that `gamma_ell^2 >= 2 gamma_k^2` for `ell >= ell_0`. Distinctness makes the
omitted finite numerator factors nonzero, and for the rest

    |gamma_k^2-gamma_ell^2| >= gamma_ell^2/2.

It follows that

    |product_(ell<=N, ell!=k)(gamma_k^2-gamma_ell^2)|
      >= C_k product_(ell=ell_0)^N (c ell/log(2 ell))^2/2.

Taking logarithms and using `sum_(ell<=N) log ell = N log N-O(N)` and
`sum_(ell<=N) log log(2 ell) <= N log log(2N)` proves the displayed lower
bound for `R'`. Combining it with `L_N <= N^2+1` and the almost-sure sine
bound proves the estimate for `omega`.

## Consequence for the known fixed-low tail-metric estimate

The Riemann–von Mangoldt bound also implies

    sum_k m_k/gamma_k^4 < infinity,

by a dyadic decomposition. Substituting the fixed-low growth of `omega` into
HP-02.2's normalized tail estimate therefore gives, under the source's RH
decomposition and for each fixed pair `k,l`,

    |Rhat_(s gamma_k,t gamma_l)| -> 0

for `s,t` in `{+1,-1}`, almost surely along this schedule. This is a new
fixed-low `Delta G` estimate from the cited source bound, not a prime-side
estimate. It remains RH-conditioned and uses the zero-side basis to analyze
the pencil.

The result gives no bound for moving low/high blocks, the Schur coupling,
the `Delta K` contribution, or the high-block inverse. In particular it
does not establish any generalized-eigenvalue convergence or an
arithmetic-independent spectral correspondence. The random offset's
probability-one property is not a finite numerical certificate.

## Verification and status

The measure estimate, Borel–Cantelli step, product lower bound and dyadic
summability are manual derivations. Source inputs are Shi,
[arXiv:2609.04908v12](https://arxiv.org/abs/2609.04908v12), equations
(5.30)–(5.35), and the classical Riemann–von Mangoldt zero count. The source
page and the exact interpolation, metric-weight and tail equations were
checked against the current arXiv HTML on 2026-11-27. No computation, Lean
proof, independent human review, novelty claim, RH proof or Prime–Weil
spectral transfer is claimed.
