# U04-W01 — Rigidity of the bottom Fourier space

Date: 2026-11-26. Baseline: `8fb1647cd10dc948db15b65f13250d8f8d0ac4b2`.

## Scope and conclusion

Audited the finite-dimensional structure argument in `research/positivity/U04-bottom-space-rigidity.md`: construction of a generator, parity/reality, support span, and the derivative/multiplicity criterion. **No gap was found under U03's division and zero-count lemma, invariance of the Weil form under conjugation/reflection, and U01's strict window monotonicity.** The main statements follow by finite-dimensional interpolation and the Fourier characterization of Sobolev derivatives. No simplicity conclusion follows without separately showing that the derivative criterion never occurs.

## Polynomial-times-generator structure

Let `E` be the Fourier image of the bottom eigenspace and `dim E=m`. The imports are: U03's rule that `F/(z-w) in E` whenever `F in E` vanishes at nonreal `w`; its bound of at most `m-1` nonreal zeros counted with multiplicity; and stability of `E` under reflection and conjugate reflection.

Choose `m-1` distinct nonreal points `w_1,...,w_(m-1)`. The evaluation map `E -> C^(m-1)` has nontrivial kernel, so choose nonzero `F` vanishing at all these points. The zero-count bound forces these to be all its nonreal zeros, each with exactly multiplicity one. Repeated division is legitimate because the nodes are distinct and the division rule preserves membership in `E`. Thus

`H(z)=F(z)/prod_j(z-w_j)` belongs to `E` and has no nonreal zeros.

For `j=0,...,m-1`, the successive quotients

`F_j(z)=F(z)/prod_(i=1)^j(z-w_i)=H(z) prod_(i=j+1)^(m-1)(z-w_i)`

lie in `E`. Their polynomial factors are monic of distinct degrees `m-1-j`, hence linearly independent. Therefore `H P_{<m} subset E`; both spaces have dimension `m`, so

`E=H P_{<m}`.

This also covers `m=1`, with an empty node list and `H=F`.

If `K` is another generator with `E=K P_{<m}`, then `K=H P` and `H=K Q` for polynomials `P,Q` of degree `<m`. On the open set where `H` is nonzero, `PQ=1`, hence this polynomial identity holds everywhere; both polynomials are nonzero constants. So the generator is unique up to a scalar.

## Reality, parity, and multiplicity balance

Because the underlying Weil form is real and even, the anti-linear map `C H(z)=overline(H(overline z))` and the linear reflection `R H(z)=H(-z)` preserve `E`. For the generator, write `C H=H P` with `deg P<m`. Applying `C` again gives `P(z)overline(P(overline z))=1`; hence `P` is a constant of modulus one. A phase change makes `H` real on the real axis. Similarly `R H=H Q`; applying `R` twice gives `Q(z)Q(-z)=1`, so `Q` is a constant with `Q^2=1`. The generator is therefore even or odd. Multiplication by an even/odd generator identifies the even and odd subspaces with the corresponding parity polynomials of degree `<m`; their dimensions are `ceil(m/2)` and `floor(m/2)` in some order.

## Sobolev regularity and full support span

Since `z^k H(z) in E` for `0<=k<m`, each is the Fourier transform of an `L2` function supported in `[-a,a]`. With convention `F[h](z)=integral h(x)e^(izx)dx`, the distributional identity is `F[i h'](t)=t F[h](t)`. Plancherel then gives `h` weak derivatives through order `m-1` in `L2(R)`: `h in H^(m-1)(R)`, supported in `[-a,a]`. In particular, when `m>=2`, `h in H^1(R)` and its restriction has zero endpoint traces, so `h|_I in H_0^1(I)`.

If the convex hull of `supp h` had length strictly less than `2a`, translation invariance would move it into a centered interval `(-b,b)` for some `b<a`. It remains a form-domain vector there, with unchanged norm and Weil energy, so its Rayleigh quotient would give `lambda_b<=lambda_a`. U01's strict domain monotonicity gives `lambda_a<lambda_b`, a contradiction. Thus the support span is exactly `2a`. This is a statement about the convex-hull length of the essential support, not a claim that `h` is nonzero at both endpoints in a pointwise sense.

## Derivative criterion

If `m>1`, then `H,zH in E`; their inverse transforms are a nonzero bottom vector `h` and its `i`-derivative, both in the bottom eigenspace. The Sobolev conclusion above makes this a supported `H_0^1` function.

Conversely, suppose a nonzero bottom vector `h` has `i h'` also in the bottom space. In Fourier variables, both `F` and `zF` lie in `E`. They are linearly independent: if `zF=cF` for a scalar `c`, the entire identity `(z-c)F(z)=0` forces `F` identically zero. Hence `dim E>1`. Multiplication by `i` does not change membership, so the criterion is equivalent whether stated for `h'` or `i h'`.

## Assumptions and limits

Imported, not reproved: U03's zero-swap/division closure and finite zero count; reality/reflection invariance of the Weil form; U01's strict domain monotonicity and translation extension to form-domain vectors; existence and finite multiplicity of the bottom eigenvalue. The support argument uses translation invariance for non-smooth form vectors as provided by U01; it does not rely on the eigenfunction being a compactly supported smooth test. No RH, positivity-improving semigroup, simple-ground-state theorem, numerical calculation, formal verification, human review, or novelty claim is asserted.

## Sources and checks

Repository sources at the baseline: `research/positivity/U04-bottom-space-rigidity.md`, `U03-critical-inverse.md`, and `U01-strict-bottom-monotonicity.md`. This is an independent proof audit of the displayed deductions, conditional on those imported results. Suzuki arXiv:2606.09096v4 was retrieved during the preceding U03 audit for the logarithmic form setup, but the U04 deductions are not stated there as such. No new primary-literature comparison was made.
