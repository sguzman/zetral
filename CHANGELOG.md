# Research history

## 2026-11-26 — LXXVII RHA-03

Manually audited the pinned one-sided prime-remainder zero-exclusion reduction: the twist-free rectangle leaves nonnegative untwisted order sums; the real residue sign matches Landau's lemma; vanishing at the target implies its order is zero after excluding 0 and 1. The quantitative twist-selection/zero-density proof and transform derivation remain unaudited. No Lean rebuild or Zetral RH proof is claimed. Details: `research/CAMPAIGN-77.md`.

This is the chronological campaign record, not the public project overview. For the scientific scope and curated entry points, see [README.md](README.md). For current working details, see [STATE.md](STATE.md) and the latest checkpoint in [COORDINATION.md](COORDINATION.md).

## 2026-11-26 — LXXV closeout and LXXVI source audit

LXXV closed as a finite candidate at h=2.51 after the hosted exact stored-component audit passed. The audit did not independently evaluate the original Weil quadratic form. LXXVI is active to investigate that gap; its source audit identified an existing direct arithmetic Gram formula, but no comparison against the compressed entry implementation has yet been verified. See [LXXV closure](research/CAMPAIGN-75-CLOSURE.md) and [LXXVI plan/checkpoint](research/CAMPAIGN-76.md).

The first low-entry mismatch used the wrong support length. Correcting to the length-h cosine basis identifies the index-parity sectors and gives a symbolic match for the prime-power term. Direct double-precision midpoint values on that basis are within roughly 10^-12 of the compressed exact intervals, but the continuous-term identity and rigorous quadrature enclosure remain open. The earlier comparison is preserved as a failed convention check. See the direct Gram derivation and diagnostics in research/positivity/U76-01-direct-arithmetic-Gram.md.

The revised support-h diagnostic completed on locked-Nix Actions run 45901442328 and runner commit f077faf81d270491db7b5a8851ec796f643717ff. Its canonical JSON matches the local result after removing runtime metadata. This is reproducibility evidence for a floating-point midpoint calculation, not a rigorous enclosure or original-form certificate. The continuous-term identity remains the next mathematical target.

An analytical reduction now evaluates the constant even archimedean entry exactly and expresses its subtracted-kernel term as a closed rational part involving pi, log 2, and Catalan's constant plus a positive exponentially convergent remainder. An explicit geometric tail bound is proved. Outward-rounded evaluation remains open; see the U76-03 checkpoint in the direct Gram note.

The independent scalar formula was evaluated on Actions run 45902627157 and replayed locally under the same locked Nix environment. The canonical JSON hashes match after removing runtime metadata. Its IEEE-754 value is 2.34e-15 from the shared compressed interval midpoint; this remains a numerical cross-check, not a certified enclosure.

U76-04 replaced that scalar diagnostic with a 70-decimal outward-rounded interval evaluation. The direct G_00 enclosure has width 2.9006e-66 and is wholly contained in the shared compressed interval. Actions run 45905468198 and local locked-Nix replay match after removing runtime metadata (SHA-256 `ac9b7eea5e6b3189ade829be49e07a93a7fe15de66ce5f713d4b058c3d7e71f2`). This certifies one entry only; the odd diagonal and full matrix remain open.

U76-07 through U76-09 completed direct interval evaluations of `G_11`, `G_02` and `G_22` on hosted Actions. Each interval is contained in its corresponding shared compressed entry interval. Together with U76-04, the even `G_00/G_02/G_22` block has a strictly positive determinant enclosure, about `5.83901616859e-7`. This finite principal-block result does not establish full-form positivity. See [LXXVI checkpoint](research/CAMPAIGN-76.md). The next investigation is B1's analytical uniform-tail question.

B1-01 scoped that analytic question against the theta-cardinal cutoff estimate and the classical Weil criterion. The former is RH-conditional and fixed-index for a different operator, so it gives no uniform arithmetic-form tail. For the latter, the prime-power shift coefficient mass is `~2 exp(h/2)` by PNT and partial summation, ruling out a uniform absolute-value/triangle majorant. The signed sum may still cancel; a cancellation-aware estimate remains open. See [B1-01 note](research/positivity/B1-01-theta-cutoff-scope.md).

B1-02 falsified automatic cancellation in that signed sum: for `h=2 pi m` and mode `n=m`, the prime sine coefficient is `-(-1)^m exp(h/2)+o(exp(h/2))`, while the total shift mass is `2 exp(h/2)+o(exp(h/2))`. The relative magnitude tends to `1/2`. This is not a negative quadratic-form direction; it means a uniform tail proof must retain the endpoint main term. The next step is a uniform error estimate over the relevant mode range.

B1-03 makes that expansion uniform for bounded scaled frequency `alpha=n*pi/h`: after normalization by total prime-power shift mass, the complex coefficient is `exp(i alpha h)/(2(1/2+i alpha))+o_A(1)`. Prime squares and higher powers are lower order uniformly. The sine projection is explicit, but its weighted square and full matrix contribution remain unresolved. Next handle `n^(-p)/g(n)` and the unbounded `alpha` range.

B1-04 audits the inherited diagonal guard `g(n)`: substituting the absolute shift mass as its prime bound requires `n>2h exp(c exp(h/2))` just to make the guard positive. This double-exponential cutoff blocks that computational route, not the mathematical positivity statement. The next step is an endpoint-aware prime bound strong enough to replace absolute mass.

B1-05 gives a stronger obstruction to prime-only estimates. A normalized test supported on both ends of the log window has overlap `v/L` with shifts of length `h-v`; PNT on the final fixed-width shell gives a prime-component Rayleigh quotient asymptotic to `c_L exp(h/2)`, where `c_L=(4/L)(1-(1+L/2)e^{-L/2})>0`. The prime shift operator norm itself is unbounded. The full Weil form may still cancel this with archimedean and pole terms, so this is not a negative direction. Future extension must estimate the combined form.

B1-06 examines smooth paired endpoint profiles directly. Their archimedean and prime terms both have leading coefficient `C_g exp(h/2)`, with `C_g=(integral exp(-x/2)g(x)dx)^2`; these cancel in the direct form, leaving `o_g(exp(h/2))`. This test-family asymptotic has unresolved remainder sign and is not a positivity theorem. Next derive a uniform remainder estimate and generalize beyond paired packets.

B1-07 inspected Suzuki's newly submitted arXiv:2611.33001v1, Theorems 1.1 and 1.3 and Corollary 3.1. Under local positivity, it supplies local self-adjoint differentiation extensions and an RH criterion through uniform RKHS diagonal bounds. This identifies uniform coercivity as a precise target but does not bridge Zetral's finite block to the full form. The source theorem and limitations are recorded in [B1-07](research/positivity/B1-07-local-kernel-criterion.md); independent source proof audit remains outstanding.

U76-05 derives the first odd diagonal directly as a paired Laplace series. U76-06 accelerates it by endpoint integration by parts. U76-07 outward-encloses the direct G_11 entry at 90 decimals and places it wholly inside the shared compressed interval on Actions run 45909728639, with containment margins about 2.39e-63 and 2.10e-63. The same run reproduces the G_00 enclosure. The complete parity matrices remain unaudited, and no positivity or RH conclusion follows. Several failed interval-driver implementations are preserved in the campaign record.

U76-08 derived and outward-enclosed the first even off-diagonal `G_02`. Actions run 45911794868 at 200-digit precision and N=260 places the direct interval inside the shared 2x2 compressed interval, with margins about 2.774e-64 and 2.773e-64. The endpoint remainder is below 1.33e-70. This validates one off-diagonal entry only; `G_22` and the rest of the full matrix remain open.

## 2026-11-26 — LXXVII RH proof-status audit opened

The Lean FRO and Mathlib Initiative's joint statement reports that Alpöge's released Lean development proves Mathlib's RH statement and certifies the proof following independent checker and statement-comparison work. An independent verification repository reports its comparator was interrupted by memory exhaustion, while other checks passed. A later moving community branch has a separate kernel re-check issue after a toolchain change; it is not conflated with the frozen released artifact. The human-readable classical reconstruction remains incomplete. LXXVII records exact evidence and starts a pinned, scoped audit of the central main-inequality reduction. This is not an independent Zetral verification. See [Campaign LXXVII](research/CAMPAIGN-77.md).

RHA-01 independently derived Suzuki's local RKHS kernel criterion: a full local lower bound `lambda_R>0` yields `J_a(t,t)<=2R/lambda_R` by zero-extension monotonicity and Fourier point-evaluation, while the converse follows from the first zero of the continuous local bottom eigenvalue and Fourier injectivity. RH-implies-nondegeneracy (citing Yoshida) and Suzuki's RH-failure threshold theorem remain imported. This is a scoped proof-structure audit only; no finite Gram certificate supplies `lambda_R`.

RHA-02 pinned the readable proof at `lsernau/grh-lean@72fead102f663d5c7a407964a13dc0cf9d977207` and independently checked the finite algebraic cancellation behind `star_inequality` and the exponent transfer from its integer prime-remainder estimate to all large real arguments. The geometry A/B/C, encoded parameter dominance and one-sided zero-exclusion criterion remain unaudited; no local Lean build was run.

## Campaigns XII–LVII

| Campaign | Outcome and limitations |
| --- | --- |
| [XII — Derivative-chain rigidity](research/CAMPAIGN-12.md) | Arithmetic moment constraints and multiplicity estimates; general simplicity unresolved. Full DCR03 text recovered and verified. |
| [XIII — Spectral-edge quotient](research/CAMPAIGN-13.md) | Candidate self-adjoint quotient operator, weighted interpolation, and RH-conditional exponential spectral concentration. Individual node convergence unresolved. |
| [XIV — Global semiboundedness and off-line growth](research/CAMPAIGN-14.md) | Closed mathematically. Candidate semiboundedness equivalence, all-window lower exponent, exact restricted growth rate, and [limiting negative index](research/positivity/GSG04-global-inertia.md). Unrestricted matching upper bound unresolved. |
| [XV — Quantitative negative-index resolution](research/CAMPAIGN-15.md) | Closed mathematically. Constructive thresholds, exact normalized indexed exponents, and [frequency-escape obstruction](research/positivity/NIR04-frequency-escape.md). Ordinary interior exponent remains open. |
| [XVI — Frequency localization and escape](research/CAMPAIGN-16.md) | Closed mathematically. Exact frequency frame, negative-packet selection, exceptional prime resonances and [local concentration certificates](research/positivity/FES04-local-concentration-certificates.md). Escape remains unexcluded. |
| [XVII — Compact positivity certificates](research/CAMPAIGN-17.md) | Closed mathematically. Exact compact inertia, residual enclosures, parity and [discrete finite-rank reduction](research/positivity/CPC04-discrete-finite-rank.md); no executed numerical certificate. |
| [XVIII — Discrete certificate validation](research/CAMPAIGN-18.md) | Closed. Integer-only [audited benchmark](research/positivity/DCV04-audit-and-disposition.md) at A=1/8; exact arithmetic executed, Rust unavailable, classical positivity range already larger. |
| [XIX — Boundary profiles and spectral prefactors](research/CAMPAIGN-19.md) | Closed mathematically. Conditional multiscale asymptotics, oscillations, Cauchy attenuation and [inverse parity trace](research/positivity/BPF04-audit-inverse-trace.md); no actual off-line zero or independent proof verification. |
| [XX — Quantitative inverse spectral recovery](research/CAMPAIGN-20.md) | Closed mathematically. Conditional sampled recovery, exact synthetic integer intervals, and [audit](research/positivity/QIR04-audit-and-disposition.md); actual certified arithmetic spectral observations unavailable. |
| [XXI — Log-energy boundary spectrum](research/CAMPAIGN-21.md) | Closed mathematically. Absolute strip bound, generalized I+compact operator, and [Hardy/Cauchy factors](research/positivity/LBS03-hardy-factorization.md); finite separated leading set still required. |
| [XXII — Sobolev parity trace and global zero recovery](research/CAMPAIGN-22.md) | Closed mathematically. [Global trace inverse](research/positivity/STS02-laplace-zero-recovery.md), arithmetic-only prime-inclusive certificate and exact Volterra inverse; classical explicit-formula realization, not a new RH proof. |
| [XXIII — Sobolev endpoint spectrum](research/CAMPAIGN-23.md) | Closed mathematically. Candidate trace-norm and individual generalized maximal-scale spectral asymptotics without finite/gap assumptions, including infinite and unattained maximal sets; [audit](research/positivity/SES04-audit-and-metric-bridge.md). Ordinary matching upper bound unresolved. |
| [XXIV — Vanishing metric and ordinary spectral escape](research/CAMPAIGN-24.md) | Closed mathematically. Joint Gram limit, ordinary lower prefactors, [necessary escape and abstract countermodel](research/positivity/VMR03-excess-depth-escape.md); no ordinary upper exponent. |
| [XXV — Prime-shift boundary cancellation](research/CAMPAIGN-25.md) | Closed mathematically. Sharp norm defect and [whole-subspace localization](research/positivity/PBC03-spatial-frequency-escape.md); no smaller ordinary exponent. |
| [XXVI — Weighted prime-shift rigidity](research/CAMPAIGN-26.md) | Closed mathematically. Conditional saturation intensity, [necessary prime coherence](research/positivity/WPR02-local-phase-coherence.md), and a lattice countermodel; actual coherence exclusion unresolved. |
| [XXVII — Twisted prime phase-limit spectrum](research/CAMPAIGN-27.md) | Closed mathematically. [Ordinary variational characterization](research/positivity/TPH02-ordinary-variational-characterization.md) and [global saturation criterion](research/positivity/TPH03-global-coherence-criterion.md); attainable set unresolved. |
| [XXVIII — Carrier-centered zero geometry](research/CAMPAIGN-28.md) | Closed mathematically. [Local zero-side restrictions](research/positivity/CZG03-negative-pair-and-density-obstructions.md), moderate carrier exclusion, conditional narrowing and rarity; extreme carriers unresolved. |
| [XXIX — Harmonic phase families and indexed ordinary spectrum](research/CAMPAIGN-29.md) | Closed mathematically. [Indexed ordinary characterization](research/positivity/HPS03-separated-carrier-indexed-converse.md) and [parity pairing at scale exp(a)](research/positivity/HPS04-audit-parity-characterization.md); coefficients unresolved. |
| [XXX — Parity pairing of spectral escape](research/CAMPAIGN-30.md) | Closed mathematically. [Exact finite-fast parity transfer](research/positivity/PPE03-fast-zero-exact-interpolation.md); ordinary growth-rate pairing above tail deviation scale. |
| [XXXI — Finite zero excision and ordinary spectral inertia](research/CAMPAIGN-31.md) | Closed mathematically. [Additive finite and residual rate counts](research/positivity/FZE03-additive-rate-decomposition.md). |
| [XXXII — Same-window ordinary spectral decoupling](research/CAMPAIGN-32.md) | Closed mathematically. [Ordered-union depth theorem](research/positivity/SWD02-ordered-union-depths.md) and [spectral-band decomposition](research/positivity/SWD03-resolvent-and-projection-split.md). |
| [XXXIII — Deviation-resolved local density and anomalous ordinary rates](research/CAMPAIGN-33.md) | Closed mathematically. [Local density envelope](research/positivity/LDE02-deviation-density-envelope.md) and carrier-local necessity; unconditional density improvement unresolved. |
| [XXXIV — Local zero-measure cancellation and strip projection](research/CAMPAIGN-34.md) | Closed mathematically. [Arithmetic strip sweep](research/positivity/LZC02-arithmetic-sweep.md) and [moving-window countermodel](research/positivity/LZC03-moving-window-obstruction.md). |
| [XXXV — Fixed discrete zero-system obstruction](research/CAMPAIGN-35.md) | Closed mathematically. [Fixed discrete obstruction](research/positivity/DZO04-audit-and-arithmetic-boundary.md) with prescribed anomalous ordinary growth, globally sparse nonreal nodes, and matched local projection bounds; not zeta. |
| [XXXVI — Arithmetic jump operator](research/CAMPAIGN-36.md) | Closed mathematically (candidate). Pole-free ground-state scale, exact rank-one inertia, gap and necessary pole alignment; [audit](research/positivity/AJP04-audit-and-prime-tower-pivot.md). Basic positivity and capacity overlap external unreviewed work. Ordinary upper rate remains unresolved. |
| [XXXVII — Prime-power tower inverses](research/CAMPAIGN-37.md) | Closed (candidate). Quantified pole-free bottom, exact weighted prime graph and cross-prime noncommutation; no graph gap or joint capacity bound. [Audit](research/positivity/PTI04-audit-and-relative-heat-pivot.md). |
| [XXXVIII — Relative heat invariants](research/CAMPAIGN-38.md) | Closed (candidate). Absolute threshold, all-positive-time relative trace, [prime threshold recovery](research/positivity/RHI02-prime-threshold-invariants.md), classical spectral shift and capacity. No full positivity certificate. |
| [XXXIX — Analytic pole moments](research/CAMPAIGN-39.md) | Closed (candidate). Analytic vectors, convergent relative heat germ, exterior capacity enclosures and [interior finite-data obstruction](research/positivity/APM04-audit-and-interior-obstruction.md). |
| [XL — Moment visibility and inertia](research/CAMPAIGN-40.md) | Closed (candidate). Complete finite arithmetic seed visibility and [heat-matrix spectral-depth bounds](research/positivity/MVI03-heat-matrix-inertia-and-moment-enclosures.md). No executed heat matrix or positivity certificate. |
| [XLI — Certified arithmetic moment evaluation](research/CAMPAIGN-41.md) | Closed (candidate). Explicit periodic cutoff/error bound and [executed prime-inclusive moment benchmark](research/positivity/CME03-executed-arithmetic-moment-benchmark.md); observed finite-cutoff sign artifact, no full positivity certificate. |
| [XLII — Boundary-driven Fourier acceleration](research/CAMPAIGN-42.md) | Closed (candidate). First-moment jump resonance and [executed singularity-lifted second moments](research/positivity/BFA03-singularity-lift-second-moment.md), 94.8% narrower restored second-moment enclosure on constant trial. |
| [XLIII — Certified block singularity lifting](research/CAMPAIGN-43.md) | Closed (candidate). Step/affine lifts and [executed two-parity block residual benchmark](research/positivity/BSL03-executed-two-parity-residual-benchmark.md); positive finite Ritz block, no full certificate. |
| [XLIV — Cell-average coercivity](research/CAMPAIGN-44.md) | Closed (candidate). Exact Schur reduction and [executed failed sufficient test](research/positivity/CAC03-nested-cell-schur-witness.md) at four partitions; not negative restored eigenvalues. |
| [XLV — Digamma Neumann bracketing](research/CAMPAIGN-45.md) | Closed (candidate). Stronger complement, [exact positive boundary corrections](research/positivity/DNB02-exact-positive-boundary-resolvent.md), weighted Schur diagnostic fails on tested partitions. |
| [XLVI — Monotone boundary lower operators](research/CAMPAIGN-46.md) | Closed (candidate). [Executed strict certificates](research/positivity/MBL03-executed-prime-free-lower-certificates.md) at prime-free physical lengths 1/4, 3/8, 7/16; 1/2 inconclusive. No record positivity range. |
| [XLVII — Positive boundary complementary inverse](research/CAMPAIGN-47.md) | Closed (candidate). [Executed strict positivity](research/positivity/PBCI03-executed-prime-inclusive-certificates.md) at physical h=7/10 including prime 2; larger even comparisons inconclusive. |
| [XLVIII — Localized prime exchange](research/CAMPAIGN-48.md) | Closed (candidate). [Executed strict positivity](research/positivity/LPE03-executed-localized-prime-certificates.md) at physical h=4/5, larger even comparisons inconclusive. |
| [XLIX — Full boundary positive columns](research/CAMPAIGN-49.md) | Closed (candidate). Exact infinite-rate matrix enclosures; three failed sufficient comparisons. |
| [L — Exact complementary residual certificates](research/CAMPAIGN-50.md) | Closed (candidate). [Executed matrix-tail strict positivity](research/positivity/ECR03-matrix-valued-asymptotic-tail.md) through physical h=1; larger even comparisons inconclusive. |
| [LI — Direction-adapted Schur certification](research/CAMPAIGN-51.md) | Closed (candidate). [Executed full strict positivity](research/positivity/DSC03-derivative-corrected-rate-tails.md) through physical h=1.38. |
| [LII — Finite prime graph fibers](research/CAMPAIGN-52.md) | Closed (candidate). [Executed strict positivity](research/positivity/PGF03-executed-prime-power-four-certificates.md) through physical h=1.45, including prime power 4. |
| [LIII — Rational moment residual tails](research/CAMPAIGN-53.md) | Closed (candidate). [Executed sixth-order arithmetic positivity](research/positivity/RMT03-executed-higher-moment-certificates.md) through physical h=1.6. |
| [LIV — Rational prime norm witness](research/CAMPAIGN-54.md) | Closed (candidate). Exact norm upper 1.547 through log6; prime-5 full comparisons inconclusive. |
| [LV — Relative residual control](research/CAMPAIGN-55.md) | Closed (candidate). [Executed fine-lattice positivity](research/positivity/RRC03-executed-fine-lattice-certificates.md) through physical h=1.78 including prime 5. |
| [LVI — Rational prime-seven norm witnesses](research/CAMPAIGN-56.md) | Closed (candidate). [Executed adaptive strict positivity](research/positivity/P7W03-sixth-residual-and-eighth-rate-expansion.md) through physical h=1.95 including prime 7. |
| [LVII — Prime-power eight and nine](research/CAMPAIGN-57.md) | Active. Exact rational norm witnesses 2.303 through log9 and 2.714 through log11; spectral tests pending. |

## Campaigns I–XI — archived README

The original README is reproduced verbatim below to preserve its historical status statements and every original link. Its active-campaign label is historical, not current.

---

# Zetral

A Spectral Mathematics Research Project.

Open research into the spectral, arithmetic and dynamical structures underlying the Riemann zeta function, organized around the Hilbert–Pólya program.

**Status:** Campaign I concluded with explicit blockers. Campaign II (rigorous verification and novelty assessment) is concluded with explicit numerical-certification and infrastructure blockers. Campaign III (sharpness and discovery) concluded with a stronger candidate upper bound and strict finite-cutoff separation; matching sharpness remains unresolved. Campaign IV (exact-local spectral certification) concluded with a conditional residual framework and analytic small-window example; practical numerical certification remains outstanding. Campaign V (small-window spectral asymptotics) concluded with an unconditional candidate two-term correction for the phase-pi differentiation spectrum. Campaign VI (phase-dependent small-window spectrum) concluded with a uniform fixed-index all-phase candidate expansion without RH. Campaign VII concluded with a conditional arbitrary-phase spectral limit and an additional phase-dependent mode. Campaign VIII concluded with conditional normalized kernel and entire phase-function limits, including a microscopic multiplicity-sensitive profile. Campaign IX concluded with conditional microscopic resonance, mixing and detuning laws; the actual fixed-phase regime remains open. Campaign X concluded with an RH-conditional exceptional-set theorem and unresolved pointwise growth. Campaign XI is active: unconditional critical-window positivity and strict spectral-bottom monotonicity. A conditional fixed-index convergence bound is presented as a self-reviewed candidate proof; novelty and independent verification remain outstanding. AI-assisted research with human direction.

- [Research state](STATE.md)
- [Agent protocol](AGENTS.md)
- [Campaign I](research/CAMPAIGN-01.md)
- [Campaign II](research/CAMPAIGN-02.md)
- [Campaign III](research/CAMPAIGN-03.md)
- [Campaign III consolidated candidate note](research/discovery/campaign-03-spectral-estimates.md)
- [Campaign III closure](research/CAMPAIGN-03-CLOSURE.md)
- [Campaign IV](research/CAMPAIGN-04.md)
- [Campaign IV consolidated note](research/certification/campaign-04-exact-local-certification.md)
- [Campaign IV closure](research/CAMPAIGN-04-CLOSURE.md)
- [Campaign V](research/CAMPAIGN-05.md)
- [Small-window candidate manuscript](research/asymptotics/campaign-05-small-window-spectrum.md)
- [Campaign V closure](research/CAMPAIGN-05-CLOSURE.md)
- [Campaign VI](research/CAMPAIGN-06.md)
- [Uniform phase-spectrum candidate note](research/phase/campaign-06-phase-spectrum.md)
- [Campaign VI closure](research/CAMPAIGN-06-CLOSURE.md)
- [Campaign VII](research/CAMPAIGN-07.md)
- [Arbitrary-phase spectral-limit candidate note](research/large-phase/campaign-07-phase-limit.md)
- [Campaign VII closure](research/CAMPAIGN-07-CLOSURE.md)
- [Campaign VIII](research/CAMPAIGN-08.md)
- [Normalized kernel candidate note](research/kernels/campaign-08-kernel-limit.md)
- [Campaign VIII closure](research/CAMPAIGN-08-CLOSURE.md)
- [Campaign IX](research/CAMPAIGN-09.md)
- [Microscopic resonance candidate note](research/resonance/campaign-09-resonance.md)
- [Campaign IX closure](research/CAMPAIGN-09-CLOSURE.md)
- [Campaign X](research/CAMPAIGN-10.md)
- [Campaign X consolidated note](research/evaluation/campaign-10-relative-evaluation.md)
- [Campaign X closure](research/CAMPAIGN-10-CLOSURE.md)
- [Campaign XI](research/CAMPAIGN-11.md)
- [Unconditional strict-bottom candidate deduction](research/positivity/U01-strict-bottom-monotonicity.md)
- [Agent coordination](COORDINATION.md)
- [Density-refined cutoff bound](research/discovery/D01-density-refinement.md)
- [Adversarial proof audit](research/verification/V01-adversarial-audit.md)
- [Literature](literature/README.md)
- [Candidate manuscript (LaTeX)](papers/theta-cardinal-bound.tex)
- [Detailed proof](research/theta-cardinal-bound.md)
- [Numerical reproduction](experiments/reproduction-report.md)
- [Campaign I closure](research/CAMPAIGN-01-CLOSURE.md)
- [Campaign II closure](research/CAMPAIGN-02-CLOSURE.md)
- [Explicit constants](research/verification/V04-effective-constants.md)
- [Verified scalar Lean lemmas](formal/Zetral.lean)
- [Numerical certification limitations](research/verification/V05-numerical-certification.md)
- [Public atlas (deployment unverified)](https://sguzman.github.io/zetral/)

The canonical situated ontology belongs in Situs, not this repository. Initial focus: Suzuki's spectral convergence construction and quantitative error questions, with explicit RH dependencies and prior-art checks.

## Arithmetic integrity checkpoint

Campaign LVI closed (candidate): [corrected adaptive certificate](research/positivity/P7W03-sixth-residual-and-eighth-rate-expansion.md) at physical h=1.95; earlier affected Machin remainder implementations require corrected replay. [LVII](research/CAMPAIGN-57.md) paused after [PPW01 norm witnesses](research/positivity/PPW01-executed-prime-power-norm-witnesses.md); [LVIII](research/CAMPAIGN-58.md) active for arithmetic integrity and frozen replay.


## Latest positivity checkpoints

- [LXI](research/CAMPAIGN-61.md): candidate h=2.30, 32/32 each parity, independent stored replay.
- [LXII](research/CAMPAIGN-62.md): [candidate h=2.35](research/positivity/LPA04-47-20-crossing.md), 37/37 each parity, exact stored replay; earlier high-mode and tail-bound failures preserved. Independent original operator verification remains open.
- [LXIII](research/CAMPAIGN-63.md): active, next target 2.39 below log(11).

- [LXV](research/CAMPAIGN-65.md): [candidate h=2.41](research/positivity/PC04-241-100-crossing.md), both parities 41/41, independent stored audit. LXVI active at target 2.42; full independent original-form verification remains open.

## LXXVII research audit checkpoint — RHA-06 (2026-11-26)

Pinned-source audit of `span_isShort_ramifiedSourceForms_eq_top` verifies the
short-span to ramified-range reduction and the squared-norm cutoff factor
`4^f`, conditional on the generic short-basis spanning theorem. No
counterexample was found in the reduction. The lattice-basis existence and
Hadamard constant remain unaudited; see `research/CAMPAIGN-77.md` and
`research/BACKLOG.md` for the exact scope and next question.

## LXXVII research audit checkpoint — RHA-07 (2026-11-26)

Manual derivation of the pinned geometry-of-numbers bound: in real dimension
`2fn`, weak transference gives covering radius `(2fn)^2/λ`; the `3r` spanning
step and rescaling yield the exact short-basis constant `6N(fn)^2/λ`. At the
standard definite point `λ=1`; the Weyl determinant and Schur exponents total
`6(fn+boxes)`, within the stated `6M`. Trace/codifferent and transference
results remain imported dependencies. Next audit the prime-remainder transform.

## LXXVII research audit checkpoint — RHA-08 (2026-11-26)

Manual audit of the prime-remainder Laplace transform verifies its principal
character normalization, partial-summation factors, cancellation at `s=1`,
and untwisted-minus-twisted zero-order residue. Dirichlet nonvanishing on
`Re(s)≥1` and standard Euler-product and analytic-order results remain
explicit dependencies; no one-sided remainder bound is established. The next
investigation switches to B1's analytic endpoint cancellation.

## B1 analytical extension checkpoint — B1-08 (2026-11-27)

`research/positivity/B1-08-chebyshev-error-convolution.md` derives an exact
Stieltjes formula for the first-prime endpoint residual and proves uniform
`o(exp(h/2))` over fixed-support, L2-normalized profiles with bounded H1 norm,
using only the prime number theorem. This sharpens the fixed-profile
asymptotic, but its derivative dependence leaves the full test-space sphere
and full-form coercivity unresolved.

## B1 logarithmic-domain endpoint checkpoint — B1-09 (2026-11-27)

`research/positivity/B1-09-log-form-domain-discrepancy.md` identifies the
actual local form domain as logarithmically weighted Fourier regularity, which
does not control the derivative used in B1-08. A Fourier-dual PNT estimate
extends the first-prime endpoint cancellation to bounded logarithmic-domain
families. It has no sign and gives no L2 coercivity or full-form positivity.

## LXXVIII operator correspondence checkpoint — B3-01/03 (2026-11-27)

`research/operators/B3-01-distinct-zero-model.md` verifies the domain and
compact-resolvent properties of the global diagonal sampling operator under
RH. Its spectrum is complete as a set of distinct signed ordinates, but the
one-coordinate-per-ordinate space does not encode analytic zero multiplicity.
This limitation is conditional on a multiple zero and is not evidence that
one exists. The exact scalar sampling isometry also rules out simply
replicating each coordinate into a higher-dimensional multiplicity fiber
without adding new data. The existing K02 kernel limit and L02 growth estimate
show that ordinary derivative evaluation at a fixed ordinate is unbounded in
the Weil completion norm, ruling out derivative samples as continuous
coordinates in a multiplicity fiber with that unchanged norm. The construction
uses RH and the ordinate set as input.

Campaign LXXVIII closed within its bounded audit scope; the broader
Hilbert–Pólya direction remains active in the research portfolio.

## LXXIX signed endpoint multiplier checkpoint — B1-10 (2026-11-27)

`research/positivity/B1-10-rh-signed-multiplier.md` derives an exact
Fourier-side Stieltjes identity for the first-prime endpoint discrepancy.
Under the RH square-root Chebyshev bound it gives an `O(h²)` multiplier bound
and an `H^(1/2)`-type profile estimate. The bound is conditional, has no sign,
and does not control the full logarithmic form domain or Weil form.

Campaign LXXIX closed within its stated scope. The active follow-up is
Campaign LXXX, which investigates the true high-frequency multiplier via a
smoothed prime-zeta/explicit-formula route; analytic continuation and
frequency-uniform error bounds remain to be proved.

## LXXX high-frequency multiplier checkpoint — B1-11 (2026-11-27)

`research/positivity/B1-11-prime-zeta-contour-shift.md` removes the smooth
main pole by contour shift and proves the logarithmic-dual constant is
`O_ε(exp(εh))` for every fixed ε>0, conditional on RH. This subexponential
upper bound does not establish boundedness, a lower bound, or positivity.

## LXXX high-frequency multiplier checkpoint — B1-12 (2026-11-27)

`research/positivity/B1-12-zero-residue-explicit-formula.md` shifts the
pole-removed Mellin integral across the critical line under RH. The expansion
includes both the nontrivial zero residues and the `k=2` prime-zeta pole at
`q=1/2`. Classical local zero counting and Schwartz decay give
`c_h=O_η(1)` uniformly for `h≥0`, conditional on RH and the cited
logarithmic-derivative estimate. This bound concerns only the smoothed
first-prime endpoint term and proves no positivity or spectral result. The
derivation is not machine checked.

## LXXX high-frequency multiplier checkpoint — B1-13 (2026-11-27)

`research/positivity/B1-13-almost-periodic-lower-limsup.md` applies
mean-square orthogonality to the B1-12 explicit zero-residue series. At an
existential fixed frequency it proves `limsup_(h→∞) c_h>0` under RH, so the
smoothed first-prime multiplier cannot converge to zero. Small subsequences
remain possible; this gives no full-form sign or positivity result.

## LXXX fixed-profile full-form checkpoint — B1-14 (2026-11-27)

`research/positivity/B1-14-bounded-full-form-edge-packets.md` combines the
RH-conditional first-prime dual bound with the direct paired-packet formula.
The prime-square endpoint tends to `1/2 ∫(g*g)` by PNT and higher powers
decay; after the leading archimedean/first-prime cancellation, the complete
form is `O_g(1)` for each fixed profile. No sign or full-domain coercivity
follows.

## LXXX closure and LXXXI activation (2026-11-27)

Campaign LXXX closed within scope after proving a uniform RH-conditional
bound and positive limsup for the smoothed first-prime multiplier. Its
closure is `research/CAMPAIGN-80-CLOSURE.md`. Campaign LXXXI is active to
determine whether those zero-residue frequencies cancel in the complete
direct Weil form on fixed paired edge packets; see
`research/CAMPAIGN-81.md`.

## LXXXI closure and LXXXII activation (2026-11-27)

`research/positivity/B1-15-full-form-zero-frequency-survival.md` decomposes
the complete direct Weil form on a paired packet. A suitable profile has a
nonzero zero-residue coefficient that survives all other terms; Suzuki's
spectral formula independently confirms its normalization under RH. Campaign
LXXXI closed within that packet scope, and LXXXII now studies the liminf of
the nonnegative almost-periodic packet values. See
`research/CAMPAIGN-81-CLOSURE.md` and `research/CAMPAIGN-82.md`.

## LXXXII phase-orbit checkpoint — B1-16 (2026-11-27)

`research/positivity/B1-16-phase-orbit-liminf-criterion.md` characterizes
the packet liminf by an exact phase-compatibility condition in the closure
of the zero-ordinate flow. Any incompatible integer relation forces a
positive liminf; Q-linear independence would imply zero liminf conditionally.
No such independence or relation is claimed. The classical LI and Lamzouri's
effective LI are conjectural inputs, not established facts.

## LXXXII closure and LXXXIII activation (2026-11-27)

LXXXII closed within the exact phase-orbit criterion scope; the actual zero
relations remain unknown. LXXXIII opens a different RH-equivalent route:
`research/positivity/B1-17-uniform-multiplier-rh-criterion.md` proves that
uniform boundedness of the first-prime endpoint dual multiplier is
equivalent to RH, and B1-18 gives an exponential growth lower bound from any
off-line zero. These are project-specific Mellin/Laplace criteria related
to established convolution methods, not a proof of RH or a novelty claim.
See `research/CAMPAIGN-82-CLOSURE.md` and `research/CAMPAIGN-83.md`.

## LXXXIII closure and LXXXIV activation (2026-11-27)

LXXXIII's audit establishes the RH-equivalent uniform endpoint-multiplier
criterion and matching exponential type `Theta−1/2`. The equality is a
classical zero-abscissa consequence in this formulation; it does not prove RH
or claim novelty. LXXXIV returns to Hilbert–Pólya construction and asks
whether the derivative-sample obstruction survives every equivalent
renorming of the existing Weil completion. See `research/CAMPAIGN-83.md` and
`research/CAMPAIGN-84.md`.

## LXXXIV closure and LXXXV activation (2026-11-27)

LXXXIV proves that equivalent renormings cannot bound the derivative samples
excluded by B3-03, using the local-isometry structure of the Weil completion.
The prior-art audit finds Hermite interpolation in squared de Branges spaces,
but no zeta-specific arithmetic compression bridge. LXXXV investigates that
bridge with explicit hypotheses and operator identity. See
`research/operators/B3-04-equivalent-renorming-obstruction.md` and
`research/CAMPAIGN-85.md`.

### LXXXV checkpoint — standard Hermite theorem obstruction

Goncalves–Littmann's higher-order interpolation theorem forces uniformly
separated nodes under its standard bounded-derivative hypotheses. Selberg's
odd-multiplicity count gives at least `c T log T` distinct zeta ordinates,
so those hypotheses cannot hold on the full zeta node set. This excludes one
standard de Branges route, not all nonuniform jet sampling. Doubling-phase
de Branges theory supports nonuniform value sampling, but supplies no
higher-jet Weil bridge. See
`research/operators/B3-05-separation-obstruction-to-zeta-hermite-sampling.md`.

### LXXXV checkpoint — doubling-phase density and multiplicity audit

`research/operators/B3-06-doubling-phase-density-gap.md` checks the exact
Marzo–Nitzan–Olsen value-sampling hypotheses. A logarithmic phase weight has
the right centered density scale, but the theorem needs uniform translated
interval densities, while Riemann–von Mangoldt counts multiplicity and the
candidate nodes are distinct. Under RH plus simplicity the centered density
is at the critical threshold, outside the strict sufficient direction. This
does not disprove actual sampling; it leaves higher jets and Weil compression
unresolved. This was followed by a canonical-system audit of multiplicities and the arithmetic
compression gap.

## LXXXV closure and LXXXVI activation (2026-11-27)

LXXXV closed within the bounded direct Hermite-sampling/Weil-compression
investigation; this does not rule out all nonuniform jet spaces. The
canonical-system audit found established shifted-xi operators for positive
shifts, while direct substitution at the critical endpoint degenerates to a
real-entire function. LXXXVI now asks whether a renormalized operator limit
exists and whether it can be linked to the arithmetic Weil form. See
`research/CAMPAIGN-85-CLOSURE.md`, `research/operators/B3-07-shifted-xi-canonical-system-endpoint.md`,
and `research/CAMPAIGN-86.md`.

### LXXXVI checkpoint — B3-08 model-space limit (2026-11-27)

Under RH, the shifted-xi inner functions converge locally uniformly to `1`,
so the corresponding model-space projections in common `H^2(C+)` converge
strongly to zero. The kernels scaled by `1/omega`, however, converge to an
explicit positive-semidefinite kernel involving `xi'/xi`. This supplies a
candidate renormalized RKHS; no operator convergence or arithmetic
compression is established. See
`research/operators/B3-08-model-space-collapse-and-rescaled-kernel.md`.

### LXXXVI checkpoint — B3-09 zero-measure operator model (2026-11-27)

Under RH, the even Hadamard product identifies the rescaled kernel with a
Cauchy-transform RKHS for the signed zero-counting measure, with analytic
multiplicities as atom weights. Real-coordinate multiplication is
self-adjoint and has the distinct signed ordinates as simple eigenvalues.
This is a zero-defined conditional model, not an RH proof; the arithmetic
Weil compression remains unproved. See
`research/operators/B3-09-nevanlinna-kernel-and-zero-measure.md`.

### LXXXVI checkpoint — B3-10 arithmetic transport (2026-11-27)

The limit-kernel RKHS is unitarily equivalent to Suzuki's global Weil
completion through the weighted zero-sampling map and a Cauchy transform.
This explicitly transports the local inverse-compression identity and its
domains to the endpoint RKHS. It is the existing RH-conditional,
zero-defined model in a new representation, not a strong-resolvent limit of
the positive-shift operators. Next: eigenvalue-counting measure convergence
and the multiplicity audit. See
`research/operators/B3-10-arithmetic-compression-transport.md`.

### LXXXVI checkpoint — B3-11 spectral counting-measure limit (2026-11-27)

Under RH, `A^omega` zeros are simple spectra of self-adjoint extensions for
positive shifts and converge locally as zero divisors to the critical xi
zeros. Hurwitz gives vague convergence of the eigenvalue-counting measures,
including multiplicities as cluster masses. It does not give
strong-resolvent convergence, and the scalar endpoint operator still has
simple eigenspaces. See
`research/operators/B3-11-shifted-spectrum-vague-limit.md`.

## LXXXVI closure and LXXXVII activation (2026-11-27)

LXXXVI closes within a conditional spectral-basis strong-resolvent limit:
ordered-eigenbasis unitaries place the shifted de Branges extensions on a
common multiplicity-fiber space, and the arithmetic compression transfers
through a diagonal isometry. The limit is noncanonical and zero-dependent.
LXXXVII pivots to the Lagarias Pick criterion. B4-01 identifies the
first-order limit kernel with its classical Nevanlinna kernel; B4-02 derives
a negative witness from any hypothetical off-line zero and proves that a
finite Pick matrix alone cannot certify global positivity. See
`research/CAMPAIGN-86-CLOSURE.md`, `research/CAMPAIGN-87.md`, and the B4 notes.

## LXXXVII closure and LXXXVIII activation (2026-11-27)

LXXXVII closes within its Pick-kernel witness and generic finite-matrix
scope. B4-03 gives an explicit perturbation threshold preserving a finite
positive Pick matrix while inserting an unsampled pole; this is not an
xi-specific impossibility theorem. LXXXVIII investigates whether Suzuki's
horizontal xi shifts connect to de Bruijn-Newman heat flow. B5-01 derives
the exact multipliers `cosh(2 omega u)` and `exp(t u^2)`, with a shared
second-order term at `t=2 omega^2` but different fourth-order terms. B5-02
rules out a positive mixture over real heat times by a negative-variance
contradiction. General operator intertwiners and zero-set relations remain
open. See the LXXXVII closure, `research/CAMPAIGN-88.md`, and B4/B5 notes.

### LXXXVIII checkpoint — local zero motion

B5-03 derives the implicit zero-branch expansions at a simple zero. The
Suzuki shift and heat flow have matching quadratic displacement for
`t=2 omega^2`; their quartic displacement difference is
`F''''(r)/(12F'(r))`. A toy entire function checks the coefficient. This is
conditional on simplicity and does not establish a nonzero difference at any
xi zero. See `research/operators/B5-03-simple-zero-motion-comparison.md`.

### LXXXVIII checkpoint — multiple-zero splitting

B5-04 analyzes an order-four zero in a general analytic function. Under the
`delta=omega*x` scaling, Suzuki-shift and heat-flow perturbations converge to
different quartic polynomials with explicit simple real roots; Rouché gives
the nearby local root clusters. This is conditional and does not assert a
multiple xi zero. See `research/operators/B5-04-multiple-zero-splitting.md`.

### LXXXVIII checkpoint — normalized de Branges limit

B5-05 rescales Suzuki's imaginary component by `1/omega`. Under RH this
preserves the HB property and gives a nonzero common-`H^2` model-space limit;
the orthogonal projections converge strongly. The limiting inner function is
a Cayley transform of the Lagarias Pick function. This establishes no
operator resolvent convergence. The de Branges and model-space kernels have
different normalizations related by an explicit gauge. See
`research/operators/B5-05-normalized-debranges-pair-limit.md`.

### LXXXVIII checkpoint — Herglotz measure limit

B5-06 proves under RH that the positive atomic Herglotz measures of
`B^omega/(omega A^omega)` converge vaguely to the xi zero-divisor measure.
Local contour integrals show the total mass near a limiting zero tends to
its analytic multiplicity. No strong-resolvent conclusion follows. See
`research/operators/B5-06-h-root-measure-cluster-limit.md`.

### LXXXVIII checkpoint — Clark model identification

B5-07 identifies the alpha=-1 Clark measure of the normalized endpoint
inner function with the xi zero-divisor measure, and recovers the
RH-conditional multiplication operator already recorded in B3-09/B3-10.
This is standard Clark theory applied to the normalized pair, not an
independent operator construction. Strong-resolvent convergence of the
varying operators remains open. See
`research/operators/B5-07-clark-model-for-normalized-limit.md`.

### LXXXVIII checkpoint — canonical-system endpoint limit

B5-08 applies the classical de Branges continuity theorem to the normalized
shifted Herglotz functions. Under RH, the trace-normalized Hamiltonian
primitives and finite-interval transfer matrices converge to those of the
limit Weyl function. This concerns the rescaled de Branges pairs and is not
an identification with Suzuki's arithmetic Hamiltonian, a heat-flow
intertwiner, or global strong-resolvent convergence. See
`research/operators/B5-08-canonical-system-limit.md`.

### LXXXVIII checkpoint — Weyl quotient expansion

B5-09 computes the second-order expansions of the normalized shifted and
heat logarithmic-derivative Weyl functions. Under RH, Conrey's simple-zero
theorem and a paired Hadamard-product calculation establish the jet condition
needed by a Laurent pole test. This rules out scalar time matching through
order `omega^2` for these fixed-normalization quotients. General Weyl
transformations and intertwiners remain open. See
`research/operators/B5-09-weyl-quotient-expansion-obstruction.md`.

### LXXXVIII checkpoint — projective Weyl obstruction

B5-10 shows that the second-order Weyl mismatch grows like `log^3 y` on
`z=iy`, while the first variation of a smooth constant Möbius map is at
most quadratic in the limit quotient and grows like `log^2 y`. This rules
out that near-identity projective repair under RH; it leaves z-dependent
maps and general intertwiners open. See
`research/operators/B5-10-mobius-weyl-obstruction.md`.

### LXXXVIII checkpoint — high-energy endpoint layer

B5-11 derives a double-scaling profile at heights `exp(lambda/omega)`:
the shifted Weyl functions approach `tanh(lambda/2)` after normalization,
while the endpoint function approaches `lambda/2`. By canonical inverse
spectral theory, finite-shift Hamiltonian averages are positive definite at
the initial endpoint but degenerate as the shift vanishes; the limiting
Hamiltonian has no finite Cesaro endpoint average. This demonstrates
nonuniformity, not failure of global strong-resolvent convergence. See
`research/operators/B5-11-high-energy-boundary-layer.md`.
