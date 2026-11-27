# Zetral paper-candidate register

Updated: 2026-11-27. This is a triage list for possible mathematical
write-ups, not a novelty or publication claim. All items are AI-assisted
candidate work under human direction. “Paper-shaped” means the result has a
coherent question and a consolidated derivation; it does not mean proof
verification, originality, or journal readiness.

| Candidate | Mathematical result and scope | Current write-up state | Next requirements before external paper |
|---|---|---|---|
| Local small-window spectrum | Unconditional fixed-index two-term expansion for the phase-pi local Weil-form differentiation spectrum as the interval shrinks; it is not the ordinary L2 form spectrum or the zeta-zero spectrum. | Candidate manuscript v0.1 exists at [`campaign-05-small-window-spectrum.md`](asymptotics/campaign-05-small-window-spectrum.md). This is the most directly manuscript-shaped standalone result in the repository. | Independent expert proof audit; exact comparison with Suzuki's local expansions and nearby literature; clarify the precise form-domain inputs and all remainder quantifiers. No Lean formalization currently exists. |
| Sobolev parity trace and zero recovery | An H0^1 generalized trace has an exact exponential expansion whose meromorphic Laplace transform recovers the zero multiset; trace boundedness is RH-equivalent and the exponential growth rate identifies the maximal real displacement. Campaigns XXII–XXIII extend this to maximal groups and generalized negative-spectrum asymptotics. This is not ordinary L2 spectral correspondence. | Consolidated notes: [`STS02`](positivity/STS02-laplace-zero-recovery.md), [`STS04`](positivity/STS04-audit-volterra-inverse.md), [`SES04`](positivity/SES04-audit-and-metric-bridge.md), with individual derivations linked from those files. | Highest-value analytic synthesis candidate, but first audit the complete chain independently, compare carefully with classical explicit-formula and RH-equivalent criteria, and state the altered Sobolev metric prominently. No actual off-line zero or computed ordinary spectrum is involved. |
| Common Clark endpoint limit | Under RH, normalized scalar Clark models for the shifted xi family converge in strong resolvent sense on one Hardy space; a heat-family model has the same endpoint. The limit is not identified with Suzuki's original arithmetic Hamiltonian and does not give a finite-parameter intertwiner. | Two linked operator notes: [`B5-14`](operators/B5-14-clark-strong-resolvent-limit.md) and [`B5-15`](operators/B5-15-shift-heat-common-clark-limit.md). | Independent audit of the model-space embeddings, infinity-atom hypotheses and exact operator identification; search prior work on convergence of Clark models under inner-function limits. Present only as a conditional model-limit result unless the arithmetic identification is proved. |
| Fixed-width positivity criterion | Manual deduction that positivity on all translates of packets built from one fixed support width is equivalent to RH. It uses the classical Weil criterion and a Landau singularity argument; it is not an RH proof. | Detailed note at [`B1-24`](positivity/B1-24-fixed-width-positivity-RH-criterion.md). | Novelty and hypothesis comparison are unresolved. Do not prioritize a standalone paper until the exact relation to recent fixed-support and Weil-form criteria is checked by an independent analyst. |
| HP-02 fixed-low corner and moving-block Schur criterion | HP-02.3–.4 establish an RH-conditioned fixed-low corner limit in zero-side coordinates. HP-02.5–.6 give a conditional weighted Schur criterion and an explicit scalar-shift row estimate. HP-02.7 shows coarse zero-count growth plus sine separation alone cannot control the moving inverse-metric sum, via an abstract close-pair countermodel. | Supporting notes: [`HP02-fixed-low-random-window.md`](operators/HP02-fixed-low-random-window.md), [`HP02-fixed-low-pencil-corner.md`](operators/HP02-fixed-low-pencil-corner.md), [`HP02-moving-block-schur-target.md`](operators/HP02-moving-block-schur-target.md). | Supporting appendix material only. Independent proof audit, prior-art review, and zeta-specific arithmetic moving-block bounds remain required. Countermodel is not about actual zeta gaps; no novelty claim or spectral transfer. |
| Theta differential-pencil domain audit | All smooth positive local densities fail pair symmetry on the common test core. The natural gauge form is closed and induces the free Laplacian. Kernel-vector and boundary-trace tests constrain domains; the zero-generated span evades the first pointwise test, while essential self-adjointness fixes the natural similarity-domain closure and prevents a core-preserving boundary correction from adding eigenvectors. Density and closure remain open. | Eight explicit milestones recorded below and derived in [`CAMPAIGN-95.md`](CAMPAIGN-95.md), HP-03.1–.8. | Potential short note or comparative-operator appendix after independent operator/domain audit and prior-art review. No general nonlocal no-go or full spectral correspondence is established. |
| Meyer Fréchet-model Hilbertization barriers | MHS-01: the original infinite-dimensional nuclear Fréchet topology is not Hilbertizable. MHS-02.1–.5: a manual Mellin-multiplier argument proposes zero quotient for every absolutely continuous density `w(tau)d tau` bounded above and below by polynomial weights, on every real Mellin line, including the pole. The non-pole tempered-distribution annihilator and pole-line Sobolev graph-core argument were rederived locally, but have no formal or independent external verification. | Detailed derivations and exact Meyer source scope in [`CAMPAIGN-96.md`](CAMPAIGN-96.md). | Possible supporting section describing the limits of ordinary absolutely continuous Mellin Hilbertizations. Obtain independent proof audit and prior-art review; singular measures, super-polynomial weights and non-Mellin Hilbert norms remain open. No Hilbert–Pólya construction is established. |
| Prolate-to-Weil eigenvector bridge | A residual/gap inequality identifies the scale needed to transfer prolate-candidate convergence to the full restricted-Weil ground vector; a Mellin functional norm shows local-uniform transform convergence requires stronger than unweighted L2 convergence. A second approximation leg controls the finite Fourier truncation used in the CCM operator. Actual-family residuals, gaps, parity, and boundary normalization remain open. | Active campaign [`XCVII`](CAMPAIGN-97.md), motivated by Connes 2026 §§6–7 and Connes–Consani–Moscovici 2025. | Derive both actual-family residual and spectral-gap bounds; settle simplicity/evenness; control the determinant's boundary normalization; audit prior art and source hypotheses. No RH implication or operator convergence is established. |

## Milestone log for write-up planning

These are the completed Zetral results most directly connected to a future
theta-pencil write-up. “Completed” means the stated calculation or deduction
was recorded; the entries remain AI-assisted manual mathematics, not
independently verified theorems. The strongest plausible write-up is a
carefully scoped obstruction note, not a Hilbert–Pólya construction.

### Major candidate results

- **HP-03.2 — local-weight obstruction.** A formal differential-operator
  comparison shows no strictly positive smooth density `rho(x) dx` makes the
  theta pair symmetric on the shared `C_c^infinity` core. The calculation
  forces `rho` constant and then contradicts the theta asymptotics. This is
  the cleanest theorem-shaped result in this campaign and could anchor a
  short paper or a section in an operator-realization audit. Its exact scope
  (common core) must stay in the statement.
- **HP-03.5–.6 — domain escape and its limitation.** The pair identity
  cannot hold on a positive faithful domain containing `k,Dk,D²k`, while a
  tail estimate shows the source's literal zero-generated finite span
  excludes those functions pointwise. Together these give a precise
  obstruction-and-escape result: the kernel test is not a universal no-go.
  Potentially useful as a technical section paired with HP-03.2; density,
  closure and completion of that span are unresolved.
- **HP-03.7 — one natural nonlocal candidate fails.** The similarity-pulled
  metric fails to factor through `L`, and its constants quotient is not
  invariant. This is a useful negative construction audit, likely supporting
  material rather than a standalone paper.
- **HP-03.8 — boundary trace limitation.** A proposed rank-one correction
  vanishes on `C_c^infinity`, which is an essential self-adjoint core for the
  natural similarity expression. Any self-adjoint operator preserving that
  core action must therefore be its unique closure and cannot gain theta-zero
  eigenvectors. This is a conditional, likely supporting lemma; altered
  metrics or domains are outside its scope.

### Supporting milestones

- **HP-03.1:** the direct gauge-weighted space already fails formal symmetry
  on compactly supported smooth functions; subsumed and generalized by
  HP-03.2.
- **HP-03.3:** the boundary problem has one solution direction per zero,
  regardless of analytic zero order. This identifies a multiplicity gap;
  it neither asserts a multiple zero nor rules out algebraic multiplicity.
- **HP-03.4:** the natural gauge graph form is closed and induces the free
  Laplacian, with the formal kernel excluded from its weighted L2 space.
  This resolves a form-domain question but is not the desired zeta operator.

### Minimum path to a defensible manuscript

1. Independently audit every sign, domain and theta-asymptotic step in
   HP-03.1–.8, including the source's complex endpoint conditions.
2. Check the exact local-weight obstruction and kernel-domain argument
   against existing work on weighted differential pencils,
   quasi-self-adjoint operators and prior spectral interpretations (including
   Meyer, arXiv:math/0412277); make no novelty claim before that review.
3. State explicitly that the source's zero-defined span may evade the common
   core obstruction and that no density, self-adjoint realization, or
   spectral correspondence has been proved.
4. Only then decide whether the result merits a standalone note. There is
   currently no LaTeX manuscript for this campaign and no Lean-verified
   theorem.

## Immediate triage

1. For a standalone draft closest to presentable form, start from the local
   small-window manuscript, but obtain an independent mathematical audit and
   prior-art review before claiming an established contribution.
2. For an operator-focused paper, synthesize B5-08 through B5-15 only as a
   conditional theorem about normalized canonical/Clark models. The
   arithmetic Hilbert–Pólya construction remains unproved.
3. Keep HP-02.3 in the working research record; it is useful supporting
   progress, not an independent paper result.

No item in this register is Lean-verified. Formalization is not presently the
highest-value next step: the main gaps are analytic hypotheses, source-to-model
identification, independent proof audit, and prior art.

## Meyer-model write-up candidates (manual, audit pending)

- **MHS-01 — nuclear Fréchet topology obstruction.** A standard compactness
  argument rules out a compatible Hilbert norm on Meyer's stated
  infinite-dimensional nuclear Fréchet space. This is a short supporting
  lemma, not a no-go for weaker completions.
- **MHS-02.1 — critical-line `L²(dx)` collapse.** Mellin transform identifies
  the induced map with multiplication by `zeta(1/2+i tau)`; the constrained
  test core is argued graph-dense and the multiplier has dense range. The
  inherited quotient seminorm is therefore zero, subject to source/domain
  verification.
- **MHS-02.2 — non-pole weighted family.** The same remote-bump argument is
  proposed for `L²(x^(2 sigma) dx/x)`, `sigma>-2`, `sigma!=1`, extending the
  collapse claim across a natural continuum of Mellin weights. The
  parameter-dependent graph-core and source-space details need independent
  audit.
- **MHS-02.3 — pole-line weight.** Separating the simple pole of
  `zeta(1+i tau)` leads to a mean-zero multiplier domain; a scale-dependent
  broad-bump correction is proposed to prove a compactly supported
  mean-zero graph core. This is the most technically delicate new lemma and
  is not ready to state as a theorem in a paper.

These Meyer items are possible sections or appendices in an operator-model
obstruction paper, not standalone novelty claims. There is no manuscript or
Lean proof for them; source verification, independent proof audit and prior
art review remain prerequisites.

- **MHS-02.4 — finite log-Sobolev strengthening.** Orthogonal-complement
  argument extends the dense-range/zero-quotient candidate from the weighted
  `L²` family to every finite integer Sobolev order in logarithmic
  coordinates, including the pole line after a weighted graph-core estimate.
  This is a potentially useful unifying lemma, not a separate paper result
  until independently checked and compared with prior work.
- **MHS-02.5 — polynomially moderate Mellin densities.** A tempered-distribution
  annihilator argument consolidates the weighted and finite Sobolev cases:
  any strictly positive absolutely continuous Mellin density bounded above
  and below by polynomial weights appears to give a dense `Z H_cap` range,
  including on the pole line. Potentially a useful unifying proposition, but
  it is still manual and its significance is limited to this norm class.
- **MHS-03.1 — singular diagonal-measure criterion.** In the maximal
  multiplication model, the zeta-multiplier quotient is the subspace
  supported on atoms at zeta zeros; the dilation generator has spectrum the
  measure support, with fiber dimension giving multiplicity. This is a
  standard spectral-theorem calculation and a useful circularity diagnostic:
  choosing those atoms from the zeros imports the target spectrum. Graph-core
  identification with Meyer's restricted domain and operator intertwining are
  still unproved. Not a new construction or standalone paper result.
- **MHS-03.2 — zero-dependent evaluation completion.** Under RH, a summable
  atomic Mellin-evaluation seminorm descends to Meyer's quotient; a finite
  measure/Fourier-uniqueness argument proves the restricted `H_cap` image is
  dense, and normalized dilation becomes self-adjoint multiplication by the
  ordinates. This fills a graph-core gap for this chosen model, but inputs RH
  and the zero set and misses multiplicity if zeros are multiple. Meyer
  Corollary 4.2 and B3-09/B5-07 are close prior art; not an independent or
  claimed novel construction. Could be a short technical appendix only after
  prior-art and independent proof review.
- **MHS-03.3 — reciprocal-xi GNS spectral type.** Sra's strictly positive
  reciprocal-xi density gives a cyclic unitary representation whose Stone
  generator is multiplication by the real variable, with full purely
  absolutely continuous spectrum and no eigenvalues. This falsifies the
  shortcut from that positive kernel to a discrete zero-spectrum operator;
  it does not rule out resonance information in analytic continuation.
  The cited source uses zero-divisor information and finite verification, and
  this is a standard GNS deduction rather than a new construction.

### XCVII milestone / paper note

- **PWPB-01 — residual/gap-to-Mellin criterion.** For a simple compact
  resolvent ground state, a normalized candidate with Rayleigh quotient `m`
  and residual `r` is within `r/(a_1-m)` in projective Hilbert distance,
  provided `m<a_1`. The Mellin functional on `[lambda^-1,lambda]` has norm
  `sqrt(sinh(2b log(lambda))/b)` on a strip `|Re z|<=b`; hence the product
  of this growing norm and the candidate-vector error must vanish to obtain
  local-uniform Mellin convergence. This makes precise why energy closeness
  alone is insufficient and sets a quantitative target for the recent
  prolate/Weil operator route. Full derivation and an abstract closing-gap
  countermodel are in [`CAMPAIGN-97.md`](CAMPAIGN-97.md). This is a useful
  research lemma, not yet a standalone paper result: specialization to the
  actual Weil form and the determinant boundary normalization are open.
- **PWPB-02 — prolate candidate has a nonzero ambient limit.** Under the
  source's uniform prolate-to-Hermite bound, the zero-extended
  `k_lambda=E(h_lambda)` converges to the Riemann kernel `k=E(h)` in
  `L²(du/u)` at rate `O(lambda^-1/2)`. The derivation explicitly adds the
  Gaussian tail from terms with `nu>lambda`, which the survey's displayed
  finite-sum pointwise estimate does not include. This is only convergence
  of the candidate family; combined with PWPB-01 it gives locally uniform
  transform convergence on every closed substrip `|Re s|<=b<1/2`. No
  convergence to the Weil-form ground vector or the CCM determinant is
  proved. Supporting lemma for a source audit, not a standalone paper result.
- **PWPB-02 literature audit and pivot (2026-11-27).** The later and much
  closer source Andrews–Connes–La Gatta, [arXiv:2611.13129](https://arxiv.org/abs/2611.13129),
  already proves stronger candidate and ground-state convergence estimates
  conditional on its Fuchs-ladder lower-bound hypothesis and windowed Weil
  positivity. Its Schur-complement reduction identifies an explicit finite
  bottleneck but leaves its sign open. Mori's recent upper-bound/Lean work
  gives no lower gap. This is a useful literature and scope correction, not
  a Zetral mathematical discovery or paper claim. PWPB-03 will audit the
  exact noncircular status of the lower ladder and Schur-block assumptions.
  PWPB-02's only possible write-up contribution is the localized Gaussian
  tail correction to the earlier survey's displayed candidate estimate;
  that needs independent audit and prior-art review before any paper use.
- **PWPB-03.1 — potential RH-strength Chebyshev remainder in the Schur
  discussion.** The displayed first-prime sum in §8.6 of
  [arXiv:2611.13129](https://arxiv.org/abs/2611.13129) is said to be
  `2 lambda^2+O(lambda log lambda)`. For its isolated main term, an exact
  Stieltjes identity and Mellin continuation show that this square-root
  error would imply RH. This is a potentially significant audit lead, not
  a confirmed source error: equation (7) includes all prime powers,
  §8.6 is strategy discussion, and Proposition 8.18 explicitly assumes the
  unresolved Schur lower bound. No proved theorem is shown to depend on the
  displayed asymptotic. The Mellin implication is manually derived in
  [`CAMPAIGN-97.md`](CAMPAIGN-97.md); the weighted-Chebyshev prior-art review
  is incomplete. Not paper-ready; revisit only if a later source version
  promotes the estimate to an unconditional lemma.
- **PWPB-03.2 — uniform arithmetic Gram audit (not a paper result).** A
  recent rStation working draft claims a common growing-space repair and
  polynomial Gram lower bound for its canonical arithmetic prolate family.
  I independently checked the finite Mobius inversion and the fixed-product
  uncertainty-gap step in its Gram lemma. This is an audit of part of an
  external draft, not a Zetral theorem; its own independent verification is
  pending. The draft explicitly does not identify its family with ACG's
  convolved low-mode conditioning space and does not settle the Schur sign.
  This comparison is worth retaining as a research lead, but is not
  standalone paper material. See [`CAMPAIGN-97.md`](CAMPAIGN-97.md).
