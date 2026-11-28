# B3-50 — Exponential total-log-shift tail for a finite local-factor product

Date: 2026-11-28. Status: exact coefficient and operator-norm bound for each
fixed finite prime set; no uniform bound as the set grows.

## Local coefficients

For each prime `p`, put `q=p^(-1/2)`. On the critical line the local ratio
has the absolutely convergent expansion

    rho_p(t) = -q exp(i t log p)
               + (1-q^2) sum_(j>=0) q^j exp(-i j t log p).

Thus the exponent index is `k=1` with coefficient `-q`, or `k=-j` with
coefficient `(1-q^2)q^j`, `j>=0`. For `0<theta<1/2`, the exact weighted
absolute coefficient sum is

    A_p(theta) := sum_k |c_(p,k)| p^(theta |k|)
       = p^(-1/2+theta)
         + (1-p^(-1))/(1-p^(-1/2+theta)).

The geometric series converges precisely because
`p^(-1/2+theta)<1`.

## Product bound

For a fixed finite set `S` of primes, expand
`u_S(t)=product_(p in S)rho_p(t)` with coefficient vector
`c_k=product_p c_(p,k_p)` and total log-shift
`tau_k=sum_(p in S) k_p log p`. Unique factorization gives distinct
frequencies (equivalently, distinct rationals `a/b`). Since

    exp(theta |tau_k|) <= product_p p^(theta |k_p|),

Tonelli and the product expansion give

    sum_k |c_k| exp(theta |tau_k|)
       <= C_(S,theta) := product_(p in S) A_p(theta) < infinity.

Consequently the total-variation tail satisfies

    sum_(|tau_k|>T) |c_k| <= C_(S,theta) exp(-theta T).

Writing `T_tau` for the corresponding unitary translation in log-coordinate,
the truncated convolution

    u_(S,T) = sum_(|tau_k|<=T) c_k T_(tau_k)

has operator-norm error at most `C_(S,theta) exp(-theta T)`. Compression by
the projections defining the semilocal Hankel operator preserves that bound.
The truncation is finite: the numerator `a` in `a/b` is squarefree with
`a<=product_(p in S)p`, while `|log(a/b)|<=T` bounds `b` by
`e^T product_(p in S)p`; only finitely many S-smooth denominators occur.

## Dependence and relevance to H2′

This gives a single total-shift cutoff with an explicit exponentially small
remainder for every fixed `S`, complementing the per-factor truncation in
B3-22. It exposes the dependence that blocks a uniform conclusion:
`C_(S,theta)=product_p A_p(theta)` grows with `S` and no bound here controls
that growth against the arithmetic growth of the prime set. More
fundamentally, operator-norm approximation still does not control the
first-moment low-frequency leakage of the singular vectors identified in
B3-49. This estimate therefore supplies a reproducible finite-symbol
approximation, not (66), H2′, or a counterexample to it.

## Verification

The one-prime expansion agrees with B3-21. The exponential-moment identity,
Markov tail inequality and finite-support argument are exact; the operator
bound uses the triangle inequality for unitary translations. No computation
was required.

Primary source for the local factor: Connes–Consani, *Quasi-inner functions
and local factors*, arXiv:2008.10974, §3; ACG arXiv:2611.13129v1, §8.3,
especially the local-factor shift description before Lemma 8.9.
