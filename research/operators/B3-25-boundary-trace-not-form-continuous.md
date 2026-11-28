# B3-25 — The CCM endpoint functional is not continuous in the Weil form norm

Date: 2026-11-27. Status: analytic fixed-window obstruction to a norm-only
boundary-normalization argument; not an obstruction for the special sequence
of ground vectors.

## Claim

Fix `lambda>1`, set `L=2 log(lambda)`, and let `q_lambda` be the closed
lower-semibounded CCM Weil form on `L²([0,L])` after logarithmic coordinates.
For its standard shifted form norm

    ||f||_(q,c)^2 = q_lambda[f] + c ||f||_2^2,

where `c` is chosen so the right side is positive and equivalent to the form
norm, endpoint evaluation on the trigonometric core is not continuous. More
precisely, there are core vectors `g_N` such that

    <delta_N,g_N> = 1,          ||g_N||_(q,c) -> 0,

where `delta_N` is CCM's finite Dirichlet evaluation vector. The statement
concerns the N-dependent approximants to the endpoint functional; it does not
show that the actual lowest eigenvectors have small endpoint pairing.

## Construction and proof

Let `M=2N+1` and, in the logarithmic coordinate, define

    g_N(x) = D_N(x)/M,   D_N(x)=sum_{n=-N}^N exp(2 pi i n x/L),
    0 <= x <= L,

extended by zero outside `[0,L]`. Since `delta_N=L^(-1)D_N` in this
coordinate, `||delta_N||_2^2=M/L` and
`g_N=delta_N/||delta_N||_2^2`. Hence the exact identity
`<delta_N,g_N>=1` holds and `g_N(L)=1`, while
`||g_N||_2^2=L/M -> 0`. On each Fourier space `E_N`, CCM's pairing with
`delta_N` is exactly this endpoint value, not merely an asymptotic
approximation.

To estimate its fractional Sobolev norm on the line, use

    g_N(x)=sin(M pi x/L)/(M sin(pi x/L)).

On `[0,L/2]`, this formula and `sin(pi x/L) >= 2x/L` give
`|g_N'(x)| <= C_L M` for `x<=L/M` and
`|g_N'(x)| <= C_L(1/x + 1/(M x^2))` for `L/M<=x<=L/2`.
The same estimates hold on `[L/2,L]` by reflection. Therefore the total
variation of the zero extension, including its two endpoint jumps, is at
most `C_L(1+log M)`. Its Fourier transform consequently obeys
`|g_hat_N(t)| <= C_L(1+log M)/|t|` for `|t|>=1`.

For any `0<s<1/2`, Plancherel on `|t|<=M` and this bounded-variation tail on
`|t|>M` yield

    ||g_N||_(H^s(R))^2
      <= C_(L,s) M^(2s-1)(1+log(M)^2) -> 0.

Indeed, the low-frequency contribution is at most
`C M^(2s)||g_N||_2²`; the high-frequency contribution is bounded by
`C log(M)^2 integral_M^infinity t^(2s-2) dt`, finite precisely for `s<1/2`.

The primary-source expression for `q_lambda` is the sum of (i) the
archimedean Fourier multiplier `partial_t theta(t)`, which is smooth on the
real axis and grows like `O(log(2+|t|))`; (ii) two pole-evaluation terms,
bounded by `C_L||f||_2²` on fixed support; and (iii) finitely many bounded
prime operators for fixed `lambda`. Since
`log(2+|t|) <= C_s(1+t²)^s`, for each fixed `lambda` and `s>0` there is a
constant `C_(lambda,s)` such that on the trigonometric core

    |q_lambda[f]| <= C_(lambda,s) ||f||_(H^s(R))².

It follows that `q_lambda[g_N] -> 0`; together with `||g_N||_2 -> 0`, this
implies `||g_N||_(q,c) -> 0` for every fixed admissible lower-bound shift
`c`. Endpoint evaluation therefore has no continuous extension from this
core to the Weil form domain equipped with its form norm.

## Consequence and scope

This rules out an argument that controls CCM's changing boundary normalization
solely by convergence in the Weil form norm (and hence also one using only
L² convergence). Any successful normalization proof must exploit additional
regularity or special structure of the minimizing vectors, or establish a
separate lower bound on their endpoint pairings. The construction is a
counterexample for continuity of the functional, not for convergence of
`xi_{lambda,N}`, and it gives no negative result for the actual sequence of
ground vectors. It is fixed-window; constants depend on `lambda`. It is not
a result about `lambda -> infinity`, RH, or spectral correspondence.

## Literature and verification boundary

Primary source: Connes–Consani–Moscovici, *Zeta Spectral Triples*,
[arXiv:2511.22755v1](https://arxiv.org/abs/2511.22755), equations (3.8)–(3.11),
(3.19)–(3.20), Theorem 3.6, and Corollary 5.6. In particular, the source
identifies the archimedean multiplier with the derivative of the angular
Riemann–Siegel function, gives its logarithmic asymptotic, notes that the
fixed-window prime contribution and pole evaluation are bounded, and defines
`delta_N=L^(-1/2)sum_{|n|<=N}V_n`. The Sobolev/BV estimate above is derived
here from those formulas; it is not an independently checked source theorem.
No prior-art novelty claim, formalization, or computation is asserted.
