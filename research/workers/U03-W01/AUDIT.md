# U03-W01 — Nonreal-zero removal in the bottom eigenspace

Date: 2026-11-26. Baseline: `8fb1647cd10dc948db15b65f13250d8f8d0ac4b2`.

## Scope and conclusion

Audited only the nonreal-zero-removal and finite-dimensional zero-count argument in `research/positivity/U03-critical-inverse.md`. **No gap was found under its imported supported-form representation:** the rational zero swap preserves support, the full logarithmic form norm, and the Weil-form value; this makes division by any existing nonreal zero an endomorphism of the bottom eigenspace. The zero-count and evaluation-injectivity consequences then follow by elementary independence. No RH hypothesis is used.

The central qualification is that form-energy equality must be interpreted through the translation-invariant Weil quadratic form on compactly supported smooth functions, then extended by density/closed-form continuity. Equality of real-axis Fourier moduli alone would not preserve an arbitrary nontranslation-invariant quadratic form.

## The zero-swap map

Let `I=(-a,a)`, let `f` be in the supported logarithmic form domain, and set `F(z)=integral_I f(x)e^(izx) dx`. Suppose `F(w)=0` for a nonreal `w`. Define

`G(z)=((z-conj(w))/(z-w)) F(z)`.

The apparent pole at `z=w` is removable. Away from any fixed disk about `w`, the rational factor is bounded and tends to one at infinity; within the disk the removable product is bounded. Thus `G` is entire of exponential type at most `a`. For real `t`, `|t-conj(w)|=|t-w|`, so `|G(t)|=|F(t)|`. In particular `G|_R` is square integrable with the same norm. The Paley–Wiener theorem therefore represents `G` as the Fourier transform of an `L2` function supported in `[-a,a]`.

Suzuki v4 §3.1 defines the supported `H^log(I)` norm through the weight `1+log^+|t|`; hence the real-axis modulus identity gives exactly the same `H^log` norm. With the imported equivalence of the closed Weil form norm and this supported logarithmic form norm at fixed `a`, the new function belongs to the same form domain.

For `phi in C_c^infty(I)`, the Weil quadratic form is determined by the autocorrelation `phi*tilde(phi)` (equivalently its real Fourier multiplier representation). Equal Fourier moduli give equal autocorrelations by Fourier uniqueness, so the form values of the smooth approximants agree. To pass to arbitrary supported `H^log` functions, first apply the same inward dilation `D_r f(x)=r^{-1/2}f(x/r)` to both corresponding functions, with `r<1` tending to one, then convolve both with the same smooth compactly supported mollifier whose radius is less than the new support margin. Their Fourier transforms remain equal in modulus: dilation sends `F(t)` to `sqrt(r)F(rt)` and common convolution multiplies both transforms by the same factor. These approximants are in `C_c^infty(I)`. Dilation is strongly continuous in the weighted norm because `1+log^+|t/r|` is uniformly comparable to `1+log^+|t|` for `r` near one. For a common mollifier with Fourier multiplier `M_\epsilon`, convergence follows from

`||M_epsilon D_r f-f||_(Hlog) <= ||M_epsilon|| ||D_r f-f||_(Hlog) + ||M_epsilon f-f||_(Hlog)`,

where `||M_epsilon|| <= ||rho||_1` uniformly and `M_epsilon f -> f` by dominated convergence. Thus both approximant sequences converge in the closed form norm, and continuity of the form gives equal Weil-form values in the limit. Plancherel also gives equal `L2` norms.

## Bottom eigenspace division and zero count

Let `E=ker(A_a-lambda_1(a)I)` and let a nonzero `f in E` have Fourier transform `F` with `F(w)=0`, `w` nonreal. The transformed function `g` has the same `L2` norm and the same closed form value as `f`; hence it also attains the variational bottom. By the spectral theorem for the semibounded self-adjoint operator associated with the form, `g in E`.

Since

`G-F=(w-conj(w)) F(z)/(z-w)`

and `w-conj(w) != 0`, it follows that `F(z)/(z-w)` is also the Fourier transform of a vector in `E`. This is the division closure used in U03; the zero swap itself is not the divided vector, but their difference supplies it.

If `F` has `k` nonreal zeros counted with multiplicity, list them as `w_1,...,w_k` with repetitions. Repeated division gives the `k+1` nonzero bottom vectors

`F_j(z)=F(z)/prod_(i=1)^j (z-w_i)`, `j=0,...,k`.

They are linearly independent: after multiplying a putative relation by `prod_(i=1)^k(z-w_i)` and using that `F` is not identically zero, one obtains a linear combination of monic polynomials of distinct degrees `k,k-1,...,0`. Therefore `k+1<=dim(E)=m`, so each nonzero member of `E` has at most `m-1` nonreal zeros, counted with multiplicity. In particular, evaluation at any `m` distinct nonreal points is injective on `E`, and a nonzero member cannot have a nonreal zero of order `m` or higher.

There is also no nonreal point common to all of `F[E]`: if every member vanished at one such `w`, division by `z-w` would define an injective endomorphism of the finite-dimensional space `E`, hence a surjection. Iterating its inverse would force every fixed member to have a zero at `w` of arbitrarily high order, so it would be identically zero, a contradiction.

## Findings and limits

- No sign issue occurs: `G-F=(w-conj(w))F/(z-w)` with the chosen convention `F(z)=integral f(x)e^(izx)dx`.
- Support preservation uses Paley–Wiener after removal of the single pole; it is not inferred solely from real-axis modulus.
- Passing the form equality requires density of compactly supported smooth functions in the supported `H^log` form domain and continuity of the closed form. The common inward-dilation/mollification procedure preserves equal moduli at every approximation stage.
- Imported, not reproved here: Suzuki's form-domain identification and equivalence; the Weil autocorrelation representation on test functions; compact resolvent and existence/finite multiplicity of `E`; the spectral theorem. The full U03 scaling/resolvent blow-up estimates and prior-art comparison are out of scope.
- No numerical or formal verification, human review, RH conclusion, zeta-ordinate identification, or novelty claim.

## Source provenance

- Primary source retrieved directly on 2026-11-26: Suzuki, arXiv:2606.09096v4, `https://arxiv.org/html/2606.09096v4`, §§2.3–2.5 (quadratic-form/Fourier formulas), §3.1 (supported `H^log` domain and form norm), and §4.1 (compact embedding). The source confirms the fixed-window logarithmic form setup; it does not state the zero-swap lemma. The autocorrelation representation of the Weil test form is imported from the defining form setup used in repository note U01 and is not independently reconstructed from the arXiv article in this audit.
- Repository notes checked at the baseline: `research/positivity/U03-critical-inverse.md`, `QER01-edge-quotient.md`, and `U01-strict-bottom-monotonicity.md`.
- The zero-swap, approximation preservation, division identity, and zero-count argument above were independently derived for this audit. No scripts or numerical tools were needed.
