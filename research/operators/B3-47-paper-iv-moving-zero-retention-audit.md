# B3-47 — Audit of the conditional moving zero-retention argument

Date: 2026-11-28. Status: focused manual verification of the logical bridges in
Suvlu Paper IV, §7 and Appendix A.2–A.7. No formal verification or source-author
review.

## Pinned source and question

Dylan Suvlu, *Constant-mode transfer and compactness criteria for finite Weil
characteristics*, draft dated 24 September 2026,
<https://dsuvlu.github.io/weil-form-operators/paper/finite-weil-constant-mode-transfer.pdf>.
The inspected PDF has SHA-256
`c0181d3f37e8b5db0a340a2ae94c8c5a668d27592ef85174fb65555e6fe9fde5`.
It was converted with `pdftotext -layout`; the audit checked the hypotheses of
Theorem 5 and equations (57)–(118), emphasizing Appendix A.2–A.7.

Question: assuming one and the same sequence of integer lengths/cutoffs has
simple even full ground states and uniformly bounded complete characteristic
mean, do the stated finite estimates really force every zero of `Xi` into
every locally uniform characteristic limit, including nonreal and multiple
zeros?

## Audited implication chain

1. The complete mean contains the untouched lattice tail. Integral comparison
   gives `M >= a_L atan(a_L/(N+1))`, `a_L=L/(8 pi)`. For large `L`, inversion
   yields `N >= L^2/(128 pi^2 M)`. This is enough for Gaussian Fourier
   projection errors of order `exp(-c L^2)`, while the interval current norm
   grows only as `O((1+L) exp(L/2))`. Thus the product of the current norm and
   projection error tends to zero. The threshold and same-sequence quantifiers
   are essential.
2. For a fixed filter `phi_s(z)=exp(-(s+1)z^2)-exp(-(s+2)z^2)`, `s>16M`, the
   finite energy estimate gives `epsilon_j -> 0`. The anchor-normalized
   filtered states have a uniform Gaussian envelope and a nonzero exponential
   moment, so their norms have a positive lower bound. Formula (68) then
   bounds both signs of the finite least energies. This justifies extracting
   an energy-convergent subsequence together with any locally uniform
   characteristic cluster.
3. The Gaussian projection, spatial periodization and current-growth bounds
   yield the whole-line equation against every translate of one fixed-width
   Gaussian. The source then forms the residual `T=H U_F-E U_F`, bounds it by
   `C(1+|t|) exp(|t|/2)`, and multiplies by a Gaussian. Its bilateral Laplace
   transform is entire. Vanishing on the real line, followed by the identity
   theorem and Fourier uniqueness, proves the pointwise current equation.
   The same subsequence works for every translate; no test-dependent
   extraction is used.
4. The theta-derived tests have transforms
   `-(z^2+1/4)^j Xi(z)`. The source checks their explicit-formula test class
   using Gaussian convolution decay and endpoint power decay in the
   multiplicative variable. Their span is dense in ordinary even `L^2`: an
   orthogonal vector makes every moment of `fhat Xi` vanish; exponential
   decay of `Xi` makes its Fourier transform analytic in a strip, hence zero.
   Pairing the current equation with each admissible test gives
   `E <k_j,U_F>=0`; since `U_F` is nonzero and even, density implies `E=0`.
   This does not extend the Weil form as a bounded `L^2` form.
5. For a zero pair `+/-gamma` of multiplicity `m`, Appendix A.7 divides the
   theta transform successively by `(z-gamma)^m(z+gamma)^m`. With the stated
   convention `fhat(z)=integral f(t)e^{-izt}dt`, the tail primitive
   `R_gamma k(t)=i e^{i gamma t} integral_{-infinity}^t e^{-i gamma u}k(u)du`
   satisfies `(-i d/dt-gamma)R_gamma k=k`, hence
   `Rhat_gamma(z)=khat(z)/(z-gamma)`. The moment-zero condition makes the two
   tail formulas agree. The theta tails decay superexponentially, which
   absorbs the exponential growth for complex `gamma`; contour shifts retain
   the zero moment. After division at both members of the pair, the test is
   even, legal, nonzero at that pair, and zero at every other `Xi` zero.
   In the explicit formula all other terms vanish and the surviving
   coefficient is nonzero, proportional to
   `Xi^(m)(gamma)/(m!(2 gamma)^m)`. Therefore `hat U_F(gamma)=0`.
   Since `hat U_F=phi_s F` and the zeros of `phi_s` have imaginary part of
   magnitude at least `pi`, whereas `Xi` zeros have magnitude at most `1/2`,
   the filter is nonzero at every `Xi` zero; thus `F(gamma)=0`. The point
   `gamma=0` is excluded because `Xi(0)>0`.

## Assessment and limits

I found no gap in these specific quantifier, domain, cutoff, or complex-zero
bridges on the stated hypotheses. In particular, the nonreal-zero division is
not restricted to real `gamma`; its tail estimates use the superexponential
theta decay. The conclusion is value retention, not equality of multiplicity
or uniqueness of the cluster. Real-zero characteristics and Hurwitz then
make RH follow *if* the assumed unbounded selected sequence with bounded
complete mean exists.

The decisive arithmetic premises remain open: existence of an unbounded
sequence of simple-even full minima and a uniform complete-mean bound on
that same sequence. No such sequence was constructed here. The audit is a
manual check of the displayed draft argument, not a Lean proof, independent
expert review, RH proof, or Hilbert–Pólya operator correspondence. The
author's verification map does not include the moving zero-retention theorem;
Zetral did not build that external Lean snapshot.

## Reproduction record

The source text was obtained from the pinned PDF URL above and inspected with:

```sh
pdftotext -layout /tmp/zetral-paper-iv.pdf /tmp/zetral-paper-iv.txt
```

No large computation, local Lean build, or numerical experiment was used.
