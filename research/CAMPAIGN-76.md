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

The manual workflow .github/workflows/u76-low-entry-audit.yml replayed both
bounded diagnostics successfully in the locked Nix environment (Actions run
45899602205). Runner commit
7406734a0a4ef83147ecaa15de930d350ea5dfdc records the compact summary and
runner-generated outputs. Node v22.20.0 reproduced every direct midpoint
value from local Node v22.23.4; after excluding the runtime label, canonical
JSON hashes match exactly (direct
6fb92ce0b17406b7c0480e10fc79f436caa662debcd512bea5ff0e9f1d8cbff6;
compressed
71ef8fc87a53f997408ab626bea3dd3f1e9f577bea53176fdf1449e5445e8734).
This verifies reproducibility of a floating-point diagnostic and a replay of
the shared compressed implementation. It does not certify the direct
integrals or establish that the compressed entries represent the same test
functions.

## U76-02 corrected window and basis checkpoint (2026-11-26)

The prior mismatch is superseded: the first direct run used support [-h,h],
but the campaign parameter h is the support length. The correct basis on
[0,h] is phi_0=1/sqrt(h), phi_n=sqrt(2/h)cos(pi*n*x/h). Reflection about
h/2 splits it into the even-index and odd-index sectors used by LXXV.
Translation to a centered interval identifies them with even cosine and odd
sine modes respectively.

For n,k in the same index-parity sector, direct integration of the
correlation gives I_nk=I_kn, with I_nk exactly the closed form in
research/positivity/U76-01-direct-arithmetic-Gram.md. Therefore the direct
prime-power term is exactly the P(n,k) term in the compressed code, including
the normalization. The source guards ln(11)<h<ln(13), so the complete prime
powers in this window are exactly 2,3,4,5,7,8,9,11.

The corrected independent midpoint diagnostic at N=2^22 returns 0.03901061288350416
for the even constant entry and 0.06948297031382022 for the first odd entry.
The shared exact compressed intervals are near 0.03901061288309636 and
0.06948297031405642. The residual differences (~4.1e-13 and ~2.4e-13) are
compatible with floating quadrature/roundoff, but are not enclosed. The
archimedean and subtracted-kernel identity has not been independently
rederived entrywise.

The revised direct script and result are
experiments/u76-support-h-direct-diagnostic.js and
experiments/results/u76-support-h-direct-diagnostic.json. Actions run
45901442328 succeeded under locked Nix and pushed runner commit
f077faf81d270491db7b5a8851ec796f643717ff. The runner's support-h result,
after deleting only its runtime label, has canonical JSON SHA-256
76b7ec4950448c32ec504947dd024114e7bb21ea679617f3ebb6d713f4da809e, identical
to the local file. This verifies cross-runtime reproducibility of the
floating-point diagnostic only; it supplies neither an interval enclosure nor
an independent evaluation of the continuous terms. Next derive the
continuous-component identity and add rigorous interval quadrature for the
two low entries; full 52-by-52 reconstruction remains premature.

## U76-03 analytical checkpoint — 2026-11-26

The following is the initial symbolic checkpoint; its numerical gap was later
resolved for the single constant-even entry by U76-04 below.

For the constant even cosine vector on `[0,h]`, the correlation is
`S_00(t)=2(1-t/h)`. The archimedean integral evaluates exactly to
`16(cosh(h/2)-1)/h`. Expanding the denominator of the subtracted kernel and
pairing terms gives the exact series
`D_00=2 sum_{j>=0}(J_h(2j+1/2)-E_h(2j+1))`, where
`J_h(a)=1/a-(1-exp(-a h))/(h a^2)` and `E_h(b)=(1-exp(-b h))/b`.
The pair is O_h(j^-2); the unpaired sums diverge. At this initial U76-03
checkpoint this supplied a closed series but no numerical enclosure. An
absolute tail bound after J terms is proved in the direct Gram note:
`2(1/2+3/h)[(2J+1/2)^-2+1/(2(2J+1/2))]`. The next step is outward-rounded
evaluation of the finite partial sum and comparison with the compressed
continuous decomposition, followed by a derivation of the odd first diagonal.
U76-04 below resolves the scalar evaluation for the constant entry; the odd
first diagonal and remaining entries stay open.

### U76-04 certified scalar-entry checkpoint — 2026-11-26

The rational part has now been summed analytically, giving
`D_00=2[pi/4+(log 2)/2-(pi^2+8G)/(4h)+R(h)]`, where G is Catalan's constant
and R is a positive exponential series with explicit geometric tail. U76-04
then evaluated the full original-form constant-even entry with outward-rounded
fixed-point intervals. Its direct enclosure is wholly contained in the
stored compressed interval; see `research/positivity/U76-01-direct-arithmetic-Gram.md`
and `experiments/results/u76-constant-series-interval.json` for exact
endpoints and arithmetic bounds. Actions run 45904856371 and local locked-Nix
replay match after removing runtime metadata (SHA-256
`ce866500c077e014fb12fb4f4abc400ccea3f8d5a22d6ea5111c57a240c1faf5`). The
direct interval width is `2.9006e-66`; it lies inside the comparator interval
with lower/upper margins `1.0241471898e-60` and `1.2057649096e-60`. This passes
one scalar entry only. The first odd diagonal, all other entries, and
full-matrix aggregation remain open.
