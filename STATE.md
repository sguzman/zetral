# Research state

Date: 2026-11-25 UTC.
Active campaign: IV — Exact-local spectral certification (research/CAMPAIGN-04.md).
Standing owner authorization: choose bounded productive in-scope mathematical campaigns autonomously; preserve durable checkpoints and select next direction without routine approval. See AGENTS.md. No background execution, external submission, new expenses, access changes or mission change authorized.

Campaigns I–III concluded. Historical states and closure reports in research/CAMPAIGN-0{1,2,3}-STATE.md and -CLOSURE.md. Historical manuscript v0.2 blob aabf597901969bd2ca9d32dcfff1c894f7bef7cf remains unchanged.

Campaign III consolidated candidate results (same RH and Suzuki sampling/coercivity/compression imports):
- D01: fixed-index exact upper error O_n(X^(7/2-2m_*) log X exp(-2 pi X)); general m_*>=1 gives power 3/2, saving log X/X over v0.2.
- D02: cumulative spectral error comparable on both sides to sum of first n coordinate projection defects squared; standard trace/Ky Fan argument. Upper equality example repaired in D04 to include second positive eigenvalue.
- D03: individual spectral lower comparison and finite interpolation dual bound, proving strict separation t_(a,n)>gamma_n for every finite a>0. No matching lower asymptotic in X; coefficient growth and coercivity uncontrolled.
- D04: consolidated note research/discovery/campaign-03-spectral-estimates.md and research/CAMPAIGN-03-CLOSURE.md verified by readback; no new numerical/formal checks. Originality and independent review unresolved. Site source and README updated; deployment unverified.

Campaign IV selected because reliable finite-arithmetic-to-exact-operator estimates are a central unresolved mathematical bottleneck. Zhu arXiv:2608.24827v2 Thms 1.1,1.4 gives a finite coercivity reduction but severe pointwise-envelope size barrier; parity/normalization and whole-space bounds must be checked. Recent spectral-edge listing reports related spectral-weight results, not independently audited. These are source leads, not imported conclusions.

- C01 COMPLETE (conditional residual framework): research/certification/C01-kernel-residuals.md derives corrected kernel diagonal J(w,w)=2 Re F[v_w](w)-q(v_w,v_w)+||k_w-v_w||_q^2, matrix enclosure 0<=J-L<=G_res/kappa, and projection defect delta_gamma^2=1-m_gamma J(gamma,gamma). Full form dual residual norm equals energy error; full L2 residual gives squared error <=||r||_2^2/kappa. Parseval criterion: square summability of full Fourier residual coefficients is equivalent to operator-domain membership, with exact squared residual norm, using Suzuki Prop 6.1 form-core density checked directly. Counterexamples show zero finite Galerkin residual and finite minimum cannot certify omitted modes. Suzuki already gives the exact Galerkin error-Gram identity; corrected output residual estimates are established methods, no novelty claimed. No numerical/Lean checks, actual coercivity lower number or residual tail bound. Note kernel argument convention reversed relative to Suzuki's J_a(w,z). Proof and source record remotely verified.
- C02 READY: arithmetic coercivity and full Fourier residual tail estimates.
- C03–C05 pending.

Inherited verification limits: only five scalar Lean lemmas and three Rust baseline tests/six-root X=3 smoke checked in Campaign II. Draft PR #2 ball/full Rust verification not established; finite Fourier certification absent. Situs canonical target unavailable, Nix incomplete, Pages unverified. No duplicate ontology. Do not repeat CI troubleshooting unless directly needed and bounded.

Resume on continue: execute C02. Reopen Zhu arXiv:2608.24827v2 and the arithmetic Gram-entry derivation (literature/gram-quadrature.md, relevant primary sources). Verify normalization and whether coercivity estimates cover both parity sectors and complex functions. Derive an explicit summable bound for omitted Fourier residual coefficients c_j=<f,chi_j>-q(v,chi_j) for finite trigonometric trial v; distinguish Gram-entry quadrature errors from tail over j. Use C01.6 and verified form-core density to establish operator-domain membership if possible. If tail or full-space coercivity remains unavailable, document precise obstruction, not a false certified number. Preserve historical manuscript, avoid unrelated CI troubleshooting; then proceed to C03 conditional complex-root certification.
