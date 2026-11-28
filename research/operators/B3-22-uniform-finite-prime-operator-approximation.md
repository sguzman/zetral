# B3-22 — Uniform operator-norm approximation of the finite-prime multiplier

Date: 2026-11-27. Status: exact deterministic error bound for the finite
prime product; it does not control the infinite-rank H2′ tail.

## Question

Can the finite-prime multiplier `U_fin=product_(p<=X) rho_p` be approximated
in operator norm with a finite, exact-arithmetic factorization whose work is
linear in the number of primes, rather than expanding an enormous Cartesian
product of Fourier modes?

## Local truncation

With `q_p=p^(-1/2)` and `z=1/2+it`, the exact expansion from B3-21 is

    rho_p(z) = -q_p exp(it log p)
               + (1-q_p^2) sum_(j>=0) q_p^j exp(-ijt log p).

Retain `j=0,...,J_p` and the exceptional `+1` mode, defining

    v_(p,J_p)(t) = -q_p exp(it log p)
                     + (1-q_p^2) sum_(j=0)^J_p q_p^j exp(-ijt log p).

The omitted Fourier coefficients have absolute sum exactly

    (1+q_p) q_p^(J_p+1),

so `delta_p := ||rho_p-v_(p,J_p)||_infinity` is at most this value.

Since `|rho_p(t)|=1`, also `||v_(p,J_p)||_infinity<=1+delta_p`.

## Product error and cutoff choice

For a finite prime set `S`, let

    U_S(t)=product_(p in S)rho_p(t),
    V_S(t)=product_(p in S)v_(p,J_p)(t),
    D=sum_(p in S)delta_p.

Telescoping the products gives

    ||U_S-V_S||_infinity
       <= sum_p delta_p product_(q!=p)(1+delta_q)
       <= D exp(D).

The multiplication operator norm equals the essential-supremum norm of its
symbol, and compression by orthogonal projections is contractive. Therefore
the same `D exp(D)` bounds the operator-norm error in the associated
finite-prime multiplier and its compressed Hankel operator.

For any `0<epsilon<=1`, choose `P0` so

    sum_(n>P0) (n^(-3/2)+n^(-2)) <= epsilon/4.

For each prime `p>P0`, set `J_p=2`. Then
`delta_p=(1+p^(-1/2))p^(-3/2)<=p^(-3/2)+p^(-2)`, so the sum of all
large-prime errors is at most `epsilon/4`. Write `m=pi(P0)`. For each
`p<=P0`, choose

    J_p = ceil(2 log(8m/epsilon)/log p)-1,

which gives `delta_p<=epsilon/(4m)` and total small-prime error at most
`epsilon/4`. Thus `D<=epsilon/2` and

    ||U_S-V_S||_infinity <= (epsilon/2) exp(epsilon/2) < epsilon.

The cutoff `P0` and the exceptional small-prime `J_p` depend on `epsilon`
only, not on `X` or on the size of `S`. Every prime above `P0` uses exactly
four local terms. The factorized representation therefore stores and
evaluates `O_epsilon(|S|+1)` terms. Its coefficients are exact products of
rational numbers and prime square roots. It avoids enumerating the product's
full Cartesian Fourier expansion.

By the perturbation inequality for approximation numbers, every approximation
number of the Hankel compression changes by at most `epsilon` (and these are
the usual singular values when the approximating compression is compact).
This makes the construction a rigorous finite-prime operator approximation
suitable for controlled computation of a fixed number of leading
approximation numbers.

## Scope and limitations

- The bound is uniform in the Mellin variable and hence genuinely controls
  operator norm for each finite prime set.
- It is a factorized product of finite trigonometric polynomials; a claim of
  linear work refers to storing/evaluating the factors at a fixed set of
  Mellin samples or composing the corresponding multiplier factors. It does
  not assert a linear-cost exact expansion into all rational frequencies.
- An `epsilon` operator-norm error controls each fixed singular value, but
  not the trace norm, the aggregate tail of infinitely many singular values,
  or the relative Mellin-density estimate H2′. The singular vectors may
  also change substantially within an almost-degenerate cluster.
- The archimedean factor `U_infinity` is unitary, so composing it with this
  approximation leaves the error bound unchanged. This does not approximate
  the full trace-form action or prove positivity.
- This is an explicit approximation theorem for the finite local-factor
  product, not a new Hilbert–Pólya construction, positivity theorem, or RH
  result. No novelty claim is made.

## Next investigation

Use the factorized approximant to obtain reproducible enclosures for the
first fixed Hankel singular values, then determine what additional resolvent
or weighted trace estimate is needed to control the remaining singular
tail. Keep the exact operator-norm guarantee separate from any inference
about H2′ or the transition-and-pole Schur block.

Primary sources: Connes–Consani,
[Quasi-inner functions and local factors, arXiv:2008.10974](https://arxiv.org/abs/2008.10974),
§3, equation (1); Andrews–Connes–La Gatta,
[arXiv:2611.13129](https://arxiv.org/abs/2611.13129), §8.3.
