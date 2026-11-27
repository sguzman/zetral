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
| Meyer Fréchet-model Hilbertization barriers | MHS-01: the original infinite-dimensional nuclear Fréchet topology is not Hilbertizable. MHS-02.1: under the natural inherited `L²(dx)` norm, the quotient by `Z H_cap` appears to collapse because the zeta multiplier on `Re(s)=1/2` has dense range and `H_cap` contains a graph core. | Detailed conditional derivation in [`CAMPAIGN-96.md`](CAMPAIGN-96.md); the dense-range argument has an independent orthogonal-complement check, but full source/operator-domain review remains pending. | Supporting section only, not a standalone novelty claim. Verify the multiplier domain/core and inherited quotient norm; this does not rule out other Hilbert completions or establish spectral correspondence. |

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
