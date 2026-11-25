# V04 — Explicit convergence constants

Date: 2026-11-25 UTC. Conditional human-readable derivation, not independently reviewed or fully formalized. Baseline: papers/theta-cardinal-bound.tex v0.1, research/theta-cardinal-bound.md, and Suzuki arXiv:2610.32704v1 (sampling/compression under RH). The notation A(z)=xi_0(1/2-iz) uses the classical factor 1/2 normalization. This section makes the constants in the existing proof explicit, without assuming simple zeros.

## 1. Uniform theta and divided-kernel bounds

Write y=exp(2|x|). The theta series of Lagarias–Montague (arXiv:1106.4348v3, (1.1),(1.2), Lemma 3.1) gives

    |Phi(x)| <= 128 y^(9/4) exp(-pi y).

Indeed for k>=1, k<=2^(k-1), k^2-1 >= 3(k-1) (equality for k=1,2). Thus k^4 exp[-pi(k^2-1)] <= (16 exp(-3pi))^(k-1) <= (1/4)^(k-1), since pi>3 and e>2. Also 4pi^2+6pi<88 since pi<4. Factoring out exp(-pi y) and summing the geometric majorant gives a constant at most 88*(4/3)<128. This applies on both half-lines by evenness.

For alpha<=9/4, Y>=1, put v=Y+w. If alpha-1<=0, the power ratio is <=1; otherwise (1+w/Y)^(alpha-1)<=exp(5w/4). Consequently

    integral_Y^infinity v^(alpha-1) exp(-pi v) dv
        <= Y^(alpha-1) exp(-pi Y)/(pi-5/4).

In the x variable an outward half-line integral has another factor 1/2. Since 2(pi-5/4)>3, each division by a zero as in R05 decreases the bound constant by at least a factor 3:

    |f_r(x)| <= 128 * 3^(-r) y^(9/4-r) exp(-pi y), 0<=r<=m.

The integral cancellation at both ends uses exact multiplicity and remains as proved in R05. For the cardinal normalized at a zero gamma of multiplicity m let

    d_gamma = |A^(m)(gamma)|/m! > 0,
    D_gamma = 128/(3^m sqrt(m) d_gamma).

Then, since m>=1 and y>=1,

    |q_gamma(x)| <= D_gamma y^(5/4) exp(-pi y),
    |q'_gamma(x)| <= D_gamma (|gamma|+3) y^(9/4) exp(-pi y).

The derivative bound follows from i f'_m=gamma f_m+f_(m-1). No simplicity or zero-spacing assumption enters.

## 2. Explicit compact truncation and sampling error

Use the R05 cutoff with h=1/X, X=exp(2a), a>=1. Choose eta smooth nondecreasing, with values zero up to 1/2 and one from 1 onward. Such a function is obtained by integrating a nonnegative smooth bump of total integral one on (1/2,1). The cutoff chi has total variation exactly 2: integral_R |chi'| dx=2. Its detailed derivative supremum is not needed.

Set Y=X exp(-2/X)>=X-2, Y<=X. On the omitted tails y>=Y; the function y^(5/4) exp(-pi y) is decreasing for y>=1. Thus on the support of chi' its supremum is at most X^(5/4) exp(2pi) exp(-pi X). On both outward half-lines the derivative bound integrates to at most D_gamma (|gamma|+3)/(pi-5/4) times that same factor, using the tail lemma with alpha=9/4; the two half-line factors 1/2 cancel.

For r=(1-chi)q_gamma,

    ||r'||_1 <= H_gamma X^(5/4) exp(-pi X),
    H_gamma = D_gamma exp(2pi) [2+(|gamma|+3)/(pi-5/4)].

The compactly supported trial vector's full weighted sampling defect squared is bounded by M H_gamma^2 X^(5/2) exp(-2pi X), where M=sum_(rho distinct) m_rho/rho^2, by integration by parts exactly as in R05.

## 3. Eliminate the infinite zero sum

Under RH the classical A is even entire of order one, has no zero at 0, and has symmetric real zeros. Its Hadamard product, grouping opposite ordinates and retaining multiplicities, is

    A(z)/A(0)=product_(gamma>0 distinct) (1-z^2/gamma^2)^(m_gamma).

The linear exponential disappears by evenness and the paired products converge locally uniformly by reciprocal-square summability. Differentiating at zero gives

    M = -A''(0)/A(0).

This identity involves only the classical xi function and its derivatives at one regular point, not a computed infinite zero list. It is compatible with arbitrary multiplicities and the normalization factor cancels. An interval enclosure for this quotient could furnish a certified upper bound for M; no such enclosure is claimed here.

## 4. Explicit spectral constant and threshold

For the first n distinct positive ordinates define

    S_n = M sum_(j=1..n) H_(gamma_j)^2,
    B_n = 1/gamma_n + 1/gamma_1,
    K_n = 2 B_n gamma_n^2 S_n.

Then delta_a^2 <= S_n X^(5/2) exp(-2pi X). The sharp projection Ritz bound in R04 and reciprocal transfer give the candidate theorem with this explicit K_n whenever

    X >= exp(2) and B_n S_n X^(5/2) exp(-2pi X) <= 1/(2 gamma_n).

Since X^(5/2)<=exp(pi X) for X>=1 (log X / X <= 1/e), one convenient sufficient threshold is

    X_n = max(exp(2), log(2 gamma_n B_n S_n)/pi),
    a_n = log(X_n)/2.

A smaller sufficient threshold can be found by searching integers X>=8 for the original inequality, which is monotone decreasing there because the log derivative is 5/(2X)-2pi<0. In fact delta_a<1 follows from the half-lambda condition since B_n>lambda_n. This justifies all projection lemma hypotheses. The exact error estimate is

    0 <= t_(a,n)-gamma_n <= K_n X^(5/2) exp(-2pi X).

The verified Lean reciprocal lemma covers the last scalar transfer; this particular analytic constant derivation has not been machine-checked.

## 5. Computational meaning and illustration

The formula is explicit conditional on exact inputs gamma_j, m_j and d_gamma_j. For a rigorous computable upper bound it suffices to have enclosures for the first n distinct ordinates, their exact multiplicities, strictly positive lower bounds for d_gamma_j, and an upper bound for M. One can safely round all positive factors outward and use the more conservative resulting threshold. Distinct indexing and exact multiplicity cannot in general be inferred merely from numerical samples or a small residual. Certified simple-zero isolation plus zero counting can establish m=1 for specified examples, but not universal simplicity. The formula does not produce a certificate from prime powers <=X alone. No such arithmetic-only algorithm is claimed.

A 60-digit mpmath diagnostic (code and rounded output in experiments/reference/v04_constants.py and experiments/results/v04-constants.csv) treats the first six familiar numerical ordinates as simple for illustration only. It evaluates M from the derivative identity and estimates K_n and integer thresholds using the displayed formulas. These are NOT certified enclosures of the inputs or the local spectrum. For example, n=1 gives K about 8.72e16 and a sufficient integer X=8; the n=6 illustration gives K about 1.04e32 and X=13. The conservative prefactors explain why the asymptotic rate alone is not a practical finite-cutoff certificate. No bound at X=11 is asserted for n=5 or 6 by this particular threshold.

V05: pursue actual interval certification for a specified low index and, separately, a finite Fourier discretization or exact operator enclosure. The existing numerical approximation t_(a,n,N) does not follow from the exact-cutoff estimate; its own errors remain unbounded. An exact-cutoff enclosure can be meaningful without a certified Rust finite matrix root. Do not claim a universal certified numerical algorithm.
