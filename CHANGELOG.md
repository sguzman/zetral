# Research history

This is the chronological campaign record, not the public project overview. For the scientific scope and curated entry points, see [README.md](README.md). For current working details, see [STATE.md](STATE.md) and the latest checkpoint in [COORDINATION.md](COORDINATION.md).

## 2026-11-26 — LXXV closeout and LXXVI source audit

LXXV closed as a finite candidate at h=2.51 after the hosted exact stored-component audit passed. The audit did not independently evaluate the original Weil quadratic form. LXXVI is active to investigate that gap; its source audit identified an existing direct arithmetic Gram formula, but no comparison against the compressed entry implementation has yet been verified. See [LXXV closure](research/CAMPAIGN-75-CLOSURE.md) and [LXXVI plan/checkpoint](research/CAMPAIGN-76.md).

The first low-entry mismatch used the wrong support length. Correcting to the length-h cosine basis identifies the index-parity sectors and gives a symbolic match for the prime-power term. Direct double-precision midpoint values on that basis are within roughly 10^-12 of the compressed exact intervals, but the continuous-term identity and rigorous quadrature enclosure remain open. The earlier comparison is preserved as a failed convention check. See the direct Gram derivation and diagnostics in research/positivity/U76-01-direct-arithmetic-Gram.md.

The revised support-h diagnostic completed on locked-Nix Actions run 45901442328 and runner commit f077faf81d270491db7b5a8851ec796f643717ff. Its canonical JSON matches the local result after removing runtime metadata. This is reproducibility evidence for a floating-point midpoint calculation, not a rigorous enclosure or original-form certificate. The continuous-term identity remains the next mathematical target.

An analytical reduction now evaluates the constant even archimedean entry exactly and expresses its subtracted-kernel term as a closed rational part involving pi, log 2, and Catalan's constant plus a positive exponentially convergent remainder. An explicit geometric tail bound is proved. Outward-rounded evaluation and comparison to the compressed entry formula remain open; see the U76-03 checkpoint in the direct Gram note.

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
