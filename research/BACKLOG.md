# Research backlog and campaign portfolio

Updated: 2026-11-27. This is a prioritized queue, not a claim that any open
question has been solved. `STATE.md` remains the live execution checkpoint;
campaign files contain the detailed derivations and evidence. Re-rank after
each material result. Keep finite positivity certificates distinct from
analytic theorems and from any RH implication.

### PWPB-03.4 — Formal RH proof to operator extraction (active)

- **Precise question:** Does the theta-lift / arithmetic Gram mechanism in
  the independently kernel-checked Alpöge–Claude Lean proof admit a natural
  self-adjoint operator whose spectrum is exactly the nontrivial zeta-zero
  ordinates, with a proved spectral correspondence? The Lean proof itself
  establishes RH in its formal environment; operator extraction is a
  separate objective.
- **Evidence:** Rubinstein's independent checks report original proof
  compilation/replay and nanoda validation, plus multiple-kernel checking of
  the compact edition. Mathlib's own RH statement is proved using only the
  three standard Lean axioms. A classical exposition by Rubinstein is a
  working draft and still reduces its central inequality to thirteen
  classical hypotheses. Source links and exact verification limits are
  recorded in `research/CAMPAIGN-97.md`.
- **Prerequisites and design:** Read the main inequality (M), theta-lift
  definitions, dependency closure, and the classical hypotheses. Test
  Gram/transfer operators for symmetry, domain, compactness, and exact zero
  correspondence; compare with PWPB-03 and Suzuki/Weil models.
- **Expected information gain:** A positive result would connect the new
  arithmetic proof to Hilbert–Pólya; a negative result could isolate why
  theta-lift Gram data do not encode the zero divisor as an operator
  spectrum.
- **Acceptance / verification:** Source-pinned independent derivation of an
  operator and theorem-level spectral identification, or a rigorous
  obstruction in a clearly delimited natural class. Distinguish the formal
  RH theorem from an operator construction. No Zetral rerun of the massive
  Lean verification is planned; rely on the external independent audit and
  inspect the compact source selectively.
- **Status:** PWPB-03.5 extracted the proof's
  finite-dimensional comparison operator; PWPB-03.6 ruled out its direct
  compression determinant as a zeta-zero spectral determinant. PWPB-03.7
  identified a stronger existing-literature route through Suzuki's
  prime-defined half-line canonical system. Its Weyl identity yields the
  distinct zero ordinates as spectral support under RH, whose premise is
  available from the external checked Lean theorem. Independent audit of the
  full construction, boundary realization and multiplicity match remains
  open; this is not a Zetral novelty claim.
- **PWPB-03.5 source audit:** The pinned Lean development does contain a
  finite-dimensional positive comparison operator
  `U_vartheta = c_j glue_vartheta glue_vartheta*`. Its exact identity
  compares twisted lifts with an untwisted period lift, and its determinants
  control Hecke-value ratios. A single such operator cannot be HP; a limit
  family remains conceivable but lacks common-space embeddings and any zero
  spectral identification.
- **PWPB-03.6 determinant falsification:** Its exact identity is
  `Z_j(vartheta) Delta_vartheta = C rho_vartheta^d`, and the formal proof
  explicitly shows `Delta_vartheta != 0` for every admissible twist. The
  Hecke factors are evaluated at integer parameters; no complex spectral
  parameter or entire continuation is defined. This rules out the direct
  compression determinant as Xi, while leaving renormalized limits open.
  Next seek a separate common-space trace/transfer operator. Full exact
  statement, derivation, and qualification: `research/CAMPAIGN-97.md`.

- **PWPB-03.7 prime-defined canonical-system candidate:** Suzuki's local
  Weil-form kernels determine a canonical Hamiltonian from arithmetic data;
  under RH its half-line Weyl function is `i xi'/xi`, with atomic spectral
  measure `sum m_gamma delta_gamma`. This gives support at the distinct zero
  ordinates, while scalar eigenspaces remain simple and analytic
  multiplicities occur as measure weights. The finite-window spectra are
  phase-interlacing approximants, not the zero set itself. The formal RH
  theorem discharges the RH premise at theorem level; no Zetral proof
  composition or independent audit of Suzuki is done. Source canonical-system
  theory plus the atomic Weyl measure gives pure point spectrum on that
  support at theorem level. PWPB-03.8 pins the arithmetic input and standard
  operator realization. PWPB-03.9 checked the imported global screw/Weyl
  transform sign and normalization across Suzuki's 2023 and 2026 sources.
  PWPB-03.10 pinned the source's finite-end ratio convention and clarified
  that Proposition 7.2 does not itself identify a line in the chosen
  differential-operator domain. PWPB-03.11 derives the Green form; PWPB-03.12
  constructs the full-half-line boundary triple with line `y1(0)=0` and
  matches its Weyl function to `Q_xi` by the transfer quotient. This uses
  standard operator theory and Suzuki's source theorem, not an independent
  proof audit; an exact `H=I` check confirms the sign and ratio convention.
  PWPB-03.13 proves the scalar eigenspace-dimension-at-most-one obstruction
  and specifies noncircular matrix-lift requirements. PWPB-03.14 independently
  audits endpoint trace and transfer algebra, finding no mismatch while
  isolating the imported limit-point and spectral theorems. PWPB-03.15 records
  Xu's Nov. 25 RH-conditional lower densities for simple/distinct zeros;
  useful for the simple-spectrum portion but it does not settle all
  multiplicities and has not been independently audited here. Next
  independently audit analytic cutoff-Weyl convergence and formulate an
  arithmetic matrix local form or a no-go theorem for a precisely defined
  lift class. Full record:
  `research/operators/B3-13-prime-defined-canonical-system.md`.

- **PWPB-03.16 bounded source arithmetic audit:** Recomputed Xu §1.4's
  introductory Fejer-kernel least-squares certificate exactly, including
  positive residual variance, optimizer feasibility, and final fraction
  `276640/392159`. This does not verify analytic moment estimates or the
  paper's stronger main certificates. Record:
  `research/operators/XU26-fejer-certificate-audit.md`. Next, prioritize an
  independent audit of Suzuki's analytic cutoff-Weyl convergence, alongside
  the noncircular matrix-lift/no-go question; avoid extending the small
  certificate audit without a concrete discrepancy or new source evidence.
  PWPB-03.17 independently checked the growing-interval quotient and its
  qualitative locally uniform limit, while separating it from the tail
  quotient in Proposition 7.2. Next investigate a noncircular
  arithmetic-defined matrix-valued local Weil kernel and quantify the
  finite-dimensional multiplicity barrier; also seek a quantitative Weyl
  truncation error rather than repeating qualitative convergence.
  PWPB-03.18 proved the necessary finite-size condition `n >= sup m_gamma`
  for geometric-multiplicity matching in a definite order-`2n` canonical
  system. This does not obstruct a scalar weighted-measure correspondence.
  Next investigate positive arithmetic-defined vector-valued local kernels;
  test derivative-kernel proposals for positivity and zero-independence.

### XCVII / PWPB — Prolate-to-Weil eigenvector bridge (active; highest HP priority)

- **Precise question:** Can the prolate candidate `k_lambda` be shown close
  enough to the full restricted-Weil ground vector `theta_x`, and can the
  separate finite Fourier truncation `xi_{lambda,N}` be controlled strongly
  enough that its Mellin transform and determinant converge locally
  uniformly to Xi?
- **Evidence / recent literature:** Connes, arXiv:2602.04022v1 (2026-02-03),
  §§6.4–6.6 and 7.4, reports transform convergence for `k_lambda` and
  explicitly leaves comparison with the actual Weil-form ground vector open;
  simplicity/evenness is also unresolved. Connes–Consani–Moscovici,
  arXiv:2511.22755v1 (2025-11-27), Theorem 1.1 constructs a self-adjoint
  rank-one perturbation under finite ground-state assumptions. Zetral's
  finite positivity certificates and Suzuki/prolate limits do not prove this
  exact full-space eigenvector bridge.
- **Critical 2026 update:** Andrews–Connes–La Gatta, arXiv:2611.13129v1
  (2026-11-09), now gives the closest direct conditional bridge. Under its
  Fuchs-ladder lower-bound Hypothesis 3.4 and windowed Weil positivity, it
  proves ground-state simplicity/evenness and quantitative convergence to
  the prolate/Hermite target; the latter positivity for all scales is
  equivalent to RH. Its §8 reduces conditional positivity to a finite
  transition-and-pole Schur block, with the block sign and several
  uniformity estimates explicitly open. Mori's unconditional test-vector
  upper bounds (including a Lean-formalized upper estimate) do not supply
  the missing lower bound or gap. See the updated source audit in
  `research/CAMPAIGN-97.md`.
- **First derived prerequisite:** A normalized trial vector with Rayleigh
  quotient `m<a_1` and residual `r=||(A-m)v||` satisfies
  `dist(v,C e_0)<=r/(a_1-m)`. Mellin evaluation on
  `[lambda^-1,lambda]` has norm
  `[sinh(2b log(lambda))/b]^(1/2)` uniformly on `|Re z|<=b`; hence the
  residual/gap ratio must be `o(lambda^-b)` for this route to imply transform
  convergence. The full-space and finite-truncation approximation legs must
  each meet this criterion (or a justified form-domain analogue). Boundary
  normalization for the determinant remains an extra requirement. Full
  derivation and a degenerating-gap countermodel are in
  `research/CAMPAIGN-97.md`.
- **PWPB-02 candidate-side progress:** Using Connes's stated uniform
  `O(lambda^-2)` prolate-to-Hermite approximation, split the divisor sum at
  `nu=lambda` and explicitly bound the omitted Gaussian tail. This gives
  `||k_lambda-k||_(L²(du/u))=O(lambda^-1/2)` after zero extension to the full
  multiplicative line; combined with the Mellin functional norm this yields
  locally uniform transform convergence at rate `O(lambda^(b-1/2))` on any
  closed strip `|Re s|<=b<1/2`. The normalized candidates converge to a
  nonzero vector. This repairs a missing term in the displayed pointwise
  estimate without changing its convergence conclusion. It does not compare
  to `theta_x` or control the finite truncation; see `research/CAMPAIGN-97.md`.
- **Priority pivot / PWPB-03:** Audit whether the new paper's lower
  Fuchs-ladder comparison or finite Schur-block sign can be established
  noncircularly, and isolate the first exact obstruction. Separate its
  RH-equivalent positivity input from genuinely weaker statements. Acceptance
  is a quantified unconditional lower bound or a precise dependency/countermodel;
  numerical agreement is not sufficient. See `research/CAMPAIGN-97.md`.
- **PWPB-03.1 potential source-level obstacle:** For
  `S(X)=sum_(p<=X) log(p)log(X/p)`, partial summation gives
  `S(X)=integral_2^X Theta(t)dt/t`. A Mellin transform shows
  `S(X)=X+O(sqrt(X)log X)` would imply RH: it continues
  `sum_p log(p)p^(-s)` holomorphically to `Re(s)>1/2`, while an off-line
  zero would force a pole there. This matches the square-root-scale error
  stated for the first-prime main sum in §8.6 of arXiv:2611.13129, but the
  source presents it in strategy discussion, not as a proved lemma, and
  Proposition 8.18 explicitly leaves the transition-and-pole lower bound as
  a hypothesis. No source error is confirmed. The new useful lead is the
  edge-uniform low-block estimate (R2) and Gram lower bound, both marked open
  in §8.8; audit these next. Manual derivation and caveats are in
  `research/CAMPAIGN-97.md`; no novelty claim.
- **PWPB-03.2 literature lead / scope check:** A 15 November 2026 rStation
  working draft, *Uniform prolate spaces and multiplicity in the near-zero
  spectrum of the Weil form*, claims a polynomially uniform Gram lower
  bound and ambient residual on its canonical arithmetic prolate spaces.
  The draft itself says these spaces are not identified with the convolved
  families in ACG §8 and that it does not settle their transition/pole Schur
  sign; the page marks independent verification pending. Independently
  checked its finite Mobius inverse and fixed-product concentration lemma,
  but not its full endpoint/tail/residual proof. Next: seek a quantified
  synthesis/intertwining map between the two spaces or isolate a precise
  obstruction. Acceptance requires polynomial control of the map and
  inverse/Gram constants sufficient for R2; even that would not settle the
  Schur sign. Detailed record: `research/CAMPAIGN-97.md`. No paper-ready
  Zetral result or novelty claim.
- **PWPB-03.3 Mellin synthesis map:** In the exact arithmetic model,
  `M_s(Eh)=zeta(s+1/2)M_(s+1/2)h`, so the convolution
  `E(h_m)*e_n^*` factors as `E(h_m *_x q_n)` with
  `q_n(u)=u^(-1/2)e_n^*(u)`. This is an exact transform identity in its
  convergence domain, conditional on the model identification; ACG §8.8
  leaves that identification unresolved for the semilocal pair. The inverse
  transfer still needs uniform leakage, lower Gram, full residual and pole
  estimates; the adjoint factor can have an unbounded support tail. Next
  quantify these first in the archimedean model and test whether the needed
  multiplier is bounded below on the growing prolate span. No RH or novelty
  claim. Derivation and exact hypotheses: `research/CAMPAIGN-97.md`.
- **Design / falsification:** Pin the exact form/domain; test whether the
  prolate candidate belongs to the operator domain; derive its form residual
  from prime and archimedean terms; prove a next-eigenvalue/parity gap; bound
  the boundary functional. The abstract two-level family with closing gap
  falsifies inference from Rayleigh energy alone.
- **Information gain / dependencies:** Directly tests the missing step in a
  recent candidate HP construction. Requires source-pinned CCM/Connes
  definitions, standard compact-resolvent estimates, and semilocal trace
  formulas; no large data or local heavy computation.
- **Acceptance / verification:** An independently rederived actual-family
  residual, gap, parity and normalization estimate strong enough on each
  compact strip, or a rigorous obstruction showing current hypotheses cannot
  imply it. Numerical agreement is insufficient; no RH conclusion without
  the full convergence proof.

### MHS-03.3 — Reciprocal-xi GNS spectral type (scoped result)

Sra's 2026 reciprocal-xi density yields a cyclic unitary representation on
`L²(xi(1/2)Lambda(x)dx)`. Its Stone generator is multiplication by `x`, with
purely absolutely continuous spectrum equal to `R` and no eigenvalues,
because `Lambda` is smooth and strictly positive on `R`. Thus this positive
kernel does not itself give discrete zero point spectrum and cannot meet the
atomic-measure condition from MHS-03.1. The construction is not prime-side
independent, and the source theorem itself uses the zero divisor plus finite
verified input. It is a scoped negative route result, not a novelty claim;
details are in `research/CAMPAIGN-96.md`.

### LXXVII / RHA-04 — Audit analytic inputs to zero-free reduction (high priority)

- **Question / hypothesis:** Does the pinned zero-density theorem for quadratic twists give the uniform bad-prime count needed to choose a twist with no zero in the target rectangle, under exactly the modulus and class assumptions?
- **Prerequisites/evidence:** RHA-03 checked residue signs, Landau application, and order extraction. Pinned source: `Lib/Analytic/QuadraticTwist.lean` at `72fead102f663d5c7a407964a13dc0cf9d977207`; the selection lemma invokes `zero_density_quadTwist` and divergence of primes in an invertible residue class.
- **Expected information gain:** Verify the device removing the no-real-zero restriction, or locate the exact analytic estimate still required.
- **Design/falsification:** Trace the bad-prime bound through zero counting, conductor/level changes, and summability; check uniformity in character and compact height. Probe `β→1/2+`, `H=0`, and induced characters. Separately trace the transform identity to partial summation and its constant at `s=1`.
- **Dependencies:** Pinned readable source and library hypotheses; no local large build or dataset.
- **Acceptance:** Source-linked dependency graph with checked quantifiers/constants and an independent selection contradiction, or a concrete gap under stated assumptions.
- **Verification:** Manual independent proof audit; exact rational inequalities if needed. Source inspection is not kernel verification.

**Progress note (2026-11-26):** RHA-04 checked the exponent arithmetic and primitive-character/modulus lift, and confirmed the partial-summation contradiction. The analytic three-lines lower bound and Jacobi-symbol second moment remain the acceptance-critical items.

RHA-04's square/nonsquare majorant and zero-forces-large-theta-tail exponent contradiction are manually checked, conditional on the named standard analytic lemmas. Close this bounded audit at scoped/manual level; do not count it as independent Lean verification.

### LXXVII / RHA-06 — Audit the geometric span/dimension input

- **Question:** Does `span_short_integralRamified_eq_top` establish the full source space under the exact short-form cutoff used by `star_inequality`, with no hidden positivity or dimension assumptions?
- **Evidence/prerequisites:** Pinned `MainInequality.lean` defines `short` by a norm bound uniform over translates and embeddings; `ShortAndEnough.lean` supplies the span theorem and `enough_forms`. RHA-02 verified only the final cancellation; RHA-05 verified final scalar dominance.
- **Expected information gain:** Independently validate the passage from analytic size estimates to enough independent short vectors, or locate a geometric gap.
- **Design/falsification:** Trace the span proof through basis selection, lattice covolume and Hadamard estimates. Check the quantifier order over `g` and `σ`, cutoffs, and the treatment of zero vectors. Test the bound's scale dependence at the theorem's boundary cases.
- **Dependencies:** Pinned Lean 4.35.0/Mathlib source; exact hypotheses in `Data P`.
- **Acceptance:** Source-linked manual proof audit with assumptions and constants checked, or a precise counterexample/gap. No local full build.
- **Verification:** Independent derivation of the central dimension estimate and adversarial checks of quantifiers and cutoff monotonicity.

**Progress (2026-11-26):** RHA-06 confirms the linear-algebra reduction: `IsShort` has the required uniform p-adic, conjugate, and argument quantifiers; `span_isShort_eq_top` supplies source-space spanning at `exp(errorUnit)/4^f`; each of the `f` difference operators costs a factor 4 in squared norm; and their product has range exactly the ramified subspace. No counterexample was found under these hypotheses. This does not audit the generic short-lattice-basis/Hadamard estimate. Close RHA-06 at this scoped level.

### LXXVII / RHA-07 — Audit short-basis construction and explicit constants

- **Question / hypothesis:** Does `exists_short_basis_stdSpace`, together with the Weyl evaluation and Hadamard bounds, establish the uniform `shortBasisConst^(6M)` estimate for every free-level coset with the exact number-field and different hypotheses supplied by RHA-06?
- **Prerequisites/evidence:** RHA-06; pinned `ShortColumns.lean` and its defining short-basis source; exact `Data P` scale assumptions. No local large build or dataset.
- **Expected information gain:** Independently validate or delimit the core geometric input to the span theorem; this is the next key link from parameter bounds to enough forms.
- **Design/falsification:** Trace the lattice covolume and basis existence statement, verify dependence on the different and rank, recompute the operator norm/determinant exponents in the Weyl bound, and probe low-rank and boundary cases. Attempt a bad-lattice counterexample if any basis hypothesis is omitted.
- **Dependencies:** Pinned source and exact imported theorem statements; prior-art check before any novelty claim.
- **Acceptance:** A source-linked derivation of the explicit constant and quantifiers, or a concrete missing hypothesis/counterexample. Clearly separate imported theorems from independently derived inequalities.
- **Verification:** Independent arithmetic derivation; source theorem/version pin; no Lean verification claim without an exact-toolchain build and axiom audit.

**Progress (2026-11-26):** The covering bound in real dimension `2fn` is `(2fn)^2/λ`; the `3r` spanning lemma and rescaling by `N/2` give `6N(fn)^2/λ`, matching `shortBasisConst`. At the standard definite point `λ=1`. The Weyl norm estimate combines exponent `6fn` from determinants and `6·boxes` from the Schur term, bounded by `6M`. The trace/codifferent and transference lemmas remain imported dependencies, not fully re-proved here. Close RHA-07 at scoped manual-derivation level.

### LXXVII / RHA-08 — Audit prime-remainder transform derivation

- **Question / hypothesis:** Does the pinned prime-remainder identity follow with the stated residue, normalization, and zero multiplicities from the Euler product/explicit formula and partial summation, for the exact arithmetic progressions and twists used in RHA-03?
- **Prerequisites/evidence:** RHA-03 residue/sign audit and RHA-04 twist selection; pinned readable Lean source and classical guide. Primary analytic references must be checked before relying on an imported transform.
- **Expected information gain:** This is the principal analytic bridge from zero locations to the eventual one-sided prime-remainder bound; auditing it may reveal a hidden assumption or an independent usable criterion.
- **Design/falsification:** Derive the transform first for `Re(s)>1`, continue meromorphically, track the principal character and trivial zeros, then compare residues at a hypothetical zero with the Lean statement. Check endpoints `s=0,1`, repeated zeros, nonprimitive twists, and the progression normalization. Seek a simple model Dirichlet series that falsifies any claimed implication if a hypothesis is omitted.
- **Dependencies:** Exact pinned theorem statement; standard explicit-formula inputs; no datasets or local large build.
- **Acceptance:** Source-linked derivation of the transform and its limiting steps with exact constants/order multiplicities, or a concrete counterexample/gap. State clearly which analytic results are imported.
- **Verification:** Independent contour/partial-summation derivation, primary literature check, and proof-source comparison; no Lean verification claim without exact-toolchain build and axiom audit.

**Progress (2026-11-26):** The character mean gives `Σλ(n)n^(−s)=s/(φ(q)(s−1))+G_q(s)`; partial summation at `Re(s)>2` yields the exact transform `(G_q(s)/s−Re G_q(1))/(s−1)`. The `s=1` pole cancels by analytic continuation and reality; log-derivative residues give the source's untwisted-minus-twisted order difference with denominator `φ(q)s(1−s)`. Nonvanishing on `Re(s)≥1`, Euler products, partial summation, and the analytic-order lemma are imported. This does not establish the one-sided remainder bound needed by Landau. Close RHA-08 at scoped transform-audit level.

## Priority order

### Current execution note — LXXVII proof-status pivot (2026-11-26)

The Lean FRO and Mathlib Initiative jointly certified Alpöge's released formal
RH proof on 2026-11-21. The separate independent verifier reports successful
build, axiom and multiple checker results; its comparator was interrupted by
shared-server memory exhaustion. A reported kernel-recheck failure concerns a
later moving community-maintained branch after a toolchain change, not
automatically the frozen released artifact. A readable classical guide remains
in progress and explicitly does not yet prove its reduction's central main
inequality in prose. These are source-reported facts, not a Zetral replay or
human audit. See `research/CAMPAIGN-77.md`. RHA-01 independently derived the
local RKHS kernel criterion conditional on the cited Yoshida nondegeneracy
and Suzuki v4 threshold theorem; this checks that criterion, not Alpöge's
proof. RHA-02 pins the readable proof and verifies the main algebraic
cancellation and exponent transfer. Highest information gain is now to audit
the analytic prime-remainder zero-exclusion criterion, while retaining
LXXVI's source-form gap and B1's general positivity question as parallel open
work. Do not claim Zetral verified or refuted the proof.

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
Recent primary-source lead: Suzuki, arXiv:2611.33001v1, Theorems 1.1 and
1.3 and Corollary 3.1 construct local self-adjoint extensions under local
strict positivity and characterize RH by uniform RKHS diagonal bounds. This
makes quantitative full-space coercivity a concrete target, but does not turn
a finite positive block into a lower bound for the full form. See
`research/positivity/B1-07-local-kernel-criterion.md`.

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

**Progress (2026-11-27, B1-08):** `research/positivity/B1-08-chebyshev-error-convolution.md` derives an exact Stieltjes formula for the first-prime endpoint residual and proves uniform `o(exp(h/2))` over fixed-support, L2-normalized profiles with bounded H1 norm, using only PNT. This is an analytical extension of B1-06, not full-form coercivity. The derivative norm remains uncontrolled on the full unit sphere; next determine whether the actual test-space norm supplies that control or whether a different cancellation identity avoids it.

**Progress (2026-11-27, B1-09):** Suzuki v1 §2.1 identifies the local form domain as `H^log`, which does not control the derivative required by B1-08. A Fourier-dual estimate proves the endpoint discrepancy is `o(exp(h/2))` uniformly on bounded `H^log` families: the low-frequency range uses PNT integration by parts, and the high-frequency range uses total variation divided by the logarithmic Fourier weight. The bound has no sign and does not control the full L2 unit sphere or full form. Next sharpen the signed multiplier and include remaining terms.

**Progress (2026-11-27, B1-10):** Stieltjes integration by parts gives an exact signed multiplier in terms of the normalized Chebyshev error `R_h(v)`. Under the RH-conditional bound `θ(t)−t=O(sqrt(t) log²t)`, it yields `|Δ_hat_h(ξ)|≤C h²(1+|ξ|)` and an `O(h²)` bound on profiles with bounded `H^(1/2)`-type Fourier norm. This improves fixed-profile scale under RH but does not control `H^log`; the ratio of this majorant to the log weight is unbounded at high frequency. No sign or full-form conclusion follows. LXXIX closed within scope. The prime-zeta multiplier estimate is now continued in B1-11 below. See `research/CAMPAIGN-80.md`.

**Progress (2026-11-27, B1-11):** Under RH, Mellin inversion and the prime-zeta Möbius identity continue the prime-only sum to `Re(q)>1/2`; shifting to `Re(s)=−δ` crosses only the main pole, whose residue is exactly the subtracted smooth measure. Chirre–Gonçalves' fixed-strip RH bound for `ζ'/ζ` gives `|Δ_hat_h(ξ)|≪_(δ,η)e^(δh)(log(2+|ξ|))^(1−2δ)`, hence `c_h≪_(δ,η)e^(δh)` and `c_h=O_ε(e^(εh))` for every ε>0. This is a subexponential upper bound conditional on RH, not a uniform bound or positivity result. Next control constants as δ→0 or prove a lower bound. See `research/CAMPAIGN-80.md` and `research/positivity/B1-11-prime-zeta-contour-shift.md`.

**Progress (2026-11-27, B1-12):** A second RH-conditional contour shift to `Re(s)=b`, `1/8<b<1/6`, yields an explicit smoothed zero-residue expansion. It crosses both the `k=1` nontrivial-zero poles and the `k=2` pole at `q=1/2`; omitting the latter would leave an incorrect formula. Absolute convergence and the `O(log(2+|ξ|))` bound follow from Schwartz decay and the classical unit-interval zero count. The shifted line contributes `O(exp(-bh)log(2+|ξ|))`, proving `c_h=O_η(1)` uniformly in `h≥0` under RH. This is a first-prime smoothed multiplier bound, not a positivity theorem. The derivation is manual, with exact hypotheses and contour argument recorded in `research/positivity/B1-12-zero-residue-explicit-formula.md`; it has not been machine checked. Next challenge it via a lower-bound argument and test whether the corresponding prime and archimedean residues cancel in the full form.

**Progress (2026-11-27, B1-13):** At a suitable fixed frequency, the B1-12 zero-residue expansion is an absolutely convergent Fourier series in `h` with at least one nonzero coefficient at a nonzero zero ordinate, plus an exponentially decaying remainder. Cesàro mean-square orthogonality then proves `limsup_(h→∞) c_h>0` under RH. This rules out convergence to zero, but permits small subsequences and makes no claim about a uniform lower bound. The selected frequency exists by analyticity of the nonzero cutoff transform; no explicit value is computed. See `research/positivity/B1-13-almost-periodic-lower-limsup.md`. Next investigate cancellation against the rest of the full form.

**Progress (2026-11-27, B1-14 / LXXX closure):** For each fixed smooth paired edge profile, the RH-conditional B1-12 dual bound controls the first-prime discrepancy by `O_g(1)`. Partial summation with the PNT gives the prime-square endpoint limit `1/2∫(g*g)`; higher prime powers tend to zero. The leading archimedean and first-prime terms cancel, while the remaining continuous/pole terms are bounded by the B1-06 calculation. Thus `Q_W(f_h)=O_g(1)` on this one family under RH, without a sign conclusion. LXXX is closed within scope. The active follow-up LXXXI asks whether the zero-residue frequencies cancel in the full direct form; its acceptance and falsification plan are in `research/CAMPAIGN-81.md`.

**Progress (2026-11-27, B1-15 / LXXXI closure):** Suzuki's direct formula shows the complete paired-packet form has a constant plus the same nonzero zero-residue frequencies as the first-prime discrepancy, with an `o_g(1)` remainder under RH. A suitably narrow nonnegative bump has nonzero Fourier transform at a chosen nonzero zero ordinate, so at least one coefficient survives in the full form. The source's spectral formula independently confirms the coefficient and its positive mean. This does not determine the liminf or prove uniform coercivity. LXXXI is closed within the fixed-packet scope; LXXXII now investigates the liminf and finite phase-orbit constraints in `research/CAMPAIGN-82.md`.

**Progress (2026-11-27, B1-16 / LXXXII closure):** Under RH, the exact spectral sum gives `liminf_h Q_W(f_h)=0` iff the target cancellation phases lie in the closure of the one-parameter torus flow generated by the zero ordinates. Finite orbit closures are characterized by exact integer relations; a single incompatible relation forces positive liminf. Q-linear independence of positive ordinates would imply zero liminf, but this remains a conjectural conditional, not an assumption or finding. Lamzouri's effective LI is also explicitly conjectural, not a theorem. LXXXII is closed within structural scope in `research/CAMPAIGN-82-CLOSURE.md`; the actual phase compatibility remains unknown.

**Progress (2026-11-27, B1-17 / LXXXIII):** For any fixed `L>0` and cutoff equal to one on `[0,2L]`, the endpoint multiplier satisfies `RH iff sup_(h≥0)c_h<∞`. The converse uses bounded pairings `g*g`, their Laplace transforms, and nonremovable poles at `z=ρ−1/2`; B1-12 proves the RH forward implication. This is a project-specific criterion within the established Mellin/convolution tradition, not a novelty claim. Báez-Duarte's Theorem 3.1 is a relevant prior criterion. See `research/positivity/B1-17-uniform-multiplier-rh-criterion.md`.

**Progress (2026-11-27, B1-18):** Any hypothetical zero `ρ=β+iγ` with `β>1/2` forces `limsup_(h→∞) h^(-1)log(1+c_h)≥β−1/2`. This follows because a smaller growth abscissa would make the pairing's Laplace transform holomorphic at `ρ−1/2`, contradicting its nonzero residue. Taking a supremum gives the bound in terms of `Θ=sup Re ρ`, without requiring a rightmost zero. No off-line zero is asserted. See `research/positivity/B1-18-off-line-zero-growth-obstruction.md`.

**Progress (2026-11-27, B1-19 / LXXXIII closure):** The matching upper bound follows by shifting the pole-removed prime-zeta contour to any fixed line `σ>Θ` when `Θ<1`; the zero gap and classical local logarithmic-derivative estimate give logarithmic vertical growth, while the fixed cutoff controls horizontal edges and the frequency norm. When `Θ=1`, B1-09 supplies the upper bound. Hence `limsup h^-1 log(1+c_h)=Θ−1/2`. This is a classical zero-abscissa mechanism in the endpoint multiplier, not a new RH proof or novelty claim. LXXXIII's scope and limits are in `research/CAMPAIGN-83.md`.

### LXXXIII — Uniform endpoint dual criterion for RH (closed within scope)

- **Question:** Can the RH-equivalent uniform multiplier criterion be independently audited and can its off-line-zero growth lower bound be matched by a zero-free-line contour upper bound?
- **Prerequisites:** B1-09, B1-12, B1-17, B1-18; prime-zeta Möbius derivative and standard zeta log-derivative bounds.
- **Information gain:** A matching rate would identify the endpoint multiplier's exponential growth abscissa with `Θ−1/2`; failure would isolate required frequency-growth hypotheses.
- **Design/falsification:** Independently verify normal convergence, pole cancellation at `q=1`, test-function nonvanishing, and the implication from `c_h` to bounded Laplace pairings. Attempt a contour shift to `Re q>Θ` and audit horizontal edges and uniformity in ξ.
- **Dependencies/acceptance:** State RH only for the forward bound. Accept a fully audited equivalence plus a matching upper rate under explicit assumptions, or document a precise obstruction. No RH proof or novelty claim.
- **Verification:** Compare with classical von Koch and Báez-Duarte criteria; retain exact assumptions and primary sources. No numerical work needed.

### LXXXIV — Stability limits for multiplicity-sensitive sampling (closed within scope)

- **Question / hypothesis:** Can derivative samples be made bounded by an equivalent renorming of the existing global Weil completion, preserving the local embeddings and sampling isometry? B3-03 suggests no: equivalent norms preserve boundedness of functionals.
- **Prerequisites:** `research/operators/B3-01-distinct-zero-model.md`, Suzuki's pinned distinct-ordinate sampling theorem, and kernel estimates K02/L02.
- **Information gain:** A stable no-go for equivalent renormings narrows operator-construction routes and separates a genuinely new completion from modifications of the current model.
- **Design/falsification:** Prove the two-sided norm comparison statement; rederive derivative unboundedness from local Riesz norms; audit consistency on the compact-test union. Then inspect source conditions for a graph-norm completion and its compression identity.
- **Dependencies/acceptance:** Under the RH-conditional sampling model and B3-03 assumptions, either find a source-backed multiplicity-sensitive sampling/compression theorem, or prove the equivalent-renorming obstruction and identify the additional unproved structure a new completion needs.
- **Verification:** Independent functional-analysis audit and primary-source check; no numerical work required. No claim about actual zero multiplicities.

**Progress (2026-11-27, B3-04 / LXXXIV closure):** If two norms on the compact-test union are equivalent with constants `a,b`, every dual norm changes by at most factors `1/a,1/b`; boundedness is invariant. Since B3-03's fixed derivative sample has local norms diverging like `M_a|Delta'(gamma)|` and the local spaces embed isometrically, it is unbounded globally and under every equivalent renorming. Suzuki's compression identity explicitly uses those isometric embeddings. Goncalves' established `H(E^2)` Hermite interpolation shows changed spaces can carry jets, but provides no zeta-specific compression. See `research/operators/B3-04-equivalent-renorming-obstruction.md`.

### LXXXV — Hermite de Branges spaces and Weil compression (closed within scope)

- **Question / hypothesis:** Can the derivative interpolation theorem for `H(E^2)` be instantiated at zeta ordinates with a compatible local Weil norm and inverse-compression identity?
- **Prerequisites:** B3-04/B3-05; Goncalves Theorem 1/Corollary 2; Goncalves–Littmann, arXiv:1510.08383, Theorem 2; Selberg–Heath-Brown distinct critical-line count; Suzuki, arXiv:2610.32704v1, Theorem 3.3; exact xi and distinct-zero-product normalization.
- **Information gain:** Connects classical jet sampling to arithmetic operator theory or exposes the exact missing structure, beyond the equivalent-norm no-go.
- **Design/falsification:** The standard bounded-`E'/E` theorem is excluded on all zeta ordinates by B3-05. Search for weighted/nonuniform jet sampling with node count `N(T)>=cT log T`; then check the phase, local norm and arithmetic compression identity `(Dbar~_(a,pi))^(-1)=j~_a^*C~j~_a` including domains and density.
- **Dependencies/acceptance:** Require RH assumptions explicitly. Accept only a fully specified space, sampling theorem, local arithmetic forms and proved compression, or a source-based obstruction for this candidate. A formal derivative interpolation theorem alone is insufficient.
- **Verification:** Independent theorem-hypothesis and operator-domain audit; no expensive computation or zero-multiplicity claim.

**Progress (2026-11-27, B3-05):** Goncalves–Littmann's higher-order Hermite theorem requires `E'/E` bounded and a positive phase derivative at each node; its proof obtains uniform node separation. Selberg's odd-multiplicity count, recalled in Heath-Brown (1993), gives `cT log T` distinct critical-line ordinates. Thus the full zeta node set cannot satisfy those theorem hypotheses. See `research/operators/B3-05-separation-obstruction-to-zeta-hermite-sampling.md`.

**Progress (2026-11-27, B3-06):** Marzo–Nitzan–Olsen's doubling-phase theorem concerns values and uses uniform densities over all translated intervals. The natural phase weight `phi'=1/2 log(2+|t|)` is doubling and has centered multiplicity-counted density `1/pi` under RH, exactly at the sampling threshold. Riemann–von Mangoldt does not transfer this to distinct ordinates or uniform density; with RH and simplicity, the strict sufficient threshold still cannot be reached from the centered ratio. This is a limitation of available inference, not a counterexample to sampling. Higher jets and the Weil compression identity remain absent. See `research/operators/B3-06-doubling-phase-density-gap.md`.

**Closure / pivot (2026-11-27):** The bounded direct Hermite-sampling/Weil-compression bridge is closed within scope. Standard bounded-derivative jets fail the zeta-node separation hypothesis; nonuniform doubling-phase theory covers values only and its uniform density criteria are not established for distinct zeta nodes; equivalent renorming cannot repair the derivative functional. No impossibility of other jet spaces is claimed. Closure: `research/CAMPAIGN-85-CLOSURE.md`.

### LXXXVI — Critical limit of shifted-xi canonical systems (closed within scope)

- **Question / hypothesis:** Can the positive-shift de Branges/canonical-system family `E^omega(z)=xi(1/2+omega-iz)` have a nontrivial operator/resolvent limit as `omega->0+`, with spectral correspondence to xi zeros under RH and an arithmetic Weil-compression identity?
- **Prerequisites:** B3-07; Suzuki, RIMS Kôkyûroku Bessatsu B34 (2012), Proposition 1.2, Theorem 2.3, §§1.1–1.2; Zetral's local arithmetic forms and compression theorem.
- **Information gain:** A proved limit plus arithmetic bridge supplies a serious Hilbert–Pólya route; a precise endpoint degeneration obstruction removes this direct continuation strategy.
- **Design/falsification:** Pin the Hamiltonian formulas and parameter ranges. Define common-space maps; test resolvent/kernel/spectral-measure convergence and independently separate it from local uniform convergence of characteristic functions. Require domains, multiplicities and exact compression.
- **Acceptance:** Prove nontrivial operator convergence in a stated topology, spectral correspondence and arithmetic identity, or prove a precise obstruction to the canonical endpoint limit. A zero-set limit alone is insufficient.
- **Verification:** Independent source and operator-domain audit; no expensive local computation.

**Progress (2026-11-27, B3-07):** Suzuki's shifted-xi construction is established prior art: `E^omega` is Hermite–Biehler for `omega>=1/2` unconditionally and for `0<omega<1/2` under RH's sufficient condition; its extensions realize zeros of shifted `A^omega,B^omega`. At `omega=0`, `E^0=E^0#` and `Theta_0=1`, so direct substitution yields no strict de Branges space. This does not preclude a renormalized limit. Common-space convergence and arithmetic compression remain open. See `research/operators/B3-07-shifted-xi-canonical-system-endpoint.md`.

**Progress (2026-11-27, B3-08):** Under RH, `Theta_omega -> 1` locally uniformly; the orthogonal projections onto the model spaces `K(Theta_omega)` in the shared `H^2(C+)` converge strongly to zero. Yet the reproducing kernels divided by `omega` converge locally uniformly to an explicit positive-semidefinite kernel formed from `xi'/xi`. This identifies a candidate renormalized RKHS while leaving operator convergence and arithmetic compression open. See `research/operators/B3-08-model-space-collapse-and-rescaled-kernel.md`.

**Progress (2026-11-27, B3-09):** The even Hadamard product identifies the B3-08 kernel exactly as the Herglotz Cauchy-transform kernel of the signed zero-counting measure `mu=sum m_gamma(delta_gamma+delta_-gamma)`. Its RKHS is the Cauchy-transform image of `L^2(mu)`; real-coordinate multiplication is self-adjoint with spectrum the distinct signed ordinates. This is conditional on RH and defines the operator using xi's zeros. Multiplicities are atom weights, not eigenspace dimensions. Next test whether an arithmetic Weil compression map exists and attempt a norm mismatch. See `research/operators/B3-09-nevanlinna-kernel-and-zero-measure.md`.

**Progress (2026-11-27, B3-10):** Composing the Cauchy-transform unitary with Suzuki's weighted zero-sampling map gives an explicit unitary from the global Weil completion to the limit-kernel RKHS. Compact-test norms agree exactly with the Weil form, and the local inverse-compression identity transports with domains intact. This is an endpoint representation of the existing RH-conditional zero-defined model, not a new operator or a strong-resolvent limit of the positive-shift family. Next audit spectral counting-measure convergence and multiplicity. See `research/operators/B3-10-arithmetic-compression-transport.md`.

**Progress (2026-11-27, B3-11):** Under RH, the self-adjoint extensions with zeros of `A^omega` as spectra have simple real eigenvalues for positive shifts; local uniform convergence `A^omega -> xi(1/2-i z)` and Hurwitz imply vague convergence of eigenvalue-counting measures to the zero-divisor measure, including multiplicities as cluster masses. This is not strong-resolvent convergence and the scalar endpoint RKHS still has one eigendirection per distinct ordinate. Next test common-space strong-resolvent convergence and multiplicity fibers. See `research/operators/B3-11-shifted-spectrum-vague-limit.md`.

**Closure / pivot (2026-11-27):** LXXXVI is complete within its conditional endpoint-model scope. Spectral-basis unitaries give strong-resolvent convergence to a multiplicity-fiber diagonal operator, and Suzuki's inverse compression transports through the diagonal isometric embedding. The identification is noncanonical and zero-dependent; additional fibers are invisible to current arithmetic samples. Closure: `research/CAMPAIGN-86-CLOSURE.md`.

### LXXXVII — Pick-kernel positivity and finite RH witnesses (closed within scope)

- **Question / hypothesis:** Can the first-order `xi'/xi` Nevanlinna kernel yield effective analytic bounds or finite witnesses, and what global information must accompany finite Pick matrices?
- **Prerequisites:** B4-01; Lagarias 1999, Theorem 1.1 and equations (1.5), (1.19); standard Nevanlinna kernel criteria; local Laurent expansion of `xi'/xi`.
- **Information gain:** A local negative witness describes how a hypothetical off-line zero violates kernel positivity; a finite-sample obstruction prevents mistaking matrix checks for global RH proof.
- **Design/falsification:** Derive the mapped pole residue and dominate the regular part on an isolating disk. Test the witness sign; construct finite Pick data that remain positive despite an unsampled pole. Seek effective bounds only with explicit zero isolation and analytic coverage.
- **Acceptance:** Prove a quantitative off-line-zero witness and finitary limitation, or a rigorously global certificate with coverage/error bounds. No finite numerical evidence alone passes.
- **Verification:** Independent residue/sign audit and primary prior-art comparison; interval computations only if useful.

**Progress (2026-11-27, B4-01):** The B3-08 kernel is exactly the Nevanlinna kernel of `h(z)=i xi'(1/2-i z)/xi(1/2-i z)`. Holomorphy and positive semidefiniteness are equivalent to RH, but this is Lagarias/Hinkkanen prior art, not a new criterion. See `research/operators/B4-01-pick-kernel-rh-equivalence.md`.

**Progress (2026-11-27, B4-02):** Any hypothetical off-line zero maps to an interior pole with residue `-m`; moving a small distance vertically toward the real axis yields `Im h<0` once the pole dominates the regular part. The witness is rationally approximable but not effective without a zero-isolating disk and regular-part bound. A finite Pick matrix alone cannot certify the Pick property: a small meromorphic perturbation preserves any fixed finite positive-definite sample matrix while adding an unsampled pole. This generic fact is not an xi-specific finite impossibility theorem. See `research/operators/B4-02-offline-pole-witness-and-finite-test-obstruction.md`.

**Progress (2026-11-27, B4-03):** For each fixed finite set, the matrix perturbation has an explicit threshold `|epsilon|<lambda_min(P0)/(2||B||)`, preserving strict positivity while inserting an unsampled pole. LXXXVII closes within the generic finitary scope; no xi-specific impossibility theorem or effective witness location is proved. Closure: `research/CAMPAIGN-87-CLOSURE.md`.

### LXXXVIII — Shifted-xi systems and de Bruijn-Newman flow (closed within scope)

- **Question / hypothesis:** Is Suzuki's horizontal-shift family `A^omega` related to the de Bruijn-Newman heat flow by an exact, positivity-preserving operator or zero-set correspondence, or do the Fourier multipliers obstruct the natural transfers?
- **Prerequisites:** Suzuki 2012 equations (1.1), (1.2), Proposition 1.2; Polymath 2019 equations (1)–(4); Rodgers–Tao Theorem 1.1; exact Fourier scaling in B5-01.
- **Information gain:** Distinguishes a genuine spectral bridge from matching low-order perturbations and may expose an alternate operator route or a precise no-go.
- **Design / falsification:** Compare exact Fourier multipliers, all scale factors and Taylor generators; test scalar time identification and positive heat-time mixtures; then attempt a weaker zero-motion or canonical-system correspondence.
- **Dependencies:** Super-exponential Fourier kernel and entire continuation; de Bruijn-Newman real-zero threshold; Suzuki shifted-zero theorem and its RH hypotheses.
- **Acceptance:** Construct a correspondence with domains and hypotheses, or rule out the natural scalar-time and positive-mixture routes while leaving general intertwiners expressly open.
- **Verification:** Independent sign/scale derivation against primary sources. No numerical zero data; computation only if it adds information not contained in exact symbols.

**Progress (2026-11-27, B5-01):** With `F_t(z)=8H_t(2z)`, the Suzuki shift multiplier is `cosh(2 omega u)`, while heat evolution has `exp(tu^2)`. Matching the quadratic term forces `t=2omega^2`, but fourth-order coefficients differ; thus this is not an exact scalar-time identification. See `research/operators/B5-01-shifted-xi-versus-heat-flow.md`.

**Progress (2026-11-27, B5-02):** A positive probability mixture of real heat times would force first two moments with negative variance, so no such mixture yields the shift multiplier for nonzero omega. This leaves signed mixtures and general intertwiners open. See `research/operators/B5-02-no-positive-heat-mixture.md`.

**Progress (2026-11-27, B5-03):** At any simple zero of the common initial function, shift and heat roots have the same quadratic displacement under `t=2omega^2`; their quartic coefficient difference is `F''''(r)/(12F'(r))`. A toy entire-function check confirms the sign and factor. This is conditional on a simple zero and does not establish nonzero separation for any xi zero. See `research/operators/B5-03-simple-zero-motion-comparison.md`.

**Progress (2026-11-27, B5-04):** For a hypothetical order-four zero, shift and heat perturbations have different leading scaled root polynomials on `delta=omega*x`, with explicit four-root clusters certified locally by Rouché. This demonstrates the multiple-zero gap in the simple-root argument but does not claim that xi has a multiple zero. See `research/operators/B5-04-multiple-zero-splitting.md`.

**Progress (2026-11-27, B5-05):** Under RH, the positive normalization `B^omega/omega` preserves the HB property and gives a nontrivial common-`H^2` limit of model spaces, with strongly convergent orthogonal projections. The limit inner function is the Cayley transform of the Lagarias function; the model kernel is an explicit gauge transform of its Pick kernel. This does not prove operator or resolvent convergence. See `research/operators/B5-05-normalized-debranges-pair-limit.md`.

**Progress (2026-11-27, B5-06):** The positive atomic Herglotz measure of `q_omega=B^omega/(omega A^omega)` converges vaguely by local contour integrals to `sum m_r delta_r`, the xi zero divisor. At a limiting multiple zero, this proves convergence of total cluster mass, not a canonical distribution among shifted eigenvectors. It is not strong-resolvent convergence. See `research/operators/B5-06-h-root-measure-cluster-limit.md`.

**Progress (2026-11-27, B5-07):** Clark's alpha=-1 model for the limiting normalized inner function has measure equal to the xi zero divisor, since its Herglotz function is `-i q`. This recovers the existing conditional zero-defined multiplication model, not a zero-independent construction. Strong-resolvent convergence of the varying operators remains open. See `research/operators/B5-07-clark-model-for-normalized-limit.md`.

**Progress (2026-11-27, B5-08):** Under RH, local-uniform convergence of the normalized shifted Herglotz functions invokes the classical de Branges continuity theorem: trace-normalized canonical Hamiltonian primitives and finite-interval transfer matrices converge locally uniformly. This gives a canonical-system endpoint limit for the rescaled de Branges pairs, not Suzuki's original arithmetic Hamiltonian, a heat-flow intertwiner, or global strong-resolvent convergence. Next compare heat-flow and shift Weyl functions for an exact transformation law or coefficient obstruction. See `research/operators/B5-08-canonical-system-limit.md`.

**Progress (2026-11-27, B5-09):** Under RH, the second-order Weyl-quotient expansions and a Laurent pole test rule out scalar heat-time matching through order `omega^2` for the fixed normalized quotients. Conrey's classical simple-zero theorem and the paired Hadamard product supply the needed jet nonvanishing without numerical zero input. This does not rule out nonlinear Weyl transforms or general intertwiners. Next test fractional-linear Weyl relations or operator correspondence conditions. See `research/operators/B5-09-weyl-quotient-expansion-obstruction.md`.

**Progress (2026-11-27, B5-10):** A positive-imaginary-axis asymptotic shows the second-order mismatch grows like `log^3 y`, while the tangent space of smooth constant Möbius transformations is quadratic in the limit Weyl function and grows only like `log^2 y`. Thus this natural projective correction also fails under RH. Z-dependent or singular transformations and general intertwiners remain open. Next identify the additional conditions needed for operator convergence or probe a z-dependent route. See `research/operators/B5-10-mobius-weyl-obstruction.md`.

**Progress (2026-11-27, B5-11):** A double scaling `y=exp(lambda/omega)` yields distinct hyperbolic-tangent and linear profiles for the shifted and endpoint Weyl functions. Finite-shift initial Hamiltonian averages tend to `diag(1,0)` as the shift vanishes. The canonical high-energy theorem alone rules out a limit average with positive lower-right entry for the endpoint Hamiltonian, while leaving a rank-one possibility. This proves nonuniformity, not a strong-resolvent counterexample. B5-12 resolves the endpoint average by a Weyl coordinate swap. See `research/operators/B5-11-high-energy-boundary-layer.md`.

**Progress (2026-11-27, B5-12):** Applying the endpoint theorem to the swapped Weyl function `-1/m_0`, whose high-energy limit is zero, proves the limit Hamiltonian average tends to `diag(1,0)`. This matches the small-shift limit of the finite-shift averages, resolving their iterated-limit commutation. The double-scaling nonuniformity and global resolvent gap remain. Next seek common-space tail control. See `research/operators/B5-12-rank-one-limit-average.md`.

**Progress (2026-11-27, B5-13):** The regular-variation theorem of Langer–Pruckner–Woracek, applied to `-1/m_0`, sharpens the rank-one endpoint limit under RH: the vanishing primitive satisfies `∫_0^x c(t)dt ~ 4x/log²(1/x)`, the dominant one satisfies `∫_0^x a(t)dt~x`, and the off-diagonal primitive is `o(x/log(1/x))`. This follows from its index-zero case, phase formula and trace constraint; the source and constants are audited in `research/operators/B5-13-regular-variation-endpoint-rate.md`. It does not imply strong-resolvent convergence. Next test whether these primitive asymptotics plus the double-scaled Weyl profile constrain common-space tail convergence.

**Progress (2026-11-27, B5-14):** The normalized model-space projections, together with the explicit Clark rank-one unitary formula, yield strong-resolvent convergence on a fixed `H²(D)` after extending each Clark unitary by `-I` and its self-adjoint Cayley transform by zero on the orthogonal complement. The point at spectral infinity is excluded by the vanishing linear Herglotz coefficient. This is a natural Hardy-space realization of the scalar Clark models, not Suzuki's original arithmetic Hamiltonian or B3-12's multiplicity-fiber augmentation. Next test the same construction for heat flow and compare both endpoint limits. See `research/operators/B5-14-clark-strong-resolvent-limit.md`.

**Progress (2026-11-27, B5-15 / LXXXVIII closure):** Under RH, the de Bruijn–Newman threshold is `Lambda=0`, so the heat family has real zeros for `t>=0`. Its paired even Hadamard product gives zero linear Herglotz coefficient, and Fourier convergence gives the same endpoint inner function as the shifted family. Applying B5-14 separately yields a common-Hardy-space strong-resolvent limit for the normalized scalar Clark models; at `t=2 omega²` their resolvent difference tends strongly to zero for each fixed nonreal spectral parameter. This does not give a finite-parameter intertwiner, spectral-parameter uniformity, or convergence of the original arithmetic Hamiltonians. LXXXVIII closes within its bounded scope; general intertwiners remain open. See `research/operators/B5-15-shift-heat-common-clark-limit.md` and `research/CAMPAIGN-88-CLOSURE.md`.

**Progress (2026-11-27, B1-20):** Combining B1-12's RH-conditional uniform bound `sup_h sup_xi |Delta_hat_h(xi)|/log(2+|xi|)<infinity` with B1-09's exact Fourier-duality identity gives a uniform `H^log`-dual bound for the smoothed first-prime endpoint residual on its full local form-domain completion. This is stronger than the B1-10 Chebyshev-only estimate for that component, and resolves the apparent note-level conflict: B1-10's estimate alone loses at high frequency; B1-12 uses the zero-residue contour expansion. It remains a one-component boundedness statement, not full-form positivity or coercivity. Next audit the other terms and the source-form decomposition before inferring any full-form bound. See `research/positivity/B1-20-rh-log-dual-bound.md`.

### B1-21 / LXXXIX — Full-form terms on the logarithmic domain (closed in scope)

Campaign file: `research/CAMPAIGN-89.md`.

- **Question / hypothesis:** After the leading archimedean/first-prime cancellation, do the remaining prime-square, higher-prime-power, pole, and continuous-kernel terms define uniformly bounded quadratic forms on the same `H^log` completion for shifted paired packets, or does a specific term fail to be bounded there?
- **Prerequisites:** B1-09's exact Fourier duality and local form domain; B1-14's fixed-profile decomposition; B1-15's source formula; B1-20's RH-conditional first-prime bound. Recheck the precise Suzuki source version and all cutoff/support normalizations.
- **Expected information gain:** Determines whether fixed-profile `O_g(1)` control can extend to a common form-domain bound, and localizes whether the obstruction is a termwise high-frequency effect or requires cancellation between terms. Either outcome refines the route toward full-space coercivity without treating a bound as positivity.
- **Design / falsification:** Write each remaining term as a kernel or Fourier multiplier on the packet profile. Prove an `H^log` form bound with constants uniform in endpoint shift, or construct an explicit normalized high-frequency/concentrating sequence that violates the proposed termwise bound. Test whether separate estimates lose cancellation, and if so analyze the combined multiplier rather than inferring failure of the complete form. Keep the RH dependence of B1-20 explicit.
- **Dependencies:** Convergence of the direct prime sums and continuous integral for the chosen test class; exact endpoint decomposition; density of smooth profiles in the stated completion.
- **Acceptance:** A proof of the stated uniform bound for all remaining terms, or a reproducible rigorous obstruction for a named component together with a precise statement of whether cancellation in the complete form remains possible. No sign or coercivity claim is needed.
- **Verification:** Independent derivation from the pinned direct Weil formula, exact constants and Fourier conventions, and adversarial high-frequency test profiles. No numerical evidence substitutes for a form bound; no RH conclusion follows from boundedness alone.

**Progress (2026-11-27, B1-21a/b):** Prime-square and higher powers are uniformly bounded unconditionally on normalized packets. The continuous term has Fourier multiplier `O(log(2+|xi|))` and extends to `H^log`; the pole term is controlled by the packet L² norm. The archimedean `exp(h/2)` term cancels the first-prime main term, whose residual is uniformly H^log-bounded under RH by B1-20. Thus the full form is uniformly bounded by `C_L ||g||_log²` on this paired family under RH. This is no positivity, coercivity or arbitrary-test-function estimate. Derivation: `research/positivity/B1-21b-log-domain-remainder-bounds.md`; campaign record: `research/CAMPAIGN-89.md`.

### B1-22 / XC — RH criterion from bounded complete packet values (closed)

Campaign file: `research/CAMPAIGN-90.md`.

- **Question / hypothesis:** Is RH equivalent to boundedness in `h` of the complete direct Weil value for every fixed paired packet profile `g`, with the bound allowed to depend on `g`?
- **Prerequisites:** B1-17's fixed-profile Laplace-pole detection; B1-21a/b's bounded remainder decomposition; Suzuki's direct formula and prime-zeta continuation.
- **Expected information gain:** Re-express the existing RH-equivalent first-prime criterion using the complete quadratic form and test whether the bounded remainders preserve detection of off-line zeros.
- **Design / falsification:** Bound all terms besides the first-prime endpoint discrepancy for each fixed profile; establish RH direction from B1-21b; for the converse, use bounded complete values and bounded remainder to obtain bounded fixed-profile discrepancy pairings and reproduce the Laplace pole contradiction. Audit low-shift ranges and explicit-formula normalization.
- **Dependencies:** B1-17's source identities and classical zero-pole structure; fixed-window support; prior-art comparison with Báez-Duarte's Mellin/convolution criteria.
- **Acceptance:** Prove both directions or exhibit a remainder obstruction. No uniformity in `g`, positivity, coercivity, novelty, or RH proof is inferred.
- **Verification:** Independent sign/factor audit from the pinned source, exact quantifiers, and a clear distinction between this reformulation and existing equivalent criteria. No computation is needed or probative.

**Result (2026-11-27):** For each fixed profile, the complete form is `-D_phi(h)+O_g(1)`; all non-first-prime terms and the archimedean main-term remainder are bounded in shift. RH gives boundedness by B1-21b. Conversely, bounded complete values for each fixed profile give bounded `D_phi`, and B1-17's Laplace-pole argument yields RH. This is a classical-structure reformulation, not a novelty claim. Full audit: `research/positivity/B1-22-complete-packet-boundedness-criterion.md`.

### B1-23 / XCI — Restricted paired-packet positivity criterion (closed)

Campaign file: `research/CAMPAIGN-91.md`.

- **Question / hypothesis:** Does nonnegativity of the complete Weil form on every paired packet, over all compact real profiles, windows, and shifts, imply RH?
- **Prerequisites:** B1-22's bounded-remainder decomposition; B1-17's off-line pole detection; Weil's explicit-formula criterion and the exact direct formula.
- **Expected information gain:** Determine whether this special one-parameter packet family is RH-determining under a one-sided sign condition, or establish that B1-22's two-sided boundedness mechanism cannot transfer.
- **Design / falsification:** Verify RH-to-positivity; for a hypothetical off-line zero, seek negative values while allowing no rightmost zero and accounting for cancellations. Test polarization/profile perturbations that stay in the packet class. If no implication follows, preserve a rigorous one-sided-growth obstruction or abstract countermodel without claiming a zeta counterexample.
- **Dependencies:** Prime-zeta continuation, residue multiplicities, prior-art review for restricted Weil test families.
- **Acceptance:** Proof of the restricted converse or a rigorous obstruction to the pole-detection route; separate established directions and conditional hypotheses.
- **Verification:** Exact `g,L,h` quantifiers, signs, and multiplicities. Finite numerical scans are non-probative.

**Result (2026-11-27):** Every real even compactly supported smooth test `q` is exactly realized by a packet: take `A` larger than its support radius, `h=L=2A`, `g(x)=q(x-A)/sqrt(2)`. Then `f_{g,h}=q(·-A)`, and autocorrelation is translation invariant. Thus this is the full even-test class, whose positivity is RH-equivalent by Yoshida's established even-test Weil criterion. This is classical scope reduction, not novelty or a proof. See `research/positivity/B1-23-even-packet-Weil-criterion.md`.

### B1-24 / XCII — Fixed-window paired positivity (closed)

Campaign file: `research/CAMPAIGN-92.md`.

- **Question / hypothesis:** For one fixed `L0`, does positivity for every profile supported in `(0,L0)` and every packet separation imply RH?
- **Prerequisites:** B1-23's exact even-test realization; B1-17's fixed-window multiplier criterion; Suzuki's local Weil formulation; Danesh arXiv:2611.10726's two-interval Cauchy–Schwarz criterion.
- **Expected information gain:** Test whether unrestricted packet widths are essential, or whether separation across a single local profile window supplies enough global information.
- **Design / falsification:** Express fixed-width packet positivity on the zero side; derive what local even tests it contains; try partition and polarization to recover arbitrary cross terms; compare with the stronger arbitrary-pair inequality of Danesh; test abstract Hermitian-form countermodels.
- **Dependencies:** Exact source normalization, support bookkeeping, continuity of the Weil form in any proposed completion, exact literature hypotheses.
- **Acceptance:** Prove the implication or identify a rigorous obstruction/countermodel and the missing cross-term control.
- **Verification:** Audit all support/translation steps; do not infer density from support alone or use finite numerical scans as proof.

**Result (2026-11-27):** For any fixed `L0>0`, fixed-width packet positivity is equivalent to RH. Under a hypothetical off-line zero, a Baire-generic arbitrary real profile supported in `[-d,d]`, `d<L0/2`, has transform nonzero at every reflected centered zero. Its fixed reflected packet profile converts all separations `H=L0+t` to translates of `h+tau_t Rh`. Positivity makes the cross-term-plus-constant nonnegative; its Laplace transform has poles at every centered zero and finite abscissa equal to `sup Re(rho-1/2)`. The elementary Landau singularity argument contradicts regularity at that positive real abscissa. Manual proof only; no novelty claim, RH proof, or machine check. Full derivation: `research/positivity/B1-24-fixed-width-positivity-RH-criterion.md`.

### XCIII / HP-01 — Arithmetic finite-matrix spectral transfer (closed at audit scope)

Campaign file: `research/CAMPAIGN-93.md`.

- **Question / hypothesis:** Can Shi's finite Prime–Weil matrix pencils (arXiv:2609.04908) converge to the complete zeta-zero spectrum by an arithmetic-side estimate, without assuming RH or inputting zero ordinates?
- **Evidence and prerequisites:** The paper constructs finite arithmetic matrices from Weil's explicit formula, gives an exact finite zero-side reconstruction, and identifies a scale-invariant relative perturbation estimate (§4.9, equation (4.51)) as its central remaining obstacle. Its zero-side positive-tail decomposition uses RH. Zetral has exact finite positivity tools and RH-conditional Clark limits, but no corresponding pencil transfer.
- **Expected information gain:** Either find a zero-independent route to a self-adjoint limit, or isolate where arithmetic positivity and relative-tail control become RH-circular or fail in the compressed metric.
- **Design / falsification:** Audit the definitions and quantifiers of (4.51), its use in spectral perturbation, and all RH dependencies. Test whether ordinary operator-norm tail smallness implies the relative estimate; construct explicit finite-dimensional countermodels if not. Then attempt direct prime-side and form-order bounds in the compressed metric without using zero ordinates as inputs.
- **Dependencies:** Primary source arXiv:2609.04908 v12; exact Weil-form normalization; prior art on finite quotient and operator constructions.
- **Acceptance:** A source-audited zero-independent relative transfer estimate strong enough for a spectral limit, or a rigorous obstruction under explicit hypotheses and a materially different follow-up route. Numerical resemblance to known zeros is not spectral correspondence.
- **Verification:** Independent pencil algebra audit and countermodel; primary-source comparison; exact arithmetic or hosted computation only when it tests a stated finite bound. Any limiting theorem must prove self-adjointness, full spectrum, multiplicities, and absence of spectral pollution.

**Progress (2026-11-27, HP-01.1–.2):** The fixed-index tail estimate does not control the whitened norm because its constants are not uniform over moving basis indices and the relative metric can degenerate; a 2D positive-metric countermodel falsifies the generic unwhitened-to-relative inference. A period-counting/union-bound lemma proves that for any finite family of `N` frequencies bounded below by `gamma_*`, some `L in [T,2T]` keeps all sine factors above `1/[100N(1+1/(gamma_*T))]`. This L is selected using the zero ordinates and gives no control of the interpolation derivative. The source's exact product formula shows that derivative can tend to zero in an abstract close-pair family, so frequency count and a lower frequency bound alone cannot certify the relative metric. This is not evidence of close zeta zeros and does not refute the actual pencil. Next test an averaged-L metric and a derivative-free prime-side estimate. Full note: `research/operators/HP01-simultaneous-resonance-bound.md`.

Campaign closure: `research/CAMPAIGN-93-CLOSURE.md`. Full arithmetic transfer remains open; Campaign XCIII only establishes what the currently cited fixed-index/uncompressed estimates fail to supply.

### XCVI / MHS — Hilbertization of Fréchet spectral models (active)

Campaign file: `research/CAMPAIGN-96.md`.

- **Question:** Can Meyer's nuclear Fréchet-space spectral interpretation of the zeta zeros be promoted to a positive Hilbert-space model without changing its spectrum and multiplicities?
- **MHS-01 complete:** Meyer's paper explicitly identifies `H^0_- = H_- / Z H_cap ≅ H_union / Z H_+`, calls it nuclear Fréchet, and states that `D_-` has the nontrivial zeros as its spectrum with multiplicity. Its transpose on `(H^0_-)′` is a separate result. Infinitude of zeros makes `H^0_-` infinite-dimensional. A compatible Hilbert norm would make this nuclear Banach space's identity compact, contradicting infinite dimension. This applies only to the original quotient topology, not the dual or weaker completions.
- **MHS-02.1 complete within one completion:** In the natural inherited `L²((0,infinity),dx)` norm, Mellin-Plancherel turns `Z|H_cap` into the multiplier `zeta(1/2+i tau)`. A compactly supported test core satisfying the single moment constraint remains graph-dense; the multiplier has dense range because its line zeros are discrete. Thus the quotient seminorm collapses to zero. This is a scoped manual result, with no formal or second-person audit; it rejects only this completion.
- **MHS-02.2 manual candidate:** The Mellin multiplier argument appears to extend the collapse to `L²(x^(2 sigma)dx/x)` for every fixed `sigma>-2`, `sigma!=1`, by translating a moment-correcting bump in the direction where its weighted moment decays. Source-space and parameter-dependent graph-core details need independent audit.
- **MHS-02.3 manual candidate:** On the exceptional pole line `sigma=1`, subtracting `1/(i tau)` from `zeta(1+i tau)` leaves a smooth polynomial-growth multiplier. A broad, scale-dependent correction establishes a compactly supported mean-zero graph core in the proposed derivation. The detailed lead-side audit checked the low/high-frequency split and its finite-Sobolev extension; independent external verification remains pending.
- **MHS-02.4 manual candidate, detailed lead-side audit completed:** For the full family of finite log-Sobolev norms `||V_sigma f||_(H^k)`, an orthogonal-complement argument gives dense range for `sigma!=1`; the pole line follows from the scale-dependent mean-zero graph core in the stronger Sobolev graph norm. This covers finite integer `k>=0` and real `sigma`, but remains a hand-checked derivation without formal or independent external verification.
- **MHS-02.5 manual generalization:** For any Mellin-side density `w` with `c(1+tau^2)^(-N)<=w<=C(1+tau^2)^N`, the quotient seminorm is proposed to vanish for every real Mellin line, including `sigma=1`. Off the pole, the annihilator would be a non-tempered exponential; at the pole, a finite Sobolev graph core controls the singular multiplier. Positive atomic or other singular measures, super-polynomial weights, and non-Mellin norms are explicitly outside the result.
- **MHS-03.1 scoped classification:** For a maximal zeta multiplication operator on `L²(mu)`, the orthogonal complement of its range closure is exactly the subspace supported on the zero set, so nontrivial quotient requires atoms at zeros. The normalized dilation generator `M_tau` has point spectrum exactly at atoms and full spectrum `supp(mu)`; exact multiplicity requires vector-valued fibers. A measure chosen from zero ordinates is circular/zero-dependent. The criterion does not establish a graph core for Meyer's restricted domain or intertwining with `M_tau`; an independently defined prime-side measure with these properties remains open.
- **MHS-03.2 conditional benchmark:** Assuming RH, the summably weighted evaluation seminorm `sum_gamma exp(-gamma^2)|fhat(1/2+i gamma)|^2` descends to Meyer's quotient. Annihilator/Fourier uniqueness proves compact `H_cap` tests are dense in the atomic `L²` space; normalized dilation then extends to a self-adjoint multiplication operator with spectrum the distinct ordinates. This is zero-dependent and scalar, so it neither proves RH nor matches unknown multiple-zero eigenspace multiplicity. Meyer Corollary 4.2 and repository B3-09/B5-07 are close prior constructions; no novelty claim.
- **MHS-03.2 status update:** The independently kernel-checked Lean RH theorem discharges its RH premise at the theorem level. The resulting operator is still defined from the zero set, and the manual MHS-03.2 derivation has not itself been formalized or independently audited.
- **MHS-03.4 jet-fiber obstruction:** At a zero of multiplicity `m>1`, normalized Mellin derivative jets transform under dilation as `e^(i gamma t) exp(tN)` with nonzero nilpotent Jordan shift `N`. No positive Hilbert norm makes this a unitary group, so the direct jet-fiber completion of Meyer's quotient cannot retain its dilation action as a self-adjoint generator. This is conditional on a multiple zero and does not rule out other operator/fiber constructions. Exact derivation and next question: `research/CAMPAIGN-96.md`.
- **Expected information gain:** Separate an existing topological spectral interpretation from a genuine Hilbert–Pólya construction; identify whether a weaker natural Hilbert completion preserves any spectral content.
- **Design / falsification:** The detailed lead-side derivation audit of MHS-02.2–.5 rechecked source evenness/continuation, the tempered-distribution annihilator off the pole, and the mean-zero pole-line graph core. MHS-03.1 gives the maximal-measure criterion; MHS-03.2 closes the graph-core/intertwining gap for a deliberately zero-dependent atomic completion. Next ask whether a prime-side construction can yield the same positive atoms without inserting zero locations; compare with Weil positivity and the existing Clark/de Branges route, and do not duplicate known RH-equivalent criteria. Obtain independent review before any paper claim. These scoped results do not rule out other completions.
- **Dependencies:** Meyer arXiv:math/0412277; standard nuclear-space facts; infinitude of nontrivial zeros.
- **Acceptance / verification:** Source-linked exact identification of the nuclear space and spectral operator, with a self-contained obstruction proof; any proposed completion requires a dense domain, closed/self-adjoint generator, exact zero spectrum/multiplicity, and no extraneous spectrum. No RH or novelty claim.

### XCV / HP-03 — Theta differential pencil and sesquilinear realization (closed within tested classes)

Campaign file: `research/CAMPAIGN-95.md`.

- **Question:** Does Hedenmalm's theta-based generalized differential eigenproblem admit a positive, zero-independent Hilbert-space realization with complete spectrum and rigorous self-adjointness?
- **Evidence (HP-03.1–.8):** Hedenmalm, arXiv:2606.17494v1 §§2.2–4.2 characterizes Xi zeros by a theta-kernel boundary-value pencil, then leaves the inner product unresolved. All positive local weights fail on the common test core. The BVP has one solution direction per zero, regardless of analytic order. The natural gauge form is closed and induces the free Laplacian. A domain containing `k,Dk,D²k` contradicts the pair identity; the literal zero-indexed span excludes them pointwise. The similarity-transported metric fails to factor through `L`, and quotienting constants is not invariant. More strongly, on the natural similarity metric, `A` is essentially self-adjoint on `C_c^infinity`; any self-adjoint realization agreeing there is uniquely fixed and has no point spectrum, so the proposed boundary correction cannot insert the theta eigenfunctions while preserving that core action. Density and closure of `H_finite` remain unknown. Literature scan 2026-11-27 noted Kim et al. arXiv:2607.24830 (Suzuki operator numerics), Liu arXiv:2605.17645 (degree-two local pencils and zeta descent obstruction), and Meyer arXiv:math/0412277 (Fréchet spectral model); none supplies this campaign's missing Hilbert realization.
- **Closure:** See `research/CAMPAIGN-95-CLOSURE.md`. Other nonlocal metrics, domains not containing the compact core, and completion of `H_finite` remain open; continue through XCVI's distinct Fréchet/Hilbertization question rather than treating this scoped closure as a mission stop.
- **Information gain:** Either obtain an actual self-adjoint spectral model or sharply identify why the tempting weighted-dilation realization does not supply one.
- **Acceptance:** A densely defined positive/closable realization with exact zero correspondence, multiplicity, completeness and no extra spectrum, or a rigorous no-go for a stated class of weights. No RH/novelty claim from an eigenvalue encoding alone.
- **Verification:** Independent operator algebra, domain and boundary audit, targeted prior art; Lean only for algebraic identities after analytic domains are settled.

### XCIV / HP-02 — Fixed-low-spectrum Schur transfer (closed within audit scope)

Campaign file: `research/CAMPAIGN-94.md`.

- **Question:** Can fixed low generalized eigenvalues be transferred using a stable high-block resolvent and vanishing Schur correction, without the global relative-norm target?
- **Progress (HP-02.1–.7):** Exact Schur reduction and a 2x2 coupling countermodel establish the weighted low/high condition. The zero-independent random-offset schedule gives almost-sure sine separation and super-exponential growth for each fixed-low metric weight; the RH-conditioned tail then vanishes on each fixed low corner. HP-02.5 states moving-block coercivity and tail targets; HP-02.6 reduces the scalar-shift row to `(epsilon ||e||^2)^2/g_k` times `Σ_(l>m)1/(g_l|gamma_l|)`. HP-02.7 shows count growth plus sine separation alone cannot bound this sum: sparse abstract close pairs preserve coarse `T log T` growth while degenerating the interpolation derivative. This is not a claim about zeta gaps. Zeta-specific derivative control or a basis-invariant aggregate estimate remains open; no spectral transfer or operator construction is established. Details are in the three `HP02-*` operator notes.
- **Write-up tracking:** `research/PAPER-PIPELINE.md` records manuscript candidates, their scope and outstanding independent audits/prior-art checks; HP-02.3 is supporting lemma material, not a standalone paper result.
- **Closure / next direction:** Within the audit scope, the cited fixed-pair and coarse-count estimates fail to imply the required moving-block hypotheses; HP-02.7 gives a generic count-preserving close-pair obstruction, not a zeta counterexample. Arithmetic transfer remains open. Continue via the distinct theta-pencil campaign XCV/HP-03, and retain a possible future pivot to basis-invariant aggregate bounds.
- **Acceptance:** A verified low-spectrum transfer estimate for the arithmetic pencils, or a precise obstruction to deriving the required block bounds from current explicit-formula estimates. A general Schur criterion alone does not close the campaign.

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

**Progress (2026-11-27, B3-01/03):** The diagonal global sampling operator has a direct self-adjoint compact-resolvent realization with complete spectrum equal to the distinct signed ordinates, conditional on RH and the sampling model. Its eigenspace at each ordinate is one-dimensional regardless of analytic zero multiplicity; if any zero is multiple, this candidate does not preserve multiplicities. The exact source isometry to scalar `ℓ²(Γ,m)` rules out simply replicating coordinates into larger fibers while retaining only the old sample values. Moreover, K02's derivative-kernel estimate and L02's `M_a→∞` imply that ordinary derivative evaluation at any fixed ordinate has unbounded local Riesz norm, so it cannot be a continuous coordinate on the existing Weil completion. These are candidate-specific obstructions, not a known multiple-zero counterexample. The model is defined using RH/zero data. Next assess whether a renormalized jet space preserves a local-to-global identity; if no concrete route appears, pivot to B1 signed multiplier analysis. See `research/CAMPAIGN-78.md` and `research/operators/B3-01-distinct-zero-model.md`.

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

Finish the current bounded investigation in `STATE.md`, persist and verify its
result, then autonomously select the highest-information unfinished campaign.
Give priority to analytical generalization, RH-independent operator
construction, exact spectral correspondence, and independent audits. Use
finite frontier extensions only when evidence shows that they address a stated
analytic or spectral bottleneck. Check primary literature during material
campaign transitions; do not imply background monitoring between sessions.
