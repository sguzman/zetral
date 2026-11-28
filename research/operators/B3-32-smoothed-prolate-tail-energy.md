# B3-32 — Smoothed prolate vectors and an exact radical tail-energy identity

Date: 2026-11-27. Status: unconditional polynomial Rayleigh bound, conditional
only on the cited source results; no residual, gap, or positivity conclusion.

## Question

Can the global radical identity for the arithmetic map be transferred to a
finite Weil window for a suitably smoothed prolate trial, with the lost lower
tail estimated in the full explicit-form topology rather than only in `L2`?

## Main result

Use the normalized even two-mode prolate vector `H_lambda` from ACG equation
(21), with its Hermite limit `H` normalized in `L2(R)`. The source's fixed-mode
prolate sup estimate gives `O(lambda^-2)` for each of its modes. Equations
(13), (21), and (23), together with the fixed-index Fuchs asymptotics for
`chi_0,chi_4`, show that the normalized two-mode coefficients differ from
their limits by `O(lambda^-2)`. Hence

    sup_(|x|<=lambda) |H_lambda(x)-H(x)| <= C lambda^(-2),

and `H(x)=O(x^2)` near zero. For all sufficiently large `lambda`, set
`epsilon=lambda^(-3/4)`, `a=1-2 epsilon/lambda`, choose a fixed even
`eta in C_c^infinity((-1,1))` of integral one, and let

    g_lambda = eta_epsilon * (a^(-1/2) H_lambda(./a)),
    eta_epsilon(x)=epsilon^(-1) eta(x/epsilon).

This is smooth, even, supported strictly inside `[-lambda,lambda]`, and has
integral zero. Its point value satisfies
`|g_lambda(0)|=O(lambda^(-3/2))`. Choose a fixed even
`phi in C_c^infinity((-1,1))` with `phi(0)=1` and `integral phi=0`, and put

    f_lambda = g_lambda - g_lambda(0) phi,

then normalize by its `L2` norm. The resulting `f_lambda` is even, smooth,
compactly supported in `(-lambda,lambda)`, and satisfies exactly
`f_lambda(0)=integral f_lambda=0`. It converges to `H` in `L2`; moreover,
`sup_x |f_lambda(x)-H(x)|=O(lambda^(-3/2))`.

Let `G_lambda=E(f_lambda)`, `v_lambda=1_[lambda^-1,lambda]G_lambda`, and
`w_lambda=1_(0,lambda^-1)G_lambda`. The upper tail vanishes since
`supp(f_lambda) subset (-lambda,lambda)`. The arithmetic map's Poisson
identity gives rapid power decay of `G_lambda` at zero. Both pieces and their
sum lie in CCM's Weil class: they are piecewise `C^1` with finitely many
first-kind jumps and have the required power decay at `0` and `infinity`.
ACG's unconditional global radical identity therefore applies to `G_lambda`
and to each pairing with `v_lambda,w_lambda`. Polarization yields the exact
identity

    QW_lambda(v_lambda,v_lambda) = QW(w_lambda,w_lambda).

For every fixed integer `N>=3`, define

    M_N^0(f)=sup_y (1+|y|)^N |hat f(y)|,
    M_N^1(f)=sup_y (1+|y|)^N |(hat f)'(y)|.

Writing `p=N-3/2`, the Poisson formula and its derivative show that the
log-coordinate tail `W_lambda(z)=G_lambda(lambda^(-1)e^(-z))` satisfies

    |W_lambda(z)|+|W_lambda'(z)|
      <= C_N (M_N^0(f_lambda)+M_N^1(f_lambda))
             lambda^(-p) exp(-p z),   z>=0.

In the arithmetic representation of the global form on this tail, the
archimedean integral is finite and the prime-shift series is absolutely
convergent. Its logarithmic multiplier is bounded by an `H^s` norm for any fixed
`0<s<1/2`; the zero extension of this half-line `H^1` tail lies in `H^s`.
The pole product is `O(D_lambda^2)`. For a prime-power shift `log n`,

    |<w_lambda,S_(log n) w_lambda>|
       <= D_lambda^2 n^(-p)/(2p),

where `D_lambda=C_N(M_N^0+M_N^1)lambda^(-p)`. Hence the full prime sum is
bounded by a constant times
`D_lambda^2 sum_(n>=2) Lambda(n)n^(-(p+1/2))`, which converges for `N>=3`.
Altogether,

    |QW_lambda(v_lambda,v_lambda)|
      <= C_N (M_N^0(f_lambda)+M_N^1(f_lambda))^2 lambda^(-2N+3).

The smoothing construction gives
`M_N^0(f_lambda)<=C_N lambda^(1/2)epsilon^(-N)` and
`M_N^1(f_lambda)<=C_N lambda^(3/2)epsilon^(-N)`. With
`epsilon=lambda^(-3/4)` and `N=16`, `D_lambda=O(lambda^(-1))` and therefore

    |QW_lambda(v_lambda,v_lambda)| <= C lambda^(-2).

On every fixed compact subinterval of `(0,infinity)`, `G_lambda` converges
uniformly to `E(H)`, the nonzero Riemann kernel. Thus
`||v_lambda||_2>=c>0` for all sufficiently large `lambda`, and the Rayleigh
quotient of this explicit normalized window trial is `O(lambda^(-2))` in
absolute value.

## Proof details and domain audit

1. **Moment-preserving smooth cutoff.** Compression by `a` and convolution by
   an even unit-mass mollifier preserve evenness and zero integral. The
   source's uniform prolate-to-Hermite estimate plus `H(x)=O(x^2)` gives
   `g_lambda(0)=O(lambda^(-2)+epsilon^2+epsilon/lambda)=O(lambda^(-3/2))`.
   Subtracting `g_lambda(0)phi` fixes the point moment without changing the
   integral. In `L2`, `H_lambda-H=O(lambda^(-3/2))` from the source's uniform
   `O(lambda^-2)` estimate on an interval of length `2lambda`; compression
   changes the fixed smooth Hermite limit by `O(epsilon/lambda)`, and the
   even mollifier changes it by `O(epsilon^2)`. Thus the normalization factor
   is `1+O(lambda^(-3/2))`. In the supremum norm, the Hermite scaling and
   mollification errors are `O(epsilon/lambda+epsilon^2)`, and the fixed
   bump's seminorm contribution is lower order.
2. **Fourier seminorms.** Since `||H_lambda||_2=1` and its support has length
   `2lambda`, `||H_lambda||_1<=sqrt(2lambda)`. Differentiating the mollifier
   gives `||g_lambda^(N)||_1<=C_N sqrt(lambda)epsilon^(-N)`. Applying the same
   estimate to `x g_lambda`, whose support is bounded by `lambda`, gives
   `||(xg_lambda)^(N)||_1<=C_N lambda^(3/2)epsilon^(-N)`. Integration by parts
   in the Fourier transform proves the stated `M_N^0,M_N^1` bounds.
3. **Radical split.** ACG equation (9) places `E(f_lambda)` in the radical
   because `f_lambda` is even Schwartz and both moments vanish. The Weil
   class in CCM §3 allows first-kind jumps; hence `v_lambda` and `w_lambda`
   are legitimate arguments in the global sesquilinear form. Using
   `QW(G_lambda,v_lambda)=QW(G_lambda,w_lambda)=0` and
   `G_lambda=v_lambda+w_lambda` gives the exact equality of the two self-form
   values. No unproved form-core extension is needed for this split.
4. **Tail form.** The differentiated Poisson series is absolutely convergent
   for `N>=3`. Each term of the prime sum is bounded by integrating the two
   exponential envelopes over their overlap, and the Dirichlet series
   converges at exponent `p+1/2=N-1>1`. The archimedean and pole estimates
   use the same envelope. Constants depend on `N`, the fixed mollifier and
   bump, and source prolate constants, but not on `lambda`.
5. **Window norm.** The uniform `O(lambda^-3/2)` approximation to `H` gives
   `|E(f_lambda)(u)-E(H)(u)|=O(lambda^-1/2)` uniformly on each fixed compact
   `u`-interval: there are `O(lambda)` sampled terms before the support ends,
   while the remaining Hermite tail is Gaussian. Since `E(H)` is nonzero,
   its norm on some compact interval is positive, giving
   `||v_lambda||_2>=c>0`.

## Limits and prior art

This is an alternate radical-tail derivation of a Rayleigh upper estimate,
not a positivity theorem. ACG Theorem 3.2 already gives a much stronger
exponentially small upper bound for the low Weil eigenvalues from prolate
test vectors. The present polynomial estimate does not improve that bound,
does not establish `QW_lambda>=0`, and supplies no operator residual or
spectral gap. It is useful only as a source-checked mechanism that transfers
an exact global radical to the window through a quantitatively controlled
tail. No novelty claim is made.

The result remains conditional on the cited ACG prolate-to-Hermite estimates
and radical identity, though the tail estimates and moment correction are
derived here. No source proof audit, Lean formalization, numerical work, RH
implication, or Hilbert–Pólya correspondence is claimed.

## Sources

- Andrews–Connes–La Gatta, *The uncertainty operator, the Weil ground state
  and the zeros of zeta*, arXiv:2611.13129v1, equations (9), (12)–(15),
  (21)–(23), §§2.5–2.6, and Theorem 3.2.
- Connes–Consani–Moscovici, *Zeta Spectral Triples*, arXiv:2511.22755v1,
  equations (3.7)–(3.11), (3.19)–(3.20), and the definition of the Weil
  class at the start of §3.
