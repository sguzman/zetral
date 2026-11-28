# B3-48 — Slow localization compatible with the known qualitative bounds

Date: 2026-11-28. Status: exact abstract countermodel; not a model of the
semilocal Weil/Hankel pair.

## Question

Do the qualitative facts already available in ACG §8.3—angles of order
`n^(-1/2)`, polynomially bounded local trace, and fixed-window tail
convergence—force any polynomial rate in the tail index for the localized
trace in (66)?

## Construction

Work in `L^2(R)`. Choose orthonormal vectors `e_n` supported on pairwise
disjoint intervals `I_n` accumulating at `0` inside `(0,1)`, and orthonormal
vectors `h_n` supported in pairwise disjoint intervals `J_n=[3n,3n+1]`.
The two families are mutually orthogonal. Let

    kappa_n = n^(-1/2),
    q_n = 1/(sqrt(n) log^2(n+1)),
    a_n = sqrt(q_n) e_n + sqrt(1-q_n) h_n,
    N = sum_(n>=1) kappa_n |a_n><a_n|.

The `a_n` are orthonormal and the positive compact operator `N` has the
same `n^(-1/2)` eigenvalue order as the semilocal angle sequence. For a smooth
cutoff `chi_R` equal to one on `[-R,R]` and supported in `[-2R,2R]`, `R>=1`,

    Tr(M_chi_R N M_chi_R)
       <= sum_n kappa_n q_n + sum_(n<=2R/3+1) kappa_n
       <= C sqrt(R).

Thus the local trace grows polynomially. For each fixed `R`, only finitely
many high intervals `J_n` meet the cutoff, while the low-frequency remainder
is the tail of the convergent series

    sum_(n>n0) kappa_n q_n
       = sum_(n>n0) 1/(n log^2(n+1))
       ~ 1/log(n0).

Consequently fixed-window localized tail traces tend to zero, but have no
polynomial decay in `n0`.

This lower bound is also detected by an admissible Mellin test: choose a real
smooth compactly supported `f` with `Mf(0) != 0`. Its Mellin transform is
continuous and bounded away from zero on a neighborhood of zero, containing
all sufficiently late `I_n`. The corresponding tail quadratic trace is
therefore bounded below by a positive constant times `1/log(n0)`, while
`Lambda(f)` is fixed and finite. So this model's H2′ modulus cannot have a
polynomial-in-`n0` rate either.

## What this does and does not falsify

The example preserves orthogonality, the `n^(-1/2)` angle scale, a polynomial
local trace bound, and fixed-window tail convergence. It shows that these
facts alone do not yield the polynomial index/frequency localization rate
needed for polynomial conditioning dimensions. It does not refute H2′: the
slow modulus `1/log(n0)` still tends to zero. It also does not refute the
source's (66) if that statement allows this rate; rather, it shows that a
useful joint rate must be proved from more than the qualitative inputs listed
above.

The construction does not realize `N` as the negative part of
`1-P_t-P_hat_t`, a Hankel operator, or a product of arithmetic local factors.
It is therefore a logical barrier/countermodel, not a counterexample to the
actual ACG semilocal operator. The missing ingredient remains a quantitative
constraint on low-frequency leakage of its actual near-self-dual vectors.

## Verification

All estimates follow from the displayed orthogonal decomposition and the
integral test for `sum 1/(n log^2 n)`. No numerical computation or external
data was used. Primary comparison: Andrews–Connes–La Gatta, arXiv:2611.13129v1,
§8.3, Lemmas 8.8–8.9, (65)–(66), and Remark 8.10.
