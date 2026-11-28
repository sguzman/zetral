# B3-49 — Reduce the H2′ tail to two-sided Hankel singular-vector leakage

Date: 2026-11-28. Status: exact structural inequality; quantitative
localization remains open.

## Source geometry

In ACG §8.3, let

    A_t = 1 - P_t - P_hat_t,
    Gamma_t = (1-P_(1/t)) U P_t.

For its near-self-dual block, the source gives orthonormal singular families
`e_n` (right) and `g_n` (left), with
`Gamma_t e_n = kappa_n g_n`, `f_n=U* g_n`, and
`<e_n,f_n>=kappa_n`. The negative eigenvector of `A_t` is

    a_n = (e_n+f_n)/sqrt(2(1+kappa_n)),
    A_t a_n = -kappa_n a_n.

For a positive contraction `chi` on the Mellin line, Cauchy–Schwarz in the
seminorm defined by `chi` gives

    <chi a_n,a_n>
      <= ( <chi e_n,e_n> + <chi f_n,f_n> )/(1+kappa_n)
      <= <chi e_n,e_n> + <chi f_n,f_n>.

Thus the localized negative-tail mass obeys the exact sufficient bound

    Tr(chi N_t^(n0))
      <= sum_(n>n0) kappa_n <chi e_n,e_n>
         + sum_(n>n0) kappa_n <U chi U* g_n,g_n>.

For `chi=chi_R`, equation (66) follows if these two right/left singular-vector
leakage sums have the required uniform decay in `n0` with polynomial growth
in `R`. The reduction explicitly keeps both the right singular vectors and
the Fourier-conjugated left singular vectors; estimating only one side is
not enough for this inequality.

## Moment mismatch and precise remaining estimate

The direct Hilbert–Schmidt identities give second-moment quantities, for
example

    ||Gamma_t chi_R^(1/2)||_2^2
       = sum_n kappa_n^2 <chi_R e_n,e_n>.

The H2′ reduction above instead requires the first-moment weight `kappa_n`.
Since the semilocal asymptotic is `kappa_n` of order `n^(-1/2)`, passing from
the second-moment bound to the required first-moment sum costs a factor of
`kappa_n^(-1)`, of order `sqrt(n)`. The known smoothing/trace-class estimates
do not absorb this loss. B3-48 shows that no rate follows from those
qualitative estimates without additional alignment/local-factor information.

This gives a sharper target: prove the two displayed first-moment leakage
bounds directly for the arithmetic Hankel operator (or find another estimate
that recovers the missing half power). The local expansion of `u_p` suggests
frequency scales `p^k` paired with angles `p^(-k/2)`, but it does not yet
prove the required eigenvector alignment.

## Scope and verification

The vector normalization and inequality are derived directly from ACG's
two-dimensional projection block and the positive form Cauchy–Schwarz
inequality. The Hilbert–Schmidt identity follows by expanding in the right
singular basis. This is a reduction, not an H2′ proof or counterexample; no
claim is made that the abstract models realize the arithmetic local factors.

Source: Andrews–Connes–La Gatta, arXiv:2611.13129v1, §8.3, equations (61)–(66)
and the singular-vector definitions preceding Lemma 8.9. No numerical
computation or formal verification was used.
