# Research backlog and campaign portfolio

Updated: 2026-11-26. This is a prioritized queue, not a claim that any open
question has been solved. `STATE.md` remains the live execution checkpoint;
campaign files contain the detailed derivations and evidence. Re-rank after
each material result. Keep finite positivity certificates distinct from
analytic theorems and from any RH implication.

## Priority order

### Current execution note — LXXVI (2026-11-26)

The corrected support-h diagnostic was replayed successfully on Actions run
45901442328. U76-04 outward-encloses direct `G_00`; U76-07, U76-08 and U76-09
outward-enclose direct `G_11`, `G_02` and `G_22` inside the shared compressed
intervals. On Actions run 45912557912, exact endpoint arithmetic on the three
even entries gives a positive determinant enclosure for the `G_00/G_02/G_22`
principal block. See `research/CAMPAIGN-76.md` for the full interval and
verification boundaries. Preserve the precision and truncation failures;
this one finite block does not establish full-form positivity. The next
priority is B1 analytic extension: derive a uniform tail inequality without
finite endpoint checks, or rigorously falsify the proposed sign hypothesis.
The theta-cardinal rate is now ruled out as a direct shortcut: it is RH-
conditional, fixed-index, zero-dependent, and concerns a different operator.
The absolute prime-power coefficient mass is asymptotic to `2 exp(h/2)`, so
triangle/absolute-mass estimates cannot be uniform. Along `h=2 pi m`, `n=m`,
the normalized sine component has absolute limit `1/2`; automatic phase
cancellation fails. See `research/positivity/B1-01-theta-cutoff-scope.md`.
The compact-frequency endpoint expansion is now proved uniformly for
`|alpha|<=A`. The current `g(n)` guard has double-exponential cutoff under
absolute mass, and the prime component norm grows at least `c_L exp(h/2)`.
On smooth paired boundary profiles, the direct archimedean and prime terms
have matching leading coefficient; their difference is only known to be
`o(exp(h/2))`, with unresolved sign. Next bound this remainder uniformly
and extend beyond the test family before requesting hosted compute.

### B1 — Analytical extension beyond finite cutoffs

- **Question / hypothesis:** Can the certified finite quadratic-form positivity
  frontier be extended to an unbounded parameter range by an analytic tail
  inequality, without a new finite verification at every endpoint? The
  theta-cardinal shortcut is inapplicable. The live hypothesis is that a
  cancellation-aware endpoint expansion of the growing arithmetic shifts,
  combined with the archimedean term and the exact weighted-square structure,
  may yield a uniform majorant; the square-summation step is open.
- **Evidence and prerequisites:** Candidate finite frontier currently `h=2.51`;
  LXXV tests `h=2.51`. Read `research/theta-cardinal-bound.md`,
  `research/reconstruction.md`, the current campaign proof assumptions, and
  the accepted endpoint/guard certificates before deriving a tail estimate.
  LXXVI's source-form audit has certified a finite even principal block, but
  not the full map. A first scope audit established that the theta-cardinal
  estimate in `research/theta-cardinal-bound.md` cannot directly supply this
  inequality. Absolute coefficient summation grows like `2 exp(h/2)`, and
  the prime component norm grows at least `c_L exp(h/2)`. Smooth paired
  boundary profiles exhibit matching leading archimedean terms; their
  difference is `o(exp(h/2))` but its sign is unresolved. Continue by
  bounding the lower-order signed remainder and extending beyond those
  profiles; preserve the full original-form mapping as an explicit
  dependency.
- **Design / falsification:** Isolate the exact residual after the finite
  low-mode and prime-power terms. Seek a sign theorem, monotone envelope, or
  summable majorant uniform in the endpoint. Test the proposed bound against
  exact rational interval evaluations at all existing frontier and adjacent
  failing grids; actively search for sign changes in the omitted tail. First
  quantify how the shift count and constants change when h crosses each
  prime-power threshold; do not reuse an eight-shift bound outside its proven
  regime.
- **Information gain:** A valid uniform tail result changes the finite
  certificate ladder into an analytic statement; a counterexample localizes
  the obstruction and rules out that generalization.
- **Dependencies:** Exact finite formulas, explicit endpoint slacks, guard
  inequalities, and a precise statement of imported hypotheses.
- **Acceptance:** A proof with quantified constants and domains, or a reproducible
  counterexample to the proposed tail inequality. Finite samples alone do not
  pass.
- **Verification:** Independent symbolic derivation; exact/interval arithmetic
  at boundary cases; record literature and theorem versions; formalize the
  central inequality in Lean if it is compact enough. State separately whether
  any conclusion is conditional on RH or imported identities.

### B2 — RH-only coercivity and exceptional-set limits

- **Question / hypothesis:** Do the RH-only nested-window growth theorem and
  differentiated witness in Campaign X imply any useful pointwise or
  full-parameter coercivity lower bound, or is there a scalar obstruction to
  such an inference?
- **Evidence and prerequisites:** `research/evaluation/N01-derivative-witness.md`,
  `N02-coercivity-audit.md`, and `N03-nested-window-growth.md`. Existing notes
  establish an exceptional-set result and exhibit why continuous scalar data
  do not force pointwise growth; do not erase that obstruction.
- **Design / falsification:** Re-derive the exceptional-set estimate with exact
  quantifiers and test whether monotonicity, convexity, or a known arithmetic
  identity supplies the missing regularity. Construct scalar/model examples
  satisfying the proven estimates but violating each proposed pointwise
  inference.
- **Information gain:** Either identify a genuinely sufficient arithmetic
  regularity condition or close a tempting but invalid route to pointwise
  spectral conclusions.
- **Dependencies:** Campaign X notation, RH-only assumptions, and a verified
  distinction between almost-everywhere and pointwise claims.
- **Acceptance:** A theorem with explicit exceptional-set measure and all
  hypotheses, or a countermodel satisfying the same hypotheses and refuting the
  stronger inference.
- **Verification:** Independent proof audit, quantified model computation where
  helpful, and a proof-assistant check for the core measure/inequality lemma.

### B3 — Hilbert–Pólya construction and correspondence audit

- **Question / hypothesis:** Can the existing singular/regularized inverse and
  all-phase characteristic function be attached to a self-adjoint operator
  whose spectrum has the required correspondence to zeta zeros, with domain,
  multiplicity, and completeness proved?
- **Evidence and prerequisites:** Campaigns VI–IX and
  `schematics/spectral-construction.md`; Suzuki v1/v4 source records in
  `literature/`. The existing conditional spectral limits are not themselves a
  Hilbert–Pólya construction.
- **Design / falsification:** Write the candidate operator, Hilbert space,
  domain, boundary conditions, and resolvent explicitly. Check symmetry and
  self-adjoint extensions, compactness/resolvent class, spectral multiplicities,
  and the exact determinant/characteristic identity. Try domain and
  multiplicity counterexamples before asserting correspondence.
- **Information gain:** A complete correspondence would address a central
  spectral route to RH; a precise obstruction identifies which missing bridge
  is structural rather than a numerical limitation.
- **Dependencies:** Exact phase-dependent inverse identities; primary-source
  theorem audit; explicit domain and spectral normalization.
- **Acceptance:** Either a rigorous operator theorem proving both directions of
  the correspondence with all assumptions, or a no-go/obstruction theorem for
  the stated candidate. A candidate operator or matching finite spectrum is
  insufficient.
- **Verification:** Independent operator-theory review, source check, domain and
  deficiency-index calculations, and Lean formalization for algebraic operator
  identities where feasible. No RH claim absent the full correspondence.

### B4 — Independent audit of the strongest finite certificate

- **Question / hypothesis:** Do the exact endpoint witness, guards, residual
  aggregation, interval matrix reconstruction, rank tightening, and principal
  minors in the latest frontier survive an independent implementation and
  independent interpretation of the original quadratic form?
- **Evidence and prerequisites:** LXXV is closed at h=2.51; its scoped audit
  reconstructs stored components but does not independently evaluate the
  original Weil form. Campaign LXXVI is the active source-form audit; its
  symbolic correlation and parity reduction is in
  research/positivity/U76-01-direct-arithmetic-Gram.md. The length-h cosine
  basis and prime-term match are now derived, but midpoint values lack
  rigorous quadrature enclosures and the continuous-term identity remains
  unverified.
- **Design / falsification:** Reconstruct from source formulas rather than the
  stored assembled matrices; independently regenerate witness and guards;
  verify every mode range and rational endpoint; compare with adjacent failing
  grids. Probe rounding, parity, endpoint inclusivity, and tail-bound direction.
- **Information gain:** Detects shared implementation errors that byte
  readbacks and replay of the same driver cannot exclude.
- **Dependencies:** Complete LXXV even and odd artifacts and clear mapping from
  formula to certificate fields.
- **Acceptance:** Independent implementation agrees entrywise and determinant
  bounds are positive with the advertised margins, or a minimal reproducible
  discrepancy is preserved as a negative result.
- **Verification:** Separate code path and reviewer; exact rational arithmetic;
  rerun on free Actions runners. Label this computational verification, not a
  proof of the global analytic claim or human review.

### B5 — Operator/scalar resonance and quantitative rates

- **Question / hypothesis:** Can the unresolved scalar `L_a=M_a d_a^2` or the
  projection defect `d_a` be bounded from RH and explicit arithmetic inputs
  strongly enough to decide fixed-phase resonance splitting?
- **Evidence and prerequisites:** `research/resonance/campaign-09-resonance.md`,
  `research/evaluation/N01-derivative-witness.md`, and Campaign X. Existing
  tuned and detuned splitting laws are conditional on the scalar scale.
- **Design / falsification:** Derive upper and lower estimates from the exact
  differentiated witness and resolvent; compare with the N02 obstruction and
  N03 exceptional-set theorem. Build model sequences obeying all current bounds
  but realizing bounded, vanishing, and diverging scalar regimes.
- **Information gain:** Resolves whether the predicted moving eigenvalue branch
  is universal or dependent on arithmetic coercivity.
- **Dependencies:** Complete independent audit of N01–N03 and exact normalization
  of `M_a`, `d_a`, and the phase detuning.
- **Acceptance:** A bound with explicit constants and quantifiers deciding a
  regime, or a model/counterexample proving current hypotheses cannot decide it.
- **Verification:** Independent asymptotic expansion audit and interval checks
  for finite parameters; clearly mark unproved arithmetic assumptions.

### B6 — Equivalent RH criteria and alternative formulations

- **Question / hypothesis:** Can the present theta-cardinal positivity and
  spectral characteristic be translated into a recognized RH-equivalent
  criterion (for example a Li/Weil/Nyman–Beurling type criterion) with a
  transparent map of domains and hypotheses?
- **Evidence and prerequisites:** `literature/prior-art-map.md`,
  `literature/theta-prior-art.md`, `literature/antecedents.md`, and
  `schematics/spectral-construction.md`.
- **Design / falsification:** Select one criterion at a time; derive both
  implications, identify normalization and convergence topology, then test
  toy functions and known failure modes. Search primary literature before any
  novelty language. Reject translations that only restate the same finite
  positivity data.
- **Information gain:** May import established tools or expose a hidden
  equivalence gap that prevents overclaiming.
- **Dependencies:** Current exact quadratic form, source versions, and explicit
  limiting topology.
- **Acceptance:** A two-way theorem with all domains and assumptions, or a
  precise failed implication/counterexample.
- **Verification:** Primary-source audit, independent derivation, and formal
  checking of the algebraic core where possible.

### B7 — Exact-arithmetic scalability and reproducibility

- **Question / hypothesis:** Can fraction-free transforms, rank-aware interval
  tightening, and deterministic chunk aggregation be generalized so a new
  certified frontier costs materially less compute while preserving an
  independent audit trail?
- **Evidence and prerequisites:** `experiments/u75-t1024-m24576-*`, LXXI–LXXV
  campaign records, `experiments/README.md`, and current Actions workflow.
- **Design / falsification:** Benchmark only on free standard Actions runners;
  compare integer bit growth, runtime, memory, and exact output equality for
  representative even and odd chunks. Test interruption/restart and duplicate
  chunk rejection. Keep raw failure artifacts and compact successful summaries.
- **Information gain:** Determines whether exact certification remains
  operationally tractable and identifies the bottleneck honestly.
- **Dependencies:** Pinned source and parameters; reproducible runner; exact
  byte/object readback.
- **Acceptance:** Lower resource use or improved restart reliability with
  byte-identical mathematical outputs, or a documented scaling limit.
- **Verification:** Re-run on a clean GitHub runner, compare exact hashes, record
  toolchain and resource limits. Add Nix flake pinning before claiming full
  environment reproducibility.

### B8 — Independent mathematical contributions outside an RH proof

- **Question / hypothesis:** Which standalone lemmas from the phase flow,
  kernel limit, resonance scaling, or nested-window analysis hold in a broader
  operator class and are useful independently of RH?
- **Evidence and prerequisites:** Campaigns V–X and their consolidated notes;
  `literature/prior-art-map.md` and all relevant antecedents.
- **Design / falsification:** Abstract one theorem at a time, list the minimal
  operator and kernel hypotheses, test finite-dimensional analogues and
  pathological counterexamples, then compare the exact statement against prior
  art.
- **Information gain:** Preserves useful mathematics even if the RH route
  stalls, without inflating a special-case calculation into a broad claim.
- **Dependencies:** Scoped independent audit of the selected campaign and a
  targeted literature search.
- **Acceptance:** A self-contained theorem with proof and explicit scope, or a
  counterexample delimiting its valid class. Novelty remains unclaimed until
  prior art has been checked.
- **Verification:** Independent proof review, primary-source comparison, and
  formal verification for compact lemmas where feasible.

## Selection rule

Finish the active bounded LXXV checkpoint and its scoped audit first. Then
prioritize B1 or B3 when the audit reveals a mathematically precise route; choose
B2/B5 if the scalar obstruction supplies a tractable theorem; use B6/B8 for a
qualitatively different route. B7 is enabling work only when measurements show
that compute or restart reliability is the bottleneck. Do not use repeated
finite frontier extensions to displace an analytical or operator investigation
without an explicit evidence-based reason in `STATE.md`.
