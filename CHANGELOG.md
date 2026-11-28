# Research history

## 2026-11-27 — PWPB-03.10 canonical-system endpoint convention

Re-read Suzuki arXiv:2611.33001v1 §§4.2–4.3 and Proposition 7.2. Recorded
that the source's `Omega=0` transfer quotient converges to the tail Weyl
function but is not, without a boundary-triple conversion, an explicit left
boundary line for Zetral's chosen operator convention. Corrected the scope
of the open proof obligation and specified the Green-form/boundary-triple
derivation needed next. No explicit boundary condition or new operator
theorem is claimed. Details: `research/operators/B3-13-prime-defined-canonical-system.md`.

## 2026-11-27 — PWPB-03.11 candidate operator Green form

Derived the Green boundary form for `T_H=-H^{-1}Jd/da` on a tail and
classified its separated self-adjoint left-end lines as
`cos(theta)y1+sin(theta)y2=0`. The limit-point endpoint at infinity needs no
additional condition. This determines the operator-side family but not
which member yields Suzuki's global Weyl measure; the boundary-triple ratio
identification remains open. No novelty or formalization claim. Details:
`research/operators/B3-13-prime-defined-canonical-system.md`.

## 2026-11-27 — PWPB-03.12 boundary line for the global Weyl function

On the full half-line starting at zero, constructed boundary maps
`Gamma_0=y1(0)`, `Gamma_1=-y2(0)` for the candidate operator. The finite
right-end condition `y2(b)=0` gives the Weyl quotient `U12/U22`; its
limit is Suzuki's `Q_xi`. Thus the self-adjoint line `y1(0)=0` has spectral
measure `mu_xi` in boundary-triple normalization. The transfer and Green
identities are direct; standard boundary-triple theory and the analytic
source theorem are imported and not independently audited. Scalar masses
remain weights, not eigenspace multiplicities. Details:
`research/operators/B3-13-prime-defined-canonical-system.md`.

An exact `H=I` check independently confirms the boundary sign:
`tan(bz)->i` in `C_+`, matching the decaying defect-solution ratio
`-y2(0)/y1(0)=i`; the opposite sign would fail the Nevanlinna condition.
This is a convention check only, not zeta-specific evidence.

## 2026-11-27 — PWPB-03.13 scalar multiplicity obstruction

The scalar first-order eigenvalue problem with boundary line `y1(0)=0` has
eigenspaces of dimension at most one by initial-value uniqueness. Its Weyl
atoms encode analytic zero multiplicity as measure weight, not eigenspace
dimension. Matrix canonical systems are established prior art, but no
arithmetic matrix lift is supplied; the requirements for a noncircular lift
are recorded. No multiple zeta zero or novelty is claimed. Details:
`research/operators/B3-13-prime-defined-canonical-system.md`.

## 2026-11-27 — HP-02.3–.4 fixed-low pencil bounds

For `L_N=N^2+U` with one fixed uniform offset, period counting and
Borel–Cantelli give eventual `N^-3` simultaneous sine separation almost
surely without choosing each window from the ordinates. The exact
interpolation product and the Riemann–von Mangoldt upper count then imply
super-exponential growth of every fixed-low metric weight. This makes the
existing RH-conditioned normalized fixed-pair `Delta G` tail tend to zero.
The offset is not explicitly certified; the bound says nothing about moving
indices, `Delta K`, Schur coupling, high-block invertibility or arithmetic
spectral transfer. Manual derivation only, no Lean proof or novelty claim.
Details: `research/operators/HP02-fixed-low-random-window.md` and
`research/CAMPAIGN-94.md`. A follow-up uses positive-tail Cauchy–Schwarz and
Shi's least-eigenvalue product estimate. The barycentric norm and shift
products cancel exactly, giving `epsilon ||e||^2=O(N/L)=O(1/N)`; therefore
the full normalized `Delta K-z Delta G` entries tend to zero on every fixed
low corner, uniformly on compact `z`-sets. The low/high coupling remains
uncontrolled. See `research/operators/HP02-fixed-low-pencil-corner.md`.

Added `research/PAPER-PIPELINE.md` to track which consolidated results are
plausible manuscript candidates and what proof-audit, scope, and prior-art
work each still needs. It classifies HP-02.3 as supporting material rather
than a standalone paper, and identifies existing candidate manuscripts
without presenting them as verified or novel.

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
the initial endpoint but degenerate as the shift vanishes. The cited theorem
rules out a limit average for the endpoint Hamiltonian with positive
lower-right entry, but allows the same rank-one limit; endpoint commutation remains open. This
demonstrates nonuniformity, not failure of global strong-resolvent
convergence. See
`research/operators/B5-11-high-energy-boundary-layer.md`.

### LXXXVIII checkpoint — rank-one endpoint average

B5-12 applies the canonical high-energy theorem to the swapped Weyl
function `-1/m_0`, which tends to zero. Swapping the resulting Hamiltonian
average back proves that the limit system's Cesaro average tends to
`diag(1,0)`, matching the limit of the finite-shift averages. The
double-scaling tail remains nonuniform, so this does not imply global
strong-resolvent convergence. See
`research/operators/B5-12-rank-one-limit-average.md`.

### LXXXVIII checkpoint — regular-variation endpoint rate

B5-13 applies the 2025 version of Langer–Pruckner–Woracek's canonical-system
regular-variation theorem to the swapped limit Weyl function. Under RH, it
gives `integral_0^x c(t)dt ~ 4x/log^2(1/x)` and a smaller off-diagonal
primitive, sharpening the B5-12 rank-one endpoint average. This is a
classical theorem application, not a novelty claim or global operator
convergence result. See
`research/operators/B5-13-regular-variation-endpoint-rate.md`.

### LXXXVIII checkpoint — common Hardy-space Clark limit

B5-14 combines the strong projection convergence from B5-05 with Clark's
rank-one formula. After extending the Clark unitaries by `-I` on the
complements, their Cayley self-adjoint operators converge in strong
resolvent sense on one `H^2(D)`. The absence of spectral mass at infinity
is checked from the linear Herglotz coefficient. This concerns the
normalized scalar Clark models, not the original arithmetic Hamiltonians.
See `research/operators/B5-14-clark-strong-resolvent-limit.md`.

### LXXXVIII checkpoint — common shift/heat endpoint and closure

B5-15 applies the same Clark/Cayley construction to the RH-conditional
de Bruijn–Newman family. Its even paired product gives zero linear Herglotz
coefficient, and Fourier convergence gives the same endpoint inner function.
The normalized heat Clark models therefore converge in strong resolvent on
the same `H^2(D)` embedding as the shifted models. At `t=2 omega^2`, their
resolvent difference tends strongly to zero for each fixed nonreal spectral
parameter. This gives no finite-parameter intertwiner, spectral-parameter
uniformity, or original arithmetic Hamiltonian convergence. Campaign LXXXVIII
closes within this bounded scope; general intertwiners remain open. See
`research/operators/B5-15-shift-heat-common-clark-limit.md` and
`research/CAMPAIGN-88-CLOSURE.md`.

### Analytical positivity checkpoint B1-20

Combining B1-12's RH-conditional uniform logarithmic multiplier bound with
B1-09's Fourier duality yields a uniform `H^log`-dual bound for the smoothed
first-prime endpoint residual on the form-domain completion. This resolves
the apparent tension with B1-10: its Chebyshev-only estimate alone loses at
high frequencies, while B1-12 obtains a stronger bound using the zero
residues. This remains one bounded term, not positivity or coercivity of the
full Weil form. See `research/positivity/B1-20-rh-log-dual-bound.md`.

### LXXXIX activation — full-form logarithmic-domain bounds

Campaign LXXXIX begins B1-21: determine whether the remaining terms of the
direct Weil formula are uniformly bounded on the logarithmic profile domain
after the leading archimedean/first-prime cancellation. B1-20 bounds only
the first-prime residual under RH; B1-14's complete-form result is for a
fixed profile. The campaign will test componentwise bounds and explicit
high-frequency profiles, while preserving the possibility that only a
combined cancellation controls the full form. See `research/CAMPAIGN-89.md`.

### LXXXIX checkpoint — prime-power terms

B1-21a proves an unconditional `O_L(1)` bound for the prime-square and
higher-prime-power terms on all normalized paired packet profiles. For
`k>=3`, this follows by absolute convergence of the prime-power weights; for
`k=2`, the cross term samples primes in an interval of fixed multiplicative
width, controlled by Chebyshev and partial summation. The pole and
continuous-kernel terms remain open on the `H^log` unit ball. See
`research/positivity/B1-21-prime-power-log-domain-bound.md`.

### LXXXIX closure — paired-packet logarithmic bound

B1-21b bounds the continuous-kernel multiplier by `C log(2+|xi|)`, controls
the pole by the packet L² norm, and checks that the archimedean leading term
cancels the first-prime main term. With B1-20 and the unconditional
prime-power bounds, this yields a shift-uniform `H^log` upper bound for the
complete form on paired packets under RH. The result gives no positivity,
coercivity, or arbitrary-test-function estimate. LXXXIX closes only within
that scope. Campaign XC now tests whether boundedness of complete packet
values for each fixed profile is equivalent to RH. See
`research/positivity/B1-21b-log-domain-remainder-bounds.md` and
`research/CAMPAIGN-90.md`.

### XC closure and XCI activation — boundedness criterion and positivity test

B1-22 verifies `W_h=-D_phi(h)+O_g(1)` for each fixed paired profile. Hence
boundedness of complete values for every fixed profile is RH-equivalent by
B1-17's Laplace-pole argument; this is a classical-mechanism reformulation,
not a novelty claim or RH proof. Campaign XCI asks the distinct question
whether positivity alone on this restricted packet family implies RH. The
one-sided sign condition does not directly provide the two-sided boundedness
used by the pole argument. See
`research/positivity/B1-22-complete-packet-boundedness-criterion.md` and
`research/CAMPAIGN-91.md`.

### XCI closure and XCII activation — even-test reduction

B1-23 shows every real even compactly supported smooth test is exactly a
paired packet after translation, with `h=L=2A` and
`g(x)=q(x-A)/sqrt(2)`. The unrestricted packet positivity criterion is
therefore the established even-test Weil criterion (Yoshida), not a new RH
criterion. XCII asks whether a single fixed profile width, with arbitrary
separation, suffices. Recent two-interval criteria use a stronger
arbitrary-pair Cauchy–Schwarz bound and do not immediately answer this
equal-profile question. See
`research/positivity/B1-23-even-packet-Weil-criterion.md` and
`research/CAMPAIGN-92.md`.

### XCII closure and XCIII activation — fixed-width criterion and operator pivot

B1-24 proves that positivity of all equal-reflection packets at one fixed
profile width and every separation is RH-equivalent. The converse uses a
Baire-generic even profile and a Laplace-pole/Landau singularity argument;
the proof is manual, not machine checked, and is not an RH proof or a
novelty claim. See `research/positivity/B1-24-fixed-width-positivity-RH-criterion.md`
and `research/CAMPAIGN-92.md`. The next bounded investigation audits Shi's
finite Prime–Weil matrix pencil and its explicit relative prime-to-zero
transfer target, without assuming RH in any proposed arithmetic-side limit;
see `research/CAMPAIGN-93.md`. The literature check also refreshed the
external Lean proof status: the original and condensed proof versions now
have separately reported completed machine-check suites, but Zetral did not
replay either artifact. See `literature/rh-2026-verification.md`.

HP-01.1 independently rewrites the finite-zero tail control in the
reference-metric eigenbasis. The fixed-index `O_(z,w)` estimate does not give
the uniform normalized entries needed for the growing-dimensional relative
operator norm; explicit metric weights introduce resonance and conditioning
factors. A 2x2 example rules out inferring relative convergence from
unwhitened operator-norm convergence alone. This identifies the first
quantitative bottleneck, not an obstruction to the arithmetic construction.
See `research/operators/HP01-relative-tail-metric-audit.md`.

HP-01.2 proves an elementary simultaneous-resonance avoidance bound: for
`N` fixed frequencies bounded below by `gamma_*`, some `L` in `[T,2T]`
keeps every sine factor above `1/[100N(1+1/(gamma_*T))]`. The selection
depends on the frequencies. The source's product formula for the
interpolation derivative admits an abstract close-pair degeneration, so
frequency count and a positive lower frequency alone do not give metric
coercivity; this is not a claim about actual zeta gaps. Fixed-frequency
averaging removes the sine loss but does not control the `L`-dependent
interpolation derivatives. See
`research/operators/HP01-simultaneous-resonance-bound.md`.

Campaign XCIII is closed within the audit of the available fixed-index and
uncompressed estimates, not as a resolution of the arithmetic transfer
problem. Campaign XCIV now tests fixed-low-spectrum transfer by Schur
complements. HP-02.1 derives the exact finite-dimensional reduction and
constructs a 2x2 coupling example showing why low-block convergence plus
high-block resolvent control is insufficient. See
`research/CAMPAIGN-93-CLOSURE.md`, `research/CAMPAIGN-94.md`, and
`research/operators/HP02-low-window-schur-criterion.md`.

The literature refresh added Liu's arXiv:2605.17645v4 to the prior-art map.
It develops finite two-channel causal pencils and determinant-curve geometry,
while explicitly distinguishing the joint spectral curve from a fixed-
coupling spectrum and disclaiming a global zeta Hilbert–Pólya realization.
This reinforces the campaign's requirement for an actual limiting spectral
correspondence; no direct reuse or new result is claimed.

HP-02.2 inserts the source's fixed-low fourth-power tail estimate into the
Schur route: after whitening, the low tail-metric entries retain division by
the two low metric weights. This does not control those denominators,
moving high blocks, or the `Delta K` coupling and remains RH-conditioned.
No Prime–Weil low-window transfer theorem is established.
# HP-02.5 — Moving-block Schur targets (2026-11-27)

Derived a weighted high-block invertibility criterion and reduced positive-tail
low/high coupling to two explicit moving-index sums. Identified a separate
moving-row estimate for the scalar shift. The source's fixed-pair estimates do
not supply these bounds, so the result is a conditional criterion only. Paper
potential: supporting appendix lemma; not an operator construction or
standalone novelty claim. See `research/operators/HP02-moving-block-schur-target.md`.

## HP-02.6 — Scalar-shift moving-row bound (2026-11-27)

The interpolation-vector norm inequality and displacement identity bound the
weighted shift-row square sum by
`C (epsilon ||e||^2)^2/g_k * sum_(l>m)1/(g_l |gamma_l|)`. Since
`epsilon ||e||^2=O(1/N)`, growth of the inverse-metric sum slower than
`N^2 g_k` suffices. This conditional refinement does not bound that sum or
establish spectral transfer; it is potential appendix material only.

## HP-02.7 — Count-only obstruction for moving metric weights (2026-11-27)

The interpolation product shows that sparse abstract close pairs can preserve
the coarse `T log T` counting scale and almost-sure sine separation while
forcing an inverse metric weight, hence the moving sum, arbitrarily large.
This rules out deriving the needed bound from those coarse inputs alone. It
does not model actual zeta gaps. See the HP-02.7 section in
`research/operators/HP02-moving-block-schur-target.md`.

## Campaign XCIV closure and XCV activation (2026-11-27)

Closed XCIV within the audit scope: the available fixed-pair and coarse-count
estimates do not imply moving-block Schur transfer. The arithmetic operator
problem remains open. Opened XCV to audit Hedenmalm's theta differential
pencil (arXiv:2606.17494v1). HP-03.1 shows its natural gauge-weighted L2
realization fails the formal pair-symmetry identity on compactly supported
smooth functions. This does not settle the paper's identity on its smaller
zero-dependent eigenfunction span or exclude other inner products. Details:
`research/CAMPAIGN-94-CLOSURE.md` and `research/CAMPAIGN-95.md`.

## HP-03.2 — Local-weight formal-symmetry obstruction (2026-11-27)

For a general positive smooth local density `rho(x) dx`, unitary conjugation
reduces the pair symmetry condition to a differential identity whose second-
order coefficient forces `rho` to be constant. The remaining condition
requires `phi'^2-phi''` constant, contradicted by the theta kernel's
large-argument asymptotics. This is a no-go only on the common compactly
supported smooth core; the zero-defined finite span and nonlocal metrics are
untested. Manual derivation; independent audit pending. Full details in
`research/CAMPAIGN-95.md`.

## HP-03.3 — Multiplicity scope of the theta boundary problem (2026-11-27)

The source's first-order reduction and endpoint conditions yield a unique
solution direction at each zero, independently of its analytic order. The
paper itself notes this weakly supports simplicity, not as proof. Exact zero
multiplicities are not represented by geometric eigenspace dimension in the
current boundary problem; an augmented model or simplicity theorem would be
needed for that notion of correspondence. No multiple zero is asserted.

## HP-03.4 — Natural gauge-form closure (2026-11-27)

Under the unitary gauge map, the natural form `||L_phi u||²` is the standard
Dirichlet form `||Dg||²` on `H¹(R)`, hence closed with associated operator
`-d²/dx²`. Its kernel is trivial in the weighted L2 space because the formal
kernel maps to a non-integrable constant. This clarifies the domain issue but
does not realize the zeta pencil; pair symmetry still fails.

## HP-03.5 — Kernel-vector test for pair domains (2026-11-27)

For any faithful positive `H_2` metric, if the pair-symmetry identity is
required on `k=e^(-phi)`, `Dk` and `D²k`, it forces `L Dk=0`, but direct
calculation gives `L Dk=phi''k != 0`. A viable domain must exclude at least
one of these vectors or modify the identity. Hedenmalm's zero-indexed finite
span may exclude them; its density and closure are unresolved. This is a
conditional domain obstruction, not a global no-go theorem.

## HP-03.6 — Asymptotic exclusion from the zero-generated span (2026-11-27)

For each Xi zero, the upper-tail representation of Hedenmalm's eigenfunction
gives `|u_alpha/k| <= 1/(phi'(x)-|Im alpha|) -> 0` by eventual convexity of
the theta potential. Hence every finite combination in `H_finite` has ratio
to `k=e^(-phi)` tending to zero, unlike `k,Dk,D²k`. This confirms the literal
span evades HP-03.5's domain test, but says nothing about its closure or
density. Manual estimate; no novelty claim.

## HP-03.7 — Failure of the gauge-similarity metric (2026-11-27)

The metric transported by `g=e^phi u` makes `A=e^phi D e^(-phi)` formally
self-adjoint, but cannot factor through `L` because the constant gauge mode
has positive norm while `L` annihilates it. Quotienting constants does not
help: `A1=i phi'` is not constant. This rejects one natural nonlocal
construction, not all nonlocal metrics.

## HP-03.8 — Core-preserving self-adjoint obstruction (2026-11-27)

In gauge variables the theta equation is `D(A+alpha)g=0`, and the normalized
source solution satisfies `(A+alpha)g=-i`, with `g->0` at `+infinity`.
Homogenizing this affine relation suggests a rank-one correction driven by
`ell(g)=i lim_{x->+infinity}Ag(x)`, which equals 1 on those normalized
solutions. In the natural similarity metric, multiplication by `e^(-phi)`
conjugates `A` to `D`; hence `A` on `C_c^infinity` is essentially
self-adjoint. Any self-adjoint operator on that Hilbert space extending the
same core action must equal its unique closure, which is unitarily equivalent
to `D` and has no point spectrum. Thus no boundary correction preserving
that core action can add theta-zero eigenvectors. The result does not cover
different metrics or domains that do not extend this core. Manual derivation;
no formal or independent external audit. A separate algebra pass rederived
the local-weight defect, kernel-vector identity and gauge conjugation without
finding a sign error; theta derivative asymptotics and complex endpoint
hypotheses were not independently reproved.

Literature radar (2026-11-27) recorded Kim et al. arXiv:2607.24830 on
finite-element numerics for Suzuki's Weil-form operator, Liu arXiv:2605.17645
on degree-two local pencils with an explicit obstruction to descent to zeta,
and Meyer arXiv:math/0412277 on a nuclear Fréchet-space spectral model.
These sources motivate comparisons but do not provide the positive Hilbert
realization sought by HP-03. Their full claims have not been independently
audited; no novelty conclusion is drawn.

## Campaign XCV closure and XCVI activation (2026-11-27)

Closed XCV within the explicitly tested classes: positive smooth local
weights on the common core, the natural gauge graph form, the simple
similarity metric, and self-adjoint corrections preserving its essentially
self-adjoint compact core. No global nonexistence theorem or theta Hilbert
operator was obtained. Full scope and open alternatives are in
`research/CAMPAIGN-95-CLOSURE.md`. Opened XCVI/MHS-01 to test the original
nuclear Fréchet topology in Meyer's spectral interpretation for compatible
Hilbertizability, then examine weaker completions without conflating them
with the original topology. Plan: `research/CAMPAIGN-96.md`.

## MHS-01 — Original Fréchet topology is not Hilbertizable (2026-11-27)

Source audit of Meyer's quotient and dual distinguishes the induced generator
on `H^0_-` from the transpose on its continuous dual. The original space is
stated to be nuclear Fréchet and has infinitely many zero spectral values, so
it is infinite-dimensional. A compatible Hilbert topology would make it a
nuclear Banach space; its identity would be compact, contradicting
infinite-dimensionality. This is a standard topological obstruction, not a
no-go for weaker Hilbert completions or a new RH result. MHS-02 will test
whether a natural weaker completion preserves any spectrum.

## MHS-02.1 — Natural additive `L²` quotient candidate collapses (2026-11-27)

Under the unitary logarithmic/Mellin transform from `L²(dx)` to `L²(dy)`,
Meyer's zeta operator on `H_cap` becomes multiplication by
`zeta(1/2+i tau)`. A compactly supported log-coordinate test core subject to
the single moment condition `Ff(0)=0` (with `f(0)=0` automatic for these
supported tests) remains graph-dense by a remote, small-norm bump correction.
The critical-line multiplier has dense range, so
the quotient `H_-/Z H_cap` carries the zero seminorm inherited from this
particular `L²(dx)` norm. The range claim was also checked through the adjoint
kernel. This is a manual candidate pending full graph-domain and source
review, not a general Hilbert-space no-go or RH result.

## MHS-02.2–.3 — Weighted Mellin quotient candidates (2026-11-27)

Recorded two further manual candidate lemmas in `research/CAMPAIGN-96.md`.
MHS-02.2 proposes dense range and zero inherited quotient seminorm for the
family `L²(x^(2 sigma)dx/x)`, `sigma>-2`, `sigma!=1`, using translated
moment-correcting bumps. MHS-02.3 treats the pole line `sigma=1` by separating
the simple pole of `zeta(1+i tau)` and proposing a broad-bump approximation in
the mean-zero multiplier graph norm. The latter estimate is technically
delicate. Neither derivation has an independent proof audit or formal check;
they concern only these inherited quotient norms and do not obstruct other
Hilbert completions. The possible write-up status and audit prerequisites are
logged in `research/PAPER-PIPELINE.md`.

## MHS source/domain audit and MHS-02.4 (2026-11-27)

Checked the claimed source-space hypotheses against Meyer v3 §2, Theorem 3.3,
and equations (13)–(14): the multiplier identity starts in `Re(s)>1`, while
the Poisson-summation argument supplies the entire continuation for
`H_cap`. Corrected the campaign's abbreviated `H_cap` description to include
evenness. A detailed manual argument now proposes dense range for the
Mellin-induced operator in every finite integer log-Sobolev norm and real
weight, including the pole line. It uses a tempered-distribution annihilator
for non-pole weights and a scale-dependent mean-zero graph core at the pole.
This has no formal or independent external verification; it rules out only
this named norm family, not general Hilbert completions. Full derivation and
write-up disposition: `research/CAMPAIGN-96.md` and
`research/PAPER-PIPELINE.md`.

## MHS-02.5 — Polynomially moderate Mellin-density obstruction (2026-11-27)

Generalized the previous weighted/Sobolev calculation to Mellin Hilbert
norms with any measurable density `w(tau)` satisfying two-sided polynomial
bounds. The non-pole proof uses the tempered-distribution annihilator of the
single transformed `H_cap` moment condition; the pole line follows by
dominating the weighted graph norm by a sufficiently high finite Sobolev
order. The conclusion is dense range and zero inherited quotient seminorm
within this specific absolutely continuous norm class. Singular spectral
measures, super-polynomial weights and non-Mellin norms are excluded. This is
a manual derivation without formal or independent external review; no
novelty claim is made. See `research/CAMPAIGN-96.md` and the milestone entry
in `research/PAPER-PIPELINE.md`.

## MHS-03.1 — Singular diagonal-measure criterion (2026-11-27)

For the maximal multiplication model `M_zeta` on `L²(mu)`, the orthogonal
complement of its range closure is exactly the functions supported on the
zeta-zero set. A nonzero Hilbert quotient therefore requires measure atoms at
zeros. The normalized dilation generator is multiplication by the Mellin
frequency; its spectrum is `supp(mu)` and point eigenspace dimension is the
fiber dimension at each atom. An atomic measure selected from zero ordinates
and multiplicities simply imports the target data. A prime-side definition
whose atoms/support can independently be proved to match would be substantive,
but none is constructed here. The result does not establish that Meyer's
restricted `Z(H_cap)` is a graph core for this singular measure or that the
quotient generator is intertwined with multiplication by frequency. This is
a scoped standard spectral-theorem calculation, not a new operator or
novelty claim. See
`research/CAMPAIGN-96.md` and the paper-pipeline milestone log.

## MHS-03.2 — Zero-dependent Hilbert completion benchmark (2026-11-27)

Assuming RH, define a finite atomic measure on the distinct zero ordinates with
weights `exp(-gamma^2)` and map Meyer test functions to their Mellin values
there. A finite-measure annihilator argument proves compact `H_cap` tests are
dense in `L²(mu)`; the descended quotient seminorm therefore has this atomic
space as its Hausdorff completion. Normalized dilation extends to the
self-adjoint multiplication operator with spectrum the distinct ordinates.
This explicitly closes the graph-core/intertwining gap for this
zero-dependent scalar model, but it assumes RH, imports the zero set, and
does not capture unknown multiplicities. Meyer Corollary 4.2 and the
repository's B3-09/B5-07 are close prior art; no novelty claim or independent
operator is asserted. Full derivation is in `research/CAMPAIGN-96.md`.

## Campaign XCVII opened — prolate-to-Weil eigenvector bridge (2026-11-27)

Opened a bounded operator investigation motivated by Connes's 2026 RH survey
and the Connes–Consani–Moscovici finite-prime spectral triples. Derived the
general residual/gap estimate for a simple compact-resolvent ground state and
the exact growth of Mellin evaluation norms on expanding logarithmic windows.
Together they give the sufficient scale needed to transfer a trial-vector
approximation to local-uniform transform convergence. A two-level closing-gap
example shows that Rayleigh energy convergence alone cannot control the
eigenvector. Specialization to the Weil-form family, parity, and boundary
normalization are open; no determinant convergence or RH result is claimed.
See `research/CAMPAIGN-97.md` and `research/BACKLOG.md`.

## MHS-03.3 scoped result — reciprocal-xi positive kernel (2026-11-27)

Applied Sra's positive reciprocal-xi density to its cyclic GNS representation:
the Stone generator is multiplication by the real variable, has full purely
absolutely continuous spectrum, and has no eigenvalues. This rules out that
specific positive kernel as a direct discrete Hilbert–Pólya operator while
leaving analytic-continuation/resonance approaches open. The cited density
theorem is not a prime-side construction and its proof uses zero-divisor
information plus finite verified input. Full scope and caveats are recorded
in `research/CAMPAIGN-96.md`.

## XCVII PWPB-02 — prolate candidate Hilbert-norm limit (2026-11-27)

Under the stated `O(lambda^-2)` uniform prolate-to-Hermite approximation,
the zero-extended candidate `k_lambda=E(h_lambda)` converges to
`k=E(h)` in `L²(du/u)` at rate `O(lambda^-1/2)`. The derivation splits the
divisor sum at `nu=lambda` and explicitly bounds the Gaussian tail
`nu>lambda`; this term is absent from the survey's displayed finite-sum
pointwise estimate but is exponentially small and does not change its
convergence scale. Combining this Hilbert-norm estimate with PWPB-01 gives
locally uniform Mellin-transform convergence at rate `O(lambda^(b-1/2))` on
each closed strip `|Re s|<=b<1/2`. The normalized candidate has a nonzero
limit. No comparison with the true Weil-form ground eigenvector, finite-truncation
control, spectral gap, or determinant convergence is established. See
`research/CAMPAIGN-97.md`.

## XCVII literature audit and PWPB-03 pivot (2026-11-27)

A targeted literature refresh found Andrews–Connes–La Gatta,
arXiv:2611.13129v1, a direct and materially stronger 2026 treatment of the
same prolate-to-Weil ground-state bridge. Under its lower Fuchs-ladder
hypothesis and windowed Weil positivity, it proves quantitative convergence
of the ground state to prolate and Hermite targets; the all-window positivity
input is RH-equivalent. Its conditional positivity program reduces to a
finite transition-and-pole Schur complement whose sign remains open. Mori's
unconditional bottom-eigenvalue upper bounds and Lean upper estimate do not
provide a lower spectral gap. Consequently PWPB-02 is recorded only as a
minor manual tail-correction/source-audit milestone, not a standalone paper
result or novelty claim. PWPB-03 now audits the lower-ladder and Schur-block
barriers for a noncircular route. See `research/CAMPAIGN-97.md` and
`research/PAPER-PIPELINE.md`.

## XCVII PWPB-03.1 — potential RH-strength prime-sum input (2026-11-27)

Audited the first-prime main sum in §8.6 of arXiv:2611.13129v1. For
`S(X)=sum_{p<=X} log(p)log(X/p)`, exact Stieltjes partial summation gives
`S(X)=integral_2^X Theta(t)dt/t`. Its asserted square-root-scale error
`S(X)=X+O(sqrt(X)log X)` would analytically continue
`sum_p log(p)p^(-s)` into `Re(s)>1/2`; subtracting the normally convergent
prime-power terms from `-zeta'/zeta` then excludes any zero there, hence
implies RH. This is a manual implication, not a proof of RH. The source
paragraph is exploratory rather than a proved lemma, so this is logged as a
potential hidden RH-strength input, not a confirmed error. Source Eq. (7)
confirms the prime-power definition, and Proposition 8.18 explicitly leaves
the decisive Schur lower bound open; the estimate appears as strategy
discussion, not a proved lemma used to claim RH. Prior-art comparison and
any exact remainder audit remain open. Full derivation:
`research/CAMPAIGN-97.md`.

## XCVII PWPB-03.2 — uniform arithmetic Gram literature audit (2026-11-27)

Checked the new rStation working draft *Uniform prolate spaces and
multiplicity in the near-zero spectrum of the Weil form* against ACG's
open R2 problem. Independently verified the finite Mobius inverse and
fixed-product uncertainty-gap step in its canonical arithmetic Gram lemma.
This draft's growing-space result is not identified with ACG's convolved
low-mode vectors and leaves the transition/pole Schur sign open; its page
marks independent verification pending. Thus it is a relevant research
lead, not a resolution of R2 or a Zetral theorem. Next test for a
quantitatively controlled synthesis map between the two spaces. Full note:
`research/CAMPAIGN-97.md`.

## XCVII PWPB-03.3 — Mellin synthesis factorization (2026-11-27)

Derived the exact arithmetic-model transform identity
`M_s(Eh)=zeta(s+1/2)M_(s+1/2)h`. Thus, when an ACG near-self-dual vector
is exactly `E h_m`, its convolution with `e_n^*` corresponds to
`E(h_m *_x q_n)`, where `q_n(u)=u^(-1/2)e_n^*(u)`. This supplies a
candidate map, not the required uniform bounds: prolate concentration,
smallest Gram eigenvalue, complete operator residual and pole directions
remain uncontrolled. Moreover, ACG's semilocal/arithmetic identification
is open. Recorded as a research lead, not a new theorem or paper-ready
result. See `research/CAMPAIGN-97.md`.

## XCVII PWPB-03.4 — Formal RH proof and operator follow-up (2026-11-27)

Recorded the independently kernel-checked Alpöge–Claude Lean proof and
Rubinstein's independent checks of both the original and compact releases.
The theorem is Mathlib's RH statement and the checked theorem depends only on
standard Lean axioms. Rubinstein's classical exposition remains a working
draft with its central inequality reduced to thirteen classical hypotheses;
this is an exposition gap, not a kernel-check failure. The proof is not an
operator construction. Opened a source-level investigation into whether its
theta-lift/arithmetic Gram mechanism yields a self-adjoint zero-spectrum
operator. No Zetral reproduction of the Lean computations or operator result
is claimed. Sources and scope: `research/CAMPAIGN-97.md`.

## XCVII PWPB-03.5 — Comparison-operator source audit (2026-11-27)

Inspected the exact pinned compact Lean definitions of `comparisonOp` and
`star_inequality`. The former is a positive finite-dimensional operator
`c_j glue glue*`, with an exact lifted-subspace inner-product identity; the
latter is a covolume/index comparison yielding a prime-sum remainder bound.
This is a genuine arithmetic operator ingredient, but the source supplies no
zero-spectrum correspondence or common-space limit. Next audit whether its
finite determinant/Hecke-value identity admits a compatible zero-encoding
limit. Not a no-go for limits and not a novelty claim; see
`research/CAMPAIGN-97.md`.

## XCVII PWPB-03.6 — Direct determinant route falsified (2026-11-27)

The pinned source proves the exact relation
`Z_j(vartheta) det(pr U_vartheta) = C rho_vartheta^d`, with nonzero constant
and nonzero Hecke ratio; it consequently proves the comparison compression
determinant is nonzero for every admissible twist. The factors are partial
Hecke L-values at integer parameters, and there is no complex spectral
parameter or Xi continuation in the construction. This rejects the direct
claim that this determinant is a zeta-zero spectral determinant. It does not
rule out a renormalized limit or a different operator. Next seek a common-space
trace/transfer construction. See `research/CAMPAIGN-97.md`.

## MHS-03.4 — Multiplicity-jet unitarity obstruction (2026-11-27)

The checked external Lean RH theorem discharges the RH premise of Zetral's
zero-defined MHS-03.2 scalar model, while leaving it zero-dependent and
distinct-ordinate only. Derived that multiplicity-sensitive Mellin derivative
jets transform under normalized dilation by `e^(i gamma t) exp(tN)` with a
nonzero nilpotent Jordan block at a multiple zero. No positive Hilbert norm
can make that action unitary, so the direct jet-fiber repair is ruled out if
multiple zeros exist. This is a conditional, scoped obstruction, not a no-go
for other constructions or a novelty claim. See `research/CAMPAIGN-96.md`.

## XCVII PWPB-03.7 — Prime-defined canonical-system route (2026-11-27)

Audited the logical connection in Suzuki's 24 November local Weil-form paper:
its canonical Hamiltonian is recovered from kernels of arithmetic local
forms; under RH the common half-line Weyl function is `i xi'/xi`, with
atomic spectral-measure support at the distinct zero ordinates and masses
equal to analytic multiplicities. The formal RH result supplies the RH
premise at theorem level. This is a literature construction, not a Zetral
novelty claim or independent audit of Suzuki's proof. Scalar eigenspaces do
not encode analytic multiplicity. The exact operator convention was still
being audited at that checkpoint; PWPB-03.8 below records the bounded
realization audit. Full record:
`research/operators/B3-13-prime-defined-canonical-system.md`.

## XCVII PWPB-03.8 — Arithmetic Hamiltonian and operator domain pinned (2026-11-27)

Verified from Suzuki's source that the local form starts from an explicit
prime-power/archimedean Weil functional, and Theorem 6.2 recovers the
positive Hamiltonian from its RKHS kernels without zero ordinates as input.
Pinned the standard weighted canonical-system Hilbert space, maximal
differential domain, and limit-point right endpoint. The source Weyl
normalization specifies the left boundary parameter; its explicit boundary
line in this operator convention remains to derive. Its Weyl measure is
purely atomic on the distinct ordinates with analytic multiplicities as
weights. This closes the bounded source-chain identification at theorem
level, not an independent proof audit; exact operator multiplicity and
formal composition remain open. See B3-13 and Campaign XCVII.

## XCVII PWPB-03.9 — Global screw/Weyl normalization checked (2026-11-27)

Reopened Suzuki arXiv:2206.03682v4 Theorems 1.1–1.2 and checked the exact
transform signs: for the prime-defined `g=-Psi`, its Fourier–Laplace
transform is `-i Q_xi(z)/z^2` in the initial convergence half-plane. Under
RH the Krein–Langer correspondence identifies it with the global screw
function for `Q_xi=i xi'/xi`; this is the dependency used in Suzuki's 2026
Proposition 7.2. The integral itself is not claimed to converge throughout
the upper half-plane. Source-to-source audit only, not an independent proof
of either analytic theorem. The explicit left boundary line remains open;
see B3-13 and Campaign XCVII.
