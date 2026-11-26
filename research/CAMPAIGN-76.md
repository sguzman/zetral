# Campaign LXXVI — Independent original-form audit

Status: ACTIVE. Start from the verified LXXV candidate checkpoint at
`a8705e1fb86d656fcf9effa2c42cc6ec632ccd6f`; do not rerun the completed
residual campaign.

## Precise question

Can the LXXV even and odd fixed-window lower bounds at h=251/100 be reconstructed
from the original Weil quadratic form by a derivation and implementation that
does not reuse the shared compressed-kernel/matrix assembly? Or does a
normalization, parity, endpoint, prime-power, or tail term fail to match the
stored 52-dimensional interval certificate?

The working hypothesis is that the stored matrix comparison is consistent with
the original form. This is unverified. The audit must be capable of finding a
discrepancy; byte replay of the current generator is not acceptance.

## Evidence and prior art to check

- LXXV finite certificate and its scoped stored-interval audit:
  `research/CAMPAIGN-75-CLOSURE.md` and
  `experiments/results/u75-04-closing-audit.json`.
- Independent representations and normalizations:
  `research/reconstruction.md`, `literature/gram-quadrature.md`, and
  `schematics/spectral-construction.md`.
- Primary sources: Lagarias–Montague, arXiv:1106.4348v3, (1.1)–(1.2);
  Suzuki, arXiv:2606.09096v4, §§1 and 4; Suzuki,
  arXiv:2610.32704v1, (2.2)–(2.9), Theorem 3.3. Record which identities require
  RH and which are unconditional.
- External comparison: Mori's `prolate-weil-bounds` repository, release
  v1.6.2 README and Paper VII/VIII certificate sources. Its documentation
  distinguishes fixed-window finite matrix certificates from analytic
  prolate-defect bounds; match support and normalization before comparing any
  range. No priority or novelty claim is in scope.

## Methods and falsification

1. Derive the low-space sesquilinear form directly from the original Weil
   explicit formula or its original Fourier kernel, with a separately written
   normalization and parity decomposition.
2. Evaluate the 52-by-52 even and odd forms independently, including the
   archimedean, prime-power, pole, endpoint, and infinite-tail terms. Use exact
   rational arithmetic where available and outward-rounded intervals for
   transcendental integrals. Run this on free GitHub Actions runners through
   the locked Nix environment; do not download large certificate datasets
   locally.
3. Start with small principal blocks and simple rational test vectors so sign
   and factor-of-two mistakes surface before the full computation. Compare each
   independent interval against the corresponding stored enclosure and try
   adversarial endpoint and parity conventions.
4. If the independent formulas cannot be mapped to the stored 52-dimensional
   comparison without using the shared compression identity, preserve the
   mismatch as a logical gap and identify the minimal missing theorem.

## Acceptance and verification

Pass only if every independently evaluated interval lies inside the stored
certified interval, the independent quadratic-form decomposition accounts for
all terms, and the exact lower comparison remains positive in both parities.
A reproducible discrepancy is also a completed investigation if it identifies
the first incorrect or unsupported step and preserves a counterexample. An
incomplete map between the original form and compressed matrix is neither a
pass nor a counterexample.

The report must distinguish: prior-source theorem, imported assumption,
internal proof, numerical/interval evidence, and unresolved original-form
mapping. No RH, operator-correspondence, or novelty claim follows from this
campaign alone.

## Milestones

- **U76-01:** source audit and independent derivation of one even and one odd
  low-block entry, including full Fourier normalization.
- **U76-02:** scale to the complete 52-by-52 matrix with certified quadrature
  and tail intervals; preserve detailed failure artifacts.
- **U76-03:** independent aggregation and comparison with both LXXV sectors;
  close with a proof-gap statement if a fully independent reconstruction is
  not presently attainable.

If U76-01 exposes an intrinsic dependence on the same sampled-zero identity,
do not relabel a replay as independent. Pivot to Campaign LXXVII on analytic
continuation of the h-parameter, as prioritized in `research/BACKLOG.md`.

## U76-01 source-audit checkpoint (2026-11-26)

Primary-source review confirms two distinct formulations. Suzuki v4 §1.1
defines the arithmetic Weil functional directly by its archimedean integral,
von Mangoldt prime-power sum, pole term, and subtracted hyperbolic-kernel
integral; the quadratic form is `W(v * tilde(v))`. Suzuki v1 Theorem 1.1
explicitly assumes RH for the zero-sampling representation and convergence
theorem, while the local arithmetic form is defined without zero data. Thus
the original-form audit must start with the arithmetic functional, not with
the conditional zero-sum identity.

The repository's `literature/gram-quadrature.md` already derives a direct
finite-interval correlation formula for the exponential basis and accounts
for the exact tail term `-delta log(tanh(L/2))`; it also specifies all prime
powers through `Lambda(q)`. This gives a plausible independent source-form
route. However, that note labels its derivation informal and unvalidated, and
the LXXV `entry` path in `experiments/tc01-post-log11-em.js` uses a different
compressed sine/cosine representation. No entrywise equality between the
direct quadrature and the compressed path has yet been demonstrated. This is
the primary falsification target for U76-02, including factor-two and parity
normalization.

Prior-art inspection: Suzuki v4 §1.1 (source definition) and §8 (continuous
kernel reformulation); Suzuki v1 §§2–3 and Theorem 1.1 (RH-conditional spectral
correspondence); Mori's public `prolate-weil-bounds` README (fixed-window
certificate context). Mori's README is a lead only; no paper proof or
normalization match has been audited. No novelty claim follows.

**Disposition:** U76-01 source audit complete; independent entry calculation
remains open. This is not a pass or a discrepancy. Next derive the direct
arithmetic matrix entries for small even and odd principal blocks from the
Weil functional, then compare them with the pinned LXXV enclosures before
scaling to 52 dimensions. No CI computation has been run in this checkpoint.

### Symbolic reduction follow-up

The direct exponential-basis convolution and the parity-polarized even/odd
entries are now derived in the standalone note
research/positivity/U76-01-direct-arithmetic-Gram.md. An apparent conflict in
the infinite-tail term was falsified: the first pass simplified the source
kernel incorrectly, and the corrected calculation agrees with the existing
tail formula. This is a preserved failed falsification, not a certificate.
Numerical entry evaluation and the map from LXXV's every-other-frequency basis
and common scaling remain open. Next evaluate low even/odd entries directly;
scale only after a justified basis map is established.

## U76-02 low-entry diagnostic checkpoint (2026-11-26)

Direct raw Fourier Gram values at a=2.51 were evaluated by midpoint
refinement through 2^20 subintervals. The final double-precision values are
G_00=0.019197802326197156 and G_11-G_1,-1=0.00010313765014579104; changes
over the final 4x refinement were 5.89e-11 and 9.61e-12 respectively. These
are exploratory discretization diagnostics without rigorous error bounds.
The prime-power sum includes q<=151, consistent with exp(5.02) in (151,152).

A low-index extraction from the existing compressed source returned exact
intervals approximately [0.03901061288309636,0.03901061288309636] for its
even A[0,0] and [0.06948297031405641,0.06948297031405641] for the odd A[0,0].
The exact numerators and shared-code provenance are preserved in
experiments/results/u76-compressed-entry-probe.json. These differ from the
direct raw Gram values, but no same-entry relation has been proved; A includes
compressed transformations. Therefore this is a failed same-index mapping
attempt, not a contradiction in the LXXV certificate.

Reproducible scripts and output files:
experiments/u76-direct-diagnostic.js,
experiments/results/u76-direct-diagnostic.json,
experiments/u76-compressed-entry-probe.js, and
experiments/results/u76-compressed-entry-probe.json. Both scripts pass
node --check. Next derive the actual test-function map underlying A and its
normalization. Until then, full 52x52 source-form comparison is premature.

The manual workflow .github/workflows/u76-low-entry-audit.yml has been added
to replay these two bounded diagnostics in the repository's locked Nix Node
environment and commit a compact summary. It has not yet been dispatched.
The direct midpoint values remain non-certified; the workflow is a
reproducibility check and does not change that evidence level.
