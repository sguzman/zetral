# B3-43 — What finite positivity certificates imply for the Weil ground spectrum

Date: 2026-11-28. Status: source/repository implication audit; no transfer
of Zetral's candidate certificate to the ACG Weil operator is established.

## Question

Do Zetral's existing finite positivity certificates imply the low-spectrum
lower bounds, even-sector simplicity, or odd-sector exclusion needed in the
Weil/prolate ground-state program of Andrews–Connes–La Gatta (ACG)?

## Exact variational implication at a fixed window

Fix `lambda>1`. Let `q_lambda` be the lower-bounded closed Weil form on
`L^2([lambda^(-1),lambda],du/u)`, and let `E_N` be the nested log-Fourier
Galerkin spaces whose union is a form core. Write

    mu(lambda) = inf {q_lambda[f] : f in Dom(q_lambda), ||f||=1},
    mu_N(lambda) = inf {q_lambda[f] : f in E_N, ||f||=1}.

The Rayleigh–Ritz theorem gives `mu_N(lambda) >= mu(lambda)` and
`mu_N(lambda) downarrow mu(lambda)`. Consequently, for this *same form* and
fixed window,

    mu(lambda) >= 0  iff  mu_N(lambda) >= 0 for every N.

The forward implication is restriction. The reverse follows by taking the
limit. If the form is decomposed into the inversion-even and inversion-odd
sectors, the same statement applies to each sector, and both sector bottoms
must be controlled. This is the fixed-window qualitative result in
`research/operators/B3-24-fixed-window-galerkin-limit.md`; it supplies no
finite cutoff or quantitative lower bound.

A single finite cutoff cannot determine the full bottom. For any fixed `M`,
on `ell^2(N)` let `q(e_n)=1` for `n<=M` and `q(e_{M+1})=-1`, with all
remaining diagonal entries `1`. Every compression to
`span{e_1,...,e_N}` for `N<=M` is positive, while the full form has bottom
`-1`. This elementary countermodel only falsifies the inference from a
bounded cutoff; it is not a model of the arithmetic Weil form.

## ACG lower hypothesis is RH-strength

ACG Hypothesis 3.4 assumes, uniformly for all sufficiently large `lambda`,
positive lower comparisons for the bottom eigenvalue in both inversion
sectors (as well as upper comparisons and higher-rung estimates). Its
Remark 3.5 states that the lowest-even lower bound implies window positivity;
the lowest-odd bound supplies the other parity sector. Positivity on all
large windows implies positivity on smaller windows by restriction, while
the hypothesis handles the large windows themselves. Weil's criterion then
gives RH. This explains why upper Fuchs-ladder test-vector estimates and
finite positivity data alone do not yield Hypothesis 3.4: its missing lower
direction contains global form positivity, not merely an eigenvector error
or a finite matrix margin.

## Certificate transfer audit

Zetral's LXXV artifact records an exact finite candidate certificate at
`h=2.51`, with a pinned finite residual range and exact replay. Its own
closure explicitly says it does not independently reevaluate the original
Weil quadratic form. In the active ACG formulation, the operator on the
window has the archimedean multiplier, a rank-at-most-two pole term, and
paired prime-power translations (see
`research/operators/B3-27-exact-restricted-Weil-operator-decomposition.md`).
No source-checked unitary identification, common quadratic-form identity, or
dense-core map has been established between that full operator and the
stored LXXV certificate object. Therefore the LXXV certificate cannot
currently be used as a lower bound for the ACG `QW_lambda` ground energy,
and it says nothing about the latter's ground-state simplicity or parity.

This is a scope conclusion about the evidence available in the repository,
not a claim that the two Weil-form approaches are mathematically unrelated.
An exact form identity plus the relevant domain/core statement could change
the conclusion. Even then, a finite cutoff would need a controlled tail or
the complete `N -> infinity` family at each window; a certificate at one
finite scale does not suffice.

## Falsification, evidence, and next question

The transfer claim was tested against ACG Hypothesis 3.4 and Remark 3.5,
Zetral's fixed-window Galerkin result B3-24, the exact operator decomposition
B3-27, and the LXXV closure record. The decisive missing evidence is a
common-form map and a full-space tail estimate. No RH inference, numerical
reproduction, novelty claim, or operator correspondence is made.

Next investigate ACG's semilocal high-index tail condition (H2′), especially
the polynomial-rate localized trace bound (66). The local trace-class result
and fixed-frequency qualitative convergence are already in B3-20; uniform
operator-norm approximation and its failure to control the weighted trace
alone are in B3-22/23. Seek a quantitative singular-index/frequency bound
for the actual semilocal Hankel pair, not a general norm-only estimate.

### Sources

- Andrews–Connes–La Gatta, *The uncertainty operator, the Weil ground state
  and the zeros of zeta*, [arXiv:2611.13129v1](https://arxiv.org/abs/2611.13129),
  Hypothesis 3.4, Remark 3.5, §§8.3–8.6.
- Zetral B3-24: fixed-window Galerkin convergence and its exact variational
  scope.
- Zetral B3-27: exact decomposition of the restricted Weil operator.
- Zetral [LXXV closure](../CAMPAIGN-75-CLOSURE.md): finite candidate
  certificate and explicit limits of its independent audit.
