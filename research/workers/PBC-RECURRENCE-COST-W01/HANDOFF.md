# PBC recurrence cost — quantitative finite-shift alignment

Status: READY_FOR_REVIEW

Baseline: `94901b6` (Campaign XXV). This is a supplementary bound on the qualitative modulation recurrence in PBC02. It does not attempt PBC03's spatial localization analysis.

## Dirichlet alignment bound

Fix `a>=1`, let `X=exp(2a)` and let `S_a={log n: 2<=n<=X, Lambda(n)>0}`. Write `m_a=|S_a|<=X`. For any integer `Q>=2`, simultaneous Dirichlet approximation applied to `alpha_n=log(n)/(2 pi)` gives an integer `q` with

`1<=q<=Q^(m_a)` and `||q alpha_n||<=1/Q` for every `n` in the finite shift set.

Thus `|exp(i q log n)-1|<=2 pi/Q` simultaneously. If the PBC02 prime operator is

`P_a=sum_n w_n(T_(log n)+T_(-log n))`, `w_n=Lambda(n)/sqrt(n)`,

then each zero-extended shift has norm at most one, and

`||M_q^*P_a M_q-P_a|| <= (4 pi/Q) sum_(n<=X) Lambda(n)/sqrt(n)`.

The elementary Chebyshev bound `psi(t)<=C t` and partial summation imply `sum_(n<=X)Lambda(n)/sqrt(n)<=C' sqrt(X)`. Since `sqrt(X)=exp(a)`, this yields

`||exp(-a)M_q^*P_a M_q-exp(-a)P_a|| <= C''/Q`.       (R.1)

For any fixed normalized error tolerance `delta>0`, choosing `Q>=max(2,C''/delta)` guarantees the recurrence accuracy in (R.1), with

`log q <= m_a log Q <= exp(2a) log Q`.

An arbitrarily large recurrence sequence also follows: as `Q` increases, the Dirichlet denominators cannot stay bounded unless some fixed denominator gives an exact common period, in which case its multiples give unbounded exact recurrences.

## Log-energy cost of this guarantee

For a fixed `f in C_c^infinity(I_a)`, modulation preserves its L2 norm and shifts its Fourier transform. Since `w(t)=1+log(2+|t|)`,

`L(M_q f) <= C_f(1+log(2+q)) <= C_f(1+exp(2a) log Q)`,

where the first inequality follows from `2+|s-q| <= (2+q)(1+|s|)` and rapid decay of `Ff(s)`. Also, for this fixed smooth `f`, `L(M_q f)/log q -> ||f||_2^2` as `q->infinity`, by dominated convergence. Thus the direct finite-dimensional Dirichlet guarantee permits a logarithmic-energy upper bound as large as the `exp(2a)` scale at fixed operator accuracy. This bound is much larger than the `exp(a)` operator scale and does not guarantee a low-energy approximate eigenvector. It does not prove that the first or any useful recurrence actually has such a large energy cost.

This is an upper bound on one guaranteed recurrence denominator, not a lower bound on the first useful recurrence. Special arithmetic relations may give much smaller `q`; conversely this argument alone gives no bound uniform in a varying family of test functions. It quantifies why PBC02's qualitative recurrence establishes a norm defect but does not by itself resolve PBC03's eigenstate localization or ordinary negative spectrum.

## Proof details and limits

Dirichlet's simultaneous theorem follows by partitioning the `m_a`-torus into `Q^(m_a)` cubes and comparing two of the `Q^(m_a)+1` points `k(alpha_n)_n mod 1`. The difference of their indices is the required `q`. The phase estimate uses `|e^{2 pi i x}-1|<=2 pi ||x||`. No RH, zeta-zero ordinates, PNT, or numerical data enter. The only arithmetic estimate is the classical Chebyshev upper bound for `psi`, used to normalize the total shift weight. AI-assisted lemma; not formally checked or independently human-reviewed.
