# Research backlog and campaign portfolio

Updated: 2026-11-27. This is a prioritized queue, not a claim that any open
question has been solved. `STATE.md` remains the live execution checkpoint;
campaign files contain the detailed derivations and evidence. Re-rank after
each material result. Keep finite positivity certificates distinct from
analytic theorems and from any RH implication.

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

### LXXXVI — Critical limit of shifted-xi canonical systems (active)

- **Question / hypothesis:** Can the positive-shift de Branges/canonical-system family `E^omega(z)=xi(1/2+omega-iz)` have a nontrivial operator/resolvent limit as `omega->0+`, with spectral correspondence to xi zeros under RH and an arithmetic Weil-compression identity?
- **Prerequisites:** B3-07; Suzuki, RIMS Kôkyûroku Bessatsu B34 (2012), Proposition 1.2, Theorem 2.3, §§1.1–1.2; Zetral's local arithmetic forms and compression theorem.
- **Information gain:** A proved limit plus arithmetic bridge supplies a serious Hilbert–Pólya route; a precise endpoint degeneration obstruction removes this direct continuation strategy.
- **Design/falsification:** Pin the Hamiltonian formulas and parameter ranges. Define common-space maps; test resolvent/kernel/spectral-measure convergence and independently separate it from local uniform convergence of characteristic functions. Require domains, multiplicities and exact compression.
- **Acceptance:** Prove nontrivial operator convergence in a stated topology, spectral correspondence and arithmetic identity, or prove a precise obstruction to the canonical endpoint limit. A zero-set limit alone is insufficient.
- **Verification:** Independent source and operator-domain audit; no expensive local computation.

**Progress (2026-11-27, B3-07):** Suzuki's shifted-xi construction is established prior art: `E^omega` is Hermite–Biehler for `omega>=1/2` unconditionally and for `0<omega<1/2` under RH's sufficient condition; its extensions realize zeros of shifted `A^omega,B^omega`. At `omega=0`, `E^0=E^0#` and `Theta_0=1`, so direct substitution yields no strict de Branges space. This does not preclude a renormalized limit. Common-space convergence and arithmetic compression remain open. See `research/operators/B3-07-shifted-xi-canonical-system-endpoint.md`.

**Progress (2026-11-27, B3-08):** Under RH, `Theta_omega -> 1` locally uniformly; the orthogonal projections onto the model spaces `K(Theta_omega)` in the shared `H^2(C+)` converge strongly to zero. Yet the reproducing kernels divided by `omega` converge locally uniformly to an explicit positive-semidefinite kernel formed from `xi'/xi`. This identifies a candidate renormalized RKHS while leaving operator convergence and arithmetic compression open. See `research/operators/B3-08-model-space-collapse-and-rescaled-kernel.md`.

**Progress (2026-11-27, B3-09):** The even Hadamard product identifies the B3-08 kernel exactly as the Herglotz Cauchy-transform kernel of the signed zero-counting measure `mu=sum m_gamma(delta_gamma+delta_-gamma)`. Its RKHS is the Cauchy-transform image of `L^2(mu)`; real-coordinate multiplication is self-adjoint with spectrum the distinct signed ordinates. This is conditional on RH and defines the operator using xi's zeros. Multiplicities are atom weights, not eigenspace dimensions. Next test whether an arithmetic Weil compression map exists and attempt a norm mismatch. See `research/operators/B3-09-nevanlinna-kernel-and-zero-measure.md`.

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

Finish the active bounded LXXV checkpoint and its scoped audit first. Then
prioritize B1 or B3 when the audit reveals a mathematically precise route; choose
B2/B5 if the scalar obstruction supplies a tractable theorem; use B6/B8 for a
qualitatively different route. B7 is enabling work only when measurements show
that compute or restart reliability is the bottleneck. Do not use repeated
finite frontier extensions to displace an analytical or operator investigation
without an explicit evidence-based reason in `STATE.md`.
