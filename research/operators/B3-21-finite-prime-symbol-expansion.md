# B3-21 — Exact Fourier expansion and sparse mean-square truncation of the finite-prime symbol

Date: 2026-11-27. Status: exact analytic coefficient result; mean-square on
the Bohr compactification only, not operator-norm or H2′ control.

## Question

Can the finite-prime multiplier in the semilocal uncertainty operator be
expanded and truncated with an explicit error and a finite arithmetic
representation, without approximating its prime factors numerically?

## One-prime expansion

For a prime `p`, put `q=p^(-1/2)` and `z=1/2+it`. The local ratio in
Connes–Consani is

    rho_p(z) = (1-p^{z-1})/(1-p^{-z})
             = (1-q exp(it log p))/(1-q exp(-it log p)).

Since `q<1`, expand the denominator absolutely and uniformly on real `t`:

    rho_p(1/2+it)
      = -q exp(it log p)
        + (1-q^2) sum_(j>=0) q^j exp(-ijt log p).

Thus the Fourier coefficients in the convention `exp(ikt log p)` are

    c_(p,1) = -p^(-1/2),
    c_(p,-j) = (1-p^(-1))p^(-j/2),  j>=0,
    c_(p,k) = 0 otherwise.

The coefficient tail after retaining `-J<=k<=1` has exact absolute sum

    sum_(j>J) |c_(p,-j)|
      = (1+p^(-1/2)) p^(-(J+1)/2).

This also checks both unitarity and an energy identity:

    sum_k |c_(p,k)|^2
      = p^(-1) + (1-p^(-1))^2 sum_(j>=0)p^(-j) = 1.

## Finite set of primes

Let `S` be finite and `u_S(t)=product_(p in S) rho_p(1/2+it)`. Its absolutely
convergent Fourier series is indexed by vectors `k=(k_p)` with
`k_p in {1,0,-1,-2,...}`. The frequency is
`sum_p k_p log p = log(a/b)`, where

    a = product_(k_p=1) p,
    b = product_(k_p<0) p^(-k_p).

Unique factorization makes these frequencies distinct. Kronecker–Weyl
equidistribution applies because an integer relation among the `log p`
would give a nontrivial product of distinct primes equal to one. Therefore
the long-interval mean square (Bohr `B^2` norm) is exactly the sum of squared
Fourier coefficients.

Normalize the squared coefficients as a probability distribution. The
prime exponents are independent, with

    Prob(K_p=1)=1/p,
    Prob(K_p=-j)=(1-1/p)^2 p^(-j),  j>=0.

These probabilities sum to one, and `E|K_p|=2/p`. For the additive height
`L=sum_(p in S)|K_p| log p`,

    E L = 2 sum_(p in S) (log p)/p.

For `S={p:p<=X}`, Chebyshev's bound `sum_(p<=x)log p=O(x)` and partial
summation give `E L=O(log X)`. Truncating the Fourier series to indices with
`L<=T`, Parseval and Markov yield

    ||u_S-u_(S,T)||_(B^2)^2
      = Prob(L>T) <= E L/T <= C log(X)/T.

Consequently accuracy `epsilon` in this mean-square norm is obtained by
`T=C log(X)/epsilon^2`. Every retained index has `a,b<=exp(T)`, so there
are at most `exp(2T+O(1)) = X^(O(epsilon^(-2)))` candidate rational
frequencies. Their coefficients are exact products of rational numbers and
prime square roots; no finite zero data or numerical fitting enters.

## Scope and limitations

- The coefficient identity, mean-square truncation estimate, and support
  count are exact consequences of the Euler local factors and elementary
  harmonic analysis.
- The estimate controls the Bohr mean-square norm, not the uniform norm of
  the symbol. It therefore does not bound the operator norm of multiplication
  by the truncation error, nor the norm of its Hankel compression.
- It does not imply the H2′ relative Mellin-density estimate or the
  singular-index/frequency localization required in ACG §8.3. The index
  `k_p` tracks a log-dilation shift `log p`, not the Mellin frequency scale
  `p^k` in the source's proposed localization mechanism.
- This is an exact arithmetic representation and a candidate for controlled
  mean-square operator diagnostics. No novelty, fast practical runtime,
  positivity, or RH claim is made.

## Next experiment

PWPB-03.26 subsequently upgrades the symbol approximation to uniform
operator-norm error by truncating and retaining each local factor. The
remaining question is whether that residual bound can control
`Tr(theta(f) K theta(f)^*)` or the infinite weighted singular-value tail
uniformly in the finite prime set. It does not follow from either the Bohr
`B²` bound here or the operator-norm bound in B3-22; if no trace estimate is
available, move to direct localization of the singular vectors of
`(1-P_{1/t})U P_t`.

Primary sources: Connes–Consani,
[Quasi-inner functions and local factors, arXiv:2008.10974](https://arxiv.org/abs/2008.10974),
§3, equation (1); Andrews–Connes–La Gatta,
[arXiv:2611.13129](https://arxiv.org/abs/2611.13129), §8.3.
